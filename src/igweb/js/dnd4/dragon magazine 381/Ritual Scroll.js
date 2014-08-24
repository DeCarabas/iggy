(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Ritual_Scroll = types['Ritual Scroll'] || (types['Ritual Scroll'] = {});
  te = Ritual_Scroll["Scroll of Alter Ego"] = new RulesElement({
    name: "Scroll of Alter Ego",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_ALTER_EGO",
    source: "Dragon Magazine 381,Martial Power 2",
    categories: ["Scroll of Alter Ego", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_ALTER_EGO"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Precise Forgery"] = new RulesElement({
    name: "Scroll of Precise Forgery",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_PRECISE_FORGERY",
    source: "Dragon Magazine 381,Martial Power 2",
    categories: ["Scroll of Precise Forgery", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_PRECISE_FORGERY"]
  });
  byID[te.id] = te;
  
  te = Ritual_Scroll["Scroll of Speech Without Words"] = new RulesElement({
    name: "Scroll of Speech Without Words",
    type: "Ritual Scroll",
    id: "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_SPEECH_WITHOUT_WORDS",
    source: "Dragon Magazine 381,Martial Power 2",
    categories: ["Scroll of Speech Without Words", "ID_INTERNAL_RITUAL_SCROLL_SCROLL_OF_SPEECH_WITHOUT_WORDS"]
  });
  byID[te.id] = te;
  
  
})(this);
