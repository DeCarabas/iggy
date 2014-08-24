(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Role = types['Role'] || (types['Role'] = {});
  te = Role["Controller"] = new RulesElement({
    name: "Controller",
    type: "Role",
    id: "ID_FMP_ROLE_1",
    source: "Player's Handbook",
    categories: ["Controller", "ID_FMP_ROLE_1"]
  });
  byID[te.id] = te;
  
  te = Role["Defender"] = new RulesElement({
    name: "Defender",
    type: "Role",
    id: "ID_FMP_ROLE_4",
    source: "Player's Handbook",
    categories: ["Defender", "ID_FMP_ROLE_4"]
  });
  byID[te.id] = te;
  
  te = Role["Leader"] = new RulesElement({
    name: "Leader",
    type: "Role",
    id: "ID_FMP_ROLE_2",
    source: "Player's Handbook",
    categories: ["Leader", "ID_FMP_ROLE_2"]
  });
  byID[te.id] = te;
  
  te = Role["Striker"] = new RulesElement({
    name: "Striker",
    type: "Role",
    id: "ID_FMP_ROLE_3",
    source: "Player's Handbook",
    categories: ["Striker", "ID_FMP_ROLE_3"]
  });
  byID[te.id] = te;
  
  
})(this);
