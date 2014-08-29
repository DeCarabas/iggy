//
// Character builder UI
//
define(['jquery'],function($) {
  "use strict";

  var showZero = true; // For debugging.
  var topOfPage = $("#sheetHeader").height(); // For magical alignment.

  var uiElements = {};
  var wizardFirst;
  var selectedUI;

  function ChoiceUI(model, element) {
    this._model = model;
    this._rootElement = $(element);

    this._listTarget = $(window.document.getElementById(this._rootElement.attr("data-listTarget")));
    this._detailName = this._rootElement.attr("data-detailTarget");
    this._detailTarget = $(window.document.getElementById(this._detailName));

    this._choiceType = this._rootElement.attr("data-boundChoice");

    this._rootElement.find("[data-command=nextStep]").click(wizardNext);

    if (this._rootElement.hasClass("wizardFirst")) { wizardFirst = this; }

    this._rootElement.hide();
    this.visible = false;
  }
  ChoiceUI.prototype = {
    getNext: function () {
      var nextChoice = this._rootElement.attr("data-nextChoice");
      return nextChoice ? uiElements[nextChoice] : null;
    },
    hide: function () {
      if (this.visible) {
        this._rootElement.hide();
        this.visible = false;
        selectedUI = null;
      }
    },
    shouldSkip: function () {
      var choices = this._model.getChoices(this._choiceType);
      for (var i = 0; i < choices.length; i++) {
        if (!choices[i].choice) { return false; }
      }
      return true;
    },
    show: function () {
      if (!this.visible) {
        if (selectedUI && selectedUI.hide) { selectedUI.hide(); }
        this._rootElement.show();
        this._rootElement.offset({ top: topOfPage, left: 0 });
        selectedUI = this;

        this.visible = true;
        this.update();
        updateFields(this._model);
      }
    },
    update: function () {
      var that = this;

      this._listTarget.empty();
      var choices = this._model.getChoices(this._choiceType);
      if (choices.length > 0) {
        var choice = choices[0];

        choice.getValidElements().forEach(function (re, i) {
          var row = $("<div class='choiceRow'></div>");
          row.addClass((i % 2 === 0) ? "evenRow" : "oddRow");
          row.text(re.name);

          row.mouseenter(function () {
            if (!row.hasClass('selectedRow')) { row.addClass('rowHover'); }
          });
          row.mouseleave(function () { row.removeClass('rowHover'); });
          row.click(function () {
            that._detailTarget.html('<iframe src="' + re.compendiumUrl + '" width="100%" height="100%" />');
            choice.choice = re; // TODO: Make this less live?

            that._listTarget.find(".selectedRow").removeClass('selectedRow');

            row.addClass('selectedRow');
            row.removeClass('rowHover');

            updateFields(that._model);
          });

          if (choice.choice === re) {
            row.addClass('selectedRow');
            that._detailTarget.html('<iframe src="' + re.compendiumUrl + '" width="100%" height="100%" />');
          }

          that._listTarget.append(row);
        });
      }
    }
  };

  function wizardNext() {
    if (!selectedUI) {
      wizardFirst.show();
      if (!wizardFirst.shouldSkip()) { return; }
    }

    var nextChoice = selectedUI.getNext();
    while (nextChoice && nextChoice.shouldSkip()) {
      nextChoice = nextChoice.nextChoice();
    }
    if (nextChoice) {
      nextChoice.show();
    } else {
      selectedUI.hide();
    }
  }

  function setupUI(model) {
    var uis = $(".chooseUI");
    uis.each(function () {
      uiElements[this.id] = new ChoiceUI(model, this);
    });
    updateFields(model);
  }

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

  function updateFields(model) {
    $("[data-boundChoice]:visible").each(function() {
      var elem = $(this);
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
      } else {
        elem.removeClass("choiceAvailable");
      }
    });
    $("[data-boundStat]:visible").each(function () {
      var value;
      var elem = $(this);
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
      var elem = $(this);
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
    });
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

    $("[data-boundStat],[data-special],[data-boundGrant]").each(function () {
      this.readOnly = true;
    });
  }

  return {
    bindFields: bindFields,
    setupUI: setupUI,
    wizardNext: wizardNext,
  };
});

