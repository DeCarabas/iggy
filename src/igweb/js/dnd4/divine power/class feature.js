define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var class_feature = types['class feature'] || (types['class feature'] = {});
  te = class_feature["Additional Anointed Regalia"] = new engine.RulesElement({
    name: "Additional Anointed Regalia",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1684",
    source: "Divine Power",
    categories: ["Additional Anointed Regalia", "ID_FMP_CLASS_FEATURE_1684", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Adept's Action"] = new engine.RulesElement({
    name: "Adept's Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1718",
    source: "Divine Power",
    categories: ["Adept's Action", "ID_FMP_CLASS_FEATURE_1718", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Adept's Action:When you spend an action point to take an extra action, you also gain a +2 bonus to attack rolls with divine powers, and you can increase the size of your divine blasts or bursts by 1. These benefits last until the start of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Agent of Freedom"] = new engine.RulesElement({
    name: "Agent of Freedom",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1788",
    source: "Divine Power",
    categories: ["Agent of Freedom", "ID_FMP_CLASS_FEATURE_1788", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Angelic Form"] = new engine.RulesElement({
    name: "Angelic Form",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1857",
    source: "Divine Power",
    categories: ["Angelic Form", "ID_FMP_CLASS_FEATURE_1857", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Angelic Nature"] = new engine.RulesElement({
    name: "Angelic Nature",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1855",
    source: "Divine Power",
    categories: ["Angelic Nature", "ID_FMP_CLASS_FEATURE_1855", "21"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_LANGUAGE_8"]);
      model.statadd("resist:fire", 15, "resist");
      model.statadd("resist:radiant", 15, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Anointed Action"] = new engine.RulesElement({
    name: "Anointed Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1683",
    source: "Divine Power",
    categories: ["Anointed Action", "ID_FMP_CLASS_FEATURE_1683", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Anointed Action:When you spend an action point to take an extra action, you also gain a bonus to attack rolls and damage rolls equal to your Charisma modifier. The bonus lasts until the end of your turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Anointed Amulet"] = new engine.RulesElement({
    name: "Anointed Amulet",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ANOINTED_AMULET",
    source: "Divine Power",
    categories: ["Anointed Amulet", "ID_INTERNAL_CLASS_FEATURE_ANOINTED_AMULET", "Anointed Regalia"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 1);
      model.statadd("Reflex Defense", 1);
      model.statadd("Will Defense", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Anointed Armor"] = new engine.RulesElement({
    name: "Anointed Armor",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ANOINTED_ARMOR",
    source: "Divine Power",
    categories: ["Anointed Armor", "ID_INTERNAL_CLASS_FEATURE_ANOINTED_ARMOR", "Anointed Regalia"],
    rules: function(model) {
      model.statadd("AC", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Anointed Helm"] = new engine.RulesElement({
    name: "Anointed Helm",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ANOINTED_HELM",
    source: "Divine Power",
    categories: ["Anointed Helm", "ID_INTERNAL_CLASS_FEATURE_ANOINTED_HELM", "Anointed Regalia"],
    rules: function(model) {
      model.statadd("Saving Throws", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Anointed Holy Symbol"] = new engine.RulesElement({
    name: "Anointed Holy Symbol",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ANOINTED_HOLY_SYMBOL",
    source: "Divine Power",
    categories: ["Anointed Holy Symbol", "ID_INTERNAL_CLASS_FEATURE_ANOINTED_HOLY_SYMBOL", "Anointed Regalia"]
  });
  byID[te.id] = te;
  
  te = class_feature["Anointed Regalia"] = new engine.RulesElement({
    name: "Anointed Regalia",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1682",
    source: "Divine Power",
    categories: ["Anointed Regalia", "ID_FMP_CLASS_FEATURE_1682", "11"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("Anointed Regalia"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Anointed Weapon (Fire)"] = new engine.RulesElement({
    name: "Anointed Weapon (Fire)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ANOINTED_WEAPON_(FIRE)",
    source: "Divine Power",
    categories: ["Anointed Weapon (Fire)", "ID_INTERNAL_CLASS_FEATURE_ANOINTED_WEAPON_(FIRE)", "Anointed Regalia"],
    rules: function(model) {
      model.statadd("resist:fire", function() { return model.stat("Charisma modifier"); }, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Anointed Weapon (Necrotic)"] = new engine.RulesElement({
    name: "Anointed Weapon (Necrotic)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ANOINTED_WEAPON_(NECROTIC)",
    source: "Divine Power",
    categories: ["Anointed Weapon (Necrotic)", "ID_INTERNAL_CLASS_FEATURE_ANOINTED_WEAPON_(NECROTIC)", "Anointed Regalia"],
    rules: function(model) {
      model.statadd("resist:necrotic", function() { return model.stat("Charisma modifier"); }, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Anointed Weapon (Radiant)"] = new engine.RulesElement({
    name: "Anointed Weapon (Radiant)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ANOINTED_WEAPON_(RADIANT)",
    source: "Divine Power",
    categories: ["Anointed Weapon (Radiant)", "ID_INTERNAL_CLASS_FEATURE_ANOINTED_WEAPON_(RADIANT)", "Anointed Regalia"],
    rules: function(model) {
      model.statadd("resist:radiant", function() { return model.stat("Charisma modifier"); }, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Anointed Weapon (Thunder)"] = new engine.RulesElement({
    name: "Anointed Weapon (Thunder)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ANOINTED_WEAPON_(THUNDER)",
    source: "Divine Power",
    categories: ["Anointed Weapon (Thunder)", "ID_INTERNAL_CLASS_FEATURE_ANOINTED_WEAPON_(THUNDER)", "Anointed Regalia"],
    rules: function(model) {
      model.statadd("resist:thunder", function() { return model.stat("Charisma modifier"); }, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Arbiter's Action"] = new engine.RulesElement({
    name: "Arbiter's Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1721",
    source: "Divine Power",
    categories: ["Arbiter's Action", "ID_FMP_CLASS_FEATURE_1721", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Arbiter's Action:When you spend an action point to make an attack, any enemy you hit with that attack takes a -2 penalty to attack rolls (save ends).");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Ardent Action"] = new engine.RulesElement({
    name: "Ardent Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1659",
    source: "Divine Power",
    categories: ["Ardent Action", "ID_FMP_CLASS_FEATURE_1659", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Ardent Action:When you spend an action point to take an extra action, you can also make a saving throw or shift a number of squares equal to your Dexterity modifier before or after the exxtra action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Ardent Fury"] = new engine.RulesElement({
    name: "Ardent Fury",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1660",
    source: "Divine Power",
    categories: ["Ardent Fury", "ID_FMP_CLASS_FEATURE_1660", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Astral Mask"] = new engine.RulesElement({
    name: "Astral Mask",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1685",
    source: "Divine Power",
    categories: ["Astral Mask", "ID_FMP_CLASS_FEATURE_1685", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Aura of Health"] = new engine.RulesElement({
    name: "Aura of Health",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1707",
    source: "Divine Power",
    categories: ["Aura of Health", "ID_FMP_CLASS_FEATURE_1707", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Aura of Peace"] = new engine.RulesElement({
    name: "Aura of Peace",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1702",
    source: "Divine Power",
    categories: ["Aura of Peace", "ID_FMP_CLASS_FEATURE_1702", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Aura Suppression"] = new engine.RulesElement({
    name: "Aura Suppression",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1771",
    source: "Divine Power",
    categories: ["Aura Suppression", "ID_FMP_CLASS_FEATURE_1771", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Battle Chant"] = new engine.RulesElement({
    name: "Battle Chant",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1689",
    source: "Divine Power",
    categories: ["Battle Chant", "ID_FMP_CLASS_FEATURE_1689", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Brilliant Rhetoric"] = new engine.RulesElement({
    name: "Brilliant Rhetoric",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1724",
    source: "Divine Power",
    categories: ["Brilliant Rhetoric", "ID_FMP_CLASS_FEATURE_1724", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Bringer of Despair"] = new engine.RulesElement({
    name: "Bringer of Despair",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1743",
    source: "Divine Power",
    categories: ["Bringer of Despair", "ID_FMP_CLASS_FEATURE_1743", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Calm Eye"] = new engine.RulesElement({
    name: "Calm Eye",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1673",
    source: "Divine Power",
    categories: ["Calm Eye", "ID_FMP_CLASS_FEATURE_1673", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Calm Eye:When you spend an action point to use an at-will attack power, that attack deals 2d10 extra damage.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Celerity of Morning"] = new engine.RulesElement({
    name: "Celerity of Morning",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1661",
    source: "Divine Power",
    categories: ["Celerity of Morning", "ID_FMP_CLASS_FEATURE_1661", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Celerity of Morning:When you spend an action point to take an extra action, you can also make a saving throw with a bonus equal to your Wisdom modifier.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Censure Devils"] = new engine.RulesElement({
    name: "Censure Devils",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1769",
    source: "Divine Power",
    categories: ["Censure Devils", "ID_FMP_CLASS_FEATURE_1769", "11"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_8160"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Censure of Unity"] = new engine.RulesElement({
    name: "Censure of Unity",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1657",
    source: "Divine Power",
    categories: ["Censure of Unity", "ID_FMP_CLASS_FEATURE_1657", "ID_FMP_CLASS_FEATURE_1192", "Avenger's Censure", "1"],
    rules: function(model) {
      model.statadd("Censure of Unity", 1);
      model.statadd("damage rolls", function() { /* against your oath of enmity target for each ally adjacent to that target */ return model.stat("Censure of Unity"); });
      model.statadd("Censure of Unity", 1);
      model.statadd("Censure of Unity", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Censuring Action"] = new engine.RulesElement({
    name: "Censuring Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1714",
    source: "Divine Power",
    categories: ["Censuring Action", "ID_FMP_CLASS_FEATURE_1714", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Censuring Action:When you spend an action point to use a divine attack power, until the end of your next turn, any enemy that ends its turn adjacent to you takes a -2 penalty to all defenses (save ends).");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Certain Cut"] = new engine.RulesElement({
    name: "Certain Cut",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1675",
    source: "Divine Power",
    categories: ["Certain Cut", "ID_FMP_CLASS_FEATURE_1675", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Champion's Aura"] = new engine.RulesElement({
    name: "Champion's Aura",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1765",
    source: "Divine Power",
    categories: ["Champion's Aura", "ID_FMP_CLASS_FEATURE_1765", "16"],
    rules: function(model) {
      model.statadd("AC", function() { /* against fear effects */ return 4; });
      model.statadd("Fortitude Defense", function() { /* against fear effects */ return 4; });
      model.statadd("Reflex Defense", function() { /* against fear effects */ return 4; });
      model.statadd("Will Defense", function() { /* against fear effects */ return 4; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Compassionate Blessing"] = new engine.RulesElement({
    name: "Compassionate Blessing",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1693",
    source: "Divine Power",
    categories: ["Compassionate Blessing", "ID_FMP_CLASS_FEATURE_1693", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Covenant of Malediction"] = new engine.RulesElement({
    name: "Covenant of Malediction",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1717",
    source: "Divine Power",
    categories: ["Covenant of Malediction", "ID_FMP_CLASS_FEATURE_1717", "ID_FMP_CLASS_FEATURE_1156", "Divine Covenant", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_7150"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Deadly Revival"] = new engine.RulesElement({
    name: "Deadly Revival",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1783",
    source: "Divine Power",
    categories: ["Deadly Revival", "ID_FMP_CLASS_FEATURE_1783", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Death Comes to All"] = new engine.RulesElement({
    name: "Death Comes to All",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1782",
    source: "Divine Power",
    categories: ["Death Comes to All", "ID_FMP_CLASS_FEATURE_1782", "21"]
  });
  byID[te.id] = te;
  
  te = class_feature["Deceptive Control"] = new engine.RulesElement({
    name: "Deceptive Control",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1664",
    source: "Divine Power",
    categories: ["Deceptive Control", "ID_FMP_CLASS_FEATURE_1664", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Deeds not Words"] = new engine.RulesElement({
    name: "Deeds not Words",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1692",
    source: "Divine Power",
    categories: ["Deeds not Words", "ID_FMP_CLASS_FEATURE_1692", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Defensive Presence"] = new engine.RulesElement({
    name: "Defensive Presence",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1759",
    source: "Divine Power",
    categories: ["Defensive Presence", "ID_FMP_CLASS_FEATURE_1759", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Demonslayer's Action"] = new engine.RulesElement({
    name: "Demonslayer's Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1752",
    source: "Divine Power",
    categories: ["Demonslayer's Action", "ID_FMP_CLASS_FEATURE_1752", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Demonslayer's Action:When you spend an action point to make an attack, the attack deals extra damage equal to one-half your level and ignores resistances.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Demonslayer's Presence"] = new engine.RulesElement({
    name: "Demonslayer's Presence",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1751",
    source: "Divine Power",
    categories: ["Demonslayer's Presence", "ID_FMP_CLASS_FEATURE_1751", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Demoralizing Critical"] = new engine.RulesElement({
    name: "Demoralizing Critical",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1762",
    source: "Divine Power",
    categories: ["Demoralizing Critical", "ID_FMP_CLASS_FEATURE_1762", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Dervish Ecstasy"] = new engine.RulesElement({
    name: "Dervish Ecstasy",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1663",
    source: "Divine Power",
    categories: ["Dervish Ecstasy", "ID_FMP_CLASS_FEATURE_1663", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Devastating Action"] = new engine.RulesElement({
    name: "Devastating Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1775",
    source: "Divine Power",
    categories: ["Devastating Action", "ID_FMP_CLASS_FEATURE_1775", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Devastating Action:When you spend an action point to make an attack, the attack deals extra damage equal to your Charisma modifier. If you are bloodied, you also add your Wisdom modifier to the damage.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Divine Fortification"] = new engine.RulesElement({
    name: "Divine Fortification",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1767",
    source: "Divine Power",
    categories: ["Divine Fortification", "ID_FMP_CLASS_FEATURE_1767", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Divine Fortification:When you spend an action point to take an extra action, each enemy adjacent to you is subject to your divine sanction until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Divine Resurgence"] = new engine.RulesElement({
    name: "Divine Resurgence",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1688",
    source: "Divine Power",
    categories: ["Divine Resurgence", "ID_FMP_CLASS_FEATURE_1688", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Dooming Action"] = new engine.RulesElement({
    name: "Dooming Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1733",
    source: "Divine Power",
    categories: ["Dooming Action", "ID_FMP_CLASS_FEATURE_1733", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Dooming Action:When you spend an action point to make an attack, one target hit by that attack gains vulnerable 5 to all damage (save ends).");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Dragonslayer's Action"] = new engine.RulesElement({
    name: "Dragonslayer's Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1754",
    source: "Divine Power",
    categories: ["Dragonslayer's Action", "ID_FMP_CLASS_FEATURE_1754", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Dragonslayer's Action:When you spend an action point to take an extra action, you also gain a +2 bonus to all defenses against creatures marked by you. This bonus lasts until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Dragonslayer's Challenge"] = new engine.RulesElement({
    name: "Dragonslayer's Challenge",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1755",
    source: "Divine Power",
    categories: ["Dragonslayer's Challenge", "ID_FMP_CLASS_FEATURE_1755", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Empowering Syllable"] = new engine.RulesElement({
    name: "Empowering Syllable",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1738",
    source: "Divine Power",
    categories: ["Empowering Syllable", "ID_FMP_CLASS_FEATURE_1738", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Favored Action"] = new engine.RulesElement({
    name: "Favored Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1667",
    source: "Divine Power",
    categories: ["Favored Action", "ID_FMP_CLASS_FEATURE_1667", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Favored Action:When you spend an action point to take an extra action, you or an ally adjacent to you can also spend a healing surge.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Fearsome Oration"] = new engine.RulesElement({
    name: "Fearsome Oration",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1725",
    source: "Divine Power",
    categories: ["Fearsome Oration", "ID_FMP_CLASS_FEATURE_1725", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Fearsome Oration:When you spend an action point to take an extra action, you either pull or push each enemy within 5 squares of you a number of squares equal to your Intelligence modifier.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Fiery Wrath"] = new engine.RulesElement({
    name: "Fiery Wrath",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1744",
    source: "Divine Power",
    categories: ["Fiery Wrath", "ID_FMP_CLASS_FEATURE_1744", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Footsteps of the Gods"] = new engine.RulesElement({
    name: "Footsteps of the Gods",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1710",
    source: "Divine Power",
    categories: ["Footsteps of the Gods", "ID_FMP_CLASS_FEATURE_1710", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Foresight of Mortality"] = new engine.RulesElement({
    name: "Foresight of Mortality",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1781",
    source: "Divine Power",
    categories: ["Foresight of Mortality", "ID_FMP_CLASS_FEATURE_1781", "21"],
    rules: function(model) {
      model.statadd("Intelligence", 2);
      model.statadd("Wisdom", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Fortune Favors the Fortunate"] = new engine.RulesElement({
    name: "Fortune Favors the Fortunate",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1679",
    source: "Divine Power",
    categories: ["Fortune Favors the Fortunate", "ID_FMP_CLASS_FEATURE_1679", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Fortune Favors the Fortunate:When you spend an action point to take an extra action, roll a d6. If the result is 6, you take the extra action but keep the action point, and you can use another action point during the same encounter.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Freedom of Mind and Body"] = new engine.RulesElement({
    name: "Freedom of Mind and Body",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1785",
    source: "Divine Power",
    categories: ["Freedom of Mind and Body", "ID_FMP_CLASS_FEATURE_1785", "21"],
    rules: function(model) {
      model.statadd("Dexterity", 2);
      model.statadd("Wisdom", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Gift of Grace Action"] = new engine.RulesElement({
    name: "Gift of Grace Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1698",
    source: "Divine Power",
    categories: ["Gift of Grace Action", "ID_FMP_CLASS_FEATURE_1698", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Gift of Grace Action:When you spend an action point to take an extra action, each ally adjacent to you also gains a bonus to all defenses equal to your Charisma modifier until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Gift of Hope"] = new engine.RulesElement({
    name: "Gift of Hope",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1697",
    source: "Divine Power",
    categories: ["Gift of Hope", "ID_FMP_CLASS_FEATURE_1697", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Gift of Life"] = new engine.RulesElement({
    name: "Gift of Life",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1699",
    source: "Divine Power",
    categories: ["Gift of Life", "ID_FMP_CLASS_FEATURE_1699", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Golden Halo"] = new engine.RulesElement({
    name: "Golden Halo",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1860",
    source: "Divine Power",
    categories: ["Golden Halo", "ID_FMP_CLASS_FEATURE_1860", "30"],
    rules: function(model) {
      model.statadd("Diplomacy Misc", 2);
      model.statadd("Intimidate Misc", 2);
      model.statadd("divine:healing", 25);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Gray Guard Action"] = new engine.RulesElement({
    name: "Gray Guard Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1760",
    source: "Divine Power",
    categories: ["Gray Guard Action", "ID_FMP_CLASS_FEATURE_1760", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Gray Guard Action:When you spend an action point to take an extra action, you can also shift 3 squares as a free action. In addition, you gain a +2 bonus to attack rolls until the start of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Gray Guard Vigilance"] = new engine.RulesElement({
    name: "Gray Guard Vigilance",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1761",
    source: "Divine Power",
    categories: ["Gray Guard Vigilance", "ID_FMP_CLASS_FEATURE_1761", "11"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_SKILL_TRAINING_PERCEPTION"]);
      model.grant(model.elements.id["ID_INTERNAL_SKILL_TRAINING_STREETWISE"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Hammer Bond"] = new engine.RulesElement({
    name: "Hammer Bond",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1763",
    source: "Divine Power",
    categories: ["Hammer Bond", "ID_FMP_CLASS_FEATURE_1763", "11"],
    rules: function(model) {
      model.statadd("Hammer group:attack", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Harbinger of Demise"] = new engine.RulesElement({
    name: "Harbinger of Demise",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1784",
    source: "Divine Power",
    categories: ["Harbinger of Demise", "ID_FMP_CLASS_FEATURE_1784", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Healer's Sacrifice"] = new engine.RulesElement({
    name: "Healer's Sacrifice",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1695",
    source: "Divine Power",
    categories: ["Healer's Sacrifice", "ID_FMP_CLASS_FEATURE_1695", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Healing Truth"] = new engine.RulesElement({
    name: "Healing Truth",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1715",
    source: "Divine Power",
    categories: ["Healing Truth", "ID_FMP_CLASS_FEATURE_1715", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Heaven's Boon"] = new engine.RulesElement({
    name: "Heaven's Boon",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1669",
    source: "Divine Power",
    categories: ["Heaven's Boon", "ID_FMP_CLASS_FEATURE_1669", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Heaven's Shield"] = new engine.RulesElement({
    name: "Heaven's Shield",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1668",
    source: "Divine Power",
    categories: ["Heaven's Shield", "ID_FMP_CLASS_FEATURE_1668", "11"],
    rules: function(model) {
      model.statadd("AC", function() { /* while you have maximum hit points */ return 1; });
      model.statadd("Fortitude Defense", function() { /* while you have maximum hit points */ return 1; });
      model.statadd("Reflex Defense", function() { /* while you have maximum hit points */ return 1; });
      model.statadd("Will Defense", function() { /* while you have maximum hit points */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Hold the Line"] = new engine.RulesElement({
    name: "Hold the Line",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1768",
    source: "Divine Power",
    categories: ["Hold the Line", "ID_FMP_CLASS_FEATURE_1768", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Holy Ardor"] = new engine.RulesElement({
    name: "Holy Ardor",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1658",
    source: "Divine Power",
    categories: ["Holy Ardor", "ID_FMP_CLASS_FEATURE_1658", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Holy Rebuke"] = new engine.RulesElement({
    name: "Holy Rebuke",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1766",
    source: "Divine Power",
    categories: ["Holy Rebuke", "ID_FMP_CLASS_FEATURE_1766", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Holy Tongue"] = new engine.RulesElement({
    name: "Holy Tongue",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1696",
    source: "Divine Power",
    categories: ["Holy Tongue", "ID_FMP_CLASS_FEATURE_1696", "11"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_LANGUAGE_8"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Honor the Bow"] = new engine.RulesElement({
    name: "Honor the Bow",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1708",
    source: "Divine Power",
    categories: ["Honor the Bow", "ID_FMP_CLASS_FEATURE_1708", "11"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Hopeful Revival"] = new engine.RulesElement({
    name: "Hopeful Revival",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1791",
    source: "Divine Power",
    categories: ["Hopeful Revival", "ID_FMP_CLASS_FEATURE_1791", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Humble Determination"] = new engine.RulesElement({
    name: "Humble Determination",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1678",
    source: "Divine Power",
    categories: ["Humble Determination", "ID_FMP_CLASS_FEATURE_1678", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["I'll Take that Bet"] = new engine.RulesElement({
    name: "I'll Take that Bet",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1680",
    source: "Divine Power",
    categories: ["I'll Take that Bet", "ID_FMP_CLASS_FEATURE_1680", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Imperious Action"] = new engine.RulesElement({
    name: "Imperious Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1665",
    source: "Divine Power",
    categories: ["Imperious Action", "ID_FMP_CLASS_FEATURE_1665", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Imperious Action:When you spend an action point to take an extra action, you also slide an enemy within 5 squares of you 1 square or slide an ally within 5 squares of you 3 squares.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Incandescent Action"] = new engine.RulesElement({
    name: "Incandescent Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1778",
    source: "Divine Power",
    categories: ["Incandescent Action", "ID_FMP_CLASS_FEATURE_1778", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Incandescent Action:When you spend an action point to make an attack, that attack deals extra radiant damage equal to 5 + your Wisdom modifier against the first target hit by it.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Incendiary Action"] = new engine.RulesElement({
    name: "Incendiary Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1742",
    source: "Divine Power",
    categories: ["Incendiary Action", "ID_FMP_CLASS_FEATURE_1742", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Incendiary Action:When you spend an action point to make an attack, each target hit by that attack gains vulnerable 5 fire until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Indomitable Courage"] = new engine.RulesElement({
    name: "Indomitable Courage",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1790",
    source: "Divine Power",
    categories: ["Indomitable Courage", "ID_FMP_CLASS_FEATURE_1790", "21"],
    rules: function(model) {
      model.statadd("Saving Throws", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Influencing Syllable"] = new engine.RulesElement({
    name: "Influencing Syllable",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1737",
    source: "Divine Power",
    categories: ["Influencing Syllable", "ID_FMP_CLASS_FEATURE_1737", "11"],
    rules: function(model) {
      model.statadd("Bluff Misc", 2);
      model.statadd("Diplomacy Misc", 2);
      model.statadd("Intimidate Misc", 2);
      model.statadd("Streetwise Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Insight of the Ancients"] = new engine.RulesElement({
    name: "Insight of the Ancients",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1730",
    source: "Divine Power",
    categories: ["Insight of the Ancients", "ID_FMP_CLASS_FEATURE_1730", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Insight of the Ancients:When you spend an action point to make an attack, you can reroll one attack roll you make as part of that attack. You must use the second result.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Inspire Terror"] = new engine.RulesElement({
    name: "Inspire Terror",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1727",
    source: "Divine Power",
    categories: ["Inspire Terror", "ID_FMP_CLASS_FEATURE_1727", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Inspire Terror:When you spend an action point to take an extra action, you also end any slowed or immobilized conditions on you. In addition, if you make an attack with your extra action, each enemy you hit with that attack is immobilized until the end of your next turn. This attack is a fear effect.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Instant Retribution"] = new engine.RulesElement({
    name: "Instant Retribution",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1796",
    source: "Divine Power",
    categories: ["Instant Retribution", "ID_FMP_CLASS_FEATURE_1796", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Invoker of War"] = new engine.RulesElement({
    name: "Invoker of War",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1807",
    source: "Divine Power",
    categories: ["Invoker of War", "ID_FMP_CLASS_FEATURE_1807", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Invoker's Blood"] = new engine.RulesElement({
    name: "Invoker's Blood",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1746",
    source: "Divine Power",
    categories: ["Invoker's Blood", "ID_FMP_CLASS_FEATURE_1746", "11"],
    rules: function(model) {
      model.statadd("Armor of Wrath:damage", "+2d6");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Just Consequence"] = new engine.RulesElement({
    name: "Just Consequence",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1794",
    source: "Divine Power",
    categories: ["Just Consequence", "ID_FMP_CLASS_FEATURE_1794", "21"]
  });
  byID[te.id] = te;
  
  te = class_feature["Just Presence"] = new engine.RulesElement({
    name: "Just Presence",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1722",
    source: "Divine Power",
    categories: ["Just Presence", "ID_FMP_CLASS_FEATURE_1722", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Just Revival"] = new engine.RulesElement({
    name: "Just Revival",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1795",
    source: "Divine Power",
    categories: ["Just Revival", "ID_FMP_CLASS_FEATURE_1795", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Justice's Mind"] = new engine.RulesElement({
    name: "Justice's Mind",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1793",
    source: "Divine Power",
    categories: ["Justice's Mind", "ID_FMP_CLASS_FEATURE_1793", "21"],
    rules: function(model) {
      model.statadd("Intelligence", 2);
      model.statadd("Wisdom", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Justice's Wrath"] = new engine.RulesElement({
    name: "Justice's Wrath",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1723",
    source: "Divine Power",
    categories: ["Justice's Wrath", "ID_FMP_CLASS_FEATURE_1723", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Keeper's Vengeance"] = new engine.RulesElement({
    name: "Keeper's Vengeance",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1735",
    source: "Divine Power",
    categories: ["Keeper's Vengeance", "ID_FMP_CLASS_FEATURE_1735", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Knight's Resurgence"] = new engine.RulesElement({
    name: "Knight's Resurgence",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1774",
    source: "Divine Power",
    categories: ["Knight's Resurgence", "ID_FMP_CLASS_FEATURE_1774", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Knowledge is Power"] = new engine.RulesElement({
    name: "Knowledge is Power",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1732",
    source: "Divine Power",
    categories: ["Knowledge is Power", "ID_FMP_CLASS_FEATURE_1732", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Lethal Action"] = new engine.RulesElement({
    name: "Lethal Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1671",
    source: "Divine Power",
    categories: ["Lethal Action", "ID_FMP_CLASS_FEATURE_1671", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Liberate the Mind"] = new engine.RulesElement({
    name: "Liberate the Mind",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1786",
    source: "Divine Power",
    categories: ["Liberate the Mind", "ID_FMP_CLASS_FEATURE_1786", "21"]
  });
  byID[te.id] = te;
  
  te = class_feature["Liberating Revival"] = new engine.RulesElement({
    name: "Liberating Revival",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1787",
    source: "Divine Power",
    categories: ["Liberating Revival", "ID_FMP_CLASS_FEATURE_1787", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Life's Wisdom"] = new engine.RulesElement({
    name: "Life's Wisdom",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1797",
    source: "Divine Power",
    categories: ["Life's Wisdom", "ID_FMP_CLASS_FEATURE_1797", "21"],
    rules: function(model) {
      model.statadd("Constitution", 2);
      model.statadd("Wisdom", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Light-Footed Warrior"] = new engine.RulesElement({
    name: "Light-Footed Warrior",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1750",
    source: "Divine Power",
    categories: ["Light-Footed Warrior", "ID_FMP_CLASS_FEATURE_1750", "16"],
    rules: function(model) {
      model.statadd("Speed", function() { 
        if (model.wearing('Armor', ['heavy'])) {
          return 0;
        } else return 0;
       }, "Armor");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Lord of War"] = new engine.RulesElement({
    name: "Lord of War",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1808",
    source: "Divine Power",
    categories: ["Lord of War", "ID_FMP_CLASS_FEATURE_1808", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Luck Is on My Side"] = new engine.RulesElement({
    name: "Luck Is on My Side",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1681",
    source: "Divine Power",
    categories: ["Luck Is on My Side", "ID_FMP_CLASS_FEATURE_1681", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Martyr's Strike"] = new engine.RulesElement({
    name: "Martyr's Strike",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1777",
    source: "Divine Power",
    categories: ["Martyr's Strike", "ID_FMP_CLASS_FEATURE_1777", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Master of the Battlefield"] = new engine.RulesElement({
    name: "Master of the Battlefield",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1806",
    source: "Divine Power",
    categories: ["Master of the Battlefield", "ID_FMP_CLASS_FEATURE_1806", "21"]
  });
  byID[te.id] = te;
  
  te = class_feature["Memorable Action"] = new engine.RulesElement({
    name: "Memorable Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1712",
    source: "Divine Power",
    categories: ["Memorable Action", "ID_FMP_CLASS_FEATURE_1712", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Memorable Action:When you spend an action point to make an attack, your weapon attacks deal 1[W] extra damage until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Miracle Worker Healing Action"] = new engine.RulesElement({
    name: "Miracle Worker Healing Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1706",
    source: "Divine Power",
    categories: ["Miracle Worker Healing Action", "ID_FMP_CLASS_FEATURE_1706", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Miracle Worker Healing Action:When you spend an action point to use a divine healing power, each ally adjacent to you regains hit points equal to 1d6 + your Wisdom modifier. The hit points regained increase to 2d6 + your Wisdom modifier at 21st level.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["None So Great"] = new engine.RulesElement({
    name: "None So Great",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1711",
    source: "Divine Power",
    categories: ["None So Great", "ID_FMP_CLASS_FEATURE_1711", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Peacemaker's Action"] = new engine.RulesElement({
    name: "Peacemaker's Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1701",
    source: "Divine Power",
    categories: ["Peacemaker's Action", "ID_FMP_CLASS_FEATURE_1701", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Peacemaker's Action:When you spend an action point to make an attack, you gain a +4 bonus to attack rolls with attacks that don't deal damage. The bonus lasts until the end of your turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Persistence of Life"] = new engine.RulesElement({
    name: "Persistence of Life",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1800",
    source: "Divine Power",
    categories: ["Persistence of Life", "ID_FMP_CLASS_FEATURE_1800", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Power in Conflict"] = new engine.RulesElement({
    name: "Power in Conflict",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1805",
    source: "Divine Power",
    categories: ["Power in Conflict", "ID_FMP_CLASS_FEATURE_1805", "21"],
    rules: function(model) {
      model.statadd("Strength", 2);
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("Power in Conflict"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Power in Conflict Charisma"] = new engine.RulesElement({
    name: "Power in Conflict Charisma",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_POWER_IN_CONFLICT_CHARISMA",
    source: "Divine Power",
    categories: ["Power in Conflict Charisma", "ID_INTERNAL_CLASS_FEATURE_POWER_IN_CONFLICT_CHARISMA", "Power in Conflict"],
    rules: function(model) {
      model.statadd("Charisma", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Power in Conflict Intelligence"] = new engine.RulesElement({
    name: "Power in Conflict Intelligence",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_POWER_IN_CONFLICT_INTELLIGENCE",
    source: "Divine Power",
    categories: ["Power in Conflict Intelligence", "ID_INTERNAL_CLASS_FEATURE_POWER_IN_CONFLICT_INTELLIGENCE", "Power in Conflict"],
    rules: function(model) {
      model.statadd("Intelligence", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Powerful Action"] = new engine.RulesElement({
    name: "Powerful Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1764",
    source: "Divine Power",
    categories: ["Powerful Action", "ID_FMP_CLASS_FEATURE_1764", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Powerful Action:When you spend an action point to make an attack, each target hit by the attack is knocked prone or dazed until the end of your next turn. You choose the effect for each target after the attack's other effects are resolved.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Quell the Fearful"] = new engine.RulesElement({
    name: "Quell the Fearful",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1729",
    source: "Divine Power",
    categories: ["Quell the Fearful", "ID_FMP_CLASS_FEATURE_1729", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Questing Knight Resolute Action"] = new engine.RulesElement({
    name: "Questing Knight Resolute Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1773",
    source: "Divine Power",
    categories: ["Questing Knight Resolute Action", "ID_FMP_CLASS_FEATURE_1773", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Questing Knight Resolute Action:When you spend an action point to take an extra action, you also make a saving throw with a +2 bonus.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Radiant Blessing"] = new engine.RulesElement({
    name: "Radiant Blessing",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1662",
    source: "Divine Power",
    categories: ["Radiant Blessing", "ID_FMP_CLASS_FEATURE_1662", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Radiant Healing"] = new engine.RulesElement({
    name: "Radiant Healing",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1687",
    source: "Divine Power",
    categories: ["Radiant Healing", "ID_FMP_CLASS_FEATURE_1687", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Raised Voice"] = new engine.RulesElement({
    name: "Raised Voice",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1720",
    source: "Divine Power",
    categories: ["Raised Voice", "ID_FMP_CLASS_FEATURE_1720", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Reborn in Light"] = new engine.RulesElement({
    name: "Reborn in Light",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1856",
    source: "Divine Power",
    categories: ["Reborn in Light", "ID_FMP_CLASS_FEATURE_1856", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Relentless Determination"] = new engine.RulesElement({
    name: "Relentless Determination",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1672",
    source: "Divine Power",
    categories: ["Relentless Determination", "ID_FMP_CLASS_FEATURE_1672", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Renewing Action"] = new engine.RulesElement({
    name: "Renewing Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1709",
    source: "Divine Power",
    categories: ["Renewing Action", "ID_FMP_CLASS_FEATURE_1709", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Renewing Action:When you spend an action point to take an extra action, you also gain an extra use of your healing word power for this encounter.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Restorative Action"] = new engine.RulesElement({
    name: "Restorative Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1748",
    source: "Divine Power",
    categories: ["Restorative Action", "ID_FMP_CLASS_FEATURE_1748", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Restorative Action:When you spend an action point to take an extra action, you can also spend a healing surge.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Ruining Prayer"] = new engine.RulesElement({
    name: "Ruining Prayer",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1734",
    source: "Divine Power",
    categories: ["Ruining Prayer", "ID_FMP_CLASS_FEATURE_1734", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Saintly Grace"] = new engine.RulesElement({
    name: "Saintly Grace",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1858",
    source: "Divine Power",
    categories: ["Saintly Grace", "ID_FMP_CLASS_FEATURE_1858", "21"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 2);
      model.statadd("Reflex Defense", 2);
      model.statadd("Will Defense", 2);
      model.statadd("Saintly Grace", 15);
      model.statadd("Saintly Grace", function() { return model.stat("Wisdom modifier"); });
      model.statadd("resist:necrotic", function() { return model.stat("Saintly Grace"); }, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Sanctified Touch"] = new engine.RulesElement({
    name: "Sanctified Touch",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1859",
    source: "Divine Power",
    categories: ["Sanctified Touch", "ID_FMP_CLASS_FEATURE_1859", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Savant's Action"] = new engine.RulesElement({
    name: "Savant's Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1686",
    source: "Divine Power",
    categories: ["Savant's Action", "ID_FMP_CLASS_FEATURE_1686", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Savant's Action:When you spend an action point to take an extra action, one ally within your line of sight can also spend a healing surge.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Saving Action"] = new engine.RulesElement({
    name: "Saving Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1770",
    source: "Divine Power",
    categories: ["Saving Action", "ID_FMP_CLASS_FEATURE_1770", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Saving Action:When you spend an action point to take an extra action, you also make a saving throw against each effect on you that a save can end. If an effect was caused by a devil, you gain a +2 bonus to the saving throw against that effect.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Scorn the Dead"] = new engine.RulesElement({
    name: "Scorn the Dead",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1779",
    source: "Divine Power",
    categories: ["Scorn the Dead", "ID_FMP_CLASS_FEATURE_1779", "11"],
    rules: function(model) {
      model.statadd("Scorn the Dead", 5);
      model.statadd("Scorn the Dead", 5);
      model.statadd("Scorn the Dead", function() { return model.stat("Strength modifier"); });
      model.statadd("resist:necrotic", function() { return model.stat("Scorn the Dead"); }, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Selfless Action"] = new engine.RulesElement({
    name: "Selfless Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1694",
    source: "Divine Power",
    categories: ["Selfless Action", "ID_FMP_CLASS_FEATURE_1694", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Selfless Action:When you spend an action point to take an extra action, an ally within 5 squares of you can also spend a healing surge.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Serene Edge"] = new engine.RulesElement({
    name: "Serene Edge",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1674",
    source: "Divine Power",
    categories: ["Serene Edge", "ID_FMP_CLASS_FEATURE_1674", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Sheltering Hands"] = new engine.RulesElement({
    name: "Sheltering Hands",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1757",
    source: "Divine Power",
    categories: ["Sheltering Hands", "ID_FMP_CLASS_FEATURE_1757", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Shepherd's Guard"] = new engine.RulesElement({
    name: "Shepherd's Guard",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1677",
    source: "Divine Power",
    categories: ["Shepherd's Guard", "ID_FMP_CLASS_FEATURE_1677", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Shielded Priest"] = new engine.RulesElement({
    name: "Shielded Priest",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1690",
    source: "Divine Power",
    categories: ["Shielded Priest", "ID_FMP_CLASS_FEATURE_1690", "11"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SHIELD_PROFICIENCY_(LIGHT)"]);
      model.grant(model.elements.id["ID_INTERNAL_PROFICIENCY_SHIELD_PROFICIENCY_(HEAVY)"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Shielding Action"] = new engine.RulesElement({
    name: "Shielding Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1758",
    source: "Divine Power",
    categories: ["Shielding Action", "ID_FMP_CLASS_FEATURE_1758", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Shielding Action:When you spend an action point to take an extra action, you and each ally within 5 squares of you also gain a +2 bonus to AC and Reflex until the start of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Silent Presence"] = new engine.RulesElement({
    name: "Silent Presence",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1719",
    source: "Divine Power",
    categories: ["Silent Presence", "ID_FMP_CLASS_FEATURE_1719", "11"],
    rules: function(model) {
      model.statadd("Stealth Misc", 2);
      model.statadd("Insight Misc", 2);
      model.statadd("Intimidate Misc", 2);
      model.statadd("Bluff Misc", -2);
      model.statadd("Diplomacy Misc", -2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Slayer's Oath"] = new engine.RulesElement({
    name: "Slayer's Oath",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1670",
    source: "Divine Power",
    categories: ["Slayer's Oath", "ID_FMP_CLASS_FEATURE_1670", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Slayer's Presence"] = new engine.RulesElement({
    name: "Slayer's Presence",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1780",
    source: "Divine Power",
    categories: ["Slayer's Presence", "ID_FMP_CLASS_FEATURE_1780", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Speaker's Action"] = new engine.RulesElement({
    name: "Speaker's Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1736",
    source: "Divine Power",
    categories: ["Speaker's Action", "ID_FMP_CLASS_FEATURE_1736", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Speaker's Action:When you spend an action point to take an extra action, you can also reroll one die you roll during the same turn for an attack roll, a damage roll, a skill check, or a saving throw and use either result.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Stirring Action"] = new engine.RulesElement({
    name: "Stirring Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1691",
    source: "Divine Power",
    categories: ["Stirring Action", "ID_FMP_CLASS_FEATURE_1691", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Stirring Action:When you spend an action point to make an attack, one ally adjacent to you or to the target of your attack can also make a melee basic attack as a free action, with a bonus to the attack roll equal to your Strength modifier.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Stonecaller's Action"] = new engine.RulesElement({
    name: "Stonecaller's Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1739",
    source: "Divine Power",
    categories: ["Stonecaller's Action", "ID_FMP_CLASS_FEATURE_1739", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Stonecaller's Action:When you spend an action point to take an extra action, you also create an earthquake in a close burst 2, 5, or 10 (your choice). Until the start of your next turn, all creatures other than you treat the area of the burst as difficult terrain, and any creature you hit while it is in the burst is knocked prone after the attack's effects are resolved.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Stonesight"] = new engine.RulesElement({
    name: "Stonesight",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1741",
    source: "Divine Power",
    categories: ["Stonesight", "ID_FMP_CLASS_FEATURE_1741", "16"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_VISION_TREMORSENSE"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Stormhand"] = new engine.RulesElement({
    name: "Stormhand",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1802",
    source: "Divine Power",
    categories: ["Stormhand", "ID_FMP_CLASS_FEATURE_1802", "21"]
  });
  byID[te.id] = te;
  
  te = class_feature["Strength of the Storm"] = new engine.RulesElement({
    name: "Strength of the Storm",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1801",
    source: "Divine Power",
    categories: ["Strength of the Storm", "ID_FMP_CLASS_FEATURE_1801", "21"],
    rules: function(model) {
      model.statadd("Constitution", 2);
      model.statadd("Strength", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Strong Footing"] = new engine.RulesElement({
    name: "Strong Footing",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1740",
    source: "Divine Power",
    categories: ["Strong Footing", "ID_FMP_CLASS_FEATURE_1740", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Stronger and Stronger"] = new engine.RulesElement({
    name: "Stronger and Stronger",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1676",
    source: "Divine Power",
    categories: ["Stronger and Stronger", "ID_FMP_CLASS_FEATURE_1676", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Stronger and Stronger:When you spend an action point to take an extra action, you also regain hit points equal to 1d6 + one-half your level.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Student of the Gods"] = new engine.RulesElement({
    name: "Student of the Gods",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1731",
    source: "Divine Power",
    categories: ["Student of the Gods", "ID_FMP_CLASS_FEATURE_1731", "11"],
    rules: function(model) {
      model.select('Power', 1, {
        filter: function(model, element) { return (true /* NYI: Filter: $$NOT_CLASS */ && element.hasCategory("at-will") && element.hasCategory("1") && element.hasCategory("ID_FMP_CATEGORY_32")); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Superior Defense"] = new engine.RulesElement({
    name: "Superior Defense",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1749",
    source: "Divine Power",
    categories: ["Superior Defense", "ID_FMP_CLASS_FEATURE_1749", "11"],
    rules: function(model) {
      model.statadd("AC", function() { 
        if (model.wearing('Armor', ['heavy'])) {
          return 1;
        } else return 0;
       });
      model.statadd("AC", function() { 
        if (model.wearing('Armor', ['heavy'])) {
          return 1;
        } else return 0;
       });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Suppress Resistance"] = new engine.RulesElement({
    name: "Suppress Resistance",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1753",
    source: "Divine Power",
    categories: ["Suppress Resistance", "ID_FMP_CLASS_FEATURE_1753", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Templar Reaction"] = new engine.RulesElement({
    name: "Templar Reaction",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1666",
    source: "Divine Power",
    categories: ["Templar Reaction", "ID_FMP_CLASS_FEATURE_1666", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Thundering Prayer"] = new engine.RulesElement({
    name: "Thundering Prayer",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1726",
    source: "Divine Power",
    categories: ["Thundering Prayer", "ID_FMP_CLASS_FEATURE_1726", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Thundering Revival"] = new engine.RulesElement({
    name: "Thundering Revival",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1803",
    source: "Divine Power",
    categories: ["Thundering Revival", "ID_FMP_CLASS_FEATURE_1803", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Triumph of the Heart"] = new engine.RulesElement({
    name: "Triumph of the Heart",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1792",
    source: "Divine Power",
    categories: ["Triumph of the Heart", "ID_FMP_CLASS_FEATURE_1792", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["True Heart"] = new engine.RulesElement({
    name: "True Heart",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1756",
    source: "Divine Power",
    categories: ["True Heart", "ID_FMP_CLASS_FEATURE_1756", "16"],
    rules: function(model) {
      model.statadd("Will Defense", function() { /* against fear effects */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Truth Sense"] = new engine.RulesElement({
    name: "Truth Sense",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1772",
    source: "Divine Power",
    categories: ["Truth Sense", "ID_FMP_CLASS_FEATURE_1772", "11"],
    rules: function(model) {
      model.statadd("Will Defense", function() { /* against charm, fear, and illusion effects */ return 2; });
      model.statadd("Insight Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Undaunted"] = new engine.RulesElement({
    name: "Undaunted",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1728",
    source: "Divine Power",
    categories: ["Undaunted", "ID_FMP_CLASS_FEATURE_1728", "11"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against fear effects and a +2 bonus to all defenses against fear attacks */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Undaunted Will"] = new engine.RulesElement({
    name: "Undaunted Will",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1789",
    source: "Divine Power",
    categories: ["Undaunted Will", "ID_FMP_CLASS_FEATURE_1789", "21"],
    rules: function(model) {
      model.statadd("Wisdom", 2);
      model.statadd("Charisma", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Unequaled Clarity"] = new engine.RulesElement({
    name: "Unequaled Clarity",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1716",
    source: "Divine Power",
    categories: ["Unequaled Clarity", "ID_FMP_CLASS_FEATURE_1716", "16"],
    rules: function(model) {
      model.statadd("Passive Insight", 4);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Unfailing Fortune"] = new engine.RulesElement({
    name: "Unfailing Fortune",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1713",
    source: "Divine Power",
    categories: ["Unfailing Fortune", "ID_FMP_CLASS_FEATURE_1713", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Unfettered Durability"] = new engine.RulesElement({
    name: "Unfettered Durability",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1798",
    source: "Divine Power",
    categories: ["Unfettered Durability", "ID_FMP_CLASS_FEATURE_1798", "21"]
  });
  byID[te.id] = te;
  
  te = class_feature["Unflinching Persistence"] = new engine.RulesElement({
    name: "Unflinching Persistence",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1776",
    source: "Divine Power",
    categories: ["Unflinching Persistence", "ID_FMP_CLASS_FEATURE_1776", "11"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Vessel's Action"] = new engine.RulesElement({
    name: "Vessel's Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1745",
    source: "Divine Power",
    categories: ["Vessel's Action", "ID_FMP_CLASS_FEATURE_1745", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Vessel's Action:When you spend an action point to take an extra standard action, you also gain an extra minor action you can use before the end of your next turn. If you are bloodied when you spend the action point, you gain an extra move action instead.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Vessel's Resistance"] = new engine.RulesElement({
    name: "Vessel's Resistance",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1747",
    source: "Divine Power",
    categories: ["Vessel's Resistance", "ID_FMP_CLASS_FEATURE_1747", "16"],
    rules: function(model) {
      model.statadd("resist:all", function() { /* while you are bloodied */ return 5; }, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Vital Revival"] = new engine.RulesElement({
    name: "Vital Revival",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1799",
    source: "Divine Power",
    categories: ["Vital Revival", "ID_FMP_CLASS_FEATURE_1799", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Vow of Nonviolence"] = new engine.RulesElement({
    name: "Vow of Nonviolence",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1700",
    source: "Divine Power",
    categories: ["Vow of Nonviolence", "ID_FMP_CLASS_FEATURE_1700", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Windstrider"] = new engine.RulesElement({
    name: "Windstrider",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1804",
    source: "Divine Power",
    categories: ["Windstrider", "ID_FMP_CLASS_FEATURE_1804", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Word of Life (Miracle Worker)"] = new engine.RulesElement({
    name: "Word of Life (Miracle Worker)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1704",
    source: "Divine Power",
    categories: ["Word of Life (Miracle Worker)", "ID_FMP_CLASS_FEATURE_1704", "11"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
