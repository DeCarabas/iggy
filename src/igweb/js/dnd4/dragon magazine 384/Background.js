(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Background = types['Background'] || (types['Background'] = {});
  te = Background["Brawny Gnome"] = new RulesElement({
    name: "Brawny Gnome",
    type: "Background",
    id: "ID_FMP_BACKGROUND_484",
    source: "Dragon Magazine 384",
    categories: ["Brawny Gnome", "ID_FMP_BACKGROUND_484"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Bringers of Spring"] = new RulesElement({
    name: "Bringers of Spring",
    type: "Background",
    id: "ID_FMP_BACKGROUND_479",
    source: "Dragon Magazine 384",
    categories: ["Bringers of Spring", "ID_FMP_BACKGROUND_479"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Monastic (Avandra)"] = new RulesElement({
    name: "Monastic (Avandra)",
    type: "Background",
    id: "ID_FMP_BACKGROUND_487",
    source: "Dragon Magazine 384",
    categories: ["Monastic (Avandra)", "ID_FMP_BACKGROUND_487"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DUNGEONEERING"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Monastic (Bahamut)"] = new RulesElement({
    name: "Monastic (Bahamut)",
    type: "Background",
    id: "ID_FMP_BACKGROUND_488",
    source: "Dragon Magazine 384",
    categories: ["Monastic (Bahamut)", "ID_FMP_BACKGROUND_488"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Monastic (Corellon)"] = new RulesElement({
    name: "Monastic (Corellon)",
    type: "Background",
    id: "ID_FMP_BACKGROUND_489",
    source: "Dragon Magazine 384",
    categories: ["Monastic (Corellon)", "ID_FMP_BACKGROUND_489"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Monastic (Erathis)"] = new RulesElement({
    name: "Monastic (Erathis)",
    type: "Background",
    id: "ID_FMP_BACKGROUND_490",
    source: "Dragon Magazine 384",
    categories: ["Monastic (Erathis)", "ID_FMP_BACKGROUND_490"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DIPLOMACY"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STREETWISE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Monastic (Ioun)"] = new RulesElement({
    name: "Monastic (Ioun)",
    type: "Background",
    id: "ID_FMP_BACKGROUND_491",
    source: "Dragon Magazine 384",
    categories: ["Monastic (Ioun)", "ID_FMP_BACKGROUND_491"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INSIGHT"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Monastic (Kord)"] = new RulesElement({
    name: "Monastic (Kord)",
    type: "Background",
    id: "ID_FMP_BACKGROUND_492",
    source: "Dragon Magazine 384",
    categories: ["Monastic (Kord)", "ID_FMP_BACKGROUND_492"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ATHLETICS"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Monastic (Melora)"] = new RulesElement({
    name: "Monastic (Melora)",
    type: "Background",
    id: "ID_FMP_BACKGROUND_493",
    source: "Dragon Magazine 384",
    categories: ["Monastic (Melora)", "ID_FMP_BACKGROUND_493"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PERCEPTION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Monastic (Moradin)"] = new RulesElement({
    name: "Monastic (Moradin)",
    type: "Background",
    id: "ID_FMP_BACKGROUND_494",
    source: "Dragon Magazine 384",
    categories: ["Monastic (Moradin)", "ID_FMP_BACKGROUND_494"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ENDURANCE"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HISTORY"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Monastic (Pelor)"] = new RulesElement({
    name: "Monastic (Pelor)",
    type: "Background",
    id: "ID_FMP_BACKGROUND_495",
    source: "Dragon Magazine 384",
    categories: ["Monastic (Pelor)", "ID_FMP_BACKGROUND_495"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DIPLOMACY"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_HEAL"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Monastic (Raven Queen)"] = new RulesElement({
    name: "Monastic (Raven Queen)",
    type: "Background",
    id: "ID_FMP_BACKGROUND_496",
    source: "Dragon Magazine 384",
    categories: ["Monastic (Raven Queen)", "ID_FMP_BACKGROUND_496"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_RELIGION"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Monastic (Sehanine)"] = new RulesElement({
    name: "Monastic (Sehanine)",
    type: "Background",
    id: "ID_FMP_BACKGROUND_497",
    source: "Dragon Magazine 384",
    categories: ["Monastic (Sehanine)", "ID_FMP_BACKGROUND_497"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_PERCEPTION"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Raised in the Unseen Path"] = new RulesElement({
    name: "Raised in the Unseen Path",
    type: "Background",
    id: "ID_FMP_BACKGROUND_483",
    source: "Dragon Magazine 384",
    categories: ["Raised in the Unseen Path", "ID_FMP_BACKGROUND_483"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ELVEN"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Urban Gnome"] = new RulesElement({
    name: "Urban Gnome",
    type: "Background",
    id: "ID_FMP_BACKGROUND_485",
    source: "Dragon Magazine 384",
    categories: ["Urban Gnome", "ID_FMP_BACKGROUND_485"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_DIPLOMACY"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STREETWISE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["White Riders"] = new RulesElement({
    name: "White Riders",
    type: "Background",
    id: "ID_FMP_BACKGROUND_480",
    source: "Dragon Magazine 384",
    categories: ["White Riders", "ID_FMP_BACKGROUND_480"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_INTIMIDATE"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_NATURE"]);
    }
  });
  byID[te.id] = te;
  
  te = Background["Wintertouched"] = new RulesElement({
    name: "Wintertouched",
    type: "Background",
    id: "ID_FMP_BACKGROUND_481",
    source: "Dragon Magazine 384",
    categories: ["Wintertouched", "ID_FMP_BACKGROUND_481"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_ARCANA"]);
      model.grant(elements.id["ID_INTERNAL_BACKGROUND_ASSOCIATION_STEALTH"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
