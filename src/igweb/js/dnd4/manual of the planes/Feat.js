(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Feat = types['Feat'] || (types['Feat'] = {});
  te = Feat["Improved Razor Storm"] = new RulesElement({
    name: "Improved Razor Storm",
    type: "Feat",
    id: "ID_FMP_FEAT_1059",
    source: "Manual of the Planes",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1059",
    categories: ["Improved Razor Storm", "ID_FMP_FEAT_1059"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  
})(this);
