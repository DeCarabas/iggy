(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Armor = types['Armor'] || (types['Armor'] = {});
  te = Armor["Anathema Armor"] = new RulesElement({
    name: "Anathema Armor",
    type: "Armor",
    id: "ID_FMP_ARMOR_28",
    source: "Adventurer's Vault",
    categories: ["Anathema Armor", "ID_FMP_ARMOR_28", "ID_FMP_POWER_1225", "light", "ID_INTERNAL_CATEGORY_LEATHER", "leather"],
    rules: function(model) {
      model.statadd("Reflex Defense", 1, "Armor");
      model.statadd("Armor Class", 3, "Armor");
      model.statadd("attack rolls", -2);
      model.statadd("Reflex Defense", -2);
    }
  });
  byID[te.id] = te;
  
  te = Armor["Braidmail Armor"] = new RulesElement({
    name: "Braidmail Armor",
    type: "Armor",
    id: "ID_FMP_ARMOR_35",
    source: "Adventurer's Vault",
    categories: ["Braidmail Armor", "ID_FMP_ARMOR_35", "ID_INTERNAL_CATEGORY_HEAVY", "heavy", "ID_INTERNAL_CATEGORY_CHAIN", "chain"],
    rules: function(model) {
      model.statadd("Armor Class", 8, "Armor");
      model.statadd("Armor Penalty", -1, "chain");
      model.statadd("Speed", -1, "Armor");
      model.statadd("attack rolls", -2);
      model.statadd("Reflex Defense", -2);
    }
  });
  byID[te.id] = te;
  
  te = Armor["Crysteel Armor"] = new RulesElement({
    name: "Crysteel Armor",
    type: "Armor",
    id: "ID_FMP_ARMOR_36",
    source: "Adventurer's Vault",
    categories: ["Crysteel Armor", "ID_FMP_ARMOR_36", "ID_INTERNAL_CATEGORY_HEAVY", "heavy", "ID_INTERNAL_CATEGORY_CHAIN", "chain"],
    rules: function(model) {
      model.statadd("Will Defense", 2, "Armor");
      model.statadd("Armor Class", 8, "Armor");
      model.statadd("Armor Penalty", -1, "chain");
      model.statadd("Speed", -1, "Armor");
      model.statadd("attack rolls", -2);
      model.statadd("Reflex Defense", -2);
    }
  });
  byID[te.id] = te;
  
  te = Armor["Drakescale Armor"] = new RulesElement({
    name: "Drakescale Armor",
    type: "Armor",
    id: "ID_FMP_ARMOR_39",
    source: "Adventurer's Vault",
    categories: ["Drakescale Armor", "ID_FMP_ARMOR_39", "ID_INTERNAL_CATEGORY_HEAVY", "heavy", "ID_INTERNAL_CATEGORY_SCALE", "Scale"],
    rules: function(model) {
      model.statadd("Armor Class", 8, "Armor");
      model.statadd("Speed", -1, "Armor");
      model.statadd("attack rolls", -2);
      model.statadd("Reflex Defense", -2);
    }
  });
  byID[te.id] = te;
  
  te = Armor["Drowmesh"] = new RulesElement({
    name: "Drowmesh",
    type: "Armor",
    id: "ID_FMP_ARMOR_26",
    source: "Adventurer's Vault",
    categories: ["Drowmesh", "ID_FMP_ARMOR_26", "ID_FMP_POWER_1225", "light", "ID_INTERNAL_CATEGORY_LEATHER", "leather"],
    rules: function(model) {
      model.statadd("Reflex Defense", 1, "Armor");
      model.statadd("Armor Class", 2, "Armor");
      model.statadd("attack rolls", -2);
      model.statadd("Reflex Defense", -2);
    }
  });
  byID[te.id] = te;
  
  te = Armor["Earthhide Armor"] = new RulesElement({
    name: "Earthhide Armor",
    type: "Armor",
    id: "ID_FMP_ARMOR_30",
    source: "Adventurer's Vault",
    categories: ["Earthhide Armor", "ID_FMP_ARMOR_30", "ID_FMP_POWER_1225", "light", "ID_INTERNAL_CATEGORY_HIDE", "hide"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 1, "Armor");
      model.statadd("Armor Class", 3, "Armor");
      model.statadd("Armor Penalty", -1, "hide");
      model.statadd("attack rolls", -2);
      model.statadd("Reflex Defense", -2);
    }
  });
  byID[te.id] = te;
  
  te = Armor["Efreetweave Armor"] = new RulesElement({
    name: "Efreetweave Armor",
    type: "Armor",
    id: "ID_FMP_ARMOR_24",
    source: "Adventurer's Vault",
    categories: ["Efreetweave Armor", "ID_FMP_ARMOR_24", "ID_FMP_POWER_1225", "light", "ID_INTERNAL_CATEGORY_CLOTH", "cloth"],
    rules: function(model) {
      model.statadd("Will Defense", 1, "Armor");
      model.statadd("Armor Class", 1, "Armor");
      model.statadd("attack rolls", -2);
      model.statadd("Reflex Defense", -2);
    }
  });
  byID[te.id] = te;
  
  te = Armor["Feyhide Armor"] = new RulesElement({
    name: "Feyhide Armor",
    type: "Armor",
    id: "ID_FMP_ARMOR_31",
    source: "Adventurer's Vault",
    categories: ["Feyhide Armor", "ID_FMP_ARMOR_31", "ID_FMP_POWER_1225", "light", "ID_INTERNAL_CATEGORY_HIDE", "hide"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 2, "Armor");
      model.statadd("Armor Class", 3, "Armor");
      model.statadd("Armor Penalty", -1, "hide");
      model.statadd("attack rolls", -2);
      model.statadd("Reflex Defense", -2);
    }
  });
  byID[te.id] = te;
  
  te = Armor["Finemail"] = new RulesElement({
    name: "Finemail",
    type: "Armor",
    id: "ID_FMP_ARMOR_34",
    source: "Adventurer's Vault",
    categories: ["Finemail", "ID_FMP_ARMOR_34", "ID_INTERNAL_CATEGORY_HEAVY", "heavy", "ID_INTERNAL_CATEGORY_CHAIN", "chain"],
    rules: function(model) {
      model.statadd("Armor Class", 7, "Armor");
      model.statadd("Armor Penalty", -1, "chain");
      model.statadd("Speed", -1, "Armor");
      model.statadd("attack rolls", -2);
      model.statadd("Reflex Defense", -2);
    }
  });
  byID[te.id] = te;
  
  te = Armor["Gith Plate Armor"] = new RulesElement({
    name: "Gith Plate Armor",
    type: "Armor",
    id: "ID_FMP_ARMOR_46",
    source: "Adventurer's Vault",
    categories: ["Gith Plate Armor", "ID_FMP_ARMOR_46", "ID_INTERNAL_CATEGORY_HEAVY", "heavy", "ID_INTERNAL_CATEGORY_PLATE", "plate"],
    rules: function(model) {
      model.statadd("Armor Class", 10, "Armor");
      model.statadd("Armor Penalty", -2, "plate");
      model.statadd("Speed", -1, "Armor");
      model.statadd("attack rolls", -2);
      model.statadd("Reflex Defense", -2);
    }
  });
  byID[te.id] = te;
  
  te = Armor["Githweave Armor"] = new RulesElement({
    name: "Githweave Armor",
    type: "Armor",
    id: "ID_FMP_ARMOR_22",
    source: "Adventurer's Vault",
    categories: ["Githweave Armor", "ID_FMP_ARMOR_22", "ID_FMP_POWER_1225", "light", "ID_INTERNAL_CATEGORY_CLOTH", "cloth"],
    rules: function(model) {
      model.statadd("Will Defense", 1, "Armor");
      model.statadd("Armor Class", 0, "Armor");
      model.statadd("attack rolls", -2);
      model.statadd("Reflex Defense", -2);
    }
  });
  byID[te.id] = te;
  
  te = Armor["Heavy Barding"] = new RulesElement({
    name: "Heavy Barding",
    type: "Armor",
    id: "ID_FMP_ARMOR_52",
    source: "Adventurer's Vault",
    categories: ["Heavy Barding", "ID_FMP_ARMOR_52", "ID_FMP_POWER_1225", "light"],
    rules: function(model) {
      model.statadd("Armor Class", 2, "Armor");
      model.statadd("Armor Penalty", -2, "");
      model.statadd("Speed", -1, "Armor");
      model.statadd("attack rolls", -2);
      model.statadd("Reflex Defense", -2);
    }
  });
  byID[te.id] = te;
  
  te = Armor["Heavy Barding (Huge creature)"] = new RulesElement({
    name: "Heavy Barding (Huge creature)",
    type: "Armor",
    id: "ID_FMP_ARMOR_53",
    source: "Adventurer's Vault",
    categories: ["Heavy Barding (Huge creature)", "ID_FMP_ARMOR_53", "ID_FMP_POWER_1225", "light"],
    rules: function(model) {
      model.statadd("Armor Class", 2, "Armor");
      model.statadd("Armor Penalty", -2, "");
      model.statadd("Speed", -1, "Armor");
      model.statadd("attack rolls", -2);
      model.statadd("Reflex Defense", -2);
    }
  });
  byID[te.id] = te;
  
  te = Armor["Layered Plate Armor"] = new RulesElement({
    name: "Layered Plate Armor",
    type: "Armor",
    id: "ID_FMP_ARMOR_45",
    source: "Adventurer's Vault",
    categories: ["Layered Plate Armor", "ID_FMP_ARMOR_45", "ID_INTERNAL_CATEGORY_HEAVY", "heavy", "ID_INTERNAL_CATEGORY_PLATE", "plate"],
    rules: function(model) {
      model.statadd("Armor Class", 9, "Armor");
      model.statadd("Armor Penalty", -2, "plate");
      model.statadd("Speed", -1, "Armor");
      model.statadd("attack rolls", -2);
      model.statadd("Reflex Defense", -2);
    }
  });
  byID[te.id] = te;
  
  te = Armor["Legion Plate Armor"] = new RulesElement({
    name: "Legion Plate Armor",
    type: "Armor",
    id: "ID_FMP_ARMOR_48",
    source: "Adventurer's Vault",
    categories: ["Legion Plate Armor", "ID_FMP_ARMOR_48", "ID_INTERNAL_CATEGORY_HEAVY", "heavy", "ID_INTERNAL_CATEGORY_PLATE", "plate"],
    rules: function(model) {
      model.statadd("Armor Class", 12, "Armor");
      model.statadd("Armor Penalty", -2, "plate");
      model.statadd("Speed", -1, "Armor");
      model.statadd("attack rolls", -2);
      model.statadd("Reflex Defense", -2);
    }
  });
  byID[te.id] = te;
  
  te = Armor["Light Barding"] = new RulesElement({
    name: "Light Barding",
    type: "Armor",
    id: "ID_FMP_ARMOR_50",
    source: "Adventurer's Vault",
    categories: ["Light Barding", "ID_FMP_ARMOR_50", "ID_FMP_POWER_1225", "light"],
    rules: function(model) {
      model.statadd("Armor Class", 1, "Armor");
      model.statadd("attack rolls", -2);
      model.statadd("Reflex Defense", -2);
    }
  });
  byID[te.id] = te;
  
  te = Armor["Light Barding (Huge creature)"] = new RulesElement({
    name: "Light Barding (Huge creature)",
    type: "Armor",
    id: "ID_FMP_ARMOR_51",
    source: "Adventurer's Vault",
    categories: ["Light Barding (Huge creature)", "ID_FMP_ARMOR_51", "ID_FMP_POWER_1225", "light"],
    rules: function(model) {
      model.statadd("Armor Class", 1, "Armor");
      model.statadd("attack rolls", -2);
      model.statadd("Reflex Defense", -2);
    }
  });
  byID[te.id] = te;
  
  te = Armor["Mindpatterned Armor"] = new RulesElement({
    name: "Mindpatterned Armor",
    type: "Armor",
    id: "ID_FMP_ARMOR_25",
    source: "Adventurer's Vault",
    categories: ["Mindpatterned Armor", "ID_FMP_ARMOR_25", "ID_FMP_POWER_1225", "light", "ID_INTERNAL_CATEGORY_CLOTH", "cloth"],
    rules: function(model) {
      model.statadd("Will Defense", 2, "Armor");
      model.statadd("Armor Class", 1, "Armor");
      model.statadd("attack rolls", -2);
      model.statadd("Reflex Defense", -2);
    }
  });
  byID[te.id] = te;
  
  te = Armor["Mindweave Armor"] = new RulesElement({
    name: "Mindweave Armor",
    type: "Armor",
    id: "ID_FMP_ARMOR_23",
    source: "Adventurer's Vault",
    categories: ["Mindweave Armor", "ID_FMP_ARMOR_23", "ID_FMP_POWER_1225", "light", "ID_INTERNAL_CATEGORY_CLOTH", "cloth"],
    rules: function(model) {
      model.statadd("Will Defense", 2, "Armor");
      model.statadd("Armor Class", 0, "Armor");
      model.statadd("attack rolls", -2);
      model.statadd("Reflex Defense", -2);
    }
  });
  byID[te.id] = te;
  
  te = Armor["Nagascale Armor"] = new RulesElement({
    name: "Nagascale Armor",
    type: "Armor",
    id: "ID_FMP_ARMOR_42",
    source: "Adventurer's Vault",
    categories: ["Nagascale Armor", "ID_FMP_ARMOR_42", "ID_INTERNAL_CATEGORY_HEAVY", "heavy", "ID_INTERNAL_CATEGORY_SCALE", "Scale"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 1, "Armor");
      model.statadd("Armor Class", 11, "Armor");
      model.statadd("Speed", -1, "Armor");
      model.statadd("attack rolls", -2);
      model.statadd("Reflex Defense", -2);
    }
  });
  byID[te.id] = te;
  
  te = Armor["Pitmail Armor"] = new RulesElement({
    name: "Pitmail Armor",
    type: "Armor",
    id: "ID_FMP_ARMOR_38",
    source: "Adventurer's Vault",
    categories: ["Pitmail Armor", "ID_FMP_ARMOR_38", "ID_INTERNAL_CATEGORY_HEAVY", "heavy", "ID_INTERNAL_CATEGORY_CHAIN", "chain"],
    rules: function(model) {
      model.statadd("Will Defense", 2, "Armor");
      model.statadd("Armor Class", 11, "Armor");
      model.statadd("Armor Penalty", -1, "chain");
      model.statadd("Speed", -1, "Armor");
      model.statadd("attack rolls", -2);
      model.statadd("Reflex Defense", -2);
    }
  });
  byID[te.id] = te;
  
  te = Armor["Rimefire Plate Armor"] = new RulesElement({
    name: "Rimefire Plate Armor",
    type: "Armor",
    id: "ID_FMP_ARMOR_44",
    source: "Adventurer's Vault",
    categories: ["Rimefire Plate Armor", "ID_FMP_ARMOR_44", "ID_INTERNAL_CATEGORY_HEAVY", "heavy", "ID_INTERNAL_CATEGORY_PLATE", "plate"],
    rules: function(model) {
      model.statadd("resist:all", 1, "resist");
      model.statadd("Armor Class", 8, "Armor");
      model.statadd("Armor Penalty", -2, "plate");
      model.statadd("Speed", -1, "Armor");
      model.statadd("attack rolls", -2);
      model.statadd("Reflex Defense", -2);
    }
  });
  byID[te.id] = te;
  
  te = Armor["Snakeskin Armor"] = new RulesElement({
    name: "Snakeskin Armor",
    type: "Armor",
    id: "ID_FMP_ARMOR_27",
    source: "Adventurer's Vault",
    categories: ["Snakeskin Armor", "ID_FMP_ARMOR_27", "ID_FMP_POWER_1225", "light", "ID_INTERNAL_CATEGORY_LEATHER", "leather"],
    rules: function(model) {
      model.statadd("Reflex Defense", 2, "Armor");
      model.statadd("Armor Class", 2, "Armor");
      model.statadd("attack rolls", -2);
      model.statadd("Reflex Defense", -2);
    }
  });
  byID[te.id] = te;
  
  te = Armor["Specter Plate Armor"] = new RulesElement({
    name: "Specter Plate Armor",
    type: "Armor",
    id: "ID_FMP_ARMOR_47",
    source: "Adventurer's Vault",
    categories: ["Specter Plate Armor", "ID_FMP_ARMOR_47", "ID_INTERNAL_CATEGORY_HEAVY", "heavy", "ID_INTERNAL_CATEGORY_PLATE", "plate"],
    rules: function(model) {
      model.statadd("resist:all", 2, "resist");
      model.statadd("Armor Class", 10, "Armor");
      model.statadd("Armor Penalty", -2, "plate");
      model.statadd("Speed", -1, "Armor");
      model.statadd("attack rolls", -2);
      model.statadd("Reflex Defense", -2);
    }
  });
  byID[te.id] = te;
  
  te = Armor["Stalkerhide Armor"] = new RulesElement({
    name: "Stalkerhide Armor",
    type: "Armor",
    id: "ID_FMP_ARMOR_32",
    source: "Adventurer's Vault",
    categories: ["Stalkerhide Armor", "ID_FMP_ARMOR_32", "ID_FMP_POWER_1225", "light", "ID_INTERNAL_CATEGORY_HIDE", "hide"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 1, "Armor");
      model.statadd("Armor Class", 4, "Armor");
      model.statadd("Armor Penalty", -1, "hide");
      model.statadd("attack rolls", -2);
      model.statadd("Reflex Defense", -2);
    }
  });
  byID[te.id] = te;
  
  te = Armor["Stormscale Armor"] = new RulesElement({
    name: "Stormscale Armor",
    type: "Armor",
    id: "ID_FMP_ARMOR_41",
    source: "Adventurer's Vault",
    categories: ["Stormscale Armor", "ID_FMP_ARMOR_41", "ID_INTERNAL_CATEGORY_HEAVY", "heavy", "ID_INTERNAL_CATEGORY_SCALE", "Scale"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 2, "Armor");
      model.statadd("Armor Class", 9, "Armor");
      model.statadd("Speed", -1, "Armor");
      model.statadd("attack rolls", -2);
      model.statadd("Reflex Defense", -2);
    }
  });
  byID[te.id] = te;
  
  te = Armor["Swordwing Armor"] = new RulesElement({
    name: "Swordwing Armor",
    type: "Armor",
    id: "ID_FMP_ARMOR_29",
    source: "Adventurer's Vault",
    categories: ["Swordwing Armor", "ID_FMP_ARMOR_29", "ID_FMP_POWER_1225", "light", "ID_INTERNAL_CATEGORY_LEATHER", "leather"],
    rules: function(model) {
      model.statadd("Reflex Defense", 2, "Armor");
      model.statadd("Armor Class", 3, "Armor");
      model.statadd("attack rolls", -2);
      model.statadd("Reflex Defense", -2);
    }
  });
  byID[te.id] = te;
  
  te = Armor["Tarrasque Plate Armor"] = new RulesElement({
    name: "Tarrasque Plate Armor",
    type: "Armor",
    id: "ID_FMP_ARMOR_49",
    source: "Adventurer's Vault",
    categories: ["Tarrasque Plate Armor", "ID_FMP_ARMOR_49", "ID_INTERNAL_CATEGORY_HEAVY", "heavy", "ID_INTERNAL_CATEGORY_PLATE", "plate"],
    rules: function(model) {
      model.statadd("resist:all", 5, "resist");
      model.statadd("Armor Class", 12, "Armor");
      model.statadd("Armor Penalty", -2, "plate");
      model.statadd("Speed", -1, "Armor");
      model.statadd("attack rolls", -2);
      model.statadd("Reflex Defense", -2);
    }
  });
  byID[te.id] = te;
  
  te = Armor["Titanscale Armor"] = new RulesElement({
    name: "Titanscale Armor",
    type: "Armor",
    id: "ID_FMP_ARMOR_43",
    source: "Adventurer's Vault",
    categories: ["Titanscale Armor", "ID_FMP_ARMOR_43", "ID_INTERNAL_CATEGORY_HEAVY", "heavy", "ID_INTERNAL_CATEGORY_SCALE", "Scale"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 2, "Armor");
      model.statadd("Armor Class", 12, "Armor");
      model.statadd("Speed", -1, "Armor");
      model.statadd("attack rolls", -2);
      model.statadd("Reflex Defense", -2);
    }
  });
  byID[te.id] = te;
  
  te = Armor["Voidhide"] = new RulesElement({
    name: "Voidhide",
    type: "Armor",
    id: "ID_FMP_ARMOR_33",
    source: "Adventurer's Vault",
    categories: ["Voidhide", "ID_FMP_ARMOR_33", "ID_FMP_POWER_1225", "light", "ID_INTERNAL_CATEGORY_HIDE", "hide"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 2, "Armor");
      model.statadd("Armor Class", 4, "Armor");
      model.statadd("Armor Penalty", -1, "hide");
      model.statadd("attack rolls", -2);
      model.statadd("Reflex Defense", -2);
    }
  });
  byID[te.id] = te;
  
  te = Armor["Weavemail Armor"] = new RulesElement({
    name: "Weavemail Armor",
    type: "Armor",
    id: "ID_FMP_ARMOR_37",
    source: "Adventurer's Vault",
    categories: ["Weavemail Armor", "ID_FMP_ARMOR_37", "ID_INTERNAL_CATEGORY_HEAVY", "heavy", "ID_INTERNAL_CATEGORY_CHAIN", "chain"],
    rules: function(model) {
      model.statadd("Will Defense", 1, "Armor");
      model.statadd("Armor Class", 10, "Armor");
      model.statadd("Armor Penalty", -1, "chain");
      model.statadd("Speed", -1, "Armor");
      model.statadd("attack rolls", -2);
      model.statadd("Reflex Defense", -2);
    }
  });
  byID[te.id] = te;
  
  te = Armor["Wyvernscale Armor"] = new RulesElement({
    name: "Wyvernscale Armor",
    type: "Armor",
    id: "ID_FMP_ARMOR_40",
    source: "Adventurer's Vault",
    categories: ["Wyvernscale Armor", "ID_FMP_ARMOR_40", "ID_INTERNAL_CATEGORY_HEAVY", "heavy", "ID_INTERNAL_CATEGORY_SCALE", "Scale"],
    rules: function(model) {
      model.statadd("Armor Class", 9, "Armor");
      model.statadd("Speed", -1, "Armor");
      model.statadd("attack rolls", -2);
      model.statadd("Reflex Defense", -2);
    }
  });
  byID[te.id] = te;
  
  
})(this);
