(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Build = types['Build'] || (types['Build'] = {});
  te = Build["Warrior Forge Artificer"] = new RulesElement({
    name: "Warrior Forge Artificer",
    type: "Build",
    id: "ID_FMP_BUILD_96",
    source: "Dragon Magazine 381",
    categories: ["Warrior Forge Artificer", "ID_FMP_BUILD_96", "ID_FMP_CLASS_125", "Artificer"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_WARRIOR_FORGE_ARTIFICER"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
