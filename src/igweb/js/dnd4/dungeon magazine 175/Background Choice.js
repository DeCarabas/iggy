(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Background_Choice = types['Background Choice'] || (types['Background Choice'] = {});
  te = Background_Choice["Ikemmu Benefit"] = new RulesElement({
    name: "Ikemmu Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_IKEMMU_BENEFIT",
    source: "Dungeon Magazine 175",
    categories: ["Ikemmu Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_IKEMMU_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.statadd("Arcana Misc", 2);
      model.statadd("Dungeoneering Misc", 2);
    }
  });
  byID[te.id] = te;
  
  
})(this);
