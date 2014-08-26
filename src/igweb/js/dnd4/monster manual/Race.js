define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Race = types['Race'] || (types['Race'] = {});
  te = Race["Bugbear"] = new engine.RulesElement({
    name: "Bugbear",
    type: "Race",
    id: "ID_FMP_RACE_10",
    source: "Monster Manual",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/race.aspx?id=10",
    categories: ["Bugbear", "ID_FMP_RACE_10"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_BUGBEAR"]);
      model.statadd("Speed", 6);
      model.statadd("Average Height", "6'10\"-7'2\"");
      model.statadd("Average Weight", "250-300 lb.");
      model.statadd("Size", "Medium");
    }
  });
  byID[te.id] = te;
  
  te = Race["Githyanki"] = new engine.RulesElement({
    name: "Githyanki",
    type: "Race",
    id: "ID_FMP_RACE_17",
    source: "Monster Manual",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/race.aspx?id=17",
    categories: ["Githyanki", "ID_FMP_RACE_17"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_GITHYANKI"]);
      model.statadd("Speed", 6);
      model.statadd("Average Height", "6'0\"-6'5\"");
      model.statadd("Average Weight", "160-190 lb.");
      model.statadd("Size", "Medium");
    }
  });
  byID[te.id] = te;
  
  te = Race["Goblin"] = new engine.RulesElement({
    name: "Goblin",
    type: "Race",
    id: "ID_FMP_RACE_21",
    source: "Monster Manual",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/race.aspx?id=21",
    categories: ["Goblin", "ID_FMP_RACE_21"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_GOBLIN"]);
      model.statadd("Speed", 6);
      model.statadd("Average Height", "3'4\"-3'8\"");
      model.statadd("Average Weight", "40-55 lb.");
      model.statadd("Size", "Small");
    }
  });
  byID[te.id] = te;
  
  te = Race["Hobgoblin"] = new engine.RulesElement({
    name: "Hobgoblin",
    type: "Race",
    id: "ID_FMP_RACE_22",
    source: "Monster Manual",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/race.aspx?id=22",
    categories: ["Hobgoblin", "ID_FMP_RACE_22"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_HOBGOBLIN"]);
      model.statadd("Speed", 6);
      model.statadd("Average Height", "6'1\"-6'5\"");
      model.statadd("Average Weight", "190-240 lb.");
      model.statadd("Size", "Medium");
    }
  });
  byID[te.id] = te;
  
  te = Race["Kobold"] = new engine.RulesElement({
    name: "Kobold",
    type: "Race",
    id: "ID_FMP_RACE_23",
    source: "Monster Manual",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/race.aspx?id=23",
    categories: ["Kobold", "ID_FMP_RACE_23"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_KOBOLD"]);
      model.statadd("Speed", 6);
      model.statadd("Average Height", "3'6\"-4'0\"");
      model.statadd("Average Weight", "60-75 lb.");
      model.statadd("Size", "Small");
    }
  });
  byID[te.id] = te;
  
  te = Race["Orc"] = new engine.RulesElement({
    name: "Orc",
    type: "Race",
    id: "ID_FMP_RACE_25",
    source: "Monster Manual",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/race.aspx?id=25",
    categories: ["Orc", "ID_FMP_RACE_25"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_ORC"]);
      model.statadd("Speed", 6);
      model.statadd("Average Height", "6'0\"-6'5\"");
      model.statadd("Average Weight", "200-230 lb.");
      model.statadd("Size", "Medium");
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
