(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Horreb Ritual Cube (paragon tier)"] = new RulesElement({
    name: "Horreb Ritual Cube (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8101",
    source: "Dungeon Magazine 170",
    categories: ["Horreb Ritual Cube (paragon tier)", "ID_FMP_MAGIC_ITEM_8101"],
    rules: function(model) {
      model.statadd("Saving Throws", 2, "item");
    }
  });
  byID[te.id] = te;
  
  
})(this);
