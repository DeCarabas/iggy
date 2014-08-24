(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Class = types['Class'] || (types['Class'] = {});
  te = Class["Artificer"] = new RulesElement({
    name: "Artificer",
    type: "Class",
    id: "ID_FMP_CLASS_125",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/class.aspx?id=125",
    categories: ["Artificer", "ID_FMP_CLASS_125"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_GRANTS_ARTIFICER"]);
      model.select('Power', 2, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
      model.statadd("_CLASSNAME", "ID_FMP_CLASS_125");
      model.statadd("_LEVEL-ONE-HPS", 12);
      model.statadd("_PER-LEVEL-HPS", 5);
      model.statadd("Healing Surges", 6);
      model.select('Build', 1, {
        optional: true,
        filter: function(model, element) { return element.hasCategory(model['class'].id); }
      });
      model.statadd("Fortitude Defense Class Bonus", 1);
      model.statadd("Will Defense Class Bonus", 1);
      model.select('Skill Training', 4, {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_125"); }
      });
    }
  });
  byID[te.id] = te;
  
  
})(this);
