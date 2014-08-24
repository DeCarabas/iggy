(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Eladrin Ring of Passage (paragon tier)"] = new RulesElement({
    name: "Eladrin Ring of Passage (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4306",
    source: "P1 King of the Trollhaunt Warrens",
    categories: ["Eladrin Ring of Passage (paragon tier)", "ID_FMP_MAGIC_ITEM_4306"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Life Force Amulet +4"] = new RulesElement({
    name: "Life Force Amulet +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4307",
    source: "P1 King of the Trollhaunt Warrens",
    categories: ["Life Force Amulet +4", "ID_FMP_MAGIC_ITEM_4307"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 4, "Enhancement");
      model.statadd("Reflex Defense", 4, "Enhancement");
      model.statadd("Will Defense", 4, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Life Force Amulet +5"] = new RulesElement({
    name: "Life Force Amulet +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4308",
    source: "P1 King of the Trollhaunt Warrens",
    categories: ["Life Force Amulet +5", "ID_FMP_MAGIC_ITEM_4308"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 5, "Enhancement");
      model.statadd("Reflex Defense", 5, "Enhancement");
      model.statadd("Will Defense", 5, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Life Force Amulet +6"] = new RulesElement({
    name: "Life Force Amulet +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4309",
    source: "P1 King of the Trollhaunt Warrens",
    categories: ["Life Force Amulet +6", "ID_FMP_MAGIC_ITEM_4309"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 6, "Enhancement");
      model.statadd("Reflex Defense", 6, "Enhancement");
      model.statadd("Will Defense", 6, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Moran's Eye +3"] = new RulesElement({
    name: "Moran's Eye +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4320",
    source: "P1 King of the Trollhaunt Warrens",
    categories: ["Moran's Eye +3", "ID_FMP_MAGIC_ITEM_4320"],
    rules: function(model) {
      model.statadd("Arcana Misc", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mordant Weapon +2"] = new RulesElement({
    name: "Mordant Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4310",
    source: "P1 King of the Trollhaunt Warrens",
    categories: ["Mordant Weapon +2", "ID_FMP_MAGIC_ITEM_4310"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mordant Weapon +3"] = new RulesElement({
    name: "Mordant Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4311",
    source: "P1 King of the Trollhaunt Warrens",
    categories: ["Mordant Weapon +3", "ID_FMP_MAGIC_ITEM_4311"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mordant Weapon +4"] = new RulesElement({
    name: "Mordant Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4312",
    source: "P1 King of the Trollhaunt Warrens",
    categories: ["Mordant Weapon +4", "ID_FMP_MAGIC_ITEM_4312"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mordant Weapon +5"] = new RulesElement({
    name: "Mordant Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4313",
    source: "P1 King of the Trollhaunt Warrens",
    categories: ["Mordant Weapon +5", "ID_FMP_MAGIC_ITEM_4313"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mordant Weapon +6"] = new RulesElement({
    name: "Mordant Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4314",
    source: "P1 King of the Trollhaunt Warrens",
    categories: ["Mordant Weapon +6", "ID_FMP_MAGIC_ITEM_4314"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Sunwrath +3"] = new RulesElement({
    name: "Sunwrath +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4319",
    source: "P1 King of the Trollhaunt Warrens",
    categories: ["Sunwrath +3", "ID_FMP_MAGIC_ITEM_4319"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Torc of Fortune +3"] = new RulesElement({
    name: "Torc of Fortune +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4315",
    source: "P1 King of the Trollhaunt Warrens",
    categories: ["Torc of Fortune +3", "ID_FMP_MAGIC_ITEM_4315"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 3, "Enhancement");
      model.statadd("Reflex Defense", 3, "Enhancement");
      model.statadd("Will Defense", 3, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Torc of Fortune +4"] = new RulesElement({
    name: "Torc of Fortune +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4316",
    source: "P1 King of the Trollhaunt Warrens",
    categories: ["Torc of Fortune +4", "ID_FMP_MAGIC_ITEM_4316"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 4, "Enhancement");
      model.statadd("Reflex Defense", 4, "Enhancement");
      model.statadd("Will Defense", 4, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Torc of Fortune +5"] = new RulesElement({
    name: "Torc of Fortune +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4317",
    source: "P1 King of the Trollhaunt Warrens",
    categories: ["Torc of Fortune +5", "ID_FMP_MAGIC_ITEM_4317"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 5, "Enhancement");
      model.statadd("Reflex Defense", 5, "Enhancement");
      model.statadd("Will Defense", 5, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Torc of Fortune +6"] = new RulesElement({
    name: "Torc of Fortune +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4318",
    source: "P1 King of the Trollhaunt Warrens",
    categories: ["Torc of Fortune +6", "ID_FMP_MAGIC_ITEM_4318"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 6, "Enhancement");
      model.statadd("Reflex Defense", 6, "Enhancement");
      model.statadd("Will Defense", 6, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  
})(this);
