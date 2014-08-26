define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Circlet of the Urbane (epic tier)"] = new engine.RulesElement({
    name: "Circlet of the Urbane (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4875",
    source: "Dragon Magazine 371",
    categories: ["Circlet of the Urbane (epic tier)", "ID_FMP_MAGIC_ITEM_4875"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against charm, fear, illusion, and psychic effects */ return 2; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Hestavar Dueling Blade +4"] = new engine.RulesElement({
    name: "Hestavar Dueling Blade +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4870",
    source: "Dragon Magazine 371",
    categories: ["Hestavar Dueling Blade +4", "ID_FMP_MAGIC_ITEM_4870"],
    rules: function(model) {
      model.statadd("attack rolls", function() { /* with opportunity attacks */ return 2; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Hestavar Dueling Blade +5"] = new engine.RulesElement({
    name: "Hestavar Dueling Blade +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4871",
    source: "Dragon Magazine 371",
    categories: ["Hestavar Dueling Blade +5", "ID_FMP_MAGIC_ITEM_4871"],
    rules: function(model) {
      model.statadd("attack rolls", function() { /* with opportunity attacks */ return 2; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Hestavar Dueling Blade +6"] = new engine.RulesElement({
    name: "Hestavar Dueling Blade +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4872",
    source: "Dragon Magazine 371",
    categories: ["Hestavar Dueling Blade +6", "ID_FMP_MAGIC_ITEM_4872"],
    rules: function(model) {
      model.statadd("attack rolls", function() { /* with opportunity attacks */ return 2; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ioun Orb +5"] = new engine.RulesElement({
    name: "Ioun Orb +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4873",
    source: "Dragon Magazine 371",
    categories: ["Ioun Orb +5", "ID_FMP_MAGIC_ITEM_4873"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ioun Orb +6"] = new engine.RulesElement({
    name: "Ioun Orb +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4874",
    source: "Dragon Magazine 371",
    categories: ["Ioun Orb +6", "ID_FMP_MAGIC_ITEM_4874"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
