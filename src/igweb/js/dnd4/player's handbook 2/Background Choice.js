(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Background_Choice = types['Background Choice'] || (types['Background Choice'] = {});
  te = Background_Choice["Among Another Race (Bladeling)"] = new RulesElement({
    name: "Among Another Race (Bladeling)",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(BLADELING)",
    source: "Player's Handbook 2",
    categories: ["Among Another Race (Bladeling)", "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(BLADELING)", "ID_FMP_BACKGROUND_88", "Birth - Among Another Race"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Among Another Race (Bugbear)"] = new RulesElement({
    name: "Among Another Race (Bugbear)",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(BUGBEAR)",
    source: "Player's Handbook 2",
    categories: ["Among Another Race (Bugbear)", "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(BUGBEAR)", "ID_FMP_BACKGROUND_88", "Birth - Among Another Race"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Among Another Race (Bullywug)"] = new RulesElement({
    name: "Among Another Race (Bullywug)",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(BULLYWUG)",
    source: "Player's Handbook 2",
    categories: ["Among Another Race (Bullywug)", "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(BULLYWUG)", "ID_FMP_BACKGROUND_88", "Birth - Among Another Race"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Among Another Race (Changeling)"] = new RulesElement({
    name: "Among Another Race (Changeling)",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(CHANGELING)",
    source: "Player's Handbook 2",
    categories: ["Among Another Race (Changeling)", "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(CHANGELING)", "ID_FMP_BACKGROUND_88", "Birth - Among Another Race"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Among Another Race (Deva)"] = new RulesElement({
    name: "Among Another Race (Deva)",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(DEVA)",
    source: "Player's Handbook 2",
    categories: ["Among Another Race (Deva)", "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(DEVA)", "ID_FMP_BACKGROUND_88", "Birth - Among Another Race"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Among Another Race (Dragonborn)"] = new RulesElement({
    name: "Among Another Race (Dragonborn)",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(DRAGONBORN)",
    source: "Player's Handbook 2",
    categories: ["Among Another Race (Dragonborn)", "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(DRAGONBORN)", "ID_FMP_BACKGROUND_88", "Birth - Among Another Race"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Among Another Race (Drow)"] = new RulesElement({
    name: "Among Another Race (Drow)",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(DROW)",
    source: "Player's Handbook 2",
    categories: ["Among Another Race (Drow)", "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(DROW)", "ID_FMP_BACKGROUND_88", "Birth - Among Another Race"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Among Another Race (Duergar)"] = new RulesElement({
    name: "Among Another Race (Duergar)",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(DUERGAR)",
    source: "Player's Handbook 2",
    categories: ["Among Another Race (Duergar)", "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(DUERGAR)", "ID_FMP_BACKGROUND_88", "Birth - Among Another Race"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DUNGEONEERING"]);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Among Another Race (Dwarf)"] = new RulesElement({
    name: "Among Another Race (Dwarf)",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(DWARF)",
    source: "Player's Handbook 2",
    categories: ["Among Another Race (Dwarf)", "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(DWARF)", "ID_FMP_BACKGROUND_88", "Birth - Among Another Race"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DUNGEONEERING"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Among Another Race (Eladrin)"] = new RulesElement({
    name: "Among Another Race (Eladrin)",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(ELADRIN)",
    source: "Player's Handbook 2",
    categories: ["Among Another Race (Eladrin)", "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(ELADRIN)", "ID_FMP_BACKGROUND_88", "Birth - Among Another Race"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Among Another Race (Elf)"] = new RulesElement({
    name: "Among Another Race (Elf)",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(ELF)",
    source: "Player's Handbook 2",
    categories: ["Among Another Race (Elf)", "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(ELF)", "ID_FMP_BACKGROUND_88", "Birth - Among Another Race"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PERCEPTION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Among Another Race (Genasi)"] = new RulesElement({
    name: "Among Another Race (Genasi)",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(GENASI)",
    source: "Player's Handbook 2",
    categories: ["Among Another Race (Genasi)", "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(GENASI)", "ID_FMP_BACKGROUND_88", "Birth - Among Another Race"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Among Another Race (Githyanki)"] = new RulesElement({
    name: "Among Another Race (Githyanki)",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(GITHYANKI)",
    source: "Player's Handbook 2",
    categories: ["Among Another Race (Githyanki)", "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(GITHYANKI)", "ID_FMP_BACKGROUND_88", "Birth - Among Another Race"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Among Another Race (Githzerai)"] = new RulesElement({
    name: "Among Another Race (Githzerai)",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(GITHZERAI)",
    source: "Player's Handbook 2",
    categories: ["Among Another Race (Githzerai)", "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(GITHZERAI)", "ID_FMP_BACKGROUND_88", "Birth - Among Another Race"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ACROBATICS"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Among Another Race (Gnoll)"] = new RulesElement({
    name: "Among Another Race (Gnoll)",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(GNOLL)",
    source: "Player's Handbook 2",
    categories: ["Among Another Race (Gnoll)", "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(GNOLL)", "ID_FMP_BACKGROUND_88", "Birth - Among Another Race"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PERCEPTION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Among Another Race (Gnome)"] = new RulesElement({
    name: "Among Another Race (Gnome)",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(GNOME)",
    source: "Player's Handbook 2",
    categories: ["Among Another Race (Gnome)", "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(GNOME)", "ID_FMP_BACKGROUND_88", "Birth - Among Another Race"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Among Another Race (Goblin)"] = new RulesElement({
    name: "Among Another Race (Goblin)",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(GOBLIN)",
    source: "Player's Handbook 2",
    categories: ["Among Another Race (Goblin)", "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(GOBLIN)", "ID_FMP_BACKGROUND_88", "Birth - Among Another Race"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_THIEVERY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Among Another Race (Goliath)"] = new RulesElement({
    name: "Among Another Race (Goliath)",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(GOLIATH)",
    source: "Player's Handbook 2",
    categories: ["Among Another Race (Goliath)", "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(GOLIATH)", "ID_FMP_BACKGROUND_88", "Birth - Among Another Race"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Among Another Race (Half-Elf)"] = new RulesElement({
    name: "Among Another Race (Half-Elf)",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(HALF-ELF)",
    source: "Player's Handbook 2",
    categories: ["Among Another Race (Half-Elf)", "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(HALF-ELF)", "ID_FMP_BACKGROUND_88", "Birth - Among Another Race"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DIPLOMACY"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Among Another Race (Halfling)"] = new RulesElement({
    name: "Among Another Race (Halfling)",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(HALFLING)",
    source: "Player's Handbook 2",
    categories: ["Among Another Race (Halfling)", "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(HALFLING)", "ID_FMP_BACKGROUND_88", "Birth - Among Another Race"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ACROBATICS"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_THIEVERY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Among Another Race (Half-Orc)"] = new RulesElement({
    name: "Among Another Race (Half-Orc)",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(HALF-ORC)",
    source: "Player's Handbook 2",
    categories: ["Among Another Race (Half-Orc)", "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(HALF-ORC)", "ID_FMP_BACKGROUND_88", "Birth - Among Another Race"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Among Another Race (Hobgoblin)"] = new RulesElement({
    name: "Among Another Race (Hobgoblin)",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(HOBGOBLIN)",
    source: "Player's Handbook 2",
    categories: ["Among Another Race (Hobgoblin)", "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(HOBGOBLIN)", "ID_FMP_BACKGROUND_88", "Birth - Among Another Race"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Among Another Race (Human)"] = new RulesElement({
    name: "Among Another Race (Human)",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(HUMAN)",
    source: "Player's Handbook 2",
    categories: ["Among Another Race (Human)", "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(HUMAN)", "ID_FMP_BACKGROUND_88", "Birth - Among Another Race"]
  });
  byID[te.id] = te;
  
  te = Background_Choice["Among Another Race (Kalashtar)"] = new RulesElement({
    name: "Among Another Race (Kalashtar)",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(KALASHTAR)",
    source: "Player's Handbook 2",
    categories: ["Among Another Race (Kalashtar)", "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(KALASHTAR)", "ID_FMP_BACKGROUND_88", "Birth - Among Another Race"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ACROBATICS"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DIPLOMACY"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DUNGEONEERING"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HEAL"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PERCEPTION"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STREETWISE"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_THIEVERY"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Among Another Race (Kenku)"] = new RulesElement({
    name: "Among Another Race (Kenku)",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(KENKU)",
    source: "Player's Handbook 2",
    categories: ["Among Another Race (Kenku)", "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(KENKU)", "ID_FMP_BACKGROUND_88", "Birth - Among Another Race"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Among Another Race (Kobold)"] = new RulesElement({
    name: "Among Another Race (Kobold)",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(KOBOLD)",
    source: "Player's Handbook 2",
    categories: ["Among Another Race (Kobold)", "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(KOBOLD)", "ID_FMP_BACKGROUND_88", "Birth - Among Another Race"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_THIEVERY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Among Another Race (Longtooth Shifter)"] = new RulesElement({
    name: "Among Another Race (Longtooth Shifter)",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(LONGTOOTH_SHIFTER)",
    source: "Player's Handbook 2",
    categories: ["Among Another Race (Longtooth Shifter)", "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(LONGTOOTH_SHIFTER)", "ID_FMP_BACKGROUND_88", "Birth - Among Another Race"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Among Another Race (Minotaur)"] = new RulesElement({
    name: "Among Another Race (Minotaur)",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(MINOTAUR)",
    source: "Player's Handbook 2",
    categories: ["Among Another Race (Minotaur)", "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(MINOTAUR)", "ID_FMP_BACKGROUND_88", "Birth - Among Another Race"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PERCEPTION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Among Another Race (Orc)"] = new RulesElement({
    name: "Among Another Race (Orc)",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(ORC)",
    source: "Player's Handbook 2",
    categories: ["Among Another Race (Orc)", "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(ORC)", "ID_FMP_BACKGROUND_88", "Birth - Among Another Race"]
  });
  byID[te.id] = te;
  
  te = Background_Choice["Among Another Race (Razorclaw Shifter)"] = new RulesElement({
    name: "Among Another Race (Razorclaw Shifter)",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(RAZORCLAW_SHIFTER)",
    source: "Player's Handbook 2",
    categories: ["Among Another Race (Razorclaw Shifter)", "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(RAZORCLAW_SHIFTER)", "ID_FMP_BACKGROUND_88", "Birth - Among Another Race"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ACROBATICS"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Among Another Race (Revenant)"] = new RulesElement({
    name: "Among Another Race (Revenant)",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(REVENANT)",
    source: "Player's Handbook 2",
    categories: ["Among Another Race (Revenant)", "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(REVENANT)", "ID_FMP_BACKGROUND_88", "Birth - Among Another Race"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Among Another Race (Shadar-kai)"] = new RulesElement({
    name: "Among Another Race (Shadar-kai)",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(SHADAR-KAI)",
    source: "Player's Handbook 2",
    categories: ["Among Another Race (Shadar-kai)", "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(SHADAR-KAI)", "ID_FMP_BACKGROUND_88", "Birth - Among Another Race"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ACROBATICS"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Among Another Race (Shardmind)"] = new RulesElement({
    name: "Among Another Race (Shardmind)",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(SHARDMIND)",
    source: "Player's Handbook 2",
    categories: ["Among Another Race (Shardmind)", "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(SHARDMIND)", "ID_FMP_BACKGROUND_88", "Birth - Among Another Race"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ACROBATICS"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DIPLOMACY"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DUNGEONEERING"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HEAL"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PERCEPTION"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STREETWISE"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_THIEVERY"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Among Another Race (Tiefling)"] = new RulesElement({
    name: "Among Another Race (Tiefling)",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(TIEFLING)",
    source: "Player's Handbook 2",
    categories: ["Among Another Race (Tiefling)", "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(TIEFLING)", "ID_FMP_BACKGROUND_88", "Birth - Among Another Race"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Among Another Race (Warforged)"] = new RulesElement({
    name: "Among Another Race (Warforged)",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(WARFORGED)",
    source: "Player's Handbook 2",
    categories: ["Among Another Race (Warforged)", "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(WARFORGED)", "ID_FMP_BACKGROUND_88", "Birth - Among Another Race"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background_Choice["Among Another Race (Wilden)"] = new RulesElement({
    name: "Among Another Race (Wilden)",
    type: "Background Choice",
    id: "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(WILDEN)",
    source: "Player's Handbook 2",
    categories: ["Among Another Race (Wilden)", "ID_INTERNAL_BACKGROUND_CHOICE_AMONG_ANOTHER_RACE_(WILDEN)", "ID_FMP_BACKGROUND_88", "Birth - Among Another Race"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
