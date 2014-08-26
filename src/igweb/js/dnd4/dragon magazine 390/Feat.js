define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Feat = types['Feat'] || (types['Feat'] = {});
  te = Feat["Academy Prodigy"] = new engine.RulesElement({
    name: "Academy Prodigy",
    type: "Feat",
    id: "ID_FMP_FEAT_3438",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3438",
    categories: ["Academy Prodigy", "ID_FMP_FEAT_3438"],
    rules: function(model) {
      model.select('class feature', 2, {
        filter: function(model, element) { return element.hasCategory("Academy Prodigy"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Ancient Lore of the Dawn War"] = new engine.RulesElement({
    name: "Ancient Lore of the Dawn War",
    type: "Feat",
    id: "ID_FMP_FEAT_3450",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3450",
    categories: ["Ancient Lore of the Dawn War", "ID_FMP_FEAT_3450"],
    rules: function(model) {
      model.statadd("History Misc", 2, "Feat");
      model.statadd("Religion Misc", 2, "Feat");
      model.grant(model.elements.id["ID_FMP_LANGUAGE_8"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Arcane Repositioning"] = new engine.RulesElement({
    name: "Arcane Repositioning",
    type: "Feat",
    id: "ID_FMP_FEAT_3439",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3439",
    categories: ["Arcane Repositioning", "ID_FMP_FEAT_3439"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Armored Sorcerer"] = new engine.RulesElement({
    name: "Armored Sorcerer",
    type: "Feat",
    id: "ID_FMP_FEAT_3430",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3430",
    categories: ["Armored Sorcerer", "ID_FMP_FEAT_3430"],
    rules: function(model) {
      model.statadd("Spell Source Resist", 2);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Balican High Praetor"] = new engine.RulesElement({
    name: "Balican High Praetor",
    type: "Feat",
    id: "ID_FMP_FEAT_3417",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3417",
    categories: ["Balican High Praetor", "ID_FMP_FEAT_3417", "ID_INTERNAL_CATEGORY_GREATER_PACT", "Greater Pact"],
    rules: function(model) {
      model.statadd("ID_FMP_FEAT_3417 association:key ability", "DMG:Cha");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Balican Praetor"] = new engine.RulesElement({
    name: "Balican Praetor",
    type: "Feat",
    id: "ID_FMP_FEAT_3416",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3416",
    categories: ["Balican Praetor", "ID_FMP_FEAT_3416", "ID_INTERNAL_CATEGORY_LESSER_PACT", "Lesser Pact"],
    rules: function(model) {
      model.statadd("Diplomacy Misc", 2, "Feat");
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Blade Channeling Mastery"] = new engine.RulesElement({
    name: "Blade Channeling Mastery",
    type: "Feat",
    id: "ID_FMP_FEAT_3436",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3436",
    categories: ["Blade Channeling Mastery", "ID_FMP_FEAT_3436"]
  });
  byID[te.id] = te;
  
  te = Feat["Bloody Channeling"] = new engine.RulesElement({
    name: "Bloody Channeling",
    type: "Feat",
    id: "ID_FMP_FEAT_3437",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3437",
    categories: ["Bloody Channeling", "ID_FMP_FEAT_3437"]
  });
  byID[te.id] = te;
  
  te = Feat["Champion of Raam"] = new engine.RulesElement({
    name: "Champion of Raam",
    type: "Feat",
    id: "ID_FMP_FEAT_3425",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3425",
    categories: ["Champion of Raam", "ID_FMP_FEAT_3425", "ID_INTERNAL_CATEGORY_GREATER_PACT", "Greater Pact"]
  });
  byID[te.id] = te;
  
  te = Feat["Champion of the Bloody Circle"] = new engine.RulesElement({
    name: "Champion of the Bloody Circle",
    type: "Feat",
    id: "ID_FMP_FEAT_3431",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3431",
    categories: ["Champion of the Bloody Circle", "ID_FMP_FEAT_3431"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_SKILL_TRAINING_STREETWISE"]);
      model.statadd("Intimidate Misc", 2, "Feat");
      model.statadd("Streetwise Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Cosmic Blade Channeling"] = new engine.RulesElement({
    name: "Cosmic Blade Channeling",
    type: "Feat",
    id: "ID_FMP_FEAT_3432",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3432",
    categories: ["Cosmic Blade Channeling", "ID_FMP_FEAT_3432"]
  });
  byID[te.id] = te;
  
  te = Feat["Draji Aspirant"] = new engine.RulesElement({
    name: "Draji Aspirant",
    type: "Feat",
    id: "ID_FMP_FEAT_3418",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3418",
    categories: ["Draji Aspirant", "ID_FMP_FEAT_3418", "ID_INTERNAL_CATEGORY_LESSER_PACT", "Lesser Pact"],
    rules: function(model) {
      model.statadd("Intimidate Misc", 2, "Feat");
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Draji Devotee"] = new engine.RulesElement({
    name: "Draji Devotee",
    type: "Feat",
    id: "ID_FMP_FEAT_3419",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3419",
    categories: ["Draji Devotee", "ID_FMP_FEAT_3419", "ID_INTERNAL_CATEGORY_GREATER_PACT", "Greater Pact"],
    rules: function(model) {
      model.statadd("ID_FMP_FEAT_3419 association:key ability", "DMG:Cha");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Eldritch Blade"] = new engine.RulesElement({
    name: "Eldritch Blade",
    type: "Feat",
    id: "ID_FMP_FEAT_3442",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3442",
    categories: ["Eldritch Blade", "ID_FMP_FEAT_3442"],
    rules: function(model) {
      model.statadd("ID_FMP_POWER_7402,longsword:attack", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Elusive Hexer"] = new engine.RulesElement({
    name: "Elusive Hexer",
    type: "Feat",
    id: "ID_FMP_FEAT_3445",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3445",
    categories: ["Elusive Hexer", "ID_FMP_FEAT_3445"]
  });
  byID[te.id] = te;
  
  te = Feat["Favored of Raam"] = new engine.RulesElement({
    name: "Favored of Raam",
    type: "Feat",
    id: "ID_FMP_FEAT_3424",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3424",
    categories: ["Favored of Raam", "ID_FMP_FEAT_3424", "ID_INTERNAL_CATEGORY_LESSER_PACT", "Lesser Pact"],
    rules: function(model) {
      model.statadd("Streetwise Misc", 2, "Feat");
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Fey Familiar"] = new engine.RulesElement({
    name: "Fey Familiar",
    type: "Feat",
    id: "ID_FMP_FEAT_3446",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3446",
    categories: ["Fey Familiar", "ID_FMP_FEAT_3446", "ID_INTERNAL_CATEGORY_FAMILIAR", "Familiar"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Feymind Infusion"] = new engine.RulesElement({
    name: "Feymind Infusion",
    type: "Feat",
    id: "ID_FMP_FEAT_3440",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3440",
    categories: ["Feymind Infusion", "ID_FMP_FEAT_3440"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Feywild Propulsion"] = new engine.RulesElement({
    name: "Feywild Propulsion",
    type: "Feat",
    id: "ID_FMP_FEAT_3441",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3441",
    categories: ["Feywild Propulsion", "ID_FMP_FEAT_3441"]
  });
  byID[te.id] = te;
  
  te = Feat["Gifted Death Dealer"] = new engine.RulesElement({
    name: "Gifted Death Dealer",
    type: "Feat",
    id: "ID_FMP_FEAT_3443",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3443",
    categories: ["Gifted Death Dealer", "ID_FMP_FEAT_3443"],
    rules: function(model) {
      model.statadd("ID_FMP_POWER_1333:damage", function() { return model.stat("Intelligence modifier"); });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Golden Lion of Urik"] = new engine.RulesElement({
    name: "Golden Lion of Urik",
    type: "Feat",
    id: "ID_FMP_FEAT_3429",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3429",
    categories: ["Golden Lion of Urik", "ID_FMP_FEAT_3429", "ID_INTERNAL_CATEGORY_GREATER_PACT", "Greater Pact"],
    rules: function(model) {
      model.statadd("ID_FMP_FEAT_3429 association:key ability", "DMG:Cha");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Master of Escape"] = new engine.RulesElement({
    name: "Master of Escape",
    type: "Feat",
    id: "ID_FMP_FEAT_3447",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3447",
    categories: ["Master of Escape", "ID_FMP_FEAT_3447"],
    rules: function(model) {
      model.statadd("Thievery Misc", function() { /* to open locks and use sleight of hand */ return 4; }, "Feat");
      model.statadd("Acrobatics Misc", function() { /* to escape from a grab or from restraints */ return 4; }, "Feat");
      model.statadd("Athletics Misc", function() { /* to escape from a grab or from restraints */ return 4; }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Mastery of Knives"] = new engine.RulesElement({
    name: "Mastery of Knives",
    type: "Feat",
    id: "ID_FMP_FEAT_3433",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3433",
    categories: ["Mastery of Knives", "ID_FMP_FEAT_3433"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(KUKRI)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(KATAR)"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Nibenese Bride"] = new engine.RulesElement({
    name: "Nibenese Bride",
    type: "Feat",
    id: "ID_FMP_FEAT_3422",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3422",
    categories: ["Nibenese Bride", "ID_FMP_FEAT_3422", "ID_INTERNAL_CATEGORY_LESSER_PACT", "Lesser Pact"],
    rules: function(model) {
      model.statadd("Bluff Misc", 2, "Feat");
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Nibenese Favored Wife"] = new engine.RulesElement({
    name: "Nibenese Favored Wife",
    type: "Feat",
    id: "ID_FMP_FEAT_3423",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3423",
    categories: ["Nibenese Favored Wife", "ID_FMP_FEAT_3423", "ID_INTERNAL_CATEGORY_GREATER_PACT", "Greater Pact"]
  });
  byID[te.id] = te;
  
  te = Feat["Nusemnee's Atonement"] = new engine.RulesElement({
    name: "Nusemnee's Atonement",
    type: "Feat",
    id: "ID_FMP_FEAT_3451",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3451",
    categories: ["Nusemnee's Atonement", "ID_FMP_FEAT_3451"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against charm effects */ return 2; }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Passage of Mael Arn'dreygh"] = new engine.RulesElement({
    name: "Passage of Mael Arn'dreygh",
    type: "Feat",
    id: "ID_FMP_FEAT_3452",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3452",
    categories: ["Passage of Mael Arn'dreygh", "ID_FMP_FEAT_3452"]
  });
  byID[te.id] = te;
  
  te = Feat["Renewed by Blood"] = new engine.RulesElement({
    name: "Renewed by Blood",
    type: "Feat",
    id: "ID_FMP_FEAT_3444",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3444",
    categories: ["Renewed by Blood", "ID_FMP_FEAT_3444"]
  });
  byID[te.id] = te;
  
  te = Feat["Slave Sympathy"] = new engine.RulesElement({
    name: "Slave Sympathy",
    type: "Feat",
    id: "ID_FMP_FEAT_3448",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3448",
    categories: ["Slave Sympathy", "ID_FMP_FEAT_3448"],
    rules: function(model) {
      model.statadd("Streetwise Misc", function() { /* in any settlement that has a significant population of slaves */ return 4; }, "Feat");
      model.statadd("Bluff Misc", function() { /* when used upon a slave */ return 2; }, "Feat");
      model.statadd("Diplomacy Misc", function() { /* when used upon a slave */ return 2; }, "Feat");
      model.statadd("Intimidate Misc", function() { /* when used upon a slave */ return 2; }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Slave to None"] = new engine.RulesElement({
    name: "Slave to None",
    type: "Feat",
    id: "ID_FMP_FEAT_3449",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3449",
    categories: ["Slave to None", "ID_FMP_FEAT_3449"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against effects that dominate, immobilize, or slow */ return 2; }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Spirit Master of Lalali-Puy"] = new engine.RulesElement({
    name: "Spirit Master of Lalali-Puy",
    type: "Feat",
    id: "ID_FMP_FEAT_3421",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3421",
    categories: ["Spirit Master of Lalali-Puy", "ID_FMP_FEAT_3421", "ID_INTERNAL_CATEGORY_GREATER_PACT", "Greater Pact"]
  });
  byID[te.id] = te;
  
  te = Feat["Spirit Talker of Lalali-Puy"] = new engine.RulesElement({
    name: "Spirit Talker of Lalali-Puy",
    type: "Feat",
    id: "ID_FMP_FEAT_3420",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3420",
    categories: ["Spirit Talker of Lalali-Puy", "ID_FMP_FEAT_3420", "ID_INTERNAL_CATEGORY_LESSER_PACT", "Lesser Pact"],
    rules: function(model) {
      model.statadd("Nature Misc", 2, "Feat");
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Storm Blade Channeling"] = new engine.RulesElement({
    name: "Storm Blade Channeling",
    type: "Feat",
    id: "ID_FMP_FEAT_3434",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3434",
    categories: ["Storm Blade Channeling", "ID_FMP_FEAT_3434"]
  });
  byID[te.id] = te;
  
  te = Feat["Tyrian Ascendant"] = new engine.RulesElement({
    name: "Tyrian Ascendant",
    type: "Feat",
    id: "ID_FMP_FEAT_3427",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3427",
    categories: ["Tyrian Ascendant", "ID_FMP_FEAT_3427", "ID_INTERNAL_CATEGORY_GREATER_PACT", "Greater Pact"],
    rules: function(model) {
      model.statadd("ID_FMP_FEAT_3427 association:key ability", "DMG:Cha");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Tyrian Bureaucrat"] = new engine.RulesElement({
    name: "Tyrian Bureaucrat",
    type: "Feat",
    id: "ID_FMP_FEAT_3426",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3426",
    categories: ["Tyrian Bureaucrat", "ID_FMP_FEAT_3426", "ID_INTERNAL_CATEGORY_LESSER_PACT", "Lesser Pact"],
    rules: function(model) {
      model.statadd("Streetwise Misc", 2, "Feat");
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Wild Blade Channeling"] = new engine.RulesElement({
    name: "Wild Blade Channeling",
    type: "Feat",
    id: "ID_FMP_FEAT_3435",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3435",
    categories: ["Wild Blade Channeling", "ID_FMP_FEAT_3435"]
  });
  byID[te.id] = te;
  
  te = Feat["Yellow Cloak of Urik"] = new engine.RulesElement({
    name: "Yellow Cloak of Urik",
    type: "Feat",
    id: "ID_FMP_FEAT_3428",
    source: "Dragon Magazine 390",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3428",
    categories: ["Yellow Cloak of Urik", "ID_FMP_FEAT_3428", "ID_INTERNAL_CATEGORY_LESSER_PACT", "Lesser Pact"],
    rules: function(model) {
      model.statadd("History Misc", 2, "Feat");
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
