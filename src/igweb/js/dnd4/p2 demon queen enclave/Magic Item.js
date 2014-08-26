define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Death Weapon +3"] = new engine.RulesElement({
    name: "Death Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4325",
    source: "P2 Demon Queen Enclave",
    categories: ["Death Weapon +3", "ID_FMP_MAGIC_ITEM_4325"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Death Weapon +4"] = new engine.RulesElement({
    name: "Death Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4326",
    source: "P2 Demon Queen Enclave",
    categories: ["Death Weapon +4", "ID_FMP_MAGIC_ITEM_4326"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Death Weapon +5"] = new engine.RulesElement({
    name: "Death Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4327",
    source: "P2 Demon Queen Enclave",
    categories: ["Death Weapon +5", "ID_FMP_MAGIC_ITEM_4327"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Death Weapon +6"] = new engine.RulesElement({
    name: "Death Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4328",
    source: "P2 Demon Queen Enclave",
    categories: ["Death Weapon +6", "ID_FMP_MAGIC_ITEM_4328"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Drow House Insignia +3"] = new engine.RulesElement({
    name: "Drow House Insignia +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4329",
    source: "P2 Demon Queen Enclave",
    categories: ["Drow House Insignia +3", "ID_FMP_MAGIC_ITEM_4329"],
    rules: function(model) {
      model.statadd("Intimidate Misc", function() { /* when dealing with drow or spiders */ return 3; }, "item");
      model.statadd("Fortitude Defense", 3, "Enhancement");
      model.statadd("Reflex Defense", 3, "Enhancement");
      model.statadd("Will Defense", 3, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Drow House Insignia +4"] = new engine.RulesElement({
    name: "Drow House Insignia +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4330",
    source: "P2 Demon Queen Enclave",
    categories: ["Drow House Insignia +4", "ID_FMP_MAGIC_ITEM_4330"],
    rules: function(model) {
      model.statadd("Intimidate Misc", function() { /* when dealing with drow or spiders */ return 4; }, "item");
      model.statadd("Fortitude Defense", 4, "Enhancement");
      model.statadd("Reflex Defense", 4, "Enhancement");
      model.statadd("Will Defense", 4, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Drow House Insignia +5"] = new engine.RulesElement({
    name: "Drow House Insignia +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4331",
    source: "P2 Demon Queen Enclave",
    categories: ["Drow House Insignia +5", "ID_FMP_MAGIC_ITEM_4331"],
    rules: function(model) {
      model.statadd("Intimidate Misc", function() { /* when dealing with drow or spiders */ return 5; }, "item");
      model.statadd("Fortitude Defense", 5, "Enhancement");
      model.statadd("Reflex Defense", 5, "Enhancement");
      model.statadd("Will Defense", 5, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Drow House Insignia +6"] = new engine.RulesElement({
    name: "Drow House Insignia +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4332",
    source: "P2 Demon Queen Enclave",
    categories: ["Drow House Insignia +6", "ID_FMP_MAGIC_ITEM_4332"],
    rules: function(model) {
      model.statadd("Intimidate Misc", function() { /* when dealing with drow or spiders */ return 6; }, "item");
      model.statadd("Fortitude Defense", 6, "Enhancement");
      model.statadd("Reflex Defense", 6, "Enhancement");
      model.statadd("Will Defense", 6, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mask of the Matriarch (paragon tier)"] = new engine.RulesElement({
    name: "Mask of the Matriarch (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4333",
    source: "P2 Demon Queen Enclave",
    categories: ["Mask of the Matriarch (paragon tier)", "ID_FMP_MAGIC_ITEM_4333"],
    rules: function(model) {
      model.statadd("Intimidate Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Nightbringer"] = new engine.RulesElement({
    name: "Nightbringer",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4334",
    source: "P2 Demon Queen Enclave",
    categories: ["Nightbringer", "ID_FMP_MAGIC_ITEM_4334"],
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
