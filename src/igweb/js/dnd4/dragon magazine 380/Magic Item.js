(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Amulet of the Diplomat +2"] = new RulesElement({
    name: "Amulet of the Diplomat +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8170",
    source: "Dragon Magazine 380",
    categories: ["Amulet of the Diplomat +2", "ID_FMP_MAGIC_ITEM_8170"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 2, "Enhancement");
      model.statadd("Reflex Defense", 2, "Enhancement");
      model.statadd("Will Defense", 2, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Amulet of the Diplomat +3"] = new RulesElement({
    name: "Amulet of the Diplomat +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8171",
    source: "Dragon Magazine 380",
    categories: ["Amulet of the Diplomat +3", "ID_FMP_MAGIC_ITEM_8171"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 3, "Enhancement");
      model.statadd("Reflex Defense", 3, "Enhancement");
      model.statadd("Will Defense", 3, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Amulet of the Diplomat +4"] = new RulesElement({
    name: "Amulet of the Diplomat +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8172",
    source: "Dragon Magazine 380",
    categories: ["Amulet of the Diplomat +4", "ID_FMP_MAGIC_ITEM_8172"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 4, "Enhancement");
      model.statadd("Reflex Defense", 4, "Enhancement");
      model.statadd("Will Defense", 4, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Amulet of the Diplomat +5"] = new RulesElement({
    name: "Amulet of the Diplomat +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8173",
    source: "Dragon Magazine 380",
    categories: ["Amulet of the Diplomat +5", "ID_FMP_MAGIC_ITEM_8173"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 5, "Enhancement");
      model.statadd("Reflex Defense", 5, "Enhancement");
      model.statadd("Will Defense", 5, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Amulet of the Diplomat +6"] = new RulesElement({
    name: "Amulet of the Diplomat +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8174",
    source: "Dragon Magazine 380",
    categories: ["Amulet of the Diplomat +6", "ID_FMP_MAGIC_ITEM_8174"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 6, "Enhancement");
      model.statadd("Reflex Defense", 6, "Enhancement");
      model.statadd("Will Defense", 6, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Belt of Feral Might (heroic tier)"] = new RulesElement({
    name: "Belt of Feral Might (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8118",
    source: "Dragon Magazine 380",
    categories: ["Belt of Feral Might (heroic tier)", "ID_FMP_MAGIC_ITEM_8118"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Belt of Raging Endurance (epic tier)"] = new RulesElement({
    name: "Belt of Raging Endurance (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8124",
    source: "Dragon Magazine 380",
    categories: ["Belt of Raging Endurance (epic tier)", "ID_FMP_MAGIC_ITEM_8124"],
    rules: function(model) {
      model.statadd("Healing Surges", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Belt of Raging Endurance (heroic tier)"] = new RulesElement({
    name: "Belt of Raging Endurance (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8120",
    source: "Dragon Magazine 380",
    categories: ["Belt of Raging Endurance (heroic tier)", "ID_FMP_MAGIC_ITEM_8120"],
    rules: function(model) {
      model.statadd("Healing Surges", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Belt of Raging Endurance (paragon tier)"] = new RulesElement({
    name: "Belt of Raging Endurance (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8122",
    source: "Dragon Magazine 380",
    categories: ["Belt of Raging Endurance (paragon tier)", "ID_FMP_MAGIC_ITEM_8122"],
    rules: function(model) {
      model.statadd("Healing Surges", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Benefactor Armor +2"] = new RulesElement({
    name: "Benefactor Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8144",
    source: "Dragon Magazine 380",
    categories: ["Benefactor Armor +2", "ID_FMP_MAGIC_ITEM_8144"],
    rules: function(model) {
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Benefactor Armor +3"] = new RulesElement({
    name: "Benefactor Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8145",
    source: "Dragon Magazine 380",
    categories: ["Benefactor Armor +3", "ID_FMP_MAGIC_ITEM_8145"],
    rules: function(model) {
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Benefactor Armor +4"] = new RulesElement({
    name: "Benefactor Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8146",
    source: "Dragon Magazine 380",
    categories: ["Benefactor Armor +4", "ID_FMP_MAGIC_ITEM_8146"],
    rules: function(model) {
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Benefactor Armor +5"] = new RulesElement({
    name: "Benefactor Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8147",
    source: "Dragon Magazine 380",
    categories: ["Benefactor Armor +5", "ID_FMP_MAGIC_ITEM_8147"],
    rules: function(model) {
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Benefactor Armor +6"] = new RulesElement({
    name: "Benefactor Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8148",
    source: "Dragon Magazine 380",
    categories: ["Benefactor Armor +6", "ID_FMP_MAGIC_ITEM_8148"],
    rules: function(model) {
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Chainreach Weapon +1"] = new RulesElement({
    name: "Chainreach Weapon +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8155",
    source: "Dragon Magazine 380",
    categories: ["Chainreach Weapon +1", "ID_FMP_MAGIC_ITEM_8155"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Chainreach Weapon +2"] = new RulesElement({
    name: "Chainreach Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8156",
    source: "Dragon Magazine 380",
    categories: ["Chainreach Weapon +2", "ID_FMP_MAGIC_ITEM_8156"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Chainreach Weapon +3"] = new RulesElement({
    name: "Chainreach Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8157",
    source: "Dragon Magazine 380",
    categories: ["Chainreach Weapon +3", "ID_FMP_MAGIC_ITEM_8157"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Chainreach Weapon +4"] = new RulesElement({
    name: "Chainreach Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8158",
    source: "Dragon Magazine 380",
    categories: ["Chainreach Weapon +4", "ID_FMP_MAGIC_ITEM_8158"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Chainreach Weapon +5"] = new RulesElement({
    name: "Chainreach Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8159",
    source: "Dragon Magazine 380",
    categories: ["Chainreach Weapon +5", "ID_FMP_MAGIC_ITEM_8159"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Chainreach Weapon +6"] = new RulesElement({
    name: "Chainreach Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8160",
    source: "Dragon Magazine 380",
    categories: ["Chainreach Weapon +6", "ID_FMP_MAGIC_ITEM_8160"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Coverbreaker Weapon +3"] = new RulesElement({
    name: "Coverbreaker Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8166",
    source: "Dragon Magazine 380",
    categories: ["Coverbreaker Weapon +3", "ID_FMP_MAGIC_ITEM_8166"],
    rules: function(model) {
      model.statadd("attack rolls", function() { /* against an enemy with cover or superior cover */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Coverbreaker Weapon +4"] = new RulesElement({
    name: "Coverbreaker Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8167",
    source: "Dragon Magazine 380",
    categories: ["Coverbreaker Weapon +4", "ID_FMP_MAGIC_ITEM_8167"],
    rules: function(model) {
      model.statadd("attack rolls", function() { /* against an enemy with cover or superior cover */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Coverbreaker Weapon +5"] = new RulesElement({
    name: "Coverbreaker Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8168",
    source: "Dragon Magazine 380",
    categories: ["Coverbreaker Weapon +5", "ID_FMP_MAGIC_ITEM_8168"],
    rules: function(model) {
      model.statadd("attack rolls", function() { /* against an enemy with cover or superior cover */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Coverbreaker Weapon +6"] = new RulesElement({
    name: "Coverbreaker Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8169",
    source: "Dragon Magazine 380",
    categories: ["Coverbreaker Weapon +6", "ID_FMP_MAGIC_ITEM_8169"],
    rules: function(model) {
      model.statadd("attack rolls", function() { /* against an enemy with cover or superior cover */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Feral Glory Tattoo (paragon tier)"] = new RulesElement({
    name: "Feral Glory Tattoo (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8130",
    source: "Dragon Magazine 380",
    categories: ["Feral Glory Tattoo (paragon tier)", "ID_FMP_MAGIC_ITEM_8130"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Forgemaster's Gloves (epic tier)"] = new RulesElement({
    name: "Forgemaster's Gloves (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8185",
    source: "Dragon Magazine 380",
    categories: ["Forgemaster's Gloves (epic tier)", "ID_FMP_MAGIC_ITEM_8185"],
    rules: function(model) {
      model.statadd("Forgemaster's Gloves (epic tier)", 5);
      model.statadd("Forgemaster's Gloves (epic tier)", 15, "Forgemaster's Gloves (epic tier)");
      model.statadd("resist:fire", function() { return model.stat("Forgemaster's Gloves (epic tier)"); }, "resist");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Forgemaster's Gloves (heroic tier)"] = new RulesElement({
    name: "Forgemaster's Gloves (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8181",
    source: "Dragon Magazine 380",
    categories: ["Forgemaster's Gloves (heroic tier)", "ID_FMP_MAGIC_ITEM_8181"],
    rules: function(model) {
      model.statadd("Forgemaster's Gloves (heroic tier)", 5);
      model.statadd("Forgemaster's Gloves (heroic tier)", 5, "Forgemaster's Gloves (heroic tier)");
      model.statadd("resist:fire", function() { return model.stat("Forgemaster's Gloves (heroic tier)"); }, "resist");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Forgemaster's Gloves (paragon tier)"] = new RulesElement({
    name: "Forgemaster's Gloves (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8183",
    source: "Dragon Magazine 380",
    categories: ["Forgemaster's Gloves (paragon tier)", "ID_FMP_MAGIC_ITEM_8183"],
    rules: function(model) {
      model.statadd("Forgemaster's Gloves (paragon tier)", 5);
      model.statadd("Forgemaster's Gloves (paragon tier)", 10, "Forgemaster's Gloves (paragon tier)");
      model.statadd("resist:fire", function() { return model.stat("Forgemaster's Gloves (paragon tier)"); }, "resist");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Guardian's Circlets +2"] = new RulesElement({
    name: "Guardian's Circlets +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8138",
    source: "Dragon Magazine 380",
    categories: ["Guardian's Circlets +2", "ID_FMP_MAGIC_ITEM_8138"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 2, "Enhancement");
      model.statadd("Reflex Defense", 2, "Enhancement");
      model.statadd("Will Defense", 2, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Guardian's Circlets +3"] = new RulesElement({
    name: "Guardian's Circlets +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8139",
    source: "Dragon Magazine 380",
    categories: ["Guardian's Circlets +3", "ID_FMP_MAGIC_ITEM_8139"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 3, "Enhancement");
      model.statadd("Reflex Defense", 3, "Enhancement");
      model.statadd("Will Defense", 3, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Guardian's Circlets +4"] = new RulesElement({
    name: "Guardian's Circlets +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8140",
    source: "Dragon Magazine 380",
    categories: ["Guardian's Circlets +4", "ID_FMP_MAGIC_ITEM_8140"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 4, "Enhancement");
      model.statadd("Reflex Defense", 4, "Enhancement");
      model.statadd("Will Defense", 4, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Guardian's Circlets +5"] = new RulesElement({
    name: "Guardian's Circlets +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8141",
    source: "Dragon Magazine 380",
    categories: ["Guardian's Circlets +5", "ID_FMP_MAGIC_ITEM_8141"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 5, "Enhancement");
      model.statadd("Reflex Defense", 5, "Enhancement");
      model.statadd("Will Defense", 5, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Guardian's Circlets +6"] = new RulesElement({
    name: "Guardian's Circlets +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8142",
    source: "Dragon Magazine 380",
    categories: ["Guardian's Circlets +6", "ID_FMP_MAGIC_ITEM_8142"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 6, "Enhancement");
      model.statadd("Reflex Defense", 6, "Enhancement");
      model.statadd("Will Defense", 6, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Inquisitives Goggles (paragon tier)"] = new RulesElement({
    name: "Inquisitives Goggles (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8186",
    source: "Dragon Magazine 380",
    categories: ["Inquisitives Goggles (paragon tier)", "ID_FMP_MAGIC_ITEM_8186"],
    rules: function(model) {
      model.statadd("Inquisitives Goggles (paragon tier)", 1);
      model.statadd("Inquisitives Goggles (paragon tier)", 2);
      model.statadd("Insight Misc", function() { return model.stat("Inquisitives Goggles (paragon tier)"); }, "item");
      model.statadd("Perception Misc", function() { return model.stat("Inquisitives Goggles (paragon tier)"); }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Madeth's Magicial Musician (heroic tier)"] = new RulesElement({
    name: "Madeth's Magicial Musician (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8143",
    source: "Dragon Magazine 380",
    categories: ["Madeth's Magicial Musician (heroic tier)", "ID_FMP_MAGIC_ITEM_8143"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Pierced Heart Tattoo (epic tier)"] = new RulesElement({
    name: "Pierced Heart Tattoo (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8135",
    source: "Dragon Magazine 380",
    categories: ["Pierced Heart Tattoo (epic tier)", "ID_FMP_MAGIC_ITEM_8135"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Pierced Heart Tattoo (heroic tier)"] = new RulesElement({
    name: "Pierced Heart Tattoo (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8131",
    source: "Dragon Magazine 380",
    categories: ["Pierced Heart Tattoo (heroic tier)", "ID_FMP_MAGIC_ITEM_8131"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Pierced Heart Tattoo (paragon tier)"] = new RulesElement({
    name: "Pierced Heart Tattoo (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8133",
    source: "Dragon Magazine 380",
    categories: ["Pierced Heart Tattoo (paragon tier)", "ID_FMP_MAGIC_ITEM_8133"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rage Torc Tattoo (paragon tier)"] = new RulesElement({
    name: "Rage Torc Tattoo (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8137",
    source: "Dragon Magazine 380",
    categories: ["Rage Torc Tattoo (paragon tier)", "ID_FMP_MAGIC_ITEM_8137"],
    rules: function(model) {
      model.statadd("Action Point", "Rage Torc Tattoo (paragon tier):When you spend an action point to take an extra action, you do not expend the action point if you use a rage attack and the attack misses all its targets.");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rager's Belt (heroic tier)"] = new RulesElement({
    name: "Rager's Belt (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8119",
    source: "Dragon Magazine 380",
    categories: ["Rager's Belt (heroic tier)", "ID_FMP_MAGIC_ITEM_8119"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rampaging Slayer's Gloves (epic tier)"] = new RulesElement({
    name: "Rampaging Slayer's Gloves (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8111",
    source: "Dragon Magazine 380",
    categories: ["Rampaging Slayer's Gloves (epic tier)", "ID_FMP_MAGIC_ITEM_8111"],
    rules: function(model) {
      model.statadd("rampage:damage", 16, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rampaging Slayer's Gloves (heroic tier)"] = new RulesElement({
    name: "Rampaging Slayer's Gloves (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8107",
    source: "Dragon Magazine 380",
    categories: ["Rampaging Slayer's Gloves (heroic tier)", "ID_FMP_MAGIC_ITEM_8107"],
    rules: function(model) {
      model.statadd("rampage:damage", 4, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rampaging Slayer's Gloves (paragon tier)"] = new RulesElement({
    name: "Rampaging Slayer's Gloves (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8109",
    source: "Dragon Magazine 380",
    categories: ["Rampaging Slayer's Gloves (paragon tier)", "ID_FMP_MAGIC_ITEM_8109"],
    rules: function(model) {
      model.statadd("rampage:damage", 8, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Resolute Armor +2"] = new RulesElement({
    name: "Resolute Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8161",
    source: "Dragon Magazine 380",
    categories: ["Resolute Armor +2", "ID_FMP_MAGIC_ITEM_8161"],
    rules: function(model) {
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Resolute Armor +3"] = new RulesElement({
    name: "Resolute Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8162",
    source: "Dragon Magazine 380",
    categories: ["Resolute Armor +3", "ID_FMP_MAGIC_ITEM_8162"],
    rules: function(model) {
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Resolute Armor +4"] = new RulesElement({
    name: "Resolute Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8163",
    source: "Dragon Magazine 380",
    categories: ["Resolute Armor +4", "ID_FMP_MAGIC_ITEM_8163"],
    rules: function(model) {
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Resolute Armor +5"] = new RulesElement({
    name: "Resolute Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8164",
    source: "Dragon Magazine 380",
    categories: ["Resolute Armor +5", "ID_FMP_MAGIC_ITEM_8164"],
    rules: function(model) {
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Resolute Armor +6"] = new RulesElement({
    name: "Resolute Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8165",
    source: "Dragon Magazine 380",
    categories: ["Resolute Armor +6", "ID_FMP_MAGIC_ITEM_8165"],
    rules: function(model) {
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ring of the Warforged (paragon tier)"] = new RulesElement({
    name: "Ring of the Warforged (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8191",
    source: "Dragon Magazine 380",
    categories: ["Ring of the Warforged (paragon tier)", "ID_FMP_MAGIC_ITEM_8191"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_INTERNAL_CAN_USE_COMPONENTS"]);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Sandals of the Temporal Step (paragon tier)"] = new RulesElement({
    name: "Sandals of the Temporal Step (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8192",
    source: "Dragon Magazine 380",
    categories: ["Sandals of the Temporal Step (paragon tier)", "ID_FMP_MAGIC_ITEM_8192"],
    rules: function(model) {
      model.statadd("Speed", function() { 
        if (!(model.wearing('Armor', ['heavy']))) {
          return 1;
        } else return 0;
       }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Stern Handler's Wraps (epic tier)"] = new RulesElement({
    name: "Stern Handler's Wraps (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8153",
    source: "Dragon Magazine 380",
    categories: ["Stern Handler's Wraps (epic tier)", "ID_FMP_MAGIC_ITEM_8153"],
    rules: function(model) {
      model.statadd("Stern Handler's Wraps (epic tier)", 1);
      model.statadd("Stern Handler's Wraps (epic tier)", 3);
      model.statadd("Nature Misc", function() { /* to handle animals */ return model.stat("Stern Handler's Wraps (epic tier)"); }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Stern Handler's Wraps (heroic tier)"] = new RulesElement({
    name: "Stern Handler's Wraps (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8149",
    source: "Dragon Magazine 380",
    categories: ["Stern Handler's Wraps (heroic tier)", "ID_FMP_MAGIC_ITEM_8149"],
    rules: function(model) {
      model.statadd("Stern Handler's Wraps (heroic tier)", 1);
      model.statadd("Stern Handler's Wraps (heroic tier)", 1);
      model.statadd("Nature Misc", function() { /* to handle animals */ return model.stat("Stern Handler's Wraps (heroic tier)"); }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Stern Handler's Wraps (paragon tier)"] = new RulesElement({
    name: "Stern Handler's Wraps (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8151",
    source: "Dragon Magazine 380",
    categories: ["Stern Handler's Wraps (paragon tier)", "ID_FMP_MAGIC_ITEM_8151"],
    rules: function(model) {
      model.statadd("Stern Handler's Wraps (paragon tier)", 1);
      model.statadd("Stern Handler's Wraps (paragon tier)", 2);
      model.statadd("Nature Misc", function() { /* to handle animals */ return model.stat("Stern Handler's Wraps (paragon tier)"); }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Tempest Fan +1"] = new RulesElement({
    name: "Tempest Fan +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8175",
    source: "Dragon Magazine 380",
    categories: ["Tempest Fan +1", "ID_FMP_MAGIC_ITEM_8175"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Tempest Fan +3"] = new RulesElement({
    name: "Tempest Fan +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8177",
    source: "Dragon Magazine 380",
    categories: ["Tempest Fan +3", "ID_FMP_MAGIC_ITEM_8177"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Tempest Fan +5"] = new RulesElement({
    name: "Tempest Fan +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8179",
    source: "Dragon Magazine 380",
    categories: ["Tempest Fan +5", "ID_FMP_MAGIC_ITEM_8179"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Tenebrous Shroud +3"] = new RulesElement({
    name: "Tenebrous Shroud +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8187",
    source: "Dragon Magazine 380",
    categories: ["Tenebrous Shroud +3", "ID_FMP_MAGIC_ITEM_8187"],
    rules: function(model) {
      model.statadd("Tenebrous Shroud +3", 15, "Tenebrous Shroud +3");
      model.statadd("resist:necrotic", function() { return model.stat("Tenebrous Shroud +3"); }, "resist");
      model.statadd("Fortitude Defense", 3, "Enhancement");
      model.statadd("Reflex Defense", 3, "Enhancement");
      model.statadd("Will Defense", 3, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Tenebrous Shroud +4"] = new RulesElement({
    name: "Tenebrous Shroud +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8188",
    source: "Dragon Magazine 380",
    categories: ["Tenebrous Shroud +4", "ID_FMP_MAGIC_ITEM_8188"],
    rules: function(model) {
      model.statadd("Tenebrous Shroud +4", 15, "Tenebrous Shroud +4");
      model.statadd("resist:necrotic", function() { return model.stat("Tenebrous Shroud +4"); }, "resist");
      model.statadd("Fortitude Defense", 4, "Enhancement");
      model.statadd("Reflex Defense", 4, "Enhancement");
      model.statadd("Will Defense", 4, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Tenebrous Shroud +5"] = new RulesElement({
    name: "Tenebrous Shroud +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8189",
    source: "Dragon Magazine 380",
    categories: ["Tenebrous Shroud +5", "ID_FMP_MAGIC_ITEM_8189"],
    rules: function(model) {
      model.statadd("Tenebrous Shroud +5", 20, "Tenebrous Shroud +5");
      model.statadd("resist:necrotic", function() { return model.stat("Tenebrous Shroud +5"); }, "resist");
      model.statadd("Fortitude Defense", 5, "Enhancement");
      model.statadd("Reflex Defense", 5, "Enhancement");
      model.statadd("Will Defense", 5, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Tenebrous Shroud +6"] = new RulesElement({
    name: "Tenebrous Shroud +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8190",
    source: "Dragon Magazine 380",
    categories: ["Tenebrous Shroud +6", "ID_FMP_MAGIC_ITEM_8190"],
    rules: function(model) {
      model.statadd("Tenebrous Shroud +6", 20, "Tenebrous Shroud +6");
      model.statadd("resist:necrotic", function() { return model.stat("Tenebrous Shroud +6"); }, "resist");
      model.statadd("Fortitude Defense", 6, "Enhancement");
      model.statadd("Reflex Defense", 6, "Enhancement");
      model.statadd("Will Defense", 6, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Twice-Clawed Gauntlets (epic tier)"] = new RulesElement({
    name: "Twice-Clawed Gauntlets (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8116",
    source: "Dragon Magazine 380",
    categories: ["Twice-Clawed Gauntlets (epic tier)", "ID_FMP_MAGIC_ITEM_8116"],
    rules: function(model) {
      model.statadd("damage rolls", function() { /* while raging */ return 6; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Twice-Clawed Gauntlets (heroic tier)"] = new RulesElement({
    name: "Twice-Clawed Gauntlets (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8112",
    source: "Dragon Magazine 380",
    categories: ["Twice-Clawed Gauntlets (heroic tier)", "ID_FMP_MAGIC_ITEM_8112"],
    rules: function(model) {
      model.statadd("damage rolls", function() { /* while raging */ return 2; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Twice-Clawed Gauntlets (paragon tier)"] = new RulesElement({
    name: "Twice-Clawed Gauntlets (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8114",
    source: "Dragon Magazine 380",
    categories: ["Twice-Clawed Gauntlets (paragon tier)", "ID_FMP_MAGIC_ITEM_8114"],
    rules: function(model) {
      model.statadd("damage rolls", function() { /* while raging */ return 4; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Twining-Scorpion Tattoo (epic tier)"] = new RulesElement({
    name: "Twining-Scorpion Tattoo (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8129",
    source: "Dragon Magazine 380",
    categories: ["Twining-Scorpion Tattoo (epic tier)", "ID_FMP_MAGIC_ITEM_8129"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Twining-Scorpion Tattoo (heroic tier)"] = new RulesElement({
    name: "Twining-Scorpion Tattoo (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8125",
    source: "Dragon Magazine 380",
    categories: ["Twining-Scorpion Tattoo (heroic tier)", "ID_FMP_MAGIC_ITEM_8125"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Twining-Scorpion Tattoo (paragon tier)"] = new RulesElement({
    name: "Twining-Scorpion Tattoo (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8127",
    source: "Dragon Magazine 380",
    categories: ["Twining-Scorpion Tattoo (paragon tier)", "ID_FMP_MAGIC_ITEM_8127"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Vistani Buzuq +2"] = new RulesElement({
    name: "Vistani Buzuq +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8193",
    source: "Dragon Magazine 380",
    categories: ["Vistani Buzuq +2", "ID_FMP_MAGIC_ITEM_8193"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Vistani Eye Amulet +1"] = new RulesElement({
    name: "Vistani Eye Amulet +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8194",
    source: "Dragon Magazine 380",
    categories: ["Vistani Eye Amulet +1", "ID_FMP_MAGIC_ITEM_8194"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against attacks with the gaze keyword or related to eyes */ return 1; }, "item");
      model.statadd("Fortitude Defense", 1, "Enhancement");
      model.statadd("Reflex Defense", 1, "Enhancement");
      model.statadd("Will Defense", 1, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Vistani Eye Amulet +2"] = new RulesElement({
    name: "Vistani Eye Amulet +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8195",
    source: "Dragon Magazine 380",
    categories: ["Vistani Eye Amulet +2", "ID_FMP_MAGIC_ITEM_8195"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against attacks with the gaze keyword or related to eyes */ return 2; }, "item");
      model.statadd("Fortitude Defense", 2, "Enhancement");
      model.statadd("Reflex Defense", 2, "Enhancement");
      model.statadd("Will Defense", 2, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Vistani Eye Amulet +3"] = new RulesElement({
    name: "Vistani Eye Amulet +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8196",
    source: "Dragon Magazine 380",
    categories: ["Vistani Eye Amulet +3", "ID_FMP_MAGIC_ITEM_8196"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against attacks with the gaze keyword or related to eyes */ return 3; }, "item");
      model.statadd("Fortitude Defense", 3, "Enhancement");
      model.statadd("Reflex Defense", 3, "Enhancement");
      model.statadd("Will Defense", 3, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Vistani Eye Amulet +4"] = new RulesElement({
    name: "Vistani Eye Amulet +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8197",
    source: "Dragon Magazine 380",
    categories: ["Vistani Eye Amulet +4", "ID_FMP_MAGIC_ITEM_8197"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against attacks with the gaze keyword or related to eyes */ return 4; }, "item");
      model.statadd("Fortitude Defense", 4, "Enhancement");
      model.statadd("Reflex Defense", 4, "Enhancement");
      model.statadd("Will Defense", 4, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Vistani Eye Amulet +5"] = new RulesElement({
    name: "Vistani Eye Amulet +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8198",
    source: "Dragon Magazine 380",
    categories: ["Vistani Eye Amulet +5", "ID_FMP_MAGIC_ITEM_8198"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against attacks with the gaze keyword or related to eyes */ return 5; }, "item");
      model.statadd("Fortitude Defense", 5, "Enhancement");
      model.statadd("Reflex Defense", 5, "Enhancement");
      model.statadd("Will Defense", 5, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Vistani Eye Amulet +6"] = new RulesElement({
    name: "Vistani Eye Amulet +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8199",
    source: "Dragon Magazine 380",
    categories: ["Vistani Eye Amulet +6", "ID_FMP_MAGIC_ITEM_8199"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against attacks with the gaze keyword or related to eyes */ return 6; }, "item");
      model.statadd("Fortitude Defense", 6, "Enhancement");
      model.statadd("Reflex Defense", 6, "Enhancement");
      model.statadd("Will Defense", 6, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Vistani Tambourine +1"] = new RulesElement({
    name: "Vistani Tambourine +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8200",
    source: "Dragon Magazine 380",
    categories: ["Vistani Tambourine +1", "ID_FMP_MAGIC_ITEM_8200"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Vistani Violin +3"] = new RulesElement({
    name: "Vistani Violin +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8201",
    source: "Dragon Magazine 380",
    categories: ["Vistani Violin +3", "ID_FMP_MAGIC_ITEM_8201"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  
})(this);
