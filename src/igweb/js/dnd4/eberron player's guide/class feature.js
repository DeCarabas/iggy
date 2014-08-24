(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var class_feature = types['class feature'] || (types['class feature'] = {});
  te = class_feature["Aberrant Bane"] = new RulesElement({
    name: "Aberrant Bane",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1594",
    source: "Eberron Player's Guide",
    categories: ["Aberrant Bane", "ID_FMP_CLASS_FEATURE_1594", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Aberrant Disruption"] = new RulesElement({
    name: "Aberrant Disruption",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1595",
    source: "Eberron Player's Guide",
    categories: ["Aberrant Disruption", "ID_FMP_CLASS_FEATURE_1595", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Accurate Enhancement"] = new RulesElement({
    name: "Accurate Enhancement",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1583",
    source: "Eberron Player's Guide",
    categories: ["Accurate Enhancement", "ID_FMP_CLASS_FEATURE_1583", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Added Resilience"] = new RulesElement({
    name: "Added Resilience",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1603",
    source: "Eberron Player's Guide",
    categories: ["Added Resilience", "ID_FMP_CLASS_FEATURE_1603", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Aggressive Action"] = new RulesElement({
    name: "Aggressive Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1581",
    source: "Eberron Player's Guide",
    categories: ["Aggressive Action", "ID_FMP_CLASS_FEATURE_1581", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Aggressive Action:When you spend an action point to take an extra action, you gain a +1 bonus to weapon attack rolls until the end of your next turn, and your weapon attacks deal 1d6 extra damage until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Alchemical Action"] = new RulesElement({
    name: "Alchemical Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1577",
    source: "Eberron Player's Guide",
    categories: ["Alchemical Action", "ID_FMP_CLASS_FEATURE_1577", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Alchemical Action:When you spend an action point to make an attack with an alchemical item, you gain a bonus to the attack roll equal to your Intelligence modifier.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Alchemical Innovator"] = new RulesElement({
    name: "Alchemical Innovator",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1578",
    source: "Eberron Player's Guide",
    categories: ["Alchemical Innovator", "ID_FMP_CLASS_FEATURE_1578", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Alchemy Master"] = new RulesElement({
    name: "Alchemy Master",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1580",
    source: "Eberron Player's Guide",
    categories: ["Alchemy Master", "ID_FMP_CLASS_FEATURE_1580", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Arcane Empowerment"] = new RulesElement({
    name: "Arcane Empowerment",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1573",
    source: "Eberron Player's Guide,Player's Handbook 3",
    categories: ["Arcane Empowerment", "ID_FMP_CLASS_FEATURE_1573", "ID_FMP_HYBRID_CLASS_536", "Hybrid Artificer", "1"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1574"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1575"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Arcane Rechanneling"] = new RulesElement({
    name: "Arcane Rechanneling",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1606",
    source: "Eberron Player's Guide",
    categories: ["Arcane Rechanneling", "ID_FMP_CLASS_FEATURE_1606", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Arcane Rejuvenation"] = new RulesElement({
    name: "Arcane Rejuvenation",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1576",
    source: "Eberron Player's Guide,Player's Handbook 3",
    categories: ["Arcane Rejuvenation", "ID_FMP_CLASS_FEATURE_1576", "ID_FMP_HYBRID_CLASS_536", "Hybrid Artificer", "1"]
  });
  byID[te.id] = te;
  
  te = class_feature["Argent Vessel"] = new RulesElement({
    name: "Argent Vessel",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1655",
    source: "Eberron Player's Guide",
    categories: ["Argent Vessel", "ID_FMP_CLASS_FEATURE_1655", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Augment Energy"] = new RulesElement({
    name: "Augment Energy",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1575",
    source: "Eberron Player's Guide",
    categories: ["Augment Energy", "ID_FMP_CLASS_FEATURE_1575", "1"]
  });
  byID[te.id] = te;
  
  te = class_feature["Battlefist"] = new RulesElement({
    name: "Battlefist",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1600",
    source: "Eberron Player's Guide",
    categories: ["Battlefist", "ID_FMP_CLASS_FEATURE_1600", "11"],
    rules: function(model) {
      model.statadd("FREEBEE:ID_INTERNAL_WEAPON_BATTLEFIST", 1);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(BATTLEFIST)"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Blindless Sight"] = new RulesElement({
    name: "Blindless Sight",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1623",
    source: "Eberron Player's Guide",
    categories: ["Blindless Sight", "ID_FMP_CLASS_FEATURE_1623", "11"],
    rules: function(model) {
      model.statadd("Perception Misc", 2);
      model.statadd("Initiative Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Bodyguard's Resolve"] = new RulesElement({
    name: "Bodyguard's Resolve",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1608",
    source: "Eberron Player's Guide",
    categories: ["Bodyguard's Resolve", "ID_FMP_CLASS_FEATURE_1608", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Bolstered by Flame"] = new RulesElement({
    name: "Bolstered by Flame",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1591",
    source: "Eberron Player's Guide",
    categories: ["Bolstered by Flame", "ID_FMP_CLASS_FEATURE_1591", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Brutal Enchantment"] = new RulesElement({
    name: "Brutal Enchantment",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1582",
    source: "Eberron Player's Guide",
    categories: ["Brutal Enchantment", "ID_FMP_CLASS_FEATURE_1582", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Burden of Leadership"] = new RulesElement({
    name: "Burden of Leadership",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1649",
    source: "Eberron Player's Guide",
    categories: ["Burden of Leadership", "ID_FMP_CLASS_FEATURE_1649", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Careful Trap-Breaker"] = new RulesElement({
    name: "Careful Trap-Breaker",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1617",
    source: "Eberron Player's Guide",
    categories: ["Careful Trap-Breaker", "ID_FMP_CLASS_FEATURE_1617", "11"],
    rules: function(model) {
      model.statadd("Thievery Misc", function() { /* to delay a trap */ return 5; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Charging Action"] = new RulesElement({
    name: "Charging Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_791",
    source: "Eberron Player's Guide",
    categories: ["Charging Action", "ID_FMP_CLASS_FEATURE_791", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Charging Action:When you spend an action point to make a charge attack, you gain a +2 bonus to speed and to all defenses until the end of your next turn. In addition, you can take further actions after the charge.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Charging Strike"] = new RulesElement({
    name: "Charging Strike",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_792",
    source: "Eberron Player's Guide",
    categories: ["Charging Strike", "ID_FMP_CLASS_FEATURE_792", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Chosen of the Flame"] = new RulesElement({
    name: "Chosen of the Flame",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1654",
    source: "Eberron Player's Guide",
    categories: ["Chosen of the Flame", "ID_FMP_CLASS_FEATURE_1654", "21"]
  });
  byID[te.id] = te;
  
  te = class_feature["Clockwork Coordinated Action"] = new RulesElement({
    name: "Clockwork Coordinated Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1589",
    source: "Eberron Player's Guide",
    categories: ["Clockwork Coordinated Action", "ID_FMP_CLASS_FEATURE_1589", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Clockwork Coordinated Action:When you spend an action point to take an extra action, you also gain two minor actions, which you can use only to command your summoned creatures.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Construct Perfection"] = new RulesElement({
    name: "Construct Perfection",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_793",
    source: "Eberron Player's Guide",
    categories: ["Construct Perfection", "ID_FMP_CLASS_FEATURE_793", "16"],
    rules: function(model) {
      model.statadd("Saving Throws", 2);
      model.statadd("Endurance Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Coordinated Action"] = new RulesElement({
    name: "Coordinated Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1584",
    source: "Eberron Player's Guide",
    categories: ["Coordinated Action", "ID_FMP_CLASS_FEATURE_1584", "11"],
    rules: function(model) {
      model.statadd("ALLY.Action Point", "Coordinated Action:If you have not already spent an action point in the encounter, when an ally spends an action point to take an extra action, you can spend an action point as an immediate reaction. Your action must be taken after your ally has resolved the action from his or her action point");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Critical Justice"] = new RulesElement({
    name: "Critical Justice",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1646",
    source: "Eberron Player's Guide",
    categories: ["Critical Justice", "ID_FMP_CLASS_FEATURE_1646", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Cyran Vengeance"] = new RulesElement({
    name: "Cyran Vengeance",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1653",
    source: "Eberron Player's Guide",
    categories: ["Cyran Vengeance", "ID_FMP_CLASS_FEATURE_1653", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Deneith Mark"] = new RulesElement({
    name: "Deneith Mark",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1609",
    source: "Eberron Player's Guide",
    categories: ["Deneith Mark", "ID_FMP_CLASS_FEATURE_1609", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Driven by Duty"] = new RulesElement({
    name: "Driven by Duty",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1650",
    source: "Eberron Player's Guide",
    categories: ["Driven by Duty", "ID_FMP_CLASS_FEATURE_1650", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Durable Artifice"] = new RulesElement({
    name: "Durable Artifice",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1587",
    source: "Eberron Player's Guide",
    categories: ["Durable Artifice", "ID_FMP_CLASS_FEATURE_1587", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Feather's Touch"] = new RulesElement({
    name: "Feather's Touch",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1621",
    source: "Eberron Player's Guide",
    categories: ["Feather's Touch", "ID_FMP_CLASS_FEATURE_1621", "16"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_1213"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Fortifying Action"] = new RulesElement({
    name: "Fortifying Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1599",
    source: "Eberron Player's Guide",
    categories: ["Fortifying Action", "ID_FMP_CLASS_FEATURE_1599", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Fortifying Action:When you spend an action point to take an extra action, you gain temporary hit points equal to 5 + one-half your level.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Ghallanda's Sanctuary"] = new RulesElement({
    name: "Ghallanda's Sanctuary",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1612",
    source: "Eberron Player's Guide",
    categories: ["Ghallanda's Sanctuary", "ID_FMP_CLASS_FEATURE_1612", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Ghorad'din Action"] = new RulesElement({
    name: "Ghorad'din Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1616",
    source: "Eberron Player's Guide",
    categories: ["Ghorad'din Action", "ID_FMP_CLASS_FEATURE_1616", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Ghorad'din Action:When you spend an action point to take an extra action, you gain a +2 bonus to Thievery checks and Stealth checks until the end of your next turn. You also gain a +2 bonus to AC and to Reflex until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Griffonmaster Action"] = new RulesElement({
    name: "Griffonmaster Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1641",
    source: "Eberron Player's Guide",
    categories: ["Griffonmaster Action", "ID_FMP_CLASS_FEATURE_1641", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Griffonmaster Action:When you spend an action point to make an attack, your Vadalis-bred griffon can take a standard action or a move action after your attack. If the griffon uses the action to attack, the attack deals 1d6 extra damage.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Healing Infusion"] = new RulesElement({
    name: "Healing Infusion",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_862",
    source: "Eberron Player's Guide",
    categories: ["Healing Infusion", "ID_FMP_CLASS_FEATURE_862", "1"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_4128"]);
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_POWER_7635") || element.hasCategory("ID_FMP_POWER_10187")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Healing Savant"] = new RulesElement({
    name: "Healing Savant",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1615",
    source: "Eberron Player's Guide",
    categories: ["Healing Savant", "ID_FMP_CLASS_FEATURE_1615", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Hospitable Surge"] = new RulesElement({
    name: "Hospitable Surge",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1611",
    source: "Eberron Player's Guide",
    categories: ["Hospitable Surge", "ID_FMP_CLASS_FEATURE_1611", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Impart Energy"] = new RulesElement({
    name: "Impart Energy",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1574",
    source: "Eberron Player's Guide",
    categories: ["Impart Energy", "ID_FMP_CLASS_FEATURE_1574", "1"]
  });
  byID[te.id] = te;
  
  te = class_feature["Improved Recovery"] = new RulesElement({
    name: "Improved Recovery",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1614",
    source: "Eberron Player's Guide",
    categories: ["Improved Recovery", "ID_FMP_CLASS_FEATURE_1614", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Item Affinity"] = new RulesElement({
    name: "Item Affinity",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1605",
    source: "Eberron Player's Guide",
    categories: ["Item Affinity", "ID_FMP_CLASS_FEATURE_1605", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Jadehand Action"] = new RulesElement({
    name: "Jadehand Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1613",
    source: "Eberron Player's Guide",
    categories: ["Jadehand Action", "ID_FMP_CLASS_FEATURE_1613", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Jadehand Action:When you spend an action point to use a healing power, you restore extra hit points equal to your Wisdom modifier.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Lead to Victory"] = new RulesElement({
    name: "Lead to Victory",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1648",
    source: "Eberron Player's Guide",
    categories: ["Lead to Victory", "ID_FMP_CLASS_FEATURE_1648", "21"]
  });
  byID[te.id] = te;
  
  te = class_feature["Lightwalker Action"] = new RulesElement({
    name: "Lightwalker Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1596",
    source: "Eberron Player's Guide",
    categories: ["Lightwalker Action", "ID_FMP_CLASS_FEATURE_1596", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Lightwalker Action:When you spend an action point to use a radiant power, you or one ally within 5 squares of you regains hit points equal to one-half your level.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Master Burglar"] = new RulesElement({
    name: "Master Burglar",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1618",
    source: "Eberron Player's Guide",
    categories: ["Master Burglar", "ID_FMP_CLASS_FEATURE_1618", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Mastermaker Action"] = new RulesElement({
    name: "Mastermaker Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1604",
    source: "Eberron Player's Guide",
    categories: ["Mastermaker Action", "ID_FMP_CLASS_FEATURE_1604", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Mastermaker Action:When you spend an action point to take an extra action, one of your expended magic item daily powers recharges.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Medani Targeting"] = new RulesElement({
    name: "Medani Targeting",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1624",
    source: "Eberron Player's Guide",
    categories: ["Medani Targeting", "ID_FMP_CLASS_FEATURE_1624", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Memory of Cyre"] = new RulesElement({
    name: "Memory of Cyre",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1652",
    source: "Eberron Player's Guide",
    categories: ["Memory of Cyre", "ID_FMP_CLASS_FEATURE_1652", "24"],
    rules: function(model) {
      model.statadd("Action Point", "Memory of Cyre:When you spend an action point to take an extra action, any nonconstruct, non-undead enemy adjacent to you takes a -2 penalty to attack rolls and all defenses (save ends).");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Mind Fire"] = new RulesElement({
    name: "Mind Fire",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1629",
    source: "Eberron Player's Guide",
    categories: ["Mind Fire", "ID_FMP_CLASS_FEATURE_1629", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["More Metal Than Flesh"] = new RulesElement({
    name: "More Metal Than Flesh",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1602",
    source: "Eberron Player's Guide",
    categories: ["More Metal Than Flesh", "ID_FMP_CLASS_FEATURE_1602", "16"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_INTERNAL_CAN_USE_COMPONENTS"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Mournland Dedicate"] = new RulesElement({
    name: "Mournland Dedicate",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1651",
    source: "Eberron Player's Guide",
    categories: ["Mournland Dedicate", "ID_FMP_CLASS_FEATURE_1651", "21"]
  });
  byID[te.id] = te;
  
  te = class_feature["Phantasmist Action"] = new RulesElement({
    name: "Phantasmist Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1628",
    source: "Eberron Player's Guide",
    categories: ["Phantasmist Action", "ID_FMP_CLASS_FEATURE_1628", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Phantasmist Action:When you spend an action point to take an extra action, you or one ally within 3 squares of you becomes invisible until the start of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Phase-Mist Shroud"] = new RulesElement({
    name: "Phase-Mist Shroud",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1630",
    source: "Eberron Player's Guide",
    categories: ["Phase-Mist Shroud", "ID_FMP_CLASS_FEATURE_1630", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Power Focus"] = new RulesElement({
    name: "Power Focus",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1586",
    source: "Eberron Player's Guide",
    categories: ["Power Focus", "ID_FMP_CLASS_FEATURE_1586", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Prophetic Blessing"] = new RulesElement({
    name: "Prophetic Blessing",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1644",
    source: "Eberron Player's Guide",
    categories: ["Prophetic Blessing", "ID_FMP_CLASS_FEATURE_1644", "21"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("Prophetic Blessing Physical"); }
      });
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("Prophetic Blessing Mental"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Prophetic Blessing Charisma"] = new RulesElement({
    name: "Prophetic Blessing Charisma",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_PROPHETIC_BLESSING_CHARISMA",
    source: "Eberron Player's Guide",
    categories: ["Prophetic Blessing Charisma", "ID_INTERNAL_CLASS_FEATURE_PROPHETIC_BLESSING_CHARISMA", "Prophetic Blessing Mental"],
    rules: function(model) {
      model.statadd("Charisma", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Prophetic Blessing Constitution"] = new RulesElement({
    name: "Prophetic Blessing Constitution",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_PROPHETIC_BLESSING_CONSTITUTION",
    source: "Eberron Player's Guide",
    categories: ["Prophetic Blessing Constitution", "ID_INTERNAL_CLASS_FEATURE_PROPHETIC_BLESSING_CONSTITUTION", "Prophetic Blessing Physical"],
    rules: function(model) {
      model.statadd("Constitution", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Prophetic Blessing Dexterity"] = new RulesElement({
    name: "Prophetic Blessing Dexterity",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_PROPHETIC_BLESSING_DEXTERITY",
    source: "Eberron Player's Guide",
    categories: ["Prophetic Blessing Dexterity", "ID_INTERNAL_CLASS_FEATURE_PROPHETIC_BLESSING_DEXTERITY", "Prophetic Blessing Physical"],
    rules: function(model) {
      model.statadd("Dexterity", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Prophetic Blessing Intelligence"] = new RulesElement({
    name: "Prophetic Blessing Intelligence",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_PROPHETIC_BLESSING_INTELLIGENCE",
    source: "Eberron Player's Guide",
    categories: ["Prophetic Blessing Intelligence", "ID_INTERNAL_CLASS_FEATURE_PROPHETIC_BLESSING_INTELLIGENCE", "Prophetic Blessing Mental"],
    rules: function(model) {
      model.statadd("Intelligence", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Prophetic Blessing Strength"] = new RulesElement({
    name: "Prophetic Blessing Strength",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_PROPHETIC_BLESSING_STRENGTH",
    source: "Eberron Player's Guide",
    categories: ["Prophetic Blessing Strength", "ID_INTERNAL_CLASS_FEATURE_PROPHETIC_BLESSING_STRENGTH", "Prophetic Blessing Physical"],
    rules: function(model) {
      model.statadd("Strength", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Prophetic Blessing Wisdom"] = new RulesElement({
    name: "Prophetic Blessing Wisdom",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_PROPHETIC_BLESSING_WISDOM",
    source: "Eberron Player's Guide",
    categories: ["Prophetic Blessing Wisdom", "ID_INTERNAL_CLASS_FEATURE_PROPHETIC_BLESSING_WISDOM", "Prophetic Blessing Mental"],
    rules: function(model) {
      model.statadd("Wisdom", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Prophetic Renewal"] = new RulesElement({
    name: "Prophetic Renewal",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1647",
    source: "Eberron Player's Guide",
    categories: ["Prophetic Renewal", "ID_FMP_CLASS_FEATURE_1647", "30"],
    rules: function(model) {
      model.statadd("Action Point", "Prophetic Renewal:Whenever you reach a milestone, you can regain the use of an expended daily attack power instead of gaining an action point");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Quarry's Arrest"] = new RulesElement({
    name: "Quarry's Arrest",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1636",
    source: "Eberron Player's Guide",
    categories: ["Quarry's Arrest", "ID_FMP_CLASS_FEATURE_1636", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Radiant Renewal"] = new RulesElement({
    name: "Radiant Renewal",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1598",
    source: "Eberron Player's Guide",
    categories: ["Radiant Renewal", "ID_FMP_CLASS_FEATURE_1598", "16"],
    rules: function(model) {
      model.statadd("resist:radiant", 10, "resist");
      model.statadd("resist:psychic", 10, "resist");
      model.statadd("resist:radiant", 10);
      model.statadd("resist:psychic", 10);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Resolute Action"] = new RulesElement({
    name: "Resolute Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1593",
    source: "Eberron Player's Guide",
    categories: ["Resolute Action", "ID_FMP_CLASS_FEATURE_1593", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Resolute Action:When you spend an action point to take an extra action, you gain resist 20 psychic until the end of your next turn. In addition, you and each ally adjacent to you can make a saving throw against any psychic effects.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Resourceful Alchemist"] = new RulesElement({
    name: "Resourceful Alchemist",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1579",
    source: "Eberron Player's Guide",
    categories: ["Resourceful Alchemist", "ID_FMP_CLASS_FEATURE_1579", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Sentinel Action"] = new RulesElement({
    name: "Sentinel Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1607",
    source: "Eberron Player's Guide",
    categories: ["Sentinel Action", "ID_FMP_CLASS_FEATURE_1607", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Sentinel Action:When you spend an action point to take an extra action, you mark each enemy that is adjacent to you when you complete that action. The mark lasts until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Shadow Wound"] = new RulesElement({
    name: "Shadow Wound",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1640",
    source: "Eberron Player's Guide",
    categories: ["Shadow Wound", "ID_FMP_CLASS_FEATURE_1640", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Shadow-Fade Action"] = new RulesElement({
    name: "Shadow-Fade Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1638",
    source: "Eberron Player's Guide",
    categories: ["Shadow-Fade Action", "ID_FMP_CLASS_FEATURE_1638", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Shadow-Fade Action:When you spend an action point to take an extra action, you become invisible until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Shifting Skill"] = new RulesElement({
    name: "Shifting Skill",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1585",
    source: "Eberron Player's Guide",
    categories: ["Shifting Skill", "ID_FMP_CLASS_FEATURE_1585", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Silver Exorcism"] = new RulesElement({
    name: "Silver Exorcism",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1592",
    source: "Eberron Player's Guide",
    categories: ["Silver Exorcism", "ID_FMP_CLASS_FEATURE_1592", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Silver Flame Action"] = new RulesElement({
    name: "Silver Flame Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1590",
    source: "Eberron Player's Guide",
    categories: ["Silver Flame Action", "ID_FMP_CLASS_FEATURE_1590", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Silver Flame Action:When you spend an action point to take an extra action, your attacks deal 2d6 extra fire and radiant damage until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Storm Adept"] = new RulesElement({
    name: "Storm Adept",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1620",
    source: "Eberron Player's Guide",
    categories: ["Storm Adept", "ID_FMP_CLASS_FEATURE_1620", "11"],
    rules: function(model) {
      model.statadd("lightning:attack", 1, "Storm Adept");
      model.statadd("lightning:damage", function() { return model.stat("MINONEMOD(Constitution)"); }, "Storm Adept");
      model.statadd("thunder:attack", 1, "Storm Adept");
      model.statadd("thunder:damage", function() { return model.stat("MINONEMOD(Constitution)"); }, "Storm Adept");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Superior Minions"] = new RulesElement({
    name: "Superior Minions",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1588",
    source: "Eberron Player's Guide",
    categories: ["Superior Minions", "ID_FMP_CLASS_FEATURE_1588", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Supernal Linguist"] = new RulesElement({
    name: "Supernal Linguist",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1632",
    source: "Eberron Player's Guide",
    categories: ["Supernal Linguist", "ID_FMP_CLASS_FEATURE_1632", "11"],
    rules: function(model) {
      model.statadd("Arcana Misc", function() { /* to knowledge checks */ return 2; }, "item");
      model.statadd("Dungeoneering Misc", function() { /* to knowledge checks */ return 2; }, "item");
      model.statadd("Nature Misc", function() { /* to knowledge checks */ return 2; }, "item");
      model.statadd("Religion Misc", function() { /* to knowledge checks */ return 2; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Supporting Construction"] = new RulesElement({
    name: "Supporting Construction",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1601",
    source: "Eberron Player's Guide",
    categories: ["Supporting Construction", "ID_FMP_CLASS_FEATURE_1601", "11"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against ongoing damage */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Swift Action"] = new RulesElement({
    name: "Swift Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1610",
    source: "Eberron Player's Guide",
    categories: ["Swift Action", "ID_FMP_CLASS_FEATURE_1610", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Swift Action:When you spend an action point to take an extra action, each ally within 5 squares of you can shift 1 square as a free action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Swift Foot"] = new RulesElement({
    name: "Swift Foot",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1627",
    source: "Eberron Player's Guide",
    categories: ["Swift Foot", "ID_FMP_CLASS_FEATURE_1627", "16"],
    rules: function(model) {
      model.statadd("Speed", 1);
      model.statadd("AC", function() { /* against opportunity attacks */ return 1; });
      model.statadd("Reflex Defense", function() { /* against opportunity attacks */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Swiftblade Action"] = new RulesElement({
    name: "Swiftblade Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1625",
    source: "Eberron Player's Guide",
    categories: ["Swiftblade Action", "ID_FMP_CLASS_FEATURE_1625", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Swiftblade Action:When you spend an action point, you can teleport your speed as a move action until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Thuranni Silence"] = new RulesElement({
    name: "Thuranni Silence",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1639",
    source: "Eberron Player's Guide",
    categories: ["Thuranni Silence", "ID_FMP_CLASS_FEATURE_1639", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["True Word Healing"] = new RulesElement({
    name: "True Word Healing",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1634",
    source: "Eberron Player's Guide",
    categories: ["True Word Healing", "ID_FMP_CLASS_FEATURE_1634", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Truenamer Action"] = new RulesElement({
    name: "Truenamer Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1631",
    source: "Eberron Player's Guide",
    categories: ["Truenamer Action", "ID_FMP_CLASS_FEATURE_1631", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Truenamer Action:When you spend an action point to take an extra action, you regain the use of Channel Divinity or Arcane Implement Mastery.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Trueseer Action"] = new RulesElement({
    name: "Trueseer Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1622",
    source: "Eberron Player's Guide",
    categories: ["Trueseer Action", "ID_FMP_CLASS_FEATURE_1622", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Trueseer Action:When you spend an action point to take an extra action, any enemy you can see grants combat advantage to you until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Unstoppable"] = new RulesElement({
    name: "Unstoppable",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1848",
    source: "Eberron Player's Guide",
    categories: ["Unstoppable", "ID_FMP_CLASS_FEATURE_1848", "16"],
    rules: function(model) {
      model.statadd("Action Point", "Unstoppable:When you spend an action point, you can make a saving throw.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Unstoppable Prophecy"] = new RulesElement({
    name: "Unstoppable Prophecy",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1645",
    source: "Eberron Player's Guide",
    categories: ["Unstoppable Prophecy", "ID_FMP_CLASS_FEATURE_1645", "21"]
  });
  byID[te.id] = te;
  
  te = class_feature["Vadalis Griffon"] = new RulesElement({
    name: "Vadalis Griffon",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1642",
    source: "Eberron Player's Guide",
    categories: ["Vadalis Griffon", "ID_FMP_CLASS_FEATURE_1642", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Vadalis Ritual Techniques"] = new RulesElement({
    name: "Vadalis Ritual Techniques",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1643",
    source: "Eberron Player's Guide",
    categories: ["Vadalis Ritual Techniques", "ID_FMP_CLASS_FEATURE_1643", "16"],
    rules: function(model) {
      model.statadd("FREEBEE:ID_FMP_RITUAL_41", 1);
      model.statadd("FREEBEE:ID_FMP_RITUAL_26", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Vigilant Sprinter"] = new RulesElement({
    name: "Vigilant Sprinter",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1626",
    source: "Eberron Player's Guide",
    categories: ["Vigilant Sprinter", "ID_FMP_CLASS_FEATURE_1626", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Walk the Bright Path"] = new RulesElement({
    name: "Walk the Bright Path",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1597",
    source: "Eberron Player's Guide",
    categories: ["Walk the Bright Path", "ID_FMP_CLASS_FEATURE_1597", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Wayfinder Action"] = new RulesElement({
    name: "Wayfinder Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1635",
    source: "Eberron Player's Guide",
    categories: ["Wayfinder Action", "ID_FMP_CLASS_FEATURE_1635", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Wayfinder Action:When you spend an action point to make an attack against an enemy you've designated as your quarry, you can shift your speed after the attack roll.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Wayfinder's Quarry"] = new RulesElement({
    name: "Wayfinder's Quarry",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1637",
    source: "Eberron Player's Guide",
    categories: ["Wayfinder's Quarry", "ID_FMP_CLASS_FEATURE_1637", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Wind-Rider Action"] = new RulesElement({
    name: "Wind-Rider Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1619",
    source: "Eberron Player's Guide",
    categories: ["Wind-Rider Action", "ID_FMP_CLASS_FEATURE_1619", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Wind-Rider Action:When you spend an action point to take an extra action, you gain a fly speed equal to your speed (and can hover) until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Word of Life"] = new RulesElement({
    name: "Word of Life",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1633",
    source: "Eberron Player's Guide",
    categories: ["Word of Life", "ID_FMP_CLASS_FEATURE_1633", "11"],
    rules: function(model) {
      model.statadd("Healing Surge Value", function() { return model.stat("Intelligence modifier"); }, "Word of Life");
      model.statadd("Healing Surge Value", function() { return model.stat("Charisma modifier"); }, "Word of Life");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Wrath of Silver Flame"] = new RulesElement({
    name: "Wrath of Silver Flame",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1656",
    source: "Eberron Player's Guide",
    categories: ["Wrath of Silver Flame", "ID_FMP_CLASS_FEATURE_1656", "30"],
    rules: function(model) {
      model.statadd("radiant:damage", "+2d6");
      model.statadd("fire:damage", "+2d6");
    }
  });
  byID[te.id] = te;
  
  
})(this);
