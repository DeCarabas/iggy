(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Holy Water (level 1)"] = new RulesElement({
    name: "Holy Water (level 1)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5386",
    source: "Divine Power",
    categories: ["Holy Water (level 1)", "ID_FMP_MAGIC_ITEM_5386"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Holy Water (level 11)"] = new RulesElement({
    name: "Holy Water (level 11)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_6954",
    source: "Divine Power",
    categories: ["Holy Water (level 11)", "ID_FMP_MAGIC_ITEM_6954"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Holy Water (level 16)"] = new RulesElement({
    name: "Holy Water (level 16)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_6955",
    source: "Divine Power",
    categories: ["Holy Water (level 16)", "ID_FMP_MAGIC_ITEM_6955"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Holy Water (level 21)"] = new RulesElement({
    name: "Holy Water (level 21)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_6956",
    source: "Divine Power",
    categories: ["Holy Water (level 21)", "ID_FMP_MAGIC_ITEM_6956"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Holy Water (level 26)"] = new RulesElement({
    name: "Holy Water (level 26)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_6957",
    source: "Divine Power",
    categories: ["Holy Water (level 26)", "ID_FMP_MAGIC_ITEM_6957"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Holy Water (level 6)"] = new RulesElement({
    name: "Holy Water (level 6)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_6953",
    source: "Divine Power",
    categories: ["Holy Water (level 6)", "ID_FMP_MAGIC_ITEM_6953"]
  });
  byID[te.id] = te;
  
  
})(this);
