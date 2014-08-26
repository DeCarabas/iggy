define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Class = types['Class'] || (types['Class'] = {});
  te = Class["Assassin"] = new engine.RulesElement({
    name: "Assassin",
    type: "Class",
    id: "ID_FMP_CLASS_466",
    source: "Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/class.aspx?id=466",
    categories: ["Assassin", "ID_FMP_CLASS_466"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_ASSASSIN"]);
      model.select('Power', 2, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
      model.statadd("_CLASSNAME", "ID_FMP_CLASS_466");
      model.statadd("_LEVEL-ONE-HPS", 10);
      model.statadd("_PER-LEVEL-HPS", 4);
      model.statadd("Healing Surges", 6);
      model.select('Build', 1, {
        optional: true,
        filter: function(model, element) { return element.hasCategory(model['class'].id); }
      });
      model.statadd("Fortitude Defense Class Bonus", 1);
      model.statadd("Will Defense Class Bonus", 1);
      model.select('Skill Training', 4, {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_466"); }
      });
      model.statadd("_WeaponsAsImplements", 1);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
