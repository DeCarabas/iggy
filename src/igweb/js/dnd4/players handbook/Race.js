define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Race = types['Race'] || (types['Race'] = {});
  te = Race["Dragonborn"] = new engine.RulesElement({
    name: "Dragonborn",
    type: "Race",
    id: "ID_FMP_RACE_1",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/race.aspx?id=1",
    categories: ["Dragonborn", "ID_FMP_RACE_1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_DRAGONBORN"]);
      model.statadd("Speed", 6);
      model.statadd("Average Height", "6' 2\"-6' 8\"");
      model.statadd("Average Weight", "220-320 lb.");
      model.statadd("Size", "Medium");
    }
  });
  byID[te.id] = te;
  
  te = Race["Dwarf"] = new engine.RulesElement({
    name: "Dwarf",
    type: "Race",
    id: "ID_FMP_RACE_2",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/race.aspx?id=2",
    categories: ["Dwarf", "ID_FMP_RACE_2"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_DWARF"]);
      model.statadd("Speed", 5);
      model.statadd("Average Height", "4' 3\"-4' 9\"");
      model.statadd("Average Weight", "160-220 lb.");
      model.statadd("Size", "Medium");
      model.select('Race Ability Bonus', 1, {
        filter: function(model, element) { return (element.hasCategory("Strength") || element.hasCategory("Wisdom")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Race["Eladrin"] = new engine.RulesElement({
    name: "Eladrin",
    type: "Race",
    id: "ID_FMP_RACE_3",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/race.aspx?id=3",
    categories: ["Eladrin", "ID_FMP_RACE_3"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_ELADRIN"]);
      model.statadd("Speed", 6);
      model.statadd("Average Height", "5' 5\"-6'1\"");
      model.statadd("Average Weight", "130-180 lb.");
      model.statadd("Size", "Medium");
      model.select('Race Ability Bonus', 1, {
        filter: function(model, element) { return (element.hasCategory("Charisma") || element.hasCategory("Dexterity")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Race["Elf"] = new engine.RulesElement({
    name: "Elf",
    type: "Race",
    id: "ID_FMP_RACE_4",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/race.aspx?id=4",
    categories: ["Elf", "ID_FMP_RACE_4"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_ELF"]);
      model.statadd("Speed", 7);
      model.statadd("Average Height", "5' 4\"-6'0\"");
      model.statadd("Average Weight", "130-170 lb.");
      model.statadd("Size", "Medium");
      model.select('Race Ability Bonus', 1, {
        filter: function(model, element) { return (element.hasCategory("Intelligence") || element.hasCategory("Wisdom")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Race["Half-Elf"] = new engine.RulesElement({
    name: "Half-Elf",
    type: "Race",
    id: "ID_FMP_RACE_6",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/race.aspx?id=6",
    categories: ["Half-Elf", "ID_FMP_RACE_6"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_HALF-ELF"]);
      model.statadd("Speed", 6);
      model.statadd("Average Height", "5'5\"-6'2\"");
      model.statadd("Average Weight", "130-190 lb.");
      model.statadd("Size", "Medium");
      model.select('Language', 1, {
        filter: function(model, element) { return element.hasCategory("Starting"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Race["Halfling"] = new engine.RulesElement({
    name: "Halfling",
    type: "Race",
    id: "ID_FMP_RACE_5",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/race.aspx?id=5",
    categories: ["Halfling", "ID_FMP_RACE_5"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_HALFLING"]);
      model.statadd("Speed", 6);
      model.statadd("Average Height", "3' 10\"-4' 2\"");
      model.statadd("Average Weight", "75-85 lb.");
      model.statadd("Size", "Small");
      model.select('Race Ability Bonus', 1, {
        filter: function(model, element) { return (element.hasCategory("Charisma") || element.hasCategory("Constitution")); }
      });
      model.select('Language', 1, {
        filter: function(model, element) { return element.hasCategory("Starting"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Race["Human"] = new engine.RulesElement({
    name: "Human",
    type: "Race",
    id: "ID_FMP_RACE_7",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/race.aspx?id=7",
    categories: ["Human", "ID_FMP_RACE_7"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_HUMAN"]);
      model.statadd("Speed", 6);
      model.statadd("Average Height", "5' 6\"-6'2\"");
      model.statadd("Average Weight", "135-220 lb.");
      model.statadd("Size", "Medium");
      model.select('Race Ability Bonus', 1);
      model.select('Language', 1, {
        filter: function(model, element) { return element.hasCategory("Starting"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Race["Tiefling"] = new engine.RulesElement({
    name: "Tiefling",
    type: "Race",
    id: "ID_FMP_RACE_8",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/race.aspx?id=8",
    categories: ["Tiefling", "ID_FMP_RACE_8"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_TIEFLING"]);
      model.statadd("Speed", 6);
      model.statadd("Average Height", "5' 6\"-6' 2\"");
      model.statadd("Average Weight", "140-230 lb.");
      model.statadd("Size", "Medium");
      model.select('Language', 1, {
        filter: function(model, element) { return element.hasCategory("Starting"); }
      });
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
