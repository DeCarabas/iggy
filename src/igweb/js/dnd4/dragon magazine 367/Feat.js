define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Feat = types['Feat'] || (types['Feat'] = {});
  te = Feat["Brutal Charge"] = new engine.RulesElement({
    name: "Brutal Charge",
    type: "Feat",
    id: "ID_FMP_FEAT_932",
    source: "Dragon Magazine 367",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=932",
    categories: ["Brutal Charge", "ID_FMP_FEAT_932"]
  });
  byID[te.id] = te;
  
  te = Feat["Butcher's Lure"] = new engine.RulesElement({
    name: "Butcher's Lure",
    type: "Feat",
    id: "ID_FMP_FEAT_926",
    source: "Dragon Magazine 367",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=926",
    categories: ["Butcher's Lure", "ID_FMP_FEAT_926"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1217"]);
      model.statadd("Bluff Misc", function() { /* when using ghost sound to mimic specific people or sounds */ return 2; }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Carrion Eater"] = new engine.RulesElement({
    name: "Carrion Eater",
    type: "Feat",
    id: "ID_FMP_FEAT_927",
    source: "Dragon Magazine 367",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=927",
    categories: ["Carrion Eater", "ID_FMP_FEAT_927"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against poison */ return 4; }, "Feat");
      model.statadd("Endurance Misc", function() { /* to resist disease */ return 4; }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Claw Fighter"] = new engine.RulesElement({
    name: "Claw Fighter",
    type: "Feat",
    id: "ID_FMP_FEAT_928",
    source: "Dragon Magazine 367",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=928",
    categories: ["Claw Fighter", "ID_FMP_FEAT_928"],
    rules: function(model) {
      model.statadd("FREEBEE:ID_INTERNAL_WEAPON_CLAW_FIGHTER_CLAW", 1);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(CLAW_FIGHTER_CLAW)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Drow Fighting Style"] = new engine.RulesElement({
    name: "Drow Fighting Style",
    type: "Feat",
    id: "ID_FMP_FEAT_933",
    source: "Dragon Magazine 367",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=933",
    categories: ["Drow Fighting Style", "ID_FMP_FEAT_933"]
  });
  byID[te.id] = te;
  
  te = Feat["Drow Heretic"] = new engine.RulesElement({
    name: "Drow Heretic",
    type: "Feat",
    id: "ID_FMP_FEAT_934",
    source: "Dragon Magazine 367",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=934",
    categories: ["Drow Heretic", "ID_FMP_FEAT_934"],
    rules: function(model) {
      model.statadd("damage rolls", function() { /* against creatures with the spider keyword */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Earthshock Master"] = new engine.RulesElement({
    name: "Earthshock Master",
    type: "Feat",
    id: "ID_FMP_FEAT_921",
    source: "Dragon Magazine 367",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=921",
    categories: ["Earthshock Master", "ID_FMP_FEAT_921"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Fast Manifestation"] = new engine.RulesElement({
    name: "Fast Manifestation",
    type: "Feat",
    id: "ID_FMP_FEAT_922",
    source: "Dragon Magazine 367",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=922",
    categories: ["Fast Manifestation", "ID_FMP_FEAT_922"]
  });
  byID[te.id] = te;
  
  te = Feat["Fierce Charge"] = new engine.RulesElement({
    name: "Fierce Charge",
    type: "Feat",
    id: "ID_FMP_FEAT_930",
    source: "Dragon Magazine 367",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=930",
    categories: ["Fierce Charge", "ID_FMP_FEAT_930"]
  });
  byID[te.id] = te;
  
  te = Feat["Firepulse Master"] = new engine.RulesElement({
    name: "Firepulse Master",
    type: "Feat",
    id: "ID_FMP_FEAT_923",
    source: "Dragon Magazine 367",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=923",
    categories: ["Firepulse Master", "ID_FMP_FEAT_923"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Firepulse:damage", "+1d6");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Flickering Shroud"] = new engine.RulesElement({
    name: "Flickering Shroud",
    type: "Feat",
    id: "ID_FMP_FEAT_938",
    source: "Dragon Magazine 367",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=938",
    categories: ["Flickering Shroud", "ID_FMP_FEAT_938"]
  });
  byID[te.id] = te;
  
  te = Feat["Genasi Fire Affinity"] = new engine.RulesElement({
    name: "Genasi Fire Affinity",
    type: "Feat",
    id: "ID_FMP_FEAT_920",
    source: "Dragon Magazine 367",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=920",
    categories: ["Genasi Fire Affinity", "ID_FMP_FEAT_920"],
    rules: function(model) {
      model.statadd("resist:fire", 2);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Genasi Frost Affinity"] = new engine.RulesElement({
    name: "Genasi Frost Affinity",
    type: "Feat",
    id: "ID_FMP_FEAT_924",
    source: "Dragon Magazine 367",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=924",
    categories: ["Genasi Frost Affinity", "ID_FMP_FEAT_924"],
    rules: function(model) {
      model.statadd("resist:cold", 3);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Gnoll Tracker"] = new engine.RulesElement({
    name: "Gnoll Tracker",
    type: "Feat",
    id: "ID_FMP_FEAT_929",
    source: "Dragon Magazine 367",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=929",
    categories: ["Gnoll Tracker", "ID_FMP_FEAT_929"],
    rules: function(model) {
      model.statadd("Perception Misc", function() { /* to track */ return 5; }, "Feat");
      model.statadd("Insight Misc", function() { /* to penetrate an illusion or disguise */ return 5; }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Highborn Drow"] = new engine.RulesElement({
    name: "Highborn Drow",
    type: "Feat",
    id: "ID_FMP_FEAT_939",
    source: "Dragon Magazine 367",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=939",
    categories: ["Highborn Drow", "ID_FMP_FEAT_939"],
    rules: function(model) {
      model.statadd("Arcana Misc", 2, "Feat");
      model.grant(model.elements.id["ID_FMP_POWER_4790"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Instinctive Darkness"] = new engine.RulesElement({
    name: "Instinctive Darkness",
    type: "Feat",
    id: "ID_FMP_FEAT_935",
    source: "Dragon Magazine 367",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=935",
    categories: ["Instinctive Darkness", "ID_FMP_FEAT_935"]
  });
  byID[te.id] = te;
  
  te = Feat["Lolth's Meat"] = new engine.RulesElement({
    name: "Lolth's Meat",
    type: "Feat",
    id: "ID_FMP_FEAT_936",
    source: "Dragon Magazine 367",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=936",
    categories: ["Lolth's Meat", "ID_FMP_FEAT_936"],
    rules: function(model) {
      model.statadd("attack rolls", function() { /* if you reduced an enemy to 0 hit points or fewer since your last turn */ return 1; }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Primordial Surge"] = new engine.RulesElement({
    name: "Primordial Surge",
    type: "Feat",
    id: "ID_FMP_FEAT_925",
    source: "Dragon Magazine 367",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=925",
    categories: ["Primordial Surge", "ID_FMP_FEAT_925"]
  });
  byID[te.id] = te;
  
  te = Feat["Shadowborn"] = new engine.RulesElement({
    name: "Shadowborn",
    type: "Feat",
    id: "ID_FMP_FEAT_940",
    source: "Dragon Magazine 367",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=940",
    categories: ["Shadowborn", "ID_FMP_FEAT_940"]
  });
  byID[te.id] = te;
  
  te = Feat["Shadowslip"] = new engine.RulesElement({
    name: "Shadowslip",
    type: "Feat",
    id: "ID_FMP_FEAT_937",
    source: "Dragon Magazine 367",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=937",
    categories: ["Shadowslip", "ID_FMP_FEAT_937"]
  });
  byID[te.id] = te;
  
  te = Feat["Swift Bite"] = new engine.RulesElement({
    name: "Swift Bite",
    type: "Feat",
    id: "ID_FMP_FEAT_931",
    source: "Dragon Magazine 367",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=931",
    categories: ["Swift Bite", "ID_FMP_FEAT_931"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
