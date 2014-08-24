(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Deity = types['Deity'] || (types['Deity'] = {});
  te = Deity["Avandra"] = new RulesElement({
    name: "Avandra",
    type: "Deity",
    id: "ID_FMP_DEITY_1",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=1",
    categories: ["Avandra", "ID_FMP_DEITY_1"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_DOMAIN_2"]);
      model.grant(elements.id["ID_FMP_DOMAIN_10"]);
      model.grant(elements.id["ID_FMP_DOMAIN_16"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["Bahamut"] = new RulesElement({
    name: "Bahamut",
    type: "Deity",
    id: "ID_FMP_DEITY_2",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=2",
    categories: ["Bahamut", "ID_FMP_DEITY_2"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_DOMAIN_11"]);
      model.grant(elements.id["ID_FMP_DOMAIN_12"]);
      model.grant(elements.id["ID_FMP_DOMAIN_20"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["Corellon"] = new RulesElement({
    name: "Corellon",
    type: "Deity",
    id: "ID_FMP_DEITY_3",
    source: "Player's Handbook,Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=3",
    categories: ["Corellon", "ID_FMP_DEITY_3"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_DOMAIN_1"]);
      model.grant(elements.id["ID_FMP_DOMAIN_22"]);
      model.grant(elements.id["ID_FMP_DOMAIN_33"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["Erathis"] = new RulesElement({
    name: "Erathis",
    type: "Deity",
    id: "ID_FMP_DEITY_4",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=4",
    categories: ["Erathis", "ID_FMP_DEITY_4"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_DOMAIN_3"]);
      model.grant(elements.id["ID_FMP_DOMAIN_4"]);
      model.grant(elements.id["ID_FMP_DOMAIN_12"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["Ioun"] = new RulesElement({
    name: "Ioun",
    type: "Deity",
    id: "ID_FMP_DEITY_5",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=5",
    categories: ["Ioun", "ID_FMP_DEITY_5"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_DOMAIN_9"]);
      model.grant(elements.id["ID_FMP_DOMAIN_13"]);
      model.grant(elements.id["ID_FMP_DOMAIN_22"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["Kord"] = new RulesElement({
    name: "Kord",
    type: "Deity",
    id: "ID_FMP_DEITY_6",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=6",
    categories: ["Kord", "ID_FMP_DEITY_6"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_DOMAIN_23"]);
      model.grant(elements.id["ID_FMP_DOMAIN_24"]);
      model.grant(elements.id["ID_FMP_DOMAIN_32"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["Melora"] = new RulesElement({
    name: "Melora",
    type: "Deity",
    id: "ID_FMP_DEITY_7",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=7",
    categories: ["Melora", "ID_FMP_DEITY_7"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_DOMAIN_14"]);
      model.grant(elements.id["ID_FMP_DOMAIN_21"]);
      model.grant(elements.id["ID_FMP_DOMAIN_33"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["Moradin"] = new RulesElement({
    name: "Moradin",
    type: "Deity",
    id: "ID_FMP_DEITY_8",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=8",
    categories: ["Moradin", "ID_FMP_DEITY_8"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_DOMAIN_4"]);
      model.grant(elements.id["ID_FMP_DOMAIN_8"]);
      model.grant(elements.id["ID_FMP_DOMAIN_20"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["Pelor"] = new RulesElement({
    name: "Pelor",
    type: "Deity",
    id: "ID_FMP_DEITY_9",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=9",
    categories: ["Pelor", "ID_FMP_DEITY_9"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_DOMAIN_11"]);
      model.grant(elements.id["ID_FMP_DOMAIN_14"]);
      model.grant(elements.id["ID_FMP_DOMAIN_26"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["Sehanine"] = new RulesElement({
    name: "Sehanine",
    type: "Deity",
    id: "ID_FMP_DEITY_11",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=11",
    categories: ["Sehanine", "ID_FMP_DEITY_11"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_DOMAIN_15"]);
      model.grant(elements.id["ID_FMP_DOMAIN_18"]);
      model.grant(elements.id["ID_FMP_DOMAIN_28"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["The Raven Queen"] = new RulesElement({
    name: "The Raven Queen",
    type: "Deity",
    id: "ID_FMP_DEITY_10",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=10",
    categories: ["The Raven Queen", "ID_FMP_DEITY_10"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_DOMAIN_6"]);
      model.grant(elements.id["ID_FMP_DOMAIN_9"]);
      model.grant(elements.id["ID_FMP_DOMAIN_34"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
