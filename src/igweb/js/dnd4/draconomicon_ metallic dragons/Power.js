(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Power = types['Power'] || (types['Power'] = {});
  te = Power["Dragon Claw Strike"] = new RulesElement({
    name: "Dragon Claw Strike",
    type: "Power",
    id: "ID_FMP_POWER_10326",
    source: "Draconomicon: Metallic Dragons",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10326",
    categories: ["Dragon Claw Strike", "ID_FMP_POWER_10326", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Platinum Presence"] = new RulesElement({
    name: "Platinum Presence",
    type: "Power",
    id: "ID_FMP_POWER_10327",
    source: "Draconomicon: Metallic Dragons",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=10327",
    categories: ["Platinum Presence", "ID_FMP_POWER_10327", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  
})(this);
