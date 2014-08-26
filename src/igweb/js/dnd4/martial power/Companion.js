define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Companion = types['Companion'] || (types['Companion'] = {});
  te = Companion["Bear"] = new engine.RulesElement({
    name: "Bear",
    type: "Companion",
    id: "ID_FMP_COMPANION_1",
    source: "Martial Power",
    categories: ["Bear", "ID_FMP_COMPANION_1"],
    rules: function(model) {
      model.statadd("Companion.Strength", 16);
      model.statadd("Companion.Constitution", 14);
      model.statadd("Companion.Dexterity", 12);
      model.statadd("Companion.Intelligence", 6);
      model.statadd("Companion.Wisdom", 12);
      model.statadd("Companion.Charisma", 6);
      model.grant(model.elements.id["ID_INTERNAL_POWER_BEAST_MELEE_BASIC_ATTACK"]);
    }
  });
  byID[te.id] = te;
  
  te = Companion["Boar"] = new engine.RulesElement({
    name: "Boar",
    type: "Companion",
    id: "ID_FMP_COMPANION_2",
    source: "Martial Power",
    categories: ["Boar", "ID_FMP_COMPANION_2"],
    rules: function(model) {
      model.statadd("Companion.Strength", 16);
      model.statadd("Companion.Constitution", 16);
      model.statadd("Companion.Dexterity", 14);
      model.statadd("Companion.Intelligence", 6);
      model.statadd("Companion.Wisdom", 12);
      model.statadd("Companion.Charisma", 6);
      model.grant(model.elements.id["ID_INTERNAL_POWER_BEAST_MELEE_BASIC_ATTACK"]);
    }
  });
  byID[te.id] = te;
  
  te = Companion["Cat"] = new engine.RulesElement({
    name: "Cat",
    type: "Companion",
    id: "ID_FMP_COMPANION_3",
    source: "Martial Power",
    categories: ["Cat", "ID_FMP_COMPANION_3"],
    rules: function(model) {
      model.statadd("Companion.Strength", 14);
      model.statadd("Companion.Constitution", 12);
      model.statadd("Companion.Dexterity", 16);
      model.statadd("Companion.Intelligence", 6);
      model.statadd("Companion.Wisdom", 14);
      model.statadd("Companion.Charisma", 6);
      model.grant(model.elements.id["ID_INTERNAL_POWER_BEAST_MELEE_BASIC_ATTACK"]);
    }
  });
  byID[te.id] = te;
  
  te = Companion["Lizard"] = new engine.RulesElement({
    name: "Lizard",
    type: "Companion",
    id: "ID_FMP_COMPANION_4",
    source: "Martial Power",
    categories: ["Lizard", "ID_FMP_COMPANION_4"],
    rules: function(model) {
      model.statadd("Companion.Strength", 16);
      model.statadd("Companion.Constitution", 14);
      model.statadd("Companion.Dexterity", 16);
      model.statadd("Companion.Intelligence", 6);
      model.statadd("Companion.Wisdom", 12);
      model.statadd("Companion.Charisma", 6);
      model.grant(model.elements.id["ID_INTERNAL_POWER_BEAST_MELEE_BASIC_ATTACK"]);
    }
  });
  byID[te.id] = te;
  
  te = Companion["Raptor"] = new engine.RulesElement({
    name: "Raptor",
    type: "Companion",
    id: "ID_FMP_COMPANION_5",
    source: "Martial Power",
    categories: ["Raptor", "ID_FMP_COMPANION_5"],
    rules: function(model) {
      model.statadd("Companion.Strength", 12);
      model.statadd("Companion.Constitution", 12);
      model.statadd("Companion.Dexterity", 18);
      model.statadd("Companion.Intelligence", 6);
      model.statadd("Companion.Wisdom", 12);
      model.statadd("Companion.Charisma", 6);
      model.grant(model.elements.id["ID_INTERNAL_POWER_BEAST_MELEE_BASIC_ATTACK"]);
    }
  });
  byID[te.id] = te;
  
  te = Companion["Serpent"] = new engine.RulesElement({
    name: "Serpent",
    type: "Companion",
    id: "ID_FMP_COMPANION_6",
    source: "Martial Power",
    categories: ["Serpent", "ID_FMP_COMPANION_6"],
    rules: function(model) {
      model.statadd("Companion.Strength", 14);
      model.statadd("Companion.Constitution", 14);
      model.statadd("Companion.Dexterity", 16);
      model.statadd("Companion.Intelligence", 6);
      model.statadd("Companion.Wisdom", 12);
      model.statadd("Companion.Charisma", 6);
      model.grant(model.elements.id["ID_INTERNAL_POWER_BEAST_MELEE_BASIC_ATTACK"]);
    }
  });
  byID[te.id] = te;
  
  te = Companion["Spider"] = new engine.RulesElement({
    name: "Spider",
    type: "Companion",
    id: "ID_FMP_COMPANION_7",
    source: "Martial Power",
    categories: ["Spider", "ID_FMP_COMPANION_7"],
    rules: function(model) {
      model.statadd("Companion.Strength", 14);
      model.statadd("Companion.Constitution", 12);
      model.statadd("Companion.Dexterity", 16);
      model.statadd("Companion.Intelligence", 6);
      model.statadd("Companion.Wisdom", 12);
      model.statadd("Companion.Charisma", 6);
      model.grant(model.elements.id["ID_INTERNAL_POWER_BEAST_MELEE_BASIC_ATTACK"]);
    }
  });
  byID[te.id] = te;
  
  te = Companion["Wolf"] = new engine.RulesElement({
    name: "Wolf",
    type: "Companion",
    id: "ID_FMP_COMPANION_8",
    source: "Martial Power",
    categories: ["Wolf", "ID_FMP_COMPANION_8"],
    rules: function(model) {
      model.statadd("Companion.Strength", 14);
      model.statadd("Companion.Constitution", 14);
      model.statadd("Companion.Dexterity", 14);
      model.statadd("Companion.Intelligence", 6);
      model.statadd("Companion.Wisdom", 14);
      model.statadd("Companion.Charisma", 6);
      model.grant(model.elements.id["ID_INTERNAL_POWER_BEAST_MELEE_BASIC_ATTACK"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
