define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Boots of Grounding (heroic tier)"] = new engine.RulesElement({
    name: "Boots of Grounding (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4474",
    source: "Manual of the Planes",
    categories: ["Boots of Grounding (heroic tier)", "ID_FMP_MAGIC_ITEM_4474"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Brimstone Cloak +4"] = new engine.RulesElement({
    name: "Brimstone Cloak +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4479",
    source: "Manual of the Planes",
    categories: ["Brimstone Cloak +4", "ID_FMP_MAGIC_ITEM_4479"],
    rules: function(model) {
      model.statadd("Brimstone Cloak +4", 10, "Brimstone Cloak +4");
      model.statadd("Resist:fire and resist 10 poison", function() { return model.stat("Brimstone Cloak +4"); }, "resist");
      model.statadd("Fortitude Defense", 4, "Enhancement");
      model.statadd("Reflex Defense", 4, "Enhancement");
      model.statadd("Will Defense", 4, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Brimstone Cloak +5"] = new engine.RulesElement({
    name: "Brimstone Cloak +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4480",
    source: "Manual of the Planes",
    categories: ["Brimstone Cloak +5", "ID_FMP_MAGIC_ITEM_4480"],
    rules: function(model) {
      model.statadd("Brimstone Cloak +5", 15, "Brimstone Cloak +5");
      model.statadd("Resist:fire and resist 15 poison", function() { return model.stat("Brimstone Cloak +5"); }, "resist");
      model.statadd("Fortitude Defense", 5, "Enhancement");
      model.statadd("Reflex Defense", 5, "Enhancement");
      model.statadd("Will Defense", 5, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Brimstone Cloak +6"] = new engine.RulesElement({
    name: "Brimstone Cloak +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4481",
    source: "Manual of the Planes",
    categories: ["Brimstone Cloak +6", "ID_FMP_MAGIC_ITEM_4481"],
    rules: function(model) {
      model.statadd("Brimstone Cloak +6", 15, "Brimstone Cloak +6");
      model.statadd("Resist:fire and resist 15 poison", function() { return model.stat("Brimstone Cloak +6"); }, "resist");
      model.statadd("Fortitude Defense", 6, "Enhancement");
      model.statadd("Reflex Defense", 6, "Enhancement");
      model.statadd("Will Defense", 6, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Cincture of the Githzerai (heroic tier)"] = new engine.RulesElement({
    name: "Cincture of the Githzerai (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4489",
    source: "Manual of the Planes",
    categories: ["Cincture of the Githzerai (heroic tier)", "ID_FMP_MAGIC_ITEM_4489"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Circlet of Portals (epic tier)"] = new engine.RulesElement({
    name: "Circlet of Portals (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4477",
    source: "Manual of the Planes",
    categories: ["Circlet of Portals (epic tier)", "ID_FMP_MAGIC_ITEM_4477"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Cubic Portal (epic tier)"] = new engine.RulesElement({
    name: "Cubic Portal (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4490",
    source: "Manual of the Planes",
    categories: ["Cubic Portal (epic tier)", "ID_FMP_MAGIC_ITEM_4490"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Demonslayer Weapon +2"] = new engine.RulesElement({
    name: "Demonslayer Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4409",
    source: "Manual of the Planes",
    categories: ["Demonslayer Weapon +2", "ID_FMP_MAGIC_ITEM_4409"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Demonslayer Weapon +3"] = new engine.RulesElement({
    name: "Demonslayer Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4410",
    source: "Manual of the Planes",
    categories: ["Demonslayer Weapon +3", "ID_FMP_MAGIC_ITEM_4410"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Demonslayer Weapon +4"] = new engine.RulesElement({
    name: "Demonslayer Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4411",
    source: "Manual of the Planes",
    categories: ["Demonslayer Weapon +4", "ID_FMP_MAGIC_ITEM_4411"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Demonslayer Weapon +5"] = new engine.RulesElement({
    name: "Demonslayer Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4412",
    source: "Manual of the Planes",
    categories: ["Demonslayer Weapon +5", "ID_FMP_MAGIC_ITEM_4412"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Demonslayer Weapon +6"] = new engine.RulesElement({
    name: "Demonslayer Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4413",
    source: "Manual of the Planes",
    categories: ["Demonslayer Weapon +6", "ID_FMP_MAGIC_ITEM_4413"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Demonwrought Armor +5"] = new engine.RulesElement({
    name: "Demonwrought Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4395",
    source: "Manual of the Planes",
    categories: ["Demonwrought Armor +5", "ID_FMP_MAGIC_ITEM_4395"],
    rules: function(model) {
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Demonwrought Armor +6"] = new engine.RulesElement({
    name: "Demonwrought Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4396",
    source: "Manual of the Planes",
    categories: ["Demonwrought Armor +6", "ID_FMP_MAGIC_ITEM_4396"],
    rules: function(model) {
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Driftmetal Armor +4"] = new engine.RulesElement({
    name: "Driftmetal Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4397",
    source: "Manual of the Planes",
    categories: ["Driftmetal Armor +4", "ID_FMP_MAGIC_ITEM_4397"],
    rules: function(model) {
      model.statadd("resist:radiant", 5, "resist");
      model.statadd("resist:psychic", 5, "resist");
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Driftmetal Armor +5"] = new engine.RulesElement({
    name: "Driftmetal Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4398",
    source: "Manual of the Planes",
    categories: ["Driftmetal Armor +5", "ID_FMP_MAGIC_ITEM_4398"],
    rules: function(model) {
      model.statadd("resist:radiant", 10, "resist");
      model.statadd("resist:psychic", 10, "resist");
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Driftmetal Armor +6"] = new engine.RulesElement({
    name: "Driftmetal Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4399",
    source: "Manual of the Planes",
    categories: ["Driftmetal Armor +6", "ID_FMP_MAGIC_ITEM_4399"],
    rules: function(model) {
      model.statadd("resist:radiant", 10, "resist");
      model.statadd("resist:psychic", 10, "resist");
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Elementalbane Weapon +2"] = new engine.RulesElement({
    name: "Elementalbane Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4414",
    source: "Manual of the Planes",
    categories: ["Elementalbane Weapon +2", "ID_FMP_MAGIC_ITEM_4414"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Elementalbane Weapon +3"] = new engine.RulesElement({
    name: "Elementalbane Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4415",
    source: "Manual of the Planes",
    categories: ["Elementalbane Weapon +3", "ID_FMP_MAGIC_ITEM_4415"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Elementalbane Weapon +4"] = new engine.RulesElement({
    name: "Elementalbane Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4416",
    source: "Manual of the Planes",
    categories: ["Elementalbane Weapon +4", "ID_FMP_MAGIC_ITEM_4416"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Elementalbane Weapon +5"] = new engine.RulesElement({
    name: "Elementalbane Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4417",
    source: "Manual of the Planes",
    categories: ["Elementalbane Weapon +5", "ID_FMP_MAGIC_ITEM_4417"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Elementalbane Weapon +6"] = new engine.RulesElement({
    name: "Elementalbane Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4418",
    source: "Manual of the Planes",
    categories: ["Elementalbane Weapon +6", "ID_FMP_MAGIC_ITEM_4418"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Feytouched Armor +3"] = new engine.RulesElement({
    name: "Feytouched Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4400",
    source: "Manual of the Planes",
    categories: ["Feytouched Armor +3", "ID_FMP_MAGIC_ITEM_4400"],
    rules: function(model) {
      model.statadd("Initiative Misc", 3, "item");
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Feytouched Armor +4"] = new engine.RulesElement({
    name: "Feytouched Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4401",
    source: "Manual of the Planes",
    categories: ["Feytouched Armor +4", "ID_FMP_MAGIC_ITEM_4401"],
    rules: function(model) {
      model.statadd("Initiative Misc", 4, "item");
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Feytouched Armor +5"] = new engine.RulesElement({
    name: "Feytouched Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4402",
    source: "Manual of the Planes",
    categories: ["Feytouched Armor +5", "ID_FMP_MAGIC_ITEM_4402"],
    rules: function(model) {
      model.statadd("Initiative Misc", 5, "item");
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Feytouched Armor +6"] = new engine.RulesElement({
    name: "Feytouched Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4403",
    source: "Manual of the Planes",
    categories: ["Feytouched Armor +6", "ID_FMP_MAGIC_ITEM_4403"],
    rules: function(model) {
      model.statadd("Initiative Misc", 6, "item");
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Folding Astral Skiff (paragon tier)"] = new engine.RulesElement({
    name: "Folding Astral Skiff (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4495",
    source: "Manual of the Planes",
    categories: ["Folding Astral Skiff (paragon tier)", "ID_FMP_MAGIC_ITEM_4495"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Gauntlets of the Blood War (epic tier)"] = new engine.RulesElement({
    name: "Gauntlets of the Blood War (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4473",
    source: "Manual of the Planes",
    categories: ["Gauntlets of the Blood War (epic tier)", "ID_FMP_MAGIC_ITEM_4473"],
    rules: function(model) {
      model.statadd("damage rolls", function() { /* against creatures that have the immortal origin */ return 5; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Gauntlets of the Blood War (paragon tier)"] = new engine.RulesElement({
    name: "Gauntlets of the Blood War (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4472",
    source: "Manual of the Planes",
    categories: ["Gauntlets of the Blood War (paragon tier)", "ID_FMP_MAGIC_ITEM_4472"],
    rules: function(model) {
      model.statadd("damage rolls", function() { /* against creatures that have the immortal origin */ return 3; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Gith Orb of Illithid's Bane +3"] = new engine.RulesElement({
    name: "Gith Orb of Illithid's Bane +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4441",
    source: "Manual of the Planes",
    categories: ["Gith Orb of Illithid's Bane +3", "ID_FMP_MAGIC_ITEM_4441"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Gith Orb of Illithid's Bane +4"] = new engine.RulesElement({
    name: "Gith Orb of Illithid's Bane +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4442",
    source: "Manual of the Planes",
    categories: ["Gith Orb of Illithid's Bane +4", "ID_FMP_MAGIC_ITEM_4442"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Gith Orb of Illithid's Bane +5"] = new engine.RulesElement({
    name: "Gith Orb of Illithid's Bane +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4443",
    source: "Manual of the Planes",
    categories: ["Gith Orb of Illithid's Bane +5", "ID_FMP_MAGIC_ITEM_4443"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Gith Orb of Illithid's Bane +6"] = new engine.RulesElement({
    name: "Gith Orb of Illithid's Bane +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4444",
    source: "Manual of the Planes",
    categories: ["Gith Orb of Illithid's Bane +6", "ID_FMP_MAGIC_ITEM_4444"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Githyanki Silver Weapon +2"] = new engine.RulesElement({
    name: "Githyanki Silver Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4419",
    source: "Manual of the Planes",
    categories: ["Githyanki Silver Weapon +2", "ID_FMP_MAGIC_ITEM_4419"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Githyanki Silver Weapon +3"] = new engine.RulesElement({
    name: "Githyanki Silver Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4420",
    source: "Manual of the Planes",
    categories: ["Githyanki Silver Weapon +3", "ID_FMP_MAGIC_ITEM_4420"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Githyanki Silver Weapon +4"] = new engine.RulesElement({
    name: "Githyanki Silver Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4421",
    source: "Manual of the Planes",
    categories: ["Githyanki Silver Weapon +4", "ID_FMP_MAGIC_ITEM_4421"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Githyanki Silver Weapon +5"] = new engine.RulesElement({
    name: "Githyanki Silver Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4422",
    source: "Manual of the Planes",
    categories: ["Githyanki Silver Weapon +5", "ID_FMP_MAGIC_ITEM_4422"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Githyanki Silver Weapon +6"] = new engine.RulesElement({
    name: "Githyanki Silver Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4423",
    source: "Manual of the Planes",
    categories: ["Githyanki Silver Weapon +6", "ID_FMP_MAGIC_ITEM_4423"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Greenstone Amulet +6"] = new engine.RulesElement({
    name: "Greenstone Amulet +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4482",
    source: "Manual of the Planes",
    categories: ["Greenstone Amulet +6", "ID_FMP_MAGIC_ITEM_4482"],
    rules: function(model) {
      model.statadd("Greenstone Amulet +6", 15, "Greenstone Amulet +6");
      model.statadd("resist:psychic", function() { return model.stat("Greenstone Amulet +6"); }, "resist");
      model.statadd("Fortitude Defense", 6, "Enhancement");
      model.statadd("Reflex Defense", 6, "Enhancement");
      model.statadd("Will Defense", 6, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Instant Portal (epic tier)"] = new engine.RulesElement({
    name: "Instant Portal (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4491",
    source: "Manual of the Planes",
    categories: ["Instant Portal (epic tier)", "ID_FMP_MAGIC_ITEM_4491"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ioun Stone of Adaptation (epic tier)"] = new engine.RulesElement({
    name: "Ioun Stone of Adaptation (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4478",
    source: "Manual of the Planes",
    categories: ["Ioun Stone of Adaptation (epic tier)", "ID_FMP_MAGIC_ITEM_4478"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Loadstone of the Planes (heroic tier)"] = new engine.RulesElement({
    name: "Loadstone of the Planes (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4492",
    source: "Manual of the Planes",
    categories: ["Loadstone of the Planes (heroic tier)", "ID_FMP_MAGIC_ITEM_4492"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mantle of Faith +3"] = new engine.RulesElement({
    name: "Mantle of Faith +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4483",
    source: "Manual of the Planes",
    categories: ["Mantle of Faith +3", "ID_FMP_MAGIC_ITEM_4483"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 3, "Enhancement");
      model.statadd("Reflex Defense", 3, "Enhancement");
      model.statadd("Will Defense", 3, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mantle of Faith +4"] = new engine.RulesElement({
    name: "Mantle of Faith +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4484",
    source: "Manual of the Planes",
    categories: ["Mantle of Faith +4", "ID_FMP_MAGIC_ITEM_4484"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 4, "Enhancement");
      model.statadd("Reflex Defense", 4, "Enhancement");
      model.statadd("Will Defense", 4, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mantle of Faith +5"] = new engine.RulesElement({
    name: "Mantle of Faith +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4485",
    source: "Manual of the Planes",
    categories: ["Mantle of Faith +5", "ID_FMP_MAGIC_ITEM_4485"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 5, "Enhancement");
      model.statadd("Reflex Defense", 5, "Enhancement");
      model.statadd("Will Defense", 5, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mantle of Faith +6"] = new engine.RulesElement({
    name: "Mantle of Faith +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4486",
    source: "Manual of the Planes",
    categories: ["Mantle of Faith +6", "ID_FMP_MAGIC_ITEM_4486"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 6, "Enhancement");
      model.statadd("Reflex Defense", 6, "Enhancement");
      model.statadd("Will Defense", 6, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Manual of the Planes (epic tier)"] = new engine.RulesElement({
    name: "Manual of the Planes (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4493",
    source: "Manual of the Planes",
    categories: ["Manual of the Planes (epic tier)", "ID_FMP_MAGIC_ITEM_4493"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of the Planes +5"] = new engine.RulesElement({
    name: "Orb of the Planes +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4445",
    source: "Manual of the Planes",
    categories: ["Orb of the Planes +5", "ID_FMP_MAGIC_ITEM_4445"],
    rules: function(model) {
      model.statadd("Arcana Misc", function() { /* to detect magic when attempting to perceive a portal */ return 5; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of the Planes +6"] = new engine.RulesElement({
    name: "Orb of the Planes +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4446",
    source: "Manual of the Planes",
    categories: ["Orb of the Planes +6", "ID_FMP_MAGIC_ITEM_4446"],
    rules: function(model) {
      model.statadd("Arcana Misc", function() { /* to detect magic when attempting to perceive a portal */ return 5; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Translocation Interference +3"] = new engine.RulesElement({
    name: "Orb of Translocation Interference +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4447",
    source: "Manual of the Planes",
    categories: ["Orb of Translocation Interference +3", "ID_FMP_MAGIC_ITEM_4447"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Translocation Interference +4"] = new engine.RulesElement({
    name: "Orb of Translocation Interference +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4448",
    source: "Manual of the Planes",
    categories: ["Orb of Translocation Interference +4", "ID_FMP_MAGIC_ITEM_4448"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Translocation Interference +5"] = new engine.RulesElement({
    name: "Orb of Translocation Interference +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4449",
    source: "Manual of the Planes",
    categories: ["Orb of Translocation Interference +5", "ID_FMP_MAGIC_ITEM_4449"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Translocation Interference +6"] = new engine.RulesElement({
    name: "Orb of Translocation Interference +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4450",
    source: "Manual of the Planes",
    categories: ["Orb of Translocation Interference +6", "ID_FMP_MAGIC_ITEM_4450"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Planar Stasis Boots (paragon tier)"] = new engine.RulesElement({
    name: "Planar Stasis Boots (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4475",
    source: "Manual of the Planes",
    categories: ["Planar Stasis Boots (paragon tier)", "ID_FMP_MAGIC_ITEM_4475"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Planesplitter Weapon +4"] = new engine.RulesElement({
    name: "Planesplitter Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4432",
    source: "Manual of the Planes",
    categories: ["Planesplitter Weapon +4", "ID_FMP_MAGIC_ITEM_4432"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Planesplitter Weapon +5"] = new engine.RulesElement({
    name: "Planesplitter Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4433",
    source: "Manual of the Planes",
    categories: ["Planesplitter Weapon +5", "ID_FMP_MAGIC_ITEM_4433"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Planesplitter Weapon +6"] = new engine.RulesElement({
    name: "Planesplitter Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4434",
    source: "Manual of the Planes",
    categories: ["Planesplitter Weapon +6", "ID_FMP_MAGIC_ITEM_4434"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Planestrider Boots (paragon tier)"] = new engine.RulesElement({
    name: "Planestrider Boots (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4476",
    source: "Manual of the Planes",
    categories: ["Planestrider Boots (paragon tier)", "ID_FMP_MAGIC_ITEM_4476"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ring of Dimensional Escape (paragon tier)"] = new engine.RulesElement({
    name: "Ring of Dimensional Escape (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4487",
    source: "Manual of the Planes",
    categories: ["Ring of Dimensional Escape (paragon tier)", "ID_FMP_MAGIC_ITEM_4487"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ring of Elemental Mastery (epic tier)"] = new engine.RulesElement({
    name: "Ring of Elemental Mastery (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4488",
    source: "Manual of the Planes",
    categories: ["Ring of Elemental Mastery (epic tier)", "ID_FMP_MAGIC_ITEM_4488"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Dispater +6"] = new engine.RulesElement({
    name: "Rod of Dispater +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4393",
    source: "Manual of the Planes,Dungeon Magazine 173",
    categories: ["Rod of Dispater +6", "ID_FMP_MAGIC_ITEM_4393"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Shadow's Caress +3"] = new engine.RulesElement({
    name: "Rod of Shadow's Caress +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4451",
    source: "Manual of the Planes",
    categories: ["Rod of Shadow's Caress +3", "ID_FMP_MAGIC_ITEM_4451"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Shadow's Caress +4"] = new engine.RulesElement({
    name: "Rod of Shadow's Caress +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4452",
    source: "Manual of the Planes",
    categories: ["Rod of Shadow's Caress +4", "ID_FMP_MAGIC_ITEM_4452"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Shadow's Caress +5"] = new engine.RulesElement({
    name: "Rod of Shadow's Caress +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4453",
    source: "Manual of the Planes",
    categories: ["Rod of Shadow's Caress +5", "ID_FMP_MAGIC_ITEM_4453"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Shadow's Caress +6"] = new engine.RulesElement({
    name: "Rod of Shadow's Caress +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4454",
    source: "Manual of the Planes",
    categories: ["Rod of Shadow's Caress +6", "ID_FMP_MAGIC_ITEM_4454"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Star's Descent +4"] = new engine.RulesElement({
    name: "Rod of Star's Descent +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4455",
    source: "Manual of the Planes",
    categories: ["Rod of Star's Descent +4", "ID_FMP_MAGIC_ITEM_4455"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Star's Descent +5"] = new engine.RulesElement({
    name: "Rod of Star's Descent +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4456",
    source: "Manual of the Planes",
    categories: ["Rod of Star's Descent +5", "ID_FMP_MAGIC_ITEM_4456"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Star's Descent +6"] = new engine.RulesElement({
    name: "Rod of Star's Descent +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4457",
    source: "Manual of the Planes",
    categories: ["Rod of Star's Descent +6", "ID_FMP_MAGIC_ITEM_4457"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Sylvan Trickery +3"] = new engine.RulesElement({
    name: "Rod of Sylvan Trickery +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4458",
    source: "Manual of the Planes",
    categories: ["Rod of Sylvan Trickery +3", "ID_FMP_MAGIC_ITEM_4458"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Sylvan Trickery +4"] = new engine.RulesElement({
    name: "Rod of Sylvan Trickery +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4459",
    source: "Manual of the Planes",
    categories: ["Rod of Sylvan Trickery +4", "ID_FMP_MAGIC_ITEM_4459"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Sylvan Trickery +5"] = new engine.RulesElement({
    name: "Rod of Sylvan Trickery +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4460",
    source: "Manual of the Planes",
    categories: ["Rod of Sylvan Trickery +5", "ID_FMP_MAGIC_ITEM_4460"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Sylvan Trickery +6"] = new engine.RulesElement({
    name: "Rod of Sylvan Trickery +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4461",
    source: "Manual of the Planes",
    categories: ["Rod of Sylvan Trickery +6", "ID_FMP_MAGIC_ITEM_4461"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Time Distortion +1"] = new engine.RulesElement({
    name: "Rod of Time Distortion +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4462",
    source: "Manual of the Planes",
    categories: ["Rod of Time Distortion +1", "ID_FMP_MAGIC_ITEM_4462"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Time Distortion +2"] = new engine.RulesElement({
    name: "Rod of Time Distortion +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4463",
    source: "Manual of the Planes",
    categories: ["Rod of Time Distortion +2", "ID_FMP_MAGIC_ITEM_4463"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Time Distortion +3"] = new engine.RulesElement({
    name: "Rod of Time Distortion +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4464",
    source: "Manual of the Planes",
    categories: ["Rod of Time Distortion +3", "ID_FMP_MAGIC_ITEM_4464"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Time Distortion +4"] = new engine.RulesElement({
    name: "Rod of Time Distortion +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4465",
    source: "Manual of the Planes",
    categories: ["Rod of Time Distortion +4", "ID_FMP_MAGIC_ITEM_4465"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Time Distortion +5"] = new engine.RulesElement({
    name: "Rod of Time Distortion +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4466",
    source: "Manual of the Planes",
    categories: ["Rod of Time Distortion +5", "ID_FMP_MAGIC_ITEM_4466"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Time Distortion +6"] = new engine.RulesElement({
    name: "Rod of Time Distortion +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4467",
    source: "Manual of the Planes",
    categories: ["Rod of Time Distortion +6", "ID_FMP_MAGIC_ITEM_4467"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Scintillating Armor +2"] = new engine.RulesElement({
    name: "Scintillating Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4404",
    source: "Manual of the Planes",
    categories: ["Scintillating Armor +2", "ID_FMP_MAGIC_ITEM_4404"],
    rules: function(model) {
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Scintillating Armor +3"] = new engine.RulesElement({
    name: "Scintillating Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4405",
    source: "Manual of the Planes",
    categories: ["Scintillating Armor +3", "ID_FMP_MAGIC_ITEM_4405"],
    rules: function(model) {
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Scintillating Armor +4"] = new engine.RulesElement({
    name: "Scintillating Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4406",
    source: "Manual of the Planes",
    categories: ["Scintillating Armor +4", "ID_FMP_MAGIC_ITEM_4406"],
    rules: function(model) {
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Scintillating Armor +5"] = new engine.RulesElement({
    name: "Scintillating Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4407",
    source: "Manual of the Planes",
    categories: ["Scintillating Armor +5", "ID_FMP_MAGIC_ITEM_4407"],
    rules: function(model) {
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Scintillating Armor +6"] = new engine.RulesElement({
    name: "Scintillating Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4408",
    source: "Manual of the Planes",
    categories: ["Scintillating Armor +6", "ID_FMP_MAGIC_ITEM_4408"],
    rules: function(model) {
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Sextant of the Planes (paragon tier)"] = new engine.RulesElement({
    name: "Sextant of the Planes (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4494",
    source: "Manual of the Planes",
    categories: ["Sextant of the Planes (paragon tier)", "ID_FMP_MAGIC_ITEM_4494"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Shadowstrike Weapon +3"] = new engine.RulesElement({
    name: "Shadowstrike Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4424",
    source: "Manual of the Planes",
    categories: ["Shadowstrike Weapon +3", "ID_FMP_MAGIC_ITEM_4424"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Shadowstrike Weapon +4"] = new engine.RulesElement({
    name: "Shadowstrike Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4425",
    source: "Manual of the Planes",
    categories: ["Shadowstrike Weapon +4", "ID_FMP_MAGIC_ITEM_4425"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Shadowstrike Weapon +5"] = new engine.RulesElement({
    name: "Shadowstrike Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4426",
    source: "Manual of the Planes",
    categories: ["Shadowstrike Weapon +5", "ID_FMP_MAGIC_ITEM_4426"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Shadowstrike Weapon +6"] = new engine.RulesElement({
    name: "Shadowstrike Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4427",
    source: "Manual of the Planes",
    categories: ["Shadowstrike Weapon +6", "ID_FMP_MAGIC_ITEM_4427"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Portals +3"] = new engine.RulesElement({
    name: "Staff of Portals +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4468",
    source: "Manual of the Planes",
    categories: ["Staff of Portals +3", "ID_FMP_MAGIC_ITEM_4468"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Portals +4"] = new engine.RulesElement({
    name: "Staff of Portals +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4469",
    source: "Manual of the Planes",
    categories: ["Staff of Portals +4", "ID_FMP_MAGIC_ITEM_4469"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Portals +5"] = new engine.RulesElement({
    name: "Staff of Portals +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4470",
    source: "Manual of the Planes",
    categories: ["Staff of Portals +5", "ID_FMP_MAGIC_ITEM_4470"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Portals +6"] = new engine.RulesElement({
    name: "Staff of Portals +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4471",
    source: "Manual of the Planes",
    categories: ["Staff of Portals +6", "ID_FMP_MAGIC_ITEM_4471"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of Astral Light +5"] = new engine.RulesElement({
    name: "Symbol of Astral Light +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4435",
    source: "Manual of the Planes",
    categories: ["Symbol of Astral Light +5", "ID_FMP_MAGIC_ITEM_4435"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of Astral Light +6"] = new engine.RulesElement({
    name: "Symbol of Astral Light +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4436",
    source: "Manual of the Planes",
    categories: ["Symbol of Astral Light +6", "ID_FMP_MAGIC_ITEM_4436"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of Security +3"] = new engine.RulesElement({
    name: "Symbol of Security +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4437",
    source: "Manual of the Planes",
    categories: ["Symbol of Security +3", "ID_FMP_MAGIC_ITEM_4437"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of Security +4"] = new engine.RulesElement({
    name: "Symbol of Security +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4438",
    source: "Manual of the Planes",
    categories: ["Symbol of Security +4", "ID_FMP_MAGIC_ITEM_4438"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of Security +5"] = new engine.RulesElement({
    name: "Symbol of Security +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4439",
    source: "Manual of the Planes",
    categories: ["Symbol of Security +5", "ID_FMP_MAGIC_ITEM_4439"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of Security +6"] = new engine.RulesElement({
    name: "Symbol of Security +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4440",
    source: "Manual of the Planes",
    categories: ["Symbol of Security +6", "ID_FMP_MAGIC_ITEM_4440"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wave of Sorrow +6"] = new engine.RulesElement({
    name: "Wave of Sorrow +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4394",
    source: "Manual of the Planes",
    categories: ["Wave of Sorrow +6", "ID_FMP_MAGIC_ITEM_4394"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wyrdwarped Weapon +3"] = new engine.RulesElement({
    name: "Wyrdwarped Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4428",
    source: "Manual of the Planes",
    categories: ["Wyrdwarped Weapon +3", "ID_FMP_MAGIC_ITEM_4428"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wyrdwarped Weapon +4"] = new engine.RulesElement({
    name: "Wyrdwarped Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4429",
    source: "Manual of the Planes",
    categories: ["Wyrdwarped Weapon +4", "ID_FMP_MAGIC_ITEM_4429"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wyrdwarped Weapon +5"] = new engine.RulesElement({
    name: "Wyrdwarped Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4430",
    source: "Manual of the Planes",
    categories: ["Wyrdwarped Weapon +5", "ID_FMP_MAGIC_ITEM_4430"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wyrdwarped Weapon +6"] = new engine.RulesElement({
    name: "Wyrdwarped Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4431",
    source: "Manual of the Planes",
    categories: ["Wyrdwarped Weapon +6", "ID_FMP_MAGIC_ITEM_4431"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
