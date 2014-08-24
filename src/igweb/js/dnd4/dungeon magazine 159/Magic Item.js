(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Primordial Ring (paragon tier)"] = new RulesElement({
    name: "Primordial Ring (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4391",
    source: "Dungeon Magazine 159",
    categories: ["Primordial Ring (paragon tier)", "ID_FMP_MAGIC_ITEM_4391"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["The Deluvian Hourglass"] = new RulesElement({
    name: "The Deluvian Hourglass",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4340",
    source: "Dungeon Magazine 159",
    categories: ["The Deluvian Hourglass", "ID_FMP_MAGIC_ITEM_4340"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_1237"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  
})(this);
