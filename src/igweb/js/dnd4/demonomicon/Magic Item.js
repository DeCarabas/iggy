(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Torc of Bin A'kin +5"] = new RulesElement({
    name: "Torc of Bin A'kin +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9186",
    source: "Demonomicon",
    categories: ["Torc of Bin A'kin +5", "ID_FMP_MAGIC_ITEM_9186"],
    rules: function(model) {
      model.statadd("Diplomacy Misc", 2, "item");
      model.statadd("Insight Misc", 2, "item");
      model.statadd("Fortitude Defense", 5, "Enhancement");
      model.statadd("Reflex Defense", 5, "Enhancement");
      model.statadd("Will Defense", 5, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Torc of Bin A'kin +6"] = new RulesElement({
    name: "Torc of Bin A'kin +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9187",
    source: "Demonomicon",
    categories: ["Torc of Bin A'kin +6", "ID_FMP_MAGIC_ITEM_9187"],
    rules: function(model) {
      model.statadd("Diplomacy Misc", 2, "item");
      model.statadd("Insight Misc", 2, "item");
      model.statadd("Fortitude Defense", 6, "Enhancement");
      model.statadd("Reflex Defense", 6, "Enhancement");
      model.statadd("Will Defense", 6, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  
})(this);
