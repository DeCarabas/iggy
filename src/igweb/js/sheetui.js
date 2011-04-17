//
// Character builder UI
//
(function (global, undefined) {

  var showZero = true; // For debugging.
  var topOfPage = $("#sheetHeader").height(); // For magical alignment.

  var model = new Model();

  var uiElements = {};
  var selectedUI;

  function ChoiceUI(model, element) {
    this._model = model;
    this._rootElement = $(element);

    this._listTarget = $(global.window.document.getElementById(this._rootElement.attr("data-listTarget")));
    this._detailName = this._rootElement.attr("data-detailTarget");
    this._detailTarget = $(global.window.document.getElementById(this._detailName));

    this._choiceType = this._rootElement.attr("data-boundChoice");

    this._rootElement.hide();
    this.visible = false;
  };
  ChoiceUI.prototype = {
    hide: function () {
      this._rootElement.hide();
      this.visible = false;
    },
    show: function () {
      if (!this.visible) {
        if (selectedUI && selectedUI.hide) { selectedUI.hide(); }
        this._rootElement.show();
        this._rootElement.offset({ top: topOfPage, left: 0 });
        selectedUI = this;

        this.visible = true;
        this.update();
        updateFields();
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
          row.addClass((i % 2 == 0) ? "evenRow" : "oddRow");
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

            updateFields();
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

  function setupUI() {
    var uis = $(".chooseUI");
    uis.each(function () {
      uiElements[this.id] = new ChoiceUI(model, this);
    });
  }

  var special = {
    strHalfLevel: function () {
      return model.stat("Strength modifier") + model.stat("HALF-LEVEL");
    },
    conHalfLevel: function () {
      return model.stat("Constitution modifier") + model.stat("HALF-LEVEL");
    },
    dexHalfLevel: function () {
      return model.stat("Dexterity modifier") + model.stat("HALF-LEVEL");
    },
    intHalfLevel: function () {
      return model.stat("Intelligence modifier") + model.stat("HALF-LEVEL");
    },
    wisHalfLevel: function () {
      return model.stat("Wisdom modifier") + model.stat("HALF-LEVEL");
    },
    chaHalfLevel: function () {
      return model.stat("Charisma modifier") + model.stat("HALF-LEVEL");
    },
    tenHalfLevel: function () {
      return 10 + model.stat("HALF-LEVEL");
    },
    bloodiedHP: function () {
      return Math.floor(model.stat("Hit Points") / 2);
    },
    surgeValue: function () {
      return Math.floor(model.stat("Hit Points") / 4);
    },
    passiveInsight: function () {
      return model.stat("Insight") + 10;
    },
    passivePerception: function () {
      return model.stat("Perception") + 10;
    }
  };

  function updateFields() {
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
      elem.val(special[elem.attr("data-special")]());
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

  function bindFields() {
    // TODO: Stats aren't bound; need to validate integers and report
    // errors and the like. If only HTML5 <input type="number"
    // weren't so crap.
    //
    $("[data-boundText]").each(function () {
      var elem = $(this);
      elem.change(function () {
        model.override(elem.attr("data-boundStat"), elem.val());
        updateFields();
      });
    });

    $("[data-boundStat],[data-special],[data-boundGrant]").each(function () {
      this.readOnly = true;
    });
  };

  /* Haxors for now: initial setup to test binding */
  model.grant(global.elements.types["Level"]["1"]);
  //model.grant(global.elements.types["Race"]["Elf"]);
  //model.grant(global.elements.types["Class"]["Ranger"]);
  model.getChoices("Class")[0].choice = global.elements.types["Class"]["Ranger"];

  model.rawStatObject("dex").baseValue = 18;
  model.rawStatObject("str").baseValue = 13;
  model.rawStatObject("wis").baseValue = 13;
  model.rawStatObject("con").baseValue = 10;
  model.rawStatObject("int").baseValue = 10;
  model.rawStatObject("cha").baseValue = 8;

  bindFields();
  setupUI();

  uiElements["chooseClass"].show();
})(this);


