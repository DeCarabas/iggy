(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Feat = types['Feat'] || (types['Feat'] = {});
  te = Feat["Angharradh's Favor"] = new RulesElement({
    name: "Angharradh's Favor",
    type: "Feat",
    id: "ID_FMP_FEAT_595",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=595",
    categories: ["Angharradh's Favor", "ID_FMP_FEAT_595", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_3583"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Avowed Dragonfoe"] = new RulesElement({
    name: "Avowed Dragonfoe",
    type: "Feat",
    id: "ID_FMP_FEAT_596",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=596",
    categories: ["Avowed Dragonfoe", "ID_FMP_FEAT_596"],
    rules: function(model) {
      model.statadd("attack rolls", function() { /* against dragons */ return 1; });
      model.statadd("attack rolls", function() { /* against dragons while bloodied */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Berronar's Salve"] = new RulesElement({
    name: "Berronar's Salve",
    type: "Feat",
    id: "ID_FMP_FEAT_597",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=597",
    categories: ["Berronar's Salve", "ID_FMP_FEAT_597", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_3584"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Blade Initiate"] = new RulesElement({
    name: "Blade Initiate",
    type: "Feat",
    id: "ID_FMP_FEAT_650",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=650",
    categories: ["Blade Initiate", "ID_FMP_FEAT_650", "ID_INTERNAL_CATEGORY_MULTICLASS_SWORDMAGE", "Multiclass Swordmage", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_SKILL_TRAINING_ARCANA"]);
      model.grant(elements.id["ID_INTERNAL_GRANTS_SWORDMAGE_IMPLEMENTS"]);
      model.grant(elements.id["ID_INTERNAL_COUNTSASCLASS_SWORDMAGE"]);
      model.grant(elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Blessing of Silvanus"] = new RulesElement({
    name: "Blessing of Silvanus",
    type: "Feat",
    id: "ID_FMP_FEAT_598",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=598",
    categories: ["Blessing of Silvanus", "ID_FMP_FEAT_598", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_3586"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Broken Shackles"] = new RulesElement({
    name: "Broken Shackles",
    type: "Feat",
    id: "ID_FMP_FEAT_599",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=599",
    categories: ["Broken Shackles", "ID_FMP_FEAT_599"],
    rules: function(model) {
      model.statadd("Will Defense", 1, "Feat");
      model.statadd("Saving Throws", function() { /* against charm effects */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Chauntea's Blessing"] = new RulesElement({
    name: "Chauntea's Blessing",
    type: "Feat",
    id: "ID_FMP_FEAT_600",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=600",
    categories: ["Chauntea's Blessing", "ID_FMP_FEAT_600", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_3587"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Clutch of Darkness"] = new RulesElement({
    name: "Clutch of Darkness",
    type: "Feat",
    id: "ID_FMP_FEAT_601",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=601",
    categories: ["Clutch of Darkness", "ID_FMP_FEAT_601"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Demonweb Spiral"] = new RulesElement({
    name: "Demonweb Spiral",
    type: "Feat",
    id: "ID_FMP_FEAT_636",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=636",
    categories: ["Demonweb Spiral", "ID_FMP_FEAT_636"]
  });
  byID[te.id] = te;
  
  te = Feat["Distant Swordbond"] = new RulesElement({
    name: "Distant Swordbond",
    type: "Feat",
    id: "ID_FMP_FEAT_637",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=637",
    categories: ["Distant Swordbond", "ID_FMP_FEAT_637"]
  });
  byID[te.id] = te;
  
  te = Feat["Double Aegis"] = new RulesElement({
    name: "Double Aegis",
    type: "Feat",
    id: "ID_FMP_FEAT_638",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=638",
    categories: ["Double Aegis", "ID_FMP_FEAT_638"]
  });
  byID[te.id] = te;
  
  te = Feat["Double Manifestation"] = new RulesElement({
    name: "Double Manifestation",
    type: "Feat",
    id: "ID_FMP_FEAT_648",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=648",
    categories: ["Double Manifestation", "ID_FMP_FEAT_648"]
  });
  byID[te.id] = te;
  
  te = Feat["Elemental Assault"] = new RulesElement({
    name: "Elemental Assault",
    type: "Feat",
    id: "ID_FMP_FEAT_602",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=602",
    categories: ["Elemental Assault", "ID_FMP_FEAT_602"],
    rules: function(model) {
      model.statadd("melee basic:damage", function() { /* if the attack is granted by aegis of assault */ return 3; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Escalating Assault"] = new RulesElement({
    name: "Escalating Assault",
    type: "Feat",
    id: "ID_FMP_FEAT_603",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=603",
    categories: ["Escalating Assault", "ID_FMP_FEAT_603"]
  });
  byID[te.id] = te;
  
  te = Feat["Extra Manifestation"] = new RulesElement({
    name: "Extra Manifestation",
    type: "Feat",
    id: "ID_FMP_FEAT_604",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=604",
    categories: ["Extra Manifestation", "ID_FMP_FEAT_604"],
    rules: function(model) {
      model.select('Racial Trait', 1, {
        filter: function(model, element) { return ((((((((element.hasCategory("earthsoul") || element.hasCategory("firesoul")) || element.hasCategory("stormsoul")) || element.hasCategory("watersoul")) || element.hasCategory("windsoul")) || element.hasCategory("causticsoul")) || element.hasCategory("cindersoul")) || element.hasCategory("plaguesoul")) || element.hasCategory("voidsoul")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Extra Manifestation II"] = new RulesElement({
    name: "Extra Manifestation II",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_EXTRA_MANIFESTATION_II",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_EXTRA_MANIFESTATION_II",
    categories: ["Extra Manifestation II", "ID_INTERNAL_FEAT_EXTRA_MANIFESTATION_II"],
    rules: function(model) {
      model.select('Racial Trait', 1, {
        filter: function(model, element) { return ((((((((element.hasCategory("earthsoul") || element.hasCategory("firesoul")) || element.hasCategory("stormsoul")) || element.hasCategory("watersoul")) || element.hasCategory("windsoul")) || element.hasCategory("causticsoul")) || element.hasCategory("cindersoul")) || element.hasCategory("plaguesoul")) || element.hasCategory("voidsoul")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Extra Manifestation III"] = new RulesElement({
    name: "Extra Manifestation III",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_EXTRA_MANIFESTATION_III",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_EXTRA_MANIFESTATION_III",
    categories: ["Extra Manifestation III", "ID_INTERNAL_FEAT_EXTRA_MANIFESTATION_III"],
    rules: function(model) {
      model.select('Racial Trait', 1, {
        filter: function(model, element) { return ((((((((element.hasCategory("earthsoul") || element.hasCategory("firesoul")) || element.hasCategory("stormsoul")) || element.hasCategory("watersoul")) || element.hasCategory("windsoul")) || element.hasCategory("causticsoul")) || element.hasCategory("cindersoul")) || element.hasCategory("plaguesoul")) || element.hasCategory("voidsoul")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Extra Manifestation IV"] = new RulesElement({
    name: "Extra Manifestation IV",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_EXTRA_MANIFESTATION_IV",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_EXTRA_MANIFESTATION_IV",
    categories: ["Extra Manifestation IV", "ID_INTERNAL_FEAT_EXTRA_MANIFESTATION_IV"],
    rules: function(model) {
      model.select('Racial Trait', 1, {
        filter: function(model, element) { return ((((((((element.hasCategory("earthsoul") || element.hasCategory("firesoul")) || element.hasCategory("stormsoul")) || element.hasCategory("watersoul")) || element.hasCategory("windsoul")) || element.hasCategory("causticsoul")) || element.hasCategory("cindersoul")) || element.hasCategory("plaguesoul")) || element.hasCategory("voidsoul")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Extra Manifestation V"] = new RulesElement({
    name: "Extra Manifestation V",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_EXTRA_MANIFESTATION_V",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_EXTRA_MANIFESTATION_V",
    categories: ["Extra Manifestation V", "ID_INTERNAL_FEAT_EXTRA_MANIFESTATION_V"],
    rules: function(model) {
      model.select('Racial Trait', 1, {
        filter: function(model, element) { return ((((((((element.hasCategory("earthsoul") || element.hasCategory("firesoul")) || element.hasCategory("stormsoul")) || element.hasCategory("watersoul")) || element.hasCategory("windsoul")) || element.hasCategory("causticsoul")) || element.hasCategory("cindersoul")) || element.hasCategory("plaguesoul")) || element.hasCategory("voidsoul")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Extra Manifestation VI"] = new RulesElement({
    name: "Extra Manifestation VI",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_EXTRA_MANIFESTATION_VI",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_EXTRA_MANIFESTATION_VI",
    categories: ["Extra Manifestation VI", "ID_INTERNAL_FEAT_EXTRA_MANIFESTATION_VI"],
    rules: function(model) {
      model.select('Racial Trait', 1, {
        filter: function(model, element) { return ((((((((element.hasCategory("earthsoul") || element.hasCategory("firesoul")) || element.hasCategory("stormsoul")) || element.hasCategory("watersoul")) || element.hasCategory("windsoul")) || element.hasCategory("causticsoul")) || element.hasCategory("cindersoul")) || element.hasCategory("plaguesoul")) || element.hasCategory("voidsoul")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Extra Manifestation VII"] = new RulesElement({
    name: "Extra Manifestation VII",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_EXTRA_MANIFESTATION_VII",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_EXTRA_MANIFESTATION_VII",
    categories: ["Extra Manifestation VII", "ID_INTERNAL_FEAT_EXTRA_MANIFESTATION_VII"],
    rules: function(model) {
      model.select('Racial Trait', 1, {
        filter: function(model, element) { return ((((((((element.hasCategory("earthsoul") || element.hasCategory("firesoul")) || element.hasCategory("stormsoul")) || element.hasCategory("watersoul")) || element.hasCategory("windsoul")) || element.hasCategory("causticsoul")) || element.hasCategory("cindersoul")) || element.hasCategory("plaguesoul")) || element.hasCategory("voidsoul")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Extra Manifestation VIII"] = new RulesElement({
    name: "Extra Manifestation VIII",
    type: "Feat",
    id: "ID_INTERNAL_FEAT_EXTRA_MANIFESTATION_VIII",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=FEAT_EXTRA_MANIFESTATION_VIII",
    categories: ["Extra Manifestation VIII", "ID_INTERNAL_FEAT_EXTRA_MANIFESTATION_VIII"],
    rules: function(model) {
      model.select('Racial Trait', 1, {
        filter: function(model, element) { return ((((((((element.hasCategory("earthsoul") || element.hasCategory("firesoul")) || element.hasCategory("stormsoul")) || element.hasCategory("watersoul")) || element.hasCategory("windsoul")) || element.hasCategory("causticsoul")) || element.hasCategory("cindersoul")) || element.hasCategory("plaguesoul")) || element.hasCategory("voidsoul")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Eyes of Selûne"] = new RulesElement({
    name: "Eyes of Selûne",
    type: "Feat",
    id: "ID_FMP_FEAT_605",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=605",
    categories: ["Eyes of Selûne", "ID_FMP_FEAT_605", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_3589"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Fleetness of Mielikki"] = new RulesElement({
    name: "Fleetness of Mielikki",
    type: "Feat",
    id: "ID_FMP_FEAT_606",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=606",
    categories: ["Fleetness of Mielikki", "ID_FMP_FEAT_606", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_3591"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Ghostwise Heritage"] = new RulesElement({
    name: "Ghostwise Heritage",
    type: "Feat",
    id: "ID_FMP_FEAT_607",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=607",
    categories: ["Ghostwise Heritage", "ID_FMP_FEAT_607"]
  });
  byID[te.id] = te;
  
  te = Feat["Glittergold's Gambit"] = new RulesElement({
    name: "Glittergold's Gambit",
    type: "Feat",
    id: "ID_FMP_FEAT_608",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=608",
    categories: ["Glittergold's Gambit", "ID_FMP_FEAT_608", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_3593"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Gold Dwarf Pride"] = new RulesElement({
    name: "Gold Dwarf Pride",
    type: "Feat",
    id: "ID_FMP_FEAT_609",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=609",
    categories: ["Gold Dwarf Pride", "ID_FMP_FEAT_609"]
  });
  byID[te.id] = te;
  
  te = Feat["Gond's Craft"] = new RulesElement({
    name: "Gond's Craft",
    type: "Feat",
    id: "ID_FMP_FEAT_610",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=610",
    categories: ["Gond's Craft", "ID_FMP_FEAT_610", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_3594"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Ilmater's Martyrdom"] = new RulesElement({
    name: "Ilmater's Martyrdom",
    type: "Feat",
    id: "ID_FMP_FEAT_611",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=611",
    categories: ["Ilmater's Martyrdom", "ID_FMP_FEAT_611", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_3596"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Improved Darkspiral Aura"] = new RulesElement({
    name: "Improved Darkspiral Aura",
    type: "Feat",
    id: "ID_FMP_FEAT_639",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=639",
    categories: ["Improved Darkspiral Aura", "ID_FMP_FEAT_639"]
  });
  byID[te.id] = te;
  
  te = Feat["Improved Swordbond"] = new RulesElement({
    name: "Improved Swordbond",
    type: "Feat",
    id: "ID_FMP_FEAT_612",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=612",
    categories: ["Improved Swordbond", "ID_FMP_FEAT_612"]
  });
  byID[te.id] = te;
  
  te = Feat["Intelligent Blademaster"] = new RulesElement({
    name: "Intelligent Blademaster",
    type: "Feat",
    id: "ID_FMP_FEAT_613",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=613",
    categories: ["Intelligent Blademaster", "ID_FMP_FEAT_613"],
    rules: function(model) {
      model.statadd("melee basic,melee weapon:key ability", "int");
      model.statadd("ranged basic,melee weapon:key ability", "int");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Kelemvor's Judgment"] = new RulesElement({
    name: "Kelemvor's Judgment",
    type: "Feat",
    id: "ID_FMP_FEAT_614",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=614",
    categories: ["Kelemvor's Judgment", "ID_FMP_FEAT_614", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_3598"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Manifest Resistance"] = new RulesElement({
    name: "Manifest Resistance",
    type: "Feat",
    id: "ID_FMP_FEAT_615",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=615",
    categories: ["Manifest Resistance", "ID_FMP_FEAT_615"],
    rules: function(model) {
      model.statadd("_stormsoul resist", 5);
      model.statadd("_firesoul resist", 5);
      model.statadd("_windsoul resist", 5);
      model.statadd("Causticsoul Resists", 5);
      model.statadd("Cindersoul Resists", 5);
      model.statadd("Plaguesoul Resists", 5);
      model.statadd("Voidsoul Resists", 5);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Master of Fire and Darkness"] = new RulesElement({
    name: "Master of Fire and Darkness",
    type: "Feat",
    id: "ID_FMP_FEAT_640",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=640",
    categories: ["Master of Fire and Darkness", "ID_FMP_FEAT_640"]
  });
  byID[te.id] = te;
  
  te = Feat["Merciless Killer"] = new RulesElement({
    name: "Merciless Killer",
    type: "Feat",
    id: "ID_FMP_FEAT_641",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=641",
    categories: ["Merciless Killer", "ID_FMP_FEAT_641"],
    rules: function(model) {
      model.statadd("damage rolls", function() { /* against bloodied foes who are granting combat advantage to you */ return 5; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Moon Elf Resilience"] = new RulesElement({
    name: "Moon Elf Resilience",
    type: "Feat",
    id: "ID_FMP_FEAT_616",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=616",
    categories: ["Moon Elf Resilience", "ID_FMP_FEAT_616"]
  });
  byID[te.id] = te;
  
  te = Feat["Moongleam Oath"] = new RulesElement({
    name: "Moongleam Oath",
    type: "Feat",
    id: "ID_FMP_FEAT_642",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=642",
    categories: ["Moongleam Oath", "ID_FMP_FEAT_642"],
    rules: function(model) {
      model.statadd("attack rolls", function() { /* against creatures that have the shadow origin */ return 1; });
      model.statadd("damage rolls", function() { /* against creatures that have the shadow origin */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Oghma's Recall"] = new RulesElement({
    name: "Oghma's Recall",
    type: "Feat",
    id: "ID_FMP_FEAT_617",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=617",
    categories: ["Oghma's Recall", "ID_FMP_FEAT_617", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_3603"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Power of Amaunator"] = new RulesElement({
    name: "Power of Amaunator",
    type: "Feat",
    id: "ID_FMP_FEAT_618",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=618",
    categories: ["Power of Amaunator", "ID_FMP_FEAT_618", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_3608"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Retributive Shield"] = new RulesElement({
    name: "Retributive Shield",
    type: "Feat",
    id: "ID_FMP_FEAT_619",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=619",
    categories: ["Retributive Shield", "ID_FMP_FEAT_619"]
  });
  byID[te.id] = te;
  
  te = Feat["Righteous Rage of Tempus"] = new RulesElement({
    name: "Righteous Rage of Tempus",
    type: "Feat",
    id: "ID_FMP_FEAT_620",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=620",
    categories: ["Righteous Rage of Tempus", "ID_FMP_FEAT_620", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_3609"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Ruthless Hunter"] = new RulesElement({
    name: "Ruthless Hunter",
    type: "Feat",
    id: "ID_FMP_FEAT_621",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=621",
    categories: ["Ruthless Hunter", "ID_FMP_FEAT_621"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Scion of the Gods"] = new RulesElement({
    name: "Scion of the Gods",
    type: "Feat",
    id: "ID_FMP_FEAT_622",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=622",
    categories: ["Scion of the Gods", "ID_FMP_FEAT_622"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 1, "Feat");
      model.statadd("Will Defense", 1, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Sheela Peryroyl's Gift"] = new RulesElement({
    name: "Sheela Peryroyl's Gift",
    type: "Feat",
    id: "ID_FMP_FEAT_623",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=623",
    categories: ["Sheela Peryroyl's Gift", "ID_FMP_FEAT_623", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_3610"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Shield of Shadows"] = new RulesElement({
    name: "Shield of Shadows",
    type: "Feat",
    id: "ID_FMP_FEAT_624",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=624",
    categories: ["Shield of Shadows", "ID_FMP_FEAT_624"],
    rules: function(model) {
      model.statadd("Reflex Defense", function() { /* while within the effect of your cloud of darkness power */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Shield the Fallen"] = new RulesElement({
    name: "Shield the Fallen",
    type: "Feat",
    id: "ID_FMP_FEAT_625",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=625",
    categories: ["Shield the Fallen", "ID_FMP_FEAT_625"]
  });
  byID[te.id] = te;
  
  te = Feat["Shocking Flame"] = new RulesElement({
    name: "Shocking Flame",
    type: "Feat",
    id: "ID_FMP_FEAT_643",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=643",
    categories: ["Shocking Flame", "ID_FMP_FEAT_643"],
    rules: function(model) {
      model.statadd("Shocking Flame", 2);
      model.statadd("Shocking Flame", 2);
      model.statadd("melee:damage", function() { /* when manifesting firesoul or stormsoul */ return model.stat("Shocking Flame"); });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Stoneguard"] = new RulesElement({
    name: "Stoneguard",
    type: "Feat",
    id: "ID_FMP_FEAT_644",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=644",
    categories: ["Stoneguard", "ID_FMP_FEAT_644"],
    rules: function(model) {
      model.statadd("AC", function() { /* against ranged attacks while manifesting earthsoul */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Stormrider"] = new RulesElement({
    name: "Stormrider",
    type: "Feat",
    id: "ID_FMP_FEAT_645",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=645",
    categories: ["Stormrider", "ID_FMP_FEAT_645"],
    rules: function(model) {
      model.statadd("Speed", function() { /* when you are manifesting windsoul or watersoul */ return 1; }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Stubborn Survivor"] = new RulesElement({
    name: "Stubborn Survivor",
    type: "Feat",
    id: "ID_FMP_FEAT_626",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=626",
    categories: ["Stubborn Survivor", "ID_FMP_FEAT_626"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* whenever you have no action points remaining */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Student of Sword Magic"] = new RulesElement({
    name: "Student of Sword Magic",
    type: "Feat",
    id: "ID_FMP_FEAT_627",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=627",
    categories: ["Student of Sword Magic", "ID_FMP_FEAT_627"],
    rules: function(model) {
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_53") && element.hasCategory("daily") && element.hasCategory("1")); }
      });
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_53") && element.hasCategory("daily") && element.hasCategory("5")); }
      });
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_53") && element.hasCategory("daily") && element.hasCategory("9")); }
      });
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_53") && element.hasCategory("daily") && element.hasCategory("15")); }
      });
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_53") && element.hasCategory("daily") && element.hasCategory("19")); }
      });
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_53") && element.hasCategory("daily") && element.hasCategory("25")); }
      });
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_53") && element.hasCategory("daily") && element.hasCategory("29")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Student of the Plague"] = new RulesElement({
    name: "Student of the Plague",
    type: "Feat",
    id: "ID_FMP_FEAT_651",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=651",
    categories: ["Student of the Plague", "ID_FMP_FEAT_651", "ID_INTERNAL_CATEGORY_MULTICLASS_SPELLSCARRED", "Multiclass Spellscarred", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("Spellscarred"); }
      });
      model.grant(elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Sun Elf Grace"] = new RulesElement({
    name: "Sun Elf Grace",
    type: "Feat",
    id: "ID_FMP_FEAT_628",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=628",
    categories: ["Sun Elf Grace", "ID_FMP_FEAT_628"]
  });
  byID[te.id] = te;
  
  te = Feat["Sune's Touch"] = new RulesElement({
    name: "Sune's Touch",
    type: "Feat",
    id: "ID_FMP_FEAT_629",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=629",
    categories: ["Sune's Touch", "ID_FMP_FEAT_629", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_3611"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Torm's Justice"] = new RulesElement({
    name: "Torm's Justice",
    type: "Feat",
    id: "ID_FMP_FEAT_630",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=630",
    categories: ["Torm's Justice", "ID_FMP_FEAT_630", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_3612"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Total Aegis"] = new RulesElement({
    name: "Total Aegis",
    type: "Feat",
    id: "ID_FMP_FEAT_649",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=649",
    categories: ["Total Aegis", "ID_FMP_FEAT_649"]
  });
  byID[te.id] = te;
  
  te = Feat["Tymora's Coin"] = new RulesElement({
    name: "Tymora's Coin",
    type: "Feat",
    id: "ID_FMP_FEAT_631",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=631",
    categories: ["Tymora's Coin", "ID_FMP_FEAT_631", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_3613"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Venomous Heritage"] = new RulesElement({
    name: "Venomous Heritage",
    type: "Feat",
    id: "ID_FMP_FEAT_646",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=646",
    categories: ["Venomous Heritage", "ID_FMP_FEAT_646"],
    rules: function(model) {
      model.statadd("resist:poison", 5, "resist");
      model.statadd("Saving Throws", function() { /* against poison effects */ return 2; }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Versatile Resistance"] = new RulesElement({
    name: "Versatile Resistance",
    type: "Feat",
    id: "ID_FMP_FEAT_632",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=632",
    categories: ["Versatile Resistance", "ID_FMP_FEAT_632"],
    rules: function(model) {
      model.statadd("resist:fire", 5, "resist");
      model.statadd("resist:cold", 5, "resist");
      model.statadd("resist:thunder", 5, "resist");
    }
  });
  byID[te.id] = te;
  
  te = Feat["War Wizardry"] = new RulesElement({
    name: "War Wizardry",
    type: "Feat",
    id: "ID_FMP_FEAT_647",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=647",
    categories: ["War Wizardry", "ID_FMP_FEAT_647"]
  });
  byID[te.id] = te;
  
  te = Feat["Waukeen's Silver Tongue"] = new RulesElement({
    name: "Waukeen's Silver Tongue",
    type: "Feat",
    id: "ID_FMP_FEAT_635",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=635",
    categories: ["Waukeen's Silver Tongue", "ID_FMP_FEAT_635", "ID_INTERNAL_CATEGORY_DIVINITY", "Divinity"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_3614"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Wild Elf Luck"] = new RulesElement({
    name: "Wild Elf Luck",
    type: "Feat",
    id: "ID_FMP_FEAT_633",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=633",
    categories: ["Wild Elf Luck", "ID_FMP_FEAT_633"]
  });
  byID[te.id] = te;
  
  te = Feat["Wood Elf Agility"] = new RulesElement({
    name: "Wood Elf Agility",
    type: "Feat",
    id: "ID_FMP_FEAT_634",
    source: "Forgotten Realms Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=634",
    categories: ["Wood Elf Agility", "ID_FMP_FEAT_634"]
  });
  byID[te.id] = te;
  
  
})(this);
