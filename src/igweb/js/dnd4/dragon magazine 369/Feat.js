(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Feat = types['Feat'] || (types['Feat'] = {});
  te = Feat["Greathorn"] = new RulesElement({
    name: "Greathorn",
    type: "Feat",
    id: "ID_FMP_FEAT_1061",
    source: "Dragon Magazine 369",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1061",
    categories: ["Greathorn", "ID_FMP_FEAT_1061"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Hell's Implement"] = new RulesElement({
    name: "Hell's Implement",
    type: "Feat",
    id: "ID_FMP_FEAT_1070",
    source: "Dragon Magazine 369",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1070",
    categories: ["Hell's Implement", "ID_FMP_FEAT_1070", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(POLEARM_GROUP)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Infernal Captain's Fury"] = new RulesElement({
    name: "Infernal Captain's Fury",
    type: "Feat",
    id: "ID_FMP_FEAT_1069",
    source: "Dragon Magazine 369",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1069",
    categories: ["Infernal Captain's Fury", "ID_FMP_FEAT_1069", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass"]
  });
  byID[te.id] = te;
  
  te = Feat["Infernal Captain's Pact"] = new RulesElement({
    name: "Infernal Captain's Pact",
    type: "Feat",
    id: "ID_FMP_FEAT_1068",
    source: "Dragon Magazine 369",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1068",
    categories: ["Infernal Captain's Pact", "ID_FMP_FEAT_1068", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass"]
  });
  byID[te.id] = te;
  
  te = Feat["Natural Cunning"] = new RulesElement({
    name: "Natural Cunning",
    type: "Feat",
    id: "ID_FMP_FEAT_1062",
    source: "Dragon Magazine 369",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1062",
    categories: ["Natural Cunning", "ID_FMP_FEAT_1062"],
    rules: function(model) {
      model.statadd("Perception Misc", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Opportunity Gore"] = new RulesElement({
    name: "Opportunity Gore",
    type: "Feat",
    id: "ID_FMP_FEAT_1063",
    source: "Dragon Magazine 369",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1063",
    categories: ["Opportunity Gore", "ID_FMP_FEAT_1063"]
  });
  byID[te.id] = te;
  
  
})(this);
