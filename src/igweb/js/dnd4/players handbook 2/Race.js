define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Race = types['Race'] || (types['Race'] = {});
  te = Race["Deva"] = new engine.RulesElement({
    name: "Deva",
    type: "Race",
    id: "ID_FMP_RACE_35",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/race.aspx?id=35",
    categories: ["Deva", "ID_FMP_RACE_35"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_DEVA"]);
      model.statadd("Speed", 6);
      model.statadd("Average Height", "6'1\"-6'6\"");
      model.statadd("Average Weight", "175-280 lb.");
      model.statadd("Size", "Medium");
      model.select('Language', 2, {
        filter: function(model, element) { return element.hasCategory("Starting"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Race["Gnome"] = new engine.RulesElement({
    name: "Gnome",
    type: "Race",
    id: "ID_FMP_RACE_20",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/race.aspx?id=20",
    categories: ["Gnome", "ID_FMP_RACE_20"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_GNOME"]);
      model.statadd("Speed", 5);
      model.statadd("Average Height", "3'4\"-3'8\"");
      model.statadd("Average Weight", "50-75 lb.");
      model.statadd("Size", "Small");
    }
  });
  byID[te.id] = te;
  
  te = Race["Goliath"] = new engine.RulesElement({
    name: "Goliath",
    type: "Race",
    id: "ID_FMP_RACE_37",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/race.aspx?id=37",
    categories: ["Goliath", "ID_FMP_RACE_37"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_GOLIATH"]);
      model.statadd("Speed", 6);
      model.statadd("Average Height", "7'2\"-7'8\"");
      model.statadd("Average Weight", "280-340 lb.");
      model.statadd("Size", "Medium");
      model.select('Language', 1, {
        filter: function(model, element) { return element.hasCategory("ID_FMP_RACE_37"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Race["Half-Orc"] = new engine.RulesElement({
    name: "Half-Orc",
    type: "Race",
    id: "ID_FMP_RACE_36",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/race.aspx?id=36",
    categories: ["Half-Orc", "ID_FMP_RACE_36"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_HALF-ORC"]);
      model.statadd("Speed", 6);
      model.statadd("Average Height", "5'9\"-6'4\"");
      model.statadd("Average Weight", "155-225 lb.");
      model.statadd("Size", "Medium");
    }
  });
  byID[te.id] = te;
  
  te = Race["Longtooth Shifter"] = new engine.RulesElement({
    name: "Longtooth Shifter",
    type: "Race",
    id: "ID_FMP_RACE_27",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/race.aspx?id=27",
    categories: ["Longtooth Shifter", "ID_FMP_RACE_27"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_LONGTOOTH_SHIFTER"]);
      model.statadd("Speed", 6);
      model.statadd("Average Height", "5'7\"-6'0\"");
      model.statadd("Average Weight", "130-180 lb.");
      model.statadd("Size", "Medium");
      model.select('Language', 1, {
        filter: function(model, element) { return element.hasCategory("Starting"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Race["Razorclaw Shifter"] = new engine.RulesElement({
    name: "Razorclaw Shifter",
    type: "Race",
    id: "ID_FMP_RACE_30",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/race.aspx?id=30",
    categories: ["Razorclaw Shifter", "ID_FMP_RACE_30"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_RAZORCLAW_SHIFTER"]);
      model.statadd("Speed", 6);
      model.statadd("Average Height", "5'7\"-6'0\"");
      model.statadd("Average Weight", "130-180 lb.");
      model.statadd("Size", "Medium");
      model.select('Language', 1, {
        filter: function(model, element) { return element.hasCategory("Starting"); }
      });
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
