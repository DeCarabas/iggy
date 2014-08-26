define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Feat = types['Feat'] || (types['Feat'] = {});
  te = Feat["Dancing Thorn Style"] = new engine.RulesElement({
    name: "Dancing Thorn Style",
    type: "Feat",
    id: "ID_FMP_FEAT_3166",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3166",
    categories: ["Dancing Thorn Style", "ID_FMP_FEAT_3166"],
    rules: function(model) {
      model.statadd("ID_FMP_CLASS_362,implement,longsword:attack", 1);
      model.statadd("ID_FMP_WEAPON_19,flurry of blows:damage", function() { 
        if (false /* TBI: versatile */) {
          return 1;
        } else return 0;
       });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Darkening Mind"] = new engine.RulesElement({
    name: "Darkening Mind",
    type: "Feat",
    id: "ID_FMP_FEAT_3169",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3169",
    categories: ["Darkening Mind", "ID_FMP_FEAT_3169", "ID_INTERNAL_CATEGORY_AUGMENT", "Augment"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Death's Grasp"] = new engine.RulesElement({
    name: "Death's Grasp",
    type: "Feat",
    id: "ID_FMP_FEAT_3170",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3170",
    categories: ["Death's Grasp", "ID_FMP_FEAT_3170"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Elemental Recovery"] = new engine.RulesElement({
    name: "Elemental Recovery",
    type: "Feat",
    id: "ID_FMP_FEAT_3167",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3167",
    categories: ["Elemental Recovery", "ID_FMP_FEAT_3167"],
    rules: function(model) {
      model.statadd("Elemental Recovery", 5);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Enlightened Spirit"] = new engine.RulesElement({
    name: "Enlightened Spirit",
    type: "Feat",
    id: "ID_FMP_FEAT_3160",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3160",
    categories: ["Enlightened Spirit", "ID_FMP_FEAT_3160"],
    rules: function(model) {
      model.statadd("Athletics Misc", function() { return model.stat("Constitution modifier"); }, "Ability");
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Enlightened Transformation"] = new engine.RulesElement({
    name: "Enlightened Transformation",
    type: "Feat",
    id: "ID_FMP_FEAT_3164",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3164",
    categories: ["Enlightened Transformation", "ID_FMP_FEAT_3164"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Far Thought"] = new engine.RulesElement({
    name: "Far Thought",
    type: "Feat",
    id: "ID_FMP_FEAT_3176",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3176",
    categories: ["Far Thought", "ID_FMP_FEAT_3176"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_VISION_TELEPATHY"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Foreign Memories"] = new engine.RulesElement({
    name: "Foreign Memories",
    type: "Feat",
    id: "ID_FMP_FEAT_3177",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3177",
    categories: ["Foreign Memories", "ID_FMP_FEAT_3177"]
  });
  byID[te.id] = te;
  
  te = Feat["Get in Your Head"] = new engine.RulesElement({
    name: "Get in Your Head",
    type: "Feat",
    id: "ID_FMP_FEAT_3168",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3168",
    categories: ["Get in Your Head", "ID_FMP_FEAT_3168"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Grave Flurry"] = new engine.RulesElement({
    name: "Grave Flurry",
    type: "Feat",
    id: "ID_FMP_FEAT_3171",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3171",
    categories: ["Grave Flurry", "ID_FMP_FEAT_3171"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Mind Rot"] = new engine.RulesElement({
    name: "Mind Rot",
    type: "Feat",
    id: "ID_FMP_FEAT_3172",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3172",
    categories: ["Mind Rot", "ID_FMP_FEAT_3172"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Mindfire"] = new engine.RulesElement({
    name: "Mindfire",
    type: "Feat",
    id: "ID_FMP_FEAT_3158",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3158",
    categories: ["Mindfire", "ID_FMP_FEAT_3158"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Psiforged Resolve"] = new engine.RulesElement({
    name: "Psiforged Resolve",
    type: "Feat",
    id: "ID_FMP_FEAT_3174",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3174",
    categories: ["Psiforged Resolve", "ID_FMP_FEAT_3174"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Psionic Accuracy"] = new engine.RulesElement({
    name: "Psionic Accuracy",
    type: "Feat",
    id: "ID_FMP_FEAT_3159",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3159",
    categories: ["Psionic Accuracy", "ID_FMP_FEAT_3159"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Psionic Ferocity"] = new engine.RulesElement({
    name: "Psionic Ferocity",
    type: "Feat",
    id: "ID_FMP_FEAT_3162",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3162",
    categories: ["Psionic Ferocity", "ID_FMP_FEAT_3162"]
  });
  byID[te.id] = te;
  
  te = Feat["Psionic Fury"] = new engine.RulesElement({
    name: "Psionic Fury",
    type: "Feat",
    id: "ID_FMP_FEAT_3161",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3161",
    categories: ["Psionic Fury", "ID_FMP_FEAT_3161"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Psychic Feast"] = new engine.RulesElement({
    name: "Psychic Feast",
    type: "Feat",
    id: "ID_FMP_FEAT_3165",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3165",
    categories: ["Psychic Feast", "ID_FMP_FEAT_3165"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Rampaging Thought"] = new engine.RulesElement({
    name: "Rampaging Thought",
    type: "Feat",
    id: "ID_FMP_FEAT_3163",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3163",
    categories: ["Rampaging Thought", "ID_FMP_FEAT_3163"]
  });
  byID[te.id] = te;
  
  te = Feat["Snake Blooded"] = new engine.RulesElement({
    name: "Snake Blooded",
    type: "Feat",
    id: "ID_FMP_FEAT_3175",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3175",
    categories: ["Snake Blooded", "ID_FMP_FEAT_3175"],
    rules: function(model) {
      model.statadd("resist:poison", 5, "resist");
      model.statadd("Saving Throws", function() { /* against poison effects */ return 2; }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Sturdy Mind"] = new engine.RulesElement({
    name: "Sturdy Mind",
    type: "Feat",
    id: "ID_FMP_FEAT_3178",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3178",
    categories: ["Sturdy Mind", "ID_FMP_FEAT_3178"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against charm, illusion, and psychic effects */ return 2; }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Unnatural Mantle"] = new engine.RulesElement({
    name: "Unnatural Mantle",
    type: "Feat",
    id: "ID_FMP_FEAT_3173",
    source: "Dragon Magazine 389",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3173",
    categories: ["Unnatural Mantle", "ID_FMP_FEAT_3173"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
