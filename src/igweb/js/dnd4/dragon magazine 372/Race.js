define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Race = types['Race'] || (types['Race'] = {});
  te = Race["Shadar-kai"] = new engine.RulesElement({
    name: "Shadar-kai",
    type: "Race",
    id: "ID_FMP_RACE_26",
    source: "Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/race.aspx?id=26",
    categories: ["Shadar-kai", "ID_FMP_RACE_26"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_SHADAR-KAI"]);
      model.statadd("Speed", 6);
      model.statadd("Average Height", "5'7\"-6'0\"");
      model.statadd("Average Weight", "110-170 lb.");
      model.statadd("Size", "Medium");
      model.select('Language', 1, "Shadar-kai", {
        filter: function(model, element) { return element.hasCategory("Starting"); }
      });
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
