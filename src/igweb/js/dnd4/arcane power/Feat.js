define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Feat = types['Feat'] || (types['Feat'] = {});
  te = Feat["Accursed Coordination"] = new engine.RulesElement({
    name: "Accursed Coordination",
    type: "Feat",
    id: "ID_FMP_FEAT_1112",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1112",
    categories: ["Accursed Coordination", "ID_FMP_FEAT_1112"]
  });
  byID[te.id] = te;
  
  te = Feat["Arcane Admixture"] = new engine.RulesElement({
    name: "Arcane Admixture",
    type: "Feat",
    id: "ID_FMP_FEAT_1169",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1169",
    categories: ["Arcane Admixture", "ID_FMP_FEAT_1169"],
    rules: function(model) {
      model.select('Power', 1, "Arcane Admixture", {
        filter: function(model, element) { return element.hasCategory("Arcane"); }
      });
      model.select('class feature', 1, "Arcane Admixture", {
        filter: function(model, element) { return element.hasCategory("Arcane Admixture"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Arcane Admixture II"] = new engine.RulesElement({
    name: "Arcane Admixture II",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_ARCANE_ADMIXTURE_II",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=FEAT_ARCANE_ADMIXTURE_II",
    categories: ["Arcane Admixture II", "ID_INTERNAL_FEAT_ARCANE_ADMIXTURE_II"],
    rules: function(model) {
      model.select('Power', 1, "Arcane Admixture II", {
        filter: function(model, element) { return element.hasCategory("Arcane"); }
      });
      model.select('class feature', 1, "Arcane Admixture II", {
        filter: function(model, element) { return element.hasCategory("Arcane Admixture II"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Arcane Admixture III"] = new engine.RulesElement({
    name: "Arcane Admixture III",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_ARCANE_ADMIXTURE_III",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=FEAT_ARCANE_ADMIXTURE_III",
    categories: ["Arcane Admixture III", "ID_INTERNAL_FEAT_ARCANE_ADMIXTURE_III"],
    rules: function(model) {
      model.select('Power', 1, "Arcane Admixture III", {
        filter: function(model, element) { return element.hasCategory("Arcane"); }
      });
      model.select('class feature', 1, "Arcane Admixture III", {
        filter: function(model, element) { return element.hasCategory("Arcane Admixture III"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Arcane Admixture IV"] = new engine.RulesElement({
    name: "Arcane Admixture IV",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_ARCANE_ADMIXTURE_IV",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=FEAT_ARCANE_ADMIXTURE_IV",
    categories: ["Arcane Admixture IV", "ID_INTERNAL_FEAT_ARCANE_ADMIXTURE_IV"],
    rules: function(model) {
      model.select('Power', 1, "Arcane Admixture IV", {
        filter: function(model, element) { return element.hasCategory("Arcane"); }
      });
      model.select('class feature', 1, "Arcane Admixture IV", {
        filter: function(model, element) { return element.hasCategory("Arcane Admixture IV"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Arcane Aegis"] = new engine.RulesElement({
    name: "Arcane Aegis",
    type: "Feat",
    id: "ID_FMP_FEAT_1217",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1217",
    categories: ["Arcane Aegis", "ID_FMP_FEAT_1217", "ID_INTERNAL_CATEGORY_MULTICLASS_SWORDMAGE", "Multiclass Swordmage", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass"],
    rules: function(model) {
      model.select('Power', 1, "Arcane Aegis", {
        filter: function(model, element) { return element.hasCategory("Swordmage Aegis"); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Arcane Familiar"] = new engine.RulesElement({
    name: "Arcane Familiar",
    type: "Feat",
    id: "ID_FMP_FEAT_738",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=738",
    categories: ["Arcane Familiar", "ID_FMP_FEAT_738", "ID_INTERNAL_CATEGORY_FAMILIAR", "Familiar"],
    rules: function(model) {
      model.select('Familiar', 1, "Arcane Familiar");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Arcane Fire"] = new engine.RulesElement({
    name: "Arcane Fire",
    type: "Feat",
    id: "ID_FMP_FEAT_1113",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1113",
    categories: ["Arcane Fire", "ID_FMP_FEAT_1113"]
  });
  byID[te.id] = te;
  
  te = Feat["Arcane Fury"] = new engine.RulesElement({
    name: "Arcane Fury",
    type: "Feat",
    id: "ID_FMP_FEAT_1114",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1114",
    categories: ["Arcane Fury", "ID_FMP_FEAT_1114"]
  });
  byID[te.id] = te;
  
  te = Feat["Arcane Implement Proficiency"] = new engine.RulesElement({
    name: "Arcane Implement Proficiency",
    type: "Feat",
    id: "ID_FMP_FEAT_1115",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1115",
    categories: ["Arcane Implement Proficiency", "ID_FMP_FEAT_1115"],
    rules: function(model) {
      model.select('class feature', 1, "Arcane Implement Proficiency", {
        filter: function(model, element) { return element.hasCategory("Arcane Implement Proficiency"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Arcane Reserves"] = new engine.RulesElement({
    name: "Arcane Reserves",
    type: "Feat",
    id: "ID_FMP_FEAT_1116",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1116",
    categories: ["Arcane Reserves", "ID_FMP_FEAT_1116"]
  });
  byID[te.id] = te;
  
  te = Feat["Arcane Ritualist"] = new engine.RulesElement({
    name: "Arcane Ritualist",
    type: "Feat",
    id: "ID_FMP_FEAT_1170",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1170",
    categories: ["Arcane Ritualist", "ID_FMP_FEAT_1170"]
  });
  byID[te.id] = te;
  
  te = Feat["Bard Implement Expertise"] = new engine.RulesElement({
    name: "Bard Implement Expertise",
    type: "Feat",
    id: "ID_FMP_FEAT_1192",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1192",
    categories: ["Bard Implement Expertise", "ID_FMP_FEAT_1192"]
  });
  byID[te.id] = te;
  
  te = Feat["Bardic Ritualist"] = new engine.RulesElement({
    name: "Bardic Ritualist",
    type: "Feat",
    id: "ID_FMP_FEAT_1218",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1218",
    categories: ["Bardic Ritualist", "ID_FMP_FEAT_1218", "ID_INTERNAL_CATEGORY_MULTICLASS_BARD", "Multiclass Bard", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_SKILL_TRAINING_ARCANA"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_847"]);
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_BARD_IMPLEMENTS"]);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_BARD"]);
      model.grant(model.elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Binding Ensnarement"] = new engine.RulesElement({
    name: "Binding Ensnarement",
    type: "Feat",
    id: "ID_FMP_FEAT_1193",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1193",
    categories: ["Binding Ensnarement", "ID_FMP_FEAT_1193"]
  });
  byID[te.id] = te;
  
  te = Feat["Bonded Familiar"] = new engine.RulesElement({
    name: "Bonded Familiar",
    type: "Feat",
    id: "ID_FMP_FEAT_739",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=739",
    categories: ["Bonded Familiar", "ID_FMP_FEAT_739", "ID_INTERNAL_CATEGORY_FAMILIAR", "Familiar"]
  });
  byID[te.id] = te;
  
  te = Feat["Careful Summoner"] = new engine.RulesElement({
    name: "Careful Summoner",
    type: "Feat",
    id: "ID_FMP_FEAT_677",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=677",
    categories: ["Careful Summoner", "ID_FMP_FEAT_677"]
  });
  byID[te.id] = te;
  
  te = Feat["Charging Aegis"] = new engine.RulesElement({
    name: "Charging Aegis",
    type: "Feat",
    id: "ID_FMP_FEAT_689",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=689",
    categories: ["Charging Aegis", "ID_FMP_FEAT_689"]
  });
  byID[te.id] = te;
  
  te = Feat["Closing Advantage"] = new engine.RulesElement({
    name: "Closing Advantage",
    type: "Feat",
    id: "ID_FMP_FEAT_1118",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1118",
    categories: ["Closing Advantage", "ID_FMP_FEAT_1118"]
  });
  byID[te.id] = te;
  
  te = Feat["Combat Casting"] = new engine.RulesElement({
    name: "Combat Casting",
    type: "Feat",
    id: "ID_FMP_FEAT_1119",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1119",
    categories: ["Combat Casting", "ID_FMP_FEAT_1119"]
  });
  byID[te.id] = te;
  
  te = Feat["Combat Virtuoso"] = new engine.RulesElement({
    name: "Combat Virtuoso",
    type: "Feat",
    id: "ID_FMP_FEAT_1120",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1120",
    categories: ["Combat Virtuoso", "ID_FMP_FEAT_1120"],
    rules: function(model) {
      model.statadd("multiclass:key ability", "cha");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Cosmic Spellfury"] = new engine.RulesElement({
    name: "Cosmic Spellfury",
    type: "Feat",
    id: "ID_FMP_FEAT_1171",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1171",
    categories: ["Cosmic Spellfury", "ID_FMP_FEAT_1171"]
  });
  byID[te.id] = te;
  
  te = Feat["Curse of Doom Ensured"] = new engine.RulesElement({
    name: "Curse of Doom Ensured",
    type: "Feat",
    id: "ID_FMP_FEAT_1195",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1195",
    categories: ["Curse of Doom Ensured", "ID_FMP_FEAT_1195"]
  });
  byID[te.id] = te;
  
  te = Feat["Curse of Io's Blood"] = new engine.RulesElement({
    name: "Curse of Io's Blood",
    type: "Feat",
    id: "ID_FMP_FEAT_1121",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1121",
    categories: ["Curse of Io's Blood", "ID_FMP_FEAT_1121"],
    rules: function(model) {
      model.statadd("Curse of Io's Blood", 1);
      model.statadd("Curse of Io's Blood", function() { return model.stat("Strength modifier"); });
      model.statadd("Warlock's Curse", function() { /* while you are bloodied */ return model.stat("Curse of Io's Blood"); });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Cursed Advantage"] = new engine.RulesElement({
    name: "Cursed Advantage",
    type: "Feat",
    id: "ID_FMP_FEAT_435",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=435",
    categories: ["Cursed Advantage", "ID_FMP_FEAT_435"]
  });
  byID[te.id] = te;
  
  te = Feat["Darkfire Implement"] = new engine.RulesElement({
    name: "Darkfire Implement",
    type: "Feat",
    id: "ID_FMP_FEAT_1122",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1122",
    categories: ["Darkfire Implement", "ID_FMP_FEAT_1122"]
  });
  byID[te.id] = te;
  
  te = Feat["Destructive Wizardry"] = new engine.RulesElement({
    name: "Destructive Wizardry",
    type: "Feat",
    id: "ID_FMP_FEAT_1123",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1123",
    categories: ["Destructive Wizardry", "ID_FMP_FEAT_1123"],
    rules: function(model) {
      model.statadd("Destructive Wizardry", 2);
      model.statadd("Destructive Wizardry", 1);
      model.statadd("Destructive Wizardry", 1);
      model.statadd("arcane,area:damage", function() { /* if you hit two or more creatures */ return model.stat("Destructive Wizardry"); });
      model.statadd("arcane,close:damage", function() { /* if you hit two or more creatures */ return model.stat("Destructive Wizardry"); });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Disheartening Presence"] = new engine.RulesElement({
    name: "Disheartening Presence",
    type: "Feat",
    id: "ID_FMP_FEAT_1172",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1172",
    categories: ["Disheartening Presence", "ID_FMP_FEAT_1172"]
  });
  byID[te.id] = te;
  
  te = Feat["Dooming Action"] = new engine.RulesElement({
    name: "Dooming Action",
    type: "Feat",
    id: "ID_FMP_FEAT_1124",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1124",
    categories: ["Dooming Action", "ID_FMP_FEAT_1124"],
    rules: function(model) {
      model.statadd("Action Point", "Dooming Action:When you spend an action point to take an extra action and you have already dealt your Warlock's Curse extra damage during your current turn, you can deal the extra damage a second time during this turn.");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Draconic Spellcaster"] = new engine.RulesElement({
    name: "Draconic Spellcaster",
    type: "Feat",
    id: "ID_FMP_FEAT_1125",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1125",
    categories: ["Draconic Spellcaster", "ID_FMP_FEAT_1125"],
    rules: function(model) {
      model.statadd("Draconic Spellcaster", 1, "Feat");
      model.statadd("Draconic Spellcaster", 2, "Feat");
      model.statadd("Draconic Spellcaster", 3, "Feat");
      model.statadd("arcane,acid:attack", function() { return model.stat("Draconic Spellcaster"); });
      model.statadd("arcane,cold:attack", function() { return model.stat("Draconic Spellcaster"); });
      model.statadd("arcane,fire:attack", function() { return model.stat("Draconic Spellcaster"); });
      model.statadd("arcane,lightning:attack", function() { return model.stat("Draconic Spellcaster"); });
      model.statadd("arcane,poison:attack", function() { return model.stat("Draconic Spellcaster"); });
      model.statadd("arcane,acid:damage", function() { return model.stat("Draconic Spellcaster"); });
      model.statadd("arcane,cold:damage", function() { return model.stat("Draconic Spellcaster"); });
      model.statadd("arcane,fire:damage", function() { return model.stat("Draconic Spellcaster"); });
      model.statadd("arcane,lightning:damage", function() { return model.stat("Draconic Spellcaster"); });
      model.statadd("arcane,poison:damage", function() { return model.stat("Draconic Spellcaster"); });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Dual Implement Spellcaster"] = new engine.RulesElement({
    name: "Dual Implement Spellcaster",
    type: "Feat",
    id: "ID_FMP_FEAT_1127",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1127",
    categories: ["Dual Implement Spellcaster", "ID_FMP_FEAT_1127"]
  });
  byID[te.id] = te;
  
  te = Feat["Eladrin Sword Wizardry"] = new engine.RulesElement({
    name: "Eladrin Sword Wizardry",
    type: "Feat",
    id: "ID_FMP_FEAT_1128",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1128",
    categories: ["Eladrin Sword Wizardry", "ID_FMP_FEAT_1128"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Eladrin Swordmage Advance"] = new engine.RulesElement({
    name: "Eladrin Swordmage Advance",
    type: "Feat",
    id: "ID_FMP_FEAT_1129",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1129",
    categories: ["Eladrin Swordmage Advance", "ID_FMP_FEAT_1129"]
  });
  byID[te.id] = te;
  
  te = Feat["Elemental Blade Attunement"] = new engine.RulesElement({
    name: "Elemental Blade Attunement",
    type: "Feat",
    id: "ID_FMP_FEAT_1130",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1130",
    categories: ["Elemental Blade Attunement", "ID_FMP_FEAT_1130"],
    rules: function(model) {
      model.statadd("Elemental Blade Attunement", 1);
      model.statadd("Elemental Blade Attunement", 1);
      model.statadd("Elemental Blade Attunement", 1);
      model.statadd("acid,ID_FMP_CLASS_53:damage", function() { return model.stat("Elemental Blade Attunement"); }, "Feat");
      model.statadd("cold,ID_FMP_CLASS_53:damage", function() { return model.stat("Elemental Blade Attunement"); }, "Feat");
      model.statadd("fire,ID_FMP_CLASS_53:damage", function() { return model.stat("Elemental Blade Attunement"); }, "Feat");
      model.statadd("lightning,ID_FMP_CLASS_53:damage", function() { return model.stat("Elemental Blade Attunement"); }, "Feat");
      model.statadd("thunder,ID_FMP_CLASS_53:damage", function() { return model.stat("Elemental Blade Attunement"); }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Elemental Echo"] = new engine.RulesElement({
    name: "Elemental Echo",
    type: "Feat",
    id: "ID_FMP_FEAT_1131",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1131",
    categories: ["Elemental Echo", "ID_FMP_FEAT_1131"]
  });
  byID[te.id] = te;
  
  te = Feat["Elemental Empowerment"] = new engine.RulesElement({
    name: "Elemental Empowerment",
    type: "Feat",
    id: "ID_FMP_FEAT_1132",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1132",
    categories: ["Elemental Empowerment", "ID_FMP_FEAT_1132"],
    rules: function(model) {
      model.statadd("acid,ID_FMP_CLASS_9:damage", function() { return model.stat("Strength modifier"); }, "Elemental Empowerment");
      model.statadd("cold,ID_FMP_CLASS_9:damage", function() { return model.stat("Strength modifier"); }, "Elemental Empowerment");
      model.statadd("fire,ID_FMP_CLASS_9:damage", function() { return model.stat("Strength modifier"); }, "Elemental Empowerment");
      model.statadd("lightning,ID_FMP_CLASS_9:damage", function() { return model.stat("Strength modifier"); }, "Elemental Empowerment");
      model.statadd("thunder,ID_FMP_CLASS_9:damage", function() { return model.stat("Strength modifier"); }, "Elemental Empowerment");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Elven Arcane Precision"] = new engine.RulesElement({
    name: "Elven Arcane Precision",
    type: "Feat",
    id: "ID_FMP_FEAT_715",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=715",
    categories: ["Elven Arcane Precision", "ID_FMP_FEAT_715"]
  });
  byID[te.id] = te;
  
  te = Feat["Empowering Shadows"] = new engine.RulesElement({
    name: "Empowering Shadows",
    type: "Feat",
    id: "ID_FMP_FEAT_1126",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1126",
    categories: ["Empowering Shadows", "ID_FMP_FEAT_1126"]
  });
  byID[te.id] = te;
  
  te = Feat["Enlarge Spell"] = new engine.RulesElement({
    name: "Enlarge Spell",
    type: "Feat",
    id: "ID_FMP_FEAT_1134",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1134",
    categories: ["Enlarge Spell", "ID_FMP_FEAT_1134"]
  });
  byID[te.id] = te;
  
  te = Feat["Ensnaring Flourish"] = new engine.RulesElement({
    name: "Ensnaring Flourish",
    type: "Feat",
    id: "ID_FMP_FEAT_708",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=708",
    categories: ["Ensnaring Flourish", "ID_FMP_FEAT_708"]
  });
  byID[te.id] = te;
  
  te = Feat["Ephemeral Stride"] = new engine.RulesElement({
    name: "Ephemeral Stride",
    type: "Feat",
    id: "ID_FMP_FEAT_1196",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1196",
    categories: ["Ephemeral Stride", "ID_FMP_FEAT_1196"]
  });
  byID[te.id] = te;
  
  te = Feat["Explosive Spellcasting"] = new engine.RulesElement({
    name: "Explosive Spellcasting",
    type: "Feat",
    id: "ID_FMP_FEAT_1197",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1197",
    categories: ["Explosive Spellcasting", "ID_FMP_FEAT_1197"]
  });
  byID[te.id] = te;
  
  te = Feat["Extended Aegis"] = new engine.RulesElement({
    name: "Extended Aegis",
    type: "Feat",
    id: "ID_FMP_FEAT_1198",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1198",
    categories: ["Extended Aegis", "ID_FMP_FEAT_1198"]
  });
  byID[te.id] = te;
  
  te = Feat["Extended Prescience"] = new engine.RulesElement({
    name: "Extended Prescience",
    type: "Feat",
    id: "ID_FMP_FEAT_1135",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1135",
    categories: ["Extended Prescience", "ID_FMP_FEAT_1135"]
  });
  byID[te.id] = te;
  
  te = Feat["Fanged Magic"] = new engine.RulesElement({
    name: "Fanged Magic",
    type: "Feat",
    id: "ID_FMP_FEAT_1136",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1136",
    categories: ["Fanged Magic", "ID_FMP_FEAT_1136"]
  });
  byID[te.id] = te;
  
  te = Feat["Feyborn Charm"] = new engine.RulesElement({
    name: "Feyborn Charm",
    type: "Feat",
    id: "ID_FMP_FEAT_1137",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1137",
    categories: ["Feyborn Charm", "ID_FMP_FEAT_1137"],
    rules: function(model) {
      model.statadd("charm:attack", 1, "Feat");
      model.statadd("charm:attack", 2, "Feat");
      model.statadd("charm:attack", 3, "Feat");
      model.statadd("charm:damage", 1, "Feat");
      model.statadd("charm:damage", 2, "Feat");
      model.statadd("charm:damage", 3, "Feat");
      model.statadd("Bluff Misc", 1, "Feat");
      model.statadd("Diplomacy Misc", 1, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Focused Wizardry"] = new engine.RulesElement({
    name: "Focused Wizardry",
    type: "Feat",
    id: "ID_FMP_FEAT_1199",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1199",
    categories: ["Focused Wizardry", "ID_FMP_FEAT_1199"]
  });
  byID[te.id] = te;
  
  te = Feat["Focusing Spellfury"] = new engine.RulesElement({
    name: "Focusing Spellfury",
    type: "Feat",
    id: "ID_FMP_FEAT_1138",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1138",
    categories: ["Focusing Spellfury", "ID_FMP_FEAT_1138"]
  });
  byID[te.id] = te;
  
  te = Feat["Friendly Deception"] = new engine.RulesElement({
    name: "Friendly Deception",
    type: "Feat",
    id: "ID_FMP_FEAT_1139",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1139",
    categories: ["Friendly Deception", "ID_FMP_FEAT_1139"]
  });
  byID[te.id] = te;
  
  te = Feat["Fury of the Storm"] = new engine.RulesElement({
    name: "Fury of the Storm",
    type: "Feat",
    id: "ID_FMP_FEAT_1200",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1200",
    categories: ["Fury of the Storm", "ID_FMP_FEAT_1200"]
  });
  byID[te.id] = te;
  
  te = Feat["Gnome Phantasmist"] = new engine.RulesElement({
    name: "Gnome Phantasmist",
    type: "Feat",
    id: "ID_FMP_FEAT_1140",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1140",
    categories: ["Gnome Phantasmist", "ID_FMP_FEAT_1140"],
    rules: function(model) {
      model.statadd("illusion:attack", 1, "Feat");
      model.statadd("illusion:attack", 2, "Feat");
      model.statadd("illusion:attack", 3, "Feat");
      model.statadd("illusion:damage", 1, "Feat");
      model.statadd("illusion:damage", 2, "Feat");
      model.statadd("illusion:damage", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Grasping Ensnarement"] = new engine.RulesElement({
    name: "Grasping Ensnarement",
    type: "Feat",
    id: "ID_FMP_FEAT_1141",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1141",
    categories: ["Grasping Ensnarement", "ID_FMP_FEAT_1141"]
  });
  byID[te.id] = te;
  
  te = Feat["Greater Aegis of Shielding"] = new engine.RulesElement({
    name: "Greater Aegis of Shielding",
    type: "Feat",
    id: "ID_FMP_FEAT_687",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=687",
    categories: ["Greater Aegis of Shielding", "ID_FMP_FEAT_687"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Greater Swordmage Warding"] = new engine.RulesElement({
    name: "Greater Swordmage Warding",
    type: "Feat",
    id: "ID_FMP_FEAT_1175",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1175",
    categories: ["Greater Swordmage Warding", "ID_FMP_FEAT_1175"],
    rules: function(model) {
      model.statadd("AC", 1, "Feat");
      model.statadd("Fortitude Defense", 1, "Feat");
      model.statadd("Reflex Defense", 1, "Feat");
      model.statadd("Will Defense", 1, "Feat");
      model.statadd("AC", 2, "Feat");
      model.statadd("Fortitude Defense", 2, "Feat");
      model.statadd("Reflex Defense", 2, "Feat");
      model.statadd("Will Defense", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Healing Song"] = new engine.RulesElement({
    name: "Healing Song",
    type: "Feat",
    id: "ID_FMP_FEAT_1219",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1219",
    categories: ["Healing Song", "ID_FMP_FEAT_1219", "ID_INTERNAL_CATEGORY_MULTICLASS_BARD", "Multiclass Bard", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_699"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_698"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Heart of the Blade"] = new engine.RulesElement({
    name: "Heart of the Blade",
    type: "Feat",
    id: "ID_FMP_FEAT_1220",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1220",
    categories: ["Heart of the Blade", "ID_FMP_FEAT_1220", "ID_INTERNAL_CATEGORY_MULTICLASS_SWORDMAGE", "Multiclass Swordmage", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.select('Skill Training', 1, "Heart of the Blade", {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_SKILL_27") || element.hasCategory("ID_FMP_SKILL_8")); }
      });
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_630"]);
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_SWORDMAGE_IMPLEMENTS"]);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_SWORDMAGE"]);
      model.grant(model.elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Immortal Warding"] = new engine.RulesElement({
    name: "Immortal Warding",
    type: "Feat",
    id: "ID_FMP_FEAT_1142",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1142",
    categories: ["Immortal Warding", "ID_FMP_FEAT_1142"],
    rules: function(model) {
      model.statadd("Astral Resistance", function() { return model.stat("Swordmage Warding"); });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Implement Master"] = new engine.RulesElement({
    name: "Implement Master",
    type: "Feat",
    id: "ID_FMP_FEAT_1221",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1221",
    categories: ["Implement Master", "ID_FMP_FEAT_1221", "ID_INTERNAL_CATEGORY_MULTICLASS_WIZARD", "Multiclass Wizard", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_444"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Improved Orb of Deception"] = new engine.RulesElement({
    name: "Improved Orb of Deception",
    type: "Feat",
    id: "ID_FMP_FEAT_1176",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1176",
    categories: ["Improved Orb of Deception", "ID_FMP_FEAT_1176"]
  });
  byID[te.id] = te;
  
  te = Feat["Improved Orb of Imposition"] = new engine.RulesElement({
    name: "Improved Orb of Imposition",
    type: "Feat",
    id: "ID_FMP_FEAT_1177",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1177",
    categories: ["Improved Orb of Imposition", "ID_FMP_FEAT_1177"]
  });
  byID[te.id] = te;
  
  te = Feat["Improved Staff of Defense"] = new engine.RulesElement({
    name: "Improved Staff of Defense",
    type: "Feat",
    id: "ID_FMP_FEAT_1178",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1178",
    categories: ["Improved Staff of Defense", "ID_FMP_FEAT_1178"],
    rules: function(model) {
      model.statadd("Fortitude Defense", function() { 
        if (false /* TBI: implement:staff */) {
          return 1;
        } else return 0;
       });
      model.statadd("Reflex Defense", function() { 
        if (false /* TBI: implement:staff */) {
          return 1;
        } else return 0;
       });
      model.statadd("Will Defense", function() { 
        if (false /* TBI: implement:staff */) {
          return 1;
        } else return 0;
       });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Improved Swordmage Warding"] = new engine.RulesElement({
    name: "Improved Swordmage Warding",
    type: "Feat",
    id: "ID_FMP_FEAT_1143",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1143",
    categories: ["Improved Swordmage Warding", "ID_FMP_FEAT_1143"],
    rules: function(model) {
      model.statadd("Swordmage Warding", function() { 
        if (!(model.wearing('Armor'))) {
          return 1;
        } else return 0;
       }, "Improved Swordmage Warding");
      model.statadd("Swordmage Warding", function() { 
        if (model.wearing('Armor', ['leather'])) {
          return 1;
        } else return 0;
       }, "Improved Swordmage Warding");
      model.statadd("Swordmage Warding", function() { 
        if (model.wearing('Armor', ['cloth'])) {
          return 1;
        } else return 0;
       }, "Improved Swordmage Warding");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Improved Tome of Binding"] = new engine.RulesElement({
    name: "Improved Tome of Binding",
    type: "Feat",
    id: "ID_FMP_FEAT_1179",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1179",
    categories: ["Improved Tome of Binding", "ID_FMP_FEAT_1179"]
  });
  byID[te.id] = te;
  
  te = Feat["Improved Tome of Readiness"] = new engine.RulesElement({
    name: "Improved Tome of Readiness",
    type: "Feat",
    id: "ID_FMP_FEAT_1180",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1180",
    categories: ["Improved Tome of Readiness", "ID_FMP_FEAT_1180"]
  });
  byID[te.id] = te;
  
  te = Feat["Improved Wand of Accuracy"] = new engine.RulesElement({
    name: "Improved Wand of Accuracy",
    type: "Feat",
    id: "ID_FMP_FEAT_1181",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1181",
    categories: ["Improved Wand of Accuracy", "ID_FMP_FEAT_1181"]
  });
  byID[te.id] = te;
  
  te = Feat["Infernal Clamor"] = new engine.RulesElement({
    name: "Infernal Clamor",
    type: "Feat",
    id: "ID_FMP_FEAT_1144",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1144",
    categories: ["Infernal Clamor", "ID_FMP_FEAT_1144"]
  });
  byID[te.id] = te;
  
  te = Feat["Infuriating Escape"] = new engine.RulesElement({
    name: "Infuriating Escape",
    type: "Feat",
    id: "ID_FMP_FEAT_1145",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1145",
    categories: ["Infuriating Escape", "ID_FMP_FEAT_1145"]
  });
  byID[te.id] = te;
  
  te = Feat["Learned Spellcaster"] = new engine.RulesElement({
    name: "Learned Spellcaster",
    type: "Feat",
    id: "ID_FMP_FEAT_1222",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1222",
    categories: ["Learned Spellcaster", "ID_FMP_FEAT_1222", "ID_INTERNAL_CATEGORY_MULTICLASS_WIZARD", "Multiclass Wizard", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.select('Skill Training', 1, "Learned Spellcaster", {
        filter: function(model, element) { return ((element.hasCategory("ID_FMP_SKILL_2") || element.hasCategory("ID_FMP_SKILL_16")) || element.hasCategory("ID_FMP_SKILL_18")); }
      });
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_683"]);
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_WIZARD_IMPLEMENTS"]);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_WIZARD"]);
      model.grant(model.elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Magic of the Ages"] = new engine.RulesElement({
    name: "Magic of the Ages",
    type: "Feat",
    id: "ID_FMP_FEAT_718",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=718",
    categories: ["Magic of the Ages", "ID_FMP_FEAT_718"]
  });
  byID[te.id] = te;
  
  te = Feat["Magic of the Mists"] = new engine.RulesElement({
    name: "Magic of the Mists",
    type: "Feat",
    id: "ID_FMP_FEAT_719",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=719",
    categories: ["Magic of the Mists", "ID_FMP_FEAT_719"]
  });
  byID[te.id] = te;
  
  te = Feat["Majestic Rescue"] = new engine.RulesElement({
    name: "Majestic Rescue",
    type: "Feat",
    id: "ID_FMP_FEAT_1182",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1182",
    categories: ["Majestic Rescue", "ID_FMP_FEAT_1182"]
  });
  byID[te.id] = te;
  
  te = Feat["Master of the Cosmic Cycle"] = new engine.RulesElement({
    name: "Master of the Cosmic Cycle",
    type: "Feat",
    id: "ID_FMP_FEAT_1201",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1201",
    categories: ["Master of the Cosmic Cycle", "ID_FMP_FEAT_1201"]
  });
  byID[te.id] = te;
  
  te = Feat["Mountain Hammer Spellcasting"] = new engine.RulesElement({
    name: "Mountain Hammer Spellcasting",
    type: "Feat",
    id: "ID_FMP_FEAT_1148",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1148",
    categories: ["Mountain Hammer Spellcasting", "ID_FMP_FEAT_1148"]
  });
  byID[te.id] = te;
  
  te = Feat["Multiclass Mastery"] = new engine.RulesElement({
    name: "Multiclass Mastery",
    type: "Feat",
    id: "ID_FMP_FEAT_1202",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1202",
    categories: ["Multiclass Mastery", "ID_FMP_FEAT_1202"],
    rules: function(model) {
      model.select('Feat', 2, "Multiclass Mastery", {
        filter: function(model, element) { return element.hasCategory("ID_INTERNAL_CATEGORY_MULTICLASS"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Nightmare Wizardry"] = new engine.RulesElement({
    name: "Nightmare Wizardry",
    type: "Feat",
    id: "ID_FMP_FEAT_1203",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1203",
    categories: ["Nightmare Wizardry", "ID_FMP_FEAT_1203"]
  });
  byID[te.id] = te;
  
  te = Feat["Nimble Spellcaster"] = new engine.RulesElement({
    name: "Nimble Spellcaster",
    type: "Feat",
    id: "ID_FMP_FEAT_1149",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1149",
    categories: ["Nimble Spellcaster", "ID_FMP_FEAT_1149"]
  });
  byID[te.id] = te;
  
  te = Feat["Phantom Echoes"] = new engine.RulesElement({
    name: "Phantom Echoes",
    type: "Feat",
    id: "ID_FMP_FEAT_682",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=682",
    categories: ["Phantom Echoes", "ID_FMP_FEAT_682"]
  });
  byID[te.id] = te;
  
  te = Feat["Predatory Magic"] = new engine.RulesElement({
    name: "Predatory Magic",
    type: "Feat",
    id: "ID_FMP_FEAT_724",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=724",
    categories: ["Predatory Magic", "ID_FMP_FEAT_724"]
  });
  byID[te.id] = te;
  
  te = Feat["Prescient Aid"] = new engine.RulesElement({
    name: "Prescient Aid",
    type: "Feat",
    id: "ID_FMP_FEAT_1183",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1183",
    categories: ["Prescient Aid", "ID_FMP_FEAT_1183"]
  });
  byID[te.id] = te;
  
  te = Feat["Prescient Fortification"] = new engine.RulesElement({
    name: "Prescient Fortification",
    type: "Feat",
    id: "ID_FMP_FEAT_1152",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1152",
    categories: ["Prescient Fortification", "ID_FMP_FEAT_1152"]
  });
  byID[te.id] = te;
  
  te = Feat["Prescient Resurgence"] = new engine.RulesElement({
    name: "Prescient Resurgence",
    type: "Feat",
    id: "ID_FMP_FEAT_1204",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1204",
    categories: ["Prescient Resurgence", "ID_FMP_FEAT_1204"],
    rules: function(model) {
      model.statadd("Action Point", "Prescient Resurgence:When you spend an action point to gain an extra action, you also regain the use of your Virtue of Prescience.");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Quickened Spellcasting"] = new engine.RulesElement({
    name: "Quickened Spellcasting",
    type: "Feat",
    id: "ID_FMP_FEAT_1205",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1205",
    categories: ["Quickened Spellcasting", "ID_FMP_FEAT_1205"],
    rules: function(model) {
      model.select('Power', 1, "Quickened Spellcasting", {
        filter: function(model, element) { return (element.hasCategory("Arcane") && element.hasCategory("at-will") && element.hasCategory("standard action")); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Reckless Curse"] = new engine.RulesElement({
    name: "Reckless Curse",
    type: "Feat",
    id: "ID_FMP_FEAT_1153",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1153",
    categories: ["Reckless Curse", "ID_FMP_FEAT_1153"],
    rules: function(model) {
      model.statadd("attack rolls", function() { /* against creatures affected by your Warlock's Curse, and creatures affected by your Warlock's Curse gain a +1 bonus to attack rolls against you */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Relentless Curse"] = new engine.RulesElement({
    name: "Relentless Curse",
    type: "Feat",
    id: "ID_FMP_FEAT_694",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=694",
    categories: ["Relentless Curse", "ID_FMP_FEAT_694"]
  });
  byID[te.id] = te;
  
  te = Feat["Remembered Wizardry"] = new engine.RulesElement({
    name: "Remembered Wizardry",
    type: "Feat",
    id: "ID_FMP_FEAT_1154",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1154",
    categories: ["Remembered Wizardry", "ID_FMP_FEAT_1154"],
    rules: function(model) {
      model.select('Power', 1, "Remembered Wizardry", {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_9") && element.hasCategory("daily") && element.hasCategory("1")); }
      });
      model.select('Power', 1, "Remembered Wizardry", {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_9") && element.hasCategory("daily") && element.hasCategory("5")); }
      });
      model.select('Power', 1, "Remembered Wizardry", {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_9") && element.hasCategory("daily") && element.hasCategory("9")); }
      });
      model.select('Power', 1, "Remembered Wizardry", {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_9") && element.hasCategory("daily") && element.hasCategory("15")); }
      });
      model.select('Power', 1, "Remembered Wizardry", {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_9") && element.hasCategory("daily") && element.hasCategory("19")); }
      });
      model.select('Power', 1, "Remembered Wizardry", {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_9") && element.hasCategory("daily") && element.hasCategory("25")); }
      });
      model.select('Power', 1, "Remembered Wizardry", {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_9") && element.hasCategory("daily") && element.hasCategory("29")); }
      });
      model.select('Power', 1, "Remembered Wizardry", {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_9") && element.hasCategory("utility") && element.hasCategory("2")); }
      });
      model.select('Power', 1, "Remembered Wizardry", {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_9") && element.hasCategory("utility") && element.hasCategory("6")); }
      });
      model.select('Power', 1, "Remembered Wizardry", {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_9") && element.hasCategory("utility") && element.hasCategory("10")); }
      });
      model.select('Power', 1, "Remembered Wizardry", {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_9") && element.hasCategory("utility") && element.hasCategory("16")); }
      });
      model.select('Power', 1, "Remembered Wizardry", {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_9") && element.hasCategory("utility") && element.hasCategory("22")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Rising Spellfury"] = new engine.RulesElement({
    name: "Rising Spellfury",
    type: "Feat",
    id: "ID_FMP_FEAT_1155",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1155",
    categories: ["Rising Spellfury", "ID_FMP_FEAT_1155"]
  });
  byID[te.id] = te;
  
  te = Feat["Risky Aegis"] = new engine.RulesElement({
    name: "Risky Aegis",
    type: "Feat",
    id: "ID_FMP_FEAT_1156",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1156",
    categories: ["Risky Aegis", "ID_FMP_FEAT_1156"]
  });
  byID[te.id] = te;
  
  te = Feat["Rousing Voice"] = new engine.RulesElement({
    name: "Rousing Voice",
    type: "Feat",
    id: "ID_FMP_FEAT_472",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=472",
    categories: ["Rousing Voice", "ID_FMP_FEAT_472"]
  });
  byID[te.id] = te;
  
  te = Feat["Rune-Scribed Soul"] = new engine.RulesElement({
    name: "Rune-Scribed Soul",
    type: "Feat",
    id: "ID_FMP_FEAT_1158",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1158",
    categories: ["Rune-Scribed Soul", "ID_FMP_FEAT_1158"]
  });
  byID[te.id] = te;
  
  te = Feat["Ruthless Spellfury"] = new engine.RulesElement({
    name: "Ruthless Spellfury",
    type: "Feat",
    id: "ID_FMP_FEAT_1206",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1206",
    categories: ["Ruthless Spellfury", "ID_FMP_FEAT_1206"]
  });
  byID[te.id] = te;
  
  te = Feat["Shared Pact"] = new engine.RulesElement({
    name: "Shared Pact",
    type: "Feat",
    id: "ID_FMP_FEAT_676",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=676",
    categories: ["Shared Pact", "ID_FMP_FEAT_676"]
  });
  byID[te.id] = te;
  
  te = Feat["Shared Warding"] = new engine.RulesElement({
    name: "Shared Warding",
    type: "Feat",
    id: "ID_FMP_FEAT_1207",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1207",
    categories: ["Shared Warding", "ID_FMP_FEAT_1207"]
  });
  byID[te.id] = te;
  
  te = Feat["Shielding Familiar"] = new engine.RulesElement({
    name: "Shielding Familiar",
    type: "Feat",
    id: "ID_FMP_FEAT_740",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=740",
    categories: ["Shielding Familiar", "ID_FMP_FEAT_740", "ID_INTERNAL_CATEGORY_FAMILIAR", "Familiar"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Song of Inspiration"] = new engine.RulesElement({
    name: "Song of Inspiration",
    type: "Feat",
    id: "ID_FMP_FEAT_1186",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1186",
    categories: ["Song of Inspiration", "ID_FMP_FEAT_1186"]
  });
  byID[te.id] = te;
  
  te = Feat["Sorcerer Implement Expertise"] = new engine.RulesElement({
    name: "Sorcerer Implement Expertise",
    type: "Feat",
    id: "ID_FMP_FEAT_1208",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1208",
    categories: ["Sorcerer Implement Expertise", "ID_FMP_FEAT_1208"]
  });
  byID[te.id] = te;
  
  te = Feat["Sorcerous Assassin"] = new engine.RulesElement({
    name: "Sorcerous Assassin",
    type: "Feat",
    id: "ID_FMP_FEAT_1159",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1159",
    categories: ["Sorcerous Assassin", "ID_FMP_FEAT_1159"],
    rules: function(model) {
      model.statadd("poison,ID_FMP_CLASS_128:damage", function() { /* when you have combat advantage */ return 2; }, "Feat");
      model.statadd("psychic,ID_FMP_CLASS_128:damage", function() { /* when you have combat advantage */ return 2; }, "Feat");
      model.statadd("poison,ID_FMP_CLASS_128:damage", function() { /* when you have combat advantage */ return 4; }, "Feat");
      model.statadd("psychic,ID_FMP_CLASS_128:damage", function() { /* when you have combat advantage */ return 4; }, "Feat");
      model.statadd("poison,ID_FMP_CLASS_128:damage", function() { /* when you have combat advantage */ return 6; }, "Feat");
      model.statadd("psychic,ID_FMP_CLASS_128:damage", function() { /* when you have combat advantage */ return 6; }, "Feat");
      model.statadd("Stealth Misc", 1, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Sorcerous Power"] = new engine.RulesElement({
    name: "Sorcerous Power",
    type: "Feat",
    id: "ID_FMP_FEAT_1223",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1223",
    categories: ["Sorcerous Power", "ID_FMP_FEAT_1223", "ID_INTERNAL_CATEGORY_MULTICLASS_SORCERER", "Multiclass Sorcerer", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass"],
    rules: function(model) {
      model.statadd("Sorcerous Power", function() { return model.stat("Strength modifier"); }, "_Sorcerous Power");
      model.statadd("Sorcerous Power", function() { return model.stat("Dexterity modifier"); }, "_Sorcerous Power");
      model.statadd("Sorcerous Power", 2);
      model.statadd("arcane:damage", function() { return model.stat("Sorcerous Power"); });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Sorcerous Reserves"] = new engine.RulesElement({
    name: "Sorcerous Reserves",
    type: "Feat",
    id: "ID_FMP_FEAT_1187",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1187",
    categories: ["Sorcerous Reserves", "ID_FMP_FEAT_1187"]
  });
  byID[te.id] = te;
  
  te = Feat["Sorcerous Vision"] = new engine.RulesElement({
    name: "Sorcerous Vision",
    type: "Feat",
    id: "ID_FMP_FEAT_1188",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1188",
    categories: ["Sorcerous Vision", "ID_FMP_FEAT_1188"]
  });
  byID[te.id] = te;
  
  te = Feat["Soul of Sorcery"] = new engine.RulesElement({
    name: "Soul of Sorcery",
    type: "Feat",
    id: "ID_FMP_FEAT_1224",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1224",
    categories: ["Soul of Sorcery", "ID_FMP_FEAT_1224", "ID_INTERNAL_CATEGORY_MULTICLASS_SORCERER", "Multiclass Sorcerer", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.select('class feature', 1, "Soul of Sorcery", {
        filter: function(model, element) { return element.hasCategory("Soul of Sorcery"); }
      });
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_SORCERER_IMPLEMENTS"]);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_SORCERER"]);
      model.grant(model.elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Spellseer Familiar"] = new engine.RulesElement({
    name: "Spellseer Familiar",
    type: "Feat",
    id: "ID_FMP_FEAT_741",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=741",
    categories: ["Spellseer Familiar", "ID_FMP_FEAT_741", "ID_INTERNAL_CATEGORY_FAMILIAR", "Familiar"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Storm Spellfury"] = new engine.RulesElement({
    name: "Storm Spellfury",
    type: "Feat",
    id: "ID_FMP_FEAT_1189",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1189",
    categories: ["Storm Spellfury", "ID_FMP_FEAT_1189"]
  });
  byID[te.id] = te;
  
  te = Feat["Student of Malediction"] = new engine.RulesElement({
    name: "Student of Malediction",
    type: "Feat",
    id: "ID_FMP_FEAT_1225",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1225",
    categories: ["Student of Malediction", "ID_FMP_FEAT_1225", "ID_INTERNAL_CATEGORY_MULTICLASS_WARLOCK", "Multiclass Warlock", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_605"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_WARLOCK_IMPLEMENTS"]);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_WARLOCK"]);
      model.grant(model.elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Student of the Cosmos"] = new engine.RulesElement({
    name: "Student of the Cosmos",
    type: "Feat",
    id: "ID_FMP_FEAT_1160",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1160",
    categories: ["Student of the Cosmos", "ID_FMP_FEAT_1160"]
  });
  byID[te.id] = te;
  
  te = Feat["Supreme Majesty"] = new engine.RulesElement({
    name: "Supreme Majesty",
    type: "Feat",
    id: "ID_FMP_FEAT_1209",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1209",
    categories: ["Supreme Majesty", "ID_FMP_FEAT_1209"]
  });
  byID[te.id] = te;
  
  te = Feat["Tempest Magic"] = new engine.RulesElement({
    name: "Tempest Magic",
    type: "Feat",
    id: "ID_FMP_FEAT_1161",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1161",
    categories: ["Tempest Magic", "ID_FMP_FEAT_1161"],
    rules: function(model) {
      model.statadd("Tempest Magic", 1);
      model.statadd("Tempest Magic", 1);
      model.statadd("Tempest Magic", 1);
      model.statadd("lightning:damage", function() { return model.stat("Tempest Magic"); }, "Feat");
      model.statadd("thunder:damage", function() { return model.stat("Tempest Magic"); }, "Feat");
      model.statadd("lightning:damage", function() { /* while bloodied */ return model.stat("Tempest Magic"); });
      model.statadd("thunder:damage", function() { /* while bloodied */ return model.stat("Tempest Magic"); });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Triggered Chaos"] = new engine.RulesElement({
    name: "Triggered Chaos",
    type: "Feat",
    id: "ID_FMP_FEAT_1162",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1162",
    categories: ["Triggered Chaos", "ID_FMP_FEAT_1162"]
  });
  byID[te.id] = te;
  
  te = Feat["True Dragon's Soul"] = new engine.RulesElement({
    name: "True Dragon's Soul",
    type: "Feat",
    id: "ID_FMP_FEAT_1163",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1163",
    categories: ["True Dragon's Soul", "ID_FMP_FEAT_1163"]
  });
  byID[te.id] = te;
  
  te = Feat["Trusted Spellcasting"] = new engine.RulesElement({
    name: "Trusted Spellcasting",
    type: "Feat",
    id: "ID_FMP_FEAT_1210",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1210",
    categories: ["Trusted Spellcasting", "ID_FMP_FEAT_1210"],
    rules: function(model) {
      model.select('Power', 1, "Trusted Spellcasting", {
        filter: function(model, element) { return (!element.hasCategory("miss") && element.hasCategory("Arcane") && element.hasCategory("encounter")); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Twist the Arcane Fabric"] = new engine.RulesElement({
    name: "Twist the Arcane Fabric",
    type: "Feat",
    id: "ID_FMP_FEAT_714",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=714",
    categories: ["Twist the Arcane Fabric", "ID_FMP_FEAT_714"]
  });
  byID[te.id] = te;
  
  te = Feat["Vengeful Curse"] = new engine.RulesElement({
    name: "Vengeful Curse",
    type: "Feat",
    id: "ID_FMP_FEAT_695",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=695",
    categories: ["Vengeful Curse", "ID_FMP_FEAT_695"]
  });
  byID[te.id] = te;
  
  te = Feat["Vengeful Summoner"] = new engine.RulesElement({
    name: "Vengeful Summoner",
    type: "Feat",
    id: "ID_FMP_FEAT_680",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=680",
    categories: ["Vengeful Summoner", "ID_FMP_FEAT_680"]
  });
  byID[te.id] = te;
  
  te = Feat["Vestige Adept"] = new engine.RulesElement({
    name: "Vestige Adept",
    type: "Feat",
    id: "ID_FMP_FEAT_1166",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1166",
    categories: ["Vestige Adept", "ID_FMP_FEAT_1166"]
  });
  byID[te.id] = te;
  
  te = Feat["Vestige Mastery"] = new engine.RulesElement({
    name: "Vestige Mastery",
    type: "Feat",
    id: "ID_FMP_FEAT_1213",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1213",
    categories: ["Vestige Mastery", "ID_FMP_FEAT_1213"],
    rules: function(model) {
      model.select('Power', 1, "Vestige Mastery", {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_7") && element.hasCategory("daily") && element.hasCategory("Vestige Pact")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Vestige Versatility"] = new engine.RulesElement({
    name: "Vestige Versatility",
    type: "Feat",
    id: "ID_FMP_FEAT_1190",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1190",
    categories: ["Vestige Versatility", "ID_FMP_FEAT_1190"]
  });
  byID[te.id] = te;
  
  te = Feat["Vigorous Assault"] = new engine.RulesElement({
    name: "Vigorous Assault",
    type: "Feat",
    id: "ID_FMP_FEAT_1191",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1191",
    categories: ["Vigorous Assault", "ID_FMP_FEAT_1191"]
  });
  byID[te.id] = te;
  
  te = Feat["Walker in Gloom"] = new engine.RulesElement({
    name: "Walker in Gloom",
    type: "Feat",
    id: "ID_FMP_FEAT_1226",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1226",
    categories: ["Walker in Gloom", "ID_FMP_FEAT_1226", "ID_INTERNAL_CATEGORY_MULTICLASS_WARLOCK", "Multiclass Warlock", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_604"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Warding Curse"] = new engine.RulesElement({
    name: "Warding Curse",
    type: "Feat",
    id: "ID_FMP_FEAT_550",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=550",
    categories: ["Warding Curse", "ID_FMP_FEAT_550"],
    rules: function(model) {
      model.statadd("AC", function() { /* against any creature currently affected by your Warlock's Curse */ return 2; });
      model.statadd("Fortitude Defense", function() { /* against any creature currently affected by your Warlock's Curse */ return 2; });
      model.statadd("Reflex Defense", function() { /* against any creature currently affected by your Warlock's Curse */ return 2; });
      model.statadd("Will Defense", function() { /* against any creature currently affected by your Warlock's Curse */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Warding Soul"] = new engine.RulesElement({
    name: "Warding Soul",
    type: "Feat",
    id: "ID_FMP_FEAT_1167",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1167",
    categories: ["Warding Soul", "ID_FMP_FEAT_1167"]
  });
  byID[te.id] = te;
  
  te = Feat["Warlock Implement Expertise"] = new engine.RulesElement({
    name: "Warlock Implement Expertise",
    type: "Feat",
    id: "ID_FMP_FEAT_1215",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1215",
    categories: ["Warlock Implement Expertise", "ID_FMP_FEAT_1215"]
  });
  byID[te.id] = te;
  
  te = Feat["Wizard Implement Expertise"] = new engine.RulesElement({
    name: "Wizard Implement Expertise",
    type: "Feat",
    id: "ID_FMP_FEAT_1216",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1216",
    categories: ["Wizard Implement Expertise", "ID_FMP_FEAT_1216"]
  });
  byID[te.id] = te;
  
  te = Feat["Wrathful Magic"] = new engine.RulesElement({
    name: "Wrathful Magic",
    type: "Feat",
    id: "ID_FMP_FEAT_717",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=717",
    categories: ["Wrathful Magic", "ID_FMP_FEAT_717"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
