(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Background_Choice = types['Background Choice'] || (types['Background Choice'] = {});
  te = Background_Choice["Accursed Lineage Benefit"] = new RulesElement({
    name: "Accursed Lineage Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_ACCURSED_LINEAGE_BENEFIT",
    source: "Dragon Magazine 371",
    categories: ["Accursed Lineage Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_ACCURSED_LINEAGE_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.statadd("Diplomacy Misc", function() { /* when interacting with undead creatures */ return 2; });
      model.statadd("Intimidate Misc", function() { /* when interacting with undead creatures */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Adventurer's Scion Benefit"] = new RulesElement({
    name: "Adventurer's Scion Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_ADVENTURER'S_SCION_BENEFIT",
    source: "Dragon Magazine 371",
    categories: ["Adventurer's Scion Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_ADVENTURER'S_SCION_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"]
  });
  byID[te.id] = te;
  
  te = Background_Choice["Curious Archeologist Benefit"] = new RulesElement({
    name: "Curious Archeologist Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_CURIOUS_ARCHEOLOGIST_BENEFIT",
    source: "Dragon Magazine 371",
    categories: ["Curious Archeologist Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_CURIOUS_ARCHEOLOGIST_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"]
  });
  byID[te.id] = te;
  
  te = Background_Choice["Lost Kin Benefit"] = new RulesElement({
    name: "Lost Kin Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_LOST_KIN_BENEFIT",
    source: "Dragon Magazine 371",
    categories: ["Lost Kin Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_LOST_KIN_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.statadd("Nature Misc", function() { /* to recall useful information about geography */ return 3; });
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Necromancer's Chattel Benefit"] = new RulesElement({
    name: "Necromancer's Chattel Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_NECROMANCER'S_CHATTEL_BENEFIT",
    source: "Dragon Magazine 371",
    categories: ["Necromancer's Chattel Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_NECROMANCER'S_CHATTEL_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* to end conditions and ongoing effects with the fear keyword */ return 2; }, "Racial");
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Restless Dead Benefit"] = new RulesElement({
    name: "Restless Dead Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_RESTLESS_DEAD_BENEFIT",
    source: "Dragon Magazine 371",
    categories: ["Restless Dead Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_RESTLESS_DEAD_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.statadd("damage rolls", function() { /* against creatures with the undead keyword */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Touched by Darkness Benefit"] = new RulesElement({
    name: "Touched by Darkness Benefit",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_TOUCHED_BY_DARKNESS_BENEFIT",
    source: "Dragon Magazine 371",
    categories: ["Touched by Darkness Benefit", "ID_INTERNAL_BACKGROUND_CHOICE_TOUCHED_BY_DARKNESS_BENEFIT", "ID_INTERNAL_INTERNAL_BACKGROUND_BENEFIT", "Background Benefit"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against ongoing effects and conditions with the necrotic keyword */ return 1; });
    }
  });
  byID[te.id] = te;
  
  
})(this);
