define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Racial_Trait = types['Racial Trait'] || (types['Racial Trait'] = {});
  te = Racial_Trait["Acrobatics Bonus"] = new engine.RulesElement({
    name: "Acrobatics Bonus",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_ACROBATICS_BONUS",
    source: "Core",
    categories: ["Acrobatics Bonus", "ID_INTERNAL_RACIAL_TRAIT_ACROBATICS_BONUS", "ID_INTERNAL_CATEGORY_SKILL_BONUS", "Skill Bonus"],
    rules: function(model) {
      model.statadd("Acrobatics Misc", 2, "Racial");
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Arcana Bonus"] = new engine.RulesElement({
    name: "Arcana Bonus",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_ARCANA_BONUS",
    source: "Core",
    categories: ["Arcana Bonus", "ID_INTERNAL_RACIAL_TRAIT_ARCANA_BONUS", "ID_INTERNAL_CATEGORY_SKILL_BONUS", "Skill Bonus"],
    rules: function(model) {
      model.statadd("Arcana Misc", 2, "Racial");
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Athletics Bonus"] = new engine.RulesElement({
    name: "Athletics Bonus",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_ATHLETICS_BONUS",
    source: "Core",
    categories: ["Athletics Bonus", "ID_INTERNAL_RACIAL_TRAIT_ATHLETICS_BONUS", "ID_INTERNAL_CATEGORY_SKILL_BONUS", "Skill Bonus"],
    rules: function(model) {
      model.statadd("Athletics Misc", 2, "Racial");
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Bluff Bonus"] = new engine.RulesElement({
    name: "Bluff Bonus",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_BLUFF_BONUS",
    source: "Core",
    categories: ["Bluff Bonus", "ID_INTERNAL_RACIAL_TRAIT_BLUFF_BONUS", "ID_INTERNAL_CATEGORY_SKILL_BONUS", "Skill Bonus"],
    rules: function(model) {
      model.statadd("Bluff Misc", 2, "Racial");
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Diplomacy Bonus"] = new engine.RulesElement({
    name: "Diplomacy Bonus",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_DIPLOMACY_BONUS",
    source: "Core",
    categories: ["Diplomacy Bonus", "ID_INTERNAL_RACIAL_TRAIT_DIPLOMACY_BONUS", "ID_INTERNAL_CATEGORY_SKILL_BONUS", "Skill Bonus"],
    rules: function(model) {
      model.statadd("Diplomacy Misc", 2, "Racial");
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Dungeoneering Bonus"] = new engine.RulesElement({
    name: "Dungeoneering Bonus",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_DUNGEONEERING_BONUS",
    source: "Core",
    categories: ["Dungeoneering Bonus", "ID_INTERNAL_RACIAL_TRAIT_DUNGEONEERING_BONUS", "ID_INTERNAL_CATEGORY_SKILL_BONUS", "Skill Bonus"],
    rules: function(model) {
      model.statadd("Dungeoneering Misc", 2, "Racial");
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Endurance Bonus"] = new engine.RulesElement({
    name: "Endurance Bonus",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_ENDURANCE_BONUS",
    source: "Core",
    categories: ["Endurance Bonus", "ID_INTERNAL_RACIAL_TRAIT_ENDURANCE_BONUS", "ID_INTERNAL_CATEGORY_SKILL_BONUS", "Skill Bonus"],
    rules: function(model) {
      model.statadd("Endurance Misc", 2, "Racial");
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Heal Bonus"] = new engine.RulesElement({
    name: "Heal Bonus",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_HEAL_BONUS",
    source: "Core",
    categories: ["Heal Bonus", "ID_INTERNAL_RACIAL_TRAIT_HEAL_BONUS", "ID_INTERNAL_CATEGORY_SKILL_BONUS", "Skill Bonus"],
    rules: function(model) {
      model.statadd("Heal Misc", 2, "Racial");
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["History Bonus"] = new engine.RulesElement({
    name: "History Bonus",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_HISTORY_BONUS",
    source: "Core",
    categories: ["History Bonus", "ID_INTERNAL_RACIAL_TRAIT_HISTORY_BONUS", "ID_INTERNAL_CATEGORY_SKILL_BONUS", "Skill Bonus"],
    rules: function(model) {
      model.statadd("History Misc", 2, "Racial");
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Human Power Selection"] = new engine.RulesElement({
    name: "Human Power Selection",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_2966",
    categories: ["Human Power Selection", "ID_FMP_RACIAL_TRAIT_2966"],
    rules: function(model) {
      model.select('Racial Trait', 1, "Human Power Selection", {
        filter: function(model, element) { return element.hasCategory("Human Power Selection"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Insight Bonus"] = new engine.RulesElement({
    name: "Insight Bonus",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_INSIGHT_BONUS",
    source: "Core",
    categories: ["Insight Bonus", "ID_INTERNAL_RACIAL_TRAIT_INSIGHT_BONUS", "ID_INTERNAL_CATEGORY_SKILL_BONUS", "Skill Bonus"],
    rules: function(model) {
      model.statadd("Insight Misc", 2, "Racial");
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Intimidate Bonus"] = new engine.RulesElement({
    name: "Intimidate Bonus",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_INTIMIDATE_BONUS",
    source: "Core",
    categories: ["Intimidate Bonus", "ID_INTERNAL_RACIAL_TRAIT_INTIMIDATE_BONUS", "ID_INTERNAL_CATEGORY_SKILL_BONUS", "Skill Bonus"],
    rules: function(model) {
      model.statadd("Intimidate Misc", 2, "Racial");
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Nature Bonus"] = new engine.RulesElement({
    name: "Nature Bonus",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_NATURE_BONUS",
    source: "Core",
    categories: ["Nature Bonus", "ID_INTERNAL_RACIAL_TRAIT_NATURE_BONUS", "ID_INTERNAL_CATEGORY_SKILL_BONUS", "Skill Bonus"],
    rules: function(model) {
      model.statadd("Nature Misc", 2, "Racial");
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Perception Bonus"] = new engine.RulesElement({
    name: "Perception Bonus",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_PERCEPTION_BONUS",
    source: "Core",
    categories: ["Perception Bonus", "ID_INTERNAL_RACIAL_TRAIT_PERCEPTION_BONUS", "ID_INTERNAL_CATEGORY_SKILL_BONUS", "Skill Bonus"],
    rules: function(model) {
      model.statadd("Perception Misc", 2, "Racial");
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Religion Bonus"] = new engine.RulesElement({
    name: "Religion Bonus",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_RELIGION_BONUS",
    source: "Core",
    categories: ["Religion Bonus", "ID_INTERNAL_RACIAL_TRAIT_RELIGION_BONUS", "ID_INTERNAL_CATEGORY_SKILL_BONUS", "Skill Bonus"],
    rules: function(model) {
      model.statadd("Religion Misc", 2, "Racial");
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Stealth Bonus"] = new engine.RulesElement({
    name: "Stealth Bonus",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_STEALTH_BONUS",
    source: "Core",
    categories: ["Stealth Bonus", "ID_INTERNAL_RACIAL_TRAIT_STEALTH_BONUS", "ID_INTERNAL_CATEGORY_SKILL_BONUS", "Skill Bonus"],
    rules: function(model) {
      model.statadd("Stealth Misc", 2, "Racial");
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Streetwise Bonus"] = new engine.RulesElement({
    name: "Streetwise Bonus",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_STREETWISE_BONUS",
    source: "Core",
    categories: ["Streetwise Bonus", "ID_INTERNAL_RACIAL_TRAIT_STREETWISE_BONUS", "ID_INTERNAL_CATEGORY_SKILL_BONUS", "Skill Bonus"],
    rules: function(model) {
      model.statadd("Streetwise Misc", 2, "Racial");
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Thievery Bonus"] = new engine.RulesElement({
    name: "Thievery Bonus",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_THIEVERY_BONUS",
    source: "Core",
    categories: ["Thievery Bonus", "ID_INTERNAL_RACIAL_TRAIT_THIEVERY_BONUS", "ID_INTERNAL_CATEGORY_SKILL_BONUS", "Skill Bonus"],
    rules: function(model) {
      model.statadd("Thievery Misc", 2, "Racial");
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
