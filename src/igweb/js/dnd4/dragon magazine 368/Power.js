define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Power = types['Power'] || (types['Power'] = {});
  te = Power["Barbarian Blood Frenzy"] = new engine.RulesElement({
    name: "Barbarian Blood Frenzy",
    type: "Power",
    id: "ID_FMP_POWER_4857",
    source: "Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4857",
    categories: ["Barbarian Blood Frenzy", "ID_FMP_POWER_4857", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_NO_ACTION", "No Action"]
  });
  byID[te.id] = te;
  
  te = Power["Barbarian Great Leap"] = new engine.RulesElement({
    name: "Barbarian Great Leap",
    type: "Power",
    id: "ID_FMP_POWER_4828",
    source: "Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4828",
    categories: ["Barbarian Great Leap", "ID_FMP_POWER_4828", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_NO_ACTION", "No Action"]
  });
  byID[te.id] = te;
  
  te = Power["Barbarian Inexorable Shift"] = new engine.RulesElement({
    name: "Barbarian Inexorable Shift",
    type: "Power",
    id: "ID_FMP_POWER_4833",
    source: "Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=4833",
    categories: ["Barbarian Inexorable Shift", "ID_FMP_POWER_4833", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_INTERNAL_CATEGORY_NO_ACTION", "No Action"]
  });
  byID[te.id] = te;
  
  te = Power["Binding Bola"] = new engine.RulesElement({
    name: "Binding Bola",
    type: "Power",
    id: "ID_FMP_POWER_5250",
    source: "Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5250",
    categories: ["Binding Bola", "ID_FMP_POWER_5250", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Bola Recovery"] = new engine.RulesElement({
    name: "Bola Recovery",
    type: "Power",
    id: "ID_FMP_POWER_5251",
    source: "Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5251",
    categories: ["Bola Recovery", "ID_FMP_POWER_5251", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Divine Rage"] = new engine.RulesElement({
    name: "Divine Rage",
    type: "Power",
    id: "ID_FMP_POWER_5233",
    source: "Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5233",
    categories: ["Divine Rage", "ID_FMP_POWER_5233", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Entangling Whip"] = new engine.RulesElement({
    name: "Entangling Whip",
    type: "Power",
    id: "ID_FMP_POWER_5258",
    source: "Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5258",
    categories: ["Entangling Whip", "ID_FMP_POWER_5258", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Felling Bola"] = new engine.RulesElement({
    name: "Felling Bola",
    type: "Power",
    id: "ID_FMP_POWER_5252",
    source: "Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5252",
    categories: ["Felling Bola", "ID_FMP_POWER_5252", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Net Shield"] = new engine.RulesElement({
    name: "Net Shield",
    type: "Power",
    id: "ID_FMP_POWER_5254",
    source: "Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5254",
    categories: ["Net Shield", "ID_FMP_POWER_5254", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Net Sweep"] = new engine.RulesElement({
    name: "Net Sweep",
    type: "Power",
    id: "ID_FMP_POWER_5253",
    source: "Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5253",
    categories: ["Net Sweep", "ID_FMP_POWER_5253", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  te = Power["Net Trap"] = new engine.RulesElement({
    name: "Net Trap",
    type: "Power",
    id: "ID_FMP_POWER_5255",
    source: "Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5255",
    categories: ["Net Trap", "ID_FMP_POWER_5255", "ID_INTERNAL_CATEGORY_DAILY_USAGE", "Daily Usage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "ID_INTERNAL_CATEGORY_MISS", "miss"]
  });
  byID[te.id] = te;
  
  te = Power["Whip Crack"] = new engine.RulesElement({
    name: "Whip Crack",
    type: "Power",
    id: "ID_FMP_POWER_5257",
    source: "Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5257",
    categories: ["Whip Crack", "ID_FMP_POWER_5257", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action"]
  });
  byID[te.id] = te;
  
  te = Power["Whip Snare"] = new engine.RulesElement({
    name: "Whip Snare",
    type: "Power",
    id: "ID_FMP_POWER_5256",
    source: "Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/power.aspx?id=5256",
    categories: ["Whip Snare", "ID_FMP_POWER_5256", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
