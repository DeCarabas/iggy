define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Feat = types['Feat'] || (types['Feat'] = {});
  te = Feat["Arena Specialist"] = new engine.RulesElement({
    name: "Arena Specialist",
    type: "Feat",
    id: "ID_FMP_FEAT_971",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=971",
    categories: ["Arena Specialist", "ID_FMP_FEAT_971", "ID_INTERNAL_CATEGORY_ARENA_FIGHTING", "Arena Fighting"]
  });
  byID[te.id] = te;
  
  te = Feat["Arkhosian High Style"] = new engine.RulesElement({
    name: "Arkhosian High Style",
    type: "Feat",
    id: "ID_FMP_FEAT_972",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=972",
    categories: ["Arkhosian High Style", "ID_FMP_FEAT_972", "ID_INTERNAL_CATEGORY_ARENA_FIGHTING", "Arena Fighting"]
  });
  byID[te.id] = te;
  
  te = Feat["Bael Turath Born"] = new engine.RulesElement({
    name: "Bael Turath Born",
    type: "Feat",
    id: "ID_FMP_FEAT_748",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=748",
    categories: ["Bael Turath Born", "ID_FMP_FEAT_748"],
    rules: function(model) {
      model.statadd("Bael Turath Born", 8);
      model.statadd("Bael Turath Born", function() { return model.stat("level"); });
      model.statadd("resist:fire", function() { return model.stat("Bael Turath Born"); }, "resist");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Battle-Scarred Veteran"] = new engine.RulesElement({
    name: "Battle-Scarred Veteran",
    type: "Feat",
    id: "ID_FMP_FEAT_973",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=973",
    categories: ["Battle-Scarred Veteran", "ID_FMP_FEAT_973", "ID_INTERNAL_CATEGORY_ARENA_FIGHTING", "Arena Fighting"]
  });
  byID[te.id] = te;
  
  te = Feat["Benighted Birthright"] = new engine.RulesElement({
    name: "Benighted Birthright",
    type: "Feat",
    id: "ID_FMP_FEAT_1230",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1230",
    categories: ["Benighted Birthright", "ID_FMP_FEAT_1230"],
    rules: function(model) {
      model.statadd("resist:necrotic", 5, "resist");
      model.statadd("Saving Throws", function() { /* against ongoing necrotic damage */ return 2; }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Binding Style"] = new engine.RulesElement({
    name: "Binding Style",
    type: "Feat",
    id: "ID_FMP_FEAT_974",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=974",
    categories: ["Binding Style", "ID_FMP_FEAT_974", "ID_INTERNAL_CATEGORY_ARENA_FIGHTING", "Arena Fighting"]
  });
  byID[te.id] = te;
  
  te = Feat["Blade of the Raven Queen"] = new engine.RulesElement({
    name: "Blade of the Raven Queen",
    type: "Feat",
    id: "ID_FMP_FEAT_1248",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1248",
    categories: ["Blade of the Raven Queen", "ID_FMP_FEAT_1248"]
  });
  byID[te.id] = te;
  
  te = Feat["Blighting Power"] = new engine.RulesElement({
    name: "Blighting Power",
    type: "Feat",
    id: "ID_FMP_FEAT_1231",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1231",
    categories: ["Blighting Power", "ID_FMP_FEAT_1231"]
  });
  byID[te.id] = te;
  
  te = Feat["Bloodied Regeneration"] = new engine.RulesElement({
    name: "Bloodied Regeneration",
    type: "Feat",
    id: "ID_FMP_FEAT_1107",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 371",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1107",
    categories: ["Bloodied Regeneration", "ID_FMP_FEAT_1107", "ID_INTERNAL_INTERNAL_VAMPIRE_BLOODLINE", "Vampire Bloodline"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_VAMPIRE_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Bloodthirsty Hunter"] = new engine.RulesElement({
    name: "Bloodthirsty Hunter",
    type: "Feat",
    id: "ID_FMP_FEAT_1232",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1232",
    categories: ["Bloodthirsty Hunter", "ID_FMP_FEAT_1232"]
  });
  byID[te.id] = te;
  
  te = Feat["Bloodthirsty Mien"] = new engine.RulesElement({
    name: "Bloodthirsty Mien",
    type: "Feat",
    id: "ID_FMP_FEAT_941",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=941",
    categories: ["Bloodthirsty Mien", "ID_FMP_FEAT_941"]
  });
  byID[te.id] = te;
  
  te = Feat["Bravura Shroud"] = new engine.RulesElement({
    name: "Bravura Shroud",
    type: "Feat",
    id: "ID_FMP_FEAT_1242",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1242",
    categories: ["Bravura Shroud", "ID_FMP_FEAT_1242"]
  });
  byID[te.id] = te;
  
  te = Feat["Brutal Finish"] = new engine.RulesElement({
    name: "Brutal Finish",
    type: "Feat",
    id: "ID_FMP_FEAT_953",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=953",
    categories: ["Brutal Finish", "ID_FMP_FEAT_953"]
  });
  byID[te.id] = te;
  
  te = Feat["Called Shot"] = new engine.RulesElement({
    name: "Called Shot",
    type: "Feat",
    id: "ID_FMP_FEAT_954",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=954",
    categories: ["Called Shot", "ID_FMP_FEAT_954"],
    rules: function(model) {
      model.statadd("Damage", function() { /* whenever you successfully hit a target against whom you received your Prime Shot bonus */ return 5; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Catspaw Style"] = new engine.RulesElement({
    name: "Catspaw Style",
    type: "Feat",
    id: "ID_FMP_FEAT_975",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=975",
    categories: ["Catspaw Style", "ID_FMP_FEAT_975", "ID_INTERNAL_CATEGORY_ARENA_FIGHTING", "Arena Fighting"]
  });
  byID[te.id] = te;
  
  te = Feat["Crushing Grab"] = new engine.RulesElement({
    name: "Crushing Grab",
    type: "Feat",
    id: "ID_FMP_FEAT_957",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=957",
    categories: ["Crushing Grab", "ID_FMP_FEAT_957"]
  });
  byID[te.id] = te;
  
  te = Feat["Daring Performer"] = new engine.RulesElement({
    name: "Daring Performer",
    type: "Feat",
    id: "ID_FMP_FEAT_976",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=976",
    categories: ["Daring Performer", "ID_FMP_FEAT_976", "ID_INTERNAL_CATEGORY_ARENA_FIGHTING", "Arena Fighting"]
  });
  byID[te.id] = te;
  
  te = Feat["Darkwinter Wild Soul"] = new engine.RulesElement({
    name: "Darkwinter Wild Soul",
    type: "Feat",
    id: "ID_FMP_FEAT_1233",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1233",
    categories: ["Darkwinter Wild Soul", "ID_FMP_FEAT_1233"]
  });
  byID[te.id] = te;
  
  te = Feat["Deathless Warrior"] = new engine.RulesElement({
    name: "Deathless Warrior",
    type: "Feat",
    id: "ID_FMP_FEAT_1249",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1249",
    categories: ["Deathless Warrior", "ID_FMP_FEAT_1249"]
  });
  byID[te.id] = te;
  
  te = Feat["Deathly Disruption"] = new engine.RulesElement({
    name: "Deathly Disruption",
    type: "Feat",
    id: "ID_FMP_FEAT_1235",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1235",
    categories: ["Deathly Disruption", "ID_FMP_FEAT_1235"]
  });
  byID[te.id] = te;
  
  te = Feat["Deathward Aegis"] = new engine.RulesElement({
    name: "Deathward Aegis",
    type: "Feat",
    id: "ID_FMP_FEAT_1234",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1234",
    categories: ["Deathward Aegis", "ID_FMP_FEAT_1234"]
  });
  byID[te.id] = te;
  
  te = Feat["Deft Footwork"] = new engine.RulesElement({
    name: "Deft Footwork",
    type: "Feat",
    id: "ID_FMP_FEAT_942",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=942",
    categories: ["Deft Footwork", "ID_FMP_FEAT_942"]
  });
  byID[te.id] = te;
  
  te = Feat["Deft Hurler Style"] = new engine.RulesElement({
    name: "Deft Hurler Style",
    type: "Feat",
    id: "ID_FMP_FEAT_977",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=977",
    categories: ["Deft Hurler Style", "ID_FMP_FEAT_977", "ID_INTERNAL_CATEGORY_ARENA_FIGHTING", "Arena Fighting"]
  });
  byID[te.id] = te;
  
  te = Feat["Devious Jaunt"] = new engine.RulesElement({
    name: "Devious Jaunt",
    type: "Feat",
    id: "ID_FMP_FEAT_1236",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1236",
    categories: ["Devious Jaunt", "ID_FMP_FEAT_1236"]
  });
  byID[te.id] = te;
  
  te = Feat["Divine Rage"] = new engine.RulesElement({
    name: "Divine Rage",
    type: "Feat",
    id: "ID_FMP_FEAT_943",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=943",
    categories: ["Divine Rage", "ID_FMP_FEAT_943", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5233"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Dominating Gaze"] = new engine.RulesElement({
    name: "Dominating Gaze",
    type: "Feat",
    id: "ID_FMP_FEAT_1108",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 371",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1108",
    categories: ["Dominating Gaze", "ID_FMP_FEAT_1108", "ID_INTERNAL_INTERNAL_VAMPIRE_BLOODLINE", "Vampire Bloodline"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_VAMPIRE_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Double Team"] = new engine.RulesElement({
    name: "Double Team",
    type: "Feat",
    id: "ID_FMP_FEAT_944",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=944",
    categories: ["Double Team", "ID_FMP_FEAT_944"]
  });
  byID[te.id] = te;
  
  te = Feat["Enmity's Dark Vigor"] = new engine.RulesElement({
    name: "Enmity's Dark Vigor",
    type: "Feat",
    id: "ID_FMP_FEAT_1250",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1250",
    categories: ["Enmity's Dark Vigor", "ID_FMP_FEAT_1250"]
  });
  byID[te.id] = te;
  
  te = Feat["Exotic Fighting Style"] = new engine.RulesElement({
    name: "Exotic Fighting Style",
    type: "Feat",
    id: "ID_FMP_FEAT_978",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=978",
    categories: ["Exotic Fighting Style", "ID_FMP_FEAT_978", "ID_INTERNAL_CATEGORY_ARENA_FIGHTING", "Arena Fighting"]
  });
  byID[te.id] = te;
  
  te = Feat["Expert Chainfighter"] = new engine.RulesElement({
    name: "Expert Chainfighter",
    type: "Feat",
    id: "ID_FMP_FEAT_1237",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1237",
    categories: ["Expert Chainfighter", "ID_FMP_FEAT_1237"]
  });
  byID[te.id] = te;
  
  te = Feat["Expert Charioteer"] = new engine.RulesElement({
    name: "Expert Charioteer",
    type: "Feat",
    id: "ID_FMP_FEAT_979",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=979",
    categories: ["Expert Charioteer", "ID_FMP_FEAT_979", "ID_INTERNAL_CATEGORY_ARENA_FIGHTING", "Arena Fighting"]
  });
  byID[te.id] = te;
  
  te = Feat["Fearless Mind"] = new engine.RulesElement({
    name: "Fearless Mind",
    type: "Feat",
    id: "ID_FMP_FEAT_945",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=945",
    categories: ["Fearless Mind", "ID_FMP_FEAT_945"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against charm and fear effects */ return 2; }, "Feat");
      model.statadd("Will Defense", function() { /* against charm and fear effects */ return 1; }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Feign Injury"] = new engine.RulesElement({
    name: "Feign Injury",
    type: "Feat",
    id: "ID_FMP_FEAT_946",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=946",
    categories: ["Feign Injury", "ID_FMP_FEAT_946"]
  });
  byID[te.id] = te;
  
  te = Feat["Fluttering Leaf Style"] = new engine.RulesElement({
    name: "Fluttering Leaf Style",
    type: "Feat",
    id: "ID_FMP_FEAT_980",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=980",
    categories: ["Fluttering Leaf Style", "ID_FMP_FEAT_980", "ID_INTERNAL_CATEGORY_ARENA_FIGHTING", "Arena Fighting"]
  });
  byID[te.id] = te;
  
  te = Feat["Ghostly Rejuvenation"] = new engine.RulesElement({
    name: "Ghostly Rejuvenation",
    type: "Feat",
    id: "ID_FMP_FEAT_1243",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1243",
    categories: ["Ghostly Rejuvenation", "ID_FMP_FEAT_1243"]
  });
  byID[te.id] = te;
  
  te = Feat["Grim Promise"] = new engine.RulesElement({
    name: "Grim Promise",
    type: "Feat",
    id: "ID_FMP_FEAT_947",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=947",
    categories: ["Grim Promise", "ID_FMP_FEAT_947"]
  });
  byID[te.id] = te;
  
  te = Feat["Grudge Style"] = new engine.RulesElement({
    name: "Grudge Style",
    type: "Feat",
    id: "ID_FMP_FEAT_981",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=981",
    categories: ["Grudge Style", "ID_FMP_FEAT_981", "ID_INTERNAL_CATEGORY_ARENA_FIGHTING", "Arena Fighting"]
  });
  byID[te.id] = te;
  
  te = Feat["Hunting Spider Style"] = new engine.RulesElement({
    name: "Hunting Spider Style",
    type: "Feat",
    id: "ID_FMP_FEAT_982",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=982",
    categories: ["Hunting Spider Style", "ID_FMP_FEAT_982", "ID_INTERNAL_CATEGORY_ARENA_FIGHTING", "Arena Fighting"]
  });
  byID[te.id] = te;
  
  te = Feat["Life on the Edge"] = new engine.RulesElement({
    name: "Life on the Edge",
    type: "Feat",
    id: "ID_FMP_FEAT_1238",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1238",
    categories: ["Life on the Edge", "ID_FMP_FEAT_1238"],
    rules: function(model) {
      model.statadd("Action Point", "Life on the Edge:Whenever you spend an action point while you are bloodied, you gain a +2 bonus to all rolls you make during the granted extra action.");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Marked Jaunt"] = new engine.RulesElement({
    name: "Marked Jaunt",
    type: "Feat",
    id: "ID_FMP_FEAT_1244",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1244",
    categories: ["Marked Jaunt", "ID_FMP_FEAT_1244"]
  });
  byID[te.id] = te;
  
  te = Feat["Menacing Brute Style"] = new engine.RulesElement({
    name: "Menacing Brute Style",
    type: "Feat",
    id: "ID_FMP_FEAT_983",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=983",
    categories: ["Menacing Brute Style", "ID_FMP_FEAT_983", "ID_INTERNAL_CATEGORY_ARENA_FIGHTING", "Arena Fighting"]
  });
  byID[te.id] = te;
  
  te = Feat["Mist Form"] = new engine.RulesElement({
    name: "Mist Form",
    type: "Feat",
    id: "ID_FMP_FEAT_1105",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 371",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1105",
    categories: ["Mist Form", "ID_FMP_FEAT_1105", "ID_INTERNAL_INTERNAL_VAMPIRE_BLOODLINE", "Vampire Bloodline"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_VAMPIRE_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Mocking Knave Style"] = new engine.RulesElement({
    name: "Mocking Knave Style",
    type: "Feat",
    id: "ID_FMP_FEAT_984",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=984",
    categories: ["Mocking Knave Style", "ID_FMP_FEAT_984", "ID_INTERNAL_CATEGORY_ARENA_FIGHTING", "Arena Fighting"]
  });
  byID[te.id] = te;
  
  te = Feat["Nerathi Vanguard Style"] = new engine.RulesElement({
    name: "Nerathi Vanguard Style",
    type: "Feat",
    id: "ID_FMP_FEAT_985",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=985",
    categories: ["Nerathi Vanguard Style", "ID_FMP_FEAT_985", "ID_INTERNAL_CATEGORY_ARENA_FIGHTING", "Arena Fighting"]
  });
  byID[te.id] = te;
  
  te = Feat["Night's Sight"] = new engine.RulesElement({
    name: "Night's Sight",
    type: "Feat",
    id: "ID_FMP_FEAT_1106",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 371",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1106",
    categories: ["Night's Sight", "ID_FMP_FEAT_1106", "ID_INTERNAL_INTERNAL_VAMPIRE_BLOODLINE", "Vampire Bloodline"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_VISION_LOW-LIGHT"]);
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_VAMPIRE_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Pin Down"] = new engine.RulesElement({
    name: "Pin Down",
    type: "Feat",
    id: "ID_FMP_FEAT_948",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=948",
    categories: ["Pin Down", "ID_FMP_FEAT_948"]
  });
  byID[te.id] = te;
  
  te = Feat["Reactive Fey Step"] = new engine.RulesElement({
    name: "Reactive Fey Step",
    type: "Feat",
    id: "ID_FMP_FEAT_743",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=743",
    categories: ["Reactive Fey Step", "ID_FMP_FEAT_743"]
  });
  byID[te.id] = te;
  
  te = Feat["Reactive Jaunt"] = new engine.RulesElement({
    name: "Reactive Jaunt",
    type: "Feat",
    id: "ID_FMP_FEAT_1245",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1245",
    categories: ["Reactive Jaunt", "ID_FMP_FEAT_1245"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Reaper's Touch"] = new engine.RulesElement({
    name: "Reaper's Touch",
    type: "Feat",
    id: "ID_FMP_FEAT_1239",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1239",
    categories: ["Reaper's Touch", "ID_FMP_FEAT_1239"]
  });
  byID[te.id] = te;
  
  te = Feat["Sacrifice to Caiphon"] = new engine.RulesElement({
    name: "Sacrifice to Caiphon",
    type: "Feat",
    id: "ID_FMP_FEAT_744",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=744",
    categories: ["Sacrifice to Caiphon", "ID_FMP_FEAT_744"]
  });
  byID[te.id] = te;
  
  te = Feat["Savage Bite"] = new engine.RulesElement({
    name: "Savage Bite",
    type: "Feat",
    id: "ID_FMP_FEAT_1109",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 371",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1109",
    categories: ["Savage Bite", "ID_FMP_FEAT_1109", "ID_INTERNAL_INTERNAL_VAMPIRE_BLOODLINE", "Vampire Bloodline"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_VAMPIRE_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Scent of Blood"] = new engine.RulesElement({
    name: "Scent of Blood",
    type: "Feat",
    id: "ID_FMP_FEAT_1110",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 371",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1110",
    categories: ["Scent of Blood", "ID_FMP_FEAT_1110", "ID_INTERNAL_INTERNAL_VAMPIRE_BLOODLINE", "Vampire Bloodline"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_VAMPIRE_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Sequestering Jaunt"] = new engine.RulesElement({
    name: "Sequestering Jaunt",
    type: "Feat",
    id: "ID_FMP_FEAT_1246",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1246",
    categories: ["Sequestering Jaunt", "ID_FMP_FEAT_1246"]
  });
  byID[te.id] = te;
  
  te = Feat["Serpent Strike Fighting"] = new engine.RulesElement({
    name: "Serpent Strike Fighting",
    type: "Feat",
    id: "ID_FMP_FEAT_955",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=955",
    categories: ["Serpent Strike Fighting", "ID_FMP_FEAT_955"]
  });
  byID[te.id] = te;
  
  te = Feat["Shadar-Kai Beast"] = new engine.RulesElement({
    name: "Shadar-Kai Beast",
    type: "Feat",
    id: "ID_FMP_FEAT_1240",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1240",
    categories: ["Shadar-Kai Beast", "ID_FMP_FEAT_1240"],
    rules: function(model) {
      model.statadd("BEAST.Death Saving Throws", 2);
      model.statadd("BEAST.Saving Throws", function() { /* against the unconscious condition */ return 2; });
      model.statadd("Stealth Misc", 2, "Racial");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Shadowed Aegis"] = new engine.RulesElement({
    name: "Shadowed Aegis",
    type: "Feat",
    id: "ID_FMP_FEAT_1247",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1247",
    categories: ["Shadowed Aegis", "ID_FMP_FEAT_1247"]
  });
  byID[te.id] = te;
  
  te = Feat["Shadow's Eclipse"] = new engine.RulesElement({
    name: "Shadow's Eclipse",
    type: "Feat",
    id: "ID_FMP_FEAT_746",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=746",
    categories: ["Shadow's Eclipse", "ID_FMP_FEAT_746"],
    rules: function(model) {
      model.statadd("Shadow's Eclipse", function() { return model.stat("HALF-LEVEL"); });
      model.statadd("Shadow's Eclipse", 5);
      model.statadd("resist:radiant", function() { return model.stat("Shadow's Eclipse"); }, "resist");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Shield Fighting"] = new engine.RulesElement({
    name: "Shield Fighting",
    type: "Feat",
    id: "ID_FMP_FEAT_949",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=949",
    categories: ["Shield Fighting", "ID_FMP_FEAT_949"]
  });
  byID[te.id] = te;
  
  te = Feat["Sickening Finish"] = new engine.RulesElement({
    name: "Sickening Finish",
    type: "Feat",
    id: "ID_FMP_FEAT_950",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=950",
    categories: ["Sickening Finish", "ID_FMP_FEAT_950"]
  });
  byID[te.id] = te;
  
  te = Feat["Spear and Shield Style"] = new engine.RulesElement({
    name: "Spear and Shield Style",
    type: "Feat",
    id: "ID_FMP_FEAT_986",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=986",
    categories: ["Spear and Shield Style", "ID_FMP_FEAT_986", "ID_INTERNAL_CATEGORY_ARENA_FIGHTING", "Arena Fighting"]
  });
  byID[te.id] = te;
  
  te = Feat["Spiked Chain Expert"] = new engine.RulesElement({
    name: "Spiked Chain Expert",
    type: "Feat",
    id: "ID_FMP_FEAT_1254",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1254",
    categories: ["Spiked Chain Expert", "ID_FMP_FEAT_1254", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Spiked Chain Novice"] = new engine.RulesElement({
    name: "Spiked Chain Novice",
    type: "Feat",
    id: "ID_FMP_FEAT_1253",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1253",
    categories: ["Spiked Chain Novice", "ID_FMP_FEAT_1253", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Spiked Chain Specialist"] = new engine.RulesElement({
    name: "Spiked Chain Specialist",
    type: "Feat",
    id: "ID_FMP_FEAT_1255",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1255",
    categories: ["Spiked Chain Specialist", "ID_FMP_FEAT_1255", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Spiked Chain Training"] = new engine.RulesElement({
    name: "Spiked Chain Training",
    type: "Feat",
    id: "ID_FMP_FEAT_1252",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1252",
    categories: ["Spiked Chain Training", "ID_FMP_FEAT_1252", "ID_INTERNAL_CATEGORY_MULTICLASS_SPIKED_CHAIN", "Multiclass Spiked Chain", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SPIKED_CHAIN)"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(model.elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Spirit Jaunt"] = new engine.RulesElement({
    name: "Spirit Jaunt",
    type: "Feat",
    id: "ID_FMP_FEAT_1251",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1251",
    categories: ["Spirit Jaunt", "ID_FMP_FEAT_1251"]
  });
  byID[te.id] = te;
  
  te = Feat["Spirited Rider"] = new engine.RulesElement({
    name: "Spirited Rider",
    type: "Feat",
    id: "ID_FMP_FEAT_987",
    source: "Dragon Magazine Annual 2009",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=987",
    categories: ["Spirited Rider", "ID_FMP_FEAT_987", "ID_INTERNAL_CATEGORY_ARENA_FIGHTING", "Arena Fighting"]
  });
  byID[te.id] = te;
  
  te = Feat["Staff Fighting"] = new engine.RulesElement({
    name: "Staff Fighting",
    type: "Feat",
    id: "ID_FMP_FEAT_951",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=951",
    categories: ["Staff Fighting", "ID_FMP_FEAT_951"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Starfire Womb"] = new engine.RulesElement({
    name: "Starfire Womb",
    type: "Feat",
    id: "ID_FMP_FEAT_745",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=745",
    categories: ["Starfire Womb", "ID_FMP_FEAT_745"]
  });
  byID[te.id] = te;
  
  te = Feat["Starlight Duelist Style"] = new engine.RulesElement({
    name: "Starlight Duelist Style",
    type: "Feat",
    id: "ID_FMP_FEAT_988",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=988",
    categories: ["Starlight Duelist Style", "ID_FMP_FEAT_988", "ID_INTERNAL_CATEGORY_ARENA_FIGHTING", "Arena Fighting"]
  });
  byID[te.id] = te;
  
  te = Feat["Student of the Athanaeum"] = new engine.RulesElement({
    name: "Student of the Athanaeum",
    type: "Feat",
    id: "ID_FMP_FEAT_749",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=749",
    categories: ["Student of the Athanaeum", "ID_FMP_FEAT_749"]
  });
  byID[te.id] = te;
  
  te = Feat["Swift Blade Style"] = new engine.RulesElement({
    name: "Swift Blade Style",
    type: "Feat",
    id: "ID_FMP_FEAT_989",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=989",
    categories: ["Swift Blade Style", "ID_FMP_FEAT_989", "ID_INTERNAL_CATEGORY_ARENA_FIGHTING", "Arena Fighting"]
  });
  byID[te.id] = te;
  
  te = Feat["Tactical Action"] = new engine.RulesElement({
    name: "Tactical Action",
    type: "Feat",
    id: "ID_FMP_FEAT_958",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=958",
    categories: ["Tactical Action", "ID_FMP_FEAT_958"],
    rules: function(model) {
      model.statadd("ALLY.Action Point", "Tactical Action:Whenever an ally you can see spends an action point to make an extra attack and misses on that attack, that ally can make a basic attack against the same target as a free action");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Trickster's Blade Style"] = new engine.RulesElement({
    name: "Trickster's Blade Style",
    type: "Feat",
    id: "ID_FMP_FEAT_990",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=990",
    categories: ["Trickster's Blade Style", "ID_FMP_FEAT_990", "ID_INTERNAL_CATEGORY_ARENA_FIGHTING", "Arena Fighting"]
  });
  byID[te.id] = te;
  
  te = Feat["True Arrow Style"] = new engine.RulesElement({
    name: "True Arrow Style",
    type: "Feat",
    id: "ID_FMP_FEAT_991",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=991",
    categories: ["True Arrow Style", "ID_FMP_FEAT_991", "ID_INTERNAL_CATEGORY_ARENA_FIGHTING", "Arena Fighting"]
  });
  byID[te.id] = te;
  
  te = Feat["Turathi Assault Style"] = new engine.RulesElement({
    name: "Turathi Assault Style",
    type: "Feat",
    id: "ID_FMP_FEAT_992",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=992",
    categories: ["Turathi Assault Style", "ID_FMP_FEAT_992", "ID_INTERNAL_CATEGORY_ARENA_FIGHTING", "Arena Fighting"]
  });
  byID[te.id] = te;
  
  te = Feat["Twofold Pact"] = new engine.RulesElement({
    name: "Twofold Pact",
    type: "Feat",
    id: "ID_FMP_FEAT_747",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=747",
    categories: ["Twofold Pact", "ID_FMP_FEAT_747"],
    rules: function(model) {
      model.select('class feature', 1, "Twofold Pact", {
        filter: function(model, element) { return element.hasCategory("Eldritch Pact"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Two-Weapon Ambush"] = new engine.RulesElement({
    name: "Two-Weapon Ambush",
    type: "Feat",
    id: "ID_FMP_FEAT_956",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=956",
    categories: ["Two-Weapon Ambush", "ID_FMP_FEAT_956"]
  });
  byID[te.id] = te;
  
  te = Feat["Underhanded Tactics"] = new engine.RulesElement({
    name: "Underhanded Tactics",
    type: "Feat",
    id: "ID_FMP_FEAT_952",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=952",
    categories: ["Underhanded Tactics", "ID_FMP_FEAT_952"]
  });
  byID[te.id] = te;
  
  te = Feat["Untamed Berserker Style"] = new engine.RulesElement({
    name: "Untamed Berserker Style",
    type: "Feat",
    id: "ID_FMP_FEAT_993",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=993",
    categories: ["Untamed Berserker Style", "ID_FMP_FEAT_993", "ID_INTERNAL_CATEGORY_ARENA_FIGHTING", "Arena Fighting"]
  });
  byID[te.id] = te;
  
  te = Feat["Vampire Alacrity"] = new engine.RulesElement({
    name: "Vampire Alacrity",
    type: "Feat",
    id: "ID_FMP_FEAT_1104",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 371",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1104",
    categories: ["Vampire Alacrity", "ID_FMP_FEAT_1104", "ID_INTERNAL_INTERNAL_VAMPIRE_BLOODLINE", "Vampire Bloodline"],
    rules: function(model) {
      model.statadd("Speed", 1, "Feat");
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_VAMPIRE_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Vampiric Heritage"] = new engine.RulesElement({
    name: "Vampiric Heritage",
    type: "Feat",
    id: "ID_FMP_FEAT_1103",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 371",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1103",
    categories: ["Vampiric Heritage", "ID_FMP_FEAT_1103", "ID_INTERNAL_INTERNAL_VAMPIRE_BLOODLINE", "Vampire Bloodline"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_6579"]);
      model.statadd("Perception Misc", function() { /* to sense and recognize dhampyrs and undead */ return 2; });
      model.statadd("Insight Misc", function() { /* to sense and recognize dhampyrs and undead */ return 2; });
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_VAMPIRE_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Warborn Fury Style"] = new engine.RulesElement({
    name: "Warborn Fury Style",
    type: "Feat",
    id: "ID_FMP_FEAT_994",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=994",
    categories: ["Warborn Fury Style", "ID_FMP_FEAT_994", "ID_INTERNAL_CATEGORY_ARENA_FIGHTING", "Arena Fighting"]
  });
  byID[te.id] = te;
  
  te = Feat["Warding Shield Style"] = new engine.RulesElement({
    name: "Warding Shield Style",
    type: "Feat",
    id: "ID_FMP_FEAT_995",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=995",
    categories: ["Warding Shield Style", "ID_FMP_FEAT_995", "ID_INTERNAL_CATEGORY_ARENA_FIGHTING", "Arena Fighting"]
  });
  byID[te.id] = te;
  
  te = Feat["Winter Favored"] = new engine.RulesElement({
    name: "Winter Favored",
    type: "Feat",
    id: "ID_FMP_FEAT_1241",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1241",
    categories: ["Winter Favored", "ID_FMP_FEAT_1241"],
    rules: function(model) {
      model.statadd("resist:cold", 5, "resist");
      model.statadd("Saving Throws", function() { /* against ongoing cold damage */ return 2; }, "Feat");
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
