define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Role = types['Role'] || (types['Role'] = {});
  te = Role["Controller"] = new engine.RulesElement({
    name: "Controller",
    type: "Role",
    id: "ID_FMP_ROLE_1",
    source: "Player's Handbook",
    categories: ["Controller", "ID_FMP_ROLE_1"]
  });
  byID[te.id] = te;
  
  te = Role["Defender"] = new engine.RulesElement({
    name: "Defender",
    type: "Role",
    id: "ID_FMP_ROLE_4",
    source: "Player's Handbook",
    categories: ["Defender", "ID_FMP_ROLE_4"]
  });
  byID[te.id] = te;
  
  te = Role["Leader"] = new engine.RulesElement({
    name: "Leader",
    type: "Role",
    id: "ID_FMP_ROLE_2",
    source: "Player's Handbook",
    categories: ["Leader", "ID_FMP_ROLE_2"]
  });
  byID[te.id] = te;
  
  te = Role["Striker"] = new engine.RulesElement({
    name: "Striker",
    type: "Role",
    id: "ID_FMP_ROLE_3",
    source: "Player's Handbook",
    categories: ["Striker", "ID_FMP_ROLE_3"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
