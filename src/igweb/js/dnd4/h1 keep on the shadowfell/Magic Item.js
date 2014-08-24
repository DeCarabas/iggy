(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Aecris Weapon +1"] = new RulesElement({
    name: "Aecris Weapon +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4598",
    source: "H1 Keep on the Shadowfell",
    categories: ["Aecris Weapon +1", "ID_FMP_MAGIC_ITEM_4598"]
  });
  byID[te.id] = te;
  
  
})(this);
