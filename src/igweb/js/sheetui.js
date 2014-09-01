//
// Character builder UI
//
define(['jquery', './binding', './log'],function($, binding, log) {
  "use strict";

  var topOfPage = $("#sheetHeader").height(); // For magical alignment.

  var chooseUI;
  var uiStack = [];
  var visibleUI;

  function getTitleString(title) {
    title = title.toLowerCase();
    var article = 'a';

    if ((title[0] === 'a') || 
        (title[0] === 'e') || 
        (title[0] === 'i') || 
        (title[0] === 'o') ||
        (title[0] === 'u'))
    {
      article = 'an';
    }

    return article + " " + title;
  }

  function getAdapterForChoice(choice) {
    return {
      applySelection: function(selection) {
        choice.choice = selection;
      },
      getDetailUrl: function(context) {        
        var url = context
          ? context.compendiumUrl
          : null;
        
        return url || 'about/'+choice.type+'.html';
      },
      getGroups: function() {
        return [{
          title: null,
          items: (choice)
            ? choice.getValidElements().map(function(re) {
              return { text: re.name, context: re };
            })
          : []
        }];
      },
      getInitialSelection: function() {
        return choice.choice;
      }
    };
  };

  function getAdapterForMultipleChoices(type, choices) {
    return {
      applySelection: function(selection) { },
      getDetailUrl: function(context) {
        var url = null;
        if (context) {
          url = context.choice
            ? context.choice.compendiumUrl
            : null;
        }

        return url || 'about/'+type+'.html';
      },
      getGroups: function() {
        var groups = choices.reduce(function (map, choice) {
            var groupName = choice.name || choice.type;
            var list = map[groupName] || (map[groupName] = []);
            list.push(choice);
            return map;
        }, {});

        return Object.keys(groups).map(function (type) {
          return {
            title: type,
            items: groups[type].map(function(choice) {
              var item;
              if (choice.choice) {
                item = {
                  text: choice.choice.name
                };
              } else {
                item = {
                  text: "Choose " + getTitleString(choice.type) + "...",
                  extraClass: "available",
                  click: function multiChoiceItemClick() {
                    chooseUI.show(choice.type, getAdapterForChoice(choice));
                  }
                };
              }

              item.context = choice;
              return item;
            })
          };
        });
      },
      getInitialSelection: function() { }
    };
  };

  function ChoiceUI(model, element) {
    this._model = model;
    this._rootElement = $(element);

    this._chooseTitle = this._rootElement.find(".chooseTitle");
    this._listTarget = this._rootElement.find(".elementList");
    this._detailTarget = this._rootElement.find(".elementDetail");
    this._whatButton = this._rootElement.find(".whatButton");
    this._whatButton.click(function() { this.updateDetailTarget(null); }.bind(this));

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
    applySelection: function applySelection() { // OVERRIDE?
      this._adapter.applySelection(this._selected);
      binding.updateFields(this._model);
      this.hide();
    },
    hide: function () {
      // Must do this before calling restoreFunc so we don't get bogus entries in the stack.
      visibleUI = null; 
      var restoreFunc = uiStack.pop();
      if (restoreFunc) {
        restoreFunc();
      } else {
        this._rootElement.hide();
        this.visible = false;
      }
    },
    push: function() {
      // Stack-capture the current adapter and title.
      var adapter = this._adapter;
      var title = this._title;
      uiStack.push(function() { this.show(title, adapter); }.bind(this));
    },
    show: function (title, adapter) {
      if (visibleUI) { visibleUI.push(); }

      this._adapter = adapter;
      this._title = title;

      this.updateTitle();

      this._rootElement.show();
      this._rootElement.offset({ top: topOfPage, left: 0 });
      visibleUI = this;

      this.visible = true;

      this._selected = adapter.getInitialSelection();

      this.update();
      binding.updateFields(this._model);
    },
    update: function () {
      var that = this;

      this._listTarget.empty();
      this._adapter.getGroups().forEach(function (group) {
        var targetDiv = $("<div class='choiceGroup'></div>");
        if (group.title) {
          var header = $("<h2>"+group.title+"</h2>");
          targetDiv.append(header);
        }
        group.items.forEach(function (item, i) {
          var row = $("<div class='choiceRow'></div>");
          row.addClass((i % 2 === 0) ? "evenRow" : "oddRow");
          if (item.extraClass) { row.addClass(item.extraClass); }
          row.text(item.text);

          row.click(function () {
            that.updateDetailTarget(that._adapter.getDetailUrl(item.context));
            that._selected = item.context;
            
            that._listTarget.find(".selectedRow").removeClass('selectedRow');
            row.addClass('selectedRow');
            
            if (item.click) { item.click(); }
          });

          if (that._selected === item.context) {
            row.addClass('selectedRow');
          }

          targetDiv.append(row);
        });
        
        that._listTarget.append(targetDiv);
      });
      
      that.updateDetailTarget(that._adapter.getDetailUrl(that._selected));
    },
    updateDetailTarget: function updateDetailTarget(url) {
      log.log("Choice: Setting detail URL to '" + url + "'");
      this._detailTarget.html('<iframe src="'+url+'" width="100%" height="100%" />');
    },
    updateTitle: function updateTitle() {
      var atitle = getTitleString(this._title);

      this._chooseTitle.html("<h1>Choose " + atitle + "</h1>");
      this._whatButton.html("<a><i>What's " + atitle + "?</i></a>");
    }
  };

  function setupUI(model) {
    chooseUI = new ChoiceUI(model, $("#chooseControl"));
    $("[data-boundChoice]:visible").each(function () {
      var elem = $(this);
      var type = elem.attr("data-boundChoice");

      elem.click(function() { 
        var choices = model.getChoices(type);
        chooseUI.show(choices[0].type, getAdapterForChoice(choices[0])); 
      });
    });

    $("[data-boundChoiceMulti]:visible").each(function () {
      var elem = $(this);
      var type = elem.attr("data-boundChoiceMulti");

      elem.click(function() { 
        var choices = model.getChoices(type);
        chooseUI.show(type, getAdapterForMultipleChoices(type, choices)); 
      });
    });


    binding.bindFields(model);
    binding.updateFields(model);
  }

  return {
    setupUI: setupUI
  };
});

