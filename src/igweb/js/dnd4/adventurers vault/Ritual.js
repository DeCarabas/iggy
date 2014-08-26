define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Ritual = types['Ritual'] || (types['Ritual'] = {});
  te = Ritual["Alchemical Silver"] = new engine.RulesElement({
    name: "Alchemical Silver",
    type: "Ritual",
    id: "ID_FMP_RITUAL_134",
    source: "Adventurer's Vault",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=134",
    categories: ["Alchemical Silver", "ID_FMP_RITUAL_134"]
  });
  byID[te.id] = te;
  
  te = Ritual["Alchemist's Acid"] = new engine.RulesElement({
    name: "Alchemist's Acid",
    type: "Ritual",
    id: "ID_FMP_RITUAL_135",
    source: "Adventurer's Vault",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=135",
    categories: ["Alchemist's Acid", "ID_FMP_RITUAL_135"]
  });
  byID[te.id] = te;
  
  te = Ritual["Alchemist's Fire"] = new engine.RulesElement({
    name: "Alchemist's Fire",
    type: "Ritual",
    id: "ID_FMP_RITUAL_136",
    source: "Adventurer's Vault",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=136",
    categories: ["Alchemist's Fire", "ID_FMP_RITUAL_136"]
  });
  byID[te.id] = te;
  
  te = Ritual["Alchemist's Frost"] = new engine.RulesElement({
    name: "Alchemist's Frost",
    type: "Ritual",
    id: "ID_FMP_RITUAL_137",
    source: "Adventurer's Vault",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=137",
    categories: ["Alchemist's Frost", "ID_FMP_RITUAL_137"]
  });
  byID[te.id] = te;
  
  te = Ritual["Antivenom"] = new engine.RulesElement({
    name: "Antivenom",
    type: "Ritual",
    id: "ID_FMP_RITUAL_138",
    source: "Adventurer's Vault",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=138",
    categories: ["Antivenom", "ID_FMP_RITUAL_138"]
  });
  byID[te.id] = te;
  
  te = Ritual["Beastbane"] = new engine.RulesElement({
    name: "Beastbane",
    type: "Ritual",
    id: "ID_FMP_RITUAL_139",
    source: "Adventurer's Vault",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=139",
    categories: ["Beastbane", "ID_FMP_RITUAL_139"]
  });
  byID[te.id] = te;
  
  te = Ritual["Blastpatch"] = new engine.RulesElement({
    name: "Blastpatch",
    type: "Ritual",
    id: "ID_FMP_RITUAL_140",
    source: "Adventurer's Vault",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=140",
    categories: ["Blastpatch", "ID_FMP_RITUAL_140"]
  });
  byID[te.id] = te;
  
  te = Ritual["Blinding Bomb"] = new engine.RulesElement({
    name: "Blinding Bomb",
    type: "Ritual",
    id: "ID_FMP_RITUAL_141",
    source: "Adventurer's Vault",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=141",
    categories: ["Blinding Bomb", "ID_FMP_RITUAL_141"]
  });
  byID[te.id] = te;
  
  te = Ritual["Bloodstinger Poison"] = new engine.RulesElement({
    name: "Bloodstinger Poison",
    type: "Ritual",
    id: "ID_FMP_RITUAL_142",
    source: "Adventurer's Vault",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=142",
    categories: ["Bloodstinger Poison", "ID_FMP_RITUAL_142"]
  });
  byID[te.id] = te;
  
  te = Ritual["Clearsense Powder"] = new engine.RulesElement({
    name: "Clearsense Powder",
    type: "Ritual",
    id: "ID_FMP_RITUAL_143",
    source: "Adventurer's Vault",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=143",
    categories: ["Clearsense Powder", "ID_FMP_RITUAL_143"]
  });
  byID[te.id] = te;
  
  te = Ritual["Clearwater Solution"] = new engine.RulesElement({
    name: "Clearwater Solution",
    type: "Ritual",
    id: "ID_FMP_RITUAL_144",
    source: "Adventurer's Vault",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=144",
    categories: ["Clearwater Solution", "ID_FMP_RITUAL_144"]
  });
  byID[te.id] = te;
  
  te = Ritual["Dragonfire Tar"] = new engine.RulesElement({
    name: "Dragonfire Tar",
    type: "Ritual",
    id: "ID_FMP_RITUAL_145",
    source: "Adventurer's Vault",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=145",
    categories: ["Dragonfire Tar", "ID_FMP_RITUAL_145"]
  });
  byID[te.id] = te;
  
  te = Ritual["Ghoststrike Oil"] = new engine.RulesElement({
    name: "Ghoststrike Oil",
    type: "Ritual",
    id: "ID_FMP_RITUAL_146",
    source: "Adventurer's Vault",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=146",
    categories: ["Ghoststrike Oil", "ID_FMP_RITUAL_146"]
  });
  byID[te.id] = te;
  
  te = Ritual["Goodnight Tincture"] = new engine.RulesElement({
    name: "Goodnight Tincture",
    type: "Ritual",
    id: "ID_FMP_RITUAL_147",
    source: "Adventurer's Vault",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=147",
    categories: ["Goodnight Tincture", "ID_FMP_RITUAL_147"]
  });
  byID[te.id] = te;
  
  te = Ritual["Herbal Poultice"] = new engine.RulesElement({
    name: "Herbal Poultice",
    type: "Ritual",
    id: "ID_FMP_RITUAL_148",
    source: "Adventurer's Vault",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=148",
    categories: ["Herbal Poultice", "ID_FMP_RITUAL_148"]
  });
  byID[te.id] = te;
  
  te = Ritual["Jolt Flask"] = new engine.RulesElement({
    name: "Jolt Flask",
    type: "Ritual",
    id: "ID_FMP_RITUAL_149",
    source: "Adventurer's Vault",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=149",
    categories: ["Jolt Flask", "ID_FMP_RITUAL_149"]
  });
  byID[te.id] = te;
  
  te = Ritual["Lockburst Chalk"] = new engine.RulesElement({
    name: "Lockburst Chalk",
    type: "Ritual",
    id: "ID_FMP_RITUAL_150",
    source: "Adventurer's Vault",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=150",
    categories: ["Lockburst Chalk", "ID_FMP_RITUAL_150"]
  });
  byID[te.id] = te;
  
  te = Ritual["Salve of Slipperiness"] = new engine.RulesElement({
    name: "Salve of Slipperiness",
    type: "Ritual",
    id: "ID_FMP_RITUAL_151",
    source: "Adventurer's Vault",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=151",
    categories: ["Salve of Slipperiness", "ID_FMP_RITUAL_151"]
  });
  byID[te.id] = te;
  
  te = Ritual["Slow-Step Oil"] = new engine.RulesElement({
    name: "Slow-Step Oil",
    type: "Ritual",
    id: "ID_FMP_RITUAL_152",
    source: "Adventurer's Vault",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=152",
    categories: ["Slow-Step Oil", "ID_FMP_RITUAL_152"]
  });
  byID[te.id] = te;
  
  te = Ritual["Smokestick"] = new engine.RulesElement({
    name: "Smokestick",
    type: "Ritual",
    id: "ID_FMP_RITUAL_153",
    source: "Adventurer's Vault",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=153",
    categories: ["Smokestick", "ID_FMP_RITUAL_153"]
  });
  byID[te.id] = te;
  
  te = Ritual["Sovereign Glue"] = new engine.RulesElement({
    name: "Sovereign Glue",
    type: "Ritual",
    id: "ID_FMP_RITUAL_154",
    source: "Adventurer's Vault",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=154",
    categories: ["Sovereign Glue", "ID_FMP_RITUAL_154"]
  });
  byID[te.id] = te;
  
  te = Ritual["Tanglefoot Bag"] = new engine.RulesElement({
    name: "Tanglefoot Bag",
    type: "Ritual",
    id: "ID_FMP_RITUAL_155",
    source: "Adventurer's Vault",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=155",
    categories: ["Tanglefoot Bag", "ID_FMP_RITUAL_155"]
  });
  byID[te.id] = te;
  
  te = Ritual["Thunderstone"] = new engine.RulesElement({
    name: "Thunderstone",
    type: "Ritual",
    id: "ID_FMP_RITUAL_156",
    source: "Adventurer's Vault",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=156",
    categories: ["Thunderstone", "ID_FMP_RITUAL_156"]
  });
  byID[te.id] = te;
  
  te = Ritual["Tracking Dust"] = new engine.RulesElement({
    name: "Tracking Dust",
    type: "Ritual",
    id: "ID_FMP_RITUAL_157",
    source: "Adventurer's Vault",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=157",
    categories: ["Tracking Dust", "ID_FMP_RITUAL_157"]
  });
  byID[te.id] = te;
  
  te = Ritual["Transfer Enchantment"] = new engine.RulesElement({
    name: "Transfer Enchantment",
    type: "Ritual",
    id: "ID_FMP_RITUAL_212",
    source: "Adventurer's Vault",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=212",
    categories: ["Transfer Enchantment", "ID_FMP_RITUAL_212"]
  });
  byID[te.id] = te;
  
  te = Ritual["Universal Solvent"] = new engine.RulesElement({
    name: "Universal Solvent",
    type: "Ritual",
    id: "ID_FMP_RITUAL_158",
    source: "Adventurer's Vault",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=158",
    categories: ["Universal Solvent", "ID_FMP_RITUAL_158"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
