(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Tier = types['Tier'] || (types['Tier'] = {});
  te = Tier["Epic"] = new RulesElement({
    name: "Epic",
    type: "Tier",
    id: "ID_INTERNAL_TIER_EPIC",
    source: "Core",
    categories: ["Epic", "ID_INTERNAL_TIER_EPIC"]
  });
  byID[te.id] = te;
  
  te = Tier["Heroic"] = new RulesElement({
    name: "Heroic",
    type: "Tier",
    id: "ID_INTERNAL_TIER_HEROIC",
    source: "Core",
    categories: ["Heroic", "ID_INTERNAL_TIER_HEROIC"]
  });
  byID[te.id] = te;
  
  te = Tier["Paragon"] = new RulesElement({
    name: "Paragon",
    type: "Tier",
    id: "ID_INTERNAL_TIER_PARAGON",
    source: "Core",
    categories: ["Paragon", "ID_INTERNAL_TIER_PARAGON"]
  });
  byID[te.id] = te;
  
  
})(this);
