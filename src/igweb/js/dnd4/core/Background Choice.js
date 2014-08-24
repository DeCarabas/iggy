(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Background_Choice = types['Background Choice'] || (types['Background Choice'] = {});
  te = Background_Choice["+2 to Acrobatics"] = new RulesElement({
    name: "+2 to Acrobatics",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_+2_TO_ACROBATICS",
    source: "Core",
    categories: ["+2 to Acrobatics", "ID_INTERNAL_BACKGROUND_CHOICE_+2_TO_ACROBATICS", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.statadd("Acrobatics Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["+2 to Arcana"] = new RulesElement({
    name: "+2 to Arcana",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_+2_TO_ARCANA",
    source: "Core",
    categories: ["+2 to Arcana", "ID_INTERNAL_BACKGROUND_CHOICE_+2_TO_ARCANA", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.statadd("Arcana Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["+2 to Athletics"] = new RulesElement({
    name: "+2 to Athletics",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_+2_TO_ATHLETICS",
    source: "Core",
    categories: ["+2 to Athletics", "ID_INTERNAL_BACKGROUND_CHOICE_+2_TO_ATHLETICS", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.statadd("Athletics Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["+2 to Bluff"] = new RulesElement({
    name: "+2 to Bluff",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_+2_TO_BLUFF",
    source: "Core",
    categories: ["+2 to Bluff", "ID_INTERNAL_BACKGROUND_CHOICE_+2_TO_BLUFF", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.statadd("Bluff Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["+2 to Diplomacy"] = new RulesElement({
    name: "+2 to Diplomacy",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_+2_TO_DIPLOMACY",
    source: "Core",
    categories: ["+2 to Diplomacy", "ID_INTERNAL_BACKGROUND_CHOICE_+2_TO_DIPLOMACY", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.statadd("Diplomacy Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["+2 to Dungeoneering"] = new RulesElement({
    name: "+2 to Dungeoneering",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_+2_TO_DUNGEONEERING",
    source: "Core",
    categories: ["+2 to Dungeoneering", "ID_INTERNAL_BACKGROUND_CHOICE_+2_TO_DUNGEONEERING", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.statadd("Dungeoneering Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["+2 to Endurance"] = new RulesElement({
    name: "+2 to Endurance",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_+2_TO_ENDURANCE",
    source: "Core",
    categories: ["+2 to Endurance", "ID_INTERNAL_BACKGROUND_CHOICE_+2_TO_ENDURANCE", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.statadd("Endurance Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["+2 to Heal"] = new RulesElement({
    name: "+2 to Heal",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_+2_TO_HEAL",
    source: "Core",
    categories: ["+2 to Heal", "ID_INTERNAL_BACKGROUND_CHOICE_+2_TO_HEAL", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.statadd("Heal Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["+2 to History"] = new RulesElement({
    name: "+2 to History",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_+2_TO_HISTORY",
    source: "Core",
    categories: ["+2 to History", "ID_INTERNAL_BACKGROUND_CHOICE_+2_TO_HISTORY", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.statadd("History Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["+2 to Insight"] = new RulesElement({
    name: "+2 to Insight",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_+2_TO_INSIGHT",
    source: "Core",
    categories: ["+2 to Insight", "ID_INTERNAL_BACKGROUND_CHOICE_+2_TO_INSIGHT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.statadd("Insight Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["+2 to Intimidate"] = new RulesElement({
    name: "+2 to Intimidate",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_+2_TO_INTIMIDATE",
    source: "Core",
    categories: ["+2 to Intimidate", "ID_INTERNAL_BACKGROUND_CHOICE_+2_TO_INTIMIDATE", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.statadd("Intimidate Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["+2 to Nature"] = new RulesElement({
    name: "+2 to Nature",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_+2_TO_NATURE",
    source: "Core",
    categories: ["+2 to Nature", "ID_INTERNAL_BACKGROUND_CHOICE_+2_TO_NATURE", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.statadd("Nature Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["+2 to Perception"] = new RulesElement({
    name: "+2 to Perception",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_+2_TO_PERCEPTION",
    source: "Core",
    categories: ["+2 to Perception", "ID_INTERNAL_BACKGROUND_CHOICE_+2_TO_PERCEPTION", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.statadd("Perception Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["+2 to Religion"] = new RulesElement({
    name: "+2 to Religion",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_+2_TO_RELIGION",
    source: "Core",
    categories: ["+2 to Religion", "ID_INTERNAL_BACKGROUND_CHOICE_+2_TO_RELIGION", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.statadd("Religion Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["+2 to Stealth"] = new RulesElement({
    name: "+2 to Stealth",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_+2_TO_STEALTH",
    source: "Core",
    categories: ["+2 to Stealth", "ID_INTERNAL_BACKGROUND_CHOICE_+2_TO_STEALTH", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.statadd("Stealth Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["+2 to Streetwise"] = new RulesElement({
    name: "+2 to Streetwise",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_+2_TO_STREETWISE",
    source: "Core",
    categories: ["+2 to Streetwise", "ID_INTERNAL_BACKGROUND_CHOICE_+2_TO_STREETWISE", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.statadd("Streetwise Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["+2 to Thievery"] = new RulesElement({
    name: "+2 to Thievery",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_+2_TO_THIEVERY",
    source: "Core",
    categories: ["+2 to Thievery", "ID_INTERNAL_BACKGROUND_CHOICE_+2_TO_THIEVERY", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.statadd("Thievery Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Acrobatics class skill"] = new RulesElement({
    name: "Acrobatics class skill",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_ACROBATICS_CLASS_SKILL",
    source: "Core",
    categories: ["Acrobatics class skill", "ID_INTERNAL_BACKGROUND_CHOICE_ACROBATICS_CLASS_SKILL", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Arcana class skill"] = new RulesElement({
    name: "Arcana class skill",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_ARCANA_CLASS_SKILL",
    source: "Core",
    categories: ["Arcana class skill", "ID_INTERNAL_BACKGROUND_CHOICE_ARCANA_CLASS_SKILL", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Athletics class skill"] = new RulesElement({
    name: "Athletics class skill",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_ATHLETICS_CLASS_SKILL",
    source: "Core",
    categories: ["Athletics class skill", "ID_INTERNAL_BACKGROUND_CHOICE_ATHLETICS_CLASS_SKILL", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Bluff class skill"] = new RulesElement({
    name: "Bluff class skill",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_BLUFF_CLASS_SKILL",
    source: "Core",
    categories: ["Bluff class skill", "ID_INTERNAL_BACKGROUND_CHOICE_BLUFF_CLASS_SKILL", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Diplomacy class skill"] = new RulesElement({
    name: "Diplomacy class skill",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_DIPLOMACY_CLASS_SKILL",
    source: "Core",
    categories: ["Diplomacy class skill", "ID_INTERNAL_BACKGROUND_CHOICE_DIPLOMACY_CLASS_SKILL", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Dungeoneering class skill"] = new RulesElement({
    name: "Dungeoneering class skill",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_DUNGEONEERING_CLASS_SKILL",
    source: "Core",
    categories: ["Dungeoneering class skill", "ID_INTERNAL_BACKGROUND_CHOICE_DUNGEONEERING_CLASS_SKILL", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Endurance class skill"] = new RulesElement({
    name: "Endurance class skill",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_ENDURANCE_CLASS_SKILL",
    source: "Core",
    categories: ["Endurance class skill", "ID_INTERNAL_BACKGROUND_CHOICE_ENDURANCE_CLASS_SKILL", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Heal class skill"] = new RulesElement({
    name: "Heal class skill",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_HEAL_CLASS_SKILL",
    source: "Core",
    categories: ["Heal class skill", "ID_INTERNAL_BACKGROUND_CHOICE_HEAL_CLASS_SKILL", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["History class skill"] = new RulesElement({
    name: "History class skill",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_HISTORY_CLASS_SKILL",
    source: "Core",
    categories: ["History class skill", "ID_INTERNAL_BACKGROUND_CHOICE_HISTORY_CLASS_SKILL", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Insight class skill"] = new RulesElement({
    name: "Insight class skill",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_INSIGHT_CLASS_SKILL",
    source: "Core",
    categories: ["Insight class skill", "ID_INTERNAL_BACKGROUND_CHOICE_INSIGHT_CLASS_SKILL", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Intimidate class skill"] = new RulesElement({
    name: "Intimidate class skill",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_INTIMIDATE_CLASS_SKILL",
    source: "Core",
    categories: ["Intimidate class skill", "ID_INTERNAL_BACKGROUND_CHOICE_INTIMIDATE_CLASS_SKILL", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Learn Abyssal"] = new RulesElement({
    name: "Learn Abyssal",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_LEARN_ABYSSAL",
    source: "Core",
    categories: ["Learn Abyssal", "ID_INTERNAL_BACKGROUND_CHOICE_LEARN_ABYSSAL", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_LANGUAGE_7"]);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Learn All"] = new RulesElement({
    name: "Learn All",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_LEARN_ALL",
    source: "Core",
    categories: ["Learn All", "ID_INTERNAL_BACKGROUND_CHOICE_LEARN_ALL", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_LANGUAGE_ALL"]);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Learn Argon"] = new RulesElement({
    name: "Learn Argon",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_LEARN_ARGON",
    source: "Core",
    categories: ["Learn Argon", "ID_INTERNAL_BACKGROUND_CHOICE_LEARN_ARGON", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_LANGUAGE_37"]);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Learn Chondathan"] = new RulesElement({
    name: "Learn Chondathan",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_LEARN_CHONDATHAN",
    source: "Core",
    categories: ["Learn Chondathan", "ID_INTERNAL_BACKGROUND_CHOICE_LEARN_CHONDATHAN", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_LANGUAGE_34"]);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Learn Common"] = new RulesElement({
    name: "Learn Common",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_LEARN_COMMON",
    source: "Core",
    categories: ["Learn Common", "ID_INTERNAL_BACKGROUND_CHOICE_LEARN_COMMON", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_LANGUAGE_1"]);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Learn Damaran"] = new RulesElement({
    name: "Learn Damaran",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_LEARN_DAMARAN",
    source: "Core",
    categories: ["Learn Damaran", "ID_INTERNAL_BACKGROUND_CHOICE_LEARN_DAMARAN", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_LANGUAGE_28"]);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Learn Deep Speech"] = new RulesElement({
    name: "Learn Deep Speech",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_LEARN_DEEP_SPEECH",
    source: "Core",
    categories: ["Learn Deep Speech", "ID_INTERNAL_BACKGROUND_CHOICE_LEARN_DEEP_SPEECH", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_LANGUAGE_18"]);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Learn Draconic"] = new RulesElement({
    name: "Learn Draconic",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_LEARN_DRACONIC",
    source: "Core",
    categories: ["Learn Draconic", "ID_INTERNAL_BACKGROUND_CHOICE_LEARN_DRACONIC", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_LANGUAGE_2"]);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Learn Dwarven"] = new RulesElement({
    name: "Learn Dwarven",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_LEARN_DWARVEN",
    source: "Core",
    categories: ["Learn Dwarven", "ID_INTERNAL_BACKGROUND_CHOICE_LEARN_DWARVEN", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_LANGUAGE_3"]);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Learn Elven"] = new RulesElement({
    name: "Learn Elven",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_LEARN_ELVEN",
    source: "Core",
    categories: ["Learn Elven", "ID_INTERNAL_BACKGROUND_CHOICE_LEARN_ELVEN", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_LANGUAGE_4"]);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Learn Giant"] = new RulesElement({
    name: "Learn Giant",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_LEARN_GIANT",
    source: "Core",
    categories: ["Learn Giant", "ID_INTERNAL_BACKGROUND_CHOICE_LEARN_GIANT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_LANGUAGE_19"]);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Learn Goblin"] = new RulesElement({
    name: "Learn Goblin",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_LEARN_GOBLIN",
    source: "Core",
    categories: ["Learn Goblin", "ID_INTERNAL_BACKGROUND_CHOICE_LEARN_GOBLIN", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_LANGUAGE_20"]);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Learn Netherese"] = new RulesElement({
    name: "Learn Netherese",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_LEARN_NETHERESE",
    source: "Core",
    categories: ["Learn Netherese", "ID_INTERNAL_BACKGROUND_CHOICE_LEARN_NETHERESE", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_LANGUAGE_29"]);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Learn Primordial"] = new RulesElement({
    name: "Learn Primordial",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_LEARN_PRIMORDIAL",
    source: "Core",
    categories: ["Learn Primordial", "ID_INTERNAL_BACKGROUND_CHOICE_LEARN_PRIMORDIAL", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_LANGUAGE_6"]);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Learn Quori"] = new RulesElement({
    name: "Learn Quori",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_LEARN_QUORI",
    source: "Core",
    categories: ["Learn Quori", "ID_INTERNAL_BACKGROUND_CHOICE_LEARN_QUORI", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_LANGUAGE_38"]);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Learn Riedran"] = new RulesElement({
    name: "Learn Riedran",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_LEARN_RIEDRAN",
    source: "Core",
    categories: ["Learn Riedran", "ID_INTERNAL_BACKGROUND_CHOICE_LEARN_RIEDRAN", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_LANGUAGE_40"]);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Learn Secret Language"] = new RulesElement({
    name: "Learn Secret Language",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_LEARN_SECRET_LANGUAGE",
    source: "Core",
    categories: ["Learn Secret Language", "ID_INTERNAL_BACKGROUND_CHOICE_LEARN_SECRET_LANGUAGE", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_LANGUAGE_SECRET_LANGUAGE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Learn Shou"] = new RulesElement({
    name: "Learn Shou",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_LEARN_SHOU",
    source: "Core",
    categories: ["Learn Shou", "ID_INTERNAL_BACKGROUND_CHOICE_LEARN_SHOU", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_LANGUAGE_30"]);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Learn Supernal"] = new RulesElement({
    name: "Learn Supernal",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_LEARN_SUPERNAL",
    source: "Core",
    categories: ["Learn Supernal", "ID_INTERNAL_BACKGROUND_CHOICE_LEARN_SUPERNAL", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_LANGUAGE_8"]);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Learn Thayan"] = new RulesElement({
    name: "Learn Thayan",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_LEARN_THAYAN",
    source: "Core",
    categories: ["Learn Thayan", "ID_INTERNAL_BACKGROUND_CHOICE_LEARN_THAYAN", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_LANGUAGE_31"]);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Learn The language of the mind"] = new RulesElement({
    name: "Learn The language of the mind",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_LEARN_THE_LANGUAGE_OF_THE_MIND",
    source: "Core",
    categories: ["Learn The language of the mind", "ID_INTERNAL_BACKGROUND_CHOICE_LEARN_THE_LANGUAGE_OF_THE_MIND", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_LANGUAGE_45"]);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Learn Tulgan"] = new RulesElement({
    name: "Learn Tulgan",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_LEARN_TULGAN",
    source: "Core",
    categories: ["Learn Tulgan", "ID_INTERNAL_BACKGROUND_CHOICE_LEARN_TULGAN", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_LANGUAGE_32"]);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Learn Untheric"] = new RulesElement({
    name: "Learn Untheric",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_LEARN_UNTHERIC",
    source: "Core",
    categories: ["Learn Untheric", "ID_INTERNAL_BACKGROUND_CHOICE_LEARN_UNTHERIC", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_LANGUAGE_33"]);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Nature class skill"] = new RulesElement({
    name: "Nature class skill",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_NATURE_CLASS_SKILL",
    source: "Core",
    categories: ["Nature class skill", "ID_INTERNAL_BACKGROUND_CHOICE_NATURE_CLASS_SKILL", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Perception class skill"] = new RulesElement({
    name: "Perception class skill",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_PERCEPTION_CLASS_SKILL",
    source: "Core",
    categories: ["Perception class skill", "ID_INTERNAL_BACKGROUND_CHOICE_PERCEPTION_CLASS_SKILL", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Religion class skill"] = new RulesElement({
    name: "Religion class skill",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_RELIGION_CLASS_SKILL",
    source: "Core",
    categories: ["Religion class skill", "ID_INTERNAL_BACKGROUND_CHOICE_RELIGION_CLASS_SKILL", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Stealth class skill"] = new RulesElement({
    name: "Stealth class skill",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_STEALTH_CLASS_SKILL",
    source: "Core",
    categories: ["Stealth class skill", "ID_INTERNAL_BACKGROUND_CHOICE_STEALTH_CLASS_SKILL", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Streetwise class skill"] = new RulesElement({
    name: "Streetwise class skill",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_STREETWISE_CLASS_SKILL",
    source: "Core",
    categories: ["Streetwise class skill", "ID_INTERNAL_BACKGROUND_CHOICE_STREETWISE_CLASS_SKILL", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Thievery class skill"] = new RulesElement({
    name: "Thievery class skill",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_THIEVERY_CLASS_SKILL",
    source: "Core",
    categories: ["Thievery class skill", "ID_INTERNAL_BACKGROUND_CHOICE_THIEVERY_CLASS_SKILL", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  
})(this);
