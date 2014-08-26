define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Advanced Delver's Training (heroic tier)"] = new engine.RulesElement({
    name: "Advanced Delver's Training (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9515",
    source: "Dragon Magazine 389",
    categories: ["Advanced Delver's Training (heroic tier)", "ID_FMP_MAGIC_ITEM_9515"],
    rules: function(model) {
      model.statadd("Thievery Misc", function() { /* to disable traps */ return 2; });
      model.statadd("Dungeoneering Misc", function() { /* to forage or navigate underground */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bow of True Arrows +1"] = new engine.RulesElement({
    name: "Bow of True Arrows +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9251",
    source: "Dragon Magazine 389",
    categories: ["Bow of True Arrows +1", "ID_FMP_MAGIC_ITEM_9251"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bow of True Arrows +2"] = new engine.RulesElement({
    name: "Bow of True Arrows +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9252",
    source: "Dragon Magazine 389",
    categories: ["Bow of True Arrows +2", "ID_FMP_MAGIC_ITEM_9252"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bow of True Arrows +3"] = new engine.RulesElement({
    name: "Bow of True Arrows +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9253",
    source: "Dragon Magazine 389",
    categories: ["Bow of True Arrows +3", "ID_FMP_MAGIC_ITEM_9253"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bow of True Arrows +4"] = new engine.RulesElement({
    name: "Bow of True Arrows +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9254",
    source: "Dragon Magazine 389",
    categories: ["Bow of True Arrows +4", "ID_FMP_MAGIC_ITEM_9254"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bow of True Arrows +5"] = new engine.RulesElement({
    name: "Bow of True Arrows +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9255",
    source: "Dragon Magazine 389",
    categories: ["Bow of True Arrows +5", "ID_FMP_MAGIC_ITEM_9255"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bow of True Arrows +6"] = new engine.RulesElement({
    name: "Bow of True Arrows +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9256",
    source: "Dragon Magazine 389",
    categories: ["Bow of True Arrows +6", "ID_FMP_MAGIC_ITEM_9256"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Demonbound (level 13)"] = new engine.RulesElement({
    name: "Demonbound (level 13)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9241",
    source: "Dragon Magazine 389",
    categories: ["Demonbound (level 13)", "ID_FMP_MAGIC_ITEM_9241"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Demonbound (level 18)"] = new engine.RulesElement({
    name: "Demonbound (level 18)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9242",
    source: "Dragon Magazine 389",
    categories: ["Demonbound (level 18)", "ID_FMP_MAGIC_ITEM_9242"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Demonbound (level 23)"] = new engine.RulesElement({
    name: "Demonbound (level 23)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9243",
    source: "Dragon Magazine 389",
    categories: ["Demonbound (level 23)", "ID_FMP_MAGIC_ITEM_9243"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Demonbound (level 28)"] = new engine.RulesElement({
    name: "Demonbound (level 28)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9244",
    source: "Dragon Magazine 389",
    categories: ["Demonbound (level 28)", "ID_FMP_MAGIC_ITEM_9244"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Demonbound (level 3)"] = new engine.RulesElement({
    name: "Demonbound (level 3)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9239",
    source: "Dragon Magazine 389",
    categories: ["Demonbound (level 3)", "ID_FMP_MAGIC_ITEM_9239"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Demonbound (level 8)"] = new engine.RulesElement({
    name: "Demonbound (level 8)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9240",
    source: "Dragon Magazine 389",
    categories: ["Demonbound (level 8)", "ID_FMP_MAGIC_ITEM_9240"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Foe-Seeking Bow +1"] = new engine.RulesElement({
    name: "Foe-Seeking Bow +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9257",
    source: "Dragon Magazine 389",
    categories: ["Foe-Seeking Bow +1", "ID_FMP_MAGIC_ITEM_9257"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Foe-Seeking Bow +2"] = new engine.RulesElement({
    name: "Foe-Seeking Bow +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9258",
    source: "Dragon Magazine 389",
    categories: ["Foe-Seeking Bow +2", "ID_FMP_MAGIC_ITEM_9258"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Foe-Seeking Bow +3"] = new engine.RulesElement({
    name: "Foe-Seeking Bow +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9259",
    source: "Dragon Magazine 389",
    categories: ["Foe-Seeking Bow +3", "ID_FMP_MAGIC_ITEM_9259"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Foe-Seeking Bow +4"] = new engine.RulesElement({
    name: "Foe-Seeking Bow +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9260",
    source: "Dragon Magazine 389",
    categories: ["Foe-Seeking Bow +4", "ID_FMP_MAGIC_ITEM_9260"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Foe-Seeking Bow +5"] = new engine.RulesElement({
    name: "Foe-Seeking Bow +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9261",
    source: "Dragon Magazine 389",
    categories: ["Foe-Seeking Bow +5", "ID_FMP_MAGIC_ITEM_9261"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Foe-Seeking Bow +6"] = new engine.RulesElement({
    name: "Foe-Seeking Bow +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9262",
    source: "Dragon Magazine 389",
    categories: ["Foe-Seeking Bow +6", "ID_FMP_MAGIC_ITEM_9262"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Inevitable Bow +3"] = new engine.RulesElement({
    name: "Inevitable Bow +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9263",
    source: "Dragon Magazine 389",
    categories: ["Inevitable Bow +3", "ID_FMP_MAGIC_ITEM_9263"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Inevitable Bow +4"] = new engine.RulesElement({
    name: "Inevitable Bow +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9264",
    source: "Dragon Magazine 389",
    categories: ["Inevitable Bow +4", "ID_FMP_MAGIC_ITEM_9264"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Inevitable Bow +5"] = new engine.RulesElement({
    name: "Inevitable Bow +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9265",
    source: "Dragon Magazine 389",
    categories: ["Inevitable Bow +5", "ID_FMP_MAGIC_ITEM_9265"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Inevitable Bow +6"] = new engine.RulesElement({
    name: "Inevitable Bow +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9266",
    source: "Dragon Magazine 389",
    categories: ["Inevitable Bow +6", "ID_FMP_MAGIC_ITEM_9266"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Insight of the Vault (heroic tier)"] = new engine.RulesElement({
    name: "Insight of the Vault (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9514",
    source: "Dragon Magazine 389",
    categories: ["Insight of the Vault (heroic tier)", "ID_FMP_MAGIC_ITEM_9514"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Kingslayer's Curse - Face Me, Cowards (epic tier)"] = new engine.RulesElement({
    name: "Kingslayer's Curse - Face Me, Cowards (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9237",
    source: "Dragon Magazine 389",
    categories: ["Kingslayer's Curse - Face Me, Cowards (epic tier)", "ID_FMP_MAGIC_ITEM_9237"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Kingslayer's Curse - Fearsome Reputation (paragon tier)"] = new engine.RulesElement({
    name: "Kingslayer's Curse - Fearsome Reputation (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9235",
    source: "Dragon Magazine 389",
    categories: ["Kingslayer's Curse - Fearsome Reputation (paragon tier)", "ID_FMP_MAGIC_ITEM_9235"],
    rules: function(model) {
      model.statadd("Intimidate Misc", function() { /* against hostile and unfriendly targets */ return 5; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Kingslayer's Curse - God Hunter (epic tier)"] = new engine.RulesElement({
    name: "Kingslayer's Curse - God Hunter (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9238",
    source: "Dragon Magazine 389",
    categories: ["Kingslayer's Curse - God Hunter (epic tier)", "ID_FMP_MAGIC_ITEM_9238"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Kingslayer's Curse - Outlaw's Fortitude (heroic tier)"] = new engine.RulesElement({
    name: "Kingslayer's Curse - Outlaw's Fortitude (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9233",
    source: "Dragon Magazine 389",
    categories: ["Kingslayer's Curse - Outlaw's Fortitude (heroic tier)", "ID_FMP_MAGIC_ITEM_9233"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Kingslayer's Curse - Rage of the Persecuted (paragon tier)"] = new engine.RulesElement({
    name: "Kingslayer's Curse - Rage of the Persecuted (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9236",
    source: "Dragon Magazine 389",
    categories: ["Kingslayer's Curse - Rage of the Persecuted (paragon tier)", "ID_FMP_MAGIC_ITEM_9236"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Kingslayer's Curse - Unconquerable (heroic tier)"] = new engine.RulesElement({
    name: "Kingslayer's Curse - Unconquerable (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9231",
    source: "Dragon Magazine 389",
    categories: ["Kingslayer's Curse - Unconquerable (heroic tier)", "ID_FMP_MAGIC_ITEM_9231"],
    rules: function(model) {
      model.statadd("Intimidate Misc", 2, "item");
      model.statadd("Perception Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Resolve of the Inner Vault (heroic tier)"] = new engine.RulesElement({
    name: "Resolve of the Inner Vault (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9516",
    source: "Dragon Magazine 389",
    categories: ["Resolve of the Inner Vault (heroic tier)", "ID_FMP_MAGIC_ITEM_9516"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against charm or fear effects */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Retributive Bow +3"] = new engine.RulesElement({
    name: "Retributive Bow +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9267",
    source: "Dragon Magazine 389",
    categories: ["Retributive Bow +3", "ID_FMP_MAGIC_ITEM_9267"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Retributive Bow +4"] = new engine.RulesElement({
    name: "Retributive Bow +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9268",
    source: "Dragon Magazine 389",
    categories: ["Retributive Bow +4", "ID_FMP_MAGIC_ITEM_9268"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Retributive Bow +5"] = new engine.RulesElement({
    name: "Retributive Bow +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9269",
    source: "Dragon Magazine 389",
    categories: ["Retributive Bow +5", "ID_FMP_MAGIC_ITEM_9269"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Retributive Bow +6"] = new engine.RulesElement({
    name: "Retributive Bow +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9270",
    source: "Dragon Magazine 389",
    categories: ["Retributive Bow +6", "ID_FMP_MAGIC_ITEM_9270"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["The Fading One - Battle Ghost (epic tier)"] = new engine.RulesElement({
    name: "The Fading One - Battle Ghost (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9249",
    source: "Dragon Magazine 389",
    categories: ["The Fading One - Battle Ghost (epic tier)", "ID_FMP_MAGIC_ITEM_9249"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["The Fading One - Ghostfoot (heroic tier)"] = new engine.RulesElement({
    name: "The Fading One - Ghostfoot (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9245",
    source: "Dragon Magazine 389",
    categories: ["The Fading One - Ghostfoot (heroic tier)", "ID_FMP_MAGIC_ITEM_9245"],
    rules: function(model) {
      model.statadd("Athletics Misc", function() { /* to jump */ return 5; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["The Fading One - Life Drain (paragon tier)"] = new engine.RulesElement({
    name: "The Fading One - Life Drain (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9248",
    source: "Dragon Magazine 389",
    categories: ["The Fading One - Life Drain (paragon tier)", "ID_FMP_MAGIC_ITEM_9248"],
    rules: function(model) {
      model.statadd("Death Saving Throws", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["The Fading One - Lighter than Wind (heroic tier)"] = new engine.RulesElement({
    name: "The Fading One - Lighter than Wind (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9246",
    source: "Dragon Magazine 389",
    categories: ["The Fading One - Lighter than Wind (heroic tier)", "ID_FMP_MAGIC_ITEM_9246"],
    rules: function(model) {
      model.statadd("Acrobatics Misc", 2, "item");
      model.statadd("Athletics Misc", 2, "item");
      model.statadd("attack roll", function() { /* after shifting or flying */ return 1; }, "Power");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["The Fading One - Spirit Body (paragon tier)"] = new engine.RulesElement({
    name: "The Fading One - Spirit Body (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9247",
    source: "Dragon Magazine 389",
    categories: ["The Fading One - Spirit Body (paragon tier)", "ID_FMP_MAGIC_ITEM_9247"],
    rules: function(model) {
      model.statadd("The Fading One - Spirit Body (paragon tier)", 5, "The Fading One - Spirit Body (paragon tier)");
      model.statadd("resist:necrotic", function() { return model.stat("The Fading One - Spirit Body (paragon tier)"); }, "resist");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["The Fading One - Touch from Beyond (epic tier)"] = new engine.RulesElement({
    name: "The Fading One - Touch from Beyond (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9250",
    source: "Dragon Magazine 389",
    categories: ["The Fading One - Touch from Beyond (epic tier)", "ID_FMP_MAGIC_ITEM_9250"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["True Kiss of the Mistress (level 13)"] = new engine.RulesElement({
    name: "True Kiss of the Mistress (level 13)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9226",
    source: "Dragon Magazine 389",
    categories: ["True Kiss of the Mistress (level 13)", "ID_FMP_MAGIC_ITEM_9226"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against effects that immobilize, restrain, slow, and stun */ return 2; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["True Kiss of the Mistress (level 18)"] = new engine.RulesElement({
    name: "True Kiss of the Mistress (level 18)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9227",
    source: "Dragon Magazine 389",
    categories: ["True Kiss of the Mistress (level 18)", "ID_FMP_MAGIC_ITEM_9227"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against effects that immobilize, restrain, slow, and stun */ return 2; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["True Kiss of the Mistress (level 23)"] = new engine.RulesElement({
    name: "True Kiss of the Mistress (level 23)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9228",
    source: "Dragon Magazine 389",
    categories: ["True Kiss of the Mistress (level 23)", "ID_FMP_MAGIC_ITEM_9228"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against effects that immobilize, restrain, slow, and stun */ return 2; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["True Kiss of the Mistress (level 28)"] = new engine.RulesElement({
    name: "True Kiss of the Mistress (level 28)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9229",
    source: "Dragon Magazine 389",
    categories: ["True Kiss of the Mistress (level 28)", "ID_FMP_MAGIC_ITEM_9229"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against effects that immobilize, restrain, slow, and stun */ return 2; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["True Kiss of the Mistress (level 3)"] = new engine.RulesElement({
    name: "True Kiss of the Mistress (level 3)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9224",
    source: "Dragon Magazine 389",
    categories: ["True Kiss of the Mistress (level 3)", "ID_FMP_MAGIC_ITEM_9224"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against effects that immobilize, restrain, slow, and stun */ return 2; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["True Kiss of the Mistress (level 8)"] = new engine.RulesElement({
    name: "True Kiss of the Mistress (level 8)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9225",
    source: "Dragon Magazine 389",
    categories: ["True Kiss of the Mistress (level 8)", "ID_FMP_MAGIC_ITEM_9225"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against effects that immobilize, restrain, slow, and stun */ return 2; }, "item");
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
