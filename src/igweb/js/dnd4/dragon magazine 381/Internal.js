(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Internal = types['Internal'] || (types['Internal'] = {});
  te = Internal["Versatile Duelist"] = new RulesElement({
    name: "Versatile Duelist",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_VERSATILE_DUELIST",
    source: "Dragon Magazine 381",
    categories: ["Versatile Duelist", "ID_INTERNAL_INTERNAL_VERSATILE_DUELIST"],
    rules: function(model) {
      model.statadd("ID_FMP_CLASS_6-Light Blade", "Scimitar");
      model.statadd("Sneak Attack Weapons", "Scimitar");
      model.statadd("ID_FMP_CLASS_6-Light Blade", "Longsword");
      model.statadd("Sneak Attack Weapons", "Longsword");
      model.statadd("ID_FMP_CLASS_6-Light Blade", "Bastard sword");
      model.statadd("Sneak Attack Weapons", "Bastard sword");
      model.statadd("ID_FMP_CLASS_6-Light Blade", "Broadsword");
      model.statadd("Sneak Attack Weapons", "Broadsword");
      model.statadd("ID_FMP_CLASS_6-Light Blade", "Khopesh");
      model.statadd("Sneak Attack Weapons", "Khopesh");
      model.statadd("ID_FMP_CLASS_6-Light Blade", "Drow Long Knife");
      model.statadd("Sneak Attack Weapons", "Drow Long Knife");
      model.statadd("ID_FMP_CLASS_6-Light Blade", "Talenta Tangat");
      model.statadd("Sneak Attack Weapons", "Talenta Tangat");
      model.statadd("ID_FMP_CLASS_6-Light Blade", "Double Scimitar");
      model.statadd("Sneak Attack Weapons", "Double Scimitar");
      model.statadd("ID_FMP_CLASS_6-Light Blade", "Zulaat");
      model.statadd("Sneak Attack Weapons", "Zulaat");
      model.statadd("ID_FMP_CLASS_6-Light Blade", "Fighting Shield (heroic tier)");
      model.statadd("Sneak Attack Weapons", "Fighting Shield (heroic tier)");
      model.statadd("ID_FMP_CLASS_6-Light Blade", "Sun Shield (paragon tier)");
      model.statadd("Sneak Attack Weapons", "Sun Shield (paragon tier)");
    }
  });
  byID[te.id] = te;
  
  
})(this);
