define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Race = types['Race'] || (types['Race'] = {});
  te = Race["Bladeling"] = new engine.RulesElement({
    name: "Bladeling",
    type: "Race",
    id: "ID_FMP_RACE_38",
    source: "Manual of the Planes",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/race.aspx?id=38",
    categories: ["Bladeling", "ID_FMP_RACE_38"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_BLADELING"]);
      model.statadd("Speed", 6);
      model.statadd("Average Height", "5'8\"-6'4\"");
      model.statadd("Average Weight", "210-310 lb.");
      model.statadd("Size", "Medium");
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
