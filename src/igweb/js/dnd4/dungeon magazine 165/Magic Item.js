define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Elemental Prism (paragon tier)"] = new engine.RulesElement({
    name: "Elemental Prism (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5037",
    source: "Dungeon Magazine 165",
    categories: ["Elemental Prism (paragon tier)", "ID_FMP_MAGIC_ITEM_5037"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Seed of Winter"] = new engine.RulesElement({
    name: "Seed of Winter",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5038",
    source: "Dungeon Magazine 165",
    categories: ["Seed of Winter", "ID_FMP_MAGIC_ITEM_5038"],
    rules: function(model) {
      model.statadd("Endurance Misc", 2, "item");
      model.statadd("Intimidate Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
