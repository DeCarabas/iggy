(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Build = types['Build'] || (types['Build'] = {});
  te = Build["Assault Swordmage"] = new RulesElement({
    name: "Assault Swordmage",
    type: "Build",
    id: "ID_FMP_BUILD_20",
    source: "Forgotten Realms Player's Guide",
    categories: ["Assault Swordmage", "ID_FMP_BUILD_20", "ID_FMP_CLASS_53", "Swordmage"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_ASSAULT_SWORDMAGE"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Shielding Swordmage"] = new RulesElement({
    name: "Shielding Swordmage",
    type: "Build",
    id: "ID_FMP_BUILD_21",
    source: "Forgotten Realms Player's Guide",
    categories: ["Shielding Swordmage", "ID_FMP_BUILD_21", "ID_FMP_CLASS_53", "Swordmage"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_SHIELDING_SWORDMAGE"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
