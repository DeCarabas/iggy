//
// Character builder UI
//
define(['jquery', './binding', './log'],function($, binding, log) {
  "use strict";

  var topOfPage = $("#sheetHeader").height(); // For magical alignment.

  var chooseUI;
  var selectedUI;

  function ChoiceUI(model, element) {
    this._model = model;
    this._rootElement = $(element);

    this._chooseTitle = this._rootElement.find(".chooseTitle");
    this._whatButton = this._rootElement.find(".whatButton");
    this._listTarget = this._rootElement.find(".elementList");
    this._detailTarget = this._rootElement.find(".elementDetail");

    this._rootElement.find(".okButton").click(function() {
      this.applySelection();
    }.bind(this));
    this._rootElement.find(".cancelButton").click(function() {
      this.hide();
    }.bind(this));

    this._rootElement.hide();
    this.visible = false;
  }
  ChoiceUI.prototype = {
    applySelection: function applySelection() {
      this._choice.choice = this._selected;
      binding.updateFields(this._model);
      this.hide();
    },
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

        this.updateTitle(type);
        this._whatButton.click(function() { this.updateDetailTarget(type, null); }.bind(this));

        this._rootElement.show();
        this._rootElement.offset({ top: topOfPage, left: 0 });
        selectedUI = this;

        this.visible = true;

        var choices = this._model.getChoices(type);
        this._choice = (choices.length > 0)
          ? choices[0]
          : null;
        this._selected = this._choice.choice;

        this.update();
        binding.updateFields(this._model);
      }
    },
    update: function () {
      var that = this;

      var detailUrl = null;
      this._listTarget.empty();

      if (that._choice) {
        that._choice.getValidElements().forEach(function (re, i) {
          var row = $("<div class='choiceRow'></div>");
          row.addClass((i % 2 === 0) ? "evenRow" : "oddRow");
          row.text(re.name);

          row.click(function () {
            that.updateDetailTarget(re.compendiumUrl);
            that._selected = re;

            that._listTarget.find(".selectedRow").removeClass('selectedRow');

            row.addClass('selectedRow');
          });

          if (that._selected === re) {
            row.addClass('selectedRow');
            detailUrl = re.compendiumUrl || detailUrl;
          }

          that._listTarget.append(row);
        });
      }

      that.updateDetailTarget(detailUrl);
    },
    updateDetailTarget: function updateDetailTarget(url) {
      url = url || 'about/'+this._choice.type+'.html';
      log.log("Choice: Setting detail URL to '" + url + "'");
      this._detailTarget.html('<iframe src="'+url+'" width="100%" height="100%" />');
    },
    updateTitle: function updateTitle(type) {
      var title = type.toLowerCase();
      var article = 'a';

      if ((title[0] === 'a') || 
          (title[0] === 'e') || 
          (title[0] === 'i') || 
          (title[0] === 'o') ||
          (title[0] === 'u'))
      {
        article = 'an';
      }

      this._chooseTitle.html("<h1>Choose " + article + " " + title + "</h1>");
      this._whatButton.html("<a><i>What's " + article + " " + title + "?</i></a>");
    }
  };

  function setupUI(model) {
    chooseUI = new ChoiceUI(model, $("#chooseControl"));
    $("[data-boundChoice]:visible").each(function () {
      var elem = $(this);
      var types = elem.attr("data-boundChoice").split(',');

      elem.click(function() { chooseUI.show(types[0]); });
    });
    binding.bindFields(model);
    binding.updateFields(model);
  }

  return {
    setupUI: setupUI
  };
});

