(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Feat = types['Feat'] || (types['Feat'] = {});
  te = Feat["Fey Step Trailblazer"] = new RulesElement({
    name: "Fey Step Trailblazer",
    type: "Feat",
    id: "ID_FMP_FEAT_742",
    source: "Dragon Magazine 366",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=742",
    categories: ["Fey Step Trailblazer", "ID_FMP_FEAT_742"]
  });
  byID[te.id] = te;
  
  
})(this);
