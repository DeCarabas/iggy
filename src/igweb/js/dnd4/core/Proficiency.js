(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Proficiency = types['Proficiency'] || (types['Proficiency'] = {});
  te = Proficiency["Armor Proficiency (Chainmail)"] = new RulesElement({
    name: "Armor Proficiency (Chainmail)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CHAINMAIL)",
    source: "Core",
    categories: ["Armor Proficiency (Chainmail)", "ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CHAINMAIL)"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Armor Proficiency (Cloth)"] = new RulesElement({
    name: "Armor Proficiency (Cloth)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CLOTH)",
    source: "Core",
    categories: ["Armor Proficiency (Cloth)", "ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(CLOTH)"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Armor Proficiency (Hide)"] = new RulesElement({
    name: "Armor Proficiency (Hide)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(HIDE)",
    source: "Core",
    categories: ["Armor Proficiency (Hide)", "ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(HIDE)"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Armor Proficiency (Leather)"] = new RulesElement({
    name: "Armor Proficiency (Leather)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(LEATHER)",
    source: "Core",
    categories: ["Armor Proficiency (Leather)", "ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(LEATHER)"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Armor Proficiency (Plate)"] = new RulesElement({
    name: "Armor Proficiency (Plate)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(PLATE)",
    source: "Core",
    categories: ["Armor Proficiency (Plate)", "ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(PLATE)"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Armor Proficiency (Scale)"] = new RulesElement({
    name: "Armor Proficiency (Scale)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(SCALE)",
    source: "Core",
    categories: ["Armor Proficiency (Scale)", "ID_INTERNAL_PROFICIENCY_ARMOR_PROFICIENCY_(SCALE)"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Choose Nothing"] = new RulesElement({
    name: "Choose Nothing",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_CHOOSE_NOTHING",
    source: "Core",
    categories: ["Choose Nothing", "ID_INTERNAL_PROFICIENCY_CHOOSE_NOTHING", "Simple", "Military"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Axe group)"] = new RulesElement({
    name: "Implement Proficiency (Axe group)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(AXE_GROUP)",
    source: "Core",
    categories: ["Implement Proficiency (Axe group)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(AXE_GROUP)"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(BATTLEAXE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(HANDAXE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(GREATAXE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(HALBERD)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(KHOPESH)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(WARAXE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(EXECUTION_AXE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(DOUBLE_AXE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(URGROSH)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(SOUL_SHIELD_(PARAGON_TIER))"]);
    }
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Bastard sword)"] = new RulesElement({
    name: "Implement Proficiency (Bastard sword)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(BASTARD_SWORD)",
    source: "Core",
    categories: ["Implement Proficiency (Bastard sword)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(BASTARD_SWORD)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Battleaxe)"] = new RulesElement({
    name: "Implement Proficiency (Battleaxe)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(BATTLEAXE)",
    source: "Core",
    categories: ["Implement Proficiency (Battleaxe)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(BATTLEAXE)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Battlefist)"] = new RulesElement({
    name: "Implement Proficiency (Battlefist)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(BATTLEFIST)",
    source: "Core",
    categories: ["Implement Proficiency (Battlefist)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(BATTLEFIST)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Blowgun)"] = new RulesElement({
    name: "Implement Proficiency (Blowgun)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(BLOWGUN)",
    source: "Core",
    categories: ["Implement Proficiency (Blowgun)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(BLOWGUN)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Boar Tusk)"] = new RulesElement({
    name: "Implement Proficiency (Boar Tusk)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(BOAR_TUSK)",
    source: "Core",
    categories: ["Implement Proficiency (Boar Tusk)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(BOAR_TUSK)"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Bola)"] = new RulesElement({
    name: "Implement Proficiency (Bola)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(BOLA)",
    source: "Core",
    categories: ["Implement Proficiency (Bola)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(BOLA)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Bow group)"] = new RulesElement({
    name: "Implement Proficiency (Bow group)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(BOW_GROUP)",
    source: "Core",
    categories: ["Implement Proficiency (Bow group)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(BOW_GROUP)"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(SHORTBOW)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(LONGBOW)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(GREATBOW)"]);
    }
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Broadsword)"] = new RulesElement({
    name: "Implement Proficiency (Broadsword)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(BROADSWORD)",
    source: "Core",
    categories: ["Implement Proficiency (Broadsword)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(BROADSWORD)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Claw Fighter Claw)"] = new RulesElement({
    name: "Implement Proficiency (Claw Fighter Claw)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(CLAW_FIGHTER_CLAW)",
    source: "Core",
    categories: ["Implement Proficiency (Claw Fighter Claw)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(CLAW_FIGHTER_CLAW)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Climbing Claw)"] = new RulesElement({
    name: "Implement Proficiency (Climbing Claw)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(CLIMBING_CLAW)",
    source: "Core",
    categories: ["Implement Proficiency (Climbing Claw)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(CLIMBING_CLAW)"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Club)"] = new RulesElement({
    name: "Implement Proficiency (Club)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(CLUB)",
    source: "Core",
    categories: ["Implement Proficiency (Club)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(CLUB)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Craghammer)"] = new RulesElement({
    name: "Implement Proficiency (Craghammer)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(CRAGHAMMER)",
    source: "Core",
    categories: ["Implement Proficiency (Craghammer)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(CRAGHAMMER)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Crossbow group)"] = new RulesElement({
    name: "Implement Proficiency (Crossbow group)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(CROSSBOW_GROUP)",
    source: "Core",
    categories: ["Implement Proficiency (Crossbow group)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(CROSSBOW_GROUP)"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(HAND_CROSSBOW)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(CROSSBOW)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(REPEATING_CROSSBOW)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(SUPERIOR_CROSSBOW)"]);
    }
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Crossbow)"] = new RulesElement({
    name: "Implement Proficiency (Crossbow)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(CROSSBOW)",
    source: "Core",
    categories: ["Implement Proficiency (Crossbow)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(CROSSBOW)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Cutting Wheel)"] = new RulesElement({
    name: "Implement Proficiency (Cutting Wheel)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(CUTTING_WHEEL)",
    source: "Core",
    categories: ["Implement Proficiency (Cutting Wheel)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(CUTTING_WHEEL)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Dagger)"] = new RulesElement({
    name: "Implement Proficiency (Dagger)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(DAGGER)",
    source: "Core",
    categories: ["Implement Proficiency (Dagger)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(DAGGER)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Double axe)"] = new RulesElement({
    name: "Implement Proficiency (Double axe)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(DOUBLE_AXE)",
    source: "Core",
    categories: ["Implement Proficiency (Double axe)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(DOUBLE_AXE)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Double flail)"] = new RulesElement({
    name: "Implement Proficiency (Double flail)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(DOUBLE_FLAIL)",
    source: "Core",
    categories: ["Implement Proficiency (Double flail)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(DOUBLE_FLAIL)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Double Scimitar)"] = new RulesElement({
    name: "Implement Proficiency (Double Scimitar)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(DOUBLE_SCIMITAR)",
    source: "Core",
    categories: ["Implement Proficiency (Double Scimitar)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(DOUBLE_SCIMITAR)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Double sword)"] = new RulesElement({
    name: "Implement Proficiency (Double sword)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(DOUBLE_SWORD)",
    source: "Core",
    categories: ["Implement Proficiency (Double sword)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(DOUBLE_SWORD)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Dragontooth Shield (heroic tier))"] = new RulesElement({
    name: "Implement Proficiency (Dragontooth Shield (heroic tier))",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(DRAGONTOOTH_SHIELD_(HEROIC_TIER))",
    source: "Core",
    categories: ["Implement Proficiency (Dragontooth Shield (heroic tier))", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(DRAGONTOOTH_SHIELD_(HEROIC_TIER))"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Drow Long Knife)"] = new RulesElement({
    name: "Implement Proficiency (Drow Long Knife)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(DROW_LONG_KNIFE)",
    source: "Core",
    categories: ["Implement Proficiency (Drow Long Knife)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(DROW_LONG_KNIFE)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Execution axe)"] = new RulesElement({
    name: "Implement Proficiency (Execution axe)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(EXECUTION_AXE)",
    source: "Core",
    categories: ["Implement Proficiency (Execution axe)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(EXECUTION_AXE)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Falchion)"] = new RulesElement({
    name: "Implement Proficiency (Falchion)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(FALCHION)",
    source: "Core",
    categories: ["Implement Proficiency (Falchion)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(FALCHION)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Feral Armor Claw)"] = new RulesElement({
    name: "Implement Proficiency (Feral Armor Claw)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(FERAL_ARMOR_CLAW)",
    source: "Core",
    categories: ["Implement Proficiency (Feral Armor Claw)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(FERAL_ARMOR_CLAW)"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Fighting Shield (heroic tier))"] = new RulesElement({
    name: "Implement Proficiency (Fighting Shield (heroic tier))",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(FIGHTING_SHIELD_(HEROIC_TIER))",
    source: "Core",
    categories: ["Implement Proficiency (Fighting Shield (heroic tier))", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(FIGHTING_SHIELD_(HEROIC_TIER))"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Flail group)"] = new RulesElement({
    name: "Implement Proficiency (Flail group)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(FLAIL_GROUP)",
    source: "Core",
    categories: ["Implement Proficiency (Flail group)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(FLAIL_GROUP)"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(FLAIL)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(HEAVY_FLAIL)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(WHIP)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(SPIKED_CHAIN)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(SCOURGE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(TRIPLE-HEADED_FLAIL)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(DOUBLE_FLAIL)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(NET)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(BOLA)"]);
    }
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Flail)"] = new RulesElement({
    name: "Implement Proficiency (Flail)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(FLAIL)",
    source: "Core",
    categories: ["Implement Proficiency (Flail)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(FLAIL)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Fullblade)"] = new RulesElement({
    name: "Implement Proficiency (Fullblade)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(FULLBLADE)",
    source: "Core",
    categories: ["Implement Proficiency (Fullblade)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(FULLBLADE)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Garrote)"] = new RulesElement({
    name: "Implement Proficiency (Garrote)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(GARROTE)",
    source: "Core",
    categories: ["Implement Proficiency (Garrote)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(GARROTE)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Glaive)"] = new RulesElement({
    name: "Implement Proficiency (Glaive)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(GLAIVE)",
    source: "Core",
    categories: ["Implement Proficiency (Glaive)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(GLAIVE)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Greataxe)"] = new RulesElement({
    name: "Implement Proficiency (Greataxe)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(GREATAXE)",
    source: "Core",
    categories: ["Implement Proficiency (Greataxe)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(GREATAXE)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Greatbow)"] = new RulesElement({
    name: "Implement Proficiency (Greatbow)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(GREATBOW)",
    source: "Core",
    categories: ["Implement Proficiency (Greatbow)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(GREATBOW)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Greatclub)"] = new RulesElement({
    name: "Implement Proficiency (Greatclub)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(GREATCLUB)",
    source: "Core",
    categories: ["Implement Proficiency (Greatclub)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(GREATCLUB)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Greatspear)"] = new RulesElement({
    name: "Implement Proficiency (Greatspear)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(GREATSPEAR)",
    source: "Core",
    categories: ["Implement Proficiency (Greatspear)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(GREATSPEAR)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Greatsword)"] = new RulesElement({
    name: "Implement Proficiency (Greatsword)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(GREATSWORD)",
    source: "Core",
    categories: ["Implement Proficiency (Greatsword)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(GREATSWORD)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Halberd)"] = new RulesElement({
    name: "Implement Proficiency (Halberd)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(HALBERD)",
    source: "Core",
    categories: ["Implement Proficiency (Halberd)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(HALBERD)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Hammer group)"] = new RulesElement({
    name: "Implement Proficiency (Hammer group)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(HAMMER_GROUP)",
    source: "Core",
    categories: ["Implement Proficiency (Hammer group)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(HAMMER_GROUP)"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(THROWING_HAMMER)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(WARHAMMER)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(MAUL)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(CRAGHAMMER)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(MORDENKRAD)"]);
    }
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Hand Crossbow)"] = new RulesElement({
    name: "Implement Proficiency (Hand Crossbow)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(HAND_CROSSBOW)",
    source: "Core",
    categories: ["Implement Proficiency (Hand Crossbow)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(HAND_CROSSBOW)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Handaxe)"] = new RulesElement({
    name: "Implement Proficiency (Handaxe)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(HANDAXE)",
    source: "Core",
    categories: ["Implement Proficiency (Handaxe)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(HANDAXE)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Heavy Blade group)"] = new RulesElement({
    name: "Implement Proficiency (Heavy Blade group)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(HEAVY_BLADE_GROUP)",
    source: "Core",
    categories: ["Implement Proficiency (Heavy Blade group)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(HEAVY_BLADE_GROUP)"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(SCYTHE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(SCIMITAR)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(LONGSWORD)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(GLAIVE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(GREATSWORD)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(BASTARD_SWORD)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(FALCHION)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(BROADSWORD)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(KHOPESH)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(FULLBLADE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(DROW_LONG_KNIFE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(TALENTA_TANGAT)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(TALENTA_SHARRASH)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(DOUBLE_SCIMITAR)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(ZULAAT)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(FIGHTING_SHIELD_(HEROIC_TIER))"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(SUN_SHIELD_(PARAGON_TIER))"]);
    }
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Heavy flail)"] = new RulesElement({
    name: "Implement Proficiency (Heavy flail)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(HEAVY_FLAIL)",
    source: "Core",
    categories: ["Implement Proficiency (Heavy flail)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(HEAVY_FLAIL)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Heavy war pick)"] = new RulesElement({
    name: "Implement Proficiency (Heavy war pick)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(HEAVY_WAR_PICK)",
    source: "Core",
    categories: ["Implement Proficiency (Heavy war pick)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(HEAVY_WAR_PICK)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Holy Symbol)"] = new RulesElement({
    name: "Implement Proficiency (Holy Symbol)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(HOLY_SYMBOL)",
    source: "Core",
    categories: ["Implement Proficiency (Holy Symbol)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(HOLY_SYMBOL)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Instrument)"] = new RulesElement({
    name: "Implement Proficiency (Instrument)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(INSTRUMENT)",
    source: "Core",
    categories: ["Implement Proficiency (Instrument)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(INSTRUMENT)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Javelin)"] = new RulesElement({
    name: "Implement Proficiency (Javelin)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(JAVELIN)",
    source: "Core",
    categories: ["Implement Proficiency (Javelin)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(JAVELIN)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Katar)"] = new RulesElement({
    name: "Implement Proficiency (Katar)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(KATAR)",
    source: "Core",
    categories: ["Implement Proficiency (Katar)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(KATAR)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Khopesh)"] = new RulesElement({
    name: "Implement Proficiency (Khopesh)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(KHOPESH)",
    source: "Core",
    categories: ["Implement Proficiency (Khopesh)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(KHOPESH)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Ki Focuses)"] = new RulesElement({
    name: "Implement Proficiency (Ki Focuses)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(KI_FOCUSES)",
    source: "Core",
    categories: ["Implement Proficiency (Ki Focuses)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(KI_FOCUSES)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Kukri)"] = new RulesElement({
    name: "Implement Proficiency (Kukri)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(KUKRI)",
    source: "Core",
    categories: ["Implement Proficiency (Kukri)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(KUKRI)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Light Blade group)"] = new RulesElement({
    name: "Implement Proficiency (Light Blade group)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(LIGHT_BLADE_GROUP)",
    source: "Core",
    categories: ["Implement Proficiency (Light Blade group)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(LIGHT_BLADE_GROUP)"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(DAGGER)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(SICKLE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(SHORT_SWORD)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(KATAR)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(RAPIER)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(SHURIKEN)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(KUKRI)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(PARRYING_DAGGER)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(SPIKED_SHIELD)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(DOUBLE_SWORD)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(CUTTING_WHEEL)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(TALENTA_BOOMERANG)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(XEN'DRIK_BOOMERANG)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(CLAW_FIGHTER_CLAW)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(SHADOWBLADE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(CLIMBING_CLAW)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(FERAL_ARMOR_CLAW)"]);
    }
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Light war pick)"] = new RulesElement({
    name: "Implement Proficiency (Light war pick)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(LIGHT_WAR_PICK)",
    source: "Core",
    categories: ["Implement Proficiency (Light war pick)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(LIGHT_WAR_PICK)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Longbow)"] = new RulesElement({
    name: "Implement Proficiency (Longbow)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(LONGBOW)",
    source: "Core",
    categories: ["Implement Proficiency (Longbow)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(LONGBOW)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Longspear)"] = new RulesElement({
    name: "Implement Proficiency (Longspear)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(LONGSPEAR)",
    source: "Core",
    categories: ["Implement Proficiency (Longspear)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(LONGSPEAR)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Longsword)"] = new RulesElement({
    name: "Implement Proficiency (Longsword)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(LONGSWORD)",
    source: "Core",
    categories: ["Implement Proficiency (Longsword)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(LONGSWORD)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Mace group)"] = new RulesElement({
    name: "Implement Proficiency (Mace group)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(MACE_GROUP)",
    source: "Core",
    categories: ["Implement Proficiency (Mace group)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(MACE_GROUP)"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(CLUB)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(MACE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(GREATCLUB)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(MORNINGSTAR)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(BATTLEFIST)"]);
    }
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Mace)"] = new RulesElement({
    name: "Implement Proficiency (Mace)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(MACE)",
    source: "Core",
    categories: ["Implement Proficiency (Mace)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(MACE)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Maul)"] = new RulesElement({
    name: "Implement Proficiency (Maul)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(MAUL)",
    source: "Core",
    categories: ["Implement Proficiency (Maul)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(MAUL)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Monk Unarmed Strike)"] = new RulesElement({
    name: "Implement Proficiency (Monk Unarmed Strike)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(MONK_UNARMED_STRIKE)",
    source: "Core",
    categories: ["Implement Proficiency (Monk Unarmed Strike)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(MONK_UNARMED_STRIKE)"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Mordenkrad)"] = new RulesElement({
    name: "Implement Proficiency (Mordenkrad)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(MORDENKRAD)",
    source: "Core",
    categories: ["Implement Proficiency (Mordenkrad)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(MORDENKRAD)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Morningstar)"] = new RulesElement({
    name: "Implement Proficiency (Morningstar)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(MORNINGSTAR)",
    source: "Core",
    categories: ["Implement Proficiency (Morningstar)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(MORNINGSTAR)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Net)"] = new RulesElement({
    name: "Implement Proficiency (Net)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(NET)",
    source: "Core",
    categories: ["Implement Proficiency (Net)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(NET)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Orb)"] = new RulesElement({
    name: "Implement Proficiency (Orb)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(ORB)",
    source: "Core",
    categories: ["Implement Proficiency (Orb)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(ORB)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Parrying dagger)"] = new RulesElement({
    name: "Implement Proficiency (Parrying dagger)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(PARRYING_DAGGER)",
    source: "Core",
    categories: ["Implement Proficiency (Parrying dagger)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(PARRYING_DAGGER)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Pick group)"] = new RulesElement({
    name: "Implement Proficiency (Pick group)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(PICK_GROUP)",
    source: "Core",
    categories: ["Implement Proficiency (Pick group)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(PICK_GROUP)"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(WAR_PICK)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(LIGHT_WAR_PICK)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(HEAVY_WAR_PICK)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(DRAGONTOOTH_SHIELD_(HEROIC_TIER))"]);
    }
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Polearm group)"] = new RulesElement({
    name: "Implement Proficiency (Polearm group)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(POLEARM_GROUP)",
    source: "Core",
    categories: ["Implement Proficiency (Polearm group)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(POLEARM_GROUP)"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(GLAIVE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(HALBERD)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(LONGSPEAR)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(GREATSPEAR)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(TALENTA_SHARRASH)"]);
    }
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Proficient Weapons)"] = new RulesElement({
    name: "Implement Proficiency (Proficient Weapons)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(PROFICIENT_WEAPONS)",
    source: "Core",
    categories: ["Implement Proficiency (Proficient Weapons)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(PROFICIENT_WEAPONS)"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(CLUB)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(DAGGER)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(JAVELIN)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(MACE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(SICKLE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(SPEAR)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(GREATCLUB)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(MORNINGSTAR)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(STAFF)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(SCYTHE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(BATTLEAXE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(HANDAXE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(FLAIL)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(THROWING_HAMMER)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(WARHAMMER)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(WAR_PICK)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(SCIMITAR)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(LONGSWORD)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(SHORT_SWORD)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(GREATAXE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(HEAVY_FLAIL)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(GLAIVE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(HALBERD)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(MAUL)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(LONGSPEAR)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(GREATSWORD)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(KATAR)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(RAPIER)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(BASTARD_SWORD)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(WHIP)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(SPIKED_CHAIN)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(HAND_CROSSBOW)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(SLING)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(CROSSBOW)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(SHORTBOW)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(LONGBOW)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(SHURIKEN)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(FALCHION)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(SPIKED_GAUNTLET)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(BROADSWORD)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(KHOPESH)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(LIGHT_WAR_PICK)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(SCOURGE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(TRIDENT)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(HEAVY_WAR_PICK)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(CRAGHAMMER)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(KUKRI)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(PARRYING_DAGGER)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(SPIKED_SHIELD)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(TRATNYR)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(TRIPLE-HEADED_FLAIL)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(WARAXE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(EXECUTION_AXE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(FULLBLADE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(GREATSPEAR)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(MORDENKRAD)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(DOUBLE_AXE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(DOUBLE_FLAIL)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(DOUBLE_SWORD)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(URGROSH)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(REPEATING_CROSSBOW)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(GREATBOW)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(SUPERIOR_CROSSBOW)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(NET)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(BOLA)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(BLOWGUN)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(GARROTE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(CUTTING_WHEEL)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(DROW_LONG_KNIFE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(TALENTA_TANGAT)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(TALENTA_SHARRASH)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(DOUBLE_SCIMITAR)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(ZULAAT)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(TALENTA_BOOMERANG)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(XEN'DRIK_BOOMERANG)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(MONK_UNARMED_STRIKE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(BATTLEFIST)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(CLAW_FIGHTER_CLAW)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(SHADOWBLADE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(CLIMBING_CLAW)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(FERAL_ARMOR_CLAW)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(BOAR_TUSK)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(DRAGONTOOTH_SHIELD_(HEROIC_TIER))"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(FIGHTING_SHIELD_(HEROIC_TIER))"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(SOUL_SHIELD_(PARAGON_TIER))"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(SUN_SHIELD_(PARAGON_TIER))"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(ROD_OF_SEVEN_PARTS_(WEAPON))"]);
    }
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Quarterstaff)"] = new RulesElement({
    name: "Implement Proficiency (Quarterstaff)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(QUARTERSTAFF)",
    source: "Core",
    categories: ["Implement Proficiency (Quarterstaff)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(QUARTERSTAFF)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Rapier)"] = new RulesElement({
    name: "Implement Proficiency (Rapier)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(RAPIER)",
    source: "Core",
    categories: ["Implement Proficiency (Rapier)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(RAPIER)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Repeating crossbow)"] = new RulesElement({
    name: "Implement Proficiency (Repeating crossbow)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(REPEATING_CROSSBOW)",
    source: "Core",
    categories: ["Implement Proficiency (Repeating crossbow)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(REPEATING_CROSSBOW)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Rod of Seven Parts (Weapon))"] = new RulesElement({
    name: "Implement Proficiency (Rod of Seven Parts (Weapon))",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(ROD_OF_SEVEN_PARTS_(WEAPON))",
    source: "Core",
    categories: ["Implement Proficiency (Rod of Seven Parts (Weapon))", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(ROD_OF_SEVEN_PARTS_(WEAPON))"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Rod)"] = new RulesElement({
    name: "Implement Proficiency (Rod)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(ROD)",
    source: "Core",
    categories: ["Implement Proficiency (Rod)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(ROD)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Scimitar)"] = new RulesElement({
    name: "Implement Proficiency (Scimitar)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(SCIMITAR)",
    source: "Core",
    categories: ["Implement Proficiency (Scimitar)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(SCIMITAR)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Scourge)"] = new RulesElement({
    name: "Implement Proficiency (Scourge)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(SCOURGE)",
    source: "Core",
    categories: ["Implement Proficiency (Scourge)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(SCOURGE)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Scythe)"] = new RulesElement({
    name: "Implement Proficiency (Scythe)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(SCYTHE)",
    source: "Core",
    categories: ["Implement Proficiency (Scythe)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(SCYTHE)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Shadowblade)"] = new RulesElement({
    name: "Implement Proficiency (Shadowblade)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(SHADOWBLADE)",
    source: "Core",
    categories: ["Implement Proficiency (Shadowblade)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(SHADOWBLADE)"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Short sword)"] = new RulesElement({
    name: "Implement Proficiency (Short sword)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(SHORT_SWORD)",
    source: "Core",
    categories: ["Implement Proficiency (Short sword)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(SHORT_SWORD)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Shortbow)"] = new RulesElement({
    name: "Implement Proficiency (Shortbow)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(SHORTBOW)",
    source: "Core",
    categories: ["Implement Proficiency (Shortbow)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(SHORTBOW)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Shuriken)"] = new RulesElement({
    name: "Implement Proficiency (Shuriken)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(SHURIKEN)",
    source: "Core",
    categories: ["Implement Proficiency (Shuriken)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(SHURIKEN)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Sickle)"] = new RulesElement({
    name: "Implement Proficiency (Sickle)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(SICKLE)",
    source: "Core",
    categories: ["Implement Proficiency (Sickle)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(SICKLE)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Sling group)"] = new RulesElement({
    name: "Implement Proficiency (Sling group)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(SLING_GROUP)",
    source: "Core",
    categories: ["Implement Proficiency (Sling group)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(SLING_GROUP)"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(SLING)"]);
    }
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Sling)"] = new RulesElement({
    name: "Implement Proficiency (Sling)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(SLING)",
    source: "Core",
    categories: ["Implement Proficiency (Sling)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(SLING)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Soul Shield (paragon tier))"] = new RulesElement({
    name: "Implement Proficiency (Soul Shield (paragon tier))",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(SOUL_SHIELD_(PARAGON_TIER))",
    source: "Core",
    categories: ["Implement Proficiency (Soul Shield (paragon tier))", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(SOUL_SHIELD_(PARAGON_TIER))"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Spear group)"] = new RulesElement({
    name: "Implement Proficiency (Spear group)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(SPEAR_GROUP)",
    source: "Core",
    categories: ["Implement Proficiency (Spear group)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(SPEAR_GROUP)"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(JAVELIN)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(SPEAR)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(LONGSPEAR)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(TRIDENT)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(TRATNYR)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(GREATSPEAR)"]);
    }
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Spear)"] = new RulesElement({
    name: "Implement Proficiency (Spear)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(SPEAR)",
    source: "Core",
    categories: ["Implement Proficiency (Spear)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(SPEAR)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Spiked chain)"] = new RulesElement({
    name: "Implement Proficiency (Spiked chain)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(SPIKED_CHAIN)",
    source: "Core",
    categories: ["Implement Proficiency (Spiked chain)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(SPIKED_CHAIN)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Spiked gauntlet)"] = new RulesElement({
    name: "Implement Proficiency (Spiked gauntlet)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(SPIKED_GAUNTLET)",
    source: "Core",
    categories: ["Implement Proficiency (Spiked gauntlet)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(SPIKED_GAUNTLET)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Spiked shield)"] = new RulesElement({
    name: "Implement Proficiency (Spiked shield)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(SPIKED_SHIELD)",
    source: "Core",
    categories: ["Implement Proficiency (Spiked shield)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(SPIKED_SHIELD)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Staff group)"] = new RulesElement({
    name: "Implement Proficiency (Staff group)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(STAFF_GROUP)",
    source: "Core",
    categories: ["Implement Proficiency (Staff group)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(STAFF_GROUP)"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(QUARTERSTAFF)"]);
    }
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Staff)"] = new RulesElement({
    name: "Implement Proficiency (Staff)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(STAFF)",
    source: "Core",
    categories: ["Implement Proficiency (Staff)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(STAFF)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Sun Shield (paragon tier))"] = new RulesElement({
    name: "Implement Proficiency (Sun Shield (paragon tier))",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(SUN_SHIELD_(PARAGON_TIER))",
    source: "Core",
    categories: ["Implement Proficiency (Sun Shield (paragon tier))", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(SUN_SHIELD_(PARAGON_TIER))"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Superior crossbow)"] = new RulesElement({
    name: "Implement Proficiency (Superior crossbow)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(SUPERIOR_CROSSBOW)",
    source: "Core",
    categories: ["Implement Proficiency (Superior crossbow)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(SUPERIOR_CROSSBOW)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Talenta Boomerang)"] = new RulesElement({
    name: "Implement Proficiency (Talenta Boomerang)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(TALENTA_BOOMERANG)",
    source: "Core",
    categories: ["Implement Proficiency (Talenta Boomerang)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(TALENTA_BOOMERANG)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Talenta Sharrash)"] = new RulesElement({
    name: "Implement Proficiency (Talenta Sharrash)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(TALENTA_SHARRASH)",
    source: "Core",
    categories: ["Implement Proficiency (Talenta Sharrash)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(TALENTA_SHARRASH)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Talenta Tangat)"] = new RulesElement({
    name: "Implement Proficiency (Talenta Tangat)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(TALENTA_TANGAT)",
    source: "Core",
    categories: ["Implement Proficiency (Talenta Tangat)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(TALENTA_TANGAT)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Throwing hammer)"] = new RulesElement({
    name: "Implement Proficiency (Throwing hammer)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(THROWING_HAMMER)",
    source: "Core",
    categories: ["Implement Proficiency (Throwing hammer)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(THROWING_HAMMER)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Tome)"] = new RulesElement({
    name: "Implement Proficiency (Tome)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(TOME)",
    source: "Core",
    categories: ["Implement Proficiency (Tome)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(TOME)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Totem)"] = new RulesElement({
    name: "Implement Proficiency (Totem)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(TOTEM)",
    source: "Core",
    categories: ["Implement Proficiency (Totem)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(TOTEM)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Tratnyr)"] = new RulesElement({
    name: "Implement Proficiency (Tratnyr)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(TRATNYR)",
    source: "Core",
    categories: ["Implement Proficiency (Tratnyr)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(TRATNYR)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Trident)"] = new RulesElement({
    name: "Implement Proficiency (Trident)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(TRIDENT)",
    source: "Core",
    categories: ["Implement Proficiency (Trident)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(TRIDENT)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Triple-headed flail)"] = new RulesElement({
    name: "Implement Proficiency (Triple-headed flail)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(TRIPLE-HEADED_FLAIL)",
    source: "Core",
    categories: ["Implement Proficiency (Triple-headed flail)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(TRIPLE-HEADED_FLAIL)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Unarmed group)"] = new RulesElement({
    name: "Implement Proficiency (Unarmed group)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(UNARMED_GROUP)",
    source: "Core",
    categories: ["Implement Proficiency (Unarmed group)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(UNARMED_GROUP)"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(SPIKED_GAUNTLET)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(MONK_UNARMED_STRIKE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(BOAR_TUSK)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(ROD_OF_SEVEN_PARTS_(WEAPON))"]);
    }
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Urgrosh)"] = new RulesElement({
    name: "Implement Proficiency (Urgrosh)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(URGROSH)",
    source: "Core",
    categories: ["Implement Proficiency (Urgrosh)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(URGROSH)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Wand)"] = new RulesElement({
    name: "Implement Proficiency (Wand)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(WAND)",
    source: "Core",
    categories: ["Implement Proficiency (Wand)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(WAND)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (War Pick)"] = new RulesElement({
    name: "Implement Proficiency (War Pick)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(WAR_PICK)",
    source: "Core",
    categories: ["Implement Proficiency (War Pick)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(WAR_PICK)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Waraxe)"] = new RulesElement({
    name: "Implement Proficiency (Waraxe)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(WARAXE)",
    source: "Core",
    categories: ["Implement Proficiency (Waraxe)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(WARAXE)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Warhammer)"] = new RulesElement({
    name: "Implement Proficiency (Warhammer)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(WARHAMMER)",
    source: "Core",
    categories: ["Implement Proficiency (Warhammer)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(WARHAMMER)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Whip)"] = new RulesElement({
    name: "Implement Proficiency (Whip)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(WHIP)",
    source: "Core",
    categories: ["Implement Proficiency (Whip)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(WHIP)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Xen'drik Boomerang)"] = new RulesElement({
    name: "Implement Proficiency (Xen'drik Boomerang)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(XEN'DRIK_BOOMERANG)",
    source: "Core",
    categories: ["Implement Proficiency (Xen'drik Boomerang)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(XEN'DRIK_BOOMERANG)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Implement Proficiency (Zulaat)"] = new RulesElement({
    name: "Implement Proficiency (Zulaat)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(ZULAAT)",
    source: "Core",
    categories: ["Implement Proficiency (Zulaat)", "ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(ZULAAT)", "ID_FMP_CATEGORY_25", "implement"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Military Axe"] = new RulesElement({
    name: "Military Axe",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_MILITARY_AXE",
    source: "Core",
    categories: ["Military Axe", "ID_INTERNAL_PROFICIENCY_MILITARY_AXE"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(BATTLEAXE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(HANDAXE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(GREATAXE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(HALBERD)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(KHOPESH)"]);
    }
  });
  byID[te.id] = te;
  
  te = Proficiency["Military Hammer"] = new RulesElement({
    name: "Military Hammer",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_MILITARY_HAMMER",
    source: "Core",
    categories: ["Military Hammer", "ID_INTERNAL_PROFICIENCY_MILITARY_HAMMER"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(THROWING_HAMMER)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(WARHAMMER)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(MAUL)"]);
    }
  });
  byID[te.id] = te;
  
  te = Proficiency["Military Heavy Blade"] = new RulesElement({
    name: "Military Heavy Blade",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_MILITARY_HEAVY_BLADE",
    source: "Core",
    categories: ["Military Heavy Blade", "ID_INTERNAL_PROFICIENCY_MILITARY_HEAVY_BLADE"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SCIMITAR)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(LONGSWORD)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(GLAIVE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(GREATSWORD)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(FALCHION)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(BROADSWORD)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(KHOPESH)"]);
    }
  });
  byID[te.id] = te;
  
  te = Proficiency["Military Light Blade"] = new RulesElement({
    name: "Military Light Blade",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_MILITARY_LIGHT_BLADE",
    source: "Core",
    categories: ["Military Light Blade", "ID_INTERNAL_PROFICIENCY_MILITARY_LIGHT_BLADE"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SHORT_SWORD)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(RAPIER)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(FERAL_ARMOR_CLAW)"]);
    }
  });
  byID[te.id] = te;
  
  te = Proficiency["Military Mace"] = new RulesElement({
    name: "Military Mace",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_MILITARY_MACE",
    source: "Core",
    categories: ["Military Mace", "ID_INTERNAL_PROFICIENCY_MILITARY_MACE"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Military Melee"] = new RulesElement({
    name: "Military Melee",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_MILITARY_MELEE",
    source: "Core",
    categories: ["Military Melee", "ID_INTERNAL_PROFICIENCY_MILITARY_MELEE"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(BATTLEAXE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(HANDAXE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(FLAIL)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(THROWING_HAMMER)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(WARHAMMER)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(WAR_PICK)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SCIMITAR)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(LONGSWORD)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SHORT_SWORD)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(GREATAXE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(HEAVY_FLAIL)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(GLAIVE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(HALBERD)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(MAUL)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(LONGSPEAR)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(GREATSWORD)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(RAPIER)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(FALCHION)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(BROADSWORD)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(KHOPESH)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(LIGHT_WAR_PICK)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SCOURGE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(TRIDENT)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(HEAVY_WAR_PICK)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(FERAL_ARMOR_CLAW)"]);
    }
  });
  byID[te.id] = te;
  
  te = Proficiency["Military Pick"] = new RulesElement({
    name: "Military Pick",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_MILITARY_PICK",
    source: "Core",
    categories: ["Military Pick", "ID_INTERNAL_PROFICIENCY_MILITARY_PICK"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(WAR_PICK)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(LIGHT_WAR_PICK)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(HEAVY_WAR_PICK)"]);
    }
  });
  byID[te.id] = te;
  
  te = Proficiency["Military Ranged"] = new RulesElement({
    name: "Military Ranged",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_MILITARY_RANGED",
    source: "Core",
    categories: ["Military Ranged", "ID_INTERNAL_PROFICIENCY_MILITARY_RANGED"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SHORTBOW)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(LONGBOW)"]);
    }
  });
  byID[te.id] = te;
  
  te = Proficiency["Military Spear"] = new RulesElement({
    name: "Military Spear",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_MILITARY_SPEAR",
    source: "Core",
    categories: ["Military Spear", "ID_INTERNAL_PROFICIENCY_MILITARY_SPEAR"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(LONGSPEAR)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(TRIDENT)"]);
    }
  });
  byID[te.id] = te;
  
  te = Proficiency["One-Handed Military Heavy Blade"] = new RulesElement({
    name: "One-Handed Military Heavy Blade",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_ONE-HANDED_MILITARY_HEAVY_BLADE",
    source: "Core",
    categories: ["One-Handed Military Heavy Blade", "ID_INTERNAL_PROFICIENCY_ONE-HANDED_MILITARY_HEAVY_BLADE"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SCIMITAR)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(LONGSWORD)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(BROADSWORD)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(KHOPESH)"]);
    }
  });
  byID[te.id] = te;
  
  te = Proficiency["Shield Proficiency (Heavy)"] = new RulesElement({
    name: "Shield Proficiency (Heavy)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_SHIELD_PROFICIENCY_(HEAVY)",
    source: "Core",
    categories: ["Shield Proficiency (Heavy)", "ID_INTERNAL_PROFICIENCY_SHIELD_PROFICIENCY_(HEAVY)"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Shield Proficiency (Light)"] = new RulesElement({
    name: "Shield Proficiency (Light)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_SHIELD_PROFICIENCY_(LIGHT)",
    source: "Core",
    categories: ["Shield Proficiency (Light)", "ID_INTERNAL_PROFICIENCY_SHIELD_PROFICIENCY_(LIGHT)"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Simple Heavy Blade"] = new RulesElement({
    name: "Simple Heavy Blade",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_SIMPLE_HEAVY_BLADE",
    source: "Core",
    categories: ["Simple Heavy Blade", "ID_INTERNAL_PROFICIENCY_SIMPLE_HEAVY_BLADE"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SCYTHE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(FIGHTING_SHIELD_(HEROIC_TIER))"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SUN_SHIELD_(PARAGON_TIER))"]);
    }
  });
  byID[te.id] = te;
  
  te = Proficiency["Simple Melee"] = new RulesElement({
    name: "Simple Melee",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_SIMPLE_MELEE",
    source: "Core",
    categories: ["Simple Melee", "ID_INTERNAL_PROFICIENCY_SIMPLE_MELEE"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(CLUB)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(DAGGER)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(JAVELIN)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(MACE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SICKLE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SPEAR)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(GREATCLUB)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(MORNINGSTAR)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(QUARTERSTAFF)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SCYTHE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SPIKED_GAUNTLET)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(CLAW_FIGHTER_CLAW)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SHADOWBLADE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(CLIMBING_CLAW)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(DRAGONTOOTH_SHIELD_(HEROIC_TIER))"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(FIGHTING_SHIELD_(HEROIC_TIER))"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SOUL_SHIELD_(PARAGON_TIER))"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SUN_SHIELD_(PARAGON_TIER))"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(ROD_OF_SEVEN_PARTS_(WEAPON))"]);
    }
  });
  byID[te.id] = te;
  
  te = Proficiency["Simple One-Handed Melee"] = new RulesElement({
    name: "Simple One-Handed Melee",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_SIMPLE_ONE-HANDED_MELEE",
    source: "Core",
    categories: ["Simple One-Handed Melee", "ID_INTERNAL_PROFICIENCY_SIMPLE_ONE-HANDED_MELEE"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(CLUB)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(DAGGER)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(JAVELIN)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(MACE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SICKLE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SPEAR)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SPIKED_GAUNTLET)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(CLAW_FIGHTER_CLAW)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SHADOWBLADE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(CLIMBING_CLAW)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(DRAGONTOOTH_SHIELD_(HEROIC_TIER))"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(FIGHTING_SHIELD_(HEROIC_TIER))"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SOUL_SHIELD_(PARAGON_TIER))"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SUN_SHIELD_(PARAGON_TIER))"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(ROD_OF_SEVEN_PARTS_(WEAPON))"]);
    }
  });
  byID[te.id] = te;
  
  te = Proficiency["Simple Ranged"] = new RulesElement({
    name: "Simple Ranged",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_SIMPLE_RANGED",
    source: "Core",
    categories: ["Simple Ranged", "ID_INTERNAL_PROFICIENCY_SIMPLE_RANGED"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(HAND_CROSSBOW)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SLING)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(CROSSBOW)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(REPEATING_CROSSBOW)"]);
    }
  });
  byID[te.id] = te;
  
  te = Proficiency["Simple Spear"] = new RulesElement({
    name: "Simple Spear",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_SIMPLE_SPEAR",
    source: "Core",
    categories: ["Simple Spear", "ID_INTERNAL_PROFICIENCY_SIMPLE_SPEAR"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(JAVELIN)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SPEAR)"]);
    }
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Group (Axe)"] = new RulesElement({
    name: "Weapon Group (Axe)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_GROUP_(AXE)",
    source: "Core",
    categories: ["Weapon Group (Axe)", "ID_INTERNAL_PROFICIENCY_WEAPON_GROUP_(AXE)"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(BATTLEAXE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(HANDAXE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(GREATAXE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(HALBERD)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(KHOPESH)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(WARAXE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(EXECUTION_AXE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(DOUBLE_AXE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(URGROSH)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SOUL_SHIELD_(PARAGON_TIER))"]);
    }
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Group (Blowgun)"] = new RulesElement({
    name: "Weapon Group (Blowgun)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_GROUP_(BLOWGUN)",
    source: "Core",
    categories: ["Weapon Group (Blowgun)", "ID_INTERNAL_PROFICIENCY_WEAPON_GROUP_(BLOWGUN)"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(BLOWGUN)"]);
    }
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Group (Bow)"] = new RulesElement({
    name: "Weapon Group (Bow)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_GROUP_(BOW)",
    source: "Core",
    categories: ["Weapon Group (Bow)", "ID_INTERNAL_PROFICIENCY_WEAPON_GROUP_(BOW)"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SHORTBOW)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(LONGBOW)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(GREATBOW)"]);
    }
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Group (Crossbow)"] = new RulesElement({
    name: "Weapon Group (Crossbow)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_GROUP_(CROSSBOW)",
    source: "Core",
    categories: ["Weapon Group (Crossbow)", "ID_INTERNAL_PROFICIENCY_WEAPON_GROUP_(CROSSBOW)"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(HAND_CROSSBOW)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(CROSSBOW)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(REPEATING_CROSSBOW)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SUPERIOR_CROSSBOW)"]);
    }
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Group (Flail)"] = new RulesElement({
    name: "Weapon Group (Flail)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_GROUP_(FLAIL)",
    source: "Core",
    categories: ["Weapon Group (Flail)", "ID_INTERNAL_PROFICIENCY_WEAPON_GROUP_(FLAIL)"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(FLAIL)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(HEAVY_FLAIL)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(WHIP)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SPIKED_CHAIN)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SCOURGE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(TRIPLE-HEADED_FLAIL)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(DOUBLE_FLAIL)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(NET)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(BOLA)"]);
    }
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Group (Garrote)"] = new RulesElement({
    name: "Weapon Group (Garrote)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_GROUP_(GARROTE)",
    source: "Core",
    categories: ["Weapon Group (Garrote)", "ID_INTERNAL_PROFICIENCY_WEAPON_GROUP_(GARROTE)"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(GARROTE)"]);
    }
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Group (Hammer)"] = new RulesElement({
    name: "Weapon Group (Hammer)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_GROUP_(HAMMER)",
    source: "Core",
    categories: ["Weapon Group (Hammer)", "ID_INTERNAL_PROFICIENCY_WEAPON_GROUP_(HAMMER)"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(THROWING_HAMMER)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(WARHAMMER)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(MAUL)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(CRAGHAMMER)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(MORDENKRAD)"]);
    }
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Group (Heavy Blade)"] = new RulesElement({
    name: "Weapon Group (Heavy Blade)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_GROUP_(HEAVY_BLADE)",
    source: "Core",
    categories: ["Weapon Group (Heavy Blade)", "ID_INTERNAL_PROFICIENCY_WEAPON_GROUP_(HEAVY_BLADE)"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SCYTHE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SCIMITAR)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(LONGSWORD)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(GLAIVE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(GREATSWORD)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(BASTARD_SWORD)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(FALCHION)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(BROADSWORD)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(KHOPESH)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(FULLBLADE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(DROW_LONG_KNIFE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(TALENTA_TANGAT)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(TALENTA_SHARRASH)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(DOUBLE_SCIMITAR)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(ZULAAT)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(FIGHTING_SHIELD_(HEROIC_TIER))"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SUN_SHIELD_(PARAGON_TIER))"]);
    }
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Group (Light Blade)"] = new RulesElement({
    name: "Weapon Group (Light Blade)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_GROUP_(LIGHT_BLADE)",
    source: "Core",
    categories: ["Weapon Group (Light Blade)", "ID_INTERNAL_PROFICIENCY_WEAPON_GROUP_(LIGHT_BLADE)"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(DAGGER)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SICKLE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SHORT_SWORD)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(KATAR)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(RAPIER)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SHURIKEN)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(KUKRI)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(PARRYING_DAGGER)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SPIKED_SHIELD)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(DOUBLE_SWORD)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(CUTTING_WHEEL)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(TALENTA_BOOMERANG)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(XEN'DRIK_BOOMERANG)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(CLAW_FIGHTER_CLAW)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SHADOWBLADE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(CLIMBING_CLAW)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(FERAL_ARMOR_CLAW)"]);
    }
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Group (Mace)"] = new RulesElement({
    name: "Weapon Group (Mace)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_GROUP_(MACE)",
    source: "Core",
    categories: ["Weapon Group (Mace)", "ID_INTERNAL_PROFICIENCY_WEAPON_GROUP_(MACE)"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(CLUB)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(MACE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(GREATCLUB)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(MORNINGSTAR)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(BATTLEFIST)"]);
    }
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Group (Pick)"] = new RulesElement({
    name: "Weapon Group (Pick)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_GROUP_(PICK)",
    source: "Core",
    categories: ["Weapon Group (Pick)", "ID_INTERNAL_PROFICIENCY_WEAPON_GROUP_(PICK)"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(WAR_PICK)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(LIGHT_WAR_PICK)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(HEAVY_WAR_PICK)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(DRAGONTOOTH_SHIELD_(HEROIC_TIER))"]);
    }
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Group (Polearm)"] = new RulesElement({
    name: "Weapon Group (Polearm)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_GROUP_(POLEARM)",
    source: "Core",
    categories: ["Weapon Group (Polearm)", "ID_INTERNAL_PROFICIENCY_WEAPON_GROUP_(POLEARM)"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(GLAIVE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(HALBERD)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(LONGSPEAR)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(GREATSPEAR)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(TALENTA_SHARRASH)"]);
    }
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Group (Sling)"] = new RulesElement({
    name: "Weapon Group (Sling)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_GROUP_(SLING)",
    source: "Core",
    categories: ["Weapon Group (Sling)", "ID_INTERNAL_PROFICIENCY_WEAPON_GROUP_(SLING)"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SLING)"]);
    }
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Group (Spear)"] = new RulesElement({
    name: "Weapon Group (Spear)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_GROUP_(SPEAR)",
    source: "Core",
    categories: ["Weapon Group (Spear)", "ID_INTERNAL_PROFICIENCY_WEAPON_GROUP_(SPEAR)"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(JAVELIN)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SPEAR)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(LONGSPEAR)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(TRIDENT)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(TRATNYR)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(GREATSPEAR)"]);
    }
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Group (Staff)"] = new RulesElement({
    name: "Weapon Group (Staff)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_GROUP_(STAFF)",
    source: "Core",
    categories: ["Weapon Group (Staff)", "ID_INTERNAL_PROFICIENCY_WEAPON_GROUP_(STAFF)"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(QUARTERSTAFF)"]);
    }
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Group (Unarmed)"] = new RulesElement({
    name: "Weapon Group (Unarmed)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_GROUP_(UNARMED)",
    source: "Core",
    categories: ["Weapon Group (Unarmed)", "ID_INTERNAL_PROFICIENCY_WEAPON_GROUP_(UNARMED)"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SPIKED_GAUNTLET)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(MONK_UNARMED_STRIKE)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(BOAR_TUSK)"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(ROD_OF_SEVEN_PARTS_(WEAPON))"]);
    }
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Bastard sword)"] = new RulesElement({
    name: "Weapon Proficiency (Bastard sword)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(BASTARD_SWORD)",
    source: "Core",
    categories: ["Weapon Proficiency (Bastard sword)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(BASTARD_SWORD)", "ID_FMP_WEAPON_GROUP_7", "Heavy Blade", "ID_INTERNAL_CATEGORY_SUPERIOR", "Superior", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Battleaxe)"] = new RulesElement({
    name: "Weapon Proficiency (Battleaxe)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(BATTLEAXE)",
    source: "Core",
    categories: ["Weapon Proficiency (Battleaxe)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(BATTLEAXE)", "ID_FMP_WEAPON_GROUP_8", "axe", "ID_INTERNAL_CATEGORY_MILITARY", "Military", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Battlefist)"] = new RulesElement({
    name: "Weapon Proficiency (Battlefist)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(BATTLEFIST)",
    source: "Core",
    categories: ["Weapon Proficiency (Battlefist)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(BATTLEFIST)", "ID_FMP_WEAPON_GROUP_1", "Mace", "ID_INTERNAL_CATEGORY_IMPROVISED", "Improvised", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Blowgun)"] = new RulesElement({
    name: "Weapon Proficiency (Blowgun)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(BLOWGUN)",
    source: "Core",
    categories: ["Weapon Proficiency (Blowgun)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(BLOWGUN)", "ID_FMP_WEAPON_GROUP_48", "Blowgun", "ID_INTERNAL_CATEGORY_SUPERIOR", "Superior", "ID_INTERNAL_CATEGORY_RANGED", "Ranged"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Boar Tusk)"] = new RulesElement({
    name: "Weapon Proficiency (Boar Tusk)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(BOAR_TUSK)",
    source: "Core",
    categories: ["Weapon Proficiency (Boar Tusk)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(BOAR_TUSK)", "ID_FMP_WEAPON_GROUP_27", "unarmed", "ID_INTERNAL_CATEGORY_IMPROVISED", "Improvised", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Bola)"] = new RulesElement({
    name: "Weapon Proficiency (Bola)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(BOLA)",
    source: "Core",
    categories: ["Weapon Proficiency (Bola)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(BOLA)", "ID_FMP_WEAPON_GROUP_10", "Flail", "ID_INTERNAL_CATEGORY_SUPERIOR", "Superior", "ID_INTERNAL_CATEGORY_RANGED", "Ranged"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Broadsword)"] = new RulesElement({
    name: "Weapon Proficiency (Broadsword)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(BROADSWORD)",
    source: "Core",
    categories: ["Weapon Proficiency (Broadsword)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(BROADSWORD)", "ID_FMP_WEAPON_GROUP_7", "Heavy Blade", "ID_INTERNAL_CATEGORY_MILITARY", "Military", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Claw Fighter Claw)"] = new RulesElement({
    name: "Weapon Proficiency (Claw Fighter Claw)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(CLAW_FIGHTER_CLAW)",
    source: "Core",
    categories: ["Weapon Proficiency (Claw Fighter Claw)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(CLAW_FIGHTER_CLAW)", "ID_FMP_WEAPON_GROUP_2", "light blade", "ID_INTERNAL_CATEGORY_SIMPLE", "Simple", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Climbing Claw)"] = new RulesElement({
    name: "Weapon Proficiency (Climbing Claw)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(CLIMBING_CLAW)",
    source: "Core",
    categories: ["Weapon Proficiency (Climbing Claw)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(CLIMBING_CLAW)", "ID_FMP_WEAPON_GROUP_2", "light blade", "ID_INTERNAL_CATEGORY_SIMPLE", "Simple", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Club)"] = new RulesElement({
    name: "Weapon Proficiency (Club)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(CLUB)",
    source: "Core",
    categories: ["Weapon Proficiency (Club)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(CLUB)", "ID_FMP_WEAPON_GROUP_1", "Mace", "ID_INTERNAL_CATEGORY_SIMPLE", "Simple", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Craghammer)"] = new RulesElement({
    name: "Weapon Proficiency (Craghammer)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(CRAGHAMMER)",
    source: "Core",
    categories: ["Weapon Proficiency (Craghammer)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(CRAGHAMMER)", "ID_FMP_WEAPON_GROUP_11", "hammer", "ID_INTERNAL_CATEGORY_SUPERIOR", "Superior", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Crossbow)"] = new RulesElement({
    name: "Weapon Proficiency (Crossbow)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(CROSSBOW)",
    source: "Core",
    categories: ["Weapon Proficiency (Crossbow)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(CROSSBOW)", "ID_FMP_WEAPON_GROUP_29", "Crossbow", "ID_INTERNAL_CATEGORY_SIMPLE", "Simple", "ID_INTERNAL_CATEGORY_RANGED", "Ranged"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Cutting Wheel)"] = new RulesElement({
    name: "Weapon Proficiency (Cutting Wheel)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(CUTTING_WHEEL)",
    source: "Core",
    categories: ["Weapon Proficiency (Cutting Wheel)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(CUTTING_WHEEL)", "ID_FMP_WEAPON_GROUP_2", "light blade", "ID_INTERNAL_CATEGORY_SUPERIOR", "Superior", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Dagger)"] = new RulesElement({
    name: "Weapon Proficiency (Dagger)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(DAGGER)",
    source: "Core",
    categories: ["Weapon Proficiency (Dagger)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(DAGGER)", "ID_FMP_WEAPON_GROUP_2", "light blade", "ID_INTERNAL_CATEGORY_SIMPLE", "Simple", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Double axe)"] = new RulesElement({
    name: "Weapon Proficiency (Double axe)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(DOUBLE_AXE)",
    source: "Core",
    categories: ["Weapon Proficiency (Double axe)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(DOUBLE_AXE)", "ID_FMP_WEAPON_GROUP_8", "axe", "ID_INTERNAL_CATEGORY_SUPERIOR", "Superior", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Double flail)"] = new RulesElement({
    name: "Weapon Proficiency (Double flail)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(DOUBLE_FLAIL)",
    source: "Core",
    categories: ["Weapon Proficiency (Double flail)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(DOUBLE_FLAIL)", "ID_FMP_WEAPON_GROUP_10", "Flail", "ID_INTERNAL_CATEGORY_SUPERIOR", "Superior", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Double Scimitar)"] = new RulesElement({
    name: "Weapon Proficiency (Double Scimitar)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(DOUBLE_SCIMITAR)",
    source: "Core",
    categories: ["Weapon Proficiency (Double Scimitar)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(DOUBLE_SCIMITAR)", "ID_FMP_WEAPON_GROUP_7", "Heavy Blade", "ID_INTERNAL_CATEGORY_SUPERIOR", "Superior", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Double sword)"] = new RulesElement({
    name: "Weapon Proficiency (Double sword)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(DOUBLE_SWORD)",
    source: "Core",
    categories: ["Weapon Proficiency (Double sword)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(DOUBLE_SWORD)", "ID_FMP_WEAPON_GROUP_2", "light blade", "ID_INTERNAL_CATEGORY_SUPERIOR", "Superior", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Dragontooth Shield (heroic tier))"] = new RulesElement({
    name: "Weapon Proficiency (Dragontooth Shield (heroic tier))",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(DRAGONTOOTH_SHIELD_(HEROIC_TIER))",
    source: "Core",
    categories: ["Weapon Proficiency (Dragontooth Shield (heroic tier))", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(DRAGONTOOTH_SHIELD_(HEROIC_TIER))", "ID_FMP_WEAPON_GROUP_13", "pick", "ID_INTERNAL_CATEGORY_SIMPLE", "Simple", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Drow Long Knife)"] = new RulesElement({
    name: "Weapon Proficiency (Drow Long Knife)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(DROW_LONG_KNIFE)",
    source: "Core",
    categories: ["Weapon Proficiency (Drow Long Knife)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(DROW_LONG_KNIFE)", "ID_FMP_WEAPON_GROUP_7", "Heavy Blade", "ID_INTERNAL_CATEGORY_SUPERIOR", "Superior", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Execution axe)"] = new RulesElement({
    name: "Weapon Proficiency (Execution axe)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(EXECUTION_AXE)",
    source: "Core",
    categories: ["Weapon Proficiency (Execution axe)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(EXECUTION_AXE)", "ID_FMP_WEAPON_GROUP_8", "axe", "ID_INTERNAL_CATEGORY_SUPERIOR", "Superior", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Falchion)"] = new RulesElement({
    name: "Weapon Proficiency (Falchion)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(FALCHION)",
    source: "Core",
    categories: ["Weapon Proficiency (Falchion)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(FALCHION)", "ID_FMP_WEAPON_GROUP_7", "Heavy Blade", "ID_INTERNAL_CATEGORY_MILITARY", "Military", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Feral Armor Claw)"] = new RulesElement({
    name: "Weapon Proficiency (Feral Armor Claw)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(FERAL_ARMOR_CLAW)",
    source: "Core",
    categories: ["Weapon Proficiency (Feral Armor Claw)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(FERAL_ARMOR_CLAW)", "ID_FMP_WEAPON_GROUP_2", "light blade", "ID_INTERNAL_CATEGORY_MILITARY", "Military", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Fighting Shield (heroic tier))"] = new RulesElement({
    name: "Weapon Proficiency (Fighting Shield (heroic tier))",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(FIGHTING_SHIELD_(HEROIC_TIER))",
    source: "Core",
    categories: ["Weapon Proficiency (Fighting Shield (heroic tier))", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(FIGHTING_SHIELD_(HEROIC_TIER))", "ID_FMP_WEAPON_GROUP_7", "Heavy Blade", "ID_INTERNAL_CATEGORY_SIMPLE", "Simple", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Flail)"] = new RulesElement({
    name: "Weapon Proficiency (Flail)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(FLAIL)",
    source: "Core",
    categories: ["Weapon Proficiency (Flail)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(FLAIL)", "ID_FMP_WEAPON_GROUP_10", "Flail", "ID_INTERNAL_CATEGORY_MILITARY", "Military", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Fullblade)"] = new RulesElement({
    name: "Weapon Proficiency (Fullblade)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(FULLBLADE)",
    source: "Core",
    categories: ["Weapon Proficiency (Fullblade)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(FULLBLADE)", "ID_FMP_WEAPON_GROUP_7", "Heavy Blade", "ID_INTERNAL_CATEGORY_SUPERIOR", "Superior", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Garrote)"] = new RulesElement({
    name: "Weapon Proficiency (Garrote)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(GARROTE)",
    source: "Core",
    categories: ["Weapon Proficiency (Garrote)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(GARROTE)", "ID_FMP_WEAPON_GROUP_47", "Garrote", "ID_INTERNAL_CATEGORY_SUPERIOR", "Superior", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Glaive)"] = new RulesElement({
    name: "Weapon Proficiency (Glaive)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(GLAIVE)",
    source: "Core",
    categories: ["Weapon Proficiency (Glaive)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(GLAIVE)", "ID_FMP_WEAPON_GROUP_7", "Heavy Blade", "ID_FMP_WEAPON_GROUP_22", "polearm", "ID_INTERNAL_CATEGORY_MILITARY", "Military", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Greataxe)"] = new RulesElement({
    name: "Weapon Proficiency (Greataxe)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(GREATAXE)",
    source: "Core",
    categories: ["Weapon Proficiency (Greataxe)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(GREATAXE)", "ID_FMP_WEAPON_GROUP_8", "axe", "ID_INTERNAL_CATEGORY_MILITARY", "Military", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Greatbow)"] = new RulesElement({
    name: "Weapon Proficiency (Greatbow)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(GREATBOW)",
    source: "Core",
    categories: ["Weapon Proficiency (Greatbow)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(GREATBOW)", "ID_FMP_WEAPON_GROUP_32", "Bow", "ID_INTERNAL_CATEGORY_SUPERIOR", "Superior", "ID_INTERNAL_CATEGORY_RANGED", "Ranged"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Greatclub)"] = new RulesElement({
    name: "Weapon Proficiency (Greatclub)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(GREATCLUB)",
    source: "Core",
    categories: ["Weapon Proficiency (Greatclub)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(GREATCLUB)", "ID_FMP_WEAPON_GROUP_1", "Mace", "ID_INTERNAL_CATEGORY_SIMPLE", "Simple", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Greatspear)"] = new RulesElement({
    name: "Weapon Proficiency (Greatspear)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(GREATSPEAR)",
    source: "Core",
    categories: ["Weapon Proficiency (Greatspear)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(GREATSPEAR)", "ID_FMP_WEAPON_GROUP_22", "polearm", "ID_FMP_WEAPON_GROUP_35", "Spear", "ID_INTERNAL_CATEGORY_SUPERIOR", "Superior", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Greatsword)"] = new RulesElement({
    name: "Weapon Proficiency (Greatsword)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(GREATSWORD)",
    source: "Core",
    categories: ["Weapon Proficiency (Greatsword)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(GREATSWORD)", "ID_FMP_WEAPON_GROUP_7", "Heavy Blade", "ID_INTERNAL_CATEGORY_MILITARY", "Military", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Halberd)"] = new RulesElement({
    name: "Weapon Proficiency (Halberd)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(HALBERD)",
    source: "Core",
    categories: ["Weapon Proficiency (Halberd)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(HALBERD)", "ID_FMP_WEAPON_GROUP_8", "axe", "ID_FMP_WEAPON_GROUP_22", "polearm", "ID_INTERNAL_CATEGORY_MILITARY", "Military", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Hand Crossbow)"] = new RulesElement({
    name: "Weapon Proficiency (Hand Crossbow)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(HAND_CROSSBOW)",
    source: "Core",
    categories: ["Weapon Proficiency (Hand Crossbow)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(HAND_CROSSBOW)", "ID_FMP_WEAPON_GROUP_29", "Crossbow", "ID_INTERNAL_CATEGORY_SIMPLE", "Simple", "ID_INTERNAL_CATEGORY_RANGED", "Ranged"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Handaxe)"] = new RulesElement({
    name: "Weapon Proficiency (Handaxe)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(HANDAXE)",
    source: "Core",
    categories: ["Weapon Proficiency (Handaxe)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(HANDAXE)", "ID_FMP_WEAPON_GROUP_8", "axe", "ID_INTERNAL_CATEGORY_MILITARY", "Military", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Heavy flail)"] = new RulesElement({
    name: "Weapon Proficiency (Heavy flail)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(HEAVY_FLAIL)",
    source: "Core",
    categories: ["Weapon Proficiency (Heavy flail)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(HEAVY_FLAIL)", "ID_FMP_WEAPON_GROUP_10", "Flail", "ID_INTERNAL_CATEGORY_MILITARY", "Military", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Heavy war pick)"] = new RulesElement({
    name: "Weapon Proficiency (Heavy war pick)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(HEAVY_WAR_PICK)",
    source: "Core",
    categories: ["Weapon Proficiency (Heavy war pick)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(HEAVY_WAR_PICK)", "ID_FMP_WEAPON_GROUP_13", "pick", "ID_INTERNAL_CATEGORY_MILITARY", "Military", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Javelin)"] = new RulesElement({
    name: "Weapon Proficiency (Javelin)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(JAVELIN)",
    source: "Core",
    categories: ["Weapon Proficiency (Javelin)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(JAVELIN)", "ID_FMP_WEAPON_GROUP_35", "Spear", "ID_INTERNAL_CATEGORY_SIMPLE", "Simple", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Katar)"] = new RulesElement({
    name: "Weapon Proficiency (Katar)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(KATAR)",
    source: "Core",
    categories: ["Weapon Proficiency (Katar)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(KATAR)", "ID_FMP_WEAPON_GROUP_2", "light blade", "ID_INTERNAL_CATEGORY_SUPERIOR", "Superior", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Khopesh)"] = new RulesElement({
    name: "Weapon Proficiency (Khopesh)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(KHOPESH)",
    source: "Core",
    categories: ["Weapon Proficiency (Khopesh)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(KHOPESH)", "ID_FMP_WEAPON_GROUP_8", "axe", "ID_FMP_WEAPON_GROUP_7", "Heavy Blade", "ID_INTERNAL_CATEGORY_MILITARY", "Military", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Kukri)"] = new RulesElement({
    name: "Weapon Proficiency (Kukri)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(KUKRI)",
    source: "Core",
    categories: ["Weapon Proficiency (Kukri)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(KUKRI)", "ID_FMP_WEAPON_GROUP_2", "light blade", "ID_INTERNAL_CATEGORY_SUPERIOR", "Superior", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Light war pick)"] = new RulesElement({
    name: "Weapon Proficiency (Light war pick)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(LIGHT_WAR_PICK)",
    source: "Core",
    categories: ["Weapon Proficiency (Light war pick)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(LIGHT_WAR_PICK)", "ID_FMP_WEAPON_GROUP_13", "pick", "ID_INTERNAL_CATEGORY_MILITARY", "Military", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Longbow)"] = new RulesElement({
    name: "Weapon Proficiency (Longbow)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(LONGBOW)",
    source: "Core",
    categories: ["Weapon Proficiency (Longbow)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(LONGBOW)", "ID_FMP_WEAPON_GROUP_32", "Bow", "ID_INTERNAL_CATEGORY_MILITARY", "Military", "ID_INTERNAL_CATEGORY_RANGED", "Ranged"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Longspear)"] = new RulesElement({
    name: "Weapon Proficiency (Longspear)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(LONGSPEAR)",
    source: "Core",
    categories: ["Weapon Proficiency (Longspear)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(LONGSPEAR)", "ID_FMP_WEAPON_GROUP_22", "polearm", "ID_FMP_WEAPON_GROUP_35", "Spear", "ID_INTERNAL_CATEGORY_MILITARY", "Military", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Longsword)"] = new RulesElement({
    name: "Weapon Proficiency (Longsword)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(LONGSWORD)",
    source: "Core",
    categories: ["Weapon Proficiency (Longsword)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(LONGSWORD)", "ID_FMP_WEAPON_GROUP_7", "Heavy Blade", "ID_INTERNAL_CATEGORY_MILITARY", "Military", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Mace)"] = new RulesElement({
    name: "Weapon Proficiency (Mace)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(MACE)",
    source: "Core",
    categories: ["Weapon Proficiency (Mace)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(MACE)", "ID_FMP_WEAPON_GROUP_1", "Mace", "ID_INTERNAL_CATEGORY_SIMPLE", "Simple", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Maul)"] = new RulesElement({
    name: "Weapon Proficiency (Maul)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(MAUL)",
    source: "Core",
    categories: ["Weapon Proficiency (Maul)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(MAUL)", "ID_FMP_WEAPON_GROUP_11", "hammer", "ID_INTERNAL_CATEGORY_MILITARY", "Military", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Monk Unarmed Strike)"] = new RulesElement({
    name: "Weapon Proficiency (Monk Unarmed Strike)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(MONK_UNARMED_STRIKE)",
    source: "Core",
    categories: ["Weapon Proficiency (Monk Unarmed Strike)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(MONK_UNARMED_STRIKE)", "ID_FMP_WEAPON_GROUP_27", "unarmed", "ID_INTERNAL_CATEGORY_IMPROVISED", "Improvised", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Mordenkrad)"] = new RulesElement({
    name: "Weapon Proficiency (Mordenkrad)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(MORDENKRAD)",
    source: "Core",
    categories: ["Weapon Proficiency (Mordenkrad)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(MORDENKRAD)", "ID_FMP_WEAPON_GROUP_11", "hammer", "ID_INTERNAL_CATEGORY_SUPERIOR", "Superior", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Morningstar)"] = new RulesElement({
    name: "Weapon Proficiency (Morningstar)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(MORNINGSTAR)",
    source: "Core",
    categories: ["Weapon Proficiency (Morningstar)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(MORNINGSTAR)", "ID_FMP_WEAPON_GROUP_1", "Mace", "ID_INTERNAL_CATEGORY_SIMPLE", "Simple", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Net)"] = new RulesElement({
    name: "Weapon Proficiency (Net)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(NET)",
    source: "Core",
    categories: ["Weapon Proficiency (Net)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(NET)", "ID_FMP_WEAPON_GROUP_10", "Flail", "ID_INTERNAL_CATEGORY_SUPERIOR", "Superior", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Parrying dagger)"] = new RulesElement({
    name: "Weapon Proficiency (Parrying dagger)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(PARRYING_DAGGER)",
    source: "Core",
    categories: ["Weapon Proficiency (Parrying dagger)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(PARRYING_DAGGER)", "ID_FMP_WEAPON_GROUP_2", "light blade", "ID_INTERNAL_CATEGORY_SUPERIOR", "Superior", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Quarterstaff)"] = new RulesElement({
    name: "Weapon Proficiency (Quarterstaff)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(QUARTERSTAFF)",
    source: "Core",
    categories: ["Weapon Proficiency (Quarterstaff)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(QUARTERSTAFF)", "ID_INTERNAL_CATEGORY_STAFF", "staff", "ID_INTERNAL_CATEGORY_SIMPLE", "Simple", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Rapier)"] = new RulesElement({
    name: "Weapon Proficiency (Rapier)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(RAPIER)",
    source: "Core",
    categories: ["Weapon Proficiency (Rapier)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(RAPIER)", "ID_FMP_WEAPON_GROUP_2", "light blade", "ID_INTERNAL_CATEGORY_MILITARY", "Military", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Repeating crossbow)"] = new RulesElement({
    name: "Weapon Proficiency (Repeating crossbow)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(REPEATING_CROSSBOW)",
    source: "Core",
    categories: ["Weapon Proficiency (Repeating crossbow)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(REPEATING_CROSSBOW)", "ID_FMP_WEAPON_GROUP_29", "Crossbow", "ID_INTERNAL_CATEGORY_SIMPLE", "Simple", "ID_INTERNAL_CATEGORY_RANGED", "Ranged"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Rod of Seven Parts (Weapon))"] = new RulesElement({
    name: "Weapon Proficiency (Rod of Seven Parts (Weapon))",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(ROD_OF_SEVEN_PARTS_(WEAPON))",
    source: "Core",
    categories: ["Weapon Proficiency (Rod of Seven Parts (Weapon))", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(ROD_OF_SEVEN_PARTS_(WEAPON))", "ID_FMP_WEAPON_GROUP_27", "unarmed", "ID_INTERNAL_CATEGORY_SIMPLE", "Simple", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Scimitar)"] = new RulesElement({
    name: "Weapon Proficiency (Scimitar)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SCIMITAR)",
    source: "Core",
    categories: ["Weapon Proficiency (Scimitar)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SCIMITAR)", "ID_FMP_WEAPON_GROUP_7", "Heavy Blade", "ID_INTERNAL_CATEGORY_MILITARY", "Military", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Scourge)"] = new RulesElement({
    name: "Weapon Proficiency (Scourge)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SCOURGE)",
    source: "Core",
    categories: ["Weapon Proficiency (Scourge)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SCOURGE)", "ID_FMP_WEAPON_GROUP_10", "Flail", "ID_INTERNAL_CATEGORY_MILITARY", "Military", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Scythe)"] = new RulesElement({
    name: "Weapon Proficiency (Scythe)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SCYTHE)",
    source: "Core",
    categories: ["Weapon Proficiency (Scythe)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SCYTHE)", "ID_FMP_WEAPON_GROUP_7", "Heavy Blade", "ID_INTERNAL_CATEGORY_SIMPLE", "Simple", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Shadowblade)"] = new RulesElement({
    name: "Weapon Proficiency (Shadowblade)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SHADOWBLADE)",
    source: "Core",
    categories: ["Weapon Proficiency (Shadowblade)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SHADOWBLADE)", "ID_FMP_WEAPON_GROUP_2", "light blade", "ID_INTERNAL_CATEGORY_SIMPLE", "Simple", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Short sword)"] = new RulesElement({
    name: "Weapon Proficiency (Short sword)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SHORT_SWORD)",
    source: "Core",
    categories: ["Weapon Proficiency (Short sword)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SHORT_SWORD)", "ID_FMP_WEAPON_GROUP_2", "light blade", "ID_INTERNAL_CATEGORY_MILITARY", "Military", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Shortbow)"] = new RulesElement({
    name: "Weapon Proficiency (Shortbow)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SHORTBOW)",
    source: "Core",
    categories: ["Weapon Proficiency (Shortbow)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SHORTBOW)", "ID_FMP_WEAPON_GROUP_32", "Bow", "ID_INTERNAL_CATEGORY_MILITARY", "Military", "ID_INTERNAL_CATEGORY_RANGED", "Ranged"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Shuriken)"] = new RulesElement({
    name: "Weapon Proficiency (Shuriken)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SHURIKEN)",
    source: "Core",
    categories: ["Weapon Proficiency (Shuriken)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SHURIKEN)", "ID_FMP_WEAPON_GROUP_2", "light blade", "ID_INTERNAL_CATEGORY_SUPERIOR", "Superior", "ID_INTERNAL_CATEGORY_RANGED", "Ranged"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Sickle)"] = new RulesElement({
    name: "Weapon Proficiency (Sickle)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SICKLE)",
    source: "Core",
    categories: ["Weapon Proficiency (Sickle)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SICKLE)", "ID_FMP_WEAPON_GROUP_2", "light blade", "ID_INTERNAL_CATEGORY_SIMPLE", "Simple", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Sling)"] = new RulesElement({
    name: "Weapon Proficiency (Sling)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SLING)",
    source: "Core",
    categories: ["Weapon Proficiency (Sling)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SLING)", "ID_FMP_WEAPON_GROUP_30", "Sling", "ID_INTERNAL_CATEGORY_SIMPLE", "Simple", "ID_INTERNAL_CATEGORY_RANGED", "Ranged"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Soul Shield (paragon tier))"] = new RulesElement({
    name: "Weapon Proficiency (Soul Shield (paragon tier))",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SOUL_SHIELD_(PARAGON_TIER))",
    source: "Core",
    categories: ["Weapon Proficiency (Soul Shield (paragon tier))", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SOUL_SHIELD_(PARAGON_TIER))", "ID_FMP_WEAPON_GROUP_8", "axe", "ID_INTERNAL_CATEGORY_SIMPLE", "Simple", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Spear)"] = new RulesElement({
    name: "Weapon Proficiency (Spear)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SPEAR)",
    source: "Core",
    categories: ["Weapon Proficiency (Spear)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SPEAR)", "ID_FMP_WEAPON_GROUP_35", "Spear", "ID_INTERNAL_CATEGORY_SIMPLE", "Simple", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Spiked chain)"] = new RulesElement({
    name: "Weapon Proficiency (Spiked chain)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SPIKED_CHAIN)",
    source: "Core",
    categories: ["Weapon Proficiency (Spiked chain)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SPIKED_CHAIN)", "ID_FMP_WEAPON_GROUP_10", "Flail", "ID_INTERNAL_CATEGORY_SUPERIOR", "Superior", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Spiked gauntlet)"] = new RulesElement({
    name: "Weapon Proficiency (Spiked gauntlet)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SPIKED_GAUNTLET)",
    source: "Core",
    categories: ["Weapon Proficiency (Spiked gauntlet)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SPIKED_GAUNTLET)", "ID_FMP_WEAPON_GROUP_27", "unarmed", "ID_INTERNAL_CATEGORY_SIMPLE", "Simple", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Spiked shield)"] = new RulesElement({
    name: "Weapon Proficiency (Spiked shield)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SPIKED_SHIELD)",
    source: "Core",
    categories: ["Weapon Proficiency (Spiked shield)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SPIKED_SHIELD)", "ID_FMP_WEAPON_GROUP_2", "light blade", "ID_INTERNAL_CATEGORY_SUPERIOR", "Superior", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Sun Shield (paragon tier))"] = new RulesElement({
    name: "Weapon Proficiency (Sun Shield (paragon tier))",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SUN_SHIELD_(PARAGON_TIER))",
    source: "Core",
    categories: ["Weapon Proficiency (Sun Shield (paragon tier))", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SUN_SHIELD_(PARAGON_TIER))", "ID_FMP_WEAPON_GROUP_7", "Heavy Blade", "ID_INTERNAL_CATEGORY_SIMPLE", "Simple", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Superior crossbow)"] = new RulesElement({
    name: "Weapon Proficiency (Superior crossbow)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SUPERIOR_CROSSBOW)",
    source: "Core",
    categories: ["Weapon Proficiency (Superior crossbow)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SUPERIOR_CROSSBOW)", "ID_FMP_WEAPON_GROUP_29", "Crossbow", "ID_INTERNAL_CATEGORY_SUPERIOR", "Superior", "ID_INTERNAL_CATEGORY_RANGED", "Ranged"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Talenta Boomerang)"] = new RulesElement({
    name: "Weapon Proficiency (Talenta Boomerang)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(TALENTA_BOOMERANG)",
    source: "Core",
    categories: ["Weapon Proficiency (Talenta Boomerang)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(TALENTA_BOOMERANG)", "ID_FMP_WEAPON_GROUP_2", "light blade", "ID_INTERNAL_CATEGORY_SUPERIOR", "Superior", "ID_INTERNAL_CATEGORY_RANGED", "Ranged"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Talenta Sharrash)"] = new RulesElement({
    name: "Weapon Proficiency (Talenta Sharrash)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(TALENTA_SHARRASH)",
    source: "Core",
    categories: ["Weapon Proficiency (Talenta Sharrash)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(TALENTA_SHARRASH)", "ID_FMP_WEAPON_GROUP_7", "Heavy Blade", "ID_FMP_WEAPON_GROUP_22", "polearm", "ID_INTERNAL_CATEGORY_SUPERIOR", "Superior", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Talenta Tangat)"] = new RulesElement({
    name: "Weapon Proficiency (Talenta Tangat)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(TALENTA_TANGAT)",
    source: "Core",
    categories: ["Weapon Proficiency (Talenta Tangat)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(TALENTA_TANGAT)", "ID_FMP_WEAPON_GROUP_7", "Heavy Blade", "ID_INTERNAL_CATEGORY_SUPERIOR", "Superior", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Throwing hammer)"] = new RulesElement({
    name: "Weapon Proficiency (Throwing hammer)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(THROWING_HAMMER)",
    source: "Core",
    categories: ["Weapon Proficiency (Throwing hammer)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(THROWING_HAMMER)", "ID_FMP_WEAPON_GROUP_11", "hammer", "ID_INTERNAL_CATEGORY_MILITARY", "Military", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Tratnyr)"] = new RulesElement({
    name: "Weapon Proficiency (Tratnyr)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(TRATNYR)",
    source: "Core",
    categories: ["Weapon Proficiency (Tratnyr)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(TRATNYR)", "ID_FMP_WEAPON_GROUP_35", "Spear", "ID_INTERNAL_CATEGORY_SUPERIOR", "Superior", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Trident)"] = new RulesElement({
    name: "Weapon Proficiency (Trident)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(TRIDENT)",
    source: "Core",
    categories: ["Weapon Proficiency (Trident)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(TRIDENT)", "ID_FMP_WEAPON_GROUP_35", "Spear", "ID_INTERNAL_CATEGORY_MILITARY", "Military", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Triple-headed flail)"] = new RulesElement({
    name: "Weapon Proficiency (Triple-headed flail)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(TRIPLE-HEADED_FLAIL)",
    source: "Core",
    categories: ["Weapon Proficiency (Triple-headed flail)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(TRIPLE-HEADED_FLAIL)", "ID_FMP_WEAPON_GROUP_10", "Flail", "ID_INTERNAL_CATEGORY_SUPERIOR", "Superior", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Urgrosh)"] = new RulesElement({
    name: "Weapon Proficiency (Urgrosh)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(URGROSH)",
    source: "Core",
    categories: ["Weapon Proficiency (Urgrosh)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(URGROSH)", "ID_FMP_WEAPON_GROUP_8", "axe", "ID_INTERNAL_CATEGORY_SUPERIOR", "Superior", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (War Pick)"] = new RulesElement({
    name: "Weapon Proficiency (War Pick)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(WAR_PICK)",
    source: "Core",
    categories: ["Weapon Proficiency (War Pick)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(WAR_PICK)", "ID_FMP_WEAPON_GROUP_13", "pick", "ID_INTERNAL_CATEGORY_MILITARY", "Military", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Waraxe)"] = new RulesElement({
    name: "Weapon Proficiency (Waraxe)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(WARAXE)",
    source: "Core",
    categories: ["Weapon Proficiency (Waraxe)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(WARAXE)", "ID_FMP_WEAPON_GROUP_8", "axe", "ID_INTERNAL_CATEGORY_SUPERIOR", "Superior", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Warhammer)"] = new RulesElement({
    name: "Weapon Proficiency (Warhammer)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(WARHAMMER)",
    source: "Core",
    categories: ["Weapon Proficiency (Warhammer)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(WARHAMMER)", "ID_FMP_WEAPON_GROUP_11", "hammer", "ID_INTERNAL_CATEGORY_MILITARY", "Military", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Whip)"] = new RulesElement({
    name: "Weapon Proficiency (Whip)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(WHIP)",
    source: "Core",
    categories: ["Weapon Proficiency (Whip)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(WHIP)", "ID_FMP_WEAPON_GROUP_10", "Flail", "ID_INTERNAL_CATEGORY_SUPERIOR", "Superior", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Xen'drik Boomerang)"] = new RulesElement({
    name: "Weapon Proficiency (Xen'drik Boomerang)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(XEN'DRIK_BOOMERANG)",
    source: "Core",
    categories: ["Weapon Proficiency (Xen'drik Boomerang)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(XEN'DRIK_BOOMERANG)", "ID_FMP_WEAPON_GROUP_2", "light blade", "ID_INTERNAL_CATEGORY_SUPERIOR", "Superior", "ID_INTERNAL_CATEGORY_RANGED", "Ranged"]
  });
  byID[te.id] = te;
  
  te = Proficiency["Weapon Proficiency (Zulaat)"] = new RulesElement({
    name: "Weapon Proficiency (Zulaat)",
    type: "Proficiency",
    id: "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(ZULAAT)",
    source: "Core",
    categories: ["Weapon Proficiency (Zulaat)", "ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(ZULAAT)", "ID_FMP_WEAPON_GROUP_7", "Heavy Blade", "ID_INTERNAL_CATEGORY_SUPERIOR", "Superior", "ID_INTERNAL_CATEGORY_MELEE", "Melee"]
  });
  byID[te.id] = te;
  
  
})(this);
