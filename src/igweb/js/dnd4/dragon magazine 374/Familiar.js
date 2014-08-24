(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Familiar = types['Familiar'] || (types['Familiar'] = {});
  te = Familiar["Air Mephit"] = new RulesElement({
    name: "Air Mephit",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_36",
    source: "Dragon Magazine 374",
    categories: ["Air Mephit", "ID_FMP_FAMILIAR_36"],
    rules: function(model) {
      model.statadd("Bluff Misc", 2);
      model.grant(elements.id["ID_FMP_LANGUAGE_6"]);
      model.statadd("resist:lightning", 5, "resist");
      model.statadd("resist:thunder", 5, "resist");
      model.statadd("resist:lightning", 2, "resist");
      model.statadd("resist:thunder", 2, "resist");
    }
  });
  byID[te.id] = te;
  
  te = Familiar["Arcane Eye"] = new RulesElement({
    name: "Arcane Eye",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_23",
    source: "Dragon Magazine 374",
    categories: ["Arcane Eye", "ID_FMP_FAMILIAR_23"],
    rules: function(model) {
      model.statadd("Perception Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Familiar["Arcane Wisp"] = new RulesElement({
    name: "Arcane Wisp",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_37",
    source: "Dragon Magazine 374",
    categories: ["Arcane Wisp", "ID_FMP_FAMILIAR_37"],
    rules: function(model) {
      model.statadd("Stealth Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Familiar["Badger"] = new RulesElement({
    name: "Badger",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_24",
    source: "Dragon Magazine 374",
    categories: ["Badger", "ID_FMP_FAMILIAR_24"],
    rules: function(model) {
      model.statadd("Intimidate Misc", 2);
      model.statadd("Badger", 1);
      model.statadd("damage rolls", function() { /* while bloodied */ return model.stat("Badger"); });
      model.statadd("Badger", 1);
      model.statadd("Badger", 1);
    }
  });
  byID[te.id] = te;
  
  te = Familiar["Beholderkin"] = new RulesElement({
    name: "Beholderkin",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_38",
    source: "Dragon Magazine 374",
    categories: ["Beholderkin", "ID_FMP_FAMILIAR_38"],
    rules: function(model) {
      model.statadd("Perception Misc", 2);
      model.grant(elements.id["ID_FMP_LANGUAGE_18"]);
    }
  });
  byID[te.id] = te;
  
  te = Familiar["Blackspawn Darkling"] = new RulesElement({
    name: "Blackspawn Darkling",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_39",
    source: "Dragon Magazine 374",
    categories: ["Blackspawn Darkling", "ID_FMP_FAMILIAR_39"],
    rules: function(model) {
      model.statadd("Stealth Misc", 2);
      model.grant(elements.id["ID_FMP_LANGUAGE_2"]);
      model.statadd("resist:acid", 5, "resist");
      model.statadd("resist:acid", 2);
    }
  });
  byID[te.id] = te;
  
  te = Familiar["Blazing Skull"] = new RulesElement({
    name: "Blazing Skull",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_50",
    source: "Dragon Magazine 374",
    categories: ["Blazing Skull", "ID_FMP_FAMILIAR_50"],
    rules: function(model) {
      model.statadd("Arcana Misc", 2);
      model.statadd("Stealth Misc", 2);
      model.statadd("resist:fire", 5, "resist");
      model.statadd("resist:fire", 2);
    }
  });
  byID[te.id] = te;
  
  te = Familiar["Bluespawn Nimblespark"] = new RulesElement({
    name: "Bluespawn Nimblespark",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_40",
    source: "Dragon Magazine 374",
    categories: ["Bluespawn Nimblespark", "ID_FMP_FAMILIAR_40"],
    rules: function(model) {
      model.statadd("Athletics Misc", 2);
      model.statadd("Nature Misc", 2);
      model.grant(elements.id["ID_FMP_LANGUAGE_2"]);
      model.statadd("resist:lightning", 5, "resist");
      model.statadd("resist:lightning", 2);
    }
  });
  byID[te.id] = te;
  
  te = Familiar["Canine Construct"] = new RulesElement({
    name: "Canine Construct",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_25",
    source: "Dragon Magazine 374",
    categories: ["Canine Construct", "ID_FMP_FAMILIAR_25"],
    rules: function(model) {
      model.statadd("Athletics Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Familiar["Chaos Shard"] = new RulesElement({
    name: "Chaos Shard",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_51",
    source: "Dragon Magazine 374",
    categories: ["Chaos Shard", "ID_FMP_FAMILIAR_51"],
    rules: function(model) {
      model.statadd("Arcana Misc", 2);
      model.statadd("Saving Throws", function() { /* against the dominated condition */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Familiar["Disembodied Hand"] = new RulesElement({
    name: "Disembodied Hand",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_26",
    source: "Dragon Magazine 374",
    categories: ["Disembodied Hand", "ID_FMP_FAMILIAR_26"]
  });
  byID[te.id] = te;
  
  te = Familiar["Earth Mephit"] = new RulesElement({
    name: "Earth Mephit",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_41",
    source: "Dragon Magazine 374",
    categories: ["Earth Mephit", "ID_FMP_FAMILIAR_41"],
    rules: function(model) {
      model.statadd("Bluff Misc", 2);
      model.statadd("Endurance Misc", 2);
      model.grant(elements.id["ID_FMP_LANGUAGE_6"]);
    }
  });
  byID[te.id] = te;
  
  te = Familiar["Fire Lizard"] = new RulesElement({
    name: "Fire Lizard",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_27",
    source: "Dragon Magazine 374",
    categories: ["Fire Lizard", "ID_FMP_FAMILIAR_27"],
    rules: function(model) {
      model.statadd("Athletics Misc", 2);
      model.statadd("Endurance Misc", 2);
      model.statadd("resist:fire", 5, "resist");
      model.statadd("resist:fire", 2);
      model.statadd("resist:fire", function() { /* while you are bloodied */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Familiar["Fire Mephit"] = new RulesElement({
    name: "Fire Mephit",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_42",
    source: "Dragon Magazine 374",
    categories: ["Fire Mephit", "ID_FMP_FAMILIAR_42"],
    rules: function(model) {
      model.statadd("Bluff Misc", 2);
      model.grant(elements.id["ID_FMP_LANGUAGE_6"]);
      model.statadd("resist:fire", 5, "resist");
      model.statadd("resist:fire", 2);
    }
  });
  byID[te.id] = te;
  
  te = Familiar["Gibbering Pet"] = new RulesElement({
    name: "Gibbering Pet",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_52",
    source: "Dragon Magazine 374",
    categories: ["Gibbering Pet", "ID_FMP_FAMILIAR_52"]
  });
  byID[te.id] = te;
  
  te = Familiar["Grayspawn Shortfang"] = new RulesElement({
    name: "Grayspawn Shortfang",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_43",
    source: "Dragon Magazine 374",
    categories: ["Grayspawn Shortfang", "ID_FMP_FAMILIAR_43"],
    rules: function(model) {
      model.statadd("Arcana Misc", 2);
      model.statadd("Intimidate Misc", 2);
      model.grant(elements.id["ID_FMP_LANGUAGE_2"]);
      model.statadd("resist:acid", 5, "resist");
      model.statadd("resist:acid", 2);
    }
  });
  byID[te.id] = te;
  
  te = Familiar["Greenspawn Banespeak"] = new RulesElement({
    name: "Greenspawn Banespeak",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_44",
    source: "Dragon Magazine 374",
    categories: ["Greenspawn Banespeak", "ID_FMP_FAMILIAR_44"],
    rules: function(model) {
      model.statadd("Bluff Misc", 2);
      model.grant(elements.id["ID_FMP_LANGUAGE_2"]);
      model.statadd("resist:poison", 5, "resist");
      model.statadd("resist:poison", 2);
    }
  });
  byID[te.id] = te;
  
  te = Familiar["Ice Mephit"] = new RulesElement({
    name: "Ice Mephit",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_45",
    source: "Dragon Magazine 374",
    categories: ["Ice Mephit", "ID_FMP_FAMILIAR_45"],
    rules: function(model) {
      model.statadd("Bluff Misc", 2);
      model.grant(elements.id["ID_FMP_LANGUAGE_6"]);
      model.statadd("resist:cold", 5, "resist");
      model.statadd("resist:cold", 2);
    }
  });
  byID[te.id] = te;
  
  te = Familiar["Lightning Lizard"] = new RulesElement({
    name: "Lightning Lizard",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_28",
    source: "Dragon Magazine 374",
    categories: ["Lightning Lizard", "ID_FMP_FAMILIAR_28"],
    rules: function(model) {
      model.statadd("Acrobatics Misc", 2);
      model.statadd("Athletics Misc", 2);
      model.statadd("resist:lightning", 5, "resist");
      model.statadd("resist:lightning", 2);
      model.statadd("resist:lightning", function() { /* while you are bloodied */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Familiar["Ooze"] = new RulesElement({
    name: "Ooze",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_29",
    source: "Dragon Magazine 374",
    categories: ["Ooze", "ID_FMP_FAMILIAR_29"],
    rules: function(model) {
      model.statadd("Dungeoneering Misc", 2);
      model.statadd("resist:acid", 5, "resist");
      model.statadd("resist:acid", 2);
    }
  });
  byID[te.id] = te;
  
  te = Familiar["Parrot"] = new RulesElement({
    name: "Parrot",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_30",
    source: "Dragon Magazine 374",
    categories: ["Parrot", "ID_FMP_FAMILIAR_30"],
    rules: function(model) {
      model.statadd("Diplomacy Misc", 2);
      model.statadd("Streetwise Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Familiar["Rakshasa Claw"] = new RulesElement({
    name: "Rakshasa Claw",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_46",
    source: "Dragon Magazine 374",
    categories: ["Rakshasa Claw", "ID_FMP_FAMILIAR_46"],
    rules: function(model) {
      model.statadd("Arcana Misc", 2);
      model.statadd("Insight Misc", function() { /* to recognize effects as illusory */ return 5; });
    }
  });
  byID[te.id] = te;
  
  te = Familiar["Redspawn Spirfire"] = new RulesElement({
    name: "Redspawn Spirfire",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_47",
    source: "Dragon Magazine 374",
    categories: ["Redspawn Spirfire", "ID_FMP_FAMILIAR_47"],
    rules: function(model) {
      model.statadd("Intimidate Misc", 2);
      model.grant(elements.id["ID_FMP_LANGUAGE_2"]);
      model.statadd("resist:fire", 5, "resist");
      model.statadd("resist:fire", 2);
    }
  });
  byID[te.id] = te;
  
  te = Familiar["Rootling"] = new RulesElement({
    name: "Rootling",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_31",
    source: "Dragon Magazine 374",
    categories: ["Rootling", "ID_FMP_FAMILIAR_31"],
    rules: function(model) {
      model.statadd("Nature Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Familiar["Scout Homunculus"] = new RulesElement({
    name: "Scout Homunculus",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_32",
    source: "Dragon Magazine 374",
    categories: ["Scout Homunculus", "ID_FMP_FAMILIAR_32"],
    rules: function(model) {
      model.statadd("Stealth Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Familiar["Shadow Incarnate"] = new RulesElement({
    name: "Shadow Incarnate",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_53",
    source: "Dragon Magazine 374",
    categories: ["Shadow Incarnate", "ID_FMP_FAMILIAR_53"],
    rules: function(model) {
      model.statadd("Stealth Misc", 2);
      model.grant(elements.id["ID_INTERNAL_VISION_DARKVISION"]);
    }
  });
  byID[te.id] = te;
  
  te = Familiar["Skull"] = new RulesElement({
    name: "Skull",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_33",
    source: "Dragon Magazine 374",
    categories: ["Skull", "ID_FMP_FAMILIAR_33"],
    rules: function(model) {
      model.statadd("Arcana Misc", 2);
      model.statadd("Intimidate Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Familiar["Stone Fowl"] = new RulesElement({
    name: "Stone Fowl",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_48",
    source: "Dragon Magazine 374",
    categories: ["Stone Fowl", "ID_FMP_FAMILIAR_48"],
    rules: function(model) {
      model.statadd("Dungeoneering Misc", 2);
      model.statadd("resist:poison", 5, "resist");
      model.statadd("resist:poison", 2);
    }
  });
  byID[te.id] = te;
  
  te = Familiar["Toad"] = new RulesElement({
    name: "Toad",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_34",
    source: "Dragon Magazine 374",
    categories: ["Toad", "ID_FMP_FAMILIAR_34"],
    rules: function(model) {
      model.statadd("Endurance Misc", 2);
      model.statadd("Toad", 2);
      model.statadd("Healing Surge Value", function() { return model.stat("Toad"); });
    }
  });
  byID[te.id] = te;
  
  te = Familiar["Weasel"] = new RulesElement({
    name: "Weasel",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_35",
    source: "Dragon Magazine 374",
    categories: ["Weasel", "ID_FMP_FAMILIAR_35"],
    rules: function(model) {
      model.statadd("Acrobatics Misc", 2);
      model.statadd("Bluff Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Familiar["Whitespawn Snowstepper"] = new RulesElement({
    name: "Whitespawn Snowstepper",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_49",
    source: "Dragon Magazine 374",
    categories: ["Whitespawn Snowstepper", "ID_FMP_FAMILIAR_49"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_LANGUAGE_2"]);
      model.statadd("resist:cold", 5, "resist");
      model.statadd("resist:cold", 2);
    }
  });
  byID[te.id] = te;
  
  
})(this);
