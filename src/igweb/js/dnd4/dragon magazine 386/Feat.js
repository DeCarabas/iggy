(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Feat = types['Feat'] || (types['Feat'] = {});
  te = Feat["Argent Falcon"] = new RulesElement({
    name: "Argent Falcon",
    type: "Feat",
    id: "ID_FMP_FEAT_2891",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2891",
    categories: ["Argent Falcon", "ID_FMP_FEAT_2891", "ID_INTERNAL_CATEGORY_FAMILIAR", "Familiar"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Becomer"] = new RulesElement({
    name: "Becomer",
    type: "Feat",
    id: "ID_FMP_FEAT_2900",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2900",
    categories: ["Becomer", "ID_FMP_FEAT_2900"],
    rules: function(model) {
      model.select('Racial Trait', 1, {
        filter: function(model, element) { return element.hasCategory("Skill Bonus"); }
      });
      model.select('Language', 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Blessed Strength"] = new RulesElement({
    name: "Blessed Strength",
    type: "Feat",
    id: "ID_FMP_FEAT_2909",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2909",
    categories: ["Blessed Strength", "ID_FMP_FEAT_2909"]
  });
  byID[te.id] = te;
  
  te = Feat["Bloodthirsty Visage"] = new RulesElement({
    name: "Bloodthirsty Visage",
    type: "Feat",
    id: "ID_FMP_FEAT_2886",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2886",
    categories: ["Bloodthirsty Visage", "ID_FMP_FEAT_2886"],
    rules: function(model) {
      model.statadd("ID_FMP_CLASS_148,fear:damage", function() { return model.stat("Charisma modifier"); });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Bogtangle Heritage"] = new RulesElement({
    name: "Bogtangle Heritage",
    type: "Feat",
    id: "ID_FMP_FEAT_2901",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2901",
    categories: ["Bogtangle Heritage", "ID_FMP_FEAT_2901", "ID_INTERNAL_INTERNAL_BOGTANGLE_HUMAN_BLOODLINE", "Bogtangle Human Bloodline"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_12352"]);
      model.statadd("Nature Misc", 2, "Feat");
      model.grant(elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(elements.id["ID_INTERNAL_INTERNAL_BOGTANGLE_HUMAN_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Bogtangle Warrior"] = new RulesElement({
    name: "Bogtangle Warrior",
    type: "Feat",
    id: "ID_FMP_FEAT_2902",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2902",
    categories: ["Bogtangle Warrior", "ID_FMP_FEAT_2902", "ID_INTERNAL_INTERNAL_BOGTANGLE_HUMAN_BLOODLINE", "Bogtangle Human Bloodline"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(BLOWGUN)"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ReplaceRule
      model.grant(elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(elements.id["ID_INTERNAL_INTERNAL_BOGTANGLE_HUMAN_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Brute Force"] = new RulesElement({
    name: "Brute Force",
    type: "Feat",
    id: "ID_FMP_FEAT_2914",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2914",
    categories: ["Brute Force", "ID_FMP_FEAT_2914"]
  });
  byID[te.id] = te;
  
  te = Feat["Building Camaraderie"] = new RulesElement({
    name: "Building Camaraderie",
    type: "Feat",
    id: "ID_FMP_FEAT_2888",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2888",
    categories: ["Building Camaraderie", "ID_FMP_FEAT_2888"]
  });
  byID[te.id] = te;
  
  te = Feat["Cast Aside"] = new RulesElement({
    name: "Cast Aside",
    type: "Feat",
    id: "ID_FMP_FEAT_2915",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2915",
    categories: ["Cast Aside", "ID_FMP_FEAT_2915"]
  });
  byID[te.id] = te;
  
  te = Feat["Death Sight"] = new RulesElement({
    name: "Death Sight",
    type: "Feat",
    id: "ID_FMP_FEAT_2919",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2919",
    categories: ["Death Sight", "ID_FMP_FEAT_2919"]
  });
  byID[te.id] = te;
  
  te = Feat["Deific Instrument"] = new RulesElement({
    name: "Deific Instrument",
    type: "Feat",
    id: "ID_FMP_FEAT_2920",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2920",
    categories: ["Deific Instrument", "ID_FMP_FEAT_2920"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(HOLY_SYMBOL)"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Distracting Feint"] = new RulesElement({
    name: "Distracting Feint",
    type: "Feat",
    id: "ID_FMP_FEAT_2889",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2889",
    categories: ["Distracting Feint", "ID_FMP_FEAT_2889"]
  });
  byID[te.id] = te;
  
  te = Feat["Dodgy Charge"] = new RulesElement({
    name: "Dodgy Charge",
    type: "Feat",
    id: "ID_FMP_FEAT_2911",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2911",
    categories: ["Dodgy Charge", "ID_FMP_FEAT_2911"]
  });
  byID[te.id] = te;
  
  te = Feat["Echoing Roar"] = new RulesElement({
    name: "Echoing Roar",
    type: "Feat",
    id: "ID_FMP_FEAT_2887",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2887",
    categories: ["Echoing Roar", "ID_FMP_FEAT_2887"]
  });
  byID[te.id] = te;
  
  te = Feat["Fearsome Bloodlust"] = new RulesElement({
    name: "Fearsome Bloodlust",
    type: "Feat",
    id: "ID_FMP_FEAT_2883",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2883",
    categories: ["Fearsome Bloodlust", "ID_FMP_FEAT_2883"]
  });
  byID[te.id] = te;
  
  te = Feat["Foamgather Heritage"] = new RulesElement({
    name: "Foamgather Heritage",
    type: "Feat",
    id: "ID_FMP_FEAT_2903",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2903",
    categories: ["Foamgather Heritage", "ID_FMP_FEAT_2903", "ID_INTERNAL_INTERNAL_FOAMGATHER_HUMAN_BLOODLINE", "Foamgather Human Bloodline"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_12354"]);
      model.statadd("Endurance Misc", 2, "Feat");
      model.grant(elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(elements.id["ID_INTERNAL_INTERNAL_FOAMGATHER_HUMAN_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Foamgather Warrior"] = new RulesElement({
    name: "Foamgather Warrior",
    type: "Feat",
    id: "ID_FMP_FEAT_2904",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2904",
    categories: ["Foamgather Warrior", "ID_FMP_FEAT_2904", "ID_INTERNAL_INTERNAL_FOAMGATHER_HUMAN_BLOODLINE", "Foamgather Human Bloodline"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(NET)"]);
      model.statadd("ID_FMP_WEAPON_74,weapon:attack", 1);
      // unsupported rule: cbimporter.Rules.ReplaceRule
      model.grant(elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(elements.id["ID_INTERNAL_INTERNAL_FOAMGATHER_HUMAN_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Goliath Resolve"] = new RulesElement({
    name: "Goliath Resolve",
    type: "Feat",
    id: "ID_FMP_FEAT_2916",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2916",
    categories: ["Goliath Resolve", "ID_FMP_FEAT_2916"]
  });
  byID[te.id] = te;
  
  te = Feat["Invigorated Healing"] = new RulesElement({
    name: "Invigorated Healing",
    type: "Feat",
    id: "ID_FMP_FEAT_2912",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2912",
    categories: ["Invigorated Healing", "ID_FMP_FEAT_2912"]
  });
  byID[te.id] = te;
  
  te = Feat["Legacy of War"] = new RulesElement({
    name: "Legacy of War",
    type: "Feat",
    id: "ID_FMP_FEAT_2918",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2918",
    categories: ["Legacy of War", "ID_FMP_FEAT_2918"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Moon Sight"] = new RulesElement({
    name: "Moon Sight",
    type: "Feat",
    id: "ID_FMP_FEAT_2892",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2892",
    categories: ["Moon Sight", "ID_FMP_FEAT_2892"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Moon Strike"] = new RulesElement({
    name: "Moon Strike",
    type: "Feat",
    id: "ID_FMP_FEAT_2893",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2893",
    categories: ["Moon Strike", "ID_FMP_FEAT_2893"]
  });
  byID[te.id] = te;
  
  te = Feat["Moonbow Dedicate"] = new RulesElement({
    name: "Moonbow Dedicate",
    type: "Feat",
    id: "ID_FMP_FEAT_2894",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2894",
    categories: ["Moonbow Dedicate", "ID_FMP_FEAT_2894"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SHORTBOW)"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Moonbow Dedicate", 1);
      model.statadd("Shortbow:damage", function() { return model.stat("Moonbow Dedicate"); }, "Feat");
      model.statadd("Moonbow Dedicate", 1);
      model.statadd("Moonbow Dedicate", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Moonbow Prelate"] = new RulesElement({
    name: "Moonbow Prelate",
    type: "Feat",
    id: "ID_FMP_FEAT_2899",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2899",
    categories: ["Moonbow Prelate", "ID_FMP_FEAT_2899"]
  });
  byID[te.id] = te;
  
  te = Feat["Moonbow Stalker"] = new RulesElement({
    name: "Moonbow Stalker",
    type: "Feat",
    id: "ID_FMP_FEAT_2895",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2895",
    categories: ["Moonbow Stalker", "ID_FMP_FEAT_2895"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SHORTBOW)"]);
      model.statadd("ID_FMP_CLASS_6-Crossbow", "Shortbow");
      model.statadd("Sneak Attack Weapons", "Shortbow");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Natural Intimidator"] = new RulesElement({
    name: "Natural Intimidator",
    type: "Feat",
    id: "ID_FMP_FEAT_2917",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2917",
    categories: ["Natural Intimidator", "ID_FMP_FEAT_2917"],
    rules: function(model) {
      model.statadd("Intimidate Misc", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Oathbound Stalker"] = new RulesElement({
    name: "Oathbound Stalker",
    type: "Feat",
    id: "ID_FMP_FEAT_2921",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2921",
    categories: ["Oathbound Stalker", "ID_FMP_FEAT_2921"]
  });
  byID[te.id] = te;
  
  te = Feat["Rose King's Balm"] = new RulesElement({
    name: "Rose King's Balm",
    type: "Feat",
    id: "ID_FMP_FEAT_2923",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2923",
    categories: ["Rose King's Balm", "ID_FMP_FEAT_2923"],
    rules: function(model) {
      model.statadd("Heal Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Rose King's Fallen Petals"] = new RulesElement({
    name: "Rose King's Fallen Petals",
    type: "Feat",
    id: "ID_FMP_FEAT_2924",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2924",
    categories: ["Rose King's Fallen Petals", "ID_FMP_FEAT_2924"],
    rules: function(model) {
      model.statadd("Nature Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Rose King's Lunge"] = new RulesElement({
    name: "Rose King's Lunge",
    type: "Feat",
    id: "ID_FMP_FEAT_2925",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2925",
    categories: ["Rose King's Lunge", "ID_FMP_FEAT_2925"],
    rules: function(model) {
      model.statadd("Athletics Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Rose King's Reprise"] = new RulesElement({
    name: "Rose King's Reprise",
    type: "Feat",
    id: "ID_FMP_FEAT_2926",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2926",
    categories: ["Rose King's Reprise", "ID_FMP_FEAT_2926"],
    rules: function(model) {
      model.statadd("Perception Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Rose King's Run"] = new RulesElement({
    name: "Rose King's Run",
    type: "Feat",
    id: "ID_FMP_FEAT_2927",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2927",
    categories: ["Rose King's Run", "ID_FMP_FEAT_2927"],
    rules: function(model) {
      model.statadd("Athletics Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Rose King's Shield"] = new RulesElement({
    name: "Rose King's Shield",
    type: "Feat",
    id: "ID_FMP_FEAT_2928",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2928",
    categories: ["Rose King's Shield", "ID_FMP_FEAT_2928"],
    rules: function(model) {
      model.statadd("Endurance Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Rose King's Step"] = new RulesElement({
    name: "Rose King's Step",
    type: "Feat",
    id: "ID_FMP_FEAT_2929",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2929",
    categories: ["Rose King's Step", "ID_FMP_FEAT_2929"],
    rules: function(model) {
      model.statadd("Acrobatics Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Serene Archery"] = new RulesElement({
    name: "Serene Archery",
    type: "Feat",
    id: "ID_FMP_FEAT_2896",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2896",
    categories: ["Serene Archery", "ID_FMP_FEAT_2896"],
    rules: function(model) {
      model.statadd("ranged basic,bow group:key ability", "wis");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Silvery Glow"] = new RulesElement({
    name: "Silvery Glow",
    type: "Feat",
    id: "ID_FMP_FEAT_2897",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2897",
    categories: ["Silvery Glow", "ID_FMP_FEAT_2897"],
    rules: function(model) {
      model.statadd("Silvery Glow", 2);
      model.statadd("cold:damage", function() { return model.stat("Silvery Glow"); }, "Feat");
      model.statadd("radiant:damage", function() { return model.stat("Silvery Glow"); }, "Feat");
      model.statadd("Silvery Glow", 1);
      model.statadd("Silvery Glow", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Skilled Feint"] = new RulesElement({
    name: "Skilled Feint",
    type: "Feat",
    id: "ID_FMP_FEAT_2890",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2890",
    categories: ["Skilled Feint", "ID_FMP_FEAT_2890"],
    rules: function(model) {
      model.statadd("Bluff Misc", function() { /* to feint */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Strong-Arm Tactics"] = new RulesElement({
    name: "Strong-Arm Tactics",
    type: "Feat",
    id: "ID_FMP_FEAT_2913",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2913",
    categories: ["Strong-Arm Tactics", "ID_FMP_FEAT_2913"],
    rules: function(model) {
      model.statadd("Intimidate Misc", 2, "Feat");
      model.statadd("Intimidate", function() { return model.stat("Strength modifier"); }, "Ability");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Sunspray Heritage"] = new RulesElement({
    name: "Sunspray Heritage",
    type: "Feat",
    id: "ID_FMP_FEAT_2905",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2905",
    categories: ["Sunspray Heritage", "ID_FMP_FEAT_2905", "ID_INTERNAL_INTERNAL_SUNSPRAY_HUMAN_BLOODLINE", "Sunspray Human Bloodline"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_12356"]);
      model.statadd("Endurance Misc", 2, "Feat");
      model.grant(elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(elements.id["ID_INTERNAL_INTERNAL_SUNSPRAY_HUMAN_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Sunspray Warrior"] = new RulesElement({
    name: "Sunspray Warrior",
    type: "Feat",
    id: "ID_FMP_FEAT_2906",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2906",
    categories: ["Sunspray Warrior", "ID_FMP_FEAT_2906", "ID_INTERNAL_INTERNAL_SUNSPRAY_HUMAN_BLOODLINE", "Sunspray Human Bloodline"],
    rules: function(model) {
      model.statadd("melee:attack", function() { /* while mounted */ return 1; });
      model.statadd("ranged:attack", function() { /* while mounted */ return 1; });
      // unsupported rule: cbimporter.Rules.ReplaceRule
      model.grant(elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(elements.id["ID_INTERNAL_INTERNAL_SUNSPRAY_HUMAN_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Swirling Leaves of Autumn"] = new RulesElement({
    name: "Swirling Leaves of Autumn",
    type: "Feat",
    id: "ID_FMP_FEAT_2898",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2898",
    categories: ["Swirling Leaves of Autumn", "ID_FMP_FEAT_2898"]
  });
  byID[te.id] = te;
  
  te = Feat["Thaneborn Fury"] = new RulesElement({
    name: "Thaneborn Fury",
    type: "Feat",
    id: "ID_FMP_FEAT_2884",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2884",
    categories: ["Thaneborn Fury", "ID_FMP_FEAT_2884"]
  });
  byID[te.id] = te;
  
  te = Feat["Vengeful Shade"] = new RulesElement({
    name: "Vengeful Shade",
    type: "Feat",
    id: "ID_FMP_FEAT_2922",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2922",
    categories: ["Vengeful Shade", "ID_FMP_FEAT_2922"]
  });
  byID[te.id] = te;
  
  te = Feat["Wolfstone Heritage"] = new RulesElement({
    name: "Wolfstone Heritage",
    type: "Feat",
    id: "ID_FMP_FEAT_2907",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2907",
    categories: ["Wolfstone Heritage", "ID_FMP_FEAT_2907", "ID_INTERNAL_INTERNAL_WOLFSTONE_HUMAN_BLOODLINE", "Wolfstone Human Bloodline"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_12358"]);
      model.statadd("Athletics Misc", 2, "Feat");
      model.grant(elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(elements.id["ID_INTERNAL_INTERNAL_WOLFSTONE_HUMAN_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Wolfstone Warrior"] = new RulesElement({
    name: "Wolfstone Warrior",
    type: "Feat",
    id: "ID_FMP_FEAT_2908",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2908",
    categories: ["Wolfstone Warrior", "ID_FMP_FEAT_2908", "ID_INTERNAL_INTERNAL_WOLFSTONE_HUMAN_BLOODLINE", "Wolfstone Human Bloodline"],
    rules: function(model) {
      model.statadd("Action Point", "Wolfstone Warrior:When you spend an action point to make a melee or ranged attack while you're bloodied, the attack deals 1d6 extra damage. In addition, you can swap one 1st-level at-will attack power for the wolfstone frenzy attack power.");
      // unsupported rule: cbimporter.Rules.ReplaceRule
      model.grant(elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(elements.id["ID_INTERNAL_INTERNAL_WOLFSTONE_HUMAN_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Wrathful Recovery"] = new RulesElement({
    name: "Wrathful Recovery",
    type: "Feat",
    id: "ID_FMP_FEAT_2885",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2885",
    categories: ["Wrathful Recovery", "ID_FMP_FEAT_2885"]
  });
  byID[te.id] = te;
  
  
})(this);
