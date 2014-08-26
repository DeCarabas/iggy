define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Amulet of Scales +3"] = new engine.RulesElement({
    name: "Amulet of Scales +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4233",
    source: "Dragon Magazine 365",
    categories: ["Amulet of Scales +3", "ID_FMP_MAGIC_ITEM_4233"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 3, "Enhancement");
      model.statadd("Reflex Defense", 3, "Enhancement");
      model.statadd("Will Defense", 3, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Amulet of Scales +4"] = new engine.RulesElement({
    name: "Amulet of Scales +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4234",
    source: "Dragon Magazine 365",
    categories: ["Amulet of Scales +4", "ID_FMP_MAGIC_ITEM_4234"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 4, "Enhancement");
      model.statadd("Reflex Defense", 4, "Enhancement");
      model.statadd("Will Defense", 4, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Amulet of Scales +5"] = new engine.RulesElement({
    name: "Amulet of Scales +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4235",
    source: "Dragon Magazine 365",
    categories: ["Amulet of Scales +5", "ID_FMP_MAGIC_ITEM_4235"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 5, "Enhancement");
      model.statadd("Reflex Defense", 5, "Enhancement");
      model.statadd("Will Defense", 5, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Amulet of Scales +6"] = new engine.RulesElement({
    name: "Amulet of Scales +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4236",
    source: "Dragon Magazine 365",
    categories: ["Amulet of Scales +6", "ID_FMP_MAGIC_ITEM_4236"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 6, "Enhancement");
      model.statadd("Reflex Defense", 6, "Enhancement");
      model.statadd("Will Defense", 6, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Belt of Lucky Strikes (heroic tier)"] = new engine.RulesElement({
    name: "Belt of Lucky Strikes (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4239",
    source: "Dragon Magazine 365",
    categories: ["Belt of Lucky Strikes (heroic tier)", "ID_FMP_MAGIC_ITEM_4239"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Belt of Mountain Endurance (paragon tier)"] = new engine.RulesElement({
    name: "Belt of Mountain Endurance (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4240",
    source: "Dragon Magazine 365",
    categories: ["Belt of Mountain Endurance (paragon tier)", "ID_FMP_MAGIC_ITEM_4240"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bracers of Escape (epic tier)"] = new engine.RulesElement({
    name: "Bracers of Escape (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4221",
    source: "Dragon Magazine 365",
    categories: ["Bracers of Escape (epic tier)", "ID_FMP_MAGIC_ITEM_4221"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bracers of Escape (heroic tier)"] = new engine.RulesElement({
    name: "Bracers of Escape (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4219",
    source: "Dragon Magazine 365",
    categories: ["Bracers of Escape (heroic tier)", "ID_FMP_MAGIC_ITEM_4219"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bracers of Escape (paragon tier)"] = new engine.RulesElement({
    name: "Bracers of Escape (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4220",
    source: "Dragon Magazine 365",
    categories: ["Bracers of Escape (paragon tier)", "ID_FMP_MAGIC_ITEM_4220"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Cannith Goggles (heroic tier)"] = new engine.RulesElement({
    name: "Cannith Goggles (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4100",
    source: "Dragon Magazine 365",
    categories: ["Cannith Goggles (heroic tier)", "ID_FMP_MAGIC_ITEM_4100"],
    rules: function(model) {
      model.statadd("Perception Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Circlet of Clear Thought (paragon tier)"] = new engine.RulesElement({
    name: "Circlet of Clear Thought (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4230",
    source: "Dragon Magazine 365",
    categories: ["Circlet of Clear Thought (paragon tier)", "ID_FMP_MAGIC_ITEM_4230"],
    rules: function(model) {
      model.statadd("Insight Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dragonclaw Armor +1"] = new engine.RulesElement({
    name: "Dragonclaw Armor +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4101",
    source: "Dragon Magazine 365",
    categories: ["Dragonclaw Armor +1", "ID_FMP_MAGIC_ITEM_4101"],
    rules: function(model) {
      model.statadd("Armor Class", 1, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dragonclaw Armor +2"] = new engine.RulesElement({
    name: "Dragonclaw Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4102",
    source: "Dragon Magazine 365",
    categories: ["Dragonclaw Armor +2", "ID_FMP_MAGIC_ITEM_4102"],
    rules: function(model) {
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dragonclaw Armor +3"] = new engine.RulesElement({
    name: "Dragonclaw Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4103",
    source: "Dragon Magazine 365",
    categories: ["Dragonclaw Armor +3", "ID_FMP_MAGIC_ITEM_4103"],
    rules: function(model) {
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dragonclaw Armor +4"] = new engine.RulesElement({
    name: "Dragonclaw Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4104",
    source: "Dragon Magazine 365",
    categories: ["Dragonclaw Armor +4", "ID_FMP_MAGIC_ITEM_4104"],
    rules: function(model) {
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dragonclaw Armor +5"] = new engine.RulesElement({
    name: "Dragonclaw Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4105",
    source: "Dragon Magazine 365",
    categories: ["Dragonclaw Armor +5", "ID_FMP_MAGIC_ITEM_4105"],
    rules: function(model) {
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dragonclaw Armor +6"] = new engine.RulesElement({
    name: "Dragonclaw Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4106",
    source: "Dragon Magazine 365",
    categories: ["Dragonclaw Armor +6", "ID_FMP_MAGIC_ITEM_4106"],
    rules: function(model) {
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dragonrider Armor +3"] = new engine.RulesElement({
    name: "Dragonrider Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4107",
    source: "Dragon Magazine 365",
    categories: ["Dragonrider Armor +3", "ID_FMP_MAGIC_ITEM_4107"],
    rules: function(model) {
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dragonrider Armor +4"] = new engine.RulesElement({
    name: "Dragonrider Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4108",
    source: "Dragon Magazine 365",
    categories: ["Dragonrider Armor +4", "ID_FMP_MAGIC_ITEM_4108"],
    rules: function(model) {
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dragonrider Armor +5"] = new engine.RulesElement({
    name: "Dragonrider Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4109",
    source: "Dragon Magazine 365",
    categories: ["Dragonrider Armor +5", "ID_FMP_MAGIC_ITEM_4109"],
    rules: function(model) {
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dragonrider Armor +6"] = new engine.RulesElement({
    name: "Dragonrider Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4110",
    source: "Dragon Magazine 365",
    categories: ["Dragonrider Armor +6", "ID_FMP_MAGIC_ITEM_4110"],
    rules: function(model) {
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dragonscale Shield (epic tier)"] = new engine.RulesElement({
    name: "Dragonscale Shield (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4223",
    source: "Dragon Magazine 365",
    categories: ["Dragonscale Shield (epic tier)", "ID_FMP_MAGIC_ITEM_4223"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dragonscale Shield (paragon tier)"] = new engine.RulesElement({
    name: "Dragonscale Shield (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4222",
    source: "Dragon Magazine 365",
    categories: ["Dragonscale Shield (paragon tier)", "ID_FMP_MAGIC_ITEM_4222"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Earthwalker's Boots (epic tier)"] = new engine.RulesElement({
    name: "Earthwalker's Boots (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4226",
    source: "Dragon Magazine 365",
    categories: ["Earthwalker's Boots (epic tier)", "ID_FMP_MAGIC_ITEM_4226"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Eyes of the Dragon (epic tier)"] = new engine.RulesElement({
    name: "Eyes of the Dragon (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4229",
    source: "Dragon Magazine 365",
    categories: ["Eyes of the Dragon (epic tier)", "ID_FMP_MAGIC_ITEM_4229"],
    rules: function(model) {
      model.statadd("Perception Misc", 6, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Far Hand Gloves (epic tier)"] = new engine.RulesElement({
    name: "Far Hand Gloves (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4228",
    source: "Dragon Magazine 365",
    categories: ["Far Hand Gloves (epic tier)", "ID_FMP_MAGIC_ITEM_4228"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Final Word Weapon +1"] = new engine.RulesElement({
    name: "Final Word Weapon +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4125",
    source: "Dragon Magazine 365",
    categories: ["Final Word Weapon +1", "ID_FMP_MAGIC_ITEM_4125"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Final Word Weapon +2"] = new engine.RulesElement({
    name: "Final Word Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4126",
    source: "Dragon Magazine 365",
    categories: ["Final Word Weapon +2", "ID_FMP_MAGIC_ITEM_4126"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Final Word Weapon +3"] = new engine.RulesElement({
    name: "Final Word Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4127",
    source: "Dragon Magazine 365",
    categories: ["Final Word Weapon +3", "ID_FMP_MAGIC_ITEM_4127"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Final Word Weapon +4"] = new engine.RulesElement({
    name: "Final Word Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4128",
    source: "Dragon Magazine 365",
    categories: ["Final Word Weapon +4", "ID_FMP_MAGIC_ITEM_4128"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Final Word Weapon +5"] = new engine.RulesElement({
    name: "Final Word Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4129",
    source: "Dragon Magazine 365",
    categories: ["Final Word Weapon +5", "ID_FMP_MAGIC_ITEM_4129"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Final Word Weapon +6"] = new engine.RulesElement({
    name: "Final Word Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4130",
    source: "Dragon Magazine 365",
    categories: ["Final Word Weapon +6", "ID_FMP_MAGIC_ITEM_4130"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Flask of the Dragon's Breath (heroic tier)"] = new engine.RulesElement({
    name: "Flask of the Dragon's Breath (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4241",
    source: "Dragon Magazine 365",
    categories: ["Flask of the Dragon's Breath (heroic tier)", "ID_FMP_MAGIC_ITEM_4241"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Fortified Armor +2"] = new engine.RulesElement({
    name: "Fortified Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4111",
    source: "Dragon Magazine 365",
    categories: ["Fortified Armor +2", "ID_FMP_MAGIC_ITEM_4111"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against fear effects */ return 2; });
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Fortified Armor +3"] = new engine.RulesElement({
    name: "Fortified Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4112",
    source: "Dragon Magazine 365",
    categories: ["Fortified Armor +3", "ID_FMP_MAGIC_ITEM_4112"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against fear effects */ return 3; });
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Fortified Armor +4"] = new engine.RulesElement({
    name: "Fortified Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4113",
    source: "Dragon Magazine 365",
    categories: ["Fortified Armor +4", "ID_FMP_MAGIC_ITEM_4113"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against fear effects */ return 4; });
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Fortified Armor +5"] = new engine.RulesElement({
    name: "Fortified Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4114",
    source: "Dragon Magazine 365",
    categories: ["Fortified Armor +5", "ID_FMP_MAGIC_ITEM_4114"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against fear effects */ return 5; });
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Fortified Armor +6"] = new engine.RulesElement({
    name: "Fortified Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4115",
    source: "Dragon Magazine 365",
    categories: ["Fortified Armor +6", "ID_FMP_MAGIC_ITEM_4115"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against fear effects */ return 6; });
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Goring Weapon +1"] = new engine.RulesElement({
    name: "Goring Weapon +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4137",
    source: "Dragon Magazine 365",
    categories: ["Goring Weapon +1", "ID_FMP_MAGIC_ITEM_4137"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Goring Weapon +2"] = new engine.RulesElement({
    name: "Goring Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4138",
    source: "Dragon Magazine 365",
    categories: ["Goring Weapon +2", "ID_FMP_MAGIC_ITEM_4138"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Goring Weapon +3"] = new engine.RulesElement({
    name: "Goring Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4139",
    source: "Dragon Magazine 365",
    categories: ["Goring Weapon +3", "ID_FMP_MAGIC_ITEM_4139"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Goring Weapon +4"] = new engine.RulesElement({
    name: "Goring Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4140",
    source: "Dragon Magazine 365",
    categories: ["Goring Weapon +4", "ID_FMP_MAGIC_ITEM_4140"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Goring Weapon +5"] = new engine.RulesElement({
    name: "Goring Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4141",
    source: "Dragon Magazine 365",
    categories: ["Goring Weapon +5", "ID_FMP_MAGIC_ITEM_4141"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Goring Weapon +6"] = new engine.RulesElement({
    name: "Goring Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4142",
    source: "Dragon Magazine 365",
    categories: ["Goring Weapon +6", "ID_FMP_MAGIC_ITEM_4142"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Homing Weapon +2"] = new engine.RulesElement({
    name: "Homing Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4131",
    source: "Dragon Magazine 365",
    categories: ["Homing Weapon +2", "ID_FMP_MAGIC_ITEM_4131"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Homing Weapon +3"] = new engine.RulesElement({
    name: "Homing Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4132",
    source: "Dragon Magazine 365",
    categories: ["Homing Weapon +3", "ID_FMP_MAGIC_ITEM_4132"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Homing Weapon +4"] = new engine.RulesElement({
    name: "Homing Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4133",
    source: "Dragon Magazine 365",
    categories: ["Homing Weapon +4", "ID_FMP_MAGIC_ITEM_4133"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Homing Weapon +5"] = new engine.RulesElement({
    name: "Homing Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4134",
    source: "Dragon Magazine 365",
    categories: ["Homing Weapon +5", "ID_FMP_MAGIC_ITEM_4134"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Homing Weapon +6"] = new engine.RulesElement({
    name: "Homing Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4135",
    source: "Dragon Magazine 365",
    categories: ["Homing Weapon +6", "ID_FMP_MAGIC_ITEM_4135"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Immolating Armor +2"] = new engine.RulesElement({
    name: "Immolating Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4116",
    source: "Dragon Magazine 365",
    categories: ["Immolating Armor +2", "ID_FMP_MAGIC_ITEM_4116"],
    rules: function(model) {
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Immolating Armor +3"] = new engine.RulesElement({
    name: "Immolating Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4117",
    source: "Dragon Magazine 365",
    categories: ["Immolating Armor +3", "ID_FMP_MAGIC_ITEM_4117"],
    rules: function(model) {
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Immolating Armor +4"] = new engine.RulesElement({
    name: "Immolating Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4118",
    source: "Dragon Magazine 365",
    categories: ["Immolating Armor +4", "ID_FMP_MAGIC_ITEM_4118"],
    rules: function(model) {
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Immolating Armor +5"] = new engine.RulesElement({
    name: "Immolating Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4119",
    source: "Dragon Magazine 365",
    categories: ["Immolating Armor +5", "ID_FMP_MAGIC_ITEM_4119"],
    rules: function(model) {
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Immolating Armor +6"] = new engine.RulesElement({
    name: "Immolating Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4120",
    source: "Dragon Magazine 365",
    categories: ["Immolating Armor +6", "ID_FMP_MAGIC_ITEM_4120"],
    rules: function(model) {
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ingot Liberatis +4"] = new engine.RulesElement({
    name: "Ingot Liberatis +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4091",
    source: "Dragon Magazine 365,Eberron Player's Guide",
    categories: ["Ingot Liberatis +4", "ID_FMP_MAGIC_ITEM_4091"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ingot Liberatis +5"] = new engine.RulesElement({
    name: "Ingot Liberatis +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4092",
    source: "Dragon Magazine 365,Eberron Campaign Setting",
    categories: ["Ingot Liberatis +5", "ID_FMP_MAGIC_ITEM_4092"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ingot Liberatis +6"] = new engine.RulesElement({
    name: "Ingot Liberatis +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4093",
    source: "Dragon Magazine 365,Eberron Campaign Setting",
    categories: ["Ingot Liberatis +6", "ID_FMP_MAGIC_ITEM_4093"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mask of Terrors (paragon tier)"] = new engine.RulesElement({
    name: "Mask of Terrors (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4231",
    source: "Dragon Magazine 365",
    categories: ["Mask of Terrors (paragon tier)", "ID_FMP_MAGIC_ITEM_4231"],
    rules: function(model) {
      model.statadd("Intimidate Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mind-Rending Weapon +3"] = new engine.RulesElement({
    name: "Mind-Rending Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4143",
    source: "Dragon Magazine 365",
    categories: ["Mind-Rending Weapon +3", "ID_FMP_MAGIC_ITEM_4143"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mind-Rending Weapon +4"] = new engine.RulesElement({
    name: "Mind-Rending Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4144",
    source: "Dragon Magazine 365",
    categories: ["Mind-Rending Weapon +4", "ID_FMP_MAGIC_ITEM_4144"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mind-Rending Weapon +5"] = new engine.RulesElement({
    name: "Mind-Rending Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4145",
    source: "Dragon Magazine 365",
    categories: ["Mind-Rending Weapon +5", "ID_FMP_MAGIC_ITEM_4145"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mind-Rending Weapon +6"] = new engine.RulesElement({
    name: "Mind-Rending Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4146",
    source: "Dragon Magazine 365",
    categories: ["Mind-Rending Weapon +6", "ID_FMP_MAGIC_ITEM_4146"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Netherdark Shield (epic tier)"] = new engine.RulesElement({
    name: "Netherdark Shield (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4225",
    source: "Dragon Magazine 365",
    categories: ["Netherdark Shield (epic tier)", "ID_FMP_MAGIC_ITEM_4225"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Netherdark Shield (paragon tier)"] = new engine.RulesElement({
    name: "Netherdark Shield (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4224",
    source: "Dragon Magazine 365",
    categories: ["Netherdark Shield (paragon tier)", "ID_FMP_MAGIC_ITEM_4224"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Fiery Condemnation +3"] = new engine.RulesElement({
    name: "Orb of Fiery Condemnation +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4181",
    source: "Dragon Magazine 365",
    categories: ["Orb of Fiery Condemnation +3", "ID_FMP_MAGIC_ITEM_4181"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Fiery Condemnation +4"] = new engine.RulesElement({
    name: "Orb of Fiery Condemnation +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4182",
    source: "Dragon Magazine 365",
    categories: ["Orb of Fiery Condemnation +4", "ID_FMP_MAGIC_ITEM_4182"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Fiery Condemnation +5"] = new engine.RulesElement({
    name: "Orb of Fiery Condemnation +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4183",
    source: "Dragon Magazine 365",
    categories: ["Orb of Fiery Condemnation +5", "ID_FMP_MAGIC_ITEM_4183"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Fiery Condemnation +6"] = new engine.RulesElement({
    name: "Orb of Fiery Condemnation +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4184",
    source: "Dragon Magazine 365",
    categories: ["Orb of Fiery Condemnation +6", "ID_FMP_MAGIC_ITEM_4184"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Inexplicable Contention +2"] = new engine.RulesElement({
    name: "Orb of Inexplicable Contention +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4176",
    source: "Dragon Magazine 365",
    categories: ["Orb of Inexplicable Contention +2", "ID_FMP_MAGIC_ITEM_4176"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Inexplicable Contention +3"] = new engine.RulesElement({
    name: "Orb of Inexplicable Contention +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4177",
    source: "Dragon Magazine 365",
    categories: ["Orb of Inexplicable Contention +3", "ID_FMP_MAGIC_ITEM_4177"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Inexplicable Contention +4"] = new engine.RulesElement({
    name: "Orb of Inexplicable Contention +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4178",
    source: "Dragon Magazine 365",
    categories: ["Orb of Inexplicable Contention +4", "ID_FMP_MAGIC_ITEM_4178"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Inexplicable Contention +5"] = new engine.RulesElement({
    name: "Orb of Inexplicable Contention +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4179",
    source: "Dragon Magazine 365",
    categories: ["Orb of Inexplicable Contention +5", "ID_FMP_MAGIC_ITEM_4179"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Inexplicable Contention +6"] = new engine.RulesElement({
    name: "Orb of Inexplicable Contention +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4180",
    source: "Dragon Magazine 365",
    categories: ["Orb of Inexplicable Contention +6", "ID_FMP_MAGIC_ITEM_4180"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Temporal Dissonance +3"] = new engine.RulesElement({
    name: "Orb of Temporal Dissonance +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4185",
    source: "Dragon Magazine 365",
    categories: ["Orb of Temporal Dissonance +3", "ID_FMP_MAGIC_ITEM_4185"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Temporal Dissonance +4"] = new engine.RulesElement({
    name: "Orb of Temporal Dissonance +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4186",
    source: "Dragon Magazine 365",
    categories: ["Orb of Temporal Dissonance +4", "ID_FMP_MAGIC_ITEM_4186"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Temporal Dissonance +5"] = new engine.RulesElement({
    name: "Orb of Temporal Dissonance +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4187",
    source: "Dragon Magazine 365",
    categories: ["Orb of Temporal Dissonance +5", "ID_FMP_MAGIC_ITEM_4187"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Temporal Dissonance +6"] = new engine.RulesElement({
    name: "Orb of Temporal Dissonance +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4188",
    source: "Dragon Magazine 365",
    categories: ["Orb of Temporal Dissonance +6", "ID_FMP_MAGIC_ITEM_4188"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Purple Dragon Commander's Ring (paragon tier)"] = new engine.RulesElement({
    name: "Purple Dragon Commander's Ring (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4242",
    source: "Dragon Magazine 365",
    categories: ["Purple Dragon Commander's Ring (paragon tier)", "ID_FMP_MAGIC_ITEM_4242"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Quickstride Boots (paragon tier)"] = new engine.RulesElement({
    name: "Quickstride Boots (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4227",
    source: "Dragon Magazine 365",
    categories: ["Quickstride Boots (paragon tier)", "ID_FMP_MAGIC_ITEM_4227"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Relentless Weapon +1"] = new engine.RulesElement({
    name: "Relentless Weapon +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4147",
    source: "Dragon Magazine 365",
    categories: ["Relentless Weapon +1", "ID_FMP_MAGIC_ITEM_4147"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Relentless Weapon +2"] = new engine.RulesElement({
    name: "Relentless Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4148",
    source: "Dragon Magazine 365",
    categories: ["Relentless Weapon +2", "ID_FMP_MAGIC_ITEM_4148"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Relentless Weapon +3"] = new engine.RulesElement({
    name: "Relentless Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4149",
    source: "Dragon Magazine 365",
    categories: ["Relentless Weapon +3", "ID_FMP_MAGIC_ITEM_4149"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Relentless Weapon +4"] = new engine.RulesElement({
    name: "Relentless Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4150",
    source: "Dragon Magazine 365",
    categories: ["Relentless Weapon +4", "ID_FMP_MAGIC_ITEM_4150"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Relentless Weapon +5"] = new engine.RulesElement({
    name: "Relentless Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4151",
    source: "Dragon Magazine 365",
    categories: ["Relentless Weapon +5", "ID_FMP_MAGIC_ITEM_4151"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Relentless Weapon +6"] = new engine.RulesElement({
    name: "Relentless Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4152",
    source: "Dragon Magazine 365",
    categories: ["Relentless Weapon +6", "ID_FMP_MAGIC_ITEM_4152"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Reparation Apparatus (heroic tier)"] = new engine.RulesElement({
    name: "Reparation Apparatus (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4099",
    source: "Dragon Magazine 365",
    categories: ["Reparation Apparatus (heroic tier)", "ID_FMP_MAGIC_ITEM_4099"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rimewrought Armor +3"] = new engine.RulesElement({
    name: "Rimewrought Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4121",
    source: "Dragon Magazine 365",
    categories: ["Rimewrought Armor +3", "ID_FMP_MAGIC_ITEM_4121"],
    rules: function(model) {
      model.statadd("resist:cold", 10, "resist");
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rimewrought Armor +4"] = new engine.RulesElement({
    name: "Rimewrought Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4122",
    source: "Dragon Magazine 365",
    categories: ["Rimewrought Armor +4", "ID_FMP_MAGIC_ITEM_4122"],
    rules: function(model) {
      model.statadd("resist:cold", 10, "resist");
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rimewrought Armor +5"] = new engine.RulesElement({
    name: "Rimewrought Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4123",
    source: "Dragon Magazine 365",
    categories: ["Rimewrought Armor +5", "ID_FMP_MAGIC_ITEM_4123"],
    rules: function(model) {
      model.statadd("resist:cold", 15, "resist");
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rimewrought Armor +6"] = new engine.RulesElement({
    name: "Rimewrought Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4124",
    source: "Dragon Magazine 365",
    categories: ["Rimewrought Armor +6", "ID_FMP_MAGIC_ITEM_4124"],
    rules: function(model) {
      model.statadd("resist:cold", 15, "resist");
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ring of Draconic Zeal (paragon tier)"] = new engine.RulesElement({
    name: "Ring of Draconic Zeal (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4237",
    source: "Dragon Magazine 365",
    categories: ["Ring of Draconic Zeal (paragon tier)", "ID_FMP_MAGIC_ITEM_4237"],
    rules: function(model) {
      model.statadd("Intimidate Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ring of the Ghost Knight (epic tier)"] = new engine.RulesElement({
    name: "Ring of the Ghost Knight (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4238",
    source: "Dragon Magazine 365",
    categories: ["Ring of the Ghost Knight (epic tier)", "ID_FMP_MAGIC_ITEM_4238"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against fear */ return 5; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Baleful Geas +3"] = new engine.RulesElement({
    name: "Rod of Baleful Geas +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4189",
    source: "Dragon Magazine 365",
    categories: ["Rod of Baleful Geas +3", "ID_FMP_MAGIC_ITEM_4189"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Baleful Geas +4"] = new engine.RulesElement({
    name: "Rod of Baleful Geas +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4190",
    source: "Dragon Magazine 365",
    categories: ["Rod of Baleful Geas +4", "ID_FMP_MAGIC_ITEM_4190"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Baleful Geas +5"] = new engine.RulesElement({
    name: "Rod of Baleful Geas +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4191",
    source: "Dragon Magazine 365",
    categories: ["Rod of Baleful Geas +5", "ID_FMP_MAGIC_ITEM_4191"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Baleful Geas +6"] = new engine.RulesElement({
    name: "Rod of Baleful Geas +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4192",
    source: "Dragon Magazine 365",
    categories: ["Rod of Baleful Geas +6", "ID_FMP_MAGIC_ITEM_4192"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Deadly Casting +1"] = new engine.RulesElement({
    name: "Rod of Deadly Casting +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4079",
    source: "Dragon Magazine 365,Eberron Player's Guide",
    categories: ["Rod of Deadly Casting +1", "ID_FMP_MAGIC_ITEM_4079"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Deadly Casting +2"] = new engine.RulesElement({
    name: "Rod of Deadly Casting +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4080",
    source: "Dragon Magazine 365,Eberron Player's Guide",
    categories: ["Rod of Deadly Casting +2", "ID_FMP_MAGIC_ITEM_4080"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Deadly Casting +3"] = new engine.RulesElement({
    name: "Rod of Deadly Casting +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4081",
    source: "Dragon Magazine 365,Eberron Player's Guide",
    categories: ["Rod of Deadly Casting +3", "ID_FMP_MAGIC_ITEM_4081"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Deadly Casting +4"] = new engine.RulesElement({
    name: "Rod of Deadly Casting +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4082",
    source: "Dragon Magazine 365,Eberron Player's Guide",
    categories: ["Rod of Deadly Casting +4", "ID_FMP_MAGIC_ITEM_4082"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Deadly Casting +5"] = new engine.RulesElement({
    name: "Rod of Deadly Casting +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4083",
    source: "Dragon Magazine 365,Eberron Player's Guide",
    categories: ["Rod of Deadly Casting +5", "ID_FMP_MAGIC_ITEM_4083"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Deadly Casting +6"] = new engine.RulesElement({
    name: "Rod of Deadly Casting +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4084",
    source: "Dragon Magazine 365,Eberron Player's Guide",
    categories: ["Rod of Deadly Casting +6", "ID_FMP_MAGIC_ITEM_4084"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Draconic Fury +1"] = new engine.RulesElement({
    name: "Rod of Draconic Fury +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4193",
    source: "Dragon Magazine 365",
    categories: ["Rod of Draconic Fury +1", "ID_FMP_MAGIC_ITEM_4193"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Draconic Fury +2"] = new engine.RulesElement({
    name: "Rod of Draconic Fury +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4194",
    source: "Dragon Magazine 365",
    categories: ["Rod of Draconic Fury +2", "ID_FMP_MAGIC_ITEM_4194"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Draconic Fury +3"] = new engine.RulesElement({
    name: "Rod of Draconic Fury +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4195",
    source: "Dragon Magazine 365",
    categories: ["Rod of Draconic Fury +3", "ID_FMP_MAGIC_ITEM_4195"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Draconic Fury +4"] = new engine.RulesElement({
    name: "Rod of Draconic Fury +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4196",
    source: "Dragon Magazine 365",
    categories: ["Rod of Draconic Fury +4", "ID_FMP_MAGIC_ITEM_4196"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Draconic Fury +5"] = new engine.RulesElement({
    name: "Rod of Draconic Fury +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4197",
    source: "Dragon Magazine 365",
    categories: ["Rod of Draconic Fury +5", "ID_FMP_MAGIC_ITEM_4197"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Draconic Fury +6"] = new engine.RulesElement({
    name: "Rod of Draconic Fury +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4198",
    source: "Dragon Magazine 365",
    categories: ["Rod of Draconic Fury +6", "ID_FMP_MAGIC_ITEM_4198"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Runic Resistance +2"] = new engine.RulesElement({
    name: "Rod of Runic Resistance +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4086",
    source: "Dragon Magazine 365",
    categories: ["Rod of Runic Resistance +2", "ID_FMP_MAGIC_ITEM_4086"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Runic Resistance +3"] = new engine.RulesElement({
    name: "Rod of Runic Resistance +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4087",
    source: "Dragon Magazine 365",
    categories: ["Rod of Runic Resistance +3", "ID_FMP_MAGIC_ITEM_4087"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Runic Resistance +4"] = new engine.RulesElement({
    name: "Rod of Runic Resistance +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4088",
    source: "Dragon Magazine 365",
    categories: ["Rod of Runic Resistance +4", "ID_FMP_MAGIC_ITEM_4088"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Runic Resistance +5"] = new engine.RulesElement({
    name: "Rod of Runic Resistance +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4089",
    source: "Dragon Magazine 365",
    categories: ["Rod of Runic Resistance +5", "ID_FMP_MAGIC_ITEM_4089"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Runic Resistance +6"] = new engine.RulesElement({
    name: "Rod of Runic Resistance +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4090",
    source: "Dragon Magazine 365",
    categories: ["Rod of Runic Resistance +6", "ID_FMP_MAGIC_ITEM_4090"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of the Dragon's Heart +5"] = new engine.RulesElement({
    name: "Rod of the Dragon's Heart +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4199",
    source: "Dragon Magazine 365",
    categories: ["Rod of the Dragon's Heart +5", "ID_FMP_MAGIC_ITEM_4199"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of the Dragon's Heart +6"] = new engine.RulesElement({
    name: "Rod of the Dragon's Heart +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4200",
    source: "Dragon Magazine 365",
    categories: ["Rod of the Dragon's Heart +6", "ID_FMP_MAGIC_ITEM_4200"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ruby Lenses (paragon tier)"] = new engine.RulesElement({
    name: "Ruby Lenses (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4232",
    source: "Dragon Magazine 365",
    categories: ["Ruby Lenses (paragon tier)", "ID_FMP_MAGIC_ITEM_4232"],
    rules: function(model) {
      model.statadd("Perception Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Draconic Power +1"] = new engine.RulesElement({
    name: "Staff of Draconic Power +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4201",
    source: "Dragon Magazine 365",
    categories: ["Staff of Draconic Power +1", "ID_FMP_MAGIC_ITEM_4201"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Draconic Power +2"] = new engine.RulesElement({
    name: "Staff of Draconic Power +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4202",
    source: "Dragon Magazine 365",
    categories: ["Staff of Draconic Power +2", "ID_FMP_MAGIC_ITEM_4202"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Draconic Power +3"] = new engine.RulesElement({
    name: "Staff of Draconic Power +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4203",
    source: "Dragon Magazine 365",
    categories: ["Staff of Draconic Power +3", "ID_FMP_MAGIC_ITEM_4203"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Draconic Power +4"] = new engine.RulesElement({
    name: "Staff of Draconic Power +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4204",
    source: "Dragon Magazine 365",
    categories: ["Staff of Draconic Power +4", "ID_FMP_MAGIC_ITEM_4204"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Draconic Power +5"] = new engine.RulesElement({
    name: "Staff of Draconic Power +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4205",
    source: "Dragon Magazine 365",
    categories: ["Staff of Draconic Power +5", "ID_FMP_MAGIC_ITEM_4205"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Draconic Power +6"] = new engine.RulesElement({
    name: "Staff of Draconic Power +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4206",
    source: "Dragon Magazine 365",
    categories: ["Staff of Draconic Power +6", "ID_FMP_MAGIC_ITEM_4206"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Expansion +1"] = new engine.RulesElement({
    name: "Staff of Expansion +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4207",
    source: "Dragon Magazine 365",
    categories: ["Staff of Expansion +1", "ID_FMP_MAGIC_ITEM_4207"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Expansion +2"] = new engine.RulesElement({
    name: "Staff of Expansion +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4208",
    source: "Dragon Magazine 365",
    categories: ["Staff of Expansion +2", "ID_FMP_MAGIC_ITEM_4208"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Expansion +3"] = new engine.RulesElement({
    name: "Staff of Expansion +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4209",
    source: "Dragon Magazine 365",
    categories: ["Staff of Expansion +3", "ID_FMP_MAGIC_ITEM_4209"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Expansion +4"] = new engine.RulesElement({
    name: "Staff of Expansion +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4210",
    source: "Dragon Magazine 365",
    categories: ["Staff of Expansion +4", "ID_FMP_MAGIC_ITEM_4210"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Expansion +5"] = new engine.RulesElement({
    name: "Staff of Expansion +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4211",
    source: "Dragon Magazine 365",
    categories: ["Staff of Expansion +5", "ID_FMP_MAGIC_ITEM_4211"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Expansion +6"] = new engine.RulesElement({
    name: "Staff of Expansion +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4212",
    source: "Dragon Magazine 365",
    categories: ["Staff of Expansion +6", "ID_FMP_MAGIC_ITEM_4212"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Verdant Growth +1"] = new engine.RulesElement({
    name: "Staff of Verdant Growth +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4213",
    source: "Dragon Magazine 365",
    categories: ["Staff of Verdant Growth +1", "ID_FMP_MAGIC_ITEM_4213"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Verdant Growth +2"] = new engine.RulesElement({
    name: "Staff of Verdant Growth +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4214",
    source: "Dragon Magazine 365",
    categories: ["Staff of Verdant Growth +2", "ID_FMP_MAGIC_ITEM_4214"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Verdant Growth +3"] = new engine.RulesElement({
    name: "Staff of Verdant Growth +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4215",
    source: "Dragon Magazine 365",
    categories: ["Staff of Verdant Growth +3", "ID_FMP_MAGIC_ITEM_4215"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Verdant Growth +4"] = new engine.RulesElement({
    name: "Staff of Verdant Growth +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4216",
    source: "Dragon Magazine 365",
    categories: ["Staff of Verdant Growth +4", "ID_FMP_MAGIC_ITEM_4216"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Verdant Growth +5"] = new engine.RulesElement({
    name: "Staff of Verdant Growth +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4217",
    source: "Dragon Magazine 365",
    categories: ["Staff of Verdant Growth +5", "ID_FMP_MAGIC_ITEM_4217"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Verdant Growth +6"] = new engine.RulesElement({
    name: "Staff of Verdant Growth +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4218",
    source: "Dragon Magazine 365",
    categories: ["Staff of Verdant Growth +6", "ID_FMP_MAGIC_ITEM_4218"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Stonemeld Armor +2"] = new engine.RulesElement({
    name: "Stonemeld Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4094",
    source: "Dragon Magazine 365",
    categories: ["Stonemeld Armor +2", "ID_FMP_MAGIC_ITEM_4094"],
    rules: function(model) {
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Stonemeld Armor +3"] = new engine.RulesElement({
    name: "Stonemeld Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4095",
    source: "Dragon Magazine 365",
    categories: ["Stonemeld Armor +3", "ID_FMP_MAGIC_ITEM_4095"],
    rules: function(model) {
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Stonemeld Armor +4"] = new engine.RulesElement({
    name: "Stonemeld Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4096",
    source: "Dragon Magazine 365",
    categories: ["Stonemeld Armor +4", "ID_FMP_MAGIC_ITEM_4096"],
    rules: function(model) {
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Stonemeld Armor +5"] = new engine.RulesElement({
    name: "Stonemeld Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4097",
    source: "Dragon Magazine 365",
    categories: ["Stonemeld Armor +5", "ID_FMP_MAGIC_ITEM_4097"],
    rules: function(model) {
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Stonemeld Armor +6"] = new engine.RulesElement({
    name: "Stonemeld Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4098",
    source: "Dragon Magazine 365",
    categories: ["Stonemeld Armor +6", "ID_FMP_MAGIC_ITEM_4098"],
    rules: function(model) {
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of Courage +2"] = new engine.RulesElement({
    name: "Symbol of Courage +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4159",
    source: "Dragon Magazine 365",
    categories: ["Symbol of Courage +2", "ID_FMP_MAGIC_ITEM_4159"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against fear effects */ return 2; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of Courage +3"] = new engine.RulesElement({
    name: "Symbol of Courage +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4160",
    source: "Dragon Magazine 365",
    categories: ["Symbol of Courage +3", "ID_FMP_MAGIC_ITEM_4160"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against fear effects */ return 3; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of Courage +4"] = new engine.RulesElement({
    name: "Symbol of Courage +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4161",
    source: "Dragon Magazine 365",
    categories: ["Symbol of Courage +4", "ID_FMP_MAGIC_ITEM_4161"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against fear effects */ return 4; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of Courage +5"] = new engine.RulesElement({
    name: "Symbol of Courage +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4162",
    source: "Dragon Magazine 365",
    categories: ["Symbol of Courage +5", "ID_FMP_MAGIC_ITEM_4162"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against fear effects */ return 5; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of Courage +6"] = new engine.RulesElement({
    name: "Symbol of Courage +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4163",
    source: "Dragon Magazine 365",
    categories: ["Symbol of Courage +6", "ID_FMP_MAGIC_ITEM_4163"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against fear effects */ return 6; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of Excellence +1"] = new engine.RulesElement({
    name: "Symbol of Excellence +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4164",
    source: "Dragon Magazine 365",
    categories: ["Symbol of Excellence +1", "ID_FMP_MAGIC_ITEM_4164"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of Excellence +2"] = new engine.RulesElement({
    name: "Symbol of Excellence +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4165",
    source: "Dragon Magazine 365",
    categories: ["Symbol of Excellence +2", "ID_FMP_MAGIC_ITEM_4165"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of Excellence +3"] = new engine.RulesElement({
    name: "Symbol of Excellence +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4166",
    source: "Dragon Magazine 365",
    categories: ["Symbol of Excellence +3", "ID_FMP_MAGIC_ITEM_4166"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of Excellence +4"] = new engine.RulesElement({
    name: "Symbol of Excellence +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4167",
    source: "Dragon Magazine 365",
    categories: ["Symbol of Excellence +4", "ID_FMP_MAGIC_ITEM_4167"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of Excellence +5"] = new engine.RulesElement({
    name: "Symbol of Excellence +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4168",
    source: "Dragon Magazine 365",
    categories: ["Symbol of Excellence +5", "ID_FMP_MAGIC_ITEM_4168"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of Excellence +6"] = new engine.RulesElement({
    name: "Symbol of Excellence +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4169",
    source: "Dragon Magazine 365",
    categories: ["Symbol of Excellence +6", "ID_FMP_MAGIC_ITEM_4169"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of the Dragon +1"] = new engine.RulesElement({
    name: "Symbol of the Dragon +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4170",
    source: "Dragon Magazine 365",
    categories: ["Symbol of the Dragon +1", "ID_FMP_MAGIC_ITEM_4170"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of the Dragon +2"] = new engine.RulesElement({
    name: "Symbol of the Dragon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4171",
    source: "Dragon Magazine 365",
    categories: ["Symbol of the Dragon +2", "ID_FMP_MAGIC_ITEM_4171"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of the Dragon +3"] = new engine.RulesElement({
    name: "Symbol of the Dragon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4172",
    source: "Dragon Magazine 365",
    categories: ["Symbol of the Dragon +3", "ID_FMP_MAGIC_ITEM_4172"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of the Dragon +4"] = new engine.RulesElement({
    name: "Symbol of the Dragon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4173",
    source: "Dragon Magazine 365",
    categories: ["Symbol of the Dragon +4", "ID_FMP_MAGIC_ITEM_4173"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of the Dragon +5"] = new engine.RulesElement({
    name: "Symbol of the Dragon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4174",
    source: "Dragon Magazine 365",
    categories: ["Symbol of the Dragon +5", "ID_FMP_MAGIC_ITEM_4174"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Symbol of the Dragon +6"] = new engine.RulesElement({
    name: "Symbol of the Dragon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4175",
    source: "Dragon Magazine 365",
    categories: ["Symbol of the Dragon +6", "ID_FMP_MAGIC_ITEM_4175"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Vitriolic Weapon +1"] = new engine.RulesElement({
    name: "Vitriolic Weapon +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4153",
    source: "Dragon Magazine 365",
    categories: ["Vitriolic Weapon +1", "ID_FMP_MAGIC_ITEM_4153"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Vitriolic Weapon +2"] = new engine.RulesElement({
    name: "Vitriolic Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4154",
    source: "Dragon Magazine 365",
    categories: ["Vitriolic Weapon +2", "ID_FMP_MAGIC_ITEM_4154"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Vitriolic Weapon +3"] = new engine.RulesElement({
    name: "Vitriolic Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4155",
    source: "Dragon Magazine 365",
    categories: ["Vitriolic Weapon +3", "ID_FMP_MAGIC_ITEM_4155"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Vitriolic Weapon +4"] = new engine.RulesElement({
    name: "Vitriolic Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4156",
    source: "Dragon Magazine 365",
    categories: ["Vitriolic Weapon +4", "ID_FMP_MAGIC_ITEM_4156"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Vitriolic Weapon +5"] = new engine.RulesElement({
    name: "Vitriolic Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4157",
    source: "Dragon Magazine 365",
    categories: ["Vitriolic Weapon +5", "ID_FMP_MAGIC_ITEM_4157"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Vitriolic Weapon +6"] = new engine.RulesElement({
    name: "Vitriolic Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4158",
    source: "Dragon Magazine 365",
    categories: ["Vitriolic Weapon +6", "ID_FMP_MAGIC_ITEM_4158"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
