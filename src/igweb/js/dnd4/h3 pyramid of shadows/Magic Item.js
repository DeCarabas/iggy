(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Head of Vyrellis"] = new RulesElement({
    name: "Head of Vyrellis",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4339",
    source: "H3 Pyramid of Shadows",
    categories: ["Head of Vyrellis", "ID_FMP_MAGIC_ITEM_4339"],
    rules: function(model) {
      model.statadd("Arcana Misc", 2);
      model.statadd("History Misc", 2);
      model.statadd("Religion Misc", 2);
    }
  });
  byID[te.id] = te;
  
  
})(this);
