(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Grants = types['Grants'] || (types['Grants'] = {});
  te = Grants["Bullywug"] = new RulesElement({
    name: "Bullywug",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_BULLYWUG",
    source: "Monster Manual 2",
    categories: ["Bullywug", "ID_INTERNAL_GRANTS_BULLYWUG"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_SIZE_MEDIUM"]);
      model.grant(elements.id["ID_INTERNAL_VISION_NORMAL"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_1522"]);
      model.grant(elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_CONSTITUTION"]);
      model.grant(elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_DEXTERITY"]);
      model.grant(elements.id["ID_FMP_LANGUAGE_1"]);
      model.grant(elements.id["ID_FMP_LANGUAGE_6"]);
      model.grant(elements.id["ID_INTERNAL_RACIAL_TRAIT_ATHLETICS_BONUS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Duergar"] = new RulesElement({
    name: "Duergar",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_DUERGAR",
    source: "Monster Manual 2",
    categories: ["Duergar", "ID_INTERNAL_GRANTS_DUERGAR"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_SIZE_MEDIUM"]);
      model.grant(elements.id["ID_INTERNAL_VISION_DARKVISION"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_1523"]);
      model.grant(elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_CONSTITUTION"]);
      model.grant(elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_WISDOM"]);
      model.grant(elements.id["ID_FMP_LANGUAGE_1"]);
      model.grant(elements.id["ID_FMP_LANGUAGE_18"]);
      model.grant(elements.id["ID_FMP_LANGUAGE_3"]);
      model.grant(elements.id["ID_INTERNAL_RACIAL_TRAIT_DUNGEONEERING_BONUS"]);
    }
  });
  byID[te.id] = te;
  
  te = Grants["Kenku"] = new RulesElement({
    name: "Kenku",
    type: "Grants",
    id: "ID_INTERNAL_GRANTS_KENKU",
    source: "Monster Manual 2",
    categories: ["Kenku", "ID_INTERNAL_GRANTS_KENKU"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_SIZE_MEDIUM"]);
      model.grant(elements.id["ID_INTERNAL_VISION_LOW-LIGHT"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_1524"]);
      model.grant(elements.id["ID_FMP_RACIAL_TRAIT_1525"]);
      model.grant(elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_CHARISMA"]);
      model.grant(elements.id["ID_INTERNAL_RACE_ABILITY_BONUS_DEXTERITY"]);
      model.grant(elements.id["ID_FMP_LANGUAGE_1"]);
      model.grant(elements.id["ID_INTERNAL_RACIAL_TRAIT_BLUFF_BONUS"]);
      model.grant(elements.id["ID_INTERNAL_RACIAL_TRAIT_STEALTH_BONUS"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
