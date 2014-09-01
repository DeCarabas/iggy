define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Feat = types['Feat'] || (types['Feat'] = {});
  te = Feat["Delthuntle Sailor"] = new engine.RulesElement({
    name: "Delthuntle Sailor",
    type: "Feat",
    id: "ID_FMP_FEAT_1071",
    source: "Dragon Magazine 370",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1071",
    categories: ["Delthuntle Sailor", "ID_FMP_FEAT_1071"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_LANGUAGE_6"]);
      model.statadd("Acrobatics Misc", function() { /* while aboard a ship */ return 2; });
      model.statadd("Athletics Misc", function() { /* while aboard a ship */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Earthspur Deepminer"] = new engine.RulesElement({
    name: "Earthspur Deepminer",
    type: "Feat",
    id: "ID_FMP_FEAT_1073",
    source: "Dragon Magazine 370",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1073",
    categories: ["Earthspur Deepminer", "ID_FMP_FEAT_1073"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_LANGUAGE_18"]);
      model.statadd("resist:necrotic", 2, "resist");
      model.statadd("resist:necrotic", 3, "resist");
      model.statadd("resist:necrotic", 5, "resist");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Moray Militia"] = new engine.RulesElement({
    name: "Moray Militia",
    type: "Feat",
    id: "ID_FMP_FEAT_1075",
    source: "Dragon Magazine 370",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1075",
    categories: ["Moray Militia", "ID_FMP_FEAT_1075"]
  });
  byID[te.id] = te;
  
  te = Feat["New Sarshel Enforcer"] = new engine.RulesElement({
    name: "New Sarshel Enforcer",
    type: "Feat",
    id: "ID_FMP_FEAT_1074",
    source: "Dragon Magazine 370",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1074",
    categories: ["New Sarshel Enforcer", "ID_FMP_FEAT_1074"],
    rules: function(model) {
      model.statadd("Initiative Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Snowdown Courier"] = new engine.RulesElement({
    name: "Snowdown Courier",
    type: "Feat",
    id: "ID_FMP_FEAT_1076",
    source: "Dragon Magazine 370",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1076",
    categories: ["Snowdown Courier", "ID_FMP_FEAT_1076"],
    rules: function(model) {
      model.statadd("Streetwise Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Yuirwood Feyfriend"] = new engine.RulesElement({
    name: "Yuirwood Feyfriend",
    type: "Feat",
    id: "ID_FMP_FEAT_1072",
    source: "Dragon Magazine 370",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1072",
    categories: ["Yuirwood Feyfriend", "ID_FMP_FEAT_1072"],
    rules: function(model) {
      model.statadd("Arcana Misc", 2, "Feat");
      model.statadd("Saving Throws", function() { /* against charm effects */ return 2; }, "Feat");
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
