(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Race = types['Race'] || (types['Race'] = {});
  te = Race["Revenant"] = new RulesElement({
    name: "Revenant",
    type: "Race",
    id: "ID_FMP_RACE_47",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/race.aspx?id=47",
    categories: ["Revenant", "ID_FMP_RACE_47"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_GRANTS_REVENANT"]);
      model.statadd("Speed", 6);
      model.statadd("Average Height", "5' 5”-6' 2”");
      model.statadd("Average Weight", "100-200 lb.");
      model.statadd("Size", "Medium");
      model.select('Language', 1, {
        filter: function(model, element) { return element.hasCategory("Starting"); }
      });
    }
  });
  byID[te.id] = te;
  
  
})(this);
