define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Build = types['Build'] || (types['Build'] = {});
  te = Build["Bleak Disciple Assassin"] = new engine.RulesElement({
    name: "Bleak Disciple Assassin",
    type: "Build",
    id: "ID_FMP_BUILD_84",
    source: "Dragon Magazine 379",
    specifics: {
        'Key Abilities': "Dexterity, Constitution, Charisma"
      },
    categories: ["Bleak Disciple Assassin", "ID_FMP_BUILD_84", "ID_FMP_CLASS_466", "Assassin"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_BLEAK_DISCIPLE_ASSASSIN"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Night Stalker Assassin"] = new engine.RulesElement({
    name: "Night Stalker Assassin",
    type: "Build",
    id: "ID_FMP_BUILD_85",
    source: "Dragon Magazine 379",
    specifics: {
        'Key Abilities': "Dexterity, Charisma, Constitution"
      },
    categories: ["Night Stalker Assassin", "ID_FMP_BUILD_85", "ID_FMP_CLASS_466", "Assassin"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_NIGHT_STALKER_ASSASSIN"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
