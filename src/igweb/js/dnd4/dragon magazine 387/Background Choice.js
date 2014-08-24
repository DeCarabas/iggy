(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Background_Choice = types['Background Choice'] || (types['Background Choice'] = {});
  te = Background_Choice["Urban Shaman Benefit"] = new RulesElement({
    name: "Urban Shaman Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_URBAN_SHAMAN_BENEFIT",
    source: "Dragon Magazine 387",
    categories: ["Urban Shaman Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_URBAN_SHAMAN_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"]
  });
  byID[te.id] = te;
  
  
})(this);
