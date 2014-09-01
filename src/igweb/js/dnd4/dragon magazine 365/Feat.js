define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Feat = types['Feat'] || (types['Feat'] = {});
  te = Feat["Favor of Tymora"] = new engine.RulesElement({
    name: "Favor of Tymora",
    type: "Feat",
    id: "ID_FMP_FEAT_723",
    source: "Dragon Magazine 365",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=723",
    categories: ["Favor of Tymora", "ID_FMP_FEAT_723", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_4184"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
