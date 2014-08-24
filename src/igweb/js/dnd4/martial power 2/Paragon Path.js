(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Paragon_Path = types['Paragon Path'] || (types['Paragon Path'] = {});
  te = Paragon_Path["Arcane Battlemaster"] = new RulesElement({
    name: "Arcane Battlemaster",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_574",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=574",
    categories: ["Arcane Battlemaster", "ID_FMP_PARAGON_PATH_574"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2291"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2292"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2293"]);
      model.grant(elements.id["ID_FMP_POWER_10999"]);
      model.grant(elements.id["ID_FMP_POWER_11000"]);
      model.grant(elements.id["ID_FMP_POWER_11001"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Arcane Trickster"] = new RulesElement({
    name: "Arcane Trickster",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_559",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=559",
    categories: ["Arcane Trickster", "ID_FMP_PARAGON_PATH_559"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2239"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2240"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2241"]);
      model.grant(elements.id["ID_FMP_POWER_10829"]);
      model.grant(elements.id["ID_FMP_POWER_10830"]);
      model.grant(elements.id["ID_FMP_POWER_10831"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Arkhosian Blademaster"] = new RulesElement({
    name: "Arkhosian Blademaster",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_575",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=575",
    categories: ["Arkhosian Blademaster", "ID_FMP_PARAGON_PATH_575"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2294"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2295"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2296"]);
      model.grant(elements.id["ID_FMP_POWER_11002"]);
      model.grant(elements.id["ID_FMP_POWER_11003"]);
      model.grant(elements.id["ID_FMP_POWER_11004"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Arrowhead Commander"] = new RulesElement({
    name: "Arrowhead Commander",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_576",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=576",
    categories: ["Arrowhead Commander", "ID_FMP_PARAGON_PATH_576"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2297"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2298"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2299"]);
      model.grant(elements.id["ID_FMP_POWER_11005"]);
      model.grant(elements.id["ID_FMP_POWER_11006"]);
      model.grant(elements.id["ID_FMP_POWER_11007"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Avernian Knight"] = new RulesElement({
    name: "Avernian Knight",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_543",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=543",
    categories: ["Avernian Knight", "ID_FMP_PARAGON_PATH_543"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2184"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2185"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2186"]);
      model.grant(elements.id["ID_FMP_POWER_10566"]);
      model.grant(elements.id["ID_FMP_POWER_10567"]);
      model.grant(elements.id["ID_FMP_POWER_10568"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Blade Bravo"] = new RulesElement({
    name: "Blade Bravo",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_560",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=560",
    categories: ["Blade Bravo", "ID_FMP_PARAGON_PATH_560"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2242"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2243"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2244"]);
      model.grant(elements.id["ID_FMP_POWER_10832"]);
      model.grant(elements.id["ID_FMP_POWER_10833"]);
      model.grant(elements.id["ID_FMP_POWER_10834"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Bloodfury Hunter"] = new RulesElement({
    name: "Bloodfury Hunter",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_551",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=551",
    categories: ["Bloodfury Hunter", "ID_FMP_PARAGON_PATH_551"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2211"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2212"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2213"]);
      model.grant(elements.id["ID_FMP_POWER_10687"]);
      model.grant(elements.id["ID_FMP_POWER_10688"]);
      model.grant(elements.id["ID_FMP_POWER_10689"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Captain of Fortune"] = new RulesElement({
    name: "Captain of Fortune",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_577",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=577",
    categories: ["Captain of Fortune", "ID_FMP_PARAGON_PATH_577"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2300"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2301"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2302"]);
      model.grant(elements.id["ID_FMP_POWER_11008"]);
      model.grant(elements.id["ID_FMP_POWER_11009"]);
      model.grant(elements.id["ID_FMP_POWER_11010"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Chainbinder"] = new RulesElement({
    name: "Chainbinder",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_578",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=578",
    categories: ["Chainbinder", "ID_FMP_PARAGON_PATH_578"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2303"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2304"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2305"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2306"]);
      model.grant(elements.id["ID_FMP_POWER_11011"]);
      model.grant(elements.id["ID_FMP_POWER_11012"]);
      model.grant(elements.id["ID_FMP_POWER_11014"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Daring Slinger"] = new RulesElement({
    name: "Daring Slinger",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_561",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=561",
    categories: ["Daring Slinger", "ID_FMP_PARAGON_PATH_561"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2245"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2246"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2247"]);
      model.grant(elements.id["ID_FMP_POWER_3161"]);
      model.grant(elements.id["ID_FMP_POWER_10835"]);
      model.grant(elements.id["ID_FMP_POWER_10837"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Darkstrider"] = new RulesElement({
    name: "Darkstrider",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_552",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=552",
    categories: ["Darkstrider", "ID_FMP_PARAGON_PATH_552"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2214"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2215"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2216"]);
      model.grant(elements.id["ID_FMP_POWER_10690"]);
      model.grant(elements.id["ID_FMP_POWER_10691"]);
      model.grant(elements.id["ID_FMP_POWER_10692"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Glorious Myrmidon"] = new RulesElement({
    name: "Glorious Myrmidon",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_544",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=544",
    categories: ["Glorious Myrmidon", "ID_FMP_PARAGON_PATH_544"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2187"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2188"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2189"]);
      model.grant(elements.id["ID_FMP_POWER_138"]);
      model.grant(elements.id["ID_FMP_POWER_10569"]);
      model.grant(elements.id["ID_FMP_POWER_10570"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Harrowing Swarm Archer"] = new RulesElement({
    name: "Harrowing Swarm Archer",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_553",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=553",
    categories: ["Harrowing Swarm Archer", "ID_FMP_PARAGON_PATH_553"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2217"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2218"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2219"]);
      model.grant(elements.id["ID_FMP_POWER_10693"]);
      model.grant(elements.id["ID_FMP_POWER_10694"]);
      model.grant(elements.id["ID_FMP_POWER_10695"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Huntmaster"] = new RulesElement({
    name: "Huntmaster",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_554",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=554",
    categories: ["Huntmaster", "ID_FMP_PARAGON_PATH_554"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2220"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2221"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2222"]);
      model.grant(elements.id["ID_FMP_POWER_10715"]);
      model.grant(elements.id["ID_FMP_POWER_10716"]);
      model.grant(elements.id["ID_FMP_POWER_10718"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Ironstar Mauler"] = new RulesElement({
    name: "Ironstar Mauler",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_545",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=545",
    categories: ["Ironstar Mauler", "ID_FMP_PARAGON_PATH_545"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2190"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2191"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2192"]);
      model.grant(elements.id["ID_FMP_POWER_10572"]);
      model.grant(elements.id["ID_FMP_POWER_10573"]);
      model.grant(elements.id["ID_FMP_POWER_10574"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Jack-of-All-Trades"] = new RulesElement({
    name: "Jack-of-All-Trades",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_562",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=562",
    categories: ["Jack-of-All-Trades", "ID_FMP_PARAGON_PATH_562"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_28"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2249"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2250"]);
      model.grant(elements.id["ID_FMP_POWER_10856"]);
      model.grant(elements.id["ID_FMP_POWER_10857"]);
      model.grant(elements.id["ID_FMP_POWER_10858"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Kulkor Arms Master"] = new RulesElement({
    name: "Kulkor Arms Master",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_546",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=546",
    categories: ["Kulkor Arms Master", "ID_FMP_PARAGON_PATH_546"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2193"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2194"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2195"]);
      model.grant(elements.id["ID_FMP_POWER_10575"]);
      model.grant(elements.id["ID_FMP_POWER_10576"]);
      model.grant(elements.id["ID_FMP_POWER_10577"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Lone Wolf"] = new RulesElement({
    name: "Lone Wolf",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_555",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=555",
    categories: ["Lone Wolf", "ID_FMP_PARAGON_PATH_555"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2223"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2224"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2225"]);
      model.grant(elements.id["ID_FMP_POWER_10719"]);
      model.grant(elements.id["ID_FMP_POWER_10720"]);
      model.grant(elements.id["ID_FMP_POWER_10721"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Master of Poisons"] = new RulesElement({
    name: "Master of Poisons",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_565",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=565",
    categories: ["Master of Poisons", "ID_FMP_PARAGON_PATH_565"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2273"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2276"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2275"]);
      model.grant(elements.id["ID_FMP_POWER_10875"]);
      model.grant(elements.id["ID_FMP_POWER_10876"]);
      model.grant(elements.id["ID_FMP_POWER_10877"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Prince of Knaves"] = new RulesElement({
    name: "Prince of Knaves",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_579",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=579",
    categories: ["Prince of Knaves", "ID_FMP_PARAGON_PATH_579"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2307"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2309"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2310"]);
      model.grant(elements.id["ID_FMP_POWER_11015"]);
      model.grant(elements.id["ID_FMP_POWER_11016"]);
      model.grant(elements.id["ID_FMP_POWER_11018"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Rakehell Duelist"] = new RulesElement({
    name: "Rakehell Duelist",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_547",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=547",
    categories: ["Rakehell Duelist", "ID_FMP_PARAGON_PATH_547"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2196"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2197"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2198"]);
      model.grant(elements.id["ID_FMP_POWER_10578"]);
      model.grant(elements.id["ID_FMP_POWER_10579"]);
      model.grant(elements.id["ID_FMP_POWER_10580"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Rampaging Brute"] = new RulesElement({
    name: "Rampaging Brute",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_548",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=548",
    categories: ["Rampaging Brute", "ID_FMP_PARAGON_PATH_548"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2199"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2200"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2201"]);
      model.grant(elements.id["ID_FMP_POWER_10581"]);
      model.grant(elements.id["ID_FMP_POWER_10582"]);
      model.grant(elements.id["ID_FMP_POWER_10584"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Reaving Axe Savant"] = new RulesElement({
    name: "Reaving Axe Savant",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_556",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=556",
    categories: ["Reaving Axe Savant", "ID_FMP_PARAGON_PATH_556"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2226"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2228"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2229"]);
      model.grant(elements.id["ID_FMP_POWER_10722"]);
      model.grant(elements.id["ID_FMP_POWER_10723"]);
      model.grant(elements.id["ID_FMP_POWER_10724"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Red Cloak"] = new RulesElement({
    name: "Red Cloak",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_566",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=566",
    categories: ["Red Cloak", "ID_FMP_PARAGON_PATH_566"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2277"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2278"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2279"]);
      model.grant(elements.id["ID_FMP_POWER_10881"]);
      model.grant(elements.id["ID_FMP_POWER_10882"]);
      model.grant(elements.id["ID_FMP_POWER_10883"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Shinaelestran Guardian"] = new RulesElement({
    name: "Shinaelestran Guardian",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_557",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=557",
    categories: ["Shinaelestran Guardian", "ID_FMP_PARAGON_PATH_557"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2231"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2232"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2233"]);
      model.grant(elements.id["ID_FMP_POWER_10725"]);
      model.grant(elements.id["ID_FMP_POWER_10726"]);
      model.grant(elements.id["ID_FMP_POWER_10727"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Snow Tiger"] = new RulesElement({
    name: "Snow Tiger",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_558",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=558",
    categories: ["Snow Tiger", "ID_FMP_PARAGON_PATH_558"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2234"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2235"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2236"]);
      model.grant(elements.id["ID_FMP_POWER_10728"]);
      model.grant(elements.id["ID_FMP_POWER_10729"]);
      model.grant(elements.id["ID_FMP_POWER_10731"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Steel Vanguard Master"] = new RulesElement({
    name: "Steel Vanguard Master",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_549",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=549",
    categories: ["Steel Vanguard Master", "ID_FMP_PARAGON_PATH_549"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2202"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2203"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2204"]);
      model.grant(elements.id["ID_FMP_POWER_10585"]);
      model.grant(elements.id["ID_FMP_POWER_10586"]);
      model.grant(elements.id["ID_FMP_POWER_10587"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Verdant Stalker"] = new RulesElement({
    name: "Verdant Stalker",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_563",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=563",
    categories: ["Verdant Stalker", "ID_FMP_PARAGON_PATH_563"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2251"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2252"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2253"]);
      model.grant(elements.id["ID_FMP_POWER_10859"]);
      model.grant(elements.id["ID_FMP_POWER_10860"]);
      model.grant(elements.id["ID_FMP_POWER_10861"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Warhound of Bane"] = new RulesElement({
    name: "Warhound of Bane",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_550",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=550",
    categories: ["Warhound of Bane", "ID_FMP_PARAGON_PATH_550"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2205"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2206"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2207"]);
      model.grant(elements.id["ID_FMP_POWER_10588"]);
      model.grant(elements.id["ID_FMP_POWER_10589"]);
      model.grant(elements.id["ID_FMP_POWER_10590"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Whisperknife"] = new RulesElement({
    name: "Whisperknife",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_567",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=567",
    categories: ["Whisperknife", "ID_FMP_PARAGON_PATH_567"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2280"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2281"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2282"]);
      model.grant(elements.id["ID_FMP_POWER_10884"]);
      model.grant(elements.id["ID_FMP_POWER_10885"]);
      model.grant(elements.id["ID_FMP_POWER_10886"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["White Raven"] = new RulesElement({
    name: "White Raven",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_580",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=580",
    categories: ["White Raven", "ID_FMP_PARAGON_PATH_580"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2311"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2312"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2313"]);
      model.grant(elements.id["ID_FMP_POWER_11019"]);
      model.grant(elements.id["ID_FMP_POWER_11020"]);
      model.grant(elements.id["ID_FMP_POWER_11022"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Zephyr Warchief"] = new RulesElement({
    name: "Zephyr Warchief",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_581",
    source: "Martial Power 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=581",
    categories: ["Zephyr Warchief", "ID_FMP_PARAGON_PATH_581"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2314"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2315"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2316"]);
      model.grant(elements.id["ID_FMP_POWER_11023"]);
      model.grant(elements.id["ID_FMP_POWER_11024"]);
      model.grant(elements.id["ID_FMP_POWER_11025"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
