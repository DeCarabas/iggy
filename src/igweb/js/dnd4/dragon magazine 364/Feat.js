(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Feat = types['Feat'] || (types['Feat'] = {});
  te = Feat["Against All Odds"] = new RulesElement({
    name: "Against All Odds",
    type: "Feat",
    id: "ID_FMP_FEAT_449",
    source: "Dragon Magazine 364",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=449",
    categories: ["Against All Odds", "ID_FMP_FEAT_449"],
    rules: function(model) {
      model.statadd("attack rolls", function() { /* if three or more enemies were adjacent to you at the start of your turn */ return 1; });
      model.statadd("damage rolls", function() { /* if three or more enemies were adjacent to you at the start of your turn */ return 1; });
    }
  });
  byID[te.id] = te;
  
  
})(this);
