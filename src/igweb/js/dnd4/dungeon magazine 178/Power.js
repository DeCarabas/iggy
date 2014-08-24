(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Power = types['Power'] || (types['Power'] = {});
  te = Power["Boon of the Undying Queen"] = new RulesElement({
    name: "Boon of the Undying Queen",
    type: "Power",
    id: "ID_FMP_POWER_12519",
    source: "Dungeon Magazine 178",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12519",
    categories: ["Boon of the Undying Queen", "ID_FMP_POWER_12519", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_NO_ACTION", "No Action"]
  });
  byID[te.id] = te;
  
  
})(this);