define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Race = types['Race'] || (types['Race'] = {});
  te = Race["Githzerai"] = new engine.RulesElement({
    name: "Githzerai",
    type: "Race",
    id: "ID_FMP_RACE_18",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/race.aspx?id=18",
    categories: ["Githzerai", "ID_FMP_RACE_18"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_GITHZERAI"]);
      model.statadd("Speed", 6);
      model.statadd("Average Height", "6'0\"-6'5\"");
      model.statadd("Average Weight", "160-190 lb.");
      model.statadd("Size", "Medium");
      model.select('Race Ability Bonus', 1, {
        filter: function(model, element) { return (element.hasCategory("Dexterity") || element.hasCategory("Intelligence")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Race["Minotaur"] = new engine.RulesElement({
    name: "Minotaur",
    type: "Race",
    id: "ID_FMP_RACE_24",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/race.aspx?id=24",
    categories: ["Minotaur", "ID_FMP_RACE_24"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_MINOTAUR"]);
      model.statadd("Speed", 6);
      model.statadd("Average Height", "7'1\"-7'5\"");
      model.statadd("Average Weight", "320-350 lb.");
      model.statadd("Size", "Medium");
      model.select('Race Ability Bonus', 1, {
        filter: function(model, element) { return (element.hasCategory("Constitution") || element.hasCategory("Wisdom")); }
      });
      model.select('Language', 1, {
        filter: function(model, element) { return element.hasCategory("Starting"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Race["Shardmind"] = new engine.RulesElement({
    name: "Shardmind",
    type: "Race",
    id: "ID_FMP_RACE_49",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/race.aspx?id=49",
    categories: ["Shardmind", "ID_FMP_RACE_49"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_SHARDMIND"]);
      model.statadd("Speed", 6);
      model.statadd("Average Height", "5' 9\"-6' 2\"");
      model.statadd("Average Weight", "180-230 lb.");
      model.statadd("Size", "Medium");
      model.select('Race Ability Bonus', 1, {
        filter: function(model, element) { return (element.hasCategory("Charisma") || element.hasCategory("Wisdom")); }
      });
      model.select('Language', 1, {
        filter: function(model, element) { return element.hasCategory("Starting"); }
      });
      model.select('Racial Trait', 1, {
        filter: function(model, element) { return element.hasCategory("Skill Bonus"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Race["Wilden"] = new engine.RulesElement({
    name: "Wilden",
    type: "Race",
    id: "ID_FMP_RACE_44",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/race.aspx?id=44",
    categories: ["Wilden", "ID_FMP_RACE_44"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_WILDEN"]);
      model.statadd("Speed", 6);
      model.statadd("Average Height", "5'6\"-5'9\"");
      model.statadd("Average Weight", "140-170 lb.");
      model.statadd("Size", "Medium");
      model.select('Race Ability Bonus', 1, {
        filter: function(model, element) { return (element.hasCategory("Constitution") || element.hasCategory("Dexterity")); }
      });
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
