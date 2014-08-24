(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Ashurta's Blade +2"] = new RulesElement({
    name: "Ashurta's Blade +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7178",
    source: "Seekers of the Ashen Crown",
    categories: ["Ashurta's Blade +2", "ID_FMP_MAGIC_ITEM_7178"],
    rules: function(model) {
      model.statadd("AC", function() { /* against the attacks of aberrant creatures */ return 1; }, "item");
      model.statadd("Fortitude Defense", function() { /* against the attacks of aberrant creatures */ return 1; }, "item");
      model.statadd("Will Defense", function() { /* against the attacks of aberrant creatures */ return 1; }, "item");
      model.statadd("Reflex Defense", function() { /* against the attacks of aberrant creatures */ return 1; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Byeshk Weapon +1"] = new RulesElement({
    name: "Byeshk Weapon +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7204",
    source: "Seekers of the Ashen Crown",
    categories: ["Byeshk Weapon +1", "ID_FMP_MAGIC_ITEM_7204"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Byeshk Weapon +2"] = new RulesElement({
    name: "Byeshk Weapon +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7216",
    source: "Seekers of the Ashen Crown",
    categories: ["Byeshk Weapon +2", "ID_FMP_MAGIC_ITEM_7216"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Byeshk Weapon +3"] = new RulesElement({
    name: "Byeshk Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7217",
    source: "Seekers of the Ashen Crown",
    categories: ["Byeshk Weapon +3", "ID_FMP_MAGIC_ITEM_7217"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Byeshk Weapon +4"] = new RulesElement({
    name: "Byeshk Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7218",
    source: "Seekers of the Ashen Crown",
    categories: ["Byeshk Weapon +4", "ID_FMP_MAGIC_ITEM_7218"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Byeshk Weapon +5"] = new RulesElement({
    name: "Byeshk Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7219",
    source: "Seekers of the Ashen Crown",
    categories: ["Byeshk Weapon +5", "ID_FMP_MAGIC_ITEM_7219"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Byeshk Weapon +6"] = new RulesElement({
    name: "Byeshk Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7220",
    source: "Seekers of the Ashen Crown",
    categories: ["Byeshk Weapon +6", "ID_FMP_MAGIC_ITEM_7220"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Demise's Staff of Ruin +2"] = new RulesElement({
    name: "Demise's Staff of Ruin +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7222",
    source: "Seekers of the Ashen Crown",
    categories: ["Demise's Staff of Ruin +2", "ID_FMP_MAGIC_ITEM_7222"],
    rules: function(model) {
      model.statadd("implement:damage(Demise's Staff of Ruin +2)", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["False Blood Amulet +2"] = new RulesElement({
    name: "False Blood Amulet +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7224",
    source: "Seekers of the Ashen Crown",
    categories: ["False Blood Amulet +2", "ID_FMP_MAGIC_ITEM_7224"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 2, "Enhancement");
      model.statadd("Reflex Defense", 2, "Enhancement");
      model.statadd("Will Defense", 2, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Karruuk's Circlet (heroic tier)"] = new RulesElement({
    name: "Karruuk's Circlet (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7168",
    source: "Seekers of the Ashen Crown",
    categories: ["Karruuk's Circlet (heroic tier)", "ID_FMP_MAGIC_ITEM_7168"],
    rules: function(model) {
      model.statadd("Arcana Misc", 2, "item");
      model.statadd("History Misc", 2, "item");
      model.statadd("Religion Misc", 2, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Lesser Elixir of Invisibility (heroic tier)"] = new RulesElement({
    name: "Lesser Elixir of Invisibility (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7228",
    source: "Seekers of the Ashen Crown",
    categories: ["Lesser Elixir of Invisibility (heroic tier)", "ID_FMP_MAGIC_ITEM_7228"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Lurtaan's Cord (heroic tier)"] = new RulesElement({
    name: "Lurtaan's Cord (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7196",
    source: "Seekers of the Ashen Crown",
    categories: ["Lurtaan's Cord (heroic tier)", "ID_FMP_MAGIC_ITEM_7196"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Murkoorak's Orb +2"] = new RulesElement({
    name: "Murkoorak's Orb +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7200",
    source: "Seekers of the Ashen Crown",
    categories: ["Murkoorak's Orb +2", "ID_FMP_MAGIC_ITEM_7200"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Shadowdance Armor +1"] = new RulesElement({
    name: "Shadowdance Armor +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7230",
    source: "Seekers of the Ashen Crown",
    categories: ["Shadowdance Armor +1", "ID_FMP_MAGIC_ITEM_7230"],
    rules: function(model) {
      model.statadd("Armor Class", 1, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Shadowdance Armor +2"] = new RulesElement({
    name: "Shadowdance Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7233",
    source: "Seekers of the Ashen Crown",
    categories: ["Shadowdance Armor +2", "ID_FMP_MAGIC_ITEM_7233"],
    rules: function(model) {
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Shadowdance Armor +3"] = new RulesElement({
    name: "Shadowdance Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7234",
    source: "Seekers of the Ashen Crown",
    categories: ["Shadowdance Armor +3", "ID_FMP_MAGIC_ITEM_7234"],
    rules: function(model) {
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Shadowdance Armor +4"] = new RulesElement({
    name: "Shadowdance Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7235",
    source: "Seekers of the Ashen Crown",
    categories: ["Shadowdance Armor +4", "ID_FMP_MAGIC_ITEM_7235"],
    rules: function(model) {
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Shadowdance Armor +5"] = new RulesElement({
    name: "Shadowdance Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7236",
    source: "Seekers of the Ashen Crown",
    categories: ["Shadowdance Armor +5", "ID_FMP_MAGIC_ITEM_7236"],
    rules: function(model) {
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Shadowdance Armor +6"] = new RulesElement({
    name: "Shadowdance Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7237",
    source: "Seekers of the Ashen Crown",
    categories: ["Shadowdance Armor +6", "ID_FMP_MAGIC_ITEM_7237"],
    rules: function(model) {
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["The Ashen Crown"] = new RulesElement({
    name: "The Ashen Crown",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7111",
    source: "Seekers of the Ashen Crown",
    categories: ["The Ashen Crown", "ID_FMP_MAGIC_ITEM_7111"],
    rules: function(model) {
      model.statadd("Arcana Misc", 2, "item");
      model.statadd("History Misc", 2, "item");
      model.statadd("Religion Misc", 2, "item");
      model.statadd("AC", function() { /* against the attacks of aberrant creatures */ return 2; }, "item");
      model.statadd("Fortitude Defense", function() { /* against the attacks of aberrant creatures */ return 2; }, "item");
      model.statadd("Will Defense", function() { /* against the attacks of aberrant creatures */ return 2; }, "item");
      model.statadd("Reflex Defense", function() { /* against the attacks of aberrant creatures */ return 2; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Zaarani's Solitaire (heroic tier)"] = new RulesElement({
    name: "Zaarani's Solitaire (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_7184",
    source: "Seekers of the Ashen Crown",
    categories: ["Zaarani's Solitaire (heroic tier)", "ID_FMP_MAGIC_ITEM_7184"]
  });
  byID[te.id] = te;
  
  
})(this);
