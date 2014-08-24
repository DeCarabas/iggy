(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Class = types['Class'] || (types['Class'] = {});
  te = Class["Swordmage"] = new RulesElement({
    name: "Swordmage",
    type: "Class",
    id: "ID_FMP_CLASS_53",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/class.aspx?id=53",
    categories: ["Swordmage", "ID_FMP_CLASS_53"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_GRANTS_SWORDMAGE"]);
      model.select('Power', 2, {
        filter: function(model, element) { return (element.hasCategory(model['class'].id) && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
      model.statadd("_CLASSNAME", "ID_FMP_CLASS_53");
      model.statadd("_LEVEL-ONE-HPS", 15);
      model.statadd("_PER-LEVEL-HPS", 6);
      model.statadd("Healing Surges", 8);
      model.select('Build', 1, {
        optional: true,
        filter: function(model, element) { return element.hasCategory(model['class'].id); }
      });
      model.statadd("Will Defense Class Bonus", 2);
      model.select('Skill Training', 3, {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_53"); }
      });
    }
  });
  byID[te.id] = te;
  
  
})(this);
