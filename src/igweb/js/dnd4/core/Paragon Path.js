(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Paragon_Path = types['Paragon Path'] || (types['Paragon Path'] = {});
  te = Paragon_Path["Paragon Hybrid"] = new RulesElement({
    name: "Paragon Hybrid",
    type: "Paragon Path",
    id: "ID_INTERNAL_PARAGON_PATH_PARAGON_HYBRID",
    source: "Core",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=PATH_PARAGON_HYBRID",
    categories: ["Paragon Hybrid", "ID_INTERNAL_PARAGON_PATH_PARAGON_HYBRID"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_FEAT_PARAGON_HYBRID_TALENT"]);
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("encounter") && element.hasCategory("7")); }
      });
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("utility") && element.hasCategory("10")); }
      });
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("daily") && element.hasCategory("19")); }
      });
    }
  });
  byID[te.id] = te;
  
  
})(this);
