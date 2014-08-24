(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Belt of Fiends (paragon tier)"] = new RulesElement({
    name: "Belt of Fiends (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4259",
    source: "Dragon Magazine 366",
    categories: ["Belt of Fiends (paragon tier)", "ID_FMP_MAGIC_ITEM_4259"],
    rules: function(model) {
      model.statadd("Diplomacy Misc", function() { 
        if (model.inventory.equipped.some(function(i) {{ return i.matchesCategory('{0}'); }})) {
          /* when dealing with devils */ return 2;
        } else return 0;
       }, "item");
      model.statadd("Insight Misc", function() { 
        if (model.inventory.equipped.some(function(i) {{ return i.matchesCategory('{0}'); }})) {
          /* when dealing with devils */ return 2;
        } else return 0;
       }, "item");
      model.statadd("Bluff Misc", function() { 
        if (model.inventory.equipped.some(function(i) {{ return i.matchesCategory('{0}'); }})) {
          /* when dealing with devils */ return 2;
        } else return 0;
       }, "item");
      model.statadd("Religion Misc", function() { 
        if (model.inventory.equipped.some(function(i) {{ return i.matchesCategory('{0}'); }})) {
          /* when dealing with devils */ return 2;
        } else return 0;
       }, "item");
      model.statadd("Athletics Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ring of Fury (paragon tier)"] = new RulesElement({
    name: "Ring of Fury (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4260",
    source: "Dragon Magazine 366",
    categories: ["Ring of Fury (paragon tier)", "ID_FMP_MAGIC_ITEM_4260"],
    rules: function(model) {
      model.statadd("Intimidate Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  
})(this);
