(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Paragon_Path = types['Paragon Path'] || (types['Paragon Path'] = {});
  te = Paragon_Path["Arcane Hunter"] = new RulesElement({
    name: "Arcane Hunter",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_315",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=315",
    categories: ["Arcane Hunter", "ID_FMP_PARAGON_PATH_315"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1388"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1389"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1390"]);
      model.grant(elements.id["ID_FMP_POWER_5780"]);
      model.grant(elements.id["ID_FMP_POWER_5781"]);
      model.grant(elements.id["ID_FMP_POWER_5782"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Arcane Wayfarer"] = new RulesElement({
    name: "Arcane Wayfarer",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_329",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=329",
    categories: ["Arcane Wayfarer", "ID_FMP_PARAGON_PATH_329"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1433"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1434"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1435"]);
      model.grant(elements.id["ID_FMP_POWER_5821"]);
      model.grant(elements.id["ID_FMP_POWER_5822"]);
      model.grant(elements.id["ID_FMP_POWER_5823"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Blizzard Mage"] = new RulesElement({
    name: "Blizzard Mage",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_309",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=309",
    categories: ["Blizzard Mage", "ID_FMP_PARAGON_PATH_309"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1369"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1370"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1371"]);
      model.grant(elements.id["ID_FMP_POWER_5883"]);
      model.grant(elements.id["ID_FMP_POWER_5884"]);
      model.grant(elements.id["ID_FMP_POWER_6816"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Bonded Summoner"] = new RulesElement({
    name: "Bonded Summoner",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_330",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=330",
    categories: ["Bonded Summoner", "ID_FMP_PARAGON_PATH_330"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1437"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1436"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1438"]);
      model.grant(elements.id["ID_FMP_POWER_5824"]);
      model.grant(elements.id["ID_FMP_POWER_5825"]);
      model.grant(elements.id["ID_FMP_POWER_5826"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Celestial Scholar"] = new RulesElement({
    name: "Celestial Scholar",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_310",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=310",
    categories: ["Celestial Scholar", "ID_FMP_PARAGON_PATH_310"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1372"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1373"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1374"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1375"]);
      model.grant(elements.id["ID_FMP_POWER_5886"]);
      model.grant(elements.id["ID_FMP_POWER_5887"]);
      model.grant(elements.id["ID_FMP_POWER_5888"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Cunning Prevaricator"] = new RulesElement({
    name: "Cunning Prevaricator",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_303",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=303",
    categories: ["Cunning Prevaricator", "ID_FMP_PARAGON_PATH_303"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1348"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1349"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1350"]);
      model.grant(elements.id["ID_FMP_POWER_5716"]);
      model.grant(elements.id["ID_FMP_POWER_5717"]);
      model.grant(elements.id["ID_FMP_POWER_5718"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Dark Reckoner"] = new RulesElement({
    name: "Dark Reckoner",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_321",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=321",
    categories: ["Dark Reckoner", "ID_FMP_PARAGON_PATH_321"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1409"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1407"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_384"]);
      model.grant(elements.id["ID_FMP_POWER_5956"]);
      model.grant(elements.id["ID_FMP_POWER_5957"]);
      model.grant(elements.id["ID_FMP_POWER_5958"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Dragon Guardian"] = new RulesElement({
    name: "Dragon Guardian",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_311",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=311",
    categories: ["Dragon Guardian", "ID_FMP_PARAGON_PATH_311"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1376"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1377"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1378"]);
      model.grant(elements.id["ID_FMP_POWER_5889"]);
      model.grant(elements.id["ID_FMP_POWER_5890"]);
      model.grant(elements.id["ID_FMP_POWER_6823"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Entrancing Mystic"] = new RulesElement({
    name: "Entrancing Mystic",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_322",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=322",
    categories: ["Entrancing Mystic", "ID_FMP_PARAGON_PATH_322"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1411"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1412"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1413"]);
      model.grant(elements.id["ID_FMP_POWER_5959"]);
      model.grant(elements.id["ID_FMP_POWER_5960"]);
      model.grant(elements.id["ID_FMP_POWER_5961"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Essence Mage"] = new RulesElement({
    name: "Essence Mage",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_312",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=312",
    categories: ["Essence Mage", "ID_FMP_PARAGON_PATH_312"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1379"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1380"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1381"]);
      model.grant(elements.id["ID_FMP_POWER_5892"]);
      model.grant(elements.id["ID_FMP_POWER_5893"]);
      model.grant(elements.id["ID_FMP_POWER_5894"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Euphonic Bow"] = new RulesElement({
    name: "Euphonic Bow",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_304",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=304",
    categories: ["Euphonic Bow", "ID_FMP_PARAGON_PATH_304"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1351"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1353"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1354"]);
      model.grant(elements.id["ID_FMP_POWER_5720"]);
      model.grant(elements.id["ID_FMP_POWER_5721"]);
      model.grant(elements.id["ID_FMP_POWER_5722"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Ghost Blade"] = new RulesElement({
    name: "Ghost Blade",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_316",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=316",
    categories: ["Ghost Blade", "ID_FMP_PARAGON_PATH_316"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1391"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1392"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1393"]);
      model.grant(elements.id["ID_FMP_POWER_5786"]);
      model.grant(elements.id["ID_FMP_POWER_5787"]);
      model.grant(elements.id["ID_FMP_POWER_5788"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["God Fragment"] = new RulesElement({
    name: "God Fragment",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_323",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=323",
    categories: ["God Fragment", "ID_FMP_PARAGON_PATH_323"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1414"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1415"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1416"]);
      model.grant(elements.id["ID_FMP_POWER_5962"]);
      model.grant(elements.id["ID_FMP_POWER_5963"]);
      model.grant(elements.id["ID_FMP_POWER_6883"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Grave Caller"] = new RulesElement({
    name: "Grave Caller",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_305",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=305",
    categories: ["Grave Caller", "ID_FMP_PARAGON_PATH_305"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1355"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1356"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1357"]);
      model.grant(elements.id["ID_FMP_POWER_5723"]);
      model.grant(elements.id["ID_FMP_POWER_5724"]);
      model.grant(elements.id["ID_FMP_POWER_5725"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Half-Elf Emissary"] = new RulesElement({
    name: "Half-Elf Emissary",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_306",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=306",
    categories: ["Half-Elf Emissary", "ID_FMP_PARAGON_PATH_306"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1359"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1358"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1360"]);
      model.grant(elements.id["ID_FMP_POWER_5726"]);
      model.grant(elements.id["ID_FMP_POWER_5727"]);
      model.grant(elements.id["ID_FMP_POWER_5728"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Hellbringer"] = new RulesElement({
    name: "Hellbringer",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_324",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=324",
    categories: ["Hellbringer", "ID_FMP_PARAGON_PATH_324"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1417"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1418"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1419"]);
      model.grant(elements.id["ID_FMP_POWER_5965"]);
      model.grant(elements.id["ID_FMP_POWER_5966"]);
      model.grant(elements.id["ID_FMP_POWER_5967"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Hermetic Saboteur"] = new RulesElement({
    name: "Hermetic Saboteur",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_331",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=331",
    categories: ["Hermetic Saboteur", "ID_FMP_PARAGON_PATH_331"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1439"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1440"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1441"]);
      model.grant(elements.id["ID_FMP_POWER_5830"]);
      model.grant(elements.id["ID_FMP_POWER_5831"]);
      model.grant(elements.id["ID_FMP_POWER_5832"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Hexer"] = new RulesElement({
    name: "Hexer",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_325",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=325",
    categories: ["Hexer", "ID_FMP_PARAGON_PATH_325"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1420"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1421"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1422"]);
      model.grant(elements.id["ID_FMP_POWER_5968"]);
      model.grant(elements.id["ID_FMP_POWER_5969"]);
      model.grant(elements.id["ID_FMP_POWER_5970"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Karmic Shaper"] = new RulesElement({
    name: "Karmic Shaper",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_307",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=307",
    categories: ["Karmic Shaper", "ID_FMP_PARAGON_PATH_307"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1361"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1362"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1363"]);
      model.grant(elements.id["ID_FMP_POWER_5729"]);
      model.grant(elements.id["ID_FMP_POWER_5730"]);
      model.grant(elements.id["ID_FMP_POWER_5731"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Life Singer"] = new RulesElement({
    name: "Life Singer",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_308",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=308",
    categories: ["Life Singer", "ID_FMP_PARAGON_PATH_308"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1364"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1365"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1366"]);
      model.grant(elements.id["ID_FMP_POWER_5732"]);
      model.grant(elements.id["ID_FMP_POWER_5733"]);
      model.grant(elements.id["ID_FMP_POWER_5734"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Lightning Fury"] = new RulesElement({
    name: "Lightning Fury",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_313",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=313",
    categories: ["Lightning Fury", "ID_FMP_PARAGON_PATH_313"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1382"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1383"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1384"]);
      model.grant(elements.id["ID_FMP_POWER_5895"]);
      model.grant(elements.id["ID_FMP_POWER_5896"]);
      model.grant(elements.id["ID_FMP_POWER_5897"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Master of the Starry Night"] = new RulesElement({
    name: "Master of the Starry Night",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_326",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=326",
    categories: ["Master of the Starry Night", "ID_FMP_PARAGON_PATH_326"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1423"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1424"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1425"]);
      model.grant(elements.id["ID_FMP_POWER_5971"]);
      model.grant(elements.id["ID_FMP_POWER_5972"]);
      model.grant(elements.id["ID_FMP_POWER_5973"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Primordial Channeler"] = new RulesElement({
    name: "Primordial Channeler",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_314",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=314",
    categories: ["Primordial Channeler", "ID_FMP_PARAGON_PATH_314"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1385"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1386"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1387"]);
      model.grant(elements.id["ID_FMP_POWER_5898"]);
      model.grant(elements.id["ID_FMP_POWER_5899"]);
      model.grant(elements.id["ID_FMP_POWER_5900"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Rimetongue Caller"] = new RulesElement({
    name: "Rimetongue Caller",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_332",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=332",
    categories: ["Rimetongue Caller", "ID_FMP_PARAGON_PATH_332"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1442"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1443"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1444"]);
      model.grant(elements.id["ID_FMP_POWER_5833"]);
      model.grant(elements.id["ID_FMP_POWER_5834"]);
      model.grant(elements.id["ID_FMP_POWER_5835"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Sage of Fate's Bonds"] = new RulesElement({
    name: "Sage of Fate's Bonds",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_317",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=317",
    categories: ["Sage of Fate's Bonds", "ID_FMP_PARAGON_PATH_317"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1394"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1395"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1396"]);
      model.grant(elements.id["ID_FMP_POWER_5783"]);
      model.grant(elements.id["ID_FMP_POWER_5784"]);
      model.grant(elements.id["ID_FMP_POWER_5785"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Sea Tyrant Oracle"] = new RulesElement({
    name: "Sea Tyrant Oracle",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_327",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=327",
    categories: ["Sea Tyrant Oracle", "ID_FMP_PARAGON_PATH_327"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1426"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1427"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1428"]);
      model.grant(elements.id["ID_FMP_POWER_5974"]);
      model.grant(elements.id["ID_FMP_POWER_5975"]);
      model.grant(elements.id["ID_FMP_POWER_6895"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Sigil Carver"] = new RulesElement({
    name: "Sigil Carver",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_318",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=318",
    categories: ["Sigil Carver", "ID_FMP_PARAGON_PATH_318"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1397"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1398"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1399"]);
      model.grant(elements.id["ID_FMP_POWER_5789"]);
      model.grant(elements.id["ID_FMP_POWER_5790"]);
      model.grant(elements.id["ID_FMP_POWER_5791"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Storm Scourge"] = new RulesElement({
    name: "Storm Scourge",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_328",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=328",
    categories: ["Storm Scourge", "ID_FMP_PARAGON_PATH_328"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1429"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1430"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1431"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1432"]);
      model.grant(elements.id["ID_FMP_POWER_5977"]);
      model.grant(elements.id["ID_FMP_POWER_5978"]);
      model.grant(elements.id["ID_FMP_POWER_5979"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Sword of Assault"] = new RulesElement({
    name: "Sword of Assault",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_319",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=319",
    categories: ["Sword of Assault", "ID_FMP_PARAGON_PATH_319"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1400"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1401"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1402"]);
      model.grant(elements.id["ID_FMP_POWER_5792"]);
      model.grant(elements.id["ID_FMP_POWER_5793"]);
      model.grant(elements.id["ID_FMP_POWER_5794"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Unseen Mage"] = new RulesElement({
    name: "Unseen Mage",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_333",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=333",
    categories: ["Unseen Mage", "ID_FMP_PARAGON_PATH_333"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1445"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1446"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1447"]);
      model.grant(elements.id["ID_FMP_POWER_5836"]);
      model.grant(elements.id["ID_FMP_POWER_5837"]);
      model.grant(elements.id["ID_FMP_POWER_5838"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Ward Guardian"] = new RulesElement({
    name: "Ward Guardian",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_320",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=320",
    categories: ["Ward Guardian", "ID_FMP_PARAGON_PATH_320"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1403"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1404"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1405"]);
      model.grant(elements.id["ID_FMP_POWER_5795"]);
      model.grant(elements.id["ID_FMP_POWER_5796"]);
      model.grant(elements.id["ID_FMP_POWER_5797"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Weaver of Chance"] = new RulesElement({
    name: "Weaver of Chance",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_334",
    source: "Arcane Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=334",
    categories: ["Weaver of Chance", "ID_FMP_PARAGON_PATH_334"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1448"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1449"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1450"]);
      model.grant(elements.id["ID_FMP_POWER_5827"]);
      model.grant(elements.id["ID_FMP_POWER_5828"]);
      model.grant(elements.id["ID_FMP_POWER_5829"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
