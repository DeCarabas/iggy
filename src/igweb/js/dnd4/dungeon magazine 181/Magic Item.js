define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Philter of the Fading Dream (heroic tier)"] = new engine.RulesElement({
    name: "Philter of the Fading Dream (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9518",
    source: "Dungeon Magazine 181",
    categories: ["Philter of the Fading Dream (heroic tier)", "ID_FMP_MAGIC_ITEM_9518"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ring of Circling Fangs (paragon tier)"] = new engine.RulesElement({
    name: "Ring of Circling Fangs (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9749",
    source: "Dungeon Magazine 181",
    categories: ["Ring of Circling Fangs (paragon tier)", "ID_FMP_MAGIC_ITEM_9749"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Whispers from Beyond (heroic tier)"] = new engine.RulesElement({
    name: "Whispers from Beyond (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9750",
    source: "Dungeon Magazine 181",
    categories: ["Whispers from Beyond (heroic tier)", "ID_FMP_MAGIC_ITEM_9750"],
    rules: function(model) {
      model.statadd("Initiative Misc", 1, "item");
      model.statadd("Perception Misc", 1, "item");
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
