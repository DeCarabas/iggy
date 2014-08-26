define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Ritual_Scroll = types['Ritual Scroll'] || (types['Ritual Scroll'] = {});
  te = Ritual_Scroll["Scroll of Decipher Script"] = new engine.RulesElement({
    name: "Scroll of Decipher Script",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_DECIPHER_SCRIPT",
    source: "Martial Power 2",
    categories: ["Scroll of Decipher Script", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_DECIPHER_SCRIPT"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Embalm"] = new engine.RulesElement({
    name: "Scroll of Embalm",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_EMBALM",
    source: "Martial Power 2",
    categories: ["Scroll of Embalm", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_EMBALM"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Feign Death"] = new engine.RulesElement({
    name: "Scroll of Feign Death",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_FEIGN_DEATH",
    source: "Martial Power 2",
    categories: ["Scroll of Feign Death", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_FEIGN_DEATH"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Forge Armor"] = new engine.RulesElement({
    name: "Scroll of Forge Armor",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_FORGE_ARMOR",
    source: "Martial Power 2",
    categories: ["Scroll of Forge Armor", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_FORGE_ARMOR"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Forge Weapon"] = new engine.RulesElement({
    name: "Scroll of Forge Weapon",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_FORGE_WEAPON",
    source: "Martial Power 2",
    categories: ["Scroll of Forge Weapon", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_FORGE_WEAPON"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Fortify Beast"] = new engine.RulesElement({
    name: "Scroll of Fortify Beast",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_FORTIFY_BEAST",
    source: "Martial Power 2",
    categories: ["Scroll of Fortify Beast", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_FORTIFY_BEAST"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Handle Steed"] = new engine.RulesElement({
    name: "Scroll of Handle Steed",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_HANDLE_STEED",
    source: "Martial Power 2",
    categories: ["Scroll of Handle Steed", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_HANDLE_STEED"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Hidden Pocket"] = new engine.RulesElement({
    name: "Scroll of Hidden Pocket",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_HIDDEN_POCKET",
    source: "Martial Power 2",
    categories: ["Scroll of Hidden Pocket", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_HIDDEN_POCKET"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Long-Distance Runner"] = new engine.RulesElement({
    name: "Scroll of Long-Distance Runner",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_LONG-DISTANCE_RUNNER",
    source: "Martial Power 2",
    categories: ["Scroll of Long-Distance Runner", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_LONG-DISTANCE_RUNNER"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Master Artisan"] = new engine.RulesElement({
    name: "Scroll of Master Artisan",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_MASTER_ARTISAN",
    source: "Martial Power 2",
    categories: ["Scroll of Master Artisan", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_MASTER_ARTISAN"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Peerless Exploration"] = new engine.RulesElement({
    name: "Scroll of Peerless Exploration",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_PEERLESS_EXPLORATION",
    source: "Martial Power 2",
    categories: ["Scroll of Peerless Exploration", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_PEERLESS_EXPLORATION"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Reliable Balance"] = new engine.RulesElement({
    name: "Scroll of Reliable Balance",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_RELIABLE_BALANCE",
    source: "Martial Power 2",
    categories: ["Scroll of Reliable Balance", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_RELIABLE_BALANCE"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Survivor's Assurance"] = new engine.RulesElement({
    name: "Scroll of Survivor's Assurance",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_SURVIVOR'S_ASSURANCE",
    source: "Martial Power 2",
    categories: ["Scroll of Survivor's Assurance", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_SURVIVOR'S_ASSURANCE"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Survivor's Preparation"] = new engine.RulesElement({
    name: "Scroll of Survivor's Preparation",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_SURVIVOR'S_PREPARATION",
    source: "Martial Power 2",
    categories: ["Scroll of Survivor's Preparation", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_SURVIVOR'S_PREPARATION"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Temporary Fix"] = new engine.RulesElement({
    name: "Scroll of Temporary Fix",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_TEMPORARY_FIX",
    source: "Martial Power 2",
    categories: ["Scroll of Temporary Fix", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_TEMPORARY_FIX"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Thorough Search"] = new engine.RulesElement({
    name: "Scroll of Thorough Search",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_THOROUGH_SEARCH",
    source: "Martial Power 2",
    categories: ["Scroll of Thorough Search", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_THOROUGH_SEARCH"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Tracker's Eye"] = new engine.RulesElement({
    name: "Scroll of Tracker's Eye",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_TRACKER'S_EYE",
    source: "Martial Power 2",
    categories: ["Scroll of Tracker's Eye", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_TRACKER'S_EYE"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Travel Sense"] = new engine.RulesElement({
    name: "Scroll of Travel Sense",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_TRAVEL_SENSE",
    source: "Martial Power 2",
    categories: ["Scroll of Travel Sense", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_TRAVEL_SENSE"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Uncanny Strength"] = new engine.RulesElement({
    name: "Scroll of Uncanny Strength",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_UNCANNY_STRENGTH",
    source: "Martial Power 2",
    categories: ["Scroll of Uncanny Strength", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_UNCANNY_STRENGTH"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Use Scroll"] = new engine.RulesElement({
    name: "Scroll of Use Scroll",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_USE_SCROLL",
    source: "Martial Power 2",
    categories: ["Scroll of Use Scroll", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_USE_SCROLL"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Warded Campsite"] = new engine.RulesElement({
    name: "Scroll of Warded Campsite",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_WARDED_CAMPSITE",
    source: "Martial Power 2",
    categories: ["Scroll of Warded Campsite", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_WARDED_CAMPSITE"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Word on the Street"] = new engine.RulesElement({
    name: "Scroll of Word on the Street",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_WORD_ON_THE_STREET",
    source: "Martial Power 2",
    categories: ["Scroll of Word on the Street", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_WORD_ON_THE_STREET"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
