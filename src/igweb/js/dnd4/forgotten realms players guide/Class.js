define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Class = types['Class'] || (types['Class'] = {});
  te = Class["Swordmage"] = new engine.RulesElement({
    name: "Swordmage",
    type: "Class",
    id: "ID_FMP_CLASS_53",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/class.aspx?id=53",
    categories: ["Swordmage", "ID_FMP_CLASS_53"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_SWORDMAGE"]);
      model.select('Power', 2, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
      model.statadd("_CLASSNAME", "ID_FMP_CLASS_53");
      model.statadd("_LEVEL-ONE-HPS", 15);
      model.statadd("_PER-LEVEL-HPS", 6);
      model.statadd("Healing Surges", 8);
      model.select('Build', 1, {
        optional: true,
        filter: function(model, element) { return element.hasCategory(model['class'].id); }
      });
      model.statadd("Will Defense Class Bonus", 2);
      model.select('Skill Training', 3, {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_53"); }
      });
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
