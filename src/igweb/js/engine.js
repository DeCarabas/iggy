//
// This contains the implementation of the rules engine.
//
define(['./log'],function(log) {
  "use strict";

  var Stat = function () { };
  Stat.prototype = {
    addModifier: function (value, kind) {
      this.modifiers = this.modifiers || {};
      this.nextIndex = this.nextIndex || 1;

      var index = this.nextIndex;
      this.modifiers[index] = { value: value, kind: kind };
      this.nextIndex++;

      return index;
    },
    removeModifier: function (mod) {
      if (this.modifiers) {
        delete this.modifiers[mod];
      }
    },
    getModifier: function (kind) {
      if (!this.modifiers) { return 0; }

      var mods = this.modifiers;
      var value = 0;
      Object.keys(mods).forEach(function(key) {
        var mod = mods[key];
        if (mod.kind === kind) {
          var modValue = (typeof mod.value === "function") ? mod.value() : mod.value;
          if (modValue > value) {
            value = modValue;
          }
        }
      });

      return value;
    },
    getValue: function () {
      if (this.textValue) {
        return this.textValue;
      }

      var mods = this.modifiers;
      var resultValue = this.baseValue || 0;
      var resultDictionary = {};
      Object.keys(mods || {}).forEach(function(key) {
        var modifier = mods[key];
        var value = (typeof modifier.value === "function") ? modifier.value() : modifier.value;
        if (modifier.kind) {
          if ((!resultDictionary[modifier.kind]) || Math.abs(value) > Math.abs(resultDictionary[modifier.kind])) {
            resultDictionary[modifier.kind] = value;
          }
        } else {
          resultValue += value;
        }
      });
      Object.keys(resultDictionary).forEach(function (kind) {
        resultValue += resultDictionary[kind];
      });

      return resultValue;
    }
  };

  var RulesElement = function(options) {
    var that = this;
    Object.keys(options || {}).forEach(function (key) { that[key] = options[key]; });
    if (!this.id) {
      this.id = RulesElement._uniqueId || (RulesElement._uniqueId = 1);
      RulesElement._uniqueId++;
    }
    if (this.categories) {
      var lc = {};
      this.categories.forEach(function (cat) { lc[cat] = true; });
      this.categories = lc;
    }
  };
  RulesElement.prototype = {
    hasCategory: function(category) {
      return this.categories[category];
    }
  };

  var Choice = function(model, type, name, options) {
    var that = this;
    Object.keys(options || {}).forEach(function (key) { that[key] = options[key]; });
    this.type = type;
    this.name = name;
    this.model = model;
    this.id = Choice._uniqueId || (Choice._uniqueId = 1);
    this._choice = null;
    Choice._uniqueId++;
  };
  Choice.prototype = {
    getValidElements: function() {
      var that = this;
      var r = [];
      var eot = (this.model.elements.types[this.type]);
      Object.keys(eot || {}).forEach(function(name) {
        var element = eot[name];
        if ((!that.filter || that.filter(that.model, element)) && 
            (!element.prereqs || element.prereqs(that.model))) { 
          r.push(element); 
        }
      });
      return r;
    }
  };
  Object.defineProperty(Choice.prototype, "choice", {
    get: function() { return this._choice; },
    set: function(value) {
      if (this._choice) { this.model.remove(this._choice); }
      this._choice = value;
      if (this._choice) { this.model.grant(this._choice); }
    }
  });


  var Model = function(elements) {
    this._granted = {};
    this._stats = {};
    this._trackingInfo = null;
    this._choices = {};
    this.elements = elements;
  };
  Model.prototype = {
    alias: function (stat, alias) {
      stat = stat.toLowerCase();
      alias = alias.toLowerCase();
      this._stats[alias] = this._stats[stat] || (this._stats[stat] = new Stat());
    },
    dumpChoices: function() {
      log.group("Choices");
      Object.keys(this._choices).forEach(function(choiceType) {
        log.group(choiceType);
        var choices = this._choices[choiceType];
        Object.keys(choices).forEach(function(choiceId) {
          var choice = choices[choiceId];
          var selection = (choice.choice
            ? "[" + choice.choice.type + "]:[" + choice.choice.name + "]"
            : "<null>");

          log.log("["+choice.type+"] ("+choice.name+") : " + selection);
        }.bind(this));
        log.groupEnd(choiceType);
      }.bind(this));
      log.groupEnd("Choices");
    },
    getChoices: function(type) {
      var tcs = this._choices[type];
      if (!tcs) { return []; }

      var cs = [];
      Object.keys(tcs).forEach(function(c) { cs.push(tcs[c]); });

      return cs;
    },
    getGrantsByType: function(type) {
      if (!this.elements.id) { return null; }

      var result = [];
      var grants = Object.keys(this._granted);
      for(var i = 0; i < grants.length; i++) {
        var elem = this.elements.id[grants[i]];
        if (elem && elem.type === type) { result.push(elem); }
      }

      return result;
    },
    grant: function (element) {
      if (!element) { return; }

      var oldTrackingInfo;
      var ti = this._granted[element.id];
      if (!ti) {
        var tag = "Granting [" + element.type + "]:[" + element.name + "]";
        log.group(tag);
        oldTrackingInfo = this._trackingInfo;
        ti = this._trackingInfo = { refs: 1, undo: [] };
        this._granted[element.id] = this._trackingInfo;

        if (element.rules) { element.rules(this); }

        this._trackingInfo = oldTrackingInfo;
        log.groupEnd(tag);
      } else {
        ti.refs++;
        log.log("[" + element.type + "]:[" + element.name + "] refs: " + ti.refs);
      }

      if (this._trackingInfo) {
        var that = this;
        this._trackingInfo.undo.push(function() {
          log.log("Undoing grant [" + element.type + "]:[" + element.name + "]");
          that.remove(element);
        });
      }
    },
    matchesCategory: function(item, catOne, catTwo) {
      return item && 
        item.matchesCategory(catOne) && 
        (!catTwo || item.matchesCategory(catTwo));
    },
    override: function(stat, value) {
      stat = stat.toLowerCase();
      var s = this._stats[stat] || (this._stats[stat] = new Stat());
      if (typeof value === "string") {
        s.textValue = value;
      } else {
        s.baseValue = value; // TODO: Not right, but gets me started.        
      }
    },
    rawStatObject: function(stat) {
      stat = stat.toLowerCase();
      return this._stats[stat];
    },
    remove: function(element) {
      var tracking = this._granted[element.id];
      if (tracking) {
        var tag = "Removing [" + element.type + "]:[" + element.name + "]";
        log.group(tag);
        tracking.refs--;
        log.log("[" + element.type + "]:[" + element.name + "] refs: " + tracking.refs);
        if (tracking.refs === 0) {
          tracking.undo.forEach(function (ti) { ti(); });
          delete this._granted[element.id];
        }
        log.groupEnd(tag);
      }
    },
    select: function(type, number, name, options) {
      for(var i = 0; i < number; i++) { this._select(type, name, options); }
    },
    _select: function(type, name, options) {
      var nc = new Choice(this, type, name, options);
      var ec = this._choices[type] || (this._choices[type] = {});
      ec[nc.id] = nc;

      log.log("Selecting (["+type+"]) as " + nc.id);

      if (this._trackingInfo) { 
        this._trackingInfo.undo.push(function () { 
          log.log("Undoing selection " + nc.id +" ("+type+")");
          nc.choice = null;
          delete ec[nc.id];
        });
      }
    },
    stat: function (statName) {
      statName = statName.toLowerCase();
      var s = this._stats[statName];
      return s ? s.getValue() : 0;
    },
    statadd: function(stat, value, kind) {
      stat = stat.toLowerCase();
      var s = this._stats[stat] || (this._stats[stat] = new Stat());

      var undo;
      if (typeof value === "string") {
        var previous = s.textValue;
        s.textValue = value;
        undo = function () { s.textValue = previous; };
      } else {
        var mod = s.addModifier(value, kind);
        undo = function () { s.removeModifier(mod); };
      }

      if (this._trackingInfo) { this._trackingInfo.undo.push(undo); }
    }
  };

  return {
    Stat: Stat,
    Model: Model,
    RulesElement: RulesElement
  };
});
