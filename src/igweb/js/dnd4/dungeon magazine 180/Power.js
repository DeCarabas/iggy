(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Power = types['Power'] || (types['Power'] = {});
  te = Power["Throw Grapple"] = new RulesElement({
    name: "Throw Grapple",
    type: "Power",
    id: "ID_FMP_POWER_12831",
    source: "Dungeon Magazine 180",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=12831",
    categories: ["Throw Grapple", "ID_FMP_POWER_12831", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  
})(this);
