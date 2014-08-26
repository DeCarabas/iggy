define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Background = types['Background'] || (types['Background'] = {});
  te = Background["Blazestone"] = new engine.RulesElement({
    name: "Blazestone",
    type: "Background",
    id: "ID_FMP_BACKGROUND_299",
    source: "Primal Power",
    categories: ["Blazestone", "ID_FMP_BACKGROUND_299"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_GIANT"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PRIMORDIAL"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Bleakmire"] = new engine.RulesElement({
    name: "Bleakmire",
    type: "Background",
    id: "ID_FMP_BACKGROUND_300",
    source: "Primal Power",
    categories: ["Bleakmire", "ID_FMP_BACKGROUND_300"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DRACONIC"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Bloodtangle"] = new engine.RulesElement({
    name: "Bloodtangle",
    type: "Background",
    id: "ID_FMP_BACKGROUND_301",
    source: "Primal Power",
    categories: ["Bloodtangle", "ID_FMP_BACKGROUND_301"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DRACONIC"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_GOBLIN"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HEAL"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Broken Lands"] = new engine.RulesElement({
    name: "Broken Lands",
    type: "Background",
    id: "ID_FMP_BACKGROUND_302",
    source: "Primal Power",
    categories: ["Broken Lands", "ID_FMP_BACKGROUND_302"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DWARVEN"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_GIANT"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Disgraced"] = new engine.RulesElement({
    name: "Disgraced",
    type: "Background",
    id: "ID_FMP_BACKGROUND_311",
    source: "Primal Power",
    categories: ["Disgraced", "ID_FMP_BACKGROUND_311"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DIPLOMACY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Dragon Totem Warrior"] = new engine.RulesElement({
    name: "Dragon Totem Warrior",
    type: "Background",
    id: "ID_FMP_BACKGROUND_323",
    source: "Primal Power",
    categories: ["Dragon Totem Warrior", "ID_FMP_BACKGROUND_323"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Earth Steward"] = new engine.RulesElement({
    name: "Earth Steward",
    type: "Background",
    id: "ID_FMP_BACKGROUND_325",
    source: "Primal Power",
    categories: ["Earth Steward", "ID_FMP_BACKGROUND_325"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Failed Thane"] = new engine.RulesElement({
    name: "Failed Thane",
    type: "Background",
    id: "ID_FMP_BACKGROUND_312",
    source: "Primal Power",
    categories: ["Failed Thane", "ID_FMP_BACKGROUND_312"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DIPLOMACY"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Feral Exile"] = new engine.RulesElement({
    name: "Feral Exile",
    type: "Background",
    id: "ID_FMP_BACKGROUND_330",
    source: "Primal Power",
    categories: ["Feral Exile", "ID_FMP_BACKGROUND_330"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Found in the Wild"] = new engine.RulesElement({
    name: "Found in the Wild",
    type: "Background",
    id: "ID_FMP_BACKGROUND_314",
    source: "Primal Power",
    categories: ["Found in the Wild", "ID_FMP_BACKGROUND_314"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HEAL"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STREETWISE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Free Spirit"] = new engine.RulesElement({
    name: "Free Spirit",
    type: "Background",
    id: "ID_FMP_BACKGROUND_329",
    source: "Primal Power",
    categories: ["Free Spirit", "ID_FMP_BACKGROUND_329"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Frostfell (Primal Power)"] = new engine.RulesElement({
    name: "Frostfell (Primal Power)",
    type: "Background",
    id: "ID_FMP_BACKGROUND_304",
    source: "Primal Power",
    categories: ["Frostfell (Primal Power)", "ID_FMP_BACKGROUND_304"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DWARVEN"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Howling Plains"] = new engine.RulesElement({
    name: "Howling Plains",
    type: "Background",
    id: "ID_FMP_BACKGROUND_305",
    source: "Primal Power",
    categories: ["Howling Plains", "ID_FMP_BACKGROUND_305"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_GOBLIN"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Isolated"] = new engine.RulesElement({
    name: "Isolated",
    type: "Background",
    id: "ID_FMP_BACKGROUND_313",
    source: "Primal Power",
    categories: ["Isolated", "ID_FMP_BACKGROUND_313"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Maelstrom"] = new engine.RulesElement({
    name: "Maelstrom",
    type: "Background",
    id: "ID_FMP_BACKGROUND_306",
    source: "Primal Power",
    categories: ["Maelstrom", "ID_FMP_BACKGROUND_306"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PRIMORDIAL"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Primal Fey"] = new engine.RulesElement({
    name: "Primal Fey",
    type: "Background",
    id: "ID_FMP_BACKGROUND_326",
    source: "Primal Power",
    categories: ["Primal Fey", "ID_FMP_BACKGROUND_326"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Primal Omen"] = new engine.RulesElement({
    name: "Primal Omen",
    type: "Background",
    id: "ID_FMP_BACKGROUND_315",
    source: "Primal Power",
    categories: ["Primal Omen", "ID_FMP_BACKGROUND_315"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Primal Soul"] = new engine.RulesElement({
    name: "Primal Soul",
    type: "Background",
    id: "ID_FMP_BACKGROUND_327",
    source: "Primal Power",
    categories: ["Primal Soul", "ID_FMP_BACKGROUND_327"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Refugee (Primal Power)"] = new engine.RulesElement({
    name: "Refugee (Primal Power)",
    type: "Background",
    id: "ID_FMP_BACKGROUND_317",
    source: "Primal Power",
    categories: ["Refugee (Primal Power)", "ID_FMP_BACKGROUND_317"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_THIEVERY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Renegade"] = new engine.RulesElement({
    name: "Renegade",
    type: "Background",
    id: "ID_FMP_BACKGROUND_318",
    source: "Primal Power",
    categories: ["Renegade", "ID_FMP_BACKGROUND_318"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STREETWISE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Revered Elder"] = new engine.RulesElement({
    name: "Revered Elder",
    type: "Background",
    id: "ID_FMP_BACKGROUND_319",
    source: "Primal Power",
    categories: ["Revered Elder", "ID_FMP_BACKGROUND_319"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Sage"] = new engine.RulesElement({
    name: "Sage",
    type: "Background",
    id: "ID_FMP_BACKGROUND_320",
    source: "Primal Power",
    categories: ["Sage", "ID_FMP_BACKGROUND_320"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Sea of Dust"] = new engine.RulesElement({
    name: "Sea of Dust",
    type: "Background",
    id: "ID_FMP_BACKGROUND_307",
    source: "Primal Power",
    categories: ["Sea of Dust", "ID_FMP_BACKGROUND_307"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DRACONIC"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PRIMORDIAL"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Spirit of Two Worlds"] = new engine.RulesElement({
    name: "Spirit of Two Worlds",
    type: "Background",
    id: "ID_FMP_BACKGROUND_328",
    source: "Primal Power",
    categories: ["Spirit of Two Worlds", "ID_FMP_BACKGROUND_328"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Spirit Soul"] = new engine.RulesElement({
    name: "Spirit Soul",
    type: "Background",
    id: "ID_FMP_BACKGROUND_322",
    source: "Primal Power",
    categories: ["Spirit Soul", "ID_FMP_BACKGROUND_322"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Thunderpeaks"] = new engine.RulesElement({
    name: "Thunderpeaks",
    type: "Background",
    id: "ID_FMP_BACKGROUND_308",
    source: "Primal Power",
    categories: ["Thunderpeaks", "ID_FMP_BACKGROUND_308"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DWARVEN"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_GIANT"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DUNGEONEERING"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Underdark Survivor"] = new engine.RulesElement({
    name: "Underdark Survivor",
    type: "Background",
    id: "ID_FMP_BACKGROUND_324",
    source: "Primal Power",
    categories: ["Underdark Survivor", "ID_FMP_BACKGROUND_324"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DUNGEONEERING"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Underwild"] = new engine.RulesElement({
    name: "Underwild",
    type: "Background",
    id: "ID_FMP_BACKGROUND_309",
    source: "Primal Power",
    categories: ["Underwild", "ID_FMP_BACKGROUND_309"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DEEP_SPEECH"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ELVEN"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DUNGEONEERING"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PERCEPTION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Wild Hunter"] = new engine.RulesElement({
    name: "Wild Hunter",
    type: "Background",
    id: "ID_FMP_BACKGROUND_321",
    source: "Primal Power",
    categories: ["Wild Hunter", "ID_FMP_BACKGROUND_321"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Wrathwood"] = new engine.RulesElement({
    name: "Wrathwood",
    type: "Background",
    id: "ID_FMP_BACKGROUND_310",
    source: "Primal Power",
    categories: ["Wrathwood", "ID_FMP_BACKGROUND_310"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ELVEN"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PERCEPTION"]);
      model.grant(model.elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
