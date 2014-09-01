define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Feat = types['Feat'] || (types['Feat'] = {});
  te = Feat["Against All Odds"] = new engine.RulesElement({
    name: "Against All Odds",
    type: "Feat",
    id: "ID_FMP_FEAT_449",
    source: "Dragon Magazine 364",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=449",
    categories: ["Against All Odds", "ID_FMP_FEAT_449"],
    rules: function(model) {
      model.statadd("attack rolls", function() { /* if three or more enemies were adjacent to you at the start of your turn */ return 1; });
      model.statadd("damage rolls", function() { /* if three or more enemies were adjacent to you at the start of your turn */ return 1; });
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
