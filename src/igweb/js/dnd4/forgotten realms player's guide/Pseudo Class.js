(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Pseudo_Class = types['Pseudo Class'] || (types['Pseudo Class'] = {});
  te = Pseudo_Class["Spellscarred"] = new RulesElement({
    name: "Spellscarred",
    type: "Pseudo Class",
    id: "ID_FMP_PSEUDO_CLASS_216",
    source: "Forgotten Realms Player's Guide",
    categories: ["Spellscarred", "ID_FMP_PSEUDO_CLASS_216"]
  });
  byID[te.id] = te;
  
  
})(this);
