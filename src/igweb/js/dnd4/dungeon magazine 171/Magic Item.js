(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Greenbane (level 14)"] = new RulesElement({
    name: "Greenbane (level 14)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8315",
    source: "Dungeon Magazine 171",
    categories: ["Greenbane (level 14)", "ID_FMP_MAGIC_ITEM_8315"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Greenbane (level 19)"] = new RulesElement({
    name: "Greenbane (level 19)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8316",
    source: "Dungeon Magazine 171",
    categories: ["Greenbane (level 19)", "ID_FMP_MAGIC_ITEM_8316"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Greenbane (level 24)"] = new RulesElement({
    name: "Greenbane (level 24)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8317",
    source: "Dungeon Magazine 171",
    categories: ["Greenbane (level 24)", "ID_FMP_MAGIC_ITEM_8317"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Greenbane (level 29)"] = new RulesElement({
    name: "Greenbane (level 29)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8318",
    source: "Dungeon Magazine 171",
    categories: ["Greenbane (level 29)", "ID_FMP_MAGIC_ITEM_8318"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Greenbane (level 4)"] = new RulesElement({
    name: "Greenbane (level 4)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8210",
    source: "Dungeon Magazine 171",
    categories: ["Greenbane (level 4)", "ID_FMP_MAGIC_ITEM_8210"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Greenbane (level 9)"] = new RulesElement({
    name: "Greenbane (level 9)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8314",
    source: "Dungeon Magazine 171",
    categories: ["Greenbane (level 9)", "ID_FMP_MAGIC_ITEM_8314"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Earthen Might +1"] = new RulesElement({
    name: "Staff of Earthen Might +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8202",
    source: "Dungeon Magazine 171",
    categories: ["Staff of Earthen Might +1", "ID_FMP_MAGIC_ITEM_8202"],
    rules: function(model) {
      model.statadd("Athletics Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Earthen Might +2"] = new RulesElement({
    name: "Staff of Earthen Might +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8203",
    source: "Dungeon Magazine 171",
    categories: ["Staff of Earthen Might +2", "ID_FMP_MAGIC_ITEM_8203"],
    rules: function(model) {
      model.statadd("Athletics Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Earthen Might +3"] = new RulesElement({
    name: "Staff of Earthen Might +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8204",
    source: "Dungeon Magazine 171",
    categories: ["Staff of Earthen Might +3", "ID_FMP_MAGIC_ITEM_8204"],
    rules: function(model) {
      model.statadd("Athletics Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Earthen Might +4"] = new RulesElement({
    name: "Staff of Earthen Might +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8205",
    source: "Dungeon Magazine 171",
    categories: ["Staff of Earthen Might +4", "ID_FMP_MAGIC_ITEM_8205"],
    rules: function(model) {
      model.statadd("Athletics Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Earthen Might +5"] = new RulesElement({
    name: "Staff of Earthen Might +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8206",
    source: "Dungeon Magazine 171",
    categories: ["Staff of Earthen Might +5", "ID_FMP_MAGIC_ITEM_8206"],
    rules: function(model) {
      model.statadd("Athletics Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Earthen Might +6"] = new RulesElement({
    name: "Staff of Earthen Might +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8207",
    source: "Dungeon Magazine 171",
    categories: ["Staff of Earthen Might +6", "ID_FMP_MAGIC_ITEM_8207"],
    rules: function(model) {
      model.statadd("Athletics Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Vecna's Boon of Diabolical Choice (heroic tier)"] = new RulesElement({
    name: "Vecna's Boon of Diabolical Choice (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8211",
    source: "Dungeon Magazine 171",
    categories: ["Vecna's Boon of Diabolical Choice (heroic tier)", "ID_FMP_MAGIC_ITEM_8211"]
  });
  byID[te.id] = te;
  
  
})(this);
