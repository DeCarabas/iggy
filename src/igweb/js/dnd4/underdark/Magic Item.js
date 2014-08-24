(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Icegloom Chart (heroic tier)"] = new RulesElement({
    name: "Icegloom Chart (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8385",
    source: "Underdark",
    categories: ["Icegloom Chart (heroic tier)", "ID_FMP_MAGIC_ITEM_8385"]
  });
  byID[te.id] = te;
  
  
})(this);
