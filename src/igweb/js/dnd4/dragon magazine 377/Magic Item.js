define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Answerer +4"] = new engine.RulesElement({
    name: "Answerer +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7864",
    source: "Dragon Magazine 377",
    categories: ["Answerer +4", "ID_FMP_MAGIC_ITEM_7864"],
    rules: function(model) {
      model.statadd("damage rolls(Answerer +4)", function() { /* while you are bloodied */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Answerer +5"] = new engine.RulesElement({
    name: "Answerer +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7865",
    source: "Dragon Magazine 377",
    categories: ["Answerer +5", "ID_FMP_MAGIC_ITEM_7865"],
    rules: function(model) {
      model.statadd("damage rolls(Answerer +5)", function() { /* while you are bloodied */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Answerer +6"] = new engine.RulesElement({
    name: "Answerer +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7866",
    source: "Dragon Magazine 377",
    categories: ["Answerer +6", "ID_FMP_MAGIC_ITEM_7866"],
    rules: function(model) {
      model.statadd("damage rolls(Answerer +6)", function() { /* while you are bloodied */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Crook of Remembrance +4"] = new engine.RulesElement({
    name: "Crook of Remembrance +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7867",
    source: "Dragon Magazine 377",
    categories: ["Crook of Remembrance +4", "ID_FMP_MAGIC_ITEM_7867"],
    rules: function(model) {
      model.statadd("Insight Misc", 4, "item");
      model.statadd("Intimidate Misc", 4, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Crook of Remembrance +5"] = new engine.RulesElement({
    name: "Crook of Remembrance +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7868",
    source: "Dragon Magazine 377",
    categories: ["Crook of Remembrance +5", "ID_FMP_MAGIC_ITEM_7868"],
    rules: function(model) {
      model.statadd("Insight Misc", 5, "item");
      model.statadd("Intimidate Misc", 5, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Crook of Remembrance +6"] = new engine.RulesElement({
    name: "Crook of Remembrance +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7869",
    source: "Dragon Magazine 377",
    categories: ["Crook of Remembrance +6", "ID_FMP_MAGIC_ITEM_7869"],
    rules: function(model) {
      model.statadd("Insight Misc", 6, "item");
      model.statadd("Intimidate Misc", 6, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Empyreal Breastplate +4"] = new engine.RulesElement({
    name: "Empyreal Breastplate +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7870",
    source: "Dragon Magazine 377",
    categories: ["Empyreal Breastplate +4", "ID_FMP_MAGIC_ITEM_7870"],
    rules: function(model) {
      model.statadd("resist:necrotic", function() { /* while bloodied */ return 20; }, "resist");
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Empyreal Breastplate +5"] = new engine.RulesElement({
    name: "Empyreal Breastplate +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7871",
    source: "Dragon Magazine 377",
    categories: ["Empyreal Breastplate +5", "ID_FMP_MAGIC_ITEM_7871"],
    rules: function(model) {
      model.statadd("resist:necrotic", function() { /* while bloodied */ return 30; }, "resist");
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Empyreal Breastplate +6"] = new engine.RulesElement({
    name: "Empyreal Breastplate +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7872",
    source: "Dragon Magazine 377",
    categories: ["Empyreal Breastplate +6", "ID_FMP_MAGIC_ITEM_7872"],
    rules: function(model) {
      model.statadd("resist:necrotic", function() { /* while bloodied */ return 30; }, "resist");
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Familiar's Baldric +1"] = new engine.RulesElement({
    name: "Familiar's Baldric +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7856",
    source: "Dragon Magazine 377",
    categories: ["Familiar's Baldric +1", "ID_FMP_MAGIC_ITEM_7856"],
    rules: function(model) {
      model.statadd("FAMILIAR.AC", 1, "item");
      model.statadd("FAMILIAR.Fortitude Defense", 1, "item");
      model.statadd("FAMILIAR.Reflex Defense", 1, "item");
      model.statadd("FAMILIAR.Will Defense", 1, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Familiar's Baldric +2"] = new engine.RulesElement({
    name: "Familiar's Baldric +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7858",
    source: "Dragon Magazine 377",
    categories: ["Familiar's Baldric +2", "ID_FMP_MAGIC_ITEM_7858"],
    rules: function(model) {
      model.statadd("FAMILIAR.AC", 2, "item");
      model.statadd("FAMILIAR.Fortitude Defense", 2, "item");
      model.statadd("FAMILIAR.Reflex Defense", 2, "item");
      model.statadd("FAMILIAR.Will Defense", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Familiar's Baldric +3"] = new engine.RulesElement({
    name: "Familiar's Baldric +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7860",
    source: "Dragon Magazine 377",
    categories: ["Familiar's Baldric +3", "ID_FMP_MAGIC_ITEM_7860"],
    rules: function(model) {
      model.statadd("FAMILIAR.AC", 3, "item");
      model.statadd("FAMILIAR.Fortitude Defense", 3, "item");
      model.statadd("FAMILIAR.Reflex Defense", 3, "item");
      model.statadd("FAMILIAR.Will Defense", 3, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Familiar's Cowl (paragon tier)"] = new engine.RulesElement({
    name: "Familiar's Cowl (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7862",
    source: "Dragon Magazine 377",
    categories: ["Familiar's Cowl (paragon tier)", "ID_FMP_MAGIC_ITEM_7862"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Homing Collar (paragon tier)"] = new engine.RulesElement({
    name: "Homing Collar (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7863",
    source: "Dragon Magazine 377",
    categories: ["Homing Collar (paragon tier)", "ID_FMP_MAGIC_ITEM_7863"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Safe Retreat (paragon tier)"] = new engine.RulesElement({
    name: "Safe Retreat (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7855",
    source: "Dragon Magazine 377",
    categories: ["Safe Retreat (paragon tier)", "ID_FMP_MAGIC_ITEM_7855"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Verdant Silence Weapon +2"] = new engine.RulesElement({
    name: "Verdant Silence Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7873",
    source: "Dragon Magazine 377",
    categories: ["Verdant Silence Weapon +2", "ID_FMP_MAGIC_ITEM_7873"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Verdant Silence Weapon +3"] = new engine.RulesElement({
    name: "Verdant Silence Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7874",
    source: "Dragon Magazine 377",
    categories: ["Verdant Silence Weapon +3", "ID_FMP_MAGIC_ITEM_7874"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Verdant Silence Weapon +4"] = new engine.RulesElement({
    name: "Verdant Silence Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7875",
    source: "Dragon Magazine 377",
    categories: ["Verdant Silence Weapon +4", "ID_FMP_MAGIC_ITEM_7875"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Verdant Silence Weapon +5"] = new engine.RulesElement({
    name: "Verdant Silence Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7876",
    source: "Dragon Magazine 377",
    categories: ["Verdant Silence Weapon +5", "ID_FMP_MAGIC_ITEM_7876"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Verdant Silence Weapon +6"] = new engine.RulesElement({
    name: "Verdant Silence Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7877",
    source: "Dragon Magazine 377",
    categories: ["Verdant Silence Weapon +6", "ID_FMP_MAGIC_ITEM_7877"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
