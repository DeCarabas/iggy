// This is the engine that powers binding from the model to the UI.
define(['jquery'], function($) {
  "use strict";

  var showZero = true; // For debugging.

  var special = {
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

    $("[data-boundStat],[data-special],[data-boundGrant]").each(function () {
      this.readOnly = true;
    });
  }

  function updateBoundChoice(element, model, onClick) {
    var elem = $(element);
    var choiceName = elem.attr("data-boundChoice") || "";
      
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

  function updateFields(model) {
    $("[data-boundChoice]:visible").each(function() {
      updateBoundChoice(this, model);
    });
    $("[data-boundStat]:visible").each(function () {
      updateBoundStat(this, model);
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
  }

  return {
    bindFields: bindFields,
    updateFields: updateFields
  };
});
