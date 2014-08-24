(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Magrathar's Ring (paragon tier)"] = new RulesElement({
    name: "Magrathar's Ring (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4880",
    source: "P3 Assault on Nightwyrm Fortress",
    categories: ["Magrathar's Ring (paragon tier)", "ID_FMP_MAGIC_ITEM_4880"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Shadowfell Blade +4"] = new RulesElement({
    name: "Shadowfell Blade +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4882",
    source: "P3 Assault on Nightwyrm Fortress",
    categories: ["Shadowfell Blade +4", "ID_FMP_MAGIC_ITEM_4882"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Shadowfell Blade +5"] = new RulesElement({
    name: "Shadowfell Blade +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4883",
    source: "P3 Assault on Nightwyrm Fortress",
    categories: ["Shadowfell Blade +5", "ID_FMP_MAGIC_ITEM_4883"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Shadowfell Blade +6"] = new RulesElement({
    name: "Shadowfell Blade +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4884",
    source: "P3 Assault on Nightwyrm Fortress",
    categories: ["Shadowfell Blade +6", "ID_FMP_MAGIC_ITEM_4884"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Skull of Sartine"] = new RulesElement({
    name: "Skull of Sartine",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4879",
    source: "P3 Assault on Nightwyrm Fortress",
    categories: ["Skull of Sartine", "ID_FMP_MAGIC_ITEM_4879"],
    rules: function(model) {
      model.statadd("History Misc", 2, "item");
      model.grant(elements.id["ID_INTERNAL_VISION_DARKVISION"]);
      model.statadd("resist:necrotic", 10, "resist");
      model.statadd("resist:fire", 10, "resist");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Soul Ring (paragon tier)"] = new RulesElement({
    name: "Soul Ring (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4881",
    source: "P3 Assault on Nightwyrm Fortress",
    categories: ["Soul Ring (paragon tier)", "ID_FMP_MAGIC_ITEM_4881"]
  });
  byID[te.id] = te;
  
  
})(this);
