(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Deity = types['Deity'] || (types['Deity'] = {});
  te = Deity["Aurom"] = new RulesElement({
    name: "Aurom",
    type: "Deity",
    id: "ID_FMP_DEITY_144",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=144",
    categories: ["Aurom", "ID_FMP_DEITY_144"]
  });
  byID[te.id] = te;
  
  te = Deity["Haramathur"] = new RulesElement({
    name: "Haramathur",
    type: "Deity",
    id: "ID_FMP_DEITY_145",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=145",
    categories: ["Haramathur", "ID_FMP_DEITY_145"]
  });
  byID[te.id] = te;
  
  te = Deity["Laeris"] = new RulesElement({
    name: "Laeris",
    type: "Deity",
    id: "ID_FMP_DEITY_146",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=146",
    categories: ["Laeris", "ID_FMP_DEITY_146"]
  });
  byID[te.id] = te;
  
  te = Deity["Nusemnee"] = new RulesElement({
    name: "Nusemnee",
    type: "Deity",
    id: "ID_FMP_DEITY_147",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=147",
    categories: ["Nusemnee", "ID_FMP_DEITY_147"]
  });
  byID[te.id] = te;
  
  te = Deity["Sagawehn"] = new RulesElement({
    name: "Sagawehn",
    type: "Deity",
    id: "ID_FMP_DEITY_148",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=148",
    categories: ["Sagawehn", "ID_FMP_DEITY_148"]
  });
  byID[te.id] = te;
  
  
})(this);
