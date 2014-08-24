(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Audaviator"] = new RulesElement({
    name: "Audaviator",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5383",
    source: "E2 Kingdom of the Ghouls",
    categories: ["Audaviator", "ID_FMP_MAGIC_ITEM_5383"],
    rules: function(model) {
      model.statadd("Arcana Misc", function() { /* when performing travel rituals */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Sorrowsong Blade +6"] = new RulesElement({
    name: "Sorrowsong Blade +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5382",
    source: "E2 Kingdom of the Ghouls",
    categories: ["Sorrowsong Blade +6", "ID_FMP_MAGIC_ITEM_5382"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["White Kingdom Boneclaw +6"] = new RulesElement({
    name: "White Kingdom Boneclaw +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5381",
    source: "E2 Kingdom of the Ghouls",
    categories: ["White Kingdom Boneclaw +6", "ID_FMP_MAGIC_ITEM_5381"]
  });
  byID[te.id] = te;
  
  
})(this);
