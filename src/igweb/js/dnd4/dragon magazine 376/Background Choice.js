define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Background_Choice = types['Background Choice'] || (types['Background Choice'] = {});
  te = Background_Choice["Sarifal Benefit"] = new engine.RulesElement({
    name: "Sarifal Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_SARIFAL_BENEFIT",
    source: "Dragon Magazine 376",
    categories: ["Sarifal Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_SARIFAL_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"]
  });
  byID[te.id] = te;
  
  te = Background_Choice["Tarmalune Benefit"] = new engine.RulesElement({
    name: "Tarmalune Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_TARMALUNE_BENEFIT",
    source: "Dragon Magazine 376",
    categories: ["Tarmalune Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_TARMALUNE_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.statadd("Action Point", "Tarmalune Benefit:When you spend an action point to take an extra action, you gain a +1 bonus to speed until the end of your turn. You also gain a +2 bonus to all Diplomacy checks.");
      model.statadd("Diplomacy Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Windrise Ports (Acrobatics)"] = new engine.RulesElement({
    name: "Windrise Ports (Acrobatics)",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_WINDRISE_PORTS_(ACROBATICS)",
    source: "Dragon Magazine 376",
    categories: ["Windrise Ports (Acrobatics)", "ID_INTERNAL_BACKGROUND_CHOICE_WINDRISE_PORTS_(ACROBATICS)", "ID_FMP_BACKGROUND_276", "Windrise Ports"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Windrise Ports (Arcana)"] = new engine.RulesElement({
    name: "Windrise Ports (Arcana)",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_WINDRISE_PORTS_(ARCANA)",
    source: "Dragon Magazine 376",
    categories: ["Windrise Ports (Arcana)", "ID_INTERNAL_BACKGROUND_CHOICE_WINDRISE_PORTS_(ARCANA)", "ID_FMP_BACKGROUND_276", "Windrise Ports"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Windrise Ports (Athletics)"] = new engine.RulesElement({
    name: "Windrise Ports (Athletics)",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_WINDRISE_PORTS_(ATHLETICS)",
    source: "Dragon Magazine 376",
    categories: ["Windrise Ports (Athletics)", "ID_INTERNAL_BACKGROUND_CHOICE_WINDRISE_PORTS_(ATHLETICS)", "ID_FMP_BACKGROUND_276", "Windrise Ports"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Windrise Ports (Bluff)"] = new engine.RulesElement({
    name: "Windrise Ports (Bluff)",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_WINDRISE_PORTS_(BLUFF)",
    source: "Dragon Magazine 376",
    categories: ["Windrise Ports (Bluff)", "ID_INTERNAL_BACKGROUND_CHOICE_WINDRISE_PORTS_(BLUFF)", "ID_FMP_BACKGROUND_276", "Windrise Ports"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Windrise Ports (Diplomacy)"] = new engine.RulesElement({
    name: "Windrise Ports (Diplomacy)",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_WINDRISE_PORTS_(DIPLOMACY)",
    source: "Dragon Magazine 376",
    categories: ["Windrise Ports (Diplomacy)", "ID_INTERNAL_BACKGROUND_CHOICE_WINDRISE_PORTS_(DIPLOMACY)", "ID_FMP_BACKGROUND_276", "Windrise Ports"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Windrise Ports (Dungeoneering)"] = new engine.RulesElement({
    name: "Windrise Ports (Dungeoneering)",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_WINDRISE_PORTS_(DUNGEONEERING)",
    source: "Dragon Magazine 376",
    categories: ["Windrise Ports (Dungeoneering)", "ID_INTERNAL_BACKGROUND_CHOICE_WINDRISE_PORTS_(DUNGEONEERING)", "ID_FMP_BACKGROUND_276", "Windrise Ports"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Windrise Ports (Endurance)"] = new engine.RulesElement({
    name: "Windrise Ports (Endurance)",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_WINDRISE_PORTS_(ENDURANCE)",
    source: "Dragon Magazine 376",
    categories: ["Windrise Ports (Endurance)", "ID_INTERNAL_BACKGROUND_CHOICE_WINDRISE_PORTS_(ENDURANCE)", "ID_FMP_BACKGROUND_276", "Windrise Ports"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Windrise Ports (Heal)"] = new engine.RulesElement({
    name: "Windrise Ports (Heal)",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_WINDRISE_PORTS_(HEAL)",
    source: "Dragon Magazine 376",
    categories: ["Windrise Ports (Heal)", "ID_INTERNAL_BACKGROUND_CHOICE_WINDRISE_PORTS_(HEAL)", "ID_FMP_BACKGROUND_276", "Windrise Ports"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Windrise Ports (History)"] = new engine.RulesElement({
    name: "Windrise Ports (History)",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_WINDRISE_PORTS_(HISTORY)",
    source: "Dragon Magazine 376",
    categories: ["Windrise Ports (History)", "ID_INTERNAL_BACKGROUND_CHOICE_WINDRISE_PORTS_(HISTORY)", "ID_FMP_BACKGROUND_276", "Windrise Ports"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Windrise Ports (Insight)"] = new engine.RulesElement({
    name: "Windrise Ports (Insight)",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_WINDRISE_PORTS_(INSIGHT)",
    source: "Dragon Magazine 376",
    categories: ["Windrise Ports (Insight)", "ID_INTERNAL_BACKGROUND_CHOICE_WINDRISE_PORTS_(INSIGHT)", "ID_FMP_BACKGROUND_276", "Windrise Ports"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Windrise Ports (Intimidate)"] = new engine.RulesElement({
    name: "Windrise Ports (Intimidate)",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_WINDRISE_PORTS_(INTIMIDATE)",
    source: "Dragon Magazine 376",
    categories: ["Windrise Ports (Intimidate)", "ID_INTERNAL_BACKGROUND_CHOICE_WINDRISE_PORTS_(INTIMIDATE)", "ID_FMP_BACKGROUND_276", "Windrise Ports"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Windrise Ports (Nature)"] = new engine.RulesElement({
    name: "Windrise Ports (Nature)",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_WINDRISE_PORTS_(NATURE)",
    source: "Dragon Magazine 376",
    categories: ["Windrise Ports (Nature)", "ID_INTERNAL_BACKGROUND_CHOICE_WINDRISE_PORTS_(NATURE)", "ID_FMP_BACKGROUND_276", "Windrise Ports"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Windrise Ports (Perception)"] = new engine.RulesElement({
    name: "Windrise Ports (Perception)",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_WINDRISE_PORTS_(PERCEPTION)",
    source: "Dragon Magazine 376",
    categories: ["Windrise Ports (Perception)", "ID_INTERNAL_BACKGROUND_CHOICE_WINDRISE_PORTS_(PERCEPTION)", "ID_FMP_BACKGROUND_276", "Windrise Ports"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Windrise Ports (Religion)"] = new engine.RulesElement({
    name: "Windrise Ports (Religion)",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_WINDRISE_PORTS_(RELIGION)",
    source: "Dragon Magazine 376",
    categories: ["Windrise Ports (Religion)", "ID_INTERNAL_BACKGROUND_CHOICE_WINDRISE_PORTS_(RELIGION)", "ID_FMP_BACKGROUND_276", "Windrise Ports"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Windrise Ports (Stealth)"] = new engine.RulesElement({
    name: "Windrise Ports (Stealth)",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_WINDRISE_PORTS_(STEALTH)",
    source: "Dragon Magazine 376",
    categories: ["Windrise Ports (Stealth)", "ID_INTERNAL_BACKGROUND_CHOICE_WINDRISE_PORTS_(STEALTH)", "ID_FMP_BACKGROUND_276", "Windrise Ports"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Windrise Ports (Streetwise)"] = new engine.RulesElement({
    name: "Windrise Ports (Streetwise)",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_WINDRISE_PORTS_(STREETWISE)",
    source: "Dragon Magazine 376",
    categories: ["Windrise Ports (Streetwise)", "ID_INTERNAL_BACKGROUND_CHOICE_WINDRISE_PORTS_(STREETWISE)", "ID_FMP_BACKGROUND_276", "Windrise Ports"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Windrise Ports (Thievery)"] = new engine.RulesElement({
    name: "Windrise Ports (Thievery)",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_WINDRISE_PORTS_(THIEVERY)",
    source: "Dragon Magazine 376",
    categories: ["Windrise Ports (Thievery)", "ID_INTERNAL_BACKGROUND_CHOICE_WINDRISE_PORTS_(THIEVERY)", "ID_FMP_BACKGROUND_276", "Windrise Ports"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Windrise Ports Benefit"] = new engine.RulesElement({
    name: "Windrise Ports Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_WINDRISE_PORTS_BENEFIT",
    source: "Dragon Magazine 376",
    categories: ["Windrise Ports Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_WINDRISE_PORTS_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.select('Background Choice', 1, "Windrise Ports Benefit", {
        filter: function(model, element) { return element.hasCategory("Windrise Ports"); }
      });
      model.select('Language', 1, "Windrise Ports Benefit");
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
