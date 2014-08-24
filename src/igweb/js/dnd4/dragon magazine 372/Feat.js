(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Feat = types['Feat'] || (types['Feat'] = {});
  te = Feat["Bane's Tactics"] = new RulesElement({
    name: "Bane's Tactics",
    type: "Feat",
    id: "ID_FMP_FEAT_1111",
    source: "Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1111",
    categories: ["Bane's Tactics", "ID_FMP_FEAT_1111", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_6595"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
