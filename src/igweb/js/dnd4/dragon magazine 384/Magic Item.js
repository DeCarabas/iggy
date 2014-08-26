define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Amber Monkeys (paragon tier)"] = new engine.RulesElement({
    name: "Amber Monkeys (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8939",
    source: "Dragon Magazine 384",
    categories: ["Amber Monkeys (paragon tier)", "ID_FMP_MAGIC_ITEM_8939"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bloodmaul Weapon +2"] = new engine.RulesElement({
    name: "Bloodmaul Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8959",
    source: "Dragon Magazine 384",
    categories: ["Bloodmaul Weapon +2", "ID_FMP_MAGIC_ITEM_8959"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bloodmaul Weapon +3"] = new engine.RulesElement({
    name: "Bloodmaul Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8960",
    source: "Dragon Magazine 384",
    categories: ["Bloodmaul Weapon +3", "ID_FMP_MAGIC_ITEM_8960"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bloodmaul Weapon +4"] = new engine.RulesElement({
    name: "Bloodmaul Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8961",
    source: "Dragon Magazine 384",
    categories: ["Bloodmaul Weapon +4", "ID_FMP_MAGIC_ITEM_8961"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bloodmaul Weapon +5"] = new engine.RulesElement({
    name: "Bloodmaul Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8962",
    source: "Dragon Magazine 384",
    categories: ["Bloodmaul Weapon +5", "ID_FMP_MAGIC_ITEM_8962"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bloodmaul Weapon +6"] = new engine.RulesElement({
    name: "Bloodmaul Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8963",
    source: "Dragon Magazine 384",
    categories: ["Bloodmaul Weapon +6", "ID_FMP_MAGIC_ITEM_8963"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bronze Griffon (paragon tier)"] = new engine.RulesElement({
    name: "Bronze Griffon (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8940",
    source: "Dragon Magazine 384",
    categories: ["Bronze Griffon (paragon tier)", "ID_FMP_MAGIC_ITEM_8940"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Coral Dragon (epic tier)"] = new engine.RulesElement({
    name: "Coral Dragon (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8941",
    source: "Dragon Magazine 384",
    categories: ["Coral Dragon (epic tier)", "ID_FMP_MAGIC_ITEM_8941"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Electrum Serpent (epic tier)"] = new engine.RulesElement({
    name: "Electrum Serpent (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8942",
    source: "Dragon Magazine 384",
    categories: ["Electrum Serpent (epic tier)", "ID_FMP_MAGIC_ITEM_8942"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Emerald Frog (paragon tier)"] = new engine.RulesElement({
    name: "Emerald Frog (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8943",
    source: "Dragon Magazine 384",
    categories: ["Emerald Frog (paragon tier)", "ID_FMP_MAGIC_ITEM_8943"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mercury Wasp (paragon tier)"] = new engine.RulesElement({
    name: "Mercury Wasp (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8944",
    source: "Dragon Magazine 384",
    categories: ["Mercury Wasp (paragon tier)", "ID_FMP_MAGIC_ITEM_8944"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Serpentine Owl (paragon tier)"] = new engine.RulesElement({
    name: "Serpentine Owl (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8945",
    source: "Dragon Magazine 384",
    categories: ["Serpentine Owl (paragon tier)", "ID_FMP_MAGIC_ITEM_8945"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Tourmaline Turtle (epic tier)"] = new engine.RulesElement({
    name: "Tourmaline Turtle (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8946",
    source: "Dragon Magazine 384",
    categories: ["Tourmaline Turtle (epic tier)", "ID_FMP_MAGIC_ITEM_8946"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
