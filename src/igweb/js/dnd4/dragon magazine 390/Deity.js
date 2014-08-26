define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Deity = types['Deity'] || (types['Deity'] = {});
  te = Deity["Aurom"] = new engine.RulesElement({
    name: "Aurom",
    type: "Deity",
    id: "ID_FMP_DEITY_144",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=144",
    categories: ["Aurom", "ID_FMP_DEITY_144"]
  });
  byID[te.id] = te;
  
  te = Deity["Haramathur"] = new engine.RulesElement({
    name: "Haramathur",
    type: "Deity",
    id: "ID_FMP_DEITY_145",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=145",
    categories: ["Haramathur", "ID_FMP_DEITY_145"]
  });
  byID[te.id] = te;
  
  te = Deity["Laeris"] = new engine.RulesElement({
    name: "Laeris",
    type: "Deity",
    id: "ID_FMP_DEITY_146",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=146",
    categories: ["Laeris", "ID_FMP_DEITY_146"]
  });
  byID[te.id] = te;
  
  te = Deity["Nusemnee"] = new engine.RulesElement({
    name: "Nusemnee",
    type: "Deity",
    id: "ID_FMP_DEITY_147",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=147",
    categories: ["Nusemnee", "ID_FMP_DEITY_147"]
  });
  byID[te.id] = te;
  
  te = Deity["Sagawehn"] = new engine.RulesElement({
    name: "Sagawehn",
    type: "Deity",
    id: "ID_FMP_DEITY_148",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=148",
    categories: ["Sagawehn", "ID_FMP_DEITY_148"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
