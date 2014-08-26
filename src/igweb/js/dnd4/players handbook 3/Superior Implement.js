define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Superior_Implement = types['Superior Implement'] || (types['Superior Implement'] = {});
  te = Superior_Implement["Accurate orb"] = new engine.RulesElement({
    name: "Accurate orb",
    type: "Superior Implement",
    id: "ID_FMP_SUPERIOR_IMPLEMENT_100",
    source: "Player's Handbook 3",
    categories: ["Accurate orb", "ID_FMP_SUPERIOR_IMPLEMENT_100"],
    rules: function(model) {
      model.statadd("implement:attack(Accurate orb)", 1, "Superior Implement");
    }
  });
  byID[te.id] = te;
  
  te = Superior_Implement["Accurate rod"] = new engine.RulesElement({
    name: "Accurate rod",
    type: "Superior Implement",
    id: "ID_FMP_SUPERIOR_IMPLEMENT_104",
    source: "Player's Handbook 3",
    categories: ["Accurate rod", "ID_FMP_SUPERIOR_IMPLEMENT_104"],
    rules: function(model) {
      model.statadd("implement:attack(Accurate rod)", 1, "Superior Implement");
    }
  });
  byID[te.id] = te;
  
  te = Superior_Implement["Accurate staff"] = new engine.RulesElement({
    name: "Accurate staff",
    type: "Superior Implement",
    id: "ID_FMP_SUPERIOR_IMPLEMENT_108",
    source: "Player's Handbook 3",
    categories: ["Accurate staff", "ID_FMP_SUPERIOR_IMPLEMENT_108"],
    rules: function(model) {
      model.statadd("implement:attack(Accurate staff)", 1, "Superior Implement");
    }
  });
  byID[te.id] = te;
  
  te = Superior_Implement["Accurate symbol"] = new engine.RulesElement({
    name: "Accurate symbol",
    type: "Superior Implement",
    id: "ID_FMP_SUPERIOR_IMPLEMENT_96",
    source: "Player's Handbook 3",
    categories: ["Accurate symbol", "ID_FMP_SUPERIOR_IMPLEMENT_96"],
    rules: function(model) {
      model.statadd("implement:attack(Accurate symbol)", 1, "Superior Implement");
    }
  });
  byID[te.id] = te;
  
  te = Superior_Implement["Accurate totem"] = new engine.RulesElement({
    name: "Accurate totem",
    type: "Superior Implement",
    id: "ID_FMP_SUPERIOR_IMPLEMENT_115",
    source: "Player's Handbook 3",
    categories: ["Accurate totem", "ID_FMP_SUPERIOR_IMPLEMENT_115"],
    rules: function(model) {
      model.statadd("implement:attack(Accurate totem)", 1, "Superior Implement");
    }
  });
  byID[te.id] = te;
  
  te = Superior_Implement["Accurate wand"] = new engine.RulesElement({
    name: "Accurate wand",
    type: "Superior Implement",
    id: "ID_FMP_SUPERIOR_IMPLEMENT_119",
    source: "Player's Handbook 3",
    categories: ["Accurate wand", "ID_FMP_SUPERIOR_IMPLEMENT_119"],
    rules: function(model) {
      model.statadd("implement:attack(Accurate wand)", 1, "Superior Implement");
    }
  });
  byID[te.id] = te;
  
  te = Superior_Implement["Ashen rod"] = new engine.RulesElement({
    name: "Ashen rod",
    type: "Superior Implement",
    id: "ID_FMP_SUPERIOR_IMPLEMENT_105",
    source: "Player's Handbook 3",
    categories: ["Ashen rod", "ID_FMP_SUPERIOR_IMPLEMENT_105"],
    rules: function(model) {
      model.statadd("Ashen rod", 2);
      model.statadd("implement,Fire:damage(Ashen rod)", function() { return model.stat("Ashen rod"); }, "Superior Implement");
      model.statadd("Ashen rod", 1);
      model.statadd("Ashen rod", 1);
      model.statadd("implement,reflex:attack(Ashen rod)", 1, "Superior Implement");
    }
  });
  byID[te.id] = te;
  
  te = Superior_Implement["Astral symbol"] = new engine.RulesElement({
    name: "Astral symbol",
    type: "Superior Implement",
    id: "ID_FMP_SUPERIOR_IMPLEMENT_97",
    source: "Player's Handbook 3",
    categories: ["Astral symbol", "ID_FMP_SUPERIOR_IMPLEMENT_97"],
    rules: function(model) {
      model.statadd("Astral symbol", 2);
      model.statadd("implement,Radiant:damage(Astral symbol)", function() { return model.stat("Astral symbol"); }, "Superior Implement");
      model.statadd("Astral symbol", 1);
      model.statadd("Astral symbol", 1);
    }
  });
  byID[te.id] = te;
  
  te = Superior_Implement["Cinder wand"] = new engine.RulesElement({
    name: "Cinder wand",
    type: "Superior Implement",
    id: "ID_FMP_SUPERIOR_IMPLEMENT_120",
    source: "Player's Handbook 3",
    categories: ["Cinder wand", "ID_FMP_SUPERIOR_IMPLEMENT_120"],
    rules: function(model) {
      model.statadd("Cinder wand", 2);
      model.statadd("implement,Fire:damage(Cinder wand)", function() { return model.stat("Cinder wand"); }, "Superior Implement");
      model.statadd("Cinder wand", 1);
      model.statadd("Cinder wand", 1);
    }
  });
  byID[te.id] = te;
  
  te = Superior_Implement["Crystal orb"] = new engine.RulesElement({
    name: "Crystal orb",
    type: "Superior Implement",
    id: "ID_FMP_SUPERIOR_IMPLEMENT_101",
    source: "Player's Handbook 3",
    categories: ["Crystal orb", "ID_FMP_SUPERIOR_IMPLEMENT_101"],
    rules: function(model) {
      model.statadd("Crystal orb", 2);
      model.statadd("implement,Psychic:damage(Crystal orb)", function() { return model.stat("Crystal orb"); }, "Superior Implement");
      model.statadd("Crystal orb", 1);
      model.statadd("Crystal orb", 1);
      model.statadd("implement,will:attack(Crystal orb)", 1, "Superior Implement");
    }
  });
  byID[te.id] = te;
  
  te = Superior_Implement["Deathbone rod"] = new engine.RulesElement({
    name: "Deathbone rod",
    type: "Superior Implement",
    id: "ID_FMP_SUPERIOR_IMPLEMENT_106",
    source: "Player's Handbook 3",
    categories: ["Deathbone rod", "ID_FMP_SUPERIOR_IMPLEMENT_106"],
    rules: function(model) {
      model.statadd("Deathbone rod", 2);
      model.statadd("implement,Necrotic:damage(Deathbone rod)", function() { return model.stat("Deathbone rod"); }, "Superior Implement");
      model.statadd("Deathbone rod", 1);
      model.statadd("Deathbone rod", 1);
      model.statadd("implement,will:attack(Deathbone rod)", 1, "Superior Implement");
    }
  });
  byID[te.id] = te;
  
  te = Superior_Implement["Defiant rod"] = new engine.RulesElement({
    name: "Defiant rod",
    type: "Superior Implement",
    id: "ID_FMP_SUPERIOR_IMPLEMENT_107",
    source: "Player's Handbook 3",
    categories: ["Defiant rod", "ID_FMP_SUPERIOR_IMPLEMENT_107"],
    rules: function(model) {
      model.statadd("Defiant rod", 2);
      model.statadd("implement,Radiant:damage(Defiant rod)", function() { return model.stat("Defiant rod"); }, "Superior Implement");
      model.statadd("Defiant rod", 1);
      model.statadd("Defiant rod", 1);
    }
  });
  byID[te.id] = te;
  
  te = Superior_Implement["Dragontooth wand"] = new engine.RulesElement({
    name: "Dragontooth wand",
    type: "Superior Implement",
    id: "ID_FMP_SUPERIOR_IMPLEMENT_121",
    source: "Player's Handbook 3",
    categories: ["Dragontooth wand", "ID_FMP_SUPERIOR_IMPLEMENT_121"],
    rules: function(model) {
      model.statadd("Dragontooth wand", 1);
      model.statadd("Dragontooth wand", 1);
      model.statadd("Dragontooth wand", 1);
      model.statadd("implement:damage(Dragontooth wand)", function() { return model.stat("Dragontooth wand"); }, "Superior Implement");
      model.statadd("Dragontooth wand", 1);
      model.statadd("Dragontooth wand", 1);
      model.statadd("implement,reflex:attack(Dragontooth wand)", 1, "Superior Implement");
    }
  });
  byID[te.id] = te;
  
  te = Superior_Implement["Echo tome"] = new engine.RulesElement({
    name: "Echo tome",
    type: "Superior Implement",
    id: "ID_FMP_SUPERIOR_IMPLEMENT_112",
    source: "Player's Handbook 3",
    categories: ["Echo tome", "ID_FMP_SUPERIOR_IMPLEMENT_112"],
    rules: function(model) {
      model.statadd("implement,reflex:attack(Echo tome)", 1, "Superior Implement");
    }
  });
  byID[te.id] = te;
  
  te = Superior_Implement["Farseeing totem"] = new engine.RulesElement({
    name: "Farseeing totem",
    type: "Superior Implement",
    id: "ID_FMP_SUPERIOR_IMPLEMENT_116",
    source: "Player's Handbook 3",
    categories: ["Farseeing totem", "ID_FMP_SUPERIOR_IMPLEMENT_116"],
    rules: function(model) {
      model.statadd("Farseeing totem", 1);
      model.statadd("Farseeing totem", 1);
      model.statadd("Farseeing totem", 1);
      model.statadd("implement:damage(Farseeing totem)", function() { return model.stat("Farseeing totem"); }, "Superior Implement");
      model.statadd("Farseeing totem", 1);
      model.statadd("Farseeing totem", 1);
    }
  });
  byID[te.id] = te;
  
  te = Superior_Implement["Forbidden tome"] = new engine.RulesElement({
    name: "Forbidden tome",
    type: "Superior Implement",
    id: "ID_FMP_SUPERIOR_IMPLEMENT_113",
    source: "Player's Handbook 3",
    categories: ["Forbidden tome", "ID_FMP_SUPERIOR_IMPLEMENT_113"],
    rules: function(model) {
      model.statadd("Forbidden tome", 1);
      model.statadd("Forbidden tome", 1);
      model.statadd("Forbidden tome", 1);
      model.statadd("implement:damage(Forbidden tome)", function() { return model.stat("Forbidden tome"); }, "Superior Implement");
      model.statadd("Forbidden tome", 1);
      model.statadd("Forbidden tome", 1);
      model.statadd("implement,fortitude:attack(Forbidden tome)", 1, "Superior Implement");
    }
  });
  byID[te.id] = te;
  
  te = Superior_Implement["Greenstone orb"] = new engine.RulesElement({
    name: "Greenstone orb",
    type: "Superior Implement",
    id: "ID_FMP_SUPERIOR_IMPLEMENT_102",
    source: "Player's Handbook 3",
    categories: ["Greenstone orb", "ID_FMP_SUPERIOR_IMPLEMENT_102"],
    rules: function(model) {
      model.statadd("Greenstone orb", 2);
      model.statadd("implement,Acid:damage(Greenstone orb)", function() { return model.stat("Greenstone orb"); }, "Superior Implement");
      model.statadd("Greenstone orb", 1);
      model.statadd("Greenstone orb", 1);
      model.statadd("implement,fortitude:attack(Greenstone orb)", 1, "Superior Implement");
    }
  });
  byID[te.id] = te;
  
  te = Superior_Implement["Guardian staff"] = new engine.RulesElement({
    name: "Guardian staff",
    type: "Superior Implement",
    id: "ID_FMP_SUPERIOR_IMPLEMENT_109",
    source: "Player's Handbook 3",
    categories: ["Guardian staff", "ID_FMP_SUPERIOR_IMPLEMENT_109"],
    rules: function(model) {
      model.statadd("Guardian staff", 2);
      model.statadd("implement,Force:damage(Guardian staff)", function() { return model.stat("Guardian staff"); }, "Superior Implement");
      model.statadd("Guardian staff", 1);
      model.statadd("Guardian staff", 1);
    }
  });
  byID[te.id] = te;
  
  te = Superior_Implement["Icicle totem"] = new engine.RulesElement({
    name: "Icicle totem",
    type: "Superior Implement",
    id: "ID_FMP_SUPERIOR_IMPLEMENT_117",
    source: "Player's Handbook 3",
    categories: ["Icicle totem", "ID_FMP_SUPERIOR_IMPLEMENT_117"],
    rules: function(model) {
      model.statadd("Icicle totem", 2);
      model.statadd("implement,Cold:damage(Icicle totem)", function() { return model.stat("Icicle totem"); }, "Superior Implement");
      model.statadd("Icicle totem", 1);
      model.statadd("Icicle totem", 1);
    }
  });
  byID[te.id] = te;
  
  te = Superior_Implement["Mindwarp staff"] = new engine.RulesElement({
    name: "Mindwarp staff",
    type: "Superior Implement",
    id: "ID_FMP_SUPERIOR_IMPLEMENT_110",
    source: "Player's Handbook 3",
    categories: ["Mindwarp staff", "ID_FMP_SUPERIOR_IMPLEMENT_110"],
    rules: function(model) {
      model.statadd("Mindwarp staff", 2);
      model.statadd("implement,Psychic:damage(Mindwarp staff)", function() { return model.stat("Mindwarp staff"); }, "Superior Implement");
      model.statadd("Mindwarp staff", 1);
      model.statadd("Mindwarp staff", 1);
    }
  });
  byID[te.id] = te;
  
  te = Superior_Implement["Petrified orb"] = new engine.RulesElement({
    name: "Petrified orb",
    type: "Superior Implement",
    id: "ID_FMP_SUPERIOR_IMPLEMENT_103",
    source: "Player's Handbook 3",
    categories: ["Petrified orb", "ID_FMP_SUPERIOR_IMPLEMENT_103"],
    rules: function(model) {
      model.statadd("Petrified orb", 2);
      model.statadd("implement,Force:damage(Petrified orb)", function() { return model.stat("Petrified orb"); }, "Superior Implement");
      model.statadd("Petrified orb", 1);
      model.statadd("Petrified orb", 1);
    }
  });
  byID[te.id] = te;
  
  te = Superior_Implement["Quickbeam staff"] = new engine.RulesElement({
    name: "Quickbeam staff",
    type: "Superior Implement",
    id: "ID_FMP_SUPERIOR_IMPLEMENT_111",
    source: "Player's Handbook 3",
    categories: ["Quickbeam staff", "ID_FMP_SUPERIOR_IMPLEMENT_111"],
    rules: function(model) {
      model.statadd("Quickbeam staff", 2);
      model.statadd("implement,Thunder:damage(Quickbeam staff)", function() { return model.stat("Quickbeam staff"); }, "Superior Implement");
      model.statadd("Quickbeam staff", 1);
      model.statadd("Quickbeam staff", 1);
    }
  });
  byID[te.id] = te;
  
  te = Superior_Implement["Rowan wand"] = new engine.RulesElement({
    name: "Rowan wand",
    type: "Superior Implement",
    id: "ID_FMP_SUPERIOR_IMPLEMENT_122",
    source: "Player's Handbook 3",
    categories: ["Rowan wand", "ID_FMP_SUPERIOR_IMPLEMENT_122"],
    rules: function(model) {
      model.statadd("Rowan wand", 2);
      model.statadd("implement,Lightning:damage(Rowan wand)", function() { return model.stat("Rowan wand"); }, "Superior Implement");
      model.statadd("Rowan wand", 1);
      model.statadd("Rowan wand", 1);
    }
  });
  byID[te.id] = te;
  
  te = Superior_Implement["Storm totem"] = new engine.RulesElement({
    name: "Storm totem",
    type: "Superior Implement",
    id: "ID_FMP_SUPERIOR_IMPLEMENT_118",
    source: "Player's Handbook 3",
    categories: ["Storm totem", "ID_FMP_SUPERIOR_IMPLEMENT_118"],
    rules: function(model) {
      model.statadd("Storm totem", 2);
      model.statadd("implement,Thunder:damage(Storm totem)", function() { return model.stat("Storm totem"); }, "Superior Implement");
      model.statadd("Storm totem", 1);
      model.statadd("Storm totem", 1);
      model.statadd("implement,fortitude:attack(Storm totem)", 1, "Superior Implement");
    }
  });
  byID[te.id] = te;
  
  te = Superior_Implement["Unspeakable tome"] = new engine.RulesElement({
    name: "Unspeakable tome",
    type: "Superior Implement",
    id: "ID_FMP_SUPERIOR_IMPLEMENT_114",
    source: "Player's Handbook 3",
    categories: ["Unspeakable tome", "ID_FMP_SUPERIOR_IMPLEMENT_114"],
    rules: function(model) {
      model.statadd("implement,will:attack(Unspeakable tome)", 1, "Superior Implement");
    }
  });
  byID[te.id] = te;
  
  te = Superior_Implement["Warding symbol"] = new engine.RulesElement({
    name: "Warding symbol",
    type: "Superior Implement",
    id: "ID_FMP_SUPERIOR_IMPLEMENT_98",
    source: "Player's Handbook 3",
    categories: ["Warding symbol", "ID_FMP_SUPERIOR_IMPLEMENT_98"],
    rules: function(model) {
      model.statadd("implement,fortitude:attack(Warding symbol)", 1, "Superior Implement");
    }
  });
  byID[te.id] = te;
  
  te = Superior_Implement["Wrathful symbol"] = new engine.RulesElement({
    name: "Wrathful symbol",
    type: "Superior Implement",
    id: "ID_FMP_SUPERIOR_IMPLEMENT_99",
    source: "Player's Handbook 3",
    categories: ["Wrathful symbol", "ID_FMP_SUPERIOR_IMPLEMENT_99"],
    rules: function(model) {
      model.statadd("implement,will:attack(Wrathful symbol)", 1, "Superior Implement");
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
