define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Background_Choice = types['Background Choice'] || (types['Background Choice'] = {});
  te = Background_Choice["Aglarond Benefit"] = new engine.RulesElement({
    name: "Aglarond Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_AGLAROND_BENEFIT",
    source: "Forgotten Realms Player's Guide",
    categories: ["Aglarond Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_AGLAROND_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_LANGUAGE_4"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Perception Misc", 1);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Akanûl Benefit"] = new engine.RulesElement({
    name: "Akanûl Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_AKANûL_BENEFIT",
    source: "Forgotten Realms Player's Guide",
    categories: ["Akanûl Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_AKANûL_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.statadd("resist:cold", 2);
      model.statadd("resist:fire", 2);
      model.statadd("resist:thunder", 2);
      model.statadd("resist:cold", 1);
      model.statadd("resist:fire", 1);
      model.statadd("resist:thunder", 1);
      model.statadd("resist:cold", 2);
      model.statadd("resist:fire", 2);
      model.statadd("resist:thunder", 2);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Amn Benefit"] = new engine.RulesElement({
    name: "Amn Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_AMN_BENEFIT",
    source: "Forgotten Realms Player's Guide",
    categories: ["Amn Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_AMN_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Streetwise Misc", 1);
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Thievery Misc", 1);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Baldur's Gate Benefit"] = new engine.RulesElement({
    name: "Baldur's Gate Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_BALDUR'S_GATE_BENEFIT",
    source: "Forgotten Realms Player's Guide",
    categories: ["Baldur's Gate Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_BALDUR'S_GATE_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.select('Language', 1, "Baldur's Gate Benefit");
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Streetwise Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Calimshan Benefit"] = new engine.RulesElement({
    name: "Calimshan Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_CALIMSHAN_BENEFIT",
    source: "Forgotten Realms Player's Guide",
    categories: ["Calimshan Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_CALIMSHAN_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.statadd("resist:fire", 4, "resist");
      model.statadd("resist:fire", 7, "resist");
      model.statadd("resist:fire", 10, "resist");
      model.statadd("Endurance Misc", function() { /* due to thirst */ return 5; });
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Chessenta Benefit"] = new engine.RulesElement({
    name: "Chessenta Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_CHESSENTA_BENEFIT",
    source: "Forgotten Realms Player's Guide",
    categories: ["Chessenta Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_CHESSENTA_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.statadd("Action Point", "Chessenta Benefit:When you spend an action point to take an extra action, you gain a +1 bonus to all rolls made during the extra action granted.");
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Cormyr (General) Benefit"] = new engine.RulesElement({
    name: "Cormyr (General) Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_CORMYR_(GENERAL)_BENEFIT",
    source: "Forgotten Realms Player's Guide",
    categories: ["Cormyr (General) Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_CORMYR_(GENERAL)_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Insight Misc", 2);
      model.statadd("Saving Throws", function() { /* against fear effects */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Cormyr (Wheloon) Benefit"] = new engine.RulesElement({
    name: "Cormyr (Wheloon) Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_CORMYR_(WHELOON)_BENEFIT",
    source: "Forgotten Realms Player's Guide",
    categories: ["Cormyr (Wheloon) Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_CORMYR_(WHELOON)_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Thievery Misc", 2);
      model.statadd("Saving Throws", function() { /* against charm effects */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Dalelands Benefit"] = new engine.RulesElement({
    name: "Dalelands Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_DALELANDS_BENEFIT",
    source: "Forgotten Realms Player's Guide",
    categories: ["Dalelands Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_DALELANDS_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.statadd("Initiative Misc", 1);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Dragon Coast Benefit"] = new engine.RulesElement({
    name: "Dragon Coast Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_DRAGON_COAST_BENEFIT",
    source: "Forgotten Realms Player's Guide",
    categories: ["Dragon Coast Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_DRAGON_COAST_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.select('Language', 1, "Dragon Coast Benefit");
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Durpar Benefit"] = new engine.RulesElement({
    name: "Durpar Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_DURPAR_BENEFIT",
    source: "Forgotten Realms Player's Guide",
    categories: ["Durpar Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_DURPAR_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.statadd("Perception Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["East Rift Benefit"] = new engine.RulesElement({
    name: "East Rift Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_EAST_RIFT_BENEFIT",
    source: "Forgotten Realms Player's Guide",
    categories: ["East Rift Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_EAST_RIFT_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_LANGUAGE_18"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Dungeoneering Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Elfharrow Benefit"] = new engine.RulesElement({
    name: "Elfharrow Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_ELFHARROW_BENEFIT",
    source: "Forgotten Realms Player's Guide",
    categories: ["Elfharrow Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_ELFHARROW_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Athletics Misc", 1);
      model.statadd("Nature Misc", 1);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Gray Vale Benefit"] = new engine.RulesElement({
    name: "Gray Vale Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_GRAY_VALE_BENEFIT",
    source: "Forgotten Realms Player's Guide",
    categories: ["Gray Vale Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_GRAY_VALE_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.select('Language', 1, "Gray Vale Benefit");
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Nature Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Great Dale Benefit"] = new engine.RulesElement({
    name: "Great Dale Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_GREAT_DALE_BENEFIT",
    source: "Forgotten Realms Player's Guide",
    categories: ["Great Dale Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_GREAT_DALE_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Arcana Misc", 1);
      model.statadd("Nature Misc", 1);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["High Imaskar Benefit"] = new engine.RulesElement({
    name: "High Imaskar Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_HIGH_IMASKAR_BENEFIT",
    source: "Forgotten Realms Player's Guide",
    categories: ["High Imaskar Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_HIGH_IMASKAR_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_LANGUAGE_18"]);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Impiltur Benefit"] = new engine.RulesElement({
    name: "Impiltur Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_IMPILTUR_BENEFIT",
    source: "Forgotten Realms Player's Guide",
    categories: ["Impiltur Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_IMPILTUR_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.statadd("Hit Points", function() { return model.stat("Wisdom"); }, "Level 1");
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Luruar Benefit"] = new engine.RulesElement({
    name: "Luruar Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_LURUAR_BENEFIT",
    source: "Forgotten Realms Player's Guide",
    categories: ["Luruar Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_LURUAR_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.select('Language', 1, "Luruar Benefit");
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Luskan Benefit"] = new engine.RulesElement({
    name: "Luskan Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_LUSKAN_BENEFIT",
    source: "Forgotten Realms Player's Guide",
    categories: ["Luskan Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_LUSKAN_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Stealth Misc", 1);
      model.statadd("Thievery Misc", 1);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Moonshae Isles Benefit"] = new engine.RulesElement({
    name: "Moonshae Isles Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_MOONSHAE_ISLES_BENEFIT",
    source: "Forgotten Realms Player's Guide",
    categories: ["Moonshae Isles Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_MOONSHAE_ISLES_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_LANGUAGE_4"]);
      model.statadd("Saving Throws", function() { /* against charm and fear effects */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Myth Drannor Benefit"] = new engine.RulesElement({
    name: "Myth Drannor Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_MYTH_DRANNOR_BENEFIT",
    source: "Forgotten Realms Player's Guide",
    categories: ["Myth Drannor Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_MYTH_DRANNOR_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"]
  });
  byID[te.id] = te;
  
  te = Background_Choice["Narfell Benefit"] = new engine.RulesElement({
    name: "Narfell Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_NARFELL_BENEFIT",
    source: "Forgotten Realms Player's Guide",
    categories: ["Narfell Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_NARFELL_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Endurance Misc", 3);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Nelanther Isles Benefit"] = new engine.RulesElement({
    name: "Nelanther Isles Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_NELANTHER_ISLES_BENEFIT",
    source: "Forgotten Realms Player's Guide",
    categories: ["Nelanther Isles Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_NELANTHER_ISLES_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Acrobatics Misc", 1);
      model.statadd("Athletics Misc", 1);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Netheril Benefit"] = new engine.RulesElement({
    name: "Netheril Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_NETHERIL_BENEFIT",
    source: "Forgotten Realms Player's Guide",
    categories: ["Netheril Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_NETHERIL_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Arcana Misc", 1);
      model.statadd("History Misc", 1);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Thay Benefit"] = new engine.RulesElement({
    name: "Thay Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_THAY_BENEFIT",
    source: "Forgotten Realms Player's Guide",
    categories: ["Thay Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_THAY_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.statadd("Hit Points", function() { return model.stat("Intelligence"); }, "Level 1");
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Tymanther Benefit"] = new engine.RulesElement({
    name: "Tymanther Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_TYMANTHER_BENEFIT",
    source: "Forgotten Realms Player's Guide",
    categories: ["Tymanther Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_TYMANTHER_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Athletics Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Vilhon Wilds Benefit"] = new engine.RulesElement({
    name: "Vilhon Wilds Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_VILHON_WILDS_BENEFIT",
    source: "Forgotten Realms Player's Guide",
    categories: ["Vilhon Wilds Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_VILHON_WILDS_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.statadd("Initiative Misc", 1);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Waterdeep Benefit"] = new engine.RulesElement({
    name: "Waterdeep Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_WATERDEEP_BENEFIT",
    source: "Forgotten Realms Player's Guide",
    categories: ["Waterdeep Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_WATERDEEP_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.select('Language', 1, "Waterdeep Benefit");
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Diplomacy Misc", 2);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
