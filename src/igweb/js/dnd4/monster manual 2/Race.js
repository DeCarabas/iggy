define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Race = types['Race'] || (types['Race'] = {});
  te = Race["Bullywug"] = new engine.RulesElement({
    name: "Bullywug",
    type: "Race",
    id: "ID_FMP_RACE_41",
    source: "Monster Manual 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/race.aspx?id=41",
    categories: ["Bullywug", "ID_FMP_RACE_41"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_BULLYWUG"]);
      model.statadd("Speed", 6);
      model.statadd("Average Height", "5'4\"-6'0\"");
      model.statadd("Average Weight", "150-240 lb.");
      model.statadd("Size", "Medium");
    }
  });
  byID[te.id] = te;
  
  te = Race["Duergar"] = new engine.RulesElement({
    name: "Duergar",
    type: "Race",
    id: "ID_FMP_RACE_42",
    source: "Monster Manual 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/race.aspx?id=42",
    categories: ["Duergar", "ID_FMP_RACE_42"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_DUERGAR"]);
      model.statadd("Speed", 6);
      model.statadd("Average Height", "4'2\"-4'8\"");
      model.statadd("Average Weight", "160-220 lb.");
      model.statadd("Size", "Medium");
    }
  });
  byID[te.id] = te;
  
  te = Race["Kenku"] = new engine.RulesElement({
    name: "Kenku",
    type: "Race",
    id: "ID_FMP_RACE_43",
    source: "Monster Manual 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/race.aspx?id=43",
    categories: ["Kenku", "ID_FMP_RACE_43"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_KENKU"]);
      model.statadd("Speed", 6);
      model.statadd("Average Height", "5'0\"-5'6\"");
      model.statadd("Average Weight", "110-150 lb.");
      model.statadd("Size", "Medium");
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
