define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Ruinblade"] = new engine.RulesElement({
    name: "Ruinblade",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9188",
    source: "Tomb of Horrors",
    categories: ["Ruinblade", "ID_FMP_MAGIC_ITEM_9188"],
    rules: function(model) {
      model.statadd("damage(Ruinblade)", "+1d10");
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
