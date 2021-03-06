//
// Character builder UI
//
/*global define*/
define(['jquery', './binding', './log', './engine'],function($, binding, log, engine) {
  "use strict";

  var chooseUI;
  var abilityUI;

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

  function sortItems(items) {
    function compareString(a,b) {
      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      } else {
        return 0;
      }
    }

    items.sort(function(a,b) {
      if (a.extraClass) {
        if (b.extraClass) {
          return compareString(a.extraClass, b.extraClass);
        } else {
          return 1;
        }
      } else if (b.extraClass) {
        return -1;
      } else {
        return compareString(a.text, b.text);
      }
    });

    return items;
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
        var items = choice
          ? choice.getValidElements().map(function(re) {
              return { text: re.name, context: re };
            })
          : [];

        return [{ title: null, items: sortItems(items) }];
      },
      getInitialSelection: function() {
        return choice.choice;
      }
    };
  }

  function getAdapterForMultipleChoices(type, choices) {
    return {
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

        return Object.keys(groups).map(function (name) {
          var items = groups[name].map(function(choice) {
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
          });

          return { title: name, items: sortItems(items) };
        });
      },
      getInitialSelection: function() { }
    };
  }

  function createChoiceUI(model) {
    return {
      _model: model,
      visible: true,

      applySelection: function applySelection() { // OVERRIDE?
        this._adapter.applySelection(this._selected);
        binding.updateFields(this._model);
        this.hide();      
      },
      bindElements: function bindElements(element) {
        this._rootElement = $(element);

        this._chooseTitle = this._rootElement.find(".chooseTitle");
        this._listTarget = this._rootElement.find(".elementList");
        this._detailTarget = this._rootElement.find(".elementDetail");

        this._whatButton = this._rootElement.find(".whatButton");
        this._whatButton.click(function onWhatButtonClick() { 
          this.updateDetailTarget(null); 
        }.bind(this));

        this._okButton = this._rootElement.find(".okButton");
        this._okButton.click(function onOkButtonClick() {
          this.applySelection();
        }.bind(this));

        this._cancelButton = this._rootElement.find(".cancelButton");
        this._cancelButton.click(function onCancelButtonClick() {
          this.hide();
        }.bind(this));        
      },
      hide: function hide() {
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
        
        if (this._adapter.applySelection) {
          this._okButton.removeClass("hidden");
        } else {
          this._okButton.addClass("hidden");
        }
        
        this._rootElement.show();
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
  }

  function createAbilityUI(model) {
    var ui = createChoiceUI(model);

    ui._oldUpdate = ui.update;
    ui.update = function abilityUpdate() {
      var groups = this._adapter.getGroups();
      if (groups.length === 0) {
        // If there are no choices to be made, then we show the little bit of
        // text about ability scores because we assume that you're pretty
        // early in your character's career. Otherwise, we let the select
        // lists take over.
        //
        this._listTarget.html('<iframe src="about/abilityscore.html" width="100%" height="100%" />');
      } else {
        this._oldUpdate();
      }
    };

    return ui;
  }

  function setupUI(model) {
    // Add any special UI rules elements.
    //
    var elements = model.elements;
    var uiSpecial = elements.types["#uiSpecial"] || (elements.types["#uiSpecial"] = {});    
    var re = uiSpecial["InitialAbilityScores"] = new engine.RulesElement({
      id: '#initialAbilityScores',
      name: 'InitialAbilityScores',
      type: '#uiSpecial',
      rules: function(model) {
        model.select("#initialAbilities", 1, "Initial Ability Scores", {});
      }});
    model.elements.id[re.id] = re;

    // Grant the special UI rules.
    //
    Object.keys(uiSpecial).forEach(function(name) {
      var e = uiSpecial[name];
      model.grant(e);
    });

    // Set up the Choice UI bindings
    //
    chooseUI = createChoiceUI(model);
    chooseUI.bindElements($("#chooseControl"));
    chooseUI.hide();

    $("[data-boundChoice]").each(function () {
      var elem = $(this);
      var type = elem.attr("data-boundChoice");

      elem.click(function() {
        var choices = model.getChoices(type);
        chooseUI.show(choices[0].type, getAdapterForChoice(choices[0]));
      });
    });

    $("[data-boundChoiceMulti]").each(function () {
      var elem = $(this);
      var type = elem.attr("data-boundChoiceMulti");

      elem.click(function() {
        var choices = model.getChoices(type);
        chooseUI.show(type, getAdapterForMultipleChoices(type, choices));
      });
    });

    // Set up the Ability UI binding
    //
    abilityUI = createAbilityUI(model);
    abilityUI.bindElements($("#abilityControl"));
    abilityUI.hide();
    $("#sheetAbilityScores").click(function() {
      model.remove(model.elements.id["#initialAbilityScores"]);

      var types = [
        'Ability Increase',
        'Ability Increase (Level 4)',
        'Ability Increase (Level 8)',
        'Ability Increase (Level 14)',
        'Ability Increase (Level 18)',
        'Ability Increase (Level 24)',
        'Ability Increase (Level 28)'
      ];

      var choices = types.reduce(function(choices, type) { 
        return choices.concat(model.getChoices(type)); 
      }, []);
      abilityUI.show("Ability Scores", getAdapterForMultipleChoices('Ability Increase', choices));
    });

    binding.bindFields(model);
    binding.updateFields(model);
  }

  return {
    setupUI: setupUI
  };
});
