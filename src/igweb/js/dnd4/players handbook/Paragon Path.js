define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Paragon_Path = types['Paragon Path'] || (types['Paragon Path'] = {});
  te = Paragon_Path["Angelic Avenger"] = new engine.RulesElement({
    name: "Angelic Avenger",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_17",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=17",
    categories: ["Angelic Avenger", "ID_FMP_PARAGON_PATH_17"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_441"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_445"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_672"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_440"]);
      model.grant(model.elements.id["ID_FMP_POWER_1591"]);
      model.grant(model.elements.id["ID_FMP_POWER_1593"]);
      model.grant(model.elements.id["ID_FMP_POWER_2256"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Astral Weapon"] = new engine.RulesElement({
    name: "Astral Weapon",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_43",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=43",
    categories: ["Astral Weapon", "ID_FMP_PARAGON_PATH_43"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_471"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_472"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_676"]);
      model.grant(model.elements.id["ID_FMP_POWER_1635"]);
      model.grant(model.elements.id["ID_FMP_POWER_1636"]);
      model.grant(model.elements.id["ID_FMP_POWER_1637"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Battle Captain"] = new engine.RulesElement({
    name: "Battle Captain",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_46",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=46",
    categories: ["Battle Captain", "ID_FMP_PARAGON_PATH_46"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_491"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_492"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_668"]);
      model.grant(model.elements.id["ID_FMP_POWER_1667"]);
      model.grant(model.elements.id["ID_FMP_POWER_1668"]);
      model.grant(model.elements.id["ID_FMP_POWER_1669"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Battle Mage"] = new engine.RulesElement({
    name: "Battle Mage",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_29",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=29",
    categories: ["Battle Mage", "ID_FMP_PARAGON_PATH_29"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_456"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_505"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_684"]);
      model.grant(model.elements.id["ID_FMP_POWER_1613"]);
      model.grant(model.elements.id["ID_FMP_POWER_1614"]);
      model.grant(model.elements.id["ID_FMP_POWER_1615"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Battlefield Archer"] = new engine.RulesElement({
    name: "Battlefield Archer",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_52",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=52",
    categories: ["Battlefield Archer", "ID_FMP_PARAGON_PATH_52"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_501"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_502"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_664"]);
      model.grant(model.elements.id["ID_FMP_POWER_1682"]);
      model.grant(model.elements.id["ID_FMP_POWER_1683"]);
      model.grant(model.elements.id["ID_FMP_POWER_1684"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Beast Stalker"] = new engine.RulesElement({
    name: "Beast Stalker",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_50",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=50",
    categories: ["Beast Stalker", "ID_FMP_PARAGON_PATH_50"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_503"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_504"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_665"]);
      model.grant(model.elements.id["ID_FMP_POWER_1686"]);
      model.grant(model.elements.id["ID_FMP_POWER_1687"]);
      model.grant(model.elements.id["ID_FMP_POWER_2216"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Blood Mage"] = new engine.RulesElement({
    name: "Blood Mage",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_31",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=31",
    categories: ["Blood Mage", "ID_FMP_PARAGON_PATH_31"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_460"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_506"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_685"]);
      model.grant(model.elements.id["ID_FMP_POWER_1616"]);
      model.grant(model.elements.id["ID_FMP_POWER_1623"]);
      model.grant(model.elements.id["ID_FMP_POWER_1624"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Cat Burglar"] = new engine.RulesElement({
    name: "Cat Burglar",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_36",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=36",
    categories: ["Cat Burglar", "ID_FMP_PARAGON_PATH_36"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_484"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_485"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_654"]);
      model.grant(model.elements.id["ID_FMP_POWER_1655"]);
      model.grant(model.elements.id["ID_FMP_POWER_1656"]);
      model.grant(model.elements.id["ID_FMP_POWER_1657"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Champion of Order"] = new engine.RulesElement({
    name: "Champion of Order",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_44",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=44",
    categories: ["Champion of Order", "ID_FMP_PARAGON_PATH_44"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_473"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_474"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_677"]);
      model.grant(model.elements.id["ID_FMP_POWER_1638"]);
      model.grant(model.elements.id["ID_FMP_POWER_1639"]);
      model.grant(model.elements.id["ID_FMP_POWER_1640"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Combat Veteran"] = new engine.RulesElement({
    name: "Combat Veteran",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_45",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=45",
    categories: ["Combat Veteran", "ID_FMP_PARAGON_PATH_45"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_489"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_490"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_669"]);
      model.grant(model.elements.id["ID_FMP_POWER_1664"]);
      model.grant(model.elements.id["ID_FMP_POWER_1665"]);
      model.grant(model.elements.id["ID_FMP_POWER_1666"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Daggermaster"] = new engine.RulesElement({
    name: "Daggermaster",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_34",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=34",
    categories: ["Daggermaster", "ID_FMP_PARAGON_PATH_34"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_508"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_509"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_657"]);
      model.grant(model.elements.id["ID_FMP_POWER_1649"]);
      model.grant(model.elements.id["ID_FMP_POWER_1651"]);
      model.grant(model.elements.id["ID_FMP_POWER_1692"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Divine Oracle"] = new engine.RulesElement({
    name: "Divine Oracle",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_16",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=16",
    categories: ["Divine Oracle", "ID_FMP_PARAGON_PATH_16"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_438"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_512"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_673"]);
      model.grant(model.elements.id["ID_FMP_POWER_1586"]);
      model.grant(model.elements.id["ID_FMP_POWER_1587"]);
      model.grant(model.elements.id["ID_FMP_POWER_1696"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Doomsayer"] = new engine.RulesElement({
    name: "Doomsayer",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_39",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=39",
    categories: ["Doomsayer", "ID_FMP_PARAGON_PATH_39"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_477"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_478"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_680"]);
      model.grant(model.elements.id["ID_FMP_POWER_1644"]);
      model.grant(model.elements.id["ID_FMP_POWER_1645"]);
      model.grant(model.elements.id["ID_FMP_POWER_1693"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Feytouched"] = new engine.RulesElement({
    name: "Feytouched",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_14",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=14",
    categories: ["Feytouched", "ID_FMP_PARAGON_PATH_14"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_435"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_488"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_681"]);
      model.grant(model.elements.id["ID_FMP_POWER_1659"]);
      model.grant(model.elements.id["ID_FMP_POWER_1661"]);
      model.grant(model.elements.id["ID_FMP_POWER_1695"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Hospitaler"] = new engine.RulesElement({
    name: "Hospitaler",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_41",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=41",
    categories: ["Hospitaler", "ID_FMP_PARAGON_PATH_41"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_467"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_468"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_678"]);
      model.grant(model.elements.id["ID_FMP_POWER_1629"]);
      model.grant(model.elements.id["ID_FMP_POWER_1630"]);
      model.grant(model.elements.id["ID_FMP_POWER_1631"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Iron Vanguard"] = new engine.RulesElement({
    name: "Iron Vanguard",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_28",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=28",
    categories: ["Iron Vanguard", "ID_FMP_PARAGON_PATH_28"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_448"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_511"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_648"]);
      model.grant(model.elements.id["ID_FMP_POWER_1597"]);
      model.grant(model.elements.id["ID_FMP_POWER_1599"]);
      model.grant(model.elements.id["ID_FMP_POWER_1694"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Justiciar"] = new engine.RulesElement({
    name: "Justiciar",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_42",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=42",
    categories: ["Justiciar", "ID_FMP_PARAGON_PATH_42"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_469"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_470"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_679"]);
      model.grant(model.elements.id["ID_FMP_POWER_1632"]);
      model.grant(model.elements.id["ID_FMP_POWER_1633"]);
      model.grant(model.elements.id["ID_FMP_POWER_1634"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Kensei"] = new engine.RulesElement({
    name: "Kensei",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_21",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=21",
    categories: ["Kensei", "ID_FMP_PARAGON_PATH_21"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_452"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_453"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_649"]);
      model.grant(model.elements.id["ID_FMP_POWER_1603"]);
      model.grant(model.elements.id["ID_FMP_POWER_1604"]);
      model.grant(model.elements.id["ID_FMP_POWER_1605"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Knight Commander"] = new engine.RulesElement({
    name: "Knight Commander",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_47",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=47",
    categories: ["Knight Commander", "ID_FMP_PARAGON_PATH_47"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_493"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_494"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_670"]);
      model.grant(model.elements.id["ID_FMP_POWER_1670"]);
      model.grant(model.elements.id["ID_FMP_POWER_1671"]);
      model.grant(model.elements.id["ID_FMP_POWER_1672"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Life-Stealer"] = new engine.RulesElement({
    name: "Life-Stealer",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_38",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=38",
    categories: ["Life-Stealer", "ID_FMP_PARAGON_PATH_38"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_514"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_515"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_682"]);
      model.grant(model.elements.id["ID_FMP_POWER_1697"]);
      model.grant(model.elements.id["ID_FMP_POWER_1698"]);
      model.grant(model.elements.id["ID_FMP_POWER_1699"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Master Infiltrator"] = new engine.RulesElement({
    name: "Master Infiltrator",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_102",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=102",
    categories: ["Master Infiltrator", "ID_FMP_PARAGON_PATH_102"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_658"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_507"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_660"]);
      model.grant(model.elements.id["ID_FMP_POWER_1690"]);
      model.grant(model.elements.id["ID_FMP_POWER_2203"]);
      model.grant(model.elements.id["ID_FMP_POWER_2205"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Paragon Multiclassing"] = new engine.RulesElement({
    name: "Paragon Multiclassing",
    type: "Paragon Path",
    id: "ID_INTERNAL_PARAGON_PATH_PARAGON_MULTICLASSING",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=PATH_PARAGON_MULTICLASSING",
    categories: ["Paragon Multiclassing", "ID_INTERNAL_PARAGON_PATH_PARAGON_MULTICLASSING"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
      model.select('Power', 1, "Paragon Multiclassing", {
        filter: function(model, element) { return (true /* NYI: Filter: $$MULTICLASS */ && element.hasCategory("encounter") && element.hasCategory("7")); }
      });
      model.select('Power', 1, "Paragon Multiclassing", {
        filter: function(model, element) { return (true /* NYI: Filter: $$MULTICLASS */ && element.hasCategory("utility") && element.hasCategory("10")); }
      });
      model.select('Power', 1, "Paragon Multiclassing", {
        filter: function(model, element) { return (true /* NYI: Filter: $$MULTICLASS */ && element.hasCategory("daily") && element.hasCategory("19")); }
      });
      model.statadd("Power Points", 2);
      model.select('Power', 1, "Paragon Multiclassing", {
        filter: function(model, element) { return (true /* NYI: Filter: $$MULTICLASS */ && element.hasCategory("at-will") && element.hasCategory("7")); }
      });
      model.select('Power', 1, "Paragon Multiclassing", {
        filter: function(model, element) { return (true /* NYI: Filter: $$MULTICLASS */ && element.hasCategory("at-will") && element.hasCategory("1")); }
      });
      model.select('Power', 1, "Paragon Multiclassing", {
        filter: function(model, element) { return (true /* NYI: Filter: $$MULTICLASS */ && element.hasCategory("encounter") && element.hasCategory("7")); }
      });
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_SECONDNOTFIRSTPSIONIC"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Pathfinder"] = new engine.RulesElement({
    name: "Pathfinder",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_49",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=49",
    categories: ["Pathfinder", "ID_FMP_PARAGON_PATH_49"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_497"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_498"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_666"]);
      model.grant(model.elements.id["ID_FMP_POWER_1676"]);
      model.grant(model.elements.id["ID_FMP_POWER_1677"]);
      model.grant(model.elements.id["ID_FMP_POWER_1678"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Pit Fighter"] = new engine.RulesElement({
    name: "Pit Fighter",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_99",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=99",
    categories: ["Pit Fighter", "ID_FMP_PARAGON_PATH_99"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_650"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_651"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_652"]);
      model.grant(model.elements.id["ID_FMP_POWER_2195"]);
      model.grant(model.elements.id["ID_FMP_POWER_2196"]);
      model.grant(model.elements.id["ID_FMP_POWER_2198"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Radiant Servant"] = new engine.RulesElement({
    name: "Radiant Servant",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_18",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=18",
    categories: ["Radiant Servant", "ID_FMP_PARAGON_PATH_18"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_447"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_446"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_674"]);
      model.grant(model.elements.id["ID_FMP_POWER_1594"]);
      model.grant(model.elements.id["ID_FMP_POWER_1595"]);
      model.grant(model.elements.id["ID_FMP_POWER_1596"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Shadow Assassin"] = new engine.RulesElement({
    name: "Shadow Assassin",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_103",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=103",
    categories: ["Shadow Assassin", "ID_FMP_PARAGON_PATH_103"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_661"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_662"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_510"]);
      model.grant(model.elements.id["ID_FMP_POWER_1652"]);
      model.grant(model.elements.id["ID_FMP_POWER_1653"]);
      model.grant(model.elements.id["ID_FMP_POWER_1654"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Spellstorm Mage"] = new engine.RulesElement({
    name: "Spellstorm Mage",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_59",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=59",
    categories: ["Spellstorm Mage", "ID_FMP_PARAGON_PATH_59"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_545"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_546"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_651"]);
      model.grant(model.elements.id["ID_FMP_POWER_1755"]);
      model.grant(model.elements.id["ID_FMP_POWER_1756"]);
      model.grant(model.elements.id["ID_FMP_POWER_1757"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Stormwarden"] = new engine.RulesElement({
    name: "Stormwarden",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_51",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=51",
    categories: ["Stormwarden", "ID_FMP_PARAGON_PATH_51"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_499"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_500"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_667"]);
      model.grant(model.elements.id["ID_FMP_POWER_1679"]);
      model.grant(model.elements.id["ID_FMP_POWER_1680"]);
      model.grant(model.elements.id["ID_FMP_POWER_1681"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Sword Marshal"] = new engine.RulesElement({
    name: "Sword Marshal",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_48",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=48",
    categories: ["Sword Marshal", "ID_FMP_PARAGON_PATH_48"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_495"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_496"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_671"]);
      model.grant(model.elements.id["ID_FMP_POWER_1673"]);
      model.grant(model.elements.id["ID_FMP_POWER_1674"]);
      model.grant(model.elements.id["ID_FMP_POWER_1675"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Swordmaster"] = new engine.RulesElement({
    name: "Swordmaster",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_26",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=26",
    categories: ["Swordmaster", "ID_FMP_PARAGON_PATH_26"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_450"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_451"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_653"]);
      model.grant(model.elements.id["ID_FMP_POWER_1600"]);
      model.grant(model.elements.id["ID_FMP_POWER_1601"]);
      model.grant(model.elements.id["ID_FMP_POWER_1602"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Warpriest Paragon Path"] = new engine.RulesElement({
    name: "Warpriest Paragon Path",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_15",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=15",
    categories: ["Warpriest Paragon Path", "ID_FMP_PARAGON_PATH_15"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_436"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_437"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_516"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_651"]);
      model.grant(model.elements.id["ID_FMP_POWER_1583"]);
      model.grant(model.elements.id["ID_FMP_POWER_1584"]);
      model.grant(model.elements.id["ID_FMP_POWER_2779"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Wizard of the Spiral Tower"] = new engine.RulesElement({
    name: "Wizard of the Spiral Tower",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_32",
    source: "Player's Handbook",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=32",
    categories: ["Wizard of the Spiral Tower", "ID_FMP_PARAGON_PATH_32"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_462"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_463"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_686"]);
      model.grant(model.elements.id["ID_FMP_POWER_1620"]);
      model.grant(model.elements.id["ID_FMP_POWER_1621"]);
      model.grant(model.elements.id["ID_FMP_POWER_1622"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
