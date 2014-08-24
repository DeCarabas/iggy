(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Power = types['Power'] || (types['Power'] = {});
  te = Power["Shake the Bridge"] = new RulesElement({
    name: "Shake the Bridge",
    type: "Power",
    id: "ID_FMP_POWER_10118",
    source: "Dungeon Magazine 171",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10118",
    categories: ["Shake the Bridge", "ID_FMP_POWER_10118", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  
})(this);
