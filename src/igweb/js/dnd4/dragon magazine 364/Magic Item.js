(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Greaves of Maldeen (paragon tier)"] = new RulesElement({
    name: "Greaves of Maldeen (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1222",
    source: "Dragon Magazine 364",
    categories: ["Greaves of Maldeen (paragon tier)", "ID_FMP_MAGIC_ITEM_1222"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Hood of the Wolf (paragon tier)"] = new RulesElement({
    name: "Hood of the Wolf (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1223",
    source: "Dragon Magazine 364",
    categories: ["Hood of the Wolf (paragon tier)", "ID_FMP_MAGIC_ITEM_1223"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_VISION_DARKVISION"]);
      model.statadd("Insight Misc", 4, "item");
      model.statadd("Perception Misc", 4, "item");
      model.statadd("Intimidate Misc", 4, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Shoulderbow +2"] = new RulesElement({
    name: "Shoulderbow +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1212",
    source: "Dragon Magazine 364",
    categories: ["Shoulderbow +2", "ID_FMP_MAGIC_ITEM_1212"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Shoulderbow +3"] = new RulesElement({
    name: "Shoulderbow +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1213",
    source: "Dragon Magazine 364",
    categories: ["Shoulderbow +3", "ID_FMP_MAGIC_ITEM_1213"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Shoulderbow +4"] = new RulesElement({
    name: "Shoulderbow +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1214",
    source: "Dragon Magazine 364",
    categories: ["Shoulderbow +4", "ID_FMP_MAGIC_ITEM_1214"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Shoulderbow +5"] = new RulesElement({
    name: "Shoulderbow +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1215",
    source: "Dragon Magazine 364",
    categories: ["Shoulderbow +5", "ID_FMP_MAGIC_ITEM_1215"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Shoulderbow +6"] = new RulesElement({
    name: "Shoulderbow +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1216",
    source: "Dragon Magazine 364",
    categories: ["Shoulderbow +6", "ID_FMP_MAGIC_ITEM_1216"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Spear of the Skylord"] = new RulesElement({
    name: "Spear of the Skylord",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1230",
    source: "Dragon Magazine 364",
    categories: ["Spear of the Skylord", "ID_FMP_MAGIC_ITEM_1230"],
    rules: function(model) {
      model.statadd("Intimidate Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Weapon of Myrdroon's Shard +1"] = new RulesElement({
    name: "Weapon of Myrdroon's Shard +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1224",
    source: "Dragon Magazine 364",
    categories: ["Weapon of Myrdroon's Shard +1", "ID_FMP_MAGIC_ITEM_1224"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Weapon of Myrdroon's Shard +2"] = new RulesElement({
    name: "Weapon of Myrdroon's Shard +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1225",
    source: "Dragon Magazine 364",
    categories: ["Weapon of Myrdroon's Shard +2", "ID_FMP_MAGIC_ITEM_1225"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Weapon of Myrdroon's Shard +3"] = new RulesElement({
    name: "Weapon of Myrdroon's Shard +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1226",
    source: "Dragon Magazine 364",
    categories: ["Weapon of Myrdroon's Shard +3", "ID_FMP_MAGIC_ITEM_1226"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Weapon of Myrdroon's Shard +4"] = new RulesElement({
    name: "Weapon of Myrdroon's Shard +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1227",
    source: "Dragon Magazine 364",
    categories: ["Weapon of Myrdroon's Shard +4", "ID_FMP_MAGIC_ITEM_1227"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Weapon of Myrdroon's Shard +5"] = new RulesElement({
    name: "Weapon of Myrdroon's Shard +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1228",
    source: "Dragon Magazine 364",
    categories: ["Weapon of Myrdroon's Shard +5", "ID_FMP_MAGIC_ITEM_1228"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Weapon of Myrdroon's Shard +6"] = new RulesElement({
    name: "Weapon of Myrdroon's Shard +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1229",
    source: "Dragon Magazine 364",
    categories: ["Weapon of Myrdroon's Shard +6", "ID_FMP_MAGIC_ITEM_1229"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wolfen Weapon +2"] = new RulesElement({
    name: "Wolfen Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1217",
    source: "Dragon Magazine 364",
    categories: ["Wolfen Weapon +2", "ID_FMP_MAGIC_ITEM_1217"],
    rules: function(model) {
      model.statadd("Perception Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wolfen Weapon +3"] = new RulesElement({
    name: "Wolfen Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1218",
    source: "Dragon Magazine 364",
    categories: ["Wolfen Weapon +3", "ID_FMP_MAGIC_ITEM_1218"],
    rules: function(model) {
      model.statadd("Perception Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wolfen Weapon +4"] = new RulesElement({
    name: "Wolfen Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1219",
    source: "Dragon Magazine 364",
    categories: ["Wolfen Weapon +4", "ID_FMP_MAGIC_ITEM_1219"],
    rules: function(model) {
      model.statadd("Perception Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wolfen Weapon +5"] = new RulesElement({
    name: "Wolfen Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1220",
    source: "Dragon Magazine 364",
    categories: ["Wolfen Weapon +5", "ID_FMP_MAGIC_ITEM_1220"],
    rules: function(model) {
      model.statadd("Perception Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wolfen Weapon +6"] = new RulesElement({
    name: "Wolfen Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1221",
    source: "Dragon Magazine 364",
    categories: ["Wolfen Weapon +6", "ID_FMP_MAGIC_ITEM_1221"],
    rules: function(model) {
      model.statadd("Perception Misc", 2);
    }
  });
  byID[te.id] = te;
  
  
})(this);
