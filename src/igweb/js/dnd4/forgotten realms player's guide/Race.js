(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Race = types['Race'] || (types['Race'] = {});
  te = Race["Drow"] = new RulesElement({
    name: "Drow",
    type: "Race",
    id: "ID_FMP_RACE_16",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/race.aspx?id=16",
    categories: ["Drow", "ID_FMP_RACE_16"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_GRANTS_DROW"]);
      model.statadd("Speed", 6);
      model.statadd("Average Height", "5'4\"-6'0\"");
      model.statadd("Average Weight", "130-170 lb.");
      model.statadd("Size", "Medium");
    }
  });
  byID[te.id] = te;
  
  te = Race["Genasi"] = new RulesElement({
    name: "Genasi",
    type: "Race",
    id: "ID_FMP_RACE_33",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/race.aspx?id=33",
    categories: ["Genasi", "ID_FMP_RACE_33"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_GRANTS_GENASI"]);
      model.statadd("Speed", 6);
      model.statadd("Average Height", "5'7\"-6'2\"");
      model.statadd("Average Weight", "130-225 lb.");
      model.statadd("Size", "Medium");
    }
  });
  byID[te.id] = te;
  
  
})(this);
