//
// Character builder UI
//
define(['jquery', './binding'],function($, binding) {
  "use strict";

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
    binding.bindFields(model);
    binding.updateFields(model);
  }

  return {
    setupUI: setupUI,
    wizardNext: wizardNext,
  };
});

