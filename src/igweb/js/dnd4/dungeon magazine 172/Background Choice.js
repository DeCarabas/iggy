(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Background_Choice = types['Background Choice'] || (types['Background Choice'] = {});
  te = Background_Choice["Airspur Benefit"] = new RulesElement({
    name: "Airspur Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_AIRSPUR_BENEFIT",
    source: "Dungeon Magazine 172",
    categories: ["Airspur Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_AIRSPUR_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.statadd("bonus to Acrobatics and Diplomacy", 2);
    }
  });
  byID[te.id] = te;
  
  
})(this);
