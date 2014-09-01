define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Feat = types['Feat'] || (types['Feat'] = {});
  te = Feat["Arcana Ward"] = new engine.RulesElement({
    name: "Arcana Ward",
    type: "Feat",
    id: "ID_FMP_FEAT_1425",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1425",
    categories: ["Arcana Ward", "ID_FMP_FEAT_1425", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_8173"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Armor of Burning Wrath"] = new engine.RulesElement({
    name: "Armor of Burning Wrath",
    type: "Feat",
    id: "ID_FMP_FEAT_1488",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1488",
    categories: ["Armor of Burning Wrath", "ID_FMP_FEAT_1488"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Armor of Vengeance"] = new engine.RulesElement({
    name: "Armor of Vengeance",
    type: "Feat",
    id: "ID_FMP_FEAT_1489",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1489",
    categories: ["Armor of Vengeance", "ID_FMP_FEAT_1489"]
  });
  byID[te.id] = te;
  
  te = Feat["Armored by Faith"] = new engine.RulesElement({
    name: "Armored by Faith",
    type: "Feat",
    id: "ID_FMP_FEAT_1564",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1564",
    categories: ["Armored by Faith", "ID_FMP_FEAT_1564"]
  });
  byID[te.id] = te;
  
  te = Feat["Astral Enmity"] = new engine.RulesElement({
    name: "Astral Enmity",
    type: "Feat",
    id: "ID_FMP_FEAT_1490",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1490",
    categories: ["Astral Enmity", "ID_FMP_FEAT_1490"]
  });
  byID[te.id] = te;
  
  te = Feat["Astral Preservation"] = new engine.RulesElement({
    name: "Astral Preservation",
    type: "Feat",
    id: "ID_FMP_FEAT_1491",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1491",
    categories: ["Astral Preservation", "ID_FMP_FEAT_1491"]
  });
  byID[te.id] = te;
  
  te = Feat["Avenging Allure"] = new engine.RulesElement({
    name: "Avenging Allure",
    type: "Feat",
    id: "ID_FMP_FEAT_1492",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1492",
    categories: ["Avenging Allure", "ID_FMP_FEAT_1492"]
  });
  byID[te.id] = te;
  
  te = Feat["Avenging Opportunist"] = new engine.RulesElement({
    name: "Avenging Opportunist",
    type: "Feat",
    id: "ID_FMP_FEAT_1493",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1493",
    categories: ["Avenging Opportunist", "ID_FMP_FEAT_1493"]
  });
  byID[te.id] = te;
  
  te = Feat["Avenging Surge"] = new engine.RulesElement({
    name: "Avenging Surge",
    type: "Feat",
    id: "ID_FMP_FEAT_1565",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1565",
    categories: ["Avenging Surge", "ID_FMP_FEAT_1565"]
  });
  byID[te.id] = te;
  
  te = Feat["Baleful Malediction"] = new engine.RulesElement({
    name: "Baleful Malediction",
    type: "Feat",
    id: "ID_FMP_FEAT_1494",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1494",
    categories: ["Baleful Malediction", "ID_FMP_FEAT_1494"]
  });
  byID[te.id] = te;
  
  te = Feat["Battle Healer"] = new engine.RulesElement({
    name: "Battle Healer",
    type: "Feat",
    id: "ID_FMP_FEAT_1495",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1495",
    categories: ["Battle Healer", "ID_FMP_FEAT_1495"]
  });
  byID[te.id] = te;
  
  te = Feat["Beatific Healer"] = new engine.RulesElement({
    name: "Beatific Healer",
    type: "Feat",
    id: "ID_FMP_FEAT_1593",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1593",
    categories: ["Beatific Healer", "ID_FMP_FEAT_1593"]
  });
  byID[te.id] = te;
  
  te = Feat["Blessed Scoundrel"] = new engine.RulesElement({
    name: "Blessed Scoundrel",
    type: "Feat",
    id: "ID_FMP_FEAT_1496",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1496",
    categories: ["Blessed Scoundrel", "ID_FMP_FEAT_1496"]
  });
  byID[te.id] = te;
  
  te = Feat["Blessed Shifter"] = new engine.RulesElement({
    name: "Blessed Shifter",
    type: "Feat",
    id: "ID_FMP_FEAT_1497",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1497",
    categories: ["Blessed Shifter", "ID_FMP_FEAT_1497"]
  });
  byID[te.id] = te;
  
  te = Feat["Blessing of Avandra"] = new engine.RulesElement({
    name: "Blessing of Avandra",
    type: "Feat",
    id: "ID_FMP_FEAT_1498",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1498",
    categories: ["Blessing of Avandra", "ID_FMP_FEAT_1498"]
  });
  byID[te.id] = te;
  
  te = Feat["Blessing of Corellon"] = new engine.RulesElement({
    name: "Blessing of Corellon",
    type: "Feat",
    id: "ID_FMP_FEAT_1499",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1499",
    categories: ["Blessing of Corellon", "ID_FMP_FEAT_1499"]
  });
  byID[te.id] = te;
  
  te = Feat["Breath of Life"] = new engine.RulesElement({
    name: "Breath of Life",
    type: "Feat",
    id: "ID_FMP_FEAT_1500",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1500",
    categories: ["Breath of Life", "ID_FMP_FEAT_1500"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Brilliant Darkfire"] = new engine.RulesElement({
    name: "Brilliant Darkfire",
    type: "Feat",
    id: "ID_FMP_FEAT_1501",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1501",
    categories: ["Brilliant Darkfire", "ID_FMP_FEAT_1501"]
  });
  byID[te.id] = te;
  
  te = Feat["Censure's Grip"] = new engine.RulesElement({
    name: "Censure's Grip",
    type: "Feat",
    id: "ID_FMP_FEAT_1566",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1566",
    categories: ["Censure's Grip", "ID_FMP_FEAT_1566"]
  });
  byID[te.id] = te;
  
  te = Feat["Channel Might"] = new engine.RulesElement({
    name: "Channel Might",
    type: "Feat",
    id: "ID_FMP_FEAT_1502",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1502",
    categories: ["Channel Might", "ID_FMP_FEAT_1502"]
  });
  byID[te.id] = te;
  
  te = Feat["Channel of Faith"] = new engine.RulesElement({
    name: "Channel of Faith",
    type: "Feat",
    id: "ID_FMP_FEAT_1622",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1622",
    categories: ["Channel of Faith", "ID_FMP_FEAT_1622", "ID_INTERNAL_CATEGORY_MULTICLASS_CLERIC", "Multiclass Cleric", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1589"]);
      model.grant(model.elements.id["ID_FMP_POWER_146"]);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_CHANNEL_DIVINITY"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Channel of Invocation"] = new engine.RulesElement({
    name: "Channel of Invocation",
    type: "Feat",
    id: "ID_FMP_FEAT_1623",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1623",
    categories: ["Channel of Invocation", "ID_FMP_FEAT_1623", "ID_INTERNAL_CATEGORY_MULTICLASS_INVOKER", "Multiclass Invoker", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5184"]);
      model.grant(model.elements.id["ID_FMP_POWER_5185"]);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_CHANNEL_DIVINITY"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Channel of Valor"] = new engine.RulesElement({
    name: "Channel of Valor",
    type: "Feat",
    id: "ID_FMP_FEAT_1624",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1624",
    categories: ["Channel of Valor", "ID_FMP_FEAT_1624", "ID_INTERNAL_CATEGORY_MULTICLASS_PALADIN", "Multiclass Paladin", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1746"]);
      model.grant(model.elements.id["ID_FMP_POWER_1747"]);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_CHANNEL_DIVINITY"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Channel of Vengeance"] = new engine.RulesElement({
    name: "Channel of Vengeance",
    type: "Feat",
    id: "ID_FMP_FEAT_1625",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1625",
    categories: ["Channel of Vengeance", "ID_FMP_FEAT_1625", "ID_INTERNAL_CATEGORY_MULTICLASS_AVENGER", "Multiclass Avenger", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5330"]);
      model.grant(model.elements.id["ID_FMP_POWER_5331"]);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_CHANNEL_DIVINITY"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Clarity of Spirit"] = new engine.RulesElement({
    name: "Clarity of Spirit",
    type: "Feat",
    id: "ID_FMP_FEAT_1503",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1503",
    categories: ["Clarity of Spirit", "ID_FMP_FEAT_1503"]
  });
  byID[te.id] = te;
  
  te = Feat["Clinging Radiance"] = new engine.RulesElement({
    name: "Clinging Radiance",
    type: "Feat",
    id: "ID_FMP_FEAT_1567",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1567",
    categories: ["Clinging Radiance", "ID_FMP_FEAT_1567"]
  });
  byID[te.id] = te;
  
  te = Feat["Closing Pledge"] = new engine.RulesElement({
    name: "Closing Pledge",
    type: "Feat",
    id: "ID_FMP_FEAT_1504",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1504",
    categories: ["Closing Pledge", "ID_FMP_FEAT_1504"]
  });
  byID[te.id] = te;
  
  te = Feat["Contagious Challenge"] = new engine.RulesElement({
    name: "Contagious Challenge",
    type: "Feat",
    id: "ID_FMP_FEAT_1568",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1568",
    categories: ["Contagious Challenge", "ID_FMP_FEAT_1568"]
  });
  byID[te.id] = te;
  
  te = Feat["Crusading Wrath"] = new engine.RulesElement({
    name: "Crusading Wrath",
    type: "Feat",
    id: "ID_FMP_FEAT_1594",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1594",
    categories: ["Crusading Wrath", "ID_FMP_FEAT_1594"]
  });
  byID[te.id] = te;
  
  te = Feat["Cycle of Change"] = new engine.RulesElement({
    name: "Cycle of Change",
    type: "Feat",
    id: "ID_FMP_FEAT_1427",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1427",
    categories: ["Cycle of Change", "ID_FMP_FEAT_1427", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_8174"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Darkfire Vitality"] = new engine.RulesElement({
    name: "Darkfire Vitality",
    type: "Feat",
    id: "ID_FMP_FEAT_1505",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1505",
    categories: ["Darkfire Vitality", "ID_FMP_FEAT_1505"]
  });
  byID[te.id] = te;
  
  te = Feat["Darkfoe"] = new engine.RulesElement({
    name: "Darkfoe",
    type: "Feat",
    id: "ID_FMP_FEAT_1569",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1569",
    categories: ["Darkfoe", "ID_FMP_FEAT_1569"]
  });
  byID[te.id] = te;
  
  te = Feat["Darkness Consumes"] = new engine.RulesElement({
    name: "Darkness Consumes",
    type: "Feat",
    id: "ID_FMP_FEAT_1430",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1430",
    categories: ["Darkness Consumes", "ID_FMP_FEAT_1430", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_8175"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Deadly Rebuke"] = new engine.RulesElement({
    name: "Deadly Rebuke",
    type: "Feat",
    id: "ID_FMP_FEAT_1506",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1506",
    categories: ["Deadly Rebuke", "ID_FMP_FEAT_1506"]
  });
  byID[te.id] = te;
  
  te = Feat["Death Knell"] = new engine.RulesElement({
    name: "Death Knell",
    type: "Feat",
    id: "ID_FMP_FEAT_1432",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1432",
    categories: ["Death Knell", "ID_FMP_FEAT_1432", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_8176"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Defensive Grace"] = new engine.RulesElement({
    name: "Defensive Grace",
    type: "Feat",
    id: "ID_FMP_FEAT_1507",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1507",
    categories: ["Defensive Grace", "ID_FMP_FEAT_1507"]
  });
  byID[te.id] = te;
  
  te = Feat["Defensive Healing Word"] = new engine.RulesElement({
    name: "Defensive Healing Word",
    type: "Feat",
    id: "ID_FMP_FEAT_1508",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1508",
    categories: ["Defensive Healing Word", "ID_FMP_FEAT_1508"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Demonbane"] = new engine.RulesElement({
    name: "Demonbane",
    type: "Feat",
    id: "ID_FMP_FEAT_1509",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1509",
    categories: ["Demonbane", "ID_FMP_FEAT_1509"]
  });
  byID[te.id] = te;
  
  te = Feat["Demonbane Malediction"] = new engine.RulesElement({
    name: "Demonbane Malediction",
    type: "Feat",
    id: "ID_FMP_FEAT_1510",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1510",
    categories: ["Demonbane Malediction", "ID_FMP_FEAT_1510"]
  });
  byID[te.id] = te;
  
  te = Feat["Devastating Invocation"] = new engine.RulesElement({
    name: "Devastating Invocation",
    type: "Feat",
    id: "ID_FMP_FEAT_1595",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1595",
    categories: ["Devastating Invocation", "ID_FMP_FEAT_1595"]
  });
  byID[te.id] = te;
  
  te = Feat["Devilbane"] = new engine.RulesElement({
    name: "Devilbane",
    type: "Feat",
    id: "ID_FMP_FEAT_1511",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1511",
    categories: ["Devilbane", "ID_FMP_FEAT_1511"]
  });
  byID[te.id] = te;
  
  te = Feat["Devoted Paladin"] = new engine.RulesElement({
    name: "Devoted Paladin",
    type: "Feat",
    id: "ID_FMP_FEAT_1512",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1512",
    categories: ["Devoted Paladin", "ID_FMP_FEAT_1512"],
    rules: function(model) {
      model.statadd("Healing Surges", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Devout Guidance"] = new engine.RulesElement({
    name: "Devout Guidance",
    type: "Feat",
    id: "ID_FMP_FEAT_1570",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1570",
    categories: ["Devout Guidance", "ID_FMP_FEAT_1570"]
  });
  byID[te.id] = te;
  
  te = Feat["Divine Approval"] = new engine.RulesElement({
    name: "Divine Approval",
    type: "Feat",
    id: "ID_FMP_FEAT_1513",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1513",
    categories: ["Divine Approval", "ID_FMP_FEAT_1513"]
  });
  byID[te.id] = te;
  
  te = Feat["Divine Assault"] = new engine.RulesElement({
    name: "Divine Assault",
    type: "Feat",
    id: "ID_FMP_FEAT_1514",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1514",
    categories: ["Divine Assault", "ID_FMP_FEAT_1514"]
  });
  byID[te.id] = te;
  
  te = Feat["Divine Channeler"] = new engine.RulesElement({
    name: "Divine Channeler",
    type: "Feat",
    id: "ID_FMP_FEAT_1627",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1627",
    categories: ["Divine Channeler", "ID_FMP_FEAT_1627", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass"],
    rules: function(model) {
      model.select('Power', 1, "Divine Channeler", {
        filter: function(model, element) { return (true /* NYI: Filter: $$NOT_CLASS */ && element.hasCategory("ID_FMP_CLASS_FEATURE_324")); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_CHANNEL_DIVINITY"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Divine Channeler (Avenger)"] = new engine.RulesElement({
    name: "Divine Channeler (Avenger)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_DIVINE_CHANNELER_(AVENGER)",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=FEAT_DIVINE_CHANNELER_(AVENGER)",
    categories: ["Divine Channeler (Avenger)", "ID_INTERNAL_FEAT_DIVINE_CHANNELER_(AVENGER)", "ID_INTERNAL_CATEGORY_MULTICLASS_AVENGER", "Multiclass Avenger", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.select('Power', 1, "Divine Channeler (Avenger)", {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_129") && element.hasCategory("ID_FMP_CLASS_FEATURE_324")); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_CHANNEL_DIVINITY"]);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_AVENGER"]);
      model.grant(model.elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Divine Channeler (Cleric)"] = new engine.RulesElement({
    name: "Divine Channeler (Cleric)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_DIVINE_CHANNELER_(CLERIC)",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=FEAT_DIVINE_CHANNELER_(CLERIC)",
    categories: ["Divine Channeler (Cleric)", "ID_INTERNAL_FEAT_DIVINE_CHANNELER_(CLERIC)", "ID_INTERNAL_CATEGORY_MULTICLASS_CLERIC", "Multiclass Cleric", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.select('Power', 1, "Divine Channeler (Cleric)", {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_2") && element.hasCategory("ID_FMP_CLASS_FEATURE_324")); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_CHANNEL_DIVINITY"]);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_CLERIC"]);
      model.grant(model.elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Divine Channeler (Invoker)"] = new engine.RulesElement({
    name: "Divine Channeler (Invoker)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_DIVINE_CHANNELER_(INVOKER)",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=FEAT_DIVINE_CHANNELER_(INVOKER)",
    categories: ["Divine Channeler (Invoker)", "ID_INTERNAL_FEAT_DIVINE_CHANNELER_(INVOKER)", "ID_INTERNAL_CATEGORY_MULTICLASS_INVOKER", "Multiclass Invoker", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.select('Power', 1, "Divine Channeler (Invoker)", {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_127") && element.hasCategory("ID_FMP_CLASS_FEATURE_324")); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_CHANNEL_DIVINITY"]);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_INVOKER"]);
      model.grant(model.elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Divine Channeler (Paladin)"] = new engine.RulesElement({
    name: "Divine Channeler (Paladin)",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_DIVINE_CHANNELER_(PALADIN)",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=FEAT_DIVINE_CHANNELER_(PALADIN)",
    categories: ["Divine Channeler (Paladin)", "ID_INTERNAL_FEAT_DIVINE_CHANNELER_(PALADIN)", "ID_INTERNAL_CATEGORY_MULTICLASS_PALADIN", "Multiclass Paladin", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.select('Power', 1, "Divine Channeler (Paladin)", {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_4") && element.hasCategory("ID_FMP_CLASS_FEATURE_324")); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASFEATURE_CHANNEL_DIVINITY"]);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_PALADIN"]);
      model.grant(model.elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Divine Cleansing"] = new engine.RulesElement({
    name: "Divine Cleansing",
    type: "Feat",
    id: "ID_FMP_FEAT_1571",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1571",
    categories: ["Divine Cleansing", "ID_FMP_FEAT_1571"]
  });
  byID[te.id] = te;
  
  te = Feat["Divine Distraction"] = new engine.RulesElement({
    name: "Divine Distraction",
    type: "Feat",
    id: "ID_FMP_FEAT_1515",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1515",
    categories: ["Divine Distraction", "ID_FMP_FEAT_1515"],
    rules: function(model) {
      model.statadd("Divine Distraction", 1);
      model.statadd("Divine Distraction", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Divine Excellence"] = new engine.RulesElement({
    name: "Divine Excellence",
    type: "Feat",
    id: "ID_FMP_FEAT_1462",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1462",
    categories: ["Divine Excellence", "ID_FMP_FEAT_1462", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_8192"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Divine Healer"] = new engine.RulesElement({
    name: "Divine Healer",
    type: "Feat",
    id: "ID_FMP_FEAT_1628",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1628",
    categories: ["Divine Healer", "ID_FMP_FEAT_1628", "ID_INTERNAL_CATEGORY_MULTICLASS_CLERIC", "Multiclass Cleric", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_SKILL_TRAINING_HEAL"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_395"]);
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_CLERIC_IMPLEMENTS"]);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_CLERIC"]);
      model.grant(model.elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Divine Health"] = new engine.RulesElement({
    name: "Divine Health",
    type: "Feat",
    id: "ID_FMP_FEAT_1596",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1596",
    categories: ["Divine Health", "ID_FMP_FEAT_1596"],
    rules: function(model) {
      model.statadd("Divine Health", function() { return model.stat("HALF-LEVEL"); });
      model.statadd("Divine Health", function() { return model.stat("Wisdom modifier"); });
      model.statadd("resist:poison", function() { return model.stat("Divine Health"); }, "resist");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Divine Mastery"] = new engine.RulesElement({
    name: "Divine Mastery",
    type: "Feat",
    id: "ID_FMP_FEAT_129",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=129",
    categories: ["Divine Mastery", "ID_FMP_FEAT_129"],
    rules: function(model) {
      model.statadd("Action Point", "Divine Mastery:When you spend an action point to take an extra action, you also regain the use of a divine encounter power you have used during this encounter.");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Divine Perseverance"] = new engine.RulesElement({
    name: "Divine Perseverance",
    type: "Feat",
    id: "ID_FMP_FEAT_1516",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1516",
    categories: ["Divine Perseverance", "ID_FMP_FEAT_1516"]
  });
  byID[te.id] = te;
  
  te = Feat["Divine Secretkeeper"] = new engine.RulesElement({
    name: "Divine Secretkeeper",
    type: "Feat",
    id: "ID_FMP_FEAT_1629",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1629",
    categories: ["Divine Secretkeeper", "ID_FMP_FEAT_1629", "ID_INTERNAL_CATEGORY_MULTICLASS_INVOKER", "Multiclass Invoker", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.select('Skill Training', 1, "Divine Secretkeeper", {
        filter: function(model, element) { return ((element.hasCategory("ID_FMP_SKILL_2") || element.hasCategory("ID_FMP_SKILL_11")) || element.hasCategory("ID_FMP_SKILL_18")); }
      });
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_683"]);
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_INVOKER_IMPLEMENTS"]);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_INVOKER"]);
      model.grant(model.elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Draconic Challenge"] = new engine.RulesElement({
    name: "Draconic Challenge",
    type: "Feat",
    id: "ID_FMP_FEAT_1517",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1517",
    categories: ["Draconic Challenge", "ID_FMP_FEAT_1517"]
  });
  byID[te.id] = te;
  
  te = Feat["Dwarf Battle Priest"] = new engine.RulesElement({
    name: "Dwarf Battle Priest",
    type: "Feat",
    id: "ID_FMP_FEAT_1518",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1518",
    categories: ["Dwarf Battle Priest", "ID_FMP_FEAT_1518"]
  });
  byID[te.id] = te;
  
  te = Feat["Eager for Blood"] = new engine.RulesElement({
    name: "Eager for Blood",
    type: "Feat",
    id: "ID_FMP_FEAT_1572",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1572",
    categories: ["Eager for Blood", "ID_FMP_FEAT_1572"]
  });
  byID[te.id] = te;
  
  te = Feat["Earth Hold"] = new engine.RulesElement({
    name: "Earth Hold",
    type: "Feat",
    id: "ID_FMP_FEAT_1435",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1435",
    categories: ["Earth Hold", "ID_FMP_FEAT_1435", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_8179"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Elemental Blessing"] = new engine.RulesElement({
    name: "Elemental Blessing",
    type: "Feat",
    id: "ID_FMP_FEAT_1519",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1519",
    categories: ["Elemental Blessing", "ID_FMP_FEAT_1519"]
  });
  byID[te.id] = te;
  
  te = Feat["Elemental Challenge"] = new engine.RulesElement({
    name: "Elemental Challenge",
    type: "Feat",
    id: "ID_FMP_FEAT_1520",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1520",
    categories: ["Elemental Challenge", "ID_FMP_FEAT_1520"]
  });
  byID[te.id] = te;
  
  te = Feat["Elemental Rebuke"] = new engine.RulesElement({
    name: "Elemental Rebuke",
    type: "Feat",
    id: "ID_FMP_FEAT_1521",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1521",
    categories: ["Elemental Rebuke", "ID_FMP_FEAT_1521"]
  });
  byID[te.id] = te;
  
  te = Feat["Enmity Shared"] = new engine.RulesElement({
    name: "Enmity Shared",
    type: "Feat",
    id: "ID_FMP_FEAT_1598",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1598",
    categories: ["Enmity Shared", "ID_FMP_FEAT_1598"]
  });
  byID[te.id] = te;
  
  te = Feat["Epic Turning"] = new engine.RulesElement({
    name: "Epic Turning",
    type: "Feat",
    id: "ID_FMP_FEAT_1599",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1599",
    categories: ["Epic Turning", "ID_FMP_FEAT_1599"]
  });
  byID[te.id] = te;
  
  te = Feat["Evade and Strike"] = new engine.RulesElement({
    name: "Evade and Strike",
    type: "Feat",
    id: "ID_FMP_FEAT_1522",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1522",
    categories: ["Evade and Strike", "ID_FMP_FEAT_1522"]
  });
  byID[te.id] = te;
  
  te = Feat["Extended Healing"] = new engine.RulesElement({
    name: "Extended Healing",
    type: "Feat",
    id: "ID_FMP_FEAT_1573",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1573",
    categories: ["Extended Healing", "ID_FMP_FEAT_1573"]
  });
  byID[te.id] = te;
  
  te = Feat["Fate Rolls On"] = new engine.RulesElement({
    name: "Fate Rolls On",
    type: "Feat",
    id: "ID_FMP_FEAT_1437",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1437",
    categories: ["Fate Rolls On", "ID_FMP_FEAT_1437", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_8180"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Fearsome Wrath"] = new engine.RulesElement({
    name: "Fearsome Wrath",
    type: "Feat",
    id: "ID_FMP_FEAT_1523",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1523",
    categories: ["Fearsome Wrath", "ID_FMP_FEAT_1523"]
  });
  byID[te.id] = te;
  
  te = Feat["Fey Fate"] = new engine.RulesElement({
    name: "Fey Fate",
    type: "Feat",
    id: "ID_FMP_FEAT_1524",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1524",
    categories: ["Fey Fate", "ID_FMP_FEAT_1524"]
  });
  byID[te.id] = te;
  
  te = Feat["Fey Preserver"] = new engine.RulesElement({
    name: "Fey Preserver",
    type: "Feat",
    id: "ID_FMP_FEAT_1525",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1525",
    categories: ["Fey Preserver", "ID_FMP_FEAT_1525"]
  });
  byID[te.id] = te;
  
  te = Feat["Feyborn Fortune"] = new engine.RulesElement({
    name: "Feyborn Fortune",
    type: "Feat",
    id: "ID_FMP_FEAT_1526",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1526",
    categories: ["Feyborn Fortune", "ID_FMP_FEAT_1526"]
  });
  byID[te.id] = te;
  
  te = Feat["Feyborn Pursuer"] = new engine.RulesElement({
    name: "Feyborn Pursuer",
    type: "Feat",
    id: "ID_FMP_FEAT_1527",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1527",
    categories: ["Feyborn Pursuer", "ID_FMP_FEAT_1527"]
  });
  byID[te.id] = te;
  
  te = Feat["Fickle Servant"] = new engine.RulesElement({
    name: "Fickle Servant",
    type: "Feat",
    id: "ID_FMP_FEAT_1528",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1528",
    categories: ["Fickle Servant", "ID_FMP_FEAT_1528"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_ALL_DOMAINS"]);
      model.statadd("Religion Misc", 3, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Fist of Heaven"] = new engine.RulesElement({
    name: "Fist of Heaven",
    type: "Feat",
    id: "ID_FMP_FEAT_1600",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1600",
    categories: ["Fist of Heaven", "ID_FMP_FEAT_1600"]
  });
  byID[te.id] = te;
  
  te = Feat["Focused Wrath"] = new engine.RulesElement({
    name: "Focused Wrath",
    type: "Feat",
    id: "ID_FMP_FEAT_1574",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1574",
    categories: ["Focused Wrath", "ID_FMP_FEAT_1574"]
  });
  byID[te.id] = te;
  
  te = Feat["Footsteps of Doom"] = new engine.RulesElement({
    name: "Footsteps of Doom",
    type: "Feat",
    id: "ID_FMP_FEAT_1575",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1575",
    categories: ["Footsteps of Doom", "ID_FMP_FEAT_1575"]
  });
  byID[te.id] = te;
  
  te = Feat["Forceful Covenant"] = new engine.RulesElement({
    name: "Forceful Covenant",
    type: "Feat",
    id: "ID_FMP_FEAT_1576",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1576",
    categories: ["Forceful Covenant", "ID_FMP_FEAT_1576"]
  });
  byID[te.id] = te;
  
  te = Feat["Furious Devotion"] = new engine.RulesElement({
    name: "Furious Devotion",
    type: "Feat",
    id: "ID_FMP_FEAT_1529",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1529",
    categories: ["Furious Devotion", "ID_FMP_FEAT_1529"]
  });
  byID[te.id] = te;
  
  te = Feat["Glorious Channeler"] = new engine.RulesElement({
    name: "Glorious Channeler",
    type: "Feat",
    id: "ID_FMP_FEAT_1601",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1601",
    categories: ["Glorious Channeler", "ID_FMP_FEAT_1601"]
  });
  byID[te.id] = te;
  
  te = Feat["Grasp of the Wild"] = new engine.RulesElement({
    name: "Grasp of the Wild",
    type: "Feat",
    id: "ID_FMP_FEAT_1485",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1485",
    categories: ["Grasp of the Wild", "ID_FMP_FEAT_1485", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_8203"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Great Malediction"] = new engine.RulesElement({
    name: "Great Malediction",
    type: "Feat",
    id: "ID_FMP_FEAT_1602",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1602",
    categories: ["Great Malediction", "ID_FMP_FEAT_1602"]
  });
  byID[te.id] = te;
  
  te = Feat["Greater Fortune"] = new engine.RulesElement({
    name: "Greater Fortune",
    type: "Feat",
    id: "ID_FMP_FEAT_1577",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1577",
    categories: ["Greater Fortune", "ID_FMP_FEAT_1577"]
  });
  byID[te.id] = te;
  
  te = Feat["Group Defense"] = new engine.RulesElement({
    name: "Group Defense",
    type: "Feat",
    id: "ID_FMP_FEAT_1530",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1530",
    categories: ["Group Defense", "ID_FMP_FEAT_1530"]
  });
  byID[te.id] = te;
  
  te = Feat["Guiding Rebuke"] = new engine.RulesElement({
    name: "Guiding Rebuke",
    type: "Feat",
    id: "ID_FMP_FEAT_1603",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1603",
    categories: ["Guiding Rebuke", "ID_FMP_FEAT_1603"]
  });
  byID[te.id] = te;
  
  te = Feat["Healer's Implement"] = new engine.RulesElement({
    name: "Healer's Implement",
    type: "Feat",
    id: "ID_FMP_FEAT_1531",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1531",
    categories: ["Healer's Implement", "ID_FMP_FEAT_1531"]
  });
  byID[te.id] = te;
  
  te = Feat["Healing Step"] = new engine.RulesElement({
    name: "Healing Step",
    type: "Feat",
    id: "ID_FMP_FEAT_1532",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1532",
    categories: ["Healing Step", "ID_FMP_FEAT_1532"]
  });
  byID[te.id] = te;
  
  te = Feat["Heavenly Torrent"] = new engine.RulesElement({
    name: "Heavenly Torrent",
    type: "Feat",
    id: "ID_FMP_FEAT_1604",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1604",
    categories: ["Heavenly Torrent", "ID_FMP_FEAT_1604"]
  });
  byID[te.id] = te;
  
  te = Feat["Hero of Faith"] = new engine.RulesElement({
    name: "Hero of Faith",
    type: "Feat",
    id: "ID_FMP_FEAT_1630",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1630",
    categories: ["Hero of Faith", "ID_FMP_FEAT_1630", "ID_INTERNAL_CATEGORY_MULTICLASS_AVENGER", "Multiclass Avenger", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.select('Skill Training', 1, "Hero of Faith", {
        filter: function(model, element) { return element.hasCategory("Avenger Class"); }
      });
      model.grant(model.elements.id["ID_FMP_POWER_3069"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_AVENGER_IMPLEMENTS"]);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_AVENGER"]);
      model.grant(model.elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Hidden Channeling"] = new engine.RulesElement({
    name: "Hidden Channeling",
    type: "Feat",
    id: "ID_FMP_FEAT_1533",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1533",
    categories: ["Hidden Channeling", "ID_FMP_FEAT_1533"]
  });
  byID[te.id] = te;
  
  te = Feat["Holy Resolve"] = new engine.RulesElement({
    name: "Holy Resolve",
    type: "Feat",
    id: "ID_FMP_FEAT_1534",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1534",
    categories: ["Holy Resolve", "ID_FMP_FEAT_1534"]
  });
  byID[te.id] = te;
  
  te = Feat["Holy Savagery"] = new engine.RulesElement({
    name: "Holy Savagery",
    type: "Feat",
    id: "ID_FMP_FEAT_1535",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1535",
    categories: ["Holy Savagery", "ID_FMP_FEAT_1535"]
  });
  byID[te.id] = te;
  
  te = Feat["Holy Speech"] = new engine.RulesElement({
    name: "Holy Speech",
    type: "Feat",
    id: "ID_FMP_FEAT_1536",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1536",
    categories: ["Holy Speech", "ID_FMP_FEAT_1536"]
  });
  byID[te.id] = te;
  
  te = Feat["Honored Foe"] = new engine.RulesElement({
    name: "Honored Foe",
    type: "Feat",
    id: "ID_FMP_FEAT_1578",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1578",
    categories: ["Honored Foe", "ID_FMP_FEAT_1578"]
  });
  byID[te.id] = te;
  
  te = Feat["Hope Remains"] = new engine.RulesElement({
    name: "Hope Remains",
    type: "Feat",
    id: "ID_FMP_FEAT_1441",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1441",
    categories: ["Hope Remains", "ID_FMP_FEAT_1441", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_8182"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Icon of Hope"] = new engine.RulesElement({
    name: "Icon of Hope",
    type: "Feat",
    id: "ID_FMP_FEAT_1605",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1605",
    categories: ["Icon of Hope", "ID_FMP_FEAT_1605"]
  });
  byID[te.id] = te;
  
  te = Feat["Icon of Purity"] = new engine.RulesElement({
    name: "Icon of Purity",
    type: "Feat",
    id: "ID_FMP_FEAT_1606",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1606",
    categories: ["Icon of Purity", "ID_FMP_FEAT_1606"],
    rules: function(model) {
      model.statadd("Icon of Purity", function() { return model.stat("HALF-LEVEL"); });
      model.statadd("Icon of Purity", function() { return model.stat("Wisdom modifier"); });
      model.statadd("resist:necrotic", function() { return model.stat("Icon of Purity"); }, "resist");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Imminent Luck"] = new engine.RulesElement({
    name: "Imminent Luck",
    type: "Feat",
    id: "ID_FMP_FEAT_1450",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1450",
    categories: ["Imminent Luck", "ID_FMP_FEAT_1450", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_8186"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Indiscriminate Wrath"] = new engine.RulesElement({
    name: "Indiscriminate Wrath",
    type: "Feat",
    id: "ID_FMP_FEAT_1607",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1607",
    categories: ["Indiscriminate Wrath", "ID_FMP_FEAT_1607"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Infernal Blessing"] = new engine.RulesElement({
    name: "Infernal Blessing",
    type: "Feat",
    id: "ID_FMP_FEAT_1537",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1537",
    categories: ["Infernal Blessing", "ID_FMP_FEAT_1537"]
  });
  byID[te.id] = te;
  
  te = Feat["Infernal Malediction"] = new engine.RulesElement({
    name: "Infernal Malediction",
    type: "Feat",
    id: "ID_FMP_FEAT_1538",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1538",
    categories: ["Infernal Malediction", "ID_FMP_FEAT_1538"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Invigorating Critical"] = new engine.RulesElement({
    name: "Invigorating Critical",
    type: "Feat",
    id: "ID_FMP_FEAT_1579",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1579",
    categories: ["Invigorating Critical", "ID_FMP_FEAT_1579"]
  });
  byID[te.id] = te;
  
  te = Feat["Invoke Resilience"] = new engine.RulesElement({
    name: "Invoke Resilience",
    type: "Feat",
    id: "ID_FMP_FEAT_1539",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1539",
    categories: ["Invoke Resilience", "ID_FMP_FEAT_1539"]
  });
  byID[te.id] = te;
  
  te = Feat["Invoke Teamwork"] = new engine.RulesElement({
    name: "Invoke Teamwork",
    type: "Feat",
    id: "ID_FMP_FEAT_1540",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1540",
    categories: ["Invoke Teamwork", "ID_FMP_FEAT_1540"]
  });
  byID[te.id] = te;
  
  te = Feat["Invoker's Aura"] = new engine.RulesElement({
    name: "Invoker's Aura",
    type: "Feat",
    id: "ID_FMP_FEAT_1608",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1608",
    categories: ["Invoker's Aura", "ID_FMP_FEAT_1608"]
  });
  byID[te.id] = te;
  
  te = Feat["Invoker's Blaze"] = new engine.RulesElement({
    name: "Invoker's Blaze",
    type: "Feat",
    id: "ID_FMP_FEAT_1580",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1580",
    categories: ["Invoker's Blaze", "ID_FMP_FEAT_1580"],
    rules: function(model) {
      model.statadd("divine,fire:damage", 2, "Feat");
      model.statadd("divine,radiant:damage", 2, "Feat");
      model.statadd("divine,fire:damage", 3, "Feat");
      model.statadd("divine,radiant:damage", 3, "Feat");
      model.statadd("Invoker's Blaze", 4);
      model.statadd("Invoker's Blaze", 2);
      model.statadd("divine,fire:damage", function() { /* while you are bloodied */ return model.stat("Invoker's Blaze"); }, "Feat");
      model.statadd("divine,radiant:damage", function() { /* while you are bloodied */ return model.stat("Invoker's Blaze"); }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Invoker's Control"] = new engine.RulesElement({
    name: "Invoker's Control",
    type: "Feat",
    id: "ID_FMP_FEAT_1581",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1581",
    categories: ["Invoker's Control", "ID_FMP_FEAT_1581"]
  });
  byID[te.id] = te;
  
  te = Feat["Kord's Resilience"] = new engine.RulesElement({
    name: "Kord's Resilience",
    type: "Feat",
    id: "ID_FMP_FEAT_1541",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1541",
    categories: ["Kord's Resilience", "ID_FMP_FEAT_1541"]
  });
  byID[te.id] = te;
  
  te = Feat["Loving Sacrifice"] = new engine.RulesElement({
    name: "Loving Sacrifice",
    type: "Feat",
    id: "ID_FMP_FEAT_1448",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1448",
    categories: ["Loving Sacrifice", "ID_FMP_FEAT_1448", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_8185"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Majestic Presence"] = new engine.RulesElement({
    name: "Majestic Presence",
    type: "Feat",
    id: "ID_FMP_FEAT_1542",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1542",
    categories: ["Majestic Presence", "ID_FMP_FEAT_1542"]
  });
  byID[te.id] = te;
  
  te = Feat["Mark of the Infernal"] = new engine.RulesElement({
    name: "Mark of the Infernal",
    type: "Feat",
    id: "ID_FMP_FEAT_1543",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1543",
    categories: ["Mark of the Infernal", "ID_FMP_FEAT_1543"]
  });
  byID[te.id] = te;
  
  te = Feat["Master of Tyranny"] = new engine.RulesElement({
    name: "Master of Tyranny",
    type: "Feat",
    id: "ID_FMP_FEAT_1477",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1477",
    categories: ["Master of Tyranny", "ID_FMP_FEAT_1477", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_8199"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Merciful Power"] = new engine.RulesElement({
    name: "Merciful Power",
    type: "Feat",
    id: "ID_FMP_FEAT_1582",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1582",
    categories: ["Merciful Power", "ID_FMP_FEAT_1582"]
  });
  byID[te.id] = te;
  
  te = Feat["Mighty Challenge"] = new engine.RulesElement({
    name: "Mighty Challenge",
    type: "Feat",
    id: "ID_FMP_FEAT_1544",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1544",
    categories: ["Mighty Challenge", "ID_FMP_FEAT_1544"],
    rules: function(model) {
      model.statadd("Divine Challenge:damage", function() { return model.stat("Strength modifier"); });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Moon Touched"] = new engine.RulesElement({
    name: "Moon Touched",
    type: "Feat",
    id: "ID_FMP_FEAT_1454",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1454",
    categories: ["Moon Touched", "ID_FMP_FEAT_1454", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_8188"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Nimbus of Light"] = new engine.RulesElement({
    name: "Nimbus of Light",
    type: "Feat",
    id: "ID_FMP_FEAT_1545",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1545",
    categories: ["Nimbus of Light", "ID_FMP_FEAT_1545"]
  });
  byID[te.id] = te;
  
  te = Feat["Oath Strike"] = new engine.RulesElement({
    name: "Oath Strike",
    type: "Feat",
    id: "ID_FMP_FEAT_1546",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1546",
    categories: ["Oath Strike", "ID_FMP_FEAT_1546"]
  });
  byID[te.id] = te;
  
  te = Feat["Original Poison"] = new engine.RulesElement({
    name: "Original Poison",
    type: "Feat",
    id: "ID_FMP_FEAT_1456",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1456",
    categories: ["Original Poison", "ID_FMP_FEAT_1456", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_8189"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Pacifist Healer"] = new engine.RulesElement({
    name: "Pacifist Healer",
    type: "Feat",
    id: "ID_FMP_FEAT_1547",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1547",
    categories: ["Pacifist Healer", "ID_FMP_FEAT_1547"]
  });
  byID[te.id] = te;
  
  te = Feat["Paladin's Truth"] = new engine.RulesElement({
    name: "Paladin's Truth",
    type: "Feat",
    id: "ID_FMP_FEAT_1609",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1609",
    categories: ["Paladin's Truth", "ID_FMP_FEAT_1609"]
  });
  byID[te.id] = te;
  
  te = Feat["Path of Destruction"] = new engine.RulesElement({
    name: "Path of Destruction",
    type: "Feat",
    id: "ID_FMP_FEAT_1706",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1706",
    categories: ["Path of Destruction", "ID_FMP_FEAT_1706", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_8178"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Path of Freedom"] = new engine.RulesElement({
    name: "Path of Freedom",
    type: "Feat",
    id: "ID_FMP_FEAT_1439",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1439",
    categories: ["Path of Freedom", "ID_FMP_FEAT_1439", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_8181"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Path of War"] = new engine.RulesElement({
    name: "Path of War",
    type: "Feat",
    id: "ID_FMP_FEAT_1483",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1483",
    categories: ["Path of War", "ID_FMP_FEAT_1483", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_8202"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Path of Winter"] = new engine.RulesElement({
    name: "Path of Winter",
    type: "Feat",
    id: "ID_FMP_FEAT_1487",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1487",
    categories: ["Path of Winter", "ID_FMP_FEAT_1487", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_8204"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Perfect Torment"] = new engine.RulesElement({
    name: "Perfect Torment",
    type: "Feat",
    id: "ID_FMP_FEAT_1472",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1472",
    categories: ["Perfect Torment", "ID_FMP_FEAT_1472", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_8197"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Persistent Challenge"] = new engine.RulesElement({
    name: "Persistent Challenge",
    type: "Feat",
    id: "ID_FMP_FEAT_1583",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1583",
    categories: ["Persistent Challenge", "ID_FMP_FEAT_1583"]
  });
  byID[te.id] = te;
  
  te = Feat["Pervasive Light"] = new engine.RulesElement({
    name: "Pervasive Light",
    type: "Feat",
    id: "ID_FMP_FEAT_1584",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1584",
    categories: ["Pervasive Light", "ID_FMP_FEAT_1584"]
  });
  byID[te.id] = te;
  
  te = Feat["Pious Champion"] = new engine.RulesElement({
    name: "Pious Champion",
    type: "Feat",
    id: "ID_FMP_FEAT_1610",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1610",
    categories: ["Pious Champion", "ID_FMP_FEAT_1610"]
  });
  byID[te.id] = te;
  
  te = Feat["Pledge of Retribution"] = new engine.RulesElement({
    name: "Pledge of Retribution",
    type: "Feat",
    id: "ID_FMP_FEAT_1585",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1585",
    categories: ["Pledge of Retribution", "ID_FMP_FEAT_1585"]
  });
  byID[te.id] = te;
  
  te = Feat["Power of Arcana"] = new engine.RulesElement({
    name: "Power of Arcana",
    type: "Feat",
    id: "ID_FMP_FEAT_1424",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1424",
    categories: ["Power of Arcana", "ID_FMP_FEAT_1424", "ID_INTERNAL_CATEGORY_DOMAIN", "Domain"],
    rules: function(model) {
      model.statadd("Arcana Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Power of Change"] = new engine.RulesElement({
    name: "Power of Change",
    type: "Feat",
    id: "ID_FMP_FEAT_1426",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1426",
    categories: ["Power of Change", "ID_FMP_FEAT_1426", "ID_INTERNAL_CATEGORY_DOMAIN", "Domain"],
    rules: function(model) {
      model.statadd("Thievery Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Power of Creation"] = new engine.RulesElement({
    name: "Power of Creation",
    type: "Feat",
    id: "ID_FMP_FEAT_1361",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1361",
    categories: ["Power of Creation", "ID_FMP_FEAT_1361", "ID_INTERNAL_CATEGORY_DOMAIN", "Domain"],
    rules: function(model) {
      model.statadd("Religion Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Power of Darkness"] = new engine.RulesElement({
    name: "Power of Darkness",
    type: "Feat",
    id: "ID_FMP_FEAT_1429",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1429",
    categories: ["Power of Darkness", "ID_FMP_FEAT_1429", "ID_INTERNAL_CATEGORY_DOMAIN", "Domain"],
    rules: function(model) {
      model.statadd("Stealth Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Power of Death"] = new engine.RulesElement({
    name: "Power of Death",
    type: "Feat",
    id: "ID_FMP_FEAT_1431",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1431",
    categories: ["Power of Death", "ID_FMP_FEAT_1431", "ID_INTERNAL_CATEGORY_DOMAIN", "Domain"],
    rules: function(model) {
      model.statadd("Religion Misc", 2, "Feat");
      model.statadd("ID_FMP_FEAT_1431 association:damage", function() { /* against a bloodied enemy */ return 2; });
      model.statadd("Power of Death", 1);
      model.statadd("Power of Death", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Power of Destruction"] = new engine.RulesElement({
    name: "Power of Destruction",
    type: "Feat",
    id: "ID_FMP_FEAT_1433",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1433",
    categories: ["Power of Destruction", "ID_FMP_FEAT_1433", "ID_INTERNAL_CATEGORY_DOMAIN", "Domain"],
    rules: function(model) {
      model.statadd("Intimidate Misc", 2, "Feat");
      model.statadd("ID_FMP_FEAT_1433 association:damage", function() { /* against an unbloodied enemy */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Power of Earth"] = new engine.RulesElement({
    name: "Power of Earth",
    type: "Feat",
    id: "ID_FMP_FEAT_1434",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1434",
    categories: ["Power of Earth", "ID_FMP_FEAT_1434", "ID_INTERNAL_CATEGORY_DOMAIN", "Domain"],
    rules: function(model) {
      model.statadd("Athletics Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Power of Fate"] = new engine.RulesElement({
    name: "Power of Fate",
    type: "Feat",
    id: "ID_FMP_FEAT_1436",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1436",
    categories: ["Power of Fate", "ID_FMP_FEAT_1436", "ID_INTERNAL_CATEGORY_DOMAIN", "Domain"],
    rules: function(model) {
      model.statadd("Insight Misc", 2, "Feat");
      model.statadd("ID_FMP_FEAT_1436 association:attack", function() { /* against a bloodied enemy */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Power of Freedom"] = new engine.RulesElement({
    name: "Power of Freedom",
    type: "Feat",
    id: "ID_FMP_FEAT_1438",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1438",
    categories: ["Power of Freedom", "ID_FMP_FEAT_1438", "ID_INTERNAL_CATEGORY_DOMAIN", "Domain"],
    rules: function(model) {
      model.statadd("Acrobatics Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Power of Hope"] = new engine.RulesElement({
    name: "Power of Hope",
    type: "Feat",
    id: "ID_FMP_FEAT_1440",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1440",
    categories: ["Power of Hope", "ID_FMP_FEAT_1440", "ID_INTERNAL_CATEGORY_DOMAIN", "Domain"],
    rules: function(model) {
      model.statadd("Diplomacy Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Power of Knowledge"] = new engine.RulesElement({
    name: "Power of Knowledge",
    type: "Feat",
    id: "ID_FMP_FEAT_1443",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1443",
    categories: ["Power of Knowledge", "ID_FMP_FEAT_1443", "ID_INTERNAL_CATEGORY_DOMAIN", "Domain"],
    rules: function(model) {
      model.statadd("History Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Power of Life"] = new engine.RulesElement({
    name: "Power of Life",
    type: "Feat",
    id: "ID_FMP_FEAT_1445",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1445",
    categories: ["Power of Life", "ID_FMP_FEAT_1445", "ID_INTERNAL_CATEGORY_DOMAIN", "Domain"],
    rules: function(model) {
      model.statadd("Heal Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Power of Love"] = new engine.RulesElement({
    name: "Power of Love",
    type: "Feat",
    id: "ID_FMP_FEAT_1447",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1447",
    categories: ["Power of Love", "ID_FMP_FEAT_1447", "ID_INTERNAL_CATEGORY_DOMAIN", "Domain"],
    rules: function(model) {
      model.statadd("Diplomacy Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Power of Luck"] = new engine.RulesElement({
    name: "Power of Luck",
    type: "Feat",
    id: "ID_FMP_FEAT_1449",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1449",
    categories: ["Power of Luck", "ID_FMP_FEAT_1449", "ID_INTERNAL_CATEGORY_DOMAIN", "Domain"],
    rules: function(model) {
      model.statadd("Acrobatics Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Power of Madness"] = new engine.RulesElement({
    name: "Power of Madness",
    type: "Feat",
    id: "ID_FMP_FEAT_1451",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1451",
    categories: ["Power of Madness", "ID_FMP_FEAT_1451", "ID_INTERNAL_CATEGORY_DOMAIN", "Domain"],
    rules: function(model) {
      model.statadd("Bluff Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Power of Poison"] = new engine.RulesElement({
    name: "Power of Poison",
    type: "Feat",
    id: "ID_FMP_FEAT_1455",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1455",
    categories: ["Power of Poison", "ID_FMP_FEAT_1455", "ID_INTERNAL_CATEGORY_DOMAIN", "Domain"],
    rules: function(model) {
      model.statadd("Bluff Misc", 2, "Feat");
      model.statadd("ID_FMP_FEAT_1455 association:damage", function() { /* if you change the damage type to poison */ return 2; });
      model.statadd("ID_FMP_FEAT_1455 association:damage", function() { /* if you change the damage type to poison */ return 1; });
      model.statadd("ID_FMP_FEAT_1455 association:damage", function() { /* if you change the damage type to poison */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Power of Protection"] = new engine.RulesElement({
    name: "Power of Protection",
    type: "Feat",
    id: "ID_FMP_FEAT_1457",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1457",
    categories: ["Power of Protection", "ID_FMP_FEAT_1457", "ID_INTERNAL_CATEGORY_DOMAIN", "Domain"],
    rules: function(model) {
      model.statadd("Heal Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Power of Skill"] = new engine.RulesElement({
    name: "Power of Skill",
    type: "Feat",
    id: "ID_FMP_FEAT_1461",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1461",
    categories: ["Power of Skill", "ID_FMP_FEAT_1461", "ID_INTERNAL_CATEGORY_DOMAIN", "Domain"],
    rules: function(model) {
      model.statadd("Acrobatics Misc", 1, "Feat");
      model.statadd("Arcana Misc", 1, "Feat");
      model.statadd("Athletics Misc", 1, "Feat");
      model.statadd("Bluff Misc", 1, "Feat");
      model.statadd("Diplomacy Misc", 1, "Feat");
      model.statadd("Dungeoneering Misc", 1, "Feat");
      model.statadd("Endurance Misc", 1, "Feat");
      model.statadd("Heal Misc", 1, "Feat");
      model.statadd("History Misc", 1, "Feat");
      model.statadd("Insight Misc", 1, "Feat");
      model.statadd("Intimidate Misc", 1, "Feat");
      model.statadd("Nature Misc", 1, "Feat");
      model.statadd("Perception Misc", 1, "Feat");
      model.statadd("Religion Misc", 1, "Feat");
      model.statadd("Stealth Misc", 1, "Feat");
      model.statadd("Streetwise Misc", 1, "Feat");
      model.statadd("Thievery Misc", 1, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Power of Strength"] = new engine.RulesElement({
    name: "Power of Strength",
    type: "Feat",
    id: "ID_FMP_FEAT_1465",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1465",
    categories: ["Power of Strength", "ID_FMP_FEAT_1465", "ID_INTERNAL_CATEGORY_DOMAIN", "Domain"],
    rules: function(model) {
      model.statadd("Athletics Misc", 2, "Feat");
      model.statadd("Power of Strength", 2);
      model.statadd("ID_FMP_FEAT_1465 association:damage", function() { return model.stat("Power of Strength"); });
      model.statadd("Power of Strength", 1);
      model.statadd("Power of Strength", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Power of Strife"] = new engine.RulesElement({
    name: "Power of Strife",
    type: "Feat",
    id: "ID_FMP_FEAT_1467",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1467",
    categories: ["Power of Strife", "ID_FMP_FEAT_1467", "ID_INTERNAL_CATEGORY_DOMAIN", "Domain"],
    rules: function(model) {
      model.statadd("Bluff Misc", 2, "Feat");
      model.statadd("Power of Strife", 1);
      model.statadd("Power of Strife", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Power of the Moon"] = new engine.RulesElement({
    name: "Power of the Moon",
    type: "Feat",
    id: "ID_FMP_FEAT_1453",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1453",
    categories: ["Power of the Moon", "ID_FMP_FEAT_1453", "ID_INTERNAL_CATEGORY_DOMAIN", "Domain"],
    rules: function(model) {
      model.statadd("Perception Misc", 1, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Power of the Sea"] = new engine.RulesElement({
    name: "Power of the Sea",
    type: "Feat",
    id: "ID_FMP_FEAT_1459",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1459",
    categories: ["Power of the Sea", "ID_FMP_FEAT_1459", "ID_INTERNAL_CATEGORY_DOMAIN", "Domain"],
    rules: function(model) {
      model.statadd("Athletics Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Power of the Storm"] = new engine.RulesElement({
    name: "Power of the Storm",
    type: "Feat",
    id: "ID_FMP_FEAT_1463",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1463",
    categories: ["Power of the Storm", "ID_FMP_FEAT_1463", "ID_INTERNAL_CATEGORY_DOMAIN", "Domain"],
    rules: function(model) {
      model.statadd("Intimidate Misc", 2, "Feat");
      model.statadd("ID_FMP_FEAT_1463 association:damage", function() { /* if you change the damage type to thunder */ return 2; });
      model.statadd("ID_FMP_FEAT_1463 association:damage", function() { /* if you change the damage type to thunder */ return 1; });
      model.statadd("ID_FMP_FEAT_1463 association:damage", function() { /* if you change the damage type to thunder */ return 1; });
      model.statadd("Power of the Storm", 1);
      model.statadd("Power of the Storm", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Power of the Sun"] = new engine.RulesElement({
    name: "Power of the Sun",
    type: "Feat",
    id: "ID_FMP_FEAT_1469",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1469",
    categories: ["Power of the Sun", "ID_FMP_FEAT_1469", "ID_INTERNAL_CATEGORY_DOMAIN", "Domain"],
    rules: function(model) {
      model.statadd("Insight Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Power of the Wilderness"] = new engine.RulesElement({
    name: "Power of the Wilderness",
    type: "Feat",
    id: "ID_FMP_FEAT_1484",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1484",
    categories: ["Power of the Wilderness", "ID_FMP_FEAT_1484", "ID_INTERNAL_CATEGORY_DOMAIN", "Domain"],
    rules: function(model) {
      model.statadd("Nature Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Power of Torment"] = new engine.RulesElement({
    name: "Power of Torment",
    type: "Feat",
    id: "ID_FMP_FEAT_1471",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1471",
    categories: ["Power of Torment", "ID_FMP_FEAT_1471", "ID_INTERNAL_CATEGORY_DOMAIN", "Domain"],
    rules: function(model) {
      model.statadd("Intimidate Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Power of Trickery"] = new engine.RulesElement({
    name: "Power of Trickery",
    type: "Feat",
    id: "ID_FMP_FEAT_1473",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1473",
    categories: ["Power of Trickery", "ID_FMP_FEAT_1473", "ID_INTERNAL_CATEGORY_DOMAIN", "Domain"],
    rules: function(model) {
      model.statadd("Thievery Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Power of Tyranny"] = new engine.RulesElement({
    name: "Power of Tyranny",
    type: "Feat",
    id: "ID_FMP_FEAT_1476",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1476",
    categories: ["Power of Tyranny", "ID_FMP_FEAT_1476", "ID_INTERNAL_CATEGORY_DOMAIN", "Domain"],
    rules: function(model) {
      model.statadd("Intimidate Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Power of Undeath"] = new engine.RulesElement({
    name: "Power of Undeath",
    type: "Feat",
    id: "ID_FMP_FEAT_1478",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1478",
    categories: ["Power of Undeath", "ID_FMP_FEAT_1478", "ID_INTERNAL_CATEGORY_DOMAIN", "Domain"],
    rules: function(model) {
      model.statadd("Religion Misc", 2, "Feat");
      model.statadd("Power of Undeath", 2);
      model.statadd("Power of Undeath", 1);
      model.statadd("Power of Undeath", 1);
      model.statadd("ID_FMP_FEAT_1478 association:damage", function() { return model.stat("Power of Undeath"); });
      model.statadd("ID_FMP_FEAT_1478 association:damage", 2);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Power of Vengeance"] = new engine.RulesElement({
    name: "Power of Vengeance",
    type: "Feat",
    id: "ID_FMP_FEAT_1480",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1480",
    categories: ["Power of Vengeance", "ID_FMP_FEAT_1480", "ID_INTERNAL_CATEGORY_DOMAIN", "Domain"],
    rules: function(model) {
      model.statadd("Intimidate Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Power of War"] = new engine.RulesElement({
    name: "Power of War",
    type: "Feat",
    id: "ID_FMP_FEAT_1482",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1482",
    categories: ["Power of War", "ID_FMP_FEAT_1482", "ID_INTERNAL_CATEGORY_DOMAIN", "Domain"],
    rules: function(model) {
      model.statadd("History Misc", 2, "Feat");
      model.statadd("ID_FMP_FEAT_1482 association:attack", function() { /* against an unbloodied enemy */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Power of Winter"] = new engine.RulesElement({
    name: "Power of Winter",
    type: "Feat",
    id: "ID_FMP_FEAT_1486",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1486",
    categories: ["Power of Winter", "ID_FMP_FEAT_1486", "ID_INTERNAL_CATEGORY_DOMAIN", "Domain"],
    rules: function(model) {
      model.statadd("Endurance Misc", 2, "Feat");
      model.statadd("Power of Winter", 2);
      model.statadd("Power of Winter", 1);
      model.statadd("Power of Winter", 1);
      model.statadd("ID_FMP_FEAT_1486 association:damage", function() { return model.stat("Power of Winter"); });
      model.statadd("Power of Winter", 1);
      model.statadd("Power of Winter", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Preserver's Call"] = new engine.RulesElement({
    name: "Preserver's Call",
    type: "Feat",
    id: "ID_FMP_FEAT_1548",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1548",
    categories: ["Preserver's Call", "ID_FMP_FEAT_1548"]
  });
  byID[te.id] = te;
  
  te = Feat["Preserving Concealment"] = new engine.RulesElement({
    name: "Preserving Concealment",
    type: "Feat",
    id: "ID_FMP_FEAT_1549",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1549",
    categories: ["Preserving Concealment", "ID_FMP_FEAT_1549"]
  });
  byID[te.id] = te;
  
  te = Feat["Protecting Boon"] = new engine.RulesElement({
    name: "Protecting Boon",
    type: "Feat",
    id: "ID_FMP_FEAT_1611",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1611",
    categories: ["Protecting Boon", "ID_FMP_FEAT_1611"]
  });
  byID[te.id] = te;
  
  te = Feat["Protector's Commitment"] = new engine.RulesElement({
    name: "Protector's Commitment",
    type: "Feat",
    id: "ID_FMP_FEAT_1550",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1550",
    categories: ["Protector's Commitment", "ID_FMP_FEAT_1550"],
    rules: function(model) {
      model.statadd("attack rolls", function() { /* when you or your target is adjacent to a bloodied ally */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Psychic Retaliation"] = new engine.RulesElement({
    name: "Psychic Retaliation",
    type: "Feat",
    id: "ID_FMP_FEAT_1551",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1551",
    categories: ["Psychic Retaliation", "ID_FMP_FEAT_1551"]
  });
  byID[te.id] = te;
  
  te = Feat["Pulse of Life"] = new engine.RulesElement({
    name: "Pulse of Life",
    type: "Feat",
    id: "ID_FMP_FEAT_1446",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1446",
    categories: ["Pulse of Life", "ID_FMP_FEAT_1446", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_8184"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Punishing Radiance"] = new engine.RulesElement({
    name: "Punishing Radiance",
    type: "Feat",
    id: "ID_FMP_FEAT_1612",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1612",
    categories: ["Punishing Radiance", "ID_FMP_FEAT_1612"]
  });
  byID[te.id] = te;
  
  te = Feat["Radiant Advantage"] = new engine.RulesElement({
    name: "Radiant Advantage",
    type: "Feat",
    id: "ID_FMP_FEAT_1613",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1613",
    categories: ["Radiant Advantage", "ID_FMP_FEAT_1613"]
  });
  byID[te.id] = te;
  
  te = Feat["Radiant Vessel"] = new engine.RulesElement({
    name: "Radiant Vessel",
    type: "Feat",
    id: "ID_FMP_FEAT_1586",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1586",
    categories: ["Radiant Vessel", "ID_FMP_FEAT_1586"]
  });
  byID[te.id] = te;
  
  te = Feat["Reactive Healing"] = new engine.RulesElement({
    name: "Reactive Healing",
    type: "Feat",
    id: "ID_FMP_FEAT_1614",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1614",
    categories: ["Reactive Healing", "ID_FMP_FEAT_1614"]
  });
  byID[te.id] = te;
  
  te = Feat["Religious Dabbler"] = new engine.RulesElement({
    name: "Religious Dabbler",
    type: "Feat",
    id: "ID_FMP_FEAT_1552",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1552",
    categories: ["Religious Dabbler", "ID_FMP_FEAT_1552"],
    rules: function(model) {
      model.select('Power', 1, "Religious Dabbler", {
        filter: function(model, element) { return (true /* NYI: Filter: $$NOT_CLASS */ && element.hasCategory("at-will") && element.hasCategory("1") && element.hasCategory("ID_FMP_CATEGORY_32")); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Resurgent Attack"] = new engine.RulesElement({
    name: "Resurgent Attack",
    type: "Feat",
    id: "ID_FMP_FEAT_1587",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1587",
    categories: ["Resurgent Attack", "ID_FMP_FEAT_1587"]
  });
  byID[te.id] = te;
  
  te = Feat["Righteous Focus"] = new engine.RulesElement({
    name: "Righteous Focus",
    type: "Feat",
    id: "ID_FMP_FEAT_1615",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1615",
    categories: ["Righteous Focus", "ID_FMP_FEAT_1615"]
  });
  byID[te.id] = te;
  
  te = Feat["Saving Grace"] = new engine.RulesElement({
    name: "Saving Grace",
    type: "Feat",
    id: "ID_FMP_FEAT_1588",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1588",
    categories: ["Saving Grace", "ID_FMP_FEAT_1588"]
  });
  byID[te.id] = te;
  
  te = Feat["Screaming Madness"] = new engine.RulesElement({
    name: "Screaming Madness",
    type: "Feat",
    id: "ID_FMP_FEAT_1452",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1452",
    categories: ["Screaming Madness", "ID_FMP_FEAT_1452", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_8187"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Sea Surge"] = new engine.RulesElement({
    name: "Sea Surge",
    type: "Feat",
    id: "ID_FMP_FEAT_1460",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1460",
    categories: ["Sea Surge", "ID_FMP_FEAT_1460", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_8191"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Shared Healing"] = new engine.RulesElement({
    name: "Shared Healing",
    type: "Feat",
    id: "ID_FMP_FEAT_1616",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1616",
    categories: ["Shared Healing", "ID_FMP_FEAT_1616"]
  });
  byID[te.id] = te;
  
  te = Feat["Shared Perseverance"] = new engine.RulesElement({
    name: "Shared Perseverance",
    type: "Feat",
    id: "ID_FMP_FEAT_1553",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1553",
    categories: ["Shared Perseverance", "ID_FMP_FEAT_1553"]
  });
  byID[te.id] = te;
  
  te = Feat["Small Vengeance"] = new engine.RulesElement({
    name: "Small Vengeance",
    type: "Feat",
    id: "ID_FMP_FEAT_1481",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1481",
    categories: ["Small Vengeance", "ID_FMP_FEAT_1481", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_8201"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Solar Enemy"] = new engine.RulesElement({
    name: "Solar Enemy",
    type: "Feat",
    id: "ID_FMP_FEAT_1470",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1470",
    categories: ["Solar Enemy", "ID_FMP_FEAT_1470", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_8196"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Soldier of Virtue"] = new engine.RulesElement({
    name: "Soldier of Virtue",
    type: "Feat",
    id: "ID_FMP_FEAT_1631",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1631",
    categories: ["Soldier of Virtue", "ID_FMP_FEAT_1631", "ID_INTERNAL_CATEGORY_MULTICLASS_PALADIN", "Multiclass Paladin", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.select('Skill Training', 1, "Soldier of Virtue", {
        filter: function(model, element) { return element.hasCategory("Paladin Class"); }
      });
      model.grant(model.elements.id["ID_FMP_POWER_7240"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_PALADIN_IMPLEMENTS"]);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_PALADIN"]);
      model.grant(model.elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Storm Sacrifice"] = new engine.RulesElement({
    name: "Storm Sacrifice",
    type: "Feat",
    id: "ID_FMP_FEAT_1464",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1464",
    categories: ["Storm Sacrifice", "ID_FMP_FEAT_1464", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_8193"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Strength of Stone"] = new engine.RulesElement({
    name: "Strength of Stone",
    type: "Feat",
    id: "ID_FMP_FEAT_1554",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1554",
    categories: ["Strength of Stone", "ID_FMP_FEAT_1554"]
  });
  byID[te.id] = te;
  
  te = Feat["Strength of the Gods"] = new engine.RulesElement({
    name: "Strength of the Gods",
    type: "Feat",
    id: "ID_FMP_FEAT_1466",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1466",
    categories: ["Strength of the Gods", "ID_FMP_FEAT_1466", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_8194"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Sudden Strife"] = new engine.RulesElement({
    name: "Sudden Strife",
    type: "Feat",
    id: "ID_FMP_FEAT_1468",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1468",
    categories: ["Sudden Strife", "ID_FMP_FEAT_1468", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_8195"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Supreme Healer"] = new engine.RulesElement({
    name: "Supreme Healer",
    type: "Feat",
    id: "ID_FMP_FEAT_1617",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1617",
    categories: ["Supreme Healer", "ID_FMP_FEAT_1617"]
  });
  byID[te.id] = te;
  
  te = Feat["Sure Knowledge"] = new engine.RulesElement({
    name: "Sure Knowledge",
    type: "Feat",
    id: "ID_FMP_FEAT_1444",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1444",
    categories: ["Sure Knowledge", "ID_FMP_FEAT_1444", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_8183"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Sure Protection"] = new engine.RulesElement({
    name: "Sure Protection",
    type: "Feat",
    id: "ID_FMP_FEAT_1458",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1458",
    categories: ["Sure Protection", "ID_FMP_FEAT_1458", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_8190"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Swift Turning"] = new engine.RulesElement({
    name: "Swift Turning",
    type: "Feat",
    id: "ID_FMP_FEAT_1589",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1589",
    categories: ["Swift Turning", "ID_FMP_FEAT_1589"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Taunting Visage"] = new engine.RulesElement({
    name: "Taunting Visage",
    type: "Feat",
    id: "ID_FMP_FEAT_1555",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1555",
    categories: ["Taunting Visage", "ID_FMP_FEAT_1555"]
  });
  byID[te.id] = te;
  
  te = Feat["Tireless Wrath"] = new engine.RulesElement({
    name: "Tireless Wrath",
    type: "Feat",
    id: "ID_FMP_FEAT_1618",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1618",
    categories: ["Tireless Wrath", "ID_FMP_FEAT_1618"]
  });
  byID[te.id] = te;
  
  te = Feat["Touch of Salvation"] = new engine.RulesElement({
    name: "Touch of Salvation",
    type: "Feat",
    id: "ID_FMP_FEAT_1590",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1590",
    categories: ["Touch of Salvation", "ID_FMP_FEAT_1590"]
  });
  byID[te.id] = te;
  
  te = Feat["Trickster's Fortune"] = new engine.RulesElement({
    name: "Trickster's Fortune",
    type: "Feat",
    id: "ID_FMP_FEAT_1474",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1474",
    categories: ["Trickster's Fortune", "ID_FMP_FEAT_1474", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_8198"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Unbearable Malediction"] = new engine.RulesElement({
    name: "Unbearable Malediction",
    type: "Feat",
    id: "ID_FMP_FEAT_1619",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1619",
    categories: ["Unbearable Malediction", "ID_FMP_FEAT_1619"]
  });
  byID[te.id] = te;
  
  te = Feat["Undeath's Ally"] = new engine.RulesElement({
    name: "Undeath's Ally",
    type: "Feat",
    id: "ID_FMP_FEAT_1479",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1479",
    categories: ["Undeath's Ally", "ID_FMP_FEAT_1479", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_8200"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Unleash the Beast"] = new engine.RulesElement({
    name: "Unleash the Beast",
    type: "Feat",
    id: "ID_FMP_FEAT_1556",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1556",
    categories: ["Unleash the Beast", "ID_FMP_FEAT_1556"]
  });
  byID[te.id] = te;
  
  te = Feat["Untiring Virtue"] = new engine.RulesElement({
    name: "Untiring Virtue",
    type: "Feat",
    id: "ID_FMP_FEAT_1591",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1591",
    categories: ["Untiring Virtue", "ID_FMP_FEAT_1591"]
  });
  byID[te.id] = te;
  
  te = Feat["Vengeance Recalled"] = new engine.RulesElement({
    name: "Vengeance Recalled",
    type: "Feat",
    id: "ID_FMP_FEAT_1620",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1620",
    categories: ["Vengeance Recalled", "ID_FMP_FEAT_1620"]
  });
  byID[te.id] = te;
  
  te = Feat["Versatile Channeler"] = new engine.RulesElement({
    name: "Versatile Channeler",
    type: "Feat",
    id: "ID_FMP_FEAT_1557",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1557",
    categories: ["Versatile Channeler", "ID_FMP_FEAT_1557"],
    rules: function(model) {
      model.select('Power', 1, "Versatile Channeler", {
        filter: function(model, element) { return (true /* NYI: Filter: $$NOT_CLASS */ && element.hasCategory("ID_FMP_CLASS_FEATURE_324")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Vicious Darkfire"] = new engine.RulesElement({
    name: "Vicious Darkfire",
    type: "Feat",
    id: "ID_FMP_FEAT_1558",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1558",
    categories: ["Vicious Darkfire", "ID_FMP_FEAT_1558"]
  });
  byID[te.id] = te;
  
  te = Feat["Virtuous Company"] = new engine.RulesElement({
    name: "Virtuous Company",
    type: "Feat",
    id: "ID_FMP_FEAT_1621",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1621",
    categories: ["Virtuous Company", "ID_FMP_FEAT_1621"]
  });
  byID[te.id] = te;
  
  te = Feat["Virtuous Recovery"] = new engine.RulesElement({
    name: "Virtuous Recovery",
    type: "Feat",
    id: "ID_FMP_FEAT_1559",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1559",
    categories: ["Virtuous Recovery", "ID_FMP_FEAT_1559"]
  });
  byID[te.id] = te;
  
  te = Feat["Warding Covenant"] = new engine.RulesElement({
    name: "Warding Covenant",
    type: "Feat",
    id: "ID_FMP_FEAT_1592",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1592",
    categories: ["Warding Covenant", "ID_FMP_FEAT_1592"]
  });
  byID[te.id] = te;
  
  te = Feat["Warforged Example"] = new engine.RulesElement({
    name: "Warforged Example",
    type: "Feat",
    id: "ID_FMP_FEAT_1560",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1560",
    categories: ["Warforged Example", "ID_FMP_FEAT_1560"]
  });
  byID[te.id] = te;
  
  te = Feat["Warforged Faith"] = new engine.RulesElement({
    name: "Warforged Faith",
    type: "Feat",
    id: "ID_FMP_FEAT_1561",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1561",
    categories: ["Warforged Faith", "ID_FMP_FEAT_1561"]
  });
  byID[te.id] = te;
  
  te = Feat["Wrath of Ages Past"] = new engine.RulesElement({
    name: "Wrath of Ages Past",
    type: "Feat",
    id: "ID_FMP_FEAT_1562",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1562",
    categories: ["Wrath of Ages Past", "ID_FMP_FEAT_1562"],
    rules: function(model) {
      model.statadd("Armor of Wrath:damage", function() { /* against an enemy larger than you */ return model.stat("Wisdom modifier"); });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Wrath of the Mountain King"] = new engine.RulesElement({
    name: "Wrath of the Mountain King",
    type: "Feat",
    id: "ID_FMP_FEAT_1563",
    source: "Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1563",
    categories: ["Wrath of the Mountain King", "ID_FMP_FEAT_1563"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
