define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Aggressive Weapon +2"] = new engine.RulesElement({
    name: "Aggressive Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9603",
    source: "Psionic Power",
    categories: ["Aggressive Weapon +2", "ID_FMP_MAGIC_ITEM_9603"],
    rules: function(model) {
      model.statadd("damage rolls(Aggressive Weapon +2)", function() { /* while you have at least 1 power point */ return 1; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Aggressive Weapon +3"] = new engine.RulesElement({
    name: "Aggressive Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9604",
    source: "Psionic Power",
    categories: ["Aggressive Weapon +3", "ID_FMP_MAGIC_ITEM_9604"],
    rules: function(model) {
      model.statadd("damage rolls(Aggressive Weapon +3)", function() { /* while you have at least 1 power point */ return 2; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Aggressive Weapon +4"] = new engine.RulesElement({
    name: "Aggressive Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9605",
    source: "Psionic Power",
    categories: ["Aggressive Weapon +4", "ID_FMP_MAGIC_ITEM_9605"],
    rules: function(model) {
      model.statadd("damage rolls(Aggressive Weapon +4)", function() { /* while you have at least 1 power point */ return 2; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Aggressive Weapon +5"] = new engine.RulesElement({
    name: "Aggressive Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9606",
    source: "Psionic Power",
    categories: ["Aggressive Weapon +5", "ID_FMP_MAGIC_ITEM_9606"],
    rules: function(model) {
      model.statadd("damage rolls(Aggressive Weapon +5)", function() { /* while you have at least 1 power point */ return 3; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Aggressive Weapon +6"] = new engine.RulesElement({
    name: "Aggressive Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9607",
    source: "Psionic Power",
    categories: ["Aggressive Weapon +6", "ID_FMP_MAGIC_ITEM_9607"],
    rules: function(model) {
      model.statadd("damage rolls(Aggressive Weapon +6)", function() { /* while you have at least 1 power point */ return 3; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Amulet of Adept Movements +3"] = new engine.RulesElement({
    name: "Amulet of Adept Movements +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9668",
    source: "Psionic Power",
    categories: ["Amulet of Adept Movements +3", "ID_FMP_MAGIC_ITEM_9668"],
    rules: function(model) {
      model.statadd("AC", function() { /* against opportunity attacks */ return 2; }, "item");
      model.statadd("Fortitude Defense", function() { /* against opportunity attacks */ return 2; }, "item");
      model.statadd("Will Defense", function() { /* against opportunity attacks */ return 2; }, "item");
      model.statadd("Reflex Defense", function() { /* against opportunity attacks */ return 2; }, "item");
      model.statadd("Fortitude Defense", 3, "Enhancement");
      model.statadd("Reflex Defense", 3, "Enhancement");
      model.statadd("Will Defense", 3, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Amulet of Adept Movements +4"] = new engine.RulesElement({
    name: "Amulet of Adept Movements +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9669",
    source: "Psionic Power",
    categories: ["Amulet of Adept Movements +4", "ID_FMP_MAGIC_ITEM_9669"],
    rules: function(model) {
      model.statadd("AC", function() { /* against opportunity attacks */ return 2; }, "item");
      model.statadd("Fortitude Defense", function() { /* against opportunity attacks */ return 2; }, "item");
      model.statadd("Will Defense", function() { /* against opportunity attacks */ return 2; }, "item");
      model.statadd("Reflex Defense", function() { /* against opportunity attacks */ return 2; }, "item");
      model.statadd("Fortitude Defense", 4, "Enhancement");
      model.statadd("Reflex Defense", 4, "Enhancement");
      model.statadd("Will Defense", 4, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Amulet of Adept Movements +5"] = new engine.RulesElement({
    name: "Amulet of Adept Movements +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9670",
    source: "Psionic Power",
    categories: ["Amulet of Adept Movements +5", "ID_FMP_MAGIC_ITEM_9670"],
    rules: function(model) {
      model.statadd("AC", function() { /* against opportunity attacks */ return 2; }, "item");
      model.statadd("Fortitude Defense", function() { /* against opportunity attacks */ return 2; }, "item");
      model.statadd("Will Defense", function() { /* against opportunity attacks */ return 2; }, "item");
      model.statadd("Reflex Defense", function() { /* against opportunity attacks */ return 2; }, "item");
      model.statadd("Fortitude Defense", 5, "Enhancement");
      model.statadd("Reflex Defense", 5, "Enhancement");
      model.statadd("Will Defense", 5, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Amulet of Adept Movements +6"] = new engine.RulesElement({
    name: "Amulet of Adept Movements +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9671",
    source: "Psionic Power",
    categories: ["Amulet of Adept Movements +6", "ID_FMP_MAGIC_ITEM_9671"],
    rules: function(model) {
      model.statadd("AC", function() { /* against opportunity attacks */ return 2; }, "item");
      model.statadd("Fortitude Defense", function() { /* against opportunity attacks */ return 2; }, "item");
      model.statadd("Will Defense", function() { /* against opportunity attacks */ return 2; }, "item");
      model.statadd("Reflex Defense", function() { /* against opportunity attacks */ return 2; }, "item");
      model.statadd("Fortitude Defense", 6, "Enhancement");
      model.statadd("Reflex Defense", 6, "Enhancement");
      model.statadd("Will Defense", 6, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Anchoring Armor +4"] = new engine.RulesElement({
    name: "Anchoring Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9567",
    source: "Psionic Power",
    categories: ["Anchoring Armor +4", "ID_FMP_MAGIC_ITEM_9567"],
    rules: function(model) {
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Anchoring Armor +5"] = new engine.RulesElement({
    name: "Anchoring Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9568",
    source: "Psionic Power",
    categories: ["Anchoring Armor +5", "ID_FMP_MAGIC_ITEM_9568"],
    rules: function(model) {
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Anchoring Armor +6"] = new engine.RulesElement({
    name: "Anchoring Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9569",
    source: "Psionic Power",
    categories: ["Anchoring Armor +6", "ID_FMP_MAGIC_ITEM_9569"],
    rules: function(model) {
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Armor of Adaptable Resistance +1"] = new engine.RulesElement({
    name: "Armor of Adaptable Resistance +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9570",
    source: "Psionic Power",
    categories: ["Armor of Adaptable Resistance +1", "ID_FMP_MAGIC_ITEM_9570"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("Armor of Adaptable Resistance +1"); }
      });
      model.statadd("Armor Class", 1, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Armor of Adaptable Resistance +2"] = new engine.RulesElement({
    name: "Armor of Adaptable Resistance +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9571",
    source: "Psionic Power",
    categories: ["Armor of Adaptable Resistance +2", "ID_FMP_MAGIC_ITEM_9571"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("Armor of Adaptable Resistance +2"); }
      });
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Armor of Adaptable Resistance +3"] = new engine.RulesElement({
    name: "Armor of Adaptable Resistance +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9572",
    source: "Psionic Power",
    categories: ["Armor of Adaptable Resistance +3", "ID_FMP_MAGIC_ITEM_9572"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("Armor of Adaptable Resistance +3"); }
      });
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Armor of Adaptable Resistance +4"] = new engine.RulesElement({
    name: "Armor of Adaptable Resistance +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9573",
    source: "Psionic Power",
    categories: ["Armor of Adaptable Resistance +4", "ID_FMP_MAGIC_ITEM_9573"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("Armor of Adaptable Resistance +4"); }
      });
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Armor of Adaptable Resistance +5"] = new engine.RulesElement({
    name: "Armor of Adaptable Resistance +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9574",
    source: "Psionic Power",
    categories: ["Armor of Adaptable Resistance +5", "ID_FMP_MAGIC_ITEM_9574"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("Armor of Adaptable Resistance +5"); }
      });
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Armor of Adaptable Resistance +6"] = new engine.RulesElement({
    name: "Armor of Adaptable Resistance +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9575",
    source: "Psionic Power",
    categories: ["Armor of Adaptable Resistance +6", "ID_FMP_MAGIC_ITEM_9575"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("Armor of Adaptable Resistance +6"); }
      });
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Blink Shirt +2"] = new engine.RulesElement({
    name: "Blink Shirt +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9576",
    source: "Psionic Power",
    categories: ["Blink Shirt +2", "ID_FMP_MAGIC_ITEM_9576"],
    rules: function(model) {
      model.statadd("AC", function() { /* against opportunity attacks */ return 2; }, "item");
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Blink Shirt +3"] = new engine.RulesElement({
    name: "Blink Shirt +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9577",
    source: "Psionic Power",
    categories: ["Blink Shirt +3", "ID_FMP_MAGIC_ITEM_9577"],
    rules: function(model) {
      model.statadd("AC", function() { /* against opportunity attacks */ return 2; }, "item");
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Blink Shirt +4"] = new engine.RulesElement({
    name: "Blink Shirt +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9578",
    source: "Psionic Power",
    categories: ["Blink Shirt +4", "ID_FMP_MAGIC_ITEM_9578"],
    rules: function(model) {
      model.statadd("AC", function() { /* against opportunity attacks */ return 2; }, "item");
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Blink Shirt +5"] = new engine.RulesElement({
    name: "Blink Shirt +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9579",
    source: "Psionic Power",
    categories: ["Blink Shirt +5", "ID_FMP_MAGIC_ITEM_9579"],
    rules: function(model) {
      model.statadd("AC", function() { /* against opportunity attacks */ return 2; }, "item");
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Blink Shirt +6"] = new engine.RulesElement({
    name: "Blink Shirt +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9580",
    source: "Psionic Power",
    categories: ["Blink Shirt +6", "ID_FMP_MAGIC_ITEM_9580"],
    rules: function(model) {
      model.statadd("AC", function() { /* against opportunity attacks */ return 2; }, "item");
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bolstering Shield (epic tier)"] = new engine.RulesElement({
    name: "Bolstering Shield (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9657",
    source: "Psionic Power",
    categories: ["Bolstering Shield (epic tier)", "ID_FMP_MAGIC_ITEM_9657"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bolstering Shield (heroic tier)"] = new engine.RulesElement({
    name: "Bolstering Shield (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9653",
    source: "Psionic Power",
    categories: ["Bolstering Shield (heroic tier)", "ID_FMP_MAGIC_ITEM_9653"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bolstering Shield (paragon tier)"] = new engine.RulesElement({
    name: "Bolstering Shield (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9655",
    source: "Psionic Power",
    categories: ["Bolstering Shield (paragon tier)", "ID_FMP_MAGIC_ITEM_9655"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bolstering Weapon +3"] = new engine.RulesElement({
    name: "Bolstering Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9726",
    source: "Psionic Power",
    categories: ["Bolstering Weapon +3", "ID_FMP_MAGIC_ITEM_9726"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bolstering Weapon +4"] = new engine.RulesElement({
    name: "Bolstering Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9727",
    source: "Psionic Power",
    categories: ["Bolstering Weapon +4", "ID_FMP_MAGIC_ITEM_9727"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bolstering Weapon +5"] = new engine.RulesElement({
    name: "Bolstering Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9728",
    source: "Psionic Power",
    categories: ["Bolstering Weapon +5", "ID_FMP_MAGIC_ITEM_9728"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bolstering Weapon +6"] = new engine.RulesElement({
    name: "Bolstering Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9729",
    source: "Psionic Power",
    categories: ["Bolstering Weapon +6", "ID_FMP_MAGIC_ITEM_9729"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Boots of Resolute Reflexes (paragon tier)"] = new engine.RulesElement({
    name: "Boots of Resolute Reflexes (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9660",
    source: "Psionic Power",
    categories: ["Boots of Resolute Reflexes (paragon tier)", "ID_FMP_MAGIC_ITEM_9660"],
    rules: function(model) {
      model.statadd("Reflex Defense", 1, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Bracelets of Subtle Defense (heroic tier)"] = new engine.RulesElement({
    name: "Bracelets of Subtle Defense (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9658",
    source: "Psionic Power",
    categories: ["Bracelets of Subtle Defense (heroic tier)", "ID_FMP_MAGIC_ITEM_9658"],
    rules: function(model) {
      model.statadd("Stealth Misc", function() { /* while you have at least 1 power point */ return 2; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Cascading Strikes Ki Focus +1"] = new engine.RulesElement({
    name: "Cascading Strikes Ki Focus +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9519",
    source: "Psionic Power",
    categories: ["Cascading Strikes Ki Focus +1", "ID_FMP_MAGIC_ITEM_9519"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Cascading Strikes Ki Focus +2"] = new engine.RulesElement({
    name: "Cascading Strikes Ki Focus +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9520",
    source: "Psionic Power",
    categories: ["Cascading Strikes Ki Focus +2", "ID_FMP_MAGIC_ITEM_9520"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Cascading Strikes Ki Focus +3"] = new engine.RulesElement({
    name: "Cascading Strikes Ki Focus +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9521",
    source: "Psionic Power",
    categories: ["Cascading Strikes Ki Focus +3", "ID_FMP_MAGIC_ITEM_9521"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Cascading Strikes Ki Focus +4"] = new engine.RulesElement({
    name: "Cascading Strikes Ki Focus +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9522",
    source: "Psionic Power",
    categories: ["Cascading Strikes Ki Focus +4", "ID_FMP_MAGIC_ITEM_9522"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Cascading Strikes Ki Focus +5"] = new engine.RulesElement({
    name: "Cascading Strikes Ki Focus +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9523",
    source: "Psionic Power",
    categories: ["Cascading Strikes Ki Focus +5", "ID_FMP_MAGIC_ITEM_9523"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Cascading Strikes Ki Focus +6"] = new engine.RulesElement({
    name: "Cascading Strikes Ki Focus +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9524",
    source: "Psionic Power",
    categories: ["Cascading Strikes Ki Focus +6", "ID_FMP_MAGIC_ITEM_9524"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Circlet of the Resolute Mind (paragon tier)"] = new engine.RulesElement({
    name: "Circlet of the Resolute Mind (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9664",
    source: "Psionic Power",
    categories: ["Circlet of the Resolute Mind (paragon tier)", "ID_FMP_MAGIC_ITEM_9664"],
    rules: function(model) {
      model.statadd("Will Defense", 1, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Cord of Elusive Thoughts (paragon tier)"] = new engine.RulesElement({
    name: "Cord of Elusive Thoughts (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9680",
    source: "Psionic Power",
    categories: ["Cord of Elusive Thoughts (paragon tier)", "ID_FMP_MAGIC_ITEM_9680"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Crashing Tide Ki Focus +2"] = new engine.RulesElement({
    name: "Crashing Tide Ki Focus +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9525",
    source: "Psionic Power",
    categories: ["Crashing Tide Ki Focus +2", "ID_FMP_MAGIC_ITEM_9525"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Crashing Tide Ki Focus +3"] = new engine.RulesElement({
    name: "Crashing Tide Ki Focus +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9526",
    source: "Psionic Power",
    categories: ["Crashing Tide Ki Focus +3", "ID_FMP_MAGIC_ITEM_9526"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Crashing Tide Ki Focus +4"] = new engine.RulesElement({
    name: "Crashing Tide Ki Focus +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9527",
    source: "Psionic Power",
    categories: ["Crashing Tide Ki Focus +4", "ID_FMP_MAGIC_ITEM_9527"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Crashing Tide Ki Focus +5"] = new engine.RulesElement({
    name: "Crashing Tide Ki Focus +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9528",
    source: "Psionic Power",
    categories: ["Crashing Tide Ki Focus +5", "ID_FMP_MAGIC_ITEM_9528"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Crashing Tide Ki Focus +6"] = new engine.RulesElement({
    name: "Crashing Tide Ki Focus +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9529",
    source: "Psionic Power",
    categories: ["Crashing Tide Ki Focus +6", "ID_FMP_MAGIC_ITEM_9529"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dancer's Slippers (heroic tier)"] = new engine.RulesElement({
    name: "Dancer's Slippers (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9661",
    source: "Psionic Power",
    categories: ["Dancer's Slippers (heroic tier)", "ID_FMP_MAGIC_ITEM_9661"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Diadem of Exquisite Communication (paragon tier)"] = new engine.RulesElement({
    name: "Diadem of Exquisite Communication (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9665",
    source: "Psionic Power",
    categories: ["Diadem of Exquisite Communication (paragon tier)", "ID_FMP_MAGIC_ITEM_9665"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Eager Weapon +1"] = new engine.RulesElement({
    name: "Eager Weapon +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9608",
    source: "Psionic Power",
    categories: ["Eager Weapon +1", "ID_FMP_MAGIC_ITEM_9608"],
    rules: function(model) {
      model.statadd("attack rolls(Eager Weapon +1)", function() { /* to opportunity attacks while you have at least 1 power point */ return 2; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Eager Weapon +2"] = new engine.RulesElement({
    name: "Eager Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9609",
    source: "Psionic Power",
    categories: ["Eager Weapon +2", "ID_FMP_MAGIC_ITEM_9609"],
    rules: function(model) {
      model.statadd("attack rolls(Eager Weapon +2)", function() { /* to opportunity attacks while you have at least 1 power point */ return 2; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Eager Weapon +3"] = new engine.RulesElement({
    name: "Eager Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9610",
    source: "Psionic Power",
    categories: ["Eager Weapon +3", "ID_FMP_MAGIC_ITEM_9610"],
    rules: function(model) {
      model.statadd("attack rolls(Eager Weapon +3)", function() { /* to opportunity attacks while you have at least 1 power point */ return 2; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Eager Weapon +4"] = new engine.RulesElement({
    name: "Eager Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9611",
    source: "Psionic Power",
    categories: ["Eager Weapon +4", "ID_FMP_MAGIC_ITEM_9611"],
    rules: function(model) {
      model.statadd("attack rolls(Eager Weapon +4)", function() { /* to opportunity attacks while you have at least 1 power point */ return 2; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Eager Weapon +5"] = new engine.RulesElement({
    name: "Eager Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9612",
    source: "Psionic Power",
    categories: ["Eager Weapon +5", "ID_FMP_MAGIC_ITEM_9612"],
    rules: function(model) {
      model.statadd("attack rolls(Eager Weapon +5)", function() { /* to opportunity attacks while you have at least 1 power point */ return 2; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Eager Weapon +6"] = new engine.RulesElement({
    name: "Eager Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9613",
    source: "Psionic Power",
    categories: ["Eager Weapon +6", "ID_FMP_MAGIC_ITEM_9613"],
    rules: function(model) {
      model.statadd("attack rolls(Eager Weapon +6)", function() { /* to opportunity attacks while you have at least 1 power point */ return 2; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Eyes of the Deep Dwarf (paragon tier)"] = new engine.RulesElement({
    name: "Eyes of the Deep Dwarf (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9666",
    source: "Psionic Power",
    categories: ["Eyes of the Deep Dwarf (paragon tier)", "ID_FMP_MAGIC_ITEM_9666"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Focused Shield (paragon tier)"] = new engine.RulesElement({
    name: "Focused Shield (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9659",
    source: "Psionic Power",
    categories: ["Focused Shield (paragon tier)", "ID_FMP_MAGIC_ITEM_9659"],
    rules: function(model) {
      model.statadd("Focused Shield (paragon tier)", 5);
      model.statadd("resist:ranged", function() { return model.stat("Focused Shield (paragon tier)"); }, "resist");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Forked Lightning Ki Focus +2"] = new engine.RulesElement({
    name: "Forked Lightning Ki Focus +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9530",
    source: "Psionic Power",
    categories: ["Forked Lightning Ki Focus +2", "ID_FMP_MAGIC_ITEM_9530"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Forked Lightning Ki Focus +3"] = new engine.RulesElement({
    name: "Forked Lightning Ki Focus +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9531",
    source: "Psionic Power",
    categories: ["Forked Lightning Ki Focus +3", "ID_FMP_MAGIC_ITEM_9531"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Forked Lightning Ki Focus +4"] = new engine.RulesElement({
    name: "Forked Lightning Ki Focus +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9532",
    source: "Psionic Power",
    categories: ["Forked Lightning Ki Focus +4", "ID_FMP_MAGIC_ITEM_9532"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Forked Lightning Ki Focus +5"] = new engine.RulesElement({
    name: "Forked Lightning Ki Focus +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9533",
    source: "Psionic Power",
    categories: ["Forked Lightning Ki Focus +5", "ID_FMP_MAGIC_ITEM_9533"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Forked Lightning Ki Focus +6"] = new engine.RulesElement({
    name: "Forked Lightning Ki Focus +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9534",
    source: "Psionic Power",
    categories: ["Forked Lightning Ki Focus +6", "ID_FMP_MAGIC_ITEM_9534"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Four Winds Ki Focus +1"] = new engine.RulesElement({
    name: "Four Winds Ki Focus +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9535",
    source: "Psionic Power",
    categories: ["Four Winds Ki Focus +1", "ID_FMP_MAGIC_ITEM_9535"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Four Winds Ki Focus +2"] = new engine.RulesElement({
    name: "Four Winds Ki Focus +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9536",
    source: "Psionic Power",
    categories: ["Four Winds Ki Focus +2", "ID_FMP_MAGIC_ITEM_9536"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Four Winds Ki Focus +3"] = new engine.RulesElement({
    name: "Four Winds Ki Focus +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9537",
    source: "Psionic Power",
    categories: ["Four Winds Ki Focus +3", "ID_FMP_MAGIC_ITEM_9537"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Four Winds Ki Focus +4"] = new engine.RulesElement({
    name: "Four Winds Ki Focus +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9538",
    source: "Psionic Power",
    categories: ["Four Winds Ki Focus +4", "ID_FMP_MAGIC_ITEM_9538"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Four Winds Ki Focus +5"] = new engine.RulesElement({
    name: "Four Winds Ki Focus +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9539",
    source: "Psionic Power",
    categories: ["Four Winds Ki Focus +5", "ID_FMP_MAGIC_ITEM_9539"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Four Winds Ki Focus +6"] = new engine.RulesElement({
    name: "Four Winds Ki Focus +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9540",
    source: "Psionic Power",
    categories: ["Four Winds Ki Focus +6", "ID_FMP_MAGIC_ITEM_9540"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Girdle of the Resolute Body (paragon tier)"] = new engine.RulesElement({
    name: "Girdle of the Resolute Body (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9681",
    source: "Psionic Power",
    categories: ["Girdle of the Resolute Body (paragon tier)", "ID_FMP_MAGIC_ITEM_9681"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 1, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Guardian's Armor +3"] = new engine.RulesElement({
    name: "Guardian's Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9581",
    source: "Psionic Power",
    categories: ["Guardian's Armor +3", "ID_FMP_MAGIC_ITEM_9581"],
    rules: function(model) {
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Guardian's Armor +4"] = new engine.RulesElement({
    name: "Guardian's Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9582",
    source: "Psionic Power",
    categories: ["Guardian's Armor +4", "ID_FMP_MAGIC_ITEM_9582"],
    rules: function(model) {
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Guardian's Armor +5"] = new engine.RulesElement({
    name: "Guardian's Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9583",
    source: "Psionic Power",
    categories: ["Guardian's Armor +5", "ID_FMP_MAGIC_ITEM_9583"],
    rules: function(model) {
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Guardian's Armor +6"] = new engine.RulesElement({
    name: "Guardian's Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9584",
    source: "Psionic Power",
    categories: ["Guardian's Armor +6", "ID_FMP_MAGIC_ITEM_9584"],
    rules: function(model) {
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Haunting Presence Ki Focus +4"] = new engine.RulesElement({
    name: "Haunting Presence Ki Focus +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9541",
    source: "Psionic Power",
    categories: ["Haunting Presence Ki Focus +4", "ID_FMP_MAGIC_ITEM_9541"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Haunting Presence Ki Focus +5"] = new engine.RulesElement({
    name: "Haunting Presence Ki Focus +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9542",
    source: "Psionic Power",
    categories: ["Haunting Presence Ki Focus +5", "ID_FMP_MAGIC_ITEM_9542"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Haunting Presence Ki Focus +6"] = new engine.RulesElement({
    name: "Haunting Presence Ki Focus +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9543",
    source: "Psionic Power",
    categories: ["Haunting Presence Ki Focus +6", "ID_FMP_MAGIC_ITEM_9543"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Helm of the Mental Juggernaut (paragon tier)"] = new engine.RulesElement({
    name: "Helm of the Mental Juggernaut (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9667",
    source: "Psionic Power",
    categories: ["Helm of the Mental Juggernaut (paragon tier)", "ID_FMP_MAGIC_ITEM_9667"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against effects that daze or stun */ return 2; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Hunting Panther Ki Focus +1"] = new engine.RulesElement({
    name: "Hunting Panther Ki Focus +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9544",
    source: "Psionic Power",
    categories: ["Hunting Panther Ki Focus +1", "ID_FMP_MAGIC_ITEM_9544"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Hunting Panther Ki Focus +2"] = new engine.RulesElement({
    name: "Hunting Panther Ki Focus +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9545",
    source: "Psionic Power",
    categories: ["Hunting Panther Ki Focus +2", "ID_FMP_MAGIC_ITEM_9545"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Hunting Panther Ki Focus +3"] = new engine.RulesElement({
    name: "Hunting Panther Ki Focus +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9546",
    source: "Psionic Power",
    categories: ["Hunting Panther Ki Focus +3", "ID_FMP_MAGIC_ITEM_9546"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Hunting Panther Ki Focus +4"] = new engine.RulesElement({
    name: "Hunting Panther Ki Focus +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9547",
    source: "Psionic Power",
    categories: ["Hunting Panther Ki Focus +4", "ID_FMP_MAGIC_ITEM_9547"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Hunting Panther Ki Focus +5"] = new engine.RulesElement({
    name: "Hunting Panther Ki Focus +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9548",
    source: "Psionic Power",
    categories: ["Hunting Panther Ki Focus +5", "ID_FMP_MAGIC_ITEM_9548"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Hunting Panther Ki Focus +6"] = new engine.RulesElement({
    name: "Hunting Panther Ki Focus +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9549",
    source: "Psionic Power",
    categories: ["Hunting Panther Ki Focus +6", "ID_FMP_MAGIC_ITEM_9549"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Hurricane Strike Ki Focus +1"] = new engine.RulesElement({
    name: "Hurricane Strike Ki Focus +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9550",
    source: "Psionic Power",
    categories: ["Hurricane Strike Ki Focus +1", "ID_FMP_MAGIC_ITEM_9550"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Hurricane Strike Ki Focus +2"] = new engine.RulesElement({
    name: "Hurricane Strike Ki Focus +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9551",
    source: "Psionic Power",
    categories: ["Hurricane Strike Ki Focus +2", "ID_FMP_MAGIC_ITEM_9551"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Hurricane Strike Ki Focus +3"] = new engine.RulesElement({
    name: "Hurricane Strike Ki Focus +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9552",
    source: "Psionic Power",
    categories: ["Hurricane Strike Ki Focus +3", "ID_FMP_MAGIC_ITEM_9552"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Hurricane Strike Ki Focus +4"] = new engine.RulesElement({
    name: "Hurricane Strike Ki Focus +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9553",
    source: "Psionic Power",
    categories: ["Hurricane Strike Ki Focus +4", "ID_FMP_MAGIC_ITEM_9553"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Hurricane Strike Ki Focus +5"] = new engine.RulesElement({
    name: "Hurricane Strike Ki Focus +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9554",
    source: "Psionic Power",
    categories: ["Hurricane Strike Ki Focus +5", "ID_FMP_MAGIC_ITEM_9554"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Hurricane Strike Ki Focus +6"] = new engine.RulesElement({
    name: "Hurricane Strike Ki Focus +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9555",
    source: "Psionic Power",
    categories: ["Hurricane Strike Ki Focus +6", "ID_FMP_MAGIC_ITEM_9555"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Medallion of Confounding Ideas +5"] = new engine.RulesElement({
    name: "Medallion of Confounding Ideas +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9672",
    source: "Psionic Power",
    categories: ["Medallion of Confounding Ideas +5", "ID_FMP_MAGIC_ITEM_9672"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 5, "Enhancement");
      model.statadd("Reflex Defense", 5, "Enhancement");
      model.statadd("Will Defense", 5, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Medallion of Confounding Ideas +6"] = new engine.RulesElement({
    name: "Medallion of Confounding Ideas +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9673",
    source: "Psionic Power",
    categories: ["Medallion of Confounding Ideas +6", "ID_FMP_MAGIC_ITEM_9673"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 6, "Enhancement");
      model.statadd("Reflex Defense", 6, "Enhancement");
      model.statadd("Will Defense", 6, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mind Hunter's Armor +1"] = new engine.RulesElement({
    name: "Mind Hunter's Armor +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9585",
    source: "Psionic Power",
    categories: ["Mind Hunter's Armor +1", "ID_FMP_MAGIC_ITEM_9585"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against effects that daze, dominate, or stun while you have at least 1 power point */ return 2; }, "item");
      model.statadd("Armor Class", 1, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mind Hunter's Armor +2"] = new engine.RulesElement({
    name: "Mind Hunter's Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9586",
    source: "Psionic Power",
    categories: ["Mind Hunter's Armor +2", "ID_FMP_MAGIC_ITEM_9586"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against effects that daze, dominate, or stun while you have at least 1 power point */ return 2; }, "item");
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mind Hunter's Armor +3"] = new engine.RulesElement({
    name: "Mind Hunter's Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9587",
    source: "Psionic Power",
    categories: ["Mind Hunter's Armor +3", "ID_FMP_MAGIC_ITEM_9587"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against effects that daze, dominate, or stun while you have at least 1 power point */ return 2; }, "item");
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mind Hunter's Armor +4"] = new engine.RulesElement({
    name: "Mind Hunter's Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9588",
    source: "Psionic Power",
    categories: ["Mind Hunter's Armor +4", "ID_FMP_MAGIC_ITEM_9588"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against effects that daze, dominate, or stun while you have at least 1 power point */ return 2; }, "item");
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mind Hunter's Armor +5"] = new engine.RulesElement({
    name: "Mind Hunter's Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9589",
    source: "Psionic Power",
    categories: ["Mind Hunter's Armor +5", "ID_FMP_MAGIC_ITEM_9589"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against effects that daze, dominate, or stun while you have at least 1 power point */ return 2; }, "item");
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mind Hunter's Armor +6"] = new engine.RulesElement({
    name: "Mind Hunter's Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9590",
    source: "Psionic Power",
    categories: ["Mind Hunter's Armor +6", "ID_FMP_MAGIC_ITEM_9590"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against effects that daze, dominate, or stun while you have at least 1 power point */ return 2; }, "item");
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mountainfall Ki Focus +2"] = new engine.RulesElement({
    name: "Mountainfall Ki Focus +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9556",
    source: "Psionic Power",
    categories: ["Mountainfall Ki Focus +2", "ID_FMP_MAGIC_ITEM_9556"],
    rules: function(model) {
      model.statadd("Damage Rolls(Mountainfall Ki Focus +2)", function() { /* against prone and immobilized targets */ return 2; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mountainfall Ki Focus +3"] = new engine.RulesElement({
    name: "Mountainfall Ki Focus +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9557",
    source: "Psionic Power",
    categories: ["Mountainfall Ki Focus +3", "ID_FMP_MAGIC_ITEM_9557"],
    rules: function(model) {
      model.statadd("Damage Rolls(Mountainfall Ki Focus +3)", function() { /* against prone and immobilized targets */ return 4; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mountainfall Ki Focus +4"] = new engine.RulesElement({
    name: "Mountainfall Ki Focus +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9558",
    source: "Psionic Power",
    categories: ["Mountainfall Ki Focus +4", "ID_FMP_MAGIC_ITEM_9558"],
    rules: function(model) {
      model.statadd("Damage Rolls(Mountainfall Ki Focus +4)", function() { /* against prone and immobilized targets */ return 4; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mountainfall Ki Focus +5"] = new engine.RulesElement({
    name: "Mountainfall Ki Focus +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9559",
    source: "Psionic Power",
    categories: ["Mountainfall Ki Focus +5", "ID_FMP_MAGIC_ITEM_9559"],
    rules: function(model) {
      model.statadd("Damage Rolls(Mountainfall Ki Focus +5)", function() { /* against prone and immobilized targets */ return 6; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mountainfall Ki Focus +6"] = new engine.RulesElement({
    name: "Mountainfall Ki Focus +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9560",
    source: "Psionic Power",
    categories: ["Mountainfall Ki Focus +6", "ID_FMP_MAGIC_ITEM_9560"],
    rules: function(model) {
      model.statadd("Damage Rolls(Mountainfall Ki Focus +6)", function() { /* against prone and immobilized targets */ return 6; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Nimble Shoes (paragon tier)"] = new engine.RulesElement({
    name: "Nimble Shoes (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9662",
    source: "Psionic Power",
    categories: ["Nimble Shoes (paragon tier)", "ID_FMP_MAGIC_ITEM_9662"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Ghostbane Triumph +2"] = new engine.RulesElement({
    name: "Orb of Ghostbane Triumph +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9619",
    source: "Psionic Power",
    categories: ["Orb of Ghostbane Triumph +2", "ID_FMP_MAGIC_ITEM_9619"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Ghostbane Triumph +3"] = new engine.RulesElement({
    name: "Orb of Ghostbane Triumph +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9620",
    source: "Psionic Power",
    categories: ["Orb of Ghostbane Triumph +3", "ID_FMP_MAGIC_ITEM_9620"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Ghostbane Triumph +4"] = new engine.RulesElement({
    name: "Orb of Ghostbane Triumph +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9621",
    source: "Psionic Power",
    categories: ["Orb of Ghostbane Triumph +4", "ID_FMP_MAGIC_ITEM_9621"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Ghostbane Triumph +5"] = new engine.RulesElement({
    name: "Orb of Ghostbane Triumph +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9622",
    source: "Psionic Power",
    categories: ["Orb of Ghostbane Triumph +5", "ID_FMP_MAGIC_ITEM_9622"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Ghostbane Triumph +6"] = new engine.RulesElement({
    name: "Orb of Ghostbane Triumph +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9623",
    source: "Psionic Power",
    categories: ["Orb of Ghostbane Triumph +6", "ID_FMP_MAGIC_ITEM_9623"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Stored Energy +1"] = new engine.RulesElement({
    name: "Orb of Stored Energy +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9624",
    source: "Psionic Power",
    categories: ["Orb of Stored Energy +1", "ID_FMP_MAGIC_ITEM_9624"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Stored Energy +2"] = new engine.RulesElement({
    name: "Orb of Stored Energy +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9625",
    source: "Psionic Power",
    categories: ["Orb of Stored Energy +2", "ID_FMP_MAGIC_ITEM_9625"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Stored Energy +3"] = new engine.RulesElement({
    name: "Orb of Stored Energy +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9626",
    source: "Psionic Power",
    categories: ["Orb of Stored Energy +3", "ID_FMP_MAGIC_ITEM_9626"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Stored Energy +4"] = new engine.RulesElement({
    name: "Orb of Stored Energy +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9627",
    source: "Psionic Power",
    categories: ["Orb of Stored Energy +4", "ID_FMP_MAGIC_ITEM_9627"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Stored Energy +5"] = new engine.RulesElement({
    name: "Orb of Stored Energy +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9628",
    source: "Psionic Power",
    categories: ["Orb of Stored Energy +5", "ID_FMP_MAGIC_ITEM_9628"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Orb of Stored Energy +6"] = new engine.RulesElement({
    name: "Orb of Stored Energy +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9629",
    source: "Psionic Power",
    categories: ["Orb of Stored Energy +6", "ID_FMP_MAGIC_ITEM_9629"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Phrenic Armor +1"] = new engine.RulesElement({
    name: "Phrenic Armor +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9591",
    source: "Psionic Power",
    categories: ["Phrenic Armor +1", "ID_FMP_MAGIC_ITEM_9591"],
    rules: function(model) {
      model.statadd("resist:psychic", 5, "resist");
      model.statadd("Armor Class", 1, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Phrenic Armor +2"] = new engine.RulesElement({
    name: "Phrenic Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9592",
    source: "Psionic Power",
    categories: ["Phrenic Armor +2", "ID_FMP_MAGIC_ITEM_9592"],
    rules: function(model) {
      model.statadd("resist:psychic", 5, "resist");
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Phrenic Armor +3"] = new engine.RulesElement({
    name: "Phrenic Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9593",
    source: "Psionic Power",
    categories: ["Phrenic Armor +3", "ID_FMP_MAGIC_ITEM_9593"],
    rules: function(model) {
      model.statadd("resist:psychic", 5, "resist");
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Phrenic Armor +4"] = new engine.RulesElement({
    name: "Phrenic Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9594",
    source: "Psionic Power",
    categories: ["Phrenic Armor +4", "ID_FMP_MAGIC_ITEM_9594"],
    rules: function(model) {
      model.statadd("resist:psychic", 5, "resist");
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Phrenic Armor +5"] = new engine.RulesElement({
    name: "Phrenic Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9595",
    source: "Psionic Power",
    categories: ["Phrenic Armor +5", "ID_FMP_MAGIC_ITEM_9595"],
    rules: function(model) {
      model.statadd("resist:psychic", 5, "resist");
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Phrenic Armor +6"] = new engine.RulesElement({
    name: "Phrenic Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9596",
    source: "Psionic Power",
    categories: ["Phrenic Armor +6", "ID_FMP_MAGIC_ITEM_9596"],
    rules: function(model) {
      model.statadd("resist:psychic", 5, "resist");
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Psyweave Cloak +1"] = new engine.RulesElement({
    name: "Psyweave Cloak +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9674",
    source: "Psionic Power",
    categories: ["Psyweave Cloak +1", "ID_FMP_MAGIC_ITEM_9674"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 1, "Enhancement");
      model.statadd("Reflex Defense", 1, "Enhancement");
      model.statadd("Will Defense", 1, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Psyweave Cloak +2"] = new engine.RulesElement({
    name: "Psyweave Cloak +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9675",
    source: "Psionic Power",
    categories: ["Psyweave Cloak +2", "ID_FMP_MAGIC_ITEM_9675"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 2, "Enhancement");
      model.statadd("Reflex Defense", 2, "Enhancement");
      model.statadd("Will Defense", 2, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Psyweave Cloak +3"] = new engine.RulesElement({
    name: "Psyweave Cloak +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9676",
    source: "Psionic Power",
    categories: ["Psyweave Cloak +3", "ID_FMP_MAGIC_ITEM_9676"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 3, "Enhancement");
      model.statadd("Reflex Defense", 3, "Enhancement");
      model.statadd("Will Defense", 3, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Psyweave Cloak +4"] = new engine.RulesElement({
    name: "Psyweave Cloak +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9677",
    source: "Psionic Power",
    categories: ["Psyweave Cloak +4", "ID_FMP_MAGIC_ITEM_9677"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 4, "Enhancement");
      model.statadd("Reflex Defense", 4, "Enhancement");
      model.statadd("Will Defense", 4, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Psyweave Cloak +5"] = new engine.RulesElement({
    name: "Psyweave Cloak +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9678",
    source: "Psionic Power",
    categories: ["Psyweave Cloak +5", "ID_FMP_MAGIC_ITEM_9678"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 5, "Enhancement");
      model.statadd("Reflex Defense", 5, "Enhancement");
      model.statadd("Will Defense", 5, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Psyweave Cloak +6"] = new engine.RulesElement({
    name: "Psyweave Cloak +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9679",
    source: "Psionic Power",
    categories: ["Psyweave Cloak +6", "ID_FMP_MAGIC_ITEM_9679"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 6, "Enhancement");
      model.statadd("Reflex Defense", 6, "Enhancement");
      model.statadd("Will Defense", 6, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Severing Weapon +2"] = new engine.RulesElement({
    name: "Severing Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9614",
    source: "Psionic Power",
    categories: ["Severing Weapon +2", "ID_FMP_MAGIC_ITEM_9614"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Severing Weapon +3"] = new engine.RulesElement({
    name: "Severing Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9615",
    source: "Psionic Power",
    categories: ["Severing Weapon +3", "ID_FMP_MAGIC_ITEM_9615"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Severing Weapon +4"] = new engine.RulesElement({
    name: "Severing Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9616",
    source: "Psionic Power",
    categories: ["Severing Weapon +4", "ID_FMP_MAGIC_ITEM_9616"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Severing Weapon +5"] = new engine.RulesElement({
    name: "Severing Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9617",
    source: "Psionic Power",
    categories: ["Severing Weapon +5", "ID_FMP_MAGIC_ITEM_9617"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Severing Weapon +6"] = new engine.RulesElement({
    name: "Severing Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9618",
    source: "Psionic Power",
    categories: ["Severing Weapon +6", "ID_FMP_MAGIC_ITEM_9618"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Shaper's Armor +1"] = new engine.RulesElement({
    name: "Shaper's Armor +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9597",
    source: "Psionic Power",
    categories: ["Shaper's Armor +1", "ID_FMP_MAGIC_ITEM_9597"],
    rules: function(model) {
      model.statadd("Armor Class", 1, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Shaper's Armor +2"] = new engine.RulesElement({
    name: "Shaper's Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9598",
    source: "Psionic Power",
    categories: ["Shaper's Armor +2", "ID_FMP_MAGIC_ITEM_9598"],
    rules: function(model) {
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Shaper's Armor +3"] = new engine.RulesElement({
    name: "Shaper's Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9599",
    source: "Psionic Power",
    categories: ["Shaper's Armor +3", "ID_FMP_MAGIC_ITEM_9599"],
    rules: function(model) {
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Shaper's Armor +4"] = new engine.RulesElement({
    name: "Shaper's Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9600",
    source: "Psionic Power",
    categories: ["Shaper's Armor +4", "ID_FMP_MAGIC_ITEM_9600"],
    rules: function(model) {
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Shaper's Armor +5"] = new engine.RulesElement({
    name: "Shaper's Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9601",
    source: "Psionic Power",
    categories: ["Shaper's Armor +5", "ID_FMP_MAGIC_ITEM_9601"],
    rules: function(model) {
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Shaper's Armor +6"] = new engine.RulesElement({
    name: "Shaper's Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9602",
    source: "Psionic Power",
    categories: ["Shaper's Armor +6", "ID_FMP_MAGIC_ITEM_9602"],
    rules: function(model) {
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Skating Boots (paragon tier)"] = new engine.RulesElement({
    name: "Skating Boots (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9663",
    source: "Psionic Power",
    categories: ["Skating Boots (paragon tier)", "ID_FMP_MAGIC_ITEM_9663"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Aggressive Thoughts +1"] = new engine.RulesElement({
    name: "Staff of Aggressive Thoughts +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9630",
    source: "Psionic Power",
    categories: ["Staff of Aggressive Thoughts +1", "ID_FMP_MAGIC_ITEM_9630"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Aggressive Thoughts +2"] = new engine.RulesElement({
    name: "Staff of Aggressive Thoughts +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9631",
    source: "Psionic Power",
    categories: ["Staff of Aggressive Thoughts +2", "ID_FMP_MAGIC_ITEM_9631"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Aggressive Thoughts +3"] = new engine.RulesElement({
    name: "Staff of Aggressive Thoughts +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9632",
    source: "Psionic Power",
    categories: ["Staff of Aggressive Thoughts +3", "ID_FMP_MAGIC_ITEM_9632"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Aggressive Thoughts +4"] = new engine.RulesElement({
    name: "Staff of Aggressive Thoughts +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9633",
    source: "Psionic Power",
    categories: ["Staff of Aggressive Thoughts +4", "ID_FMP_MAGIC_ITEM_9633"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Aggressive Thoughts +5"] = new engine.RulesElement({
    name: "Staff of Aggressive Thoughts +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9634",
    source: "Psionic Power",
    categories: ["Staff of Aggressive Thoughts +5", "ID_FMP_MAGIC_ITEM_9634"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Aggressive Thoughts +6"] = new engine.RulesElement({
    name: "Staff of Aggressive Thoughts +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9635",
    source: "Psionic Power",
    categories: ["Staff of Aggressive Thoughts +6", "ID_FMP_MAGIC_ITEM_9635"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Bitter Dismissal +2"] = new engine.RulesElement({
    name: "Staff of Bitter Dismissal +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9636",
    source: "Psionic Power",
    categories: ["Staff of Bitter Dismissal +2", "ID_FMP_MAGIC_ITEM_9636"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Bitter Dismissal +3"] = new engine.RulesElement({
    name: "Staff of Bitter Dismissal +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9637",
    source: "Psionic Power",
    categories: ["Staff of Bitter Dismissal +3", "ID_FMP_MAGIC_ITEM_9637"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Bitter Dismissal +4"] = new engine.RulesElement({
    name: "Staff of Bitter Dismissal +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9638",
    source: "Psionic Power",
    categories: ["Staff of Bitter Dismissal +4", "ID_FMP_MAGIC_ITEM_9638"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Bitter Dismissal +5"] = new engine.RulesElement({
    name: "Staff of Bitter Dismissal +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9639",
    source: "Psionic Power",
    categories: ["Staff of Bitter Dismissal +5", "ID_FMP_MAGIC_ITEM_9639"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Bitter Dismissal +6"] = new engine.RulesElement({
    name: "Staff of Bitter Dismissal +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9640",
    source: "Psionic Power",
    categories: ["Staff of Bitter Dismissal +6", "ID_FMP_MAGIC_ITEM_9640"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Punishing Thoughts +1"] = new engine.RulesElement({
    name: "Staff of Punishing Thoughts +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9641",
    source: "Psionic Power",
    categories: ["Staff of Punishing Thoughts +1", "ID_FMP_MAGIC_ITEM_9641"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Punishing Thoughts +2"] = new engine.RulesElement({
    name: "Staff of Punishing Thoughts +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9642",
    source: "Psionic Power",
    categories: ["Staff of Punishing Thoughts +2", "ID_FMP_MAGIC_ITEM_9642"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Punishing Thoughts +3"] = new engine.RulesElement({
    name: "Staff of Punishing Thoughts +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9643",
    source: "Psionic Power",
    categories: ["Staff of Punishing Thoughts +3", "ID_FMP_MAGIC_ITEM_9643"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Punishing Thoughts +4"] = new engine.RulesElement({
    name: "Staff of Punishing Thoughts +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9644",
    source: "Psionic Power",
    categories: ["Staff of Punishing Thoughts +4", "ID_FMP_MAGIC_ITEM_9644"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Punishing Thoughts +5"] = new engine.RulesElement({
    name: "Staff of Punishing Thoughts +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9645",
    source: "Psionic Power",
    categories: ["Staff of Punishing Thoughts +5", "ID_FMP_MAGIC_ITEM_9645"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Punishing Thoughts +6"] = new engine.RulesElement({
    name: "Staff of Punishing Thoughts +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9646",
    source: "Psionic Power",
    categories: ["Staff of Punishing Thoughts +6", "ID_FMP_MAGIC_ITEM_9646"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Scourging Revelation +1"] = new engine.RulesElement({
    name: "Staff of Scourging Revelation +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9647",
    source: "Psionic Power",
    categories: ["Staff of Scourging Revelation +1", "ID_FMP_MAGIC_ITEM_9647"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Scourging Revelation +2"] = new engine.RulesElement({
    name: "Staff of Scourging Revelation +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9648",
    source: "Psionic Power",
    categories: ["Staff of Scourging Revelation +2", "ID_FMP_MAGIC_ITEM_9648"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Scourging Revelation +3"] = new engine.RulesElement({
    name: "Staff of Scourging Revelation +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9649",
    source: "Psionic Power",
    categories: ["Staff of Scourging Revelation +3", "ID_FMP_MAGIC_ITEM_9649"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Scourging Revelation +4"] = new engine.RulesElement({
    name: "Staff of Scourging Revelation +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9650",
    source: "Psionic Power",
    categories: ["Staff of Scourging Revelation +4", "ID_FMP_MAGIC_ITEM_9650"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Scourging Revelation +5"] = new engine.RulesElement({
    name: "Staff of Scourging Revelation +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9651",
    source: "Psionic Power",
    categories: ["Staff of Scourging Revelation +5", "ID_FMP_MAGIC_ITEM_9651"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Staff of Scourging Revelation +6"] = new engine.RulesElement({
    name: "Staff of Scourging Revelation +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9652",
    source: "Psionic Power",
    categories: ["Staff of Scourging Revelation +6", "ID_FMP_MAGIC_ITEM_9652"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Thunderfist Ki Focus +1"] = new engine.RulesElement({
    name: "Thunderfist Ki Focus +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9561",
    source: "Psionic Power",
    categories: ["Thunderfist Ki Focus +1", "ID_FMP_MAGIC_ITEM_9561"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Thunderfist Ki Focus +2"] = new engine.RulesElement({
    name: "Thunderfist Ki Focus +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9562",
    source: "Psionic Power",
    categories: ["Thunderfist Ki Focus +2", "ID_FMP_MAGIC_ITEM_9562"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Thunderfist Ki Focus +3"] = new engine.RulesElement({
    name: "Thunderfist Ki Focus +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9563",
    source: "Psionic Power",
    categories: ["Thunderfist Ki Focus +3", "ID_FMP_MAGIC_ITEM_9563"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Thunderfist Ki Focus +4"] = new engine.RulesElement({
    name: "Thunderfist Ki Focus +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9564",
    source: "Psionic Power",
    categories: ["Thunderfist Ki Focus +4", "ID_FMP_MAGIC_ITEM_9564"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Thunderfist Ki Focus +5"] = new engine.RulesElement({
    name: "Thunderfist Ki Focus +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9565",
    source: "Psionic Power",
    categories: ["Thunderfist Ki Focus +5", "ID_FMP_MAGIC_ITEM_9565"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Thunderfist Ki Focus +6"] = new engine.RulesElement({
    name: "Thunderfist Ki Focus +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_9566",
    source: "Psionic Power",
    categories: ["Thunderfist Ki Focus +6", "ID_FMP_MAGIC_ITEM_9566"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
