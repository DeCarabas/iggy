define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Racial_Trait = types['Racial Trait'] || (types['Racial Trait'] = {});
  te = Racial_Trait["Past Spirit (Bladeling)"] = new engine.RulesElement({
    name: "Past Spirit (Bladeling)",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(BLADELING)",
    source: "Primal Power,Dragon Magazine 385",
    categories: ["Past Spirit (Bladeling)", "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(BLADELING)", "ID_FMP_CLASS_FEATURE_2064", "Past Spirit"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASRACE_BLADELING"]);
      model.grant(model.elements.id["ID_FMP_POWER_5599"]);
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Past Spirit (Bugbear)"] = new engine.RulesElement({
    name: "Past Spirit (Bugbear)",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(BUGBEAR)",
    source: "Primal Power,Dragon Magazine 385",
    categories: ["Past Spirit (Bugbear)", "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(BUGBEAR)", "ID_FMP_CLASS_FEATURE_2064", "Past Spirit"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASRACE_BUGBEAR"]);
      model.grant(model.elements.id["ID_FMP_POWER_2324"]);
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Past Spirit (Bullywug)"] = new engine.RulesElement({
    name: "Past Spirit (Bullywug)",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(BULLYWUG)",
    source: "Primal Power,Dragon Magazine 385",
    categories: ["Past Spirit (Bullywug)", "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(BULLYWUG)", "ID_FMP_CLASS_FEATURE_2064", "Past Spirit"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASRACE_BULLYWUG"]);
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Past Spirit (Changeling)"] = new engine.RulesElement({
    name: "Past Spirit (Changeling)",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(CHANGELING)",
    source: "Primal Power,Dragon Magazine 385",
    categories: ["Past Spirit (Changeling)", "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(CHANGELING)", "ID_FMP_CLASS_FEATURE_2064", "Past Spirit"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASRACE_CHANGELING"]);
      model.grant(model.elements.id["ID_FMP_POWER_7546"]);
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Past Spirit (Deva)"] = new engine.RulesElement({
    name: "Past Spirit (Deva)",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(DEVA)",
    source: "Primal Power,Dragon Magazine 385",
    categories: ["Past Spirit (Deva)", "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(DEVA)", "ID_FMP_CLASS_FEATURE_2064", "Past Spirit"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASRACE_DEVA"]);
      model.grant(model.elements.id["ID_FMP_POWER_6186"]);
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Past Spirit (Dragonborn)"] = new engine.RulesElement({
    name: "Past Spirit (Dragonborn)",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(DRAGONBORN)",
    source: "Primal Power,Dragon Magazine 385",
    categories: ["Past Spirit (Dragonborn)", "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(DRAGONBORN)", "ID_FMP_CLASS_FEATURE_2064", "Past Spirit"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASRACE_DRAGONBORN"]);
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_POWER_1448") || element.hasCategory("ID_FMP_POWER_12577")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Past Spirit (Drow)"] = new engine.RulesElement({
    name: "Past Spirit (Drow)",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(DROW)",
    source: "Primal Power,Dragon Magazine 385",
    categories: ["Past Spirit (Drow)", "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(DROW)", "ID_FMP_CLASS_FEATURE_2064", "Past Spirit"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASRACE_DROW"]);
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_POWER_1831") || element.hasCategory("ID_FMP_POWER_2473")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Past Spirit (Duergar)"] = new engine.RulesElement({
    name: "Past Spirit (Duergar)",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(DUERGAR)",
    source: "Primal Power,Dragon Magazine 385",
    categories: ["Past Spirit (Duergar)", "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(DUERGAR)", "ID_FMP_CLASS_FEATURE_2064", "Past Spirit"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASRACE_DUERGAR"]);
      model.grant(model.elements.id["ID_FMP_POWER_27"]);
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Past Spirit (Dwarf)"] = new engine.RulesElement({
    name: "Past Spirit (Dwarf)",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(DWARF)",
    source: "Primal Power,Dragon Magazine 385",
    categories: ["Past Spirit (Dwarf)", "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(DWARF)", "ID_FMP_CLASS_FEATURE_2064", "Past Spirit"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASRACE_DWARF"]);
      model.grant(model.elements.id["ID_FMP_POWER_13211"]);
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Past Spirit (Eladrin)"] = new engine.RulesElement({
    name: "Past Spirit (Eladrin)",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(ELADRIN)",
    source: "Primal Power,Dragon Magazine 385",
    categories: ["Past Spirit (Eladrin)", "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(ELADRIN)", "ID_FMP_CLASS_FEATURE_2064", "Past Spirit"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASRACE_ELADRIN"]);
      model.grant(model.elements.id["ID_FMP_POWER_1449"]);
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Past Spirit (Elf)"] = new engine.RulesElement({
    name: "Past Spirit (Elf)",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(ELF)",
    source: "Primal Power,Dragon Magazine 385",
    categories: ["Past Spirit (Elf)", "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(ELF)", "ID_FMP_CLASS_FEATURE_2064", "Past Spirit"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASRACE_ELF"]);
      model.grant(model.elements.id["ID_FMP_POWER_1450"]);
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Past Spirit (Genasi)"] = new engine.RulesElement({
    name: "Past Spirit (Genasi)",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(GENASI)",
    source: "Primal Power,Dragon Magazine 385",
    categories: ["Past Spirit (Genasi)", "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(GENASI)", "ID_FMP_CLASS_FEATURE_2064", "Past Spirit"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASRACE_GENASI"]);
      model.select('Power', 1, {
        filter: function(model, element) { return ((((((((element.hasCategory("ID_FMP_POWER_1766") || element.hasCategory("ID_FMP_POWER_1767")) || element.hasCategory("ID_FMP_POWER_1769")) || element.hasCategory("ID_FMP_POWER_1770")) || element.hasCategory("ID_FMP_POWER_1828")) || element.hasCategory("ID_FMP_POWER_10043")) || element.hasCategory("ID_FMP_POWER_10044")) || element.hasCategory("ID_FMP_POWER_10045")) || element.hasCategory("ID_FMP_POWER_10046")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Past Spirit (Githyanki)"] = new engine.RulesElement({
    name: "Past Spirit (Githyanki)",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(GITHYANKI)",
    source: "Primal Power,Dragon Magazine 385",
    categories: ["Past Spirit (Githyanki)", "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(GITHYANKI)", "ID_FMP_CLASS_FEATURE_2064", "Past Spirit"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASRACE_GITHYANKI"]);
      model.grant(model.elements.id["ID_FMP_POWER_2474"]);
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Past Spirit (Githzerai)"] = new engine.RulesElement({
    name: "Past Spirit (Githzerai)",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(GITHZERAI)",
    source: "Primal Power,Dragon Magazine 385",
    categories: ["Past Spirit (Githzerai)", "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(GITHZERAI)", "ID_FMP_CLASS_FEATURE_2064", "Past Spirit"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASRACE_GITHZERAI"]);
      model.grant(model.elements.id["ID_FMP_POWER_2475"]);
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Past Spirit (Gnoll)"] = new engine.RulesElement({
    name: "Past Spirit (Gnoll)",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(GNOLL)",
    source: "Primal Power,Dragon Magazine 385",
    categories: ["Past Spirit (Gnoll)", "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(GNOLL)", "ID_FMP_CLASS_FEATURE_2064", "Past Spirit"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASRACE_GNOLL"]);
      model.grant(model.elements.id["ID_FMP_POWER_2476"]);
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Past Spirit (Gnome)"] = new engine.RulesElement({
    name: "Past Spirit (Gnome)",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(GNOME)",
    source: "Primal Power,Dragon Magazine 385",
    categories: ["Past Spirit (Gnome)", "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(GNOME)", "ID_FMP_CLASS_FEATURE_2064", "Past Spirit"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASRACE_GNOME"]);
      model.grant(model.elements.id["ID_FMP_POWER_377"]);
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Past Spirit (Goblin)"] = new engine.RulesElement({
    name: "Past Spirit (Goblin)",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(GOBLIN)",
    source: "Primal Power,Dragon Magazine 385",
    categories: ["Past Spirit (Goblin)", "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(GOBLIN)", "ID_FMP_CLASS_FEATURE_2064", "Past Spirit"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASRACE_GOBLIN"]);
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Past Spirit (Goliath)"] = new engine.RulesElement({
    name: "Past Spirit (Goliath)",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(GOLIATH)",
    source: "Primal Power,Dragon Magazine 385",
    categories: ["Past Spirit (Goliath)", "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(GOLIATH)", "ID_FMP_CLASS_FEATURE_2064", "Past Spirit"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASRACE_GOLIATH"]);
      model.grant(model.elements.id["ID_FMP_POWER_6188"]);
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Past Spirit (Half-Elf)"] = new engine.RulesElement({
    name: "Past Spirit (Half-Elf)",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(HALF-ELF)",
    source: "Primal Power,Dragon Magazine 385",
    categories: ["Past Spirit (Half-Elf)", "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(HALF-ELF)", "ID_FMP_CLASS_FEATURE_2064", "Past Spirit"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASRACE_HALF-ELF"]);
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Past Spirit (Halfling)"] = new engine.RulesElement({
    name: "Past Spirit (Halfling)",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(HALFLING)",
    source: "Primal Power,Dragon Magazine 385",
    categories: ["Past Spirit (Halfling)", "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(HALFLING)", "ID_FMP_CLASS_FEATURE_2064", "Past Spirit"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASRACE_HALFLING"]);
      model.grant(model.elements.id["ID_FMP_POWER_1452"]);
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Past Spirit (Half-Orc)"] = new engine.RulesElement({
    name: "Past Spirit (Half-Orc)",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(HALF-ORC)",
    source: "Primal Power,Dragon Magazine 385",
    categories: ["Past Spirit (Half-Orc)", "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(HALF-ORC)", "ID_FMP_CLASS_FEATURE_2064", "Past Spirit"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASRACE_HALF-ORC"]);
      model.grant(model.elements.id["ID_FMP_POWER_6189"]);
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Past Spirit (Hobgoblin)"] = new engine.RulesElement({
    name: "Past Spirit (Hobgoblin)",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(HOBGOBLIN)",
    source: "Primal Power,Dragon Magazine 385",
    categories: ["Past Spirit (Hobgoblin)", "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(HOBGOBLIN)", "ID_FMP_CLASS_FEATURE_2064", "Past Spirit"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASRACE_HOBGOBLIN"]);
      model.grant(model.elements.id["ID_FMP_POWER_2478"]);
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Past Spirit (Human)"] = new engine.RulesElement({
    name: "Past Spirit (Human)",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(HUMAN)",
    source: "Primal Power,Dragon Magazine 385",
    categories: ["Past Spirit (Human)", "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(HUMAN)", "ID_FMP_CLASS_FEATURE_2064", "Past Spirit"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASRACE_HUMAN"]);
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Past Spirit (Kalashtar)"] = new engine.RulesElement({
    name: "Past Spirit (Kalashtar)",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(KALASHTAR)",
    source: "Primal Power,Dragon Magazine 385",
    categories: ["Past Spirit (Kalashtar)", "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(KALASHTAR)", "ID_FMP_CLASS_FEATURE_2064", "Past Spirit"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASRACE_KALASHTAR"]);
      model.grant(model.elements.id["ID_FMP_POWER_7548"]);
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Past Spirit (Kenku)"] = new engine.RulesElement({
    name: "Past Spirit (Kenku)",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(KENKU)",
    source: "Primal Power,Dragon Magazine 385",
    categories: ["Past Spirit (Kenku)", "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(KENKU)", "ID_FMP_CLASS_FEATURE_2064", "Past Spirit"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASRACE_KENKU"]);
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Past Spirit (Kobold)"] = new engine.RulesElement({
    name: "Past Spirit (Kobold)",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(KOBOLD)",
    source: "Primal Power,Dragon Magazine 385",
    categories: ["Past Spirit (Kobold)", "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(KOBOLD)", "ID_FMP_CLASS_FEATURE_2064", "Past Spirit"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASRACE_KOBOLD"]);
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Past Spirit (Longtooth Shifter)"] = new engine.RulesElement({
    name: "Past Spirit (Longtooth Shifter)",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(LONGTOOTH_SHIFTER)",
    source: "Primal Power,Dragon Magazine 385",
    categories: ["Past Spirit (Longtooth Shifter)", "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(LONGTOOTH_SHIFTER)", "ID_FMP_CLASS_FEATURE_2064", "Past Spirit"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASRACE_LONGTOOTH_SHIFTER"]);
      model.grant(model.elements.id["ID_FMP_POWER_2483"]);
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Past Spirit (Minotaur)"] = new engine.RulesElement({
    name: "Past Spirit (Minotaur)",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(MINOTAUR)",
    source: "Primal Power,Dragon Magazine 385",
    categories: ["Past Spirit (Minotaur)", "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(MINOTAUR)", "ID_FMP_CLASS_FEATURE_2064", "Past Spirit"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASRACE_MINOTAUR"]);
      model.grant(model.elements.id["ID_FMP_POWER_2480"]);
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Past Spirit (Orc)"] = new engine.RulesElement({
    name: "Past Spirit (Orc)",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(ORC)",
    source: "Primal Power,Dragon Magazine 385",
    categories: ["Past Spirit (Orc)", "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(ORC)", "ID_FMP_CLASS_FEATURE_2064", "Past Spirit"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASRACE_ORC"]);
      model.grant(model.elements.id["ID_FMP_POWER_2481"]);
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Past Spirit (Razorclaw Shifter)"] = new engine.RulesElement({
    name: "Past Spirit (Razorclaw Shifter)",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(RAZORCLAW_SHIFTER)",
    source: "Primal Power,Dragon Magazine 385",
    categories: ["Past Spirit (Razorclaw Shifter)", "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(RAZORCLAW_SHIFTER)", "ID_FMP_CLASS_FEATURE_2064", "Past Spirit"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASRACE_RAZORCLAW_SHIFTER"]);
      model.grant(model.elements.id["ID_FMP_POWER_2484"]);
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Past Spirit (Revenant)"] = new engine.RulesElement({
    name: "Past Spirit (Revenant)",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(REVENANT)",
    source: "Primal Power,Dragon Magazine 385",
    categories: ["Past Spirit (Revenant)", "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(REVENANT)", "ID_FMP_CLASS_FEATURE_2064", "Past Spirit"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASRACE_REVENANT"]);
      model.grant(model.elements.id["ID_FMP_POWER_8278"]);
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Past Spirit (Shadar-kai)"] = new engine.RulesElement({
    name: "Past Spirit (Shadar-kai)",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(SHADAR-KAI)",
    source: "Primal Power,Dragon Magazine 385",
    categories: ["Past Spirit (Shadar-kai)", "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(SHADAR-KAI)", "ID_FMP_CLASS_FEATURE_2064", "Past Spirit"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASRACE_SHADAR-KAI"]);
      model.grant(model.elements.id["ID_FMP_POWER_2482"]);
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Past Spirit (Shardmind)"] = new engine.RulesElement({
    name: "Past Spirit (Shardmind)",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(SHARDMIND)",
    source: "Primal Power,Dragon Magazine 385",
    categories: ["Past Spirit (Shardmind)", "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(SHARDMIND)", "ID_FMP_CLASS_FEATURE_2064", "Past Spirit"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASRACE_SHARDMIND"]);
      model.grant(model.elements.id["ID_FMP_POWER_11052"]);
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Past Spirit (Tiefling)"] = new engine.RulesElement({
    name: "Past Spirit (Tiefling)",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(TIEFLING)",
    source: "Primal Power,Dragon Magazine 385",
    categories: ["Past Spirit (Tiefling)", "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(TIEFLING)", "ID_FMP_CLASS_FEATURE_2064", "Past Spirit"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASRACE_TIEFLING"]);
      model.grant(model.elements.id["ID_FMP_POWER_1628"]);
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Past Spirit (Warforged)"] = new engine.RulesElement({
    name: "Past Spirit (Warforged)",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(WARFORGED)",
    source: "Primal Power,Dragon Magazine 385",
    categories: ["Past Spirit (Warforged)", "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(WARFORGED)", "ID_FMP_CLASS_FEATURE_2064", "Past Spirit"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASRACE_WARFORGED"]);
      model.grant(model.elements.id["ID_FMP_POWER_2485"]);
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Past Spirit (Wilden)"] = new engine.RulesElement({
    name: "Past Spirit (Wilden)",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(WILDEN)",
    source: "Primal Power,Dragon Magazine 385",
    categories: ["Past Spirit (Wilden)", "ID_INTERNAL_RACIAL_TRAIT_PAST_SPIRIT_(WILDEN)", "ID_FMP_CLASS_FEATURE_2064", "Past Spirit"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASRACE_WILDEN"]);
      model.select('Power', 1, {
        filter: function(model, element) { return ((element.hasCategory("ID_FMP_POWER_7441") || element.hasCategory("ID_FMP_POWER_7442")) || element.hasCategory("ID_FMP_POWER_7443")); }
      });
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
