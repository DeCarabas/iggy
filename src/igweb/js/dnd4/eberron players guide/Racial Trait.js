define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Racial_Trait = types['Racial Trait'] || (types['Racial Trait'] = {});
  te = Racial_Trait["Bastion of Mental Clarity"] = new engine.RulesElement({
    name: "Bastion of Mental Clarity",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_1572",
    source: "Eberron Player's Guide",
    categories: ["Bastion of Mental Clarity", "ID_FMP_RACIAL_TRAIT_1572"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7548"]);
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Change Shape"] = new engine.RulesElement({
    name: "Change Shape",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_400",
    source: "Eberron Player's Guide",
    categories: ["Change Shape", "ID_FMP_RACIAL_TRAIT_400"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_2472"]);
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Changeling Trick"] = new engine.RulesElement({
    name: "Changeling Trick",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_1570",
    source: "Eberron Player's Guide",
    categories: ["Changeling Trick", "ID_FMP_RACIAL_TRAIT_1570"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7546"]);
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Dual Soul"] = new engine.RulesElement({
    name: "Dual Soul",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_1571",
    source: "Eberron Player's Guide",
    categories: ["Dual Soul", "ID_FMP_RACIAL_TRAIT_1571"]
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Living Construct"] = new engine.RulesElement({
    name: "Living Construct",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_406",
    source: "Eberron Player's Guide,Player's Handbook 3",
    categories: ["Living Construct", "ID_FMP_RACIAL_TRAIT_406"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_CAN_USE_COMPONENTS"]);
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Mental Defense"] = new engine.RulesElement({
    name: "Mental Defense",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_710",
    source: "Eberron Player's Guide",
    categories: ["Mental Defense", "ID_FMP_RACIAL_TRAIT_710"],
    rules: function(model) {
      model.statadd("Will Defense", 1, "Racial");
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Shapechanger"] = new engine.RulesElement({
    name: "Shapechanger",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_1568",
    source: "Eberron Player's Guide",
    categories: ["Shapechanger", "ID_FMP_RACIAL_TRAIT_1568"]
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Telepathy 5"] = new engine.RulesElement({
    name: "Telepathy 5",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_1813",
    source: "Eberron Player's Guide",
    categories: ["Telepathy 5", "ID_FMP_RACIAL_TRAIT_1813"],
    rules: function(model) {
      model.statadd("Telepathy", 5, "Telepathy");
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Unsleeping Watcher"] = new engine.RulesElement({
    name: "Unsleeping Watcher",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_1814",
    source: "Eberron Player's Guide",
    categories: ["Unsleeping Watcher", "ID_FMP_RACIAL_TRAIT_1814"]
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Warforged Mind"] = new engine.RulesElement({
    name: "Warforged Mind",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_800",
    source: "Eberron Player's Guide",
    categories: ["Warforged Mind", "ID_FMP_RACIAL_TRAIT_800"],
    rules: function(model) {
      model.statadd("Will Defense", 1, "Racial");
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Warforged Resilience"] = new engine.RulesElement({
    name: "Warforged Resilience",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_1815",
    source: "Eberron Player's Guide",
    categories: ["Warforged Resilience", "ID_FMP_RACIAL_TRAIT_1815"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against ongoing damage */ return 2; }, "Racial");
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Warforged Resolve"] = new engine.RulesElement({
    name: "Warforged Resolve",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_721",
    source: "Eberron Player's Guide",
    categories: ["Warforged Resolve", "ID_FMP_RACIAL_TRAIT_721"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_2485"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
