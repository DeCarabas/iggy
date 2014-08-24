(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Deathcap Spores (paragon tier)"] = new RulesElement({
    name: "Deathcap Spores (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4561",
    source: "Dragon Magazine 370",
    categories: ["Deathcap Spores (paragon tier)", "ID_FMP_MAGIC_ITEM_4561"]
  });
  byID[te.id] = te;
  
  
})(this);
