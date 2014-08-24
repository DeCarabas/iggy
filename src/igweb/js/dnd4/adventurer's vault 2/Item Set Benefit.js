(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Item_Set_Benefit = types['Item Set Benefit'] || (types['Item Set Benefit'] = {});
  te = Item_Set_Benefit["Aleheart Companions' Gear (2)"] = new RulesElement({
    name: "Aleheart Companions' Gear (2)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_1",
    source: "Adventurer's Vault 2",
    categories: ["Aleheart Companions' Gear (2)", "ID_FMP_ITEM_SET_BENEFIT_1"],
    rules: function(model) {
      model.statadd("Dungeoneering Misc", 2, "item");
      model.statadd("Endurance Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Aleheart Companions' Gear (4)"] = new RulesElement({
    name: "Aleheart Companions' Gear (4)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_2",
    source: "Adventurer's Vault 2",
    categories: ["Aleheart Companions' Gear (4)", "ID_FMP_ITEM_SET_BENEFIT_2"],
    rules: function(model) {
      model.statadd("Aleheart Companions' Gear (4)", 10);
      model.statadd("Aleheart Companions' Gear (4)", function() { return model.stat("Constitution modifier"); });
      model.statadd("resist:poison", function() { return model.stat("Aleheart Companions' Gear (4)"); }, "resist");
    }
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Armory of the Unvanquished (2)"] = new RulesElement({
    name: "Armory of the Unvanquished (2)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_66",
    source: "Adventurer's Vault 2",
    categories: ["Armory of the Unvanquished (2)", "ID_FMP_ITEM_SET_BENEFIT_66"]
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Armory of the Unvanquished (4)"] = new RulesElement({
    name: "Armory of the Unvanquished (4)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_67",
    source: "Adventurer's Vault 2",
    categories: ["Armory of the Unvanquished (4)", "ID_FMP_ITEM_SET_BENEFIT_67"]
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Arms of Unbreakable Honor (2)"] = new RulesElement({
    name: "Arms of Unbreakable Honor (2)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_28",
    source: "Adventurer's Vault 2",
    categories: ["Arms of Unbreakable Honor (2)", "ID_FMP_ITEM_SET_BENEFIT_28"]
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Arms of Unbreakable Honor (5)"] = new RulesElement({
    name: "Arms of Unbreakable Honor (5)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_29",
    source: "Adventurer's Vault 2",
    categories: ["Arms of Unbreakable Honor (5)", "ID_FMP_ITEM_SET_BENEFIT_29"]
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Arms of War (2)"] = new RulesElement({
    name: "Arms of War (2)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_3",
    source: "Adventurer's Vault 2",
    categories: ["Arms of War (2)", "ID_FMP_ITEM_SET_BENEFIT_3"]
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Arms of War (4)"] = new RulesElement({
    name: "Arms of War (4)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_4",
    source: "Adventurer's Vault 2",
    categories: ["Arms of War (4)", "ID_FMP_ITEM_SET_BENEFIT_4"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_9272"]);
    }
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Aspect of the Ram (2)"] = new RulesElement({
    name: "Aspect of the Ram (2)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_30",
    source: "Adventurer's Vault 2",
    categories: ["Aspect of the Ram (2)", "ID_FMP_ITEM_SET_BENEFIT_30"],
    rules: function(model) {
      model.statadd("attack rolls", function() { /* with charge attacks */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Aspect of the Ram (4)"] = new RulesElement({
    name: "Aspect of the Ram (4)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_31",
    source: "Adventurer's Vault 2",
    categories: ["Aspect of the Ram (4)", "ID_FMP_ITEM_SET_BENEFIT_31"]
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Ayrkashna Armor (2)"] = new RulesElement({
    name: "Ayrkashna Armor (2)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_32",
    source: "Adventurer's Vault 2",
    categories: ["Ayrkashna Armor (2)", "ID_FMP_ITEM_SET_BENEFIT_32"],
    rules: function(model) {
      model.statadd("resist:fire", function() { return model.stat("Astral Resistance"); }, "resist");
    }
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Ayrkashna Armor (5)"] = new RulesElement({
    name: "Ayrkashna Armor (5)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_33",
    source: "Adventurer's Vault 2",
    categories: ["Ayrkashna Armor (5)", "ID_FMP_ITEM_SET_BENEFIT_33"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_9274"]);
    }
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Blade Dancer's Regalia (2)"] = new RulesElement({
    name: "Blade Dancer's Regalia (2)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_5",
    source: "Adventurer's Vault 2",
    categories: ["Blade Dancer's Regalia (2)", "ID_FMP_ITEM_SET_BENEFIT_5"],
    rules: function(model) {
      model.statadd("AC", function() { /* against opportunity attacks */ return model.stat("ID_FMP_ITEM_SET_3 Set Count"); });
    }
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Blade Dancer's Regalia (5)"] = new RulesElement({
    name: "Blade Dancer's Regalia (5)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_6",
    source: "Adventurer's Vault 2",
    categories: ["Blade Dancer's Regalia (5)", "ID_FMP_ITEM_SET_BENEFIT_6"]
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Caelynnvala's Boons (3)"] = new RulesElement({
    name: "Caelynnvala's Boons (3)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_68",
    source: "Adventurer's Vault 2",
    categories: ["Caelynnvala's Boons (3)", "ID_FMP_ITEM_SET_BENEFIT_68"],
    rules: function(model) {
      model.statadd("Speed", 1, "item");
      model.statadd("Speed", 1, "item");
      model.statadd("Speed", 1, "item");
    }
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Caelynnvala's Boons (5)"] = new RulesElement({
    name: "Caelynnvala's Boons (5)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_69",
    source: "Adventurer's Vault 2",
    categories: ["Caelynnvala's Boons (5)", "ID_FMP_ITEM_SET_BENEFIT_69"]
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Champion's Flame (2)"] = new RulesElement({
    name: "Champion's Flame (2)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_34",
    source: "Adventurer's Vault 2",
    categories: ["Champion's Flame (2)", "ID_FMP_ITEM_SET_BENEFIT_34"],
    rules: function(model) {
      model.statadd("Insight Misc", function() { return model.stat("ID_FMP_ITEM_SET_17 Set Count"); }, "item");
      model.statadd("Intimidate Misc", function() { return model.stat("ID_FMP_ITEM_SET_17 Set Count"); }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Champion's Flame (5)"] = new RulesElement({
    name: "Champion's Flame (5)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_35",
    source: "Adventurer's Vault 2",
    categories: ["Champion's Flame (5)", "ID_FMP_ITEM_SET_BENEFIT_35"]
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Eldritch Panoply (2)"] = new RulesElement({
    name: "Eldritch Panoply (2)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_36",
    source: "Adventurer's Vault 2",
    categories: ["Eldritch Panoply (2)", "ID_FMP_ITEM_SET_BENEFIT_36"]
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Eldritch Panoply (4)"] = new RulesElement({
    name: "Eldritch Panoply (4)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_37",
    source: "Adventurer's Vault 2",
    categories: ["Eldritch Panoply (4)", "ID_FMP_ITEM_SET_BENEFIT_37"]
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Eldritch Panoply (6)"] = new RulesElement({
    name: "Eldritch Panoply (6)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_38",
    source: "Adventurer's Vault 2",
    categories: ["Eldritch Panoply (6)", "ID_FMP_ITEM_SET_BENEFIT_38"],
    rules: function(model) {
      model.statadd("AC", function() { 
        if (!(model.wearing('Armor', ['heavy']))) {
          return 1;
        } else return 0;
       }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Fortune Stones (2)"] = new RulesElement({
    name: "Fortune Stones (2)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_70",
    source: "Adventurer's Vault 2",
    categories: ["Fortune Stones (2)", "ID_FMP_ITEM_SET_BENEFIT_70"]
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Fortune Stones (5)"] = new RulesElement({
    name: "Fortune Stones (5)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_71",
    source: "Adventurer's Vault 2",
    categories: ["Fortune Stones (5)", "ID_FMP_ITEM_SET_BENEFIT_71"],
    rules: function(model) {
      model.statadd("Initiative Misc", 2, "item");
      model.statadd("Saving Throws", 1, "item");
    }
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Gadgeteer's Garb (2)"] = new RulesElement({
    name: "Gadgeteer's Garb (2)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_7",
    source: "Adventurer's Vault 2",
    categories: ["Gadgeteer's Garb (2)", "ID_FMP_ITEM_SET_BENEFIT_7"]
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Gadgeteer's Garb (4)"] = new RulesElement({
    name: "Gadgeteer's Garb (4)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_8",
    source: "Adventurer's Vault 2",
    categories: ["Gadgeteer's Garb (4)", "ID_FMP_ITEM_SET_BENEFIT_8"],
    rules: function(model) {
      model.statadd("AC", function() { /* against traps */ return 4; });
      model.statadd("Fortitude Defense", function() { /* against traps */ return 4; });
      model.statadd("Reflex Defense", function() { /* against traps */ return 4; });
      model.statadd("Will Defense", function() { /* against traps */ return 4; });
    }
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Gifts for the Queen (2)"] = new RulesElement({
    name: "Gifts for the Queen (2)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_39",
    source: "Adventurer's Vault 2",
    categories: ["Gifts for the Queen (2)", "ID_FMP_ITEM_SET_BENEFIT_39"],
    rules: function(model) {
      model.statadd("lightning:damage", function() { return model.stat("ID_FMP_ITEM_SET_19 Set Count"); });
      model.statadd("radiant:damage", function() { return model.stat("ID_FMP_ITEM_SET_19 Set Count"); });
    }
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Gifts for the Queen (5)"] = new RulesElement({
    name: "Gifts for the Queen (5)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_40",
    source: "Adventurer's Vault 2",
    categories: ["Gifts for the Queen (5)", "ID_FMP_ITEM_SET_BENEFIT_40"],
    rules: function(model) {
      model.statadd("resist:radiant", 10, "resist");
      model.statadd("resist:lightning", 10, "resist");
    }
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Golden Lion's Battle Regalia (3)"] = new RulesElement({
    name: "Golden Lion's Battle Regalia (3)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_9",
    source: "Adventurer's Vault 2",
    categories: ["Golden Lion's Battle Regalia (3)", "ID_FMP_ITEM_SET_BENEFIT_9"],
    rules: function(model) {
      model.statadd("attack rolls", function() { /* when you're adjacent to three or more enemies you can see */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Golden Lion's Battle Regalia (5)"] = new RulesElement({
    name: "Golden Lion's Battle Regalia (5)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_10",
    source: "Adventurer's Vault 2",
    categories: ["Golden Lion's Battle Regalia (5)", "ID_FMP_ITEM_SET_BENEFIT_10"]
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Heirlooms of Mazgorax (2)"] = new RulesElement({
    name: "Heirlooms of Mazgorax (2)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_72",
    source: "Adventurer's Vault 2",
    categories: ["Heirlooms of Mazgorax (2)", "ID_FMP_ITEM_SET_BENEFIT_72"],
    rules: function(model) {
      model.statadd("Athletics Misc", function() { return model.stat("ID_FMP_ITEM_SET_35 Set Count"); }, "item");
      model.statadd("Bluff Misc", function() { return model.stat("ID_FMP_ITEM_SET_35 Set Count"); }, "item");
      model.statadd("Diplomacy Misc", function() { return model.stat("ID_FMP_ITEM_SET_35 Set Count"); }, "item");
      model.statadd("Endurance Misc", function() { return model.stat("ID_FMP_ITEM_SET_35 Set Count"); }, "item");
      model.statadd("Religion Misc", function() { return model.stat("ID_FMP_ITEM_SET_35 Set Count"); }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Heirlooms of Mazgorax (4)"] = new RulesElement({
    name: "Heirlooms of Mazgorax (4)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_73",
    source: "Adventurer's Vault 2",
    categories: ["Heirlooms of Mazgorax (4)", "ID_FMP_ITEM_SET_BENEFIT_73"]
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Kamestiri Uniform (2)"] = new RulesElement({
    name: "Kamestiri Uniform (2)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_11",
    source: "Adventurer's Vault 2",
    categories: ["Kamestiri Uniform (2)", "ID_FMP_ITEM_SET_BENEFIT_11"]
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Kamestiri Uniform (3)"] = new RulesElement({
    name: "Kamestiri Uniform (3)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_12",
    source: "Adventurer's Vault 2",
    categories: ["Kamestiri Uniform (3)", "ID_FMP_ITEM_SET_BENEFIT_12"],
    rules: function(model) {
      model.statadd("melee:damage", function() { /* while you are adjacent to two or more enemies */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Kamestiri Uniform (5)"] = new RulesElement({
    name: "Kamestiri Uniform (5)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_13",
    source: "Adventurer's Vault 2",
    categories: ["Kamestiri Uniform (5)", "ID_FMP_ITEM_SET_BENEFIT_13"]
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Marjam's Dream (2)"] = new RulesElement({
    name: "Marjam's Dream (2)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_14",
    source: "Adventurer's Vault 2",
    categories: ["Marjam's Dream (2)", "ID_FMP_ITEM_SET_BENEFIT_14"],
    rules: function(model) {
      model.statadd("Arcana Misc", function() { /* to detect magic */ return model.stat("ID_FMP_ITEM_SET_7 Set Count"); });
    }
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Marjam's Dream (5)"] = new RulesElement({
    name: "Marjam's Dream (5)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_15",
    source: "Adventurer's Vault 2",
    categories: ["Marjam's Dream (5)", "ID_FMP_ITEM_SET_BENEFIT_15"]
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Mirror of Nessecar (2)"] = new RulesElement({
    name: "Mirror of Nessecar (2)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_55",
    source: "Adventurer's Vault 2",
    categories: ["Mirror of Nessecar (2)", "ID_FMP_ITEM_SET_BENEFIT_55"]
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Mirror of Nessecar (4)"] = new RulesElement({
    name: "Mirror of Nessecar (4)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_56",
    source: "Adventurer's Vault 2",
    categories: ["Mirror of Nessecar (4)", "ID_FMP_ITEM_SET_BENEFIT_56"]
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Offerings of Celestian (2)"] = new RulesElement({
    name: "Offerings of Celestian (2)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_41",
    source: "Adventurer's Vault 2",
    categories: ["Offerings of Celestian (2)", "ID_FMP_ITEM_SET_BENEFIT_41"],
    rules: function(model) {
      model.statadd("resist:cold", function() { return model.stat("ID_FMP_ITEM_SET_20 Set Count"); });
      model.statadd("resist:psychic", function() { return model.stat("ID_FMP_ITEM_SET_20 Set Count"); });
      model.statadd("resist:radiant", function() { return model.stat("ID_FMP_ITEM_SET_20 Set Count"); });
    }
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Offerings of Celestian (4)"] = new RulesElement({
    name: "Offerings of Celestian (4)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_42",
    source: "Adventurer's Vault 2",
    categories: ["Offerings of Celestian (4)", "ID_FMP_ITEM_SET_BENEFIT_42"]
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Panoply of the Shepherds of Ghest (2)"] = new RulesElement({
    name: "Panoply of the Shepherds of Ghest (2)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_43",
    source: "Adventurer's Vault 2",
    categories: ["Panoply of the Shepherds of Ghest (2)", "ID_FMP_ITEM_SET_BENEFIT_43"]
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Panoply of the Shepherds of Ghest (4)"] = new RulesElement({
    name: "Panoply of the Shepherds of Ghest (4)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_44",
    source: "Adventurer's Vault 2",
    categories: ["Panoply of the Shepherds of Ghest (4)", "ID_FMP_ITEM_SET_BENEFIT_44"]
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Points of the Constellation (2)"] = new RulesElement({
    name: "Points of the Constellation (2)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_57",
    source: "Adventurer's Vault 2",
    categories: ["Points of the Constellation (2)", "ID_FMP_ITEM_SET_BENEFIT_57"]
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Points of the Constellation (5)"] = new RulesElement({
    name: "Points of the Constellation (5)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_58",
    source: "Adventurer's Vault 2",
    categories: ["Points of the Constellation (5)", "ID_FMP_ITEM_SET_BENEFIT_58"]
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Radiant Temple Treasures (2)"] = new RulesElement({
    name: "Radiant Temple Treasures (2)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_16",
    source: "Adventurer's Vault 2",
    categories: ["Radiant Temple Treasures (2)", "ID_FMP_ITEM_SET_BENEFIT_16"]
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Radiant Temple Treasures (4)"] = new RulesElement({
    name: "Radiant Temple Treasures (4)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_17",
    source: "Adventurer's Vault 2",
    categories: ["Radiant Temple Treasures (4)", "ID_FMP_ITEM_SET_BENEFIT_17"],
    rules: function(model) {
      model.statadd("Death Saving Throws", function() { /* first each day */ return 10; });
    }
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Raiment of Shadows (2)"] = new RulesElement({
    name: "Raiment of Shadows (2)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_45",
    source: "Adventurer's Vault 2",
    categories: ["Raiment of Shadows (2)", "ID_FMP_ITEM_SET_BENEFIT_45"],
    rules: function(model) {
      model.statadd("Stealth Misc", function() { return model.stat("ID_FMP_ITEM_SET_22 Set Count"); }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Raiment of Shadows (5)"] = new RulesElement({
    name: "Raiment of Shadows (5)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_46",
    source: "Adventurer's Vault 2",
    categories: ["Raiment of Shadows (5)", "ID_FMP_ITEM_SET_BENEFIT_46"]
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Raiment of the World Spirit (2)"] = new RulesElement({
    name: "Raiment of the World Spirit (2)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_47",
    source: "Adventurer's Vault 2",
    categories: ["Raiment of the World Spirit (2)", "ID_FMP_ITEM_SET_BENEFIT_47"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against ongoing damage */ return model.stat("ID_FMP_ITEM_SET_23 Set Count"); }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Raiment of the World Spirit (4)"] = new RulesElement({
    name: "Raiment of the World Spirit (4)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_48",
    source: "Adventurer's Vault 2",
    categories: ["Raiment of the World Spirit (4)", "ID_FMP_ITEM_SET_BENEFIT_48"],
    rules: function(model) {
      model.statadd("Healing Surge Value", 4);
    }
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Reaper's Array (2)"] = new RulesElement({
    name: "Reaper's Array (2)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_49",
    source: "Adventurer's Vault 2",
    categories: ["Reaper's Array (2)", "ID_FMP_ITEM_SET_BENEFIT_49"],
    rules: function(model) {
      model.statadd("Intimidate Misc", function() { return model.stat("ID_FMP_ITEM_SET_24 Set Count"); }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Reaper's Array (5)"] = new RulesElement({
    name: "Reaper's Array (5)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_50",
    source: "Adventurer's Vault 2",
    categories: ["Reaper's Array (5)", "ID_FMP_ITEM_SET_BENEFIT_50"]
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Regalia of the Golden General (2)"] = new RulesElement({
    name: "Regalia of the Golden General (2)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_51",
    source: "Adventurer's Vault 2",
    categories: ["Regalia of the Golden General (2)", "ID_FMP_ITEM_SET_BENEFIT_51"],
    rules: function(model) {
      model.statadd("Will Defense", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Regalia of the Golden General (5)"] = new RulesElement({
    name: "Regalia of the Golden General (5)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_52",
    source: "Adventurer's Vault 2",
    categories: ["Regalia of the Golden General (5)", "ID_FMP_ITEM_SET_BENEFIT_52"],
    rules: function(model) {
      model.statadd("ALLY.Action Point", "Regalia of the Golden General (5):When an ally you can see spends an action point, that ally gains a +2 bonus to Will until the end of his or her next turn");
    }
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Relics of Creation (2)"] = new RulesElement({
    name: "Relics of Creation (2)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_59",
    source: "Adventurer's Vault 2",
    categories: ["Relics of Creation (2)", "ID_FMP_ITEM_SET_BENEFIT_59"],
    rules: function(model) {
      model.statadd("Arcana Misc", function() { return model.stat("ID_FMP_ITEM_SET_29 Set Count"); });
      model.statadd("History Misc", function() { return model.stat("ID_FMP_ITEM_SET_29 Set Count"); });
      model.statadd("Religion Misc", function() { return model.stat("ID_FMP_ITEM_SET_29 Set Count"); });
    }
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Relics of Creation (4)"] = new RulesElement({
    name: "Relics of Creation (4)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_60",
    source: "Adventurer's Vault 2",
    categories: ["Relics of Creation (4)", "ID_FMP_ITEM_SET_BENEFIT_60"]
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Relics of Creation (6)"] = new RulesElement({
    name: "Relics of Creation (6)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_61",
    source: "Adventurer's Vault 2",
    categories: ["Relics of Creation (6)", "ID_FMP_ITEM_SET_BENEFIT_61"]
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Relics of the Forgotten One (2)"] = new RulesElement({
    name: "Relics of the Forgotten One (2)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_53",
    source: "Adventurer's Vault 2",
    categories: ["Relics of the Forgotten One (2)", "ID_FMP_ITEM_SET_BENEFIT_53"]
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Relics of the Forgotten One (5)"] = new RulesElement({
    name: "Relics of the Forgotten One (5)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_54",
    source: "Adventurer's Vault 2",
    categories: ["Relics of the Forgotten One (5)", "ID_FMP_ITEM_SET_BENEFIT_54"]
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Resplendent Finery (2)"] = new RulesElement({
    name: "Resplendent Finery (2)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_18",
    source: "Adventurer's Vault 2",
    categories: ["Resplendent Finery (2)", "ID_FMP_ITEM_SET_BENEFIT_18"],
    rules: function(model) {
      model.statadd("Bluff Misc", function() { return model.stat("ID_FMP_ITEM_SET_9 Set Count"); }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Resplendent Finery (4)"] = new RulesElement({
    name: "Resplendent Finery (4)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_19",
    source: "Adventurer's Vault 2",
    categories: ["Resplendent Finery (4)", "ID_FMP_ITEM_SET_BENEFIT_19"]
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Rings of the Akarot (2)"] = new RulesElement({
    name: "Rings of the Akarot (2)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_74",
    source: "Adventurer's Vault 2",
    categories: ["Rings of the Akarot (2)", "ID_FMP_ITEM_SET_BENEFIT_74"]
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Rings of the Akarot (5)"] = new RulesElement({
    name: "Rings of the Akarot (5)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_75",
    source: "Adventurer's Vault 2",
    categories: ["Rings of the Akarot (5)", "ID_FMP_ITEM_SET_BENEFIT_75"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_9276"]);
    }
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Rings of the Akarot (6)"] = new RulesElement({
    name: "Rings of the Akarot (6)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_76",
    source: "Adventurer's Vault 2",
    categories: ["Rings of the Akarot (6)", "ID_FMP_ITEM_SET_BENEFIT_76"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_9277"]);
    }
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Shadowdancer's Garb (2)"] = new RulesElement({
    name: "Shadowdancer's Garb (2)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_20",
    source: "Adventurer's Vault 2",
    categories: ["Shadowdancer's Garb (2)", "ID_FMP_ITEM_SET_BENEFIT_20"],
    rules: function(model) {
      model.statadd("Athletics Misc", function() { return model.stat("ID_FMP_ITEM_SET_10 Set Count"); }, "item");
      model.statadd("Stealth Misc", function() { return model.stat("ID_FMP_ITEM_SET_10 Set Count"); }, "item");
      model.statadd("Thievery Misc", function() { return model.stat("ID_FMP_ITEM_SET_10 Set Count"); }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Shadowdancer's Garb (4)"] = new RulesElement({
    name: "Shadowdancer's Garb (4)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_21",
    source: "Adventurer's Vault 2",
    categories: ["Shadowdancer's Garb (4)", "ID_FMP_ITEM_SET_BENEFIT_21"]
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Skin of the Panther (2)"] = new RulesElement({
    name: "Skin of the Panther (2)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_22",
    source: "Adventurer's Vault 2",
    categories: ["Skin of the Panther (2)", "ID_FMP_ITEM_SET_BENEFIT_22"],
    rules: function(model) {
      model.statadd("Stealth Misc", function() { return model.stat("ID_FMP_ITEM_SET_11 Set Count"); }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Skin of the Panther (5)"] = new RulesElement({
    name: "Skin of the Panther (5)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_23",
    source: "Adventurer's Vault 2",
    categories: ["Skin of the Panther (5)", "ID_FMP_ITEM_SET_BENEFIT_23"]
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Time Wizard's Tools (2)"] = new RulesElement({
    name: "Time Wizard's Tools (2)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_62",
    source: "Adventurer's Vault 2",
    categories: ["Time Wizard's Tools (2)", "ID_FMP_ITEM_SET_BENEFIT_62"],
    rules: function(model) {
      model.statadd("Time Wizard's Tools (2)", function() { return model.stat("ID_FMP_ITEM_SET_30 Set Count"); });
      model.statadd("Time Wizard's Tools (2)", function() { return model.stat("ID_FMP_ITEM_SET_30 Set Count"); });
      model.statadd("Initiative Misc", function() { return model.stat("Time Wizard's Tools (2)"); }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Time Wizard's Tools (4)"] = new RulesElement({
    name: "Time Wizard's Tools (4)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_63",
    source: "Adventurer's Vault 2",
    categories: ["Time Wizard's Tools (4)", "ID_FMP_ITEM_SET_BENEFIT_63"]
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Tinkerer's Inventions (2)"] = new RulesElement({
    name: "Tinkerer's Inventions (2)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_64",
    source: "Adventurer's Vault 2",
    categories: ["Tinkerer's Inventions (2)", "ID_FMP_ITEM_SET_BENEFIT_64"]
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Tinkerer's Inventions (4)"] = new RulesElement({
    name: "Tinkerer's Inventions (4)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_65",
    source: "Adventurer's Vault 2",
    categories: ["Tinkerer's Inventions (4)", "ID_FMP_ITEM_SET_BENEFIT_65"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_9275"]);
    }
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Tools of Zane's Vengeance (2)"] = new RulesElement({
    name: "Tools of Zane's Vengeance (2)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_24",
    source: "Adventurer's Vault 2",
    categories: ["Tools of Zane's Vengeance (2)", "ID_FMP_ITEM_SET_BENEFIT_24"],
    rules: function(model) {
      model.statadd("Intimidate Misc", function() { return model.stat("ID_FMP_ITEM_SET_12 Set Count"); }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Tools of Zane's Vengeance (4)"] = new RulesElement({
    name: "Tools of Zane's Vengeance (4)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_25",
    source: "Adventurer's Vault 2",
    categories: ["Tools of Zane's Vengeance (4)", "ID_FMP_ITEM_SET_BENEFIT_25"]
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Zy Tormtor's Trinkets (2)"] = new RulesElement({
    name: "Zy Tormtor's Trinkets (2)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_26",
    source: "Adventurer's Vault 2",
    categories: ["Zy Tormtor's Trinkets (2)", "ID_FMP_ITEM_SET_BENEFIT_26"],
    rules: function(model) {
      model.statadd("Thievery Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Item_Set_Benefit["Zy Tormtor's Trinkets (4)"] = new RulesElement({
    name: "Zy Tormtor's Trinkets (4)",
    type: "Item Set Benefit",
    id: "ID_FMP_ITEM_SET_BENEFIT_27",
    source: "Adventurer's Vault 2",
    categories: ["Zy Tormtor's Trinkets (4)", "ID_FMP_ITEM_SET_BENEFIT_27"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_9273"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
