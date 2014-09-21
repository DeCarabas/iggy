define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Build = types['Build'] || (types['Build'] = {});
  te = Build["Warrior Forge Artificer"] = new engine.RulesElement({
    name: "Warrior Forge Artificer",
    type: "Build",
    id: "ID_FMP_BUILD_96",
    source: "Dragon Magazine 381",
    specifics: {
        'Key Abilities': "Int, Wis"
      },
    categories: ["Warrior Forge Artificer", "ID_FMP_BUILD_96", "ID_FMP_CLASS_125", "Artificer"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_WARRIOR_FORGE_ARTIFICER"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
