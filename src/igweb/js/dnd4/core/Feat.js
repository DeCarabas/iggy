define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Feat = types['Feat'] || (types['Feat'] = {});
  te = Feat["Armor Proficiency"] = new engine.RulesElement({
    name: "Armor Proficiency",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_ARMOR_PROFICIENCY",
    source: "Core",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_ARMOR_PROFICIENCY",
    categories: ["Armor Proficiency", "ID_INTERNAL_FEAT_ARMOR_PROFICIENCY"]
  });
  byID[te.id] = te;
  
  te = Feat["Paragon Hybrid Talent"] = new engine.RulesElement({
    name: "Paragon Hybrid Talent",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_PARAGON_HYBRID_TALENT",
    source: "Core",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_PARAGON_HYBRID_TALENT",
    categories: ["Paragon Hybrid Talent", "ID_INTERNAL_FEAT_PARAGON_HYBRID_TALENT"],
    rules: function(model) {
      model.select('class feature', 1, "Paragon Hybrid Talent", {
        filter: function(model, element) { return true /* NYI: Filter: $$HYBRID */; }
      });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Shield Proficiency"] = new engine.RulesElement({
    name: "Shield Proficiency",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SHIELD_PROFICIENCY",
    source: "Core",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SHIELD_PROFICIENCY",
    categories: ["Shield Proficiency", "ID_INTERNAL_FEAT_SHIELD_PROFICIENCY"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
