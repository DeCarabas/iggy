define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Feat = types['Feat'] || (types['Feat'] = {});
  te = Feat["Bane's Tactics"] = new engine.RulesElement({
    name: "Bane's Tactics",
    type: "Feat",
    id: "ID_FMP_FEAT_1111",
    source: "Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1111",
    categories: ["Bane's Tactics", "ID_FMP_FEAT_1111", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_6595"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
