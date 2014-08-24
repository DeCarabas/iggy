(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Barulg's Magma Weapon +1"] = new RulesElement({
    name: "Barulg's Magma Weapon +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9212",
    source: "Dungeon Magazine 179",
    categories: ["Barulg's Magma Weapon +1", "ID_FMP_MAGIC_ITEM_9212"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Barulg's Magma Weapon +2"] = new RulesElement({
    name: "Barulg's Magma Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9213",
    source: "Dungeon Magazine 179",
    categories: ["Barulg's Magma Weapon +2", "ID_FMP_MAGIC_ITEM_9213"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Barulg's Magma Weapon +3"] = new RulesElement({
    name: "Barulg's Magma Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9214",
    source: "Dungeon Magazine 179",
    categories: ["Barulg's Magma Weapon +3", "ID_FMP_MAGIC_ITEM_9214"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Barulg's Magma Weapon +4"] = new RulesElement({
    name: "Barulg's Magma Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9215",
    source: "Dungeon Magazine 179",
    categories: ["Barulg's Magma Weapon +4", "ID_FMP_MAGIC_ITEM_9215"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Barulg's Magma Weapon +5"] = new RulesElement({
    name: "Barulg's Magma Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9216",
    source: "Dungeon Magazine 179",
    categories: ["Barulg's Magma Weapon +5", "ID_FMP_MAGIC_ITEM_9216"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Barulg's Magma Weapon +6"] = new RulesElement({
    name: "Barulg's Magma Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9217",
    source: "Dungeon Magazine 179",
    categories: ["Barulg's Magma Weapon +6", "ID_FMP_MAGIC_ITEM_9217"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Faarlung's Algorithm"] = new RulesElement({
    name: "Faarlung's Algorithm",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9210",
    source: "Dungeon Magazine 179",
    categories: ["Faarlung's Algorithm", "ID_FMP_MAGIC_ITEM_9210"],
    rules: function(model) {
      model.statadd("Arcana Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  
})(this);
