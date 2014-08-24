(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Level1Rules = types['Level1Rules'] || (types['Level1Rules'] = {});
  te = Level1Rules["DetailsRules"] = new RulesElement({
    name: "DetailsRules",
    type: "Level1Rules",
    id: "ID_INTERNAL_LEVEL1RULES_DETAILSRULES",
    source: "Core",
    categories: ["DetailsRules", "ID_INTERNAL_LEVEL1RULES_DETAILSRULES"],
    rules: function(model) {
      model.select('Gender', 1, {
        optional: true
      });
      model.select('alignment', 1, {
        optional: true
      });
    }
  });
  byID[te.id] = te;
  
  te = Level1Rules["Expansion1"] = new RulesElement({
    name: "Expansion1",
    type: "Level1Rules",
    id: "ID_INTERNAL_LEVEL1RULES_EXPANSION1",
    source: "Core",
    categories: ["Expansion1", "ID_INTERNAL_LEVEL1RULES_EXPANSION1"],
    rules: function(model) {
      model.select('Background', 1, {
        optional: true
      });
      model.grant(elements.id["ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT"]);
      model.select('Background', 5, {
        optional: true
      });
    }
  });
  byID[te.id] = te;
  
  te = Level1Rules["Expansion2"] = new RulesElement({
    name: "Expansion2",
    type: "Level1Rules",
    id: "ID_INTERNAL_LEVEL1RULES_EXPANSION2",
    source: "Core",
    categories: ["Expansion2", "ID_INTERNAL_LEVEL1RULES_EXPANSION2"],
    rules: function(model) {
      model.select('Theme', 1, {
        optional: true
      });
    }
  });
  byID[te.id] = te;
  
  te = Level1Rules["Expansion3"] = new RulesElement({
    name: "Expansion3",
    type: "Level1Rules",
    id: "ID_INTERNAL_LEVEL1RULES_EXPANSION3",
    source: "Core",
    categories: ["Expansion3", "ID_INTERNAL_LEVEL1RULES_EXPANSION3"]
  });
  byID[te.id] = te;
  
  te = Level1Rules["Expansion4"] = new RulesElement({
    name: "Expansion4",
    type: "Level1Rules",
    id: "ID_INTERNAL_LEVEL1RULES_EXPANSION4",
    source: "Core",
    categories: ["Expansion4", "ID_INTERNAL_LEVEL1RULES_EXPANSION4"]
  });
  byID[te.id] = te;
  
  te = Level1Rules["Expansion5"] = new RulesElement({
    name: "Expansion5",
    type: "Level1Rules",
    id: "ID_INTERNAL_LEVEL1RULES_EXPANSION5",
    source: "Core",
    categories: ["Expansion5", "ID_INTERNAL_LEVEL1RULES_EXPANSION5"]
  });
  byID[te.id] = te;
  
  te = Level1Rules["Level1Rules"] = new RulesElement({
    name: "Level1Rules",
    type: "Level1Rules",
    id: "ID_INTERNAL_LEVEL1RULES_LEVEL1RULES",
    source: "Core",
    categories: ["Level1Rules", "ID_INTERNAL_LEVEL1RULES_LEVEL1RULES"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_LEVEL1RULES_SKILLRULES"]);
      model.grant(elements.id["ID_INTERNAL_TIER_HEROIC"]);
      model.grant(elements.id["ID_INTERNAL_POWER_MELEE_BASIC_ATTACK"]);
      model.grant(elements.id["ID_INTERNAL_POWER_RANGED_BASIC_ATTACK"]);
    }
  });
  byID[te.id] = te;
  
  te = Level1Rules["SkillRules"] = new RulesElement({
    name: "SkillRules",
    type: "Level1Rules",
    id: "ID_INTERNAL_LEVEL1RULES_SKILLRULES",
    source: "Core",
    categories: ["SkillRules", "ID_INTERNAL_LEVEL1RULES_SKILLRULES"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_SKILL_1"]);
      model.statadd("Acrobatics", function() { return model.stat("HALF-LEVEL"); });
      model.statadd("Acrobatics", function() { return abilitymod(model.stat("Dexterity")); }, "Ability");
      model.statadd("Acrobatics", function() { return model.stat("Acrobatics Trained"); });
      model.statadd("Acrobatics", function() { return model.stat("Acrobatics Misc"); });
      model.statadd("Acrobatics", function() { return model.stat("Armor Penalty"); }, "Armor Penalty");
      model.grant(elements.id["ID_FMP_SKILL_2"]);
      model.statadd("Arcana", function() { return model.stat("HALF-LEVEL"); });
      model.statadd("Arcana", function() { return abilitymod(model.stat("Intelligence")); }, "Ability");
      model.statadd("Arcana", function() { return model.stat("Arcana Trained"); });
      model.statadd("Arcana", function() { return model.stat("Arcana Misc"); });
      model.grant(elements.id["ID_FMP_SKILL_3"]);
      model.statadd("Bluff", function() { return model.stat("HALF-LEVEL"); });
      model.statadd("Bluff", function() { return abilitymod(model.stat("Charisma")); }, "Ability");
      model.statadd("Bluff", function() { return model.stat("Bluff Trained"); });
      model.statadd("Bluff", function() { return model.stat("Bluff Misc"); });
      model.grant(elements.id["ID_FMP_SKILL_6"]);
      model.statadd("Diplomacy", function() { return model.stat("HALF-LEVEL"); });
      model.statadd("Diplomacy", function() { return abilitymod(model.stat("Charisma")); }, "Ability");
      model.statadd("Diplomacy", function() { return model.stat("Diplomacy Trained"); });
      model.statadd("Diplomacy", function() { return model.stat("Diplomacy Misc"); });
      model.grant(elements.id["ID_FMP_SKILL_7"]);
      model.statadd("Dungeoneering", function() { return model.stat("HALF-LEVEL"); });
      model.statadd("Dungeoneering", function() { return abilitymod(model.stat("Wisdom")); }, "Ability");
      model.statadd("Dungeoneering", function() { return model.stat("Dungeoneering Trained"); });
      model.statadd("Dungeoneering", function() { return model.stat("Dungeoneering Misc"); });
      model.grant(elements.id["ID_FMP_SKILL_8"]);
      model.statadd("Endurance", function() { return model.stat("HALF-LEVEL"); });
      model.statadd("Endurance", function() { return abilitymod(model.stat("Constitution")); }, "Ability");
      model.statadd("Endurance", function() { return model.stat("Endurance Trained"); });
      model.statadd("Endurance", function() { return model.stat("Endurance Misc"); });
      model.statadd("Endurance", function() { return model.stat("Armor Penalty"); }, "Armor Penalty");
      model.grant(elements.id["ID_FMP_SKILL_9"]);
      model.statadd("Heal", function() { return model.stat("HALF-LEVEL"); });
      model.statadd("Heal", function() { return abilitymod(model.stat("Wisdom")); }, "Ability");
      model.statadd("Heal", function() { return model.stat("Heal Trained"); });
      model.statadd("Heal", function() { return model.stat("Heal Misc"); });
      model.grant(elements.id["ID_FMP_SKILL_11"]);
      model.statadd("History", function() { return model.stat("HALF-LEVEL"); });
      model.statadd("History", function() { return abilitymod(model.stat("Intelligence")); }, "Ability");
      model.statadd("History", function() { return model.stat("History Trained"); });
      model.statadd("History", function() { return model.stat("History Misc"); });
      model.grant(elements.id["ID_FMP_SKILL_13"]);
      model.statadd("Insight", function() { return model.stat("HALF-LEVEL"); });
      model.statadd("Insight", function() { return abilitymod(model.stat("Wisdom")); }, "Ability");
      model.statadd("Insight", function() { return model.stat("Insight Trained"); });
      model.statadd("Insight", function() { return model.stat("Insight Misc"); });
      model.grant(elements.id["ID_FMP_SKILL_14"]);
      model.statadd("Intimidate", function() { return model.stat("HALF-LEVEL"); });
      model.statadd("Intimidate", function() { return abilitymod(model.stat("Charisma")); }, "Ability");
      model.statadd("Intimidate", function() { return model.stat("Intimidate Trained"); });
      model.statadd("Intimidate", function() { return model.stat("Intimidate Misc"); });
      model.grant(elements.id["ID_FMP_SKILL_16"]);
      model.statadd("Nature", function() { return model.stat("HALF-LEVEL"); });
      model.statadd("Nature", function() { return abilitymod(model.stat("Wisdom")); }, "Ability");
      model.statadd("Nature", function() { return model.stat("Nature Trained"); });
      model.statadd("Nature", function() { return model.stat("Nature Misc"); });
      model.grant(elements.id["ID_FMP_SKILL_17"]);
      model.statadd("Perception", function() { return model.stat("HALF-LEVEL"); });
      model.statadd("Perception", function() { return abilitymod(model.stat("Wisdom")); }, "Ability");
      model.statadd("Perception", function() { return model.stat("Perception Trained"); });
      model.statadd("Perception", function() { return model.stat("Perception Misc"); });
      model.grant(elements.id["ID_FMP_SKILL_18"]);
      model.statadd("Religion", function() { return model.stat("HALF-LEVEL"); });
      model.statadd("Religion", function() { return abilitymod(model.stat("Intelligence")); }, "Ability");
      model.statadd("Religion", function() { return model.stat("Religion Trained"); });
      model.statadd("Religion", function() { return model.stat("Religion Misc"); });
      model.grant(elements.id["ID_FMP_SKILL_20"]);
      model.statadd("Stealth", function() { return model.stat("HALF-LEVEL"); });
      model.statadd("Stealth", function() { return abilitymod(model.stat("Dexterity")); }, "Ability");
      model.statadd("Stealth", function() { return model.stat("Stealth Trained"); });
      model.statadd("Stealth", function() { return model.stat("Stealth Misc"); });
      model.statadd("Stealth", function() { return model.stat("Armor Penalty"); }, "Armor Penalty");
      model.grant(elements.id["ID_FMP_SKILL_21"]);
      model.statadd("Streetwise", function() { return model.stat("HALF-LEVEL"); });
      model.statadd("Streetwise", function() { return abilitymod(model.stat("Charisma")); }, "Ability");
      model.statadd("Streetwise", function() { return model.stat("Streetwise Trained"); });
      model.statadd("Streetwise", function() { return model.stat("Streetwise Misc"); });
      model.grant(elements.id["ID_FMP_SKILL_23"]);
      model.statadd("Thievery", function() { return model.stat("HALF-LEVEL"); });
      model.statadd("Thievery", function() { return abilitymod(model.stat("Dexterity")); }, "Ability");
      model.statadd("Thievery", function() { return model.stat("Thievery Trained"); });
      model.statadd("Thievery", function() { return model.stat("Thievery Misc"); });
      model.statadd("Thievery", function() { return model.stat("Armor Penalty"); }, "Armor Penalty");
      model.grant(elements.id["ID_FMP_SKILL_27"]);
      model.statadd("Athletics", function() { return model.stat("HALF-LEVEL"); });
      model.statadd("Athletics", function() { return abilitymod(model.stat("Strength")); }, "Ability");
      model.statadd("Athletics", function() { return model.stat("Athletics Trained"); });
      model.statadd("Athletics", function() { return model.stat("Athletics Misc"); });
      model.statadd("Athletics", function() { return model.stat("Armor Penalty"); }, "Armor Penalty");
      model.statadd("Passive Perception", function() { return model.stat("Perception"); });
      model.statadd("Passive Perception", 10);
      model.statadd("Passive Insight", function() { return model.stat("Insight"); });
      model.statadd("Passive Insight", 10);
    }
  });
  byID[te.id] = te;
  
  
})(this);
