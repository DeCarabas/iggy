(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Amulet of Life +1"] = new RulesElement({
    name: "Amulet of Life +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8233",
    source: "Dragon Magazine 381",
    categories: ["Amulet of Life +1", "ID_FMP_MAGIC_ITEM_8233"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 1, "Enhancement");
      model.statadd("Reflex Defense", 1, "Enhancement");
      model.statadd("Will Defense", 1, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Amulet of Life +2"] = new RulesElement({
    name: "Amulet of Life +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8234",
    source: "Dragon Magazine 381",
    categories: ["Amulet of Life +2", "ID_FMP_MAGIC_ITEM_8234"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 2, "Enhancement");
      model.statadd("Reflex Defense", 2, "Enhancement");
      model.statadd("Will Defense", 2, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Amulet of Life +3"] = new RulesElement({
    name: "Amulet of Life +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8235",
    source: "Dragon Magazine 381",
    categories: ["Amulet of Life +3", "ID_FMP_MAGIC_ITEM_8235"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 3, "Enhancement");
      model.statadd("Reflex Defense", 3, "Enhancement");
      model.statadd("Will Defense", 3, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Amulet of Life +4"] = new RulesElement({
    name: "Amulet of Life +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8236",
    source: "Dragon Magazine 381",
    categories: ["Amulet of Life +4", "ID_FMP_MAGIC_ITEM_8236"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 4, "Enhancement");
      model.statadd("Reflex Defense", 4, "Enhancement");
      model.statadd("Will Defense", 4, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Amulet of Life +5"] = new RulesElement({
    name: "Amulet of Life +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8237",
    source: "Dragon Magazine 381",
    categories: ["Amulet of Life +5", "ID_FMP_MAGIC_ITEM_8237"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 5, "Enhancement");
      model.statadd("Reflex Defense", 5, "Enhancement");
      model.statadd("Will Defense", 5, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Amulet of Life +6"] = new RulesElement({
    name: "Amulet of Life +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8238",
    source: "Dragon Magazine 381",
    categories: ["Amulet of Life +6", "ID_FMP_MAGIC_ITEM_8238"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 6, "Enhancement");
      model.statadd("Reflex Defense", 6, "Enhancement");
      model.statadd("Will Defense", 6, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Battle Standard of the Hungry Blade (heroic tier)"] = new RulesElement({
    name: "Battle Standard of the Hungry Blade (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8243",
    source: "Dragon Magazine 381",
    categories: ["Battle Standard of the Hungry Blade (heroic tier)", "ID_FMP_MAGIC_ITEM_8243"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Battle Standard of the Tides (paragon tier)"] = new RulesElement({
    name: "Battle Standard of the Tides (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8278",
    source: "Dragon Magazine 381",
    categories: ["Battle Standard of the Tides (paragon tier)", "ID_FMP_MAGIC_ITEM_8278"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Belt of the Flanker's Bane (heroic tier)"] = new RulesElement({
    name: "Belt of the Flanker's Bane (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8240",
    source: "Dragon Magazine 381",
    categories: ["Belt of the Flanker's Bane (heroic tier)", "ID_FMP_MAGIC_ITEM_8240"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Boots of the Mighty Charge (heroic tier)"] = new RulesElement({
    name: "Boots of the Mighty Charge (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8230",
    source: "Dragon Magazine 381",
    categories: ["Boots of the Mighty Charge (heroic tier)", "ID_FMP_MAGIC_ITEM_8230"],
    rules: function(model) {
      model.statadd("Speed", function() { /* when charging */ return 2; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Chaos Burst Tattoo (heroic tier)"] = new RulesElement({
    name: "Chaos Burst Tattoo (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8310",
    source: "Dragon Magazine 381",
    categories: ["Chaos Burst Tattoo (heroic tier)", "ID_FMP_MAGIC_ITEM_8310"],
    rules: function(model) {
      model.statadd("Action Point", "Chaos Burst Tattoo (heroic tier):When you spend an action point to take an extra action that you use for an attack, your chaos sorcerer Chaos Burst feature triggers on the first attack roll of that attack, even if it has already triggered this turn. The AC bonus granted by this Chaos Burst increases to +3 until the start of your next turn, and if the roll instead allows you to make a saving throw, you gain a +2 bonus to that saving throw.");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Cosmic Cycle Tattoo (heroic tier)"] = new RulesElement({
    name: "Cosmic Cycle Tattoo (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8311",
    source: "Dragon Magazine 381",
    categories: ["Cosmic Cycle Tattoo (heroic tier)", "ID_FMP_MAGIC_ITEM_8311"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Crowd Killer Shield (paragon tier)"] = new RulesElement({
    name: "Crowd Killer Shield (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8224",
    source: "Dragon Magazine 381",
    categories: ["Crowd Killer Shield (paragon tier)", "ID_FMP_MAGIC_ITEM_8224"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dice of Auspicious Fortune (paragon tier)"] = new RulesElement({
    name: "Dice of Auspicious Fortune (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8245",
    source: "Dragon Magazine 381",
    categories: ["Dice of Auspicious Fortune (paragon tier)", "ID_FMP_MAGIC_ITEM_8245"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Diplomat's Scabbard (paragon tier)"] = new RulesElement({
    name: "Diplomat's Scabbard (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8244",
    source: "Dragon Magazine 381",
    categories: ["Diplomat's Scabbard (paragon tier)", "ID_FMP_MAGIC_ITEM_8244"],
    rules: function(model) {
      model.statadd("Diplomacy Misc", function() { /* while a weapon is sheathed in your diplomat's scabbard and you are not wielding a weapon or an implement */ return 2; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dragon Sorcery Tattoo (heroic tier)"] = new RulesElement({
    name: "Dragon Sorcery Tattoo (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8312",
    source: "Dragon Magazine 381",
    categories: ["Dragon Sorcery Tattoo (heroic tier)", "ID_FMP_MAGIC_ITEM_8312"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dragonscale Dagger +1"] = new RulesElement({
    name: "Dragonscale Dagger +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8298",
    source: "Dragon Magazine 381",
    categories: ["Dragonscale Dagger +1", "ID_FMP_MAGIC_ITEM_8298"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dragonscale Dagger +2"] = new RulesElement({
    name: "Dragonscale Dagger +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8299",
    source: "Dragon Magazine 381",
    categories: ["Dragonscale Dagger +2", "ID_FMP_MAGIC_ITEM_8299"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dragonscale Dagger +3"] = new RulesElement({
    name: "Dragonscale Dagger +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8300",
    source: "Dragon Magazine 381",
    categories: ["Dragonscale Dagger +3", "ID_FMP_MAGIC_ITEM_8300"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dragonscale Dagger +4"] = new RulesElement({
    name: "Dragonscale Dagger +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8301",
    source: "Dragon Magazine 381",
    categories: ["Dragonscale Dagger +4", "ID_FMP_MAGIC_ITEM_8301"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dragonscale Dagger +5"] = new RulesElement({
    name: "Dragonscale Dagger +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8302",
    source: "Dragon Magazine 381",
    categories: ["Dragonscale Dagger +5", "ID_FMP_MAGIC_ITEM_8302"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dragonscale Dagger +6"] = new RulesElement({
    name: "Dragonscale Dagger +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8303",
    source: "Dragon Magazine 381",
    categories: ["Dragonscale Dagger +6", "ID_FMP_MAGIC_ITEM_8303"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Fey Strike Weapon +1"] = new RulesElement({
    name: "Fey Strike Weapon +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8212",
    source: "Dragon Magazine 381",
    categories: ["Fey Strike Weapon +1", "ID_FMP_MAGIC_ITEM_8212"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Fey Strike Weapon +2"] = new RulesElement({
    name: "Fey Strike Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8213",
    source: "Dragon Magazine 381",
    categories: ["Fey Strike Weapon +2", "ID_FMP_MAGIC_ITEM_8213"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Fey Strike Weapon +3"] = new RulesElement({
    name: "Fey Strike Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8214",
    source: "Dragon Magazine 381",
    categories: ["Fey Strike Weapon +3", "ID_FMP_MAGIC_ITEM_8214"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Fey Strike Weapon +4"] = new RulesElement({
    name: "Fey Strike Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8215",
    source: "Dragon Magazine 381",
    categories: ["Fey Strike Weapon +4", "ID_FMP_MAGIC_ITEM_8215"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Fey Strike Weapon +5"] = new RulesElement({
    name: "Fey Strike Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8216",
    source: "Dragon Magazine 381",
    categories: ["Fey Strike Weapon +5", "ID_FMP_MAGIC_ITEM_8216"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Fey Strike Weapon +6"] = new RulesElement({
    name: "Fey Strike Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8217",
    source: "Dragon Magazine 381",
    categories: ["Fey Strike Weapon +6", "ID_FMP_MAGIC_ITEM_8217"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Flamebane Bomb (level 13)"] = new RulesElement({
    name: "Flamebane Bomb (level 13)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8268",
    source: "Dragon Magazine 381",
    categories: ["Flamebane Bomb (level 13)", "ID_FMP_MAGIC_ITEM_8268"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Flamebane Bomb (level 18)"] = new RulesElement({
    name: "Flamebane Bomb (level 18)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8269",
    source: "Dragon Magazine 381",
    categories: ["Flamebane Bomb (level 18)", "ID_FMP_MAGIC_ITEM_8269"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Flamebane Bomb (level 23)"] = new RulesElement({
    name: "Flamebane Bomb (level 23)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8270",
    source: "Dragon Magazine 381",
    categories: ["Flamebane Bomb (level 23)", "ID_FMP_MAGIC_ITEM_8270"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Flamebane Bomb (level 28)"] = new RulesElement({
    name: "Flamebane Bomb (level 28)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8271",
    source: "Dragon Magazine 381",
    categories: ["Flamebane Bomb (level 28)", "ID_FMP_MAGIC_ITEM_8271"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Flamebane Bomb (level 3)"] = new RulesElement({
    name: "Flamebane Bomb (level 3)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8266",
    source: "Dragon Magazine 381",
    categories: ["Flamebane Bomb (level 3)", "ID_FMP_MAGIC_ITEM_8266"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Flamebane Bomb (level 8)"] = new RulesElement({
    name: "Flamebane Bomb (level 8)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8267",
    source: "Dragon Magazine 381",
    categories: ["Flamebane Bomb (level 8)", "ID_FMP_MAGIC_ITEM_8267"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Foe Binder Ring (paragon tier)"] = new RulesElement({
    name: "Foe Binder Ring (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8239",
    source: "Dragon Magazine 381",
    categories: ["Foe Binder Ring (paragon tier)", "ID_FMP_MAGIC_ITEM_8239"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Foe Caller Gauntlets (epic tier)"] = new RulesElement({
    name: "Foe Caller Gauntlets (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8231",
    source: "Dragon Magazine 381",
    categories: ["Foe Caller Gauntlets (epic tier)", "ID_FMP_MAGIC_ITEM_8231"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Foe Chaser Boots (heroic tier)"] = new RulesElement({
    name: "Foe Chaser Boots (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8241",
    source: "Dragon Magazine 381",
    categories: ["Foe Chaser Boots (heroic tier)", "ID_FMP_MAGIC_ITEM_8241"],
    rules: function(model) {
      model.statadd("Speed", function() { /* when charging an enemy marked by you */ return 2; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Foe Fending Shield (epic tier)"] = new RulesElement({
    name: "Foe Fending Shield (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8229",
    source: "Dragon Magazine 381",
    categories: ["Foe Fending Shield (epic tier)", "ID_FMP_MAGIC_ITEM_8229"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Foe Fending Shield (heroic tier)"] = new RulesElement({
    name: "Foe Fending Shield (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8225",
    source: "Dragon Magazine 381",
    categories: ["Foe Fending Shield (heroic tier)", "ID_FMP_MAGIC_ITEM_8225"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Foe Fending Shield (paragon tier)"] = new RulesElement({
    name: "Foe Fending Shield (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8227",
    source: "Dragon Magazine 381",
    categories: ["Foe Fending Shield (paragon tier)", "ID_FMP_MAGIC_ITEM_8227"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Foe Maker Weapon +1"] = new RulesElement({
    name: "Foe Maker Weapon +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8218",
    source: "Dragon Magazine 381",
    categories: ["Foe Maker Weapon +1", "ID_FMP_MAGIC_ITEM_8218"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Foe Maker Weapon +2"] = new RulesElement({
    name: "Foe Maker Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8219",
    source: "Dragon Magazine 381",
    categories: ["Foe Maker Weapon +2", "ID_FMP_MAGIC_ITEM_8219"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Foe Maker Weapon +3"] = new RulesElement({
    name: "Foe Maker Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8220",
    source: "Dragon Magazine 381",
    categories: ["Foe Maker Weapon +3", "ID_FMP_MAGIC_ITEM_8220"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Foe Maker Weapon +4"] = new RulesElement({
    name: "Foe Maker Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8221",
    source: "Dragon Magazine 381",
    categories: ["Foe Maker Weapon +4", "ID_FMP_MAGIC_ITEM_8221"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Foe Maker Weapon +5"] = new RulesElement({
    name: "Foe Maker Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8222",
    source: "Dragon Magazine 381",
    categories: ["Foe Maker Weapon +5", "ID_FMP_MAGIC_ITEM_8222"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Foe Maker Weapon +6"] = new RulesElement({
    name: "Foe Maker Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8223",
    source: "Dragon Magazine 381",
    categories: ["Foe Maker Weapon +6", "ID_FMP_MAGIC_ITEM_8223"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Jade Sea Snake (heroic tier)"] = new RulesElement({
    name: "Jade Sea Snake (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8279",
    source: "Dragon Magazine 381",
    categories: ["Jade Sea Snake (heroic tier)", "ID_FMP_MAGIC_ITEM_8279"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Lucky Halfling's Weapon +2"] = new RulesElement({
    name: "Lucky Halfling's Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8246",
    source: "Dragon Magazine 381",
    categories: ["Lucky Halfling's Weapon +2", "ID_FMP_MAGIC_ITEM_8246"],
    rules: function(model) {
      model.statadd("Damage", 1, "item");
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Lucky Halfling's Weapon +3"] = new RulesElement({
    name: "Lucky Halfling's Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8247",
    source: "Dragon Magazine 381",
    categories: ["Lucky Halfling's Weapon +3", "ID_FMP_MAGIC_ITEM_8247"],
    rules: function(model) {
      model.statadd("Damage", 2, "item");
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Lucky Halfling's Weapon +4"] = new RulesElement({
    name: "Lucky Halfling's Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8248",
    source: "Dragon Magazine 381",
    categories: ["Lucky Halfling's Weapon +4", "ID_FMP_MAGIC_ITEM_8248"],
    rules: function(model) {
      model.statadd("Damage", 2, "item");
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Lucky Halfling's Weapon +5"] = new RulesElement({
    name: "Lucky Halfling's Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8249",
    source: "Dragon Magazine 381",
    categories: ["Lucky Halfling's Weapon +5", "ID_FMP_MAGIC_ITEM_8249"],
    rules: function(model) {
      model.statadd("Damage", 3, "item");
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Lucky Halfling's Weapon +6"] = new RulesElement({
    name: "Lucky Halfling's Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8250",
    source: "Dragon Magazine 381",
    categories: ["Lucky Halfling's Weapon +6", "ID_FMP_MAGIC_ITEM_8250"],
    rules: function(model) {
      model.statadd("Damage", 3, "item");
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Opal Carp (heroic tier)"] = new RulesElement({
    name: "Opal Carp (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8251",
    source: "Dragon Magazine 381",
    categories: ["Opal Carp (heroic tier)", "ID_FMP_MAGIC_ITEM_8251"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Quenchquiver Weapon +2"] = new RulesElement({
    name: "Quenchquiver Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8257",
    source: "Dragon Magazine 381",
    categories: ["Quenchquiver Weapon +2", "ID_FMP_MAGIC_ITEM_8257"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Quenchquiver Weapon +3"] = new RulesElement({
    name: "Quenchquiver Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8258",
    source: "Dragon Magazine 381",
    categories: ["Quenchquiver Weapon +3", "ID_FMP_MAGIC_ITEM_8258"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Quenchquiver Weapon +4"] = new RulesElement({
    name: "Quenchquiver Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8259",
    source: "Dragon Magazine 381",
    categories: ["Quenchquiver Weapon +4", "ID_FMP_MAGIC_ITEM_8259"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Quenchquiver Weapon +5"] = new RulesElement({
    name: "Quenchquiver Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8260",
    source: "Dragon Magazine 381",
    categories: ["Quenchquiver Weapon +5", "ID_FMP_MAGIC_ITEM_8260"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Quenchquiver Weapon +6"] = new RulesElement({
    name: "Quenchquiver Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8261",
    source: "Dragon Magazine 381",
    categories: ["Quenchquiver Weapon +6", "ID_FMP_MAGIC_ITEM_8261"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Raven Cloak +2"] = new RulesElement({
    name: "Raven Cloak +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8292",
    source: "Dragon Magazine 381",
    categories: ["Raven Cloak +2", "ID_FMP_MAGIC_ITEM_8292"],
    rules: function(model) {
      model.statadd("resist:cold", 5, "resist");
      model.statadd("resist:necrotic", 5, "resist");
      model.statadd("Fortitude Defense", 2, "Enhancement");
      model.statadd("Reflex Defense", 2, "Enhancement");
      model.statadd("Will Defense", 2, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Raven Cloak +3"] = new RulesElement({
    name: "Raven Cloak +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8293",
    source: "Dragon Magazine 381",
    categories: ["Raven Cloak +3", "ID_FMP_MAGIC_ITEM_8293"],
    rules: function(model) {
      model.statadd("resist:cold", 5, "resist");
      model.statadd("resist:necrotic", 5, "resist");
      model.statadd("Fortitude Defense", 3, "Enhancement");
      model.statadd("Reflex Defense", 3, "Enhancement");
      model.statadd("Will Defense", 3, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Raven Cloak +4"] = new RulesElement({
    name: "Raven Cloak +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8294",
    source: "Dragon Magazine 381",
    categories: ["Raven Cloak +4", "ID_FMP_MAGIC_ITEM_8294"],
    rules: function(model) {
      model.statadd("resist:cold", 10, "resist");
      model.statadd("resist:necrotic", 10, "resist");
      model.statadd("Fortitude Defense", 4, "Enhancement");
      model.statadd("Reflex Defense", 4, "Enhancement");
      model.statadd("Will Defense", 4, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Raven Cloak +5"] = new RulesElement({
    name: "Raven Cloak +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8295",
    source: "Dragon Magazine 381",
    categories: ["Raven Cloak +5", "ID_FMP_MAGIC_ITEM_8295"],
    rules: function(model) {
      model.statadd("resist:cold", 10, "resist");
      model.statadd("resist:necrotic", 10, "resist");
      model.statadd("Fortitude Defense", 5, "Enhancement");
      model.statadd("Reflex Defense", 5, "Enhancement");
      model.statadd("Will Defense", 5, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Raven Cloak +6"] = new RulesElement({
    name: "Raven Cloak +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8296",
    source: "Dragon Magazine 381",
    categories: ["Raven Cloak +6", "ID_FMP_MAGIC_ITEM_8296"],
    rules: function(model) {
      model.statadd("resist:cold", 15, "resist");
      model.statadd("resist:necrotic", 15, "resist");
      model.statadd("Fortitude Defense", 6, "Enhancement");
      model.statadd("Reflex Defense", 6, "Enhancement");
      model.statadd("Will Defense", 6, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ring of Uncanny Judgment (paragon tier)"] = new RulesElement({
    name: "Ring of Uncanny Judgment (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8280",
    source: "Dragon Magazine 381",
    categories: ["Ring of Uncanny Judgment (paragon tier)", "ID_FMP_MAGIC_ITEM_8280"],
    rules: function(model) {
      model.statadd("Insight Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Divine Retribution +2"] = new RulesElement({
    name: "Rod of Divine Retribution +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8281",
    source: "Dragon Magazine 381",
    categories: ["Rod of Divine Retribution +2", "ID_FMP_MAGIC_ITEM_8281"],
    rules: function(model) {
      model.statadd("attack rolls(Rod of Divine Retribution +2)", function() { /* against a target that hit you since the end of your last turn */ return 1; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Divine Retribution +3"] = new RulesElement({
    name: "Rod of Divine Retribution +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8282",
    source: "Dragon Magazine 381",
    categories: ["Rod of Divine Retribution +3", "ID_FMP_MAGIC_ITEM_8282"],
    rules: function(model) {
      model.statadd("attack rolls(Rod of Divine Retribution +3)", function() { /* against a target that hit you since the end of your last turn */ return 2; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Divine Retribution +4"] = new RulesElement({
    name: "Rod of Divine Retribution +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8283",
    source: "Dragon Magazine 381",
    categories: ["Rod of Divine Retribution +4", "ID_FMP_MAGIC_ITEM_8283"],
    rules: function(model) {
      model.statadd("attack rolls(Rod of Divine Retribution +4)", function() { /* against a target that hit you since the end of your last turn */ return 2; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Divine Retribution +5"] = new RulesElement({
    name: "Rod of Divine Retribution +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8284",
    source: "Dragon Magazine 381",
    categories: ["Rod of Divine Retribution +5", "ID_FMP_MAGIC_ITEM_8284"],
    rules: function(model) {
      model.statadd("attack rolls(Rod of Divine Retribution +5)", function() { /* against a target that hit you since the end of your last turn */ return 3; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Divine Retribution +6"] = new RulesElement({
    name: "Rod of Divine Retribution +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8285",
    source: "Dragon Magazine 381",
    categories: ["Rod of Divine Retribution +6", "ID_FMP_MAGIC_ITEM_8285"],
    rules: function(model) {
      model.statadd("attack rolls(Rod of Divine Retribution +6)", function() { /* against a target that hit you since the end of your last turn */ return 3; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Scout's Bow +2"] = new RulesElement({
    name: "Scout's Bow +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8252",
    source: "Dragon Magazine 381",
    categories: ["Scout's Bow +2", "ID_FMP_MAGIC_ITEM_8252"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Scout's Bow +3"] = new RulesElement({
    name: "Scout's Bow +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8253",
    source: "Dragon Magazine 381",
    categories: ["Scout's Bow +3", "ID_FMP_MAGIC_ITEM_8253"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Scout's Bow +4"] = new RulesElement({
    name: "Scout's Bow +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8254",
    source: "Dragon Magazine 381",
    categories: ["Scout's Bow +4", "ID_FMP_MAGIC_ITEM_8254"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Scout's Bow +5"] = new RulesElement({
    name: "Scout's Bow +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8255",
    source: "Dragon Magazine 381",
    categories: ["Scout's Bow +5", "ID_FMP_MAGIC_ITEM_8255"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Scout's Bow +6"] = new RulesElement({
    name: "Scout's Bow +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8256",
    source: "Dragon Magazine 381",
    categories: ["Scout's Bow +6", "ID_FMP_MAGIC_ITEM_8256"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Storm Torc Tattoo (heroic tier)"] = new RulesElement({
    name: "Storm Torc Tattoo (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8313",
    source: "Dragon Magazine 381",
    categories: ["Storm Torc Tattoo (heroic tier)", "ID_FMP_MAGIC_ITEM_8313"],
    rules: function(model) {
      model.statadd("Action Point", "Storm Torc Tattoo (heroic tier):When you spend an action point to make an attack, you can use your storm sorcerer Storm's Embrace feature if the natural attack roll is a 16 or higher.");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Surfsurge Shoes (heroic tier)"] = new RulesElement({
    name: "Surfsurge Shoes (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8272",
    source: "Dragon Magazine 381",
    categories: ["Surfsurge Shoes (heroic tier)", "ID_FMP_MAGIC_ITEM_8272"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Swiftstrike Shoes (paragon tier)"] = new RulesElement({
    name: "Swiftstrike Shoes (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8242",
    source: "Dragon Magazine 381",
    categories: ["Swiftstrike Shoes (paragon tier)", "ID_FMP_MAGIC_ITEM_8242"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of the Deep +2"] = new RulesElement({
    name: "Symbol of the Deep +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8273",
    source: "Dragon Magazine 381",
    categories: ["Symbol of the Deep +2", "ID_FMP_MAGIC_ITEM_8273"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of the Deep +3"] = new RulesElement({
    name: "Symbol of the Deep +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8274",
    source: "Dragon Magazine 381",
    categories: ["Symbol of the Deep +3", "ID_FMP_MAGIC_ITEM_8274"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of the Deep +4"] = new RulesElement({
    name: "Symbol of the Deep +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8275",
    source: "Dragon Magazine 381",
    categories: ["Symbol of the Deep +4", "ID_FMP_MAGIC_ITEM_8275"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of the Deep +5"] = new RulesElement({
    name: "Symbol of the Deep +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8276",
    source: "Dragon Magazine 381",
    categories: ["Symbol of the Deep +5", "ID_FMP_MAGIC_ITEM_8276"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of the Deep +6"] = new RulesElement({
    name: "Symbol of the Deep +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8277",
    source: "Dragon Magazine 381",
    categories: ["Symbol of the Deep +6", "ID_FMP_MAGIC_ITEM_8277"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Vigilant Blade +1"] = new RulesElement({
    name: "Vigilant Blade +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8286",
    source: "Dragon Magazine 381",
    categories: ["Vigilant Blade +1", "ID_FMP_MAGIC_ITEM_8286"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Vigilant Blade +2"] = new RulesElement({
    name: "Vigilant Blade +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8287",
    source: "Dragon Magazine 381",
    categories: ["Vigilant Blade +2", "ID_FMP_MAGIC_ITEM_8287"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Vigilant Blade +3"] = new RulesElement({
    name: "Vigilant Blade +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8288",
    source: "Dragon Magazine 381",
    categories: ["Vigilant Blade +3", "ID_FMP_MAGIC_ITEM_8288"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Vigilant Blade +4"] = new RulesElement({
    name: "Vigilant Blade +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8289",
    source: "Dragon Magazine 381",
    categories: ["Vigilant Blade +4", "ID_FMP_MAGIC_ITEM_8289"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Vigilant Blade +5"] = new RulesElement({
    name: "Vigilant Blade +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8290",
    source: "Dragon Magazine 381",
    categories: ["Vigilant Blade +5", "ID_FMP_MAGIC_ITEM_8290"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Vigilant Blade +6"] = new RulesElement({
    name: "Vigilant Blade +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8291",
    source: "Dragon Magazine 381",
    categories: ["Vigilant Blade +6", "ID_FMP_MAGIC_ITEM_8291"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Vortex Mask (paragon tier)"] = new RulesElement({
    name: "Vortex Mask (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8232",
    source: "Dragon Magazine 381",
    categories: ["Vortex Mask (paragon tier)", "ID_FMP_MAGIC_ITEM_8232"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Whirlpool Weapon +2"] = new RulesElement({
    name: "Whirlpool Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8262",
    source: "Dragon Magazine 381",
    categories: ["Whirlpool Weapon +2", "ID_FMP_MAGIC_ITEM_8262"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Whirlpool Weapon +3"] = new RulesElement({
    name: "Whirlpool Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8263",
    source: "Dragon Magazine 381",
    categories: ["Whirlpool Weapon +3", "ID_FMP_MAGIC_ITEM_8263"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Whirlpool Weapon +5"] = new RulesElement({
    name: "Whirlpool Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8264",
    source: "Dragon Magazine 381",
    categories: ["Whirlpool Weapon +5", "ID_FMP_MAGIC_ITEM_8264"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Whirlpool Weapon +6"] = new RulesElement({
    name: "Whirlpool Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8265",
    source: "Dragon Magazine 381",
    categories: ["Whirlpool Weapon +6", "ID_FMP_MAGIC_ITEM_8265"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wild Flare Dagger +1"] = new RulesElement({
    name: "Wild Flare Dagger +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8304",
    source: "Dragon Magazine 381",
    categories: ["Wild Flare Dagger +1", "ID_FMP_MAGIC_ITEM_8304"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wild Flare Dagger +2"] = new RulesElement({
    name: "Wild Flare Dagger +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8305",
    source: "Dragon Magazine 381",
    categories: ["Wild Flare Dagger +2", "ID_FMP_MAGIC_ITEM_8305"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wild Flare Dagger +3"] = new RulesElement({
    name: "Wild Flare Dagger +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8306",
    source: "Dragon Magazine 381",
    categories: ["Wild Flare Dagger +3", "ID_FMP_MAGIC_ITEM_8306"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wild Flare Dagger +4"] = new RulesElement({
    name: "Wild Flare Dagger +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8307",
    source: "Dragon Magazine 381",
    categories: ["Wild Flare Dagger +4", "ID_FMP_MAGIC_ITEM_8307"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wild Flare Dagger +5"] = new RulesElement({
    name: "Wild Flare Dagger +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8308",
    source: "Dragon Magazine 381",
    categories: ["Wild Flare Dagger +5", "ID_FMP_MAGIC_ITEM_8308"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wild Flare Dagger +6"] = new RulesElement({
    name: "Wild Flare Dagger +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8309",
    source: "Dragon Magazine 381",
    categories: ["Wild Flare Dagger +6", "ID_FMP_MAGIC_ITEM_8309"]
  });
  byID[te.id] = te;
  
  
})(this);
