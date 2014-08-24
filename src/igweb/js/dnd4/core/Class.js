(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Class = types['Class'] || (types['Class'] = {});
  te = Class["Hybrid"] = new RulesElement({
    name: "Hybrid",
    type: "Class",
    id: "ID_INTERNAL_CLASS_HYBRID",
    source: "Core,Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/class.aspx?id=LASS_HYBRID",
    categories: ["Hybrid", "ID_INTERNAL_CLASS_HYBRID"],
    rules: function(model) {
      model.select('Hybrid Class', 2);
      model.select('Skill Training', 3, {
        filter: function(model, element) { return true /* NYI: Filter: $$HYBRID */; }
      });
    }
  });
  byID[te.id] = te;
  
  
})(this);
