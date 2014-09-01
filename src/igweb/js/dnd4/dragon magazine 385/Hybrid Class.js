define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Hybrid_Class = types['Hybrid Class'] || (types['Hybrid Class'] = {});
  te = Hybrid_Class["Hybrid Assassin"] = new engine.RulesElement({
    name: "Hybrid Assassin",
    type: "Hybrid Class",
    id: "ID_FMP_HYBRID_CLASS_641",
    source: "Dragon Magazine 385",
    categories: ["Hybrid Assassin", "ID_FMP_HYBRID_CLASS_641"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_HYBRID_ASSASSIN"]);
      model.select('Power', 1, "Power At-Will 1", {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
      model.statadd("_CLASSNAME", "ID_FMP_HYBRID_CLASS_641");
      model.statadd("_LEVEL-ONE-HPS", 5);
      model.statadd("_PER-LEVEL-HPS", 2);
      model.statadd("Healing Surges", 3);
      model.select('class feature', 1, "Hybrid Assassin", {
        filter: function(model, element) { return element.hasCategory("ID_FMP_HYBRID_CLASS_641 Defense"); }
      });
      model.select('Skill Training', 1, "Hybrid Assassin", {
        filter: function(model, element) { return element.hasCategory("ID_FMP_HYBRID_CLASS_641"); }
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
