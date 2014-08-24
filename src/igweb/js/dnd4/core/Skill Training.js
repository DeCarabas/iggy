(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Skill_Training = types['Skill Training'] || (types['Skill Training'] = {});
  te = Skill_Training["Acrobatics"] = new RulesElement({
    name: "Acrobatics",
    type: "Skill Training",
    id: "ID_INTERNAL_SKILL_TRAINING_ACROBATICS",
    source: "Core",
    categories: ["Acrobatics", "ID_INTERNAL_SKILL_TRAINING_ACROBATICS", "ID_FMP_SKILL_1", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_HYBRID_CLASS_355", "Hybrid Ranger", "ID_FMP_HYBRID_CLASS_356", "Hybrid Rogue", "ID_FMP_HYBRID_CLASS_439", "Hybrid Avenger", "ID_FMP_HYBRID_CLASS_440", "Hybrid Barbarian", "ID_FMP_HYBRID_CLASS_441", "Hybrid Bard", "ID_FMP_HYBRID_CLASS_609", "Hybrid Monk", "ID_FMP_HYBRID_CLASS_612", "Hybrid Seeker", "ID_FMP_HYBRID_CLASS_641", "Hybrid Assassin"],
    rules: function(model) {
      model.statadd("Acrobatics Trained", 5, "trained");
    }
  });
  byID[te.id] = te;
  
  te = Skill_Training["Arcana"] = new RulesElement({
    name: "Arcana",
    type: "Skill Training",
    id: "ID_INTERNAL_SKILL_TRAINING_ARCANA",
    source: "Core",
    categories: ["Arcana", "ID_INTERNAL_SKILL_TRAINING_ARCANA", "ID_INTERNAL_CATEGORY_KNOWLEDGE", "Knowledge", "ID_FMP_SKILL_2", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_HYBRID_CLASS_352", "Hybrid Cleric", "ID_FMP_HYBRID_CLASS_357", "Hybrid Swordmage", "ID_FMP_HYBRID_CLASS_358", "Hybrid Warlock", "ID_FMP_HYBRID_CLASS_360", "Hybrid Wizard", "ID_FMP_HYBRID_CLASS_441", "Hybrid Bard", "ID_FMP_HYBRID_CLASS_442", "Hybrid Druid", "ID_FMP_HYBRID_CLASS_443", "Hybrid Invoker", "ID_FMP_HYBRID_CLASS_444", "Hybrid Shaman", "ID_FMP_HYBRID_CLASS_445", "Hybrid Sorcerer", "ID_FMP_HYBRID_CLASS_536", "Hybrid Artificer", "ID_FMP_HYBRID_CLASS_588", "Hybrid Ardent", "ID_FMP_HYBRID_CLASS_590", "Hybrid Battlemind", "ID_FMP_HYBRID_CLASS_610", "Hybrid Psion", "ID_FMP_HYBRID_CLASS_611", "Hybrid Runepriest", "ID_FMP_HYBRID_CLASS_641", "Hybrid Assassin"],
    rules: function(model) {
      model.statadd("Arcana Trained", 5, "trained");
    }
  });
  byID[te.id] = te;
  
  te = Skill_Training["Athletics"] = new RulesElement({
    name: "Athletics",
    type: "Skill Training",
    id: "ID_INTERNAL_SKILL_TRAINING_ATHLETICS",
    source: "Core",
    categories: ["Athletics", "ID_INTERNAL_SKILL_TRAINING_ATHLETICS", "ID_FMP_SKILL_27", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_HYBRID_CLASS_353", "Hybrid Fighter", "ID_FMP_HYBRID_CLASS_355", "Hybrid Ranger", "ID_FMP_HYBRID_CLASS_356", "Hybrid Rogue", "ID_FMP_HYBRID_CLASS_357", "Hybrid Swordmage", "ID_FMP_HYBRID_CLASS_359", "Hybrid Warlord", "ID_FMP_HYBRID_CLASS_439", "Hybrid Avenger", "ID_FMP_HYBRID_CLASS_440", "Hybrid Barbarian", "ID_FMP_HYBRID_CLASS_441", "Hybrid Bard", "ID_FMP_HYBRID_CLASS_442", "Hybrid Druid", "ID_FMP_HYBRID_CLASS_444", "Hybrid Shaman", "ID_FMP_HYBRID_CLASS_445", "Hybrid Sorcerer", "ID_FMP_HYBRID_CLASS_446", "Hybrid Warden", "ID_FMP_HYBRID_CLASS_588", "Hybrid Ardent", "ID_FMP_HYBRID_CLASS_590", "Hybrid Battlemind", "ID_FMP_HYBRID_CLASS_609", "Hybrid Monk", "ID_FMP_HYBRID_CLASS_611", "Hybrid Runepriest", "ID_FMP_HYBRID_CLASS_612", "Hybrid Seeker", "ID_FMP_HYBRID_CLASS_641", "Hybrid Assassin"],
    rules: function(model) {
      model.statadd("Athletics Trained", 5, "trained");
    }
  });
  byID[te.id] = te;
  
  te = Skill_Training["Bluff"] = new RulesElement({
    name: "Bluff",
    type: "Skill Training",
    id: "ID_INTERNAL_SKILL_TRAINING_BLUFF",
    source: "Core",
    categories: ["Bluff", "ID_INTERNAL_SKILL_TRAINING_BLUFF", "ID_FMP_SKILL_3", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_HYBRID_CLASS_356", "Hybrid Rogue", "ID_FMP_HYBRID_CLASS_358", "Hybrid Warlock", "ID_FMP_HYBRID_CLASS_441", "Hybrid Bard", "ID_FMP_HYBRID_CLASS_445", "Hybrid Sorcerer", "ID_FMP_HYBRID_CLASS_588", "Hybrid Ardent", "ID_FMP_HYBRID_CLASS_590", "Hybrid Battlemind", "ID_FMP_HYBRID_CLASS_610", "Hybrid Psion", "ID_FMP_HYBRID_CLASS_641", "Hybrid Assassin"],
    rules: function(model) {
      model.statadd("Bluff Trained", 5, "trained");
    }
  });
  byID[te.id] = te;
  
  te = Skill_Training["Diplomacy"] = new RulesElement({
    name: "Diplomacy",
    type: "Skill Training",
    id: "ID_INTERNAL_SKILL_TRAINING_DIPLOMACY",
    source: "Core",
    categories: ["Diplomacy", "ID_INTERNAL_SKILL_TRAINING_DIPLOMACY", "ID_FMP_SKILL_6", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_HYBRID_CLASS_352", "Hybrid Cleric", "ID_FMP_HYBRID_CLASS_354", "Hybrid Paladin", "ID_FMP_HYBRID_CLASS_357", "Hybrid Swordmage", "ID_FMP_HYBRID_CLASS_359", "Hybrid Warlord", "ID_FMP_HYBRID_CLASS_360", "Hybrid Wizard", "ID_FMP_HYBRID_CLASS_441", "Hybrid Bard", "ID_FMP_HYBRID_CLASS_442", "Hybrid Druid", "ID_FMP_HYBRID_CLASS_443", "Hybrid Invoker", "ID_FMP_HYBRID_CLASS_445", "Hybrid Sorcerer", "ID_FMP_HYBRID_CLASS_536", "Hybrid Artificer", "ID_FMP_HYBRID_CLASS_588", "Hybrid Ardent", "ID_FMP_HYBRID_CLASS_590", "Hybrid Battlemind", "ID_FMP_HYBRID_CLASS_609", "Hybrid Monk", "ID_FMP_HYBRID_CLASS_610", "Hybrid Psion"],
    rules: function(model) {
      model.statadd("Diplomacy Trained", 5, "trained");
    }
  });
  byID[te.id] = te;
  
  te = Skill_Training["Dungeoneering"] = new RulesElement({
    name: "Dungeoneering",
    type: "Skill Training",
    id: "ID_INTERNAL_SKILL_TRAINING_DUNGEONEERING",
    source: "Core",
    categories: ["Dungeoneering", "ID_INTERNAL_SKILL_TRAINING_DUNGEONEERING", "ID_INTERNAL_CATEGORY_KNOWLEDGE", "Knowledge", "ID_FMP_SKILL_7", "ID_FMP_CLASS_5", "Ranger", "ID_INTERNAL_CATEGORY_ID_FMP_CLASS_5_CHOICE", "ID_FMP_CLASS_5 Choice", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_437", "Psion", "ID_FMP_HYBRID_CLASS_355", "Hybrid Ranger", "ID_FMP_HYBRID_CLASS_356", "Hybrid Rogue", "ID_FMP_HYBRID_CLASS_360", "Hybrid Wizard", "ID_FMP_HYBRID_CLASS_441", "Hybrid Bard", "ID_FMP_HYBRID_CLASS_445", "Hybrid Sorcerer", "ID_FMP_HYBRID_CLASS_446", "Hybrid Warden", "ID_FMP_HYBRID_CLASS_536", "Hybrid Artificer", "ID_FMP_HYBRID_CLASS_610", "Hybrid Psion"],
    rules: function(model) {
      model.statadd("Dungeoneering Trained", 5, "trained");
    }
  });
  byID[te.id] = te;
  
  te = Skill_Training["Endurance"] = new RulesElement({
    name: "Endurance",
    type: "Skill Training",
    id: "ID_INTERNAL_SKILL_TRAINING_ENDURANCE",
    source: "Core",
    categories: ["Endurance", "ID_INTERNAL_SKILL_TRAINING_ENDURANCE", "ID_FMP_SKILL_8", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_HYBRID_CLASS_353", "Hybrid Fighter", "ID_FMP_HYBRID_CLASS_354", "Hybrid Paladin", "ID_FMP_HYBRID_CLASS_355", "Hybrid Ranger", "ID_FMP_HYBRID_CLASS_357", "Hybrid Swordmage", "ID_FMP_HYBRID_CLASS_359", "Hybrid Warlord", "ID_FMP_HYBRID_CLASS_439", "Hybrid Avenger", "ID_FMP_HYBRID_CLASS_440", "Hybrid Barbarian", "ID_FMP_HYBRID_CLASS_442", "Hybrid Druid", "ID_FMP_HYBRID_CLASS_443", "Hybrid Invoker", "ID_FMP_HYBRID_CLASS_444", "Hybrid Shaman", "ID_FMP_HYBRID_CLASS_445", "Hybrid Sorcerer", "ID_FMP_HYBRID_CLASS_446", "Hybrid Warden", "ID_FMP_HYBRID_CLASS_588", "Hybrid Ardent", "ID_FMP_HYBRID_CLASS_590", "Hybrid Battlemind", "ID_FMP_HYBRID_CLASS_609", "Hybrid Monk", "ID_FMP_HYBRID_CLASS_611", "Hybrid Runepriest", "ID_FMP_HYBRID_CLASS_612", "Hybrid Seeker", "ID_FMP_HYBRID_CLASS_641", "Hybrid Assassin"],
    rules: function(model) {
      model.statadd("Endurance Trained", 5, "trained");
    }
  });
  byID[te.id] = te;
  
  te = Skill_Training["Heal"] = new RulesElement({
    name: "Heal",
    type: "Skill Training",
    id: "ID_INTERNAL_SKILL_TRAINING_HEAL",
    source: "Core",
    categories: ["Heal", "ID_INTERNAL_SKILL_TRAINING_HEAL", "ID_FMP_SKILL_9", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_HYBRID_CLASS_352", "Hybrid Cleric", "ID_FMP_HYBRID_CLASS_353", "Hybrid Fighter", "ID_FMP_HYBRID_CLASS_354", "Hybrid Paladin", "ID_FMP_HYBRID_CLASS_355", "Hybrid Ranger", "ID_FMP_HYBRID_CLASS_359", "Hybrid Warlord", "ID_FMP_HYBRID_CLASS_439", "Hybrid Avenger", "ID_FMP_HYBRID_CLASS_440", "Hybrid Barbarian", "ID_FMP_HYBRID_CLASS_441", "Hybrid Bard", "ID_FMP_HYBRID_CLASS_442", "Hybrid Druid", "ID_FMP_HYBRID_CLASS_444", "Hybrid Shaman", "ID_FMP_HYBRID_CLASS_446", "Hybrid Warden", "ID_FMP_HYBRID_CLASS_536", "Hybrid Artificer", "ID_FMP_HYBRID_CLASS_588", "Hybrid Ardent", "ID_FMP_HYBRID_CLASS_590", "Hybrid Battlemind", "ID_FMP_HYBRID_CLASS_609", "Hybrid Monk", "ID_FMP_HYBRID_CLASS_611", "Hybrid Runepriest", "ID_FMP_HYBRID_CLASS_612", "Hybrid Seeker"],
    rules: function(model) {
      model.statadd("Heal Trained", 5, "trained");
    }
  });
  byID[te.id] = te;
  
  te = Skill_Training["History"] = new RulesElement({
    name: "History",
    type: "Skill Training",
    id: "ID_INTERNAL_SKILL_TRAINING_HISTORY",
    source: "Core",
    categories: ["History", "ID_INTERNAL_SKILL_TRAINING_HISTORY", "ID_INTERNAL_CATEGORY_KNOWLEDGE", "Knowledge", "ID_FMP_SKILL_11", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_HYBRID_CLASS_352", "Hybrid Cleric", "ID_FMP_HYBRID_CLASS_354", "Hybrid Paladin", "ID_FMP_HYBRID_CLASS_357", "Hybrid Swordmage", "ID_FMP_HYBRID_CLASS_358", "Hybrid Warlock", "ID_FMP_HYBRID_CLASS_359", "Hybrid Warlord", "ID_FMP_HYBRID_CLASS_360", "Hybrid Wizard", "ID_FMP_HYBRID_CLASS_441", "Hybrid Bard", "ID_FMP_HYBRID_CLASS_442", "Hybrid Druid", "ID_FMP_HYBRID_CLASS_443", "Hybrid Invoker", "ID_FMP_HYBRID_CLASS_444", "Hybrid Shaman", "ID_FMP_HYBRID_CLASS_445", "Hybrid Sorcerer", "ID_FMP_HYBRID_CLASS_536", "Hybrid Artificer", "ID_FMP_HYBRID_CLASS_610", "Hybrid Psion", "ID_FMP_HYBRID_CLASS_611", "Hybrid Runepriest"],
    rules: function(model) {
      model.statadd("History Trained", 5, "trained");
    }
  });
  byID[te.id] = te;
  
  te = Skill_Training["Insight"] = new RulesElement({
    name: "Insight",
    type: "Skill Training",
    id: "ID_INTERNAL_SKILL_TRAINING_INSIGHT",
    source: "Core",
    categories: ["Insight", "ID_INTERNAL_SKILL_TRAINING_INSIGHT", "ID_FMP_SKILL_13", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_HYBRID_CLASS_352", "Hybrid Cleric", "ID_FMP_HYBRID_CLASS_354", "Hybrid Paladin", "ID_FMP_HYBRID_CLASS_356", "Hybrid Rogue", "ID_FMP_HYBRID_CLASS_357", "Hybrid Swordmage", "ID_FMP_HYBRID_CLASS_358", "Hybrid Warlock", "ID_FMP_HYBRID_CLASS_360", "Hybrid Wizard", "ID_FMP_HYBRID_CLASS_441", "Hybrid Bard", "ID_FMP_HYBRID_CLASS_442", "Hybrid Druid", "ID_FMP_HYBRID_CLASS_443", "Hybrid Invoker", "ID_FMP_HYBRID_CLASS_444", "Hybrid Shaman", "ID_FMP_HYBRID_CLASS_445", "Hybrid Sorcerer", "ID_FMP_HYBRID_CLASS_588", "Hybrid Ardent", "ID_FMP_HYBRID_CLASS_590", "Hybrid Battlemind", "ID_FMP_HYBRID_CLASS_609", "Hybrid Monk", "ID_FMP_HYBRID_CLASS_610", "Hybrid Psion", "ID_FMP_HYBRID_CLASS_611", "Hybrid Runepriest", "ID_FMP_HYBRID_CLASS_612", "Hybrid Seeker", "ID_FMP_HYBRID_CLASS_641", "Hybrid Assassin"],
    rules: function(model) {
      model.statadd("Insight Trained", 5, "trained");
    }
  });
  byID[te.id] = te;
  
  te = Skill_Training["Intimidate"] = new RulesElement({
    name: "Intimidate",
    type: "Skill Training",
    id: "ID_INTERNAL_SKILL_TRAINING_INTIMIDATE",
    source: "Core",
    categories: ["Intimidate", "ID_INTERNAL_SKILL_TRAINING_INTIMIDATE", "ID_FMP_SKILL_14", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CLASS_53", "Swordmage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_124", "Battlemind", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_HYBRID_CLASS_353", "Hybrid Fighter", "ID_FMP_HYBRID_CLASS_354", "Hybrid Paladin", "ID_FMP_HYBRID_CLASS_356", "Hybrid Rogue", "ID_FMP_HYBRID_CLASS_357", "Hybrid Swordmage", "ID_FMP_HYBRID_CLASS_358", "Hybrid Warlock", "ID_FMP_HYBRID_CLASS_359", "Hybrid Warlord", "ID_FMP_HYBRID_CLASS_439", "Hybrid Avenger", "ID_FMP_HYBRID_CLASS_440", "Hybrid Barbarian", "ID_FMP_HYBRID_CLASS_441", "Hybrid Bard", "ID_FMP_HYBRID_CLASS_443", "Hybrid Invoker", "ID_FMP_HYBRID_CLASS_445", "Hybrid Sorcerer", "ID_FMP_HYBRID_CLASS_446", "Hybrid Warden", "ID_FMP_HYBRID_CLASS_588", "Hybrid Ardent", "ID_FMP_HYBRID_CLASS_590", "Hybrid Battlemind", "ID_FMP_HYBRID_CLASS_610", "Hybrid Psion", "ID_FMP_HYBRID_CLASS_612", "Hybrid Seeker"],
    rules: function(model) {
      model.statadd("Intimidate Trained", 5, "trained");
    }
  });
  byID[te.id] = te;
  
  te = Skill_Training["Nature"] = new RulesElement({
    name: "Nature",
    type: "Skill Training",
    id: "ID_INTERNAL_SKILL_TRAINING_NATURE",
    source: "Core",
    categories: ["Nature", "ID_INTERNAL_SKILL_TRAINING_NATURE", "ID_INTERNAL_CATEGORY_KNOWLEDGE", "Knowledge", "ID_FMP_SKILL_16", "ID_FMP_CLASS_5", "Ranger", "ID_INTERNAL_CATEGORY_ID_FMP_CLASS_5_CHOICE", "ID_FMP_CLASS_5 Choice", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_HYBRID_CLASS_355", "Hybrid Ranger", "ID_FMP_HYBRID_CLASS_360", "Hybrid Wizard", "ID_FMP_HYBRID_CLASS_440", "Hybrid Barbarian", "ID_FMP_HYBRID_CLASS_441", "Hybrid Bard", "ID_FMP_HYBRID_CLASS_442", "Hybrid Druid", "ID_FMP_HYBRID_CLASS_444", "Hybrid Shaman", "ID_FMP_HYBRID_CLASS_445", "Hybrid Sorcerer", "ID_FMP_HYBRID_CLASS_446", "Hybrid Warden", "ID_FMP_HYBRID_CLASS_612", "Hybrid Seeker"],
    rules: function(model) {
      model.statadd("Nature Trained", 5, "trained");
    }
  });
  byID[te.id] = te;
  
  te = Skill_Training["Perception"] = new RulesElement({
    name: "Perception",
    type: "Skill Training",
    id: "ID_INTERNAL_SKILL_TRAINING_PERCEPTION",
    source: "Core",
    categories: ["Perception", "ID_INTERNAL_SKILL_TRAINING_PERCEPTION", "ID_FMP_SKILL_17", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_134", "Warden", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_437", "Psion", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_HYBRID_CLASS_355", "Hybrid Ranger", "ID_FMP_HYBRID_CLASS_356", "Hybrid Rogue", "ID_FMP_HYBRID_CLASS_439", "Hybrid Avenger", "ID_FMP_HYBRID_CLASS_440", "Hybrid Barbarian", "ID_FMP_HYBRID_CLASS_441", "Hybrid Bard", "ID_FMP_HYBRID_CLASS_442", "Hybrid Druid", "ID_FMP_HYBRID_CLASS_444", "Hybrid Shaman", "ID_FMP_HYBRID_CLASS_446", "Hybrid Warden", "ID_FMP_HYBRID_CLASS_536", "Hybrid Artificer", "ID_FMP_HYBRID_CLASS_609", "Hybrid Monk", "ID_FMP_HYBRID_CLASS_610", "Hybrid Psion", "ID_FMP_HYBRID_CLASS_612", "Hybrid Seeker", "ID_FMP_HYBRID_CLASS_641", "Hybrid Assassin"],
    rules: function(model) {
      model.statadd("Perception Trained", 5, "trained");
    }
  });
  byID[te.id] = te;
  
  te = Skill_Training["Religion"] = new RulesElement({
    name: "Religion",
    type: "Skill Training",
    id: "ID_INTERNAL_SKILL_TRAINING_RELIGION",
    source: "Core",
    categories: ["Religion", "ID_INTERNAL_SKILL_TRAINING_RELIGION", "ID_INTERNAL_CATEGORY_KNOWLEDGE", "Knowledge", "ID_FMP_SKILL_18", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_127", "Invoker", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_147", "Shaman", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_HYBRID_CLASS_352", "Hybrid Cleric", "ID_FMP_HYBRID_CLASS_354", "Hybrid Paladin", "ID_FMP_HYBRID_CLASS_358", "Hybrid Warlock", "ID_FMP_HYBRID_CLASS_360", "Hybrid Wizard", "ID_FMP_HYBRID_CLASS_439", "Hybrid Avenger", "ID_FMP_HYBRID_CLASS_441", "Hybrid Bard", "ID_FMP_HYBRID_CLASS_443", "Hybrid Invoker", "ID_FMP_HYBRID_CLASS_444", "Hybrid Shaman", "ID_FMP_HYBRID_CLASS_609", "Hybrid Monk", "ID_FMP_HYBRID_CLASS_611", "Hybrid Runepriest"],
    rules: function(model) {
      model.statadd("Religion Trained", 5, "trained");
    }
  });
  byID[te.id] = te;
  
  te = Skill_Training["Stealth"] = new RulesElement({
    name: "Stealth",
    type: "Skill Training",
    id: "ID_INTERNAL_SKILL_TRAINING_STEALTH",
    source: "Core",
    categories: ["Stealth", "ID_INTERNAL_SKILL_TRAINING_STEALTH", "ID_FMP_SKILL_20", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_472", "Seeker", "ID_FMP_HYBRID_CLASS_355", "Hybrid Ranger", "ID_FMP_HYBRID_CLASS_356", "Hybrid Rogue", "ID_FMP_HYBRID_CLASS_439", "Hybrid Avenger", "ID_FMP_HYBRID_CLASS_609", "Hybrid Monk", "ID_FMP_HYBRID_CLASS_612", "Hybrid Seeker", "ID_FMP_HYBRID_CLASS_641", "Hybrid Assassin"],
    rules: function(model) {
      model.statadd("Stealth Trained", 5, "trained");
    }
  });
  byID[te.id] = te;
  
  te = Skill_Training["Streetwise"] = new RulesElement({
    name: "Streetwise",
    type: "Skill Training",
    id: "ID_INTERNAL_SKILL_TRAINING_STREETWISE",
    source: "Core",
    categories: ["Streetwise", "ID_INTERNAL_SKILL_TRAINING_STREETWISE", "ID_FMP_SKILL_21", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CLASS_129", "Avenger", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_529", "Ardent", "ID_FMP_HYBRID_CLASS_353", "Hybrid Fighter", "ID_FMP_HYBRID_CLASS_356", "Hybrid Rogue", "ID_FMP_HYBRID_CLASS_358", "Hybrid Warlock", "ID_FMP_HYBRID_CLASS_439", "Hybrid Avenger", "ID_FMP_HYBRID_CLASS_441", "Hybrid Bard", "ID_FMP_HYBRID_CLASS_588", "Hybrid Ardent", "ID_FMP_HYBRID_CLASS_641", "Hybrid Assassin"],
    rules: function(model) {
      model.statadd("Streetwise Trained", 5, "trained");
    }
  });
  byID[te.id] = te;
  
  te = Skill_Training["Thievery"] = new RulesElement({
    name: "Thievery",
    type: "Skill Training",
    id: "ID_INTERNAL_SKILL_TRAINING_THIEVERY",
    source: "Core",
    categories: ["Thievery", "ID_INTERNAL_SKILL_TRAINING_THIEVERY", "ID_FMP_SKILL_23", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CLASS_125", "Artificer", "ID_FMP_CLASS_362", "Monk", "ID_FMP_CLASS_466", "Assassin", "ID_FMP_CLASS_602", "Runepriest", "ID_FMP_HYBRID_CLASS_356", "Hybrid Rogue", "ID_FMP_HYBRID_CLASS_358", "Hybrid Warlock", "ID_FMP_HYBRID_CLASS_536", "Hybrid Artificer", "ID_FMP_HYBRID_CLASS_609", "Hybrid Monk", "ID_FMP_HYBRID_CLASS_611", "Hybrid Runepriest", "ID_FMP_HYBRID_CLASS_641", "Hybrid Assassin"],
    rules: function(model) {
      model.statadd("Thievery Trained", 5, "trained");
    }
  });
  byID[te.id] = te;
  
  
})(this);
