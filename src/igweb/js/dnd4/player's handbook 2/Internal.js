(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Internal = types['Internal'] || (types['Internal'] = {});
  te = Internal["Goliath Greatweapon Prowess"] = new RulesElement({
    name: "Goliath Greatweapon Prowess",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_GOLIATH_GREATWEAPON_PROWESS",
    source: "Player's Handbook 2",
    categories: ["Goliath Greatweapon Prowess", "ID_INTERNAL_INTERNAL_GOLIATH_GREATWEAPON_PROWESS"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(GREATAXE)"]);
      model.statadd("Greataxe:damage", 2, "Feat");
      model.statadd("Greataxe:damage", 3, "Feat");
      model.statadd("Greataxe:damage", 4, "Feat");
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(HEAVY_FLAIL)"]);
      model.statadd("Heavy flail:damage", 2, "Feat");
      model.statadd("Heavy flail:damage", 3, "Feat");
      model.statadd("Heavy flail:damage", 4, "Feat");
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(GLAIVE)"]);
      model.statadd("Glaive:damage", 2, "Feat");
      model.statadd("Glaive:damage", 3, "Feat");
      model.statadd("Glaive:damage", 4, "Feat");
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(HALBERD)"]);
      model.statadd("Halberd:damage", 2, "Feat");
      model.statadd("Halberd:damage", 3, "Feat");
      model.statadd("Halberd:damage", 4, "Feat");
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(MAUL)"]);
      model.statadd("Maul:damage", 2, "Feat");
      model.statadd("Maul:damage", 3, "Feat");
      model.statadd("Maul:damage", 4, "Feat");
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(LONGSPEAR)"]);
      model.statadd("Longspear:damage", 2, "Feat");
      model.statadd("Longspear:damage", 3, "Feat");
      model.statadd("Longspear:damage", 4, "Feat");
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(GREATSWORD)"]);
      model.statadd("Greatsword:damage", 2, "Feat");
      model.statadd("Greatsword:damage", 3, "Feat");
      model.statadd("Greatsword:damage", 4, "Feat");
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(FALCHION)"]);
      model.statadd("Falchion:damage", 2, "Feat");
      model.statadd("Falchion:damage", 3, "Feat");
      model.statadd("Falchion:damage", 4, "Feat");
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(HEAVY_WAR_PICK)"]);
      model.statadd("Heavy war pick:damage", 2, "Feat");
      model.statadd("Heavy war pick:damage", 3, "Feat");
      model.statadd("Heavy war pick:damage", 4, "Feat");
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(GREATCLUB)"]);
      model.statadd("Greatclub:damage", 2, "Feat");
      model.statadd("Greatclub:damage", 3, "Feat");
      model.statadd("Greatclub:damage", 4, "Feat");
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(MORNINGSTAR)"]);
      model.statadd("Morningstar:damage", 2, "Feat");
      model.statadd("Morningstar:damage", 3, "Feat");
      model.statadd("Morningstar:damage", 4, "Feat");
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(QUARTERSTAFF)"]);
      model.statadd("Quarterstaff:damage", 2, "Feat");
      model.statadd("Quarterstaff:damage", 3, "Feat");
      model.statadd("Quarterstaff:damage", 4, "Feat");
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SCYTHE)"]);
      model.statadd("Scythe:damage", 2, "Feat");
      model.statadd("Scythe:damage", 3, "Feat");
      model.statadd("Scythe:damage", 4, "Feat");
    }
  });
  byID[te.id] = te;
  
  
})(this);
