(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Gear = types['Gear'] || (types['Gear'] = {});
  te = Gear["Blowgun Needles"] = new RulesElement({
    name: "Blowgun Needles",
    type: "Gear",
    id: "ID_FMP_GEAR_100",
    source: "Dragon Magazine 373",
    categories: ["Blowgun Needles", "ID_FMP_GEAR_100"]
  });
  byID[te.id] = te;
  
  te = Gear["Camouflaged Clothing"] = new RulesElement({
    name: "Camouflaged Clothing",
    type: "Gear",
    id: "ID_FMP_GEAR_95",
    source: "Dragon Magazine 373",
    categories: ["Camouflaged Clothing", "ID_FMP_GEAR_95"]
  });
  byID[te.id] = te;
  
  te = Gear["Crowbar"] = new RulesElement({
    name: "Crowbar",
    type: "Gear",
    id: "ID_FMP_GEAR_96",
    source: "Dragon Magazine 373",
    categories: ["Crowbar", "ID_FMP_GEAR_96"]
  });
  byID[te.id] = te;
  
  te = Gear["Disguise Kit"] = new RulesElement({
    name: "Disguise Kit",
    type: "Gear",
    id: "ID_FMP_GEAR_97",
    source: "Dragon Magazine 373",
    categories: ["Disguise Kit", "ID_FMP_GEAR_97"]
  });
  byID[te.id] = te;
  
  te = Gear["Footpads"] = new RulesElement({
    name: "Footpads",
    type: "Gear",
    id: "ID_FMP_GEAR_98",
    source: "Dragon Magazine 373",
    categories: ["Footpads", "ID_FMP_GEAR_98"]
  });
  byID[te.id] = te;
  
  te = Gear["Glass Cutter"] = new RulesElement({
    name: "Glass Cutter",
    type: "Gear",
    id: "ID_FMP_GEAR_99",
    source: "Dragon Magazine 373",
    categories: ["Glass Cutter", "ID_FMP_GEAR_99"]
  });
  byID[te.id] = te;
  
  
})(this);
