(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var class_feature = types['class feature'] || (types['class feature'] = {});
  te = class_feature["Additional Misfortune"] = new RulesElement({
    name: "Additional Misfortune",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2368",
    source: "Dragon Magazine 383",
    categories: ["Additional Misfortune", "ID_FMP_CLASS_FEATURE_2368", "11"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Breaching Action"] = new RulesElement({
    name: "Breaching Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2338",
    source: "Dragon Magazine 383",
    categories: ["Breaching Action", "ID_FMP_CLASS_FEATURE_2338", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Breaching Action:When you spend an action point to make an attack and this attack hits, each enemy you have marked takes damage equal to your Constitution modifier of a type matching the type you chose for your Elemental Breach class feature.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Cabalist's Warding"] = new RulesElement({
    name: "Cabalist's Warding",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2373",
    source: "Dragon Magazine 383",
    categories: ["Cabalist's Warding", "ID_FMP_CLASS_FEATURE_2373", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Celestial Resistance"] = new RulesElement({
    name: "Celestial Resistance",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2377",
    source: "Dragon Magazine 383",
    categories: ["Celestial Resistance", "ID_FMP_CLASS_FEATURE_2377", "16"],
    rules: function(model) {
      model.statadd("resist:necrotic", function() { return model.stat("HALF-LEVEL"); }, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Deadly Misfortune"] = new RulesElement({
    name: "Deadly Misfortune",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2370",
    source: "Dragon Magazine 383",
    categories: ["Deadly Misfortune", "ID_FMP_CLASS_FEATURE_2370", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Demonic Resilience"] = new RulesElement({
    name: "Demonic Resilience",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2374",
    source: "Dragon Magazine 383",
    categories: ["Demonic Resilience", "ID_FMP_CLASS_FEATURE_2374", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Elemental Breach"] = new RulesElement({
    name: "Elemental Breach",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2337",
    source: "Dragon Magazine 383",
    categories: ["Elemental Breach", "ID_FMP_CLASS_FEATURE_2337", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Elemental Wind"] = new RulesElement({
    name: "Elemental Wind",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2339",
    source: "Dragon Magazine 383",
    categories: ["Elemental Wind", "ID_FMP_CLASS_FEATURE_2339", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Fire for Blood"] = new RulesElement({
    name: "Fire for Blood",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2290",
    source: "Dragon Magazine 383",
    categories: ["Fire for Blood", "ID_FMP_CLASS_FEATURE_2290", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Forged in Flame"] = new RulesElement({
    name: "Forged in Flame",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2288",
    source: "Dragon Magazine 383",
    categories: ["Forged in Flame", "ID_FMP_CLASS_FEATURE_2288", "11"],
    rules: function(model) {
      model.statadd("resist:fire", function() { return model.stat("HALF-LEVEL"); });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Mirror Action"] = new RulesElement({
    name: "Mirror Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2369",
    source: "Dragon Magazine 383",
    categories: ["Mirror Action", "ID_FMP_CLASS_FEATURE_2369", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Mirror Action:When you spend an action point, you can slide each enemy within 2 squares of you 1 square or knock that enemy prone.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Preparing Action"] = new RulesElement({
    name: "Preparing Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2375",
    source: "Dragon Magazine 383",
    categories: ["Preparing Action", "ID_FMP_CLASS_FEATURE_2375", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Preparing Action:When you spend an action point, you and each ally within 5 squares of you gain temporary hit points equal to your Intelligence modifier and can shift 1 square as a free action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Radiant Curse"] = new RulesElement({
    name: "Radiant Curse",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2376",
    source: "Dragon Magazine 383",
    categories: ["Radiant Curse", "ID_FMP_CLASS_FEATURE_2376", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Restricting Action"] = new RulesElement({
    name: "Restricting Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2372",
    source: "Dragon Magazine 383",
    categories: ["Restricting Action", "ID_FMP_CLASS_FEATURE_2372", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Restricting Action:When you spend an action point, you restrain one enemy affected by your Warlock's Curse until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Scorching Action"] = new RulesElement({
    name: "Scorching Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2289",
    source: "Dragon Magazine 383",
    categories: ["Scorching Action", "ID_FMP_CLASS_FEATURE_2289", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Scorching Action:When you spend an action point to make an extra melee attack and you hit with this attack, each enemy adjacent to your target takes 10 fire damage. At 21st level, increase this to 15 damage.");
    }
  });
  byID[te.id] = te;
  
  
})(this);
