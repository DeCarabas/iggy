(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Paragon_Path = types['Paragon Path'] || (types['Paragon Path'] = {});
  te = Paragon_Path["Argent Soul"] = new RulesElement({
    name: "Argent Soul",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_591",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=591",
    categories: ["Argent Soul", "ID_FMP_PARAGON_PATH_591"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1818"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2347"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2348"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2349"]);
      model.grant(elements.id["ID_FMP_POWER_11149"]);
      model.grant(elements.id["ID_FMP_POWER_11150"]);
      model.grant(elements.id["ID_FMP_POWER_11151"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Blooded Champion"] = new RulesElement({
    name: "Blooded Champion",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_347",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=347",
    categories: ["Blooded Champion", "ID_FMP_PARAGON_PATH_347"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1097"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1098"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_600"]);
      model.grant(elements.id["ID_FMP_POWER_5670"]);
      model.grant(elements.id["ID_FMP_POWER_5671"]);
      model.grant(elements.id["ID_FMP_POWER_5672"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Cerulean Adept"] = new RulesElement({
    name: "Cerulean Adept",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_438",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=438",
    categories: ["Cerulean Adept", "ID_FMP_PARAGON_PATH_438"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1818"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1816"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1817"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1819"]);
      model.grant(elements.id["ID_FMP_POWER_8264"]);
      model.grant(elements.id["ID_FMP_POWER_8266"]);
      model.grant(elements.id["ID_FMP_POWER_8267"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Crimson Hunter"] = new RulesElement({
    name: "Crimson Hunter",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_473",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=473",
    categories: ["Crimson Hunter", "ID_FMP_PARAGON_PATH_473"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1946"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1947"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1948"]);
      model.grant(elements.id["ID_FMP_POWER_9546"]);
      model.grant(elements.id["ID_FMP_POWER_9547"]);
      model.grant(elements.id["ID_FMP_POWER_9548"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Death Arrow"] = new RulesElement({
    name: "Death Arrow",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_607",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=607",
    categories: ["Death Arrow", "ID_FMP_PARAGON_PATH_607"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2405"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2406"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2407"]);
      model.grant(elements.id["ID_FMP_POWER_11515"]);
      model.grant(elements.id["ID_FMP_POWER_11516"]);
      model.grant(elements.id["ID_FMP_POWER_11517"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Dreamwalker"] = new RulesElement({
    name: "Dreamwalker",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_600",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=600",
    categories: ["Dreamwalker", "ID_FMP_PARAGON_PATH_600"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2378"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2379"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1818"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2380"]);
      model.grant(elements.id["ID_FMP_POWER_11346"]);
      model.grant(elements.id["ID_FMP_POWER_11347"]);
      model.grant(elements.id["ID_FMP_POWER_11348"]);
      model.grant(elements.id["ID_FMP_POWER_11349"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Eternal Blade"] = new RulesElement({
    name: "Eternal Blade",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_593",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=593",
    categories: ["Eternal Blade", "ID_FMP_PARAGON_PATH_593"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2354"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2355"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1818"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2356"]);
      model.grant(elements.id["ID_FMP_POWER_11200"]);
      model.grant(elements.id["ID_FMP_POWER_11201"]);
      model.grant(elements.id["ID_FMP_POWER_11202"]);
      model.grant(elements.id["ID_FMP_POWER_11203"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Ghostwalker"] = new RulesElement({
    name: "Ghostwalker",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_364",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=364",
    categories: ["Ghostwalker", "ID_FMP_PARAGON_PATH_364"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1551"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1552"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1553"]);
      model.grant(elements.id["ID_FMP_POWER_7492"]);
      model.grant(elements.id["ID_FMP_POWER_7493"]);
      model.grant(elements.id["ID_FMP_POWER_7494"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Hammer of Vengeance (PH3)"] = new RulesElement({
    name: "Hammer of Vengeance (PH3)",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_603",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=603",
    categories: ["Hammer of Vengeance (PH3)", "ID_FMP_PARAGON_PATH_603"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2391"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2392"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2393"]);
      model.grant(elements.id["ID_FMP_POWER_11449"]);
      model.grant(elements.id["ID_FMP_POWER_11450"]);
      model.grant(elements.id["ID_FMP_POWER_11451"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Initiate of the Dragon"] = new RulesElement({
    name: "Initiate of the Dragon",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_595",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=595",
    categories: ["Initiate of the Dragon", "ID_FMP_PARAGON_PATH_595"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2361"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2362"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2363"]);
      model.grant(elements.id["ID_FMP_POWER_11259"]);
      model.grant(elements.id["ID_FMP_POWER_11260"]);
      model.grant(elements.id["ID_FMP_POWER_11262"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Iron Guardian"] = new RulesElement({
    name: "Iron Guardian",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_594",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=594",
    categories: ["Iron Guardian", "ID_FMP_PARAGON_PATH_594"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2357"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2358"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1818"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2359"]);
      model.grant(elements.id["ID_FMP_POWER_11204"]);
      model.grant(elements.id["ID_FMP_POWER_11205"]);
      model.grant(elements.id["ID_FMP_POWER_11206"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Light Bringer"] = new RulesElement({
    name: "Light Bringer",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_604",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=604",
    categories: ["Light Bringer", "ID_FMP_PARAGON_PATH_604"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2394"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2395"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2396"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2397"]);
      model.grant(elements.id["ID_FMP_POWER_11452"]);
      model.grant(elements.id["ID_FMP_POWER_11453"]);
      model.grant(elements.id["ID_FMP_POWER_11454"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Master of the Forge"] = new RulesElement({
    name: "Master of the Forge",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_605",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=605",
    categories: ["Master of the Forge", "ID_FMP_PARAGON_PATH_605"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2398"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2399"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2400"]);
      model.grant(elements.id["ID_FMP_POWER_11455"]);
      model.grant(elements.id["ID_FMP_POWER_11456"]);
      model.grant(elements.id["ID_FMP_POWER_11457"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Mountain Devotee"] = new RulesElement({
    name: "Mountain Devotee",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_596",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=596",
    categories: ["Mountain Devotee", "ID_FMP_PARAGON_PATH_596"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2364"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2365"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2366"]);
      model.grant(elements.id["ID_FMP_POWER_11263"]);
      model.grant(elements.id["ID_FMP_POWER_11264"]);
      model.grant(elements.id["ID_FMP_POWER_11266"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Nature's Avatar"] = new RulesElement({
    name: "Nature's Avatar",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_586",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=586",
    categories: ["Nature's Avatar", "ID_FMP_PARAGON_PATH_586"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2330"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2331"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2332"]);
      model.grant(elements.id["ID_FMP_POWER_11053"]);
      model.grant(elements.id["ID_FMP_POWER_11054"]);
      model.grant(elements.id["ID_FMP_POWER_11056"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Psionic Binder"] = new RulesElement({
    name: "Psionic Binder",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_530",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=530",
    categories: ["Psionic Binder", "ID_FMP_PARAGON_PATH_530"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2139"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2140"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1818"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2142"]);
      model.grant(elements.id["ID_FMP_POWER_10313"]);
      model.grant(elements.id["ID_FMP_POWER_10314"]);
      model.grant(elements.id["ID_FMP_POWER_10315"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Radiant Fist"] = new RulesElement({
    name: "Radiant Fist",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_363",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=363",
    categories: ["Radiant Fist", "ID_FMP_PARAGON_PATH_363"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1549"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1904"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1550"]);
      model.grant(elements.id["ID_FMP_POWER_7489"]);
      model.grant(elements.id["ID_FMP_POWER_7490"]);
      model.grant(elements.id["ID_FMP_POWER_7491"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Rrathmal"] = new RulesElement({
    name: "Rrathmal",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_450",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=450",
    categories: ["Rrathmal", "ID_FMP_PARAGON_PATH_450"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1863"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1864"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1865"]);
      model.grant(elements.id["ID_FMP_POWER_8274"]);
      model.grant(elements.id["ID_FMP_POWER_8275"]);
      model.grant(elements.id["ID_FMP_POWER_9679"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Rune Shield"] = new RulesElement({
    name: "Rune Shield",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_606",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=606",
    categories: ["Rune Shield", "ID_FMP_PARAGON_PATH_606"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2401"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2402"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2403"]);
      model.grant(elements.id["ID_FMP_POWER_11458"]);
      model.grant(elements.id["ID_FMP_POWER_11459"]);
      model.grant(elements.id["ID_FMP_POWER_11461"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Seven Fates Archer"] = new RulesElement({
    name: "Seven Fates Archer",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_474",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=474",
    categories: ["Seven Fates Archer", "ID_FMP_PARAGON_PATH_474"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1949"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1950"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1951"]);
      model.grant(elements.id["ID_FMP_POWER_9549"]);
      model.grant(elements.id["ID_FMP_POWER_9550"]);
      model.grant(elements.id["ID_FMP_POWER_9551"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Shard Disciple"] = new RulesElement({
    name: "Shard Disciple",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_587",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=587",
    categories: ["Shard Disciple", "ID_FMP_PARAGON_PATH_587"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2333"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1818"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2334"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2335"]);
      model.grant(elements.id["ID_FMP_POWER_11057"]);
      model.grant(elements.id["ID_FMP_POWER_11058"]);
      model.grant(elements.id["ID_FMP_POWER_11059"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Steel Ego"] = new RulesElement({
    name: "Steel Ego",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_542",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=542",
    categories: ["Steel Ego", "ID_FMP_PARAGON_PATH_542"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2179"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2180"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1818"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2181"]);
      model.grant(elements.id["ID_FMP_POWER_10466"]);
      model.grant(elements.id["ID_FMP_POWER_10467"]);
      model.grant(elements.id["ID_FMP_POWER_10468"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Stygian Adept"] = new RulesElement({
    name: "Stygian Adept",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_592",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=592",
    categories: ["Stygian Adept", "ID_FMP_PARAGON_PATH_592"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1818"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2350"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2351"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2352"]);
      model.grant(elements.id["ID_FMP_POWER_11152"]);
      model.grant(elements.id["ID_FMP_POWER_11153"]);
      model.grant(elements.id["ID_FMP_POWER_11154"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Swift Strider"] = new RulesElement({
    name: "Swift Strider",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_608",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=608",
    categories: ["Swift Strider", "ID_FMP_PARAGON_PATH_608"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_52"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2409"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2410"]);
      model.grant(elements.id["ID_FMP_POWER_11518"]);
      model.grant(elements.id["ID_FMP_POWER_11519"]);
      model.grant(elements.id["ID_FMP_POWER_11520"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Talaric Strategist"] = new RulesElement({
    name: "Talaric Strategist",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_531",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=531",
    categories: ["Talaric Strategist", "ID_FMP_PARAGON_PATH_531"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2143"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2144"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1818"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2145"]);
      model.grant(elements.id["ID_FMP_POWER_10316"]);
      model.grant(elements.id["ID_FMP_POWER_10317"]);
      model.grant(elements.id["ID_FMP_POWER_10318"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Time Bender"] = new RulesElement({
    name: "Time Bender",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_601",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=601",
    categories: ["Time Bender", "ID_FMP_PARAGON_PATH_601"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2381"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2382"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1818"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2383"]);
      model.grant(elements.id["ID_FMP_POWER_11350"]);
      model.grant(elements.id["ID_FMP_POWER_11351"]);
      model.grant(elements.id["ID_FMP_POWER_11352"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Uncarnate"] = new RulesElement({
    name: "Uncarnate",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_447",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=447",
    categories: ["Uncarnate", "ID_FMP_PARAGON_PATH_447"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1849"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1850"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1818"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1852"]);
      model.grant(elements.id["ID_FMP_POWER_8268"]);
      model.grant(elements.id["ID_FMP_POWER_8269"]);
      model.grant(elements.id["ID_FMP_POWER_8270"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Zephyr Blade"] = new RulesElement({
    name: "Zephyr Blade",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_541",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=541",
    categories: ["Zephyr Blade", "ID_FMP_PARAGON_PATH_541"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2176"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1818"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2177"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2178"]);
      model.grant(elements.id["ID_FMP_POWER_10462"]);
      model.grant(elements.id["ID_FMP_POWER_10463"]);
      model.grant(elements.id["ID_FMP_POWER_10465"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
