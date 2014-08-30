//
// Character builder UI
//
define(['jquery', './binding'],function($, binding) {
  "use strict";

  var topOfPage = $("#sheetHeader").height(); // For magical alignment.

  var chooseUI;
  var selectedUI;

  function ChoiceUI(model, element) {
    this._model = model;
    this._rootElement = $(element);

    this._listTarget = this._rootElement.find(".elementList");
    this._detailTarget = this._rootElement.find(".elementDetail");

    this._rootElement.find(".uiButton").click(function() {
      this.hide();
    }.bind(this));

    this._rootElement.hide();
    this.visible = false;
  }
  ChoiceUI.prototype = {
    hide: function () {
      if (this.visible) {
        this._rootElement.hide();
        this.visible = false;
        selectedUI = null;
      }
    },
    show: function (type) {
      if (!this.visible) {
        if (selectedUI && selectedUI.hide) { selectedUI.hide(); }
        this._rootElement.show();
        this._rootElement.offset({ top: topOfPage, left: 0 });
        selectedUI = this;

        this.visible = true;

        this.update(type);
        binding.updateFields(this._model);
      }
    },
    update: function (type) {
      var that = this;
      var setDetail = false;

      this._listTarget.empty();
      var choices = this._model.getChoices(type);
      if (choices.length > 0) {
        var choice = choices[0];

        choice.getValidElements().forEach(function (re, i) {
          var row = $("<div class='choiceRow'></div>");
          row.addClass((i % 2 === 0) ? "evenRow" : "oddRow");
          row.text(re.name);

          row.mouseenter(function () {
            if (!row.hasClass('selectedRow')) { row.addClass('rowHover'); }
          });
          row.mouseleave(function () { 
            row.removeClass('rowHover'); 
          });
          row.click(function () {
            that._detailTarget.html('<iframe src="' + re.compendiumUrl + '" width="100%" height="100%" />');
            choice.choice = re; // TODO: Make this less live?

            that._listTarget.find(".selectedRow").removeClass('selectedRow');

            row.addClass('selectedRow');
            row.removeClass('rowHover');

            binding.updateFields(that._model);
          });

          if (choice.choice === re) {
            row.addClass('selectedRow');
            that._detailTarget.html('<iframe src="' + re.compendiumUrl + '" width="100%" height="100%" />');
            setDetail = true;
          }

          that._listTarget.append(row);
        });
      }

      if (!setDetail) { this._detailTarget.empty(); }
    }
  };

  function setupUI(model) {
    chooseUI = new ChoiceUI(model, $("#chooseControl"));
    $("[data-boundChoice]:visible").each(function () {
      var elem = $(this);
      var type = elem.attr("data-boundChoice");
      elem.click(function() { chooseUI.show(type); });
    });
    binding.bindFields(model);
    binding.updateFields(model);
  }

  return {
    setupUI: setupUI
  };
});

