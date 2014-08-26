define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Ritual_Scroll = types['Ritual Scroll'] || (types['Ritual Scroll'] = {});
  te = Ritual_Scroll["Scroll of Alchemical Silver"] = new engine.RulesElement({
    name: "Scroll of Alchemical Silver",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_ALCHEMICAL_SILVER",
    source: "Adventurer's Vault",
    categories: ["Scroll of Alchemical Silver", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_ALCHEMICAL_SILVER"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Alchemist's Acid"] = new engine.RulesElement({
    name: "Scroll of Alchemist's Acid",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_ALCHEMIST'S_ACID",
    source: "Adventurer's Vault",
    categories: ["Scroll of Alchemist's Acid", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_ALCHEMIST'S_ACID"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Alchemist's Fire"] = new engine.RulesElement({
    name: "Scroll of Alchemist's Fire",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_ALCHEMIST'S_FIRE",
    source: "Adventurer's Vault",
    categories: ["Scroll of Alchemist's Fire", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_ALCHEMIST'S_FIRE"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Alchemist's Frost"] = new engine.RulesElement({
    name: "Scroll of Alchemist's Frost",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_ALCHEMIST'S_FROST",
    source: "Adventurer's Vault",
    categories: ["Scroll of Alchemist's Frost", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_ALCHEMIST'S_FROST"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Antivenom"] = new engine.RulesElement({
    name: "Scroll of Antivenom",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_ANTIVENOM",
    source: "Adventurer's Vault",
    categories: ["Scroll of Antivenom", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_ANTIVENOM"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Beastbane"] = new engine.RulesElement({
    name: "Scroll of Beastbane",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_BEASTBANE",
    source: "Adventurer's Vault",
    categories: ["Scroll of Beastbane", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_BEASTBANE"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Blastpatch"] = new engine.RulesElement({
    name: "Scroll of Blastpatch",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_BLASTPATCH",
    source: "Adventurer's Vault",
    categories: ["Scroll of Blastpatch", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_BLASTPATCH"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Blinding Bomb"] = new engine.RulesElement({
    name: "Scroll of Blinding Bomb",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_BLINDING_BOMB",
    source: "Adventurer's Vault",
    categories: ["Scroll of Blinding Bomb", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_BLINDING_BOMB"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Bloodstinger Poison"] = new engine.RulesElement({
    name: "Scroll of Bloodstinger Poison",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_BLOODSTINGER_POISON",
    source: "Adventurer's Vault",
    categories: ["Scroll of Bloodstinger Poison", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_BLOODSTINGER_POISON"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Clearsense Powder"] = new engine.RulesElement({
    name: "Scroll of Clearsense Powder",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_CLEARSENSE_POWDER",
    source: "Adventurer's Vault",
    categories: ["Scroll of Clearsense Powder", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_CLEARSENSE_POWDER"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Clearwater Solution"] = new engine.RulesElement({
    name: "Scroll of Clearwater Solution",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_CLEARWATER_SOLUTION",
    source: "Adventurer's Vault",
    categories: ["Scroll of Clearwater Solution", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_CLEARWATER_SOLUTION"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Dragonfire Tar"] = new engine.RulesElement({
    name: "Scroll of Dragonfire Tar",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_DRAGONFIRE_TAR",
    source: "Adventurer's Vault",
    categories: ["Scroll of Dragonfire Tar", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_DRAGONFIRE_TAR"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Ghoststrike Oil"] = new engine.RulesElement({
    name: "Scroll of Ghoststrike Oil",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_GHOSTSTRIKE_OIL",
    source: "Adventurer's Vault",
    categories: ["Scroll of Ghoststrike Oil", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_GHOSTSTRIKE_OIL"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Goodnight Tincture"] = new engine.RulesElement({
    name: "Scroll of Goodnight Tincture",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_GOODNIGHT_TINCTURE",
    source: "Adventurer's Vault",
    categories: ["Scroll of Goodnight Tincture", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_GOODNIGHT_TINCTURE"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Herbal Poultice"] = new engine.RulesElement({
    name: "Scroll of Herbal Poultice",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_HERBAL_POULTICE",
    source: "Adventurer's Vault",
    categories: ["Scroll of Herbal Poultice", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_HERBAL_POULTICE"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Jolt Flask"] = new engine.RulesElement({
    name: "Scroll of Jolt Flask",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_JOLT_FLASK",
    source: "Adventurer's Vault",
    categories: ["Scroll of Jolt Flask", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_JOLT_FLASK"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Lockburst Chalk"] = new engine.RulesElement({
    name: "Scroll of Lockburst Chalk",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_LOCKBURST_CHALK",
    source: "Adventurer's Vault",
    categories: ["Scroll of Lockburst Chalk", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_LOCKBURST_CHALK"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Salve of Slipperiness"] = new engine.RulesElement({
    name: "Scroll of Salve of Slipperiness",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_SALVE_OF_SLIPPERINESS",
    source: "Adventurer's Vault",
    categories: ["Scroll of Salve of Slipperiness", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_SALVE_OF_SLIPPERINESS"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Slow-Step Oil"] = new engine.RulesElement({
    name: "Scroll of Slow-Step Oil",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_SLOW-STEP_OIL",
    source: "Adventurer's Vault",
    categories: ["Scroll of Slow-Step Oil", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_SLOW-STEP_OIL"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Smokestick"] = new engine.RulesElement({
    name: "Scroll of Smokestick",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_SMOKESTICK",
    source: "Adventurer's Vault",
    categories: ["Scroll of Smokestick", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_SMOKESTICK"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Sovereign Glue"] = new engine.RulesElement({
    name: "Scroll of Sovereign Glue",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_SOVEREIGN_GLUE",
    source: "Adventurer's Vault",
    categories: ["Scroll of Sovereign Glue", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_SOVEREIGN_GLUE"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Tanglefoot Bag"] = new engine.RulesElement({
    name: "Scroll of Tanglefoot Bag",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_TANGLEFOOT_BAG",
    source: "Adventurer's Vault",
    categories: ["Scroll of Tanglefoot Bag", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_TANGLEFOOT_BAG"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Thunderstone"] = new engine.RulesElement({
    name: "Scroll of Thunderstone",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_THUNDERSTONE",
    source: "Adventurer's Vault",
    categories: ["Scroll of Thunderstone", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_THUNDERSTONE"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Tracking Dust"] = new engine.RulesElement({
    name: "Scroll of Tracking Dust",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_TRACKING_DUST",
    source: "Adventurer's Vault",
    categories: ["Scroll of Tracking Dust", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_TRACKING_DUST"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Transfer Enchantment"] = new engine.RulesElement({
    name: "Scroll of Transfer Enchantment",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_TRANSFER_ENCHANTMENT",
    source: "Adventurer's Vault",
    categories: ["Scroll of Transfer Enchantment", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_TRANSFER_ENCHANTMENT"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Universal Solvent"] = new engine.RulesElement({
    name: "Scroll of Universal Solvent",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_UNIVERSAL_SOLVENT",
    source: "Adventurer's Vault",
    categories: ["Scroll of Universal Solvent", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_UNIVERSAL_SOLVENT"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
