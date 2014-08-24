(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Ritual = types['Ritual'] || (types['Ritual'] = {});
  te = Ritual["Dark Gift of the Undying"] = new RulesElement({
    name: "Dark Gift of the Undying",
    type: "Ritual",
    id: "ID_FMP_RITUAL_72",
    source: "Monster Manual",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=72",
    categories: ["Dark Gift of the Undying", "ID_FMP_RITUAL_72"]
  });
  byID[te.id] = te;
  
  te = Ritual["Lich Transformation"] = new RulesElement({
    name: "Lich Transformation",
    type: "Ritual",
    id: "ID_FMP_RITUAL_71",
    source: "Monster Manual",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=71",
    categories: ["Lich Transformation", "ID_FMP_RITUAL_71"]
  });
  byID[te.id] = te;
  
  
})(this);
