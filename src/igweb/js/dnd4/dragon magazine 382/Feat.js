define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Feat = types['Feat'] || (types['Feat'] = {});
  te = Feat["Acolyte of the Veil"] = new engine.RulesElement({
    name: "Acolyte of the Veil",
    type: "Feat",
    id: "ID_FMP_FEAT_2241",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2241",
    categories: ["Acolyte of the Veil", "ID_FMP_FEAT_2241", "ID_INTERNAL_CATEGORY_MULTICLASS_ASSASSIN", "Multiclass Assassin", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.select('Skill Training', 1, "Acolyte of the Veil", {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_SKILL_1") || element.hasCategory("ID_FMP_SKILL_20")); }
      });
      model.grant(model.elements.id["ID_FMP_POWER_9401"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_ASSASSIN_IMPLEMENTS"]);
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_KI_FOCUS_USER"]);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_ASSASSIN"]);
      model.grant(model.elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Active Familiar"] = new engine.RulesElement({
    name: "Active Familiar",
    type: "Feat",
    id: "ID_FMP_FEAT_2255",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2255",
    categories: ["Active Familiar", "ID_FMP_FEAT_2255", "ID_INTERNAL_CATEGORY_FAMILIAR", "Familiar"]
  });
  byID[te.id] = te;
  
  te = Feat["Aegis Accuracy"] = new engine.RulesElement({
    name: "Aegis Accuracy",
    type: "Feat",
    id: "ID_FMP_FEAT_2261",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2261",
    categories: ["Aegis Accuracy", "ID_FMP_FEAT_2261"]
  });
  byID[te.id] = te;
  
  te = Feat["Aegis Vitality"] = new engine.RulesElement({
    name: "Aegis Vitality",
    type: "Feat",
    id: "ID_FMP_FEAT_2262",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2262",
    categories: ["Aegis Vitality", "ID_FMP_FEAT_2262"]
  });
  byID[te.id] = te;
  
  te = Feat["Allegiance to the Daughter"] = new engine.RulesElement({
    name: "Allegiance to the Daughter",
    type: "Feat",
    id: "ID_FMP_FEAT_2191",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2191",
    categories: ["Allegiance to the Daughter", "ID_FMP_FEAT_2191"]
  });
  byID[te.id] = te;
  
  te = Feat["Arbiter of Justice"] = new engine.RulesElement({
    name: "Arbiter of Justice",
    type: "Feat",
    id: "ID_FMP_FEAT_2166",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2166",
    categories: ["Arbiter of Justice", "ID_FMP_FEAT_2166"],
    rules: function(model) {
      model.statadd("Damage", function() { /* against bloodied targets */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Avenging Resolution"] = new engine.RulesElement({
    name: "Avenging Resolution",
    type: "Feat",
    id: "ID_FMP_FEAT_2162",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2162",
    categories: ["Avenging Resolution", "ID_FMP_FEAT_2162"]
  });
  byID[te.id] = te;
  
  te = Feat["Awaken God Fragment"] = new engine.RulesElement({
    name: "Awaken God Fragment",
    type: "Feat",
    id: "ID_FMP_FEAT_2269",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2269",
    categories: ["Awaken God Fragment", "ID_FMP_FEAT_2269"],
    rules: function(model) {
      model.select('God Fragment', 1, "Awaken God Fragment");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Brutal Grappler Form"] = new engine.RulesElement({
    name: "Brutal Grappler Form",
    type: "Feat",
    id: "ID_FMP_FEAT_2187",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2187",
    categories: ["Brutal Grappler Form", "ID_FMP_FEAT_2187"]
  });
  byID[te.id] = te;
  
  te = Feat["Cast Afar the Spirit"] = new engine.RulesElement({
    name: "Cast Afar the Spirit",
    type: "Feat",
    id: "ID_FMP_FEAT_2256",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2256",
    categories: ["Cast Afar the Spirit", "ID_FMP_FEAT_2256", "ID_INTERNAL_CATEGORY_FAMILIAR", "Familiar"]
  });
  byID[te.id] = te;
  
  te = Feat["Clever Control"] = new engine.RulesElement({
    name: "Clever Control",
    type: "Feat",
    id: "ID_FMP_FEAT_2150",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2150",
    categories: ["Clever Control", "ID_FMP_FEAT_2150"]
  });
  byID[te.id] = te;
  
  te = Feat["Cloud of Poison"] = new engine.RulesElement({
    name: "Cloud of Poison",
    type: "Feat",
    id: "ID_FMP_FEAT_2247",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2247",
    categories: ["Cloud of Poison", "ID_FMP_FEAT_2247"]
  });
  byID[te.id] = te;
  
  te = Feat["Dark Thaumaturgy"] = new engine.RulesElement({
    name: "Dark Thaumaturgy",
    type: "Feat",
    id: "ID_FMP_FEAT_2192",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2192",
    categories: ["Dark Thaumaturgy", "ID_FMP_FEAT_2192"]
  });
  byID[te.id] = te;
  
  te = Feat["Darkfire Dancer"] = new engine.RulesElement({
    name: "Darkfire Dancer",
    type: "Feat",
    id: "ID_FMP_FEAT_2242",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2242",
    categories: ["Darkfire Dancer", "ID_FMP_FEAT_2242"]
  });
  byID[te.id] = te;
  
  te = Feat["Darkness Reign"] = new engine.RulesElement({
    name: "Darkness Reign",
    type: "Feat",
    id: "ID_FMP_FEAT_2248",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2248",
    categories: ["Darkness Reign", "ID_FMP_FEAT_2248"]
  });
  byID[te.id] = te;
  
  te = Feat["Daughter's Promises"] = new engine.RulesElement({
    name: "Daughter's Promises",
    type: "Feat",
    id: "ID_FMP_FEAT_2193",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2193",
    categories: ["Daughter's Promises", "ID_FMP_FEAT_2193"]
  });
  byID[te.id] = te;
  
  te = Feat["Deadly Immobilization"] = new engine.RulesElement({
    name: "Deadly Immobilization",
    type: "Feat",
    id: "ID_FMP_FEAT_2265",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2265",
    categories: ["Deadly Immobilization", "ID_FMP_FEAT_2265"],
    rules: function(model) {
      model.statadd("ID_FMP_CLASS_53:damage", function() { /* whenever you slow or immobilize a target */ return model.stat("Constitution modifier"); });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Destructive Power"] = new engine.RulesElement({
    name: "Destructive Power",
    type: "Feat",
    id: "ID_FMP_FEAT_2151",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2151",
    categories: ["Destructive Power", "ID_FMP_FEAT_2151"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Devil's Favor"] = new engine.RulesElement({
    name: "Devil's Favor",
    type: "Feat",
    id: "ID_FMP_FEAT_2194",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2194",
    categories: ["Devil's Favor", "ID_FMP_FEAT_2194"]
  });
  byID[te.id] = te;
  
  te = Feat["Distant Vengeance"] = new engine.RulesElement({
    name: "Distant Vengeance",
    type: "Feat",
    id: "ID_FMP_FEAT_2163",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2163",
    categories: ["Distant Vengeance", "ID_FMP_FEAT_2163"]
  });
  byID[te.id] = te;
  
  te = Feat["Drow Ecclesiastic"] = new engine.RulesElement({
    name: "Drow Ecclesiastic",
    type: "Feat",
    id: "ID_FMP_FEAT_2243",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2243",
    categories: ["Drow Ecclesiastic", "ID_FMP_FEAT_2243"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10395"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Dusk Elf Stealth"] = new engine.RulesElement({
    name: "Dusk Elf Stealth",
    type: "Feat",
    id: "ID_FMP_FEAT_2156",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2156",
    categories: ["Dusk Elf Stealth", "ID_FMP_FEAT_2156", "ID_INTERNAL_INTERNAL_ELF_BLOODLINE", "Elf Bloodline"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_ELF_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Dusk Elf Weapon Training"] = new engine.RulesElement({
    name: "Dusk Elf Weapon Training",
    type: "Feat",
    id: "ID_FMP_FEAT_2157",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2157",
    categories: ["Dusk Elf Weapon Training", "ID_FMP_FEAT_2157"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_DUSK_ELF_WEAPON_TRAINING"]);
      model.statadd("Dusk Elf Weapon Training", 1);
      model.statadd("Dusk Elf Weapon Training", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Explosive Power"] = new engine.RulesElement({
    name: "Explosive Power",
    type: "Feat",
    id: "ID_FMP_FEAT_2152",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2152",
    categories: ["Explosive Power", "ID_FMP_FEAT_2152"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Exposing Oath"] = new engine.RulesElement({
    name: "Exposing Oath",
    type: "Feat",
    id: "ID_FMP_FEAT_2167",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2167",
    categories: ["Exposing Oath", "ID_FMP_FEAT_2167"]
  });
  byID[te.id] = te;
  
  te = Feat["Extended Teleportation"] = new engine.RulesElement({
    name: "Extended Teleportation",
    type: "Feat",
    id: "ID_FMP_FEAT_2263",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2263",
    categories: ["Extended Teleportation", "ID_FMP_FEAT_2263"]
  });
  byID[te.id] = te;
  
  te = Feat["Fade Into Shadow"] = new engine.RulesElement({
    name: "Fade Into Shadow",
    type: "Feat",
    id: "ID_FMP_FEAT_2234",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2234",
    categories: ["Fade Into Shadow", "ID_FMP_FEAT_2234"]
  });
  byID[te.id] = te;
  
  te = Feat["Fierce Thrasher Form"] = new engine.RulesElement({
    name: "Fierce Thrasher Form",
    type: "Feat",
    id: "ID_FMP_FEAT_2188",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2188",
    categories: ["Fierce Thrasher Form", "ID_FMP_FEAT_2188"]
  });
  byID[te.id] = te;
  
  te = Feat["Fist of Night"] = new engine.RulesElement({
    name: "Fist of Night",
    type: "Feat",
    id: "ID_FMP_FEAT_2252",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2252",
    categories: ["Fist of Night", "ID_FMP_FEAT_2252"]
  });
  byID[te.id] = te;
  
  te = Feat["Flitting Shadows"] = new engine.RulesElement({
    name: "Flitting Shadows",
    type: "Feat",
    id: "ID_FMP_FEAT_2199",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2199",
    categories: ["Flitting Shadows", "ID_FMP_FEAT_2199"]
  });
  byID[te.id] = te;
  
  te = Feat["Forceful Power"] = new engine.RulesElement({
    name: "Forceful Power",
    type: "Feat",
    id: "ID_FMP_FEAT_2153",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2153",
    categories: ["Forceful Power", "ID_FMP_FEAT_2153"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Gathering Night"] = new engine.RulesElement({
    name: "Gathering Night",
    type: "Feat",
    id: "ID_FMP_FEAT_2158",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2158",
    categories: ["Gathering Night", "ID_FMP_FEAT_2158"]
  });
  byID[te.id] = te;
  
  te = Feat["Glasya's Rebuke"] = new engine.RulesElement({
    name: "Glasya's Rebuke",
    type: "Feat",
    id: "ID_FMP_FEAT_2195",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2195",
    categories: ["Glasya's Rebuke", "ID_FMP_FEAT_2195"]
  });
  byID[te.id] = te;
  
  te = Feat["Gloaming Ward"] = new engine.RulesElement({
    name: "Gloaming Ward",
    type: "Feat",
    id: "ID_FMP_FEAT_2159",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2159",
    categories: ["Gloaming Ward", "ID_FMP_FEAT_2159"]
  });
  byID[te.id] = te;
  
  te = Feat["Grave Step"] = new engine.RulesElement({
    name: "Grave Step",
    type: "Feat",
    id: "ID_FMP_FEAT_2235",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2235",
    categories: ["Grave Step", "ID_FMP_FEAT_2235"]
  });
  byID[te.id] = te;
  
  te = Feat["Halo of Isolation"] = new engine.RulesElement({
    name: "Halo of Isolation",
    type: "Feat",
    id: "ID_FMP_FEAT_2168",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2168",
    categories: ["Halo of Isolation", "ID_FMP_FEAT_2168"]
  });
  byID[te.id] = te;
  
  te = Feat["Halo of Tethering"] = new engine.RulesElement({
    name: "Halo of Tethering",
    type: "Feat",
    id: "ID_FMP_FEAT_2170",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2170",
    categories: ["Halo of Tethering", "ID_FMP_FEAT_2170"]
  });
  byID[te.id] = te;
  
  te = Feat["Halo of Warding"] = new engine.RulesElement({
    name: "Halo of Warding",
    type: "Feat",
    id: "ID_FMP_FEAT_2171",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2171",
    categories: ["Halo of Warding", "ID_FMP_FEAT_2171"]
  });
  byID[te.id] = te;
  
  te = Feat["Hand of Divine Guidance"] = new engine.RulesElement({
    name: "Hand of Divine Guidance",
    type: "Feat",
    id: "ID_FMP_FEAT_2172",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2172",
    categories: ["Hand of Divine Guidance", "ID_FMP_FEAT_2172"]
  });
  byID[te.id] = te;
  
  te = Feat["Hellbound Heart"] = new engine.RulesElement({
    name: "Hellbound Heart",
    type: "Feat",
    id: "ID_FMP_FEAT_2196",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2196",
    categories: ["Hellbound Heart", "ID_FMP_FEAT_2196"]
  });
  byID[te.id] = te;
  
  te = Feat["Horns of the Shadow Reaper"] = new engine.RulesElement({
    name: "Horns of the Shadow Reaper",
    type: "Feat",
    id: "ID_FMP_FEAT_2226",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2226",
    categories: ["Horns of the Shadow Reaper", "ID_FMP_FEAT_2226"]
  });
  byID[te.id] = te;
  
  te = Feat["Hunter in the Gloom"] = new engine.RulesElement({
    name: "Hunter in the Gloom",
    type: "Feat",
    id: "ID_FMP_FEAT_2227",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2227",
    categories: ["Hunter in the Gloom", "ID_FMP_FEAT_2227"]
  });
  byID[te.id] = te;
  
  te = Feat["Infernal Soul"] = new engine.RulesElement({
    name: "Infernal Soul",
    type: "Feat",
    id: "ID_FMP_FEAT_2197",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2197",
    categories: ["Infernal Soul", "ID_FMP_FEAT_2197"],
    rules: function(model) {
      model.statadd("resist:fire", function() { /* while you have temporary hit points (increases existing resist if any) */ return 5; }, "resist");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Initiate of Three Masks"] = new engine.RulesElement({
    name: "Initiate of Three Masks",
    type: "Feat",
    id: "ID_FMP_FEAT_2228",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2228",
    categories: ["Initiate of Three Masks", "ID_FMP_FEAT_2228"]
  });
  byID[te.id] = te;
  
  te = Feat["Keeper of the Black Flame"] = new engine.RulesElement({
    name: "Keeper of the Black Flame",
    type: "Feat",
    id: "ID_FMP_FEAT_2229",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2229",
    categories: ["Keeper of the Black Flame", "ID_FMP_FEAT_2229"]
  });
  byID[te.id] = te;
  
  te = Feat["Killer in the Crowd"] = new engine.RulesElement({
    name: "Killer in the Crowd",
    type: "Feat",
    id: "ID_FMP_FEAT_2236",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2236",
    categories: ["Killer in the Crowd", "ID_FMP_FEAT_2236"]
  });
  byID[te.id] = te;
  
  te = Feat["Knife in the Dark"] = new engine.RulesElement({
    name: "Knife in the Dark",
    type: "Feat",
    id: "ID_FMP_FEAT_2244",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2244",
    categories: ["Knife in the Dark", "ID_FMP_FEAT_2244"],
    rules: function(model) {
      model.statadd("Knife in the Dark", 4);
      model.statadd("Knife in the Dark", 1);
      model.statadd("Knife in the Dark", 1);
      model.statadd("damage rolls", function() { /* against targets within your cloud of darkness */ return model.stat("Knife in the Dark"); }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Lolth Blessed"] = new engine.RulesElement({
    name: "Lolth Blessed",
    type: "Feat",
    id: "ID_FMP_FEAT_2253",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2253",
    categories: ["Lolth Blessed", "ID_FMP_FEAT_2253"],
    rules: function(model) {
      model.statadd("Action Point", "Lolth Blessed:Any time you use an action point, you regain the use of your Lolthtouched racial ability during the encounter if you've already used it (and can use either cloud of darkness or darkfire)");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Maw of the Hungry Killer"] = new engine.RulesElement({
    name: "Maw of the Hungry Killer",
    type: "Feat",
    id: "ID_FMP_FEAT_2230",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2230",
    categories: ["Maw of the Hungry Killer", "ID_FMP_FEAT_2230"]
  });
  byID[te.id] = te;
  
  te = Feat["Mind of Flawless Sight"] = new engine.RulesElement({
    name: "Mind of Flawless Sight",
    type: "Feat",
    id: "ID_FMP_FEAT_2231",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2231",
    categories: ["Mind of Flawless Sight", "ID_FMP_FEAT_2231"]
  });
  byID[te.id] = te;
  
  te = Feat["Oath of Urgency"] = new engine.RulesElement({
    name: "Oath of Urgency",
    type: "Feat",
    id: "ID_FMP_FEAT_2164",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2164",
    categories: ["Oath of Urgency", "ID_FMP_FEAT_2164"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10359"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Painful Oath"] = new engine.RulesElement({
    name: "Painful Oath",
    type: "Feat",
    id: "ID_FMP_FEAT_2169",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2169",
    categories: ["Painful Oath", "ID_FMP_FEAT_2169"]
  });
  byID[te.id] = te;
  
  te = Feat["Patient Hunter"] = new engine.RulesElement({
    name: "Patient Hunter",
    type: "Feat",
    id: "ID_FMP_FEAT_2184",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2184",
    categories: ["Patient Hunter", "ID_FMP_FEAT_2184"]
  });
  byID[te.id] = te;
  
  te = Feat["Penetrating Power"] = new engine.RulesElement({
    name: "Penetrating Power",
    type: "Feat",
    id: "ID_FMP_FEAT_2154",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2154",
    categories: ["Penetrating Power", "ID_FMP_FEAT_2154"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Persistent Spirit"] = new engine.RulesElement({
    name: "Persistent Spirit",
    type: "Feat",
    id: "ID_FMP_FEAT_2257",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2257",
    categories: ["Persistent Spirit", "ID_FMP_FEAT_2257", "ID_INTERNAL_CATEGORY_FAMILIAR", "Familiar"]
  });
  byID[te.id] = te;
  
  te = Feat["Resolve of the Iron Terminator"] = new engine.RulesElement({
    name: "Resolve of the Iron Terminator",
    type: "Feat",
    id: "ID_FMP_FEAT_2232",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2232",
    categories: ["Resolve of the Iron Terminator", "ID_FMP_FEAT_2232"]
  });
  byID[te.id] = te;
  
  te = Feat["Ruthless Killer"] = new engine.RulesElement({
    name: "Ruthless Killer",
    type: "Feat",
    id: "ID_FMP_FEAT_2185",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2185",
    categories: ["Ruthless Killer", "ID_FMP_FEAT_2185"]
  });
  byID[te.id] = te;
  
  te = Feat["Scuttling Crawler Form"] = new engine.RulesElement({
    name: "Scuttling Crawler Form",
    type: "Feat",
    id: "ID_FMP_FEAT_2189",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2189",
    categories: ["Scuttling Crawler Form", "ID_FMP_FEAT_2189"],
    rules: function(model) {
      model.statadd("Athletics checks to climb", function() { /* while you are in beast form */ return 5; }, "Feat");
      model.statadd("can climb at your speed", function() { /* while you are in beast form */ return 5; }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Secret Recovery"] = new engine.RulesElement({
    name: "Secret Recovery",
    type: "Feat",
    id: "ID_FMP_FEAT_2245",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2245",
    categories: ["Secret Recovery", "ID_FMP_FEAT_2245"]
  });
  byID[te.id] = te;
  
  te = Feat["Seeker of the Devouring Dark"] = new engine.RulesElement({
    name: "Seeker of the Devouring Dark",
    type: "Feat",
    id: "ID_FMP_FEAT_2233",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2233",
    categories: ["Seeker of the Devouring Dark", "ID_FMP_FEAT_2233"]
  });
  byID[te.id] = te;
  
  te = Feat["Seeking Power"] = new engine.RulesElement({
    name: "Seeking Power",
    type: "Feat",
    id: "ID_FMP_FEAT_2155",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2155",
    categories: ["Seeking Power", "ID_FMP_FEAT_2155"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ReplaceRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Sehanine's Boon"] = new engine.RulesElement({
    name: "Sehanine's Boon",
    type: "Feat",
    id: "ID_FMP_FEAT_2160",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2160",
    categories: ["Sehanine's Boon", "ID_FMP_FEAT_2160"]
  });
  byID[te.id] = te;
  
  te = Feat["Shadow Initiate"] = new engine.RulesElement({
    name: "Shadow Initiate",
    type: "Feat",
    id: "ID_FMP_FEAT_1815",
    source: "Dragon Magazine 382,Dragon Magazine 379",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=1815",
    categories: ["Shadow Initiate", "ID_FMP_FEAT_1815", "ID_INTERNAL_CATEGORY_MULTICLASS_ASSASSIN", "Multiclass Assassin", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_SKILL_TRAINING_STEALTH"]);
      model.grant(model.elements.id["ID_FMP_POWER_9400"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(model.elements.id["ID_INTERNAL_GRANTS_ASSASSIN_IMPLEMENTS"]);
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_KI_FOCUS_USER"]);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_ASSASSIN"]);
      model.grant(model.elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Shadow's Inexorable Grasp"] = new engine.RulesElement({
    name: "Shadow's Inexorable Grasp",
    type: "Feat",
    id: "ID_FMP_FEAT_2237",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2237",
    categories: ["Shadow's Inexorable Grasp", "ID_FMP_FEAT_2237"]
  });
  byID[te.id] = te;
  
  te = Feat["Sickening Shadows"] = new engine.RulesElement({
    name: "Sickening Shadows",
    type: "Feat",
    id: "ID_FMP_FEAT_2200",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2200",
    categories: ["Sickening Shadows", "ID_FMP_FEAT_2200"]
  });
  byID[te.id] = te;
  
  te = Feat["Sight of the Familiar"] = new engine.RulesElement({
    name: "Sight of the Familiar",
    type: "Feat",
    id: "ID_FMP_FEAT_2259",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2259",
    categories: ["Sight of the Familiar", "ID_FMP_FEAT_2259", "ID_INTERNAL_CATEGORY_FAMILIAR", "Familiar"]
  });
  byID[te.id] = te;
  
  te = Feat["Soul in Shadow"] = new engine.RulesElement({
    name: "Soul in Shadow",
    type: "Feat",
    id: "ID_FMP_FEAT_2238",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2238",
    categories: ["Soul in Shadow", "ID_FMP_FEAT_2238"]
  });
  byID[te.id] = te;
  
  te = Feat["Space-Bending Spirit"] = new engine.RulesElement({
    name: "Space-Bending Spirit",
    type: "Feat",
    id: "ID_FMP_FEAT_2260",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2260",
    categories: ["Space-Bending Spirit", "ID_FMP_FEAT_2260", "ID_INTERNAL_CATEGORY_FAMILIAR", "Familiar"]
  });
  byID[te.id] = te;
  
  te = Feat["Spider Charmer"] = new engine.RulesElement({
    name: "Spider Charmer",
    type: "Feat",
    id: "ID_FMP_FEAT_2249",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2249",
    categories: ["Spider Charmer", "ID_FMP_FEAT_2249"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10396"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Swift Familiar"] = new engine.RulesElement({
    name: "Swift Familiar",
    type: "Feat",
    id: "ID_FMP_FEAT_2258",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2258",
    categories: ["Swift Familiar", "ID_FMP_FEAT_2258", "ID_INTERNAL_CATEGORY_FAMILIAR", "Familiar"]
  });
  byID[te.id] = te;
  
  te = Feat["Timely Teleport"] = new engine.RulesElement({
    name: "Timely Teleport",
    type: "Feat",
    id: "ID_FMP_FEAT_2267",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2267",
    categories: ["Timely Teleport", "ID_FMP_FEAT_2267"]
  });
  byID[te.id] = te;
  
  te = Feat["Traveler's Celerity"] = new engine.RulesElement({
    name: "Traveler's Celerity",
    type: "Feat",
    id: "ID_FMP_FEAT_2254",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2254",
    categories: ["Traveler's Celerity", "ID_FMP_FEAT_2254"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10397"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Umbral Wind"] = new engine.RulesElement({
    name: "Umbral Wind",
    type: "Feat",
    id: "ID_FMP_FEAT_2161",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2161",
    categories: ["Umbral Wind", "ID_FMP_FEAT_2161"]
  });
  byID[te.id] = te;
  
  te = Feat["Underdark Climber"] = new engine.RulesElement({
    name: "Underdark Climber",
    type: "Feat",
    id: "ID_FMP_FEAT_2246",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2246",
    categories: ["Underdark Climber", "ID_FMP_FEAT_2246"],
    rules: function(model) {
      model.statadd("Acrobatics Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Unstoppable Beast"] = new engine.RulesElement({
    name: "Unstoppable Beast",
    type: "Feat",
    id: "ID_FMP_FEAT_2186",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2186",
    categories: ["Unstoppable Beast", "ID_FMP_FEAT_2186"]
  });
  byID[te.id] = te;
  
  te = Feat["Unyielding Pursuit"] = new engine.RulesElement({
    name: "Unyielding Pursuit",
    type: "Feat",
    id: "ID_FMP_FEAT_2165",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2165",
    categories: ["Unyielding Pursuit", "ID_FMP_FEAT_2165"]
  });
  byID[te.id] = te;
  
  te = Feat["Vengeful Declaration"] = new engine.RulesElement({
    name: "Vengeful Declaration",
    type: "Feat",
    id: "ID_FMP_FEAT_2173",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2173",
    categories: ["Vengeful Declaration", "ID_FMP_FEAT_2173"]
  });
  byID[te.id] = te;
  
  te = Feat["Venom Master"] = new engine.RulesElement({
    name: "Venom Master",
    type: "Feat",
    id: "ID_FMP_FEAT_2250",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2250",
    categories: ["Venom Master", "ID_FMP_FEAT_2250"]
  });
  byID[te.id] = te;
  
  te = Feat["Venomous Fang Form"] = new engine.RulesElement({
    name: "Venomous Fang Form",
    type: "Feat",
    id: "ID_FMP_FEAT_2190",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2190",
    categories: ["Venomous Fang Form", "ID_FMP_FEAT_2190"]
  });
  byID[te.id] = te;
  
  te = Feat["Vigor of the Blade Adept"] = new engine.RulesElement({
    name: "Vigor of the Blade Adept",
    type: "Feat",
    id: "ID_FMP_FEAT_2264",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2264",
    categories: ["Vigor of the Blade Adept", "ID_FMP_FEAT_2264"],
    rules: function(model) {
      model.statadd("Healing Surge Value", function() { /* while in a swordmage or swordmage paragon path stance */ return model.stat("Strength modifier"); });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Walker Through Shadows"] = new engine.RulesElement({
    name: "Walker Through Shadows",
    type: "Feat",
    id: "ID_FMP_FEAT_2239",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2239",
    categories: ["Walker Through Shadows", "ID_FMP_FEAT_2239"]
  });
  byID[te.id] = te;
  
  te = Feat["Weapon Master"] = new engine.RulesElement({
    name: "Weapon Master",
    type: "Feat",
    id: "ID_FMP_FEAT_2149",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2149",
    categories: ["Weapon Master", "ID_FMP_FEAT_2149"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_WEAPON_MASTER"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Web Spinner"] = new engine.RulesElement({
    name: "Web Spinner",
    type: "Feat",
    id: "ID_FMP_FEAT_2251",
    source: "Dragon Magazine 382",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=2251",
    categories: ["Web Spinner", "ID_FMP_FEAT_2251"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
