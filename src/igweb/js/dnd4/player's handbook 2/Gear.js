(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Gear = types['Gear'] || (types['Gear'] = {});
  te = Gear["Drum"] = new RulesElement({
    name: "Drum",
    type: "Gear",
    id: "ID_FMP_GEAR_88",
    source: "Player's Handbook 2",
    categories: ["Drum", "ID_FMP_GEAR_88"]
  });
  byID[te.id] = te;
  
  te = Gear["Flute"] = new RulesElement({
    name: "Flute",
    type: "Gear",
    id: "ID_FMP_GEAR_89",
    source: "Player's Handbook 2",
    categories: ["Flute", "ID_FMP_GEAR_89"]
  });
  byID[te.id] = te;
  
  te = Gear["Harp"] = new RulesElement({
    name: "Harp",
    type: "Gear",
    id: "ID_FMP_GEAR_90",
    source: "Player's Handbook 2",
    categories: ["Harp", "ID_FMP_GEAR_90"]
  });
  byID[te.id] = te;
  
  te = Gear["Horn"] = new RulesElement({
    name: "Horn",
    type: "Gear",
    id: "ID_FMP_GEAR_91",
    source: "Player's Handbook 2",
    categories: ["Horn", "ID_FMP_GEAR_91"]
  });
  byID[te.id] = te;
  
  te = Gear["Lute"] = new RulesElement({
    name: "Lute",
    type: "Gear",
    id: "ID_FMP_GEAR_92",
    source: "Player's Handbook 2",
    categories: ["Lute", "ID_FMP_GEAR_92"]
  });
  byID[te.id] = te;
  
  te = Gear["Lyre"] = new RulesElement({
    name: "Lyre",
    type: "Gear",
    id: "ID_FMP_GEAR_93",
    source: "Player's Handbook 2",
    categories: ["Lyre", "ID_FMP_GEAR_93"]
  });
  byID[te.id] = te;
  
  te = Gear["Totem"] = new RulesElement({
    name: "Totem",
    type: "Gear",
    id: "ID_FMP_GEAR_87",
    source: "Player's Handbook 2",
    categories: ["Totem", "ID_FMP_GEAR_87"]
  });
  byID[te.id] = te;
  
  te = Gear["Woodwind"] = new RulesElement({
    name: "Woodwind",
    type: "Gear",
    id: "ID_FMP_GEAR_94",
    source: "Player's Handbook 2",
    categories: ["Woodwind", "ID_FMP_GEAR_94"]
  });
  byID[te.id] = te;
  
  
})(this);
