define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Race = types['Race'] || (types['Race'] = {});
  te = Race["Changeling"] = new engine.RulesElement({
    name: "Changeling",
    type: "Race",
    id: "ID_FMP_RACE_14",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/race.aspx?id=14",
    categories: ["Changeling", "ID_FMP_RACE_14"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_CHANGELING"]);
      model.statadd("Speed", 6);
      model.statadd("Average Height", "5'7\"-6'0\"");
      model.statadd("Average Weight", "120-160 lb.");
      model.statadd("Size", "Medium");
      model.select('Race Ability Bonus', 1, "Changeling", {
        filter: function(model, element) { return (element.hasCategory("Dexterity") || element.hasCategory("Intelligence")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Race["Kalashtar"] = new engine.RulesElement({
    name: "Kalashtar",
    type: "Race",
    id: "ID_FMP_RACE_46",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/race.aspx?id=46",
    categories: ["Kalashtar", "ID_FMP_RACE_46"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_KALASHTAR"]);
      model.statadd("Speed", 6);
      model.statadd("Average Height", "5'8\"-6'3\"");
      model.statadd("Average Weight", "130-220 lb.");
      model.statadd("Size", "Medium");
      model.select('Racial Trait', 1, "Kalashtar", {
        filter: function(model, element) { return element.hasCategory("Skill Bonus"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Race["Warforged"] = new engine.RulesElement({
    name: "Warforged",
    type: "Race",
    id: "ID_FMP_RACE_28",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/race.aspx?id=28",
    categories: ["Warforged", "ID_FMP_RACE_28"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_WARFORGED"]);
      model.statadd("Speed", 6);
      model.statadd("Average Height", "6'0\"-6'6\"");
      model.statadd("Average Weight", "270-300 lb.");
      model.statadd("Size", "Medium");
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
