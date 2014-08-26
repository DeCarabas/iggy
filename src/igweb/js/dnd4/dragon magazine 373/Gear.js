define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Gear = types['Gear'] || (types['Gear'] = {});
  te = Gear["Blowgun Needles"] = new engine.RulesElement({
    name: "Blowgun Needles",
    type: "Gear",
    id: "ID_FMP_GEAR_100",
    source: "Dragon Magazine 373",
    categories: ["Blowgun Needles", "ID_FMP_GEAR_100"]
  });
  byID[te.id] = te;
  
  te = Gear["Camouflaged Clothing"] = new engine.RulesElement({
    name: "Camouflaged Clothing",
    type: "Gear",
    id: "ID_FMP_GEAR_95",
    source: "Dragon Magazine 373",
    categories: ["Camouflaged Clothing", "ID_FMP_GEAR_95"]
  });
  byID[te.id] = te;
  
  te = Gear["Crowbar"] = new engine.RulesElement({
    name: "Crowbar",
    type: "Gear",
    id: "ID_FMP_GEAR_96",
    source: "Dragon Magazine 373",
    categories: ["Crowbar", "ID_FMP_GEAR_96"]
  });
  byID[te.id] = te;
  
  te = Gear["Disguise Kit"] = new engine.RulesElement({
    name: "Disguise Kit",
    type: "Gear",
    id: "ID_FMP_GEAR_97",
    source: "Dragon Magazine 373",
    categories: ["Disguise Kit", "ID_FMP_GEAR_97"]
  });
  byID[te.id] = te;
  
  te = Gear["Footpads"] = new engine.RulesElement({
    name: "Footpads",
    type: "Gear",
    id: "ID_FMP_GEAR_98",
    source: "Dragon Magazine 373",
    categories: ["Footpads", "ID_FMP_GEAR_98"]
  });
  byID[te.id] = te;
  
  te = Gear["Glass Cutter"] = new engine.RulesElement({
    name: "Glass Cutter",
    type: "Gear",
    id: "ID_FMP_GEAR_99",
    source: "Dragon Magazine 373",
    categories: ["Glass Cutter", "ID_FMP_GEAR_99"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
