(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Build = types['Build'] || (types['Build'] = {});
  te = Build["Bleak Disciple Assassin"] = new RulesElement({
    name: "Bleak Disciple Assassin",
    type: "Build",
    id: "ID_FMP_BUILD_84",
    source: "Dragon Magazine 379",
    categories: ["Bleak Disciple Assassin", "ID_FMP_BUILD_84", "ID_FMP_CLASS_466", "Assassin"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_BLEAK_DISCIPLE_ASSASSIN"]);
    }
  });
  byID[te.id] = te;
  
  te = Build["Night Stalker Assassin"] = new RulesElement({
    name: "Night Stalker Assassin",
    type: "Build",
    id: "ID_FMP_BUILD_85",
    source: "Dragon Magazine 379",
    categories: ["Night Stalker Assassin", "ID_FMP_BUILD_85", "ID_FMP_CLASS_466", "Assassin"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BUILD_SUGGESTIONS_NIGHT_STALKER_ASSASSIN"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
