(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Amulet of Seduction +1"] = new RulesElement({
    name: "Amulet of Seduction +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8448",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Amulet of Seduction +1", "ID_FMP_MAGIC_ITEM_8448"],
    rules: function(model) {
      model.statadd("Bluff Misc", 2, "item");
      model.statadd("Diplomacy Misc", 2, "item");
      model.statadd("Fortitude Defense", 1, "Enhancement");
      model.statadd("Reflex Defense", 1, "Enhancement");
      model.statadd("Will Defense", 1, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Amulet of Seduction +2"] = new RulesElement({
    name: "Amulet of Seduction +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8449",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Amulet of Seduction +2", "ID_FMP_MAGIC_ITEM_8449"],
    rules: function(model) {
      model.statadd("Bluff Misc", 2, "item");
      model.statadd("Diplomacy Misc", 2, "item");
      model.statadd("Fortitude Defense", 2, "Enhancement");
      model.statadd("Reflex Defense", 2, "Enhancement");
      model.statadd("Will Defense", 2, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Amulet of Seduction +3"] = new RulesElement({
    name: "Amulet of Seduction +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8450",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Amulet of Seduction +3", "ID_FMP_MAGIC_ITEM_8450"],
    rules: function(model) {
      model.statadd("Bluff Misc", 2, "item");
      model.statadd("Diplomacy Misc", 2, "item");
      model.statadd("Fortitude Defense", 3, "Enhancement");
      model.statadd("Reflex Defense", 3, "Enhancement");
      model.statadd("Will Defense", 3, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Amulet of Seduction +4"] = new RulesElement({
    name: "Amulet of Seduction +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8451",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Amulet of Seduction +4", "ID_FMP_MAGIC_ITEM_8451"],
    rules: function(model) {
      model.statadd("Bluff Misc", 2, "item");
      model.statadd("Diplomacy Misc", 2, "item");
      model.statadd("Fortitude Defense", 4, "Enhancement");
      model.statadd("Reflex Defense", 4, "Enhancement");
      model.statadd("Will Defense", 4, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Amulet of Seduction +5"] = new RulesElement({
    name: "Amulet of Seduction +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8452",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Amulet of Seduction +5", "ID_FMP_MAGIC_ITEM_8452"],
    rules: function(model) {
      model.statadd("Bluff Misc", 2, "item");
      model.statadd("Diplomacy Misc", 2, "item");
      model.statadd("Fortitude Defense", 5, "Enhancement");
      model.statadd("Reflex Defense", 5, "Enhancement");
      model.statadd("Will Defense", 5, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Amulet of Seduction +6"] = new RulesElement({
    name: "Amulet of Seduction +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8453",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Amulet of Seduction +6", "ID_FMP_MAGIC_ITEM_8453"],
    rules: function(model) {
      model.statadd("Bluff Misc", 2, "item");
      model.statadd("Diplomacy Misc", 2, "item");
      model.statadd("Fortitude Defense", 6, "Enhancement");
      model.statadd("Reflex Defense", 6, "Enhancement");
      model.statadd("Will Defense", 6, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Hellfire Staff +1"] = new RulesElement({
    name: "Hellfire Staff +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8454",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Hellfire Staff +1", "ID_FMP_MAGIC_ITEM_8454"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Hellfire Staff +2"] = new RulesElement({
    name: "Hellfire Staff +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8455",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Hellfire Staff +2", "ID_FMP_MAGIC_ITEM_8455"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Hellfire Staff +3"] = new RulesElement({
    name: "Hellfire Staff +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8456",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Hellfire Staff +3", "ID_FMP_MAGIC_ITEM_8456"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Hellfire Staff +4"] = new RulesElement({
    name: "Hellfire Staff +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8457",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Hellfire Staff +4", "ID_FMP_MAGIC_ITEM_8457"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Hellfire Staff +5"] = new RulesElement({
    name: "Hellfire Staff +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8458",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Hellfire Staff +5", "ID_FMP_MAGIC_ITEM_8458"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Hellfire Staff +6"] = new RulesElement({
    name: "Hellfire Staff +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8459",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Hellfire Staff +6", "ID_FMP_MAGIC_ITEM_8459"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Infectious Flame Weapon +1"] = new RulesElement({
    name: "Infectious Flame Weapon +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8461",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Infectious Flame Weapon +1", "ID_FMP_MAGIC_ITEM_8461"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Infectious Flame Weapon +2"] = new RulesElement({
    name: "Infectious Flame Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8462",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Infectious Flame Weapon +2", "ID_FMP_MAGIC_ITEM_8462"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Infectious Flame Weapon +3"] = new RulesElement({
    name: "Infectious Flame Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8463",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Infectious Flame Weapon +3", "ID_FMP_MAGIC_ITEM_8463"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Infectious Flame Weapon +4"] = new RulesElement({
    name: "Infectious Flame Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8464",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Infectious Flame Weapon +4", "ID_FMP_MAGIC_ITEM_8464"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Infectious Flame Weapon +5"] = new RulesElement({
    name: "Infectious Flame Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8465",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Infectious Flame Weapon +5", "ID_FMP_MAGIC_ITEM_8465"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Infectious Flame Weapon +6"] = new RulesElement({
    name: "Infectious Flame Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8466",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Infectious Flame Weapon +6", "ID_FMP_MAGIC_ITEM_8466"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ironscar Rod +1"] = new RulesElement({
    name: "Ironscar Rod +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8467",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Ironscar Rod +1", "ID_FMP_MAGIC_ITEM_8467"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ironscar Rod +2"] = new RulesElement({
    name: "Ironscar Rod +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8468",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Ironscar Rod +2", "ID_FMP_MAGIC_ITEM_8468"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ironscar Rod +3"] = new RulesElement({
    name: "Ironscar Rod +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8469",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Ironscar Rod +3", "ID_FMP_MAGIC_ITEM_8469"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ironscar Rod +4"] = new RulesElement({
    name: "Ironscar Rod +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8470",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Ironscar Rod +4", "ID_FMP_MAGIC_ITEM_8470"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ironscar Rod +5"] = new RulesElement({
    name: "Ironscar Rod +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8471",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Ironscar Rod +5", "ID_FMP_MAGIC_ITEM_8471"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ironscar Rod +6"] = new RulesElement({
    name: "Ironscar Rod +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8472",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Ironscar Rod +6", "ID_FMP_MAGIC_ITEM_8472"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mask of the Impish Grin (paragon tier)"] = new RulesElement({
    name: "Mask of the Impish Grin (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8460",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Mask of the Impish Grin (paragon tier)", "ID_FMP_MAGIC_ITEM_8460"],
    rules: function(model) {
      model.statadd("Bluff Misc", 3, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Dread +2"] = new RulesElement({
    name: "Rod of Dread +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8480",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Rod of Dread +2", "ID_FMP_MAGIC_ITEM_8480"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Dread +3"] = new RulesElement({
    name: "Rod of Dread +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8482",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Rod of Dread +3", "ID_FMP_MAGIC_ITEM_8482"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Dread +4"] = new RulesElement({
    name: "Rod of Dread +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8483",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Rod of Dread +4", "ID_FMP_MAGIC_ITEM_8483"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Dread +5"] = new RulesElement({
    name: "Rod of Dread +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8484",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Rod of Dread +5", "ID_FMP_MAGIC_ITEM_8484"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Dread +6"] = new RulesElement({
    name: "Rod of Dread +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8485",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Rod of Dread +6", "ID_FMP_MAGIC_ITEM_8485"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Shield of Turathi Defiance (paragon tier)"] = new RulesElement({
    name: "Shield of Turathi Defiance (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8473",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Shield of Turathi Defiance (paragon tier)", "ID_FMP_MAGIC_ITEM_8473"],
    rules: function(model) {
      model.statadd("resist:tieflings", 5, "resist");
      model.statadd("resist:devils", 5, "resist");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Sustaining Cloak +1"] = new RulesElement({
    name: "Sustaining Cloak +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8474",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Sustaining Cloak +1", "ID_FMP_MAGIC_ITEM_8474"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 1, "Enhancement");
      model.statadd("Reflex Defense", 1, "Enhancement");
      model.statadd("Will Defense", 1, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Sustaining Cloak +2"] = new RulesElement({
    name: "Sustaining Cloak +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8475",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Sustaining Cloak +2", "ID_FMP_MAGIC_ITEM_8475"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 2, "Enhancement");
      model.statadd("Reflex Defense", 2, "Enhancement");
      model.statadd("Will Defense", 2, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Sustaining Cloak +3"] = new RulesElement({
    name: "Sustaining Cloak +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8476",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Sustaining Cloak +3", "ID_FMP_MAGIC_ITEM_8476"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 3, "Enhancement");
      model.statadd("Reflex Defense", 3, "Enhancement");
      model.statadd("Will Defense", 3, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Sustaining Cloak +4"] = new RulesElement({
    name: "Sustaining Cloak +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8477",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Sustaining Cloak +4", "ID_FMP_MAGIC_ITEM_8477"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 4, "Enhancement");
      model.statadd("Reflex Defense", 4, "Enhancement");
      model.statadd("Will Defense", 4, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Sustaining Cloak +5"] = new RulesElement({
    name: "Sustaining Cloak +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8478",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Sustaining Cloak +5", "ID_FMP_MAGIC_ITEM_8478"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 5, "Enhancement");
      model.statadd("Reflex Defense", 5, "Enhancement");
      model.statadd("Will Defense", 5, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Sustaining Cloak +6"] = new RulesElement({
    name: "Sustaining Cloak +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8479",
    source: "Player's Handbook Races: Tiefling",
    categories: ["Sustaining Cloak +6", "ID_FMP_MAGIC_ITEM_8479"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 6, "Enhancement");
      model.statadd("Reflex Defense", 6, "Enhancement");
      model.statadd("Will Defense", 6, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  
})(this);
