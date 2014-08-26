define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Racial_Trait = types['Racial Trait'] || (types['Racial Trait'] = {});
  te = Racial_Trait["Blood Drain Constitution"] = new engine.RulesElement({
    name: "Blood Drain Constitution",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_BLOOD_DRAIN_CONSTITUTION",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 371",
    categories: ["Blood Drain Constitution", "ID_INTERNAL_RACIAL_TRAIT_BLOOD_DRAIN_CONSTITUTION", "Blood Drain", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Blood Drain Dexterity"] = new engine.RulesElement({
    name: "Blood Drain Dexterity",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_BLOOD_DRAIN_DEXTERITY",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 371",
    categories: ["Blood Drain Dexterity", "ID_INTERNAL_RACIAL_TRAIT_BLOOD_DRAIN_DEXTERITY", "Blood Drain", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Blood Drain Strength"] = new engine.RulesElement({
    name: "Blood Drain Strength",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_BLOOD_DRAIN_STRENGTH",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 371",
    categories: ["Blood Drain Strength", "ID_INTERNAL_RACIAL_TRAIT_BLOOD_DRAIN_STRENGTH", "Blood Drain", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Dominating Gaze Constitution"] = new engine.RulesElement({
    name: "Dominating Gaze Constitution",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_DOMINATING_GAZE_CONSTITUTION",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 371",
    categories: ["Dominating Gaze Constitution", "ID_INTERNAL_RACIAL_TRAIT_DOMINATING_GAZE_CONSTITUTION", "Dominating Gaze", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Dominating Gaze Dexterity"] = new engine.RulesElement({
    name: "Dominating Gaze Dexterity",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_DOMINATING_GAZE_DEXTERITY",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 371",
    categories: ["Dominating Gaze Dexterity", "ID_INTERNAL_RACIAL_TRAIT_DOMINATING_GAZE_DEXTERITY", "Dominating Gaze", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Dominating Gaze Intelligence"] = new engine.RulesElement({
    name: "Dominating Gaze Intelligence",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_DOMINATING_GAZE_INTELLIGENCE",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 371",
    categories: ["Dominating Gaze Intelligence", "ID_INTERNAL_RACIAL_TRAIT_DOMINATING_GAZE_INTELLIGENCE", "Dominating Gaze", "Ability Choice"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
