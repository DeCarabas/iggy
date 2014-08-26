define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Gloves of Venom (epic tier)"] = new engine.RulesElement({
    name: "Gloves of Venom (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4283",
    source: "Dragon Magazine 367",
    categories: ["Gloves of Venom (epic tier)", "ID_FMP_MAGIC_ITEM_4283"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Gloves of Venom (heroic tier)"] = new engine.RulesElement({
    name: "Gloves of Venom (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4279",
    source: "Dragon Magazine 367",
    categories: ["Gloves of Venom (heroic tier)", "ID_FMP_MAGIC_ITEM_4279"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Gloves of Venom (paragon tier)"] = new engine.RulesElement({
    name: "Gloves of Venom (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4281",
    source: "Dragon Magazine 367",
    categories: ["Gloves of Venom (paragon tier)", "ID_FMP_MAGIC_ITEM_4281"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Piwafwi +4"] = new engine.RulesElement({
    name: "Piwafwi +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4284",
    source: "Dragon Magazine 367",
    categories: ["Piwafwi +4", "ID_FMP_MAGIC_ITEM_4284"],
    rules: function(model) {
      model.statadd("Stealth Misc", 4, "item");
      model.statadd("Piwafwi +4", 5, "Piwafwi +4");
      model.statadd("resist:fire", function() { return model.stat("Piwafwi +4"); }, "resist");
      model.statadd("Fortitude Defense", 4, "Enhancement");
      model.statadd("Reflex Defense", 4, "Enhancement");
      model.statadd("Will Defense", 4, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Piwafwi +5"] = new engine.RulesElement({
    name: "Piwafwi +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4285",
    source: "Dragon Magazine 367",
    categories: ["Piwafwi +5", "ID_FMP_MAGIC_ITEM_4285"],
    rules: function(model) {
      model.statadd("Stealth Misc", 5, "item");
      model.statadd("Piwafwi +5", 10, "Piwafwi +5");
      model.statadd("resist:fire", function() { return model.stat("Piwafwi +5"); }, "resist");
      model.statadd("Fortitude Defense", 5, "Enhancement");
      model.statadd("Reflex Defense", 5, "Enhancement");
      model.statadd("Will Defense", 5, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Piwafwi +6"] = new engine.RulesElement({
    name: "Piwafwi +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4286",
    source: "Dragon Magazine 367",
    categories: ["Piwafwi +6", "ID_FMP_MAGIC_ITEM_4286"],
    rules: function(model) {
      model.statadd("Stealth Misc", 6, "item");
      model.statadd("Piwafwi +6", 10, "Piwafwi +6");
      model.statadd("resist:fire", function() { return model.stat("Piwafwi +6"); }, "resist");
      model.statadd("Fortitude Defense", 6, "Enhancement");
      model.statadd("Reflex Defense", 6, "Enhancement");
      model.statadd("Will Defense", 6, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Flaying +5"] = new engine.RulesElement({
    name: "Rod of Flaying +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4277",
    source: "Dragon Magazine 367",
    categories: ["Rod of Flaying +5", "ID_FMP_MAGIC_ITEM_4277"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Flaying +6"] = new engine.RulesElement({
    name: "Rod of Flaying +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4278",
    source: "Dragon Magazine 367",
    categories: ["Rod of Flaying +6", "ID_FMP_MAGIC_ITEM_4278"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Spiderkissed Weapon +2"] = new engine.RulesElement({
    name: "Spiderkissed Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4266",
    source: "Dragon Magazine 367",
    categories: ["Spiderkissed Weapon +2", "ID_FMP_MAGIC_ITEM_4266"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Spiderkissed Weapon +3"] = new engine.RulesElement({
    name: "Spiderkissed Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4267",
    source: "Dragon Magazine 367",
    categories: ["Spiderkissed Weapon +3", "ID_FMP_MAGIC_ITEM_4267"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Spiderkissed Weapon +4"] = new engine.RulesElement({
    name: "Spiderkissed Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4268",
    source: "Dragon Magazine 367",
    categories: ["Spiderkissed Weapon +4", "ID_FMP_MAGIC_ITEM_4268"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Spiderkissed Weapon +5"] = new engine.RulesElement({
    name: "Spiderkissed Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4269",
    source: "Dragon Magazine 367",
    categories: ["Spiderkissed Weapon +5", "ID_FMP_MAGIC_ITEM_4269"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Spiderkissed Weapon +6"] = new engine.RulesElement({
    name: "Spiderkissed Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4270",
    source: "Dragon Magazine 367",
    categories: ["Spiderkissed Weapon +6", "ID_FMP_MAGIC_ITEM_4270"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
