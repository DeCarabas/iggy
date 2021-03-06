define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Internal = types['Internal'] || (types['Internal'] = {});
  te = Internal["Dusk Elf Weapon Training"] = new engine.RulesElement({
    name: "Dusk Elf Weapon Training",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_DUSK_ELF_WEAPON_TRAINING",
    source: "Dragon Magazine 382",
    categories: ["Dusk Elf Weapon Training", "ID_INTERNAL_INTERNAL_DUSK_ELF_WEAPON_TRAINING"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(DAGGER)"]);
      model.statadd("Dagger:damage", 2, "Feat");
      model.statadd("Dagger:damage", 3, "Feat");
      model.statadd("Dagger:damage", 4, "Feat");
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SICKLE)"]);
      model.statadd("Sickle:damage", 2, "Feat");
      model.statadd("Sickle:damage", 3, "Feat");
      model.statadd("Sickle:damage", 4, "Feat");
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SHORT_SWORD)"]);
      model.statadd("Short sword:damage", 2, "Feat");
      model.statadd("Short sword:damage", 3, "Feat");
      model.statadd("Short sword:damage", 4, "Feat");
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(RAPIER)"]);
      model.statadd("Rapier:damage", 2, "Feat");
      model.statadd("Rapier:damage", 3, "Feat");
      model.statadd("Rapier:damage", 4, "Feat");
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(CLAW_FIGHTER_CLAW)"]);
      model.statadd("Claw Fighter Claw:damage", 2, "Feat");
      model.statadd("Claw Fighter Claw:damage", 3, "Feat");
      model.statadd("Claw Fighter Claw:damage", 4, "Feat");
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SHADOWBLADE)"]);
      model.statadd("Shadowblade:damage", 2, "Feat");
      model.statadd("Shadowblade:damage", 3, "Feat");
      model.statadd("Shadowblade:damage", 4, "Feat");
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(CLIMBING_CLAW)"]);
      model.statadd("Climbing Claw:damage", 2, "Feat");
      model.statadd("Climbing Claw:damage", 3, "Feat");
      model.statadd("Climbing Claw:damage", 4, "Feat");
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(FERAL_ARMOR_CLAW)"]);
      model.statadd("Feral Armor Claw:damage", 2, "Feat");
      model.statadd("Feral Armor Claw:damage", 3, "Feat");
      model.statadd("Feral Armor Claw:damage", 4, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Internal["Weapon Master"] = new engine.RulesElement({
    name: "Weapon Master",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_WEAPON_MASTER",
    source: "Dragon Magazine 382",
    categories: ["Weapon Master", "ID_INTERNAL_INTERNAL_WEAPON_MASTER"],
    rules: function(model) {
      model.statadd("Weapon Mastery Focus", 1);
      model.statadd("Weapon Mastery Focus", 1);
      model.statadd("Weapon Mastery Focus", 1);
      model.statadd("Weapon Mastery Expertise", 1);
      model.statadd("Weapon Mastery Expertise", 1);
      model.statadd("Weapon Mastery Expertise", 1);
      model.statadd("Club:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Club:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Dagger:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Dagger:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Javelin:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Javelin:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Mace:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Mace:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Sickle:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Sickle:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Spear:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Spear:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Greatclub:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Greatclub:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Morningstar:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Morningstar:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Quarterstaff:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Quarterstaff:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Scythe:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Scythe:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Battleaxe:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Battleaxe:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Handaxe:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Handaxe:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Flail:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Flail:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Throwing hammer:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Throwing hammer:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Warhammer:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Warhammer:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("War Pick:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("War Pick:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Scimitar:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Scimitar:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Longsword:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Longsword:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Short sword:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Short sword:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Greataxe:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Greataxe:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Heavy flail:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Heavy flail:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Glaive:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Glaive:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Halberd:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Halberd:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Maul:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Maul:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Longspear:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Longspear:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Greatsword:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Greatsword:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Katar:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Katar:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Rapier:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Rapier:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Bastard sword:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Bastard sword:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Whip:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Whip:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Spiked chain:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Spiked chain:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Hand Crossbow:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Hand Crossbow:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Sling:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Sling:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Crossbow:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Crossbow:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Shortbow:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Shortbow:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Longbow:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Longbow:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Shuriken:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Shuriken:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Falchion:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Falchion:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Spiked gauntlet:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Spiked gauntlet:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Broadsword:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Broadsword:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Khopesh:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Khopesh:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Light war pick:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Light war pick:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Scourge:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Scourge:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Trident:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Trident:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Heavy war pick:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Heavy war pick:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Craghammer:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Craghammer:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Kukri:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Kukri:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Parrying dagger:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Parrying dagger:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Spiked shield:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Spiked shield:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Tratnyr:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Tratnyr:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Triple-headed flail:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Triple-headed flail:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Waraxe:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Waraxe:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Execution axe:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Execution axe:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Fullblade:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Fullblade:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Greatspear:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Greatspear:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Mordenkrad:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Mordenkrad:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Double axe:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Double axe:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Double flail:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Double flail:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Double sword:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Double sword:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Urgrosh:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Urgrosh:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Repeating crossbow:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Repeating crossbow:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Greatbow:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Greatbow:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Superior crossbow:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Superior crossbow:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Net:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Net:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Bola:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Bola:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Blowgun:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Blowgun:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Garrote:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Garrote:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Cutting Wheel:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Cutting Wheel:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Drow Long Knife:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Drow Long Knife:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Talenta Tangat:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Talenta Tangat:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Talenta Sharrash:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Talenta Sharrash:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Double Scimitar:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Double Scimitar:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Zulaat:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Zulaat:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Talenta Boomerang:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Talenta Boomerang:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Xen'drik Boomerang:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Xen'drik Boomerang:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Monk Unarmed Strike:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Monk Unarmed Strike:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Battlefist:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Battlefist:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Claw Fighter Claw:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Claw Fighter Claw:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Shadowblade:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Shadowblade:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Climbing Claw:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Climbing Claw:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Feral Armor Claw:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Feral Armor Claw:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Boar Tusk:damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Boar Tusk:attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Dragontooth Shield (heroic tier):damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Dragontooth Shield (heroic tier):attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Fighting Shield (heroic tier):damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Fighting Shield (heroic tier):attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Soul Shield (paragon tier):damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Soul Shield (paragon tier):attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Sun Shield (paragon tier):damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Sun Shield (paragon tier):attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
      model.statadd("Rod of Seven Parts (Weapon):damage", function() { return model.stat("Weapon Mastery Focus"); }, "Feat");
      model.statadd("Rod of Seven Parts (Weapon):attack", function() { return model.stat("Weapon Mastery Expertise"); }, "Feat");
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
