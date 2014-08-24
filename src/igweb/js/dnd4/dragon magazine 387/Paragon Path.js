(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Paragon_Path = types['Paragon Path'] || (types['Paragon Path'] = {});
  te = Paragon_Path["Agent of the Unbroken Circle"] = new RulesElement({
    name: "Agent of the Unbroken Circle",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_686",
    source: "Dragon Magazine 387",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=686",
    categories: ["Agent of the Unbroken Circle", "ID_FMP_PARAGON_PATH_686"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2683"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2684"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2685"]);
      model.grant(elements.id["ID_FMP_POWER_12485"]);
      model.grant(elements.id["ID_FMP_POWER_12486"]);
      model.grant(elements.id["ID_FMP_POWER_12487"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Crystalmind"] = new RulesElement({
    name: "Crystalmind",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_688",
    source: "Dragon Magazine 387",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=688",
    categories: ["Crystalmind", "ID_FMP_PARAGON_PATH_688"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2689"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2690"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2691"]);
      model.grant(elements.id["ID_FMP_POWER_12493"]);
      model.grant(elements.id["ID_FMP_POWER_12494"]);
      model.grant(elements.id["ID_FMP_POWER_12495"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Gatekeeper"] = new RulesElement({
    name: "Gatekeeper",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_687",
    source: "Dragon Magazine 387",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=687",
    categories: ["Gatekeeper", "ID_FMP_PARAGON_PATH_687"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2686"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2687"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2688"]);
      model.grant(elements.id["ID_FMP_POWER_12489"]);
      model.grant(elements.id["ID_FMP_POWER_12490"]);
      model.grant(elements.id["ID_FMP_POWER_12492"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Gatekeeper of the Golden Palace"] = new RulesElement({
    name: "Gatekeeper of the Golden Palace",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_691",
    source: "Dragon Magazine 387",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=691",
    categories: ["Gatekeeper of the Golden Palace", "ID_FMP_PARAGON_PATH_691"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2699"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2700"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2701"]);
      model.grant(elements.id["ID_FMP_POWER_12524"]);
      model.grant(elements.id["ID_FMP_POWER_12525"]);
      model.grant(elements.id["ID_FMP_POWER_12526"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Seer of Endings"] = new RulesElement({
    name: "Seer of Endings",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_690",
    source: "Dragon Magazine 387",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=690",
    categories: ["Seer of Endings", "ID_FMP_PARAGON_PATH_690"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2696"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2697"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2698"]);
      model.grant(elements.id["ID_FMP_POWER_12521"]);
      model.grant(elements.id["ID_FMP_POWER_12522"]);
      model.grant(elements.id["ID_FMP_POWER_12523"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
