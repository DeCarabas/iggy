(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Familiar = types['Familiar'] || (types['Familiar'] = {});
  te = Familiar["Ambush Vine Shoot"] = new RulesElement({
    name: "Ambush Vine Shoot",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_70",
    source: "Dragon Magazine 377",
    categories: ["Ambush Vine Shoot", "ID_FMP_FAMILIAR_70"],
    rules: function(model) {
      model.statadd("Athletics Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Familiar["Bantam Fastieth"] = new RulesElement({
    name: "Bantam Fastieth",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_56",
    source: "Dragon Magazine 377",
    categories: ["Bantam Fastieth", "ID_FMP_FAMILIAR_56"],
    rules: function(model) {
      model.statadd("Athletics Misc", function() { /* to jump */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Familiar["Bloodthorn Vine Barb"] = new RulesElement({
    name: "Bloodthorn Vine Barb",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_57",
    source: "Dragon Magazine 377",
    categories: ["Bloodthorn Vine Barb", "ID_FMP_FAMILIAR_57"],
    rules: function(model) {
      model.statadd("Heal Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Familiar["Clockwork Scorpion"] = new RulesElement({
    name: "Clockwork Scorpion",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_58",
    source: "Dragon Magazine 377",
    categories: ["Clockwork Scorpion", "ID_FMP_FAMILIAR_58"]
  });
  byID[te.id] = te;
  
  te = Familiar["Crawling Clot"] = new RulesElement({
    name: "Crawling Clot",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_71",
    source: "Dragon Magazine 377",
    categories: ["Crawling Clot", "ID_FMP_FAMILIAR_71"],
    rules: function(model) {
      model.statadd("Heal Misc", 2);
      model.statadd("Crawling Clot", 5);
      model.statadd("resist:necrotic", function() { return model.stat("Crawling Clot"); }, "resist");
      model.statadd("resist:necrotic", 2);
      model.statadd("resist:necrotic", function() { /* while you are bloodied */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Familiar["Dimensional Pet"] = new RulesElement({
    name: "Dimensional Pet",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_72",
    source: "Dragon Magazine 377",
    categories: ["Dimensional Pet", "ID_FMP_FAMILIAR_72"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_LANGUAGE_6"]);
    }
  });
  byID[te.id] = te;
  
  te = Familiar["Dragonmark Reflection"] = new RulesElement({
    name: "Dragonmark Reflection",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_59",
    source: "Dragon Magazine 377",
    categories: ["Dragonmark Reflection", "ID_FMP_FAMILIAR_59"]
  });
  byID[te.id] = te;
  
  te = Familiar["Floating Weapon"] = new RulesElement({
    name: "Floating Weapon",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_60",
    source: "Dragon Magazine 377",
    categories: ["Floating Weapon", "ID_FMP_FAMILIAR_60"],
    rules: function(model) {
      model.statadd("Bluff Misc", 2);
      model.statadd("Intimidate Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Familiar["Gadfly"] = new RulesElement({
    name: "Gadfly",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_61",
    source: "Dragon Magazine 377",
    categories: ["Gadfly", "ID_FMP_FAMILIAR_61"],
    rules: function(model) {
      model.statadd("Perception Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Familiar["Lingering Nightmare"] = new RulesElement({
    name: "Lingering Nightmare",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_77",
    source: "Dragon Magazine 377",
    categories: ["Lingering Nightmare", "ID_FMP_FAMILIAR_77"],
    rules: function(model) {
      model.statadd("Intimidate Misc", 2);
      model.statadd("resist:psychic", 5, "resist");
      model.statadd("resist:psychic", 2);
    }
  });
  byID[te.id] = te;
  
  te = Familiar["Living Infusion"] = new RulesElement({
    name: "Living Infusion",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_73",
    source: "Dragon Magazine 377",
    categories: ["Living Infusion", "ID_FMP_FAMILIAR_73"],
    rules: function(model) {
      model.statadd("Heal Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Familiar["Magpie"] = new RulesElement({
    name: "Magpie",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_62",
    source: "Dragon Magazine 377",
    categories: ["Magpie", "ID_FMP_FAMILIAR_62"],
    rules: function(model) {
      model.statadd("Perception Misc", 2);
      model.statadd("Thievery Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Familiar["Marmoset"] = new RulesElement({
    name: "Marmoset",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_63",
    source: "Dragon Magazine 377",
    categories: ["Marmoset", "ID_FMP_FAMILIAR_63"],
    rules: function(model) {
      model.statadd("Acrobatics Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Familiar["Minor Foulspawn"] = new RulesElement({
    name: "Minor Foulspawn",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_74",
    source: "Dragon Magazine 377",
    categories: ["Minor Foulspawn", "ID_FMP_FAMILIAR_74"],
    rules: function(model) {
      model.statadd("Dungeoneering Misc", 2);
      model.statadd("Saving Throws", function() { /* against fear effects */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Familiar["Octopus"] = new RulesElement({
    name: "Octopus",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_64",
    source: "Dragon Magazine 377",
    categories: ["Octopus", "ID_FMP_FAMILIAR_64"],
    rules: function(model) {
      model.statadd("Stealth Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Familiar["Saddle Squire"] = new RulesElement({
    name: "Saddle Squire",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_65",
    source: "Dragon Magazine 377",
    categories: ["Saddle Squire", "ID_FMP_FAMILIAR_65"],
    rules: function(model) {
      model.statadd("Nature Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Familiar["Silver Lamp"] = new RulesElement({
    name: "Silver Lamp",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_78",
    source: "Dragon Magazine 377",
    categories: ["Silver Lamp", "ID_FMP_FAMILIAR_78"],
    rules: function(model) {
      model.statadd("Religion Misc", 2);
      model.statadd("Arcana Misc", 2);
      model.statadd("Saving Throws", function() { /* against effects created by demons */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Familiar["Smith's Hammer"] = new RulesElement({
    name: "Smith's Hammer",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_75",
    source: "Dragon Magazine 377",
    categories: ["Smith's Hammer", "ID_FMP_FAMILIAR_75"]
  });
  byID[te.id] = te;
  
  te = Familiar["Soarwood Wings"] = new RulesElement({
    name: "Soarwood Wings",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_66",
    source: "Dragon Magazine 377",
    categories: ["Soarwood Wings", "ID_FMP_FAMILIAR_66"],
    rules: function(model) {
      model.statadd("Athletics Misc", function() { /* to jump */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Familiar["Summoner Homunculus"] = new RulesElement({
    name: "Summoner Homunculus",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_67",
    source: "Dragon Magazine 377",
    categories: ["Summoner Homunculus", "ID_FMP_FAMILIAR_67"],
    rules: function(model) {
      model.statadd("Endurance Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Familiar["Tinker Feyling"] = new RulesElement({
    name: "Tinker Feyling",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_76",
    source: "Dragon Magazine 377",
    categories: ["Tinker Feyling", "ID_FMP_FAMILIAR_76"],
    rules: function(model) {
      model.statadd("Bluff Misc", 2);
      model.statadd("Thievery Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = Familiar["Tome Caddy"] = new RulesElement({
    name: "Tome Caddy",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_68",
    source: "Dragon Magazine 377",
    categories: ["Tome Caddy", "ID_FMP_FAMILIAR_68"],
    rules: function(model) {
      model.statadd("Arcana Misc", 2);
      model.statadd("Dungeoneering Misc", 2);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_IMPLEMENT_PROFICIENCY_(TOME)"]);
    }
  });
  byID[te.id] = te;
  
  te = Familiar["Warforged Faceplate"] = new RulesElement({
    name: "Warforged Faceplate",
    type: "Familiar",
    id: "ID_FMP_FAMILIAR_69",
    source: "Dragon Magazine 377",
    categories: ["Warforged Faceplate", "ID_FMP_FAMILIAR_69"],
    rules: function(model) {
      model.statadd("Intimidate Misc", 2);
      model.statadd("Saving Throws", function() { /* against ongoing damage */ return 2; });
    }
  });
  byID[te.id] = te;
  
  
})(this);
