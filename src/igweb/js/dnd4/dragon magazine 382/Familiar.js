define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Familiar = types['Familiar'] || (types['Familiar'] = {});
  te = Familiar["Gallant Hawk"] = new engine.RulesElement({
    name: "Gallant Hawk",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_81",
    source: "Dragon Magazine 382",
    categories: ["Gallant Hawk", "ID_FMP_FAMILIAR_81"],
    rules: function(model) {
      model.statadd("Perception Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Familiar["Least Air Elemental"] = new engine.RulesElement({
    name: "Least Air Elemental",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_84",
    source: "Dragon Magazine 382",
    categories: ["Least Air Elemental", "ID_FMP_FAMILIAR_84"]
  });
  byID[te.id] = te;
  
  te = Familiar["Least Earth Elemental"] = new engine.RulesElement({
    name: "Least Earth Elemental",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_86",
    source: "Dragon Magazine 382",
    categories: ["Least Earth Elemental", "ID_FMP_FAMILIAR_86"]
  });
  byID[te.id] = te;
  
  te = Familiar["Moon Wisp"] = new engine.RulesElement({
    name: "Moon Wisp",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_82",
    source: "Dragon Magazine 382",
    categories: ["Moon Wisp", "ID_FMP_FAMILIAR_82"],
    rules: function(model) {
      model.statadd("Arcana Misc", 2);
      model.statadd("Nature Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Familiar["Muse Sprite"] = new engine.RulesElement({
    name: "Muse Sprite",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_79",
    source: "Dragon Magazine 382",
    categories: ["Muse Sprite", "ID_FMP_FAMILIAR_79"],
    rules: function(model) {
      model.statadd("Diplomacy Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Familiar["Specter"] = new engine.RulesElement({
    name: "Specter",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_83",
    source: "Dragon Magazine 382",
    categories: ["Specter", "ID_FMP_FAMILIAR_83"],
    rules: function(model) {
      model.statadd("resist:necrotic", 5, "resist");
      model.statadd("resist:necrotic", 2);
    }
  });
  byID[te.id] = te;
  
  te = Familiar["Tiny Gelatinous Cube"] = new engine.RulesElement({
    name: "Tiny Gelatinous Cube",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_85",
    source: "Dragon Magazine 382",
    categories: ["Tiny Gelatinous Cube", "ID_FMP_FAMILIAR_85"],
    rules: function(model) {
      model.statadd("resist:acid", 5, "resist");
      model.statadd("resist:acid", 2);
    }
  });
  byID[te.id] = te;
  
  te = Familiar["White-Eyed Crow"] = new engine.RulesElement({
    name: "White-Eyed Crow",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_80",
    source: "Dragon Magazine 382",
    categories: ["White-Eyed Crow", "ID_FMP_FAMILIAR_80"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
