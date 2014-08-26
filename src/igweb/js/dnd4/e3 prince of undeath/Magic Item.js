define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Anarch Sphere (epic tier)"] = new engine.RulesElement({
    name: "Anarch Sphere (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8102",
    source: "E3 Prince of Undeath",
    categories: ["Anarch Sphere (epic tier)", "ID_FMP_MAGIC_ITEM_8102"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Shard of Evil (epic tier)"] = new engine.RulesElement({
    name: "Shard of Evil (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8103",
    source: "E3 Prince of Undeath",
    categories: ["Shard of Evil (epic tier)", "ID_FMP_MAGIC_ITEM_8103"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wand of Orcus"] = new engine.RulesElement({
    name: "Wand of Orcus",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8104",
    source: "E3 Prince of Undeath",
    categories: ["Wand of Orcus", "ID_FMP_MAGIC_ITEM_8104"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_LANGUAGE_7"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
