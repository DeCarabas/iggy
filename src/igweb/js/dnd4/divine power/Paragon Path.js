(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Paragon_Path = types['Paragon Path'] || (types['Paragon Path'] = {});
  te = Paragon_Path["Adept of Whispers"] = new RulesElement({
    name: "Adept of Whispers",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_409",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=409",
    categories: ["Adept of Whispers", "ID_FMP_PARAGON_PATH_409"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1718"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1719"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1720"]);
      model.grant(elements.id["ID_FMP_POWER_8000"]);
      model.grant(elements.id["ID_FMP_POWER_8001"]);
      model.grant(elements.id["ID_FMP_POWER_8002"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Anointed Champion"] = new RulesElement({
    name: "Anointed Champion",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_399",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=399",
    categories: ["Anointed Champion", "ID_FMP_PARAGON_PATH_399"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1683"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1682"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1684"]);
      model.grant(elements.id["ID_FMP_POWER_7897"]);
      model.grant(elements.id["ID_FMP_POWER_7898"]);
      model.grant(elements.id["ID_FMP_POWER_7899"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Ardent Champion"] = new RulesElement({
    name: "Ardent Champion",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_391",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=391",
    categories: ["Ardent Champion", "ID_FMP_PARAGON_PATH_391"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1658"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1659"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1660"]);
      model.grant(elements.id["ID_FMP_POWER_7703"]);
      model.grant(elements.id["ID_FMP_POWER_7704"]);
      model.grant(elements.id["ID_FMP_POWER_7706"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Astral Savant"] = new RulesElement({
    name: "Astral Savant",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_400",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=400",
    categories: ["Astral Savant", "ID_FMP_PARAGON_PATH_400"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1685"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1686"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1687"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1688"]);
      model.grant(elements.id["ID_FMP_POWER_7900"]);
      model.grant(elements.id["ID_FMP_POWER_7901"]);
      model.grant(elements.id["ID_FMP_POWER_7902"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Battle Chaplain"] = new RulesElement({
    name: "Battle Chaplain",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_401",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=401",
    categories: ["Battle Chaplain", "ID_FMP_PARAGON_PATH_401"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1689"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1690"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1691"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1692"]);
      model.grant(elements.id["ID_FMP_POWER_7903"]);
      model.grant(elements.id["ID_FMP_POWER_7904"]);
      model.grant(elements.id["ID_FMP_POWER_7972"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Champion of Corellon"] = new RulesElement({
    name: "Champion of Corellon",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_419",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=419",
    categories: ["Champion of Corellon", "ID_FMP_PARAGON_PATH_419"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1748"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1749"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1750"]);
      model.grant(elements.id["ID_FMP_POWER_8101"]);
      model.grant(elements.id["ID_FMP_POWER_8102"]);
      model.grant(elements.id["ID_FMP_POWER_8103"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Compassionate Healer"] = new RulesElement({
    name: "Compassionate Healer",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_402",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=402",
    categories: ["Compassionate Healer", "ID_FMP_PARAGON_PATH_402"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1693"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1694"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1695"]);
      model.grant(elements.id["ID_FMP_POWER_7973"]);
      model.grant(elements.id["ID_FMP_POWER_7974"]);
      model.grant(elements.id["ID_FMP_POWER_7975"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Crimson Arbiter"] = new RulesElement({
    name: "Crimson Arbiter",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_410",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=410",
    categories: ["Crimson Arbiter", "ID_FMP_PARAGON_PATH_410"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1721"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1722"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1723"]);
      model.grant(elements.id["ID_FMP_POWER_8004"]);
      model.grant(elements.id["ID_FMP_POWER_8005"]);
      model.grant(elements.id["ID_FMP_POWER_8006"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Demonslayer"] = new RulesElement({
    name: "Demonslayer",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_420",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=420",
    categories: ["Demonslayer", "ID_FMP_PARAGON_PATH_420"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1752"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1751"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1753"]);
      model.grant(elements.id["ID_FMP_POWER_8104"]);
      model.grant(elements.id["ID_FMP_POWER_8105"]);
      model.grant(elements.id["ID_FMP_POWER_8106"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Dervish of Dawn"] = new RulesElement({
    name: "Dervish of Dawn",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_392",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=392",
    categories: ["Dervish of Dawn", "ID_FMP_PARAGON_PATH_392"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1661"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1662"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1663"]);
      model.grant(elements.id["ID_FMP_POWER_7707"]);
      model.grant(elements.id["ID_FMP_POWER_7709"]);
      model.grant(elements.id["ID_FMP_POWER_8284"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Devoted Orator"] = new RulesElement({
    name: "Devoted Orator",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_411",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=411",
    categories: ["Devoted Orator", "ID_FMP_PARAGON_PATH_411"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1724"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1725"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1726"]);
      model.grant(elements.id["ID_FMP_POWER_8007"]);
      model.grant(elements.id["ID_FMP_POWER_8008"]);
      model.grant(elements.id["ID_FMP_POWER_8009"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Divine Hand"] = new RulesElement({
    name: "Divine Hand",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_412",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=412",
    categories: ["Divine Hand", "ID_FMP_PARAGON_PATH_412"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1727"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1728"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1729"]);
      model.grant(elements.id["ID_FMP_POWER_8010"]);
      model.grant(elements.id["ID_FMP_POWER_8011"]);
      model.grant(elements.id["ID_FMP_POWER_8012"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Divine Philosopher"] = new RulesElement({
    name: "Divine Philosopher",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_413",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=413",
    categories: ["Divine Philosopher", "ID_FMP_PARAGON_PATH_413"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1730"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1731"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1732"]);
      model.grant(elements.id["ID_FMP_POWER_8013"]);
      model.grant(elements.id["ID_FMP_POWER_8014"]);
      model.grant(elements.id["ID_FMP_POWER_8015"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Dragonslayer"] = new RulesElement({
    name: "Dragonslayer",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_421",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=421",
    categories: ["Dragonslayer", "ID_FMP_PARAGON_PATH_421"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1754"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1755"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1756"]);
      model.grant(elements.id["ID_FMP_POWER_8108"]);
      model.grant(elements.id["ID_FMP_POWER_8109"]);
      model.grant(elements.id["ID_FMP_POWER_8110"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Dread Imperator"] = new RulesElement({
    name: "Dread Imperator",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_393",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=393",
    categories: ["Dread Imperator", "ID_FMP_PARAGON_PATH_393"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1664"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1665"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1666"]);
      model.grant(elements.id["ID_FMP_POWER_7710"]);
      model.grant(elements.id["ID_FMP_POWER_7711"]);
      model.grant(elements.id["ID_FMP_POWER_7712"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Faithful Shield"] = new RulesElement({
    name: "Faithful Shield",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_422",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=422",
    categories: ["Faithful Shield", "ID_FMP_PARAGON_PATH_422"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1757"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1758"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1759"]);
      model.grant(elements.id["ID_FMP_POWER_8111"]);
      model.grant(elements.id["ID_FMP_POWER_8112"]);
      model.grant(elements.id["ID_FMP_POWER_8150"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Favored Soul"] = new RulesElement({
    name: "Favored Soul",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_394",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=394",
    categories: ["Favored Soul", "ID_FMP_PARAGON_PATH_394"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1667"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1668"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1669"]);
      model.grant(elements.id["ID_FMP_POWER_7713"]);
      model.grant(elements.id["ID_FMP_POWER_7714"]);
      model.grant(elements.id["ID_FMP_POWER_7715"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Gray Guard"] = new RulesElement({
    name: "Gray Guard",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_423",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=423",
    categories: ["Gray Guard", "ID_FMP_PARAGON_PATH_423"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1760"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1761"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1762"]);
      model.grant(elements.id["ID_FMP_POWER_8151"]);
      model.grant(elements.id["ID_FMP_POWER_8152"]);
      model.grant(elements.id["ID_FMP_POWER_8153"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Hammer of Moradin"] = new RulesElement({
    name: "Hammer of Moradin",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_424",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=424",
    categories: ["Hammer of Moradin", "ID_FMP_PARAGON_PATH_424"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1763"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1764"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1765"]);
      model.grant(elements.id["ID_FMP_POWER_8154"]);
      model.grant(elements.id["ID_FMP_POWER_8155"]);
      model.grant(elements.id["ID_FMP_POWER_8156"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Holy Conqueror"] = new RulesElement({
    name: "Holy Conqueror",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_425",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=425",
    categories: ["Holy Conqueror", "ID_FMP_PARAGON_PATH_425"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1766"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1767"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1768"]);
      model.grant(elements.id["ID_FMP_POWER_8157"]);
      model.grant(elements.id["ID_FMP_POWER_8158"]);
      model.grant(elements.id["ID_FMP_POWER_8159"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Holy Emissary"] = new RulesElement({
    name: "Holy Emissary",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_403",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=403",
    categories: ["Holy Emissary", "ID_FMP_PARAGON_PATH_403"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1696"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1697"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1698"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1699"]);
      model.grant(elements.id["ID_FMP_POWER_7977"]);
      model.grant(elements.id["ID_FMP_POWER_7978"]);
      model.grant(elements.id["ID_FMP_POWER_7979"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Keeper of the Nine"] = new RulesElement({
    name: "Keeper of the Nine",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_414",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=414",
    categories: ["Keeper of the Nine", "ID_FMP_PARAGON_PATH_414"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1733"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1734"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1735"]);
      model.grant(elements.id["ID_FMP_POWER_8016"]);
      model.grant(elements.id["ID_FMP_POWER_8080"]);
      model.grant(elements.id["ID_FMP_POWER_8081"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Knight of the Chalice"] = new RulesElement({
    name: "Knight of the Chalice",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_426",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=426",
    categories: ["Knight of the Chalice", "ID_FMP_PARAGON_PATH_426"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1769"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1770"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1771"]);
      model.grant(elements.id["ID_FMP_POWER_8160"]);
      model.grant(elements.id["ID_FMP_POWER_8161"]);
      model.grant(elements.id["ID_FMP_POWER_8162"]);
      model.grant(elements.id["ID_FMP_POWER_8163"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Messenger of Peace"] = new RulesElement({
    name: "Messenger of Peace",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_404",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=404",
    categories: ["Messenger of Peace", "ID_FMP_PARAGON_PATH_404"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1700"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1701"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1702"]);
      model.grant(elements.id["ID_FMP_POWER_7980"]);
      model.grant(elements.id["ID_FMP_POWER_7981"]);
      model.grant(elements.id["ID_FMP_POWER_7982"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Miracle Worker"] = new RulesElement({
    name: "Miracle Worker",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_405",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=405",
    categories: ["Miracle Worker", "ID_FMP_PARAGON_PATH_405"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1706"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1704"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1707"]);
      model.grant(elements.id["ID_FMP_POWER_7983"]);
      model.grant(elements.id["ID_FMP_POWER_7984"]);
      model.grant(elements.id["ID_FMP_POWER_7985"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Questing Knight"] = new RulesElement({
    name: "Questing Knight",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_427",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=427",
    categories: ["Questing Knight", "ID_FMP_PARAGON_PATH_427"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1773"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1772"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1774"]);
      model.grant(elements.id["ID_FMP_POWER_8164"]);
      model.grant(elements.id["ID_FMP_POWER_8165"]);
      model.grant(elements.id["ID_FMP_POWER_8166"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Relentless Slayer"] = new RulesElement({
    name: "Relentless Slayer",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_395",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=395",
    categories: ["Relentless Slayer", "ID_FMP_PARAGON_PATH_395"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1670"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1671"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1672"]);
      model.grant(elements.id["ID_FMP_POWER_7716"]);
      model.grant(elements.id["ID_FMP_POWER_7717"]);
      model.grant(elements.id["ID_FMP_POWER_7718"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Scion of Sacrifice"] = new RulesElement({
    name: "Scion of Sacrifice",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_428",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=428",
    categories: ["Scion of Sacrifice", "ID_FMP_PARAGON_PATH_428"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1775"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1776"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1777"]);
      model.grant(elements.id["ID_FMP_POWER_8167"]);
      model.grant(elements.id["ID_FMP_POWER_8168"]);
      model.grant(elements.id["ID_FMP_POWER_8169"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Seldarine Dedicate"] = new RulesElement({
    name: "Seldarine Dedicate",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_406",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=406",
    categories: ["Seldarine Dedicate", "ID_FMP_PARAGON_PATH_406"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1708"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1709"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1710"]);
      model.grant(elements.id["ID_FMP_POWER_7986"]);
      model.grant(elements.id["ID_FMP_POWER_7987"]);
      model.grant(elements.id["ID_FMP_POWER_7988"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Serene Initiate"] = new RulesElement({
    name: "Serene Initiate",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_396",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=396",
    categories: ["Serene Initiate", "ID_FMP_PARAGON_PATH_396"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1673"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1674"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1675"]);
      model.grant(elements.id["ID_FMP_POWER_7720"]);
      model.grant(elements.id["ID_FMP_POWER_7721"]);
      model.grant(elements.id["ID_FMP_POWER_7722"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Slayer of the Dead"] = new RulesElement({
    name: "Slayer of the Dead",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_429",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=429",
    categories: ["Slayer of the Dead", "ID_FMP_PARAGON_PATH_429"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1778"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1779"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1780"]);
      model.grant(elements.id["ID_FMP_POWER_8170"]);
      model.grant(elements.id["ID_FMP_POWER_8171"]);
      model.grant(elements.id["ID_FMP_POWER_8172"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Speaker of the Word"] = new RulesElement({
    name: "Speaker of the Word",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_415",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=415",
    categories: ["Speaker of the Word", "ID_FMP_PARAGON_PATH_415"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1736"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1737"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1738"]);
      model.grant(elements.id["ID_FMP_POWER_8082"]);
      model.grant(elements.id["ID_FMP_POWER_8083"]);
      model.grant(elements.id["ID_FMP_POWER_8084"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Stone Keeper"] = new RulesElement({
    name: "Stone Keeper",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_407",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=407",
    categories: ["Stone Keeper", "ID_FMP_PARAGON_PATH_407"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1711"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1712"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1713"]);
      model.grant(elements.id["ID_FMP_POWER_7989"]);
      model.grant(elements.id["ID_FMP_POWER_7990"]);
      model.grant(elements.id["ID_FMP_POWER_7991"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Stonecaller"] = new RulesElement({
    name: "Stonecaller",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_416",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=416",
    categories: ["Stonecaller", "ID_FMP_PARAGON_PATH_416"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1739"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1740"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1741"]);
      model.grant(elements.id["ID_FMP_POWER_8085"]);
      model.grant(elements.id["ID_FMP_POWER_8086"]);
      model.grant(elements.id["ID_FMP_POWER_8087"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Theurge of the Compact"] = new RulesElement({
    name: "Theurge of the Compact",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_417",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=417",
    categories: ["Theurge of the Compact", "ID_FMP_PARAGON_PATH_417"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1742"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1743"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1744"]);
      model.grant(elements.id["ID_FMP_POWER_8088"]);
      model.grant(elements.id["ID_FMP_POWER_8089"]);
      model.grant(elements.id["ID_FMP_POWER_8090"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Truthseeker"] = new RulesElement({
    name: "Truthseeker",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_408",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=408",
    categories: ["Truthseeker", "ID_FMP_PARAGON_PATH_408"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1716"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1714"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1715"]);
      model.grant(elements.id["ID_FMP_POWER_7992"]);
      model.grant(elements.id["ID_FMP_POWER_7993"]);
      model.grant(elements.id["ID_FMP_POWER_7994"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Vessel of Ichor"] = new RulesElement({
    name: "Vessel of Ichor",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_418",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=418",
    categories: ["Vessel of Ichor", "ID_FMP_PARAGON_PATH_418"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1745"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1746"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1747"]);
      model.grant(elements.id["ID_FMP_POWER_8091"]);
      model.grant(elements.id["ID_FMP_POWER_8092"]);
      model.grant(elements.id["ID_FMP_POWER_8093"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Watchful Shepherd"] = new RulesElement({
    name: "Watchful Shepherd",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_397",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=397",
    categories: ["Watchful Shepherd", "ID_FMP_PARAGON_PATH_397"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1676"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1677"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1678"]);
      model.grant(elements.id["ID_FMP_POWER_7723"]);
      model.grant(elements.id["ID_FMP_POWER_7724"]);
      model.grant(elements.id["ID_FMP_POWER_7725"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Weapon of Fortune"] = new RulesElement({
    name: "Weapon of Fortune",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_398",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=398",
    categories: ["Weapon of Fortune", "ID_FMP_PARAGON_PATH_398"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1679"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1680"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1681"]);
      model.grant(elements.id["ID_FMP_POWER_7726"]);
      model.grant(elements.id["ID_FMP_POWER_7727"]);
      model.grant(elements.id["ID_FMP_POWER_7728"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
