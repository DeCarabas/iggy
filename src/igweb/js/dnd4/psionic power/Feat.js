(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Feat = types['Feat'] || (types['Feat'] = {});
  te = Feat["Aberrant Sight"] = new RulesElement({
    name: "Aberrant Sight",
    type: "Feat",
    id: "ID_FMP_FEAT_3406",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3406",
    categories: ["Aberrant Sight", "ID_FMP_FEAT_3406", "ID_INTERNAL_INTERNAL_FOULBORN_BLOODLINE", "Foulborn Bloodline"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_VISION_DARKVISION"]);
      model.grant(elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(elements.id["ID_INTERNAL_INTERNAL_FOULBORN_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Accursed Revelation"] = new RulesElement({
    name: "Accursed Revelation",
    type: "Feat",
    id: "ID_FMP_FEAT_3407",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3407",
    categories: ["Accursed Revelation", "ID_FMP_FEAT_3407", "ID_INTERNAL_INTERNAL_FOULBORN_BLOODLINE", "Foulborn Bloodline"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(elements.id["ID_INTERNAL_INTERNAL_FOULBORN_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Aggressive Construction"] = new RulesElement({
    name: "Aggressive Construction",
    type: "Feat",
    id: "ID_FMP_FEAT_3369",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3369",
    categories: ["Aggressive Construction", "ID_FMP_FEAT_3369"]
  });
  byID[te.id] = te;
  
  te = Feat["Anchoring Push"] = new RulesElement({
    name: "Anchoring Push",
    type: "Feat",
    id: "ID_FMP_FEAT_3330",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3330",
    categories: ["Anchoring Push", "ID_FMP_FEAT_3330"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Autohypnosis"] = new RulesElement({
    name: "Autohypnosis",
    type: "Feat",
    id: "ID_FMP_FEAT_3274",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3274",
    categories: ["Autohypnosis", "ID_FMP_FEAT_3274"],
    rules: function(model) {
      model.statadd("Healing Surges", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Awakened Potential"] = new RulesElement({
    name: "Awakened Potential",
    type: "Feat",
    id: "ID_FMP_FEAT_3389",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3389",
    categories: ["Awakened Potential", "ID_FMP_FEAT_3389", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1812"]);
      model.statadd("Power Points", 1);
      model.statadd("Power Points", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Battle Psion"] = new RulesElement({
    name: "Battle Psion",
    type: "Feat",
    id: "ID_FMP_FEAT_3331",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3331",
    categories: ["Battle Psion", "ID_FMP_FEAT_3331"],
    rules: function(model) {
      model.statadd("Battle Psion", 2);
      model.statadd("psion,at-will,force:damage", function() { return model.stat("Battle Psion"); }, "Feat");
      model.statadd("psion,at-will,psychic:damage", function() { return model.stat("Battle Psion"); }, "Feat");
      model.statadd("Battle Psion", function() { /* while you have no power points remaining */ return 1; });
      model.statadd("Battle Psion", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Battlemind Menace"] = new RulesElement({
    name: "Battlemind Menace",
    type: "Feat",
    id: "ID_FMP_FEAT_3370",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3370",
    categories: ["Battlemind Menace", "ID_FMP_FEAT_3370"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Befuddling Thoughts"] = new RulesElement({
    name: "Befuddling Thoughts",
    type: "Feat",
    id: "ID_FMP_FEAT_3275",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3275",
    categories: ["Befuddling Thoughts", "ID_FMP_FEAT_3275"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Beguiling Torment"] = new RulesElement({
    name: "Beguiling Torment",
    type: "Feat",
    id: "ID_FMP_FEAT_3276",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3276",
    categories: ["Beguiling Torment", "ID_FMP_FEAT_3276", "ID_INTERNAL_CATEGORY_AUGMENT", "Augment"]
  });
  byID[te.id] = te;
  
  te = Feat["Bloodied Concentration"] = new RulesElement({
    name: "Bloodied Concentration",
    type: "Feat",
    id: "ID_FMP_FEAT_3277",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3277",
    categories: ["Bloodied Concentration", "ID_FMP_FEAT_3277"],
    rules: function(model) {
      model.statadd("psion,at-will:attack", function() { /* while you are bloodied, if augmented */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Bloodied Enmity"] = new RulesElement({
    name: "Bloodied Enmity",
    type: "Feat",
    id: "ID_FMP_FEAT_3278",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3278",
    categories: ["Bloodied Enmity", "ID_FMP_FEAT_3278"]
  });
  byID[te.id] = te;
  
  te = Feat["Bloodied Horror"] = new RulesElement({
    name: "Bloodied Horror",
    type: "Feat",
    id: "ID_FMP_FEAT_3412",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3412",
    categories: ["Bloodied Horror", "ID_FMP_FEAT_3412", "ID_INTERNAL_INTERNAL_FOULBORN_BLOODLINE", "Foulborn Bloodline"],
    rules: function(model) {
      model.statadd("fear:attack", function() { /* while you are bloodied */ return 1; });
      model.grant(elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(elements.id["ID_INTERNAL_INTERNAL_FOULBORN_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Blood's Passion"] = new RulesElement({
    name: "Blood's Passion",
    type: "Feat",
    id: "ID_FMP_FEAT_3390",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3390",
    categories: ["Blood's Passion", "ID_FMP_FEAT_3390", "ID_INTERNAL_CATEGORY_MULTICLASS_ARDENT", "Multiclass Ardent", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.select('Power', 1, {
        filter: function(model, element) { return ((element.hasCategory("ID_FMP_POWER_10272") || element.hasCategory("ID_FMP_POWER_11060")) || element.hasCategory("ID_FMP_POWER_12931")); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(elements.id["ID_INTERNAL_INTERNAL_PSIONIC_SECOND_CLASS"]);
      model.grant(elements.id["ID_INTERNAL_COUNTSASCLASS_ARDENT"]);
      model.grant(elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Blurred Speed"] = new RulesElement({
    name: "Blurred Speed",
    type: "Feat",
    id: "ID_FMP_FEAT_3279",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3279",
    categories: ["Blurred Speed", "ID_FMP_FEAT_3279"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Blurring Speed"] = new RulesElement({
    name: "Blurring Speed",
    type: "Feat",
    id: "ID_FMP_FEAT_3333",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3333",
    categories: ["Blurring Speed", "ID_FMP_FEAT_3333"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Body and Mind"] = new RulesElement({
    name: "Body and Mind",
    type: "Feat",
    id: "ID_FMP_FEAT_3332",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3332",
    categories: ["Body and Mind", "ID_FMP_FEAT_3332"],
    rules: function(model) {
      model.statadd("AC", function() { /* while the fragment conjured by your shaped consciousness is within 5 squares of you */ return 1; });
      model.statadd("Fortitude Defense", function() { /* while the fragment conjured by your shaped consciousness is within 5 squares of you */ return 1; });
      model.statadd("Reflex Defense", function() { /* while the fragment conjured by your shaped consciousness is within 5 squares of you */ return 1; });
      model.statadd("Will Defense", function() { /* while the fragment conjured by your shaped consciousness is within 5 squares of you */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Body Fuel"] = new RulesElement({
    name: "Body Fuel",
    type: "Feat",
    id: "ID_FMP_FEAT_3408",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3408",
    categories: ["Body Fuel", "ID_FMP_FEAT_3408", "ID_INTERNAL_INTERNAL_ELAN_BLOODLINE", "Elan Bloodline"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(elements.id["ID_INTERNAL_INTERNAL_ELAN_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Bolstering Spike"] = new RulesElement({
    name: "Bolstering Spike",
    type: "Feat",
    id: "ID_FMP_FEAT_3280",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3280",
    categories: ["Bolstering Spike", "ID_FMP_FEAT_3280"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Bolstering Wind"] = new RulesElement({
    name: "Bolstering Wind",
    type: "Feat",
    id: "ID_FMP_FEAT_3334",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3334",
    categories: ["Bolstering Wind", "ID_FMP_FEAT_3334"]
  });
  byID[te.id] = te;
  
  te = Feat["Boon of the Made"] = new RulesElement({
    name: "Boon of the Made",
    type: "Feat",
    id: "ID_FMP_FEAT_3397",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3397",
    categories: ["Boon of the Made", "ID_FMP_FEAT_3397", "ID_INTERNAL_INTERNAL_ELAN_BLOODLINE", "Elan Bloodline"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(elements.id["ID_INTERNAL_INTERNAL_ELAN_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Boundless Enthusiasm"] = new RulesElement({
    name: "Boundless Enthusiasm",
    type: "Feat",
    id: "ID_FMP_FEAT_3371",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3371",
    categories: ["Boundless Enthusiasm", "ID_FMP_FEAT_3371"]
  });
  byID[te.id] = te;
  
  te = Feat["Brimming Wrath"] = new RulesElement({
    name: "Brimming Wrath",
    type: "Feat",
    id: "ID_FMP_FEAT_3281",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3281",
    categories: ["Brimming Wrath", "ID_FMP_FEAT_3281"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Centered Intuition"] = new RulesElement({
    name: "Centered Intuition",
    type: "Feat",
    id: "ID_FMP_FEAT_3335",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3335",
    categories: ["Centered Intuition", "ID_FMP_FEAT_3335"]
  });
  byID[te.id] = te;
  
  te = Feat["Close the Gap"] = new RulesElement({
    name: "Close the Gap",
    type: "Feat",
    id: "ID_FMP_FEAT_3372",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3372",
    categories: ["Close the Gap", "ID_FMP_FEAT_3372"]
  });
  byID[te.id] = te;
  
  te = Feat["Confounding Technique"] = new RulesElement({
    name: "Confounding Technique",
    type: "Feat",
    id: "ID_FMP_FEAT_3336",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3336",
    categories: ["Confounding Technique", "ID_FMP_FEAT_3336"]
  });
  byID[te.id] = te;
  
  te = Feat["Confusing Distraction"] = new RulesElement({
    name: "Confusing Distraction",
    type: "Feat",
    id: "ID_FMP_FEAT_3337",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3337",
    categories: ["Confusing Distraction", "ID_FMP_FEAT_3337"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Corrosive Thoughts"] = new RulesElement({
    name: "Corrosive Thoughts",
    type: "Feat",
    id: "ID_FMP_FEAT_3338",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3338",
    categories: ["Corrosive Thoughts", "ID_FMP_FEAT_3338"]
  });
  byID[te.id] = te;
  
  te = Feat["Crack the Mountain"] = new RulesElement({
    name: "Crack the Mountain",
    type: "Feat",
    id: "ID_FMP_FEAT_3282",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3282",
    categories: ["Crack the Mountain", "ID_FMP_FEAT_3282"]
  });
  byID[te.id] = te;
  
  te = Feat["Critical Understanding"] = new RulesElement({
    name: "Critical Understanding",
    type: "Feat",
    id: "ID_FMP_FEAT_3373",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3373",
    categories: ["Critical Understanding", "ID_FMP_FEAT_3373"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Dazing Fist"] = new RulesElement({
    name: "Dazing Fist",
    type: "Feat",
    id: "ID_FMP_FEAT_3339",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3339",
    categories: ["Dazing Fist", "ID_FMP_FEAT_3339"]
  });
  byID[te.id] = te;
  
  te = Feat["Deft Eruption"] = new RulesElement({
    name: "Deft Eruption",
    type: "Feat",
    id: "ID_FMP_FEAT_3283",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3283",
    categories: ["Deft Eruption", "ID_FMP_FEAT_3283"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Diverse Focus"] = new RulesElement({
    name: "Diverse Focus",
    type: "Feat",
    id: "ID_FMP_FEAT_3398",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3398",
    categories: ["Diverse Focus", "ID_FMP_FEAT_3398", "ID_INTERNAL_INTERNAL_ELAN_BLOODLINE", "Elan Bloodline"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("ID_FMP_FEAT_3398"); }
      });
      model.grant(elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(elements.id["ID_INTERNAL_INTERNAL_ELAN_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Double Scrutiny"] = new RulesElement({
    name: "Double Scrutiny",
    type: "Feat",
    id: "ID_FMP_FEAT_3284",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3284",
    categories: ["Double Scrutiny", "ID_FMP_FEAT_3284"],
    rules: function(model) {
      model.statadd("Insight Misc", function() { /* while the fragment conjured by your shaped consciousness is within 5 squares of you */ return 3; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Dragon's Grasp"] = new RulesElement({
    name: "Dragon's Grasp",
    type: "Feat",
    id: "ID_FMP_FEAT_3374",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3374",
    categories: ["Dragon's Grasp", "ID_FMP_FEAT_3374"]
  });
  byID[te.id] = te;
  
  te = Feat["Driving Rain"] = new RulesElement({
    name: "Driving Rain",
    type: "Feat",
    id: "ID_FMP_FEAT_3340",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3340",
    categories: ["Driving Rain", "ID_FMP_FEAT_3340"]
  });
  byID[te.id] = te;
  
  te = Feat["Elan Heritage"] = new RulesElement({
    name: "Elan Heritage",
    type: "Feat",
    id: "ID_FMP_FEAT_3395",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3395",
    categories: ["Elan Heritage", "ID_FMP_FEAT_3395", "ID_INTERNAL_INTERNAL_ELAN_BLOODLINE", "Elan Bloodline"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_VISION_TELEPATHY"]);
      model.grant(elements.id["ID_FMP_POWER_13417"]);
      model.grant(elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(elements.id["ID_INTERNAL_INTERNAL_ELAN_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Elan Mental Onslaught"] = new RulesElement({
    name: "Elan Mental Onslaught",
    type: "Feat",
    id: "ID_FMP_FEAT_3409",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3409",
    categories: ["Elan Mental Onslaught", "ID_FMP_FEAT_3409", "ID_INTERNAL_INTERNAL_ELAN_BLOODLINE", "Elan Bloodline"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(elements.id["ID_INTERNAL_INTERNAL_ELAN_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Elan Protection"] = new RulesElement({
    name: "Elan Protection",
    type: "Feat",
    id: "ID_FMP_FEAT_3399",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3399",
    categories: ["Elan Protection", "ID_FMP_FEAT_3399", "ID_INTERNAL_INTERNAL_ELAN_BLOODLINE", "Elan Bloodline"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(elements.id["ID_INTERNAL_INTERNAL_ELAN_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Elan Retribution"] = new RulesElement({
    name: "Elan Retribution",
    type: "Feat",
    id: "ID_FMP_FEAT_3400",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3400",
    categories: ["Elan Retribution", "ID_FMP_FEAT_3400", "ID_INTERNAL_INTERNAL_ELAN_BLOODLINE", "Elan Bloodline"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(elements.id["ID_INTERNAL_INTERNAL_ELAN_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Empty Vessel"] = new RulesElement({
    name: "Empty Vessel",
    type: "Feat",
    id: "ID_FMP_FEAT_3341",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3341",
    categories: ["Empty Vessel", "ID_FMP_FEAT_3341"]
  });
  byID[te.id] = te;
  
  te = Feat["Far Realm's Blessing"] = new RulesElement({
    name: "Far Realm's Blessing",
    type: "Feat",
    id: "ID_FMP_FEAT_3413",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3413",
    categories: ["Far Realm's Blessing", "ID_FMP_FEAT_3413", "ID_INTERNAL_INTERNAL_FOULBORN_BLOODLINE", "Foulborn Bloodline"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(elements.id["ID_INTERNAL_INTERNAL_FOULBORN_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Fearsome Flurry"] = new RulesElement({
    name: "Fearsome Flurry",
    type: "Feat",
    id: "ID_FMP_FEAT_3401",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3401",
    categories: ["Fearsome Flurry", "ID_FMP_FEAT_3401", "ID_INTERNAL_INTERNAL_FOULBORN_BLOODLINE", "Foulborn Bloodline"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(elements.id["ID_INTERNAL_INTERNAL_FOULBORN_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Fearsome Spike"] = new RulesElement({
    name: "Fearsome Spike",
    type: "Feat",
    id: "ID_FMP_FEAT_3375",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3375",
    categories: ["Fearsome Spike", "ID_FMP_FEAT_3375"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Feral Advance"] = new RulesElement({
    name: "Feral Advance",
    type: "Feat",
    id: "ID_FMP_FEAT_3285",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3285",
    categories: ["Feral Advance", "ID_FMP_FEAT_3285"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Ferocious Resilience"] = new RulesElement({
    name: "Ferocious Resilience",
    type: "Feat",
    id: "ID_FMP_FEAT_3342",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3342",
    categories: ["Ferocious Resilience", "ID_FMP_FEAT_3342"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Feywild Advance"] = new RulesElement({
    name: "Feywild Advance",
    type: "Feat",
    id: "ID_FMP_FEAT_3286",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3286",
    categories: ["Feywild Advance", "ID_FMP_FEAT_3286"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Fluid Motion"] = new RulesElement({
    name: "Fluid Motion",
    type: "Feat",
    id: "ID_FMP_FEAT_3287",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3287",
    categories: ["Fluid Motion", "ID_FMP_FEAT_3287"],
    rules: function(model) {
      model.statadd("Fluid Motion", 1);
      model.statadd("Speed", function() { return model.stat("Fluid Motion"); }, "Feat");
      model.statadd("Fluid Motion", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Focused Talent"] = new RulesElement({
    name: "Focused Talent",
    type: "Feat",
    id: "ID_FMP_FEAT_3391",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3391",
    categories: ["Focused Talent", "ID_FMP_FEAT_3391", "ID_INTERNAL_CATEGORY_MULTICLASS_PSION", "Multiclass Psion", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("ID_FMP_FEAT_3391"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Form Mastery"] = new RulesElement({
    name: "Form Mastery",
    type: "Feat",
    id: "ID_FMP_FEAT_3376",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3376",
    categories: ["Form Mastery", "ID_FMP_FEAT_3376"],
    rules: function(model) {
      model.statadd("Action Point", "Form Mastery:When you spend an action point to take an extra action, you also regain the use of a monk encounter attack power. You can use this encounter power as your extra action.");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Foulborn Heritage"] = new RulesElement({
    name: "Foulborn Heritage",
    type: "Feat",
    id: "ID_FMP_FEAT_3396",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3396",
    categories: ["Foulborn Heritage", "ID_FMP_FEAT_3396", "ID_INTERNAL_INTERNAL_FOULBORN_BLOODLINE", "Foulborn Bloodline"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13418"]);
      model.grant(elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(elements.id["ID_INTERNAL_INTERNAL_FOULBORN_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Gestalt Anchor"] = new RulesElement({
    name: "Gestalt Anchor",
    type: "Feat",
    id: "ID_FMP_FEAT_3288",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3288",
    categories: ["Gestalt Anchor", "ID_FMP_FEAT_3288"]
  });
  byID[te.id] = te;
  
  te = Feat["Gift of the Eternal"] = new RulesElement({
    name: "Gift of the Eternal",
    type: "Feat",
    id: "ID_FMP_FEAT_3414",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3414",
    categories: ["Gift of the Eternal", "ID_FMP_FEAT_3414", "ID_INTERNAL_INTERNAL_ELAN_BLOODLINE", "Elan Bloodline"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(elements.id["ID_INTERNAL_INTERNAL_ELAN_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Group in Motion"] = new RulesElement({
    name: "Group in Motion",
    type: "Feat",
    id: "ID_FMP_FEAT_3289",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3289",
    categories: ["Group in Motion", "ID_FMP_FEAT_3289"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Harried Recovery"] = new RulesElement({
    name: "Harried Recovery",
    type: "Feat",
    id: "ID_FMP_FEAT_3343",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3343",
    categories: ["Harried Recovery", "ID_FMP_FEAT_3343"]
  });
  byID[te.id] = te;
  
  te = Feat["Harrier's Control"] = new RulesElement({
    name: "Harrier's Control",
    type: "Feat",
    id: "ID_FMP_FEAT_3344",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3344",
    categories: ["Harrier's Control", "ID_FMP_FEAT_3344"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Harrying Step"] = new RulesElement({
    name: "Harrying Step",
    type: "Feat",
    id: "ID_FMP_FEAT_3290",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3290",
    categories: ["Harrying Step", "ID_FMP_FEAT_3290"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Haunted Darkness"] = new RulesElement({
    name: "Haunted Darkness",
    type: "Feat",
    id: "ID_FMP_FEAT_3291",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3291",
    categories: ["Haunted Darkness", "ID_FMP_FEAT_3291"],
    rules: function(model) {
      model.statadd("psion,at-will:damage", function() { /* if unaugmented and you are inside your own cloud of darkness */ return 3; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Haunting Sounds"] = new RulesElement({
    name: "Haunting Sounds",
    type: "Feat",
    id: "ID_FMP_FEAT_3292",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3292",
    categories: ["Haunting Sounds", "ID_FMP_FEAT_3292", "ID_INTERNAL_CATEGORY_AUGMENT", "Augment"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Healing Fist"] = new RulesElement({
    name: "Healing Fist",
    type: "Feat",
    id: "ID_FMP_FEAT_3293",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3293",
    categories: ["Healing Fist", "ID_FMP_FEAT_3293"]
  });
  byID[te.id] = te;
  
  te = Feat["Helpful Hint"] = new RulesElement({
    name: "Helpful Hint",
    type: "Feat",
    id: "ID_FMP_FEAT_3294",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3294",
    categories: ["Helpful Hint", "ID_FMP_FEAT_3294"]
  });
  byID[te.id] = te;
  
  te = Feat["Hostile Mind"] = new RulesElement({
    name: "Hostile Mind",
    type: "Feat",
    id: "ID_FMP_FEAT_3377",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3377",
    categories: ["Hostile Mind", "ID_FMP_FEAT_3377"]
  });
  byID[te.id] = te;
  
  te = Feat["Human Ingenuity"] = new RulesElement({
    name: "Human Ingenuity",
    type: "Feat",
    id: "ID_FMP_FEAT_3295",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3295",
    categories: ["Human Ingenuity", "ID_FMP_FEAT_3295"],
    rules: function(model) {
      model.statadd("Action Point", "Human Ingenuity:When you spend an action point to make an extra attack, you regain 1 power point.");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Immovable Resilience"] = new RulesElement({
    name: "Immovable Resilience",
    type: "Feat",
    id: "ID_FMP_FEAT_3296",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3296",
    categories: ["Immovable Resilience", "ID_FMP_FEAT_3296"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Implacable Wrath"] = new RulesElement({
    name: "Implacable Wrath",
    type: "Feat",
    id: "ID_FMP_FEAT_3345",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3345",
    categories: ["Implacable Wrath", "ID_FMP_FEAT_3345"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Inexorable Speed"] = new RulesElement({
    name: "Inexorable Speed",
    type: "Feat",
    id: "ID_FMP_FEAT_3378",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3378",
    categories: ["Inexorable Speed", "ID_FMP_FEAT_3378"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Infectious Euphoria"] = new RulesElement({
    name: "Infectious Euphoria",
    type: "Feat",
    id: "ID_FMP_FEAT_3379",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3379",
    categories: ["Infectious Euphoria", "ID_FMP_FEAT_3379"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Instinctive Advance"] = new RulesElement({
    name: "Instinctive Advance",
    type: "Feat",
    id: "ID_FMP_FEAT_3346",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3346",
    categories: ["Instinctive Advance", "ID_FMP_FEAT_3346"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Instinctive Surge"] = new RulesElement({
    name: "Instinctive Surge",
    type: "Feat",
    id: "ID_FMP_FEAT_3380",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3380",
    categories: ["Instinctive Surge", "ID_FMP_FEAT_3380"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Invigorating Demand"] = new RulesElement({
    name: "Invigorating Demand",
    type: "Feat",
    id: "ID_FMP_FEAT_3381",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3381",
    categories: ["Invigorating Demand", "ID_FMP_FEAT_3381"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Io's Roar"] = new RulesElement({
    name: "Io's Roar",
    type: "Feat",
    id: "ID_FMP_FEAT_3297",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3297",
    categories: ["Io's Roar", "ID_FMP_FEAT_3297"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Iron Parry"] = new RulesElement({
    name: "Iron Parry",
    type: "Feat",
    id: "ID_FMP_FEAT_3298",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3298",
    categories: ["Iron Parry", "ID_FMP_FEAT_3298"],
    rules: function(model) {
      model.statadd("Iron Parry", function() { 
        if (!(model.wearing('Armor'))) {
          return 1;
        } else return 0;
       });
      model.statadd("Iron Parry", function() { 
        if (!(model.wearing('Armor', ['Shield']))) {
            
            if (model.wearing('Armor', ['cloth'])) {
              return 1;
            } else return 0;
          
        } else return 0;
       });
      model.statadd("Iron Parry 1", function() { 
        if (model.wearing('Weapon')) {
          return model.stat("Iron Parry");
        } else return 0;
       });
      model.statadd("AC", function() { 
        if (!(model.inventory.equipped.some(function(i) {{ return i.matchesCategory('{0}'); }}))) {
          return model.stat("Iron Parry 1");
        } else return 0;
       });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Iron Propulsion"] = new RulesElement({
    name: "Iron Propulsion",
    type: "Feat",
    id: "ID_FMP_FEAT_3347",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3347",
    categories: ["Iron Propulsion", "ID_FMP_FEAT_3347"],
    rules: function(model) {
      model.statadd("Speed", function() { 
        if (model.wearing('Armor')) {
          /* while you have at least 1 power point */ return 0;
        } else return 0;
       }, "Armor");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Iron Trap"] = new RulesElement({
    name: "Iron Trap",
    type: "Feat",
    id: "ID_FMP_FEAT_3299",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3299",
    categories: ["Iron Trap", "ID_FMP_FEAT_3299"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Jagged Force"] = new RulesElement({
    name: "Jagged Force",
    type: "Feat",
    id: "ID_FMP_FEAT_3300",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3300",
    categories: ["Jagged Force", "ID_FMP_FEAT_3300"],
    rules: function(model) {
      model.statadd("Jagged Force", 2);
      model.statadd("force:damage", function() { return model.stat("Jagged Force"); }, "Feat");
      model.statadd("Jagged Force", 1);
      model.statadd("Jagged Force", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Keep Your Feet"] = new RulesElement({
    name: "Keep Your Feet",
    type: "Feat",
    id: "ID_FMP_FEAT_3382",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3382",
    categories: ["Keep Your Feet", "ID_FMP_FEAT_3382"]
  });
  byID[te.id] = te;
  
  te = Feat["Lingering Force"] = new RulesElement({
    name: "Lingering Force",
    type: "Feat",
    id: "ID_FMP_FEAT_3383",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3383",
    categories: ["Lingering Force", "ID_FMP_FEAT_3383"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Lingering Swiftness"] = new RulesElement({
    name: "Lingering Swiftness",
    type: "Feat",
    id: "ID_FMP_FEAT_3348",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3348",
    categories: ["Lingering Swiftness", "ID_FMP_FEAT_3348"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Mantle of Caution"] = new RulesElement({
    name: "Mantle of Caution",
    type: "Feat",
    id: "ID_FMP_FEAT_3349",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3349",
    categories: ["Mantle of Caution", "ID_FMP_FEAT_3349"]
  });
  byID[te.id] = te;
  
  te = Feat["Mantle of Understanding"] = new RulesElement({
    name: "Mantle of Understanding",
    type: "Feat",
    id: "ID_FMP_FEAT_3301",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3301",
    categories: ["Mantle of Understanding", "ID_FMP_FEAT_3301"]
  });
  byID[te.id] = te;
  
  te = Feat["Mantle of Unease"] = new RulesElement({
    name: "Mantle of Unease",
    type: "Feat",
    id: "ID_FMP_FEAT_3402",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3402",
    categories: ["Mantle of Unease", "ID_FMP_FEAT_3402", "ID_INTERNAL_INTERNAL_FOULBORN_BLOODLINE", "Foulborn Bloodline"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(elements.id["ID_INTERNAL_INTERNAL_FOULBORN_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Martyr's Surge"] = new RulesElement({
    name: "Martyr's Surge",
    type: "Feat",
    id: "ID_FMP_FEAT_3302",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3302",
    categories: ["Martyr's Surge", "ID_FMP_FEAT_3302"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Master's Instruction"] = new RulesElement({
    name: "Master's Instruction",
    type: "Feat",
    id: "ID_FMP_FEAT_3350",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3350",
    categories: ["Master's Instruction", "ID_FMP_FEAT_3350"]
  });
  byID[te.id] = te;
  
  te = Feat["Mindlink"] = new RulesElement({
    name: "Mindlink",
    type: "Feat",
    id: "ID_FMP_FEAT_3303",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3303",
    categories: ["Mindlink", "ID_FMP_FEAT_3303"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Monastic Adept"] = new RulesElement({
    name: "Monastic Adept",
    type: "Feat",
    id: "ID_FMP_FEAT_3392",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3392",
    categories: ["Monastic Adept", "ID_FMP_FEAT_3392", "ID_INTERNAL_CATEGORY_MULTICLASS_MONK", "Multiclass Monk", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass"],
    rules: function(model) {
      model.select('Skill Training', 1, {
        filter: function(model, element) { return element.hasCategory("Monk Class"); }
      });
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory("at-will") && element.hasCategory("attack") && element.hasCategory("ID_FMP_CLASS_362") && element.hasCategory("1")); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Nature's Sentinel"] = new RulesElement({
    name: "Nature's Sentinel",
    type: "Feat",
    id: "ID_FMP_FEAT_3304",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3304",
    categories: ["Nature's Sentinel", "ID_FMP_FEAT_3304"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_FMP_POWER_10440:damage", function() { /* while in Aspect of the Destroyer */ return model.stat("Wisdom modifier"); });
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Outraged Vengeance"] = new RulesElement({
    name: "Outraged Vengeance",
    type: "Feat",
    id: "ID_FMP_FEAT_3305",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3305",
    categories: ["Outraged Vengeance", "ID_FMP_FEAT_3305"]
  });
  byID[te.id] = te;
  
  te = Feat["Path to Clarity"] = new RulesElement({
    name: "Path to Clarity",
    type: "Feat",
    id: "ID_FMP_FEAT_3306",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3306",
    categories: ["Path to Clarity", "ID_FMP_FEAT_3306"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Power Cascade"] = new RulesElement({
    name: "Power Cascade",
    type: "Feat",
    id: "ID_FMP_FEAT_3307",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3307",
    categories: ["Power Cascade", "ID_FMP_FEAT_3307"]
  });
  byID[te.id] = te;
  
  te = Feat["Power Surge"] = new RulesElement({
    name: "Power Surge",
    type: "Feat",
    id: "ID_FMP_FEAT_3351",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3351",
    categories: ["Power Surge", "ID_FMP_FEAT_3351"]
  });
  byID[te.id] = te;
  
  te = Feat["Prescient Dodge"] = new RulesElement({
    name: "Prescient Dodge",
    type: "Feat",
    id: "ID_FMP_FEAT_3352",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3352",
    categories: ["Prescient Dodge", "ID_FMP_FEAT_3352", "ID_INTERNAL_CATEGORY_AUGMENT", "Augment"],
    rules: function(model) {
      model.statadd("AC", function() { /* during each encounter, until the start of your first turn */ return 2; });
      model.statadd("Fortitude Defense", function() { /* during each encounter, until the start of your first turn */ return 2; });
      model.statadd("Reflex Defense", function() { /* during each encounter, until the start of your first turn */ return 2; });
      model.statadd("Will Defense", function() { /* during each encounter, until the start of your first turn */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Psion Implement Expertise"] = new RulesElement({
    name: "Psion Implement Expertise",
    type: "Feat",
    id: "ID_FMP_FEAT_3384",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3384",
    categories: ["Psion Implement Expertise", "ID_FMP_FEAT_3384"]
  });
  byID[te.id] = te;
  
  te = Feat["Psionic Celerity"] = new RulesElement({
    name: "Psionic Celerity",
    type: "Feat",
    id: "ID_FMP_FEAT_3308",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3308",
    categories: ["Psionic Celerity", "ID_FMP_FEAT_3308", "ID_INTERNAL_CATEGORY_AUGMENT", "Augment"],
    rules: function(model) {
      model.statadd("Speed", function() { /* whenever you run or charge */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Psionic Discorporation"] = new RulesElement({
    name: "Psionic Discorporation",
    type: "Feat",
    id: "ID_FMP_FEAT_3415",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3415",
    categories: ["Psionic Discorporation", "ID_FMP_FEAT_3415", "ID_INTERNAL_INTERNAL_ELAN_BLOODLINE", "Elan Bloodline"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(elements.id["ID_INTERNAL_INTERNAL_ELAN_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Psionic Fortune"] = new RulesElement({
    name: "Psionic Fortune",
    type: "Feat",
    id: "ID_FMP_FEAT_3309",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3309",
    categories: ["Psionic Fortune", "ID_FMP_FEAT_3309", "ID_INTERNAL_CATEGORY_AUGMENT", "Augment"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* while you have at least 1 power point */ return 1; }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Psionic Initiative"] = new RulesElement({
    name: "Psionic Initiative",
    type: "Feat",
    id: "ID_FMP_FEAT_3310",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3310",
    categories: ["Psionic Initiative", "ID_FMP_FEAT_3310", "ID_INTERNAL_CATEGORY_AUGMENT", "Augment"],
    rules: function(model) {
      model.statadd("Initiative Misc", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Psionic Reflexes"] = new RulesElement({
    name: "Psionic Reflexes",
    type: "Feat",
    id: "ID_FMP_FEAT_3311",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3311",
    categories: ["Psionic Reflexes", "ID_FMP_FEAT_3311", "ID_INTERNAL_CATEGORY_AUGMENT", "Augment"],
    rules: function(model) {
      model.statadd("Opportunity Attack", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Psionic Rush"] = new RulesElement({
    name: "Psionic Rush",
    type: "Feat",
    id: "ID_FMP_FEAT_3353",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3353",
    categories: ["Psionic Rush", "ID_FMP_FEAT_3353", "ID_INTERNAL_CATEGORY_AUGMENT", "Augment"],
    rules: function(model) {
      model.statadd("Action Point", "Psionic Rush:When you spend an action point to take an extra action, you can reduce the cost to augment any augmentable power you use during that action by 1 power point.");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Psionic Skill"] = new RulesElement({
    name: "Psionic Skill",
    type: "Feat",
    id: "ID_FMP_FEAT_3312",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3312",
    categories: ["Psionic Skill", "ID_FMP_FEAT_3312", "ID_INTERNAL_CATEGORY_AUGMENT", "Augment"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("Psionic Skill"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Psionic Staff Focus"] = new RulesElement({
    name: "Psionic Staff Focus",
    type: "Feat",
    id: "ID_FMP_FEAT_3354",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3354",
    categories: ["Psionic Staff Focus", "ID_FMP_FEAT_3354"]
  });
  byID[te.id] = te;
  
  te = Feat["Psionic Toughness"] = new RulesElement({
    name: "Psionic Toughness",
    type: "Feat",
    id: "ID_FMP_FEAT_3313",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3313",
    categories: ["Psionic Toughness", "ID_FMP_FEAT_3313", "ID_INTERNAL_CATEGORY_AUGMENT", "Augment"],
    rules: function(model) {
      model.statadd("Psionic Toughness", 3);
      model.statadd("Psionic Toughness", 3);
      model.statadd("Psionic Toughness", 3);
      model.statadd("Hit Points", function() { return model.stat("Psionic Toughness"); });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Psychic Wail"] = new RulesElement({
    name: "Psychic Wail",
    type: "Feat",
    id: "ID_FMP_FEAT_3355",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3355",
    categories: ["Psychic Wail", "ID_FMP_FEAT_3355"]
  });
  byID[te.id] = te;
  
  te = Feat["Puppeteer"] = new RulesElement({
    name: "Puppeteer",
    type: "Feat",
    id: "ID_FMP_FEAT_3356",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3356",
    categories: ["Puppeteer", "ID_FMP_FEAT_3356"]
  });
  byID[te.id] = te;
  
  te = Feat["Pure Mind"] = new RulesElement({
    name: "Pure Mind",
    type: "Feat",
    id: "ID_FMP_FEAT_3385",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3385",
    categories: ["Pure Mind", "ID_FMP_FEAT_3385"],
    rules: function(model) {
      model.statadd("resist:psychic", 10, "resist");
      model.statadd("Will Defense", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Quick Reactions"] = new RulesElement({
    name: "Quick Reactions",
    type: "Feat",
    id: "ID_FMP_FEAT_3314",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3314",
    categories: ["Quick Reactions", "ID_FMP_FEAT_3314"],
    rules: function(model) {
      model.statadd("Initiative", function() { return model.stat("Charisma modifier"); }, "Ability");
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Refracting Mantle"] = new RulesElement({
    name: "Refracting Mantle",
    type: "Feat",
    id: "ID_FMP_FEAT_3315",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3315",
    categories: ["Refracting Mantle", "ID_FMP_FEAT_3315"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Resilient Demand"] = new RulesElement({
    name: "Resilient Demand",
    type: "Feat",
    id: "ID_FMP_FEAT_3316",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3316",
    categories: ["Resilient Demand", "ID_FMP_FEAT_3316"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Returning Resilience"] = new RulesElement({
    name: "Returning Resilience",
    type: "Feat",
    id: "ID_FMP_FEAT_3410",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3410",
    categories: ["Returning Resilience", "ID_FMP_FEAT_3410", "ID_INTERNAL_INTERNAL_ELAN_BLOODLINE", "Elan Bloodline"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(elements.id["ID_INTERNAL_INTERNAL_ELAN_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Rising Hopes"] = new RulesElement({
    name: "Rising Hopes",
    type: "Feat",
    id: "ID_FMP_FEAT_3357",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3357",
    categories: ["Rising Hopes", "ID_FMP_FEAT_3357"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Serenity in Simplicity"] = new RulesElement({
    name: "Serenity in Simplicity",
    type: "Feat",
    id: "ID_FMP_FEAT_3358",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3358",
    categories: ["Serenity in Simplicity", "ID_FMP_FEAT_3358"],
    rules: function(model) {
      model.statadd("ID_FMP_CLASS_362,at-will:attack", function() { /* while all your daily attack powers are expended */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Shard Link"] = new RulesElement({
    name: "Shard Link",
    type: "Feat",
    id: "ID_FMP_FEAT_3317",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3317",
    categories: ["Shard Link", "ID_FMP_FEAT_3317"]
  });
  byID[te.id] = te;
  
  te = Feat["Shifting Stone"] = new RulesElement({
    name: "Shifting Stone",
    type: "Feat",
    id: "ID_FMP_FEAT_3318",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3318",
    categories: ["Shifting Stone", "ID_FMP_FEAT_3318"]
  });
  byID[te.id] = te;
  
  te = Feat["Skipping Stone Flurry"] = new RulesElement({
    name: "Skipping Stone Flurry",
    type: "Feat",
    id: "ID_FMP_FEAT_3319",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3319",
    categories: ["Skipping Stone Flurry", "ID_FMP_FEAT_3319"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Skittering Mouse Style"] = new RulesElement({
    name: "Skittering Mouse Style",
    type: "Feat",
    id: "ID_FMP_FEAT_3320",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3320",
    categories: ["Skittering Mouse Style", "ID_FMP_FEAT_3320"]
  });
  byID[te.id] = te;
  
  te = Feat["Spike of Madness"] = new RulesElement({
    name: "Spike of Madness",
    type: "Feat",
    id: "ID_FMP_FEAT_3403",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3403",
    categories: ["Spike of Madness", "ID_FMP_FEAT_3403", "ID_INTERNAL_INTERNAL_FOULBORN_BLOODLINE", "Foulborn Bloodline"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(elements.id["ID_INTERNAL_INTERNAL_FOULBORN_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Staggering Spike"] = new RulesElement({
    name: "Staggering Spike",
    type: "Feat",
    id: "ID_FMP_FEAT_3359",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3359",
    categories: ["Staggering Spike", "ID_FMP_FEAT_3359"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Stalk the Senseless"] = new RulesElement({
    name: "Stalk the Senseless",
    type: "Feat",
    id: "ID_FMP_FEAT_3386",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3386",
    categories: ["Stalk the Senseless", "ID_FMP_FEAT_3386"]
  });
  byID[te.id] = te;
  
  te = Feat["Still Water"] = new RulesElement({
    name: "Still Water",
    type: "Feat",
    id: "ID_FMP_FEAT_3360",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3360",
    categories: ["Still Water", "ID_FMP_FEAT_3360"]
  });
  byID[te.id] = te;
  
  te = Feat["Suppressive Surge"] = new RulesElement({
    name: "Suppressive Surge",
    type: "Feat",
    id: "ID_FMP_FEAT_3361",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3361",
    categories: ["Suppressive Surge", "ID_FMP_FEAT_3361"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Surging Mantle"] = new RulesElement({
    name: "Surging Mantle",
    type: "Feat",
    id: "ID_FMP_FEAT_3321",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3321",
    categories: ["Surging Mantle", "ID_FMP_FEAT_3321"]
  });
  byID[te.id] = te;
  
  te = Feat["Terrible Aspect"] = new RulesElement({
    name: "Terrible Aspect",
    type: "Feat",
    id: "ID_FMP_FEAT_3411",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3411",
    categories: ["Terrible Aspect", "ID_FMP_FEAT_3411", "ID_INTERNAL_INTERNAL_FOULBORN_BLOODLINE", "Foulborn Bloodline"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(elements.id["ID_INTERNAL_INTERNAL_FOULBORN_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Thought Warning"] = new RulesElement({
    name: "Thought Warning",
    type: "Feat",
    id: "ID_FMP_FEAT_3322",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3322",
    categories: ["Thought Warning", "ID_FMP_FEAT_3322"]
  });
  byID[te.id] = te;
  
  te = Feat["Threefold Fortitude"] = new RulesElement({
    name: "Threefold Fortitude",
    type: "Feat",
    id: "ID_FMP_FEAT_3362",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3362",
    categories: ["Threefold Fortitude", "ID_FMP_FEAT_3362", "ID_INTERNAL_CATEGORY_AUGMENT", "Augment"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 1, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Threefold Reflex"] = new RulesElement({
    name: "Threefold Reflex",
    type: "Feat",
    id: "ID_FMP_FEAT_3363",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3363",
    categories: ["Threefold Reflex", "ID_FMP_FEAT_3363", "ID_INTERNAL_CATEGORY_AUGMENT", "Augment"],
    rules: function(model) {
      model.statadd("Reflex Defense", 1, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Threefold Will"] = new RulesElement({
    name: "Threefold Will",
    type: "Feat",
    id: "ID_FMP_FEAT_3364",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3364",
    categories: ["Threefold Will", "ID_FMP_FEAT_3364", "ID_INTERNAL_CATEGORY_AUGMENT", "Augment"],
    rules: function(model) {
      model.statadd("Will Defense", 1, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["True Freedom"] = new RulesElement({
    name: "True Freedom",
    type: "Feat",
    id: "ID_FMP_FEAT_3387",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3387",
    categories: ["True Freedom", "ID_FMP_FEAT_3387"]
  });
  byID[te.id] = te;
  
  te = Feat["Ubiquitous Step"] = new RulesElement({
    name: "Ubiquitous Step",
    type: "Feat",
    id: "ID_FMP_FEAT_3323",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3323",
    categories: ["Ubiquitous Step", "ID_FMP_FEAT_3323"]
  });
  byID[te.id] = te;
  
  te = Feat["Unseen Dread"] = new RulesElement({
    name: "Unseen Dread",
    type: "Feat",
    id: "ID_FMP_FEAT_3324",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3324",
    categories: ["Unseen Dread", "ID_FMP_FEAT_3324"]
  });
  byID[te.id] = te;
  
  te = Feat["Unstoppable Speed"] = new RulesElement({
    name: "Unstoppable Speed",
    type: "Feat",
    id: "ID_FMP_FEAT_3365",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3365",
    categories: ["Unstoppable Speed", "ID_FMP_FEAT_3365"]
  });
  byID[te.id] = te;
  
  te = Feat["Untraceable Flurry"] = new RulesElement({
    name: "Untraceable Flurry",
    type: "Feat",
    id: "ID_FMP_FEAT_3404",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3404",
    categories: ["Untraceable Flurry", "ID_FMP_FEAT_3404", "ID_INTERNAL_INTERNAL_ELAN_BLOODLINE", "Elan Bloodline"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(elements.id["ID_INTERNAL_INTERNAL_ELAN_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Vicious Intrusion"] = new RulesElement({
    name: "Vicious Intrusion",
    type: "Feat",
    id: "ID_FMP_FEAT_3325",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3325",
    categories: ["Vicious Intrusion", "ID_FMP_FEAT_3325"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Victorious Soul"] = new RulesElement({
    name: "Victorious Soul",
    type: "Feat",
    id: "ID_FMP_FEAT_3388",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3388",
    categories: ["Victorious Soul", "ID_FMP_FEAT_3388"]
  });
  byID[te.id] = te;
  
  te = Feat["Violent Awakening"] = new RulesElement({
    name: "Violent Awakening",
    type: "Feat",
    id: "ID_FMP_FEAT_3326",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3326",
    categories: ["Violent Awakening", "ID_FMP_FEAT_3326"]
  });
  byID[te.id] = te;
  
  te = Feat["Violent Joy"] = new RulesElement({
    name: "Violent Joy",
    type: "Feat",
    id: "ID_FMP_FEAT_3366",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3366",
    categories: ["Violent Joy", "ID_FMP_FEAT_3366"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Vision of Madness"] = new RulesElement({
    name: "Vision of Madness",
    type: "Feat",
    id: "ID_FMP_FEAT_3405",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3405",
    categories: ["Vision of Madness", "ID_FMP_FEAT_3405", "ID_INTERNAL_INTERNAL_FOULBORN_BLOODLINE", "Foulborn Bloodline"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(elements.id["ID_INTERNAL_INTERNAL_FOULBORN_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Waking Senses"] = new RulesElement({
    name: "Waking Senses",
    type: "Feat",
    id: "ID_FMP_FEAT_3367",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3367",
    categories: ["Waking Senses", "ID_FMP_FEAT_3367"]
  });
  byID[te.id] = te;
  
  te = Feat["Water Splitting Stone"] = new RulesElement({
    name: "Water Splitting Stone",
    type: "Feat",
    id: "ID_FMP_FEAT_3327",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3327",
    categories: ["Water Splitting Stone", "ID_FMP_FEAT_3327"]
  });
  byID[te.id] = te;
  
  te = Feat["Whirling Iron Defense"] = new RulesElement({
    name: "Whirling Iron Defense",
    type: "Feat",
    id: "ID_FMP_FEAT_3368",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3368",
    categories: ["Whirling Iron Defense", "ID_FMP_FEAT_3368"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Wild Advance"] = new RulesElement({
    name: "Wild Advance",
    type: "Feat",
    id: "ID_FMP_FEAT_3393",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3393",
    categories: ["Wild Advance", "ID_FMP_FEAT_3393", "ID_INTERNAL_CATEGORY_MULTICLASS_BATTLEMIND", "Multiclass Battlemind", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_10439"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(elements.id["ID_INTERNAL_INTERNAL_PSIONIC_SECOND_CLASS"]);
      model.grant(elements.id["ID_INTERNAL_COUNTSASCLASS_BATTLEMIND"]);
      model.grant(elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Wild Savant"] = new RulesElement({
    name: "Wild Savant",
    type: "Feat",
    id: "ID_FMP_FEAT_3394",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3394",
    categories: ["Wild Savant", "ID_FMP_FEAT_3394", "ID_INTERNAL_CATEGORY_MULTICLASS_BATTLEMIND", "Multiclass Battlemind", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass"],
    rules: function(model) {
      model.select('Power', 1, {
        filter: function(model, element) { return ((element.hasCategory("ID_FMP_POWER_13024") || element.hasCategory("ID_FMP_POWER_11155")) || element.hasCategory("ID_FMP_POWER_12418")); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Wind of Sympathy"] = new RulesElement({
    name: "Wind of Sympathy",
    type: "Feat",
    id: "ID_FMP_FEAT_3328",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3328",
    categories: ["Wind of Sympathy", "ID_FMP_FEAT_3328"]
  });
  byID[te.id] = te;
  
  te = Feat["Zerth Instincts"] = new RulesElement({
    name: "Zerth Instincts",
    type: "Feat",
    id: "ID_FMP_FEAT_3329",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3329",
    categories: ["Zerth Instincts", "ID_FMP_FEAT_3329"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  
})(this);
