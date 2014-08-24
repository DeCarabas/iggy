(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Aegis Fang +4"] = new RulesElement({
    name: "Aegis Fang +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9100",
    source: "Dragon Magazine 386",
    categories: ["Aegis Fang +4", "ID_FMP_MAGIC_ITEM_9100"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Armor of Dark Majesty +1"] = new RulesElement({
    name: "Armor of Dark Majesty +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9018",
    source: "Dragon Magazine 386",
    categories: ["Armor of Dark Majesty +1", "ID_FMP_MAGIC_ITEM_9018"],
    rules: function(model) {
      model.statadd("Bluff Misc", 1, "item");
      model.statadd("Intimidate Misc", 1, "item");
      model.statadd("AC", function() { /* against enemies under your Warlock's Curse */ return 2; }, "item");
      model.statadd("Fortitude Defense", function() { /* against enemies under your Warlock's Curse */ return 2; }, "item");
      model.statadd("Will Defense", function() { /* against enemies under your Warlock's Curse */ return 2; }, "item");
      model.statadd("Reflex Defense", function() { /* against enemies under your Warlock's Curse */ return 2; }, "item");
      model.statadd("Armor Class", 1, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Armor of Dark Majesty +2"] = new RulesElement({
    name: "Armor of Dark Majesty +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9019",
    source: "Dragon Magazine 386",
    categories: ["Armor of Dark Majesty +2", "ID_FMP_MAGIC_ITEM_9019"],
    rules: function(model) {
      model.statadd("Bluff Misc", 2, "item");
      model.statadd("Intimidate Misc", 2, "item");
      model.statadd("AC", function() { /* against enemies under your Warlock's Curse */ return 2; }, "item");
      model.statadd("Fortitude Defense", function() { /* against enemies under your Warlock's Curse */ return 2; }, "item");
      model.statadd("Will Defense", function() { /* against enemies under your Warlock's Curse */ return 2; }, "item");
      model.statadd("Reflex Defense", function() { /* against enemies under your Warlock's Curse */ return 2; }, "item");
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Armor of Dark Majesty +3"] = new RulesElement({
    name: "Armor of Dark Majesty +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9020",
    source: "Dragon Magazine 386",
    categories: ["Armor of Dark Majesty +3", "ID_FMP_MAGIC_ITEM_9020"],
    rules: function(model) {
      model.statadd("Bluff Misc", 3, "item");
      model.statadd("Intimidate Misc", 3, "item");
      model.statadd("AC", function() { /* against enemies under your Warlock's Curse */ return 2; }, "item");
      model.statadd("Fortitude Defense", function() { /* against enemies under your Warlock's Curse */ return 2; }, "item");
      model.statadd("Will Defense", function() { /* against enemies under your Warlock's Curse */ return 2; }, "item");
      model.statadd("Reflex Defense", function() { /* against enemies under your Warlock's Curse */ return 2; }, "item");
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Armor of Dark Majesty +4"] = new RulesElement({
    name: "Armor of Dark Majesty +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9021",
    source: "Dragon Magazine 386",
    categories: ["Armor of Dark Majesty +4", "ID_FMP_MAGIC_ITEM_9021"],
    rules: function(model) {
      model.statadd("Bluff Misc", 4, "item");
      model.statadd("Intimidate Misc", 4, "item");
      model.statadd("AC", function() { /* against enemies under your Warlock's Curse */ return 2; }, "item");
      model.statadd("Fortitude Defense", function() { /* against enemies under your Warlock's Curse */ return 2; }, "item");
      model.statadd("Will Defense", function() { /* against enemies under your Warlock's Curse */ return 2; }, "item");
      model.statadd("Reflex Defense", function() { /* against enemies under your Warlock's Curse */ return 2; }, "item");
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Armor of Dark Majesty +5"] = new RulesElement({
    name: "Armor of Dark Majesty +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9022",
    source: "Dragon Magazine 386",
    categories: ["Armor of Dark Majesty +5", "ID_FMP_MAGIC_ITEM_9022"],
    rules: function(model) {
      model.statadd("Bluff Misc", 5, "item");
      model.statadd("Intimidate Misc", 5, "item");
      model.statadd("AC", function() { /* against enemies under your Warlock's Curse */ return 2; }, "item");
      model.statadd("Fortitude Defense", function() { /* against enemies under your Warlock's Curse */ return 2; }, "item");
      model.statadd("Will Defense", function() { /* against enemies under your Warlock's Curse */ return 2; }, "item");
      model.statadd("Reflex Defense", function() { /* against enemies under your Warlock's Curse */ return 2; }, "item");
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Armor of Dark Majesty +6"] = new RulesElement({
    name: "Armor of Dark Majesty +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9023",
    source: "Dragon Magazine 386",
    categories: ["Armor of Dark Majesty +6", "ID_FMP_MAGIC_ITEM_9023"],
    rules: function(model) {
      model.statadd("Bluff Misc", 6, "item");
      model.statadd("Intimidate Misc", 6, "item");
      model.statadd("AC", function() { /* against enemies under your Warlock's Curse */ return 2; }, "item");
      model.statadd("Fortitude Defense", function() { /* against enemies under your Warlock's Curse */ return 2; }, "item");
      model.statadd("Will Defense", function() { /* against enemies under your Warlock's Curse */ return 2; }, "item");
      model.statadd("Reflex Defense", function() { /* against enemies under your Warlock's Curse */ return 2; }, "item");
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Boots of the Giantkind (epic tier)"] = new RulesElement({
    name: "Boots of the Giantkind (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9111",
    source: "Dragon Magazine 386",
    categories: ["Boots of the Giantkind (epic tier)", "ID_FMP_MAGIC_ITEM_9111"],
    rules: function(model) {
      model.statadd("Athletics Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Boots of the Giantkind (heroic tier)"] = new RulesElement({
    name: "Boots of the Giantkind (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9107",
    source: "Dragon Magazine 386",
    categories: ["Boots of the Giantkind (heroic tier)", "ID_FMP_MAGIC_ITEM_9107"],
    rules: function(model) {
      model.statadd("Athletics Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Boots of the Giantkind (paragon tier)"] = new RulesElement({
    name: "Boots of the Giantkind (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9109",
    source: "Dragon Magazine 386",
    categories: ["Boots of the Giantkind (paragon tier)", "ID_FMP_MAGIC_ITEM_9109"],
    rules: function(model) {
      model.statadd("Athletics Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bracers of Speed (paragon tier)"] = new RulesElement({
    name: "Bracers of Speed (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9080",
    source: "Dragon Magazine 386",
    categories: ["Bracers of Speed (paragon tier)", "ID_FMP_MAGIC_ITEM_9080"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Chill Wind Weapon +3"] = new RulesElement({
    name: "Chill Wind Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9068",
    source: "Dragon Magazine 386",
    categories: ["Chill Wind Weapon +3", "ID_FMP_MAGIC_ITEM_9068"],
    rules: function(model) {
      model.statadd("resist:fire", 15, "resist");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Chill Wind Weapon +4"] = new RulesElement({
    name: "Chill Wind Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9069",
    source: "Dragon Magazine 386",
    categories: ["Chill Wind Weapon +4", "ID_FMP_MAGIC_ITEM_9069"],
    rules: function(model) {
      model.statadd("resist:fire", 15, "resist");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Chill Wind Weapon +5"] = new RulesElement({
    name: "Chill Wind Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9070",
    source: "Dragon Magazine 386",
    categories: ["Chill Wind Weapon +5", "ID_FMP_MAGIC_ITEM_9070"],
    rules: function(model) {
      model.statadd("resist:fire", 30, "resist");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Chill Wind Weapon +6"] = new RulesElement({
    name: "Chill Wind Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9071",
    source: "Dragon Magazine 386",
    categories: ["Chill Wind Weapon +6", "ID_FMP_MAGIC_ITEM_9071"],
    rules: function(model) {
      model.statadd("resist:fire", 30, "resist");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Crashing Weapon +2"] = new RulesElement({
    name: "Crashing Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9095",
    source: "Dragon Magazine 386",
    categories: ["Crashing Weapon +2", "ID_FMP_MAGIC_ITEM_9095"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Crashing Weapon +3"] = new RulesElement({
    name: "Crashing Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9096",
    source: "Dragon Magazine 386",
    categories: ["Crashing Weapon +3", "ID_FMP_MAGIC_ITEM_9096"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Crashing Weapon +4"] = new RulesElement({
    name: "Crashing Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9097",
    source: "Dragon Magazine 386",
    categories: ["Crashing Weapon +4", "ID_FMP_MAGIC_ITEM_9097"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Crashing Weapon +5"] = new RulesElement({
    name: "Crashing Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9098",
    source: "Dragon Magazine 386",
    categories: ["Crashing Weapon +5", "ID_FMP_MAGIC_ITEM_9098"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Crashing Weapon +6"] = new RulesElement({
    name: "Crashing Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9099",
    source: "Dragon Magazine 386",
    categories: ["Crashing Weapon +6", "ID_FMP_MAGIC_ITEM_9099"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Crown of the Goliath Champion (paragon tier)"] = new RulesElement({
    name: "Crown of the Goliath Champion (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9112",
    source: "Dragon Magazine 386",
    categories: ["Crown of the Goliath Champion (paragon tier)", "ID_FMP_MAGIC_ITEM_9112"],
    rules: function(model) {
      model.statadd("resist:thunder", 10, "resist");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dantrag's Bracers (paragon tier)"] = new RulesElement({
    name: "Dantrag's Bracers (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9081",
    source: "Dragon Magazine 386",
    categories: ["Dantrag's Bracers (paragon tier)", "ID_FMP_MAGIC_ITEM_9081"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dazzling Weapon +3"] = new RulesElement({
    name: "Dazzling Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9063",
    source: "Dragon Magazine 386",
    categories: ["Dazzling Weapon +3", "ID_FMP_MAGIC_ITEM_9063"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dazzling Weapon +4"] = new RulesElement({
    name: "Dazzling Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9064",
    source: "Dragon Magazine 386",
    categories: ["Dazzling Weapon +4", "ID_FMP_MAGIC_ITEM_9064"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dazzling Weapon +5"] = new RulesElement({
    name: "Dazzling Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9065",
    source: "Dragon Magazine 386",
    categories: ["Dazzling Weapon +5", "ID_FMP_MAGIC_ITEM_9065"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dazzling Weapon +6"] = new RulesElement({
    name: "Dazzling Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9066",
    source: "Dragon Magazine 386",
    categories: ["Dazzling Weapon +6", "ID_FMP_MAGIC_ITEM_9066"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Deep Wounding Weapon +2"] = new RulesElement({
    name: "Deep Wounding Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9074",
    source: "Dragon Magazine 386",
    categories: ["Deep Wounding Weapon +2", "ID_FMP_MAGIC_ITEM_9074"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Deep Wounding Weapon +3"] = new RulesElement({
    name: "Deep Wounding Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9075",
    source: "Dragon Magazine 386",
    categories: ["Deep Wounding Weapon +3", "ID_FMP_MAGIC_ITEM_9075"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Deep Wounding Weapon +4"] = new RulesElement({
    name: "Deep Wounding Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9076",
    source: "Dragon Magazine 386",
    categories: ["Deep Wounding Weapon +4", "ID_FMP_MAGIC_ITEM_9076"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Deep Wounding Weapon +5"] = new RulesElement({
    name: "Deep Wounding Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9077",
    source: "Dragon Magazine 386",
    categories: ["Deep Wounding Weapon +5", "ID_FMP_MAGIC_ITEM_9077"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Deep Wounding Weapon +6"] = new RulesElement({
    name: "Deep Wounding Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9078",
    source: "Dragon Magazine 386",
    categories: ["Deep Wounding Weapon +6", "ID_FMP_MAGIC_ITEM_9078"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Entreri's Jeweled Dagger +5"] = new RulesElement({
    name: "Entreri's Jeweled Dagger +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9106",
    source: "Dragon Magazine 386",
    categories: ["Entreri's Jeweled Dagger +5", "ID_FMP_MAGIC_ITEM_9106"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Eye of Watchfulness (paragon tier)"] = new RulesElement({
    name: "Eye of Watchfulness (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9087",
    source: "Dragon Magazine 386",
    categories: ["Eye of Watchfulness (paragon tier)", "ID_FMP_MAGIC_ITEM_9087"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Guenhwyvar (epic tier)"] = new RulesElement({
    name: "Guenhwyvar (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9073",
    source: "Dragon Magazine 386",
    categories: ["Guenhwyvar (epic tier)", "ID_FMP_MAGIC_ITEM_9073"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Hypnotic Pendant +3"] = new RulesElement({
    name: "Hypnotic Pendant +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9082",
    source: "Dragon Magazine 386",
    categories: ["Hypnotic Pendant +3", "ID_FMP_MAGIC_ITEM_9082"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 3, "Enhancement");
      model.statadd("Reflex Defense", 3, "Enhancement");
      model.statadd("Will Defense", 3, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Hypnotic Pendant +4"] = new RulesElement({
    name: "Hypnotic Pendant +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9083",
    source: "Dragon Magazine 386",
    categories: ["Hypnotic Pendant +4", "ID_FMP_MAGIC_ITEM_9083"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 4, "Enhancement");
      model.statadd("Reflex Defense", 4, "Enhancement");
      model.statadd("Will Defense", 4, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Hypnotic Pendant +5"] = new RulesElement({
    name: "Hypnotic Pendant +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9084",
    source: "Dragon Magazine 386",
    categories: ["Hypnotic Pendant +5", "ID_FMP_MAGIC_ITEM_9084"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 5, "Enhancement");
      model.statadd("Reflex Defense", 5, "Enhancement");
      model.statadd("Will Defense", 5, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Hypnotic Pendant +6"] = new RulesElement({
    name: "Hypnotic Pendant +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9085",
    source: "Dragon Magazine 386",
    categories: ["Hypnotic Pendant +6", "ID_FMP_MAGIC_ITEM_9085"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 6, "Enhancement");
      model.statadd("Reflex Defense", 6, "Enhancement");
      model.statadd("Will Defense", 6, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Icingdeath +5"] = new RulesElement({
    name: "Icingdeath +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9072",
    source: "Dragon Magazine 386",
    categories: ["Icingdeath +5", "ID_FMP_MAGIC_ITEM_9072"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("resist:fire", 30, "resist");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Jarlaxle's Eye Patch (epic tier)"] = new RulesElement({
    name: "Jarlaxle's Eye Patch (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9088",
    source: "Dragon Magazine 386",
    categories: ["Jarlaxle's Eye Patch (epic tier)", "ID_FMP_MAGIC_ITEM_9088"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Khazid'hea +5"] = new RulesElement({
    name: "Khazid'hea +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9079",
    source: "Dragon Magazine 386",
    categories: ["Khazid'hea +5", "ID_FMP_MAGIC_ITEM_9079"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Lightning Strike Bow +2"] = new RulesElement({
    name: "Lightning Strike Bow +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9089",
    source: "Dragon Magazine 386",
    categories: ["Lightning Strike Bow +2", "ID_FMP_MAGIC_ITEM_9089"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Lightning Strike Bow +3"] = new RulesElement({
    name: "Lightning Strike Bow +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9090",
    source: "Dragon Magazine 386",
    categories: ["Lightning Strike Bow +3", "ID_FMP_MAGIC_ITEM_9090"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Lightning Strike Bow +4"] = new RulesElement({
    name: "Lightning Strike Bow +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9091",
    source: "Dragon Magazine 386",
    categories: ["Lightning Strike Bow +4", "ID_FMP_MAGIC_ITEM_9091"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Lightning Strike Bow +5"] = new RulesElement({
    name: "Lightning Strike Bow +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9092",
    source: "Dragon Magazine 386",
    categories: ["Lightning Strike Bow +5", "ID_FMP_MAGIC_ITEM_9092"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Lightning Strike Bow +6"] = new RulesElement({
    name: "Lightning Strike Bow +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9093",
    source: "Dragon Magazine 386",
    categories: ["Lightning Strike Bow +6", "ID_FMP_MAGIC_ITEM_9093"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Liria Valthorin's Blinding Blade (epic tier)"] = new RulesElement({
    name: "Liria Valthorin's Blinding Blade (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9115",
    source: "Dragon Magazine 386",
    categories: ["Liria Valthorin's Blinding Blade (epic tier)", "ID_FMP_MAGIC_ITEM_9115"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Liria Valthorin's Silverlight Riposte (paragon tier)"] = new RulesElement({
    name: "Liria Valthorin's Silverlight Riposte (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9113",
    source: "Dragon Magazine 386",
    categories: ["Liria Valthorin's Silverlight Riposte (paragon tier)", "ID_FMP_MAGIC_ITEM_9113"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Liria Valthorin's Unshakable Pursuit (paragon tier)"] = new RulesElement({
    name: "Liria Valthorin's Unshakable Pursuit (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9114",
    source: "Dragon Magazine 386",
    categories: ["Liria Valthorin's Unshakable Pursuit (paragon tier)", "ID_FMP_MAGIC_ITEM_9114"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Moonbow +3"] = new RulesElement({
    name: "Moonbow +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9008",
    source: "Dragon Magazine 386",
    categories: ["Moonbow +3", "ID_FMP_MAGIC_ITEM_9008"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Moonbow +4"] = new RulesElement({
    name: "Moonbow +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9009",
    source: "Dragon Magazine 386",
    categories: ["Moonbow +4", "ID_FMP_MAGIC_ITEM_9009"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Moonbow +5"] = new RulesElement({
    name: "Moonbow +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9010",
    source: "Dragon Magazine 386",
    categories: ["Moonbow +5", "ID_FMP_MAGIC_ITEM_9010"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Moonbow +6"] = new RulesElement({
    name: "Moonbow +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9011",
    source: "Dragon Magazine 386",
    categories: ["Moonbow +6", "ID_FMP_MAGIC_ITEM_9011"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Regis's Ruby Pendant +5"] = new RulesElement({
    name: "Regis's Ruby Pendant +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9086",
    source: "Dragon Magazine 386",
    categories: ["Regis's Ruby Pendant +5", "ID_FMP_MAGIC_ITEM_9086"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Fortitude Defense", 5, "Enhancement");
      model.statadd("Reflex Defense", 5, "Enhancement");
      model.statadd("Will Defense", 5, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Avernus +1"] = new RulesElement({
    name: "Rod of Avernus +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9012",
    source: "Dragon Magazine 386",
    categories: ["Rod of Avernus +1", "ID_FMP_MAGIC_ITEM_9012"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Avernus +2"] = new RulesElement({
    name: "Rod of Avernus +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9013",
    source: "Dragon Magazine 386",
    categories: ["Rod of Avernus +2", "ID_FMP_MAGIC_ITEM_9013"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Avernus +3"] = new RulesElement({
    name: "Rod of Avernus +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9014",
    source: "Dragon Magazine 386",
    categories: ["Rod of Avernus +3", "ID_FMP_MAGIC_ITEM_9014"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Avernus +4"] = new RulesElement({
    name: "Rod of Avernus +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9015",
    source: "Dragon Magazine 386",
    categories: ["Rod of Avernus +4", "ID_FMP_MAGIC_ITEM_9015"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Avernus +5"] = new RulesElement({
    name: "Rod of Avernus +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9016",
    source: "Dragon Magazine 386",
    categories: ["Rod of Avernus +5", "ID_FMP_MAGIC_ITEM_9016"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Avernus +6"] = new RulesElement({
    name: "Rod of Avernus +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9017",
    source: "Dragon Magazine 386",
    categories: ["Rod of Avernus +6", "ID_FMP_MAGIC_ITEM_9017"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Taulmaril the Heartseeker +5"] = new RulesElement({
    name: "Taulmaril the Heartseeker +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9094",
    source: "Dragon Magazine 386",
    categories: ["Taulmaril the Heartseeker +5", "ID_FMP_MAGIC_ITEM_9094"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Twinkle +5"] = new RulesElement({
    name: "Twinkle +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9067",
    source: "Dragon Magazine 386",
    categories: ["Twinkle +5", "ID_FMP_MAGIC_ITEM_9067"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Vitality Drinking Weapon +2"] = new RulesElement({
    name: "Vitality Drinking Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9101",
    source: "Dragon Magazine 386",
    categories: ["Vitality Drinking Weapon +2", "ID_FMP_MAGIC_ITEM_9101"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Vitality Drinking Weapon +3"] = new RulesElement({
    name: "Vitality Drinking Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9102",
    source: "Dragon Magazine 386",
    categories: ["Vitality Drinking Weapon +3", "ID_FMP_MAGIC_ITEM_9102"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Vitality Drinking Weapon +4"] = new RulesElement({
    name: "Vitality Drinking Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9103",
    source: "Dragon Magazine 386",
    categories: ["Vitality Drinking Weapon +4", "ID_FMP_MAGIC_ITEM_9103"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Vitality Drinking Weapon +5"] = new RulesElement({
    name: "Vitality Drinking Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9104",
    source: "Dragon Magazine 386",
    categories: ["Vitality Drinking Weapon +5", "ID_FMP_MAGIC_ITEM_9104"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Vitality Drinking Weapon +6"] = new RulesElement({
    name: "Vitality Drinking Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9105",
    source: "Dragon Magazine 386",
    categories: ["Vitality Drinking Weapon +6", "ID_FMP_MAGIC_ITEM_9105"]
  });
  byID[te.id] = te;
  
  
})(this);
