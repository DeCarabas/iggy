define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Paragon_Path = types['Paragon Path'] || (types['Paragon Path'] = {});
  te = Paragon_Path["Alienist"] = new engine.RulesElement({
    name: "Alienist",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_755",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=755",
    categories: ["Alienist", "ID_FMP_PARAGON_PATH_755"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_3115"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_3116"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1818"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_3117"]);
      model.grant(model.elements.id["ID_FMP_POWER_13391"]);
      model.grant(model.elements.id["ID_FMP_POWER_13392"]);
      model.grant(model.elements.id["ID_FMP_POWER_13393"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Anarchic Adept"] = new engine.RulesElement({
    name: "Anarchic Adept",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_734",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=734",
    categories: ["Anarchic Adept", "ID_FMP_PARAGON_PATH_734"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2917"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2918"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1818"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2919"]);
      model.grant(model.elements.id["ID_FMP_POWER_13006"]);
      model.grant(model.elements.id["ID_FMP_POWER_13007"]);
      model.grant(model.elements.id["ID_FMP_POWER_13008"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Anathema"] = new engine.RulesElement({
    name: "Anathema",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_756",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=756",
    categories: ["Anathema", "ID_FMP_PARAGON_PATH_756"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_3118"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_3119"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1818"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_3120"]);
      model.grant(model.elements.id["ID_FMP_POWER_13394"]);
      model.grant(model.elements.id["ID_FMP_POWER_13395"]);
      model.grant(model.elements.id["ID_FMP_POWER_13396"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Awakened Visionary"] = new engine.RulesElement({
    name: "Awakened Visionary",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_735",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=735",
    categories: ["Awakened Visionary", "ID_FMP_PARAGON_PATH_735"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2920"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1818"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2921"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2922"]);
      model.grant(model.elements.id["ID_FMP_POWER_13009"]);
      model.grant(model.elements.id["ID_FMP_POWER_13010"]);
      model.grant(model.elements.id["ID_FMP_POWER_13011"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Basilisk's Fury Adept"] = new engine.RulesElement({
    name: "Basilisk's Fury Adept",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_749",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=749",
    categories: ["Basilisk's Fury Adept", "ID_FMP_PARAGON_PATH_749"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_3073"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_3074"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_3075"]);
      model.grant(model.elements.id["ID_FMP_POWER_13275"]);
      model.grant(model.elements.id["ID_FMP_POWER_13276"]);
      model.grant(model.elements.id["ID_FMP_POWER_13279"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Blackstone Guardian"] = new engine.RulesElement({
    name: "Blackstone Guardian",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_740",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=740",
    categories: ["Blackstone Guardian", "ID_FMP_PARAGON_PATH_740"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2937"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1818"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2938"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2939"]);
      model.grant(model.elements.id["ID_FMP_POWER_13106"]);
      model.grant(model.elements.id["ID_FMP_POWER_13107"]);
      model.grant(model.elements.id["ID_FMP_POWER_13108"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Catalyst"] = new engine.RulesElement({
    name: "Catalyst",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_736",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=736",
    categories: ["Catalyst", "ID_FMP_PARAGON_PATH_736"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2923"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2924"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1818"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2925"]);
      model.grant(model.elements.id["ID_FMP_POWER_13012"]);
      model.grant(model.elements.id["ID_FMP_POWER_13013"]);
      model.grant(model.elements.id["ID_FMP_POWER_13014"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Firestarter"] = new engine.RulesElement({
    name: "Firestarter",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_757",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=757",
    categories: ["Firestarter", "ID_FMP_PARAGON_PATH_757"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_3121"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_3122"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_3123"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1818"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_3124"]);
      model.grant(model.elements.id["ID_FMP_POWER_13397"]);
      model.grant(model.elements.id["ID_FMP_POWER_13398"]);
      model.grant(model.elements.id["ID_FMP_POWER_13399"]);
      model.grant(model.elements.id["ID_FMP_POWER_13401"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Four Winds Master"] = new engine.RulesElement({
    name: "Four Winds Master",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_750",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=750",
    categories: ["Four Winds Master", "ID_FMP_PARAGON_PATH_750"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_3076"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_3077"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_3078"]);
      model.grant(model.elements.id["ID_FMP_POWER_13280"]);
      model.grant(model.elements.id["ID_FMP_POWER_13281"]);
      model.grant(model.elements.id["ID_FMP_POWER_13283"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Impure Scion"] = new engine.RulesElement({
    name: "Impure Scion",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_761",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=761",
    categories: ["Impure Scion", "ID_FMP_PARAGON_PATH_761"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1818"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_3135"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_3136"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_3137"]);
      model.grant(model.elements.id["ID_FMP_POWER_13414"]);
      model.grant(model.elements.id["ID_FMP_POWER_13415"]);
      model.grant(model.elements.id["ID_FMP_POWER_13416"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Incandescent Champion"] = new engine.RulesElement({
    name: "Incandescent Champion",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_737",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=737",
    categories: ["Incandescent Champion", "ID_FMP_PARAGON_PATH_737"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2926"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2927"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1818"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2928"]);
      model.grant(model.elements.id["ID_FMP_POWER_13015"]);
      model.grant(model.elements.id["ID_FMP_POWER_13016"]);
      model.grant(model.elements.id["ID_FMP_POWER_13017"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Master Summoner"] = new engine.RulesElement({
    name: "Master Summoner",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_758",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=758",
    categories: ["Master Summoner", "ID_FMP_PARAGON_PATH_758"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1818"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_3125"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_3126"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_3127"]);
      model.grant(model.elements.id["ID_FMP_POWER_13404"]);
      model.grant(model.elements.id["ID_FMP_POWER_13405"]);
      model.grant(model.elements.id["ID_FMP_POWER_13406"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Phrenic Invader"] = new engine.RulesElement({
    name: "Phrenic Invader",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_738",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=738",
    categories: ["Phrenic Invader", "ID_FMP_PARAGON_PATH_738"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2929"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1818"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2930"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2931"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2932"]);
      model.grant(model.elements.id["ID_FMP_POWER_13018"]);
      model.grant(model.elements.id["ID_FMP_POWER_13019"]);
      model.grant(model.elements.id["ID_FMP_POWER_13020"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Psionic Incarnate"] = new engine.RulesElement({
    name: "Psionic Incarnate",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_760",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=760",
    categories: ["Psionic Incarnate", "ID_FMP_PARAGON_PATH_760"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1818"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_3131"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_3132"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_3133"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_3134"]);
      model.grant(model.elements.id["ID_FMP_POWER_13411"]);
      model.grant(model.elements.id["ID_FMP_POWER_13412"]);
      model.grant(model.elements.id["ID_FMP_POWER_13413"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Quicksilver Demon"] = new engine.RulesElement({
    name: "Quicksilver Demon",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_741",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=741",
    categories: ["Quicksilver Demon", "ID_FMP_PARAGON_PATH_741"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1818"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2940"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2941"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2942"]);
      model.grant(model.elements.id["ID_FMP_POWER_13109"]);
      model.grant(model.elements.id["ID_FMP_POWER_13110"]);
      model.grant(model.elements.id["ID_FMP_POWER_13112"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Siphon"] = new engine.RulesElement({
    name: "Siphon",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_739",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=739",
    categories: ["Siphon", "ID_FMP_PARAGON_PATH_739"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1818"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2933"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2934"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2935"]);
      model.grant(model.elements.id["ID_FMP_POWER_13021"]);
      model.grant(model.elements.id["ID_FMP_POWER_13022"]);
      model.grant(model.elements.id["ID_FMP_POWER_13023"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Soaring Blade"] = new engine.RulesElement({
    name: "Soaring Blade",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_751",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=751",
    categories: ["Soaring Blade", "ID_FMP_PARAGON_PATH_751"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_3079"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_3080"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_3081"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_3082"]);
      model.grant(model.elements.id["ID_FMP_POWER_13284"]);
      model.grant(model.elements.id["ID_FMP_POWER_13285"]);
      model.grant(model.elements.id["ID_FMP_POWER_13287"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Storm Disciple"] = new engine.RulesElement({
    name: "Storm Disciple",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_742",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=742",
    categories: ["Storm Disciple", "ID_FMP_PARAGON_PATH_742"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2943"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1818"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2944"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2945"]);
      model.grant(model.elements.id["ID_FMP_POWER_13113"]);
      model.grant(model.elements.id["ID_FMP_POWER_13114"]);
      model.grant(model.elements.id["ID_FMP_POWER_13115"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Talaric Ironjack"] = new engine.RulesElement({
    name: "Talaric Ironjack",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_743",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=743",
    categories: ["Talaric Ironjack", "ID_FMP_PARAGON_PATH_743"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1818"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2946"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2947"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2948"]);
      model.grant(model.elements.id["ID_FMP_POWER_13116"]);
      model.grant(model.elements.id["ID_FMP_POWER_13117"]);
      model.grant(model.elements.id["ID_FMP_POWER_13119"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Thrallherd"] = new engine.RulesElement({
    name: "Thrallherd",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_759",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=759",
    categories: ["Thrallherd", "ID_FMP_PARAGON_PATH_759"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_3128"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_3129"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1818"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_3130"]);
      model.grant(model.elements.id["ID_FMP_POWER_13407"]);
      model.grant(model.elements.id["ID_FMP_POWER_13408"]);
      model.grant(model.elements.id["ID_FMP_POWER_13410"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Tiger Claw Master"] = new engine.RulesElement({
    name: "Tiger Claw Master",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_752",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=752",
    categories: ["Tiger Claw Master", "ID_FMP_PARAGON_PATH_752"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_3083"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_3084"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_3085"]);
      model.grant(model.elements.id["ID_FMP_POWER_13288"]);
      model.grant(model.elements.id["ID_FMP_POWER_13289"]);
      model.grant(model.elements.id["ID_FMP_POWER_13291"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Transcendent Perfection"] = new engine.RulesElement({
    name: "Transcendent Perfection",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_753",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=753",
    categories: ["Transcendent Perfection", "ID_FMP_PARAGON_PATH_753"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_3086"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_3087"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_3088"]);
      model.grant(model.elements.id["ID_FMP_POWER_13292"]);
      model.grant(model.elements.id["ID_FMP_POWER_13293"]);
      model.grant(model.elements.id["ID_FMP_POWER_13295"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Unbound Nomad"] = new engine.RulesElement({
    name: "Unbound Nomad",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_744",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=744",
    categories: ["Unbound Nomad", "ID_FMP_PARAGON_PATH_744"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2949"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2950"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1818"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2951"]);
      model.grant(model.elements.id["ID_FMP_POWER_13120"]);
      model.grant(model.elements.id["ID_FMP_POWER_13121"]);
      model.grant(model.elements.id["ID_FMP_POWER_13122"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Unseen Hand"] = new engine.RulesElement({
    name: "Unseen Hand",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_754",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=754",
    categories: ["Unseen Hand", "ID_FMP_PARAGON_PATH_754"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_3089"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_3091"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_3092"]);
      model.grant(model.elements.id["ID_FMP_POWER_13296"]);
      model.grant(model.elements.id["ID_FMP_POWER_13297"]);
      model.grant(model.elements.id["ID_FMP_POWER_13299"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
