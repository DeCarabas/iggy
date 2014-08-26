define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Empathic Mind (epic tier)"] = new engine.RulesElement({
    name: "Empathic Mind (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9032",
    source: "Dungeon Magazine 177",
    categories: ["Empathic Mind (epic tier)", "ID_FMP_MAGIC_ITEM_9032"],
    rules: function(model) {
      model.statadd("Insight Misc", function() { /* while you are not bloodied */ return 4; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Empathic Mind (heroic tier)"] = new engine.RulesElement({
    name: "Empathic Mind (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9028",
    source: "Dungeon Magazine 177",
    categories: ["Empathic Mind (heroic tier)", "ID_FMP_MAGIC_ITEM_9028"],
    rules: function(model) {
      model.statadd("Insight Misc", function() { /* while you are not bloodied */ return 4; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Empathic Mind (paragon tier)"] = new engine.RulesElement({
    name: "Empathic Mind (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9030",
    source: "Dungeon Magazine 177",
    categories: ["Empathic Mind (paragon tier)", "ID_FMP_MAGIC_ITEM_9030"],
    rules: function(model) {
      model.statadd("Insight Misc", function() { /* while you are not bloodied */ return 4; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Madstone (heroic tier)"] = new engine.RulesElement({
    name: "Madstone (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9117",
    source: "Dungeon Magazine 177",
    categories: ["Madstone (heroic tier)", "ID_FMP_MAGIC_ITEM_9117"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Melegaunt's Darkblade +3"] = new engine.RulesElement({
    name: "Melegaunt's Darkblade +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9024",
    source: "Dungeon Magazine 177",
    categories: ["Melegaunt's Darkblade +3", "ID_FMP_MAGIC_ITEM_9024"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Melegaunt's Darkblade +4"] = new engine.RulesElement({
    name: "Melegaunt's Darkblade +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9025",
    source: "Dungeon Magazine 177",
    categories: ["Melegaunt's Darkblade +4", "ID_FMP_MAGIC_ITEM_9025"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Melegaunt's Darkblade +5"] = new engine.RulesElement({
    name: "Melegaunt's Darkblade +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9026",
    source: "Dungeon Magazine 177",
    categories: ["Melegaunt's Darkblade +5", "ID_FMP_MAGIC_ITEM_9026"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Melegaunt's Darkblade +6"] = new engine.RulesElement({
    name: "Melegaunt's Darkblade +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9027",
    source: "Dungeon Magazine 177",
    categories: ["Melegaunt's Darkblade +6", "ID_FMP_MAGIC_ITEM_9027"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mercurial Mind (epic tier)"] = new engine.RulesElement({
    name: "Mercurial Mind (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9037",
    source: "Dungeon Magazine 177",
    categories: ["Mercurial Mind (epic tier)", "ID_FMP_MAGIC_ITEM_9037"],
    rules: function(model) {
      model.statadd("Speed", 1, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mercurial Mind (heroic tier)"] = new engine.RulesElement({
    name: "Mercurial Mind (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9033",
    source: "Dungeon Magazine 177",
    categories: ["Mercurial Mind (heroic tier)", "ID_FMP_MAGIC_ITEM_9033"],
    rules: function(model) {
      model.statadd("Speed", 1, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mercurial Mind (paragon tier)"] = new engine.RulesElement({
    name: "Mercurial Mind (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9035",
    source: "Dungeon Magazine 177",
    categories: ["Mercurial Mind (paragon tier)", "ID_FMP_MAGIC_ITEM_9035"],
    rules: function(model) {
      model.statadd("Speed", 1, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Muddling Mind (paragon tier)"] = new engine.RulesElement({
    name: "Muddling Mind (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9039",
    source: "Dungeon Magazine 177",
    categories: ["Muddling Mind (paragon tier)", "ID_FMP_MAGIC_ITEM_9039"],
    rules: function(model) {
      model.statadd("Stealth Misc", function() { /* while you are not bloodied */ return 4; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Sculpting Mind (epic tier)"] = new engine.RulesElement({
    name: "Sculpting Mind (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9044",
    source: "Dungeon Magazine 177",
    categories: ["Sculpting Mind (epic tier)", "ID_FMP_MAGIC_ITEM_9044"],
    rules: function(model) {
      model.statadd("Athletics Misc", function() { /* while you are not bloodied */ return 4; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Sculpting Mind (heroic tier)"] = new engine.RulesElement({
    name: "Sculpting Mind (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9040",
    source: "Dungeon Magazine 177",
    categories: ["Sculpting Mind (heroic tier)", "ID_FMP_MAGIC_ITEM_9040"],
    rules: function(model) {
      model.statadd("Athletics Misc", function() { /* while you are not bloodied */ return 4; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Sculpting Mind (paragon tier)"] = new engine.RulesElement({
    name: "Sculpting Mind (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9042",
    source: "Dungeon Magazine 177",
    categories: ["Sculpting Mind (paragon tier)", "ID_FMP_MAGIC_ITEM_9042"],
    rules: function(model) {
      model.statadd("Athletics Misc", function() { /* while you are not bloodied */ return 4; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Tattoo of Bloodied Chains (epic tier)"] = new engine.RulesElement({
    name: "Tattoo of Bloodied Chains (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9061",
    source: "Dungeon Magazine 177",
    categories: ["Tattoo of Bloodied Chains (epic tier)", "ID_FMP_MAGIC_ITEM_9061"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Tattoo of Bloodied Chains (heroic tier)"] = new engine.RulesElement({
    name: "Tattoo of Bloodied Chains (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9057",
    source: "Dungeon Magazine 177",
    categories: ["Tattoo of Bloodied Chains (heroic tier)", "ID_FMP_MAGIC_ITEM_9057"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Tattoo of Bloodied Chains (paragon tier)"] = new engine.RulesElement({
    name: "Tattoo of Bloodied Chains (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9059",
    source: "Dungeon Magazine 177",
    categories: ["Tattoo of Bloodied Chains (paragon tier)", "ID_FMP_MAGIC_ITEM_9059"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Tattoo of the Penitent Martyr (paragon tier)"] = new engine.RulesElement({
    name: "Tattoo of the Penitent Martyr (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9062",
    source: "Dungeon Magazine 177",
    categories: ["Tattoo of the Penitent Martyr (paragon tier)", "ID_FMP_MAGIC_ITEM_9062"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["The Deck of Many Things"] = new engine.RulesElement({
    name: "The Deck of Many Things",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9116",
    source: "Dungeon Magazine 177",
    categories: ["The Deck of Many Things", "ID_FMP_MAGIC_ITEM_9116"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Torog's Lamentation of the Shackled (level 13)"] = new engine.RulesElement({
    name: "Torog's Lamentation of the Shackled (level 13)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9053",
    source: "Dungeon Magazine 177",
    categories: ["Torog's Lamentation of the Shackled (level 13)", "ID_FMP_MAGIC_ITEM_9053"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against the slowed, immobilized, and restrained conditions */ return 3; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Torog's Lamentation of the Shackled (level 18)"] = new engine.RulesElement({
    name: "Torog's Lamentation of the Shackled (level 18)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9054",
    source: "Dungeon Magazine 177",
    categories: ["Torog's Lamentation of the Shackled (level 18)", "ID_FMP_MAGIC_ITEM_9054"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against the slowed, immobilized, and restrained conditions */ return 4; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Torog's Lamentation of the Shackled (level 23)"] = new engine.RulesElement({
    name: "Torog's Lamentation of the Shackled (level 23)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9055",
    source: "Dungeon Magazine 177",
    categories: ["Torog's Lamentation of the Shackled (level 23)", "ID_FMP_MAGIC_ITEM_9055"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against the slowed, immobilized, and restrained conditions */ return 5; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Torog's Lamentation of the Shackled (level 28)"] = new engine.RulesElement({
    name: "Torog's Lamentation of the Shackled (level 28)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9056",
    source: "Dungeon Magazine 177",
    categories: ["Torog's Lamentation of the Shackled (level 28)", "ID_FMP_MAGIC_ITEM_9056"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against the slowed, immobilized, and restrained conditions */ return 6; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Torog's Lamentation of the Shackled (level 3)"] = new engine.RulesElement({
    name: "Torog's Lamentation of the Shackled (level 3)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9051",
    source: "Dungeon Magazine 177",
    categories: ["Torog's Lamentation of the Shackled (level 3)", "ID_FMP_MAGIC_ITEM_9051"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against the slowed, immobilized, and restrained conditions */ return 1; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Torog's Lamentation of the Shackled (level 8)"] = new engine.RulesElement({
    name: "Torog's Lamentation of the Shackled (level 8)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9052",
    source: "Dungeon Magazine 177",
    categories: ["Torog's Lamentation of the Shackled (level 8)", "ID_FMP_MAGIC_ITEM_9052"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against the slowed, immobilized, and restrained conditions */ return 2; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Warding Mind (epic tier)"] = new engine.RulesElement({
    name: "Warding Mind (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9049",
    source: "Dungeon Magazine 177",
    categories: ["Warding Mind (epic tier)", "ID_FMP_MAGIC_ITEM_9049"],
    rules: function(model) {
      model.statadd("Acrobatics Misc", function() { /* while you are not bloodied */ return 4; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Warding Mind (heroic tier)"] = new engine.RulesElement({
    name: "Warding Mind (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9045",
    source: "Dungeon Magazine 177",
    categories: ["Warding Mind (heroic tier)", "ID_FMP_MAGIC_ITEM_9045"],
    rules: function(model) {
      model.statadd("Acrobatics Misc", function() { /* while you are not bloodied */ return 4; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Warding Mind (paragon tier)"] = new engine.RulesElement({
    name: "Warding Mind (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9047",
    source: "Dungeon Magazine 177",
    categories: ["Warding Mind (paragon tier)", "ID_FMP_MAGIC_ITEM_9047"],
    rules: function(model) {
      model.statadd("Acrobatics Misc", function() { /* while you are not bloodied */ return 4; }, "item");
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
