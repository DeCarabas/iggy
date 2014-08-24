(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Power = types['Power'] || (types['Power'] = {});
  te = Power["Arcing Fire"] = new RulesElement({
    name: "Arcing Fire",
    type: "Power",
    id: "ID_FMP_POWER_7405",
    source: "PH Heroes: Series 1",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7405",
    categories: ["Arcing Fire", "ID_FMP_POWER_7405", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_128", "Sorcerer", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_3", "fire", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Challenging Strike"] = new RulesElement({
    name: "Challenging Strike",
    type: "Power",
    id: "ID_FMP_POWER_7407",
    source: "PH Heroes: Series 1",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7407",
    categories: ["Challenging Strike", "ID_FMP_POWER_7407", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_4", "Paladin", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Chilling Cloud"] = new RulesElement({
    name: "Chilling Cloud",
    type: "Power",
    id: "ID_FMP_POWER_7406",
    source: "PH Heroes: Series 1",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7406",
    categories: ["Chilling Cloud", "ID_FMP_POWER_7406", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_1", "cold", "ID_FMP_CATEGORY_25", "implement", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Cutting Words"] = new RulesElement({
    name: "Cutting Words",
    type: "Power",
    id: "ID_FMP_POWER_7403",
    source: "PH Heroes: Series 1",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7403",
    categories: ["Cutting Words", "ID_FMP_POWER_7403", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_104", "Bard", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Daring Shot"] = new RulesElement({
    name: "Daring Shot",
    type: "Power",
    id: "ID_FMP_POWER_7395",
    source: "PH Heroes: Series 1",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7395",
    categories: ["Daring Shot", "ID_FMP_POWER_7395", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Eldritch Strike"] = new RulesElement({
    name: "Eldritch Strike",
    type: "Power",
    id: "ID_FMP_POWER_7402",
    source: "PH Heroes: Series 1",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7402",
    categories: ["Eldritch Strike", "ID_FMP_POWER_7402", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return (element.hasCategory("Eldritch Strike") && element.hasCategory("Ability Choice")); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Power["Ethereal Sidestep"] = new RulesElement({
    name: "Ethereal Sidestep",
    type: "Power",
    id: "ID_FMP_POWER_7404",
    source: "PH Heroes: Series 1",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7404",
    categories: ["Ethereal Sidestep", "ID_FMP_POWER_7404", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_7", "Warlock", "ID_FMP_CATEGORY_31", "Arcane", "ID_FMP_CATEGORY_19", "teleportation", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Foe to Foe"] = new RulesElement({
    name: "Foe to Foe",
    type: "Power",
    id: "ID_FMP_POWER_7410",
    source: "PH Heroes: Series 1",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7410",
    categories: ["Foe to Foe", "ID_FMP_POWER_7410", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Gaze of Defiance"] = new RulesElement({
    name: "Gaze of Defiance",
    type: "Power",
    id: "ID_FMP_POWER_7408",
    source: "PH Heroes: Series 1",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7408",
    categories: ["Gaze of Defiance", "ID_FMP_POWER_7408", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_16", "psychic", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Grasping Tide (Druid)"] = new RulesElement({
    name: "Grasping Tide (Druid)",
    type: "Power",
    id: "ID_FMP_POWER_7411",
    source: "PH Heroes: Series 1",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7411",
    categories: ["Grasping Tide (Druid)", "ID_FMP_POWER_7411", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_126", "Druid", "ID_FMP_CATEGORY_25", "implement", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Hidden Blade"] = new RulesElement({
    name: "Hidden Blade",
    type: "Power",
    id: "ID_FMP_POWER_7399",
    source: "PH Heroes: Series 1",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7399",
    categories: ["Hidden Blade", "ID_FMP_POWER_7399", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_INTERNAL_CATEGORY_MINOR_ACTION", "Minor Action", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Hunter's Teamwork"] = new RulesElement({
    name: "Hunter's Teamwork",
    type: "Power",
    id: "ID_FMP_POWER_7397",
    source: "PH Heroes: Series 1",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7397",
    categories: ["Hunter's Teamwork", "ID_FMP_POWER_7397", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_5", "Ranger", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Knockdown Assault"] = new RulesElement({
    name: "Knockdown Assault",
    type: "Power",
    id: "ID_FMP_POWER_7400",
    source: "PH Heroes: Series 1",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7400",
    categories: ["Knockdown Assault", "ID_FMP_POWER_7400", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_3", "Fighter", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Laugh it Off"] = new RulesElement({
    name: "Laugh it Off",
    type: "Power",
    id: "ID_FMP_POWER_7412",
    source: "PH Heroes: Series 1",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7412",
    categories: ["Laugh it Off", "ID_FMP_POWER_7412", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_148", "Barbarian", "ID_FMP_CATEGORY_33", "Primal", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "6"]
  });
  byID[te.id] = te;
  
  te = Power["Probing Strike"] = new RulesElement({
    name: "Probing Strike",
    type: "Power",
    id: "ID_FMP_POWER_7396",
    source: "PH Heroes: Series 1",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7396",
    categories: ["Probing Strike", "ID_FMP_POWER_7396", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_6", "Rogue", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Repelling Shield"] = new RulesElement({
    name: "Repelling Shield",
    type: "Power",
    id: "ID_FMP_POWER_7401",
    source: "PH Heroes: Series 1",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7401",
    categories: ["Repelling Shield", "ID_FMP_POWER_7401", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_9", "Wizard", "ID_FMP_CATEGORY_31", "Arcane", "ID_INTERNAL_CATEGORY_IMMEDIATE_INTERRUPT", "Immediate Interrupt", "10"]
  });
  byID[te.id] = te;
  
  te = Power["Rousing Assault"] = new RulesElement({
    name: "Rousing Assault",
    type: "Power",
    id: "ID_FMP_POWER_7398",
    source: "PH Heroes: Series 1",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7398",
    categories: ["Rousing Assault", "ID_FMP_POWER_7398", "ID_INTERNAL_CATEGORY_ATTACK", "attack", "ID_INTERNAL_CATEGORY_AT-WILL", "at-will", "ID_INTERNAL_CATEGORY_AT-WILL_USAGE", "At-Will Usage", "ID_FMP_CLASS_8", "Warlord", "ID_FMP_CATEGORY_36", "martial", "ID_FMP_CATEGORY_24", "Weapon", "ID_INTERNAL_CATEGORY_STANDARD_ACTION", "standard action", "1"]
  });
  byID[te.id] = te;
  
  te = Power["Walk Among the Wounded"] = new RulesElement({
    name: "Walk Among the Wounded",
    type: "Power",
    id: "ID_FMP_POWER_7409",
    source: "PH Heroes: Series 1",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=7409",
    categories: ["Walk Among the Wounded", "ID_FMP_POWER_7409", "ID_INTERNAL_CATEGORY_UTILITY", "utility", "ID_INTERNAL_CATEGORY_ENCOUNTER_USAGE", "Encounter usage", "ID_FMP_CLASS_2", "Cleric", "ID_FMP_CATEGORY_32", "Divine", "ID_INTERNAL_CATEGORY_MOVE_ACTION", "Move Action", "6"]
  });
  byID[te.id] = te;
  
  
})(this);
