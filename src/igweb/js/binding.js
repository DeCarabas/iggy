// This is the engine that powers binding from the model to the UI.
/*global define*/
define(['jquery'], function($) {
  "use strict";

  var showZero = true; // For debugging.

  function pointValueOfScore(model, statName) {
    var rawStat = model.rawStatObject(statName);
    if (!rawStat) { return 0; }

    var score = rawStat.baseValue;
    var value = 0;
    while (score > 17) { value += 4; score -= 1; }
    while (score > 16) { value += 3; score -= 1; }
    while (score > 13) { value += 2; score -= 1; }
    while (score > 8)  { value += 1; score -= 1; }
    return value;
  }

  var special = {
    abilityScorePointValue: function (model) {
        return pointValueOfScore(model, "Strength") + 
          pointValueOfScore(model, "Dexterity") +
          pointValueOfScore(model, "Constitution") +
          pointValueOfScore(model, "Intelligence") +
          pointValueOfScore(model, "Wisdom") +
          pointValueOfScore(model, "Charisma");
    },
    strHalfLevel: function (model) {
      return model.stat("Strength modifier") + model.stat("HALF-LEVEL");
    },
    conHalfLevel: function (model) {
      return model.stat("Constitution modifier") + model.stat("HALF-LEVEL");
    },
    dexHalfLevel: function (model) {
      return model.stat("Dexterity modifier") + model.stat("HALF-LEVEL");
    },
    intHalfLevel: function (model) {
      return model.stat("Intelligence modifier") + model.stat("HALF-LEVEL");
    },
    wisHalfLevel: function (model) {
      return model.stat("Wisdom modifier") + model.stat("HALF-LEVEL");
    },
    chaHalfLevel: function (model) {
      return model.stat("Charisma modifier") + model.stat("HALF-LEVEL");
    },
    tenHalfLevel: function (model) {
      return 10 + model.stat("HALF-LEVEL");
    },
    bloodiedHP: function (model) {
      return Math.floor(model.stat("Hit Points") / 2);
    },
    surgeValue: function (model) {
      return Math.floor(model.stat("Hit Points") / 4);
    },
    passiveInsight: function (model) {
      return model.stat("Insight") + 10;
    },
    passivePerception: function (model) {
      return model.stat("Perception") + 10;
    }
  };

  function filterInt(value) {
    if(/^(\-|\+)?([0-9]+|Infinity)$/.test(value)) {
      return Number(value);
    }
    return NaN;
  }

  function bindFields(model) {
    // TODO: Stats aren't bound; need to validate integers and report
    // errors and the like. If only HTML5 <input type="number"
    // weren't so crap.
    //
    $("[data-boundText]").each(function () {
      var elem = $(this);
      elem.change(function () {
        model.override(elem.attr("data-boundStat"), elem.val());
        updateFields(model);
      });
    });

    $("[data-boundStatBase]").each(function () {
      var elem = $(this);
      elem.change(function () {
        var value = filterInt(elem.val());
        if (!isNaN(value)) {
          model.override(elem.attr("data-boundStatBase"), value);
          updateFields(model);
        }
      });
    });

    $("[data-boundChoiceCheck]").each(function () {
      var elem = $(this);

      var parts = elem.attr("data-boundChoiceCheck").split(":");
      var typeName = parts[0];
      var itemName = parts[1];

      var targetElement = model.elements.types[typeName][itemName];

      var input = elem.find("input");
      input.change(function() {
        var choices = model.getChoices(typeName);
        if (input.is(":checked")) {
          for(var i = 0; i < choices.length; i++) {
            if (choices[i].choice === targetElement) { return; }
          }
          for(var j = 0; j < choices.length; j++) {
            if (choices[j].choice === null) { 
              choices[j].choice = targetElement; 
              updateFields(model);
              return;
            }
          }
        } else {
          for(var k = 0; k < choices.length; k++) {
            if (choices[k].choice === targetElement) { 
              choices[k].choice = null;
              updateFields(model);
              return;
            }
          }
        }
      });
    });

    $("[data-boundStat],[data-special],[data-boundGrant]").each(function () {
      this.readOnly = true;
      this.disabled = true;
    });
  }

  function updateBoundChoice(element, model, onClick) {
    var elem = $(element);
    var choiceName = elem.attr("data-boundChoice") || 
                     elem.attr("data-boundChoiceMulti") || 
                     elem.attr("data-boundChoiceSpecial") || 
                     "";
      
    var hasChoice = false;
    var names = choiceName.split(',');
    for(var i = 0; i < names.length && !hasChoice; i++) {
      var choices = model.getChoices(names[i]);
      for(var j = 0; j < choices.length && !hasChoice; j++) {
        hasChoice = choices[j].choice === null;
      }
    }

    if (hasChoice) {
      elem.addClass("choiceAvailable");
      elem.click(onClick);
    } else {
      elem.removeClass("choiceAvailable");
    }
  }

  function updateBoundChoiceCheck(element, model) {
    var elem = $(element);
    var input = elem.find("input");

    var parts = elem.attr("data-boundChoiceCheck").split(':');
    var typename = parts[0];
    var itemname = parts[1];

    var targetRuleElement = model.elements.types[typename][itemname];
    if (!targetRuleElement) { throw new Error('Could not find item ' + itemname); }

    var check = false;
    var readonly = true;
    var visible = false;

    var choices = model.getChoices(typename);
    if (choices.some(function(c) { return !c.filter || c.filter(model, targetRuleElement); })) {
      // If there's at least one choice and the rule element is suitable for
      // that choice, then show the checkbox.
      //
      visible = true;

      // If any of them have this option selected, then this is checked.
      //
      check = choices.some(function (c) { return c.choice === targetRuleElement; });
      if (check) { 
        readonly = false; 
      } else {
        // Otherwise, if there are no more choices to be made, then the
        // check-box should be read-only, because you couldn't possibly pick
        // this one anyway.
        //
        readonly = choices.every(function (c) { return c.choice !== null; });
      }
    } else if (model.isGranted(targetRuleElement)) {
      // If the target element is granted somehow anyway, then this check
      // should reflect that, but read-only.
      //
      visible = true;
      check = true;
    }

    elem.css("visibility", visible ? "visible" : "hidden");
    input.prop('checked', check);
    input.prop('disabled', readonly);
  }

  function updateBoundGrant(element, model) {
    var elem = $(element);
    var grants = model.getGrantsByType(elem.attr("data-boundGrant"));

    var result = "";
    grants.forEach(function (grant) {
      if (result.length === 0) {
        result = grant.name;
      } else {
        result = result + ", " + grant.name;
      }
    });

    elem.val(result);
  }

  function updateBoundStat(element, model) {
    var value;
    var elem = $(element);
    var mod = elem.attr("data-statMod");
    if (mod) {
      var stat = model.rawStatObject(elem.attr("data-boundStat"));
      value = stat ? stat.getModifier(mod) : 0;
    } else {
      value = model.stat(elem.attr("data-boundStat"));
    }

    if (value !== 0 || showZero) {
      elem.val(value);
    } else {
      elem.val("");
    }
  }

  function updateBoundStatBase(element, model) {
    var elem = $(element);

    var stat = model.rawStatObject(elem.attr("data-boundStatBase"));
    var value = stat ? stat.baseValue : 0;

    elem.val(value);
  }

  function updateShowValueIf(element, model) {
    var elem = $(element);
    
    var parts = elem.attr("data-showValueIf").split(":");
    var typeName = parts[0];
    var itemName = parts[1];

    var targetElement = model.elements.types[typeName][itemName];

    elem.css('visibility', (model.isGranted(targetElement)) ? 'visible' : 'hidden');
  }

  function updateFields(model) {
    $("[data-boundChoice]:visible").each(function() {
      updateBoundChoice(this, model);
    });
    $("[data-boundChoiceMulti]:visible").each(function() {
      updateBoundChoice(this, model);
    });
    $("[data-boundChoiceSpecial]:visible").each(function() {
      updateBoundChoice(this, model);
    });
    $("[data-boundChoiceCheck]").each(function() {
      updateBoundChoiceCheck(this, model);
    });
    $("[data-boundStat]:visible").each(function () {
      updateBoundStat(this, model);
    });
    $("[data-boundStatBase]:visible").each(function () {
      updateBoundStatBase(this, model);
    });
    $("[data-special]:visible").each(function () {
      var elem = $(this);
      elem.val(special[elem.attr("data-special")](model));
    });
    $("[data-boundText]:visible").each(function () {
      var elem = $(this);
      elem.val(model.stat(elem.attr("data-boundText")) || "");
    });
    $("[data-boundGrant]:visible").each(function () {
      updateBoundGrant(this, model);
    });
    $("[data-showValueIf]").each(function () {
      updateShowValueIf(this, model);
    });    
  }

  return {
    bindFields: bindFields,
    updateFields: updateFields
  };
});
