define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Power = types['Power'] || (types['Power'] = {});
  te = Power["Ally's Opportunity"] = new engine.RulesElement({
    name: "Ally's Opportunity",
    type: "Power",
    id: "ID_FMP_POWER_9272",
    source: "Adventurer's Vault 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9272",
    categories: ["Ally's Opportunity", "ID_FMP_POWER_9272", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action"]
  });
  byID[te.id] = te;
  
  te = Power["Blood of the Akarot"] = new engine.RulesElement({
    name: "Blood of the Akarot",
    type: "Power",
    id: "ID_FMP_POWER_9276",
    source: "Adventurer's Vault 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9276",
    categories: ["Blood of the Akarot", "ID_FMP_POWER_9276", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action"]
  });
  byID[te.id] = te;
  
  te = Power["Hand of Salzacas"] = new engine.RulesElement({
    name: "Hand of Salzacas",
    type: "Power",
    id: "ID_FMP_POWER_9273",
    source: "Adventurer's Vault 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9273",
    categories: ["Hand of Salzacas", "ID_FMP_POWER_9273", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_INTERNAL_CATEGORY_FREE_ACTION", "Free Action"]
  });
  byID[te.id] = te;
  
  te = Power["Strength of Ayrkashna"] = new engine.RulesElement({
    name: "Strength of Ayrkashna",
    type: "Power",
    id: "ID_FMP_POWER_9274",
    source: "Adventurer's Vault 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9274",
    categories: ["Strength of Ayrkashna", "ID_FMP_POWER_9274", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CATEGORY_9", "Healing", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Tinkerer's Disjunction"] = new engine.RulesElement({
    name: "Tinkerer's Disjunction",
    type: "Power",
    id: "ID_FMP_POWER_9275",
    source: "Adventurer's Vault 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9275",
    categories: ["Tinkerer's Disjunction", "ID_FMP_POWER_9275", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Voice of the Akarot"] = new engine.RulesElement({
    name: "Voice of the Akarot",
    type: "Power",
    id: "ID_FMP_POWER_9277",
    source: "Adventurer's Vault 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=9277",
    categories: ["Voice of the Akarot", "ID_FMP_POWER_9277", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CATEGORY_6", "Charm", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
