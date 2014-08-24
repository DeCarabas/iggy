(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Baldric of Dividing Ranks (epic tier)"] = new RulesElement({
    name: "Baldric of Dividing Ranks (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4527",
    source: "Dragon Magazine 369",
    categories: ["Baldric of Dividing Ranks (epic tier)", "ID_FMP_MAGIC_ITEM_4527"],
    rules: function(model) {
      model.statadd("AC", function() { /* against the opportunity attacks of minions */ return 6; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Baldric of Dividing Ranks (heroic tier)"] = new RulesElement({
    name: "Baldric of Dividing Ranks (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4525",
    source: "Dragon Magazine 369",
    categories: ["Baldric of Dividing Ranks (heroic tier)", "ID_FMP_MAGIC_ITEM_4525"],
    rules: function(model) {
      model.statadd("AC", function() { /* against the opportunity attacks of minions */ return 2; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Baldric of Dividing Ranks (paragon tier)"] = new RulesElement({
    name: "Baldric of Dividing Ranks (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4526",
    source: "Dragon Magazine 369",
    categories: ["Baldric of Dividing Ranks (paragon tier)", "ID_FMP_MAGIC_ITEM_4526"],
    rules: function(model) {
      model.statadd("AC", function() { /* against the opportunity attacks of minions */ return 4; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Devil's Tongue Polearm +2"] = new RulesElement({
    name: "Devil's Tongue Polearm +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4544",
    source: "Dragon Magazine 369",
    categories: ["Devil's Tongue Polearm +2", "ID_FMP_MAGIC_ITEM_4544"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Devil's Tongue Polearm +3"] = new RulesElement({
    name: "Devil's Tongue Polearm +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4545",
    source: "Dragon Magazine 369",
    categories: ["Devil's Tongue Polearm +3", "ID_FMP_MAGIC_ITEM_4545"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Devil's Tongue Polearm +4"] = new RulesElement({
    name: "Devil's Tongue Polearm +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4546",
    source: "Dragon Magazine 369",
    categories: ["Devil's Tongue Polearm +4", "ID_FMP_MAGIC_ITEM_4546"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Devil's Tongue Polearm +5"] = new RulesElement({
    name: "Devil's Tongue Polearm +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4547",
    source: "Dragon Magazine 369",
    categories: ["Devil's Tongue Polearm +5", "ID_FMP_MAGIC_ITEM_4547"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Devil's Tongue Polearm +6"] = new RulesElement({
    name: "Devil's Tongue Polearm +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4548",
    source: "Dragon Magazine 369",
    categories: ["Devil's Tongue Polearm +6", "ID_FMP_MAGIC_ITEM_4548"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Feral Armor +2"] = new RulesElement({
    name: "Feral Armor +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4496",
    source: "Dragon Magazine 369",
    categories: ["Feral Armor +2", "ID_FMP_MAGIC_ITEM_4496"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(FERAL_ARMOR_CLAW)"]);
      model.statadd("Armor Class", 2, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 2);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Feral Armor +3"] = new RulesElement({
    name: "Feral Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4497",
    source: "Dragon Magazine 369",
    categories: ["Feral Armor +3", "ID_FMP_MAGIC_ITEM_4497"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(FERAL_ARMOR_CLAW)"]);
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Feral Armor +4"] = new RulesElement({
    name: "Feral Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4498",
    source: "Dragon Magazine 369",
    categories: ["Feral Armor +4", "ID_FMP_MAGIC_ITEM_4498"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(FERAL_ARMOR_CLAW)"]);
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Feral Armor +5"] = new RulesElement({
    name: "Feral Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4499",
    source: "Dragon Magazine 369",
    categories: ["Feral Armor +5", "ID_FMP_MAGIC_ITEM_4499"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(FERAL_ARMOR_CLAW)"]);
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Feral Armor +6"] = new RulesElement({
    name: "Feral Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4500",
    source: "Dragon Magazine 369",
    categories: ["Feral Armor +6", "ID_FMP_MAGIC_ITEM_4500"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(FERAL_ARMOR_CLAW)"]);
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Flagon of Ale Procurement (heroic tier)"] = new RulesElement({
    name: "Flagon of Ale Procurement (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4528",
    source: "Dragon Magazine 369",
    categories: ["Flagon of Ale Procurement (heroic tier)", "ID_FMP_MAGIC_ITEM_4528"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Fleetrunner Boots (epic tier)"] = new RulesElement({
    name: "Fleetrunner Boots (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4510",
    source: "Dragon Magazine 369",
    categories: ["Fleetrunner Boots (epic tier)", "ID_FMP_MAGIC_ITEM_4510"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Fleetrunner Boots (heroic tier)"] = new RulesElement({
    name: "Fleetrunner Boots (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4508",
    source: "Dragon Magazine 369",
    categories: ["Fleetrunner Boots (heroic tier)", "ID_FMP_MAGIC_ITEM_4508"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Fleetrunner Boots (paragon tier)"] = new RulesElement({
    name: "Fleetrunner Boots (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4509",
    source: "Dragon Magazine 369",
    categories: ["Fleetrunner Boots (paragon tier)", "ID_FMP_MAGIC_ITEM_4509"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ghoststride Boots (epic tier)"] = new RulesElement({
    name: "Ghoststride Boots (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4513",
    source: "Dragon Magazine 369",
    categories: ["Ghoststride Boots (epic tier)", "ID_FMP_MAGIC_ITEM_4513"],
    rules: function(model) {
      model.statadd("AC", function() { /* while you are running */ return 3; }, "item");
      model.statadd("become insubstantial", function() { /* while you are running */ return 3; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ghoststride Boots (heroic tier)"] = new RulesElement({
    name: "Ghoststride Boots (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4511",
    source: "Dragon Magazine 369",
    categories: ["Ghoststride Boots (heroic tier)", "ID_FMP_MAGIC_ITEM_4511"],
    rules: function(model) {
      model.statadd("AC", function() { /* while you are running */ return 1; }, "item");
      model.statadd("become insubstantial", function() { /* while you are running */ return 1; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Ghoststride Boots (paragon tier)"] = new RulesElement({
    name: "Ghoststride Boots (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4512",
    source: "Dragon Magazine 369",
    categories: ["Ghoststride Boots (paragon tier)", "ID_FMP_MAGIC_ITEM_4512"],
    rules: function(model) {
      model.statadd("AC", function() { /* while you are running */ return 2; }, "item");
      model.statadd("become insubstantial", function() { /* while you are running */ return 2; }, "item");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Giantkind Gloves (epic tier)"] = new RulesElement({
    name: "Giantkind Gloves (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4516",
    source: "Dragon Magazine 369",
    categories: ["Giantkind Gloves (epic tier)", "ID_FMP_MAGIC_ITEM_4516"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Giantkind Gloves (heroic tier)"] = new RulesElement({
    name: "Giantkind Gloves (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4514",
    source: "Dragon Magazine 369",
    categories: ["Giantkind Gloves (heroic tier)", "ID_FMP_MAGIC_ITEM_4514"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Giantkind Gloves (paragon tier)"] = new RulesElement({
    name: "Giantkind Gloves (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4515",
    source: "Dragon Magazine 369",
    categories: ["Giantkind Gloves (paragon tier)", "ID_FMP_MAGIC_ITEM_4515"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mask of the Eye Leech (epic tier)"] = new RulesElement({
    name: "Mask of the Eye Leech (epic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4519",
    source: "Dragon Magazine 369",
    categories: ["Mask of the Eye Leech (epic tier)", "ID_FMP_MAGIC_ITEM_4519"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mask of the Eye Leech (heroic tier)"] = new RulesElement({
    name: "Mask of the Eye Leech (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4517",
    source: "Dragon Magazine 369",
    categories: ["Mask of the Eye Leech (heroic tier)", "ID_FMP_MAGIC_ITEM_4517"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Mask of the Eye Leech (paragon tier)"] = new RulesElement({
    name: "Mask of the Eye Leech (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4518",
    source: "Dragon Magazine 369",
    categories: ["Mask of the Eye Leech (paragon tier)", "ID_FMP_MAGIC_ITEM_4518"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Pact Bow +1"] = new RulesElement({
    name: "Pact Bow +1",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4501",
    source: "Dragon Magazine 369",
    categories: ["Pact Bow +1", "ID_FMP_MAGIC_ITEM_4501"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Pact Bow +2"] = new RulesElement({
    name: "Pact Bow +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4502",
    source: "Dragon Magazine 369",
    categories: ["Pact Bow +2", "ID_FMP_MAGIC_ITEM_4502"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Pact Bow +3"] = new RulesElement({
    name: "Pact Bow +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4503",
    source: "Dragon Magazine 369",
    categories: ["Pact Bow +3", "ID_FMP_MAGIC_ITEM_4503"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Pact Bow +4"] = new RulesElement({
    name: "Pact Bow +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4504",
    source: "Dragon Magazine 369",
    categories: ["Pact Bow +4", "ID_FMP_MAGIC_ITEM_4504"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Pact Bow +5"] = new RulesElement({
    name: "Pact Bow +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4505",
    source: "Dragon Magazine 369",
    categories: ["Pact Bow +5", "ID_FMP_MAGIC_ITEM_4505"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Pact Bow +6"] = new RulesElement({
    name: "Pact Bow +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4506",
    source: "Dragon Magazine 369",
    categories: ["Pact Bow +6", "ID_FMP_MAGIC_ITEM_4506"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Periapt of Cascading Health +2"] = new RulesElement({
    name: "Periapt of Cascading Health +2",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4520",
    source: "Dragon Magazine 369",
    categories: ["Periapt of Cascading Health +2", "ID_FMP_MAGIC_ITEM_4520"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 2, "Enhancement");
      model.statadd("Reflex Defense", 2, "Enhancement");
      model.statadd("Will Defense", 2, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Periapt of Cascading Health +3"] = new RulesElement({
    name: "Periapt of Cascading Health +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4521",
    source: "Dragon Magazine 369",
    categories: ["Periapt of Cascading Health +3", "ID_FMP_MAGIC_ITEM_4521"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 3, "Enhancement");
      model.statadd("Reflex Defense", 3, "Enhancement");
      model.statadd("Will Defense", 3, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Periapt of Cascading Health +4"] = new RulesElement({
    name: "Periapt of Cascading Health +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4522",
    source: "Dragon Magazine 369",
    categories: ["Periapt of Cascading Health +4", "ID_FMP_MAGIC_ITEM_4522"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 4, "Enhancement");
      model.statadd("Reflex Defense", 4, "Enhancement");
      model.statadd("Will Defense", 4, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Periapt of Cascading Health +5"] = new RulesElement({
    name: "Periapt of Cascading Health +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4523",
    source: "Dragon Magazine 369",
    categories: ["Periapt of Cascading Health +5", "ID_FMP_MAGIC_ITEM_4523"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 5, "Enhancement");
      model.statadd("Reflex Defense", 5, "Enhancement");
      model.statadd("Will Defense", 5, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Periapt of Cascading Health +6"] = new RulesElement({
    name: "Periapt of Cascading Health +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4524",
    source: "Dragon Magazine 369",
    categories: ["Periapt of Cascading Health +6", "ID_FMP_MAGIC_ITEM_4524"],
    rules: function(model) {
      model.statadd("Fortitude Defense", 6, "Enhancement");
      model.statadd("Reflex Defense", 6, "Enhancement");
      model.statadd("Will Defense", 6, "Enhancement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Treeform Box (heroic tier)"] = new RulesElement({
    name: "Treeform Box (heroic tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4529",
    source: "Dragon Magazine 369",
    categories: ["Treeform Box (heroic tier)", "ID_FMP_MAGIC_ITEM_4529"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Winged Bracers (paragon tier)"] = new RulesElement({
    name: "Winged Bracers (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4507",
    source: "Dragon Magazine 369",
    categories: ["Winged Bracers (paragon tier)", "ID_FMP_MAGIC_ITEM_4507"]
  });
  byID[te.id] = te;
  
  
})(this);
