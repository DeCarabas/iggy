define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Build = types['Build'] || (types['Build'] = {});
  te = Build["Assault Swordmage"] = new engine.RulesElement({
    name: "Assault Swordmage",
    type: "Build",
    id: "ID_FMP_BUILD_20",
    source: "Forgotten Realms Player's Guide",
    specifics: {
        'Key Abilities': "Int, Str, Con"
      },
    categories: ["Assault Swordmage", "ID_FMP_BUILD_20", "ID_FMP_CLASS_53", "Swordmage"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_ASSAULT_SWORDMAGE"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Shielding Swordmage"] = new engine.RulesElement({
    name: "Shielding Swordmage",
    type: "Build",
    id: "ID_FMP_BUILD_21",
    source: "Forgotten Realms Player's Guide",
    specifics: {
        'Key Abilities': "Int, Con, Wis"
      },
    categories: ["Shielding Swordmage", "ID_FMP_BUILD_21", "ID_FMP_CLASS_53", "Swordmage"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_SHIELDING_SWORDMAGE"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
