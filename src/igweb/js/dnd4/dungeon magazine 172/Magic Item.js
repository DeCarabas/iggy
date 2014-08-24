(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Arrow of Fate"] = new RulesElement({
    name: "Arrow of Fate",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8297",
    source: "Dungeon Magazine 172",
    categories: ["Arrow of Fate", "ID_FMP_MAGIC_ITEM_8297"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  
})(this);
