define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Racial_Trait = types['Racial Trait'] || (types['Racial Trait'] = {});
  te = Racial_Trait["Acid Resistance"] = new engine.RulesElement({
    name: "Acid Resistance",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_1065",
    source: "Manual of the Planes",
    categories: ["Acid Resistance", "ID_FMP_RACIAL_TRAIT_1065"],
    rules: function(model) {
      model.statadd("_generic acid resist", 5);
      model.statadd("_generic acid resist", function() { return model.stat("HALF-LEVEL"); });
      model.statadd("resist:acid", function() { return model.stat("_generic acid resist"); }, "resist");
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Improved Razor Storm Constitution"] = new engine.RulesElement({
    name: "Improved Razor Storm Constitution",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_IMPROVED_RAZOR_STORM_CONSTITUTION",
    source: "Manual of the Planes",
    categories: ["Improved Razor Storm Constitution", "ID_INTERNAL_RACIAL_TRAIT_IMPROVED_RAZOR_STORM_CONSTITUTION", "Improved Razor Storm", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Improved Razor Storm Dexterity"] = new engine.RulesElement({
    name: "Improved Razor Storm Dexterity",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_IMPROVED_RAZOR_STORM_DEXTERITY",
    source: "Manual of the Planes",
    categories: ["Improved Razor Storm Dexterity", "ID_INTERNAL_RACIAL_TRAIT_IMPROVED_RAZOR_STORM_DEXTERITY", "Improved Razor Storm", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Improved Razor Storm Strength"] = new engine.RulesElement({
    name: "Improved Razor Storm Strength",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_IMPROVED_RAZOR_STORM_STRENGTH",
    source: "Manual of the Planes",
    categories: ["Improved Razor Storm Strength", "ID_INTERNAL_RACIAL_TRAIT_IMPROVED_RAZOR_STORM_STRENGTH", "Improved Razor Storm", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Razor Storm"] = new engine.RulesElement({
    name: "Razor Storm",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_1066",
    source: "Manual of the Planes",
    categories: ["Razor Storm", "ID_FMP_RACIAL_TRAIT_1066"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5599"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Razor Storm Constitution"] = new engine.RulesElement({
    name: "Razor Storm Constitution",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_RAZOR_STORM_CONSTITUTION",
    source: "Manual of the Planes",
    categories: ["Razor Storm Constitution", "ID_INTERNAL_RACIAL_TRAIT_RAZOR_STORM_CONSTITUTION", "Razor Storm", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Razor Storm Dexterity"] = new engine.RulesElement({
    name: "Razor Storm Dexterity",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_RAZOR_STORM_DEXTERITY",
    source: "Manual of the Planes",
    categories: ["Razor Storm Dexterity", "ID_INTERNAL_RACIAL_TRAIT_RAZOR_STORM_DEXTERITY", "Razor Storm", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Razor Storm Strength"] = new engine.RulesElement({
    name: "Razor Storm Strength",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_RAZOR_STORM_STRENGTH",
    source: "Manual of the Planes",
    categories: ["Razor Storm Strength", "ID_INTERNAL_RACIAL_TRAIT_RAZOR_STORM_STRENGTH", "Razor Storm", "Ability Choice"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
