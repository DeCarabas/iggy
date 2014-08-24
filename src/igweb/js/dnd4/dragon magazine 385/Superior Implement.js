(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Superior_Implement = types['Superior Implement'] || (types['Superior Implement'] = {});
  te = Superior_Implement["Accurate dagger"] = new RulesElement({
    name: "Accurate dagger",
    type: "Superior Implement",
    id: "ID_FMP_SUPERIOR_IMPLEMENT_123",
    source: "Dragon Magazine 385",
    categories: ["Accurate dagger", "ID_FMP_SUPERIOR_IMPLEMENT_123"],
    rules: function(model) {
      model.statadd("implement:attack(Accurate dagger)", 1, "Superior Implement");
    }
  });
  byID[te.id] = te;
  
  te = Superior_Implement["Incendiary dagger"] = new RulesElement({
    name: "Incendiary dagger",
    type: "Superior Implement",
    id: "ID_FMP_SUPERIOR_IMPLEMENT_124",
    source: "Dragon Magazine 385",
    categories: ["Incendiary dagger", "ID_FMP_SUPERIOR_IMPLEMENT_124"],
    rules: function(model) {
      model.statadd("Incendiary dagger", 2);
      model.statadd("implement,Fire:damage(Incendiary dagger)", function() { return model.stat("Incendiary dagger"); }, "Superior Implement");
      model.statadd("Incendiary dagger", 1);
      model.statadd("Incendiary dagger", 1);
      model.statadd("implement,reflex:attack(Incendiary dagger)", 1, "Superior Implement");
    }
  });
  byID[te.id] = te;
  
  te = Superior_Implement["Lancing dagger"] = new RulesElement({
    name: "Lancing dagger",
    type: "Superior Implement",
    id: "ID_FMP_SUPERIOR_IMPLEMENT_125",
    source: "Dragon Magazine 385",
    categories: ["Lancing dagger", "ID_FMP_SUPERIOR_IMPLEMENT_125"],
    rules: function(model) {
      model.statadd("Lancing dagger", 2);
      model.statadd("implement,Lightning:damage(Lancing dagger)", function() { return model.stat("Lancing dagger"); }, "Superior Implement");
      model.statadd("Lancing dagger", 1);
      model.statadd("Lancing dagger", 1);
    }
  });
  byID[te.id] = te;
  
  te = Superior_Implement["Resonating dagger"] = new RulesElement({
    name: "Resonating dagger",
    type: "Superior Implement",
    id: "ID_FMP_SUPERIOR_IMPLEMENT_126",
    source: "Dragon Magazine 385",
    categories: ["Resonating dagger", "ID_FMP_SUPERIOR_IMPLEMENT_126"],
    rules: function(model) {
      model.statadd("Resonating dagger", 2);
      model.statadd("implement,Thunder:damage(Resonating dagger)", function() { return model.stat("Resonating dagger"); }, "Superior Implement");
      model.statadd("Resonating dagger", 1);
      model.statadd("Resonating dagger", 1);
    }
  });
  byID[te.id] = te;
  
  
})(this);
