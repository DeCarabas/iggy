(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var class_feature = types['class feature'] || (types['class feature'] = {});
  te = class_feature["Adjust Attunement"] = new RulesElement({
    name: "Adjust Attunement",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1441",
    source: "Arcane Power",
    categories: ["Adjust Attunement", "ID_FMP_CLASS_FEATURE_1441", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Aegis of Ensnarement"] = new RulesElement({
    name: "Aegis of Ensnarement",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1508",
    source: "Arcane Power,Player's Handbook 3",
    categories: ["Aegis of Ensnarement", "ID_FMP_CLASS_FEATURE_1508", "ID_FMP_CLASS_FEATURE_518", "Swordmage Aegis", "1"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_5736"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Arcane Admixture Acid"] = new RulesElement({
    name: "Arcane Admixture Acid",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARCANE_ADMIXTURE_ACID",
    source: "Arcane Power",
    categories: ["Arcane Admixture Acid", "ID_INTERNAL_CLASS_FEATURE_ARCANE_ADMIXTURE_ACID", "ID_FMP_FEAT_1169", "Arcane Admixture"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Arcane Admixture Acid II"] = new RulesElement({
    name: "Arcane Admixture Acid II",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARCANE_ADMIXTURE_ACID_II",
    source: "Arcane Power",
    categories: ["Arcane Admixture Acid II", "ID_INTERNAL_CLASS_FEATURE_ARCANE_ADMIXTURE_ACID_II", "ID_INTERNAL_FEAT_ARCANE_ADMIXTURE_II", "Arcane Admixture II"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Arcane Admixture Acid III"] = new RulesElement({
    name: "Arcane Admixture Acid III",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARCANE_ADMIXTURE_ACID_III",
    source: "Arcane Power",
    categories: ["Arcane Admixture Acid III", "ID_INTERNAL_CLASS_FEATURE_ARCANE_ADMIXTURE_ACID_III", "ID_INTERNAL_FEAT_ARCANE_ADMIXTURE_III", "Arcane Admixture III"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Arcane Admixture Acid IV"] = new RulesElement({
    name: "Arcane Admixture Acid IV",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARCANE_ADMIXTURE_ACID_IV",
    source: "Arcane Power",
    categories: ["Arcane Admixture Acid IV", "ID_INTERNAL_CLASS_FEATURE_ARCANE_ADMIXTURE_ACID_IV", "ID_INTERNAL_FEAT_ARCANE_ADMIXTURE_IV", "Arcane Admixture IV"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Arcane Admixture Cold"] = new RulesElement({
    name: "Arcane Admixture Cold",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARCANE_ADMIXTURE_COLD",
    source: "Arcane Power",
    categories: ["Arcane Admixture Cold", "ID_INTERNAL_CLASS_FEATURE_ARCANE_ADMIXTURE_COLD", "ID_FMP_FEAT_1169", "Arcane Admixture"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Arcane Admixture Cold II"] = new RulesElement({
    name: "Arcane Admixture Cold II",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARCANE_ADMIXTURE_COLD_II",
    source: "Arcane Power",
    categories: ["Arcane Admixture Cold II", "ID_INTERNAL_CLASS_FEATURE_ARCANE_ADMIXTURE_COLD_II", "ID_INTERNAL_FEAT_ARCANE_ADMIXTURE_II", "Arcane Admixture II"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Arcane Admixture Cold III"] = new RulesElement({
    name: "Arcane Admixture Cold III",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARCANE_ADMIXTURE_COLD_III",
    source: "Arcane Power",
    categories: ["Arcane Admixture Cold III", "ID_INTERNAL_CLASS_FEATURE_ARCANE_ADMIXTURE_COLD_III", "ID_INTERNAL_FEAT_ARCANE_ADMIXTURE_III", "Arcane Admixture III"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Arcane Admixture Cold IV"] = new RulesElement({
    name: "Arcane Admixture Cold IV",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARCANE_ADMIXTURE_COLD_IV",
    source: "Arcane Power",
    categories: ["Arcane Admixture Cold IV", "ID_INTERNAL_CLASS_FEATURE_ARCANE_ADMIXTURE_COLD_IV", "ID_INTERNAL_FEAT_ARCANE_ADMIXTURE_IV", "Arcane Admixture IV"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Arcane Admixture Fire"] = new RulesElement({
    name: "Arcane Admixture Fire",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARCANE_ADMIXTURE_FIRE",
    source: "Arcane Power",
    categories: ["Arcane Admixture Fire", "ID_INTERNAL_CLASS_FEATURE_ARCANE_ADMIXTURE_FIRE", "ID_FMP_FEAT_1169", "Arcane Admixture"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Arcane Admixture Fire II"] = new RulesElement({
    name: "Arcane Admixture Fire II",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARCANE_ADMIXTURE_FIRE_II",
    source: "Arcane Power",
    categories: ["Arcane Admixture Fire II", "ID_INTERNAL_CLASS_FEATURE_ARCANE_ADMIXTURE_FIRE_II", "ID_INTERNAL_FEAT_ARCANE_ADMIXTURE_II", "Arcane Admixture II"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Arcane Admixture Fire III"] = new RulesElement({
    name: "Arcane Admixture Fire III",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARCANE_ADMIXTURE_FIRE_III",
    source: "Arcane Power",
    categories: ["Arcane Admixture Fire III", "ID_INTERNAL_CLASS_FEATURE_ARCANE_ADMIXTURE_FIRE_III", "ID_INTERNAL_FEAT_ARCANE_ADMIXTURE_III", "Arcane Admixture III"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Arcane Admixture Fire IV"] = new RulesElement({
    name: "Arcane Admixture Fire IV",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARCANE_ADMIXTURE_FIRE_IV",
    source: "Arcane Power",
    categories: ["Arcane Admixture Fire IV", "ID_INTERNAL_CLASS_FEATURE_ARCANE_ADMIXTURE_FIRE_IV", "ID_INTERNAL_FEAT_ARCANE_ADMIXTURE_IV", "Arcane Admixture IV"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Arcane Admixture Lightning"] = new RulesElement({
    name: "Arcane Admixture Lightning",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARCANE_ADMIXTURE_LIGHTNING",
    source: "Arcane Power",
    categories: ["Arcane Admixture Lightning", "ID_INTERNAL_CLASS_FEATURE_ARCANE_ADMIXTURE_LIGHTNING", "ID_FMP_FEAT_1169", "Arcane Admixture"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Arcane Admixture Lightning II"] = new RulesElement({
    name: "Arcane Admixture Lightning II",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARCANE_ADMIXTURE_LIGHTNING_II",
    source: "Arcane Power",
    categories: ["Arcane Admixture Lightning II", "ID_INTERNAL_CLASS_FEATURE_ARCANE_ADMIXTURE_LIGHTNING_II", "ID_INTERNAL_FEAT_ARCANE_ADMIXTURE_II", "Arcane Admixture II"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Arcane Admixture Lightning III"] = new RulesElement({
    name: "Arcane Admixture Lightning III",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARCANE_ADMIXTURE_LIGHTNING_III",
    source: "Arcane Power",
    categories: ["Arcane Admixture Lightning III", "ID_INTERNAL_CLASS_FEATURE_ARCANE_ADMIXTURE_LIGHTNING_III", "ID_INTERNAL_FEAT_ARCANE_ADMIXTURE_III", "Arcane Admixture III"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Arcane Admixture Lightning IV"] = new RulesElement({
    name: "Arcane Admixture Lightning IV",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARCANE_ADMIXTURE_LIGHTNING_IV",
    source: "Arcane Power",
    categories: ["Arcane Admixture Lightning IV", "ID_INTERNAL_CLASS_FEATURE_ARCANE_ADMIXTURE_LIGHTNING_IV", "ID_INTERNAL_FEAT_ARCANE_ADMIXTURE_IV", "Arcane Admixture IV"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Arcane Admixture Thunder"] = new RulesElement({
    name: "Arcane Admixture Thunder",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARCANE_ADMIXTURE_THUNDER",
    source: "Arcane Power",
    categories: ["Arcane Admixture Thunder", "ID_INTERNAL_CLASS_FEATURE_ARCANE_ADMIXTURE_THUNDER", "ID_FMP_FEAT_1169", "Arcane Admixture"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Arcane Admixture Thunder II"] = new RulesElement({
    name: "Arcane Admixture Thunder II",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARCANE_ADMIXTURE_THUNDER_II",
    source: "Arcane Power",
    categories: ["Arcane Admixture Thunder II", "ID_INTERNAL_CLASS_FEATURE_ARCANE_ADMIXTURE_THUNDER_II", "ID_INTERNAL_FEAT_ARCANE_ADMIXTURE_II", "Arcane Admixture II"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Arcane Admixture Thunder III"] = new RulesElement({
    name: "Arcane Admixture Thunder III",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARCANE_ADMIXTURE_THUNDER_III",
    source: "Arcane Power",
    categories: ["Arcane Admixture Thunder III", "ID_INTERNAL_CLASS_FEATURE_ARCANE_ADMIXTURE_THUNDER_III", "ID_INTERNAL_FEAT_ARCANE_ADMIXTURE_III", "Arcane Admixture III"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Arcane Admixture Thunder IV"] = new RulesElement({
    name: "Arcane Admixture Thunder IV",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARCANE_ADMIXTURE_THUNDER_IV",
    source: "Arcane Power",
    categories: ["Arcane Admixture Thunder IV", "ID_INTERNAL_CLASS_FEATURE_ARCANE_ADMIXTURE_THUNDER_IV", "ID_INTERNAL_FEAT_ARCANE_ADMIXTURE_IV", "Arcane Admixture IV"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Arcane Implement Proficiency (Dagger)"] = new RulesElement({
    name: "Arcane Implement Proficiency (Dagger)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARCANE_IMPLEMENT_PROFICIENCY_(DAGGER)",
    source: "Arcane Power",
    categories: ["Arcane Implement Proficiency (Dagger)", "ID_INTERNAL_CLASS_FEATURE_ARCANE_IMPLEMENT_PROFICIENCY_(DAGGER)", "ID_FMP_FEAT_1115", "Arcane Implement Proficiency"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(DAGGER)"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Arcane Implement Proficiency (heavy blade group)"] = new RulesElement({
    name: "Arcane Implement Proficiency (heavy blade group)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARCANE_IMPLEMENT_PROFICIENCY_(HEAVY_BLADE_GROUP)",
    source: "Arcane Power",
    categories: ["Arcane Implement Proficiency (heavy blade group)", "ID_INTERNAL_CLASS_FEATURE_ARCANE_IMPLEMENT_PROFICIENCY_(HEAVY_BLADE_GROUP)", "ID_FMP_FEAT_1115", "Arcane Implement Proficiency"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(HEAVY_BLADE_GROUP)"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Arcane Implement Proficiency (light blade group)"] = new RulesElement({
    name: "Arcane Implement Proficiency (light blade group)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARCANE_IMPLEMENT_PROFICIENCY_(LIGHT_BLADE_GROUP)",
    source: "Arcane Power",
    categories: ["Arcane Implement Proficiency (light blade group)", "ID_INTERNAL_CLASS_FEATURE_ARCANE_IMPLEMENT_PROFICIENCY_(LIGHT_BLADE_GROUP)", "ID_FMP_FEAT_1115", "Arcane Implement Proficiency"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(LIGHT_BLADE_GROUP)"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Arcane Implement Proficiency (Orb)"] = new RulesElement({
    name: "Arcane Implement Proficiency (Orb)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARCANE_IMPLEMENT_PROFICIENCY_(ORB)",
    source: "Arcane Power",
    categories: ["Arcane Implement Proficiency (Orb)", "ID_INTERNAL_CLASS_FEATURE_ARCANE_IMPLEMENT_PROFICIENCY_(ORB)", "ID_FMP_FEAT_1115", "Arcane Implement Proficiency"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(ORB)"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Arcane Implement Proficiency (Rod)"] = new RulesElement({
    name: "Arcane Implement Proficiency (Rod)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARCANE_IMPLEMENT_PROFICIENCY_(ROD)",
    source: "Arcane Power",
    categories: ["Arcane Implement Proficiency (Rod)", "ID_INTERNAL_CLASS_FEATURE_ARCANE_IMPLEMENT_PROFICIENCY_(ROD)", "ID_FMP_FEAT_1115", "Arcane Implement Proficiency"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(ROD)"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Arcane Implement Proficiency (Staff)"] = new RulesElement({
    name: "Arcane Implement Proficiency (Staff)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARCANE_IMPLEMENT_PROFICIENCY_(STAFF)",
    source: "Arcane Power",
    categories: ["Arcane Implement Proficiency (Staff)", "ID_INTERNAL_CLASS_FEATURE_ARCANE_IMPLEMENT_PROFICIENCY_(STAFF)", "ID_FMP_FEAT_1115", "Arcane Implement Proficiency"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(STAFF)"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Arcane Implement Proficiency (Tome)"] = new RulesElement({
    name: "Arcane Implement Proficiency (Tome)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARCANE_IMPLEMENT_PROFICIENCY_(TOME)",
    source: "Arcane Power",
    categories: ["Arcane Implement Proficiency (Tome)", "ID_INTERNAL_CLASS_FEATURE_ARCANE_IMPLEMENT_PROFICIENCY_(TOME)", "ID_FMP_FEAT_1115", "Arcane Implement Proficiency"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(TOME)"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Arcane Implement Proficiency (Wand)"] = new RulesElement({
    name: "Arcane Implement Proficiency (Wand)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARCANE_IMPLEMENT_PROFICIENCY_(WAND)",
    source: "Arcane Power",
    categories: ["Arcane Implement Proficiency (Wand)", "ID_INTERNAL_CLASS_FEATURE_ARCANE_IMPLEMENT_PROFICIENCY_(WAND)", "ID_FMP_FEAT_1115", "Arcane Implement Proficiency"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(WAND)"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Archlich Knowledge"] = new RulesElement({
    name: "Archlich Knowledge",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1454",
    source: "Arcane Power",
    categories: ["Archlich Knowledge", "ID_FMP_CLASS_FEATURE_1454", "21"],
    rules: function(model) {
      model.statadd("Intelligence", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Archlich Phylactery"] = new RulesElement({
    name: "Archlich Phylactery",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1455",
    source: "Arcane Power",
    categories: ["Archlich Phylactery", "ID_FMP_CLASS_FEATURE_1455", "21"]
  });
  byID[te.id] = te;
  
  te = class_feature["As if Illusion"] = new RulesElement({
    name: "As if Illusion",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1477",
    source: "Arcane Power",
    categories: ["As if Illusion", "ID_FMP_CLASS_FEATURE_1477", "21"]
  });
  byID[te.id] = te;
  
  te = class_feature["Assaulting Charge"] = new RulesElement({
    name: "Assaulting Charge",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1400",
    source: "Arcane Power",
    categories: ["Assaulting Charge", "ID_FMP_CLASS_FEATURE_1400", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Assaulting Charge:When you spend an action point to charge, you can use a melee at-will attack power or a melee encounter attack power in place of the charge's melee basic attack.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Attune Target"] = new RulesElement({
    name: "Attune Target",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1439",
    source: "Arcane Power",
    categories: ["Attune Target", "ID_FMP_CLASS_FEATURE_1439", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Balanced Sum"] = new RulesElement({
    name: "Balanced Sum",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1471",
    source: "Arcane Power",
    categories: ["Balanced Sum", "ID_FMP_CLASS_FEATURE_1471", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Battlemage Readiness"] = new RulesElement({
    name: "Battlemage Readiness",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1401",
    source: "Arcane Power",
    categories: ["Battlemage Readiness", "ID_FMP_CLASS_FEATURE_1401", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Blazing Sun"] = new RulesElement({
    name: "Blazing Sun",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1513",
    source: "Arcane Power",
    categories: ["Blazing Sun", "ID_FMP_CLASS_FEATURE_1513", "ID_FMP_CLASS_FEATURE_1374", "Phase Focus", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Blink Strike"] = new RulesElement({
    name: "Blink Strike",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1433",
    source: "Arcane Power",
    categories: ["Blink Strike", "ID_FMP_CLASS_FEATURE_1433", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Blizzard's Action"] = new RulesElement({
    name: "Blizzard's Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1443",
    source: "Arcane Power",
    categories: ["Blizzard's Action", "ID_FMP_CLASS_FEATURE_1443", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Blizzard's Action:When you spend an action point to take an extra action, each enemy adjacent to you takes 5 cold damage and is slowed until the end of your next turn. At 21st level, the cold damage increases to 10.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Bolstering Sigil"] = new RulesElement({
    name: "Bolstering Sigil",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1398",
    source: "Arcane Power",
    categories: ["Bolstering Sigil", "ID_FMP_CLASS_FEATURE_1398", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Bond of Escape"] = new RulesElement({
    name: "Bond of Escape",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1396",
    source: "Arcane Power",
    categories: ["Bond of Escape", "ID_FMP_CLASS_FEATURE_1396", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Bond of Fury"] = new RulesElement({
    name: "Bond of Fury",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1395",
    source: "Arcane Power",
    categories: ["Bond of Fury", "ID_FMP_CLASS_FEATURE_1395", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Bond of Transport"] = new RulesElement({
    name: "Bond of Transport",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1394",
    source: "Arcane Power",
    categories: ["Bond of Transport", "ID_FMP_CLASS_FEATURE_1394", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Bond of Transport:When you spend an action point to take an extra action, you can teleport one creature that is adjacent to you 5 squares, or you can teleport one creature that is marked by your aegis of ensnarement 5 squares.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Bow Implement"] = new RulesElement({
    name: "Bow Implement",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1351",
    source: "Arcane Power",
    categories: ["Bow Implement", "ID_FMP_CLASS_FEATURE_1351", "11"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Celestial Action"] = new RulesElement({
    name: "Celestial Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1372",
    source: "Arcane Power",
    categories: ["Celestial Action", "ID_FMP_CLASS_FEATURE_1372", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Celestial Action:When you spend an action point to take an extra action, you gain a +2 bonus to attack rolls and damage rolls with cold, psychic, and radiant powers until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Celestial Defense"] = new RulesElement({
    name: "Celestial Defense",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1375",
    source: "Arcane Power",
    categories: ["Celestial Defense", "ID_FMP_CLASS_FEATURE_1375", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Channel Entropy"] = new RulesElement({
    name: "Channel Entropy",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1448",
    source: "Arcane Power",
    categories: ["Channel Entropy", "ID_FMP_CLASS_FEATURE_1448", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Chill Winds"] = new RulesElement({
    name: "Chill Winds",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1371",
    source: "Arcane Power",
    categories: ["Chill Winds", "ID_FMP_CLASS_FEATURE_1371", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Cosmic Concordance"] = new RulesElement({
    name: "Cosmic Concordance",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1373",
    source: "Arcane Power",
    categories: ["Cosmic Concordance", "ID_FMP_CLASS_FEATURE_1373", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Cosmic Magic"] = new RulesElement({
    name: "Cosmic Magic",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1368",
    source: "Arcane Power",
    categories: ["Cosmic Magic", "ID_FMP_CLASS_FEATURE_1368", "ID_FMP_CLASS_FEATURE_850", "Spell Source", "1"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1554"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1555"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1556"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Cosmic Persistence"] = new RulesElement({
    name: "Cosmic Persistence",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1554",
    source: "Arcane Power",
    categories: ["Cosmic Persistence", "ID_FMP_CLASS_FEATURE_1554", "1"],
    rules: function(model) {
      model.statadd("AC", function() { 
        if (!(model.wearing('Armor', ['heavy']))) {
          return model.stat("Strength modifier");
        } else return 0;
       }, "Ability");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Cosmic Power"] = new RulesElement({
    name: "Cosmic Power",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1555",
    source: "Arcane Power",
    categories: ["Cosmic Power", "ID_FMP_CLASS_FEATURE_1555", "1"],
    rules: function(model) {
      model.statadd("arcane:damage", function() { return model.stat("Strength modifier"); });
      model.statadd("arcane:damage", 2);
      model.statadd("arcane:damage", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Damning Curse"] = new RulesElement({
    name: "Damning Curse",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1420",
    source: "Arcane Power",
    categories: ["Damning Curse", "ID_FMP_CLASS_FEATURE_1420", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Damning Curse:When you spend an action point to take an extra action, each creature under your Warlock's Curse takes a -2 penalty to attack rolls until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Dark Shadow Action"] = new RulesElement({
    name: "Dark Shadow Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1409",
    source: "Arcane Power",
    categories: ["Dark Shadow Action", "ID_FMP_CLASS_FEATURE_1409", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Dark Shadow Action:When you spend an action point to take an extra action, you and any allies within 5 squares of you when you spend the action point gain concealment until the start of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Death Curse"] = new RulesElement({
    name: "Death Curse",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_384",
    source: "Arcane Power",
    categories: ["Death Curse", "ID_FMP_CLASS_FEATURE_384", "16"],
    rules: function(model) {
      model.statadd("Warlock's Curse", "+1d6");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Dirge of Inescapable Doom"] = new RulesElement({
    name: "Dirge of Inescapable Doom",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1355",
    source: "Arcane Power",
    categories: ["Dirge of Inescapable Doom", "ID_FMP_CLASS_FEATURE_1355", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Distant Stars"] = new RulesElement({
    name: "Distant Stars",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1515",
    source: "Arcane Power",
    categories: ["Distant Stars", "ID_FMP_CLASS_FEATURE_1515", "ID_FMP_CLASS_FEATURE_1374", "Phase Focus", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Dominion over the Mind"] = new RulesElement({
    name: "Dominion over the Mind",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1465",
    source: "Arcane Power",
    categories: ["Dominion over the Mind", "ID_FMP_CLASS_FEATURE_1465", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Dormant Power"] = new RulesElement({
    name: "Dormant Power",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1416",
    source: "Arcane Power",
    categories: ["Dormant Power", "ID_FMP_CLASS_FEATURE_1416", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Double Spell Assault"] = new RulesElement({
    name: "Double Spell Assault",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1402",
    source: "Arcane Power",
    categories: ["Double Spell Assault", "ID_FMP_CLASS_FEATURE_1402", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Dragon Breath Action (Dragon Guardian)"] = new RulesElement({
    name: "Dragon Breath Action (Dragon Guardian)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1376",
    source: "Arcane Power",
    categories: ["Dragon Breath Action (Dragon Guardian)", "ID_FMP_CLASS_FEATURE_1376", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Dragon Breath Action (Dragon Guardian):Whenever you spend an action point to make a close blast attack, the attack can score a critical hit on a roll of 16–20.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Eldritch Storm"] = new RulesElement({
    name: "Eldritch Storm",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1431",
    source: "Arcane Power",
    categories: ["Eldritch Storm", "ID_FMP_CLASS_FEATURE_1431", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Electric Action"] = new RulesElement({
    name: "Electric Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1382",
    source: "Arcane Power",
    categories: ["Electric Action", "ID_FMP_CLASS_FEATURE_1382", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Electric Action:When you spend an action point to take an extra action, you deal lightning damage equal to your Dexterity modifier to one, two, or three creatures of your choice within 5 squares of you.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Energizing Sigil"] = new RulesElement({
    name: "Energizing Sigil",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1397",
    source: "Arcane Power",
    categories: ["Energizing Sigil", "ID_FMP_CLASS_FEATURE_1397", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Energizing Sigil:When you spend an action point to take an extra action, one ally within 5 squares of you can roll a saving throw against each effect on him or her that a save can end.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Energy Essence"] = new RulesElement({
    name: "Energy Essence",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1380",
    source: "Arcane Power",
    categories: ["Energy Essence", "ID_FMP_CLASS_FEATURE_1380", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Enhanced Invisibility"] = new RulesElement({
    name: "Enhanced Invisibility",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1445",
    source: "Arcane Power",
    categories: ["Enhanced Invisibility", "ID_FMP_CLASS_FEATURE_1445", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Entropic Action"] = new RulesElement({
    name: "Entropic Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1449",
    source: "Arcane Power",
    categories: ["Entropic Action", "ID_FMP_CLASS_FEATURE_1449", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Entropic Action:When you spend an action point to take an extra action, you can roll a d6. If the roll is an even number, you add that many entropy points to your pool and teleport that many squares. If the roll is an odd number, you subtract that many entropy points from your pool (to a minimum of 0) and teleport an enemy within 5 squares of you that many squares.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Essence of Undeath"] = new RulesElement({
    name: "Essence of Undeath",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1459",
    source: "Arcane Power",
    categories: ["Essence of Undeath", "ID_FMP_CLASS_FEATURE_1459", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Essential Action"] = new RulesElement({
    name: "Essential Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1379",
    source: "Arcane Power",
    categories: ["Essential Action", "ID_FMP_CLASS_FEATURE_1379", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Essential Action:When you spend an action point to take an extra action, you gain a +4 bonus to attack rolls with arcane powers until the start of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Essential Resistance"] = new RulesElement({
    name: "Essential Resistance",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1381",
    source: "Arcane Power",
    categories: ["Essential Resistance", "ID_FMP_CLASS_FEATURE_1381", "16"],
    rules: function(model) {
      model.statadd("resist:fire", 3);
      model.statadd("resist:fire", 1);
      model.statadd("resist:cold", 3);
      model.statadd("resist:cold", 1);
      model.statadd("resist:thunder", 3);
      model.statadd("resist:thunder", 1);
      model.statadd("resist:lightning", 3);
      model.statadd("resist:lightning", 1);
      model.statadd("resist:acid", 3);
      model.statadd("resist:acid", 1);
      model.statadd("resist:poison", 3);
      model.statadd("resist:poison", 1);
      model.statadd("resist:radiant", 3);
      model.statadd("resist:radiant", 1);
      model.statadd("resist:necrotic", 3);
      model.statadd("resist:necrotic", 1);
      model.statadd("resist:force", 3);
      model.statadd("resist:force", 1);
      model.statadd("resist:psychic", 3);
      model.statadd("resist:psychic", 1);
      model.statadd("resist:radiant fire", 3);
      model.statadd("resist:radiant fire", 1);
      model.statadd("resist:dragons", 3);
      model.statadd("resist:dragons", 1);
      model.statadd("resist:demons", 3);
      model.statadd("resist:demons", 1);
      model.statadd("resist:dragon breath", 3);
      model.statadd("resist:dragon breath", 1);
      model.statadd("resist:ranged", 3);
      model.statadd("resist:ranged", 1);
      model.statadd("resist:all", 3);
      model.statadd("resist:all", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Eternal King on an Eternal Throne"] = new RulesElement({
    name: "Eternal King on an Eternal Throne",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1464",
    source: "Arcane Power",
    categories: ["Eternal King on an Eternal Throne", "ID_FMP_CLASS_FEATURE_1464", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Exploitive Eye"] = new RulesElement({
    name: "Exploitive Eye",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1390",
    source: "Arcane Power",
    categories: ["Exploitive Eye", "ID_FMP_CLASS_FEATURE_1390", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Fate of the Body"] = new RulesElement({
    name: "Fate of the Body",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1425",
    source: "Arcane Power",
    categories: ["Fate of the Body", "ID_FMP_CLASS_FEATURE_1425", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Fated Action"] = new RulesElement({
    name: "Fated Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1361",
    source: "Arcane Power",
    categories: ["Fated Action", "ID_FMP_CLASS_FEATURE_1361", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Fated Action:When you spend an action point to take an extra action, you can reroll any single d20 roll you make this turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Feywild Charm"] = new RulesElement({
    name: "Feywild Charm",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1463",
    source: "Arcane Power",
    categories: ["Feywild Charm", "ID_FMP_CLASS_FEATURE_1463", "21"],
    rules: function(model) {
      model.statadd("Charisma", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Find Another Way"] = new RulesElement({
    name: "Find Another Way",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1364",
    source: "Arcane Power",
    categories: ["Find Another Way", "ID_FMP_CLASS_FEATURE_1364", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Flames of Empowerment"] = new RulesElement({
    name: "Flames of Empowerment",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1417",
    source: "Arcane Power",
    categories: ["Flames of Empowerment", "ID_FMP_CLASS_FEATURE_1417", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Flames of Empowerment:When you spend an action point to make a ranged attack, and that attack hits, it deals 2d6 extra fire damage to the attack's target and each enemy that is adjacent to the target.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Frostbite Summoning"] = new RulesElement({
    name: "Frostbite Summoning",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1444",
    source: "Arcane Power",
    categories: ["Frostbite Summoning", "ID_FMP_CLASS_FEATURE_1444", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Fulcrum of Power"] = new RulesElement({
    name: "Fulcrum of Power",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1472",
    source: "Arcane Power",
    categories: ["Fulcrum of Power", "ID_FMP_CLASS_FEATURE_1472", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Future Evaded"] = new RulesElement({
    name: "Future Evaded",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1428",
    source: "Arcane Power",
    categories: ["Future Evaded", "ID_FMP_CLASS_FEATURE_1428", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Future Foreseen"] = new RulesElement({
    name: "Future Foreseen",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1427",
    source: "Arcane Power",
    categories: ["Future Foreseen", "ID_FMP_CLASS_FEATURE_1427", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Gravecall Action"] = new RulesElement({
    name: "Gravecall Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1356",
    source: "Arcane Power",
    categories: ["Gravecall Action", "ID_FMP_CLASS_FEATURE_1356", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Gravecall Action:When you spend an action point to take an extra action, you gain a +4 bonus to damage rolls until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Greater Hex"] = new RulesElement({
    name: "Greater Hex",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1421",
    source: "Arcane Power",
    categories: ["Greater Hex", "ID_FMP_CLASS_FEATURE_1421", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Guardian's Action"] = new RulesElement({
    name: "Guardian's Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1403",
    source: "Arcane Power",
    categories: ["Guardian's Action", "ID_FMP_CLASS_FEATURE_1403", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Guardian's Action:When you spend an action point to make an attack, any allies you can see gain the benefit of your Swordmage Warding until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Guardian's Resistance"] = new RulesElement({
    name: "Guardian's Resistance",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1377",
    source: "Arcane Power",
    categories: ["Guardian's Resistance", "ID_FMP_CLASS_FEATURE_1377", "11"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("Dragon Soul Resist Choice"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Harmonic Action"] = new RulesElement({
    name: "Harmonic Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1353",
    source: "Arcane Power",
    categories: ["Harmonic Action", "ID_FMP_CLASS_FEATURE_1353", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Harmonic Action:When you spend an action point to take an extra action, one ally you choose within 10 squares of you can make a basic attack as a free action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Heal the Besieged"] = new RulesElement({
    name: "Heal the Besieged",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1360",
    source: "Arcane Power",
    categories: ["Heal the Besieged", "ID_FMP_CLASS_FEATURE_1360", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Here nor There"] = new RulesElement({
    name: "Here nor There",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1392",
    source: "Arcane Power",
    categories: ["Here nor There", "ID_FMP_CLASS_FEATURE_1392", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Icy Action"] = new RulesElement({
    name: "Icy Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1369",
    source: "Arcane Power",
    categories: ["Icy Action", "ID_FMP_CLASS_FEATURE_1369", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Icy Action:Whenever you spend an action point to make an attack, each creature you hit or miss with the attack is slowed (save ends).");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Immanence Variable Resistance"] = new RulesElement({
    name: "Immanence Variable Resistance",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1467",
    source: "Arcane Power",
    categories: ["Immanence Variable Resistance", "ID_FMP_CLASS_FEATURE_1467", "21"]
  });
  byID[te.id] = te;
  
  te = class_feature["Indomitable Breath"] = new RulesElement({
    name: "Indomitable Breath",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1378",
    source: "Arcane Power",
    categories: ["Indomitable Breath", "ID_FMP_CLASS_FEATURE_1378", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Karmic Strike"] = new RulesElement({
    name: "Karmic Strike",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1363",
    source: "Arcane Power",
    categories: ["Karmic Strike", "ID_FMP_CLASS_FEATURE_1363", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Karmic Virtue"] = new RulesElement({
    name: "Karmic Virtue",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1362",
    source: "Arcane Power",
    categories: ["Karmic Virtue", "ID_FMP_CLASS_FEATURE_1362", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Keeper's Prescience"] = new RulesElement({
    name: "Keeper's Prescience",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1481",
    source: "Arcane Power",
    categories: ["Keeper's Prescience", "ID_FMP_CLASS_FEATURE_1481", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Knowing Strike"] = new RulesElement({
    name: "Knowing Strike",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1388",
    source: "Arcane Power",
    categories: ["Knowing Strike", "ID_FMP_CLASS_FEATURE_1388", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Knowing Strike:When you spend an action point to make an attack, that attack ignores all resistances and the insubstantial quality.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Lich Resistances"] = new RulesElement({
    name: "Lich Resistances",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1457",
    source: "Arcane Power",
    categories: ["Lich Resistances", "ID_FMP_CLASS_FEATURE_1457", "21"],
    rules: function(model) {
      model.statadd("_lich resist", 5);
      model.statadd("_lich resist", function() { return model.stat("HALF-LEVEL"); });
      model.statadd("resist:necrotic", function() { return model.stat("_lich resist"); }, "resist");
      model.statadd("resist:poison", function() { return model.stat("_lich resist"); }, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Lifegiving Action"] = new RulesElement({
    name: "Lifegiving Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1414",
    source: "Arcane Power",
    categories: ["Lifegiving Action", "ID_FMP_CLASS_FEATURE_1414", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Lifegiving Action:When you spend an action point to take an extra action, you regain hit points equal to your level.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Life's Illusion"] = new RulesElement({
    name: "Life's Illusion",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1479",
    source: "Arcane Power",
    categories: ["Life's Illusion", "ID_FMP_CLASS_FEATURE_1479", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Lightning Field"] = new RulesElement({
    name: "Lightning Field",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1384",
    source: "Arcane Power",
    categories: ["Lightning Field", "ID_FMP_CLASS_FEATURE_1384", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Lightning Quick"] = new RulesElement({
    name: "Lightning Quick",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1429",
    source: "Arcane Power",
    categories: ["Lightning Quick", "ID_FMP_CLASS_FEATURE_1429", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Lightning Quick:When you spend an action point to take an extra action, you become lightning quick until the end of your next turn. While you are lightning quick, you can shift 1 square as a free action each time you hit or miss with an attack.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Living Spell"] = new RulesElement({
    name: "Living Spell",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1462",
    source: "Arcane Power",
    categories: ["Living Spell", "ID_FMP_CLASS_FEATURE_1462", "30"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Maddening Action"] = new RulesElement({
    name: "Maddening Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1411",
    source: "Arcane Power",
    categories: ["Maddening Action", "ID_FMP_CLASS_FEATURE_1411", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Maddening Action:When you spend an action point to take an extra action, one creature within 5 squares of you takes ongoing 5 psychic damage (save ends).");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Magic's Flow"] = new RulesElement({
    name: "Magic's Flow",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1474",
    source: "Arcane Power",
    categories: ["Magic's Flow", "ID_FMP_CLASS_FEATURE_1474", "21"]
  });
  byID[te.id] = te;
  
  te = class_feature["Magic's Master"] = new RulesElement({
    name: "Magic's Master",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1476",
    source: "Arcane Power",
    categories: ["Magic's Master", "ID_FMP_CLASS_FEATURE_1476", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Magister's Knack"] = new RulesElement({
    name: "Magister's Knack",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1473",
    source: "Arcane Power",
    categories: ["Magister's Knack", "ID_FMP_CLASS_FEATURE_1473", "21"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("Magister's Knack"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Magister's Knack Charisma"] = new RulesElement({
    name: "Magister's Knack Charisma",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_MAGISTER'S_KNACK_CHARISMA",
    source: "Arcane Power",
    categories: ["Magister's Knack Charisma", "ID_INTERNAL_CLASS_FEATURE_MAGISTER'S_KNACK_CHARISMA", "Magister's Knack"],
    rules: function(model) {
      model.statadd("Charisma", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Magister's Knack Constitution"] = new RulesElement({
    name: "Magister's Knack Constitution",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_MAGISTER'S_KNACK_CONSTITUTION",
    source: "Arcane Power",
    categories: ["Magister's Knack Constitution", "ID_INTERNAL_CLASS_FEATURE_MAGISTER'S_KNACK_CONSTITUTION", "Magister's Knack"],
    rules: function(model) {
      model.statadd("Constitution", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Magister's Knack Dexterity"] = new RulesElement({
    name: "Magister's Knack Dexterity",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_MAGISTER'S_KNACK_DEXTERITY",
    source: "Arcane Power",
    categories: ["Magister's Knack Dexterity", "ID_INTERNAL_CLASS_FEATURE_MAGISTER'S_KNACK_DEXTERITY", "Magister's Knack"],
    rules: function(model) {
      model.statadd("Dexterity", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Magister's Knack Intelligence"] = new RulesElement({
    name: "Magister's Knack Intelligence",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_MAGISTER'S_KNACK_INTELLIGENCE",
    source: "Arcane Power",
    categories: ["Magister's Knack Intelligence", "ID_INTERNAL_CLASS_FEATURE_MAGISTER'S_KNACK_INTELLIGENCE", "Magister's Knack"],
    rules: function(model) {
      model.statadd("Intelligence", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Magister's Knack Strength"] = new RulesElement({
    name: "Magister's Knack Strength",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_MAGISTER'S_KNACK_STRENGTH",
    source: "Arcane Power",
    categories: ["Magister's Knack Strength", "ID_INTERNAL_CLASS_FEATURE_MAGISTER'S_KNACK_STRENGTH", "Magister's Knack"],
    rules: function(model) {
      model.statadd("Strength", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Magister's Knack Wisdom"] = new RulesElement({
    name: "Magister's Knack Wisdom",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_MAGISTER'S_KNACK_WISDOM",
    source: "Arcane Power",
    categories: ["Magister's Knack Wisdom", "ID_INTERNAL_CLASS_FEATURE_MAGISTER'S_KNACK_WISDOM", "Magister's Knack"],
    rules: function(model) {
      model.statadd("Wisdom", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Mastery over Death"] = new RulesElement({
    name: "Mastery over Death",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1458",
    source: "Arcane Power",
    categories: ["Mastery over Death", "ID_FMP_CLASS_FEATURE_1458", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Mystery Given Form"] = new RulesElement({
    name: "Mystery Given Form",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1413",
    source: "Arcane Power",
    categories: ["Mystery Given Form", "ID_FMP_CLASS_FEATURE_1413", "16"],
    rules: function(model) {
      model.statadd("charm:attack", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Mystic Rapture"] = new RulesElement({
    name: "Mystic Rapture",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1412",
    source: "Arcane Power",
    categories: ["Mystic Rapture", "ID_FMP_CLASS_FEATURE_1412", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Never Really There"] = new RulesElement({
    name: "Never Really There",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1478",
    source: "Arcane Power",
    categories: ["Never Really There", "ID_FMP_CLASS_FEATURE_1478", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["No Pity, No Mercy"] = new RulesElement({
    name: "No Pity, No Mercy",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1418",
    source: "Arcane Power",
    categories: ["No Pity, No Mercy", "ID_FMP_CLASS_FEATURE_1418", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Orb of Deception"] = new RulesElement({
    name: "Orb of Deception",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1509",
    source: "Arcane Power",
    categories: ["Orb of Deception", "ID_FMP_CLASS_FEATURE_1509", "ID_FMP_CLASS_FEATURE_444", "Arcane Implement Mastery", "1"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_7544"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Overwhelming Elements"] = new RulesElement({
    name: "Overwhelming Elements",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1387",
    source: "Arcane Power",
    categories: ["Overwhelming Elements", "ID_FMP_CLASS_FEATURE_1387", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Paragon of Learning"] = new RulesElement({
    name: "Paragon of Learning",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1480",
    source: "Arcane Power",
    categories: ["Paragon of Learning", "ID_FMP_CLASS_FEATURE_1480", "21"],
    rules: function(model) {
      model.statadd("Arcana Misc", 6);
      model.statadd("Dungeoneering Misc", 6);
      model.statadd("History Misc", 6);
      model.statadd("Nature Misc", 6);
      model.statadd("Religion Misc", 6);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Path to the Grave"] = new RulesElement({
    name: "Path to the Grave",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1357",
    source: "Arcane Power",
    categories: ["Path to the Grave", "ID_FMP_CLASS_FEATURE_1357", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Peaceful Action"] = new RulesElement({
    name: "Peaceful Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1365",
    source: "Arcane Power",
    categories: ["Peaceful Action", "ID_FMP_CLASS_FEATURE_1365", "11"],
    rules: function(model) {
      model.statadd("ALLY.Action Point", "Peaceful Action:Whenever an ally within 5 squares of you spends an action point to take an extra action that is not an attack, that ally gains 1d8 + your Charisma modifier temporary hit points");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Perfect Strike"] = new RulesElement({
    name: "Perfect Strike",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1389",
    source: "Arcane Power",
    categories: ["Perfect Strike", "ID_FMP_CLASS_FEATURE_1389", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Phase Focus"] = new RulesElement({
    name: "Phase Focus",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1374",
    source: "Arcane Power",
    categories: ["Phase Focus", "ID_FMP_CLASS_FEATURE_1374", "11"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_FEATURE_1374"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Play the Odds"] = new RulesElement({
    name: "Play the Odds",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1450",
    source: "Arcane Power",
    categories: ["Play the Odds", "ID_FMP_CLASS_FEATURE_1450", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Primordial Action"] = new RulesElement({
    name: "Primordial Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1385",
    source: "Arcane Power",
    categories: ["Primordial Action", "ID_FMP_CLASS_FEATURE_1385", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Primordial Action:When you spend an action point to take an extra action, each enemy within 3 squares of you takes damage equal to your Dexterity modifier. The damage type matches the type of resistance currently provided by your Wild Soul.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Primordial Manifestation"] = new RulesElement({
    name: "Primordial Manifestation",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1386",
    source: "Arcane Power",
    categories: ["Primordial Manifestation", "ID_FMP_CLASS_FEATURE_1386", "1"]
  });
  byID[te.id] = te;
  
  te = class_feature["Prince of Hell"] = new RulesElement({
    name: "Prince of Hell",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1419",
    source: "Arcane Power",
    categories: ["Prince of Hell", "ID_FMP_CLASS_FEATURE_1419", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Punishing Sigil"] = new RulesElement({
    name: "Punishing Sigil",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1399",
    source: "Arcane Power",
    categories: ["Punishing Sigil", "ID_FMP_CLASS_FEATURE_1399", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Reactive Spellshield"] = new RulesElement({
    name: "Reactive Spellshield",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1405",
    source: "Arcane Power",
    categories: ["Reactive Spellshield", "ID_FMP_CLASS_FEATURE_1405", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Return of the Magister"] = new RulesElement({
    name: "Return of the Magister",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1475",
    source: "Arcane Power",
    categories: ["Return of the Magister", "ID_FMP_CLASS_FEATURE_1475", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Returning Spell"] = new RulesElement({
    name: "Returning Spell",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1461",
    source: "Arcane Power",
    categories: ["Returning Spell", "ID_FMP_CLASS_FEATURE_1461", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Reverse Time"] = new RulesElement({
    name: "Reverse Time",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1482",
    source: "Arcane Power",
    categories: ["Reverse Time", "ID_FMP_CLASS_FEATURE_1482", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Road to Reawakening"] = new RulesElement({
    name: "Road to Reawakening",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1415",
    source: "Arcane Power",
    categories: ["Road to Reawakening", "ID_FMP_CLASS_FEATURE_1415", "11"],
    rules: function(model) {
      model.statadd("DeathSaving Throws", 3);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Saboteur's Action"] = new RulesElement({
    name: "Saboteur's Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1440",
    source: "Arcane Power",
    categories: ["Saboteur's Action", "ID_FMP_CLASS_FEATURE_1440", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Saboteur's Action:When you spend an action point to use an area or close wizard attack power, all targets of that power grant combat advantage to you until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Serene Will"] = new RulesElement({
    name: "Serene Will",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1366",
    source: "Arcane Power",
    categories: ["Serene Will", "ID_FMP_CLASS_FEATURE_1366", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Servant of the Lord of Lightning"] = new RulesElement({
    name: "Servant of the Lord of Lightning",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1432",
    source: "Arcane Power",
    categories: ["Servant of the Lord of Lightning", "ID_FMP_CLASS_FEATURE_1432", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Shadow and Threat"] = new RulesElement({
    name: "Shadow and Threat",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1407",
    source: "Arcane Power",
    categories: ["Shadow and Threat", "ID_FMP_CLASS_FEATURE_1407", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Shared Resistance"] = new RulesElement({
    name: "Shared Resistance",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1469",
    source: "Arcane Power",
    categories: ["Shared Resistance", "ID_FMP_CLASS_FEATURE_1469", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Shroud of Life and Death"] = new RulesElement({
    name: "Shroud of Life and Death",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1456",
    source: "Arcane Power",
    categories: ["Shroud of Life and Death", "ID_FMP_CLASS_FEATURE_1456", "21"]
  });
  byID[te.id] = te;
  
  te = class_feature["Shrouding Action"] = new RulesElement({
    name: "Shrouding Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1349",
    source: "Arcane Power",
    categories: ["Shrouding Action", "ID_FMP_CLASS_FEATURE_1349", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Shrouding Action:When you spend an action point to take an extra action, you and one ally you choose within 5 squares of you become invisible until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Signature Spell"] = new RulesElement({
    name: "Signature Spell",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1460",
    source: "Arcane Power",
    categories: ["Signature Spell", "ID_FMP_CLASS_FEATURE_1460", "21"],
    rules: function(model) {
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory("daily") && element.hasCategory("Arcane")); }
      });
      model.statadd("[Signature Spell]:attack", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Skilled Speech"] = new RulesElement({
    name: "Skilled Speech",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1358",
    source: "Arcane Power",
    categories: ["Skilled Speech", "ID_FMP_CLASS_FEATURE_1358", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Slip the Weave"] = new RulesElement({
    name: "Slip the Weave",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1391",
    source: "Arcane Power",
    categories: ["Slip the Weave", "ID_FMP_CLASS_FEATURE_1391", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Slip the Weave:When you spend an action point to take an extra action, you become insubstantial until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Soul of Sorcery Acid"] = new RulesElement({
    name: "Soul of Sorcery Acid",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_SOUL_OF_SORCERY_ACID",
    source: "Arcane Power",
    categories: ["Soul of Sorcery Acid", "ID_INTERNAL_CLASS_FEATURE_SOUL_OF_SORCERY_ACID", "Soul of Sorcery"],
    rules: function(model) {
      model.statadd("resist:acid", 5, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Soul of Sorcery Cold"] = new RulesElement({
    name: "Soul of Sorcery Cold",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_SOUL_OF_SORCERY_COLD",
    source: "Arcane Power",
    categories: ["Soul of Sorcery Cold", "ID_INTERNAL_CLASS_FEATURE_SOUL_OF_SORCERY_COLD", "Soul of Sorcery"],
    rules: function(model) {
      model.statadd("resist:cold", 5, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Soul of Sorcery Fire"] = new RulesElement({
    name: "Soul of Sorcery Fire",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_SOUL_OF_SORCERY_FIRE",
    source: "Arcane Power",
    categories: ["Soul of Sorcery Fire", "ID_INTERNAL_CLASS_FEATURE_SOUL_OF_SORCERY_FIRE", "Soul of Sorcery"],
    rules: function(model) {
      model.statadd("resist:fire", 5, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Soul of Sorcery Force"] = new RulesElement({
    name: "Soul of Sorcery Force",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_SOUL_OF_SORCERY_FORCE",
    source: "Arcane Power",
    categories: ["Soul of Sorcery Force", "ID_INTERNAL_CLASS_FEATURE_SOUL_OF_SORCERY_FORCE", "Soul of Sorcery"],
    rules: function(model) {
      model.statadd("resist:force", 5, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Soul of Sorcery Lightning"] = new RulesElement({
    name: "Soul of Sorcery Lightning",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_SOUL_OF_SORCERY_LIGHTNING",
    source: "Arcane Power",
    categories: ["Soul of Sorcery Lightning", "ID_INTERNAL_CLASS_FEATURE_SOUL_OF_SORCERY_LIGHTNING", "Soul of Sorcery"],
    rules: function(model) {
      model.statadd("resist:lightning", 5, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Soul of Sorcery Necrotic"] = new RulesElement({
    name: "Soul of Sorcery Necrotic",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_SOUL_OF_SORCERY_NECROTIC",
    source: "Arcane Power",
    categories: ["Soul of Sorcery Necrotic", "ID_INTERNAL_CLASS_FEATURE_SOUL_OF_SORCERY_NECROTIC", "Soul of Sorcery"],
    rules: function(model) {
      model.statadd("resist:necrotic", 5, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Soul of Sorcery Poison"] = new RulesElement({
    name: "Soul of Sorcery Poison",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_SOUL_OF_SORCERY_POISON",
    source: "Arcane Power",
    categories: ["Soul of Sorcery Poison", "ID_INTERNAL_CLASS_FEATURE_SOUL_OF_SORCERY_POISON", "Soul of Sorcery"],
    rules: function(model) {
      model.statadd("resist:poison", 5, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Soul of Sorcery Psychic"] = new RulesElement({
    name: "Soul of Sorcery Psychic",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_SOUL_OF_SORCERY_PSYCHIC",
    source: "Arcane Power",
    categories: ["Soul of Sorcery Psychic", "ID_INTERNAL_CLASS_FEATURE_SOUL_OF_SORCERY_PSYCHIC", "Soul of Sorcery"],
    rules: function(model) {
      model.statadd("resist:psychic", 5, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Soul of Sorcery Radiant"] = new RulesElement({
    name: "Soul of Sorcery Radiant",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_SOUL_OF_SORCERY_RADIANT",
    source: "Arcane Power",
    categories: ["Soul of Sorcery Radiant", "ID_INTERNAL_CLASS_FEATURE_SOUL_OF_SORCERY_RADIANT", "Soul of Sorcery"],
    rules: function(model) {
      model.statadd("resist:radiant", 5, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Soul of Sorcery Thunder"] = new RulesElement({
    name: "Soul of Sorcery Thunder",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_SOUL_OF_SORCERY_THUNDER",
    source: "Arcane Power",
    categories: ["Soul of Sorcery Thunder", "ID_INTERNAL_CLASS_FEATURE_SOUL_OF_SORCERY_THUNDER", "Soul of Sorcery"],
    rules: function(model) {
      model.statadd("resist:thunder", 5, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Soul of the Cosmic Cycle"] = new RulesElement({
    name: "Soul of the Cosmic Cycle",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1556",
    source: "Arcane Power,Player's Handbook 3",
    categories: ["Soul of the Cosmic Cycle", "ID_FMP_CLASS_FEATURE_1556", "1"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_COUNTSASFEATURE_COSMIC_MAGIC"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Spellshield"] = new RulesElement({
    name: "Spellshield",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1404",
    source: "Arcane Power",
    categories: ["Spellshield", "ID_FMP_CLASS_FEATURE_1404", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Spellsword Perfection"] = new RulesElement({
    name: "Spellsword Perfection",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1453",
    source: "Arcane Power",
    categories: ["Spellsword Perfection", "ID_FMP_CLASS_FEATURE_1453", "30"],
    rules: function(model) {
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_53") && element.hasCategory("encounter")); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Spellsword Recall"] = new RulesElement({
    name: "Spellsword Recall",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1451",
    source: "Arcane Power",
    categories: ["Spellsword Recall", "ID_FMP_CLASS_FEATURE_1451", "21"],
    rules: function(model) {
      model.statadd("Action Point", "Spellsword Recall:When you spend an action point to take an extra action, you regain one of your expended swordmage encounter attack powers before using that action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Spirit of Energy"] = new RulesElement({
    name: "Spirit of Energy",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1468",
    source: "Arcane Power",
    categories: ["Spirit of Energy", "ID_FMP_CLASS_FEATURE_1468", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Stalker of the In-between"] = new RulesElement({
    name: "Stalker of the In-between",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1393",
    source: "Arcane Power",
    categories: ["Stalker of the In-between", "ID_FMP_CLASS_FEATURE_1393", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Star-Blessed Wanderer"] = new RulesElement({
    name: "Star-Blessed Wanderer",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1424",
    source: "Arcane Power",
    categories: ["Star-Blessed Wanderer", "ID_FMP_CLASS_FEATURE_1424", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Starcrossed Action"] = new RulesElement({
    name: "Starcrossed Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1423",
    source: "Arcane Power",
    categories: ["Starcrossed Action", "ID_FMP_CLASS_FEATURE_1423", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Starcrossed Action:When you spend an action point, one creature cursed by you is dazed until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Storm Magic"] = new RulesElement({
    name: "Storm Magic",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1367",
    source: "Arcane Power",
    categories: ["Storm Magic", "ID_FMP_CLASS_FEATURE_1367", "ID_FMP_CLASS_FEATURE_850", "Spell Source", "1"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1561"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1562"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1563"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Storm Power"] = new RulesElement({
    name: "Storm Power",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1561",
    source: "Arcane Power",
    categories: ["Storm Power", "ID_FMP_CLASS_FEATURE_1561", "1"],
    rules: function(model) {
      model.statadd("Storm Power", function() { return model.stat("Dexterity modifier"); });
      model.statadd("Storm Power", 2);
      model.statadd("Storm Power", 2);
      model.statadd("arcane:damage", function() { return model.stat("Storm Power"); });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Storm Soul"] = new RulesElement({
    name: "Storm Soul",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1562",
    source: "Arcane Power,Player's Handbook 3",
    categories: ["Storm Soul", "ID_FMP_CLASS_FEATURE_1562", "1"],
    rules: function(model) {
      model.statadd("Storm Soul", 5);
      model.statadd("Storm Soul", 5);
      model.statadd("Storm Soul", 5);
      model.statadd("Storm Soul", function() { return model.stat("Spell Source Resist"); });
      model.statadd("resist:thunder", function() { return model.stat("Storm Soul"); }, "resist");
      model.statadd("resist:lightning", function() { return model.stat("Storm Soul"); }, "resist");
      model.grant(elements.id["ID_INTERNAL_COUNTSASFEATURE_STORM_MAGIC"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Storm's Embrace"] = new RulesElement({
    name: "Storm's Embrace",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1563",
    source: "Arcane Power",
    categories: ["Storm's Embrace", "ID_FMP_CLASS_FEATURE_1563", "1"]
  });
  byID[te.id] = te;
  
  te = class_feature["Summoner's Action"] = new RulesElement({
    name: "Summoner's Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1437",
    source: "Arcane Power",
    categories: ["Summoner's Action", "ID_FMP_CLASS_FEATURE_1437", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Summoner's Action:When you spend an action point to take an extra action, as a free action you can issue one minor action command to each of your summoned creatures.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Summoner's Might"] = new RulesElement({
    name: "Summoner's Might",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1438",
    source: "Arcane Power",
    categories: ["Summoner's Might", "ID_FMP_CLASS_FEATURE_1438", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Summoner's Slip"] = new RulesElement({
    name: "Summoner's Slip",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1436",
    source: "Arcane Power",
    categories: ["Summoner's Slip", "ID_FMP_CLASS_FEATURE_1436", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Sword's Vengeance"] = new RulesElement({
    name: "Sword's Vengeance",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1452",
    source: "Arcane Power",
    categories: ["Sword's Vengeance", "ID_FMP_CLASS_FEATURE_1452", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Tome of Binding"] = new RulesElement({
    name: "Tome of Binding",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1510",
    source: "Arcane Power",
    categories: ["Tome of Binding", "ID_FMP_CLASS_FEATURE_1510", "ID_FMP_CLASS_FEATURE_444", "Arcane Implement Mastery", "1"]
  });
  byID[te.id] = te;
  
  te = class_feature["Tome of Readiness"] = new RulesElement({
    name: "Tome of Readiness",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1511",
    source: "Arcane Power",
    categories: ["Tome of Readiness", "ID_FMP_CLASS_FEATURE_1511", "ID_FMP_CLASS_FEATURE_444", "Arcane Implement Mastery", "1"],
    rules: function(model) {
      model.select('Power', 1, {
        filter: function(model, element) { return (true /* NYI: Filter: $$LEVEL */ && element.hasCategory("ID_FMP_CLASS_9") && element.hasCategory("encounter")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Trickster's Mercy"] = new RulesElement({
    name: "Trickster's Mercy",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1350",
    source: "Arcane Power",
    categories: ["Trickster's Mercy", "ID_FMP_CLASS_FEATURE_1350", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Turnabout"] = new RulesElement({
    name: "Turnabout",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1470",
    source: "Arcane Power",
    categories: ["Turnabout", "ID_FMP_CLASS_FEATURE_1470", "21"]
  });
  byID[te.id] = te;
  
  te = class_feature["Unseen Action"] = new RulesElement({
    name: "Unseen Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1446",
    source: "Arcane Power",
    categories: ["Unseen Action", "ID_FMP_CLASS_FEATURE_1446", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Unseen Action:When you use an action point to take an extra action, you become invisible until the end of your next turn");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Unseen Advantage"] = new RulesElement({
    name: "Unseen Advantage",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1447",
    source: "Arcane Power",
    categories: ["Unseen Advantage", "ID_FMP_CLASS_FEATURE_1447", "16"],
    rules: function(model) {
      model.statadd("arcane:damage", "+1d6");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Unstoppable Lightning"] = new RulesElement({
    name: "Unstoppable Lightning",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1383",
    source: "Arcane Power",
    categories: ["Unstoppable Lightning", "ID_FMP_CLASS_FEATURE_1383", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Valorous Action (Half-Elf Emissary)"] = new RulesElement({
    name: "Valorous Action (Half-Elf Emissary)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1359",
    source: "Arcane Power",
    categories: ["Valorous Action (Half-Elf Emissary)", "ID_FMP_CLASS_FEATURE_1359", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Valorous Action (Half-Elf Emissary):When you spend an action point to take an extra action, allies you can see gain a +2 power bonus to all defenses until the end of your next turn. In addition, you regain the use of the encounter power you gained from your Dilettante racial feature if you have used it during this encounter.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Vestige Pact"] = new RulesElement({
    name: "Vestige Pact",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1406",
    source: "Arcane Power,Player's Handbook 3",
    categories: ["Vestige Pact", "ID_FMP_CLASS_FEATURE_1406", "ID_FMP_CLASS_FEATURE_777", "Eldritch Pact", "1"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_6855"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Virtue of Deceit"] = new RulesElement({
    name: "Virtue of Deceit",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1348",
    source: "Arcane Power",
    categories: ["Virtue of Deceit", "ID_FMP_CLASS_FEATURE_1348", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Virtue of Prescience"] = new RulesElement({
    name: "Virtue of Prescience",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1347",
    source: "Arcane Power",
    categories: ["Virtue of Prescience", "ID_FMP_CLASS_FEATURE_1347", "ID_FMP_CLASS_FEATURE_700", "Bardic Virtue", "1"]
  });
  byID[te.id] = te;
  
  te = class_feature["Visionary Action"] = new RulesElement({
    name: "Visionary Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1426",
    source: "Arcane Power",
    categories: ["Visionary Action", "ID_FMP_CLASS_FEATURE_1426", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Visionary Action:When you spend an action point to use an at-will or encounter attack power that misses all targets, you gain an extra standard action that you must use before the end of the encounter.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Volley Fire"] = new RulesElement({
    name: "Volley Fire",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1354",
    source: "Arcane Power",
    categories: ["Volley Fire", "ID_FMP_CLASS_FEATURE_1354", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Walk through Winter"] = new RulesElement({
    name: "Walk through Winter",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1370",
    source: "Arcane Power",
    categories: ["Walk through Winter", "ID_FMP_CLASS_FEATURE_1370", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Walking Curse"] = new RulesElement({
    name: "Walking Curse",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1422",
    source: "Arcane Power",
    categories: ["Walking Curse", "ID_FMP_CLASS_FEATURE_1422", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Watching Moon"] = new RulesElement({
    name: "Watching Moon",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1514",
    source: "Arcane Power",
    categories: ["Watching Moon", "ID_FMP_CLASS_FEATURE_1514", "ID_FMP_CLASS_FEATURE_1374", "Phase Focus", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Wayfarer's Action"] = new RulesElement({
    name: "Wayfarer's Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1434",
    source: "Arcane Power",
    categories: ["Wayfarer's Action", "ID_FMP_CLASS_FEATURE_1434", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Wayfarer's Action:When you spend an action point to take an extra action, you can also teleport 4 squares as a free action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Wayfarer's Step"] = new RulesElement({
    name: "Wayfarer's Step",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1435",
    source: "Arcane Power",
    categories: ["Wayfarer's Step", "ID_FMP_CLASS_FEATURE_1435", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Winter's Embrace"] = new RulesElement({
    name: "Winter's Embrace",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1442",
    source: "Arcane Power",
    categories: ["Winter's Embrace", "ID_FMP_CLASS_FEATURE_1442", "11"],
    rules: function(model) {
      model.statadd("resist:cold", 3);
      model.statadd("resist:cold", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Zebechial's Blessing"] = new RulesElement({
    name: "Zebechial's Blessing",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1430",
    source: "Arcane Power",
    categories: ["Zebechial's Blessing", "ID_FMP_CLASS_FEATURE_1430", "11"],
    rules: function(model) {
      model.statadd("_zebechial resist", function() { return model.stat("Charisma modifier"); });
      model.statadd("_zebechiam resist", function() { return model.stat("HALF-LEVEL"); });
      model.statadd("resist:lightning", function() { return model.stat("_zebechial resist"); }, "resist");
    }
  });
  byID[te.id] = te;
  
  
})(this);
