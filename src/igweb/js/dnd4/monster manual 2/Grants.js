define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Grants = types['Grants'] || (types['Grants'] = {});
  te = Grants["Bullywug"] = new engine.RulesElement({
    name: "Bullywug",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_BULLYWUG",
    source: "Monster Manual 2",
    categories: ["Bullywug", "ID_INTERNAL_GRANTS_BULLYWUG"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_SIZE_MEDIUM"]);
      model.grant(model.elements.id["ID_INTERNAL_VISION_NORMAL"]);
      model.grant(model.elements.id["ID_FMP_RACIAL_TRAIT_1522"]);
      model.grant(model.elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_CONSTITUTION"]);
      model.grant(model.elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_DEXTERITY"]);
      model.grant(model.elements.id["ID_FMP_LANGUAGE_1"]);
      model.grant(model.elements.id["ID_FMP_LANGUAGE_6"]);
      model.grant(model.elements.id["ID_INTERNAL_RACIAL_TRAIT_ATHLETICS_BONUS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Duergar"] = new engine.RulesElement({
    name: "Duergar",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_DUERGAR",
    source: "Monster Manual 2",
    categories: ["Duergar", "ID_INTERNAL_GRANTS_DUERGAR"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_SIZE_MEDIUM"]);
      model.grant(model.elements.id["ID_INTERNAL_VISION_DARKVISION"]);
      model.grant(model.elements.id["ID_FMP_RACIAL_TRAIT_1523"]);
      model.grant(model.elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_CONSTITUTION"]);
      model.grant(model.elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_WISDOM"]);
      model.grant(model.elements.id["ID_FMP_LANGUAGE_1"]);
      model.grant(model.elements.id["ID_FMP_LANGUAGE_18"]);
      model.grant(model.elements.id["ID_FMP_LANGUAGE_3"]);
      model.grant(model.elements.id["ID_INTERNAL_RACIAL_TRAIT_DUNGEONEERING_BONUS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Kenku"] = new engine.RulesElement({
    name: "Kenku",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_KENKU",
    source: "Monster Manual 2",
    categories: ["Kenku", "ID_INTERNAL_GRANTS_KENKU"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_SIZE_MEDIUM"]);
      model.grant(model.elements.id["ID_INTERNAL_VISION_LOW-LIGHT"]);
      model.grant(model.elements.id["ID_FMP_RACIAL_TRAIT_1524"]);
      model.grant(model.elements.id["ID_FMP_RACIAL_TRAIT_1525"]);
      model.grant(model.elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_CHARISMA"]);
      model.grant(model.elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_DEXTERITY"]);
      model.grant(model.elements.id["ID_FMP_LANGUAGE_1"]);
      model.grant(model.elements.id["ID_INTERNAL_RACIAL_TRAIT_BLUFF_BONUS"]);
      model.grant(model.elements.id["ID_INTERNAL_RACIAL_TRAIT_STEALTH_BONUS"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
