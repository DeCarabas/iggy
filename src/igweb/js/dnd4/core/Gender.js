(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Gender = types['Gender'] || (types['Gender'] = {});
  te = Gender["Female"] = new RulesElement({
    name: "Female",
    type: "Gender",
    id: "ID_INTERNAL_GENDER_FEMALE",
    source: "Core",
    categories: ["Female", "ID_INTERNAL_GENDER_FEMALE"]
  });
  byID[te.id] = te;
  
  te = Gender["Male"] = new RulesElement({
    name: "Male",
    type: "Gender",
    id: "ID_INTERNAL_GENDER_MALE",
    source: "Core",
    categories: ["Male", "ID_INTERNAL_GENDER_MALE"]
  });
  byID[te.id] = te;
  
  
})(this);
