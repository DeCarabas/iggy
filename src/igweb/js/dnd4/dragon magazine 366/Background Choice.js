define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Background_Choice = types['Background Choice'] || (types['Background Choice'] = {});
  te = Background_Choice["Apprentice of Sinister Cabal Benefit"] = new engine.RulesElement({
    name: "Apprentice of Sinister Cabal Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_APPRENTICE_OF_SINISTER_CABAL_BENEFIT",
    source: "Dragon Magazine 366",
    categories: ["Apprentice of Sinister Cabal Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_APPRENTICE_OF_SINISTER_CABAL_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Arcana Misc", 1);
      model.statadd("Dungeoneering Misc", 1);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Arcana"] = new engine.RulesElement({
    name: "Arcana",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_ARCANA",
    source: "Dragon Magazine 366",
    categories: ["Arcana", "ID_INTERNAL_BACKGROUND_CHOICE_ARCANA", "Noble Scion"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Arcana Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Arcane Student Who Saw Too Much Benefit"] = new engine.RulesElement({
    name: "Arcane Student Who Saw Too Much Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_ARCANE_STUDENT_WHO_SAW_TOO_MUCH_BENEFIT",
    source: "Dragon Magazine 366",
    categories: ["Arcane Student Who Saw Too Much Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_ARCANE_STUDENT_WHO_SAW_TOO_MUCH_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* to end effects that daze, stun, immobilize, or restrain you */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Assassin Benefit"] = new engine.RulesElement({
    name: "Assassin Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_ASSASSIN_BENEFIT",
    source: "Dragon Magazine 366",
    categories: ["Assassin Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_ASSASSIN_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Arcana Misc", 1);
      model.statadd("Stealth Misc", 1);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Auspicious Birth Benefit"] = new engine.RulesElement({
    name: "Auspicious Birth Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_AUSPICIOUS_BIRTH_BENEFIT",
    source: "Dragon Magazine 366",
    categories: ["Auspicious Birth Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_AUSPICIOUS_BIRTH_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.statadd("Hit Points", function() { return model.stat("Strength"); }, "Level 1");
      model.statadd("Hit Points", function() { return model.stat("Dexterity"); }, "Level 1");
      model.statadd("Hit Points", function() { return model.stat("Intelligence"); }, "Level 1");
      model.statadd("Hit Points", function() { return model.stat("Wisdom"); }, "Level 1");
      model.statadd("Hit Points", function() { return model.stat("Charisma"); }, "Level 1");
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Born Under a Bad Sign Benefit"] = new engine.RulesElement({
    name: "Born Under a Bad Sign Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_BORN_UNDER_A_BAD_SIGN_BENEFIT",
    source: "Dragon Magazine 366",
    categories: ["Born Under a Bad Sign Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_BORN_UNDER_A_BAD_SIGN_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.statadd("Hit Points", function() { return model.stat("Strength"); }, "Level 1");
      model.statadd("Hit Points", function() { return model.stat("Dexterity"); }, "Level 1");
      model.statadd("Hit Points", function() { return model.stat("Intelligence"); }, "Level 1");
      model.statadd("Hit Points", function() { return model.stat("Wisdom"); }, "Level 1");
      model.statadd("Hit Points", function() { return model.stat("Charisma"); }, "Level 1");
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Brother in Battle Benefit"] = new engine.RulesElement({
    name: "Brother in Battle Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_BROTHER_IN_BATTLE_BENEFIT",
    source: "Dragon Magazine 366",
    categories: ["Brother in Battle Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_BROTHER_IN_BATTLE_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Endurance Misc", 3);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Cat Burglar Benefit"] = new engine.RulesElement({
    name: "Cat Burglar Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_CAT_BURGLAR_BENEFIT",
    source: "Dragon Magazine 366",
    categories: ["Cat Burglar Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_CAT_BURGLAR_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Athletics Misc", 1);
      model.statadd("Thievery Misc", 1);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Cloistered Priest Benefit"] = new engine.RulesElement({
    name: "Cloistered Priest Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_CLOISTERED_PRIEST_BENEFIT",
    source: "Dragon Magazine 366",
    categories: ["Cloistered Priest Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_CLOISTERED_PRIEST_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Religion Misc", 3);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Con Artist Benefit"] = new engine.RulesElement({
    name: "Con Artist Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_CON_ARTIST_BENEFIT",
    source: "Dragon Magazine 366",
    categories: ["Con Artist Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_CON_ARTIST_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Bluff Misc", 1);
      model.statadd("Thievery Misc", 1);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Crusading Zealot Benefit"] = new engine.RulesElement({
    name: "Crusading Zealot Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_CRUSADING_ZEALOT_BENEFIT",
    source: "Dragon Magazine 366",
    categories: ["Crusading Zealot Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_CRUSADING_ZEALOT_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* until you fail a saving throw, and then the bonus is gone until you rest */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Cult Escapee Benefit"] = new engine.RulesElement({
    name: "Cult Escapee Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_CULT_ESCAPEE_BENEFIT",
    source: "Dragon Magazine 366",
    categories: ["Cult Escapee Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_CULT_ESCAPEE_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Arcana Misc", 1);
      model.statadd("Bluff Misc", 1);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Detective Benefit"] = new engine.RulesElement({
    name: "Detective Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_DETECTIVE_BENEFIT",
    source: "Dragon Magazine 366",
    categories: ["Detective Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_DETECTIVE_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Perception Misc", 1);
      model.statadd("Insight Misc", 1);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Dungeoneering"] = new engine.RulesElement({
    name: "Dungeoneering",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_DUNGEONEERING",
    source: "Dragon Magazine 366",
    categories: ["Dungeoneering", "ID_INTERNAL_BACKGROUND_CHOICE_DUNGEONEERING", "Noble Scion"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Dungeoneering Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Eldritch Harlequin Benefit"] = new engine.RulesElement({
    name: "Eldritch Harlequin Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_ELDRITCH_HARLEQUIN_BENEFIT",
    source: "Dragon Magazine 366",
    categories: ["Eldritch Harlequin Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_ELDRITCH_HARLEQUIN_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Bluff Misc", 1);
      model.statadd("Thievery Misc", 1);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Explorer/Guide Benefit"] = new engine.RulesElement({
    name: "Explorer/Guide Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_EXPLORER/GUIDE_BENEFIT",
    source: "Dragon Magazine 366",
    categories: ["Explorer/Guide Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_EXPLORER/GUIDE_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.select('Language', 1, "Explorer/Guide Benefit");
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Nature Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Forest Warden Benefit"] = new engine.RulesElement({
    name: "Forest Warden Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_FOREST_WARDEN_BENEFIT",
    source: "Dragon Magazine 366",
    categories: ["Forest Warden Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_FOREST_WARDEN_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Nature Misc", 1);
      model.statadd("Perception Misc", 1);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Former Barbarian Benefit"] = new engine.RulesElement({
    name: "Former Barbarian Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_FORMER_BARBARIAN_BENEFIT",
    source: "Dragon Magazine 366",
    categories: ["Former Barbarian Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_FORMER_BARBARIAN_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Nature Misc", 1);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Former Gladiator Benefit"] = new engine.RulesElement({
    name: "Former Gladiator Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_FORMER_GLADIATOR_BENEFIT",
    source: "Dragon Magazine 366",
    categories: ["Former Gladiator Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_FORMER_GLADIATOR_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.statadd("Death Saves Count", 1);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Fugitive from a Vengeful Rival Benefit"] = new engine.RulesElement({
    name: "Fugitive from a Vengeful Rival Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_FUGITIVE_FROM_A_VENGEFUL_RIVAL_BENEFIT",
    source: "Dragon Magazine 366",
    categories: ["Fugitive from a Vengeful Rival Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_FUGITIVE_FROM_A_VENGEFUL_RIVAL_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Bluff Misc", 1);
      model.statadd("Stealth Misc", 1);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Gritty Sergeant Benefit"] = new engine.RulesElement({
    name: "Gritty Sergeant Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_GRITTY_SERGEANT_BENEFIT",
    source: "Dragon Magazine 366",
    categories: ["Gritty Sergeant Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_GRITTY_SERGEANT_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.select('Proficiency', 1, "Gritty Sergeant Benefit", {
        filter: function(model, element) { return (element.hasCategory("Simple") || element.hasCategory("Military")); }
      });
      model.statadd("Initiative Misc", 1);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Haunted Veteran Benefit"] = new engine.RulesElement({
    name: "Haunted Veteran Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_HAUNTED_VETERAN_BENEFIT",
    source: "Dragon Magazine 366",
    categories: ["Haunted Veteran Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_HAUNTED_VETERAN_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"]
  });
  byID[te.id] = te;
  
  te = Background_Choice["History"] = new engine.RulesElement({
    name: "History",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_HISTORY",
    source: "Dragon Magazine 366",
    categories: ["History", "ID_INTERNAL_BACKGROUND_CHOICE_HISTORY", "Noble Scion"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("History Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Imbuer Benefit"] = new engine.RulesElement({
    name: "Imbuer Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_IMBUER_BENEFIT",
    source: "Dragon Magazine 366",
    categories: ["Imbuer Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_IMBUER_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"]
  });
  byID[te.id] = te;
  
  te = Background_Choice["Last of the Breed Benefit"] = new engine.RulesElement({
    name: "Last of the Breed Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_LAST_OF_THE_BREED_BENEFIT",
    source: "Dragon Magazine 366",
    categories: ["Last of the Breed Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_LAST_OF_THE_BREED_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Endurance Misc", 1);
      model.statadd("Perception Misc", 1);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Magic Scholar Benefit"] = new engine.RulesElement({
    name: "Magic Scholar Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_MAGIC_SCHOLAR_BENEFIT",
    source: "Dragon Magazine 366",
    categories: ["Magic Scholar Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_MAGIC_SCHOLAR_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Arcana Misc", 1);
      model.statadd("History Misc", 1);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Merchant Prince Benefit"] = new engine.RulesElement({
    name: "Merchant Prince Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_MERCHANT_PRINCE_BENEFIT",
    source: "Dragon Magazine 366",
    categories: ["Merchant Prince Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_MERCHANT_PRINCE_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.select('Language', 1, "Merchant Prince Benefit");
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Insight Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Missing Master Benefit"] = new engine.RulesElement({
    name: "Missing Master Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_MISSING_MASTER_BENEFIT",
    source: "Dragon Magazine 366",
    categories: ["Missing Master Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_MISSING_MASTER_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Perception Misc", 1);
      model.statadd("Insight Misc", 1);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Monster Hunter Benefit"] = new engine.RulesElement({
    name: "Monster Hunter Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_MONSTER_HUNTER_BENEFIT",
    source: "Dragon Magazine 366",
    categories: ["Monster Hunter Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_MONSTER_HUNTER_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.statadd("Arcana Misc", function() { /* to monster knowledge checks */ return 2; });
      model.statadd("Dungeoneering Misc", function() { /* to monster knowledge checks */ return 2; });
      model.statadd("Nature Misc", function() { /* to monster knowledge checks */ return 2; });
      model.statadd("Religion Misc", function() { /* to monster knowledge checks */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Nature"] = new engine.RulesElement({
    name: "Nature",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_NATURE",
    source: "Dragon Magazine 366",
    categories: ["Nature", "ID_INTERNAL_BACKGROUND_CHOICE_NATURE", "Noble Scion"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Nature Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Noble Bred for War Benefit"] = new engine.RulesElement({
    name: "Noble Bred for War Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_NOBLE_BRED_FOR_WAR_BENEFIT",
    source: "Dragon Magazine 366",
    categories: ["Noble Bred for War Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_NOBLE_BRED_FOR_WAR_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.select('Proficiency', 1, "Noble Bred for War Benefit", {
        filter: function(model, element) { return (element.hasCategory("Simple") || element.hasCategory("Military")); }
      });
      model.statadd("Diplomacy Misc", 1);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Noble Scion Benefit"] = new engine.RulesElement({
    name: "Noble Scion Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_NOBLE_SCION_BENEFIT",
    source: "Dragon Magazine 366",
    categories: ["Noble Scion Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_NOBLE_SCION_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.select('Background Choice', 1, "Noble Scion Benefit", {
        filter: function(model, element) { return element.hasCategory("Noble Scion"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Officer Who Came Out of Retirement Benefit"] = new engine.RulesElement({
    name: "Officer Who Came Out of Retirement Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_OFFICER_WHO_CAME_OUT_OF_RETIREMENT_BENEFIT",
    source: "Dragon Magazine 366",
    categories: ["Officer Who Came Out of Retirement Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_OFFICER_WHO_CAME_OUT_OF_RETIREMENT_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.statadd("Initiative Misc", 1);
      model.statadd("History Misc", 1);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["On the Run from the Devil Benefit"] = new engine.RulesElement({
    name: "On the Run from the Devil Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_ON_THE_RUN_FROM_THE_DEVIL_BENEFIT",
    source: "Dragon Magazine 366",
    categories: ["On the Run from the Devil Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_ON_THE_RUN_FROM_THE_DEVIL_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Bluff Misc", 1);
      model.statadd("Perception Misc", 1);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Political Rebel Benefit"] = new engine.RulesElement({
    name: "Political Rebel Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_POLITICAL_REBEL_BENEFIT",
    source: "Dragon Magazine 366",
    categories: ["Political Rebel Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_POLITICAL_REBEL_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Diplomacy Misc", 1);
      model.statadd("Streetwise Misc", 1);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Prison Conversion Benefit"] = new engine.RulesElement({
    name: "Prison Conversion Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_PRISON_CONVERSION_BENEFIT",
    source: "Dragon Magazine 366",
    categories: ["Prison Conversion Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_PRISON_CONVERSION_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Streetwise Misc", 3);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Recent Convert Benefit"] = new engine.RulesElement({
    name: "Recent Convert Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_RECENT_CONVERT_BENEFIT",
    source: "Dragon Magazine 366",
    categories: ["Recent Convert Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_RECENT_CONVERT_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"]
  });
  byID[te.id] = te;
  
  te = Background_Choice["Redemption Seeker Benefit"] = new engine.RulesElement({
    name: "Redemption Seeker Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_REDEMPTION_SEEKER_BENEFIT",
    source: "Dragon Magazine 366",
    categories: ["Redemption Seeker Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_REDEMPTION_SEEKER_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Diplomacy Misc", 1);
      model.statadd("Insight Misc", 1);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Religion"] = new engine.RulesElement({
    name: "Religion",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_RELIGION",
    source: "Dragon Magazine 366",
    categories: ["Religion", "ID_INTERNAL_BACKGROUND_CHOICE_RELIGION", "Noble Scion"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Religion Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["River Smuggler Benefit"] = new engine.RulesElement({
    name: "River Smuggler Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_RIVER_SMUGGLER_BENEFIT",
    source: "Dragon Magazine 366",
    categories: ["River Smuggler Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_RIVER_SMUGGLER_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Athletics Misc", 1);
      model.statadd("Streetwise Misc", 1);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Scion of an Ancient Bloodline Benefit"] = new engine.RulesElement({
    name: "Scion of an Ancient Bloodline Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_SCION_OF_AN_ANCIENT_BLOODLINE_BENEFIT",
    source: "Dragon Magazine 366",
    categories: ["Scion of an Ancient Bloodline Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_SCION_OF_AN_ANCIENT_BLOODLINE_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("History Misc", 3);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Scorned Noble Benefit"] = new engine.RulesElement({
    name: "Scorned Noble Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_SCORNED_NOBLE_BENEFIT",
    source: "Dragon Magazine 366",
    categories: ["Scorned Noble Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_SCORNED_NOBLE_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* whenever no allies are within 5 squares of you */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Seducer Benefit"] = new engine.RulesElement({
    name: "Seducer Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_SEDUCER_BENEFIT",
    source: "Dragon Magazine 366",
    categories: ["Seducer Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_SEDUCER_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Bluff Misc", 1);
      model.statadd("Insight Misc", 1);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Seeker for the Lost Clan Benefit"] = new engine.RulesElement({
    name: "Seeker for the Lost Clan Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_SEEKER_FOR_THE_LOST_CLAN_BENEFIT",
    source: "Dragon Magazine 366",
    categories: ["Seeker for the Lost Clan Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_SEEKER_FOR_THE_LOST_CLAN_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("History Misc", 1);
      model.statadd("Dungeoneering Misc", 1);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Silent Hunter Benefit"] = new engine.RulesElement({
    name: "Silent Hunter Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_SILENT_HUNTER_BENEFIT",
    source: "Dragon Magazine 366",
    categories: ["Silent Hunter Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_SILENT_HUNTER_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Stealth Misc", 1);
      model.statadd("Perception Misc", 1);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Street Urchin Benefit"] = new engine.RulesElement({
    name: "Street Urchin Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_STREET_URCHIN_BENEFIT",
    source: "Dragon Magazine 366",
    categories: ["Street Urchin Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_STREET_URCHIN_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Intimidate Misc", 1);
      model.statadd("Streetwise Misc", 1);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Trained from Birth for a Specific Prophecy Benefit"] = new engine.RulesElement({
    name: "Trained from Birth for a Specific Prophecy Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_TRAINED_FROM_BIRTH_FOR_A_SPECIFIC_PROPHECY_BENEFIT",
    source: "Dragon Magazine 366",
    categories: ["Trained from Birth for a Specific Prophecy Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_TRAINED_FROM_BIRTH_FOR_A_SPECIFIC_PROPHECY_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"]
  });
  byID[te.id] = te;
  
  te = Background_Choice["Traveling Missionary Benefit"] = new engine.RulesElement({
    name: "Traveling Missionary Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_TRAVELING_MISSIONARY_BENEFIT",
    source: "Dragon Magazine 366",
    categories: ["Traveling Missionary Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_TRAVELING_MISSIONARY_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.select('Language', 1, "Traveling Missionary Benefit");
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Religion Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Vet Who Can't Let Go Benefit"] = new engine.RulesElement({
    name: "Vet Who Can't Let Go Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_VET_WHO_CAN'T_LET_GO_BENEFIT",
    source: "Dragon Magazine 366",
    categories: ["Vet Who Can't Let Go Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_VET_WHO_CAN'T_LET_GO_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("History Misc", 1);
      model.statadd("Intimidate Misc", 1);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Wandering Duelist Benefit"] = new engine.RulesElement({
    name: "Wandering Duelist Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_WANDERING_DUELIST_BENEFIT",
    source: "Dragon Magazine 366",
    categories: ["Wandering Duelist Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_WANDERING_DUELIST_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Intimidate Misc", 3);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Wandering Mercenary Benefit"] = new engine.RulesElement({
    name: "Wandering Mercenary Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_WANDERING_MERCENARY_BENEFIT",
    source: "Dragon Magazine 366",
    categories: ["Wandering Mercenary Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_WANDERING_MERCENARY_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.statadd("Death Saves Count", 1);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Warsmith Benefit"] = new engine.RulesElement({
    name: "Warsmith Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_WARSMITH_BENEFIT",
    source: "Dragon Magazine 366",
    categories: ["Warsmith Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_WARSMITH_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"]
  });
  byID[te.id] = te;
  
  te = Background_Choice["Young Cutthroat Benefit"] = new engine.RulesElement({
    name: "Young Cutthroat Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_YOUNG_CUTTHROAT_BENEFIT",
    source: "Dragon Magazine 366",
    categories: ["Young Cutthroat Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_YOUNG_CUTTHROAT_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Intimidate Misc", 1);
      model.statadd("Thievery Misc", 1);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
