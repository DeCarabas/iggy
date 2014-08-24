(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Familiar = types['Familiar'] || (types['Familiar'] = {});
  te = Familiar["Oso de la Fez, Former Show Bear"] = new RulesElement({
    name: "Oso de la Fez, Former Show Bear",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_55",
    source: "Dragon Magazine 376",
    categories: ["Oso de la Fez, Former Show Bear", "ID_FMP_FAMILIAR_55"],
    rules: function(model) {
      model.statadd("Intimidate Misc", 2);
    }
  });
  byID[te.id] = te;
  
  
})(this);
