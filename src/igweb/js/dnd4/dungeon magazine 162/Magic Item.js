define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Blackgate Rune (paragon tier)"] = new engine.RulesElement({
    name: "Blackgate Rune (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4869",
    source: "Dungeon Magazine 162,Dungeon Magazine 163",
    categories: ["Blackgate Rune (paragon tier)", "ID_FMP_MAGIC_ITEM_4869"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Sun's Sliver"] = new engine.RulesElement({
    name: "Sun's Sliver",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4867",
    source: "Dungeon Magazine 162,Dungeon Magazine Annual",
    categories: ["Sun's Sliver", "ID_FMP_MAGIC_ITEM_4867"],
    rules: function(model) {
      model.statadd("resist:cold", 10, "resist");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Sword of Black Ice +6"] = new engine.RulesElement({
    name: "Sword of Black Ice +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4866",
    source: "Dungeon Magazine 162,Dungeon Magazine Annual",
    categories: ["Sword of Black Ice +6", "ID_FMP_MAGIC_ITEM_4866"],
    rules: function(model) {
      model.statadd("damage rolls(Sword of Black Ice +6)", "2d8");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Umbral Eye (paragon tier)"] = new engine.RulesElement({
    name: "Umbral Eye (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4868",
    source: "Dungeon Magazine 162",
    categories: ["Umbral Eye (paragon tier)", "ID_FMP_MAGIC_ITEM_4868"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
