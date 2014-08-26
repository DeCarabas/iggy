define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Boar Tusk Helm (epic tier)"] = new engine.RulesElement({
    name: "Boar Tusk Helm (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7911",
    source: "Dragon Magazine 378",
    categories: ["Boar Tusk Helm (epic tier)", "ID_FMP_MAGIC_ITEM_7911"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(BOAR_TUSK)"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Boar Tusk Helm (heroic tier)"] = new engine.RulesElement({
    name: "Boar Tusk Helm (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7907",
    source: "Dragon Magazine 378",
    categories: ["Boar Tusk Helm (heroic tier)", "ID_FMP_MAGIC_ITEM_7907"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(BOAR_TUSK)"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Boar Tusk Helm (paragon tier)"] = new engine.RulesElement({
    name: "Boar Tusk Helm (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7909",
    source: "Dragon Magazine 378",
    categories: ["Boar Tusk Helm (paragon tier)", "ID_FMP_MAGIC_ITEM_7909"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(BOAR_TUSK)"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Boots of the Dryad (epic tier)"] = new engine.RulesElement({
    name: "Boots of the Dryad (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7900",
    source: "Dragon Magazine 378",
    categories: ["Boots of the Dryad (epic tier)", "ID_FMP_MAGIC_ITEM_7900"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Boots of the Dryad (heroic tier)"] = new engine.RulesElement({
    name: "Boots of the Dryad (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7896",
    source: "Dragon Magazine 378",
    categories: ["Boots of the Dryad (heroic tier)", "ID_FMP_MAGIC_ITEM_7896"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Boots of the Dryad (paragon tier)"] = new engine.RulesElement({
    name: "Boots of the Dryad (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7898",
    source: "Dragon Magazine 378",
    categories: ["Boots of the Dryad (paragon tier)", "ID_FMP_MAGIC_ITEM_7898"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bracers of Brachiation (epic tier)"] = new engine.RulesElement({
    name: "Bracers of Brachiation (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7894",
    source: "Dragon Magazine 378",
    categories: ["Bracers of Brachiation (epic tier)", "ID_FMP_MAGIC_ITEM_7894"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bracers of Brachiation (heroic tier)"] = new engine.RulesElement({
    name: "Bracers of Brachiation (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7890",
    source: "Dragon Magazine 378",
    categories: ["Bracers of Brachiation (heroic tier)", "ID_FMP_MAGIC_ITEM_7890"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bracers of Brachiation (paragon tier)"] = new engine.RulesElement({
    name: "Bracers of Brachiation (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7892",
    source: "Dragon Magazine 378",
    categories: ["Bracers of Brachiation (paragon tier)", "ID_FMP_MAGIC_ITEM_7892"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Giving Spirit Soulfang (level 13)"] = new engine.RulesElement({
    name: "Giving Spirit Soulfang (level 13)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7922",
    source: "Dragon Magazine 378",
    categories: ["Giving Spirit Soulfang (level 13)", "ID_FMP_MAGIC_ITEM_7922"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Giving Spirit Soulfang (level 18)"] = new engine.RulesElement({
    name: "Giving Spirit Soulfang (level 18)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7923",
    source: "Dragon Magazine 378",
    categories: ["Giving Spirit Soulfang (level 18)", "ID_FMP_MAGIC_ITEM_7923"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Giving Spirit Soulfang (level 23)"] = new engine.RulesElement({
    name: "Giving Spirit Soulfang (level 23)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7924",
    source: "Dragon Magazine 378",
    categories: ["Giving Spirit Soulfang (level 23)", "ID_FMP_MAGIC_ITEM_7924"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Giving Spirit Soulfang (level 28)"] = new engine.RulesElement({
    name: "Giving Spirit Soulfang (level 28)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7925",
    source: "Dragon Magazine 378",
    categories: ["Giving Spirit Soulfang (level 28)", "ID_FMP_MAGIC_ITEM_7925"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Giving Spirit Soulfang (level 3)"] = new engine.RulesElement({
    name: "Giving Spirit Soulfang (level 3)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7920",
    source: "Dragon Magazine 378",
    categories: ["Giving Spirit Soulfang (level 3)", "ID_FMP_MAGIC_ITEM_7920"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Giving Spirit Soulfang (level 8)"] = new engine.RulesElement({
    name: "Giving Spirit Soulfang (level 8)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7921",
    source: "Dragon Magazine 378",
    categories: ["Giving Spirit Soulfang (level 8)", "ID_FMP_MAGIC_ITEM_7921"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Gorilla Gloves (epic tier)"] = new engine.RulesElement({
    name: "Gorilla Gloves (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7906",
    source: "Dragon Magazine 378",
    categories: ["Gorilla Gloves (epic tier)", "ID_FMP_MAGIC_ITEM_7906"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Gorilla Gloves (heroic tier)"] = new engine.RulesElement({
    name: "Gorilla Gloves (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7902",
    source: "Dragon Magazine 378",
    categories: ["Gorilla Gloves (heroic tier)", "ID_FMP_MAGIC_ITEM_7902"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Gorilla Gloves (paragon tier)"] = new engine.RulesElement({
    name: "Gorilla Gloves (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7904",
    source: "Dragon Magazine 378",
    categories: ["Gorilla Gloves (paragon tier)", "ID_FMP_MAGIC_ITEM_7904"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ironskin Soulfang (level 10)"] = new engine.RulesElement({
    name: "Ironskin Soulfang (level 10)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7927",
    source: "Dragon Magazine 378",
    categories: ["Ironskin Soulfang (level 10)", "ID_FMP_MAGIC_ITEM_7927"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ironskin Soulfang (level 15)"] = new engine.RulesElement({
    name: "Ironskin Soulfang (level 15)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7928",
    source: "Dragon Magazine 378",
    categories: ["Ironskin Soulfang (level 15)", "ID_FMP_MAGIC_ITEM_7928"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ironskin Soulfang (level 20)"] = new engine.RulesElement({
    name: "Ironskin Soulfang (level 20)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7929",
    source: "Dragon Magazine 378",
    categories: ["Ironskin Soulfang (level 20)", "ID_FMP_MAGIC_ITEM_7929"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ironskin Soulfang (level 25)"] = new engine.RulesElement({
    name: "Ironskin Soulfang (level 25)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7930",
    source: "Dragon Magazine 378",
    categories: ["Ironskin Soulfang (level 25)", "ID_FMP_MAGIC_ITEM_7930"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ironskin Soulfang (level 30)"] = new engine.RulesElement({
    name: "Ironskin Soulfang (level 30)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7931",
    source: "Dragon Magazine 378",
    categories: ["Ironskin Soulfang (level 30)", "ID_FMP_MAGIC_ITEM_7931"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ironskin Soulfang (level 5)"] = new engine.RulesElement({
    name: "Ironskin Soulfang (level 5)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7926",
    source: "Dragon Magazine 378",
    categories: ["Ironskin Soulfang (level 5)", "ID_FMP_MAGIC_ITEM_7926"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Pouncing Armor +1"] = new engine.RulesElement({
    name: "Pouncing Armor +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7878",
    source: "Dragon Magazine 378",
    categories: ["Pouncing Armor +1", "ID_FMP_MAGIC_ITEM_7878"],
    rules: function(model) {
      model.statadd("Armor Class", 1, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Pouncing Armor +2"] = new engine.RulesElement({
    name: "Pouncing Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7885",
    source: "Dragon Magazine 378",
    categories: ["Pouncing Armor +2", "ID_FMP_MAGIC_ITEM_7885"],
    rules: function(model) {
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Pouncing Armor +3"] = new engine.RulesElement({
    name: "Pouncing Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7886",
    source: "Dragon Magazine 378",
    categories: ["Pouncing Armor +3", "ID_FMP_MAGIC_ITEM_7886"],
    rules: function(model) {
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Pouncing Armor +4"] = new engine.RulesElement({
    name: "Pouncing Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7887",
    source: "Dragon Magazine 378",
    categories: ["Pouncing Armor +4", "ID_FMP_MAGIC_ITEM_7887"],
    rules: function(model) {
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Pouncing Armor +5"] = new engine.RulesElement({
    name: "Pouncing Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7888",
    source: "Dragon Magazine 378",
    categories: ["Pouncing Armor +5", "ID_FMP_MAGIC_ITEM_7888"],
    rules: function(model) {
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Pouncing Armor +6"] = new engine.RulesElement({
    name: "Pouncing Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7889",
    source: "Dragon Magazine 378",
    categories: ["Pouncing Armor +6", "ID_FMP_MAGIC_ITEM_7889"],
    rules: function(model) {
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ring of Giants (paragon tier)"] = new engine.RulesElement({
    name: "Ring of Giants (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7912",
    source: "Dragon Magazine 378",
    categories: ["Ring of Giants (paragon tier)", "ID_FMP_MAGIC_ITEM_7912"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Roused Spirit Soulfang (level 12)"] = new engine.RulesElement({
    name: "Roused Spirit Soulfang (level 12)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7916",
    source: "Dragon Magazine 378",
    categories: ["Roused Spirit Soulfang (level 12)", "ID_FMP_MAGIC_ITEM_7916"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Roused Spirit Soulfang (level 17)"] = new engine.RulesElement({
    name: "Roused Spirit Soulfang (level 17)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7917",
    source: "Dragon Magazine 378",
    categories: ["Roused Spirit Soulfang (level 17)", "ID_FMP_MAGIC_ITEM_7917"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Roused Spirit Soulfang (level 2)"] = new engine.RulesElement({
    name: "Roused Spirit Soulfang (level 2)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7914",
    source: "Dragon Magazine 378",
    categories: ["Roused Spirit Soulfang (level 2)", "ID_FMP_MAGIC_ITEM_7914"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Roused Spirit Soulfang (level 22)"] = new engine.RulesElement({
    name: "Roused Spirit Soulfang (level 22)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7918",
    source: "Dragon Magazine 378",
    categories: ["Roused Spirit Soulfang (level 22)", "ID_FMP_MAGIC_ITEM_7918"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Roused Spirit Soulfang (level 27)"] = new engine.RulesElement({
    name: "Roused Spirit Soulfang (level 27)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7919",
    source: "Dragon Magazine 378",
    categories: ["Roused Spirit Soulfang (level 27)", "ID_FMP_MAGIC_ITEM_7919"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Roused Spirit Soulfang (level 7)"] = new engine.RulesElement({
    name: "Roused Spirit Soulfang (level 7)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7915",
    source: "Dragon Magazine 378",
    categories: ["Roused Spirit Soulfang (level 7)", "ID_FMP_MAGIC_ITEM_7915"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Soulfang of Predatory Nature (level 13)"] = new engine.RulesElement({
    name: "Soulfang of Predatory Nature (level 13)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7934",
    source: "Dragon Magazine 378",
    categories: ["Soulfang of Predatory Nature (level 13)", "ID_FMP_MAGIC_ITEM_7934"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Soulfang of Predatory Nature (level 18)"] = new engine.RulesElement({
    name: "Soulfang of Predatory Nature (level 18)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7935",
    source: "Dragon Magazine 378",
    categories: ["Soulfang of Predatory Nature (level 18)", "ID_FMP_MAGIC_ITEM_7935"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Soulfang of Predatory Nature (level 23)"] = new engine.RulesElement({
    name: "Soulfang of Predatory Nature (level 23)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7936",
    source: "Dragon Magazine 378",
    categories: ["Soulfang of Predatory Nature (level 23)", "ID_FMP_MAGIC_ITEM_7936"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Soulfang of Predatory Nature (level 28)"] = new engine.RulesElement({
    name: "Soulfang of Predatory Nature (level 28)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7937",
    source: "Dragon Magazine 378",
    categories: ["Soulfang of Predatory Nature (level 28)", "ID_FMP_MAGIC_ITEM_7937"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Soulfang of Predatory Nature (level 3)"] = new engine.RulesElement({
    name: "Soulfang of Predatory Nature (level 3)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7932",
    source: "Dragon Magazine 378",
    categories: ["Soulfang of Predatory Nature (level 3)", "ID_FMP_MAGIC_ITEM_7932"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Soulfang of Predatory Nature (level 8)"] = new engine.RulesElement({
    name: "Soulfang of Predatory Nature (level 8)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7933",
    source: "Dragon Magazine 378",
    categories: ["Soulfang of Predatory Nature (level 8)", "ID_FMP_MAGIC_ITEM_7933"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Soulfang of Rage (heroic tier)"] = new engine.RulesElement({
    name: "Soulfang of Rage (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7938",
    source: "Dragon Magazine 378",
    categories: ["Soulfang of Rage (heroic tier)", "ID_FMP_MAGIC_ITEM_7938"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Soulfang of Resistance (epic tier)"] = new engine.RulesElement({
    name: "Soulfang of Resistance (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7943",
    source: "Dragon Magazine 378",
    categories: ["Soulfang of Resistance (epic tier)", "ID_FMP_MAGIC_ITEM_7943"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Soulfang of Resistance (heroic tier)"] = new engine.RulesElement({
    name: "Soulfang of Resistance (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7939",
    source: "Dragon Magazine 378",
    categories: ["Soulfang of Resistance (heroic tier)", "ID_FMP_MAGIC_ITEM_7939"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Soulfang of Resistance (paragon tier)"] = new engine.RulesElement({
    name: "Soulfang of Resistance (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7941",
    source: "Dragon Magazine 378",
    categories: ["Soulfang of Resistance (paragon tier)", "ID_FMP_MAGIC_ITEM_7941"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Soulfang of Retribution (level 10)"] = new engine.RulesElement({
    name: "Soulfang of Retribution (level 10)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7946",
    source: "Dragon Magazine 378",
    categories: ["Soulfang of Retribution (level 10)", "ID_FMP_MAGIC_ITEM_7946"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Soulfang of Retribution (level 15)"] = new engine.RulesElement({
    name: "Soulfang of Retribution (level 15)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7947",
    source: "Dragon Magazine 378",
    categories: ["Soulfang of Retribution (level 15)", "ID_FMP_MAGIC_ITEM_7947"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Soulfang of Retribution (level 20)"] = new engine.RulesElement({
    name: "Soulfang of Retribution (level 20)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7948",
    source: "Dragon Magazine 378",
    categories: ["Soulfang of Retribution (level 20)", "ID_FMP_MAGIC_ITEM_7948"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Soulfang of Retribution (level 25)"] = new engine.RulesElement({
    name: "Soulfang of Retribution (level 25)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7949",
    source: "Dragon Magazine 378",
    categories: ["Soulfang of Retribution (level 25)", "ID_FMP_MAGIC_ITEM_7949"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Soulfang of Retribution (level 30)"] = new engine.RulesElement({
    name: "Soulfang of Retribution (level 30)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7950",
    source: "Dragon Magazine 378",
    categories: ["Soulfang of Retribution (level 30)", "ID_FMP_MAGIC_ITEM_7950"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Soulfang of Retribution (level 5)"] = new engine.RulesElement({
    name: "Soulfang of Retribution (level 5)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7945",
    source: "Dragon Magazine 378",
    categories: ["Soulfang of Retribution (level 5)", "ID_FMP_MAGIC_ITEM_7945"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Soulfang of the Cheetah (epic tier)"] = new engine.RulesElement({
    name: "Soulfang of the Cheetah (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7968",
    source: "Dragon Magazine 378",
    categories: ["Soulfang of the Cheetah (epic tier)", "ID_FMP_MAGIC_ITEM_7968"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Soulfang of the Cheetah (heroic tier)"] = new engine.RulesElement({
    name: "Soulfang of the Cheetah (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7964",
    source: "Dragon Magazine 378",
    categories: ["Soulfang of the Cheetah (heroic tier)", "ID_FMP_MAGIC_ITEM_7964"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Soulfang of the Cheetah (paragon tier)"] = new engine.RulesElement({
    name: "Soulfang of the Cheetah (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7966",
    source: "Dragon Magazine 378",
    categories: ["Soulfang of the Cheetah (paragon tier)", "ID_FMP_MAGIC_ITEM_7966"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Stormlash Soulfang (level 10)"] = new engine.RulesElement({
    name: "Stormlash Soulfang (level 10)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7952",
    source: "Dragon Magazine 378",
    categories: ["Stormlash Soulfang (level 10)", "ID_FMP_MAGIC_ITEM_7952"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Stormlash Soulfang (level 15)"] = new engine.RulesElement({
    name: "Stormlash Soulfang (level 15)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7953",
    source: "Dragon Magazine 378",
    categories: ["Stormlash Soulfang (level 15)", "ID_FMP_MAGIC_ITEM_7953"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Stormlash Soulfang (level 20)"] = new engine.RulesElement({
    name: "Stormlash Soulfang (level 20)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7954",
    source: "Dragon Magazine 378",
    categories: ["Stormlash Soulfang (level 20)", "ID_FMP_MAGIC_ITEM_7954"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Stormlash Soulfang (level 25)"] = new engine.RulesElement({
    name: "Stormlash Soulfang (level 25)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7955",
    source: "Dragon Magazine 378",
    categories: ["Stormlash Soulfang (level 25)", "ID_FMP_MAGIC_ITEM_7955"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Stormlash Soulfang (level 30)"] = new engine.RulesElement({
    name: "Stormlash Soulfang (level 30)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7956",
    source: "Dragon Magazine 378",
    categories: ["Stormlash Soulfang (level 30)", "ID_FMP_MAGIC_ITEM_7956"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Stormlash Soulfang (level 5)"] = new engine.RulesElement({
    name: "Stormlash Soulfang (level 5)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7951",
    source: "Dragon Magazine 378",
    categories: ["Stormlash Soulfang (level 5)", "ID_FMP_MAGIC_ITEM_7951"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Swift Shaper's Soulfang (paragon tier)"] = new engine.RulesElement({
    name: "Swift Shaper's Soulfang (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7957",
    source: "Dragon Magazine 378",
    categories: ["Swift Shaper's Soulfang (paragon tier)", "ID_FMP_MAGIC_ITEM_7957"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Temblor Weapon +1"] = new engine.RulesElement({
    name: "Temblor Weapon +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7879",
    source: "Dragon Magazine 378",
    categories: ["Temblor Weapon +1", "ID_FMP_MAGIC_ITEM_7879"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Temblor Weapon +2"] = new engine.RulesElement({
    name: "Temblor Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7880",
    source: "Dragon Magazine 378",
    categories: ["Temblor Weapon +2", "ID_FMP_MAGIC_ITEM_7880"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Temblor Weapon +3"] = new engine.RulesElement({
    name: "Temblor Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7881",
    source: "Dragon Magazine 378",
    categories: ["Temblor Weapon +3", "ID_FMP_MAGIC_ITEM_7881"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Temblor Weapon +4"] = new engine.RulesElement({
    name: "Temblor Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7882",
    source: "Dragon Magazine 378",
    categories: ["Temblor Weapon +4", "ID_FMP_MAGIC_ITEM_7882"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Temblor Weapon +5"] = new engine.RulesElement({
    name: "Temblor Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7883",
    source: "Dragon Magazine 378",
    categories: ["Temblor Weapon +5", "ID_FMP_MAGIC_ITEM_7883"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Temblor Weapon +6"] = new engine.RulesElement({
    name: "Temblor Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7884",
    source: "Dragon Magazine 378",
    categories: ["Temblor Weapon +6", "ID_FMP_MAGIC_ITEM_7884"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Thorn Grasp Soulfang (level 13)"] = new engine.RulesElement({
    name: "Thorn Grasp Soulfang (level 13)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7960",
    source: "Dragon Magazine 378",
    categories: ["Thorn Grasp Soulfang (level 13)", "ID_FMP_MAGIC_ITEM_7960"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Thorn Grasp Soulfang (level 18)"] = new engine.RulesElement({
    name: "Thorn Grasp Soulfang (level 18)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7961",
    source: "Dragon Magazine 378",
    categories: ["Thorn Grasp Soulfang (level 18)", "ID_FMP_MAGIC_ITEM_7961"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Thorn Grasp Soulfang (level 23)"] = new engine.RulesElement({
    name: "Thorn Grasp Soulfang (level 23)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7962",
    source: "Dragon Magazine 378",
    categories: ["Thorn Grasp Soulfang (level 23)", "ID_FMP_MAGIC_ITEM_7962"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Thorn Grasp Soulfang (level 28)"] = new engine.RulesElement({
    name: "Thorn Grasp Soulfang (level 28)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7963",
    source: "Dragon Magazine 378",
    categories: ["Thorn Grasp Soulfang (level 28)", "ID_FMP_MAGIC_ITEM_7963"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Thorn Grasp Soulfang (level 3)"] = new engine.RulesElement({
    name: "Thorn Grasp Soulfang (level 3)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7958",
    source: "Dragon Magazine 378",
    categories: ["Thorn Grasp Soulfang (level 3)", "ID_FMP_MAGIC_ITEM_7958"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Thorn Grasp Soulfang (level 8)"] = new engine.RulesElement({
    name: "Thorn Grasp Soulfang (level 8)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7959",
    source: "Dragon Magazine 378",
    categories: ["Thorn Grasp Soulfang (level 8)", "ID_FMP_MAGIC_ITEM_7959"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
