define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Racial_Trait = types['Racial Trait'] || (types['Racial Trait'] = {});
  te = Racial_Trait["Darkfire Charisma"] = new engine.RulesElement({
    name: "Darkfire Charisma",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_DARKFIRE_CHARISMA",
    source: "Forgotten Realms Player's Guide",
    categories: ["Darkfire Charisma", "ID_INTERNAL_RACIAL_TRAIT_DARKFIRE_CHARISMA", "Darkfire", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Darkfire Intelligence"] = new engine.RulesElement({
    name: "Darkfire Intelligence",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_DARKFIRE_INTELLIGENCE",
    source: "Forgotten Realms Player's Guide",
    categories: ["Darkfire Intelligence", "ID_INTERNAL_RACIAL_TRAIT_DARKFIRE_INTELLIGENCE", "Darkfire", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Darkfire Wisdom"] = new engine.RulesElement({
    name: "Darkfire Wisdom",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_DARKFIRE_WISDOM",
    source: "Forgotten Realms Player's Guide",
    categories: ["Darkfire Wisdom", "ID_INTERNAL_RACIAL_TRAIT_DARKFIRE_WISDOM", "Darkfire", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Earthshock Constitution"] = new engine.RulesElement({
    name: "Earthshock Constitution",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_EARTHSHOCK_CONSTITUTION",
    source: "Forgotten Realms Player's Guide",
    categories: ["Earthshock Constitution", "ID_INTERNAL_RACIAL_TRAIT_EARTHSHOCK_CONSTITUTION", "Earthshock", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Earthshock Dexterity"] = new engine.RulesElement({
    name: "Earthshock Dexterity",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_EARTHSHOCK_DEXTERITY",
    source: "Forgotten Realms Player's Guide",
    categories: ["Earthshock Dexterity", "ID_INTERNAL_RACIAL_TRAIT_EARTHSHOCK_DEXTERITY", "Earthshock", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Earthshock Strength"] = new engine.RulesElement({
    name: "Earthshock Strength",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_EARTHSHOCK_STRENGTH",
    source: "Forgotten Realms Player's Guide",
    categories: ["Earthshock Strength", "ID_INTERNAL_RACIAL_TRAIT_EARTHSHOCK_STRENGTH", "Earthshock", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = Racial_Trait["earthsoul"] = new engine.RulesElement({
    name: "earthsoul",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_521",
    source: "Forgotten Realms Player's Guide",
    categories: ["earthsoul", "ID_FMP_RACIAL_TRAIT_521", "ID_FMP_RACIAL_TRAIT_803", "Elemental Manifestation"],
    rules: function(model) {
      model.statadd("Fortitude Defense", function() { /* while manifesting earthsoul */ return 1; }, "Racial");
      model.statadd("Fortitude Defense", 1, "Racial");
      model.statadd("Saving Throws", function() { /* while manifesting earthsoul */ return 1; }, "Racial");
      model.statadd("Saving Throws", 1, "Racial");
      model.grant(model.elements.id["ID_FMP_POWER_1767"]);
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Elemental Manifestation"] = new engine.RulesElement({
    name: "Elemental Manifestation",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_803",
    source: "Forgotten Realms Player's Guide",
    categories: ["Elemental Manifestation", "ID_FMP_RACIAL_TRAIT_803"],
    rules: function(model) {
      model.select('Racial Trait', 1, "Elemental Manifestation", {
        filter: function(model, element) { return element.hasCategory("Elemental Manifestation"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Elemental Origins"] = new engine.RulesElement({
    name: "Elemental Origins",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_519",
    source: "Forgotten Realms Player's Guide",
    categories: ["Elemental Origins", "ID_FMP_RACIAL_TRAIT_519"]
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Firepulse Constitution"] = new engine.RulesElement({
    name: "Firepulse Constitution",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_FIREPULSE_CONSTITUTION",
    source: "Forgotten Realms Player's Guide",
    categories: ["Firepulse Constitution", "ID_INTERNAL_RACIAL_TRAIT_FIREPULSE_CONSTITUTION", "Firepulse", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Firepulse Dexterity"] = new engine.RulesElement({
    name: "Firepulse Dexterity",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_FIREPULSE_DEXTERITY",
    source: "Forgotten Realms Player's Guide",
    categories: ["Firepulse Dexterity", "ID_INTERNAL_RACIAL_TRAIT_FIREPULSE_DEXTERITY", "Firepulse", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Firepulse Strength"] = new engine.RulesElement({
    name: "Firepulse Strength",
    type: "Racial Trait",
    id: "ID_INTERNAL_RACIAL_TRAIT_FIREPULSE_STRENGTH",
    source: "Forgotten Realms Player's Guide",
    categories: ["Firepulse Strength", "ID_INTERNAL_RACIAL_TRAIT_FIREPULSE_STRENGTH", "Firepulse", "Ability Choice"]
  });
  byID[te.id] = te;
  
  te = Racial_Trait["firesoul"] = new engine.RulesElement({
    name: "firesoul",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_520",
    source: "Forgotten Realms Player's Guide",
    categories: ["firesoul", "ID_FMP_RACIAL_TRAIT_520", "ID_FMP_RACIAL_TRAIT_803", "Elemental Manifestation"],
    rules: function(model) {
      model.statadd("Reflex Defense", function() { /* while manifesting firesoul */ return 1; });
      model.statadd("Reflex Defense", 1);
      model.grant(model.elements.id["ID_FMP_POWER_1766"]);
      model.statadd("_firesoul resist", 5);
      model.statadd("resist:fire", function() { /* while manifesting firesoul */ return model.stat("_firesoul resist"); }, "resist");
      model.statadd("resist:fire", function() { return model.stat("_firesoul resist"); }, "resist");
      model.statadd("_firesoul resist", 5);
      model.statadd("_firesoul resist", 5);
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Lolthtouched"] = new engine.RulesElement({
    name: "Lolthtouched",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_565",
    source: "Forgotten Realms Player's Guide",
    categories: ["Lolthtouched", "ID_FMP_RACIAL_TRAIT_565"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_2473"]);
      model.grant(model.elements.id["ID_FMP_POWER_1831"]);
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["stormsoul"] = new engine.RulesElement({
    name: "stormsoul",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_552",
    source: "Forgotten Realms Player's Guide",
    categories: ["stormsoul", "ID_FMP_RACIAL_TRAIT_552", "ID_FMP_RACIAL_TRAIT_803", "Elemental Manifestation"],
    rules: function(model) {
      model.statadd("Fortitude Defense", function() { /* while manifesting stormsoul */ return 1; }, "Racial");
      model.statadd("Fortitude Defense", 1, "Racial");
      model.grant(model.elements.id["ID_FMP_POWER_1769"]);
      model.statadd("_stormsoul resist", 5);
      model.statadd("resist:lightning", function() { /* while manifesting stormsoul */ return model.stat("_stormsoul resist"); }, "resist");
      model.statadd("resist:lightning", function() { return model.stat("_stormsoul resist"); }, "resist");
      model.statadd("_stormsoul resist", 5);
      model.statadd("_stormsoul resist", 5);
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["Trance (Drow)"] = new engine.RulesElement({
    name: "Trance (Drow)",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_564",
    source: "Forgotten Realms Player's Guide",
    categories: ["Trance (Drow)", "ID_FMP_RACIAL_TRAIT_564"]
  });
  byID[te.id] = te;
  
  te = Racial_Trait["watersoul"] = new engine.RulesElement({
    name: "watersoul",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_553",
    source: "Forgotten Realms Player's Guide",
    categories: ["watersoul", "ID_FMP_RACIAL_TRAIT_553", "ID_FMP_RACIAL_TRAIT_803", "Elemental Manifestation"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against ongoing damage while manifesting watersoul */ return 2; }, "Racial");
      model.statadd("Saving Throws", function() { /* against ongoing damage */ return 2; }, "Racial");
      model.grant(model.elements.id["ID_FMP_POWER_1770"]);
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["windsoul"] = new engine.RulesElement({
    name: "windsoul",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_554",
    source: "Forgotten Realms Player's Guide",
    categories: ["windsoul", "ID_FMP_RACIAL_TRAIT_554", "ID_FMP_RACIAL_TRAIT_803", "Elemental Manifestation"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1828"]);
      model.statadd("_windsoul resist", 5);
      model.statadd("resist:cold", function() { /* while manifesting windsoul */ return model.stat("_windsoul resist"); }, "resist");
      model.statadd("resist:cold", function() { return model.stat("_windsoul resist"); }, "resist");
      model.statadd("_windsoul resist", 5);
      model.statadd("_windsoul resist", 5);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
