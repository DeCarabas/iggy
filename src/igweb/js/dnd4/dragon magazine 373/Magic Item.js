define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Drowsy Dust (level 14)"] = new engine.RulesElement({
    name: "Drowsy Dust (level 14)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4983",
    source: "Dragon Magazine 373",
    categories: ["Drowsy Dust (level 14)", "ID_FMP_MAGIC_ITEM_4983"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Drowsy Dust (level 19)"] = new engine.RulesElement({
    name: "Drowsy Dust (level 19)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4984",
    source: "Dragon Magazine 373",
    categories: ["Drowsy Dust (level 19)", "ID_FMP_MAGIC_ITEM_4984"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Drowsy Dust (level 24)"] = new engine.RulesElement({
    name: "Drowsy Dust (level 24)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4985",
    source: "Dragon Magazine 373",
    categories: ["Drowsy Dust (level 24)", "ID_FMP_MAGIC_ITEM_4985"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Drowsy Dust (level 29)"] = new engine.RulesElement({
    name: "Drowsy Dust (level 29)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4986",
    source: "Dragon Magazine 373",
    categories: ["Drowsy Dust (level 29)", "ID_FMP_MAGIC_ITEM_4986"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Drowsy Dust (level 4)"] = new engine.RulesElement({
    name: "Drowsy Dust (level 4)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4981",
    source: "Dragon Magazine 373",
    categories: ["Drowsy Dust (level 4)", "ID_FMP_MAGIC_ITEM_4981"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Drowsy Dust (level 9)"] = new engine.RulesElement({
    name: "Drowsy Dust (level 9)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4982",
    source: "Dragon Magazine 373",
    categories: ["Drowsy Dust (level 9)", "ID_FMP_MAGIC_ITEM_4982"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dual Arrow +2"] = new engine.RulesElement({
    name: "Dual Arrow +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5018",
    source: "Dragon Magazine 373",
    categories: ["Dual Arrow +2", "ID_FMP_MAGIC_ITEM_5018"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dual Arrow +3"] = new engine.RulesElement({
    name: "Dual Arrow +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5023",
    source: "Dragon Magazine 373",
    categories: ["Dual Arrow +3", "ID_FMP_MAGIC_ITEM_5023"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dual Arrow +4"] = new engine.RulesElement({
    name: "Dual Arrow +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5020",
    source: "Dragon Magazine 373",
    categories: ["Dual Arrow +4", "ID_FMP_MAGIC_ITEM_5020"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dual Arrow +5"] = new engine.RulesElement({
    name: "Dual Arrow +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5021",
    source: "Dragon Magazine 373",
    categories: ["Dual Arrow +5", "ID_FMP_MAGIC_ITEM_5021"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dual Arrow +6"] = new engine.RulesElement({
    name: "Dual Arrow +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5022",
    source: "Dragon Magazine 373",
    categories: ["Dual Arrow +6", "ID_FMP_MAGIC_ITEM_5022"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Eyesting (level 14)"] = new engine.RulesElement({
    name: "Eyesting (level 14)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4989",
    source: "Dragon Magazine 373",
    categories: ["Eyesting (level 14)", "ID_FMP_MAGIC_ITEM_4989"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Eyesting (level 19)"] = new engine.RulesElement({
    name: "Eyesting (level 19)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4990",
    source: "Dragon Magazine 373",
    categories: ["Eyesting (level 19)", "ID_FMP_MAGIC_ITEM_4990"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Eyesting (level 24)"] = new engine.RulesElement({
    name: "Eyesting (level 24)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4991",
    source: "Dragon Magazine 373",
    categories: ["Eyesting (level 24)", "ID_FMP_MAGIC_ITEM_4991"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Eyesting (level 29)"] = new engine.RulesElement({
    name: "Eyesting (level 29)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4992",
    source: "Dragon Magazine 373",
    categories: ["Eyesting (level 29)", "ID_FMP_MAGIC_ITEM_4992"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Eyesting (level 4)"] = new engine.RulesElement({
    name: "Eyesting (level 4)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4987",
    source: "Dragon Magazine 373",
    categories: ["Eyesting (level 4)", "ID_FMP_MAGIC_ITEM_4987"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Eyesting (level 9)"] = new engine.RulesElement({
    name: "Eyesting (level 9)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4988",
    source: "Dragon Magazine 373",
    categories: ["Eyesting (level 9)", "ID_FMP_MAGIC_ITEM_4988"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Flashbang Powder (level 13)"] = new engine.RulesElement({
    name: "Flashbang Powder (level 13)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4994",
    source: "Dragon Magazine 373",
    categories: ["Flashbang Powder (level 13)", "ID_FMP_MAGIC_ITEM_4994"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Flashbang Powder (level 18)"] = new engine.RulesElement({
    name: "Flashbang Powder (level 18)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4995",
    source: "Dragon Magazine 373",
    categories: ["Flashbang Powder (level 18)", "ID_FMP_MAGIC_ITEM_4995"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Flashbang Powder (level 23)"] = new engine.RulesElement({
    name: "Flashbang Powder (level 23)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4996",
    source: "Dragon Magazine 373",
    categories: ["Flashbang Powder (level 23)", "ID_FMP_MAGIC_ITEM_4996"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Flashbang Powder (level 28)"] = new engine.RulesElement({
    name: "Flashbang Powder (level 28)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4997",
    source: "Dragon Magazine 373",
    categories: ["Flashbang Powder (level 28)", "ID_FMP_MAGIC_ITEM_4997"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Flashbang Powder (level 8)"] = new engine.RulesElement({
    name: "Flashbang Powder (level 8)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4993",
    source: "Dragon Magazine 373",
    categories: ["Flashbang Powder (level 8)", "ID_FMP_MAGIC_ITEM_4993"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Spider Bolt +5"] = new engine.RulesElement({
    name: "Spider Bolt +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5034",
    source: "Dragon Magazine 373",
    categories: ["Spider Bolt +5", "ID_FMP_MAGIC_ITEM_5034"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Spider Bolt +6"] = new engine.RulesElement({
    name: "Spider Bolt +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5035",
    source: "Dragon Magazine 373",
    categories: ["Spider Bolt +6", "ID_FMP_MAGIC_ITEM_5035"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
