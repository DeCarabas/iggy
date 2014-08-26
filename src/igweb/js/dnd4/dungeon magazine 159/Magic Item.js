define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Primordial Ring (paragon tier)"] = new engine.RulesElement({
    name: "Primordial Ring (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4391",
    source: "Dungeon Magazine 159",
    categories: ["Primordial Ring (paragon tier)", "ID_FMP_MAGIC_ITEM_4391"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["The Deluvian Hourglass"] = new engine.RulesElement({
    name: "The Deluvian Hourglass",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4340",
    source: "Dungeon Magazine 159",
    categories: ["The Deluvian Hourglass", "ID_FMP_MAGIC_ITEM_4340"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1237"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
