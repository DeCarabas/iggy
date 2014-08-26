define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Racial_Trait = types['Racial Trait'] || (types['Racial Trait'] = {});
  te = Racial_Trait["causticsoul"] = new engine.RulesElement({
    name: "causticsoul",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_2094",
    source: "Dragon Magazine 380",
    categories: ["causticsoul", "ID_FMP_RACIAL_TRAIT_2094", "ID_FMP_RACIAL_TRAIT_803", "Elemental Manifestation"],
    rules: function(model) {
      model.statadd("Causticsoul Resists", 5);
      model.statadd("Causticsoul Resists", 5);
      model.statadd("Causticsoul Resists", 5);
      model.statadd("resist:acid", function() { /* while manifesting causticsoul */ return model.stat("Causticsoul Resists"); }, "resist");
      model.statadd("resist:acid", function() { return model.stat("Causticsoul Resists"); }, "resist");
      model.grant(model.elements.id["ID_FMP_POWER_10043"]);
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["cindersoul"] = new engine.RulesElement({
    name: "cindersoul",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_2095",
    source: "Dragon Magazine 380",
    categories: ["cindersoul", "ID_FMP_RACIAL_TRAIT_2095", "ID_FMP_RACIAL_TRAIT_803", "Elemental Manifestation"],
    rules: function(model) {
      model.statadd("Cindersoul Resists", 5);
      model.statadd("Cindersoul Resists", 5);
      model.statadd("Cindersoul Resists", 5);
      model.statadd("Fortitude Defense", function() { /* while manifesting cindersoul */ return 1; }, "Racial");
      model.statadd("Fortitude Defense", 1, "Racial");
      model.statadd("resist:fire", function() { /* while manifesting cindersoul */ return model.stat("Cindersoul Resists"); }, "resist");
      model.statadd("resist:fire", function() { return model.stat("Cindersoul Resists"); }, "resist");
      model.grant(model.elements.id["ID_FMP_POWER_10044"]);
      model.statadd("_firesoul resist", 5);
      model.statadd("_firesoul resist", 5);
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["plaguesoul"] = new engine.RulesElement({
    name: "plaguesoul",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_2096",
    source: "Dragon Magazine 380",
    categories: ["plaguesoul", "ID_FMP_RACIAL_TRAIT_2096", "ID_FMP_RACIAL_TRAIT_803", "Elemental Manifestation"],
    rules: function(model) {
      model.statadd("Plaguesoul Resists", 5);
      model.statadd("Plaguesoul Resists", 5);
      model.statadd("Plaguesoul Resists", 5);
      model.statadd("resist:poison", function() { /* while manifesting plaguesoul */ return model.stat("Plaguesoul Resists"); }, "resist");
      model.statadd("resist:poison", function() { return model.stat("Plaguesoul Resists"); }, "resist");
      model.statadd("Saving Throws", function() { /* against disease while manifesting plaguesoul */ return 5; }, "Racial");
      model.statadd("Saving Throws", function() { /* against disease */ return 5; }, "Racial");
      model.grant(model.elements.id["ID_FMP_POWER_10045"]);
    }
  });
  byID[te.id] = te;
  
  te = Racial_Trait["voidsoul"] = new engine.RulesElement({
    name: "voidsoul",
    type: "Racial Trait",
    id: "ID_FMP_RACIAL_TRAIT_2097",
    source: "Dragon Magazine 380",
    categories: ["voidsoul", "ID_FMP_RACIAL_TRAIT_2097", "ID_FMP_RACIAL_TRAIT_803", "Elemental Manifestation"],
    rules: function(model) {
      model.statadd("Voidsoul Resists", 5);
      model.statadd("Voidsoul Resists", 5);
      model.statadd("Voidsoul Resists", 5);
      model.statadd("resist:psychic", function() { /* while manifesting voidsoul */ return model.stat("Voidsoul Resists"); }, "resist");
      model.statadd("resist:psychic", function() { return model.stat("Voidsoul Resists"); }, "resist");
      model.statadd("Will Defense", function() { /* while manifesting voidsoul */ return 1; }, "Racial");
      model.statadd("Will Defense", 1, "Racial");
      model.grant(model.elements.id["ID_FMP_POWER_10046"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
