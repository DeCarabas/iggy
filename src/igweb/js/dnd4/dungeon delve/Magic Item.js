(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Bloody Maul of Kord +4"] = new RulesElement({
    name: "Bloody Maul of Kord +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4865",
    source: "Dungeon Delve",
    categories: ["Bloody Maul of Kord +4", "ID_FMP_MAGIC_ITEM_4865"]
  });
  byID[te.id] = te;
  
  
})(this);
