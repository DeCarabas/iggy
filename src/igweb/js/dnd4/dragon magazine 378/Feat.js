define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Feat = types['Feat'] || (types['Feat'] = {});
  te = Feat["Advantageous Perspective"] = new engine.RulesElement({
    name: "Advantageous Perspective",
    type: "Feat",
    id: "ID_FMP_FEAT_1744",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1744",
    categories: ["Advantageous Perspective", "ID_FMP_FEAT_1744"]
  });
  byID[te.id] = te;
  
  te = Feat["Advantageous Rebuke"] = new engine.RulesElement({
    name: "Advantageous Rebuke",
    type: "Feat",
    id: "ID_FMP_FEAT_1748",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1748",
    categories: ["Advantageous Rebuke", "ID_FMP_FEAT_1748"]
  });
  byID[te.id] = te;
  
  te = Feat["Agile Superiority"] = new engine.RulesElement({
    name: "Agile Superiority",
    type: "Feat",
    id: "ID_FMP_FEAT_1733",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1733",
    categories: ["Agile Superiority", "ID_FMP_FEAT_1733"],
    rules: function(model) {
      model.statadd("Combat Superiority", function() { return model.stat("Dexterity modifier"); }, "Ability");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Avenger's Fortunes"] = new engine.RulesElement({
    name: "Avenger's Fortunes",
    type: "Feat",
    id: "ID_FMP_FEAT_1768",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1768",
    categories: ["Avenger's Fortunes", "ID_FMP_FEAT_1768"]
  });
  byID[te.id] = te;
  
  te = Feat["Bloodseeker"] = new engine.RulesElement({
    name: "Bloodseeker",
    type: "Feat",
    id: "ID_FMP_FEAT_1734",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1734",
    categories: ["Bloodseeker", "ID_FMP_FEAT_1734"],
    rules: function(model) {
      model.statadd("damage rolls", function() { /* against bloodied enemies marked by you */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Broadened Manifestation"] = new engine.RulesElement({
    name: "Broadened Manifestation",
    type: "Feat",
    id: "ID_FMP_FEAT_1753",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1753",
    categories: ["Broadened Manifestation", "ID_FMP_FEAT_1753"]
  });
  byID[te.id] = te;
  
  te = Feat["Covenant Shifting"] = new engine.RulesElement({
    name: "Covenant Shifting",
    type: "Feat",
    id: "ID_FMP_FEAT_1769",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1769",
    categories: ["Covenant Shifting", "ID_FMP_FEAT_1769"]
  });
  byID[te.id] = te;
  
  te = Feat["Defensive Challenge"] = new engine.RulesElement({
    name: "Defensive Challenge",
    type: "Feat",
    id: "ID_FMP_FEAT_1738",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1738",
    categories: ["Defensive Challenge", "ID_FMP_FEAT_1738"]
  });
  byID[te.id] = te;
  
  te = Feat["Dizzying Mace"] = new engine.RulesElement({
    name: "Dizzying Mace",
    type: "Feat",
    id: "ID_FMP_FEAT_1747",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1747",
    categories: ["Dizzying Mace", "ID_FMP_FEAT_1747"]
  });
  byID[te.id] = te;
  
  te = Feat["Dragonbane"] = new engine.RulesElement({
    name: "Dragonbane",
    type: "Feat",
    id: "ID_FMP_FEAT_1754",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1754",
    categories: ["Dragonbane", "ID_FMP_FEAT_1754"]
  });
  byID[te.id] = te;
  
  te = Feat["Dragon's Rebuke"] = new engine.RulesElement({
    name: "Dragon's Rebuke",
    type: "Feat",
    id: "ID_FMP_FEAT_1760",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1760",
    categories: ["Dragon's Rebuke", "ID_FMP_FEAT_1760", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Emboldening Critical"] = new engine.RulesElement({
    name: "Emboldening Critical",
    type: "Feat",
    id: "ID_FMP_FEAT_1749",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1749",
    categories: ["Emboldening Critical", "ID_FMP_FEAT_1749"]
  });
  byID[te.id] = te;
  
  te = Feat["Energy Transference"] = new engine.RulesElement({
    name: "Energy Transference",
    type: "Feat",
    id: "ID_FMP_FEAT_1778",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1778",
    categories: ["Energy Transference", "ID_FMP_FEAT_1778"]
  });
  byID[te.id] = te;
  
  te = Feat["Energy Transmutation"] = new engine.RulesElement({
    name: "Energy Transmutation",
    type: "Feat",
    id: "ID_FMP_FEAT_1783",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1783",
    categories: ["Energy Transmutation", "ID_FMP_FEAT_1783"]
  });
  byID[te.id] = te;
  
  te = Feat["Focused Superiority"] = new engine.RulesElement({
    name: "Focused Superiority",
    type: "Feat",
    id: "ID_FMP_FEAT_1735",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1735",
    categories: ["Focused Superiority", "ID_FMP_FEAT_1735"],
    rules: function(model) {
      model.statadd("one-hand:damage", function() { /* with opportunity attacks */ return model.stat("Wisdom modifier"); });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Forceful Challenge"] = new engine.RulesElement({
    name: "Forceful Challenge",
    type: "Feat",
    id: "ID_FMP_FEAT_1755",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1755",
    categories: ["Forceful Challenge", "ID_FMP_FEAT_1755"]
  });
  byID[te.id] = te;
  
  te = Feat["Fortune's Predator"] = new engine.RulesElement({
    name: "Fortune's Predator",
    type: "Feat",
    id: "ID_FMP_FEAT_1770",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1770",
    categories: ["Fortune's Predator", "ID_FMP_FEAT_1770"]
  });
  byID[te.id] = te;
  
  te = Feat["Githzerai Beast Mastery"] = new engine.RulesElement({
    name: "Githzerai Beast Mastery",
    type: "Feat",
    id: "ID_FMP_FEAT_1771",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1771",
    categories: ["Githzerai Beast Mastery", "ID_FMP_FEAT_1771"],
    rules: function(model) {
      model.statadd("BEAST.Saving Throws", function() { /* against the dazed, dominated, and stunned conditions */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Githzerai Blade Master"] = new engine.RulesElement({
    name: "Githzerai Blade Master",
    type: "Feat",
    id: "ID_FMP_FEAT_1772",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1772",
    categories: ["Githzerai Blade Master", "ID_FMP_FEAT_1772"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_MILITARY_HEAVY_BLADE"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(BASTARD_SWORD)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(FULLBLADE)"]);
      model.statadd("Githzerai Blade Master", 2);
      model.statadd("military,heavy blade group:damage", function() { return model.stat("Githzerai Blade Master"); }, "Feat");
      model.statadd("Bastard sword:damage", function() { return model.stat("Githzerai Blade Master"); }, "Feat");
      model.statadd("Fullblade:damage", function() { return model.stat("Githzerai Blade Master"); }, "Feat");
      model.statadd("Githzerai Blade Master", 1);
      model.statadd("Githzerai Blade Master", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Githzerai Healer"] = new engine.RulesElement({
    name: "Githzerai Healer",
    type: "Feat",
    id: "ID_FMP_FEAT_1779",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1779",
    categories: ["Githzerai Healer", "ID_FMP_FEAT_1779"]
  });
  byID[te.id] = te;
  
  te = Feat["Githzerai Mobility"] = new engine.RulesElement({
    name: "Githzerai Mobility",
    type: "Feat",
    id: "ID_FMP_FEAT_1780",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1780",
    categories: ["Githzerai Mobility", "ID_FMP_FEAT_1780"],
    rules: function(model) {
      model.statadd("Githzerai Mobility", 1);
      model.statadd("Githzerai Mobility", function() { return model.stat("Wisdom modifier"); });
      model.statadd("AC", function() { /* against opportunity attacks */ return model.stat("Githzerai Mobility"); });
      model.statadd("Fortitude Defense", function() { /* against opportunity attacks */ return model.stat("Githzerai Mobility"); });
      model.statadd("Reflex Defense", function() { /* against opportunity attacks */ return model.stat("Githzerai Mobility"); });
      model.statadd("Will Defense", function() { /* against opportunity attacks */ return model.stat("Githzerai Mobility"); });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Hand of Justice"] = new engine.RulesElement({
    name: "Hand of Justice",
    type: "Feat",
    id: "ID_FMP_FEAT_1761",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1761",
    categories: ["Hand of Justice", "ID_FMP_FEAT_1761", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Inspiring Oath"] = new engine.RulesElement({
    name: "Inspiring Oath",
    type: "Feat",
    id: "ID_FMP_FEAT_1756",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1756",
    categories: ["Inspiring Oath", "ID_FMP_FEAT_1756"]
  });
  byID[te.id] = te;
  
  te = Feat["Iron Retreat"] = new engine.RulesElement({
    name: "Iron Retreat",
    type: "Feat",
    id: "ID_FMP_FEAT_1774",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1774",
    categories: ["Iron Retreat", "ID_FMP_FEAT_1774"]
  });
  byID[te.id] = te;
  
  te = Feat["Iron Riposte"] = new engine.RulesElement({
    name: "Iron Riposte",
    type: "Feat",
    id: "ID_FMP_FEAT_1775",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1775",
    categories: ["Iron Riposte", "ID_FMP_FEAT_1775"]
  });
  byID[te.id] = te;
  
  te = Feat["Ironclad Oath"] = new engine.RulesElement({
    name: "Ironclad Oath",
    type: "Feat",
    id: "ID_FMP_FEAT_1784",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1784",
    categories: ["Ironclad Oath", "ID_FMP_FEAT_1784"]
  });
  byID[te.id] = te;
  
  te = Feat["Marked Fortunes"] = new engine.RulesElement({
    name: "Marked Fortunes",
    type: "Feat",
    id: "ID_FMP_FEAT_1773",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1773",
    categories: ["Marked Fortunes", "ID_FMP_FEAT_1773"]
  });
  byID[te.id] = te;
  
  te = Feat["Marked With Iron"] = new engine.RulesElement({
    name: "Marked With Iron",
    type: "Feat",
    id: "ID_FMP_FEAT_1776",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1776",
    categories: ["Marked With Iron", "ID_FMP_FEAT_1776"]
  });
  byID[te.id] = te;
  
  te = Feat["Merciful Shift"] = new engine.RulesElement({
    name: "Merciful Shift",
    type: "Feat",
    id: "ID_FMP_FEAT_1757",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1757",
    categories: ["Merciful Shift", "ID_FMP_FEAT_1757"]
  });
  byID[te.id] = te;
  
  te = Feat["Mettle Proven"] = new engine.RulesElement({
    name: "Mettle Proven",
    type: "Feat",
    id: "ID_FMP_FEAT_1750",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1750",
    categories: ["Mettle Proven", "ID_FMP_FEAT_1750"]
  });
  byID[te.id] = te;
  
  te = Feat["Mobile Challenge"] = new engine.RulesElement({
    name: "Mobile Challenge",
    type: "Feat",
    id: "ID_FMP_FEAT_1736",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1736",
    categories: ["Mobile Challenge", "ID_FMP_FEAT_1736"]
  });
  byID[te.id] = te;
  
  te = Feat["Noble Indoctrination"] = new engine.RulesElement({
    name: "Noble Indoctrination",
    type: "Feat",
    id: "ID_FMP_FEAT_1762",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1762",
    categories: ["Noble Indoctrination", "ID_FMP_FEAT_1762", "ID_INTERNAL_CATEGORY_MULTICLASS_BAHAMUT", "Multiclass Bahamut", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_SKILL_TRAINING_RELIGION"]);
      model.grant(model.elements.id["ID_FMP_POWER_9388"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(model.elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Platinum Revelation"] = new engine.RulesElement({
    name: "Platinum Revelation",
    type: "Feat",
    id: "ID_FMP_FEAT_1763",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1763",
    categories: ["Platinum Revelation", "ID_FMP_FEAT_1763", "ID_INTERNAL_CATEGORY_MULTICLASS_BAHAMUT", "Multiclass Bahamut", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_SKILL_TRAINING_INSIGHT"]);
      model.grant(model.elements.id["ID_FMP_POWER_9389"]);
      model.grant(model.elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Plunging Blade"] = new engine.RulesElement({
    name: "Plunging Blade",
    type: "Feat",
    id: "ID_FMP_FEAT_1745",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1745",
    categories: ["Plunging Blade", "ID_FMP_FEAT_1745"]
  });
  byID[te.id] = te;
  
  te = Feat["Radiant Breath"] = new engine.RulesElement({
    name: "Radiant Breath",
    type: "Feat",
    id: "ID_FMP_FEAT_1751",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1751",
    categories: ["Radiant Breath", "ID_FMP_FEAT_1751"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Righteous Intolerance"] = new engine.RulesElement({
    name: "Righteous Intolerance",
    type: "Feat",
    id: "ID_FMP_FEAT_1764",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1764",
    categories: ["Righteous Intolerance", "ID_FMP_FEAT_1764", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Righteous Savior"] = new engine.RulesElement({
    name: "Righteous Savior",
    type: "Feat",
    id: "ID_FMP_FEAT_1765",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1765",
    categories: ["Righteous Savior", "ID_FMP_FEAT_1765", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Savage Axe"] = new engine.RulesElement({
    name: "Savage Axe",
    type: "Feat",
    id: "ID_FMP_FEAT_1737",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1737",
    categories: ["Savage Axe", "ID_FMP_FEAT_1737"],
    rules: function(model) {
      model.statadd("axe:damage", function() { /* with opportunity attacks */ return model.stat("Constitution modifier"); });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Shielded Resurgence"] = new engine.RulesElement({
    name: "Shielded Resurgence",
    type: "Feat",
    id: "ID_FMP_FEAT_1739",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1739",
    categories: ["Shielded Resurgence", "ID_FMP_FEAT_1739"]
  });
  byID[te.id] = te;
  
  te = Feat["Shielding Word"] = new engine.RulesElement({
    name: "Shielding Word",
    type: "Feat",
    id: "ID_FMP_FEAT_1752",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1752",
    categories: ["Shielding Word", "ID_FMP_FEAT_1752"]
  });
  byID[te.id] = te;
  
  te = Feat["Shifting Spirit"] = new engine.RulesElement({
    name: "Shifting Spirit",
    type: "Feat",
    id: "ID_FMP_FEAT_1777",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1777",
    categories: ["Shifting Spirit", "ID_FMP_FEAT_1777"]
  });
  byID[te.id] = te;
  
  te = Feat["Shining Purpose"] = new engine.RulesElement({
    name: "Shining Purpose",
    type: "Feat",
    id: "ID_FMP_FEAT_1766",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1766",
    categories: ["Shining Purpose", "ID_FMP_FEAT_1766", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Small Warrior's Defense"] = new engine.RulesElement({
    name: "Small Warrior's Defense",
    type: "Feat",
    id: "ID_FMP_FEAT_1740",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1740",
    categories: ["Small Warrior's Defense", "ID_FMP_FEAT_1740"],
    rules: function(model) {
      model.statadd("AC", function() { 
        if (false /* TBI: versatile */) {
          return 2;
        } else return 0;
       });
      model.statadd("Reflex Defense", function() { 
        if (false /* TBI: versatile */) {
          return 2;
        } else return 0;
       });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Staggering Challenge"] = new engine.RulesElement({
    name: "Staggering Challenge",
    type: "Feat",
    id: "ID_FMP_FEAT_1746",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1746",
    categories: ["Staggering Challenge", "ID_FMP_FEAT_1746"]
  });
  byID[te.id] = te;
  
  te = Feat["Stout Shield"] = new engine.RulesElement({
    name: "Stout Shield",
    type: "Feat",
    id: "ID_FMP_FEAT_1741",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1741",
    categories: ["Stout Shield", "ID_FMP_FEAT_1741"],
    rules: function(model) {
      model.statadd("Fortitude Defense", function() { return model.stat("Shield Bonus"); }, "Shield");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Superior Preservation"] = new engine.RulesElement({
    name: "Superior Preservation",
    type: "Feat",
    id: "ID_FMP_FEAT_1758",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1758",
    categories: ["Superior Preservation", "ID_FMP_FEAT_1758"]
  });
  byID[te.id] = te;
  
  te = Feat["Swift Spear"] = new engine.RulesElement({
    name: "Swift Spear",
    type: "Feat",
    id: "ID_FMP_FEAT_1742",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1742",
    categories: ["Swift Spear", "ID_FMP_FEAT_1742"]
  });
  byID[te.id] = te;
  
  te = Feat["Tempered Iron Mind"] = new engine.RulesElement({
    name: "Tempered Iron Mind",
    type: "Feat",
    id: "ID_FMP_FEAT_1781",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1781",
    categories: ["Tempered Iron Mind", "ID_FMP_FEAT_1781"]
  });
  byID[te.id] = te;
  
  te = Feat["Wary Fighter"] = new engine.RulesElement({
    name: "Wary Fighter",
    type: "Feat",
    id: "ID_FMP_FEAT_1743",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1743",
    categories: ["Wary Fighter", "ID_FMP_FEAT_1743"],
    rules: function(model) {
      model.statadd("Initiative", function() { return model.stat("Wisdom modifier"); }, "Ability");
      model.statadd("Insight Misc", 2, "Feat");
      model.statadd("Perception Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weakening Challenge"] = new engine.RulesElement({
    name: "Weakening Challenge",
    type: "Feat",
    id: "ID_FMP_FEAT_1759",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1759",
    categories: ["Weakening Challenge", "ID_FMP_FEAT_1759"]
  });
  byID[te.id] = te;
  
  te = Feat["Zealous Fury"] = new engine.RulesElement({
    name: "Zealous Fury",
    type: "Feat",
    id: "ID_FMP_FEAT_1767",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1767",
    categories: ["Zealous Fury", "ID_FMP_FEAT_1767", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Zuoken's Centering"] = new engine.RulesElement({
    name: "Zuoken's Centering",
    type: "Feat",
    id: "ID_FMP_FEAT_1782",
    source: "Dragon Magazine 378",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1782",
    categories: ["Zuoken's Centering", "ID_FMP_FEAT_1782"],
    rules: function(model) {
      model.statadd("Hit Points", function() { return model.stat("Wisdom"); }, "Level 1");
      model.statadd("Healing Surges", function() { return model.stat("Wisdom modifier"); }, "Level 1");
      model.statadd("Athletics", function() { return model.stat("Wisdom modifier"); }, "Ability");
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
