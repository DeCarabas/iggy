(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Bahamut's Golden Canary (epic tier)"] = new RulesElement({
    name: "Bahamut's Golden Canary (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8965",
    source: "Dungeon Magazine 175",
    categories: ["Bahamut's Golden Canary (epic tier)", "ID_FMP_MAGIC_ITEM_8965"]
  });
  byID[te.id] = te;
  
  
})(this);
