define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Class = types['Class'] || (types['Class'] = {});
  te = Class["Hybrid"] = new engine.RulesElement({
    name: "Hybrid",
    type: "Class",
    id: "ID_INTERNAL_CLASS_HYBRID",
    source: "Core,Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/class.aspx?id=LASS_HYBRID",
    categories: ["Hybrid", "ID_INTERNAL_CLASS_HYBRID"],
    rules: function(model) {
      model.select('Hybrid Class', 2, "Hybrid");
      model.select('Skill Training', 3, "Hybrid", {
        filter: function(model, element) { return true /* NYI: Filter: $$HYBRID */; }
      });
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
