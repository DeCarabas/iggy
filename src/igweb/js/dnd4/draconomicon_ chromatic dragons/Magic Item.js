(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Blue Orb of Dragonkind"] = new RulesElement({
    name: "Blue Orb of Dragonkind",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4322",
    source: "Draconomicon: Chromatic Dragons",
    categories: ["Blue Orb of Dragonkind", "ID_FMP_MAGIC_ITEM_4322"],
    rules: function(model) {
      model.statadd("push:attack", 1, "Blue Orb of Dragonkind");
      model.statadd("lightning:attack", 1, "Blue Orb of Dragonkind");
      model.grant(elements.id["ID_FMP_LANGUAGE_2"]);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ilthuviel's Blackened Heart"] = new RulesElement({
    name: "Ilthuviel's Blackened Heart",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4321",
    source: "Draconomicon: Chromatic Dragons",
    categories: ["Ilthuviel's Blackened Heart", "ID_FMP_MAGIC_ITEM_4321"],
    rules: function(model) {
      model.statadd("Ilthuviel's Blackened Heart", 10, "Ilthuviel's Blackened Heart");
      model.statadd("resist:poison", function() { return model.stat("Ilthuviel's Blackened Heart"); }, "resist");
      model.grant(elements.id["ID_FMP_LANGUAGE_2"]);
      model.statadd("Fortitude Defense", 4, "Enhancement");
      model.statadd("Reflex Defense", 4, "Enhancement");
      model.statadd("Will Defense", 4, "Enhancement");
      model.grant(elements.id["ID_FMP_POWER_1312"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Spear of Urrok the Brave"] = new RulesElement({
    name: "Spear of Urrok the Brave",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4323",
    source: "Draconomicon: Chromatic Dragons",
    categories: ["Spear of Urrok the Brave", "ID_FMP_MAGIC_ITEM_4323"],
    rules: function(model) {
      model.statadd("resist:dragon breath", 5, "resist");
      model.grant(elements.id["ID_FMP_POWER_1026"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Unconquered Standard of Arkhosia"] = new RulesElement({
    name: "Unconquered Standard of Arkhosia",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4324",
    source: "Draconomicon: Chromatic Dragons",
    categories: ["Unconquered Standard of Arkhosia", "ID_FMP_MAGIC_ITEM_4324"],
    rules: function(model) {
      model.statadd("AC", function() { /* when bloodied and in range of the Unconquered Standard of Arkhosia */ return 2; });
      model.statadd("Saving Throws", function() { /* when bloodied and in range of the Unconquered Standard of Arkhosia */ return 2; });
      model.statadd("ALLY.AC", function() { /* when bloodied and in range of the Unconquered Standard of Arkhosia */ return 2; });
      model.statadd("ALLY.Saving Throws", function() { /* when bloodied and in range of the Unconquered Standard of Arkhosia */ return 2; });
      model.statadd("Healing Surge Value", function() { /* when in range of the Unconquered Standard of Arkhosia */ return model.stat("Constitution modifier"); });
      model.statadd("ALLY.Healing Surge Value", function() { /* when in range of the Unconquered Standard of Arkhosia */ return model.stat("Constitution modifier"); });
      model.statadd("Healing Surge Value", function() { /* when in range of the Unconquered Standard of Arkhosia */ return 2; });
      model.statadd("ALLY.Healing Surge Value", function() { /* dragonborn when in range of the Unconquered Standard of Arkhosia */ return 2; });
      model.statadd("Death Saving Throws", function() { /* when in range of the Unconquered Standard of Arkhosia */ return 1; });
      model.statadd("ALLY.Death Saving Throws", function() { /* when in range of the Unconquered Standard of Arkhosia */ return 1; });
      model.statadd("resist:fire", function() { /* when in range of the Unconquered Standard of Arkhosia */ return 5; }, "resist");
      model.statadd("ALLY.resist:fire", function() { /* when in range of the Unconquered Standard of Arkhosia */ return 5; }, "resist");
      model.grant(elements.id["ID_FMP_POWER_1559"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  
})(this);
