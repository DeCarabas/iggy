(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var CountsAsClass = types['CountsAsClass'] || (types['CountsAsClass'] = {});
  te = CountsAsClass["Ardent"] = new RulesElement({
    name: "Ardent",
    type: "CountsAsClass",
    id: "ID_INTERNAL_COUNTSASCLASS_ARDENT",
    source: "Player's Handbook 3",
    categories: ["Ardent", "ID_INTERNAL_COUNTSASCLASS_ARDENT"]
  });
  byID[te.id] = te;
  
  te = CountsAsClass["Battlemind"] = new RulesElement({
    name: "Battlemind",
    type: "CountsAsClass",
    id: "ID_INTERNAL_COUNTSASCLASS_BATTLEMIND",
    source: "Player's Handbook 3",
    categories: ["Battlemind", "ID_INTERNAL_COUNTSASCLASS_BATTLEMIND"]
  });
  byID[te.id] = te;
  
  te = CountsAsClass["Monk"] = new RulesElement({
    name: "Monk",
    type: "CountsAsClass",
    id: "ID_INTERNAL_COUNTSASCLASS_MONK",
    source: "Player's Handbook 3",
    categories: ["Monk", "ID_INTERNAL_COUNTSASCLASS_MONK"]
  });
  byID[te.id] = te;
  
  te = CountsAsClass["Psion"] = new RulesElement({
    name: "Psion",
    type: "CountsAsClass",
    id: "ID_INTERNAL_COUNTSASCLASS_PSION",
    source: "Player's Handbook 3",
    categories: ["Psion", "ID_INTERNAL_COUNTSASCLASS_PSION"]
  });
  byID[te.id] = te;
  
  te = CountsAsClass["Runepriest"] = new RulesElement({
    name: "Runepriest",
    type: "CountsAsClass",
    id: "ID_INTERNAL_COUNTSASCLASS_RUNEPRIEST",
    source: "Player's Handbook 3",
    categories: ["Runepriest", "ID_INTERNAL_COUNTSASCLASS_RUNEPRIEST"]
  });
  byID[te.id] = te;
  
  te = CountsAsClass["Seeker"] = new RulesElement({
    name: "Seeker",
    type: "CountsAsClass",
    id: "ID_INTERNAL_COUNTSASCLASS_SEEKER",
    source: "Player's Handbook 3",
    categories: ["Seeker", "ID_INTERNAL_COUNTSASCLASS_SEEKER"]
  });
  byID[te.id] = te;
  
  
})(this);
