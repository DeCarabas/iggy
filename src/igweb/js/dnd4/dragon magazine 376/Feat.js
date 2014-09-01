define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Feat = types['Feat'] || (types['Feat'] = {});
  te = Feat["Chill of the Grave"] = new engine.RulesElement({
    name: "Chill of the Grave",
    type: "Feat",
    id: "ID_FMP_FEAT_1639",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1639",
    categories: ["Chill of the Grave", "ID_FMP_FEAT_1639"]
  });
  byID[te.id] = te;
  
  te = Feat["Dark Feasting"] = new engine.RulesElement({
    name: "Dark Feasting",
    type: "Feat",
    id: "ID_FMP_FEAT_1640",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1640",
    categories: ["Dark Feasting", "ID_FMP_FEAT_1640"]
  });
  byID[te.id] = te;
  
  te = Feat["Darren Gambler"] = new engine.RulesElement({
    name: "Darren Gambler",
    type: "Feat",
    id: "ID_FMP_FEAT_1697",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1697",
    categories: ["Darren Gambler", "ID_FMP_FEAT_1697"]
  });
  byID[te.id] = te;
  
  te = Feat["Death Curse"] = new engine.RulesElement({
    name: "Death Curse",
    type: "Feat",
    id: "ID_FMP_FEAT_1641",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1641",
    categories: ["Death Curse", "ID_FMP_FEAT_1641"]
  });
  byID[te.id] = te;
  
  te = Feat["Death Scorned"] = new engine.RulesElement({
    name: "Death Scorned",
    type: "Feat",
    id: "ID_FMP_FEAT_1673",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1673",
    categories: ["Death Scorned", "ID_FMP_FEAT_1673"],
    rules: function(model) {
      model.statadd("DeathSaving Throws", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Death's Blessing"] = new engine.RulesElement({
    name: "Death's Blessing",
    type: "Feat",
    id: "ID_FMP_FEAT_1642",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1642",
    categories: ["Death's Blessing", "ID_FMP_FEAT_1642"]
  });
  byID[te.id] = te;
  
  te = Feat["Death's Quickening"] = new engine.RulesElement({
    name: "Death's Quickening",
    type: "Feat",
    id: "ID_FMP_FEAT_1643",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1643",
    categories: ["Death's Quickening", "ID_FMP_FEAT_1643"]
  });
  byID[te.id] = te;
  
  te = Feat["Distant Reaping"] = new engine.RulesElement({
    name: "Distant Reaping",
    type: "Feat",
    id: "ID_FMP_FEAT_1686",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1686",
    categories: ["Distant Reaping", "ID_FMP_FEAT_1686"]
  });
  byID[te.id] = te;
  
  te = Feat["Divine Fate"] = new engine.RulesElement({
    name: "Divine Fate",
    type: "Feat",
    id: "ID_FMP_FEAT_1644",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1644",
    categories: ["Divine Fate", "ID_FMP_FEAT_1644", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_8273"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Double Reaping"] = new engine.RulesElement({
    name: "Double Reaping",
    type: "Feat",
    id: "ID_FMP_FEAT_1687",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1687",
    categories: ["Double Reaping", "ID_FMP_FEAT_1687"]
  });
  byID[te.id] = te;
  
  te = Feat["Draconic Reaping"] = new engine.RulesElement({
    name: "Draconic Reaping",
    type: "Feat",
    id: "ID_FMP_FEAT_1646",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1646",
    categories: ["Draconic Reaping", "ID_FMP_FEAT_1646"]
  });
  byID[te.id] = te;
  
  te = Feat["Dragonborn Soul"] = new engine.RulesElement({
    name: "Dragonborn Soul",
    type: "Feat",
    id: "ID_FMP_FEAT_1647",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1647",
    categories: ["Dragonborn Soul", "ID_FMP_FEAT_1647"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1448"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Drow Soul"] = new engine.RulesElement({
    name: "Drow Soul",
    type: "Feat",
    id: "ID_FMP_FEAT_1648",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1648",
    categories: ["Drow Soul", "ID_FMP_FEAT_1648"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_RACIAL_TRAIT_565"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Dwarf Soul"] = new engine.RulesElement({
    name: "Dwarf Soul",
    type: "Feat",
    id: "ID_FMP_FEAT_1649",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1649",
    categories: ["Dwarf Soul", "ID_FMP_FEAT_1649"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_RACIAL_TRAIT_12"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Eerie Resurgence"] = new engine.RulesElement({
    name: "Eerie Resurgence",
    type: "Feat",
    id: "ID_FMP_FEAT_1694",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1694",
    categories: ["Eerie Resurgence", "ID_FMP_FEAT_1694"],
    rules: function(model) {
      model.statadd("Death Saving Throws", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Eladrin Soul"] = new engine.RulesElement({
    name: "Eladrin Soul",
    type: "Feat",
    id: "ID_FMP_FEAT_1650",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1650",
    categories: ["Eladrin Soul", "ID_FMP_FEAT_1650"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1449"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Elf Soul"] = new engine.RulesElement({
    name: "Elf Soul",
    type: "Feat",
    id: "ID_FMP_FEAT_1651",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1651",
    categories: ["Elf Soul", "ID_FMP_FEAT_1651"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1450"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Empowered Reaping"] = new engine.RulesElement({
    name: "Empowered Reaping",
    type: "Feat",
    id: "ID_FMP_FEAT_1652",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1652",
    categories: ["Empowered Reaping", "ID_FMP_FEAT_1652"],
    rules: function(model) {
      model.statadd("Dark Reaping:damage", 2, "Feat");
      model.statadd("Dark Reaping:damage", 4, "Feat");
      model.statadd("Dark Reaping:damage", 6, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Fierce Vitality"] = new engine.RulesElement({
    name: "Fierce Vitality",
    type: "Feat",
    id: "ID_FMP_FEAT_1688",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1688",
    categories: ["Fierce Vitality", "ID_FMP_FEAT_1688"]
  });
  byID[te.id] = te;
  
  te = Feat["Firequench Aspirant"] = new engine.RulesElement({
    name: "Firequench Aspirant",
    type: "Feat",
    id: "ID_FMP_FEAT_1698",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1698",
    categories: ["Firequench Aspirant", "ID_FMP_FEAT_1698"],
    rules: function(model) {
      model.statadd("Firequench Aspirant", 2);
      model.statadd("Firequench Aspirant", 3);
      model.statadd("Firequench Aspirant", 3);
      model.statadd("resist:fire", function() { return model.stat("Firequench Aspirant"); }, "resist");
      model.statadd("FREEBEE:ID_FMP_RITUAL_77", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Genasi Soul"] = new engine.RulesElement({
    name: "Genasi Soul",
    type: "Feat",
    id: "ID_FMP_FEAT_1653",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1653",
    categories: ["Genasi Soul", "ID_FMP_FEAT_1653"],
    rules: function(model) {
      model.select('Power', 1, "Genasi Soul", {
        filter: function(model, element) { return ((((element.hasCategory("ID_FMP_POWER_1766") || element.hasCategory("ID_FMP_POWER_1767")) || element.hasCategory("ID_FMP_POWER_1769")) || element.hasCategory("ID_FMP_POWER_1770")) || element.hasCategory("ID_FMP_POWER_1828")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Ghostly Vitality"] = new engine.RulesElement({
    name: "Ghostly Vitality",
    type: "Feat",
    id: "ID_FMP_FEAT_1693",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1693",
    categories: ["Ghostly Vitality", "ID_FMP_FEAT_1693"]
  });
  byID[te.id] = te;
  
  te = Feat["Gnome Soul"] = new engine.RulesElement({
    name: "Gnome Soul",
    type: "Feat",
    id: "ID_FMP_FEAT_1654",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1654",
    categories: ["Gnome Soul", "ID_FMP_FEAT_1654"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_377"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Goliath Soul"] = new engine.RulesElement({
    name: "Goliath Soul",
    type: "Feat",
    id: "ID_FMP_FEAT_1655",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1655",
    categories: ["Goliath Soul", "ID_FMP_FEAT_1655"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_6188"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Half-Elf Soul"] = new engine.RulesElement({
    name: "Half-Elf Soul",
    type: "Feat",
    id: "ID_FMP_FEAT_1656",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1656",
    categories: ["Half-Elf Soul", "ID_FMP_FEAT_1656"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_RACIAL_TRAIT_643"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Halfling Soul"] = new engine.RulesElement({
    name: "Halfling Soul",
    type: "Feat",
    id: "ID_FMP_FEAT_1658",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1658",
    categories: ["Halfling Soul", "ID_FMP_FEAT_1658"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1452"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Half-Orc Soul"] = new engine.RulesElement({
    name: "Half-Orc Soul",
    type: "Feat",
    id: "ID_FMP_FEAT_1657",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1657",
    categories: ["Half-Orc Soul", "ID_FMP_FEAT_1657"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_6189"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Harglastan Catacomb Delver"] = new engine.RulesElement({
    name: "Harglastan Catacomb Delver",
    type: "Feat",
    id: "ID_FMP_FEAT_1699",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1699",
    categories: ["Harglastan Catacomb Delver", "ID_FMP_FEAT_1699"],
    rules: function(model) {
      model.statadd("Dungeoneering Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Hellfire Soul"] = new engine.RulesElement({
    name: "Hellfire Soul",
    type: "Feat",
    id: "ID_FMP_FEAT_1659",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1659",
    categories: ["Hellfire Soul", "ID_FMP_FEAT_1659"]
  });
  byID[te.id] = te;
  
  te = Feat["Human Soul"] = new engine.RulesElement({
    name: "Human Soul",
    type: "Feat",
    id: "ID_FMP_FEAT_1660",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1660",
    categories: ["Human Soul", "ID_FMP_FEAT_1660"],
    rules: function(model) {
      model.statadd("Human Soul", 1);
      model.statadd("Fortitude Defense", function() { return model.stat("Human Soul"); });
      model.statadd("Reflex Defense", function() { return model.stat("Human Soul"); });
      model.statadd("Will Defense", function() { return model.stat("Human Soul"); });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Imdolphyn Dockhaunt"] = new engine.RulesElement({
    name: "Imdolphyn Dockhaunt",
    type: "Feat",
    id: "ID_FMP_FEAT_1700",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1700",
    categories: ["Imdolphyn Dockhaunt", "ID_FMP_FEAT_1700"],
    rules: function(model) {
      model.statadd("Acrobatics Misc", function() { /* to balance */ return 2; });
      model.statadd("Athletics Misc", function() { /* to climb */ return 2; });
      model.statadd("FREEBEE:ID_FMP_RITUAL_51", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Life Thief"] = new engine.RulesElement({
    name: "Life Thief",
    type: "Feat",
    id: "ID_FMP_FEAT_1661",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1661",
    categories: ["Life Thief", "ID_FMP_FEAT_1661"]
  });
  byID[te.id] = te;
  
  te = Feat["Marked for Death"] = new engine.RulesElement({
    name: "Marked for Death",
    type: "Feat",
    id: "ID_FMP_FEAT_1662",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1662",
    categories: ["Marked for Death", "ID_FMP_FEAT_1662"]
  });
  byID[te.id] = te;
  
  te = Feat["Minotaur Soul"] = new engine.RulesElement({
    name: "Minotaur Soul",
    type: "Feat",
    id: "ID_FMP_FEAT_1663",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1663",
    categories: ["Minotaur Soul", "ID_FMP_FEAT_1663"]
  });
  byID[te.id] = te;
  
  te = Feat["Past Life Flashbacks"] = new engine.RulesElement({
    name: "Past Life Flashbacks",
    type: "Feat",
    id: "ID_FMP_FEAT_1664",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1664",
    categories: ["Past Life Flashbacks", "ID_FMP_FEAT_1664"]
  });
  byID[te.id] = te;
  
  te = Feat["Ramekho Troubleshooter"] = new engine.RulesElement({
    name: "Ramekho Troubleshooter",
    type: "Feat",
    id: "ID_FMP_FEAT_1701",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1701",
    categories: ["Ramekho Troubleshooter", "ID_FMP_FEAT_1701"],
    rules: function(model) {
      model.select('Language', 1, "Ramekho Troubleshooter");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Reaper's Quarry"] = new engine.RulesElement({
    name: "Reaper's Quarry",
    type: "Feat",
    id: "ID_FMP_FEAT_1665",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1665",
    categories: ["Reaper's Quarry", "ID_FMP_FEAT_1665"]
  });
  byID[te.id] = te;
  
  te = Feat["Reaper's Resistance"] = new engine.RulesElement({
    name: "Reaper's Resistance",
    type: "Feat",
    id: "ID_FMP_FEAT_1666",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1666",
    categories: ["Reaper's Resistance", "ID_FMP_FEAT_1666"],
    rules: function(model) {
      model.statadd("Reaper's Resistance", 5);
      model.statadd("resist:necrotic", function() { return model.stat("Reaper's Resistance"); }, "resist");
      model.statadd("Reaper's Resistance", 5);
      model.statadd("Reaper's Resistance", 5);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Reaper's Strike"] = new engine.RulesElement({
    name: "Reaper's Strike",
    type: "Feat",
    id: "ID_FMP_FEAT_1689",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1689",
    categories: ["Reaper's Strike", "ID_FMP_FEAT_1689"]
  });
  byID[te.id] = te;
  
  te = Feat["Reaping Burst"] = new engine.RulesElement({
    name: "Reaping Burst",
    type: "Feat",
    id: "ID_FMP_FEAT_1690",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1690",
    categories: ["Reaping Burst", "ID_FMP_FEAT_1690"]
  });
  byID[te.id] = te;
  
  te = Feat["Reaping Renewal"] = new engine.RulesElement({
    name: "Reaping Renewal",
    type: "Feat",
    id: "ID_FMP_FEAT_1695",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1695",
    categories: ["Reaping Renewal", "ID_FMP_FEAT_1695"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Reaping Synergy"] = new engine.RulesElement({
    name: "Reaping Synergy",
    type: "Feat",
    id: "ID_FMP_FEAT_1696",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1696",
    categories: ["Reaping Synergy", "ID_FMP_FEAT_1696"]
  });
  byID[te.id] = te;
  
  te = Feat["Remembered Knack"] = new engine.RulesElement({
    name: "Remembered Knack",
    type: "Feat",
    id: "ID_FMP_FEAT_1667",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1667",
    categories: ["Remembered Knack", "ID_FMP_FEAT_1667"],
    rules: function(model) {
      model.select('Skill Training', 1, "Remembered Knack", {
        filter: function(model, element) { return true /* NYI: Filter: $$MULTICLASS */; }
      });
      model.select('class feature', 1, "Remembered Knack", {
        filter: function(model, element) { return element.hasCategory("Remembered Knack"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Resilience of Death"] = new engine.RulesElement({
    name: "Resilience of Death",
    type: "Feat",
    id: "ID_FMP_FEAT_1691",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1691",
    categories: ["Resilience of Death", "ID_FMP_FEAT_1691"],
    rules: function(model) {
      model.statadd("Resilience of Death", 10);
      model.statadd("Resilience of Death", 5);
      model.statadd("resist:poison", function() { return model.stat("Resilience of Death"); }, "resist");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Sambrese Rake"] = new engine.RulesElement({
    name: "Sambrese Rake",
    type: "Feat",
    id: "ID_FMP_FEAT_1702",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1702",
    categories: ["Sambrese Rake", "ID_FMP_FEAT_1702"],
    rules: function(model) {
      model.statadd("Bluff Misc", function() { /* to gain combat advantage */ return 3; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Shadar-Kai Soul"] = new engine.RulesElement({
    name: "Shadar-Kai Soul",
    type: "Feat",
    id: "ID_FMP_FEAT_1668",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1668",
    categories: ["Shadar-Kai Soul", "ID_FMP_FEAT_1668"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_2482"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Shifter Soul"] = new engine.RulesElement({
    name: "Shifter Soul",
    type: "Feat",
    id: "ID_FMP_FEAT_1669",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1669",
    categories: ["Shifter Soul", "ID_FMP_FEAT_1669"],
    rules: function(model) {
      model.select('Power', 1, "Shifter Soul", {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_POWER_2483") || element.hasCategory("ID_FMP_POWER_2484")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Spectral Reaping"] = new engine.RulesElement({
    name: "Spectral Reaping",
    type: "Feat",
    id: "ID_FMP_FEAT_1670",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1670",
    categories: ["Spectral Reaping", "ID_FMP_FEAT_1670"]
  });
  byID[te.id] = te;
  
  te = Feat["Tarn-Trader Bodyguard"] = new engine.RulesElement({
    name: "Tarn-Trader Bodyguard",
    type: "Feat",
    id: "ID_FMP_FEAT_1703",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1703",
    categories: ["Tarn-Trader Bodyguard", "ID_FMP_FEAT_1703"]
  });
  byID[te.id] = te;
  
  te = Feat["Thin the Herd"] = new engine.RulesElement({
    name: "Thin the Herd",
    type: "Feat",
    id: "ID_FMP_FEAT_1705",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1705",
    categories: ["Thin the Herd", "ID_FMP_FEAT_1705"]
  });
  byID[te.id] = te;
  
  te = Feat["Tiefling Soul"] = new engine.RulesElement({
    name: "Tiefling Soul",
    type: "Feat",
    id: "ID_FMP_FEAT_1671",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1671",
    categories: ["Tiefling Soul", "ID_FMP_FEAT_1671"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_1628"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Unnatural Stamina"] = new engine.RulesElement({
    name: "Unnatural Stamina",
    type: "Feat",
    id: "ID_FMP_FEAT_1692",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1692",
    categories: ["Unnatural Stamina", "ID_FMP_FEAT_1692"],
    rules: function(model) {
      model.statadd("Healing Surges", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Vigilant Associate"] = new engine.RulesElement({
    name: "Vigilant Associate",
    type: "Feat",
    id: "ID_FMP_FEAT_1704",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1704",
    categories: ["Vigilant Associate", "ID_FMP_FEAT_1704"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SHORT_SWORD)"]);
      model.statadd("Short sword:damage", 1, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Warforged Soul"] = new engine.RulesElement({
    name: "Warforged Soul",
    type: "Feat",
    id: "ID_FMP_FEAT_1672",
    source: "Dragon Magazine 376",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1672",
    categories: ["Warforged Soul", "ID_FMP_FEAT_1672"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_2485"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
