(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Race = types['Race'] || (types['Race'] = {});
  te = Race["Gnoll"] = new RulesElement({
    name: "Gnoll",
    type: "Race",
    id: "ID_FMP_RACE_19",
    source: "Dragon Magazine 367",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/race.aspx?id=19",
    categories: ["Gnoll", "ID_FMP_RACE_19"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_GRANTS_GNOLL"]);
      model.statadd("Speed", 7);
      model.statadd("Average Height", "7'0\"-7'6\"");
      model.statadd("Average Weight", "280-320 lb.");
      model.statadd("Size", "Medium");
    }
  });
  byID[te.id] = te;
  
  
})(this);
