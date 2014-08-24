(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Aasterinian's Hall (paragon tier)"] = new RulesElement({
    name: "Aasterinian's Hall (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8495",
    source: "Dragon Magazine 383",
    categories: ["Aasterinian's Hall (paragon tier)", "ID_FMP_MAGIC_ITEM_8495"],
    rules: function(model) {
      model.statadd("Action Point", "Aasterinian's Hall (paragon tier):After you spend 24 hours meditating in the hall, the next time you spend an action point to make an attack before your next extended rest, you score critical hits with that attack on a roll of 19 or 20");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Adamantine Cradle (paragon tier)"] = new RulesElement({
    name: "Adamantine Cradle (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8497",
    source: "Dragon Magazine 383",
    categories: ["Adamantine Cradle (paragon tier)", "ID_FMP_MAGIC_ITEM_8497"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Aldron's Firebox (heroic tier)"] = new RulesElement({
    name: "Aldron's Firebox (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8508",
    source: "Dragon Magazine 383",
    categories: ["Aldron's Firebox (heroic tier)", "ID_FMP_MAGIC_ITEM_8508"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Beacon of Erathis +1"] = new RulesElement({
    name: "Beacon of Erathis +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8515",
    source: "Dragon Magazine 383",
    categories: ["Beacon of Erathis +1", "ID_FMP_MAGIC_ITEM_8515"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Beacon of Erathis +2"] = new RulesElement({
    name: "Beacon of Erathis +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8516",
    source: "Dragon Magazine 383",
    categories: ["Beacon of Erathis +2", "ID_FMP_MAGIC_ITEM_8516"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Beacon of Erathis +3"] = new RulesElement({
    name: "Beacon of Erathis +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8517",
    source: "Dragon Magazine 383",
    categories: ["Beacon of Erathis +3", "ID_FMP_MAGIC_ITEM_8517"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Beacon of Erathis +4"] = new RulesElement({
    name: "Beacon of Erathis +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8518",
    source: "Dragon Magazine 383",
    categories: ["Beacon of Erathis +4", "ID_FMP_MAGIC_ITEM_8518"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Beacon of Erathis +5"] = new RulesElement({
    name: "Beacon of Erathis +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8519",
    source: "Dragon Magazine 383",
    categories: ["Beacon of Erathis +5", "ID_FMP_MAGIC_ITEM_8519"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Beacon of Erathis +6"] = new RulesElement({
    name: "Beacon of Erathis +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8520",
    source: "Dragon Magazine 383",
    categories: ["Beacon of Erathis +6", "ID_FMP_MAGIC_ITEM_8520"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Burrow-Ward Blade (heroic tier)"] = new RulesElement({
    name: "Burrow-Ward Blade (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8491",
    source: "Dragon Magazine 383",
    categories: ["Burrow-Ward Blade (heroic tier)", "ID_FMP_MAGIC_ITEM_8491"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Dazzling Showcase (paragon tier)"] = new RulesElement({
    name: "Dazzling Showcase (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8500",
    source: "Dragon Magazine 383",
    categories: ["Dazzling Showcase (paragon tier)", "ID_FMP_MAGIC_ITEM_8500"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Exchequer's Ledger (heroic tier)"] = new RulesElement({
    name: "Exchequer's Ledger (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8488",
    source: "Dragon Magazine 383",
    categories: ["Exchequer's Ledger (heroic tier)", "ID_FMP_MAGIC_ITEM_8488"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Fey Flute (paragon tier)"] = new RulesElement({
    name: "Fey Flute (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8505",
    source: "Dragon Magazine 383",
    categories: ["Fey Flute (paragon tier)", "ID_FMP_MAGIC_ITEM_8505"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Forester's Axe +1"] = new RulesElement({
    name: "Forester's Axe +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8509",
    source: "Dragon Magazine 383",
    categories: ["Forester's Axe +1", "ID_FMP_MAGIC_ITEM_8509"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Forester's Axe +2"] = new RulesElement({
    name: "Forester's Axe +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8510",
    source: "Dragon Magazine 383",
    categories: ["Forester's Axe +2", "ID_FMP_MAGIC_ITEM_8510"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Forester's Axe +3"] = new RulesElement({
    name: "Forester's Axe +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8511",
    source: "Dragon Magazine 383",
    categories: ["Forester's Axe +3", "ID_FMP_MAGIC_ITEM_8511"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Forester's Axe +4"] = new RulesElement({
    name: "Forester's Axe +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8512",
    source: "Dragon Magazine 383",
    categories: ["Forester's Axe +4", "ID_FMP_MAGIC_ITEM_8512"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Forester's Axe +5"] = new RulesElement({
    name: "Forester's Axe +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8513",
    source: "Dragon Magazine 383",
    categories: ["Forester's Axe +5", "ID_FMP_MAGIC_ITEM_8513"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Forester's Axe +6"] = new RulesElement({
    name: "Forester's Axe +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8514",
    source: "Dragon Magazine 383",
    categories: ["Forester's Axe +6", "ID_FMP_MAGIC_ITEM_8514"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Gem-Studded Idol (epic tier)"] = new RulesElement({
    name: "Gem-Studded Idol (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8501",
    source: "Dragon Magazine 383",
    categories: ["Gem-Studded Idol (epic tier)", "ID_FMP_MAGIC_ITEM_8501"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Gilded Cage (epic tier)"] = new RulesElement({
    name: "Gilded Cage (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8498",
    source: "Dragon Magazine 383",
    categories: ["Gilded Cage (epic tier)", "ID_FMP_MAGIC_ITEM_8498"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Globe of Projection (paragon tier)"] = new RulesElement({
    name: "Globe of Projection (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8492",
    source: "Dragon Magazine 383",
    categories: ["Globe of Projection (paragon tier)", "ID_FMP_MAGIC_ITEM_8492"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Immurement of the Jealous Keeper (epic tier)"] = new RulesElement({
    name: "Immurement of the Jealous Keeper (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8503",
    source: "Dragon Magazine 383",
    categories: ["Immurement of the Jealous Keeper (epic tier)", "ID_FMP_MAGIC_ITEM_8503"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Invigorating Coins (paragon tier)"] = new RulesElement({
    name: "Invigorating Coins (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8489",
    source: "Dragon Magazine 383",
    categories: ["Invigorating Coins (paragon tier)", "ID_FMP_MAGIC_ITEM_8489"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Loadstone Vault (paragon tier)"] = new RulesElement({
    name: "Loadstone Vault (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8493",
    source: "Dragon Magazine 383",
    categories: ["Loadstone Vault (paragon tier)", "ID_FMP_MAGIC_ITEM_8493"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Magnificent Tapestry (paragon tier)"] = new RulesElement({
    name: "Magnificent Tapestry (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8490",
    source: "Dragon Magazine 383",
    categories: ["Magnificent Tapestry (paragon tier)", "ID_FMP_MAGIC_ITEM_8490"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mighty Armory (epic tier)"] = new RulesElement({
    name: "Mighty Armory (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8502",
    source: "Dragon Magazine 383",
    categories: ["Mighty Armory (epic tier)", "ID_FMP_MAGIC_ITEM_8502"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mithral Maze (epic tier)"] = new RulesElement({
    name: "Mithral Maze (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8499",
    source: "Dragon Magazine 383",
    categories: ["Mithral Maze (epic tier)", "ID_FMP_MAGIC_ITEM_8499"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Rhythmic War Drums (paragon tier)"] = new RulesElement({
    name: "Rhythmic War Drums (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8507",
    source: "Dragon Magazine 383",
    categories: ["Rhythmic War Drums (paragon tier)", "ID_FMP_MAGIC_ITEM_8507"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Sanctum of Astilabor (paragon tier)"] = new RulesElement({
    name: "Sanctum of Astilabor (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8496",
    source: "Dragon Magazine 383",
    categories: ["Sanctum of Astilabor (paragon tier)", "ID_FMP_MAGIC_ITEM_8496"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Scepter of Bane +1"] = new RulesElement({
    name: "Scepter of Bane +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8521",
    source: "Dragon Magazine 383",
    categories: ["Scepter of Bane +1", "ID_FMP_MAGIC_ITEM_8521"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Scepter of Bane +2"] = new RulesElement({
    name: "Scepter of Bane +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8522",
    source: "Dragon Magazine 383",
    categories: ["Scepter of Bane +2", "ID_FMP_MAGIC_ITEM_8522"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Scepter of Bane +3"] = new RulesElement({
    name: "Scepter of Bane +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8523",
    source: "Dragon Magazine 383",
    categories: ["Scepter of Bane +3", "ID_FMP_MAGIC_ITEM_8523"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Scepter of Bane +4"] = new RulesElement({
    name: "Scepter of Bane +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8524",
    source: "Dragon Magazine 383",
    categories: ["Scepter of Bane +4", "ID_FMP_MAGIC_ITEM_8524"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Scepter of Bane +5"] = new RulesElement({
    name: "Scepter of Bane +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8525",
    source: "Dragon Magazine 383",
    categories: ["Scepter of Bane +5", "ID_FMP_MAGIC_ITEM_8525"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Scepter of Bane +6"] = new RulesElement({
    name: "Scepter of Bane +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8526",
    source: "Dragon Magazine 383",
    categories: ["Scepter of Bane +6", "ID_FMP_MAGIC_ITEM_8526"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Sitar of Restfulness (heroic tier)"] = new RulesElement({
    name: "Sitar of Restfulness (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8506",
    source: "Dragon Magazine 383",
    categories: ["Sitar of Restfulness (heroic tier)", "ID_FMP_MAGIC_ITEM_8506"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Wandering Trove (epic tier)"] = new RulesElement({
    name: "Wandering Trove (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8494",
    source: "Dragon Magazine 383",
    categories: ["Wandering Trove (epic tier)", "ID_FMP_MAGIC_ITEM_8494"]
  });
  byID[te.id] = te;
  
  
})(this);
