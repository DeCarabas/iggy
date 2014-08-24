(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Race = types['Race'] || (types['Race'] = {});
  te = Race["Shadar-kai"] = new RulesElement({
    name: "Shadar-kai",
    type: "Race",
    id: "ID_FMP_RACE_26",
    source: "Dragon Magazine 372",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/race.aspx?id=26",
    categories: ["Shadar-kai", "ID_FMP_RACE_26"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_GRANTS_SHADAR-KAI"]);
      model.statadd("Speed", 6);
      model.statadd("Average Height", "5'7\"-6'0\"");
      model.statadd("Average Weight", "110-170 lb.");
      model.statadd("Size", "Medium");
      model.select('Language', 1, {
        filter: function(model, element) { return element.hasCategory("Starting"); }
      });
    }
  });
  byID[te.id] = te;
  
  
})(this);