define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Deity = types['Deity'] || (types['Deity'] = {});
  te = Deity["Asmodeus"] = new engine.RulesElement({
    name: "Asmodeus",
    type: "Deity",
    id: "ID_FMP_DEITY_15",
    source: "Dungeon Master's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=15",
    categories: ["Asmodeus", "ID_FMP_DEITY_15"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_DOMAIN_3"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_29"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["Bane"] = new engine.RulesElement({
    name: "Bane",
    type: "Deity",
    id: "ID_FMP_DEITY_16",
    source: "Dungeon Master's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=16",
    categories: ["Bane", "ID_FMP_DEITY_16"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_DOMAIN_22"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_32"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["Gruumsh"] = new engine.RulesElement({
    name: "Gruumsh",
    type: "Deity",
    id: "ID_FMP_DEITY_20",
    source: "Dungeon Master's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=20",
    categories: ["Gruumsh", "ID_FMP_DEITY_20"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_DOMAIN_7"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_24"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["Lolth"] = new engine.RulesElement({
    name: "Lolth",
    type: "Deity",
    id: "ID_FMP_DEITY_22",
    source: "Dungeon Master's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=22",
    categories: ["Lolth", "ID_FMP_DEITY_22"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_DOMAIN_5"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_28"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["Tharizdun"] = new engine.RulesElement({
    name: "Tharizdun",
    type: "Deity",
    id: "ID_FMP_DEITY_100",
    source: "Dungeon Master's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=100",
    categories: ["Tharizdun", "ID_FMP_DEITY_100"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_DOMAIN_7"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_17"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["Tiamat"] = new engine.RulesElement({
    name: "Tiamat",
    type: "Deity",
    id: "ID_FMP_DEITY_43",
    source: "Dungeon Master's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=43",
    categories: ["Tiamat", "ID_FMP_DEITY_43"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_DOMAIN_25"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_31"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["Torog"] = new engine.RulesElement({
    name: "Torog",
    type: "Deity",
    id: "ID_FMP_DEITY_99",
    source: "Dungeon Master's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=99",
    categories: ["Torog", "ID_FMP_DEITY_99"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_DOMAIN_8"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_27"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["Vecna"] = new engine.RulesElement({
    name: "Vecna",
    type: "Deity",
    id: "ID_FMP_DEITY_98",
    source: "Dungeon Master's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=98",
    categories: ["Vecna", "ID_FMP_DEITY_98"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_DOMAIN_13"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_30"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["Zehir"] = new engine.RulesElement({
    name: "Zehir",
    type: "Deity",
    id: "ID_FMP_DEITY_46",
    source: "Dungeon Master's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=46",
    categories: ["Zehir", "ID_FMP_DEITY_46"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_DOMAIN_5"]);
      model.grant(model.elements.id["ID_FMP_DOMAIN_19"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
