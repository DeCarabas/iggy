(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Epic_Destiny = types['Epic Destiny'] || (types['Epic Destiny'] = {});
  te = Epic_Destiny["Draconic Incarnation"] = new RulesElement({
    name: "Draconic Incarnation",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_696",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=696",
    categories: ["Draconic Incarnation", "ID_FMP_EPIC_DESTINY_696"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2716"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2718"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2719"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2720"]);
      model.grant(elements.id["ID_FMP_POWER_12581"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Heir of Siberys"] = new RulesElement({
    name: "Heir of Siberys",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_699",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=699",
    categories: ["Heir of Siberys", "ID_FMP_EPIC_DESTINY_699"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2729"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2730"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2731"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2732"]);
      model.select('Power', 1, {
        filter: function(model, element) { return (((((((((((element.hasCategory("ID_FMP_POWER_12587") || element.hasCategory("ID_FMP_POWER_12588")) || element.hasCategory("ID_FMP_POWER_12589")) || element.hasCategory("ID_FMP_POWER_12590")) || element.hasCategory("ID_FMP_POWER_12591")) || element.hasCategory("ID_FMP_POWER_12592")) || element.hasCategory("ID_FMP_POWER_12593")) || element.hasCategory("ID_FMP_POWER_12594")) || element.hasCategory("ID_FMP_POWER_12595")) || element.hasCategory("ID_FMP_POWER_12596")) || element.hasCategory("ID_FMP_POWER_12597")) || element.hasCategory("ID_FMP_POWER_12598")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Thief of Legend"] = new RulesElement({
    name: "Thief of Legend",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_697",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=697",
    categories: ["Thief of Legend", "ID_FMP_EPIC_DESTINY_697"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2721"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2722"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2723"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2724"]);
      model.grant(elements.id["ID_FMP_POWER_12584"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Unyielding Sentinel"] = new RulesElement({
    name: "Unyielding Sentinel",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_698",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=698",
    categories: ["Unyielding Sentinel", "ID_FMP_EPIC_DESTINY_698"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2725"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2726"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2728"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2727"]);
      model.grant(elements.id["ID_FMP_POWER_12585"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
