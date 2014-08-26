define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Feat = types['Feat'] || (types['Feat'] = {});
  te = Feat["Acolyte Power"] = new engine.RulesElement({
    name: "Acolyte Power",
    type: "Feat",
    id: "ID_FMP_FEAT_340",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=340",
    categories: ["Acolyte Power", "ID_FMP_FEAT_340", "ID_INTERNAL_CATEGORY_MULTICLASS_UTILITY", "Multiclass Utility", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Action Recovery"] = new engine.RulesElement({
    name: "Action Recovery",
    type: "Feat",
    id: "ID_FMP_FEAT_46",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=46",
    categories: ["Action Recovery", "ID_FMP_FEAT_46"],
    rules: function(model) {
      model.statadd("Action Point", "Action Recovery:When you spend an action point to take an extra action, you can immediately make a saving throw against each effect on you that a save can end.");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Action Surge"] = new engine.RulesElement({
    name: "Action Surge",
    type: "Feat",
    id: "ID_FMP_FEAT_215",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=215",
    categories: ["Action Surge", "ID_FMP_FEAT_215"],
    rules: function(model) {
      model.statadd("Action Point", "Action Surge:You gain a +3 bonus to attack rolls you make during any action you gain by spending an action point.");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Adept Power"] = new engine.RulesElement({
    name: "Adept Power",
    type: "Feat",
    id: "ID_FMP_FEAT_341",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=341",
    categories: ["Adept Power", "ID_FMP_FEAT_341", "ID_INTERNAL_CATEGORY_MULTICLASS_DAILY", "Multiclass Daily", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Agile Athlete"] = new engine.RulesElement({
    name: "Agile Athlete",
    type: "Feat",
    id: "ID_FMP_FEAT_50",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=50",
    categories: ["Agile Athlete", "ID_FMP_FEAT_50"]
  });
  byID[te.id] = te;
  
  te = Feat["Agile Hunter"] = new engine.RulesElement({
    name: "Agile Hunter",
    type: "Feat",
    id: "ID_FMP_FEAT_280",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=280",
    categories: ["Agile Hunter", "ID_FMP_FEAT_280"]
  });
  byID[te.id] = te;
  
  te = Feat["Alertness"] = new engine.RulesElement({
    name: "Alertness",
    type: "Feat",
    id: "ID_FMP_FEAT_109",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=109",
    categories: ["Alertness", "ID_FMP_FEAT_109"],
    rules: function(model) {
      model.statadd("Perception Misc", 1, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Arcane Initiate"] = new engine.RulesElement({
    name: "Arcane Initiate",
    type: "Feat",
    id: "ID_FMP_FEAT_277",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=277",
    categories: ["Arcane Initiate", "ID_FMP_FEAT_277", "ID_INTERNAL_CATEGORY_MULTICLASS_WIZARD", "Multiclass Wizard", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_SKILL_TRAINING_ARCANA"]);
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory("at-will") && element.hasCategory("1") && element.hasCategory("ID_FMP_CLASS_9")); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_WIZARD_IMPLEMENTS"]);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_WIZARD"]);
      model.grant(model.elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Arcane Mastery"] = new engine.RulesElement({
    name: "Arcane Mastery",
    type: "Feat",
    id: "ID_FMP_FEAT_110",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=110",
    categories: ["Arcane Mastery", "ID_FMP_FEAT_110"],
    rules: function(model) {
      model.statadd("Action Point", "Arcane Mastery:Once per encounter, you can spend an action point to regain the use of a daily wizard power you've already used today, instead of taking an extra action");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Arcane Reach"] = new engine.RulesElement({
    name: "Arcane Reach",
    type: "Feat",
    id: "ID_FMP_FEAT_310",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=310",
    categories: ["Arcane Reach", "ID_FMP_FEAT_310"]
  });
  byID[te.id] = te;
  
  te = Feat["Armor of Bahamut"] = new engine.RulesElement({
    name: "Armor of Bahamut",
    type: "Feat",
    id: "ID_FMP_FEAT_281",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=281",
    categories: ["Armor of Bahamut", "ID_FMP_FEAT_281", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_2161"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Armor Proficiency: Chainmail"] = new engine.RulesElement({
    name: "Armor Proficiency: Chainmail",
    type: "Feat",
    id: "ID_FMP_FEAT_111",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=111",
    categories: ["Armor Proficiency: Chainmail", "ID_FMP_FEAT_111"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CHAINMAIL)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Armor Proficiency: Cloth"] = new engine.RulesElement({
    name: "Armor Proficiency: Cloth",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_ARMOR_PROFICIENCY_(CLOTH)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_ARMOR_PROFICIENCY_(CLOTH)",
    categories: ["Armor Proficiency: Cloth", "ID_INTERNAL_FEAT_ARMOR_PROFICIENCY_(CLOTH)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CLOTH)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Armor Proficiency: Hide"] = new engine.RulesElement({
    name: "Armor Proficiency: Hide",
    type: "Feat",
    id: "ID_FMP_FEAT_112",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=112",
    categories: ["Armor Proficiency: Hide", "ID_FMP_FEAT_112"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(HIDE)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Armor Proficiency: Leather"] = new engine.RulesElement({
    name: "Armor Proficiency: Leather",
    type: "Feat",
    id: "ID_FMP_FEAT_113",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=113",
    categories: ["Armor Proficiency: Leather", "ID_FMP_FEAT_113"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(LEATHER)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Armor Proficiency: Plate"] = new engine.RulesElement({
    name: "Armor Proficiency: Plate",
    type: "Feat",
    id: "ID_FMP_FEAT_114",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=114",
    categories: ["Armor Proficiency: Plate", "ID_FMP_FEAT_114"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(PLATE)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Armor Proficiency: Scale"] = new engine.RulesElement({
    name: "Armor Proficiency: Scale",
    type: "Feat",
    id: "ID_FMP_FEAT_115",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=115",
    categories: ["Armor Proficiency: Scale", "ID_FMP_FEAT_115"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(SCALE)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Armor Specialization (Chainmail)"] = new engine.RulesElement({
    name: "Armor Specialization (Chainmail)",
    type: "Feat",
    id: "ID_FMP_FEAT_180",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=180",
    categories: ["Armor Specialization (Chainmail)", "ID_FMP_FEAT_180"],
    rules: function(model) {
      model.statadd("AC", function() { 
        if (model.wearing('Armor', ['chain'])) {
          return 1;
        } else return 0;
       }, "Feat");
      model.statadd("Armor Penalty", function() { 
        if (model.wearing('Armor', ['chain'])) {
          return 1;
        } else return 0;
       });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Armor Specialization (Hide)"] = new engine.RulesElement({
    name: "Armor Specialization (Hide)",
    type: "Feat",
    id: "ID_FMP_FEAT_189",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=189",
    categories: ["Armor Specialization (Hide)", "ID_FMP_FEAT_189"],
    rules: function(model) {
      model.statadd("AC", function() { 
        if (model.wearing('Armor', ['hide'])) {
          return 1;
        } else return 0;
       }, "Feat");
      model.statadd("Armor Penalty", function() { 
        if (model.wearing('Armor', ['hide'])) {
          return 1;
        } else return 0;
       });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Armor Specialization (Plate)"] = new engine.RulesElement({
    name: "Armor Specialization (Plate)",
    type: "Feat",
    id: "ID_FMP_FEAT_181",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=181",
    categories: ["Armor Specialization (Plate)", "ID_FMP_FEAT_181"],
    rules: function(model) {
      model.statadd("AC", function() { 
        if (model.wearing('Armor', ['plate'])) {
          return 1;
        } else return 0;
       }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Armor Specialization (Scale)"] = new engine.RulesElement({
    name: "Armor Specialization (Scale)",
    type: "Feat",
    id: "ID_FMP_FEAT_182",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=182",
    categories: ["Armor Specialization (Scale)", "ID_FMP_FEAT_182"],
    rules: function(model) {
      model.statadd("AC", function() { 
        if (model.wearing('Armor', ['Scale'])) {
          return 1;
        } else return 0;
       }, "Feat");
      model.statadd("Speed", function() { 
        if (model.wearing('Armor', ['Scale'])) {
          return 0;
        } else return 0;
       }, "Armor");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Astral Fire"] = new engine.RulesElement({
    name: "Astral Fire",
    type: "Feat",
    id: "ID_FMP_FEAT_282",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=282",
    categories: ["Astral Fire", "ID_FMP_FEAT_282"],
    rules: function(model) {
      model.statadd("fire:damage", 1, "Feat");
      model.statadd("fire:damage", 2, "Feat");
      model.statadd("fire:damage", 3, "Feat");
      model.statadd("radiant:damage", 1, "Feat");
      model.statadd("radiant:damage", 2, "Feat");
      model.statadd("radiant:damage", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Avandra's Rescue"] = new engine.RulesElement({
    name: "Avandra's Rescue",
    type: "Feat",
    id: "ID_FMP_FEAT_283",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=283",
    categories: ["Avandra's Rescue", "ID_FMP_FEAT_283", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_2162"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Axe Mastery"] = new engine.RulesElement({
    name: "Axe Mastery",
    type: "Feat",
    id: "ID_FMP_FEAT_184",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=184",
    categories: ["Axe Mastery", "ID_FMP_FEAT_184"]
  });
  byID[te.id] = te;
  
  te = Feat["Back to the Wall"] = new engine.RulesElement({
    name: "Back to the Wall",
    type: "Feat",
    id: "ID_FMP_FEAT_1",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1",
    categories: ["Back to the Wall", "ID_FMP_FEAT_1"],
    rules: function(model) {
      model.statadd("Armor Class", function() { /* whenever you are adjacent to a wall */ return 1; });
      model.statadd("melee:attack", function() { /* whenever you are adjacent to a wall */ return 1; });
      model.statadd("melee:damage", function() { /* whenever you are adjacent to a wall */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Backstabber"] = new engine.RulesElement({
    name: "Backstabber",
    type: "Feat",
    id: "ID_FMP_FEAT_185",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=185",
    categories: ["Backstabber", "ID_FMP_FEAT_185"],
    rules: function(model) {
      model.statadd("Sneak Attack Die", "d8");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Blade Opportunist"] = new engine.RulesElement({
    name: "Blade Opportunist",
    type: "Feat",
    id: "ID_FMP_FEAT_240",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=240",
    categories: ["Blade Opportunist", "ID_FMP_FEAT_240"],
    rules: function(model) {
      model.statadd("Heavy Blade group:attack", function() { /* with opportunity attacks */ return 2; });
      model.statadd("Light Blade group:attack", function() { /* with opportunity attacks */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Blind-Fight"] = new engine.RulesElement({
    name: "Blind-Fight",
    type: "Feat",
    id: "ID_FMP_FEAT_119",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=119",
    categories: ["Blind-Fight", "ID_FMP_FEAT_119"]
  });
  byID[te.id] = te;
  
  te = Feat["Blood Thirst"] = new engine.RulesElement({
    name: "Blood Thirst",
    type: "Feat",
    id: "ID_FMP_FEAT_2",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2",
    categories: ["Blood Thirst", "ID_FMP_FEAT_2"],
    rules: function(model) {
      model.statadd("melee damage rolls", function() { /* against bloodied foes */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Bludgeon Mastery"] = new engine.RulesElement({
    name: "Bludgeon Mastery",
    type: "Feat",
    id: "ID_FMP_FEAT_250",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=250",
    categories: ["Bludgeon Mastery", "ID_FMP_FEAT_250"]
  });
  byID[te.id] = te;
  
  te = Feat["Burning Blizzard"] = new engine.RulesElement({
    name: "Burning Blizzard",
    type: "Feat",
    id: "ID_FMP_FEAT_284",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=284",
    categories: ["Burning Blizzard", "ID_FMP_FEAT_284"],
    rules: function(model) {
      model.statadd("acid:damage", 1, "Feat");
      model.statadd("acid:damage", 2, "Feat");
      model.statadd("acid:damage", 3, "Feat");
      model.statadd("cold:damage", 1, "Feat");
      model.statadd("cold:damage", 2, "Feat");
      model.statadd("cold:damage", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Combat Anticipation"] = new engine.RulesElement({
    name: "Combat Anticipation",
    type: "Feat",
    id: "ID_FMP_FEAT_15",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=15",
    categories: ["Combat Anticipation", "ID_FMP_FEAT_15"],
    rules: function(model) {
      model.statadd("AC", function() { /* against ranged, area, and close attacks */ return 1; }, "Feat");
      model.statadd("Fortitude Defense", function() { /* against ranged, area, and close attacks */ return 1; }, "Feat");
      model.statadd("Will Defense", function() { /* against ranged, area, and close attacks */ return 1; }, "Feat");
      model.statadd("Reflex Defense", function() { /* against ranged, area, and close attacks */ return 1; }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Combat Commander"] = new engine.RulesElement({
    name: "Combat Commander",
    type: "Feat",
    id: "ID_FMP_FEAT_311",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=311",
    categories: ["Combat Commander", "ID_FMP_FEAT_311"],
    rules: function(model) {
      model.statadd("Combat Leader", function() { return model.stat("Charisma modifier"); }, "Combat Leader");
      model.statadd("Combat Leader", function() { return model.stat("Intelligence modifier"); }, "Combat Leader");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Combat Reflexes"] = new engine.RulesElement({
    name: "Combat Reflexes",
    type: "Feat",
    id: "ID_FMP_FEAT_3",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3",
    categories: ["Combat Reflexes", "ID_FMP_FEAT_3"],
    rules: function(model) {
      model.statadd("Opportunity Attack", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Corellon's Grace"] = new engine.RulesElement({
    name: "Corellon's Grace",
    type: "Feat",
    id: "ID_FMP_FEAT_278",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=278",
    categories: ["Corellon's Grace", "ID_FMP_FEAT_278", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1953"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Danger Sense"] = new engine.RulesElement({
    name: "Danger Sense",
    type: "Feat",
    id: "ID_FMP_FEAT_16",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=16",
    categories: ["Danger Sense", "ID_FMP_FEAT_16"]
  });
  byID[te.id] = te;
  
  te = Feat["Dark Fury"] = new engine.RulesElement({
    name: "Dark Fury",
    type: "Feat",
    id: "ID_FMP_FEAT_285",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=285",
    categories: ["Dark Fury", "ID_FMP_FEAT_285"],
    rules: function(model) {
      model.statadd("necrotic:damage", 1, "Feat");
      model.statadd("necrotic:damage", 2, "Feat");
      model.statadd("necrotic:damage", 3, "Feat");
      model.statadd("psychic:damage", 1, "Feat");
      model.statadd("psychic:damage", 2, "Feat");
      model.statadd("psychic:damage", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Deadly Axe"] = new engine.RulesElement({
    name: "Deadly Axe",
    type: "Feat",
    id: "ID_FMP_FEAT_243",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=243",
    categories: ["Deadly Axe", "ID_FMP_FEAT_243"]
  });
  byID[te.id] = te;
  
  te = Feat["Defensive Advantage"] = new engine.RulesElement({
    name: "Defensive Advantage",
    type: "Feat",
    id: "ID_FMP_FEAT_4",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=4",
    categories: ["Defensive Advantage", "ID_FMP_FEAT_4"],
    rules: function(model) {
      model.statadd("AC", function() { /* when you have combat advantage */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Defensive Mobility"] = new engine.RulesElement({
    name: "Defensive Mobility",
    type: "Feat",
    id: "ID_FMP_FEAT_127",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=127",
    categories: ["Defensive Mobility", "ID_FMP_FEAT_127"],
    rules: function(model) {
      model.statadd("AC", function() { /* against opportunity attacks */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Devastating Critical"] = new engine.RulesElement({
    name: "Devastating Critical",
    type: "Feat",
    id: "ID_FMP_FEAT_128",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=128",
    categories: ["Devastating Critical", "ID_FMP_FEAT_128"]
  });
  byID[te.id] = te;
  
  te = Feat["Distant Shot"] = new engine.RulesElement({
    name: "Distant Shot",
    type: "Feat",
    id: "ID_FMP_FEAT_312",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=312",
    categories: ["Distant Shot", "ID_FMP_FEAT_312"]
  });
  byID[te.id] = te;
  
  te = Feat["Distracting Shield"] = new engine.RulesElement({
    name: "Distracting Shield",
    type: "Feat",
    id: "ID_FMP_FEAT_286",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=286",
    categories: ["Distracting Shield", "ID_FMP_FEAT_286"]
  });
  byID[te.id] = te;
  
  te = Feat["Dodge Giants"] = new engine.RulesElement({
    name: "Dodge Giants",
    type: "Feat",
    id: "ID_FMP_FEAT_193",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=193",
    categories: ["Dodge Giants", "ID_FMP_FEAT_193"],
    rules: function(model) {
      model.statadd("AC", function() { /* against the attacks of large or larger foes */ return 1; });
      model.statadd("Reflex Defense", function() { /* against the attacks of large or larger foes */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Dragonborn Frenzy"] = new engine.RulesElement({
    name: "Dragonborn Frenzy",
    type: "Feat",
    id: "ID_FMP_FEAT_77",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=77",
    categories: ["Dragonborn Frenzy", "ID_FMP_FEAT_77"],
    rules: function(model) {
      model.statadd("damage rolls", function() { /* while you are bloodied */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Dragonborn Senses"] = new engine.RulesElement({
    name: "Dragonborn Senses",
    type: "Feat",
    id: "ID_FMP_FEAT_194",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=194",
    categories: ["Dragonborn Senses", "ID_FMP_FEAT_194"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_VISION_LOW-LIGHT"]);
      model.statadd("Perception Misc", 1, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Durable"] = new engine.RulesElement({
    name: "Durable",
    type: "Feat",
    id: "ID_FMP_FEAT_131",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=131",
    categories: ["Durable", "ID_FMP_FEAT_131"],
    rules: function(model) {
      model.statadd("Healing Surges", 2);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Dwarven Durability"] = new engine.RulesElement({
    name: "Dwarven Durability",
    type: "Feat",
    id: "ID_FMP_FEAT_196",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=196",
    categories: ["Dwarven Durability", "ID_FMP_FEAT_196"],
    rules: function(model) {
      model.statadd("Healing Surges", 2);
      model.statadd("Healing Surge Value", function() { return model.stat("Constitution modifier"); });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Dwarven Weapon Training"] = new engine.RulesElement({
    name: "Dwarven Weapon Training",
    type: "Feat",
    id: "ID_FMP_FEAT_69",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=69",
    categories: ["Dwarven Weapon Training", "ID_FMP_FEAT_69"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_GROUP_(AXE)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_GROUP_(HAMMER)"]);
      model.statadd("axe group:damage", 2, "Feat");
      model.statadd("hammer group:damage", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Eladrin Soldier"] = new engine.RulesElement({
    name: "Eladrin Soldier",
    type: "Feat",
    id: "ID_FMP_FEAT_64",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=64",
    categories: ["Eladrin Soldier", "ID_FMP_FEAT_64"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_GROUP_(SPEAR)"]);
      model.statadd("spear group:damage", 2, "Feat");
      model.statadd("Longsword:damage", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Elven Precision"] = new engine.RulesElement({
    name: "Elven Precision",
    type: "Feat",
    id: "ID_FMP_FEAT_217",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=217",
    categories: ["Elven Precision", "ID_FMP_FEAT_217"]
  });
  byID[te.id] = te;
  
  te = Feat["Empowered Dragon Breath"] = new engine.RulesElement({
    name: "Empowered Dragon Breath",
    type: "Feat",
    id: "ID_FMP_FEAT_313",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=313",
    categories: ["Empowered Dragon Breath", "ID_FMP_FEAT_313"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Enlarged Dragon Breath"] = new engine.RulesElement({
    name: "Enlarged Dragon Breath",
    type: "Feat",
    id: "ID_FMP_FEAT_287",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=287",
    categories: ["Enlarged Dragon Breath", "ID_FMP_FEAT_287"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Epic Resurgence"] = new engine.RulesElement({
    name: "Epic Resurgence",
    type: "Feat",
    id: "ID_FMP_FEAT_327",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=327",
    categories: ["Epic Resurgence", "ID_FMP_FEAT_327"]
  });
  byID[te.id] = te;
  
  te = Feat["Escape Artist"] = new engine.RulesElement({
    name: "Escape Artist",
    type: "Feat",
    id: "ID_FMP_FEAT_19",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=19",
    categories: ["Escape Artist", "ID_FMP_FEAT_19"],
    rules: function(model) {
      model.statadd("Acrobatics Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Evasion"] = new engine.RulesElement({
    name: "Evasion",
    type: "Feat",
    id: "ID_FMP_FEAT_20",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=20",
    categories: ["Evasion", "ID_FMP_FEAT_20"]
  });
  byID[te.id] = te;
  
  te = Feat["Expanded Spellbook"] = new engine.RulesElement({
    name: "Expanded Spellbook",
    type: "Feat",
    id: "ID_FMP_FEAT_276",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=276",
    categories: ["Expanded Spellbook", "ID_FMP_FEAT_276"],
    rules: function(model) {
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_9") && element.hasCategory("daily") && element.hasCategory("1")); }
      });
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_9") && element.hasCategory("daily") && element.hasCategory("5")); }
      });
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_9") && element.hasCategory("daily") && element.hasCategory("9")); }
      });
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_9") && element.hasCategory("daily") && element.hasCategory("15")); }
      });
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_9") && element.hasCategory("daily") && element.hasCategory("19")); }
      });
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_9") && element.hasCategory("daily") && element.hasCategory("25")); }
      });
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_9") && element.hasCategory("daily") && element.hasCategory("29")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Far Shot"] = new engine.RulesElement({
    name: "Far Shot",
    type: "Feat",
    id: "ID_FMP_FEAT_139",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=139",
    categories: ["Far Shot", "ID_FMP_FEAT_139"]
  });
  byID[te.id] = te;
  
  te = Feat["Far Throw"] = new engine.RulesElement({
    name: "Far Throw",
    type: "Feat",
    id: "ID_FMP_FEAT_140",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=140",
    categories: ["Far Throw", "ID_FMP_FEAT_140"]
  });
  byID[te.id] = te;
  
  te = Feat["Fast Runner"] = new engine.RulesElement({
    name: "Fast Runner",
    type: "Feat",
    id: "ID_FMP_FEAT_6",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=6",
    categories: ["Fast Runner", "ID_FMP_FEAT_6"],
    rules: function(model) {
      model.statadd("Speed", function() { /* when you charge or run */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Ferocious Rebuke"] = new engine.RulesElement({
    name: "Ferocious Rebuke",
    type: "Feat",
    id: "ID_FMP_FEAT_203",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=203",
    categories: ["Ferocious Rebuke", "ID_FMP_FEAT_203"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Feywild Protection"] = new engine.RulesElement({
    name: "Feywild Protection",
    type: "Feat",
    id: "ID_FMP_FEAT_209",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=209",
    categories: ["Feywild Protection", "ID_FMP_FEAT_209"]
  });
  byID[te.id] = te;
  
  te = Feat["Fiery Rebuke"] = new engine.RulesElement({
    name: "Fiery Rebuke",
    type: "Feat",
    id: "ID_FMP_FEAT_211",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=211",
    categories: ["Fiery Rebuke", "ID_FMP_FEAT_211"],
    rules: function(model) {
      model.statadd("ID_FMP_POWER_1628:damage", 5);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Flail Mastery"] = new engine.RulesElement({
    name: "Flail Mastery",
    type: "Feat",
    id: "ID_FMP_FEAT_329",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=329",
    categories: ["Flail Mastery", "ID_FMP_FEAT_329"]
  });
  byID[te.id] = te;
  
  te = Feat["Flanking Maneuver"] = new engine.RulesElement({
    name: "Flanking Maneuver",
    type: "Feat",
    id: "ID_FMP_FEAT_23",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=23",
    categories: ["Flanking Maneuver", "ID_FMP_FEAT_23"]
  });
  byID[te.id] = te;
  
  te = Feat["Fleet-Footed"] = new engine.RulesElement({
    name: "Fleet-Footed",
    type: "Feat",
    id: "ID_FMP_FEAT_142",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=142",
    categories: ["Fleet-Footed", "ID_FMP_FEAT_142"],
    rules: function(model) {
      model.statadd("Speed", 1, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Font of Radiance"] = new engine.RulesElement({
    name: "Font of Radiance",
    type: "Feat",
    id: "ID_FMP_FEAT_330",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=330",
    categories: ["Font of Radiance", "ID_FMP_FEAT_330"]
  });
  byID[te.id] = te;
  
  te = Feat["Great Fortitude"] = new engine.RulesElement({
    name: "Great Fortitude",
    type: "Feat",
    id: "ID_FMP_FEAT_145",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=145",
    categories: ["Great Fortitude", "ID_FMP_FEAT_145"],
    rules: function(model) {
      model.statadd("Great Fortitude", 2);
      model.statadd("Fortitude Defense", function() { return model.stat("Great Fortitude"); }, "Feat");
      model.statadd("Great Fortitude", 1);
      model.statadd("Great Fortitude", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Group Insight"] = new engine.RulesElement({
    name: "Group Insight",
    type: "Feat",
    id: "ID_FMP_FEAT_288",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=288",
    categories: ["Group Insight", "ID_FMP_FEAT_288"]
  });
  byID[te.id] = te;
  
  te = Feat["Halfling Agility"] = new engine.RulesElement({
    name: "Halfling Agility",
    type: "Feat",
    id: "ID_FMP_FEAT_216",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=216",
    categories: ["Halfling Agility", "ID_FMP_FEAT_216"]
  });
  byID[te.id] = te;
  
  te = Feat["Hammer Rhythm"] = new engine.RulesElement({
    name: "Hammer Rhythm",
    type: "Feat",
    id: "ID_FMP_FEAT_246",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=246",
    categories: ["Hammer Rhythm", "ID_FMP_FEAT_246"]
  });
  byID[te.id] = te;
  
  te = Feat["Harmony of Erathis"] = new engine.RulesElement({
    name: "Harmony of Erathis",
    type: "Feat",
    id: "ID_FMP_FEAT_289",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=289",
    categories: ["Harmony of Erathis", "ID_FMP_FEAT_289", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_2165"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Healing Hands"] = new engine.RulesElement({
    name: "Healing Hands",
    type: "Feat",
    id: "ID_FMP_FEAT_290",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=290",
    categories: ["Healing Hands", "ID_FMP_FEAT_290"]
  });
  byID[te.id] = te;
  
  te = Feat["Heavy Blade Mastery"] = new engine.RulesElement({
    name: "Heavy Blade Mastery",
    type: "Feat",
    id: "ID_FMP_FEAT_249",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=249",
    categories: ["Heavy Blade Mastery", "ID_FMP_FEAT_249"]
  });
  byID[te.id] = te;
  
  te = Feat["Heavy Blade Opportunity"] = new engine.RulesElement({
    name: "Heavy Blade Opportunity",
    type: "Feat",
    id: "ID_FMP_FEAT_314",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=314",
    categories: ["Heavy Blade Opportunity", "ID_FMP_FEAT_314"]
  });
  byID[te.id] = te;
  
  te = Feat["Hellfire Blood"] = new engine.RulesElement({
    name: "Hellfire Blood",
    type: "Feat",
    id: "ID_FMP_FEAT_44",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=44",
    categories: ["Hellfire Blood", "ID_FMP_FEAT_44"],
    rules: function(model) {
      model.statadd("fire:attack", 1, "Hellfire Blood");
      model.statadd("fear:attack", 1, "Hellfire Blood");
      model.statadd("fire:damage", 1, "Hellfire Blood");
      model.statadd("fear:damage", 1, "Hellfire Blood");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Human Perseverance"] = new engine.RulesElement({
    name: "Human Perseverance",
    type: "Feat",
    id: "ID_FMP_FEAT_47",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=47",
    categories: ["Human Perseverance", "ID_FMP_FEAT_47"],
    rules: function(model) {
      model.statadd("Saving Throws", 1, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Improved Dark One's Blessing"] = new engine.RulesElement({
    name: "Improved Dark One's Blessing",
    type: "Feat",
    id: "ID_FMP_FEAT_291",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=291",
    categories: ["Improved Dark One's Blessing", "ID_FMP_FEAT_291"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Improved Fate of the Void"] = new engine.RulesElement({
    name: "Improved Fate of the Void",
    type: "Feat",
    id: "ID_FMP_FEAT_292",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=292",
    categories: ["Improved Fate of the Void", "ID_FMP_FEAT_292"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Improved Initiative"] = new engine.RulesElement({
    name: "Improved Initiative",
    type: "Feat",
    id: "ID_FMP_FEAT_272",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=272",
    categories: ["Improved Initiative", "ID_FMP_FEAT_272"],
    rules: function(model) {
      model.statadd("Initiative Misc", 4, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Improved Misty Step"] = new engine.RulesElement({
    name: "Improved Misty Step",
    type: "Feat",
    id: "ID_FMP_FEAT_293",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=293",
    categories: ["Improved Misty Step", "ID_FMP_FEAT_293"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Improved Second Wind"] = new engine.RulesElement({
    name: "Improved Second Wind",
    type: "Feat",
    id: "ID_FMP_FEAT_147",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=147",
    categories: ["Improved Second Wind", "ID_FMP_FEAT_147"]
  });
  byID[te.id] = te;
  
  te = Feat["Inescapable Force"] = new engine.RulesElement({
    name: "Inescapable Force",
    type: "Feat",
    id: "ID_FMP_FEAT_315",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=315",
    categories: ["Inescapable Force", "ID_FMP_FEAT_315"],
    rules: function(model) {
      model.statadd("force:damage", "+1d10");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Initiate of the Faith"] = new engine.RulesElement({
    name: "Initiate of the Faith",
    type: "Feat",
    id: "ID_FMP_FEAT_333",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=333",
    categories: ["Initiate of the Faith", "ID_FMP_FEAT_333", "ID_INTERNAL_CATEGORY_MULTICLASS_CLERIC", "Multiclass Cleric", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_SKILL_TRAINING_RELIGION"]);
      model.grant(model.elements.id["ID_FMP_POWER_1455"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(HOLY_SYMBOL)"]);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_CLERIC"]);
      model.grant(model.elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Inspired Recovery"] = new engine.RulesElement({
    name: "Inspired Recovery",
    type: "Feat",
    id: "ID_FMP_FEAT_294",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=294",
    categories: ["Inspired Recovery", "ID_FMP_FEAT_294"]
  });
  byID[te.id] = te;
  
  te = Feat["Ioun's Poise"] = new engine.RulesElement({
    name: "Ioun's Poise",
    type: "Feat",
    id: "ID_FMP_FEAT_295",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=295",
    categories: ["Ioun's Poise", "ID_FMP_FEAT_295", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_2166"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Iron Will"] = new engine.RulesElement({
    name: "Iron Will",
    type: "Feat",
    id: "ID_FMP_FEAT_148",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=148",
    categories: ["Iron Will", "ID_FMP_FEAT_148"],
    rules: function(model) {
      model.statadd("Iron Will", 2);
      model.statadd("Will Defense", function() { return model.stat("Iron Will"); }, "Feat");
      model.statadd("Iron Will", 1);
      model.statadd("Iron Will", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Irresistible Flame"] = new engine.RulesElement({
    name: "Irresistible Flame",
    type: "Feat",
    id: "ID_FMP_FEAT_331",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=331",
    categories: ["Irresistible Flame", "ID_FMP_FEAT_331"]
  });
  byID[te.id] = te;
  
  te = Feat["Jack of All Trades"] = new engine.RulesElement({
    name: "Jack of All Trades",
    type: "Feat",
    id: "ID_FMP_FEAT_245",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=245",
    categories: ["Jack of All Trades", "ID_FMP_FEAT_245"],
    rules: function(model) {
      model.statadd("Acrobatics Misc", 2, "Feat");
      model.statadd("Arcana Misc", 2, "Feat");
      model.statadd("Athletics Misc", 2, "Feat");
      model.statadd("Bluff Misc", 2, "Feat");
      model.statadd("Diplomacy Misc", 2, "Feat");
      model.statadd("Dungeoneering Misc", 2, "Feat");
      model.statadd("Endurance Misc", 2, "Feat");
      model.statadd("Heal Misc", 2, "Feat");
      model.statadd("History Misc", 2, "Feat");
      model.statadd("Insight Misc", 2, "Feat");
      model.statadd("Intimidate Misc", 2, "Feat");
      model.statadd("Nature Misc", 2, "Feat");
      model.statadd("Perception Misc", 2, "Feat");
      model.statadd("Religion Misc", 2, "Feat");
      model.statadd("Stealth Misc", 2, "Feat");
      model.statadd("Streetwise Misc", 2, "Feat");
      model.statadd("Thievery Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Kord's Favor"] = new engine.RulesElement({
    name: "Kord's Favor",
    type: "Feat",
    id: "ID_FMP_FEAT_296",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=296",
    categories: ["Kord's Favor", "ID_FMP_FEAT_296", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_2167"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Lasting Frost"] = new engine.RulesElement({
    name: "Lasting Frost",
    type: "Feat",
    id: "ID_FMP_FEAT_316",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=316",
    categories: ["Lasting Frost", "ID_FMP_FEAT_316"]
  });
  byID[te.id] = te;
  
  te = Feat["Lethal Hunter"] = new engine.RulesElement({
    name: "Lethal Hunter",
    type: "Feat",
    id: "ID_FMP_FEAT_273",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=273",
    categories: ["Lethal Hunter", "ID_FMP_FEAT_273"],
    rules: function(model) {
      model.statadd("Hunter's Quarry Die", "d8");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Light Blade Mastery"] = new engine.RulesElement({
    name: "Light Blade Mastery",
    type: "Feat",
    id: "ID_FMP_FEAT_251",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=251",
    categories: ["Light Blade Mastery", "ID_FMP_FEAT_251"]
  });
  byID[te.id] = te;
  
  te = Feat["Light Blade Precision"] = new engine.RulesElement({
    name: "Light Blade Precision",
    type: "Feat",
    id: "ID_FMP_FEAT_244",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=244",
    categories: ["Light Blade Precision", "ID_FMP_FEAT_244"],
    rules: function(model) {
      model.statadd("light blade group:damage", function() { /* against large or larger targets */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Light Step"] = new engine.RulesElement({
    name: "Light Step",
    type: "Feat",
    id: "ID_FMP_FEAT_60",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=60",
    categories: ["Light Step", "ID_FMP_FEAT_60"],
    rules: function(model) {
      model.statadd("Acrobatics Misc", 1, "Feat");
      model.statadd("Stealth Misc", 1, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Lightning Arc"] = new engine.RulesElement({
    name: "Lightning Arc",
    type: "Feat",
    id: "ID_FMP_FEAT_317",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=317",
    categories: ["Lightning Arc", "ID_FMP_FEAT_317"]
  });
  byID[te.id] = te;
  
  te = Feat["Lightning Reflexes"] = new engine.RulesElement({
    name: "Lightning Reflexes",
    type: "Feat",
    id: "ID_FMP_FEAT_149",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=149",
    categories: ["Lightning Reflexes", "ID_FMP_FEAT_149"],
    rules: function(model) {
      model.statadd("Lightning Reflexes", 2);
      model.statadd("Reflex Defense", function() { return model.stat("Lightning Reflexes"); }, "Feat");
      model.statadd("Lightning Reflexes", 1);
      model.statadd("Lightning Reflexes", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Linguist"] = new engine.RulesElement({
    name: "Linguist",
    type: "Feat",
    id: "ID_FMP_FEAT_150",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=150",
    categories: ["Linguist", "ID_FMP_FEAT_150"],
    rules: function(model) {
      model.select('Language', 3);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Linguist II"] = new engine.RulesElement({
    name: "Linguist II",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_LINGUIST_II",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_LINGUIST_II",
    categories: ["Linguist II", "ID_INTERNAL_FEAT_LINGUIST_II"],
    rules: function(model) {
      model.select('Language', 3);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Linguist III"] = new engine.RulesElement({
    name: "Linguist III",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_LINGUIST_III",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_LINGUIST_III",
    categories: ["Linguist III", "ID_INTERNAL_FEAT_LINGUIST_III"],
    rules: function(model) {
      model.select('Language', 3);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Linguist IV"] = new engine.RulesElement({
    name: "Linguist IV",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_LINGUIST_IV",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_LINGUIST_IV",
    categories: ["Linguist IV", "ID_INTERNAL_FEAT_LINGUIST_IV"],
    rules: function(model) {
      model.select('Language', 3);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Linguist V"] = new engine.RulesElement({
    name: "Linguist V",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_LINGUIST_V",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_LINGUIST_V",
    categories: ["Linguist V", "ID_INTERNAL_FEAT_LINGUIST_V"],
    rules: function(model) {
      model.select('Language', 3);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Linguist VI"] = new engine.RulesElement({
    name: "Linguist VI",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_LINGUIST_VI",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_LINGUIST_VI",
    categories: ["Linguist VI", "ID_INTERNAL_FEAT_LINGUIST_VI"],
    rules: function(model) {
      model.select('Language', 3);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Long Jumper"] = new engine.RulesElement({
    name: "Long Jumper",
    type: "Feat",
    id: "ID_FMP_FEAT_27",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=27",
    categories: ["Long Jumper", "ID_FMP_FEAT_27"],
    rules: function(model) {
      model.statadd("Athletics Misc", 1, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Lost in the Crowd"] = new engine.RulesElement({
    name: "Lost in the Crowd",
    type: "Feat",
    id: "ID_FMP_FEAT_7",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7",
    categories: ["Lost in the Crowd", "ID_FMP_FEAT_7"]
  });
  byID[te.id] = te;
  
  te = Feat["Melora's Tide"] = new engine.RulesElement({
    name: "Melora's Tide",
    type: "Feat",
    id: "ID_FMP_FEAT_297",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=297",
    categories: ["Melora's Tide", "ID_FMP_FEAT_297", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_2168"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Mettle"] = new engine.RulesElement({
    name: "Mettle",
    type: "Feat",
    id: "ID_FMP_FEAT_29",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=29",
    categories: ["Mettle", "ID_FMP_FEAT_29"]
  });
  byID[te.id] = te;
  
  te = Feat["Moradin's Resolve"] = new engine.RulesElement({
    name: "Moradin's Resolve",
    type: "Feat",
    id: "ID_FMP_FEAT_298",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=298",
    categories: ["Moradin's Resolve", "ID_FMP_FEAT_298", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_2170"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Mounted Combat"] = new engine.RulesElement({
    name: "Mounted Combat",
    type: "Feat",
    id: "ID_FMP_FEAT_30",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=30",
    categories: ["Mounted Combat", "ID_FMP_FEAT_30"]
  });
  byID[te.id] = te;
  
  te = Feat["Nimble Blade"] = new engine.RulesElement({
    name: "Nimble Blade",
    type: "Feat",
    id: "ID_FMP_FEAT_238",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=238",
    categories: ["Nimble Blade", "ID_FMP_FEAT_238"],
    rules: function(model) {
      model.statadd("Light Blade group:attack", function() { /* when you have combat advantage */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Novice Power"] = new engine.RulesElement({
    name: "Novice Power",
    type: "Feat",
    id: "ID_FMP_FEAT_339",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=339",
    categories: ["Novice Power", "ID_FMP_FEAT_339", "ID_INTERNAL_CATEGORY_MULTICLASS_ENCOUNTER", "Multiclass Encounter", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Pact Initiate"] = new engine.RulesElement({
    name: "Pact Initiate",
    type: "Feat",
    id: "ID_FMP_FEAT_337",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=337",
    categories: ["Pact Initiate", "ID_FMP_FEAT_337", "ID_INTERNAL_CATEGORY_MULTICLASS_WARLOCK", "Multiclass Warlock", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.select('Skill Training', 1, {
        filter: function(model, element) { return element.hasCategory("Warlock Class"); }
      });
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("Pact Initiate"); }
      });
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(ROD)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(WAND)"]);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_WARLOCK"]);
      model.grant(model.elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Pelor's Radiance"] = new engine.RulesElement({
    name: "Pelor's Radiance",
    type: "Feat",
    id: "ID_FMP_FEAT_299",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=299",
    categories: ["Pelor's Radiance", "ID_FMP_FEAT_299", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_2171"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Pick Mastery"] = new engine.RulesElement({
    name: "Pick Mastery",
    type: "Feat",
    id: "ID_FMP_FEAT_255",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=255",
    categories: ["Pick Mastery", "ID_FMP_FEAT_255"]
  });
  byID[te.id] = te;
  
  te = Feat["Point-Blank Shot"] = new engine.RulesElement({
    name: "Point-Blank Shot",
    type: "Feat",
    id: "ID_FMP_FEAT_8",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=8",
    categories: ["Point-Blank Shot", "ID_FMP_FEAT_8"]
  });
  byID[te.id] = te;
  
  te = Feat["Polearm Gamble"] = new engine.RulesElement({
    name: "Polearm Gamble",
    type: "Feat",
    id: "ID_FMP_FEAT_258",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=258",
    categories: ["Polearm Gamble", "ID_FMP_FEAT_258"]
  });
  byID[te.id] = te;
  
  te = Feat["Potent Challenge"] = new engine.RulesElement({
    name: "Potent Challenge",
    type: "Feat",
    id: "ID_FMP_FEAT_300",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=300",
    categories: ["Potent Challenge", "ID_FMP_FEAT_300"]
  });
  byID[te.id] = te;
  
  te = Feat["Power Attack"] = new engine.RulesElement({
    name: "Power Attack",
    type: "Feat",
    id: "ID_FMP_FEAT_261",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=261",
    categories: ["Power Attack", "ID_FMP_FEAT_261"]
  });
  byID[te.id] = te;
  
  te = Feat["Powerful Charge"] = new engine.RulesElement({
    name: "Powerful Charge",
    type: "Feat",
    id: "ID_FMP_FEAT_9",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9",
    categories: ["Powerful Charge", "ID_FMP_FEAT_9"],
    rules: function(model) {
      model.statadd("Damage", function() { /* when you charge */ return 2; });
      model.statadd("bull rush", function() { /* when you charge */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Precise Hunter"] = new engine.RulesElement({
    name: "Precise Hunter",
    type: "Feat",
    id: "ID_FMP_FEAT_301",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=301",
    categories: ["Precise Hunter", "ID_FMP_FEAT_301"]
  });
  byID[te.id] = te;
  
  te = Feat["Press the Advantage"] = new engine.RulesElement({
    name: "Press the Advantage",
    type: "Feat",
    id: "ID_FMP_FEAT_302",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=302",
    categories: ["Press the Advantage", "ID_FMP_FEAT_302"]
  });
  byID[te.id] = te;
  
  te = Feat["Psychic Lock"] = new engine.RulesElement({
    name: "Psychic Lock",
    type: "Feat",
    id: "ID_FMP_FEAT_318",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=318",
    categories: ["Psychic Lock", "ID_FMP_FEAT_318"]
  });
  byID[te.id] = te;
  
  te = Feat["Quick Draw"] = new engine.RulesElement({
    name: "Quick Draw",
    type: "Feat",
    id: "ID_FMP_FEAT_157",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=157",
    categories: ["Quick Draw", "ID_FMP_FEAT_157"],
    rules: function(model) {
      model.statadd("Initiative Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Raging Storm"] = new engine.RulesElement({
    name: "Raging Storm",
    type: "Feat",
    id: "ID_FMP_FEAT_303",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=303",
    categories: ["Raging Storm", "ID_FMP_FEAT_303"],
    rules: function(model) {
      model.statadd("lightning:damage", 1, "Feat");
      model.statadd("lightning:damage", 2, "Feat");
      model.statadd("lightning:damage", 3, "Feat");
      model.statadd("thunder:damage", 1, "Feat");
      model.statadd("thunder:damage", 2, "Feat");
      model.statadd("thunder:damage", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Raven Queen's Blessing"] = new engine.RulesElement({
    name: "Raven Queen's Blessing",
    type: "Feat",
    id: "ID_FMP_FEAT_304",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=304",
    categories: ["Raven Queen's Blessing", "ID_FMP_FEAT_304", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_2173"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Resounding Thunder"] = new engine.RulesElement({
    name: "Resounding Thunder",
    type: "Feat",
    id: "ID_FMP_FEAT_319",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=319",
    categories: ["Resounding Thunder", "ID_FMP_FEAT_319"]
  });
  byID[te.id] = te;
  
  te = Feat["Ritual Caster"] = new engine.RulesElement({
    name: "Ritual Caster",
    type: "Feat",
    id: "ID_FMP_FEAT_159",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=159",
    categories: ["Ritual Caster", "ID_FMP_FEAT_159", "ID_FMP_CLASS_FEATURE_683", "Ritual Casting"]
  });
  byID[te.id] = te;
  
  te = Feat["Running Shot"] = new engine.RulesElement({
    name: "Running Shot",
    type: "Feat",
    id: "ID_FMP_FEAT_57",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=57",
    categories: ["Running Shot", "ID_FMP_FEAT_57"]
  });
  byID[te.id] = te;
  
  te = Feat["Scimitar Dance"] = new engine.RulesElement({
    name: "Scimitar Dance",
    type: "Feat",
    id: "ID_FMP_FEAT_256",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=256",
    categories: ["Scimitar Dance", "ID_FMP_FEAT_256"]
  });
  byID[te.id] = te;
  
  te = Feat["Second Implement"] = new engine.RulesElement({
    name: "Second Implement",
    type: "Feat",
    id: "ID_FMP_FEAT_320",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=320",
    categories: ["Second Implement", "ID_FMP_FEAT_320"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("Arcane Implement Mastery"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Secret Stride"] = new engine.RulesElement({
    name: "Secret Stride",
    type: "Feat",
    id: "ID_FMP_FEAT_31",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=31",
    categories: ["Secret Stride", "ID_FMP_FEAT_31"]
  });
  byID[te.id] = te;
  
  te = Feat["Sehanine's Reversal"] = new engine.RulesElement({
    name: "Sehanine's Reversal",
    type: "Feat",
    id: "ID_FMP_FEAT_305",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=305",
    categories: ["Sehanine's Reversal", "ID_FMP_FEAT_305", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_2174"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Seize the Moment"] = new engine.RulesElement({
    name: "Seize the Moment",
    type: "Feat",
    id: "ID_FMP_FEAT_32",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=32",
    categories: ["Seize the Moment", "ID_FMP_FEAT_32"]
  });
  byID[te.id] = te;
  
  te = Feat["Shield Proficiency: Heavy"] = new engine.RulesElement({
    name: "Shield Proficiency: Heavy",
    type: "Feat",
    id: "ID_FMP_FEAT_161",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=161",
    categories: ["Shield Proficiency: Heavy", "ID_FMP_FEAT_161"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SHIELD_PROFICIENCY_(HEAVY)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Shield Proficiency: Light"] = new engine.RulesElement({
    name: "Shield Proficiency: Light",
    type: "Feat",
    id: "ID_FMP_FEAT_162",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=162",
    categories: ["Shield Proficiency: Light", "ID_FMP_FEAT_162"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SHIELD_PROFICIENCY_(LIGHT)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Shield Push"] = new engine.RulesElement({
    name: "Shield Push",
    type: "Feat",
    id: "ID_FMP_FEAT_306",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=306",
    categories: ["Shield Push", "ID_FMP_FEAT_306"]
  });
  byID[te.id] = te;
  
  te = Feat["Shield Specialization"] = new engine.RulesElement({
    name: "Shield Specialization",
    type: "Feat",
    id: "ID_FMP_FEAT_259",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=259",
    categories: ["Shield Specialization", "ID_FMP_FEAT_259"],
    rules: function(model) {
      model.statadd("AC", function() { 
        if (model.wearing('Armor', ['Shield'])) {
          return 1;
        } else return 0;
       }, "Feat");
      model.statadd("Reflex Defense", function() { 
        if (model.wearing('Armor', ['Shield'])) {
          return 1;
        } else return 0;
       }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Skill Focus"] = new engine.RulesElement({
    name: "Skill Focus",
    type: "Feat",
    id: "ID_FMP_FEAT_165",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=165",
    categories: ["Skill Focus", "ID_FMP_FEAT_165"]
  });
  byID[te.id] = te;
  
  te = Feat["Skill Focus (Acrobatics)"] = new engine.RulesElement({
    name: "Skill Focus (Acrobatics)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SKILL_FOCUS_(ACROBATICS)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SKILL_FOCUS_(ACROBATICS)",
    categories: ["Skill Focus (Acrobatics)", "ID_INTERNAL_FEAT_SKILL_FOCUS_(ACROBATICS)"],
    rules: function(model) {
      model.statadd("Acrobatics Misc", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Skill Focus (Arcana)"] = new engine.RulesElement({
    name: "Skill Focus (Arcana)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SKILL_FOCUS_(ARCANA)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SKILL_FOCUS_(ARCANA)",
    categories: ["Skill Focus (Arcana)", "ID_INTERNAL_FEAT_SKILL_FOCUS_(ARCANA)"],
    rules: function(model) {
      model.statadd("Arcana Misc", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Skill Focus (Athletics)"] = new engine.RulesElement({
    name: "Skill Focus (Athletics)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SKILL_FOCUS_(ATHLETICS)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SKILL_FOCUS_(ATHLETICS)",
    categories: ["Skill Focus (Athletics)", "ID_INTERNAL_FEAT_SKILL_FOCUS_(ATHLETICS)"],
    rules: function(model) {
      model.statadd("Athletics Misc", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Skill Focus (Bluff)"] = new engine.RulesElement({
    name: "Skill Focus (Bluff)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SKILL_FOCUS_(BLUFF)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SKILL_FOCUS_(BLUFF)",
    categories: ["Skill Focus (Bluff)", "ID_INTERNAL_FEAT_SKILL_FOCUS_(BLUFF)"],
    rules: function(model) {
      model.statadd("Bluff Misc", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Skill Focus (Diplomacy)"] = new engine.RulesElement({
    name: "Skill Focus (Diplomacy)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SKILL_FOCUS_(DIPLOMACY)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SKILL_FOCUS_(DIPLOMACY)",
    categories: ["Skill Focus (Diplomacy)", "ID_INTERNAL_FEAT_SKILL_FOCUS_(DIPLOMACY)"],
    rules: function(model) {
      model.statadd("Diplomacy Misc", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Skill Focus (Dungeoneering)"] = new engine.RulesElement({
    name: "Skill Focus (Dungeoneering)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SKILL_FOCUS_(DUNGEONEERING)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SKILL_FOCUS_(DUNGEONEERING)",
    categories: ["Skill Focus (Dungeoneering)", "ID_INTERNAL_FEAT_SKILL_FOCUS_(DUNGEONEERING)"],
    rules: function(model) {
      model.statadd("Dungeoneering Misc", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Skill Focus (Endurance)"] = new engine.RulesElement({
    name: "Skill Focus (Endurance)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SKILL_FOCUS_(ENDURANCE)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SKILL_FOCUS_(ENDURANCE)",
    categories: ["Skill Focus (Endurance)", "ID_INTERNAL_FEAT_SKILL_FOCUS_(ENDURANCE)"],
    rules: function(model) {
      model.statadd("Endurance Misc", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Skill Focus (Heal)"] = new engine.RulesElement({
    name: "Skill Focus (Heal)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SKILL_FOCUS_(HEAL)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SKILL_FOCUS_(HEAL)",
    categories: ["Skill Focus (Heal)", "ID_INTERNAL_FEAT_SKILL_FOCUS_(HEAL)"],
    rules: function(model) {
      model.statadd("Heal Misc", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Skill Focus (History)"] = new engine.RulesElement({
    name: "Skill Focus (History)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SKILL_FOCUS_(HISTORY)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SKILL_FOCUS_(HISTORY)",
    categories: ["Skill Focus (History)", "ID_INTERNAL_FEAT_SKILL_FOCUS_(HISTORY)"],
    rules: function(model) {
      model.statadd("History Misc", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Skill Focus (Insight)"] = new engine.RulesElement({
    name: "Skill Focus (Insight)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SKILL_FOCUS_(INSIGHT)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SKILL_FOCUS_(INSIGHT)",
    categories: ["Skill Focus (Insight)", "ID_INTERNAL_FEAT_SKILL_FOCUS_(INSIGHT)"],
    rules: function(model) {
      model.statadd("Insight Misc", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Skill Focus (Intimidate)"] = new engine.RulesElement({
    name: "Skill Focus (Intimidate)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SKILL_FOCUS_(INTIMIDATE)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SKILL_FOCUS_(INTIMIDATE)",
    categories: ["Skill Focus (Intimidate)", "ID_INTERNAL_FEAT_SKILL_FOCUS_(INTIMIDATE)"],
    rules: function(model) {
      model.statadd("Intimidate Misc", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Skill Focus (Nature)"] = new engine.RulesElement({
    name: "Skill Focus (Nature)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SKILL_FOCUS_(NATURE)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SKILL_FOCUS_(NATURE)",
    categories: ["Skill Focus (Nature)", "ID_INTERNAL_FEAT_SKILL_FOCUS_(NATURE)"],
    rules: function(model) {
      model.statadd("Nature Misc", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Skill Focus (Perception)"] = new engine.RulesElement({
    name: "Skill Focus (Perception)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SKILL_FOCUS_(PERCEPTION)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SKILL_FOCUS_(PERCEPTION)",
    categories: ["Skill Focus (Perception)", "ID_INTERNAL_FEAT_SKILL_FOCUS_(PERCEPTION)"],
    rules: function(model) {
      model.statadd("Perception Misc", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Skill Focus (Religion)"] = new engine.RulesElement({
    name: "Skill Focus (Religion)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SKILL_FOCUS_(RELIGION)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SKILL_FOCUS_(RELIGION)",
    categories: ["Skill Focus (Religion)", "ID_INTERNAL_FEAT_SKILL_FOCUS_(RELIGION)"],
    rules: function(model) {
      model.statadd("Religion Misc", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Skill Focus (Stealth)"] = new engine.RulesElement({
    name: "Skill Focus (Stealth)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SKILL_FOCUS_(STEALTH)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SKILL_FOCUS_(STEALTH)",
    categories: ["Skill Focus (Stealth)", "ID_INTERNAL_FEAT_SKILL_FOCUS_(STEALTH)"],
    rules: function(model) {
      model.statadd("Stealth Misc", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Skill Focus (Streetwise)"] = new engine.RulesElement({
    name: "Skill Focus (Streetwise)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SKILL_FOCUS_(STREETWISE)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SKILL_FOCUS_(STREETWISE)",
    categories: ["Skill Focus (Streetwise)", "ID_INTERNAL_FEAT_SKILL_FOCUS_(STREETWISE)"],
    rules: function(model) {
      model.statadd("Streetwise Misc", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Skill Focus (Thievery)"] = new engine.RulesElement({
    name: "Skill Focus (Thievery)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SKILL_FOCUS_(THIEVERY)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SKILL_FOCUS_(THIEVERY)",
    categories: ["Skill Focus (Thievery)", "ID_INTERNAL_FEAT_SKILL_FOCUS_(THIEVERY)"],
    rules: function(model) {
      model.statadd("Thievery Misc", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Skill Training"] = new engine.RulesElement({
    name: "Skill Training",
    type: "Feat",
    id: "ID_FMP_FEAT_166",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=166",
    categories: ["Skill Training", "ID_FMP_FEAT_166"]
  });
  byID[te.id] = te;
  
  te = Feat["Skill Training (Acrobatics)"] = new engine.RulesElement({
    name: "Skill Training (Acrobatics)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SKILL_TRAINING_(ACROBATICS)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SKILL_TRAINING_(ACROBATICS)",
    categories: ["Skill Training (Acrobatics)", "ID_INTERNAL_FEAT_SKILL_TRAINING_(ACROBATICS)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_SKILL_TRAINING_ACROBATICS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Skill Training (Arcana)"] = new engine.RulesElement({
    name: "Skill Training (Arcana)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SKILL_TRAINING_(ARCANA)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SKILL_TRAINING_(ARCANA)",
    categories: ["Skill Training (Arcana)", "ID_INTERNAL_FEAT_SKILL_TRAINING_(ARCANA)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_SKILL_TRAINING_ARCANA"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Skill Training (Athletics)"] = new engine.RulesElement({
    name: "Skill Training (Athletics)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SKILL_TRAINING_(ATHLETICS)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SKILL_TRAINING_(ATHLETICS)",
    categories: ["Skill Training (Athletics)", "ID_INTERNAL_FEAT_SKILL_TRAINING_(ATHLETICS)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_SKILL_TRAINING_ATHLETICS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Skill Training (Bluff)"] = new engine.RulesElement({
    name: "Skill Training (Bluff)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SKILL_TRAINING_(BLUFF)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SKILL_TRAINING_(BLUFF)",
    categories: ["Skill Training (Bluff)", "ID_INTERNAL_FEAT_SKILL_TRAINING_(BLUFF)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_SKILL_TRAINING_BLUFF"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Skill Training (Diplomacy)"] = new engine.RulesElement({
    name: "Skill Training (Diplomacy)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SKILL_TRAINING_(DIPLOMACY)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SKILL_TRAINING_(DIPLOMACY)",
    categories: ["Skill Training (Diplomacy)", "ID_INTERNAL_FEAT_SKILL_TRAINING_(DIPLOMACY)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_SKILL_TRAINING_DIPLOMACY"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Skill Training (Dungeoneering)"] = new engine.RulesElement({
    name: "Skill Training (Dungeoneering)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SKILL_TRAINING_(DUNGEONEERING)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SKILL_TRAINING_(DUNGEONEERING)",
    categories: ["Skill Training (Dungeoneering)", "ID_INTERNAL_FEAT_SKILL_TRAINING_(DUNGEONEERING)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_SKILL_TRAINING_DUNGEONEERING"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Skill Training (Endurance)"] = new engine.RulesElement({
    name: "Skill Training (Endurance)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SKILL_TRAINING_(ENDURANCE)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SKILL_TRAINING_(ENDURANCE)",
    categories: ["Skill Training (Endurance)", "ID_INTERNAL_FEAT_SKILL_TRAINING_(ENDURANCE)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_SKILL_TRAINING_ENDURANCE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Skill Training (Heal)"] = new engine.RulesElement({
    name: "Skill Training (Heal)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SKILL_TRAINING_(HEAL)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SKILL_TRAINING_(HEAL)",
    categories: ["Skill Training (Heal)", "ID_INTERNAL_FEAT_SKILL_TRAINING_(HEAL)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_SKILL_TRAINING_HEAL"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Skill Training (History)"] = new engine.RulesElement({
    name: "Skill Training (History)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SKILL_TRAINING_(HISTORY)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SKILL_TRAINING_(HISTORY)",
    categories: ["Skill Training (History)", "ID_INTERNAL_FEAT_SKILL_TRAINING_(HISTORY)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_SKILL_TRAINING_HISTORY"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Skill Training (Insight)"] = new engine.RulesElement({
    name: "Skill Training (Insight)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SKILL_TRAINING_(INSIGHT)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SKILL_TRAINING_(INSIGHT)",
    categories: ["Skill Training (Insight)", "ID_INTERNAL_FEAT_SKILL_TRAINING_(INSIGHT)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_SKILL_TRAINING_INSIGHT"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Skill Training (Intimidate)"] = new engine.RulesElement({
    name: "Skill Training (Intimidate)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SKILL_TRAINING_(INTIMIDATE)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SKILL_TRAINING_(INTIMIDATE)",
    categories: ["Skill Training (Intimidate)", "ID_INTERNAL_FEAT_SKILL_TRAINING_(INTIMIDATE)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_SKILL_TRAINING_INTIMIDATE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Skill Training (Nature)"] = new engine.RulesElement({
    name: "Skill Training (Nature)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SKILL_TRAINING_(NATURE)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SKILL_TRAINING_(NATURE)",
    categories: ["Skill Training (Nature)", "ID_INTERNAL_FEAT_SKILL_TRAINING_(NATURE)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_SKILL_TRAINING_NATURE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Skill Training (Perception)"] = new engine.RulesElement({
    name: "Skill Training (Perception)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SKILL_TRAINING_(PERCEPTION)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SKILL_TRAINING_(PERCEPTION)",
    categories: ["Skill Training (Perception)", "ID_INTERNAL_FEAT_SKILL_TRAINING_(PERCEPTION)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_SKILL_TRAINING_PERCEPTION"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Skill Training (Religion)"] = new engine.RulesElement({
    name: "Skill Training (Religion)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SKILL_TRAINING_(RELIGION)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SKILL_TRAINING_(RELIGION)",
    categories: ["Skill Training (Religion)", "ID_INTERNAL_FEAT_SKILL_TRAINING_(RELIGION)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_SKILL_TRAINING_RELIGION"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Skill Training (Stealth)"] = new engine.RulesElement({
    name: "Skill Training (Stealth)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SKILL_TRAINING_(STEALTH)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SKILL_TRAINING_(STEALTH)",
    categories: ["Skill Training (Stealth)", "ID_INTERNAL_FEAT_SKILL_TRAINING_(STEALTH)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_SKILL_TRAINING_STEALTH"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Skill Training (Streetwise)"] = new engine.RulesElement({
    name: "Skill Training (Streetwise)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SKILL_TRAINING_(STREETWISE)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SKILL_TRAINING_(STREETWISE)",
    categories: ["Skill Training (Streetwise)", "ID_INTERNAL_FEAT_SKILL_TRAINING_(STREETWISE)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_SKILL_TRAINING_STREETWISE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Skill Training (Thievery)"] = new engine.RulesElement({
    name: "Skill Training (Thievery)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SKILL_TRAINING_(THIEVERY)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SKILL_TRAINING_(THIEVERY)",
    categories: ["Skill Training (Thievery)", "ID_INTERNAL_FEAT_SKILL_TRAINING_(THIEVERY)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_SKILL_TRAINING_THIEVERY"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Sly Hunter"] = new engine.RulesElement({
    name: "Sly Hunter",
    type: "Feat",
    id: "ID_FMP_FEAT_321",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=321",
    categories: ["Sly Hunter", "ID_FMP_FEAT_321"],
    rules: function(model) {
      model.statadd("bow:damage", function() { /* against any target that has no creatures within 3 squares of it */ return 3; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Sneak of Shadows"] = new engine.RulesElement({
    name: "Sneak of Shadows",
    type: "Feat",
    id: "ID_FMP_FEAT_274",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=274",
    categories: ["Sneak of Shadows", "ID_FMP_FEAT_274", "ID_INTERNAL_CATEGORY_MULTICLASS_ROGUE", "Multiclass Rogue", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_SKILL_TRAINING_THIEVERY"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_322"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_ROGUE"]);
      model.grant(model.elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Soldier of the Faith"] = new engine.RulesElement({
    name: "Soldier of the Faith",
    type: "Feat",
    id: "ID_FMP_FEAT_335",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=335",
    categories: ["Soldier of the Faith", "ID_FMP_FEAT_335", "ID_INTERNAL_CATEGORY_MULTICLASS_PALADIN", "Multiclass Paladin", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.select('Skill Training', 1, {
        filter: function(model, element) { return element.hasCategory("Paladin Class"); }
      });
      model.grant(model.elements.id["ID_FMP_POWER_805"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(HOLY_SYMBOL)"]);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_PALADIN"]);
      model.grant(model.elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Solid Sound"] = new engine.RulesElement({
    name: "Solid Sound",
    type: "Feat",
    id: "ID_FMP_FEAT_322",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=322",
    categories: ["Solid Sound", "ID_FMP_FEAT_322"]
  });
  byID[te.id] = te;
  
  te = Feat["Spear Mastery"] = new engine.RulesElement({
    name: "Spear Mastery",
    type: "Feat",
    id: "ID_FMP_FEAT_253",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=253",
    categories: ["Spear Mastery", "ID_FMP_FEAT_253"]
  });
  byID[te.id] = te;
  
  te = Feat["Spear Push"] = new engine.RulesElement({
    name: "Spear Push",
    type: "Feat",
    id: "ID_FMP_FEAT_242",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=242",
    categories: ["Spear Push", "ID_FMP_FEAT_242"]
  });
  byID[te.id] = te;
  
  te = Feat["Spell Accuracy"] = new engine.RulesElement({
    name: "Spell Accuracy",
    type: "Feat",
    id: "ID_FMP_FEAT_212",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=212",
    categories: ["Spell Accuracy", "ID_FMP_FEAT_212"]
  });
  byID[te.id] = te;
  
  te = Feat["Spell Focus"] = new engine.RulesElement({
    name: "Spell Focus",
    type: "Feat",
    id: "ID_FMP_FEAT_169",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=169",
    categories: ["Spell Focus", "ID_FMP_FEAT_169"]
  });
  byID[te.id] = te;
  
  te = Feat["Steady Shooter"] = new engine.RulesElement({
    name: "Steady Shooter",
    type: "Feat",
    id: "ID_FMP_FEAT_324",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=324",
    categories: ["Steady Shooter", "ID_FMP_FEAT_324"],
    rules: function(model) {
      model.statadd("Crossbow:damage", function() { /* if you haven't moved since the end of your last turn */ return 3; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Student of Battle"] = new engine.RulesElement({
    name: "Student of Battle",
    type: "Feat",
    id: "ID_FMP_FEAT_338",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=338",
    categories: ["Student of Battle", "ID_FMP_FEAT_338", "ID_INTERNAL_CATEGORY_MULTICLASS_WARLORD", "Multiclass Warlord", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.select('Skill Training', 1, {
        filter: function(model, element) { return element.hasCategory("Warlord Class"); }
      });
      model.grant(model.elements.id["ID_FMP_POWER_1590"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_WARLORD"]);
      model.grant(model.elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Student of the Sword"] = new engine.RulesElement({
    name: "Student of the Sword",
    type: "Feat",
    id: "ID_FMP_FEAT_334",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=334",
    categories: ["Student of the Sword", "ID_FMP_FEAT_334", "ID_INTERNAL_CATEGORY_MULTICLASS_FIGHTER", "Multiclass Fighter", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.select('Skill Training', 1, {
        filter: function(model, element) { return element.hasCategory("Fighter Class"); }
      });
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("Student of the Sword"); }
      });
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_FIGHTER"]);
      model.grant(model.elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Sure Climber"] = new engine.RulesElement({
    name: "Sure Climber",
    type: "Feat",
    id: "ID_FMP_FEAT_36",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=36",
    categories: ["Sure Climber", "ID_FMP_FEAT_36"],
    rules: function(model) {
      model.statadd("Athletics Misc", 1, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Surprise Knockdown"] = new engine.RulesElement({
    name: "Surprise Knockdown",
    type: "Feat",
    id: "ID_FMP_FEAT_307",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=307",
    categories: ["Surprise Knockdown", "ID_FMP_FEAT_307"]
  });
  byID[te.id] = te;
  
  te = Feat["Sweeping Flail"] = new engine.RulesElement({
    name: "Sweeping Flail",
    type: "Feat",
    id: "ID_FMP_FEAT_248",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=248",
    categories: ["Sweeping Flail", "ID_FMP_FEAT_248"],
    rules: function(model) {
      model.statadd("Flail:attack", function() { /* against a foe carrying a shield */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Tactical Assault"] = new engine.RulesElement({
    name: "Tactical Assault",
    type: "Feat",
    id: "ID_FMP_FEAT_308",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=308",
    categories: ["Tactical Assault", "ID_FMP_FEAT_308"]
  });
  byID[te.id] = te;
  
  te = Feat["Toughness"] = new engine.RulesElement({
    name: "Toughness",
    type: "Feat",
    id: "ID_FMP_FEAT_171",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=171",
    categories: ["Toughness", "ID_FMP_FEAT_171"],
    rules: function(model) {
      model.statadd("Toughness", 5);
      model.statadd("Hit Points", function() { return model.stat("Toughness"); });
      model.statadd("Toughness", 5);
      model.statadd("Toughness", 5);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Triumphant Attack"] = new engine.RulesElement({
    name: "Triumphant Attack",
    type: "Feat",
    id: "ID_FMP_FEAT_79",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=79",
    categories: ["Triumphant Attack", "ID_FMP_FEAT_79"]
  });
  byID[te.id] = te;
  
  te = Feat["Twofold Curse"] = new engine.RulesElement({
    name: "Twofold Curse",
    type: "Feat",
    id: "ID_FMP_FEAT_325",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=325",
    categories: ["Twofold Curse", "ID_FMP_FEAT_325"]
  });
  byID[te.id] = te;
  
  te = Feat["Two-Weapon Defense"] = new engine.RulesElement({
    name: "Two-Weapon Defense",
    type: "Feat",
    id: "ID_FMP_FEAT_172",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=172",
    categories: ["Two-Weapon Defense", "ID_FMP_FEAT_172"],
    rules: function(model) {
      model.statadd("AC", function() { /* while wielding a melee weapon in each hand */ return 1; }, "Shield");
      model.statadd("Reflex", function() { /* while wielding a melee weapon in each hand */ return 1; }, "Shield");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Two-Weapon Fighting"] = new engine.RulesElement({
    name: "Two-Weapon Fighting",
    type: "Feat",
    id: "ID_FMP_FEAT_173",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=173",
    categories: ["Two-Weapon Fighting", "ID_FMP_FEAT_173"],
    rules: function(model) {
      model.statadd("two-weapon,weapon:damage", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Two-Weapon Flurry"] = new engine.RulesElement({
    name: "Two-Weapon Flurry",
    type: "Feat",
    id: "ID_FMP_FEAT_174",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=174",
    categories: ["Two-Weapon Flurry", "ID_FMP_FEAT_174"]
  });
  byID[te.id] = te;
  
  te = Feat["Uncanny Dodge"] = new engine.RulesElement({
    name: "Uncanny Dodge",
    type: "Feat",
    id: "ID_FMP_FEAT_326",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=326",
    categories: ["Uncanny Dodge", "ID_FMP_FEAT_326"]
  });
  byID[te.id] = te;
  
  te = Feat["Underfoot"] = new engine.RulesElement({
    name: "Underfoot",
    type: "Feat",
    id: "ID_FMP_FEAT_55",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=55",
    categories: ["Underfoot", "ID_FMP_FEAT_55"]
  });
  byID[te.id] = te;
  
  te = Feat["Unfettered Stride"] = new engine.RulesElement({
    name: "Unfettered Stride",
    type: "Feat",
    id: "ID_FMP_FEAT_176",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=176",
    categories: ["Unfettered Stride", "ID_FMP_FEAT_176"]
  });
  byID[te.id] = te;
  
  te = Feat["Warrior of the Wild"] = new engine.RulesElement({
    name: "Warrior of the Wild",
    type: "Feat",
    id: "ID_FMP_FEAT_336",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=336",
    categories: ["Warrior of the Wild", "ID_FMP_FEAT_336", "ID_INTERNAL_CATEGORY_MULTICLASS_RANGER", "Multiclass Ranger", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.select('Skill Training', 1, {
        filter: function(model, element) { return element.hasCategory("Ranger Class"); }
      });
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_602"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_RANGER"]);
      model.grant(model.elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Focus"] = new engine.RulesElement({
    name: "Weapon Focus",
    type: "Feat",
    id: "ID_FMP_FEAT_233",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=233",
    categories: ["Weapon Focus", "ID_FMP_FEAT_233"]
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Focus (Axe)"] = new engine.RulesElement({
    name: "Weapon Focus (Axe)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_FOCUS_(AXE)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_FOCUS_(AXE)",
    categories: ["Weapon Focus (Axe)", "ID_INTERNAL_FEAT_WEAPON_FOCUS_(AXE)"],
    rules: function(model) {
      model.statadd("Weapon Focus (Axe)", 1);
      model.statadd("Weapon Focus (Axe)", 1);
      model.statadd("Weapon Focus (Axe)", 1);
      model.statadd("Axe group,weapon:damage", function() { return model.stat("Weapon Focus (Axe)"); }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Focus (Blowgun)"] = new engine.RulesElement({
    name: "Weapon Focus (Blowgun)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_FOCUS_(BLOWGUN)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_FOCUS_(BLOWGUN)",
    categories: ["Weapon Focus (Blowgun)", "ID_INTERNAL_FEAT_WEAPON_FOCUS_(BLOWGUN)"],
    rules: function(model) {
      model.statadd("Weapon Focus (Blowgun)", 1);
      model.statadd("Weapon Focus (Blowgun)", 1);
      model.statadd("Weapon Focus (Blowgun)", 1);
      model.statadd("Blowgun group,weapon:damage", function() { return model.stat("Weapon Focus (Blowgun)"); }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Focus (Bow)"] = new engine.RulesElement({
    name: "Weapon Focus (Bow)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_FOCUS_(BOW)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_FOCUS_(BOW)",
    categories: ["Weapon Focus (Bow)", "ID_INTERNAL_FEAT_WEAPON_FOCUS_(BOW)"],
    rules: function(model) {
      model.statadd("Weapon Focus (Bow)", 1);
      model.statadd("Weapon Focus (Bow)", 1);
      model.statadd("Weapon Focus (Bow)", 1);
      model.statadd("Bow group,weapon:damage", function() { return model.stat("Weapon Focus (Bow)"); }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Focus (Crossbow)"] = new engine.RulesElement({
    name: "Weapon Focus (Crossbow)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_FOCUS_(CROSSBOW)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_FOCUS_(CROSSBOW)",
    categories: ["Weapon Focus (Crossbow)", "ID_INTERNAL_FEAT_WEAPON_FOCUS_(CROSSBOW)"],
    rules: function(model) {
      model.statadd("Weapon Focus (Crossbow)", 1);
      model.statadd("Weapon Focus (Crossbow)", 1);
      model.statadd("Weapon Focus (Crossbow)", 1);
      model.statadd("Crossbow group,weapon:damage", function() { return model.stat("Weapon Focus (Crossbow)"); }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Focus (Flail)"] = new engine.RulesElement({
    name: "Weapon Focus (Flail)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_FOCUS_(FLAIL)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_FOCUS_(FLAIL)",
    categories: ["Weapon Focus (Flail)", "ID_INTERNAL_FEAT_WEAPON_FOCUS_(FLAIL)"],
    rules: function(model) {
      model.statadd("Weapon Focus (Flail)", 1);
      model.statadd("Weapon Focus (Flail)", 1);
      model.statadd("Weapon Focus (Flail)", 1);
      model.statadd("Flail group,weapon:damage", function() { return model.stat("Weapon Focus (Flail)"); }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Focus (Garrote)"] = new engine.RulesElement({
    name: "Weapon Focus (Garrote)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_FOCUS_(GARROTE)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_FOCUS_(GARROTE)",
    categories: ["Weapon Focus (Garrote)", "ID_INTERNAL_FEAT_WEAPON_FOCUS_(GARROTE)"],
    rules: function(model) {
      model.statadd("Weapon Focus (Garrote)", 1);
      model.statadd("Weapon Focus (Garrote)", 1);
      model.statadd("Weapon Focus (Garrote)", 1);
      model.statadd("Garrote group,weapon:damage", function() { return model.stat("Weapon Focus (Garrote)"); }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Focus (Hammer)"] = new engine.RulesElement({
    name: "Weapon Focus (Hammer)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_FOCUS_(HAMMER)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_FOCUS_(HAMMER)",
    categories: ["Weapon Focus (Hammer)", "ID_INTERNAL_FEAT_WEAPON_FOCUS_(HAMMER)"],
    rules: function(model) {
      model.statadd("Weapon Focus (Hammer)", 1);
      model.statadd("Weapon Focus (Hammer)", 1);
      model.statadd("Weapon Focus (Hammer)", 1);
      model.statadd("hammer group,weapon:damage", function() { return model.stat("Weapon Focus (Hammer)"); }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Focus (Heavy Blade)"] = new engine.RulesElement({
    name: "Weapon Focus (Heavy Blade)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_FOCUS_(HEAVY_BLADE)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_FOCUS_(HEAVY_BLADE)",
    categories: ["Weapon Focus (Heavy Blade)", "ID_INTERNAL_FEAT_WEAPON_FOCUS_(HEAVY_BLADE)"],
    rules: function(model) {
      model.statadd("Weapon Focus (Heavy Blade)", 1);
      model.statadd("Weapon Focus (Heavy Blade)", 1);
      model.statadd("Weapon Focus (Heavy Blade)", 1);
      model.statadd("Heavy Blade group,weapon:damage", function() { return model.stat("Weapon Focus (Heavy Blade)"); }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Focus (Light Blade)"] = new engine.RulesElement({
    name: "Weapon Focus (Light Blade)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_FOCUS_(LIGHT_BLADE)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_FOCUS_(LIGHT_BLADE)",
    categories: ["Weapon Focus (Light Blade)", "ID_INTERNAL_FEAT_WEAPON_FOCUS_(LIGHT_BLADE)"],
    rules: function(model) {
      model.statadd("Weapon Focus (Light Blade)", 1);
      model.statadd("Weapon Focus (Light Blade)", 1);
      model.statadd("Weapon Focus (Light Blade)", 1);
      model.statadd("Light Blade group,weapon:damage", function() { return model.stat("Weapon Focus (Light Blade)"); }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Focus (Mace)"] = new engine.RulesElement({
    name: "Weapon Focus (Mace)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_FOCUS_(MACE)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_FOCUS_(MACE)",
    categories: ["Weapon Focus (Mace)", "ID_INTERNAL_FEAT_WEAPON_FOCUS_(MACE)"],
    rules: function(model) {
      model.statadd("Weapon Focus (Mace)", 1);
      model.statadd("Weapon Focus (Mace)", 1);
      model.statadd("Weapon Focus (Mace)", 1);
      model.statadd("mace group,weapon:damage", function() { return model.stat("Weapon Focus (Mace)"); }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Focus (Pick)"] = new engine.RulesElement({
    name: "Weapon Focus (Pick)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_FOCUS_(PICK)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_FOCUS_(PICK)",
    categories: ["Weapon Focus (Pick)", "ID_INTERNAL_FEAT_WEAPON_FOCUS_(PICK)"],
    rules: function(model) {
      model.statadd("Weapon Focus (Pick)", 1);
      model.statadd("Weapon Focus (Pick)", 1);
      model.statadd("Weapon Focus (Pick)", 1);
      model.statadd("Pick group,weapon:damage", function() { return model.stat("Weapon Focus (Pick)"); }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Focus (Polearm)"] = new engine.RulesElement({
    name: "Weapon Focus (Polearm)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_FOCUS_(POLEARM)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_FOCUS_(POLEARM)",
    categories: ["Weapon Focus (Polearm)", "ID_INTERNAL_FEAT_WEAPON_FOCUS_(POLEARM)"],
    rules: function(model) {
      model.statadd("Weapon Focus (Polearm)", 1);
      model.statadd("Weapon Focus (Polearm)", 1);
      model.statadd("Weapon Focus (Polearm)", 1);
      model.statadd("Polearm group,weapon:damage", function() { return model.stat("Weapon Focus (Polearm)"); }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Focus (Sling)"] = new engine.RulesElement({
    name: "Weapon Focus (Sling)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_FOCUS_(SLING)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_FOCUS_(SLING)",
    categories: ["Weapon Focus (Sling)", "ID_INTERNAL_FEAT_WEAPON_FOCUS_(SLING)"],
    rules: function(model) {
      model.statadd("Weapon Focus (Sling)", 1);
      model.statadd("Weapon Focus (Sling)", 1);
      model.statadd("Weapon Focus (Sling)", 1);
      model.statadd("Sling group,weapon:damage", function() { return model.stat("Weapon Focus (Sling)"); }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Focus (Spear)"] = new engine.RulesElement({
    name: "Weapon Focus (Spear)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_FOCUS_(SPEAR)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_FOCUS_(SPEAR)",
    categories: ["Weapon Focus (Spear)", "ID_INTERNAL_FEAT_WEAPON_FOCUS_(SPEAR)"],
    rules: function(model) {
      model.statadd("Weapon Focus (Spear)", 1);
      model.statadd("Weapon Focus (Spear)", 1);
      model.statadd("Weapon Focus (Spear)", 1);
      model.statadd("Spear group,weapon:damage", function() { return model.stat("Weapon Focus (Spear)"); }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Focus (Staff)"] = new engine.RulesElement({
    name: "Weapon Focus (Staff)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_FOCUS_(STAFF)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_FOCUS_(STAFF)",
    categories: ["Weapon Focus (Staff)", "ID_INTERNAL_FEAT_WEAPON_FOCUS_(STAFF)"],
    rules: function(model) {
      model.statadd("Weapon Focus (Staff)", 1);
      model.statadd("Weapon Focus (Staff)", 1);
      model.statadd("Weapon Focus (Staff)", 1);
      model.statadd("Staff group,weapon:damage", function() { return model.stat("Weapon Focus (Staff)"); }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Focus (Unarmed)"] = new engine.RulesElement({
    name: "Weapon Focus (Unarmed)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_FOCUS_(UNARMED)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_FOCUS_(UNARMED)",
    categories: ["Weapon Focus (Unarmed)", "ID_INTERNAL_FEAT_WEAPON_FOCUS_(UNARMED)"],
    rules: function(model) {
      model.statadd("Weapon Focus (Unarmed)", 1);
      model.statadd("Weapon Focus (Unarmed)", 1);
      model.statadd("Weapon Focus (Unarmed)", 1);
      model.statadd("Unarmed group,weapon:damage", function() { return model.stat("Weapon Focus (Unarmed)"); }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency"] = new engine.RulesElement({
    name: "Weapon Proficiency",
    type: "Feat",
    id: "ID_FMP_FEAT_178",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=178",
    categories: ["Weapon Proficiency", "ID_FMP_FEAT_178"]
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Bastard sword)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Bastard sword)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(BASTARD_SWORD)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(BASTARD_SWORD)",
    categories: ["Weapon Proficiency (Bastard sword)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(BASTARD_SWORD)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(BASTARD_SWORD)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Battleaxe)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Battleaxe)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(BATTLEAXE)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(BATTLEAXE)",
    categories: ["Weapon Proficiency (Battleaxe)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(BATTLEAXE)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(BATTLEAXE)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Blowgun)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Blowgun)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(BLOWGUN)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(BLOWGUN)",
    categories: ["Weapon Proficiency (Blowgun)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(BLOWGUN)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(BLOWGUN)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Bola)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Bola)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(BOLA)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(BOLA)",
    categories: ["Weapon Proficiency (Bola)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(BOLA)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(BOLA)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Broadsword)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Broadsword)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(BROADSWORD)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(BROADSWORD)",
    categories: ["Weapon Proficiency (Broadsword)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(BROADSWORD)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(BROADSWORD)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Club)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Club)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(CLUB)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(CLUB)",
    categories: ["Weapon Proficiency (Club)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(CLUB)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(CLUB)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Craghammer)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Craghammer)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(CRAGHAMMER)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(CRAGHAMMER)",
    categories: ["Weapon Proficiency (Craghammer)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(CRAGHAMMER)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(CRAGHAMMER)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Crossbow)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Crossbow)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(CROSSBOW)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(CROSSBOW)",
    categories: ["Weapon Proficiency (Crossbow)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(CROSSBOW)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(CROSSBOW)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Cutting Wheel)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Cutting Wheel)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(CUTTING_WHEEL)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(CUTTING_WHEEL)",
    categories: ["Weapon Proficiency (Cutting Wheel)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(CUTTING_WHEEL)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(CUTTING_WHEEL)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Dagger)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Dagger)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(DAGGER)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(DAGGER)",
    categories: ["Weapon Proficiency (Dagger)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(DAGGER)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(DAGGER)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Double axe)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Double axe)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(DOUBLE_AXE)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(DOUBLE_AXE)",
    categories: ["Weapon Proficiency (Double axe)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(DOUBLE_AXE)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(DOUBLE_AXE)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Double flail)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Double flail)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(DOUBLE_FLAIL)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(DOUBLE_FLAIL)",
    categories: ["Weapon Proficiency (Double flail)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(DOUBLE_FLAIL)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(DOUBLE_FLAIL)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Double Scimitar)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Double Scimitar)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(DOUBLE_SCIMITAR)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(DOUBLE_SCIMITAR)",
    categories: ["Weapon Proficiency (Double Scimitar)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(DOUBLE_SCIMITAR)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(DOUBLE_SCIMITAR)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Double sword)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Double sword)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(DOUBLE_SWORD)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(DOUBLE_SWORD)",
    categories: ["Weapon Proficiency (Double sword)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(DOUBLE_SWORD)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(DOUBLE_SWORD)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Drow Long Knife)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Drow Long Knife)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(DROW_LONG_KNIFE)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(DROW_LONG_KNIFE)",
    categories: ["Weapon Proficiency (Drow Long Knife)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(DROW_LONG_KNIFE)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(DROW_LONG_KNIFE)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Execution axe)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Execution axe)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(EXECUTION_AXE)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(EXECUTION_AXE)",
    categories: ["Weapon Proficiency (Execution axe)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(EXECUTION_AXE)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(EXECUTION_AXE)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Falchion)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Falchion)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(FALCHION)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(FALCHION)",
    categories: ["Weapon Proficiency (Falchion)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(FALCHION)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(FALCHION)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Flail)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Flail)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(FLAIL)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(FLAIL)",
    categories: ["Weapon Proficiency (Flail)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(FLAIL)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(FLAIL)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Fullblade)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Fullblade)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(FULLBLADE)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(FULLBLADE)",
    categories: ["Weapon Proficiency (Fullblade)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(FULLBLADE)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(FULLBLADE)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Garrote)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Garrote)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(GARROTE)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(GARROTE)",
    categories: ["Weapon Proficiency (Garrote)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(GARROTE)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(GARROTE)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Glaive)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Glaive)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(GLAIVE)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(GLAIVE)",
    categories: ["Weapon Proficiency (Glaive)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(GLAIVE)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(GLAIVE)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Greataxe)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Greataxe)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(GREATAXE)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(GREATAXE)",
    categories: ["Weapon Proficiency (Greataxe)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(GREATAXE)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(GREATAXE)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Greatbow)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Greatbow)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(GREATBOW)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(GREATBOW)",
    categories: ["Weapon Proficiency (Greatbow)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(GREATBOW)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(GREATBOW)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Greatclub)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Greatclub)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(GREATCLUB)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(GREATCLUB)",
    categories: ["Weapon Proficiency (Greatclub)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(GREATCLUB)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(GREATCLUB)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Greatspear)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Greatspear)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(GREATSPEAR)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(GREATSPEAR)",
    categories: ["Weapon Proficiency (Greatspear)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(GREATSPEAR)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(GREATSPEAR)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Greatsword)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Greatsword)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(GREATSWORD)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(GREATSWORD)",
    categories: ["Weapon Proficiency (Greatsword)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(GREATSWORD)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(GREATSWORD)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Halberd)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Halberd)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(HALBERD)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(HALBERD)",
    categories: ["Weapon Proficiency (Halberd)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(HALBERD)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(HALBERD)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Hand Crossbow)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Hand Crossbow)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(HAND_CROSSBOW)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(HAND_CROSSBOW)",
    categories: ["Weapon Proficiency (Hand Crossbow)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(HAND_CROSSBOW)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(HAND_CROSSBOW)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Handaxe)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Handaxe)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(HANDAXE)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(HANDAXE)",
    categories: ["Weapon Proficiency (Handaxe)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(HANDAXE)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(HANDAXE)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Heavy flail)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Heavy flail)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(HEAVY_FLAIL)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(HEAVY_FLAIL)",
    categories: ["Weapon Proficiency (Heavy flail)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(HEAVY_FLAIL)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(HEAVY_FLAIL)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Heavy war pick)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Heavy war pick)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(HEAVY_WAR_PICK)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(HEAVY_WAR_PICK)",
    categories: ["Weapon Proficiency (Heavy war pick)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(HEAVY_WAR_PICK)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(HEAVY_WAR_PICK)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Javelin)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Javelin)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(JAVELIN)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(JAVELIN)",
    categories: ["Weapon Proficiency (Javelin)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(JAVELIN)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(JAVELIN)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Katar)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Katar)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(KATAR)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(KATAR)",
    categories: ["Weapon Proficiency (Katar)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(KATAR)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(KATAR)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Khopesh)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Khopesh)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(KHOPESH)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(KHOPESH)",
    categories: ["Weapon Proficiency (Khopesh)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(KHOPESH)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(KHOPESH)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Kukri)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Kukri)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(KUKRI)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(KUKRI)",
    categories: ["Weapon Proficiency (Kukri)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(KUKRI)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(KUKRI)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Light war pick)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Light war pick)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(LIGHT_WAR_PICK)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(LIGHT_WAR_PICK)",
    categories: ["Weapon Proficiency (Light war pick)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(LIGHT_WAR_PICK)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(LIGHT_WAR_PICK)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Longbow)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Longbow)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(LONGBOW)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(LONGBOW)",
    categories: ["Weapon Proficiency (Longbow)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(LONGBOW)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(LONGBOW)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Longspear)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Longspear)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(LONGSPEAR)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(LONGSPEAR)",
    categories: ["Weapon Proficiency (Longspear)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(LONGSPEAR)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(LONGSPEAR)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Longsword)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Longsword)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(LONGSWORD)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(LONGSWORD)",
    categories: ["Weapon Proficiency (Longsword)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(LONGSWORD)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(LONGSWORD)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Mace)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Mace)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(MACE)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(MACE)",
    categories: ["Weapon Proficiency (Mace)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(MACE)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(MACE)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Maul)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Maul)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(MAUL)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(MAUL)",
    categories: ["Weapon Proficiency (Maul)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(MAUL)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(MAUL)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Mordenkrad)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Mordenkrad)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(MORDENKRAD)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(MORDENKRAD)",
    categories: ["Weapon Proficiency (Mordenkrad)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(MORDENKRAD)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(MORDENKRAD)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Morningstar)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Morningstar)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(MORNINGSTAR)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(MORNINGSTAR)",
    categories: ["Weapon Proficiency (Morningstar)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(MORNINGSTAR)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(MORNINGSTAR)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Net)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Net)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(NET)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(NET)",
    categories: ["Weapon Proficiency (Net)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(NET)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(NET)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Parrying dagger)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Parrying dagger)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(PARRYING_DAGGER)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(PARRYING_DAGGER)",
    categories: ["Weapon Proficiency (Parrying dagger)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(PARRYING_DAGGER)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(PARRYING_DAGGER)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Quarterstaff)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Quarterstaff)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(QUARTERSTAFF)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(QUARTERSTAFF)",
    categories: ["Weapon Proficiency (Quarterstaff)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(QUARTERSTAFF)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(QUARTERSTAFF)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Rapier)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Rapier)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(RAPIER)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(RAPIER)",
    categories: ["Weapon Proficiency (Rapier)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(RAPIER)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(RAPIER)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Repeating crossbow)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Repeating crossbow)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(REPEATING_CROSSBOW)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(REPEATING_CROSSBOW)",
    categories: ["Weapon Proficiency (Repeating crossbow)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(REPEATING_CROSSBOW)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(REPEATING_CROSSBOW)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Scimitar)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Scimitar)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(SCIMITAR)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(SCIMITAR)",
    categories: ["Weapon Proficiency (Scimitar)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(SCIMITAR)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SCIMITAR)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Scourge)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Scourge)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(SCOURGE)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(SCOURGE)",
    categories: ["Weapon Proficiency (Scourge)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(SCOURGE)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SCOURGE)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Scythe)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Scythe)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(SCYTHE)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(SCYTHE)",
    categories: ["Weapon Proficiency (Scythe)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(SCYTHE)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SCYTHE)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Short sword)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Short sword)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(SHORT_SWORD)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(SHORT_SWORD)",
    categories: ["Weapon Proficiency (Short sword)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(SHORT_SWORD)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SHORT_SWORD)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Shortbow)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Shortbow)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(SHORTBOW)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(SHORTBOW)",
    categories: ["Weapon Proficiency (Shortbow)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(SHORTBOW)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SHORTBOW)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Shuriken)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Shuriken)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(SHURIKEN)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(SHURIKEN)",
    categories: ["Weapon Proficiency (Shuriken)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(SHURIKEN)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SHURIKEN)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Sickle)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Sickle)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(SICKLE)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(SICKLE)",
    categories: ["Weapon Proficiency (Sickle)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(SICKLE)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SICKLE)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Sling)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Sling)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(SLING)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(SLING)",
    categories: ["Weapon Proficiency (Sling)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(SLING)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SLING)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Spear)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Spear)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(SPEAR)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(SPEAR)",
    categories: ["Weapon Proficiency (Spear)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(SPEAR)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SPEAR)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Spiked chain)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Spiked chain)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(SPIKED_CHAIN)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(SPIKED_CHAIN)",
    categories: ["Weapon Proficiency (Spiked chain)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(SPIKED_CHAIN)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SPIKED_CHAIN)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Spiked gauntlet)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Spiked gauntlet)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(SPIKED_GAUNTLET)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(SPIKED_GAUNTLET)",
    categories: ["Weapon Proficiency (Spiked gauntlet)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(SPIKED_GAUNTLET)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SPIKED_GAUNTLET)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Spiked shield)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Spiked shield)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(SPIKED_SHIELD)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(SPIKED_SHIELD)",
    categories: ["Weapon Proficiency (Spiked shield)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(SPIKED_SHIELD)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SPIKED_SHIELD)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Superior crossbow)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Superior crossbow)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(SUPERIOR_CROSSBOW)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(SUPERIOR_CROSSBOW)",
    categories: ["Weapon Proficiency (Superior crossbow)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(SUPERIOR_CROSSBOW)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SUPERIOR_CROSSBOW)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Talenta Boomerang)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Talenta Boomerang)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(TALENTA_BOOMERANG)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(TALENTA_BOOMERANG)",
    categories: ["Weapon Proficiency (Talenta Boomerang)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(TALENTA_BOOMERANG)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(TALENTA_BOOMERANG)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Talenta Sharrash)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Talenta Sharrash)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(TALENTA_SHARRASH)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(TALENTA_SHARRASH)",
    categories: ["Weapon Proficiency (Talenta Sharrash)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(TALENTA_SHARRASH)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(TALENTA_SHARRASH)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Talenta Tangat)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Talenta Tangat)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(TALENTA_TANGAT)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(TALENTA_TANGAT)",
    categories: ["Weapon Proficiency (Talenta Tangat)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(TALENTA_TANGAT)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(TALENTA_TANGAT)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Throwing hammer)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Throwing hammer)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(THROWING_HAMMER)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(THROWING_HAMMER)",
    categories: ["Weapon Proficiency (Throwing hammer)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(THROWING_HAMMER)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(THROWING_HAMMER)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Tratnyr)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Tratnyr)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(TRATNYR)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(TRATNYR)",
    categories: ["Weapon Proficiency (Tratnyr)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(TRATNYR)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(TRATNYR)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Trident)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Trident)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(TRIDENT)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(TRIDENT)",
    categories: ["Weapon Proficiency (Trident)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(TRIDENT)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(TRIDENT)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Triple-headed flail)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Triple-headed flail)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(TRIPLE-HEADED_FLAIL)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(TRIPLE-HEADED_FLAIL)",
    categories: ["Weapon Proficiency (Triple-headed flail)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(TRIPLE-HEADED_FLAIL)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(TRIPLE-HEADED_FLAIL)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Urgrosh)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Urgrosh)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(URGROSH)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(URGROSH)",
    categories: ["Weapon Proficiency (Urgrosh)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(URGROSH)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(URGROSH)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (War Pick)"] = new engine.RulesElement({
    name: "Weapon Proficiency (War Pick)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(WAR_PICK)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(WAR_PICK)",
    categories: ["Weapon Proficiency (War Pick)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(WAR_PICK)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(WAR_PICK)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Waraxe)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Waraxe)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(WARAXE)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(WARAXE)",
    categories: ["Weapon Proficiency (Waraxe)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(WARAXE)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(WARAXE)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Warhammer)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Warhammer)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(WARHAMMER)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(WARHAMMER)",
    categories: ["Weapon Proficiency (Warhammer)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(WARHAMMER)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(WARHAMMER)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Whip)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Whip)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(WHIP)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(WHIP)",
    categories: ["Weapon Proficiency (Whip)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(WHIP)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(WHIP)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Xen'drik Boomerang)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Xen'drik Boomerang)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(XEN'DRIK_BOOMERANG)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(XEN'DRIK_BOOMERANG)",
    categories: ["Weapon Proficiency (Xen'drik Boomerang)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(XEN'DRIK_BOOMERANG)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(XEN'DRIK_BOOMERANG)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Proficiency (Zulaat)"] = new engine.RulesElement({
    name: "Weapon Proficiency (Zulaat)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(ZULAAT)",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_WEAPON_PROFICIENCY_(ZULAAT)",
    categories: ["Weapon Proficiency (Zulaat)", "ID_INTERNAL_FEAT_WEAPON_PROFICIENCY_(ZULAAT)"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(ZULAAT)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Wintertouched"] = new engine.RulesElement({
    name: "Wintertouched",
    type: "Feat",
    id: "ID_FMP_FEAT_309",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=309",
    categories: ["Wintertouched", "ID_FMP_FEAT_309"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
