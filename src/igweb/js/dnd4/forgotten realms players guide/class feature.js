define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var class_feature = types['class feature'] || (types['class feature'] = {});
  te = class_feature["Aegis Insight"] = new engine.RulesElement({
    name: "Aegis Insight",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_580",
    source: "Forgotten Realms Player's Guide",
    categories: ["Aegis Insight", "ID_FMP_CLASS_FEATURE_580", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Aegis of Assault"] = new engine.RulesElement({
    name: "Aegis of Assault",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_885",
    source: "Forgotten Realms Player's Guide,Player's Handbook 3",
    categories: ["Aegis of Assault", "ID_FMP_CLASS_FEATURE_885", "ID_FMP_CLASS_FEATURE_518", "Swordmage Aegis", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_3322"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Aegis of Shielding"] = new engine.RulesElement({
    name: "Aegis of Shielding",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_886",
    source: "Forgotten Realms Player's Guide,Player's Handbook 3",
    categories: ["Aegis of Shielding", "ID_FMP_CLASS_FEATURE_886", "ID_FMP_CLASS_FEATURE_518", "Swordmage Aegis", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_3323"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Ambusher Action"] = new engine.RulesElement({
    name: "Ambusher Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_589",
    source: "Forgotten Realms Player's Guide",
    categories: ["Ambusher Action", "ID_FMP_CLASS_FEATURE_589", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Ambusher Action:Whenever you spend an action point to take an extra action to attack, you gain a +2 bonus to your attack roll against an enemy to which you are invisible.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Arcane Fundamentals"] = new engine.RulesElement({
    name: "Arcane Fundamentals",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_845",
    source: "Forgotten Realms Player's Guide",
    categories: ["Arcane Fundamentals", "ID_FMP_CLASS_FEATURE_845", "11"],
    rules: function(model) {
      model.select('Power', 1, "Arcane Fundamentals", {
        filter: function(model, element) { return element.hasCategory("Arcane Fundamentals"); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Arcane Healing"] = new engine.RulesElement({
    name: "Arcane Healing",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_833",
    source: "Forgotten Realms Player's Guide",
    categories: ["Arcane Healing", "ID_FMP_CLASS_FEATURE_833", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Arcane Healing:Whenever you spend an action point to take an extra action, you can also spend a healing surge as a free action");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Binding Sight"] = new engine.RulesElement({
    name: "Binding Sight",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_560",
    source: "Forgotten Realms Player's Guide",
    categories: ["Binding Sight", "ID_FMP_CLASS_FEATURE_560", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Binding Sight:Whenever you spend an action point to take an extra action to attack, your targets cannot use teleport effects until the end of your next turn");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Blade Flurry Action"] = new engine.RulesElement({
    name: "Blade Flurry Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_807",
    source: "Forgotten Realms Player's Guide",
    categories: ["Blade Flurry Action", "ID_FMP_CLASS_FEATURE_807", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Blade Flurry Action:When you spend an action point to take an extra action, you can also make a melee basic attack after you resolve that action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Blessings of Kelemvor"] = new engine.RulesElement({
    name: "Blessings of Kelemvor",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_635",
    source: "Forgotten Realms Player's Guide",
    categories: ["Blessings of Kelemvor", "ID_FMP_CLASS_FEATURE_635", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Blessings of Kelemvor:When you spend an action point to take an extra action, you gain a +2 bonus to all defenses until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Bold Attacker"] = new engine.RulesElement({
    name: "Bold Attacker",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_563",
    source: "Forgotten Realms Player's Guide",
    categories: ["Bold Attacker", "ID_FMP_CLASS_FEATURE_563", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Burning Radiance"] = new engine.RulesElement({
    name: "Burning Radiance",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_827",
    source: "Forgotten Realms Player's Guide",
    categories: ["Burning Radiance", "ID_FMP_CLASS_FEATURE_827", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Control the Flames"] = new engine.RulesElement({
    name: "Control the Flames",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_570",
    source: "Forgotten Realms Player's Guide",
    categories: ["Control the Flames", "ID_FMP_CLASS_FEATURE_570", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Cormyrean Knight Training"] = new engine.RulesElement({
    name: "Cormyrean Knight Training",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_595",
    source: "Forgotten Realms Player's Guide",
    categories: ["Cormyrean Knight Training", "ID_FMP_CLASS_FEATURE_595", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Dark Pact"] = new engine.RulesElement({
    name: "Dark Pact",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_804",
    source: "Forgotten Realms Player's Guide,Player's Handbook 3",
    categories: ["Dark Pact", "ID_FMP_CLASS_FEATURE_804", "ID_FMP_CLASS_FEATURE_777", "Eldritch Pact", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_3403"]);
      model.grant(model.elements.id["ID_FMP_POWER_4311"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Darkwalker Action"] = new engine.RulesElement({
    name: "Darkwalker Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_812",
    source: "Forgotten Realms Player's Guide",
    categories: ["Darkwalker Action", "ID_FMP_CLASS_FEATURE_812", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Darkwalker Action:Instead of spending an action point to take an extra action, you can spend an action point to become insubstantial until the start of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Deadly Absence"] = new engine.RulesElement({
    name: "Deadly Absence",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_633",
    source: "Forgotten Realms Player's Guide",
    categories: ["Deadly Absence", "ID_FMP_CLASS_FEATURE_633", "11"],
    rules: function(model) {
      model.statadd("ID_FMP_CLASS_7:damage", function() { /* While you are insubstantial */ return abilitymod(model.stat("int")); });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Demon's Misfortune"] = new engine.RulesElement({
    name: "Demon's Misfortune",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_583",
    source: "Forgotten Realms Player's Guide",
    categories: ["Demon's Misfortune", "ID_FMP_CLASS_FEATURE_583", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Demonslayer Blade"] = new engine.RulesElement({
    name: "Demonslayer Blade",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_582",
    source: "Forgotten Realms Player's Guide",
    categories: ["Demonslayer Blade", "ID_FMP_CLASS_FEATURE_582", "11"],
    rules: function(model) {
      model.statadd("Arcana Misc", function() { /* to discover knowledge about demons */ return 5; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Demonslayer's Wrath"] = new engine.RulesElement({
    name: "Demonslayer's Wrath",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_639",
    source: "Forgotten Realms Player's Guide",
    categories: ["Demonslayer's Wrath", "ID_FMP_CLASS_FEATURE_639", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Demonslayer's Wrath:When you spend an action point to take an extra action, all enemies adjacent to you take a -1 penalty to AC until the end of your next turn.  For demons, this penalty is -2 instead of -1.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Determined Mage"] = new engine.RulesElement({
    name: "Determined Mage",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_834",
    source: "Forgotten Realms Player's Guide",
    categories: ["Determined Mage", "ID_FMP_CLASS_FEATURE_834", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Doomguide's Geas"] = new engine.RulesElement({
    name: "Doomguide's Geas",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_587",
    source: "Forgotten Realms Player's Guide",
    categories: ["Doomguide's Geas", "ID_FMP_CLASS_FEATURE_587", "11"],
    rules: function(model) {
      model.statadd("Healing", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Doomguide's Resolve"] = new engine.RulesElement({
    name: "Doomguide's Resolve",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_588",
    source: "Forgotten Realms Player's Guide",
    categories: ["Doomguide's Resolve", "ID_FMP_CLASS_FEATURE_588", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Draconic Enemy"] = new engine.RulesElement({
    name: "Draconic Enemy",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_838",
    source: "Forgotten Realms Player's Guide",
    categories: ["Draconic Enemy", "ID_FMP_CLASS_FEATURE_838", "11"],
    rules: function(model) {
      model.statadd("AC", function() { /* against attack rolls by dragons */ return 2; });
      model.statadd("Fortitude Defense", function() { /* against attack rolls by dragons */ return 2; });
      model.statadd("Reflex Defense", function() { /* against attack rolls by dragons */ return 2; });
      model.statadd("Will Defense", function() { /* against attack rolls by dragons */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Dual Manifestation"] = new engine.RulesElement({
    name: "Dual Manifestation",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_815",
    source: "Forgotten Realms Player's Guide",
    categories: ["Dual Manifestation", "ID_FMP_CLASS_FEATURE_815", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Earthheart Determination"] = new engine.RulesElement({
    name: "Earthheart Determination",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_638",
    source: "Forgotten Realms Player's Guide",
    categories: ["Earthheart Determination", "ID_FMP_CLASS_FEATURE_638", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Earthheart Determination:When you use an action point to take an extra action, you can immediately make saving throws against two different effects that a save can end");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Elemental Attacks"] = new engine.RulesElement({
    name: "Elemental Attacks",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_816",
    source: "Forgotten Realms Player's Guide",
    categories: ["Elemental Attacks", "ID_FMP_CLASS_FEATURE_816", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Elemental Surge"] = new engine.RulesElement({
    name: "Elemental Surge",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_593",
    source: "Forgotten Realms Player's Guide",
    categories: ["Elemental Surge", "ID_FMP_CLASS_FEATURE_593", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Elemental Surge:Whenever you spend an action point to take an extra action, you can choose to adopt any one of the five elemental manifestations. If you cannot normally manifest the element you choose, you gain the benefit of that manifestation until the end of the encounter. If you choose a manifestation that you can normally use but are not currently using as a Dual Manifestation (see above), you can  immediately change which two manifestations you are using.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Empowered Aegis"] = new engine.RulesElement({
    name: "Empowered Aegis",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_576",
    source: "Forgotten Realms Player's Guide",
    categories: ["Empowered Aegis", "ID_FMP_CLASS_FEATURE_576", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Expert Mariner"] = new engine.RulesElement({
    name: "Expert Mariner",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_841",
    source: "Forgotten Realms Player's Guide",
    categories: ["Expert Mariner", "ID_FMP_CLASS_FEATURE_841", "11"],
    rules: function(model) {
      model.statadd("Initiative Misc", function() { /* while aboard a ship */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Extended Aegis"] = new engine.RulesElement({
    name: "Extended Aegis",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_809",
    source: "Forgotten Realms Player's Guide",
    categories: ["Extended Aegis", "ID_FMP_CLASS_FEATURE_809", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Feywild Wake"] = new engine.RulesElement({
    name: "Feywild Wake",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_817",
    source: "Forgotten Realms Player's Guide",
    categories: ["Feywild Wake", "ID_FMP_CLASS_FEATURE_817", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Fiery Surge"] = new engine.RulesElement({
    name: "Fiery Surge",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_637",
    source: "Forgotten Realms Player's Guide",
    categories: ["Fiery Surge", "ID_FMP_CLASS_FEATURE_637", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Fiery Surge:When you spend an action point to take an extra action, all enemies adjacent to you take fire damage equal to one-half your level + your Strength modifier. In addition, you gain a +1 bonus to attack rolls with the fire keyword until the end of your current turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Firemotes"] = new engine.RulesElement({
    name: "Firemotes",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_590",
    source: "Forgotten Realms Player's Guide",
    categories: ["Firemotes", "ID_FMP_CLASS_FEATURE_590", "16"],
    rules: function(model) {
      model.statadd("damage rolls", function() { /* against targets currently affected by your darkfire power */ return 5; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Firesoul Aura"] = new engine.RulesElement({
    name: "Firesoul Aura",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_571",
    source: "Forgotten Realms Player's Guide",
    categories: ["Firesoul Aura", "ID_FMP_CLASS_FEATURE_571", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Flamespeed"] = new engine.RulesElement({
    name: "Flamespeed",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_FLAMESPEED",
    source: "Forgotten Realms Player's Guide",
    categories: ["Flamespeed", "ID_INTERNAL_CLASS_FEATURE_FLAMESPEED", "Spellscarred"]
  });
  byID[te.id] = te;
  
  te = class_feature["Forest Walk"] = new engine.RulesElement({
    name: "Forest Walk",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_561",
    source: "Forgotten Realms Player's Guide",
    categories: ["Forest Walk", "ID_FMP_CLASS_FEATURE_561", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Ghostken"] = new engine.RulesElement({
    name: "Ghostken",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_634",
    source: "Forgotten Realms Player's Guide",
    categories: ["Ghostken", "ID_FMP_CLASS_FEATURE_634", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Goddess of Changes"] = new engine.RulesElement({
    name: "Goddess of Changes",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_828",
    source: "Forgotten Realms Player's Guide",
    categories: ["Goddess of Changes", "ID_FMP_CLASS_FEATURE_828", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Great Heart"] = new engine.RulesElement({
    name: "Great Heart",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_592",
    source: "Forgotten Realms Player's Guide",
    categories: ["Great Heart", "ID_FMP_CLASS_FEATURE_592", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Heart of Earth"] = new engine.RulesElement({
    name: "Heart of Earth",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_591",
    source: "Forgotten Realms Player's Guide",
    categories: ["Heart of Earth", "ID_FMP_CLASS_FEATURE_591", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Improved Silver Shield"] = new engine.RulesElement({
    name: "Improved Silver Shield",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_578",
    source: "Forgotten Realms Player's Guide",
    categories: ["Improved Silver Shield", "ID_FMP_CLASS_FEATURE_578", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Improved Swordmage Armor"] = new engine.RulesElement({
    name: "Improved Swordmage Armor",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_579",
    source: "Forgotten Realms Player's Guide",
    categories: ["Improved Swordmage Armor", "ID_FMP_CLASS_FEATURE_579", "16"],
    rules: function(model) {
      model.statadd("Swordmage Warding", function() { 
        if (!(model.inventory['off hand'])) {
          return 1;
        } else return 0;
       }, "Improved Swordmage Armor");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Instinctive Remorse"] = new engine.RulesElement({
    name: "Instinctive Remorse",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_823",
    source: "Forgotten Realms Player's Guide",
    categories: ["Instinctive Remorse", "ID_FMP_CLASS_FEATURE_823", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Larger than Life"] = new engine.RulesElement({
    name: "Larger than Life",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_LARGER_THAN_LIFE",
    source: "Forgotten Realms Player's Guide",
    categories: ["Larger than Life", "ID_INTERNAL_CLASS_FEATURE_LARGER_THAN_LIFE", "Spellscarred"]
  });
  byID[te.id] = te;
  
  te = class_feature["Learn from Experience"] = new engine.RulesElement({
    name: "Learn from Experience",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_581",
    source: "Forgotten Realms Player's Guide",
    categories: ["Learn from Experience", "ID_FMP_CLASS_FEATURE_581", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Liberator's Resolve"] = new engine.RulesElement({
    name: "Liberator's Resolve",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_840",
    source: "Forgotten Realms Player's Guide",
    categories: ["Liberator's Resolve", "ID_FMP_CLASS_FEATURE_840", "16"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against charm and fear effects */ return 5; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Mastery of Passage"] = new engine.RulesElement({
    name: "Mastery of Passage",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_819",
    source: "Forgotten Realms Player's Guide",
    categories: ["Mastery of Passage", "ID_FMP_CLASS_FEATURE_819", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Mercurial Action"] = new engine.RulesElement({
    name: "Mercurial Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_818",
    source: "Forgotten Realms Player's Guide",
    categories: ["Mercurial Action", "ID_FMP_CLASS_FEATURE_818", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Mercurial Action:When you spend an action point to take an extra action, you also gain a move action and your speed increases by 1 until the end of your turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Militant Dawn"] = new engine.RulesElement({
    name: "Militant Dawn",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_825",
    source: "Forgotten Realms Player's Guide",
    categories: ["Militant Dawn", "ID_FMP_CLASS_FEATURE_825", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Moon Oracle"] = new engine.RulesElement({
    name: "Moon Oracle",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_831",
    source: "Forgotten Realms Player's Guide",
    categories: ["Moon Oracle", "ID_FMP_CLASS_FEATURE_831", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Moonsparked"] = new engine.RulesElement({
    name: "Moonsparked",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_829",
    source: "Forgotten Realms Player's Guide",
    categories: ["Moonsparked", "ID_FMP_CLASS_FEATURE_829", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Moonsparked:When you spend an action point to take an extra action, all enemies within 5 squares of you cannot benefit from concealment or invisibility until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Open Discipline"] = new engine.RulesElement({
    name: "Open Discipline",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_830",
    source: "Forgotten Realms Player's Guide",
    categories: ["Open Discipline", "ID_FMP_CLASS_FEATURE_830", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["People's History"] = new engine.RulesElement({
    name: "People's History",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_843",
    source: "Forgotten Realms Player's Guide",
    categories: ["People's History", "ID_FMP_CLASS_FEATURE_843", "11"],
    rules: function(model) {
      model.statadd("History Misc", function() { return abilitymod(model.stat("wis")); });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Plague Familiarity"] = new engine.RulesElement({
    name: "Plague Familiarity",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_558",
    source: "Forgotten Realms Player's Guide",
    categories: ["Plague Familiarity", "ID_FMP_CLASS_FEATURE_558", "11"],
    rules: function(model) {
      model.statadd("AC", function() { /* against the Spellplague and plaguechanged or spellscarred creatures */ return 4; });
      model.statadd("Reflex Defense", function() { /* against the Spellplague and plaguechanged or spellscarred creatures */ return 4; });
      model.statadd("Will Defense", function() { /* against the Spellplague and plaguechanged or spellscarred creatures */ return 4; });
      model.statadd("Fortitude Defense", function() { /* against the Spellplague and plaguechanged or spellscarred creatures */ return 4; });
      model.statadd("Saving Throws", function() { /* against the Spellplague and plaguechanged or spellscarred creatures */ return 4; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Plague Mastery"] = new engine.RulesElement({
    name: "Plague Mastery",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_559",
    source: "Forgotten Realms Player's Guide",
    categories: ["Plague Mastery", "ID_FMP_CLASS_FEATURE_559", "11"],
    rules: function(model) {
      model.select('Power', 1, "Plague Mastery", {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_PSEUDO_CLASS_216") && element.hasCategory("7") && element.hasCategory("encounter")); }
      });
      model.grant(model.elements.id["ID_FMP_POWER_3559"]);
      model.select('Power', 1, "Plague Mastery", {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_PSEUDO_CLASS_216") && element.hasCategory("19") && element.hasCategory("daily")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Plagueslayer"] = new engine.RulesElement({
    name: "Plagueslayer",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_824",
    source: "Forgotten Realms Player's Guide",
    categories: ["Plagueslayer", "ID_FMP_CLASS_FEATURE_824", "11"],
    rules: function(model) {
      model.statadd("attack rolls", function() { /* against plaguechanged or spellscarred creatures */ return 2; });
      model.statadd("Damage", function() { /* against plaguechanged or spellscarred creatures */ return model.stat("Wisdom modifier"); });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Purple Dragon Aura"] = new engine.RulesElement({
    name: "Purple Dragon Aura",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_596",
    source: "Forgotten Realms Player's Guide",
    categories: ["Purple Dragon Aura", "ID_FMP_CLASS_FEATURE_596", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Purple Dragon Focus"] = new engine.RulesElement({
    name: "Purple Dragon Focus",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_636",
    source: "Forgotten Realms Player's Guide",
    categories: ["Purple Dragon Focus", "ID_FMP_CLASS_FEATURE_636", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Purple Dragon Focus:When you spend an action point to take an extra action, until the end of your turn you can use your second wind as a free action. You do not gain this benefit if you have already used your second wind.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Sea Legs"] = new engine.RulesElement({
    name: "Sea Legs",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_562",
    source: "Forgotten Realms Player's Guide",
    categories: ["Sea Legs", "ID_FMP_CLASS_FEATURE_562", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Sea Legs:When you spend an action point to take an extra action, you gain a +2 bonus to speed and ignore difficult terrain until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Shadow Action"] = new engine.RulesElement({
    name: "Shadow Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_842",
    source: "Forgotten Realms Player's Guide",
    categories: ["Shadow Action", "ID_FMP_CLASS_FEATURE_842", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Shadow Action:When you spend an action point to take an extra action, you and all adjacent allies gain concealment until the start of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Shadow Defense"] = new engine.RulesElement({
    name: "Shadow Defense",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_574",
    source: "Forgotten Realms Player's Guide",
    categories: ["Shadow Defense", "ID_FMP_CLASS_FEATURE_574", "11"],
    rules: function(model) {
      model.statadd("_shadow defense resist", 5);
      model.statadd("_shadow defense resist", function() { return model.stat("HALF-LEVEL"); });
      model.statadd("resist:necrotic", function() { return model.stat("_shadow defense resist"); }, "resust");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Shadow Shroud"] = new engine.RulesElement({
    name: "Shadow Shroud",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_575",
    source: "Forgotten Realms Player's Guide",
    categories: ["Shadow Shroud", "ID_FMP_CLASS_FEATURE_575", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Shadowed Action"] = new engine.RulesElement({
    name: "Shadowed Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_820",
    source: "Forgotten Realms Player's Guide",
    categories: ["Shadowed Action", "ID_FMP_CLASS_FEATURE_820", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Shadowed Action:When you spend an action point to take an extra action, you also become shrouded in shadows, gaining concealment until the start of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Sight of the Unseen"] = new engine.RulesElement({
    name: "Sight of the Unseen",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_SIGHT_OF_THE_UNSEEN",
    source: "Forgotten Realms Player's Guide",
    categories: ["Sight of the Unseen", "ID_INTERNAL_CLASS_FEATURE_SIGHT_OF_THE_UNSEEN", "Spellscarred"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_VISION_DARKVISION"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Sorcerous Vitality"] = new engine.RulesElement({
    name: "Sorcerous Vitality",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_832",
    source: "Forgotten Realms Player's Guide",
    categories: ["Sorcerous Vitality", "ID_FMP_CLASS_FEATURE_832", "11"],
    rules: function(model) {
      model.statadd("Healing Surges", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Spellfire Action"] = new engine.RulesElement({
    name: "Spellfire Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_836",
    source: "Forgotten Realms Player's Guide",
    categories: ["Spellfire Action", "ID_FMP_CLASS_FEATURE_836", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Spellfire Action:Instead of taking an extra action when you spend an action point, you can regain one spellscarred encounter power you have already used");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Spellfire Mastery"] = new engine.RulesElement({
    name: "Spellfire Mastery",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_837",
    source: "Forgotten Realms Player's Guide",
    categories: ["Spellfire Mastery", "ID_FMP_CLASS_FEATURE_837", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Spellguard Action"] = new engine.RulesElement({
    name: "Spellguard Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_835",
    source: "Forgotten Realms Player's Guide",
    categories: ["Spellguard Action", "ID_FMP_CLASS_FEATURE_835", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Spellguard Action:When you spend an action point to take an extra action, you can add your Dexterity modifier to the damage dealt by any close burst power you use during that extra action.  You also gain a +2 bonus to AC against melee attacks until the start of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Spellguard Combat Toughness"] = new engine.RulesElement({
    name: "Spellguard Combat Toughness",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_598",
    source: "Forgotten Realms Player's Guide",
    categories: ["Spellguard Combat Toughness", "ID_FMP_CLASS_FEATURE_598", "16"],
    rules: function(model) {
      model.statadd("Healing Surges", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Spellguard Training"] = new engine.RulesElement({
    name: "Spellguard Training",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_597",
    source: "Forgotten Realms Player's Guide",
    categories: ["Spellguard Training", "ID_FMP_CLASS_FEATURE_597", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Steelsky Heritage"] = new engine.RulesElement({
    name: "Steelsky Heritage",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_839",
    source: "Forgotten Realms Player's Guide",
    categories: ["Steelsky Heritage", "ID_FMP_CLASS_FEATURE_839", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Steelsky Heritage:When you spend an action point to take an extra action, you regain the use of a racial encounter power if you have already expended it this encounter. If you are human, you gain a +1 bonus on all d20 rolls until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Stone Sense"] = new engine.RulesElement({
    name: "Stone Sense",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_814",
    source: "Forgotten Realms Player's Guide",
    categories: ["Stone Sense", "ID_FMP_CLASS_FEATURE_814", "11"],
    rules: function(model) {
      model.statadd("Initiative Misc", function() { /* when underground */ return 2; });
      model.statadd("Dungeoneering Misc", function() { /* when underground */ return 2; });
      model.statadd("Perception Misc", function() { /* when underground */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Sune's Touch"] = new engine.RulesElement({
    name: "Sune's Touch",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_822",
    source: "Forgotten Realms Player's Guide",
    categories: ["Sune's Touch", "ID_FMP_CLASS_FEATURE_822", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Swordbond"] = new engine.RulesElement({
    name: "Swordbond",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_630",
    source: "Forgotten Realms Player's Guide,Player's Handbook 3",
    categories: ["Swordbond", "ID_FMP_CLASS_FEATURE_630", "1"]
  });
  byID[te.id] = te;
  
  te = class_feature["Swordmage Aegis"] = new engine.RulesElement({
    name: "Swordmage Aegis",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_518",
    source: "Forgotten Realms Player's Guide",
    categories: ["Swordmage Aegis", "ID_FMP_CLASS_FEATURE_518", "1"],
    rules: function(model) {
      model.select('class feature', 1, "Swordmage Aegis", {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_FEATURE_518"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Swordmage Warding"] = new engine.RulesElement({
    name: "Swordmage Warding",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_629",
    source: "Forgotten Realms Player's Guide,Player's Handbook 3",
    categories: ["Swordmage Warding", "ID_FMP_CLASS_FEATURE_629", "ID_FMP_HYBRID_CLASS_357", "Hybrid Swordmage", "1"],
    rules: function(model) {
      model.statadd("Swordmage Warding", 1, "Swordmage Warding");
      model.statadd("Swordmage Warding", function() { 
        if (!(model.inventory['off hand'])) {
          return 3;
        } else return 0;
       }, "Swordmage Warding");
      model.statadd("AC", function() { 
        if (model.wearing('Weapon', ['light blade'])) {
          return model.stat("Swordmage Warding");
        } else return 0;
       });
      model.statadd("AC", function() { 
        if (model.wearing('Weapon', ['Heavy Blade'])) {
          return model.stat("Swordmage Warding");
        } else return 0;
       });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Swordshield Action"] = new engine.RulesElement({
    name: "Swordshield Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_810",
    source: "Forgotten Realms Player's Guide",
    categories: ["Swordshield Action", "ID_FMP_CLASS_FEATURE_810", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Swordshield Action:When you spend an action point to take an extra action, you also gain a +2 bonus to all defenses until the start of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Tears of Evergold"] = new engine.RulesElement({
    name: "Tears of Evergold",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_821",
    source: "Forgotten Realms Player's Guide",
    categories: ["Tears of Evergold", "ID_FMP_CLASS_FEATURE_821", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Tears of Evergold:When you spend an action point to take an extra action, all foes within 10 squares of you who are vulnerable to a type of damage take damage equal to that vulnerability. If a foe is vulnerable to more than one type of damage, use the highest value.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Teleportation Action"] = new engine.RulesElement({
    name: "Teleportation Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_844",
    source: "Forgotten Realms Player's Guide",
    categories: ["Teleportation Action", "ID_FMP_CLASS_FEATURE_844", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Teleportation Action:When you spend an action point to take an extra action, you can teleport 5 squares as a free action before taking the extra action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Tempest Lord"] = new engine.RulesElement({
    name: "Tempest Lord",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_594",
    source: "Forgotten Realms Player's Guide",
    categories: ["Tempest Lord", "ID_FMP_CLASS_FEATURE_594", "16"],
    rules: function(model) {
      model.statadd("resist:fire", 5);
      model.statadd("resist:cold", 5);
      model.statadd("resist:lightning", 5);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Twilight Accuracy"] = new engine.RulesElement({
    name: "Twilight Accuracy",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_566",
    source: "Forgotten Realms Player's Guide",
    categories: ["Twilight Accuracy", "ID_FMP_CLASS_FEATURE_566", "11"],
    rules: function(model) {
      model.statadd("melee:damage", "+1d6");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Twilight Vision"] = new engine.RulesElement({
    name: "Twilight Vision",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_567",
    source: "Forgotten Realms Player's Guide",
    categories: ["Twilight Vision", "ID_FMP_CLASS_FEATURE_567", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Unflagging Energy"] = new engine.RulesElement({
    name: "Unflagging Energy",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_826",
    source: "Forgotten Realms Player's Guide",
    categories: ["Unflagging Energy", "ID_FMP_CLASS_FEATURE_826", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Unflagging Energy:When you spend an action point to take an extra action to make an attack, that attack is a critical hit on a roll of 18 or higher");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["War Wizard's Decimation"] = new engine.RulesElement({
    name: "War Wizard's Decimation",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_569",
    source: "Forgotten Realms Player's Guide",
    categories: ["War Wizard's Decimation", "ID_FMP_CLASS_FEATURE_569", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["War Wizard's Training"] = new engine.RulesElement({
    name: "War Wizard's Training",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_568",
    source: "Forgotten Realms Player's Guide",
    categories: ["War Wizard's Training", "ID_FMP_CLASS_FEATURE_568", "11"],
    rules: function(model) {
      model.statadd("Action Point", "War Wizard's Training:When you spend an action point to make an attack, any ranged or area powers that you use in that attack do not trigger opportunity attacks.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Whirlwind Action"] = new engine.RulesElement({
    name: "Whirlwind Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_572",
    source: "Forgotten Realms Player's Guide",
    categories: ["Whirlwind Action", "ID_FMP_CLASS_FEATURE_572", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Whirlwind Action:When you spend an action point to take an extra action, you gain the use of the windwalker encounter power one additional time in this encounter.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Whirlwind Breeze"] = new engine.RulesElement({
    name: "Whirlwind Breeze",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_846",
    source: "Forgotten Realms Player's Guide",
    categories: ["Whirlwind Breeze", "ID_FMP_CLASS_FEATURE_846", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Whirlwind Counterforce"] = new engine.RulesElement({
    name: "Whirlwind Counterforce",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_573",
    source: "Forgotten Realms Player's Guide",
    categories: ["Whirlwind Counterforce", "ID_FMP_CLASS_FEATURE_573", "16"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
