(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Battle Harness +1"] = new RulesElement({
    name: "Battle Harness +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4341",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 368",
    categories: ["Battle Harness +1", "ID_FMP_MAGIC_ITEM_4341"],
    rules: function(model) {
      model.statadd("Initiative Misc", 1, "Power");
      model.statadd("Armor Class", 1, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Battle Harness +2"] = new RulesElement({
    name: "Battle Harness +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4342",
    source: "Dragon Magazine Annual 2009",
    categories: ["Battle Harness +2", "ID_FMP_MAGIC_ITEM_4342"],
    rules: function(model) {
      model.statadd("Initiative Misc", 2, "Power");
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Battle Harness +3"] = new RulesElement({
    name: "Battle Harness +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4343",
    source: "Dragon Magazine Annual 2009",
    categories: ["Battle Harness +3", "ID_FMP_MAGIC_ITEM_4343"],
    rules: function(model) {
      model.statadd("Initiative Misc", 3, "Power");
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Battle Harness +4"] = new RulesElement({
    name: "Battle Harness +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4344",
    source: "Dragon Magazine Annual 2009",
    categories: ["Battle Harness +4", "ID_FMP_MAGIC_ITEM_4344"],
    rules: function(model) {
      model.statadd("Initiative Misc", 4, "Power");
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Battle Harness +5"] = new RulesElement({
    name: "Battle Harness +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4345",
    source: "Dragon Magazine Annual 2009",
    categories: ["Battle Harness +5", "ID_FMP_MAGIC_ITEM_4345"],
    rules: function(model) {
      model.statadd("Initiative Misc", 5, "Power");
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Battle Harness +6"] = new RulesElement({
    name: "Battle Harness +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4346",
    source: "Dragon Magazine Annual 2009",
    categories: ["Battle Harness +6", "ID_FMP_MAGIC_ITEM_4346"],
    rules: function(model) {
      model.statadd("Initiative Misc", 6, "Power");
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Disrupting Weapon +2"] = new RulesElement({
    name: "Disrupting Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1254",
    source: "Dragon Magazine Annual 2009",
    categories: ["Disrupting Weapon +2", "ID_FMP_MAGIC_ITEM_1254"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Disrupting Weapon +3"] = new RulesElement({
    name: "Disrupting Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1255",
    source: "Dragon Magazine Annual 2009",
    categories: ["Disrupting Weapon +3", "ID_FMP_MAGIC_ITEM_1255"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Disrupting Weapon +4"] = new RulesElement({
    name: "Disrupting Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1256",
    source: "Dragon Magazine Annual 2009",
    categories: ["Disrupting Weapon +4", "ID_FMP_MAGIC_ITEM_1256"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Disrupting Weapon +5"] = new RulesElement({
    name: "Disrupting Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1257",
    source: "Dragon Magazine Annual 2009",
    categories: ["Disrupting Weapon +5", "ID_FMP_MAGIC_ITEM_1257"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Disrupting Weapon +6"] = new RulesElement({
    name: "Disrupting Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1258",
    source: "Dragon Magazine Annual 2009",
    categories: ["Disrupting Weapon +6", "ID_FMP_MAGIC_ITEM_1258"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Eldritch Serpent Armor +1"] = new RulesElement({
    name: "Eldritch Serpent Armor +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4249",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 366",
    categories: ["Eldritch Serpent Armor +1", "ID_FMP_MAGIC_ITEM_4249"],
    rules: function(model) {
      model.statadd("Speed", 0, "Armor");
      model.statadd("Armor Class", 1, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Eldritch Serpent Armor +2"] = new RulesElement({
    name: "Eldritch Serpent Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4250",
    source: "Dragon Magazine Annual 2009",
    categories: ["Eldritch Serpent Armor +2", "ID_FMP_MAGIC_ITEM_4250"],
    rules: function(model) {
      model.statadd("Speed", 0, "Armor");
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Eldritch Serpent Armor +3"] = new RulesElement({
    name: "Eldritch Serpent Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4251",
    source: "Dragon Magazine Annual 2009",
    categories: ["Eldritch Serpent Armor +3", "ID_FMP_MAGIC_ITEM_4251"],
    rules: function(model) {
      model.statadd("Speed", 0, "Armor");
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Eldritch Serpent Armor +4"] = new RulesElement({
    name: "Eldritch Serpent Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4252",
    source: "Dragon Magazine Annual 2009",
    categories: ["Eldritch Serpent Armor +4", "ID_FMP_MAGIC_ITEM_4252"],
    rules: function(model) {
      model.statadd("Speed", 0, "Armor");
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Eldritch Serpent Armor +5"] = new RulesElement({
    name: "Eldritch Serpent Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4253",
    source: "Dragon Magazine Annual 2009",
    categories: ["Eldritch Serpent Armor +5", "ID_FMP_MAGIC_ITEM_4253"],
    rules: function(model) {
      model.statadd("Speed", 0, "Armor");
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Eldritch Serpent Armor +6"] = new RulesElement({
    name: "Eldritch Serpent Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4254",
    source: "Dragon Magazine Annual 2009",
    categories: ["Eldritch Serpent Armor +6", "ID_FMP_MAGIC_ITEM_4254"],
    rules: function(model) {
      model.statadd("Speed", 0, "Armor");
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Eremann, Speaker of the Dead (Shadowfell Gloves) (epic tier)"] = new RulesElement({
    name: "Eremann, Speaker of the Dead (Shadowfell Gloves) (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4301",
    source: "Dragon Magazine Annual 2009",
    categories: ["Eremann, Speaker of the Dead (Shadowfell Gloves) (epic tier)", "ID_FMP_MAGIC_ITEM_4301"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Eremann, Speaker of the Dead (Shadowfell Gloves) (paragon tier)"] = new RulesElement({
    name: "Eremann, Speaker of the Dead (Shadowfell Gloves) (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4300",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 367",
    categories: ["Eremann, Speaker of the Dead (Shadowfell Gloves) (paragon tier)", "ID_FMP_MAGIC_ITEM_4300"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Flensing Weapon +1"] = new RulesElement({
    name: "Flensing Weapon +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4370",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 368",
    categories: ["Flensing Weapon +1", "ID_FMP_MAGIC_ITEM_4370"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Flensing Weapon +2"] = new RulesElement({
    name: "Flensing Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4371",
    source: "Dragon Magazine Annual 2009",
    categories: ["Flensing Weapon +2", "ID_FMP_MAGIC_ITEM_4371"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Flensing Weapon +3"] = new RulesElement({
    name: "Flensing Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4372",
    source: "Dragon Magazine Annual 2009",
    categories: ["Flensing Weapon +3", "ID_FMP_MAGIC_ITEM_4372"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Flensing Weapon +4"] = new RulesElement({
    name: "Flensing Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4373",
    source: "Dragon Magazine Annual 2009",
    categories: ["Flensing Weapon +4", "ID_FMP_MAGIC_ITEM_4373"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Flensing Weapon +5"] = new RulesElement({
    name: "Flensing Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4374",
    source: "Dragon Magazine Annual 2009",
    categories: ["Flensing Weapon +5", "ID_FMP_MAGIC_ITEM_4374"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Flensing Weapon +6"] = new RulesElement({
    name: "Flensing Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4375",
    source: "Dragon Magazine Annual 2009",
    categories: ["Flensing Weapon +6", "ID_FMP_MAGIC_ITEM_4375"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Karrak-dur, the Overmind (Circlet of Mental Onslaught) (paragon tier)"] = new RulesElement({
    name: "Karrak-dur, the Overmind (Circlet of Mental Onslaught) (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4293",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 367",
    categories: ["Karrak-dur, the Overmind (Circlet of Mental Onslaught) (paragon tier)", "ID_FMP_MAGIC_ITEM_4293"],
    rules: function(model) {
      model.statadd("Will Defense", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Malaeura, the Emerald-Eyed (Poisoned Weapon) +3"] = new RulesElement({
    name: "Malaeura, the Emerald-Eyed (Poisoned Weapon) +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4296",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 367",
    categories: ["Malaeura, the Emerald-Eyed (Poisoned Weapon) +3", "ID_FMP_MAGIC_ITEM_4296"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Malaeura, the Emerald-Eyed (Poisoned Weapon) +4"] = new RulesElement({
    name: "Malaeura, the Emerald-Eyed (Poisoned Weapon) +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4297",
    source: "Dragon Magazine Annual 2009",
    categories: ["Malaeura, the Emerald-Eyed (Poisoned Weapon) +4", "ID_FMP_MAGIC_ITEM_4297"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Malaeura, the Emerald-Eyed (Poisoned Weapon) +5"] = new RulesElement({
    name: "Malaeura, the Emerald-Eyed (Poisoned Weapon) +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4298",
    source: "Dragon Magazine Annual 2009",
    categories: ["Malaeura, the Emerald-Eyed (Poisoned Weapon) +5", "ID_FMP_MAGIC_ITEM_4298"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Malaeura, the Emerald-Eyed (Poisoned Weapon) +6"] = new RulesElement({
    name: "Malaeura, the Emerald-Eyed (Poisoned Weapon) +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4299",
    source: "Dragon Magazine Annual 2009",
    categories: ["Malaeura, the Emerald-Eyed (Poisoned Weapon) +6", "ID_FMP_MAGIC_ITEM_4299"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mithrendain Steel Weapon +2"] = new RulesElement({
    name: "Mithrendain Steel Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4244",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 366",
    categories: ["Mithrendain Steel Weapon +2", "ID_FMP_MAGIC_ITEM_4244"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mithrendain Steel Weapon +3"] = new RulesElement({
    name: "Mithrendain Steel Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4245",
    source: "Dragon Magazine Annual 2009",
    categories: ["Mithrendain Steel Weapon +3", "ID_FMP_MAGIC_ITEM_4245"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mithrendain Steel Weapon +4"] = new RulesElement({
    name: "Mithrendain Steel Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4246",
    source: "Dragon Magazine Annual 2009",
    categories: ["Mithrendain Steel Weapon +4", "ID_FMP_MAGIC_ITEM_4246"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mithrendain Steel Weapon +5"] = new RulesElement({
    name: "Mithrendain Steel Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4247",
    source: "Dragon Magazine Annual 2009",
    categories: ["Mithrendain Steel Weapon +5", "ID_FMP_MAGIC_ITEM_4247"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mithrendain Steel Weapon +6"] = new RulesElement({
    name: "Mithrendain Steel Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4248",
    source: "Dragon Magazine Annual 2009",
    categories: ["Mithrendain Steel Weapon +6", "ID_FMP_MAGIC_ITEM_4248"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Moonlight, First Blade of Night (Blade of Night) +5"] = new RulesElement({
    name: "Moonlight, First Blade of Night (Blade of Night) +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4302",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 367",
    categories: ["Moonlight, First Blade of Night (Blade of Night) +5", "ID_FMP_MAGIC_ITEM_4302"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Moonlight, First Blade of Night (Blade of Night) +6"] = new RulesElement({
    name: "Moonlight, First Blade of Night (Blade of Night) +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4303",
    source: "Dragon Magazine Annual 2009",
    categories: ["Moonlight, First Blade of Night (Blade of Night) +6", "ID_FMP_MAGIC_ITEM_4303"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mrtok, Ogre Chief (Gauntlets of Ogre Power) (heroic tier)"] = new RulesElement({
    name: "Mrtok, Ogre Chief (Gauntlets of Ogre Power) (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4287",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 367",
    categories: ["Mrtok, Ogre Chief (Gauntlets of Ogre Power) (heroic tier)", "ID_FMP_MAGIC_ITEM_4287"],
    rules: function(model) {
      model.statadd("Athletics Misc", 1, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Piecemeal Armor +1"] = new RulesElement({
    name: "Piecemeal Armor +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4347",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 368",
    categories: ["Piecemeal Armor +1", "ID_FMP_MAGIC_ITEM_4347"],
    rules: function(model) {
      model.statadd("Armor Class", 1, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Piecemeal Armor +2"] = new RulesElement({
    name: "Piecemeal Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4348",
    source: "Dragon Magazine Annual 2009",
    categories: ["Piecemeal Armor +2", "ID_FMP_MAGIC_ITEM_4348"],
    rules: function(model) {
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Piecemeal Armor +3"] = new RulesElement({
    name: "Piecemeal Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4349",
    source: "Dragon Magazine Annual 2009",
    categories: ["Piecemeal Armor +3", "ID_FMP_MAGIC_ITEM_4349"],
    rules: function(model) {
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Piecemeal Armor +4"] = new RulesElement({
    name: "Piecemeal Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4350",
    source: "Dragon Magazine Annual 2009",
    categories: ["Piecemeal Armor +4", "ID_FMP_MAGIC_ITEM_4350"],
    rules: function(model) {
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Piecemeal Armor +5"] = new RulesElement({
    name: "Piecemeal Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4351",
    source: "Dragon Magazine Annual 2009",
    categories: ["Piecemeal Armor +5", "ID_FMP_MAGIC_ITEM_4351"],
    rules: function(model) {
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Piecemeal Armor +6"] = new RulesElement({
    name: "Piecemeal Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4352",
    source: "Dragon Magazine Annual 2009",
    categories: ["Piecemeal Armor +6", "ID_FMP_MAGIC_ITEM_4352"],
    rules: function(model) {
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Pouch of Ghost-Grounding Dust (paragon tier)"] = new RulesElement({
    name: "Pouch of Ghost-Grounding Dust (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1276",
    source: "Dragon Magazine Annual 2009",
    categories: ["Pouch of Ghost-Grounding Dust (paragon tier)", "ID_FMP_MAGIC_ITEM_1276"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ring of Invigoration (paragon tier)"] = new RulesElement({
    name: "Ring of Invigoration (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1275",
    source: "Dragon Magazine Annual 2009",
    categories: ["Ring of Invigoration (paragon tier)", "ID_FMP_MAGIC_ITEM_1275"],
    rules: function(model) {
      model.statadd("Endurance Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Savage Armor +1"] = new RulesElement({
    name: "Savage Armor +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4353",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 368",
    categories: ["Savage Armor +1", "ID_FMP_MAGIC_ITEM_4353"],
    rules: function(model) {
      model.statadd("Intimidate Misc", 1, "item");
      model.statadd("Armor Class", 1, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Savage Armor +2"] = new RulesElement({
    name: "Savage Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4354",
    source: "Dragon Magazine Annual 2009",
    categories: ["Savage Armor +2", "ID_FMP_MAGIC_ITEM_4354"],
    rules: function(model) {
      model.statadd("Intimidate Misc", 2, "item");
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Savage Armor +3"] = new RulesElement({
    name: "Savage Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4355",
    source: "Dragon Magazine Annual 2009",
    categories: ["Savage Armor +3", "ID_FMP_MAGIC_ITEM_4355"],
    rules: function(model) {
      model.statadd("Intimidate Misc", 3, "item");
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Savage Armor +4"] = new RulesElement({
    name: "Savage Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4356",
    source: "Dragon Magazine Annual 2009",
    categories: ["Savage Armor +4", "ID_FMP_MAGIC_ITEM_4356"],
    rules: function(model) {
      model.statadd("Intimidate Misc", 4, "item");
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Savage Armor +5"] = new RulesElement({
    name: "Savage Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4357",
    source: "Dragon Magazine Annual 2009",
    categories: ["Savage Armor +5", "ID_FMP_MAGIC_ITEM_4357"],
    rules: function(model) {
      model.statadd("Intimidate Misc", 5, "item");
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Savage Armor +6"] = new RulesElement({
    name: "Savage Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4358",
    source: "Dragon Magazine Annual 2009",
    categories: ["Savage Armor +6", "ID_FMP_MAGIC_ITEM_4358"],
    rules: function(model) {
      model.statadd("Intimidate Misc", 6, "item");
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Savage Weapon +3"] = new RulesElement({
    name: "Savage Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4376",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 368",
    categories: ["Savage Weapon +3", "ID_FMP_MAGIC_ITEM_4376"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against fear effects */ return 3; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Savage Weapon +4"] = new RulesElement({
    name: "Savage Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4377",
    source: "Dragon Magazine Annual 2009",
    categories: ["Savage Weapon +4", "ID_FMP_MAGIC_ITEM_4377"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against fear effects */ return 4; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Savage Weapon +5"] = new RulesElement({
    name: "Savage Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4378",
    source: "Dragon Magazine Annual 2009",
    categories: ["Savage Weapon +5", "ID_FMP_MAGIC_ITEM_4378"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against fear effects */ return 5; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Savage Weapon +6"] = new RulesElement({
    name: "Savage Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4379",
    source: "Dragon Magazine Annual 2009",
    categories: ["Savage Weapon +6", "ID_FMP_MAGIC_ITEM_4379"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against fear effects */ return 6; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Shield of the Barrier Sentinels (epic tier)"] = new RulesElement({
    name: "Shield of the Barrier Sentinels (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4257",
    source: "Dragon Magazine Annual 2009",
    categories: ["Shield of the Barrier Sentinels (epic tier)", "ID_FMP_MAGIC_ITEM_4257"],
    rules: function(model) {
      model.statadd("AC", function() { /* while you are flanked */ return 3; });
      model.statadd("Reflex Defense", function() { /* while you are flanked */ return 3; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Shield of the Barrier Sentinels (heroic tier)"] = new RulesElement({
    name: "Shield of the Barrier Sentinels (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4255",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 366",
    categories: ["Shield of the Barrier Sentinels (heroic tier)", "ID_FMP_MAGIC_ITEM_4255"],
    rules: function(model) {
      model.statadd("AC", function() { /* while you are flanked */ return 1; });
      model.statadd("Reflex Defense", function() { /* while you are flanked */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Shield of the Barrier Sentinels (paragon tier)"] = new RulesElement({
    name: "Shield of the Barrier Sentinels (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4256",
    source: "Dragon Magazine Annual 2009",
    categories: ["Shield of the Barrier Sentinels (paragon tier)", "ID_FMP_MAGIC_ITEM_4256"],
    rules: function(model) {
      model.statadd("AC", function() { /* while you are flanked */ return 2; });
      model.statadd("Reflex Defense", function() { /* while you are flanked */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Shivli, White Wyrmling (Frost Weapon) +2"] = new RulesElement({
    name: "Shivli, White Wyrmling (Frost Weapon) +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4288",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 367",
    categories: ["Shivli, White Wyrmling (Frost Weapon) +2", "ID_FMP_MAGIC_ITEM_4288"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Shivli, White Wyrmling (Frost Weapon) +3"] = new RulesElement({
    name: "Shivli, White Wyrmling (Frost Weapon) +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4289",
    source: "Dragon Magazine Annual 2009",
    categories: ["Shivli, White Wyrmling (Frost Weapon) +3", "ID_FMP_MAGIC_ITEM_4289"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Shivli, White Wyrmling (Frost Weapon) +4"] = new RulesElement({
    name: "Shivli, White Wyrmling (Frost Weapon) +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4290",
    source: "Dragon Magazine Annual 2009",
    categories: ["Shivli, White Wyrmling (Frost Weapon) +4", "ID_FMP_MAGIC_ITEM_4290"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Shivli, White Wyrmling (Frost Weapon) +5"] = new RulesElement({
    name: "Shivli, White Wyrmling (Frost Weapon) +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4291",
    source: "Dragon Magazine Annual 2009",
    categories: ["Shivli, White Wyrmling (Frost Weapon) +5", "ID_FMP_MAGIC_ITEM_4291"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Shivli, White Wyrmling (Frost Weapon) +6"] = new RulesElement({
    name: "Shivli, White Wyrmling (Frost Weapon) +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4292",
    source: "Dragon Magazine Annual 2009",
    categories: ["Shivli, White Wyrmling (Frost Weapon) +6", "ID_FMP_MAGIC_ITEM_4292"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Singing Weapon +2"] = new RulesElement({
    name: "Singing Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4380",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 368",
    categories: ["Singing Weapon +2", "ID_FMP_MAGIC_ITEM_4380"],
    rules: function(model) {
      model.statadd("Diplomacy Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Singing Weapon +3"] = new RulesElement({
    name: "Singing Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4381",
    source: "Dragon Magazine Annual 2009",
    categories: ["Singing Weapon +3", "ID_FMP_MAGIC_ITEM_4381"],
    rules: function(model) {
      model.statadd("Diplomacy Misc", 3, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Singing Weapon +4"] = new RulesElement({
    name: "Singing Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4382",
    source: "Dragon Magazine Annual 2009",
    categories: ["Singing Weapon +4", "ID_FMP_MAGIC_ITEM_4382"],
    rules: function(model) {
      model.statadd("Diplomacy Misc", 4, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Singing Weapon +5"] = new RulesElement({
    name: "Singing Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4383",
    source: "Dragon Magazine Annual 2009",
    categories: ["Singing Weapon +5", "ID_FMP_MAGIC_ITEM_4383"],
    rules: function(model) {
      model.statadd("Diplomacy Misc", 5, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Singing Weapon +6"] = new RulesElement({
    name: "Singing Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4384",
    source: "Dragon Magazine Annual 2009",
    categories: ["Singing Weapon +6", "ID_FMP_MAGIC_ITEM_4384"],
    rules: function(model) {
      model.statadd("Diplomacy Misc", 6, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Skull Helm (paragon tier)"] = new RulesElement({
    name: "Skull Helm (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1274",
    source: "Dragon Magazine Annual 2009",
    categories: ["Skull Helm (paragon tier)", "ID_FMP_MAGIC_ITEM_1274"],
    rules: function(model) {
      model.statadd("Intimidate Misc", 2, "item");
      model.statadd("Endurance Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of the Lich +3"] = new RulesElement({
    name: "Staff of the Lich +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1270",
    source: "Dragon Magazine Annual 2009",
    categories: ["Staff of the Lich +3", "ID_FMP_MAGIC_ITEM_1270"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of the Lich +4"] = new RulesElement({
    name: "Staff of the Lich +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1271",
    source: "Dragon Magazine Annual 2009",
    categories: ["Staff of the Lich +4", "ID_FMP_MAGIC_ITEM_1271"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of the Lich +5"] = new RulesElement({
    name: "Staff of the Lich +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1272",
    source: "Dragon Magazine Annual 2009",
    categories: ["Staff of the Lich +5", "ID_FMP_MAGIC_ITEM_1272"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of the Lich +6"] = new RulesElement({
    name: "Staff of the Lich +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1273",
    source: "Dragon Magazine Annual 2009",
    categories: ["Staff of the Lich +6", "ID_FMP_MAGIC_ITEM_1273"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Stanching Armor +1"] = new RulesElement({
    name: "Stanching Armor +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4359",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 368",
    categories: ["Stanching Armor +1", "ID_FMP_MAGIC_ITEM_4359"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against ongoing untyped damage */ return 1; }, "item");
      model.statadd("Armor Class", 1, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Stanching Armor +2"] = new RulesElement({
    name: "Stanching Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4360",
    source: "Dragon Magazine Annual 2009",
    categories: ["Stanching Armor +2", "ID_FMP_MAGIC_ITEM_4360"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against ongoing untyped damage */ return 2; }, "item");
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Stanching Armor +3"] = new RulesElement({
    name: "Stanching Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4361",
    source: "Dragon Magazine Annual 2009",
    categories: ["Stanching Armor +3", "ID_FMP_MAGIC_ITEM_4361"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against ongoing untyped damage */ return 3; }, "item");
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Stanching Armor +4"] = new RulesElement({
    name: "Stanching Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4362",
    source: "Dragon Magazine Annual 2009",
    categories: ["Stanching Armor +4", "ID_FMP_MAGIC_ITEM_4362"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against ongoing untyped damage */ return 4; }, "item");
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Stanching Armor +5"] = new RulesElement({
    name: "Stanching Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4363",
    source: "Dragon Magazine Annual 2009",
    categories: ["Stanching Armor +5", "ID_FMP_MAGIC_ITEM_4363"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against ongoing untyped damage */ return 5; }, "item");
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Stanching Armor +6"] = new RulesElement({
    name: "Stanching Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4364",
    source: "Dragon Magazine Annual 2009",
    categories: ["Stanching Armor +6", "ID_FMP_MAGIC_ITEM_4364"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against ongoing untyped damage */ return 6; }, "item");
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Stonesign, Dwarf Guardian (Shield of Warding) (epic tier)"] = new RulesElement({
    name: "Stonesign, Dwarf Guardian (Shield of Warding) (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4295",
    source: "Dragon Magazine Annual 2009",
    categories: ["Stonesign, Dwarf Guardian (Shield of Warding) (epic tier)", "ID_FMP_MAGIC_ITEM_4295"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Stonesign, Dwarf Guardian (Shield of Warding) (paragon tier)"] = new RulesElement({
    name: "Stonesign, Dwarf Guardian (Shield of Warding) (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4294",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 367",
    categories: ["Stonesign, Dwarf Guardian (Shield of Warding) (paragon tier)", "ID_FMP_MAGIC_ITEM_4294"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of Turning +1"] = new RulesElement({
    name: "Symbol of Turning +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1264",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 364",
    categories: ["Symbol of Turning +1", "ID_FMP_MAGIC_ITEM_1264"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of Turning +2"] = new RulesElement({
    name: "Symbol of Turning +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1265",
    source: "Dragon Magazine Annual 2009",
    categories: ["Symbol of Turning +2", "ID_FMP_MAGIC_ITEM_1265"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of Turning +3"] = new RulesElement({
    name: "Symbol of Turning +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1266",
    source: "Dragon Magazine Annual 2009",
    categories: ["Symbol of Turning +3", "ID_FMP_MAGIC_ITEM_1266"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of Turning +4"] = new RulesElement({
    name: "Symbol of Turning +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1267",
    source: "Dragon Magazine Annual 2009",
    categories: ["Symbol of Turning +4", "ID_FMP_MAGIC_ITEM_1267"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of Turning +5"] = new RulesElement({
    name: "Symbol of Turning +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1268",
    source: "Dragon Magazine Annual 2009",
    categories: ["Symbol of Turning +5", "ID_FMP_MAGIC_ITEM_1268"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of Turning +6"] = new RulesElement({
    name: "Symbol of Turning +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1269",
    source: "Dragon Magazine Annual 2009",
    categories: ["Symbol of Turning +6", "ID_FMP_MAGIC_ITEM_1269"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["The Scrolls of Ummanabora (Mnemonic Staff) +6"] = new RulesElement({
    name: "The Scrolls of Ummanabora (Mnemonic Staff) +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4304",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 367",
    categories: ["The Scrolls of Ummanabora (Mnemonic Staff) +6", "ID_FMP_MAGIC_ITEM_4304"],
    rules: function(model) {
      model.statadd("Arcana Misc", function() { /* to monster knowledge checks */ return 2; }, "item");
      model.statadd("Dungeoneering Misc", function() { /* to monster knowledge checks */ return 2; }, "item");
      model.statadd("Nature Misc", function() { /* to monster knowledge checks */ return 2; }, "item");
      model.statadd("Religion Misc", function() { /* to monster knowledge checks */ return 2; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Victory Flash Weapon +2"] = new RulesElement({
    name: "Victory Flash Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4385",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 368",
    categories: ["Victory Flash Weapon +2", "ID_FMP_MAGIC_ITEM_4385"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Victory Flash Weapon +3"] = new RulesElement({
    name: "Victory Flash Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4386",
    source: "Dragon Magazine Annual 2009",
    categories: ["Victory Flash Weapon +3", "ID_FMP_MAGIC_ITEM_4386"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Victory Flash Weapon +4"] = new RulesElement({
    name: "Victory Flash Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4387",
    source: "Dragon Magazine Annual 2009",
    categories: ["Victory Flash Weapon +4", "ID_FMP_MAGIC_ITEM_4387"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Victory Flash Weapon +5"] = new RulesElement({
    name: "Victory Flash Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4388",
    source: "Dragon Magazine Annual 2009",
    categories: ["Victory Flash Weapon +5", "ID_FMP_MAGIC_ITEM_4388"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Victory Flash Weapon +6"] = new RulesElement({
    name: "Victory Flash Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4389",
    source: "Dragon Magazine Annual 2009",
    categories: ["Victory Flash Weapon +6", "ID_FMP_MAGIC_ITEM_4389"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Vitality Armor +2"] = new RulesElement({
    name: "Vitality Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4365",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 368",
    categories: ["Vitality Armor +2", "ID_FMP_MAGIC_ITEM_4365"],
    rules: function(model) {
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Vitality Armor +3"] = new RulesElement({
    name: "Vitality Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4366",
    source: "Dragon Magazine Annual 2009",
    categories: ["Vitality Armor +3", "ID_FMP_MAGIC_ITEM_4366"],
    rules: function(model) {
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Vitality Armor +4"] = new RulesElement({
    name: "Vitality Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4367",
    source: "Dragon Magazine Annual 2009",
    categories: ["Vitality Armor +4", "ID_FMP_MAGIC_ITEM_4367"],
    rules: function(model) {
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Vitality Armor +5"] = new RulesElement({
    name: "Vitality Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4368",
    source: "Dragon Magazine Annual 2009",
    categories: ["Vitality Armor +5", "ID_FMP_MAGIC_ITEM_4368"],
    rules: function(model) {
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Vitality Armor +6"] = new RulesElement({
    name: "Vitality Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4369",
    source: "Dragon Magazine Annual 2009",
    categories: ["Vitality Armor +6", "ID_FMP_MAGIC_ITEM_4369"],
    rules: function(model) {
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Watcher's Signet (paragon tier)"] = new RulesElement({
    name: "Watcher's Signet (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4258",
    source: "Dragon Magazine Annual 2009,Dragon Magazine 366",
    categories: ["Watcher's Signet (paragon tier)", "ID_FMP_MAGIC_ITEM_4258"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wraithblade +2"] = new RulesElement({
    name: "Wraithblade +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1259",
    source: "Dragon Magazine Annual 2009",
    categories: ["Wraithblade +2", "ID_FMP_MAGIC_ITEM_1259"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wraithblade +3"] = new RulesElement({
    name: "Wraithblade +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1260",
    source: "Dragon Magazine Annual 2009",
    categories: ["Wraithblade +3", "ID_FMP_MAGIC_ITEM_1260"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wraithblade +4"] = new RulesElement({
    name: "Wraithblade +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1261",
    source: "Dragon Magazine Annual 2009",
    categories: ["Wraithblade +4", "ID_FMP_MAGIC_ITEM_1261"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wraithblade +5"] = new RulesElement({
    name: "Wraithblade +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1262",
    source: "Dragon Magazine Annual 2009",
    categories: ["Wraithblade +5", "ID_FMP_MAGIC_ITEM_1262"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wraithblade +6"] = new RulesElement({
    name: "Wraithblade +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1263",
    source: "Dragon Magazine Annual 2009",
    categories: ["Wraithblade +6", "ID_FMP_MAGIC_ITEM_1263"]
  });
  byID[te.id] = te;
  
  
})(this);
