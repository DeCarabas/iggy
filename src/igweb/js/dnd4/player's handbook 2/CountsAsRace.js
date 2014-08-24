(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var CountsAsRace = types['CountsAsRace'] || (types['CountsAsRace'] = {});
  te = CountsAsRace["Deva"] = new RulesElement({
    name: "Deva",
    type: "CountsAsRace",
    id: "ID_INTERNAL_COUNTSASRACE_DEVA",
    source: "Player's Handbook 2",
    categories: ["Deva", "ID_INTERNAL_COUNTSASRACE_DEVA"]
  });
  byID[te.id] = te;
  
  te = CountsAsRace["Gnome"] = new RulesElement({
    name: "Gnome",
    type: "CountsAsRace",
    id: "ID_INTERNAL_COUNTSASRACE_GNOME",
    source: "Player's Handbook 2",
    categories: ["Gnome", "ID_INTERNAL_COUNTSASRACE_GNOME"]
  });
  byID[te.id] = te;
  
  te = CountsAsRace["Goliath"] = new RulesElement({
    name: "Goliath",
    type: "CountsAsRace",
    id: "ID_INTERNAL_COUNTSASRACE_GOLIATH",
    source: "Player's Handbook 2",
    categories: ["Goliath", "ID_INTERNAL_COUNTSASRACE_GOLIATH"]
  });
  byID[te.id] = te;
  
  te = CountsAsRace["Half-Orc"] = new RulesElement({
    name: "Half-Orc",
    type: "CountsAsRace",
    id: "ID_INTERNAL_COUNTSASRACE_HALF-ORC",
    source: "Player's Handbook 2",
    categories: ["Half-Orc", "ID_INTERNAL_COUNTSASRACE_HALF-ORC"]
  });
  byID[te.id] = te;
  
  te = CountsAsRace["Longtooth Shifter"] = new RulesElement({
    name: "Longtooth Shifter",
    type: "CountsAsRace",
    id: "ID_INTERNAL_COUNTSASRACE_LONGTOOTH_SHIFTER",
    source: "Player's Handbook 2",
    categories: ["Longtooth Shifter", "ID_INTERNAL_COUNTSASRACE_LONGTOOTH_SHIFTER"]
  });
  byID[te.id] = te;
  
  te = CountsAsRace["Razorclaw Shifter"] = new RulesElement({
    name: "Razorclaw Shifter",
    type: "CountsAsRace",
    id: "ID_INTERNAL_COUNTSASRACE_RAZORCLAW_SHIFTER",
    source: "Player's Handbook 2",
    categories: ["Razorclaw Shifter", "ID_INTERNAL_COUNTSASRACE_RAZORCLAW_SHIFTER"]
  });
  byID[te.id] = te;
  
  
})(this);
