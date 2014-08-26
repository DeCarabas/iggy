define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Theme = types['Theme'] || (types['Theme'] = {});
  te = Theme["Escaped Slave"] = new engine.RulesElement({
    name: "Escaped Slave",
    type: "Theme",
    id: "ID_FMP_THEME_768",
    source: "Dragon Magazine 390",
    categories: ["Escaped Slave", "ID_FMP_THEME_768"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_13431"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
