define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Race = types['Race'] || (types['Race'] = {});
  te = Race["Gnoll"] = new engine.RulesElement({
    name: "Gnoll",
    type: "Race",
    id: "ID_FMP_RACE_19",
    source: "Dragon Magazine 367",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/race.aspx?id=19",
    categories: ["Gnoll", "ID_FMP_RACE_19"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_GNOLL"]);
      model.statadd("Speed", 7);
      model.statadd("Average Height", "7'0\"-7'6\"");
      model.statadd("Average Weight", "280-320 lb.");
      model.statadd("Size", "Medium");
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
