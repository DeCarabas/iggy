(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Ritual = types['Ritual'] || (types['Ritual'] = {});
  te = Ritual["Rite of Arkentaash"] = new RulesElement({
    name: "Rite of Arkentaash",
    type: "Ritual",
    id: "ID_FMP_RITUAL_284",
    source: "Seekers of the Ashen Crown",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=284",
    categories: ["Rite of Arkentaash", "ID_FMP_RITUAL_284"]
  });
  byID[te.id] = te;
  
  
})(this);
