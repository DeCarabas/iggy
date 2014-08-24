(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Shield of Speed and Evasion (heroic tier)"] = new RulesElement({
    name: "Shield of Speed and Evasion (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4243",
    source: "Dungeon Magazine 156",
    categories: ["Shield of Speed and Evasion (heroic tier)", "ID_FMP_MAGIC_ITEM_4243"]
  });
  byID[te.id] = te;
  
  
})(this);
