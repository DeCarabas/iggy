define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Race = types['Race'] || (types['Race'] = {});
  te = Race["Drow"] = new engine.RulesElement({
    name: "Drow",
    type: "Race",
    id: "ID_FMP_RACE_16",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/race.aspx?id=16",
    categories: ["Drow", "ID_FMP_RACE_16"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_DROW"]);
      model.statadd("Speed", 6);
      model.statadd("Average Height", "5'4\"-6'0\"");
      model.statadd("Average Weight", "130-170 lb.");
      model.statadd("Size", "Medium");
    }
  });
  byID[te.id] = te;
  
  te = Race["Genasi"] = new engine.RulesElement({
    name: "Genasi",
    type: "Race",
    id: "ID_FMP_RACE_33",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/race.aspx?id=33",
    categories: ["Genasi", "ID_FMP_RACE_33"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_GENASI"]);
      model.statadd("Speed", 6);
      model.statadd("Average Height", "5'7\"-6'2\"");
      model.statadd("Average Weight", "130-225 lb.");
      model.statadd("Size", "Medium");
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
