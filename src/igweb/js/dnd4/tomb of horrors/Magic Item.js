(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Ruinblade"] = new RulesElement({
    name: "Ruinblade",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9188",
    source: "Tomb of Horrors",
    categories: ["Ruinblade", "ID_FMP_MAGIC_ITEM_9188"],
    rules: function(model) {
      model.statadd("damage(Ruinblade)", "+1d10");
    }
  });
  byID[te.id] = te;
  
  
})(this);
