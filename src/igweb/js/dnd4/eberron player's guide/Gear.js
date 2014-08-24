(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Gear = types['Gear'] || (types['Gear'] = {});
  te = Gear["Arcane Signet Ring"] = new RulesElement({
    name: "Arcane Signet Ring",
    type: "Gear",
    id: "ID_FMP_GEAR_102",
    source: "Eberron Player's Guide",
    categories: ["Arcane Signet Ring", "ID_FMP_GEAR_102"]
  });
  byID[te.id] = te;
  
  te = Gear["Hunter's Kit"] = new RulesElement({
    name: "Hunter's Kit",
    type: "Gear",
    id: "ID_FMP_GEAR_103",
    source: "Eberron Player's Guide",
    categories: ["Hunter's Kit", "ID_FMP_GEAR_103"]
  });
  byID[te.id] = te;
  
  te = Gear["Identification Papers with Portrait"] = new RulesElement({
    name: "Identification Papers with Portrait",
    type: "Gear",
    id: "ID_FMP_GEAR_105",
    source: "Eberron Player's Guide",
    categories: ["Identification Papers with Portrait", "ID_FMP_GEAR_105"]
  });
  byID[te.id] = te;
  
  te = Gear["Inquisitive's Kit"] = new RulesElement({
    name: "Inquisitive's Kit",
    type: "Gear",
    id: "ID_FMP_GEAR_106",
    source: "Eberron Player's Guide",
    categories: ["Inquisitive's Kit", "ID_FMP_GEAR_106"]
  });
  byID[te.id] = te;
  
  te = Gear["Letter of Marque"] = new RulesElement({
    name: "Letter of Marque",
    type: "Gear",
    id: "ID_FMP_GEAR_107",
    source: "Eberron Player's Guide",
    categories: ["Letter of Marque", "ID_FMP_GEAR_107"]
  });
  byID[te.id] = te;
  
  te = Gear["Spellshard"] = new RulesElement({
    name: "Spellshard",
    type: "Gear",
    id: "ID_FMP_GEAR_108",
    source: "Eberron Player's Guide",
    categories: ["Spellshard", "ID_FMP_GEAR_108"]
  });
  byID[te.id] = te;
  
  te = Gear["Standard Identification Papers"] = new RulesElement({
    name: "Standard Identification Papers",
    type: "Gear",
    id: "ID_FMP_GEAR_104",
    source: "Eberron Player's Guide",
    categories: ["Standard Identification Papers", "ID_FMP_GEAR_104"]
  });
  byID[te.id] = te;
  
  te = Gear["Travel Papers"] = new RulesElement({
    name: "Travel Papers",
    type: "Gear",
    id: "ID_FMP_GEAR_109",
    source: "Eberron Player's Guide",
    categories: ["Travel Papers", "ID_FMP_GEAR_109"]
  });
  byID[te.id] = te;
  
  
})(this);
