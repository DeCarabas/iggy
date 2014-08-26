define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Feat = types['Feat'] || (types['Feat'] = {});
  te = Feat["Courageous Example"] = new engine.RulesElement({
    name: "Courageous Example",
    type: "Feat",
    id: "ID_FMP_FEAT_1714",
    source: "Dragon Magazine 377",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1714",
    categories: ["Courageous Example", "ID_FMP_FEAT_1714"]
  });
  byID[te.id] = te;
  
  te = Feat["Crusader's Fury"] = new engine.RulesElement({
    name: "Crusader's Fury",
    type: "Feat",
    id: "ID_FMP_FEAT_1715",
    source: "Dragon Magazine 377",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1715",
    categories: ["Crusader's Fury", "ID_FMP_FEAT_1715"],
    rules: function(model) {
      model.statadd("Damage", function() { /* on opportunity attacks while adjacent to a bloodied ally */ return model.stat("Charisma modifier"); });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Divine Passion"] = new engine.RulesElement({
    name: "Divine Passion",
    type: "Feat",
    id: "ID_FMP_FEAT_1716",
    source: "Dragon Magazine 377",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1716",
    categories: ["Divine Passion", "ID_FMP_FEAT_1716"]
  });
  byID[te.id] = te;
  
  te = Feat["Enlarge Familiar"] = new engine.RulesElement({
    name: "Enlarge Familiar",
    type: "Feat",
    id: "ID_FMP_FEAT_1707",
    source: "Dragon Magazine 377",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1707",
    categories: ["Enlarge Familiar", "ID_FMP_FEAT_1707", "ID_INTERNAL_CATEGORY_FAMILIAR", "Familiar"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Fires of Heaven"] = new engine.RulesElement({
    name: "Fires of Heaven",
    type: "Feat",
    id: "ID_FMP_FEAT_1729",
    source: "Dragon Magazine 377",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1729",
    categories: ["Fires of Heaven", "ID_FMP_FEAT_1729"]
  });
  byID[te.id] = te;
  
  te = Feat["Free-Ranging Familiar"] = new engine.RulesElement({
    name: "Free-Ranging Familiar",
    type: "Feat",
    id: "ID_FMP_FEAT_1708",
    source: "Dragon Magazine 377",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1708",
    categories: ["Free-Ranging Familiar", "ID_FMP_FEAT_1708", "ID_INTERNAL_CATEGORY_FAMILIAR", "Familiar"]
  });
  byID[te.id] = te;
  
  te = Feat["Human Resolve"] = new engine.RulesElement({
    name: "Human Resolve",
    type: "Feat",
    id: "ID_FMP_FEAT_1717",
    source: "Dragon Magazine 377",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1717",
    categories: ["Human Resolve", "ID_FMP_FEAT_1717"],
    rules: function(model) {
      model.statadd("Action Point", "Human Resolve:Whenever you spend an action point to make an attack, you gain temporary hit points equal to 3 + your Charisma modifier.");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Hunting Beast"] = new engine.RulesElement({
    name: "Hunting Beast",
    type: "Feat",
    id: "ID_FMP_FEAT_1718",
    source: "Dragon Magazine 377",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1718",
    categories: ["Hunting Beast", "ID_FMP_FEAT_1718"]
  });
  byID[te.id] = te;
  
  te = Feat["Infused Familiar"] = new engine.RulesElement({
    name: "Infused Familiar",
    type: "Feat",
    id: "ID_FMP_FEAT_1709",
    source: "Dragon Magazine 377",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1709",
    categories: ["Infused Familiar", "ID_FMP_FEAT_1709", "ID_INTERNAL_CATEGORY_FAMILIAR", "Familiar"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Limning Challenge"] = new engine.RulesElement({
    name: "Limning Challenge",
    type: "Feat",
    id: "ID_FMP_FEAT_1730",
    source: "Dragon Magazine 377",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1730",
    categories: ["Limning Challenge", "ID_FMP_FEAT_1730"]
  });
  byID[te.id] = te;
  
  te = Feat["Majestic Fervor"] = new engine.RulesElement({
    name: "Majestic Fervor",
    type: "Feat",
    id: "ID_FMP_FEAT_1719",
    source: "Dragon Magazine 377",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1719",
    categories: ["Majestic Fervor", "ID_FMP_FEAT_1719"]
  });
  byID[te.id] = te;
  
  te = Feat["Radiant Rage"] = new engine.RulesElement({
    name: "Radiant Rage",
    type: "Feat",
    id: "ID_FMP_FEAT_1720",
    source: "Dragon Magazine 377",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1720",
    categories: ["Radiant Rage", "ID_FMP_FEAT_1720"]
  });
  byID[te.id] = te;
  
  te = Feat["Retributive Action"] = new engine.RulesElement({
    name: "Retributive Action",
    type: "Feat",
    id: "ID_FMP_FEAT_1727",
    source: "Dragon Magazine 377",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1727",
    categories: ["Retributive Action", "ID_FMP_FEAT_1727"],
    rules: function(model) {
      model.statadd("Action Point", "Retributive Action:When an enemy you marked triggers your Combat Challenge class feature and you hit with the attack, you can spend an action point to make the attack deal +2[W] damage");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Righteous Challenge"] = new engine.RulesElement({
    name: "Righteous Challenge",
    type: "Feat",
    id: "ID_FMP_FEAT_1731",
    source: "Dragon Magazine 377",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1731",
    categories: ["Righteous Challenge", "ID_FMP_FEAT_1731"]
  });
  byID[te.id] = te;
  
  te = Feat["Righteous Fury"] = new engine.RulesElement({
    name: "Righteous Fury",
    type: "Feat",
    id: "ID_FMP_FEAT_1721",
    source: "Dragon Magazine 377",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1721",
    categories: ["Righteous Fury", "ID_FMP_FEAT_1721"]
  });
  byID[te.id] = te;
  
  te = Feat["Shardbound Familiar (Eberron)"] = new engine.RulesElement({
    name: "Shardbound Familiar (Eberron)",
    type: "Feat",
    id: "ID_FMP_FEAT_1711",
    source: "Dragon Magazine 377",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1711",
    categories: ["Shardbound Familiar (Eberron)", "ID_FMP_FEAT_1711", "ID_INTERNAL_CATEGORY_FAMILIAR", "Familiar"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Shardbound Familiar (Khyber)"] = new engine.RulesElement({
    name: "Shardbound Familiar (Khyber)",
    type: "Feat",
    id: "ID_FMP_FEAT_1712",
    source: "Dragon Magazine 377",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1712",
    categories: ["Shardbound Familiar (Khyber)", "ID_FMP_FEAT_1712", "ID_INTERNAL_CATEGORY_FAMILIAR", "Familiar"]
  });
  byID[te.id] = te;
  
  te = Feat["Shardbound Familiar (Siberys)"] = new engine.RulesElement({
    name: "Shardbound Familiar (Siberys)",
    type: "Feat",
    id: "ID_FMP_FEAT_1713",
    source: "Dragon Magazine 377",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1713",
    categories: ["Shardbound Familiar (Siberys)", "ID_FMP_FEAT_1713", "ID_INTERNAL_CATEGORY_FAMILIAR", "Familiar"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Sniper's Aim"] = new engine.RulesElement({
    name: "Sniper's Aim",
    type: "Feat",
    id: "ID_FMP_FEAT_1722",
    source: "Dragon Magazine 377",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1722",
    categories: ["Sniper's Aim", "ID_FMP_FEAT_1722"]
  });
  byID[te.id] = te;
  
  te = Feat["Undeniable Crusader"] = new engine.RulesElement({
    name: "Undeniable Crusader",
    type: "Feat",
    id: "ID_FMP_FEAT_1732",
    source: "Dragon Magazine 377",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1732",
    categories: ["Undeniable Crusader", "ID_FMP_FEAT_1732"]
  });
  byID[te.id] = te;
  
  te = Feat["Unfailing Courage"] = new engine.RulesElement({
    name: "Unfailing Courage",
    type: "Feat",
    id: "ID_FMP_FEAT_1728",
    source: "Dragon Magazine 377",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1728",
    categories: ["Unfailing Courage", "ID_FMP_FEAT_1728"],
    rules: function(model) {
      model.statadd("Action Point", "Unfailing Courage:When you spend an action point, you can also spend a healing surge.");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Vigorous Familiar"] = new engine.RulesElement({
    name: "Vigorous Familiar",
    type: "Feat",
    id: "ID_FMP_FEAT_1710",
    source: "Dragon Magazine 377",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1710",
    categories: ["Vigorous Familiar", "ID_FMP_FEAT_1710", "ID_INTERNAL_CATEGORY_FAMILIAR", "Familiar"],
    rules: function(model) {
      model.statadd("FAMILIAR.Speed", 2, "Feat");
      model.statadd("FAMILIAR.AC", 1, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Wrenching Abjuration"] = new engine.RulesElement({
    name: "Wrenching Abjuration",
    type: "Feat",
    id: "ID_FMP_FEAT_1724",
    source: "Dragon Magazine 377",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1724",
    categories: ["Wrenching Abjuration", "ID_FMP_FEAT_1724"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
