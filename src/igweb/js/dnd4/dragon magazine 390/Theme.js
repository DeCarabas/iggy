(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Theme = types['Theme'] || (types['Theme'] = {});
  te = Theme["Escaped Slave"] = new RulesElement({
    name: "Escaped Slave",
    type: "Theme",
    id: "ID_FMP_THEME_768",
    source: "Dragon Magazine 390",
    categories: ["Escaped Slave", "ID_FMP_THEME_768"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13431"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
