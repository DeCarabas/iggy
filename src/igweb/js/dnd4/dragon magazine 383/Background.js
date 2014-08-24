(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Background = types['Background'] || (types['Background'] = {});
  te = Background["Child of the Wildlands"] = new RulesElement({
    name: "Child of the Wildlands",
    type: "Background",
    id: "ID_FMP_BACKGROUND_477",
    source: "Dragon Magazine 383",
    categories: ["Child of the Wildlands", "ID_FMP_BACKGROUND_477"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Civilization's Herald"] = new RulesElement({
    name: "Civilization's Herald",
    type: "Background",
    id: "ID_FMP_BACKGROUND_478",
    source: "Dragon Magazine 383",
    categories: ["Civilization's Herald", "ID_FMP_BACKGROUND_478"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DIPLOMACY"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Disgraced Scion"] = new RulesElement({
    name: "Disgraced Scion",
    type: "Background",
    id: "ID_FMP_BACKGROUND_416",
    source: "Dragon Magazine 383",
    categories: ["Disgraced Scion", "ID_FMP_BACKGROUND_416"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DUNGEONEERING"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Early Life - Child Prodigy"] = new RulesElement({
    name: "Early Life - Child Prodigy",
    type: "Background",
    id: "ID_FMP_BACKGROUND_438",
    source: "Dragon Magazine 383",
    categories: ["Early Life - Child Prodigy", "ID_FMP_BACKGROUND_438"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Early Life - Divine Companionship"] = new RulesElement({
    name: "Early Life - Divine Companionship",
    type: "Background",
    id: "ID_FMP_BACKGROUND_437",
    source: "Dragon Magazine 383",
    categories: ["Early Life - Divine Companionship", "ID_FMP_BACKGROUND_437"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Early Life - Imprisoned"] = new RulesElement({
    name: "Early Life - Imprisoned",
    type: "Background",
    id: "ID_FMP_BACKGROUND_436",
    source: "Dragon Magazine 383",
    categories: ["Early Life - Imprisoned", "ID_FMP_BACKGROUND_436"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_THIEVERY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Early Life - Invited Underground"] = new RulesElement({
    name: "Early Life - Invited Underground",
    type: "Background",
    id: "ID_FMP_BACKGROUND_435",
    source: "Dragon Magazine 383",
    categories: ["Early Life - Invited Underground", "ID_FMP_BACKGROUND_435"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DUNGEONEERING"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STREETWISE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Early Life - Isolated"] = new RulesElement({
    name: "Early Life - Isolated",
    type: "Background",
    id: "ID_FMP_BACKGROUND_429",
    source: "Dragon Magazine 383",
    categories: ["Early Life - Isolated", "ID_FMP_BACKGROUND_429"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PERCEPTION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Early Life - Kidnapped"] = new RulesElement({
    name: "Early Life - Kidnapped",
    type: "Background",
    id: "ID_FMP_BACKGROUND_432",
    source: "Dragon Magazine 383",
    categories: ["Early Life - Kidnapped", "ID_FMP_BACKGROUND_432"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ACROBATICS"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Early Life - Lost Everything"] = new RulesElement({
    name: "Early Life - Lost Everything",
    type: "Background",
    id: "ID_FMP_BACKGROUND_434",
    source: "Dragon Magazine 383",
    categories: ["Early Life - Lost Everything", "ID_FMP_BACKGROUND_434"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Early Life - Social Outcast"] = new RulesElement({
    name: "Early Life - Social Outcast",
    type: "Background",
    id: "ID_FMP_BACKGROUND_431",
    source: "Dragon Magazine 383",
    categories: ["Early Life - Social Outcast", "ID_FMP_BACKGROUND_431"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Early Life - Test Subject"] = new RulesElement({
    name: "Early Life - Test Subject",
    type: "Background",
    id: "ID_FMP_BACKGROUND_433",
    source: "Dragon Magazine 383",
    categories: ["Early Life - Test Subject", "ID_FMP_BACKGROUND_433"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_THIEVERY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Early Life - Well-Loved"] = new RulesElement({
    name: "Early Life - Well-Loved",
    type: "Background",
    id: "ID_FMP_BACKGROUND_430",
    source: "Dragon Magazine 383",
    categories: ["Early Life - Well-Loved", "ID_FMP_BACKGROUND_430"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DIPLOMACY"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Keeper of Hate"] = new RulesElement({
    name: "Keeper of Hate",
    type: "Background",
    id: "ID_FMP_BACKGROUND_417",
    source: "Dragon Magazine 383",
    categories: ["Keeper of Hate", "ID_FMP_BACKGROUND_417"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Orc Slayer"] = new RulesElement({
    name: "Orc Slayer",
    type: "Background",
    id: "ID_FMP_BACKGROUND_418",
    source: "Dragon Magazine 383",
    categories: ["Orc Slayer", "ID_FMP_BACKGROUND_418"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Parentage - Cult Raised"] = new RulesElement({
    name: "Parentage - Cult Raised",
    type: "Background",
    id: "ID_FMP_BACKGROUND_424",
    source: "Dragon Magazine 383",
    categories: ["Parentage - Cult Raised", "ID_FMP_BACKGROUND_424"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ABYSSAL"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Parentage - Draconic Adoption"] = new RulesElement({
    name: "Parentage - Draconic Adoption",
    type: "Background",
    id: "ID_FMP_BACKGROUND_423",
    source: "Dragon Magazine 383",
    categories: ["Parentage - Draconic Adoption", "ID_FMP_BACKGROUND_423"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DRACONIC"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Parentage - Ill-Omened"] = new RulesElement({
    name: "Parentage - Ill-Omened",
    type: "Background",
    id: "ID_FMP_BACKGROUND_421",
    source: "Dragon Magazine 383",
    categories: ["Parentage - Ill-Omened", "ID_FMP_BACKGROUND_421"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Parentage - Immortal Guardians"] = new RulesElement({
    name: "Parentage - Immortal Guardians",
    type: "Background",
    id: "ID_FMP_BACKGROUND_428",
    source: "Dragon Magazine 383",
    categories: ["Parentage - Immortal Guardians", "ID_FMP_BACKGROUND_428"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Parentage - Impoverished"] = new RulesElement({
    name: "Parentage - Impoverished",
    type: "Background",
    id: "ID_FMP_BACKGROUND_419",
    source: "Dragon Magazine 383",
    categories: ["Parentage - Impoverished", "ID_FMP_BACKGROUND_419"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STREETWISE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Parentage - Minstrel Family"] = new RulesElement({
    name: "Parentage - Minstrel Family",
    type: "Background",
    id: "ID_FMP_BACKGROUND_426",
    source: "Dragon Magazine 383",
    categories: ["Parentage - Minstrel Family", "ID_FMP_BACKGROUND_426"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ACROBATICS"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DIPLOMACY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Parentage - Monk Business"] = new RulesElement({
    name: "Parentage - Monk Business",
    type: "Background",
    id: "ID_FMP_BACKGROUND_425",
    source: "Dragon Magazine 383",
    categories: ["Parentage - Monk Business", "ID_FMP_BACKGROUND_425"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HEAL"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Parentage - Noble"] = new RulesElement({
    name: "Parentage - Noble",
    type: "Background",
    id: "ID_FMP_BACKGROUND_422",
    source: "Dragon Magazine 383",
    categories: ["Parentage - Noble", "ID_FMP_BACKGROUND_422"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DIPLOMACY"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PERCEPTION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Parentage - Orphan"] = new RulesElement({
    name: "Parentage - Orphan",
    type: "Background",
    id: "ID_FMP_BACKGROUND_420",
    source: "Dragon Magazine 383",
    categories: ["Parentage - Orphan", "ID_FMP_BACKGROUND_420"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Parentage - Raised by Wolves"] = new RulesElement({
    name: "Parentage - Raised by Wolves",
    type: "Background",
    id: "ID_FMP_BACKGROUND_427",
    source: "Dragon Magazine 383",
    categories: ["Parentage - Raised by Wolves", "ID_FMP_BACKGROUND_427"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Pivotal Event - Amazing Creation"] = new RulesElement({
    name: "Pivotal Event - Amazing Creation",
    type: "Background",
    id: "ID_FMP_BACKGROUND_446",
    source: "Dragon Magazine 383",
    categories: ["Pivotal Event - Amazing Creation", "ID_FMP_BACKGROUND_446"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Pivotal Event - Divine Decree"] = new RulesElement({
    name: "Pivotal Event - Divine Decree",
    type: "Background",
    id: "ID_FMP_BACKGROUND_444",
    source: "Dragon Magazine 383",
    categories: ["Pivotal Event - Divine Decree", "ID_FMP_BACKGROUND_444"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Pivotal Event - Escape"] = new RulesElement({
    name: "Pivotal Event - Escape",
    type: "Background",
    id: "ID_FMP_BACKGROUND_443",
    source: "Dragon Magazine 383",
    categories: ["Pivotal Event - Escape", "ID_FMP_BACKGROUND_443"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Pivotal Event - Murder"] = new RulesElement({
    name: "Pivotal Event - Murder",
    type: "Background",
    id: "ID_FMP_BACKGROUND_440",
    source: "Dragon Magazine 383",
    categories: ["Pivotal Event - Murder", "ID_FMP_BACKGROUND_440"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PERCEPTION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Pivotal Event - Portal Mishap"] = new RulesElement({
    name: "Pivotal Event - Portal Mishap",
    type: "Background",
    id: "ID_FMP_BACKGROUND_445",
    source: "Dragon Magazine 383",
    categories: ["Pivotal Event - Portal Mishap", "ID_FMP_BACKGROUND_445"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DIPLOMACY"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Pivotal Event - Possession"] = new RulesElement({
    name: "Pivotal Event - Possession",
    type: "Background",
    id: "ID_FMP_BACKGROUND_448",
    source: "Dragon Magazine 383",
    categories: ["Pivotal Event - Possession", "ID_FMP_BACKGROUND_448"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ABYSSAL"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Pivotal Event - Transformation"] = new RulesElement({
    name: "Pivotal Event - Transformation",
    type: "Background",
    id: "ID_FMP_BACKGROUND_447",
    source: "Dragon Magazine 383",
    categories: ["Pivotal Event - Transformation", "ID_FMP_BACKGROUND_447"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Pivotal Event - Unwholesome Journey"] = new RulesElement({
    name: "Pivotal Event - Unwholesome Journey",
    type: "Background",
    id: "ID_FMP_BACKGROUND_442",
    source: "Dragon Magazine 383",
    categories: ["Pivotal Event - Unwholesome Journey", "ID_FMP_BACKGROUND_442"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DEEP_SPEECH"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DUNGEONEERING"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Pivotal Event - You Die"] = new RulesElement({
    name: "Pivotal Event - You Die",
    type: "Background",
    id: "ID_FMP_BACKGROUND_441",
    source: "Dragon Magazine 383",
    categories: ["Pivotal Event - You Die", "ID_FMP_BACKGROUND_441"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HEAL"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Pivotal Event - You Kill"] = new RulesElement({
    name: "Pivotal Event - You Kill",
    type: "Background",
    id: "ID_FMP_BACKGROUND_439",
    source: "Dragon Magazine 383",
    categories: ["Pivotal Event - You Kill", "ID_FMP_BACKGROUND_439"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_BLUFF"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HEAL"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Recent Life - Demon-Hunter"] = new RulesElement({
    name: "Recent Life - Demon-Hunter",
    type: "Background",
    id: "ID_FMP_BACKGROUND_458",
    source: "Dragon Magazine 383",
    categories: ["Recent Life - Demon-Hunter", "ID_FMP_BACKGROUND_458"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Recent Life - Explorer of the Ancient"] = new RulesElement({
    name: "Recent Life - Explorer of the Ancient",
    type: "Background",
    id: "ID_FMP_BACKGROUND_457",
    source: "Dragon Magazine 383",
    categories: ["Recent Life - Explorer of the Ancient", "ID_FMP_BACKGROUND_457"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DUNGEONEERING"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_THIEVERY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Recent Life - Fighting Undead"] = new RulesElement({
    name: "Recent Life - Fighting Undead",
    type: "Background",
    id: "ID_FMP_BACKGROUND_451",
    source: "Dragon Magazine 383",
    categories: ["Recent Life - Fighting Undead", "ID_FMP_BACKGROUND_451"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Recent Life - Freeing Slaves"] = new RulesElement({
    name: "Recent Life - Freeing Slaves",
    type: "Background",
    id: "ID_FMP_BACKGROUND_452",
    source: "Dragon Magazine 383",
    categories: ["Recent Life - Freeing Slaves", "ID_FMP_BACKGROUND_452"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DIPLOMACY"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_THIEVERY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Recent Life - Lost in the Feywild"] = new RulesElement({
    name: "Recent Life - Lost in the Feywild",
    type: "Background",
    id: "ID_FMP_BACKGROUND_450",
    source: "Dragon Magazine 383",
    categories: ["Recent Life - Lost in the Feywild", "ID_FMP_BACKGROUND_450"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ELVEN"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Recent Life - Mercenary Work"] = new RulesElement({
    name: "Recent Life - Mercenary Work",
    type: "Background",
    id: "ID_FMP_BACKGROUND_453",
    source: "Dragon Magazine 383",
    categories: ["Recent Life - Mercenary Work", "ID_FMP_BACKGROUND_453"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Recent Life - Peaceful Life"] = new RulesElement({
    name: "Recent Life - Peaceful Life",
    type: "Background",
    id: "ID_FMP_BACKGROUND_455",
    source: "Dragon Magazine 383",
    categories: ["Recent Life - Peaceful Life", "ID_FMP_BACKGROUND_455"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Recent Life - Spreading the Word"] = new RulesElement({
    name: "Recent Life - Spreading the Word",
    type: "Background",
    id: "ID_FMP_BACKGROUND_454",
    source: "Dragon Magazine 383",
    categories: ["Recent Life - Spreading the Word", "ID_FMP_BACKGROUND_454"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Recent Life - Teambuilding Exercise"] = new RulesElement({
    name: "Recent Life - Teambuilding Exercise",
    type: "Background",
    id: "ID_FMP_BACKGROUND_449",
    source: "Dragon Magazine 383",
    categories: ["Recent Life - Teambuilding Exercise", "ID_FMP_BACKGROUND_449"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DIPLOMACY"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STREETWISE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Recent Life - Valued Prisoner"] = new RulesElement({
    name: "Recent Life - Valued Prisoner",
    type: "Background",
    id: "ID_FMP_BACKGROUND_456",
    source: "Dragon Magazine 383",
    categories: ["Recent Life - Valued Prisoner", "ID_FMP_BACKGROUND_456"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STREETWISE"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_THIEVERY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["The Breach"] = new RulesElement({
    name: "The Breach",
    type: "Background",
    id: "ID_FMP_BACKGROUND_482",
    source: "Dragon Magazine 383",
    categories: ["The Breach", "ID_FMP_BACKGROUND_482"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PRIMORDIAL"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
