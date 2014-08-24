(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Epic_Destiny = types['Epic Destiny'] || (types['Epic Destiny'] = {});
  te = Epic_Destiny["Heir to the Empire"] = new RulesElement({
    name: "Heir to the Empire",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_572",
    source: "Player's Handbook Races: Tiefling",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=572",
    categories: ["Heir to the Empire", "ID_FMP_EPIC_DESTINY_572"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2270"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2271"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2272"]);
      model.grant(elements.id["ID_FMP_POWER_10880"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
