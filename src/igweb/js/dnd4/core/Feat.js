(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Feat = types['Feat'] || (types['Feat'] = {});
  te = Feat["Armor Proficiency"] = new RulesElement({
    name: "Armor Proficiency",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_ARMOR_PROFICIENCY",
    source: "Core",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_ARMOR_PROFICIENCY",
    categories: ["Armor Proficiency", "ID_INTERNAL_FEAT_ARMOR_PROFICIENCY"]
  });
  byID[te.id] = te;
  
  te = Feat["Paragon Hybrid Talent"] = new RulesElement({
    name: "Paragon Hybrid Talent",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_PARAGON_HYBRID_TALENT",
    source: "Core",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_PARAGON_HYBRID_TALENT",
    categories: ["Paragon Hybrid Talent", "ID_INTERNAL_FEAT_PARAGON_HYBRID_TALENT"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return true /* NYI: Filter: $$HYBRID */; }
      });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Shield Proficiency"] = new RulesElement({
    name: "Shield Proficiency",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_SHIELD_PROFICIENCY",
    source: "Core",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_SHIELD_PROFICIENCY",
    categories: ["Shield Proficiency", "ID_INTERNAL_FEAT_SHIELD_PROFICIENCY"]
  });
  byID[te.id] = te;
  
  
})(this);
