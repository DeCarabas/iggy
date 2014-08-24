(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Adamantine Horse of Xarn"] = new RulesElement({
    name: "Adamantine Horse of Xarn",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7969",
    source: "Dungeon Master's Guide 2",
    categories: ["Adamantine Horse of Xarn", "ID_FMP_MAGIC_ITEM_7969"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Amulet of Passage"] = new RulesElement({
    name: "Amulet of Passage",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7970",
    source: "Dungeon Master's Guide 2",
    categories: ["Amulet of Passage", "ID_FMP_MAGIC_ITEM_7970"],
    rules: function(model) {
      model.statadd("Acrobatics Misc", function() { /* to escape */ return 2; }, "item");
      model.statadd("Athletics Misc", function() { /* to escape */ return 2; }, "item");
      model.statadd("Thievery Misc", function() { /* to open locks */ return 2; }, "item");
      model.statadd("Fortitude Defense", 2, "Enhancement");
      model.statadd("Reflex Defense", 2, "Enhancement");
      model.statadd("Will Defense", 2, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Avandra's Boon of Escape (level 13)"] = new RulesElement({
    name: "Avandra's Boon of Escape (level 13)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7981",
    source: "Dungeon Master's Guide 2",
    categories: ["Avandra's Boon of Escape (level 13)", "ID_FMP_MAGIC_ITEM_7981"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Avandra's Boon of Escape (level 18)"] = new RulesElement({
    name: "Avandra's Boon of Escape (level 18)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7982",
    source: "Dungeon Master's Guide 2",
    categories: ["Avandra's Boon of Escape (level 18)", "ID_FMP_MAGIC_ITEM_7982"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Avandra's Boon of Escape (level 23)"] = new RulesElement({
    name: "Avandra's Boon of Escape (level 23)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7983",
    source: "Dungeon Master's Guide 2",
    categories: ["Avandra's Boon of Escape (level 23)", "ID_FMP_MAGIC_ITEM_7983"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Avandra's Boon of Escape (level 28)"] = new RulesElement({
    name: "Avandra's Boon of Escape (level 28)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7984",
    source: "Dungeon Master's Guide 2",
    categories: ["Avandra's Boon of Escape (level 28)", "ID_FMP_MAGIC_ITEM_7984"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Avandra's Boon of Escape (level 3)"] = new RulesElement({
    name: "Avandra's Boon of Escape (level 3)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7979",
    source: "Dungeon Master's Guide 2",
    categories: ["Avandra's Boon of Escape (level 3)", "ID_FMP_MAGIC_ITEM_7979"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Avandra's Boon of Escape (level 8)"] = new RulesElement({
    name: "Avandra's Boon of Escape (level 8)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7980",
    source: "Dungeon Master's Guide 2",
    categories: ["Avandra's Boon of Escape (level 8)", "ID_FMP_MAGIC_ITEM_7980"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bahamut's Protective Ward (level 13)"] = new RulesElement({
    name: "Bahamut's Protective Ward (level 13)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7997",
    source: "Dungeon Master's Guide 2",
    categories: ["Bahamut's Protective Ward (level 13)", "ID_FMP_MAGIC_ITEM_7997"],
    rules: function(model) {
      model.statadd("attack rolls", function() { /* with opportunity attacks */ return 2; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bahamut's Protective Ward (level 18)"] = new RulesElement({
    name: "Bahamut's Protective Ward (level 18)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7998",
    source: "Dungeon Master's Guide 2",
    categories: ["Bahamut's Protective Ward (level 18)", "ID_FMP_MAGIC_ITEM_7998"],
    rules: function(model) {
      model.statadd("attack rolls", function() { /* with opportunity attacks */ return 2; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bahamut's Protective Ward (level 23)"] = new RulesElement({
    name: "Bahamut's Protective Ward (level 23)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7999",
    source: "Dungeon Master's Guide 2",
    categories: ["Bahamut's Protective Ward (level 23)", "ID_FMP_MAGIC_ITEM_7999"],
    rules: function(model) {
      model.statadd("attack rolls", function() { /* with opportunity attacks */ return 3; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bahamut's Protective Ward (level 28)"] = new RulesElement({
    name: "Bahamut's Protective Ward (level 28)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8000",
    source: "Dungeon Master's Guide 2",
    categories: ["Bahamut's Protective Ward (level 28)", "ID_FMP_MAGIC_ITEM_8000"],
    rules: function(model) {
      model.statadd("attack rolls", function() { /* with opportunity attacks */ return 3; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bahamut's Protective Ward (level 3)"] = new RulesElement({
    name: "Bahamut's Protective Ward (level 3)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7985",
    source: "Dungeon Master's Guide 2",
    categories: ["Bahamut's Protective Ward (level 3)", "ID_FMP_MAGIC_ITEM_7985"],
    rules: function(model) {
      model.statadd("attack rolls", function() { /* with opportunity attacks */ return 1; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bahamut's Protective Ward (level 8)"] = new RulesElement({
    name: "Bahamut's Protective Ward (level 8)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7996",
    source: "Dungeon Master's Guide 2",
    categories: ["Bahamut's Protective Ward (level 8)", "ID_FMP_MAGIC_ITEM_7996"],
    rules: function(model) {
      model.statadd("attack rolls", function() { /* with opportunity attacks */ return 1; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Book of Five Truths (The Fifth Truth) (epic tier)"] = new RulesElement({
    name: "Book of Five Truths (The Fifth Truth) (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8059",
    source: "Dungeon Master's Guide 2",
    categories: ["Book of Five Truths (The Fifth Truth) (epic tier)", "ID_FMP_MAGIC_ITEM_8059"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_VISION_DARKVISION"]);
      model.statadd("Insight Misc", 6, "item");
      model.statadd("Perception Misc", 6, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Book of Five Truths (The First Truth) (heroic tier)"] = new RulesElement({
    name: "Book of Five Truths (The First Truth) (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8055",
    source: "Dungeon Master's Guide 2",
    categories: ["Book of Five Truths (The First Truth) (heroic tier)", "ID_FMP_MAGIC_ITEM_8055"],
    rules: function(model) {
      model.statadd("Book of Five Truths (The First Truth) (heroic tier)", 2);
      model.statadd("Insight Misc", function() { return model.stat("Book of Five Truths (The First Truth) (heroic tier)"); }, "item");
      model.statadd("Perception Misc", function() { return model.stat("Book of Five Truths (The First Truth) (heroic tier)"); }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Book of Five Truths (The Fourth Truth) (epic tier)"] = new RulesElement({
    name: "Book of Five Truths (The Fourth Truth) (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8058",
    source: "Dungeon Master's Guide 2",
    categories: ["Book of Five Truths (The Fourth Truth) (epic tier)", "ID_FMP_MAGIC_ITEM_8058"],
    rules: function(model) {
      model.statadd("Will Defense", 2);
      model.statadd("Initiative Misc", 5, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Book of Five Truths (The Second Truth) (paragon tier)"] = new RulesElement({
    name: "Book of Five Truths (The Second Truth) (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8056",
    source: "Dungeon Master's Guide 2",
    categories: ["Book of Five Truths (The Second Truth) (paragon tier)", "ID_FMP_MAGIC_ITEM_8056"],
    rules: function(model) {
      model.statadd("Dungeoneering Misc", 1, "item");
      model.statadd("Heal Misc", 1, "item");
      model.statadd("Insight Misc", 1, "item");
      model.statadd("Nature Misc", 1, "item");
      model.statadd("Perception Misc", 1, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Book of Five Truths (The Third Truth) (paragon tier)"] = new RulesElement({
    name: "Book of Five Truths (The Third Truth) (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8057",
    source: "Dungeon Master's Guide 2",
    categories: ["Book of Five Truths (The Third Truth) (paragon tier)", "ID_FMP_MAGIC_ITEM_8057"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Corellon's Boon of Arcane Might (level 13)"] = new RulesElement({
    name: "Corellon's Boon of Arcane Might (level 13)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8003",
    source: "Dungeon Master's Guide 2",
    categories: ["Corellon's Boon of Arcane Might (level 13)", "ID_FMP_MAGIC_ITEM_8003"],
    rules: function(model) {
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory("at-will") && element.hasCategory("Arcane")); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Corellon's Boon of Arcane Might (level 18)"] = new RulesElement({
    name: "Corellon's Boon of Arcane Might (level 18)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8004",
    source: "Dungeon Master's Guide 2",
    categories: ["Corellon's Boon of Arcane Might (level 18)", "ID_FMP_MAGIC_ITEM_8004"],
    rules: function(model) {
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory("at-will") && element.hasCategory("Arcane")); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Corellon's Boon of Arcane Might (level 23)"] = new RulesElement({
    name: "Corellon's Boon of Arcane Might (level 23)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8005",
    source: "Dungeon Master's Guide 2",
    categories: ["Corellon's Boon of Arcane Might (level 23)", "ID_FMP_MAGIC_ITEM_8005"],
    rules: function(model) {
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory("at-will") && element.hasCategory("Arcane")); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Corellon's Boon of Arcane Might (level 28)"] = new RulesElement({
    name: "Corellon's Boon of Arcane Might (level 28)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8006",
    source: "Dungeon Master's Guide 2",
    categories: ["Corellon's Boon of Arcane Might (level 28)", "ID_FMP_MAGIC_ITEM_8006"],
    rules: function(model) {
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory("at-will") && element.hasCategory("Arcane")); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Corellon's Boon of Arcane Might (level 3)"] = new RulesElement({
    name: "Corellon's Boon of Arcane Might (level 3)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8001",
    source: "Dungeon Master's Guide 2",
    categories: ["Corellon's Boon of Arcane Might (level 3)", "ID_FMP_MAGIC_ITEM_8001"],
    rules: function(model) {
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory("at-will") && element.hasCategory("Arcane")); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Corellon's Boon of Arcane Might (level 8)"] = new RulesElement({
    name: "Corellon's Boon of Arcane Might (level 8)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8002",
    source: "Dungeon Master's Guide 2",
    categories: ["Corellon's Boon of Arcane Might (level 8)", "ID_FMP_MAGIC_ITEM_8002"],
    rules: function(model) {
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory("at-will") && element.hasCategory("Arcane")); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Cup of Al'Akbar"] = new RulesElement({
    name: "Cup of Al'Akbar",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7972",
    source: "Dungeon Master's Guide 2",
    categories: ["Cup of Al'Akbar", "ID_FMP_MAGIC_ITEM_7972"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Davros Elden's Aerial Step (paragon tier)"] = new RulesElement({
    name: "Davros Elden's Aerial Step (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8070",
    source: "Dungeon Master's Guide 2",
    categories: ["Davros Elden's Aerial Step (paragon tier)", "ID_FMP_MAGIC_ITEM_8070"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Davros Elden's Blinding Strikes (paragon tier)"] = new RulesElement({
    name: "Davros Elden's Blinding Strikes (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8069",
    source: "Dungeon Master's Guide 2",
    categories: ["Davros Elden's Blinding Strikes (paragon tier)", "ID_FMP_MAGIC_ITEM_8069"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Davros Elden's Defensive Step (heroic tier)"] = new RulesElement({
    name: "Davros Elden's Defensive Step (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8067",
    source: "Dungeon Master's Guide 2",
    categories: ["Davros Elden's Defensive Step (heroic tier)", "ID_FMP_MAGIC_ITEM_8067"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Davros Elden's Hasty Resurgence (heroic tier)"] = new RulesElement({
    name: "Davros Elden's Hasty Resurgence (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8068",
    source: "Dungeon Master's Guide 2",
    categories: ["Davros Elden's Hasty Resurgence (heroic tier)", "ID_FMP_MAGIC_ITEM_8068"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Emblem of Ossandrya"] = new RulesElement({
    name: "Emblem of Ossandrya",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7974",
    source: "Dungeon Master's Guide 2",
    categories: ["Emblem of Ossandrya", "ID_FMP_MAGIC_ITEM_7974"],
    rules: function(model) {
      model.statadd("resist:poison", 10, "resist");
      model.statadd("Saving Throws", 1, "item");
      model.statadd("Acrobatics Misc", 2, "item");
      model.statadd("Athletics Misc", 2, "item");
      model.statadd("Diplomacy Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Erathis's Beacon (level 13)"] = new RulesElement({
    name: "Erathis's Beacon (level 13)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8009",
    source: "Dungeon Master's Guide 2",
    categories: ["Erathis's Beacon (level 13)", "ID_FMP_MAGIC_ITEM_8009"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Erathis's Beacon (level 18)"] = new RulesElement({
    name: "Erathis's Beacon (level 18)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8010",
    source: "Dungeon Master's Guide 2",
    categories: ["Erathis's Beacon (level 18)", "ID_FMP_MAGIC_ITEM_8010"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Erathis's Beacon (level 23)"] = new RulesElement({
    name: "Erathis's Beacon (level 23)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8011",
    source: "Dungeon Master's Guide 2",
    categories: ["Erathis's Beacon (level 23)", "ID_FMP_MAGIC_ITEM_8011"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Erathis's Beacon (level 28)"] = new RulesElement({
    name: "Erathis's Beacon (level 28)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8012",
    source: "Dungeon Master's Guide 2",
    categories: ["Erathis's Beacon (level 28)", "ID_FMP_MAGIC_ITEM_8012"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Erathis's Beacon (level 3)"] = new RulesElement({
    name: "Erathis's Beacon (level 3)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8007",
    source: "Dungeon Master's Guide 2",
    categories: ["Erathis's Beacon (level 3)", "ID_FMP_MAGIC_ITEM_8007"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Erathis's Beacon (level 8)"] = new RulesElement({
    name: "Erathis's Beacon (level 8)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8008",
    source: "Dungeon Master's Guide 2",
    categories: ["Erathis's Beacon (level 8)", "ID_FMP_MAGIC_ITEM_8008"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Fortune's Nod (heroic tier)"] = new RulesElement({
    name: "Fortune's Nod (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8060",
    source: "Dungeon Master's Guide 2",
    categories: ["Fortune's Nod (heroic tier)", "ID_FMP_MAGIC_ITEM_8060"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Heartblood of Festergrim (epic tier)"] = new RulesElement({
    name: "Heartblood of Festergrim (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8062",
    source: "Dungeon Master's Guide 2",
    categories: ["Heartblood of Festergrim (epic tier)", "ID_FMP_MAGIC_ITEM_8062"],
    rules: function(model) {
      model.statadd("Heartblood of Festergrim (epic tier)", 15, "Heartblood of Festergrim (epic tier)");
      model.statadd("resist:fire", function() { return model.stat("Heartblood of Festergrim (epic tier)"); }, "resist");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Heartblood of Festergrim (paragon tier)"] = new RulesElement({
    name: "Heartblood of Festergrim (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8061",
    source: "Dungeon Master's Guide 2",
    categories: ["Heartblood of Festergrim (paragon tier)", "ID_FMP_MAGIC_ITEM_8061"],
    rules: function(model) {
      model.statadd("Heartblood of Festergrim (paragon tier)", 10, "Heartblood of Festergrim (paragon tier)");
      model.statadd("resist:fire", function() { return model.stat("Heartblood of Festergrim (paragon tier)"); }, "resist");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ioun's Revelation (level 13)"] = new RulesElement({
    name: "Ioun's Revelation (level 13)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8015",
    source: "Dungeon Master's Guide 2",
    categories: ["Ioun's Revelation (level 13)", "ID_FMP_MAGIC_ITEM_8015"],
    rules: function(model) {
      model.statadd("Acrobatics Misc", 2, "item");
      model.statadd("Arcana Misc", 2, "item");
      model.statadd("Athletics Misc", 2, "item");
      model.statadd("Bluff Misc", 2, "item");
      model.statadd("Diplomacy Misc", 2, "item");
      model.statadd("Dungeoneering Misc", 2, "item");
      model.statadd("Endurance Misc", 2, "item");
      model.statadd("Heal Misc", 2, "item");
      model.statadd("History Misc", 2, "item");
      model.statadd("Insight Misc", 2, "item");
      model.statadd("Intimidate Misc", 2, "item");
      model.statadd("Nature Misc", 2, "item");
      model.statadd("Perception Misc", 2, "item");
      model.statadd("Religion Misc", 2, "item");
      model.statadd("Stealth Misc", 2, "item");
      model.statadd("Streetwise Misc", 2, "item");
      model.statadd("Thievery Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ioun's Revelation (level 18)"] = new RulesElement({
    name: "Ioun's Revelation (level 18)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8016",
    source: "Dungeon Master's Guide 2",
    categories: ["Ioun's Revelation (level 18)", "ID_FMP_MAGIC_ITEM_8016"],
    rules: function(model) {
      model.statadd("Acrobatics Misc", 2, "item");
      model.statadd("Arcana Misc", 2, "item");
      model.statadd("Athletics Misc", 2, "item");
      model.statadd("Bluff Misc", 2, "item");
      model.statadd("Diplomacy Misc", 2, "item");
      model.statadd("Dungeoneering Misc", 2, "item");
      model.statadd("Endurance Misc", 2, "item");
      model.statadd("Heal Misc", 2, "item");
      model.statadd("History Misc", 2, "item");
      model.statadd("Insight Misc", 2, "item");
      model.statadd("Intimidate Misc", 2, "item");
      model.statadd("Nature Misc", 2, "item");
      model.statadd("Perception Misc", 2, "item");
      model.statadd("Religion Misc", 2, "item");
      model.statadd("Stealth Misc", 2, "item");
      model.statadd("Streetwise Misc", 2, "item");
      model.statadd("Thievery Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ioun's Revelation (level 23)"] = new RulesElement({
    name: "Ioun's Revelation (level 23)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8017",
    source: "Dungeon Master's Guide 2",
    categories: ["Ioun's Revelation (level 23)", "ID_FMP_MAGIC_ITEM_8017"],
    rules: function(model) {
      model.statadd("Acrobatics Misc", 2, "item");
      model.statadd("Arcana Misc", 2, "item");
      model.statadd("Athletics Misc", 2, "item");
      model.statadd("Bluff Misc", 2, "item");
      model.statadd("Diplomacy Misc", 2, "item");
      model.statadd("Dungeoneering Misc", 2, "item");
      model.statadd("Endurance Misc", 2, "item");
      model.statadd("Heal Misc", 2, "item");
      model.statadd("History Misc", 2, "item");
      model.statadd("Insight Misc", 2, "item");
      model.statadd("Intimidate Misc", 2, "item");
      model.statadd("Nature Misc", 2, "item");
      model.statadd("Perception Misc", 2, "item");
      model.statadd("Religion Misc", 2, "item");
      model.statadd("Stealth Misc", 2, "item");
      model.statadd("Streetwise Misc", 2, "item");
      model.statadd("Thievery Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ioun's Revelation (level 28)"] = new RulesElement({
    name: "Ioun's Revelation (level 28)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8018",
    source: "Dungeon Master's Guide 2",
    categories: ["Ioun's Revelation (level 28)", "ID_FMP_MAGIC_ITEM_8018"],
    rules: function(model) {
      model.statadd("Acrobatics Misc", 2, "item");
      model.statadd("Arcana Misc", 2, "item");
      model.statadd("Athletics Misc", 2, "item");
      model.statadd("Bluff Misc", 2, "item");
      model.statadd("Diplomacy Misc", 2, "item");
      model.statadd("Dungeoneering Misc", 2, "item");
      model.statadd("Endurance Misc", 2, "item");
      model.statadd("Heal Misc", 2, "item");
      model.statadd("History Misc", 2, "item");
      model.statadd("Insight Misc", 2, "item");
      model.statadd("Intimidate Misc", 2, "item");
      model.statadd("Nature Misc", 2, "item");
      model.statadd("Perception Misc", 2, "item");
      model.statadd("Religion Misc", 2, "item");
      model.statadd("Stealth Misc", 2, "item");
      model.statadd("Streetwise Misc", 2, "item");
      model.statadd("Thievery Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ioun's Revelation (level 3)"] = new RulesElement({
    name: "Ioun's Revelation (level 3)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8013",
    source: "Dungeon Master's Guide 2",
    categories: ["Ioun's Revelation (level 3)", "ID_FMP_MAGIC_ITEM_8013"],
    rules: function(model) {
      model.statadd("Acrobatics Misc", 2, "item");
      model.statadd("Arcana Misc", 2, "item");
      model.statadd("Athletics Misc", 2, "item");
      model.statadd("Bluff Misc", 2, "item");
      model.statadd("Diplomacy Misc", 2, "item");
      model.statadd("Dungeoneering Misc", 2, "item");
      model.statadd("Endurance Misc", 2, "item");
      model.statadd("Heal Misc", 2, "item");
      model.statadd("History Misc", 2, "item");
      model.statadd("Insight Misc", 2, "item");
      model.statadd("Intimidate Misc", 2, "item");
      model.statadd("Nature Misc", 2, "item");
      model.statadd("Perception Misc", 2, "item");
      model.statadd("Religion Misc", 2, "item");
      model.statadd("Stealth Misc", 2, "item");
      model.statadd("Streetwise Misc", 2, "item");
      model.statadd("Thievery Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ioun's Revelation (level 8)"] = new RulesElement({
    name: "Ioun's Revelation (level 8)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8014",
    source: "Dungeon Master's Guide 2",
    categories: ["Ioun's Revelation (level 8)", "ID_FMP_MAGIC_ITEM_8014"],
    rules: function(model) {
      model.statadd("Acrobatics Misc", 2, "item");
      model.statadd("Arcana Misc", 2, "item");
      model.statadd("Athletics Misc", 2, "item");
      model.statadd("Bluff Misc", 2, "item");
      model.statadd("Diplomacy Misc", 2, "item");
      model.statadd("Dungeoneering Misc", 2, "item");
      model.statadd("Endurance Misc", 2, "item");
      model.statadd("Heal Misc", 2, "item");
      model.statadd("History Misc", 2, "item");
      model.statadd("Insight Misc", 2, "item");
      model.statadd("Intimidate Misc", 2, "item");
      model.statadd("Nature Misc", 2, "item");
      model.statadd("Perception Misc", 2, "item");
      model.statadd("Religion Misc", 2, "item");
      model.statadd("Stealth Misc", 2, "item");
      model.statadd("Streetwise Misc", 2, "item");
      model.statadd("Thievery Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Kord's Mighty Strength (level 13)"] = new RulesElement({
    name: "Kord's Mighty Strength (level 13)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8021",
    source: "Dungeon Master's Guide 2",
    categories: ["Kord's Mighty Strength (level 13)", "ID_FMP_MAGIC_ITEM_8021"],
    rules: function(model) {
      model.statadd("Athletics Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Kord's Mighty Strength (level 18)"] = new RulesElement({
    name: "Kord's Mighty Strength (level 18)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8022",
    source: "Dungeon Master's Guide 2",
    categories: ["Kord's Mighty Strength (level 18)", "ID_FMP_MAGIC_ITEM_8022"],
    rules: function(model) {
      model.statadd("Athletics Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Kord's Mighty Strength (level 23)"] = new RulesElement({
    name: "Kord's Mighty Strength (level 23)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8023",
    source: "Dungeon Master's Guide 2",
    categories: ["Kord's Mighty Strength (level 23)", "ID_FMP_MAGIC_ITEM_8023"],
    rules: function(model) {
      model.statadd("Athletics Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Kord's Mighty Strength (level 28)"] = new RulesElement({
    name: "Kord's Mighty Strength (level 28)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8024",
    source: "Dungeon Master's Guide 2",
    categories: ["Kord's Mighty Strength (level 28)", "ID_FMP_MAGIC_ITEM_8024"],
    rules: function(model) {
      model.statadd("Athletics Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Kord's Mighty Strength (level 3)"] = new RulesElement({
    name: "Kord's Mighty Strength (level 3)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8019",
    source: "Dungeon Master's Guide 2",
    categories: ["Kord's Mighty Strength (level 3)", "ID_FMP_MAGIC_ITEM_8019"],
    rules: function(model) {
      model.statadd("Athletics Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Kord's Mighty Strength (level 8)"] = new RulesElement({
    name: "Kord's Mighty Strength (level 8)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8020",
    source: "Dungeon Master's Guide 2",
    categories: ["Kord's Mighty Strength (level 8)", "ID_FMP_MAGIC_ITEM_8020"],
    rules: function(model) {
      model.statadd("Athletics Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Melora's Storm Blessing (level 13)"] = new RulesElement({
    name: "Melora's Storm Blessing (level 13)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8027",
    source: "Dungeon Master's Guide 2",
    categories: ["Melora's Storm Blessing (level 13)", "ID_FMP_MAGIC_ITEM_8027"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Melora's Storm Blessing (level 18)"] = new RulesElement({
    name: "Melora's Storm Blessing (level 18)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8028",
    source: "Dungeon Master's Guide 2",
    categories: ["Melora's Storm Blessing (level 18)", "ID_FMP_MAGIC_ITEM_8028"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Melora's Storm Blessing (level 23)"] = new RulesElement({
    name: "Melora's Storm Blessing (level 23)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8029",
    source: "Dungeon Master's Guide 2",
    categories: ["Melora's Storm Blessing (level 23)", "ID_FMP_MAGIC_ITEM_8029"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Melora's Storm Blessing (level 28)"] = new RulesElement({
    name: "Melora's Storm Blessing (level 28)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8030",
    source: "Dungeon Master's Guide 2",
    categories: ["Melora's Storm Blessing (level 28)", "ID_FMP_MAGIC_ITEM_8030"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Melora's Storm Blessing (level 3)"] = new RulesElement({
    name: "Melora's Storm Blessing (level 3)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8025",
    source: "Dungeon Master's Guide 2",
    categories: ["Melora's Storm Blessing (level 3)", "ID_FMP_MAGIC_ITEM_8025"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Melora's Storm Blessing (level 8)"] = new RulesElement({
    name: "Melora's Storm Blessing (level 8)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8026",
    source: "Dungeon Master's Guide 2",
    categories: ["Melora's Storm Blessing (level 8)", "ID_FMP_MAGIC_ITEM_8026"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Moradin's Blessing of Iron (level 13)"] = new RulesElement({
    name: "Moradin's Blessing of Iron (level 13)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8033",
    source: "Dungeon Master's Guide 2",
    categories: ["Moradin's Blessing of Iron (level 13)", "ID_FMP_MAGIC_ITEM_8033"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Moradin's Blessing of Iron (level 18)"] = new RulesElement({
    name: "Moradin's Blessing of Iron (level 18)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8034",
    source: "Dungeon Master's Guide 2",
    categories: ["Moradin's Blessing of Iron (level 18)", "ID_FMP_MAGIC_ITEM_8034"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Moradin's Blessing of Iron (level 23)"] = new RulesElement({
    name: "Moradin's Blessing of Iron (level 23)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8035",
    source: "Dungeon Master's Guide 2",
    categories: ["Moradin's Blessing of Iron (level 23)", "ID_FMP_MAGIC_ITEM_8035"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Moradin's Blessing of Iron (level 28)"] = new RulesElement({
    name: "Moradin's Blessing of Iron (level 28)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8036",
    source: "Dungeon Master's Guide 2",
    categories: ["Moradin's Blessing of Iron (level 28)", "ID_FMP_MAGIC_ITEM_8036"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Moradin's Blessing of Iron (level 3)"] = new RulesElement({
    name: "Moradin's Blessing of Iron (level 3)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8031",
    source: "Dungeon Master's Guide 2",
    categories: ["Moradin's Blessing of Iron (level 3)", "ID_FMP_MAGIC_ITEM_8031"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Moradin's Blessing of Iron (level 8)"] = new RulesElement({
    name: "Moradin's Blessing of Iron (level 8)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8032",
    source: "Dungeon Master's Guide 2",
    categories: ["Moradin's Blessing of Iron (level 8)", "ID_FMP_MAGIC_ITEM_8032"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Pelor's Sun Blessing (level 13)"] = new RulesElement({
    name: "Pelor's Sun Blessing (level 13)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8039",
    source: "Dungeon Master's Guide 2",
    categories: ["Pelor's Sun Blessing (level 13)", "ID_FMP_MAGIC_ITEM_8039"],
    rules: function(model) {
      model.statadd("Pelor's Sun Blessing (level 13)", function() { return model.stat("Wisdom modifier"); }, "Pelor's Sun Blessing (level 13)");
      model.statadd("Pelor's Sun Blessing (level 13)", function() { return model.stat("Constitution modifier"); }, "Pelor's Sun Blessing (level 13)");
      model.statadd("Damage", function() { /* if the target has vulnerability to radiant damage */ return model.stat("Pelor's Sun Blessing (level 13)"); });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Pelor's Sun Blessing (level 18)"] = new RulesElement({
    name: "Pelor's Sun Blessing (level 18)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8040",
    source: "Dungeon Master's Guide 2",
    categories: ["Pelor's Sun Blessing (level 18)", "ID_FMP_MAGIC_ITEM_8040"],
    rules: function(model) {
      model.statadd("Pelor's Sun Blessing (level 18)", function() { return model.stat("Wisdom modifier"); }, "Pelor's Sun Blessing (level 18)");
      model.statadd("Pelor's Sun Blessing (level 18)", function() { return model.stat("Constitution modifier"); }, "Pelor's Sun Blessing (level 18)");
      model.statadd("Damage", function() { /* if the target has vulnerability to radiant damage */ return model.stat("Pelor's Sun Blessing (level 18)"); });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Pelor's Sun Blessing (level 23)"] = new RulesElement({
    name: "Pelor's Sun Blessing (level 23)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8041",
    source: "Dungeon Master's Guide 2",
    categories: ["Pelor's Sun Blessing (level 23)", "ID_FMP_MAGIC_ITEM_8041"],
    rules: function(model) {
      model.statadd("Pelor's Sun Blessing (level 23)", function() { return model.stat("Wisdom modifier"); }, "Pelor's Sun Blessing (level 23)");
      model.statadd("Pelor's Sun Blessing (level 23)", function() { return model.stat("Constitution modifier"); }, "Pelor's Sun Blessing (level 23)");
      model.statadd("Damage", function() { /* if the target has vulnerability to radiant damage */ return model.stat("Pelor's Sun Blessing (level 23)"); });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Pelor's Sun Blessing (level 28)"] = new RulesElement({
    name: "Pelor's Sun Blessing (level 28)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8042",
    source: "Dungeon Master's Guide 2",
    categories: ["Pelor's Sun Blessing (level 28)", "ID_FMP_MAGIC_ITEM_8042"],
    rules: function(model) {
      model.statadd("Pelor's Sun Blessing (level 28)", function() { return model.stat("Wisdom modifier"); }, "Pelor's Sun Blessing (level 28)");
      model.statadd("Pelor's Sun Blessing (level 28)", function() { return model.stat("Constitution modifier"); }, "Pelor's Sun Blessing (level 28)");
      model.statadd("Damage", function() { /* if the target has vulnerability to radiant damage */ return model.stat("Pelor's Sun Blessing (level 28)"); });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Pelor's Sun Blessing (level 3)"] = new RulesElement({
    name: "Pelor's Sun Blessing (level 3)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8037",
    source: "Dungeon Master's Guide 2",
    categories: ["Pelor's Sun Blessing (level 3)", "ID_FMP_MAGIC_ITEM_8037"],
    rules: function(model) {
      model.statadd("Pelor's Sun Blessing (level 3)", function() { return model.stat("Wisdom modifier"); }, "Pelor's Sun Blessing (level 3)");
      model.statadd("Pelor's Sun Blessing (level 3)", function() { return model.stat("Constitution modifier"); }, "Pelor's Sun Blessing (level 3)");
      model.statadd("Damage", function() { /* if the target has vulnerability to radiant damage */ return model.stat("Pelor's Sun Blessing (level 3)"); });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Pelor's Sun Blessing (level 8)"] = new RulesElement({
    name: "Pelor's Sun Blessing (level 8)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8038",
    source: "Dungeon Master's Guide 2",
    categories: ["Pelor's Sun Blessing (level 8)", "ID_FMP_MAGIC_ITEM_8038"],
    rules: function(model) {
      model.statadd("Pelor's Sun Blessing (level 8)", function() { return model.stat("Wisdom modifier"); }, "Pelor's Sun Blessing (level 8)");
      model.statadd("Pelor's Sun Blessing (level 8)", function() { return model.stat("Constitution modifier"); }, "Pelor's Sun Blessing (level 8)");
      model.statadd("Damage", function() { /* if the target has vulnerability to radiant damage */ return model.stat("Pelor's Sun Blessing (level 8)"); });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Potion of Al'Akbar"] = new RulesElement({
    name: "Potion of Al'Akbar",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7973",
    source: "Dungeon Master's Guide 2",
    categories: ["Potion of Al'Akbar", "ID_FMP_MAGIC_ITEM_7973"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Quickening Waters (epic tier)"] = new RulesElement({
    name: "Quickening Waters (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8064",
    source: "Dungeon Master's Guide 2",
    categories: ["Quickening Waters (epic tier)", "ID_FMP_MAGIC_ITEM_8064"],
    rules: function(model) {
      model.statadd("Speed", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rash and Reckless"] = new RulesElement({
    name: "Rash and Reckless",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7975",
    source: "Dungeon Master's Guide 2",
    categories: ["Rash and Reckless", "ID_FMP_MAGIC_ITEM_7975"],
    rules: function(model) {
      model.statadd("melee basic:key ability", "dex");
      model.statadd("Acrobatics Misc", 2, "item");
      model.statadd("Athletics Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Seven Parts (Five Parts)"] = new RulesElement({
    name: "Rod of Seven Parts (Five Parts)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8095",
    source: "Dungeon Master's Guide 2",
    categories: ["Rod of Seven Parts (Five Parts)", "ID_FMP_MAGIC_ITEM_8095"],
    rules: function(model) {
      model.statadd("Diplomacy Misc", 5, "item");
      model.statadd("Intimidate Misc", 5, "item");
      model.statadd("Religion Misc", 5, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Seven Parts (Four Parts)"] = new RulesElement({
    name: "Rod of Seven Parts (Four Parts)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8094",
    source: "Dungeon Master's Guide 2",
    categories: ["Rod of Seven Parts (Four Parts)", "ID_FMP_MAGIC_ITEM_8094"],
    rules: function(model) {
      model.statadd("Diplomacy Misc", 4, "item");
      model.statadd("Intimidate Misc", 4, "item");
      model.statadd("Religion Misc", 4, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Seven Parts (One Part)"] = new RulesElement({
    name: "Rod of Seven Parts (One Part)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7978",
    source: "Dungeon Master's Guide 2",
    categories: ["Rod of Seven Parts (One Part)", "ID_FMP_MAGIC_ITEM_7978"],
    rules: function(model) {
      model.statadd("Diplomacy Misc", 1, "item");
      model.statadd("Intimidate Misc", 1, "item");
      model.statadd("Religion Misc", 1, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Seven Parts (Seven Parts)"] = new RulesElement({
    name: "Rod of Seven Parts (Seven Parts)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8097",
    source: "Dungeon Master's Guide 2",
    categories: ["Rod of Seven Parts (Seven Parts)", "ID_FMP_MAGIC_ITEM_8097"],
    rules: function(model) {
      model.statadd("Diplomacy Misc", 7, "item");
      model.statadd("Intimidate Misc", 7, "item");
      model.statadd("Religion Misc", 7, "item");
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Seven Parts (Six Parts)"] = new RulesElement({
    name: "Rod of Seven Parts (Six Parts)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8096",
    source: "Dungeon Master's Guide 2",
    categories: ["Rod of Seven Parts (Six Parts)", "ID_FMP_MAGIC_ITEM_8096"],
    rules: function(model) {
      model.statadd("Diplomacy Misc", 6, "item");
      model.statadd("Intimidate Misc", 6, "item");
      model.statadd("Religion Misc", 6, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Seven Parts (Three Parts)"] = new RulesElement({
    name: "Rod of Seven Parts (Three Parts)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8093",
    source: "Dungeon Master's Guide 2",
    categories: ["Rod of Seven Parts (Three Parts)", "ID_FMP_MAGIC_ITEM_8093"],
    rules: function(model) {
      model.statadd("Diplomacy Misc", 3, "item");
      model.statadd("Intimidate Misc", 3, "item");
      model.statadd("Religion Misc", 3, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Seven Parts (Two Parts)"] = new RulesElement({
    name: "Rod of Seven Parts (Two Parts)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8092",
    source: "Dungeon Master's Guide 2",
    categories: ["Rod of Seven Parts (Two Parts)", "ID_FMP_MAGIC_ITEM_8092"],
    rules: function(model) {
      model.statadd("Diplomacy Misc", 2, "item");
      model.statadd("Intimidate Misc", 2, "item");
      model.statadd("Religion Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Sehanine's Mark of the Dark Moon (level 13)"] = new RulesElement({
    name: "Sehanine's Mark of the Dark Moon (level 13)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8051",
    source: "Dungeon Master's Guide 2",
    categories: ["Sehanine's Mark of the Dark Moon (level 13)", "ID_FMP_MAGIC_ITEM_8051"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Sehanine's Mark of the Dark Moon (level 18)"] = new RulesElement({
    name: "Sehanine's Mark of the Dark Moon (level 18)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8052",
    source: "Dungeon Master's Guide 2",
    categories: ["Sehanine's Mark of the Dark Moon (level 18)", "ID_FMP_MAGIC_ITEM_8052"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Sehanine's Mark of the Dark Moon (level 23)"] = new RulesElement({
    name: "Sehanine's Mark of the Dark Moon (level 23)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8053",
    source: "Dungeon Master's Guide 2",
    categories: ["Sehanine's Mark of the Dark Moon (level 23)", "ID_FMP_MAGIC_ITEM_8053"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Sehanine's Mark of the Dark Moon (level 28)"] = new RulesElement({
    name: "Sehanine's Mark of the Dark Moon (level 28)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8054",
    source: "Dungeon Master's Guide 2",
    categories: ["Sehanine's Mark of the Dark Moon (level 28)", "ID_FMP_MAGIC_ITEM_8054"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Sehanine's Mark of the Dark Moon (level 3)"] = new RulesElement({
    name: "Sehanine's Mark of the Dark Moon (level 3)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8049",
    source: "Dungeon Master's Guide 2",
    categories: ["Sehanine's Mark of the Dark Moon (level 3)", "ID_FMP_MAGIC_ITEM_8049"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Sehanine's Mark of the Dark Moon (level 8)"] = new RulesElement({
    name: "Sehanine's Mark of the Dark Moon (level 8)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8050",
    source: "Dungeon Master's Guide 2",
    categories: ["Sehanine's Mark of the Dark Moon (level 8)", "ID_FMP_MAGIC_ITEM_8050"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Silver Hands of Power (level 14)"] = new RulesElement({
    name: "Silver Hands of Power (level 14)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8065",
    source: "Dungeon Master's Guide 2",
    categories: ["Silver Hands of Power (level 14)", "ID_FMP_MAGIC_ITEM_8065"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Silver Hands of Power (level 19)"] = new RulesElement({
    name: "Silver Hands of Power (level 19)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8066",
    source: "Dungeon Master's Guide 2",
    categories: ["Silver Hands of Power (level 19)", "ID_FMP_MAGIC_ITEM_8066"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Standard of Eternal Battle"] = new RulesElement({
    name: "Standard of Eternal Battle",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7977",
    source: "Dungeon Master's Guide 2",
    categories: ["Standard of Eternal Battle", "ID_FMP_MAGIC_ITEM_7977"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Talisman of Al'Akbar"] = new RulesElement({
    name: "Talisman of Al'Akbar",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7971",
    source: "Dungeon Master's Guide 2",
    categories: ["Talisman of Al'Akbar", "ID_FMP_MAGIC_ITEM_7971"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["The Raven Queen's Shroud (level 13)"] = new RulesElement({
    name: "The Raven Queen's Shroud (level 13)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8045",
    source: "Dungeon Master's Guide 2",
    categories: ["The Raven Queen's Shroud (level 13)", "ID_FMP_MAGIC_ITEM_8045"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["The Raven Queen's Shroud (level 18)"] = new RulesElement({
    name: "The Raven Queen's Shroud (level 18)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8046",
    source: "Dungeon Master's Guide 2",
    categories: ["The Raven Queen's Shroud (level 18)", "ID_FMP_MAGIC_ITEM_8046"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["The Raven Queen's Shroud (level 23)"] = new RulesElement({
    name: "The Raven Queen's Shroud (level 23)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8047",
    source: "Dungeon Master's Guide 2",
    categories: ["The Raven Queen's Shroud (level 23)", "ID_FMP_MAGIC_ITEM_8047"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["The Raven Queen's Shroud (level 28)"] = new RulesElement({
    name: "The Raven Queen's Shroud (level 28)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8048",
    source: "Dungeon Master's Guide 2",
    categories: ["The Raven Queen's Shroud (level 28)", "ID_FMP_MAGIC_ITEM_8048"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["The Raven Queen's Shroud (level 3)"] = new RulesElement({
    name: "The Raven Queen's Shroud (level 3)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8043",
    source: "Dungeon Master's Guide 2",
    categories: ["The Raven Queen's Shroud (level 3)", "ID_FMP_MAGIC_ITEM_8043"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["The Raven Queen's Shroud (level 8)"] = new RulesElement({
    name: "The Raven Queen's Shroud (level 8)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8044",
    source: "Dungeon Master's Guide 2",
    categories: ["The Raven Queen's Shroud (level 8)", "ID_FMP_MAGIC_ITEM_8044"]
  });
  byID[te.id] = te;
  
  
})(this);
