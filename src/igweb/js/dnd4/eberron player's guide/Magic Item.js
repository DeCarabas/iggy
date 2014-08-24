(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Acidic Fire (level 10)"] = new RulesElement({
    name: "Acidic Fire (level 10)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5047",
    source: "Eberron Player's Guide",
    categories: ["Acidic Fire (level 10)", "ID_FMP_MAGIC_ITEM_5047"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Acidic Fire (level 15)"] = new RulesElement({
    name: "Acidic Fire (level 15)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5048",
    source: "Eberron Player's Guide",
    categories: ["Acidic Fire (level 15)", "ID_FMP_MAGIC_ITEM_5048"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Acidic Fire (level 20)"] = new RulesElement({
    name: "Acidic Fire (level 20)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5049",
    source: "Eberron Player's Guide",
    categories: ["Acidic Fire (level 20)", "ID_FMP_MAGIC_ITEM_5049"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Acidic Fire (level 25)"] = new RulesElement({
    name: "Acidic Fire (level 25)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5050",
    source: "Eberron Player's Guide",
    categories: ["Acidic Fire (level 25)", "ID_FMP_MAGIC_ITEM_5050"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Acidic Fire (level 30)"] = new RulesElement({
    name: "Acidic Fire (level 30)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5051",
    source: "Eberron Player's Guide",
    categories: ["Acidic Fire (level 30)", "ID_FMP_MAGIC_ITEM_5051"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Acidic Fire (level 5)"] = new RulesElement({
    name: "Acidic Fire (level 5)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5046",
    source: "Eberron Player's Guide",
    categories: ["Acidic Fire (level 5)", "ID_FMP_MAGIC_ITEM_5046"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Adamantine Plating +1"] = new RulesElement({
    name: "Adamantine Plating +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5347",
    source: "Eberron Player's Guide",
    categories: ["Adamantine Plating +1", "ID_FMP_MAGIC_ITEM_5347"],
    rules: function(model) {
      model.statadd("resist:all", 1, "resist");
      model.statadd("Armor Class", 1, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Adamantine Plating +2"] = new RulesElement({
    name: "Adamantine Plating +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5348",
    source: "Eberron Player's Guide",
    categories: ["Adamantine Plating +2", "ID_FMP_MAGIC_ITEM_5348"],
    rules: function(model) {
      model.statadd("resist:all", 1, "resist");
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Adamantine Plating +3"] = new RulesElement({
    name: "Adamantine Plating +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5349",
    source: "Eberron Player's Guide",
    categories: ["Adamantine Plating +3", "ID_FMP_MAGIC_ITEM_5349"],
    rules: function(model) {
      model.statadd("resist:all", 2, "resist");
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Adamantine Plating +4"] = new RulesElement({
    name: "Adamantine Plating +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5350",
    source: "Eberron Player's Guide",
    categories: ["Adamantine Plating +4", "ID_FMP_MAGIC_ITEM_5350"],
    rules: function(model) {
      model.statadd("resist:all", 2, "resist");
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Adamantine Plating +5"] = new RulesElement({
    name: "Adamantine Plating +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5351",
    source: "Eberron Player's Guide",
    categories: ["Adamantine Plating +5", "ID_FMP_MAGIC_ITEM_5351"],
    rules: function(model) {
      model.statadd("resist:all", 5, "resist");
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Adamantine Plating +6"] = new RulesElement({
    name: "Adamantine Plating +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5352",
    source: "Eberron Player's Guide",
    categories: ["Adamantine Plating +6", "ID_FMP_MAGIC_ITEM_5352"],
    rules: function(model) {
      model.statadd("resist:all", 5, "resist");
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Alchemist's Spark (level 13)"] = new RulesElement({
    name: "Alchemist's Spark (level 13)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5054",
    source: "Eberron Player's Guide",
    categories: ["Alchemist's Spark (level 13)", "ID_FMP_MAGIC_ITEM_5054"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Alchemist's Spark (level 18)"] = new RulesElement({
    name: "Alchemist's Spark (level 18)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5055",
    source: "Eberron Player's Guide",
    categories: ["Alchemist's Spark (level 18)", "ID_FMP_MAGIC_ITEM_5055"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Alchemist's Spark (level 23)"] = new RulesElement({
    name: "Alchemist's Spark (level 23)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5056",
    source: "Eberron Player's Guide",
    categories: ["Alchemist's Spark (level 23)", "ID_FMP_MAGIC_ITEM_5056"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Alchemist's Spark (level 28)"] = new RulesElement({
    name: "Alchemist's Spark (level 28)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5057",
    source: "Eberron Player's Guide",
    categories: ["Alchemist's Spark (level 28)", "ID_FMP_MAGIC_ITEM_5057"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Alchemist's Spark (level 3)"] = new RulesElement({
    name: "Alchemist's Spark (level 3)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5052",
    source: "Eberron Player's Guide",
    categories: ["Alchemist's Spark (level 3)", "ID_FMP_MAGIC_ITEM_5052"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Alchemist's Spark (level 8)"] = new RulesElement({
    name: "Alchemist's Spark (level 8)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5053",
    source: "Eberron Player's Guide",
    categories: ["Alchemist's Spark (level 8)", "ID_FMP_MAGIC_ITEM_5053"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Alchemist's Spark Ammunition (level 14)"] = new RulesElement({
    name: "Alchemist's Spark Ammunition (level 14)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5060",
    source: "Eberron Player's Guide",
    categories: ["Alchemist's Spark Ammunition (level 14)", "ID_FMP_MAGIC_ITEM_5060"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Alchemist's Spark Ammunition (level 19)"] = new RulesElement({
    name: "Alchemist's Spark Ammunition (level 19)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5061",
    source: "Eberron Player's Guide",
    categories: ["Alchemist's Spark Ammunition (level 19)", "ID_FMP_MAGIC_ITEM_5061"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Alchemist's Spark Ammunition (level 24)"] = new RulesElement({
    name: "Alchemist's Spark Ammunition (level 24)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5062",
    source: "Eberron Player's Guide",
    categories: ["Alchemist's Spark Ammunition (level 24)", "ID_FMP_MAGIC_ITEM_5062"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Alchemist's Spark Ammunition (level 29)"] = new RulesElement({
    name: "Alchemist's Spark Ammunition (level 29)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5063",
    source: "Eberron Player's Guide",
    categories: ["Alchemist's Spark Ammunition (level 29)", "ID_FMP_MAGIC_ITEM_5063"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Alchemist's Spark Ammunition (level 4)"] = new RulesElement({
    name: "Alchemist's Spark Ammunition (level 4)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5058",
    source: "Eberron Player's Guide",
    categories: ["Alchemist's Spark Ammunition (level 4)", "ID_FMP_MAGIC_ITEM_5058"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Alchemist's Spark Ammunition (level 9)"] = new RulesElement({
    name: "Alchemist's Spark Ammunition (level 9)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5059",
    source: "Eberron Player's Guide",
    categories: ["Alchemist's Spark Ammunition (level 9)", "ID_FMP_MAGIC_ITEM_5059"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Armblade +1"] = new RulesElement({
    name: "Armblade +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5353",
    source: "Eberron Player's Guide",
    categories: ["Armblade +1", "ID_FMP_MAGIC_ITEM_5353"],
    rules: function(model) {
      model.statadd("attack rolls(Armblade +1)", function() { /* to opportunity attacks */ return 2; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Armblade +2"] = new RulesElement({
    name: "Armblade +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5354",
    source: "Eberron Player's Guide",
    categories: ["Armblade +2", "ID_FMP_MAGIC_ITEM_5354"],
    rules: function(model) {
      model.statadd("attack rolls(Armblade +2)", function() { /* to opportunity attacks */ return 2; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Armblade +3"] = new RulesElement({
    name: "Armblade +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5355",
    source: "Eberron Player's Guide",
    categories: ["Armblade +3", "ID_FMP_MAGIC_ITEM_5355"],
    rules: function(model) {
      model.statadd("attack rolls(Armblade +3)", function() { /* to opportunity attacks */ return 2; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Armblade +4"] = new RulesElement({
    name: "Armblade +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5356",
    source: "Eberron Player's Guide",
    categories: ["Armblade +4", "ID_FMP_MAGIC_ITEM_5356"],
    rules: function(model) {
      model.statadd("attack rolls(Armblade +4)", function() { /* to opportunity attacks */ return 2; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Armblade +5"] = new RulesElement({
    name: "Armblade +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5357",
    source: "Eberron Player's Guide",
    categories: ["Armblade +5", "ID_FMP_MAGIC_ITEM_5357"],
    rules: function(model) {
      model.statadd("attack rolls(Armblade +5)", function() { /* to opportunity attacks */ return 2; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Armblade +6"] = new RulesElement({
    name: "Armblade +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5358",
    source: "Eberron Player's Guide",
    categories: ["Armblade +6", "ID_FMP_MAGIC_ITEM_5358"],
    rules: function(model) {
      model.statadd("attack rolls(Armblade +6)", function() { /* to opportunity attacks */ return 2; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Armbow +1"] = new RulesElement({
    name: "Armbow +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1204",
    source: "Eberron Player's Guide",
    categories: ["Armbow +1", "ID_FMP_MAGIC_ITEM_1204"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Armbow +2"] = new RulesElement({
    name: "Armbow +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1205",
    source: "Eberron Player's Guide",
    categories: ["Armbow +2", "ID_FMP_MAGIC_ITEM_1205"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Armbow +3"] = new RulesElement({
    name: "Armbow +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1206",
    source: "Eberron Player's Guide",
    categories: ["Armbow +3", "ID_FMP_MAGIC_ITEM_1206"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Armbow +4"] = new RulesElement({
    name: "Armbow +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1207",
    source: "Eberron Player's Guide",
    categories: ["Armbow +4", "ID_FMP_MAGIC_ITEM_1207"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Armbow +5"] = new RulesElement({
    name: "Armbow +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1208",
    source: "Eberron Player's Guide",
    categories: ["Armbow +5", "ID_FMP_MAGIC_ITEM_1208"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Armbow +6"] = new RulesElement({
    name: "Armbow +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1209",
    source: "Eberron Player's Guide",
    categories: ["Armbow +6", "ID_FMP_MAGIC_ITEM_1209"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Avenging Ash Totem +1"] = new RulesElement({
    name: "Avenging Ash Totem +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5267",
    source: "Eberron Player's Guide",
    categories: ["Avenging Ash Totem +1", "ID_FMP_MAGIC_ITEM_5267"],
    rules: function(model) {
      model.statadd("primal,implement:damage(Avenging Ash Totem +1)", function() { /* against constructs */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Avenging Ash Totem +2"] = new RulesElement({
    name: "Avenging Ash Totem +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5268",
    source: "Eberron Player's Guide",
    categories: ["Avenging Ash Totem +2", "ID_FMP_MAGIC_ITEM_5268"],
    rules: function(model) {
      model.statadd("primal,implement:damage(Avenging Ash Totem +2)", function() { /* against constructs */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Avenging Ash Totem +3"] = new RulesElement({
    name: "Avenging Ash Totem +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5269",
    source: "Eberron Player's Guide",
    categories: ["Avenging Ash Totem +3", "ID_FMP_MAGIC_ITEM_5269"],
    rules: function(model) {
      model.statadd("primal,implement:damage(Avenging Ash Totem +3)", function() { /* against constructs */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Avenging Ash Totem +4"] = new RulesElement({
    name: "Avenging Ash Totem +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5270",
    source: "Eberron Player's Guide",
    categories: ["Avenging Ash Totem +4", "ID_FMP_MAGIC_ITEM_5270"],
    rules: function(model) {
      model.statadd("primal,implement:damage(Avenging Ash Totem +4)", function() { /* against constructs */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Avenging Ash Totem +5"] = new RulesElement({
    name: "Avenging Ash Totem +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5271",
    source: "Eberron Player's Guide",
    categories: ["Avenging Ash Totem +5", "ID_FMP_MAGIC_ITEM_5271"],
    rules: function(model) {
      model.statadd("primal,implement:damage(Avenging Ash Totem +5)", function() { /* against constructs */ return 5; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Avenging Ash Totem +6"] = new RulesElement({
    name: "Avenging Ash Totem +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5272",
    source: "Eberron Player's Guide",
    categories: ["Avenging Ash Totem +6", "ID_FMP_MAGIC_ITEM_5272"],
    rules: function(model) {
      model.statadd("primal,implement:damage(Avenging Ash Totem +6)", function() { /* against constructs */ return 5; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Battle Staff +1"] = new RulesElement({
    name: "Battle Staff +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5231",
    source: "Eberron Player's Guide",
    categories: ["Battle Staff +1", "ID_FMP_MAGIC_ITEM_5231"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Battle Staff +2"] = new RulesElement({
    name: "Battle Staff +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5232",
    source: "Eberron Player's Guide",
    categories: ["Battle Staff +2", "ID_FMP_MAGIC_ITEM_5232"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Battle Staff +3"] = new RulesElement({
    name: "Battle Staff +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5233",
    source: "Eberron Player's Guide",
    categories: ["Battle Staff +3", "ID_FMP_MAGIC_ITEM_5233"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Battle Staff +4"] = new RulesElement({
    name: "Battle Staff +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5234",
    source: "Eberron Player's Guide",
    categories: ["Battle Staff +4", "ID_FMP_MAGIC_ITEM_5234"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Battle Staff +5"] = new RulesElement({
    name: "Battle Staff +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5235",
    source: "Eberron Player's Guide",
    categories: ["Battle Staff +5", "ID_FMP_MAGIC_ITEM_5235"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Battle Staff +6"] = new RulesElement({
    name: "Battle Staff +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5236",
    source: "Eberron Player's Guide",
    categories: ["Battle Staff +6", "ID_FMP_MAGIC_ITEM_5236"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bones of the Traveler +2"] = new RulesElement({
    name: "Bones of the Traveler +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5135",
    source: "Eberron Player's Guide",
    categories: ["Bones of the Traveler +2", "ID_FMP_MAGIC_ITEM_5135"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bones of the Traveler +3"] = new RulesElement({
    name: "Bones of the Traveler +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5136",
    source: "Eberron Player's Guide",
    categories: ["Bones of the Traveler +3", "ID_FMP_MAGIC_ITEM_5136"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bones of the Traveler +4"] = new RulesElement({
    name: "Bones of the Traveler +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5137",
    source: "Eberron Player's Guide",
    categories: ["Bones of the Traveler +4", "ID_FMP_MAGIC_ITEM_5137"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bones of the Traveler +5"] = new RulesElement({
    name: "Bones of the Traveler +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5138",
    source: "Eberron Player's Guide",
    categories: ["Bones of the Traveler +5", "ID_FMP_MAGIC_ITEM_5138"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bones of the Traveler +6"] = new RulesElement({
    name: "Bones of the Traveler +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5139",
    source: "Eberron Player's Guide",
    categories: ["Bones of the Traveler +6", "ID_FMP_MAGIC_ITEM_5139"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bright Jewel of il-Yannah +1"] = new RulesElement({
    name: "Bright Jewel of il-Yannah +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5140",
    source: "Eberron Player's Guide",
    categories: ["Bright Jewel of il-Yannah +1", "ID_FMP_MAGIC_ITEM_5140"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bright Jewel of il-Yannah +2"] = new RulesElement({
    name: "Bright Jewel of il-Yannah +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5141",
    source: "Eberron Player's Guide",
    categories: ["Bright Jewel of il-Yannah +2", "ID_FMP_MAGIC_ITEM_5141"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bright Jewel of il-Yannah +3"] = new RulesElement({
    name: "Bright Jewel of il-Yannah +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5142",
    source: "Eberron Player's Guide",
    categories: ["Bright Jewel of il-Yannah +3", "ID_FMP_MAGIC_ITEM_5142"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bright Jewel of il-Yannah +4"] = new RulesElement({
    name: "Bright Jewel of il-Yannah +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5143",
    source: "Eberron Player's Guide",
    categories: ["Bright Jewel of il-Yannah +4", "ID_FMP_MAGIC_ITEM_5143"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bright Jewel of il-Yannah +5"] = new RulesElement({
    name: "Bright Jewel of il-Yannah +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5144",
    source: "Eberron Player's Guide",
    categories: ["Bright Jewel of il-Yannah +5", "ID_FMP_MAGIC_ITEM_5144"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bright Jewel of il-Yannah +6"] = new RulesElement({
    name: "Bright Jewel of il-Yannah +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5145",
    source: "Eberron Player's Guide",
    categories: ["Bright Jewel of il-Yannah +6", "ID_FMP_MAGIC_ITEM_5145"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Clear-Path Mist (level 13)"] = new RulesElement({
    name: "Clear-Path Mist (level 13)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5065",
    source: "Eberron Player's Guide",
    categories: ["Clear-Path Mist (level 13)", "ID_FMP_MAGIC_ITEM_5065"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Clear-Path Mist (level 18)"] = new RulesElement({
    name: "Clear-Path Mist (level 18)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5066",
    source: "Eberron Player's Guide",
    categories: ["Clear-Path Mist (level 18)", "ID_FMP_MAGIC_ITEM_5066"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Clear-Path Mist (level 23)"] = new RulesElement({
    name: "Clear-Path Mist (level 23)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5067",
    source: "Eberron Player's Guide",
    categories: ["Clear-Path Mist (level 23)", "ID_FMP_MAGIC_ITEM_5067"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Clear-Path Mist (level 28)"] = new RulesElement({
    name: "Clear-Path Mist (level 28)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5068",
    source: "Eberron Player's Guide",
    categories: ["Clear-Path Mist (level 28)", "ID_FMP_MAGIC_ITEM_5068"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Clear-Path Mist (level 8)"] = new RulesElement({
    name: "Clear-Path Mist (level 8)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5064",
    source: "Eberron Player's Guide",
    categories: ["Clear-Path Mist (level 8)", "ID_FMP_MAGIC_ITEM_5064"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Clockwork Bomb (level 14)"] = new RulesElement({
    name: "Clockwork Bomb (level 14)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5071",
    source: "Eberron Player's Guide",
    categories: ["Clockwork Bomb (level 14)", "ID_FMP_MAGIC_ITEM_5071"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Clockwork Bomb (level 19)"] = new RulesElement({
    name: "Clockwork Bomb (level 19)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5072",
    source: "Eberron Player's Guide",
    categories: ["Clockwork Bomb (level 19)", "ID_FMP_MAGIC_ITEM_5072"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Clockwork Bomb (level 24)"] = new RulesElement({
    name: "Clockwork Bomb (level 24)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5073",
    source: "Eberron Player's Guide",
    categories: ["Clockwork Bomb (level 24)", "ID_FMP_MAGIC_ITEM_5073"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Clockwork Bomb (level 29)"] = new RulesElement({
    name: "Clockwork Bomb (level 29)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5074",
    source: "Eberron Player's Guide",
    categories: ["Clockwork Bomb (level 29)", "ID_FMP_MAGIC_ITEM_5074"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Clockwork Bomb (level 4)"] = new RulesElement({
    name: "Clockwork Bomb (level 4)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5069",
    source: "Eberron Player's Guide",
    categories: ["Clockwork Bomb (level 4)", "ID_FMP_MAGIC_ITEM_5069"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Clockwork Bomb (level 9)"] = new RulesElement({
    name: "Clockwork Bomb (level 9)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5070",
    source: "Eberron Player's Guide",
    categories: ["Clockwork Bomb (level 9)", "ID_FMP_MAGIC_ITEM_5070"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Command Circlet (heroic tier)"] = new RulesElement({
    name: "Command Circlet (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5359",
    source: "Eberron Player's Guide",
    categories: ["Command Circlet (heroic tier)", "ID_FMP_MAGIC_ITEM_5359"],
    rules: function(model) {
      model.statadd("Telepathy", 20, "Telepathy");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Delver's Light (heroic tier)"] = new RulesElement({
    name: "Delver's Light (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1210",
    source: "Eberron Player's Guide",
    categories: ["Delver's Light (heroic tier)", "ID_FMP_MAGIC_ITEM_1210"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Disk of Energy Resistance +1"] = new RulesElement({
    name: "Disk of Energy Resistance +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5361",
    source: "Eberron Player's Guide",
    categories: ["Disk of Energy Resistance +1", "ID_FMP_MAGIC_ITEM_5361"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 1, "Enhancement");
      model.statadd("Reflex Defense", 1, "Enhancement");
      model.statadd("Will Defense", 1, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Disk of Energy Resistance +2"] = new RulesElement({
    name: "Disk of Energy Resistance +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5362",
    source: "Eberron Player's Guide",
    categories: ["Disk of Energy Resistance +2", "ID_FMP_MAGIC_ITEM_5362"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 2, "Enhancement");
      model.statadd("Reflex Defense", 2, "Enhancement");
      model.statadd("Will Defense", 2, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Disk of Energy Resistance +3"] = new RulesElement({
    name: "Disk of Energy Resistance +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5363",
    source: "Eberron Player's Guide",
    categories: ["Disk of Energy Resistance +3", "ID_FMP_MAGIC_ITEM_5363"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 3, "Enhancement");
      model.statadd("Reflex Defense", 3, "Enhancement");
      model.statadd("Will Defense", 3, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Disk of Energy Resistance +4"] = new RulesElement({
    name: "Disk of Energy Resistance +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5364",
    source: "Eberron Player's Guide",
    categories: ["Disk of Energy Resistance +4", "ID_FMP_MAGIC_ITEM_5364"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 4, "Enhancement");
      model.statadd("Reflex Defense", 4, "Enhancement");
      model.statadd("Will Defense", 4, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Disk of Energy Resistance +5"] = new RulesElement({
    name: "Disk of Energy Resistance +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5365",
    source: "Eberron Player's Guide",
    categories: ["Disk of Energy Resistance +5", "ID_FMP_MAGIC_ITEM_5365"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 5, "Enhancement");
      model.statadd("Reflex Defense", 5, "Enhancement");
      model.statadd("Will Defense", 5, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Disk of Energy Resistance +6"] = new RulesElement({
    name: "Disk of Energy Resistance +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5366",
    source: "Eberron Player's Guide",
    categories: ["Disk of Energy Resistance +6", "ID_FMP_MAGIC_ITEM_5366"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 6, "Enhancement");
      model.statadd("Reflex Defense", 6, "Enhancement");
      model.statadd("Will Defense", 6, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Domino of Olladra +2"] = new RulesElement({
    name: "Domino of Olladra +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5146",
    source: "Eberron Player's Guide",
    categories: ["Domino of Olladra +2", "ID_FMP_MAGIC_ITEM_5146"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Domino of Olladra +3"] = new RulesElement({
    name: "Domino of Olladra +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5147",
    source: "Eberron Player's Guide",
    categories: ["Domino of Olladra +3", "ID_FMP_MAGIC_ITEM_5147"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Domino of Olladra +4"] = new RulesElement({
    name: "Domino of Olladra +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5148",
    source: "Eberron Player's Guide",
    categories: ["Domino of Olladra +4", "ID_FMP_MAGIC_ITEM_5148"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Domino of Olladra +5"] = new RulesElement({
    name: "Domino of Olladra +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5149",
    source: "Eberron Player's Guide",
    categories: ["Domino of Olladra +5", "ID_FMP_MAGIC_ITEM_5149"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Domino of Olladra +6"] = new RulesElement({
    name: "Domino of Olladra +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5150",
    source: "Eberron Player's Guide",
    categories: ["Domino of Olladra +6", "ID_FMP_MAGIC_ITEM_5150"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Eberron Shard of Animosity (epic tier)"] = new RulesElement({
    name: "Eberron Shard of Animosity (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5298",
    source: "Eberron Player's Guide",
    categories: ["Eberron Shard of Animosity (epic tier)", "ID_FMP_MAGIC_ITEM_5298"],
    rules: function(model) {
      model.statadd("damage rolls(Eberron Shard of Animosity (epic tier))", function() { /* against elemental or immortal creatures */ return 5; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Eberron Shard of Animosity (heroic tier)"] = new RulesElement({
    name: "Eberron Shard of Animosity (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5294",
    source: "Eberron Player's Guide",
    categories: ["Eberron Shard of Animosity (heroic tier)", "ID_FMP_MAGIC_ITEM_5294"],
    rules: function(model) {
      model.statadd("damage rolls(Eberron Shard of Animosity (heroic tier))", function() { /* against elemental or immortal creatures */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Eberron Shard of Animosity (paragon tier)"] = new RulesElement({
    name: "Eberron Shard of Animosity (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5296",
    source: "Eberron Player's Guide",
    categories: ["Eberron Shard of Animosity (paragon tier)", "ID_FMP_MAGIC_ITEM_5296"],
    rules: function(model) {
      model.statadd("damage rolls(Eberron Shard of Animosity (paragon tier))", function() { /* against elemental or immortal creatures */ return 3; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Eberron Shard of Bleeding Wounds (heroic tier)"] = new RulesElement({
    name: "Eberron Shard of Bleeding Wounds (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5300",
    source: "Eberron Player's Guide",
    categories: ["Eberron Shard of Bleeding Wounds (heroic tier)", "ID_FMP_MAGIC_ITEM_5300"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Eberron Shard of Lightning (epic tier)"] = new RulesElement({
    name: "Eberron Shard of Lightning (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5305",
    source: "Eberron Player's Guide",
    categories: ["Eberron Shard of Lightning (epic tier)", "ID_FMP_MAGIC_ITEM_5305"],
    rules: function(model) {
      model.statadd("lightning:damage(Eberron Shard of Lightning (epic tier))", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Eberron Shard of Lightning (heroic tier)"] = new RulesElement({
    name: "Eberron Shard of Lightning (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5301",
    source: "Eberron Player's Guide",
    categories: ["Eberron Shard of Lightning (heroic tier)", "ID_FMP_MAGIC_ITEM_5301"],
    rules: function(model) {
      model.statadd("lightning:damage(Eberron Shard of Lightning (heroic tier))", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Eberron Shard of Lightning (paragon tier)"] = new RulesElement({
    name: "Eberron Shard of Lightning (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5303",
    source: "Eberron Player's Guide",
    categories: ["Eberron Shard of Lightning (paragon tier)", "ID_FMP_MAGIC_ITEM_5303"],
    rules: function(model) {
      model.statadd("lightning:damage(Eberron Shard of Lightning (paragon tier))", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Eberron Shard of Ruin (epic tier)"] = new RulesElement({
    name: "Eberron Shard of Ruin (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5311",
    source: "Eberron Player's Guide",
    categories: ["Eberron Shard of Ruin (epic tier)", "ID_FMP_MAGIC_ITEM_5311"],
    rules: function(model) {
      model.statadd("damage rolls(Eberron Shard of Ruin (epic tier))", function() { /* against an object */ return 5; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Eberron Shard of Ruin (heroic tier)"] = new RulesElement({
    name: "Eberron Shard of Ruin (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5307",
    source: "Eberron Player's Guide",
    categories: ["Eberron Shard of Ruin (heroic tier)", "ID_FMP_MAGIC_ITEM_5307"],
    rules: function(model) {
      model.statadd("damage rolls(Eberron Shard of Ruin (heroic tier))", function() { /* against an object */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Eberron Shard of Ruin (paragon tier)"] = new RulesElement({
    name: "Eberron Shard of Ruin (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5309",
    source: "Eberron Player's Guide",
    categories: ["Eberron Shard of Ruin (paragon tier)", "ID_FMP_MAGIC_ITEM_5309"],
    rules: function(model) {
      model.statadd("damage rolls(Eberron Shard of Ruin (paragon tier))", function() { /* against an object */ return 3; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Emblem of Dol Dorn +1"] = new RulesElement({
    name: "Emblem of Dol Dorn +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5151",
    source: "Eberron Player's Guide",
    categories: ["Emblem of Dol Dorn +1", "ID_FMP_MAGIC_ITEM_5151"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Emblem of Dol Dorn +2"] = new RulesElement({
    name: "Emblem of Dol Dorn +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5152",
    source: "Eberron Player's Guide",
    categories: ["Emblem of Dol Dorn +2", "ID_FMP_MAGIC_ITEM_5152"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Emblem of Dol Dorn +3"] = new RulesElement({
    name: "Emblem of Dol Dorn +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5153",
    source: "Eberron Player's Guide",
    categories: ["Emblem of Dol Dorn +3", "ID_FMP_MAGIC_ITEM_5153"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Emblem of Dol Dorn +4"] = new RulesElement({
    name: "Emblem of Dol Dorn +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5154",
    source: "Eberron Player's Guide",
    categories: ["Emblem of Dol Dorn +4", "ID_FMP_MAGIC_ITEM_5154"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Emblem of Dol Dorn +5"] = new RulesElement({
    name: "Emblem of Dol Dorn +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5155",
    source: "Eberron Player's Guide",
    categories: ["Emblem of Dol Dorn +5", "ID_FMP_MAGIC_ITEM_5155"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Emblem of Dol Dorn +6"] = new RulesElement({
    name: "Emblem of Dol Dorn +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5156",
    source: "Eberron Player's Guide",
    categories: ["Emblem of Dol Dorn +6", "ID_FMP_MAGIC_ITEM_5156"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Essence of the Scout +1"] = new RulesElement({
    name: "Essence of the Scout +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5367",
    source: "Eberron Player's Guide",
    categories: ["Essence of the Scout +1", "ID_FMP_MAGIC_ITEM_5367"],
    rules: function(model) {
      model.statadd("Stealth Misc", 2, "item");
      model.statadd("Fortitude Defense", 1, "Enhancement");
      model.statadd("Reflex Defense", 1, "Enhancement");
      model.statadd("Will Defense", 1, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Essence of the Scout +2"] = new RulesElement({
    name: "Essence of the Scout +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5368",
    source: "Eberron Player's Guide",
    categories: ["Essence of the Scout +2", "ID_FMP_MAGIC_ITEM_5368"],
    rules: function(model) {
      model.statadd("Stealth Misc", 2, "item");
      model.statadd("Fortitude Defense", 2, "Enhancement");
      model.statadd("Reflex Defense", 2, "Enhancement");
      model.statadd("Will Defense", 2, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Essence of the Scout +3"] = new RulesElement({
    name: "Essence of the Scout +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5369",
    source: "Eberron Player's Guide",
    categories: ["Essence of the Scout +3", "ID_FMP_MAGIC_ITEM_5369"],
    rules: function(model) {
      model.statadd("Stealth Misc", 2, "item");
      model.statadd("Fortitude Defense", 3, "Enhancement");
      model.statadd("Reflex Defense", 3, "Enhancement");
      model.statadd("Will Defense", 3, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Essence of the Scout +4"] = new RulesElement({
    name: "Essence of the Scout +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5370",
    source: "Eberron Player's Guide",
    categories: ["Essence of the Scout +4", "ID_FMP_MAGIC_ITEM_5370"],
    rules: function(model) {
      model.statadd("Stealth Misc", 2, "item");
      model.statadd("Fortitude Defense", 4, "Enhancement");
      model.statadd("Reflex Defense", 4, "Enhancement");
      model.statadd("Will Defense", 4, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Essence of the Scout +5"] = new RulesElement({
    name: "Essence of the Scout +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5371",
    source: "Eberron Player's Guide",
    categories: ["Essence of the Scout +5", "ID_FMP_MAGIC_ITEM_5371"],
    rules: function(model) {
      model.statadd("Stealth Misc", 2, "item");
      model.statadd("Fortitude Defense", 5, "Enhancement");
      model.statadd("Reflex Defense", 5, "Enhancement");
      model.statadd("Will Defense", 5, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Essence of the Scout +6"] = new RulesElement({
    name: "Essence of the Scout +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5372",
    source: "Eberron Player's Guide",
    categories: ["Essence of the Scout +6", "ID_FMP_MAGIC_ITEM_5372"],
    rules: function(model) {
      model.statadd("Stealth Misc", 2, "item");
      model.statadd("Fortitude Defense", 6, "Enhancement");
      model.statadd("Reflex Defense", 6, "Enhancement");
      model.statadd("Will Defense", 6, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Fickle Twilight Totem +2"] = new RulesElement({
    name: "Fickle Twilight Totem +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5273",
    source: "Eberron Player's Guide",
    categories: ["Fickle Twilight Totem +2", "ID_FMP_MAGIC_ITEM_5273"],
    rules: function(model) {
      model.statadd("Bluff Misc", 1, "item");
      model.statadd("Stealth Misc", 1, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Fickle Twilight Totem +3"] = new RulesElement({
    name: "Fickle Twilight Totem +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5274",
    source: "Eberron Player's Guide",
    categories: ["Fickle Twilight Totem +3", "ID_FMP_MAGIC_ITEM_5274"],
    rules: function(model) {
      model.statadd("Bluff Misc", 1, "item");
      model.statadd("Stealth Misc", 1, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Fickle Twilight Totem +4"] = new RulesElement({
    name: "Fickle Twilight Totem +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5275",
    source: "Eberron Player's Guide",
    categories: ["Fickle Twilight Totem +4", "ID_FMP_MAGIC_ITEM_5275"],
    rules: function(model) {
      model.statadd("Bluff Misc", 1, "item");
      model.statadd("Stealth Misc", 1, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Fickle Twilight Totem +5"] = new RulesElement({
    name: "Fickle Twilight Totem +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5276",
    source: "Eberron Player's Guide",
    categories: ["Fickle Twilight Totem +5", "ID_FMP_MAGIC_ITEM_5276"],
    rules: function(model) {
      model.statadd("Bluff Misc", 1, "item");
      model.statadd("Stealth Misc", 1, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Fickle Twilight Totem +6"] = new RulesElement({
    name: "Fickle Twilight Totem +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5277",
    source: "Eberron Player's Guide",
    categories: ["Fickle Twilight Totem +6", "ID_FMP_MAGIC_ITEM_5277"],
    rules: function(model) {
      model.statadd("Bluff Misc", 1, "item");
      model.statadd("Stealth Misc", 1, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Final Messenger (heroic tier)"] = new RulesElement({
    name: "Final Messenger (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1211",
    source: "Eberron Player's Guide",
    categories: ["Final Messenger (heroic tier)", "ID_FMP_MAGIC_ITEM_1211"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Grayflower Perfume (heroic tier)"] = new RulesElement({
    name: "Grayflower Perfume (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5075",
    source: "Eberron Player's Guide",
    categories: ["Grayflower Perfume (heroic tier)", "ID_FMP_MAGIC_ITEM_5075"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Heartflow (level 13)"] = new RulesElement({
    name: "Heartflow (level 13)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5078",
    source: "Eberron Player's Guide",
    categories: ["Heartflow (level 13)", "ID_FMP_MAGIC_ITEM_5078"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Heartflow (level 18)"] = new RulesElement({
    name: "Heartflow (level 18)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5079",
    source: "Eberron Player's Guide",
    categories: ["Heartflow (level 18)", "ID_FMP_MAGIC_ITEM_5079"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Heartflow (level 23)"] = new RulesElement({
    name: "Heartflow (level 23)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5080",
    source: "Eberron Player's Guide",
    categories: ["Heartflow (level 23)", "ID_FMP_MAGIC_ITEM_5080"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Heartflow (level 28)"] = new RulesElement({
    name: "Heartflow (level 28)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5081",
    source: "Eberron Player's Guide",
    categories: ["Heartflow (level 28)", "ID_FMP_MAGIC_ITEM_5081"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Heartflow (level 3)"] = new RulesElement({
    name: "Heartflow (level 3)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5076",
    source: "Eberron Player's Guide",
    categories: ["Heartflow (level 3)", "ID_FMP_MAGIC_ITEM_5076"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Heartflow (level 8)"] = new RulesElement({
    name: "Heartflow (level 8)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5077",
    source: "Eberron Player's Guide",
    categories: ["Heartflow (level 8)", "ID_FMP_MAGIC_ITEM_5077"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Hearth of Boldrei +2"] = new RulesElement({
    name: "Hearth of Boldrei +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5157",
    source: "Eberron Player's Guide",
    categories: ["Hearth of Boldrei +2", "ID_FMP_MAGIC_ITEM_5157"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Hearth of Boldrei +3"] = new RulesElement({
    name: "Hearth of Boldrei +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5158",
    source: "Eberron Player's Guide",
    categories: ["Hearth of Boldrei +3", "ID_FMP_MAGIC_ITEM_5158"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Hearth of Boldrei +4"] = new RulesElement({
    name: "Hearth of Boldrei +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5159",
    source: "Eberron Player's Guide",
    categories: ["Hearth of Boldrei +4", "ID_FMP_MAGIC_ITEM_5159"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Hearth of Boldrei +5"] = new RulesElement({
    name: "Hearth of Boldrei +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5160",
    source: "Eberron Player's Guide",
    categories: ["Hearth of Boldrei +5", "ID_FMP_MAGIC_ITEM_5160"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Hearth of Boldrei +6"] = new RulesElement({
    name: "Hearth of Boldrei +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5161",
    source: "Eberron Player's Guide",
    categories: ["Hearth of Boldrei +6", "ID_FMP_MAGIC_ITEM_5161"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Horns of Balinor +2"] = new RulesElement({
    name: "Horns of Balinor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5162",
    source: "Eberron Player's Guide",
    categories: ["Horns of Balinor +2", "ID_FMP_MAGIC_ITEM_5162"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Horns of Balinor +3"] = new RulesElement({
    name: "Horns of Balinor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5163",
    source: "Eberron Player's Guide",
    categories: ["Horns of Balinor +3", "ID_FMP_MAGIC_ITEM_5163"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Horns of Balinor +4"] = new RulesElement({
    name: "Horns of Balinor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5164",
    source: "Eberron Player's Guide",
    categories: ["Horns of Balinor +4", "ID_FMP_MAGIC_ITEM_5164"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Horns of Balinor +5"] = new RulesElement({
    name: "Horns of Balinor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5165",
    source: "Eberron Player's Guide",
    categories: ["Horns of Balinor +5", "ID_FMP_MAGIC_ITEM_5165"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Horns of Balinor +6"] = new RulesElement({
    name: "Horns of Balinor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5166",
    source: "Eberron Player's Guide",
    categories: ["Horns of Balinor +6", "ID_FMP_MAGIC_ITEM_5166"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Icon of the Silver Flame +1"] = new RulesElement({
    name: "Icon of the Silver Flame +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5167",
    source: "Eberron Player's Guide",
    categories: ["Icon of the Silver Flame +1", "ID_FMP_MAGIC_ITEM_5167"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Icon of the Silver Flame +2"] = new RulesElement({
    name: "Icon of the Silver Flame +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5168",
    source: "Eberron Player's Guide",
    categories: ["Icon of the Silver Flame +2", "ID_FMP_MAGIC_ITEM_5168"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Icon of the Silver Flame +3"] = new RulesElement({
    name: "Icon of the Silver Flame +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5169",
    source: "Eberron Player's Guide",
    categories: ["Icon of the Silver Flame +3", "ID_FMP_MAGIC_ITEM_5169"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Icon of the Silver Flame +4"] = new RulesElement({
    name: "Icon of the Silver Flame +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5170",
    source: "Eberron Player's Guide",
    categories: ["Icon of the Silver Flame +4", "ID_FMP_MAGIC_ITEM_5170"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Icon of the Silver Flame +5"] = new RulesElement({
    name: "Icon of the Silver Flame +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5171",
    source: "Eberron Player's Guide",
    categories: ["Icon of the Silver Flame +5", "ID_FMP_MAGIC_ITEM_5171"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Icon of the Silver Flame +6"] = new RulesElement({
    name: "Icon of the Silver Flame +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5172",
    source: "Eberron Player's Guide",
    categories: ["Icon of the Silver Flame +6", "ID_FMP_MAGIC_ITEM_5172"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Inferno Oil (level 10)"] = new RulesElement({
    name: "Inferno Oil (level 10)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5083",
    source: "Eberron Player's Guide",
    categories: ["Inferno Oil (level 10)", "ID_FMP_MAGIC_ITEM_5083"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Inferno Oil (level 15)"] = new RulesElement({
    name: "Inferno Oil (level 15)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5084",
    source: "Eberron Player's Guide",
    categories: ["Inferno Oil (level 15)", "ID_FMP_MAGIC_ITEM_5084"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Inferno Oil (level 20)"] = new RulesElement({
    name: "Inferno Oil (level 20)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5085",
    source: "Eberron Player's Guide",
    categories: ["Inferno Oil (level 20)", "ID_FMP_MAGIC_ITEM_5085"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Inferno Oil (level 25)"] = new RulesElement({
    name: "Inferno Oil (level 25)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5086",
    source: "Eberron Player's Guide",
    categories: ["Inferno Oil (level 25)", "ID_FMP_MAGIC_ITEM_5086"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Inferno Oil (level 30)"] = new RulesElement({
    name: "Inferno Oil (level 30)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5087",
    source: "Eberron Player's Guide",
    categories: ["Inferno Oil (level 30)", "ID_FMP_MAGIC_ITEM_5087"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Inferno Oil (level 5)"] = new RulesElement({
    name: "Inferno Oil (level 5)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5082",
    source: "Eberron Player's Guide",
    categories: ["Inferno Oil (level 5)", "ID_FMP_MAGIC_ITEM_5082"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Keen Bite Wand +4"] = new RulesElement({
    name: "Keen Bite Wand +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5248",
    source: "Eberron Player's Guide",
    categories: ["Keen Bite Wand +4", "ID_FMP_MAGIC_ITEM_5248"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Keen Bite Wand +5"] = new RulesElement({
    name: "Keen Bite Wand +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5249",
    source: "Eberron Player's Guide",
    categories: ["Keen Bite Wand +5", "ID_FMP_MAGIC_ITEM_5249"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Keen Bite Wand +6"] = new RulesElement({
    name: "Keen Bite Wand +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5250",
    source: "Eberron Player's Guide",
    categories: ["Keen Bite Wand +6", "ID_FMP_MAGIC_ITEM_5250"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Keen Oil (heroic tier)"] = new RulesElement({
    name: "Keen Oil (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5088",
    source: "Eberron Player's Guide",
    categories: ["Keen Oil (heroic tier)", "ID_FMP_MAGIC_ITEM_5088"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Khyber Shard of Death's Embrace (epic tier)"] = new RulesElement({
    name: "Khyber Shard of Death's Embrace (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5317",
    source: "Eberron Player's Guide",
    categories: ["Khyber Shard of Death's Embrace (epic tier)", "ID_FMP_MAGIC_ITEM_5317"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Khyber Shard of Death's Embrace (heroic tier)"] = new RulesElement({
    name: "Khyber Shard of Death's Embrace (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5313",
    source: "Eberron Player's Guide",
    categories: ["Khyber Shard of Death's Embrace (heroic tier)", "ID_FMP_MAGIC_ITEM_5313"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Khyber Shard of Death's Embrace (paragon tier)"] = new RulesElement({
    name: "Khyber Shard of Death's Embrace (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5315",
    source: "Eberron Player's Guide",
    categories: ["Khyber Shard of Death's Embrace (paragon tier)", "ID_FMP_MAGIC_ITEM_5315"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Khyber Shard of Life Drinking (epic tier)"] = new RulesElement({
    name: "Khyber Shard of Life Drinking (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5322",
    source: "Eberron Player's Guide",
    categories: ["Khyber Shard of Life Drinking (epic tier)", "ID_FMP_MAGIC_ITEM_5322"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Khyber Shard of Life Drinking (heroic tier)"] = new RulesElement({
    name: "Khyber Shard of Life Drinking (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5318",
    source: "Eberron Player's Guide",
    categories: ["Khyber Shard of Life Drinking (heroic tier)", "ID_FMP_MAGIC_ITEM_5318"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Khyber Shard of Life Drinking (paragon tier)"] = new RulesElement({
    name: "Khyber Shard of Life Drinking (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5320",
    source: "Eberron Player's Guide",
    categories: ["Khyber Shard of Life Drinking (paragon tier)", "ID_FMP_MAGIC_ITEM_5320"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Khyber Shard of the Fiery Depth (epic tier)"] = new RulesElement({
    name: "Khyber Shard of the Fiery Depth (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5327",
    source: "Eberron Player's Guide",
    categories: ["Khyber Shard of the Fiery Depth (epic tier)", "ID_FMP_MAGIC_ITEM_5327"],
    rules: function(model) {
      model.statadd("fire:damage(Khyber Shard of the Fiery Depth (epic tier))", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Khyber Shard of the Fiery Depth (heroic tier)"] = new RulesElement({
    name: "Khyber Shard of the Fiery Depth (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5323",
    source: "Eberron Player's Guide",
    categories: ["Khyber Shard of the Fiery Depth (heroic tier)", "ID_FMP_MAGIC_ITEM_5323"],
    rules: function(model) {
      model.statadd("fire:damage(Khyber Shard of the Fiery Depth (heroic tier))", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Khyber Shard of the Fiery Depth (paragon tier)"] = new RulesElement({
    name: "Khyber Shard of the Fiery Depth (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5325",
    source: "Eberron Player's Guide",
    categories: ["Khyber Shard of the Fiery Depth (paragon tier)", "ID_FMP_MAGIC_ITEM_5325"],
    rules: function(model) {
      model.statadd("fire:damage(Khyber Shard of the Fiery Depth (paragon tier))", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Leaves of Death +1"] = new RulesElement({
    name: "Leaves of Death +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5173",
    source: "Eberron Player's Guide",
    categories: ["Leaves of Death +1", "ID_FMP_MAGIC_ITEM_5173"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Leaves of Death +2"] = new RulesElement({
    name: "Leaves of Death +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5174",
    source: "Eberron Player's Guide",
    categories: ["Leaves of Death +2", "ID_FMP_MAGIC_ITEM_5174"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Leaves of Death +3"] = new RulesElement({
    name: "Leaves of Death +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5175",
    source: "Eberron Player's Guide",
    categories: ["Leaves of Death +3", "ID_FMP_MAGIC_ITEM_5175"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Leaves of Death +4"] = new RulesElement({
    name: "Leaves of Death +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5176",
    source: "Eberron Player's Guide",
    categories: ["Leaves of Death +4", "ID_FMP_MAGIC_ITEM_5176"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Leaves of Death +5"] = new RulesElement({
    name: "Leaves of Death +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5177",
    source: "Eberron Player's Guide",
    categories: ["Leaves of Death +5", "ID_FMP_MAGIC_ITEM_5177"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Leaves of Death +6"] = new RulesElement({
    name: "Leaves of Death +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5178",
    source: "Eberron Player's Guide",
    categories: ["Leaves of Death +6", "ID_FMP_MAGIC_ITEM_5178"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Lodret Leaf (epic tier)"] = new RulesElement({
    name: "Lodret Leaf (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5093",
    source: "Eberron Player's Guide",
    categories: ["Lodret Leaf (epic tier)", "ID_FMP_MAGIC_ITEM_5093"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Lodret Leaf (heroic tier)"] = new RulesElement({
    name: "Lodret Leaf (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5089",
    source: "Eberron Player's Guide",
    categories: ["Lodret Leaf (heroic tier)", "ID_FMP_MAGIC_ITEM_5089"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Lodret Leaf (paragon tier)"] = new RulesElement({
    name: "Lodret Leaf (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5091",
    source: "Eberron Player's Guide",
    categories: ["Lodret Leaf (paragon tier)", "ID_FMP_MAGIC_ITEM_5091"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Master's Wand of Static Shock +1"] = new RulesElement({
    name: "Master's Wand of Static Shock +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5251",
    source: "Eberron Player's Guide",
    categories: ["Master's Wand of Static Shock +1", "ID_FMP_MAGIC_ITEM_5251"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Master's Wand of Static Shock +2"] = new RulesElement({
    name: "Master's Wand of Static Shock +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5252",
    source: "Eberron Player's Guide",
    categories: ["Master's Wand of Static Shock +2", "ID_FMP_MAGIC_ITEM_5252"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Master's Wand of Static Shock +3"] = new RulesElement({
    name: "Master's Wand of Static Shock +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5253",
    source: "Eberron Player's Guide",
    categories: ["Master's Wand of Static Shock +3", "ID_FMP_MAGIC_ITEM_5253"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Master's Wand of Static Shock +4"] = new RulesElement({
    name: "Master's Wand of Static Shock +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5254",
    source: "Eberron Player's Guide",
    categories: ["Master's Wand of Static Shock +4", "ID_FMP_MAGIC_ITEM_5254"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Master's Wand of Static Shock +5"] = new RulesElement({
    name: "Master's Wand of Static Shock +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5255",
    source: "Eberron Player's Guide",
    categories: ["Master's Wand of Static Shock +5", "ID_FMP_MAGIC_ITEM_5255"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Master's Wand of Static Shock +6"] = new RulesElement({
    name: "Master's Wand of Static Shock +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5256",
    source: "Eberron Player's Guide",
    categories: ["Master's Wand of Static Shock +6", "ID_FMP_MAGIC_ITEM_5256"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Master's Wand of Thundering Armor +1"] = new RulesElement({
    name: "Master's Wand of Thundering Armor +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5257",
    source: "Eberron Player's Guide",
    categories: ["Master's Wand of Thundering Armor +1", "ID_FMP_MAGIC_ITEM_5257"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Master's Wand of Thundering Armor +2"] = new RulesElement({
    name: "Master's Wand of Thundering Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5258",
    source: "Eberron Player's Guide",
    categories: ["Master's Wand of Thundering Armor +2", "ID_FMP_MAGIC_ITEM_5258"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Master's Wand of Thundering Armor +3"] = new RulesElement({
    name: "Master's Wand of Thundering Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5259",
    source: "Eberron Player's Guide",
    categories: ["Master's Wand of Thundering Armor +3", "ID_FMP_MAGIC_ITEM_5259"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Master's Wand of Thundering Armor +4"] = new RulesElement({
    name: "Master's Wand of Thundering Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5260",
    source: "Eberron Player's Guide",
    categories: ["Master's Wand of Thundering Armor +4", "ID_FMP_MAGIC_ITEM_5260"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Master's Wand of Thundering Armor +5"] = new RulesElement({
    name: "Master's Wand of Thundering Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5261",
    source: "Eberron Player's Guide",
    categories: ["Master's Wand of Thundering Armor +5", "ID_FMP_MAGIC_ITEM_5261"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Master's Wand of Thundering Armor +6"] = new RulesElement({
    name: "Master's Wand of Thundering Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5262",
    source: "Eberron Player's Guide",
    categories: ["Master's Wand of Thundering Armor +6", "ID_FMP_MAGIC_ITEM_5262"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Medallion of Dol Arrah +2"] = new RulesElement({
    name: "Medallion of Dol Arrah +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5179",
    source: "Eberron Player's Guide",
    categories: ["Medallion of Dol Arrah +2", "ID_FMP_MAGIC_ITEM_5179"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Medallion of Dol Arrah +3"] = new RulesElement({
    name: "Medallion of Dol Arrah +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5180",
    source: "Eberron Player's Guide",
    categories: ["Medallion of Dol Arrah +3", "ID_FMP_MAGIC_ITEM_5180"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Medallion of Dol Arrah +4"] = new RulesElement({
    name: "Medallion of Dol Arrah +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5181",
    source: "Eberron Player's Guide",
    categories: ["Medallion of Dol Arrah +4", "ID_FMP_MAGIC_ITEM_5181"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Medallion of Dol Arrah +5"] = new RulesElement({
    name: "Medallion of Dol Arrah +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5182",
    source: "Eberron Player's Guide",
    categories: ["Medallion of Dol Arrah +5", "ID_FMP_MAGIC_ITEM_5182"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Medallion of Dol Arrah +6"] = new RulesElement({
    name: "Medallion of Dol Arrah +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5183",
    source: "Eberron Player's Guide",
    categories: ["Medallion of Dol Arrah +6", "ID_FMP_MAGIC_ITEM_5183"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mithral Plating +1"] = new RulesElement({
    name: "Mithral Plating +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5373",
    source: "Eberron Player's Guide",
    categories: ["Mithral Plating +1", "ID_FMP_MAGIC_ITEM_5373"],
    rules: function(model) {
      model.statadd("Armor Penalty", 0, "hide");
      model.statadd("Armor Penalty", 0, "chain");
      model.statadd("Armor Penalty", 0, "Scale");
      model.statadd("Armor Penalty", 0, "plate");
      model.statadd("Speed", 0, "Armor");
      model.statadd("Armor Class", 1, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mithral Plating +2"] = new RulesElement({
    name: "Mithral Plating +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5374",
    source: "Eberron Player's Guide",
    categories: ["Mithral Plating +2", "ID_FMP_MAGIC_ITEM_5374"],
    rules: function(model) {
      model.statadd("Armor Penalty", 0, "hide");
      model.statadd("Armor Penalty", 0, "chain");
      model.statadd("Armor Penalty", 0, "Scale");
      model.statadd("Armor Penalty", 0, "plate");
      model.statadd("Speed", 0, "Armor");
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mithral Plating +3"] = new RulesElement({
    name: "Mithral Plating +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5375",
    source: "Eberron Player's Guide",
    categories: ["Mithral Plating +3", "ID_FMP_MAGIC_ITEM_5375"],
    rules: function(model) {
      model.statadd("Armor Penalty", 0, "hide");
      model.statadd("Armor Penalty", 0, "chain");
      model.statadd("Armor Penalty", 0, "Scale");
      model.statadd("Armor Penalty", 0, "plate");
      model.statadd("Speed", 0, "Armor");
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mithral Plating +4"] = new RulesElement({
    name: "Mithral Plating +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5376",
    source: "Eberron Player's Guide",
    categories: ["Mithral Plating +4", "ID_FMP_MAGIC_ITEM_5376"],
    rules: function(model) {
      model.statadd("Armor Penalty", 0, "hide");
      model.statadd("Armor Penalty", 0, "chain");
      model.statadd("Armor Penalty", 0, "Scale");
      model.statadd("Armor Penalty", 0, "plate");
      model.statadd("Speed", 0, "Armor");
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mithral Plating +5"] = new RulesElement({
    name: "Mithral Plating +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5377",
    source: "Eberron Player's Guide",
    categories: ["Mithral Plating +5", "ID_FMP_MAGIC_ITEM_5377"],
    rules: function(model) {
      model.statadd("Armor Penalty", 0, "hide");
      model.statadd("Armor Penalty", 0, "chain");
      model.statadd("Armor Penalty", 0, "Scale");
      model.statadd("Armor Penalty", 0, "plate");
      model.statadd("Speed", 0, "Armor");
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mithral Plating +6"] = new RulesElement({
    name: "Mithral Plating +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5378",
    source: "Eberron Player's Guide",
    categories: ["Mithral Plating +6", "ID_FMP_MAGIC_ITEM_5378"],
    rules: function(model) {
      model.statadd("Armor Penalty", 0, "hide");
      model.statadd("Armor Penalty", 0, "chain");
      model.statadd("Armor Penalty", 0, "Scale");
      model.statadd("Armor Penalty", 0, "plate");
      model.statadd("Speed", 0, "Armor");
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Nonagon of Kol Korran +1"] = new RulesElement({
    name: "Nonagon of Kol Korran +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5184",
    source: "Eberron Player's Guide",
    categories: ["Nonagon of Kol Korran +1", "ID_FMP_MAGIC_ITEM_5184"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Nonagon of Kol Korran +2"] = new RulesElement({
    name: "Nonagon of Kol Korran +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5185",
    source: "Eberron Player's Guide",
    categories: ["Nonagon of Kol Korran +2", "ID_FMP_MAGIC_ITEM_5185"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Nonagon of Kol Korran +3"] = new RulesElement({
    name: "Nonagon of Kol Korran +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5186",
    source: "Eberron Player's Guide",
    categories: ["Nonagon of Kol Korran +3", "ID_FMP_MAGIC_ITEM_5186"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Nonagon of Kol Korran +4"] = new RulesElement({
    name: "Nonagon of Kol Korran +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5187",
    source: "Eberron Player's Guide",
    categories: ["Nonagon of Kol Korran +4", "ID_FMP_MAGIC_ITEM_5187"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Nonagon of Kol Korran +5"] = new RulesElement({
    name: "Nonagon of Kol Korran +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5188",
    source: "Eberron Player's Guide",
    categories: ["Nonagon of Kol Korran +5", "ID_FMP_MAGIC_ITEM_5188"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Nonagon of Kol Korran +6"] = new RulesElement({
    name: "Nonagon of Kol Korran +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5189",
    source: "Eberron Player's Guide",
    categories: ["Nonagon of Kol Korran +6", "ID_FMP_MAGIC_ITEM_5189"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Noxious Grenade (level 11)"] = new RulesElement({
    name: "Noxious Grenade (level 11)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5095",
    source: "Eberron Player's Guide",
    categories: ["Noxious Grenade (level 11)", "ID_FMP_MAGIC_ITEM_5095"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Noxious Grenade (level 16)"] = new RulesElement({
    name: "Noxious Grenade (level 16)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5096",
    source: "Eberron Player's Guide",
    categories: ["Noxious Grenade (level 16)", "ID_FMP_MAGIC_ITEM_5096"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Noxious Grenade (level 21)"] = new RulesElement({
    name: "Noxious Grenade (level 21)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5097",
    source: "Eberron Player's Guide",
    categories: ["Noxious Grenade (level 21)", "ID_FMP_MAGIC_ITEM_5097"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Noxious Grenade (level 26)"] = new RulesElement({
    name: "Noxious Grenade (level 26)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5098",
    source: "Eberron Player's Guide",
    categories: ["Noxious Grenade (level 26)", "ID_FMP_MAGIC_ITEM_5098"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Oalian's Balance Totem +1"] = new RulesElement({
    name: "Oalian's Balance Totem +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5278",
    source: "Eberron Player's Guide",
    categories: ["Oalian's Balance Totem +1", "ID_FMP_MAGIC_ITEM_5278"],
    rules: function(model) {
      model.statadd("Diplomacy Misc", 1, "item");
      model.statadd("Nature Misc", 1, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Oalian's Balance Totem +2"] = new RulesElement({
    name: "Oalian's Balance Totem +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5279",
    source: "Eberron Player's Guide",
    categories: ["Oalian's Balance Totem +2", "ID_FMP_MAGIC_ITEM_5279"],
    rules: function(model) {
      model.statadd("Diplomacy Misc", 1, "item");
      model.statadd("Nature Misc", 1, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Oalian's Balance Totem +3"] = new RulesElement({
    name: "Oalian's Balance Totem +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5280",
    source: "Eberron Player's Guide",
    categories: ["Oalian's Balance Totem +3", "ID_FMP_MAGIC_ITEM_5280"],
    rules: function(model) {
      model.statadd("Diplomacy Misc", 1, "item");
      model.statadd("Nature Misc", 1, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Oalian's Balance Totem +4"] = new RulesElement({
    name: "Oalian's Balance Totem +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5281",
    source: "Eberron Player's Guide",
    categories: ["Oalian's Balance Totem +4", "ID_FMP_MAGIC_ITEM_5281"],
    rules: function(model) {
      model.statadd("Diplomacy Misc", 1, "item");
      model.statadd("Nature Misc", 1, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Oalian's Balance Totem +5"] = new RulesElement({
    name: "Oalian's Balance Totem +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5282",
    source: "Eberron Player's Guide",
    categories: ["Oalian's Balance Totem +5", "ID_FMP_MAGIC_ITEM_5282"],
    rules: function(model) {
      model.statadd("Diplomacy Misc", 1, "item");
      model.statadd("Nature Misc", 1, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Oalian's Balance Totem +6"] = new RulesElement({
    name: "Oalian's Balance Totem +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5283",
    source: "Eberron Player's Guide",
    categories: ["Oalian's Balance Totem +6", "ID_FMP_MAGIC_ITEM_5283"],
    rules: function(model) {
      model.statadd("Diplomacy Misc", 1, "item");
      model.statadd("Nature Misc", 1, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Octogram of the Sovereign Host +1"] = new RulesElement({
    name: "Octogram of the Sovereign Host +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5190",
    source: "Eberron Player's Guide",
    categories: ["Octogram of the Sovereign Host +1", "ID_FMP_MAGIC_ITEM_5190"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Octogram of the Sovereign Host +2"] = new RulesElement({
    name: "Octogram of the Sovereign Host +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5191",
    source: "Eberron Player's Guide",
    categories: ["Octogram of the Sovereign Host +2", "ID_FMP_MAGIC_ITEM_5191"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Octogram of the Sovereign Host +3"] = new RulesElement({
    name: "Octogram of the Sovereign Host +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5192",
    source: "Eberron Player's Guide",
    categories: ["Octogram of the Sovereign Host +3", "ID_FMP_MAGIC_ITEM_5192"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Octogram of the Sovereign Host +4"] = new RulesElement({
    name: "Octogram of the Sovereign Host +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5193",
    source: "Eberron Player's Guide",
    categories: ["Octogram of the Sovereign Host +4", "ID_FMP_MAGIC_ITEM_5193"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Octogram of the Sovereign Host +5"] = new RulesElement({
    name: "Octogram of the Sovereign Host +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5194",
    source: "Eberron Player's Guide",
    categories: ["Octogram of the Sovereign Host +5", "ID_FMP_MAGIC_ITEM_5194"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Octogram of the Sovereign Host +6"] = new RulesElement({
    name: "Octogram of the Sovereign Host +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5195",
    source: "Eberron Player's Guide",
    categories: ["Octogram of the Sovereign Host +6", "ID_FMP_MAGIC_ITEM_5195"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Onatar's Forge +1"] = new RulesElement({
    name: "Onatar's Forge +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5196",
    source: "Eberron Player's Guide",
    categories: ["Onatar's Forge +1", "ID_FMP_MAGIC_ITEM_5196"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Onatar's Forge +2"] = new RulesElement({
    name: "Onatar's Forge +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5197",
    source: "Eberron Player's Guide",
    categories: ["Onatar's Forge +2", "ID_FMP_MAGIC_ITEM_5197"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Onatar's Forge +3"] = new RulesElement({
    name: "Onatar's Forge +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5198",
    source: "Eberron Player's Guide",
    categories: ["Onatar's Forge +3", "ID_FMP_MAGIC_ITEM_5198"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Onatar's Forge +4"] = new RulesElement({
    name: "Onatar's Forge +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5199",
    source: "Eberron Player's Guide",
    categories: ["Onatar's Forge +4", "ID_FMP_MAGIC_ITEM_5199"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Onatar's Forge +5"] = new RulesElement({
    name: "Onatar's Forge +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5200",
    source: "Eberron Player's Guide",
    categories: ["Onatar's Forge +5", "ID_FMP_MAGIC_ITEM_5200"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Onatar's Forge +6"] = new RulesElement({
    name: "Onatar's Forge +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5201",
    source: "Eberron Player's Guide",
    categories: ["Onatar's Forge +6", "ID_FMP_MAGIC_ITEM_5201"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Panther Tears (heroic tier)"] = new RulesElement({
    name: "Panther Tears (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5099",
    source: "Eberron Player's Guide",
    categories: ["Panther Tears (heroic tier)", "ID_FMP_MAGIC_ITEM_5099"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Precise Wand of Runic Resistance +3"] = new RulesElement({
    name: "Precise Wand of Runic Resistance +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5263",
    source: "Eberron Player's Guide",
    categories: ["Precise Wand of Runic Resistance +3", "ID_FMP_MAGIC_ITEM_5263"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Precise Wand of Runic Resistance +4"] = new RulesElement({
    name: "Precise Wand of Runic Resistance +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5264",
    source: "Eberron Player's Guide",
    categories: ["Precise Wand of Runic Resistance +4", "ID_FMP_MAGIC_ITEM_5264"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Precise Wand of Runic Resistance +5"] = new RulesElement({
    name: "Precise Wand of Runic Resistance +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5265",
    source: "Eberron Player's Guide",
    categories: ["Precise Wand of Runic Resistance +5", "ID_FMP_MAGIC_ITEM_5265"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Precise Wand of Runic Resistance +6"] = new RulesElement({
    name: "Precise Wand of Runic Resistance +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5266",
    source: "Eberron Player's Guide",
    categories: ["Precise Wand of Runic Resistance +6", "ID_FMP_MAGIC_ITEM_5266"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Psalter of Aureon +1"] = new RulesElement({
    name: "Psalter of Aureon +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5202",
    source: "Eberron Player's Guide",
    categories: ["Psalter of Aureon +1", "ID_FMP_MAGIC_ITEM_5202"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Psalter of Aureon +2"] = new RulesElement({
    name: "Psalter of Aureon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5203",
    source: "Eberron Player's Guide",
    categories: ["Psalter of Aureon +2", "ID_FMP_MAGIC_ITEM_5203"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Psalter of Aureon +3"] = new RulesElement({
    name: "Psalter of Aureon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5204",
    source: "Eberron Player's Guide",
    categories: ["Psalter of Aureon +3", "ID_FMP_MAGIC_ITEM_5204"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Psalter of Aureon +4"] = new RulesElement({
    name: "Psalter of Aureon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5205",
    source: "Eberron Player's Guide",
    categories: ["Psalter of Aureon +4", "ID_FMP_MAGIC_ITEM_5205"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Psalter of Aureon +5"] = new RulesElement({
    name: "Psalter of Aureon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5206",
    source: "Eberron Player's Guide",
    categories: ["Psalter of Aureon +5", "ID_FMP_MAGIC_ITEM_5206"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Psalter of Aureon +6"] = new RulesElement({
    name: "Psalter of Aureon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5207",
    source: "Eberron Player's Guide",
    categories: ["Psalter of Aureon +6", "ID_FMP_MAGIC_ITEM_5207"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Resonance Crystal (level 14)"] = new RulesElement({
    name: "Resonance Crystal (level 14)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5102",
    source: "Eberron Player's Guide",
    categories: ["Resonance Crystal (level 14)", "ID_FMP_MAGIC_ITEM_5102"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Resonance Crystal (level 19)"] = new RulesElement({
    name: "Resonance Crystal (level 19)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5103",
    source: "Eberron Player's Guide",
    categories: ["Resonance Crystal (level 19)", "ID_FMP_MAGIC_ITEM_5103"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Resonance Crystal (level 24)"] = new RulesElement({
    name: "Resonance Crystal (level 24)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5104",
    source: "Eberron Player's Guide",
    categories: ["Resonance Crystal (level 24)", "ID_FMP_MAGIC_ITEM_5104"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Resonance Crystal (level 29)"] = new RulesElement({
    name: "Resonance Crystal (level 29)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5105",
    source: "Eberron Player's Guide",
    categories: ["Resonance Crystal (level 29)", "ID_FMP_MAGIC_ITEM_5105"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Resonance Crystal (level 4)"] = new RulesElement({
    name: "Resonance Crystal (level 4)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5100",
    source: "Eberron Player's Guide",
    categories: ["Resonance Crystal (level 4)", "ID_FMP_MAGIC_ITEM_5100"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Resonance Crystal (level 9)"] = new RulesElement({
    name: "Resonance Crystal (level 9)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5101",
    source: "Eberron Player's Guide",
    categories: ["Resonance Crystal (level 9)", "ID_FMP_MAGIC_ITEM_5101"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Elemental Shielding +1"] = new RulesElement({
    name: "Rod of Elemental Shielding +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5219",
    source: "Eberron Player's Guide",
    categories: ["Rod of Elemental Shielding +1", "ID_FMP_MAGIC_ITEM_5219"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Elemental Shielding +2"] = new RulesElement({
    name: "Rod of Elemental Shielding +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5220",
    source: "Eberron Player's Guide",
    categories: ["Rod of Elemental Shielding +2", "ID_FMP_MAGIC_ITEM_5220"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Elemental Shielding +3"] = new RulesElement({
    name: "Rod of Elemental Shielding +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5221",
    source: "Eberron Player's Guide",
    categories: ["Rod of Elemental Shielding +3", "ID_FMP_MAGIC_ITEM_5221"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Elemental Shielding +4"] = new RulesElement({
    name: "Rod of Elemental Shielding +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5222",
    source: "Eberron Player's Guide",
    categories: ["Rod of Elemental Shielding +4", "ID_FMP_MAGIC_ITEM_5222"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Elemental Shielding +5"] = new RulesElement({
    name: "Rod of Elemental Shielding +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5223",
    source: "Eberron Player's Guide",
    categories: ["Rod of Elemental Shielding +5", "ID_FMP_MAGIC_ITEM_5223"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Elemental Shielding +6"] = new RulesElement({
    name: "Rod of Elemental Shielding +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5224",
    source: "Eberron Player's Guide",
    categories: ["Rod of Elemental Shielding +6", "ID_FMP_MAGIC_ITEM_5224"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Repair +1"] = new RulesElement({
    name: "Rod of Repair +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5225",
    source: "Eberron Player's Guide",
    categories: ["Rod of Repair +1", "ID_FMP_MAGIC_ITEM_5225"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Repair +2"] = new RulesElement({
    name: "Rod of Repair +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5226",
    source: "Eberron Player's Guide",
    categories: ["Rod of Repair +2", "ID_FMP_MAGIC_ITEM_5226"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Repair +3"] = new RulesElement({
    name: "Rod of Repair +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5227",
    source: "Eberron Player's Guide",
    categories: ["Rod of Repair +3", "ID_FMP_MAGIC_ITEM_5227"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Repair +4"] = new RulesElement({
    name: "Rod of Repair +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5228",
    source: "Eberron Player's Guide",
    categories: ["Rod of Repair +4", "ID_FMP_MAGIC_ITEM_5228"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Repair +5"] = new RulesElement({
    name: "Rod of Repair +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5229",
    source: "Eberron Player's Guide",
    categories: ["Rod of Repair +5", "ID_FMP_MAGIC_ITEM_5229"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rod of Repair +6"] = new RulesElement({
    name: "Rod of Repair +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5230",
    source: "Eberron Player's Guide",
    categories: ["Rod of Repair +6", "ID_FMP_MAGIC_ITEM_5230"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Sheaf of Arawai +2"] = new RulesElement({
    name: "Sheaf of Arawai +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5208",
    source: "Eberron Player's Guide",
    categories: ["Sheaf of Arawai +2", "ID_FMP_MAGIC_ITEM_5208"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Sheaf of Arawai +3"] = new RulesElement({
    name: "Sheaf of Arawai +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5209",
    source: "Eberron Player's Guide",
    categories: ["Sheaf of Arawai +3", "ID_FMP_MAGIC_ITEM_5209"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Sheaf of Arawai +4"] = new RulesElement({
    name: "Sheaf of Arawai +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5210",
    source: "Eberron Player's Guide",
    categories: ["Sheaf of Arawai +4", "ID_FMP_MAGIC_ITEM_5210"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Sheaf of Arawai +5"] = new RulesElement({
    name: "Sheaf of Arawai +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5211",
    source: "Eberron Player's Guide",
    categories: ["Sheaf of Arawai +5", "ID_FMP_MAGIC_ITEM_5211"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Sheaf of Arawai +6"] = new RulesElement({
    name: "Sheaf of Arawai +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5212",
    source: "Eberron Player's Guide",
    categories: ["Sheaf of Arawai +6", "ID_FMP_MAGIC_ITEM_5212"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Siberys Shard of Merciless Cold (epic tier)"] = new RulesElement({
    name: "Siberys Shard of Merciless Cold (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5333",
    source: "Eberron Player's Guide",
    categories: ["Siberys Shard of Merciless Cold (epic tier)", "ID_FMP_MAGIC_ITEM_5333"],
    rules: function(model) {
      model.statadd("cold:damage(Siberys Shard of Merciless Cold (epic tier))", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Siberys Shard of Merciless Cold (heroic tier)"] = new RulesElement({
    name: "Siberys Shard of Merciless Cold (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5329",
    source: "Eberron Player's Guide",
    categories: ["Siberys Shard of Merciless Cold (heroic tier)", "ID_FMP_MAGIC_ITEM_5329"],
    rules: function(model) {
      model.statadd("cold:damage(Siberys Shard of Merciless Cold (heroic tier))", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Siberys Shard of Merciless Cold (paragon tier)"] = new RulesElement({
    name: "Siberys Shard of Merciless Cold (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5331",
    source: "Eberron Player's Guide",
    categories: ["Siberys Shard of Merciless Cold (paragon tier)", "ID_FMP_MAGIC_ITEM_5331"],
    rules: function(model) {
      model.statadd("cold:damage(Siberys Shard of Merciless Cold (paragon tier))", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Siberys Shard of Radiance (epic tier)"] = new RulesElement({
    name: "Siberys Shard of Radiance (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5339",
    source: "Eberron Player's Guide",
    categories: ["Siberys Shard of Radiance (epic tier)", "ID_FMP_MAGIC_ITEM_5339"],
    rules: function(model) {
      model.statadd("radiant:damage(Siberys Shard of Radiance (epic tier))", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Siberys Shard of Radiance (heroic tier)"] = new RulesElement({
    name: "Siberys Shard of Radiance (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5335",
    source: "Eberron Player's Guide",
    categories: ["Siberys Shard of Radiance (heroic tier)", "ID_FMP_MAGIC_ITEM_5335"],
    rules: function(model) {
      model.statadd("radiant:damage(Siberys Shard of Radiance (heroic tier))", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Siberys Shard of Radiance (paragon tier)"] = new RulesElement({
    name: "Siberys Shard of Radiance (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5337",
    source: "Eberron Player's Guide",
    categories: ["Siberys Shard of Radiance (paragon tier)", "ID_FMP_MAGIC_ITEM_5337"],
    rules: function(model) {
      model.statadd("radiant:damage(Siberys Shard of Radiance (paragon tier))", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Siberys Shard of the Mage (epic tier)"] = new RulesElement({
    name: "Siberys Shard of the Mage (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5345",
    source: "Eberron Player's Guide",
    categories: ["Siberys Shard of the Mage (epic tier)", "ID_FMP_MAGIC_ITEM_5345"],
    rules: function(model) {
      model.statadd("implement:damage(Siberys Shard of the Mage (epic tier))", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Siberys Shard of the Mage (heroic tier)"] = new RulesElement({
    name: "Siberys Shard of the Mage (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5341",
    source: "Eberron Player's Guide",
    categories: ["Siberys Shard of the Mage (heroic tier)", "ID_FMP_MAGIC_ITEM_5341"],
    rules: function(model) {
      model.statadd("implement:damage(Siberys Shard of the Mage (heroic tier))", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Siberys Shard of the Mage (paragon tier)"] = new RulesElement({
    name: "Siberys Shard of the Mage (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5343",
    source: "Eberron Player's Guide",
    categories: ["Siberys Shard of the Mage (paragon tier)", "ID_FMP_MAGIC_ITEM_5343"],
    rules: function(model) {
      model.statadd("implement:damage(Siberys Shard of the Mage (paragon tier))", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Spiked Soles (heroic tier)"] = new RulesElement({
    name: "Spiked Soles (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5379",
    source: "Eberron Player's Guide",
    categories: ["Spiked Soles (heroic tier)", "ID_FMP_MAGIC_ITEM_5379"],
    rules: function(model) {
      model.statadd("Athletics Misc", function() { /* for climbing */ return 5; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Spirit Reliquary +2"] = new RulesElement({
    name: "Spirit Reliquary +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5213",
    source: "Eberron Player's Guide",
    categories: ["Spirit Reliquary +2", "ID_FMP_MAGIC_ITEM_5213"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against charm and fear effects */ return 2; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Spirit Reliquary +3"] = new RulesElement({
    name: "Spirit Reliquary +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5214",
    source: "Eberron Player's Guide",
    categories: ["Spirit Reliquary +3", "ID_FMP_MAGIC_ITEM_5214"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against charm and fear effects */ return 3; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Spirit Reliquary +4"] = new RulesElement({
    name: "Spirit Reliquary +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5215",
    source: "Eberron Player's Guide",
    categories: ["Spirit Reliquary +4", "ID_FMP_MAGIC_ITEM_5215"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against charm and fear effects */ return 4; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Spirit Reliquary +5"] = new RulesElement({
    name: "Spirit Reliquary +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5216",
    source: "Eberron Player's Guide",
    categories: ["Spirit Reliquary +5", "ID_FMP_MAGIC_ITEM_5216"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against charm and fear effects */ return 5; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Spirit Reliquary +6"] = new RulesElement({
    name: "Spirit Reliquary +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5217",
    source: "Eberron Player's Guide",
    categories: ["Spirit Reliquary +6", "ID_FMP_MAGIC_ITEM_5217"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against charm and fear effects */ return 6; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Spotted Toadstool Venom (level 10)"] = new RulesElement({
    name: "Spotted Toadstool Venom (level 10)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5106",
    source: "Eberron Player's Guide",
    categories: ["Spotted Toadstool Venom (level 10)", "ID_FMP_MAGIC_ITEM_5106"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Spotted Toadstool Venom (level 15)"] = new RulesElement({
    name: "Spotted Toadstool Venom (level 15)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5107",
    source: "Eberron Player's Guide",
    categories: ["Spotted Toadstool Venom (level 15)", "ID_FMP_MAGIC_ITEM_5107"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Spotted Toadstool Venom (level 20)"] = new RulesElement({
    name: "Spotted Toadstool Venom (level 20)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5108",
    source: "Eberron Player's Guide",
    categories: ["Spotted Toadstool Venom (level 20)", "ID_FMP_MAGIC_ITEM_5108"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Spotted Toadstool Venom (level 25)"] = new RulesElement({
    name: "Spotted Toadstool Venom (level 25)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5109",
    source: "Eberron Player's Guide",
    categories: ["Spotted Toadstool Venom (level 25)", "ID_FMP_MAGIC_ITEM_5109"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Spotted Toadstool Venom (level 30)"] = new RulesElement({
    name: "Spotted Toadstool Venom (level 30)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5110",
    source: "Eberron Player's Guide",
    categories: ["Spotted Toadstool Venom (level 30)", "ID_FMP_MAGIC_ITEM_5110"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Artifice +1"] = new RulesElement({
    name: "Staff of Artifice +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5237",
    source: "Eberron Player's Guide",
    categories: ["Staff of Artifice +1", "ID_FMP_MAGIC_ITEM_5237"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Artifice +2"] = new RulesElement({
    name: "Staff of Artifice +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5238",
    source: "Eberron Player's Guide",
    categories: ["Staff of Artifice +2", "ID_FMP_MAGIC_ITEM_5238"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Artifice +3"] = new RulesElement({
    name: "Staff of Artifice +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5239",
    source: "Eberron Player's Guide",
    categories: ["Staff of Artifice +3", "ID_FMP_MAGIC_ITEM_5239"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Artifice +4"] = new RulesElement({
    name: "Staff of Artifice +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5240",
    source: "Eberron Player's Guide",
    categories: ["Staff of Artifice +4", "ID_FMP_MAGIC_ITEM_5240"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Artifice +5"] = new RulesElement({
    name: "Staff of Artifice +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5241",
    source: "Eberron Player's Guide",
    categories: ["Staff of Artifice +5", "ID_FMP_MAGIC_ITEM_5241"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Artifice +6"] = new RulesElement({
    name: "Staff of Artifice +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5242",
    source: "Eberron Player's Guide",
    categories: ["Staff of Artifice +6", "ID_FMP_MAGIC_ITEM_5242"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of the Blinking Artifice +2"] = new RulesElement({
    name: "Staff of the Blinking Artifice +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5243",
    source: "Eberron Player's Guide",
    categories: ["Staff of the Blinking Artifice +2", "ID_FMP_MAGIC_ITEM_5243"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of the Blinking Artifice +3"] = new RulesElement({
    name: "Staff of the Blinking Artifice +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5244",
    source: "Eberron Player's Guide",
    categories: ["Staff of the Blinking Artifice +3", "ID_FMP_MAGIC_ITEM_5244"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of the Blinking Artifice +4"] = new RulesElement({
    name: "Staff of the Blinking Artifice +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5245",
    source: "Eberron Player's Guide",
    categories: ["Staff of the Blinking Artifice +4", "ID_FMP_MAGIC_ITEM_5245"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of the Blinking Artifice +5"] = new RulesElement({
    name: "Staff of the Blinking Artifice +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5246",
    source: "Eberron Player's Guide",
    categories: ["Staff of the Blinking Artifice +5", "ID_FMP_MAGIC_ITEM_5246"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of the Blinking Artifice +6"] = new RulesElement({
    name: "Staff of the Blinking Artifice +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5247",
    source: "Eberron Player's Guide",
    categories: ["Staff of the Blinking Artifice +6", "ID_FMP_MAGIC_ITEM_5247"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Suppression Crystal (epic tier)"] = new RulesElement({
    name: "Suppression Crystal (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5115",
    source: "Eberron Player's Guide",
    categories: ["Suppression Crystal (epic tier)", "ID_FMP_MAGIC_ITEM_5115"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Suppression Crystal (heroic tier)"] = new RulesElement({
    name: "Suppression Crystal (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5111",
    source: "Eberron Player's Guide",
    categories: ["Suppression Crystal (heroic tier)", "ID_FMP_MAGIC_ITEM_5111"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Suppression Crystal (paragon tier)"] = new RulesElement({
    name: "Suppression Crystal (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5113",
    source: "Eberron Player's Guide",
    categories: ["Suppression Crystal (paragon tier)", "ID_FMP_MAGIC_ITEM_5113"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Tension Wheel (epic tier)"] = new RulesElement({
    name: "Tension Wheel (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5121",
    source: "Eberron Player's Guide",
    categories: ["Tension Wheel (epic tier)", "ID_FMP_MAGIC_ITEM_5121"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Tension Wheel (heroic tier)"] = new RulesElement({
    name: "Tension Wheel (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5117",
    source: "Eberron Player's Guide",
    categories: ["Tension Wheel (heroic tier)", "ID_FMP_MAGIC_ITEM_5117"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Tension Wheel (paragon tier)"] = new RulesElement({
    name: "Tension Wheel (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5119",
    source: "Eberron Player's Guide",
    categories: ["Tension Wheel (paragon tier)", "ID_FMP_MAGIC_ITEM_5119"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Tethercord (level 13)"] = new RulesElement({
    name: "Tethercord (level 13)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5125",
    source: "Eberron Player's Guide",
    categories: ["Tethercord (level 13)", "ID_FMP_MAGIC_ITEM_5125"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Tethercord (level 18)"] = new RulesElement({
    name: "Tethercord (level 18)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5126",
    source: "Eberron Player's Guide",
    categories: ["Tethercord (level 18)", "ID_FMP_MAGIC_ITEM_5126"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Tethercord (level 23)"] = new RulesElement({
    name: "Tethercord (level 23)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5127",
    source: "Eberron Player's Guide",
    categories: ["Tethercord (level 23)", "ID_FMP_MAGIC_ITEM_5127"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Tethercord (level 28)"] = new RulesElement({
    name: "Tethercord (level 28)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5128",
    source: "Eberron Player's Guide",
    categories: ["Tethercord (level 28)", "ID_FMP_MAGIC_ITEM_5128"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Tethercord (level 3)"] = new RulesElement({
    name: "Tethercord (level 3)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5123",
    source: "Eberron Player's Guide",
    categories: ["Tethercord (level 3)", "ID_FMP_MAGIC_ITEM_5123"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Tethercord (level 8)"] = new RulesElement({
    name: "Tethercord (level 8)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5124",
    source: "Eberron Player's Guide",
    categories: ["Tethercord (level 8)", "ID_FMP_MAGIC_ITEM_5124"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Totem of Enduring Vigilance +2"] = new RulesElement({
    name: "Totem of Enduring Vigilance +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5284",
    source: "Eberron Player's Guide",
    categories: ["Totem of Enduring Vigilance +2", "ID_FMP_MAGIC_ITEM_5284"],
    rules: function(model) {
      model.statadd("Arcana Misc", 1, "item");
      model.statadd("Perception Misc", 1, "item");
      model.statadd("primal,implement:damage(Totem of Enduring Vigilance +2)", function() { /* against creatures with the aberrant origin */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Totem of Enduring Vigilance +3"] = new RulesElement({
    name: "Totem of Enduring Vigilance +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5285",
    source: "Eberron Player's Guide",
    categories: ["Totem of Enduring Vigilance +3", "ID_FMP_MAGIC_ITEM_5285"],
    rules: function(model) {
      model.statadd("Arcana Misc", 1, "item");
      model.statadd("Perception Misc", 1, "item");
      model.statadd("primal,implement:damage(Totem of Enduring Vigilance +3)", function() { /* against creatures with the aberrant origin */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Totem of Enduring Vigilance +4"] = new RulesElement({
    name: "Totem of Enduring Vigilance +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5286",
    source: "Eberron Player's Guide",
    categories: ["Totem of Enduring Vigilance +4", "ID_FMP_MAGIC_ITEM_5286"],
    rules: function(model) {
      model.statadd("Arcana Misc", 1, "item");
      model.statadd("Perception Misc", 1, "item");
      model.statadd("primal,implement:damage(Totem of Enduring Vigilance +4)", function() { /* against creatures with the aberrant origin */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Totem of Enduring Vigilance +5"] = new RulesElement({
    name: "Totem of Enduring Vigilance +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5287",
    source: "Eberron Player's Guide",
    categories: ["Totem of Enduring Vigilance +5", "ID_FMP_MAGIC_ITEM_5287"],
    rules: function(model) {
      model.statadd("Arcana Misc", 1, "item");
      model.statadd("Perception Misc", 1, "item");
      model.statadd("primal,implement:damage(Totem of Enduring Vigilance +5)", function() { /* against creatures with the aberrant origin */ return 5; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Totem of Enduring Vigilance +6"] = new RulesElement({
    name: "Totem of Enduring Vigilance +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5288",
    source: "Eberron Player's Guide",
    categories: ["Totem of Enduring Vigilance +6", "ID_FMP_MAGIC_ITEM_5288"],
    rules: function(model) {
      model.statadd("Arcana Misc", 1, "item");
      model.statadd("Perception Misc", 1, "item");
      model.statadd("primal,implement:damage(Totem of Enduring Vigilance +6)", function() { /* against creatures with the aberrant origin */ return 5; });
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Warsoul Weapon +1"] = new RulesElement({
    name: "Warsoul Weapon +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1198",
    source: "Eberron Player's Guide",
    categories: ["Warsoul Weapon +1", "ID_FMP_MAGIC_ITEM_1198"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Initiative Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Warsoul Weapon +2"] = new RulesElement({
    name: "Warsoul Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1199",
    source: "Eberron Player's Guide",
    categories: ["Warsoul Weapon +2", "ID_FMP_MAGIC_ITEM_1199"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Initiative Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Warsoul Weapon +3"] = new RulesElement({
    name: "Warsoul Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1200",
    source: "Eberron Player's Guide",
    categories: ["Warsoul Weapon +3", "ID_FMP_MAGIC_ITEM_1200"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Initiative Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Warsoul Weapon +4"] = new RulesElement({
    name: "Warsoul Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1201",
    source: "Eberron Player's Guide",
    categories: ["Warsoul Weapon +4", "ID_FMP_MAGIC_ITEM_1201"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Initiative Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Warsoul Weapon +5"] = new RulesElement({
    name: "Warsoul Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1202",
    source: "Eberron Player's Guide",
    categories: ["Warsoul Weapon +5", "ID_FMP_MAGIC_ITEM_1202"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Initiative Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Warsoul Weapon +6"] = new RulesElement({
    name: "Warsoul Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_1203",
    source: "Eberron Player's Guide",
    categories: ["Warsoul Weapon +6", "ID_FMP_MAGIC_ITEM_1203"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Initiative Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Winter's Heart Totem +2"] = new RulesElement({
    name: "Winter's Heart Totem +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5289",
    source: "Eberron Player's Guide",
    categories: ["Winter's Heart Totem +2", "ID_FMP_MAGIC_ITEM_5289"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Winter's Heart Totem +3"] = new RulesElement({
    name: "Winter's Heart Totem +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5290",
    source: "Eberron Player's Guide",
    categories: ["Winter's Heart Totem +3", "ID_FMP_MAGIC_ITEM_5290"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Winter's Heart Totem +4"] = new RulesElement({
    name: "Winter's Heart Totem +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5291",
    source: "Eberron Player's Guide",
    categories: ["Winter's Heart Totem +4", "ID_FMP_MAGIC_ITEM_5291"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Winter's Heart Totem +5"] = new RulesElement({
    name: "Winter's Heart Totem +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5292",
    source: "Eberron Player's Guide",
    categories: ["Winter's Heart Totem +5", "ID_FMP_MAGIC_ITEM_5292"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Winter's Heart Totem +6"] = new RulesElement({
    name: "Winter's Heart Totem +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5293",
    source: "Eberron Player's Guide",
    categories: ["Winter's Heart Totem +6", "ID_FMP_MAGIC_ITEM_5293"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Woundpatch (epic tier)"] = new RulesElement({
    name: "Woundpatch (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5133",
    source: "Eberron Player's Guide",
    categories: ["Woundpatch (epic tier)", "ID_FMP_MAGIC_ITEM_5133"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Woundpatch (heroic tier)"] = new RulesElement({
    name: "Woundpatch (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5129",
    source: "Eberron Player's Guide",
    categories: ["Woundpatch (heroic tier)", "ID_FMP_MAGIC_ITEM_5129"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Woundpatch (paragon tier)"] = new RulesElement({
    name: "Woundpatch (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_5131",
    source: "Eberron Player's Guide",
    categories: ["Woundpatch (paragon tier)", "ID_FMP_MAGIC_ITEM_5131"]
  });
  byID[te.id] = te;
  
  
})(this);
