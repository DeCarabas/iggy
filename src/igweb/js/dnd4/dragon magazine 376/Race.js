define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Race = types['Race'] || (types['Race'] = {});
  te = Race["Revenant"] = new engine.RulesElement({
    name: "Revenant",
    type: "Race",
    id: "ID_FMP_RACE_47",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/race.aspx?id=47",
    categories: ["Revenant", "ID_FMP_RACE_47"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_REVENANT"]);
      model.statadd("Speed", 6);
      model.statadd("Average Height", "5' 5”-6' 2”");
      model.statadd("Average Weight", "100-200 lb.");
      model.statadd("Size", "Medium");
      model.select('Language', 1, "Revenant", {
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
