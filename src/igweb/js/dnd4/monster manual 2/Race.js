(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Race = types['Race'] || (types['Race'] = {});
  te = Race["Bullywug"] = new RulesElement({
    name: "Bullywug",
    type: "Race",
    id: "ID_FMP_RACE_41",
    source: "Monster Manual 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/race.aspx?id=41",
    categories: ["Bullywug", "ID_FMP_RACE_41"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_GRANTS_BULLYWUG"]);
      model.statadd("Speed", 6);
      model.statadd("Average Height", "5'4\"-6'0\"");
      model.statadd("Average Weight", "150-240 lb.");
      model.statadd("Size", "Medium");
    }
  });
  byID[te.id] = te;
  
  te = Race["Duergar"] = new RulesElement({
    name: "Duergar",
    type: "Race",
    id: "ID_FMP_RACE_42",
    source: "Monster Manual 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/race.aspx?id=42",
    categories: ["Duergar", "ID_FMP_RACE_42"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_GRANTS_DUERGAR"]);
      model.statadd("Speed", 6);
      model.statadd("Average Height", "4'2\"-4'8\"");
      model.statadd("Average Weight", "160-220 lb.");
      model.statadd("Size", "Medium");
    }
  });
  byID[te.id] = te;
  
  te = Race["Kenku"] = new RulesElement({
    name: "Kenku",
    type: "Race",
    id: "ID_FMP_RACE_43",
    source: "Monster Manual 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/race.aspx?id=43",
    categories: ["Kenku", "ID_FMP_RACE_43"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_GRANTS_KENKU"]);
      model.statadd("Speed", 6);
      model.statadd("Average Height", "5'0\"-5'6\"");
      model.statadd("Average Weight", "110-150 lb.");
      model.statadd("Size", "Medium");
    }
  });
  byID[te.id] = te;
  
  
})(this);
