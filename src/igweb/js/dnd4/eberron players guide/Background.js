define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Background = types['Background'] || (types['Background'] = {});
  te = Background["Aerenal"] = new engine.RulesElement({
    name: "Aerenal",
    type: "Background",
    id: "ID_FMP_BACKGROUND_251",
    source: "Eberron Player's Guide",
    categories: ["Aerenal", "ID_FMP_BACKGROUND_251"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Argonnessen"] = new engine.RulesElement({
    name: "Argonnessen",
    type: "Background",
    id: "ID_FMP_BACKGROUND_252",
    source: "Eberron Player's Guide",
    categories: ["Argonnessen", "ID_FMP_BACKGROUND_252"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Aundair (City)"] = new engine.RulesElement({
    name: "Aundair (City)",
    type: "Background",
    id: "ID_FMP_BACKGROUND_234",
    source: "Eberron Player's Guide",
    categories: ["Aundair (City)", "ID_FMP_BACKGROUND_234"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Aundair (Small village)"] = new engine.RulesElement({
    name: "Aundair (Small village)",
    type: "Background",
    id: "ID_FMP_BACKGROUND_233",
    source: "Eberron Player's Guide",
    categories: ["Aundair (Small village)", "ID_FMP_BACKGROUND_233"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Basilisk's Gaze"] = new engine.RulesElement({
    name: "Basilisk's Gaze",
    type: "Background",
    id: "ID_FMP_BACKGROUND_214",
    source: "Eberron Player's Guide",
    categories: ["Basilisk's Gaze", "ID_FMP_BACKGROUND_214"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PERCEPTION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Breland"] = new engine.RulesElement({
    name: "Breland",
    type: "Background",
    id: "ID_FMP_BACKGROUND_235",
    source: "Eberron Player's Guide",
    categories: ["Breland", "ID_FMP_BACKGROUND_235"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DIPLOMACY"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Cannith Inventor"] = new engine.RulesElement({
    name: "Cannith Inventor",
    type: "Background",
    id: "ID_FMP_BACKGROUND_195",
    source: "Eberron Player's Guide",
    categories: ["Cannith Inventor", "ID_FMP_BACKGROUND_195"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Cannith Tinker"] = new engine.RulesElement({
    name: "Cannith Tinker",
    type: "Background",
    id: "ID_FMP_BACKGROUND_196",
    source: "Eberron Player's Guide",
    categories: ["Cannith Tinker", "ID_FMP_BACKGROUND_196"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STREETWISE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_THIEVERY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Cannith Warforged"] = new engine.RulesElement({
    name: "Cannith Warforged",
    type: "Background",
    id: "ID_FMP_BACKGROUND_197",
    source: "Eberron Player's Guide",
    categories: ["Cannith Warforged", "ID_FMP_BACKGROUND_197"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DIPLOMACY"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Caravan Scout"] = new engine.RulesElement({
    name: "Caravan Scout",
    type: "Background",
    id: "ID_FMP_BACKGROUND_217",
    source: "Eberron Player's Guide",
    categories: ["Caravan Scout", "ID_FMP_BACKGROUND_217"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PERCEPTION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Child of Two Worlds"] = new engine.RulesElement({
    name: "Child of Two Worlds",
    type: "Background",
    id: "ID_FMP_BACKGROUND_232",
    source: "Eberron Player's Guide",
    categories: ["Child of Two Worlds", "ID_FMP_BACKGROUND_232"]
  });
  byID[te.id] = te;
  
  te = Background["Clandestine Courtier"] = new engine.RulesElement({
    name: "Clandestine Courtier",
    type: "Background",
    id: "ID_FMP_BACKGROUND_227",
    source: "Eberron Player's Guide",
    categories: ["Clandestine Courtier", "ID_FMP_BACKGROUND_227"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Commissioned Officer"] = new engine.RulesElement({
    name: "Commissioned Officer",
    type: "Background",
    id: "ID_FMP_BACKGROUND_260",
    source: "Eberron Player's Guide",
    categories: ["Commissioned Officer", "ID_FMP_BACKGROUND_260"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Cultural Assimilator"] = new engine.RulesElement({
    name: "Cultural Assimilator",
    type: "Background",
    id: "ID_FMP_BACKGROUND_263",
    source: "Eberron Player's Guide",
    categories: ["Cultural Assimilator", "ID_FMP_BACKGROUND_263"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DIPLOMACY"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Darguun"] = new engine.RulesElement({
    name: "Darguun",
    type: "Background",
    id: "ID_FMP_BACKGROUND_240",
    source: "Eberron Player's Guide",
    categories: ["Darguun", "ID_FMP_BACKGROUND_240"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Demon Wastes"] = new engine.RulesElement({
    name: "Demon Wastes",
    type: "Background",
    id: "ID_FMP_BACKGROUND_241",
    source: "Eberron Player's Guide",
    categories: ["Demon Wastes", "ID_FMP_BACKGROUND_241"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Deneith Bodyguard"] = new engine.RulesElement({
    name: "Deneith Bodyguard",
    type: "Background",
    id: "ID_FMP_BACKGROUND_199",
    source: "Eberron Player's Guide",
    categories: ["Deneith Bodyguard", "ID_FMP_BACKGROUND_199"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PERCEPTION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Deneith Mercenary"] = new engine.RulesElement({
    name: "Deneith Mercenary",
    type: "Background",
    id: "ID_FMP_BACKGROUND_198",
    source: "Eberron Player's Guide",
    categories: ["Deneith Mercenary", "ID_FMP_BACKGROUND_198"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Deserter"] = new engine.RulesElement({
    name: "Deserter",
    type: "Background",
    id: "ID_FMP_BACKGROUND_257",
    source: "Eberron Player's Guide",
    categories: ["Deserter", "ID_FMP_BACKGROUND_257"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Dragon's Path"] = new engine.RulesElement({
    name: "Dragon's Path",
    type: "Background",
    id: "ID_FMP_BACKGROUND_228",
    source: "Eberron Player's Guide",
    categories: ["Dragon's Path", "ID_FMP_BACKGROUND_228"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Droaam"] = new engine.RulesElement({
    name: "Droaam",
    type: "Background",
    id: "ID_FMP_BACKGROUND_242",
    source: "Eberron Player's Guide",
    categories: ["Droaam", "ID_FMP_BACKGROUND_242"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DUNGEONEERING"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Eldeen Reaches"] = new engine.RulesElement({
    name: "Eldeen Reaches",
    type: "Background",
    id: "ID_FMP_BACKGROUND_243",
    source: "Eberron Player's Guide",
    categories: ["Eldeen Reaches", "ID_FMP_BACKGROUND_243"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Enlisted Soldier"] = new engine.RulesElement({
    name: "Enlisted Soldier",
    type: "Background",
    id: "ID_FMP_BACKGROUND_261",
    source: "Eberron Player's Guide",
    categories: ["Enlisted Soldier", "ID_FMP_BACKGROUND_261"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Follower of Sahemi"] = new engine.RulesElement({
    name: "Follower of Sahemi",
    type: "Background",
    id: "ID_FMP_BACKGROUND_206",
    source: "Eberron Player's Guide",
    categories: ["Follower of Sahemi", "ID_FMP_BACKGROUND_206"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HEAL"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Ghallanda Dawn-Builder"] = new engine.RulesElement({
    name: "Ghallanda Dawn-Builder",
    type: "Background",
    id: "ID_FMP_BACKGROUND_202",
    source: "Eberron Player's Guide",
    categories: ["Ghallanda Dawn-Builder", "ID_FMP_BACKGROUND_202"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DIPLOMACY"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Ghallanda Enclave Guard"] = new engine.RulesElement({
    name: "Ghallanda Enclave Guard",
    type: "Background",
    id: "ID_FMP_BACKGROUND_201",
    source: "Eberron Player's Guide",
    categories: ["Ghallanda Enclave Guard", "ID_FMP_BACKGROUND_201"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PERCEPTION"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Ghorad'din Recruit"] = new engine.RulesElement({
    name: "Ghorad'din Recruit",
    type: "Background",
    id: "ID_FMP_BACKGROUND_208",
    source: "Eberron Player's Guide",
    categories: ["Ghorad'din Recruit", "ID_FMP_BACKGROUND_208"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Inquisitive"] = new engine.RulesElement({
    name: "Inquisitive",
    type: "Background",
    id: "ID_FMP_BACKGROUND_262",
    source: "Eberron Player's Guide",
    categories: ["Inquisitive", "ID_FMP_BACKGROUND_262"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STREETWISE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Iron Gatekeeper"] = new engine.RulesElement({
    name: "Iron Gatekeeper",
    type: "Background",
    id: "ID_FMP_BACKGROUND_207",
    source: "Eberron Player's Guide",
    categories: ["Iron Gatekeeper", "ID_FMP_BACKGROUND_207"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_THIEVERY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Jorasco Investigator"] = new engine.RulesElement({
    name: "Jorasco Investigator",
    type: "Background",
    id: "ID_FMP_BACKGROUND_205",
    source: "Eberron Player's Guide",
    categories: ["Jorasco Investigator", "ID_FMP_BACKGROUND_205"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HEAL"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Jorasco Medic"] = new engine.RulesElement({
    name: "Jorasco Medic",
    type: "Background",
    id: "ID_FMP_BACKGROUND_204",
    source: "Eberron Player's Guide",
    categories: ["Jorasco Medic", "ID_FMP_BACKGROUND_204"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HEAL"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Karrnath"] = new engine.RulesElement({
    name: "Karrnath",
    type: "Background",
    id: "ID_FMP_BACKGROUND_237",
    source: "Eberron Player's Guide",
    categories: ["Karrnath", "ID_FMP_BACKGROUND_237"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Khyber"] = new engine.RulesElement({
    name: "Khyber",
    type: "Background",
    id: "ID_FMP_BACKGROUND_254",
    source: "Eberron Player's Guide",
    categories: ["Khyber", "ID_FMP_BACKGROUND_254"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DUNGEONEERING"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Korunda Vault-Keeper"] = new engine.RulesElement({
    name: "Korunda Vault-Keeper",
    type: "Background",
    id: "ID_FMP_BACKGROUND_209",
    source: "Eberron Player's Guide",
    categories: ["Korunda Vault-Keeper", "ID_FMP_BACKGROUND_209"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DUNGEONEERING"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Lhazaar Principalities"] = new engine.RulesElement({
    name: "Lhazaar Principalities",
    type: "Background",
    id: "ID_FMP_BACKGROUND_244",
    source: "Eberron Player's Guide",
    categories: ["Lhazaar Principalities", "ID_FMP_BACKGROUND_244"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_THIEVERY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Liondrake's Roar Mercenary"] = new engine.RulesElement({
    name: "Liondrake's Roar Mercenary",
    type: "Background",
    id: "ID_FMP_BACKGROUND_224",
    source: "Eberron Player's Guide",
    categories: ["Liondrake's Roar Mercenary", "ID_FMP_BACKGROUND_224"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DUNGEONEERING"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Lyrandar Airship Sailor"] = new engine.RulesElement({
    name: "Lyrandar Airship Sailor",
    type: "Background",
    id: "ID_FMP_BACKGROUND_210",
    source: "Eberron Player's Guide",
    categories: ["Lyrandar Airship Sailor", "ID_FMP_BACKGROUND_210"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PERCEPTION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Lyrandar Privateer"] = new engine.RulesElement({
    name: "Lyrandar Privateer",
    type: "Background",
    id: "ID_FMP_BACKGROUND_212",
    source: "Eberron Player's Guide",
    categories: ["Lyrandar Privateer", "ID_FMP_BACKGROUND_212"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ACROBATICS"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Lyrandar Raincaller"] = new engine.RulesElement({
    name: "Lyrandar Raincaller",
    type: "Background",
    id: "ID_FMP_BACKGROUND_211",
    source: "Eberron Player's Guide",
    categories: ["Lyrandar Raincaller", "ID_FMP_BACKGROUND_211"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Marshal's Deputy"] = new engine.RulesElement({
    name: "Marshal's Deputy",
    type: "Background",
    id: "ID_FMP_BACKGROUND_200",
    source: "Eberron Player's Guide",
    categories: ["Marshal's Deputy", "ID_FMP_BACKGROUND_200"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STREETWISE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Mental Bastion"] = new engine.RulesElement({
    name: "Mental Bastion",
    type: "Background",
    id: "ID_FMP_BACKGROUND_266",
    source: "Eberron Player's Guide",
    categories: ["Mental Bastion", "ID_FMP_BACKGROUND_266"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Mist-Touched"] = new engine.RulesElement({
    name: "Mist-Touched",
    type: "Background",
    id: "ID_FMP_BACKGROUND_258",
    source: "Eberron Player's Guide",
    categories: ["Mist-Touched", "ID_FMP_BACKGROUND_258"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Mournland (Cyre)"] = new engine.RulesElement({
    name: "Mournland (Cyre)",
    type: "Background",
    id: "ID_FMP_BACKGROUND_238",
    source: "Eberron Player's Guide",
    categories: ["Mournland (Cyre)", "ID_FMP_BACKGROUND_238"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STREETWISE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Mror Holds"] = new engine.RulesElement({
    name: "Mror Holds",
    type: "Background",
    id: "ID_FMP_BACKGROUND_245",
    source: "Eberron Player's Guide",
    categories: ["Mror Holds", "ID_FMP_BACKGROUND_245"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DUNGEONEERING"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Natural Chameleon"] = new engine.RulesElement({
    name: "Natural Chameleon",
    type: "Background",
    id: "ID_FMP_BACKGROUND_264",
    source: "Eberron Player's Guide",
    categories: ["Natural Chameleon", "ID_FMP_BACKGROUND_264"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Orien Courier"] = new engine.RulesElement({
    name: "Orien Courier",
    type: "Background",
    id: "ID_FMP_BACKGROUND_215",
    source: "Eberron Player's Guide",
    categories: ["Orien Courier", "ID_FMP_BACKGROUND_215"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ACROBATICS"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Orien Smuggler"] = new engine.RulesElement({
    name: "Orien Smuggler",
    type: "Background",
    id: "ID_FMP_BACKGROUND_216",
    source: "Eberron Player's Guide",
    categories: ["Orien Smuggler", "ID_FMP_BACKGROUND_216"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ACROBATICS"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Phiarlan Archivist"] = new engine.RulesElement({
    name: "Phiarlan Archivist",
    type: "Background",
    id: "ID_FMP_BACKGROUND_219",
    source: "Eberron Player's Guide",
    categories: ["Phiarlan Archivist", "ID_FMP_BACKGROUND_219"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Prophecy Sage"] = new engine.RulesElement({
    name: "Prophecy Sage",
    type: "Background",
    id: "ID_FMP_BACKGROUND_220",
    source: "Eberron Player's Guide",
    categories: ["Prophecy Sage", "ID_FMP_BACKGROUND_220"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DIPLOMACY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Q'barra"] = new engine.RulesElement({
    name: "Q'barra",
    type: "Background",
    id: "ID_FMP_BACKGROUND_246",
    source: "Eberron Player's Guide",
    categories: ["Q'barra", "ID_FMP_BACKGROUND_246"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Refugee (Eberron Player's Guide)"] = new engine.RulesElement({
    name: "Refugee (Eberron Player's Guide)",
    type: "Background",
    id: "ID_FMP_BACKGROUND_259",
    source: "Eberron Player's Guide",
    categories: ["Refugee (Eberron Player's Guide)", "ID_FMP_BACKGROUND_259"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STREETWISE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Sarlona"] = new engine.RulesElement({
    name: "Sarlona",
    type: "Background",
    id: "ID_FMP_BACKGROUND_255",
    source: "Eberron Player's Guide",
    categories: ["Sarlona", "ID_FMP_BACKGROUND_255"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DIPLOMACY"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Shadow Acrobat"] = new engine.RulesElement({
    name: "Shadow Acrobat",
    type: "Background",
    id: "ID_FMP_BACKGROUND_218",
    source: "Eberron Player's Guide",
    categories: ["Shadow Acrobat", "ID_FMP_BACKGROUND_218"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ACROBATICS"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Shadow Marches"] = new engine.RulesElement({
    name: "Shadow Marches",
    type: "Background",
    id: "ID_FMP_BACKGROUND_247",
    source: "Eberron Player's Guide",
    categories: ["Shadow Marches", "ID_FMP_BACKGROUND_247"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HEAL"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Sharn"] = new engine.RulesElement({
    name: "Sharn",
    type: "Background",
    id: "ID_FMP_BACKGROUND_236",
    source: "Eberron Player's Guide",
    categories: ["Sharn", "ID_FMP_BACKGROUND_236"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STREETWISE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Talenta Plains"] = new engine.RulesElement({
    name: "Talenta Plains",
    type: "Background",
    id: "ID_FMP_BACKGROUND_248",
    source: "Eberron Player's Guide",
    categories: ["Talenta Plains", "ID_FMP_BACKGROUND_248"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Tasker's Dream"] = new engine.RulesElement({
    name: "Tasker's Dream",
    type: "Background",
    id: "ID_FMP_BACKGROUND_221",
    source: "Eberron Player's Guide",
    categories: ["Tasker's Dream", "ID_FMP_BACKGROUND_221"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Tharashk Gatekeeper"] = new engine.RulesElement({
    name: "Tharashk Gatekeeper",
    type: "Background",
    id: "ID_FMP_BACKGROUND_225",
    source: "Eberron Player's Guide",
    categories: ["Tharashk Gatekeeper", "ID_FMP_BACKGROUND_225"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Tharashk Prospector"] = new engine.RulesElement({
    name: "Tharashk Prospector",
    type: "Background",
    id: "ID_FMP_BACKGROUND_223",
    source: "Eberron Player's Guide",
    categories: ["Tharashk Prospector", "ID_FMP_BACKGROUND_223"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DUNGEONEERING"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["The Frostfell (Eberron Player's Guide)"] = new engine.RulesElement({
    name: "The Frostfell (Eberron Player's Guide)",
    type: "Background",
    id: "ID_FMP_BACKGROUND_253",
    source: "Eberron Player's Guide",
    categories: ["The Frostfell (Eberron Player's Guide)", "ID_FMP_BACKGROUND_253"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Thousand Yard Stare"] = new engine.RulesElement({
    name: "Thousand Yard Stare",
    type: "Background",
    id: "ID_FMP_BACKGROUND_213",
    source: "Eberron Player's Guide",
    categories: ["Thousand Yard Stare", "ID_FMP_BACKGROUND_213"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PERCEPTION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Thrane"] = new engine.RulesElement({
    name: "Thrane",
    type: "Background",
    id: "ID_FMP_BACKGROUND_239",
    source: "Eberron Player's Guide",
    categories: ["Thrane", "ID_FMP_BACKGROUND_239"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Thuranni Stonespur Recruit"] = new engine.RulesElement({
    name: "Thuranni Stonespur Recruit",
    type: "Background",
    id: "ID_FMP_BACKGROUND_226",
    source: "Eberron Player's Guide",
    categories: ["Thuranni Stonespur Recruit", "ID_FMP_BACKGROUND_226"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ACROBATICS"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Unstoppable Soldier"] = new engine.RulesElement({
    name: "Unstoppable Soldier",
    type: "Background",
    id: "ID_FMP_BACKGROUND_267",
    source: "Eberron Player's Guide",
    categories: ["Unstoppable Soldier", "ID_FMP_BACKGROUND_267"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Vadalis Botanist"] = new engine.RulesElement({
    name: "Vadalis Botanist",
    type: "Background",
    id: "ID_FMP_BACKGROUND_231",
    source: "Eberron Player's Guide",
    categories: ["Vadalis Botanist", "ID_FMP_BACKGROUND_231"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HEAL"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Vadalis Griffon Rider"] = new engine.RulesElement({
    name: "Vadalis Griffon Rider",
    type: "Background",
    id: "ID_FMP_BACKGROUND_230",
    source: "Eberron Player's Guide",
    categories: ["Vadalis Griffon Rider", "ID_FMP_BACKGROUND_230"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ACROBATICS"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Vadalis Handler"] = new engine.RulesElement({
    name: "Vadalis Handler",
    type: "Background",
    id: "ID_FMP_BACKGROUND_229",
    source: "Eberron Player's Guide",
    categories: ["Vadalis Handler", "ID_FMP_BACKGROUND_229"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DUNGEONEERING"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Valenar"] = new engine.RulesElement({
    name: "Valenar",
    type: "Background",
    id: "ID_FMP_BACKGROUND_249",
    source: "Eberron Player's Guide",
    categories: ["Valenar", "ID_FMP_BACKGROUND_249"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ACROBATICS"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Vigilant"] = new engine.RulesElement({
    name: "Vigilant",
    type: "Background",
    id: "ID_FMP_BACKGROUND_265",
    source: "Eberron Player's Guide",
    categories: ["Vigilant", "ID_FMP_BACKGROUND_265"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Wandering Inn Traveler"] = new engine.RulesElement({
    name: "Wandering Inn Traveler",
    type: "Background",
    id: "ID_FMP_BACKGROUND_203",
    source: "Eberron Player's Guide",
    categories: ["Wandering Inn Traveler", "ID_FMP_BACKGROUND_203"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STREETWISE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["War Courier"] = new engine.RulesElement({
    name: "War Courier",
    type: "Background",
    id: "ID_FMP_BACKGROUND_222",
    source: "Eberron Player's Guide",
    categories: ["War Courier", "ID_FMP_BACKGROUND_222"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Xen'drik"] = new engine.RulesElement({
    name: "Xen'drik",
    type: "Background",
    id: "ID_FMP_BACKGROUND_256",
    source: "Eberron Player's Guide",
    categories: ["Xen'drik", "ID_FMP_BACKGROUND_256"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Zilargo"] = new engine.RulesElement({
    name: "Zilargo",
    type: "Background",
    id: "ID_FMP_BACKGROUND_250",
    source: "Eberron Player's Guide",
    categories: ["Zilargo", "ID_FMP_BACKGROUND_250"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
