define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Weapon = types['Weapon'] || (types['Weapon'] = {});
  te = Weapon["Bastard sword"] = new engine.RulesElement({
    name: "Bastard sword",
    type: "Weapon",
    id: "ID_FMP_WEAPON_30",
    source: "Player's Handbook",
    categories: ["Bastard sword", "ID_FMP_WEAPON_30", "ID_INTERNAL_CATEGORY_ONE-HAND", "One-hand", "ID_FMP_WEAPON_GROUP_7", "Heavy Blade", "ID_INTERNAL_CATEGORY_ONE-HANDED", "One-Handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Bastard sword (Large)"] = new engine.RulesElement({
    name: "Bastard sword (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_BASTARD_SWORD",
    source: "Player's Handbook",
    categories: ["Bastard sword (Large)", "ID_INTERNAL_WEAPON_LARGE_BASTARD_SWORD"]
  });
  byID[te.id] = te;
  
  te = Weapon["Battleaxe"] = new engine.RulesElement({
    name: "Battleaxe",
    type: "Weapon",
    id: "ID_FMP_WEAPON_12",
    source: "Player's Handbook",
    categories: ["Battleaxe", "ID_FMP_WEAPON_12", "ID_INTERNAL_CATEGORY_ONE-HAND", "One-hand", "ID_FMP_WEAPON_GROUP_8", "axe", "ID_INTERNAL_CATEGORY_ONE-HANDED", "One-Handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Battleaxe (Large)"] = new engine.RulesElement({
    name: "Battleaxe (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_BATTLEAXE",
    source: "Player's Handbook",
    categories: ["Battleaxe (Large)", "ID_INTERNAL_WEAPON_LARGE_BATTLEAXE"]
  });
  byID[te.id] = te;
  
  te = Weapon["Club"] = new engine.RulesElement({
    name: "Club",
    type: "Weapon",
    id: "ID_FMP_WEAPON_2",
    source: "Player's Handbook",
    categories: ["Club", "ID_FMP_WEAPON_2", "ID_INTERNAL_CATEGORY_ONE-HAND", "One-hand", "ID_FMP_WEAPON_GROUP_1", "Mace", "ID_INTERNAL_CATEGORY_ONE-HANDED", "One-Handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Club (Large)"] = new engine.RulesElement({
    name: "Club (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_CLUB",
    source: "Player's Handbook",
    categories: ["Club (Large)", "ID_INTERNAL_WEAPON_LARGE_CLUB"]
  });
  byID[te.id] = te;
  
  te = Weapon["Crossbow"] = new engine.RulesElement({
    name: "Crossbow",
    type: "Weapon",
    id: "ID_FMP_WEAPON_38",
    source: "Player's Handbook",
    categories: ["Crossbow", "ID_FMP_WEAPON_38", "ID_INTERNAL_CATEGORY_TWO-HANDS", "Two-Hands", "ID_FMP_WEAPON_GROUP_29", "ID_INTERNAL_CATEGORY_TWO-HANDED", "two-handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Crossbow (Large)"] = new engine.RulesElement({
    name: "Crossbow (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_CROSSBOW",
    source: "Player's Handbook",
    categories: ["Crossbow (Large)", "ID_INTERNAL_WEAPON_LARGE_CROSSBOW"]
  });
  byID[te.id] = te;
  
  te = Weapon["Dagger"] = new engine.RulesElement({
    name: "Dagger",
    type: "Weapon",
    id: "ID_FMP_WEAPON_3",
    source: "Player's Handbook",
    categories: ["Dagger", "ID_FMP_WEAPON_3", "ID_FMP_WEAPON_PROPERTY_1", "off-hand", "ID_FMP_WEAPON_GROUP_2", "light blade", "ID_INTERNAL_CATEGORY_ONE-HANDED", "One-Handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Dagger (Large)"] = new engine.RulesElement({
    name: "Dagger (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_DAGGER",
    source: "Player's Handbook",
    categories: ["Dagger (Large)", "ID_INTERNAL_WEAPON_LARGE_DAGGER"]
  });
  byID[te.id] = te;
  
  te = Weapon["falchion"] = new engine.RulesElement({
    name: "falchion",
    type: "Weapon",
    id: "ID_FMP_WEAPON_44",
    source: "Player's Handbook",
    categories: ["falchion", "ID_FMP_WEAPON_44", "ID_INTERNAL_CATEGORY_TWO-HANDS", "Two-Hands", "ID_FMP_WEAPON_GROUP_7", "Heavy Blade", "ID_INTERNAL_CATEGORY_TWO-HANDED", "two-handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Falchion (Large)"] = new engine.RulesElement({
    name: "Falchion (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_FALCHION",
    source: "Player's Handbook",
    categories: ["Falchion (Large)", "ID_INTERNAL_WEAPON_LARGE_FALCHION"]
  });
  byID[te.id] = te;
  
  te = Weapon["Flail"] = new engine.RulesElement({
    name: "Flail",
    type: "Weapon",
    id: "ID_FMP_WEAPON_14",
    source: "Player's Handbook",
    categories: ["Flail", "ID_FMP_WEAPON_14", "ID_INTERNAL_CATEGORY_ONE-HAND", "One-hand", "ID_FMP_WEAPON_GROUP_10", "ID_INTERNAL_CATEGORY_ONE-HANDED", "One-Handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Flail (Large)"] = new engine.RulesElement({
    name: "Flail (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_FLAIL",
    source: "Player's Handbook",
    categories: ["Flail (Large)", "ID_INTERNAL_WEAPON_LARGE_FLAIL"]
  });
  byID[te.id] = te;
  
  te = Weapon["Glaive"] = new engine.RulesElement({
    name: "Glaive",
    type: "Weapon",
    id: "ID_FMP_WEAPON_23",
    source: "Player's Handbook",
    categories: ["Glaive", "ID_FMP_WEAPON_23", "ID_INTERNAL_CATEGORY_TWO-HANDS", "Two-Hands", "ID_FMP_WEAPON_GROUP_7", "Heavy Blade", "ID_FMP_WEAPON_GROUP_22", "polearm", "ID_INTERNAL_CATEGORY_TWO-HANDED", "two-handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Glaive (Large)"] = new engine.RulesElement({
    name: "Glaive (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_GLAIVE",
    source: "Player's Handbook",
    categories: ["Glaive (Large)", "ID_INTERNAL_WEAPON_LARGE_GLAIVE"]
  });
  byID[te.id] = te;
  
  te = Weapon["Greataxe"] = new engine.RulesElement({
    name: "Greataxe",
    type: "Weapon",
    id: "ID_FMP_WEAPON_21",
    source: "Player's Handbook",
    categories: ["Greataxe", "ID_FMP_WEAPON_21", "ID_INTERNAL_CATEGORY_TWO-HANDS", "Two-Hands", "ID_FMP_WEAPON_GROUP_8", "axe", "ID_INTERNAL_CATEGORY_TWO-HANDED", "two-handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Greataxe (Large)"] = new engine.RulesElement({
    name: "Greataxe (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_GREATAXE",
    source: "Player's Handbook",
    categories: ["Greataxe (Large)", "ID_INTERNAL_WEAPON_LARGE_GREATAXE"]
  });
  byID[te.id] = te;
  
  te = Weapon["Greatclub"] = new engine.RulesElement({
    name: "Greatclub",
    type: "Weapon",
    id: "ID_FMP_WEAPON_8",
    source: "Player's Handbook",
    categories: ["Greatclub", "ID_FMP_WEAPON_8", "ID_INTERNAL_CATEGORY_TWO-HANDS", "Two-Hands", "ID_FMP_WEAPON_GROUP_1", "Mace", "ID_INTERNAL_CATEGORY_TWO-HANDED", "two-handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Greatclub (Large)"] = new engine.RulesElement({
    name: "Greatclub (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_GREATCLUB",
    source: "Player's Handbook",
    categories: ["Greatclub (Large)", "ID_INTERNAL_WEAPON_LARGE_GREATCLUB"]
  });
  byID[te.id] = te;
  
  te = Weapon["Greatsword"] = new engine.RulesElement({
    name: "Greatsword",
    type: "Weapon",
    id: "ID_FMP_WEAPON_27",
    source: "Player's Handbook",
    categories: ["Greatsword", "ID_FMP_WEAPON_27", "ID_INTERNAL_CATEGORY_TWO-HANDS", "Two-Hands", "ID_FMP_WEAPON_GROUP_7", "Heavy Blade", "ID_INTERNAL_CATEGORY_TWO-HANDED", "two-handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Greatsword (Large)"] = new engine.RulesElement({
    name: "Greatsword (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_GREATSWORD",
    source: "Player's Handbook",
    categories: ["Greatsword (Large)", "ID_INTERNAL_WEAPON_LARGE_GREATSWORD"]
  });
  byID[te.id] = te;
  
  te = Weapon["Halberd"] = new engine.RulesElement({
    name: "Halberd",
    type: "Weapon",
    id: "ID_FMP_WEAPON_24",
    source: "Player's Handbook",
    categories: ["Halberd", "ID_FMP_WEAPON_24", "ID_INTERNAL_CATEGORY_TWO-HANDS", "Two-Hands", "ID_FMP_WEAPON_GROUP_8", "axe", "ID_FMP_WEAPON_GROUP_22", "polearm", "ID_INTERNAL_CATEGORY_TWO-HANDED", "two-handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Halberd (Large)"] = new engine.RulesElement({
    name: "Halberd (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_HALBERD",
    source: "Player's Handbook",
    categories: ["Halberd (Large)", "ID_INTERNAL_WEAPON_LARGE_HALBERD"]
  });
  byID[te.id] = te;
  
  te = Weapon["Hand Crossbow"] = new engine.RulesElement({
    name: "Hand Crossbow",
    type: "Weapon",
    id: "ID_FMP_WEAPON_36",
    source: "Player's Handbook",
    categories: ["Hand Crossbow", "ID_FMP_WEAPON_36", "ID_INTERNAL_CATEGORY_ONE-HAND", "One-hand", "ID_FMP_WEAPON_GROUP_29", "Crossbow", "ID_INTERNAL_CATEGORY_ONE-HANDED", "One-Handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Hand Crossbow (Large)"] = new engine.RulesElement({
    name: "Hand Crossbow (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_HAND_CROSSBOW",
    source: "Player's Handbook",
    categories: ["Hand Crossbow (Large)", "ID_INTERNAL_WEAPON_LARGE_HAND_CROSSBOW"]
  });
  byID[te.id] = te;
  
  te = Weapon["Handaxe"] = new engine.RulesElement({
    name: "Handaxe",
    type: "Weapon",
    id: "ID_FMP_WEAPON_13",
    source: "Player's Handbook",
    categories: ["Handaxe", "ID_FMP_WEAPON_13", "ID_FMP_WEAPON_PROPERTY_1", "off-hand", "ID_FMP_WEAPON_GROUP_8", "axe", "ID_INTERNAL_CATEGORY_ONE-HANDED", "One-Handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Handaxe (Large)"] = new engine.RulesElement({
    name: "Handaxe (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_HANDAXE",
    source: "Player's Handbook",
    categories: ["Handaxe (Large)", "ID_INTERNAL_WEAPON_LARGE_HANDAXE"]
  });
  byID[te.id] = te;
  
  te = Weapon["Heavy flail"] = new engine.RulesElement({
    name: "Heavy flail",
    type: "Weapon",
    id: "ID_FMP_WEAPON_22",
    source: "Player's Handbook",
    categories: ["Heavy flail", "ID_FMP_WEAPON_22", "ID_INTERNAL_CATEGORY_TWO-HANDS", "Two-Hands", "ID_FMP_WEAPON_GROUP_10", "Flail", "ID_INTERNAL_CATEGORY_TWO-HANDED", "two-handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Heavy flail (Large)"] = new engine.RulesElement({
    name: "Heavy flail (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_HEAVY_FLAIL",
    source: "Player's Handbook",
    categories: ["Heavy flail (Large)", "ID_INTERNAL_WEAPON_LARGE_HEAVY_FLAIL"]
  });
  byID[te.id] = te;
  
  te = Weapon["Javelin"] = new engine.RulesElement({
    name: "Javelin",
    type: "Weapon",
    id: "ID_FMP_WEAPON_4",
    source: "Player's Handbook",
    categories: ["Javelin", "ID_FMP_WEAPON_4", "ID_INTERNAL_CATEGORY_ONE-HAND", "One-hand", "ID_FMP_WEAPON_GROUP_35", "Spear", "ID_INTERNAL_CATEGORY_ONE-HANDED", "One-Handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Javelin (Large)"] = new engine.RulesElement({
    name: "Javelin (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_JAVELIN",
    source: "Player's Handbook",
    categories: ["Javelin (Large)", "ID_INTERNAL_WEAPON_LARGE_JAVELIN"]
  });
  byID[te.id] = te;
  
  te = Weapon["Katar"] = new engine.RulesElement({
    name: "Katar",
    type: "Weapon",
    id: "ID_FMP_WEAPON_28",
    source: "Player's Handbook",
    categories: ["Katar", "ID_FMP_WEAPON_28", "ID_FMP_WEAPON_PROPERTY_1", "off-hand", "ID_FMP_WEAPON_GROUP_2", "light blade", "ID_INTERNAL_CATEGORY_ONE-HANDED", "One-Handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Katar (Large)"] = new engine.RulesElement({
    name: "Katar (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_KATAR",
    source: "Player's Handbook",
    categories: ["Katar (Large)", "ID_INTERNAL_WEAPON_LARGE_KATAR"]
  });
  byID[te.id] = te;
  
  te = Weapon["Longbow"] = new engine.RulesElement({
    name: "Longbow",
    type: "Weapon",
    id: "ID_FMP_WEAPON_40",
    source: "Player's Handbook",
    categories: ["Longbow", "ID_FMP_WEAPON_40", "ID_INTERNAL_CATEGORY_TWO-HANDS", "Two-Hands", "ID_FMP_WEAPON_GROUP_32", "Bow", "ID_INTERNAL_CATEGORY_TWO-HANDED", "two-handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Longbow (Large)"] = new engine.RulesElement({
    name: "Longbow (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_LONGBOW",
    source: "Player's Handbook",
    categories: ["Longbow (Large)", "ID_INTERNAL_WEAPON_LARGE_LONGBOW"]
  });
  byID[te.id] = te;
  
  te = Weapon["Longspear"] = new engine.RulesElement({
    name: "Longspear",
    type: "Weapon",
    id: "ID_FMP_WEAPON_26",
    source: "Player's Handbook",
    categories: ["Longspear", "ID_FMP_WEAPON_26", "ID_INTERNAL_CATEGORY_TWO-HANDS", "Two-Hands", "ID_FMP_WEAPON_GROUP_22", "polearm", "ID_FMP_WEAPON_GROUP_35", "Spear", "ID_INTERNAL_CATEGORY_TWO-HANDED", "two-handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Longspear (Large)"] = new engine.RulesElement({
    name: "Longspear (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_LONGSPEAR",
    source: "Player's Handbook",
    categories: ["Longspear (Large)", "ID_INTERNAL_WEAPON_LARGE_LONGSPEAR"]
  });
  byID[te.id] = te;
  
  te = Weapon["Longsword"] = new engine.RulesElement({
    name: "Longsword",
    type: "Weapon",
    id: "ID_FMP_WEAPON_19",
    source: "Player's Handbook",
    categories: ["Longsword", "ID_FMP_WEAPON_19", "ID_INTERNAL_CATEGORY_ONE-HAND", "One-hand", "ID_FMP_WEAPON_GROUP_7", "Heavy Blade", "ID_INTERNAL_CATEGORY_ONE-HANDED", "One-Handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Longsword (Large)"] = new engine.RulesElement({
    name: "Longsword (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_LONGSWORD",
    source: "Player's Handbook",
    categories: ["Longsword (Large)", "ID_INTERNAL_WEAPON_LARGE_LONGSWORD"]
  });
  byID[te.id] = te;
  
  te = Weapon["Mace"] = new engine.RulesElement({
    name: "Mace",
    type: "Weapon",
    id: "ID_FMP_WEAPON_5",
    source: "Player's Handbook",
    categories: ["Mace", "ID_FMP_WEAPON_5", "ID_INTERNAL_CATEGORY_ONE-HAND", "One-hand", "ID_FMP_WEAPON_GROUP_1", "ID_INTERNAL_CATEGORY_ONE-HANDED", "One-Handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Mace (Large)"] = new engine.RulesElement({
    name: "Mace (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_MACE",
    source: "Player's Handbook",
    categories: ["Mace (Large)", "ID_INTERNAL_WEAPON_LARGE_MACE"]
  });
  byID[te.id] = te;
  
  te = Weapon["Maul"] = new engine.RulesElement({
    name: "Maul",
    type: "Weapon",
    id: "ID_FMP_WEAPON_25",
    source: "Player's Handbook",
    categories: ["Maul", "ID_FMP_WEAPON_25", "ID_INTERNAL_CATEGORY_TWO-HANDS", "Two-Hands", "ID_FMP_WEAPON_GROUP_11", "hammer", "ID_INTERNAL_CATEGORY_TWO-HANDED", "two-handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Maul (Large)"] = new engine.RulesElement({
    name: "Maul (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_MAUL",
    source: "Player's Handbook",
    categories: ["Maul (Large)", "ID_INTERNAL_WEAPON_LARGE_MAUL"]
  });
  byID[te.id] = te;
  
  te = Weapon["Morningstar"] = new engine.RulesElement({
    name: "Morningstar",
    type: "Weapon",
    id: "ID_FMP_WEAPON_9",
    source: "Player's Handbook",
    categories: ["Morningstar", "ID_FMP_WEAPON_9", "ID_INTERNAL_CATEGORY_TWO-HANDS", "Two-Hands", "ID_FMP_WEAPON_GROUP_1", "Mace", "ID_INTERNAL_CATEGORY_TWO-HANDED", "two-handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Morningstar (Large)"] = new engine.RulesElement({
    name: "Morningstar (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_MORNINGSTAR",
    source: "Player's Handbook",
    categories: ["Morningstar (Large)", "ID_INTERNAL_WEAPON_LARGE_MORNINGSTAR"]
  });
  byID[te.id] = te;
  
  te = Weapon["Quarterstaff"] = new engine.RulesElement({
    name: "Quarterstaff",
    type: "Weapon",
    id: "ID_FMP_WEAPON_10",
    source: "Player's Handbook",
    categories: ["Quarterstaff", "ID_FMP_WEAPON_10", "ID_INTERNAL_CATEGORY_TWO-HANDS", "Two-Hands", "ID_INTERNAL_CATEGORY_STAFF", "staff", "ID_INTERNAL_CATEGORY_TWO-HANDED", "two-handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Quarterstaff (Large)"] = new engine.RulesElement({
    name: "Quarterstaff (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_QUARTERSTAFF",
    source: "Player's Handbook",
    categories: ["Quarterstaff (Large)", "ID_INTERNAL_WEAPON_LARGE_QUARTERSTAFF"]
  });
  byID[te.id] = te;
  
  te = Weapon["rapier"] = new engine.RulesElement({
    name: "rapier",
    type: "Weapon",
    id: "ID_FMP_WEAPON_29",
    source: "Player's Handbook",
    categories: ["rapier", "ID_FMP_WEAPON_29", "ID_INTERNAL_CATEGORY_ONE-HAND", "One-hand", "ID_FMP_WEAPON_GROUP_2", "light blade", "ID_INTERNAL_CATEGORY_ONE-HANDED", "One-Handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Rapier (Large)"] = new engine.RulesElement({
    name: "Rapier (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_RAPIER",
    source: "Player's Handbook",
    categories: ["Rapier (Large)", "ID_INTERNAL_WEAPON_LARGE_RAPIER"]
  });
  byID[te.id] = te;
  
  te = Weapon["Scimitar"] = new engine.RulesElement({
    name: "Scimitar",
    type: "Weapon",
    id: "ID_FMP_WEAPON_18",
    source: "Player's Handbook",
    categories: ["Scimitar", "ID_FMP_WEAPON_18", "ID_INTERNAL_CATEGORY_ONE-HAND", "One-hand", "ID_FMP_WEAPON_GROUP_7", "Heavy Blade", "ID_INTERNAL_CATEGORY_ONE-HANDED", "One-Handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Scimitar (Large)"] = new engine.RulesElement({
    name: "Scimitar (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_SCIMITAR",
    source: "Player's Handbook",
    categories: ["Scimitar (Large)", "ID_INTERNAL_WEAPON_LARGE_SCIMITAR"]
  });
  byID[te.id] = te;
  
  te = Weapon["Scythe"] = new engine.RulesElement({
    name: "Scythe",
    type: "Weapon",
    id: "ID_FMP_WEAPON_11",
    source: "Player's Handbook",
    categories: ["Scythe", "ID_FMP_WEAPON_11", "ID_INTERNAL_CATEGORY_TWO-HANDS", "Two-Hands", "ID_FMP_WEAPON_GROUP_7", "Heavy Blade", "ID_INTERNAL_CATEGORY_TWO-HANDED", "two-handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Scythe (Large)"] = new engine.RulesElement({
    name: "Scythe (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_SCYTHE",
    source: "Player's Handbook",
    categories: ["Scythe (Large)", "ID_INTERNAL_WEAPON_LARGE_SCYTHE"]
  });
  byID[te.id] = te;
  
  te = Weapon["Short sword"] = new engine.RulesElement({
    name: "Short sword",
    type: "Weapon",
    id: "ID_FMP_WEAPON_20",
    source: "Player's Handbook",
    categories: ["Short sword", "ID_FMP_WEAPON_20", "ID_FMP_WEAPON_PROPERTY_1", "off-hand", "ID_FMP_WEAPON_GROUP_2", "light blade", "ID_INTERNAL_CATEGORY_ONE-HANDED", "One-Handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Short sword (Large)"] = new engine.RulesElement({
    name: "Short sword (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_SHORT_SWORD",
    source: "Player's Handbook",
    categories: ["Short sword (Large)", "ID_INTERNAL_WEAPON_LARGE_SHORT_SWORD"]
  });
  byID[te.id] = te;
  
  te = Weapon["Shortbow"] = new engine.RulesElement({
    name: "Shortbow",
    type: "Weapon",
    id: "ID_FMP_WEAPON_39",
    source: "Player's Handbook",
    categories: ["Shortbow", "ID_FMP_WEAPON_39", "ID_INTERNAL_CATEGORY_TWO-HANDS", "Two-Hands", "ID_FMP_WEAPON_GROUP_32", "Bow", "ID_INTERNAL_CATEGORY_TWO-HANDED", "two-handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Shortbow (Large)"] = new engine.RulesElement({
    name: "Shortbow (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_SHORTBOW",
    source: "Player's Handbook",
    categories: ["Shortbow (Large)", "ID_INTERNAL_WEAPON_LARGE_SHORTBOW"]
  });
  byID[te.id] = te;
  
  te = Weapon["Shuriken"] = new engine.RulesElement({
    name: "Shuriken",
    type: "Weapon",
    id: "ID_FMP_WEAPON_41",
    source: "Player's Handbook",
    categories: ["Shuriken", "ID_FMP_WEAPON_41", "ID_INTERNAL_CATEGORY_ONE-HAND", "One-hand", "ID_FMP_WEAPON_GROUP_2", "light blade", "ID_INTERNAL_CATEGORY_ONE-HANDED", "One-Handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Shuriken (Large)"] = new engine.RulesElement({
    name: "Shuriken (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_SHURIKEN",
    source: "Player's Handbook",
    categories: ["Shuriken (Large)", "ID_INTERNAL_WEAPON_LARGE_SHURIKEN"]
  });
  byID[te.id] = te;
  
  te = Weapon["Sickle"] = new engine.RulesElement({
    name: "Sickle",
    type: "Weapon",
    id: "ID_FMP_WEAPON_6",
    source: "Player's Handbook",
    categories: ["Sickle", "ID_FMP_WEAPON_6", "ID_FMP_WEAPON_PROPERTY_1", "off-hand", "ID_FMP_WEAPON_GROUP_2", "light blade", "ID_INTERNAL_CATEGORY_ONE-HANDED", "One-Handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Sickle (Large)"] = new engine.RulesElement({
    name: "Sickle (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_SICKLE",
    source: "Player's Handbook",
    categories: ["Sickle (Large)", "ID_INTERNAL_WEAPON_LARGE_SICKLE"]
  });
  byID[te.id] = te;
  
  te = Weapon["Sling"] = new engine.RulesElement({
    name: "Sling",
    type: "Weapon",
    id: "ID_FMP_WEAPON_37",
    source: "Player's Handbook",
    categories: ["Sling", "ID_FMP_WEAPON_37", "ID_INTERNAL_CATEGORY_ONE-HAND", "One-hand", "ID_FMP_WEAPON_GROUP_30", "ID_INTERNAL_CATEGORY_ONE-HANDED", "One-Handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Sling (Large)"] = new engine.RulesElement({
    name: "Sling (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_SLING",
    source: "Player's Handbook",
    categories: ["Sling (Large)", "ID_INTERNAL_WEAPON_LARGE_SLING"]
  });
  byID[te.id] = te;
  
  te = Weapon["Spear"] = new engine.RulesElement({
    name: "Spear",
    type: "Weapon",
    id: "ID_FMP_WEAPON_7",
    source: "Player's Handbook",
    categories: ["Spear", "ID_FMP_WEAPON_7", "ID_INTERNAL_CATEGORY_ONE-HAND", "One-hand", "ID_FMP_WEAPON_GROUP_35", "ID_INTERNAL_CATEGORY_ONE-HANDED", "One-Handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Spear (Large)"] = new engine.RulesElement({
    name: "Spear (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_SPEAR",
    source: "Player's Handbook",
    categories: ["Spear (Large)", "ID_INTERNAL_WEAPON_LARGE_SPEAR"]
  });
  byID[te.id] = te;
  
  te = Weapon["Spiked chain"] = new engine.RulesElement({
    name: "Spiked chain",
    type: "Weapon",
    id: "ID_FMP_WEAPON_32",
    source: "Player's Handbook",
    categories: ["Spiked chain", "ID_FMP_WEAPON_32", "ID_INTERNAL_CATEGORY_TWO-HANDS", "Two-Hands", "ID_FMP_WEAPON_GROUP_10", "Flail", "ID_INTERNAL_CATEGORY_TWO-HANDED", "two-handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Spiked chain (Large)"] = new engine.RulesElement({
    name: "Spiked chain (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_SPIKED_CHAIN",
    source: "Player's Handbook",
    categories: ["Spiked chain (Large)", "ID_INTERNAL_WEAPON_LARGE_SPIKED_CHAIN"]
  });
  byID[te.id] = te;
  
  te = Weapon["Throwing hammer"] = new engine.RulesElement({
    name: "Throwing hammer",
    type: "Weapon",
    id: "ID_FMP_WEAPON_15",
    source: "Player's Handbook",
    categories: ["Throwing hammer", "ID_FMP_WEAPON_15", "ID_FMP_WEAPON_PROPERTY_1", "off-hand", "ID_FMP_WEAPON_GROUP_11", "hammer", "ID_INTERNAL_CATEGORY_ONE-HANDED", "One-Handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Throwing hammer (Large)"] = new engine.RulesElement({
    name: "Throwing hammer (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_THROWING_HAMMER",
    source: "Player's Handbook",
    categories: ["Throwing hammer (Large)", "ID_INTERNAL_WEAPON_LARGE_THROWING_HAMMER"]
  });
  byID[te.id] = te;
  
  te = Weapon["Unarmed attack"] = new engine.RulesElement({
    name: "Unarmed attack",
    type: "Weapon",
    id: "ID_FMP_WEAPON_34",
    source: "Player's Handbook",
    categories: ["Unarmed attack", "ID_FMP_WEAPON_34", "ID_INTERNAL_CATEGORY_ONE-HAND", "One-hand", "ID_FMP_WEAPON_GROUP_27", "unarmed", "ID_INTERNAL_CATEGORY_ONE-HANDED", "One-Handed"]
  });
  byID[te.id] = te;
  
  te = Weapon["Unarmed attack (Large)"] = new engine.RulesElement({
    name: "Unarmed attack (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_UNARMED_ATTACK",
    source: "Player's Handbook",
    categories: ["Unarmed attack (Large)", "ID_INTERNAL_WEAPON_LARGE_UNARMED_ATTACK"]
  });
  byID[te.id] = te;
  
  te = Weapon["War Pick"] = new engine.RulesElement({
    name: "War Pick",
    type: "Weapon",
    id: "ID_FMP_WEAPON_17",
    source: "Player's Handbook",
    categories: ["War Pick", "ID_FMP_WEAPON_17", "ID_INTERNAL_CATEGORY_ONE-HAND", "One-hand", "ID_FMP_WEAPON_GROUP_13", "pick", "ID_INTERNAL_CATEGORY_ONE-HANDED", "One-Handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["War Pick (Large)"] = new engine.RulesElement({
    name: "War Pick (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_WAR_PICK",
    source: "Player's Handbook",
    categories: ["War Pick (Large)", "ID_INTERNAL_WEAPON_LARGE_WAR_PICK"]
  });
  byID[te.id] = te;
  
  te = Weapon["Warhammer"] = new engine.RulesElement({
    name: "Warhammer",
    type: "Weapon",
    id: "ID_FMP_WEAPON_16",
    source: "Player's Handbook",
    categories: ["Warhammer", "ID_FMP_WEAPON_16", "ID_INTERNAL_CATEGORY_ONE-HAND", "One-hand", "ID_FMP_WEAPON_GROUP_11", "hammer", "ID_INTERNAL_CATEGORY_ONE-HANDED", "One-Handed", "ID_INTERNAL_CATEGORY_SELECTABLE", "Selectable"]
  });
  byID[te.id] = te;
  
  te = Weapon["Warhammer (Large)"] = new engine.RulesElement({
    name: "Warhammer (Large)",
    type: "Weapon",
    id: "ID_INTERNAL_WEAPON_LARGE_WARHAMMER",
    source: "Player's Handbook",
    categories: ["Warhammer (Large)", "ID_INTERNAL_WEAPON_LARGE_WARHAMMER"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
