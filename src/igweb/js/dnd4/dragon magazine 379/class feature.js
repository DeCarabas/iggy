(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var class_feature = types['class feature'] || (types['class feature'] = {});
  te = class_feature["Assassin's Shroud"] = new RulesElement({
    name: "Assassin's Shroud",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1920",
    source: "Dragon Magazine 379",
    categories: ["Assassin's Shroud", "ID_FMP_CLASS_FEATURE_1920", "1"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_9400"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Bleak Disciple"] = new RulesElement({
    name: "Bleak Disciple",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1952",
    source: "Dragon Magazine 379",
    categories: ["Bleak Disciple", "ID_FMP_CLASS_FEATURE_1952", "ID_FMP_CLASS_FEATURE_1921", "Guild Training", "1"]
  });
  byID[te.id] = te;
  
  te = class_feature["Blooded but Unbowed"] = new RulesElement({
    name: "Blooded but Unbowed",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1941",
    source: "Dragon Magazine 379",
    categories: ["Blooded but Unbowed", "ID_FMP_CLASS_FEATURE_1941", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Bonerender"] = new RulesElement({
    name: "Bonerender",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2080",
    source: "Dragon Magazine 379",
    categories: ["Bonerender", "ID_FMP_CLASS_FEATURE_2080", "11"],
    rules: function(model) {
      model.statadd("two-handed,melee:damage", function() { /* once per round against an enemy granting combat advantage to you */ return model.stat("Constitution modifier"); });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Brutal Action"] = new RulesElement({
    name: "Brutal Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2081",
    source: "Dragon Magazine 379",
    categories: ["Brutal Action", "ID_FMP_CLASS_FEATURE_2081", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Darkstone Tendrils"] = new RulesElement({
    name: "Darkstone Tendrils",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2089",
    source: "Dragon Magazine 379",
    categories: ["Darkstone Tendrils", "ID_FMP_CLASS_FEATURE_2089", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Eyes of the Night"] = new RulesElement({
    name: "Eyes of the Night",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1930",
    source: "Dragon Magazine 379",
    categories: ["Eyes of the Night", "ID_FMP_CLASS_FEATURE_1930", "16"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_VISION_DARKVISION"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Guardian Trick"] = new RulesElement({
    name: "Guardian Trick",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2074",
    source: "Dragon Magazine 379",
    categories: ["Guardian Trick", "ID_FMP_CLASS_FEATURE_2074", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Guardian Trick:When you spend an action point to gain an extra action, if you are in guardian form, you can make your guardian form attack with that action even if you have already made that attack this encounter.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Guild Training"] = new RulesElement({
    name: "Guild Training",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1921",
    source: "Dragon Magazine 379",
    categories: ["Guild Training", "ID_FMP_CLASS_FEATURE_1921", "1"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("ID_FMP_CLASS_FEATURE_1921"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Infectious Dread"] = new RulesElement({
    name: "Infectious Dread",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2077",
    source: "Dragon Magazine 379",
    categories: ["Infectious Dread", "ID_FMP_CLASS_FEATURE_2077", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Lord of Battle"] = new RulesElement({
    name: "Lord of Battle",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1939",
    source: "Dragon Magazine 379",
    categories: ["Lord of Battle", "ID_FMP_CLASS_FEATURE_1939", "21"]
  });
  byID[te.id] = te;
  
  te = class_feature["Master of Poisons"] = new RulesElement({
    name: "Master of Poisons",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1936",
    source: "Dragon Magazine 379",
    categories: ["Master of Poisons", "ID_FMP_CLASS_FEATURE_1936", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Master of Shadows"] = new RulesElement({
    name: "Master of Shadows",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1928",
    source: "Dragon Magazine 379",
    categories: ["Master of Shadows", "ID_FMP_CLASS_FEATURE_1928", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Night Stalker"] = new RulesElement({
    name: "Night Stalker",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1953",
    source: "Dragon Magazine 379",
    categories: ["Night Stalker", "ID_FMP_CLASS_FEATURE_1953", "ID_FMP_CLASS_FEATURE_1921", "Guild Training", "1"],
    rules: function(model) {
      model.statadd("damage rolls", function() { /* if the target is adjacent to none of your enemies */ return model.stat("Charisma modifier"); });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Opening Seized"] = new RulesElement({
    name: "Opening Seized",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2079",
    source: "Dragon Magazine 379",
    categories: ["Opening Seized", "ID_FMP_CLASS_FEATURE_2079", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Parrying Action"] = new RulesElement({
    name: "Parrying Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2078",
    source: "Dragon Magazine 379",
    categories: ["Parrying Action", "ID_FMP_CLASS_FEATURE_2078", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Parrying Action:When you spend an action point to take an extra action, you also gain a +2 bonus to AC until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Perfect Form"] = new RulesElement({
    name: "Perfect Form",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1940",
    source: "Dragon Magazine 379",
    categories: ["Perfect Form", "ID_FMP_CLASS_FEATURE_1940", "21"],
    rules: function(model) {
      model.statadd("Dexterity", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Perfect Killer"] = new RulesElement({
    name: "Perfect Killer",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1942",
    source: "Dragon Magazine 379",
    categories: ["Perfect Killer", "ID_FMP_CLASS_FEATURE_1942", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Persistent Venom"] = new RulesElement({
    name: "Persistent Venom",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1938",
    source: "Dragon Magazine 379",
    categories: ["Persistent Venom", "ID_FMP_CLASS_FEATURE_1938", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Pierce the Darkness"] = new RulesElement({
    name: "Pierce the Darkness",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2088",
    source: "Dragon Magazine 379",
    categories: ["Pierce the Darkness", "ID_FMP_CLASS_FEATURE_2088", "11"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_VISION_DARKVISION"]);
      model.statadd("Perception Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Poisoned Soul"] = new RulesElement({
    name: "Poisoned Soul",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1935",
    source: "Dragon Magazine 379",
    categories: ["Poisoned Soul", "ID_FMP_CLASS_FEATURE_1935", "11"],
    rules: function(model) {
      model.statadd("resist:poison", 5, "resist");
      model.statadd("resist:poison", 10, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Ragespell's Action"] = new RulesElement({
    name: "Ragespell's Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2090",
    source: "Dragon Magazine 379",
    categories: ["Ragespell's Action", "ID_FMP_CLASS_FEATURE_2090", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Ragespell's Action:If you spend an action point to take an attack action against a single target, you deal 1d10 extra damage or deal 2d10 extra damage if the target is size Large or larger");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Shade Form"] = new RulesElement({
    name: "Shade Form",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1922",
    source: "Dragon Magazine 379,Dragon Magazine 385",
    categories: ["Shade Form", "ID_FMP_CLASS_FEATURE_1922", "ID_FMP_HYBRID_CLASS_641", "Hybrid Assassin", "1"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_9402"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Shadow Step"] = new RulesElement({
    name: "Shadow Step",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1923",
    source: "Dragon Magazine 379,Dragon Magazine 385",
    categories: ["Shadow Step", "ID_FMP_CLASS_FEATURE_1923", "ID_FMP_HYBRID_CLASS_641", "Hybrid Assassin", "1"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_9401"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Shadowblade Action"] = new RulesElement({
    name: "Shadowblade Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1929",
    source: "Dragon Magazine 379",
    categories: ["Shadowblade Action", "ID_FMP_CLASS_FEATURE_1929", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Shadowblade Action:When you spend an action point to take an extra action, you gain combat advantage for all your attacks until the end of your turn, and as your last action of the turn, you can teleport 10 squares as a free action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Shyran Spirit Warding"] = new RulesElement({
    name: "Shyran Spirit Warding",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2084",
    source: "Dragon Magazine 379",
    categories: ["Shyran Spirit Warding", "ID_FMP_CLASS_FEATURE_2084", "11"],
    rules: function(model) {
      model.statadd("Fortitude Defense", function() { /* when your spirit companion is adjacent to you */ return 1; });
      model.statadd("Reflex Defense", function() { /* when your spirit companion is adjacent to you */ return 1; });
      model.statadd("Will Defense", function() { /* when your spirit companion is adjacent to you */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Sorcerer's Rampage"] = new RulesElement({
    name: "Sorcerer's Rampage",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2092",
    source: "Dragon Magazine 379",
    categories: ["Sorcerer's Rampage", "ID_FMP_CLASS_FEATURE_2092", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Sorcerous Rage"] = new RulesElement({
    name: "Sorcerous Rage",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2091",
    source: "Dragon Magazine 379",
    categories: ["Sorcerous Rage", "ID_FMP_CLASS_FEATURE_2091", "11"],
    rules: function(model) {
      model.statadd("sorcerer,at-will:damage", "+1d6");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Soul Killer"] = new RulesElement({
    name: "Soul Killer",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1933",
    source: "Dragon Magazine 379",
    categories: ["Soul Killer", "ID_FMP_CLASS_FEATURE_1933", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Soul Reaper"] = new RulesElement({
    name: "Soul Reaper",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1934",
    source: "Dragon Magazine 379",
    categories: ["Soul Reaper", "ID_FMP_CLASS_FEATURE_1934", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Soul Theft"] = new RulesElement({
    name: "Soul Theft",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1931",
    source: "Dragon Magazine 379",
    categories: ["Soul Theft", "ID_FMP_CLASS_FEATURE_1931", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Soul Thief's Action"] = new RulesElement({
    name: "Soul Thief's Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1932",
    source: "Dragon Magazine 379",
    categories: ["Soul Thief's Action", "ID_FMP_CLASS_FEATURE_1932", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Soul Thief's Action:When you spend an action point to take an extra action, you gain a bonus to attack rolls and damage rolls until the end of your turn. The bonus equals 2 + the number of soul shards you currently have.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Spiritblade's Action"] = new RulesElement({
    name: "Spiritblade's Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2083",
    source: "Dragon Magazine 379",
    categories: ["Spiritblade's Action", "ID_FMP_CLASS_FEATURE_2083", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Spiritblade's Action:Whenever you spend an action point to take an extra action, enemies adjacent to your spirit companion are marked by you until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Stalker's Action"] = new RulesElement({
    name: "Stalker's Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1924",
    source: "Dragon Magazine 379",
    categories: ["Stalker's Action", "ID_FMP_CLASS_FEATURE_1924", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Stalker's Action:When you spend an action point to take an extra action, you also gain phasing and become insubstantial until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Stalker's Form"] = new RulesElement({
    name: "Stalker's Form",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1925",
    source: "Dragon Magazine 379",
    categories: ["Stalker's Form", "ID_FMP_CLASS_FEATURE_1925", "11"],
    rules: function(model) {
      model.statadd("AC", function() { /* against opportunity attacks while insubstantial */ return 5; });
      model.statadd("Fortitude Defense", function() { /* against opportunity attacks while insubstantial */ return 5; });
      model.statadd("Reflex Defense", function() { /* against opportunity attacks while insubstantial */ return 5; });
      model.statadd("Will Defense", function() { /* against opportunity attacks while insubstantial */ return 5; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Stalker's Tread"] = new RulesElement({
    name: "Stalker's Tread",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1926",
    source: "Dragon Magazine 379",
    categories: ["Stalker's Tread", "ID_FMP_CLASS_FEATURE_1926", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Stoneform Curse"] = new RulesElement({
    name: "Stoneform Curse",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2087",
    source: "Dragon Magazine 379",
    categories: ["Stoneform Curse", "ID_FMP_CLASS_FEATURE_2087", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Stoneform Curse:Whenever you spend an action point to take an extra action, creatures under your Warlock's Curse are also marked.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Tangling Wild"] = new RulesElement({
    name: "Tangling Wild",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2075",
    source: "Dragon Magazine 379",
    categories: ["Tangling Wild", "ID_FMP_CLASS_FEATURE_2075", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["The Warden of Both Worlds"] = new RulesElement({
    name: "The Warden of Both Worlds",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2076",
    source: "Dragon Magazine 379",
    categories: ["The Warden of Both Worlds", "ID_FMP_CLASS_FEATURE_2076", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Totem Blade"] = new RulesElement({
    name: "Totem Blade",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2085",
    source: "Dragon Magazine 379",
    categories: ["Totem Blade", "ID_FMP_CLASS_FEATURE_2085", "11"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_INTERNAL_TOTEM_BLADE"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Unbreakable Bond"] = new RulesElement({
    name: "Unbreakable Bond",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2086",
    source: "Dragon Magazine 379",
    categories: ["Unbreakable Bond", "ID_FMP_CLASS_FEATURE_2086", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Venomous Action"] = new RulesElement({
    name: "Venomous Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1937",
    source: "Dragon Magazine 379",
    categories: ["Venomous Action", "ID_FMP_CLASS_FEATURE_1937", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Venomous Action:When you spend an action point to take an extra action, you gain a bonus to attack rolls equal to your Constitution modifier against enemies taking ongoing poison damage. The bonus lasts until the end of your next turn. In addition, you can apply a Master of Poisons effect to one of your weapons or a piece of ammunition.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Weapon of the Night"] = new RulesElement({
    name: "Weapon of the Night",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1927",
    source: "Dragon Magazine 379",
    categories: ["Weapon of the Night", "ID_FMP_CLASS_FEATURE_1927", "11"],
    rules: function(model) {
      model.statadd("FREEBEE:ID_INTERNAL_WEAPON_SHADOWBLADE", 1);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(SHADOWBLADE)"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["You're Next"] = new RulesElement({
    name: "You're Next",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2082",
    source: "Dragon Magazine 379",
    categories: ["You're Next", "ID_FMP_CLASS_FEATURE_2082", "16"]
  });
  byID[te.id] = te;
  
  
})(this);
