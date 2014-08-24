(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Internal = types['Internal'] || (types['Internal'] = {});
  te = Internal["SecondNotFirstPsionic"] = new RulesElement({
    name: "SecondNotFirstPsionic",
    type: "Internal",
    id: "ID_INTERNAL_INTERNAL_SECONDNOTFIRSTPSIONIC",
    source: "Player's Handbook",
    categories: ["SecondNotFirstPsionic", "ID_INTERNAL_INTERNAL_SECONDNOTFIRSTPSIONIC"],
    rules: function(model) {
      model.statadd("Power Points", 2);
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  
})(this);
