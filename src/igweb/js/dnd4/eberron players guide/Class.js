define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Class = types['Class'] || (types['Class'] = {});
  te = Class["Artificer"] = new engine.RulesElement({
    name: "Artificer",
    type: "Class",
    id: "ID_FMP_CLASS_125",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/class.aspx?id=125",
    specifics: {
        'Key Abilities': "Intelligence, Constitution, Wisdom"
      },
    categories: ["Artificer", "ID_FMP_CLASS_125"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_ARTIFICER"]);
      model.select('Power', 2, "Artificer", {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
      model.statadd("_CLASSNAME", "ID_FMP_CLASS_125");
      model.statadd("_LEVEL-ONE-HPS", 12);
      model.statadd("_PER-LEVEL-HPS", 5);
      model.statadd("Healing Surges", 6);
      model.select('Build', 1, "Artificer", {
        optional: true,
        filter: function(model, element) { return element.hasCategory(model['class'].id); }
      });
      model.statadd("Fortitude Defense Class Bonus", 1);
      model.statadd("Will Defense Class Bonus", 1);
      model.select('Skill Training', 4, "Artificer", {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_125"); }
      });
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
