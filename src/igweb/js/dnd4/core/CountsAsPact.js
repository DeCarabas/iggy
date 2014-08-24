(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var CountsAsPact = types['CountsAsPact'] || (types['CountsAsPact'] = {});
  te = CountsAsPact["Dark Pact"] = new RulesElement({
    name: "Dark Pact",
    type: "CountsAsPact",
    id: "ID_INTERNAL_COUNTSASPACT_DARK_PACT",
    source: "Core",
    categories: ["Dark Pact", "ID_INTERNAL_COUNTSASPACT_DARK_PACT"]
  });
  byID[te.id] = te;
  
  te = CountsAsPact["Fey Pact"] = new RulesElement({
    name: "Fey Pact",
    type: "CountsAsPact",
    id: "ID_INTERNAL_COUNTSASPACT_FEY_PACT",
    source: "Core",
    categories: ["Fey Pact", "ID_INTERNAL_COUNTSASPACT_FEY_PACT"]
  });
  byID[te.id] = te;
  
  te = CountsAsPact["Infernal Pact"] = new RulesElement({
    name: "Infernal Pact",
    type: "CountsAsPact",
    id: "ID_INTERNAL_COUNTSASPACT_INFERNAL_PACT",
    source: "Core",
    categories: ["Infernal Pact", "ID_INTERNAL_COUNTSASPACT_INFERNAL_PACT"]
  });
  byID[te.id] = te;
  
  te = CountsAsPact["Star Pact"] = new RulesElement({
    name: "Star Pact",
    type: "CountsAsPact",
    id: "ID_INTERNAL_COUNTSASPACT_STAR_PACT",
    source: "Core",
    categories: ["Star Pact", "ID_INTERNAL_COUNTSASPACT_STAR_PACT"]
  });
  byID[te.id] = te;
  
  te = CountsAsPact["Vestige Pact"] = new RulesElement({
    name: "Vestige Pact",
    type: "CountsAsPact",
    id: "ID_INTERNAL_COUNTSASPACT_VESTIGE_PACT",
    source: "Core",
    categories: ["Vestige Pact", "ID_INTERNAL_COUNTSASPACT_VESTIGE_PACT"]
  });
  byID[te.id] = te;
  
  
})(this);
