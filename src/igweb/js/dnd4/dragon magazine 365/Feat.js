(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Feat = types['Feat'] || (types['Feat'] = {});
  te = Feat["Favor of Tymora"] = new RulesElement({
    name: "Favor of Tymora",
    type: "Feat",
    id: "ID_FMP_FEAT_723",
    source: "Dragon Magazine 365",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=723",
    categories: ["Favor of Tymora", "ID_FMP_FEAT_723", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_4184"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
