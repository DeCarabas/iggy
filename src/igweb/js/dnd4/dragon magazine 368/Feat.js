(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Feat = types['Feat'] || (types['Feat'] = {});
  te = Feat["Bola Expert"] = new RulesElement({
    name: "Bola Expert",
    type: "Feat",
    id: "ID_FMP_FEAT_961",
    source: "Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=961",
    categories: ["Bola Expert", "ID_FMP_FEAT_961", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Bola Novice"] = new RulesElement({
    name: "Bola Novice",
    type: "Feat",
    id: "ID_FMP_FEAT_960",
    source: "Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=960",
    categories: ["Bola Novice", "ID_FMP_FEAT_960", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Bola Specialist"] = new RulesElement({
    name: "Bola Specialist",
    type: "Feat",
    id: "ID_FMP_FEAT_962",
    source: "Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=962",
    categories: ["Bola Specialist", "ID_FMP_FEAT_962", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Bola Training"] = new RulesElement({
    name: "Bola Training",
    type: "Feat",
    id: "ID_FMP_FEAT_959",
    source: "Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=959",
    categories: ["Bola Training", "ID_FMP_FEAT_959", "ID_INTERNAL_CATEGORY_MULTICLASS_BOLA", "Multiclass Bola", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(BOLA)"]);
      model.grant(elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Net Expert"] = new RulesElement({
    name: "Net Expert",
    type: "Feat",
    id: "ID_FMP_FEAT_965",
    source: "Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=965",
    categories: ["Net Expert", "ID_FMP_FEAT_965", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Net Novice"] = new RulesElement({
    name: "Net Novice",
    type: "Feat",
    id: "ID_FMP_FEAT_964",
    source: "Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=964",
    categories: ["Net Novice", "ID_FMP_FEAT_964", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Net Specialist"] = new RulesElement({
    name: "Net Specialist",
    type: "Feat",
    id: "ID_FMP_FEAT_966",
    source: "Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=966",
    categories: ["Net Specialist", "ID_FMP_FEAT_966", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Net Training"] = new RulesElement({
    name: "Net Training",
    type: "Feat",
    id: "ID_FMP_FEAT_963",
    source: "Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=963",
    categories: ["Net Training", "ID_FMP_FEAT_963", "ID_INTERNAL_CATEGORY_MULTICLASS_NET", "Multiclass Net", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(NET)"]);
      model.grant(elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Whip Expert"] = new RulesElement({
    name: "Whip Expert",
    type: "Feat",
    id: "ID_FMP_FEAT_969",
    source: "Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=969",
    categories: ["Whip Expert", "ID_FMP_FEAT_969", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Whip Novice"] = new RulesElement({
    name: "Whip Novice",
    type: "Feat",
    id: "ID_FMP_FEAT_968",
    source: "Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=968",
    categories: ["Whip Novice", "ID_FMP_FEAT_968", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Whip Specialist"] = new RulesElement({
    name: "Whip Specialist",
    type: "Feat",
    id: "ID_FMP_FEAT_970",
    source: "Dragon Magazine 368",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=970",
    categories: ["Whip Specialist", "ID_FMP_FEAT_970", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Whip Training"] = new RulesElement({
    name: "Whip Training",
    type: "Feat",
    id: "ID_FMP_FEAT_967",
    source: "Dragon Magazine 368,Dragon Magazine Annual 2009",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=967",
    categories: ["Whip Training", "ID_FMP_FEAT_967", "ID_INTERNAL_CATEGORY_MULTICLASS_WHIP", "Multiclass Whip", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(WHIP)"]);
      model.grant(elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
