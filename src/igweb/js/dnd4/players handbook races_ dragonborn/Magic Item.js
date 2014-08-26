define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Arkhosian Scepter +3"] = new engine.RulesElement({
    name: "Arkhosian Scepter +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8371",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Arkhosian Scepter +3", "ID_FMP_MAGIC_ITEM_8371"],
    rules: function(model) {
      model.statadd("ID_FMP_POWER_1448:attack", 3, "Enhancement");
      model.statadd("ID_FMP_POWER_1448:damage", 3, "Enhancement");
      model.statadd("ID_FMP_ITEM_SET_39 Set Count", 1, "Arkhosian Scepter");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Arkhosian Scepter +4"] = new engine.RulesElement({
    name: "Arkhosian Scepter +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8372",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Arkhosian Scepter +4", "ID_FMP_MAGIC_ITEM_8372"],
    rules: function(model) {
      model.statadd("ID_FMP_POWER_1448:attack", 4, "Enhancement");
      model.statadd("ID_FMP_POWER_1448:damage", 4, "Enhancement");
      model.statadd("ID_FMP_ITEM_SET_39 Set Count", 1, "Arkhosian Scepter");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Arkhosian Scepter +5"] = new engine.RulesElement({
    name: "Arkhosian Scepter +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8373",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Arkhosian Scepter +5", "ID_FMP_MAGIC_ITEM_8373"],
    rules: function(model) {
      model.statadd("ID_FMP_POWER_1448:attack", 5, "Enhancement");
      model.statadd("ID_FMP_POWER_1448:damage", 5, "Enhancement");
      model.statadd("ID_FMP_ITEM_SET_39 Set Count", 1, "Arkhosian Scepter");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Arkhosian Scepter +6"] = new engine.RulesElement({
    name: "Arkhosian Scepter +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8374",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Arkhosian Scepter +6", "ID_FMP_MAGIC_ITEM_8374"],
    rules: function(model) {
      model.statadd("ID_FMP_POWER_1448:attack", 6, "Enhancement");
      model.statadd("ID_FMP_POWER_1448:damage", 6, "Enhancement");
      model.statadd("ID_FMP_ITEM_SET_39 Set Count", 1, "Arkhosian Scepter");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bloodletting Weapon +3"] = new engine.RulesElement({
    name: "Bloodletting Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8343",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Bloodletting Weapon +3", "ID_FMP_MAGIC_ITEM_8343"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bloodletting Weapon +4"] = new engine.RulesElement({
    name: "Bloodletting Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8344",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Bloodletting Weapon +4", "ID_FMP_MAGIC_ITEM_8344"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bloodletting Weapon +5"] = new engine.RulesElement({
    name: "Bloodletting Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8345",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Bloodletting Weapon +5", "ID_FMP_MAGIC_ITEM_8345"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bloodletting Weapon +6"] = new engine.RulesElement({
    name: "Bloodletting Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8346",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Bloodletting Weapon +6", "ID_FMP_MAGIC_ITEM_8346"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Circlet of Arkhosia (epic tier)"] = new engine.RulesElement({
    name: "Circlet of Arkhosia (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8377",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Circlet of Arkhosia (epic tier)", "ID_FMP_MAGIC_ITEM_8377"],
    rules: function(model) {
      model.statadd("ID_FMP_ITEM_SET_39 Set Count", 1, "Circlet of Arkhosia");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Circlet of Arkhosia (paragon tier)"] = new engine.RulesElement({
    name: "Circlet of Arkhosia (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8375",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Circlet of Arkhosia (paragon tier)", "ID_FMP_MAGIC_ITEM_8375"],
    rules: function(model) {
      model.statadd("ID_FMP_ITEM_SET_39 Set Count", 1, "Circlet of Arkhosia");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Frightful Weapon +1"] = new engine.RulesElement({
    name: "Frightful Weapon +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8347",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Frightful Weapon +1", "ID_FMP_MAGIC_ITEM_8347"],
    rules: function(model) {
      model.statadd("Intimidate Misc", 1, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Frightful Weapon +2"] = new engine.RulesElement({
    name: "Frightful Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8348",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Frightful Weapon +2", "ID_FMP_MAGIC_ITEM_8348"],
    rules: function(model) {
      model.statadd("Intimidate Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Frightful Weapon +3"] = new engine.RulesElement({
    name: "Frightful Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8349",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Frightful Weapon +3", "ID_FMP_MAGIC_ITEM_8349"],
    rules: function(model) {
      model.statadd("Intimidate Misc", 3, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Frightful Weapon +4"] = new engine.RulesElement({
    name: "Frightful Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8350",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Frightful Weapon +4", "ID_FMP_MAGIC_ITEM_8350"],
    rules: function(model) {
      model.statadd("Intimidate Misc", 4, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Frightful Weapon +5"] = new engine.RulesElement({
    name: "Frightful Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8351",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Frightful Weapon +5", "ID_FMP_MAGIC_ITEM_8351"],
    rules: function(model) {
      model.statadd("Intimidate Misc", 5, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Frightful Weapon +6"] = new engine.RulesElement({
    name: "Frightful Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8352",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Frightful Weapon +6", "ID_FMP_MAGIC_ITEM_8352"],
    rules: function(model) {
      model.statadd("Intimidate Misc", 6, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Gutting Weapon +1"] = new engine.RulesElement({
    name: "Gutting Weapon +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8353",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Gutting Weapon +1", "ID_FMP_MAGIC_ITEM_8353"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Gutting Weapon +2"] = new engine.RulesElement({
    name: "Gutting Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8354",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Gutting Weapon +2", "ID_FMP_MAGIC_ITEM_8354"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Gutting Weapon +3"] = new engine.RulesElement({
    name: "Gutting Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8355",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Gutting Weapon +3", "ID_FMP_MAGIC_ITEM_8355"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Gutting Weapon +4"] = new engine.RulesElement({
    name: "Gutting Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8356",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Gutting Weapon +4", "ID_FMP_MAGIC_ITEM_8356"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Gutting Weapon +5"] = new engine.RulesElement({
    name: "Gutting Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8357",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Gutting Weapon +5", "ID_FMP_MAGIC_ITEM_8357"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Gutting Weapon +6"] = new engine.RulesElement({
    name: "Gutting Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8358",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Gutting Weapon +6", "ID_FMP_MAGIC_ITEM_8358"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Knockback Weapon +1"] = new engine.RulesElement({
    name: "Knockback Weapon +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8359",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Knockback Weapon +1", "ID_FMP_MAGIC_ITEM_8359"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Knockback Weapon +2"] = new engine.RulesElement({
    name: "Knockback Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8360",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Knockback Weapon +2", "ID_FMP_MAGIC_ITEM_8360"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Knockback Weapon +3"] = new engine.RulesElement({
    name: "Knockback Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8361",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Knockback Weapon +3", "ID_FMP_MAGIC_ITEM_8361"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Knockback Weapon +4"] = new engine.RulesElement({
    name: "Knockback Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8362",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Knockback Weapon +4", "ID_FMP_MAGIC_ITEM_8362"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Knockback Weapon +5"] = new engine.RulesElement({
    name: "Knockback Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8363",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Knockback Weapon +5", "ID_FMP_MAGIC_ITEM_8363"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Knockback Weapon +6"] = new engine.RulesElement({
    name: "Knockback Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8364",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Knockback Weapon +6", "ID_FMP_MAGIC_ITEM_8364"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Silver Sky Tabard (paragon tier)"] = new engine.RulesElement({
    name: "Silver Sky Tabard (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8379",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Silver Sky Tabard (paragon tier)", "ID_FMP_MAGIC_ITEM_8379"],
    rules: function(model) {
      model.statadd("ID_FMP_ITEM_SET_39 Set Count", 1, "Silver Sky Tabard");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Standard of the Silver Dragon (paragon tier)"] = new engine.RulesElement({
    name: "Standard of the Silver Dragon (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8380",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Standard of the Silver Dragon (paragon tier)", "ID_FMP_MAGIC_ITEM_8380"],
    rules: function(model) {
      model.statadd("ID_FMP_ITEM_SET_39 Set Count", 1, "Standard of the Silver Dragon");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Weapon of the Conqueror +3"] = new engine.RulesElement({
    name: "Weapon of the Conqueror +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8381",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Weapon of the Conqueror +3", "ID_FMP_MAGIC_ITEM_8381"],
    rules: function(model) {
      model.statadd("ID_FMP_POWER_1448:damage", 3);
      model.statadd("ID_FMP_ITEM_SET_39 Set Count", 1, "Weapon of the Conqueror");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Weapon of the Conqueror +4"] = new engine.RulesElement({
    name: "Weapon of the Conqueror +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8382",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Weapon of the Conqueror +4", "ID_FMP_MAGIC_ITEM_8382"],
    rules: function(model) {
      model.statadd("ID_FMP_POWER_1448:damage", 4);
      model.statadd("ID_FMP_ITEM_SET_39 Set Count", 1, "Weapon of the Conqueror");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Weapon of the Conqueror +5"] = new engine.RulesElement({
    name: "Weapon of the Conqueror +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8383",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Weapon of the Conqueror +5", "ID_FMP_MAGIC_ITEM_8383"],
    rules: function(model) {
      model.statadd("ID_FMP_POWER_1448:damage", 5);
      model.statadd("ID_FMP_ITEM_SET_39 Set Count", 1, "Weapon of the Conqueror");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Weapon of the Conqueror +6"] = new engine.RulesElement({
    name: "Weapon of the Conqueror +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8384",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Weapon of the Conqueror +6", "ID_FMP_MAGIC_ITEM_8384"],
    rules: function(model) {
      model.statadd("ID_FMP_POWER_1448:damage", 6);
      model.statadd("ID_FMP_ITEM_SET_39 Set Count", 1, "Weapon of the Conqueror");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Whirlwind Weapon +1"] = new engine.RulesElement({
    name: "Whirlwind Weapon +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8365",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Whirlwind Weapon +1", "ID_FMP_MAGIC_ITEM_8365"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Whirlwind Weapon +2"] = new engine.RulesElement({
    name: "Whirlwind Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8366",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Whirlwind Weapon +2", "ID_FMP_MAGIC_ITEM_8366"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Whirlwind Weapon +3"] = new engine.RulesElement({
    name: "Whirlwind Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8367",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Whirlwind Weapon +3", "ID_FMP_MAGIC_ITEM_8367"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Whirlwind Weapon +4"] = new engine.RulesElement({
    name: "Whirlwind Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8368",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Whirlwind Weapon +4", "ID_FMP_MAGIC_ITEM_8368"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Whirlwind Weapon +5"] = new engine.RulesElement({
    name: "Whirlwind Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8369",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Whirlwind Weapon +5", "ID_FMP_MAGIC_ITEM_8369"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Whirlwind Weapon +6"] = new engine.RulesElement({
    name: "Whirlwind Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8370",
    source: "Player's Handbook Races: Dragonborn",
    categories: ["Whirlwind Weapon +6", "ID_FMP_MAGIC_ITEM_8370"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
