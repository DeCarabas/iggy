(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Race = types['Race'] || (types['Race'] = {});
  te = Race["Bladeling"] = new RulesElement({
    name: "Bladeling",
    type: "Race",
    id: "ID_FMP_RACE_38",
    source: "Manual of the Planes",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/race.aspx?id=38",
    categories: ["Bladeling", "ID_FMP_RACE_38"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_GRANTS_BLADELING"]);
      model.statadd("Speed", 6);
      model.statadd("Average Height", "5'8\"-6'4\"");
      model.statadd("Average Weight", "210-310 lb.");
      model.statadd("Size", "Medium");
    }
  });
  byID[te.id] = te;
  
  
})(this);
