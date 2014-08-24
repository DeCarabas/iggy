(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Scepter of Winter +2"] = new RulesElement({
    name: "Scepter of Winter +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4878",
    source: "FR1 Scepter Tower of Spellgard",
    categories: ["Scepter of Winter +2", "ID_FMP_MAGIC_ITEM_4878"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_1235"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(elements.id["ID_FMP_POWER_435"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  
})(this);
