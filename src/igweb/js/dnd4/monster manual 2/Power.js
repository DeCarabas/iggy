(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Power = types['Power'] || (types['Power'] = {});
  te = Power["Infernal Quills"] = new RulesElement({
    name: "Infernal Quills",
    type: "Power",
    id: "ID_FMP_POWER_27",
    source: "Monster Manual 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=27",
    categories: ["Infernal Quills", "ID_FMP_POWER_27", "ID_FMP_RACIAL_TRAIT_1523", "Infernal Quils", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_14", "Poison", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  
})(this);
