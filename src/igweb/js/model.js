//
// This contains the implementation of the rules engine.
//

"use strict";
(function(global, undefined) {

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
      this.id = RulesElement._uniqueId || (RulesElement._uniqueId = 0);
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

  var Choice = function(model, type, number, options) {
    var that = this;
    Object.keys(options || {}).forEach(function (key) { that[key] = options[key]; });
    this.type = type;
    this.number = number;
    this.model = model;
    this.id = Choice._uniqueId || (Choice._uniqueId = 0);
    Choice._uniqueId++;
  };
  Choice.prototype = {
    getValidElements: function() {
      var that = this;
      var r = [];
      var eot = (global.elements && global.elements.types && global.elements.types[this.type]);
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

  var Model = function() {
    this._granted = {};
    this._stats = {};
    this._trackingInfo = null;
    this._choices = {};
  };
  Model.prototype = {
    alias: function (stat, alias) {
      this._stats[alias] = this._stats[stat] || (this._stats[stat] = new Stat());
    },
    getChoices: function(type) {
      var tcs = this._choices[type] || {};
      var cs = [];

      Object.keys(tcs).forEach(function(c) { cs.push(tcs[c]); });

      return cs;
    },
    grant: function (element) {
      if (!element) { return; }

      var oldTrackingInfo;
      var ti = this._granted[element.id];
      if (!ti) {
        oldTrackingInfo = this._trackingInfo;
        ti = this._trackingInfo = { refs: 1, undo: [] };

        if (element.rules) { element.rules(this); }

        this._granted[element.id] = this._trackingInfo;
        this._trackingInfo = oldTrackingInfo;
      } else {
        ti.refs++;
      }

      if (this._trackingInfo) {
        this._trackingInfo.undo.push(function() {
          ti.refs--; 
          if (!ti.refs) { this.remove(element); }
        });
      }
    },
    matchesCategory: function(item, catOne, catTwo) {
      return item && 
        item.matchesCategory(catOne) && 
        (!catTwo || item.matchesCategory(catTwo));
    },
    remove: function(element) {
      var tracking = this._granted[element.id];
      if (tracking) {
        tracking.refs--;
        if (tracking.refs == 0) {
          tracking.undo.forEach(function (ti) { ti(); });
          delete this._granted[element.id];
        }
      }
    },
    select: function(type, number, options) {
      var nc = new Choice(this, type, number, options);
      var ec = this._choices[type] || (this._choices[type] = {});
      ec[nc.id] = nc;

      if (this._trackingInfo) { 
        this._trackingInfo.undo.push(function () { delete ec[nc.id]; });
      }
    },
    stat: function (statName) {
      var s = this._stats[statName];
      return s ? s.getValue() : 0;
    },
    statadd: function(stat, value) {
      var s = this._stats[stat] || (this._stats[stat] = new Stat());

      var undo;
      if (typeof value === "string") {
        s.textValue = value;
        undo = function () { delete s.textValue; };
      } else {
        var mod = s.addModifier(value);
        undo = function () { s.removeModifier(mod); };
      }

      if (this._trackingInfo) { this._trackingInfo.undo.push(undo); }
    }
  };

  global.Stat = Stat;
  global.Model = Model;
  global.RulesElement = RulesElement;

}) (this);
