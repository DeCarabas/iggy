define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Superior_Implement = types['Superior Implement'] || (types['Superior Implement'] = {});
  te = Superior_Implement["Accurate Ki Focus"] = new engine.RulesElement({
    name: "Accurate Ki Focus",
    type: "Superior Implement",
    id: "ID_FMP_SUPERIOR_IMPLEMENT_150",
    source: "Psionic Power",
    categories: ["Accurate Ki Focus", "ID_FMP_SUPERIOR_IMPLEMENT_150"],
    rules: function(model) {
      model.statadd("implement:attack(Accurate Ki Focus)", 1, "Superior Implement");
    }
  });
  byID[te.id] = te;
  
  te = Superior_Implement["Fluid Ki Focus"] = new engine.RulesElement({
    name: "Fluid Ki Focus",
    type: "Superior Implement",
    id: "ID_FMP_SUPERIOR_IMPLEMENT_151",
    source: "Psionic Power",
    categories: ["Fluid Ki Focus", "ID_FMP_SUPERIOR_IMPLEMENT_151"]
  });
  byID[te.id] = te;
  
  te = Superior_Implement["Inexorable Ki Focus"] = new engine.RulesElement({
    name: "Inexorable Ki Focus",
    type: "Superior Implement",
    id: "ID_FMP_SUPERIOR_IMPLEMENT_152",
    source: "Psionic Power",
    categories: ["Inexorable Ki Focus", "ID_FMP_SUPERIOR_IMPLEMENT_152"],
    rules: function(model) {
      model.statadd("Inexorable Ki Focus", 2);
      model.statadd("implement,Force:damage(Inexorable Ki Focus)", function() { return model.stat("Inexorable Ki Focus"); }, "Superior Implement");
      model.statadd("Inexorable Ki Focus", 1);
      model.statadd("Inexorable Ki Focus", 1);
      model.statadd("implement,fortitude:attack(Inexorable Ki Focus)", 1, "Superior Implement");
    }
  });
  byID[te.id] = te;
  
  te = Superior_Implement["Iron Ki Focus"] = new engine.RulesElement({
    name: "Iron Ki Focus",
    type: "Superior Implement",
    id: "ID_FMP_SUPERIOR_IMPLEMENT_153",
    source: "Psionic Power",
    categories: ["Iron Ki Focus", "ID_FMP_SUPERIOR_IMPLEMENT_153"],
    rules: function(model) {
      model.statadd("Iron Ki Focus", 1);
      model.statadd("Iron Ki Focus", 1);
      model.statadd("Iron Ki Focus", 1);
      model.statadd("implement:damage(Iron Ki Focus)", function() { return model.stat("Iron Ki Focus"); }, "Superior Implement");
      model.statadd("Iron Ki Focus", 1);
      model.statadd("Iron Ki Focus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Superior_Implement["Mighty Ki Focus"] = new engine.RulesElement({
    name: "Mighty Ki Focus",
    type: "Superior Implement",
    id: "ID_FMP_SUPERIOR_IMPLEMENT_154",
    source: "Psionic Power",
    categories: ["Mighty Ki Focus", "ID_FMP_SUPERIOR_IMPLEMENT_154"],
    rules: function(model) {
      model.statadd("implement,reflex:attack(Mighty Ki Focus)", 1, "Superior Implement");
    }
  });
  byID[te.id] = te;
  
  te = Superior_Implement["Mountain Ki Focus"] = new engine.RulesElement({
    name: "Mountain Ki Focus",
    type: "Superior Implement",
    id: "ID_FMP_SUPERIOR_IMPLEMENT_155",
    source: "Psionic Power",
    categories: ["Mountain Ki Focus", "ID_FMP_SUPERIOR_IMPLEMENT_155"]
  });
  byID[te.id] = te;
  
  te = Superior_Implement["Serene Ki Focus"] = new engine.RulesElement({
    name: "Serene Ki Focus",
    type: "Superior Implement",
    id: "ID_FMP_SUPERIOR_IMPLEMENT_156",
    source: "Psionic Power",
    categories: ["Serene Ki Focus", "ID_FMP_SUPERIOR_IMPLEMENT_156"],
    rules: function(model) {
      model.statadd("Serene Ki Focus", 2);
      model.statadd("implement,Psychic:damage(Serene Ki Focus)", function() { return model.stat("Serene Ki Focus"); }, "Superior Implement");
      model.statadd("Serene Ki Focus", 1);
      model.statadd("Serene Ki Focus", 1);
      model.statadd("implement,will:attack(Serene Ki Focus)", 1, "Superior Implement");
    }
  });
  byID[te.id] = te;
  
  te = Superior_Implement["Transcendent Ki Focus"] = new engine.RulesElement({
    name: "Transcendent Ki Focus",
    type: "Superior Implement",
    id: "ID_FMP_SUPERIOR_IMPLEMENT_157",
    source: "Psionic Power",
    categories: ["Transcendent Ki Focus", "ID_FMP_SUPERIOR_IMPLEMENT_157"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
