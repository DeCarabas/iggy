define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Crownring of Tchazzar (paragon tier)"] = new engine.RulesElement({
    name: "Crownring of Tchazzar (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9173",
    source: "Dungeon Magazine 178",
    categories: ["Crownring of Tchazzar (paragon tier)", "ID_FMP_MAGIC_ITEM_9173"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against effects that include daze, stun, or dominate */ return 3; }, "item");
      model.statadd("ID_FMP_ITEM_SET_40 Set Count", 1, "Crownring of Tchazzar");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Devilblind Weapon +2"] = new engine.RulesElement({
    name: "Devilblind Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9174",
    source: "Dungeon Magazine 178",
    categories: ["Devilblind Weapon +2", "ID_FMP_MAGIC_ITEM_9174"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against the attacks of devils */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Devilblind Weapon +3"] = new engine.RulesElement({
    name: "Devilblind Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9175",
    source: "Dungeon Magazine 178",
    categories: ["Devilblind Weapon +3", "ID_FMP_MAGIC_ITEM_9175"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against the attacks of devils */ return 3; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Devilblind Weapon +4"] = new engine.RulesElement({
    name: "Devilblind Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9176",
    source: "Dungeon Magazine 178",
    categories: ["Devilblind Weapon +4", "ID_FMP_MAGIC_ITEM_9176"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against the attacks of devils */ return 4; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Devilblind Weapon +5"] = new engine.RulesElement({
    name: "Devilblind Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9177",
    source: "Dungeon Magazine 178",
    categories: ["Devilblind Weapon +5", "ID_FMP_MAGIC_ITEM_9177"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against the attacks of devils */ return 5; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Devilblind Weapon +6"] = new engine.RulesElement({
    name: "Devilblind Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9178",
    source: "Dungeon Magazine 178",
    categories: ["Devilblind Weapon +6", "ID_FMP_MAGIC_ITEM_9178"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against the attacks of devils */ return 6; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Scepter of Cimbar +3"] = new engine.RulesElement({
    name: "Scepter of Cimbar +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9171",
    source: "Dungeon Magazine 178",
    categories: ["Scepter of Cimbar +3", "ID_FMP_MAGIC_ITEM_9171"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_VISION_TELEPATHY"]);
      model.statadd("Insight Misc", 3, "item");
      model.statadd("Perception Misc", 3, "item");
      model.statadd("ID_FMP_ITEM_SET_40 Set Count", 1, "Scepter of Cimbar");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Tiamat's Bloody Bulwark (paragon tier)"] = new engine.RulesElement({
    name: "Tiamat's Bloody Bulwark (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9172",
    source: "Dungeon Magazine 178",
    categories: ["Tiamat's Bloody Bulwark (paragon tier)", "ID_FMP_MAGIC_ITEM_9172"],
    rules: function(model) {
      model.statadd("ID_FMP_ITEM_SET_40 Set Count", 1, "Tiamat's Bloody Bulwark");
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
