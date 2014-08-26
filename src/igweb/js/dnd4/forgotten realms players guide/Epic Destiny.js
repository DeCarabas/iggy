define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Epic_Destiny = types['Epic Destiny'] || (types['Epic Destiny'] = {});
  te = Epic_Destiny["Chosen"] = new engine.RulesElement({
    name: "Chosen",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_146",
    source: "Forgotten Realms Player's Guide,Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=146",
    categories: ["Chosen", "ID_FMP_EPIC_DESTINY_146"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_527"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_529"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_690"]);
      model.grant(model.elements.id["ID_FMP_POWER_3570"]);
      model.grant(model.elements.id["ID_FMP_POWER_3571"]);
      model.grant(model.elements.id["ID_FMP_POWER_3572"]);
      model.grant(model.elements.id["ID_FMP_POWER_3573"]);
      model.grant(model.elements.id["ID_FMP_POWER_3574"]);
      model.grant(model.elements.id["ID_FMP_POWER_3575"]);
      model.grant(model.elements.id["ID_FMP_POWER_3576"]);
      model.grant(model.elements.id["ID_FMP_POWER_3577"]);
      model.grant(model.elements.id["ID_FMP_POWER_3578"]);
      model.grant(model.elements.id["ID_FMP_POWER_3579"]);
      model.grant(model.elements.id["ID_FMP_POWER_8212"]);
      model.grant(model.elements.id["ID_FMP_POWER_8213"]);
      model.grant(model.elements.id["ID_FMP_POWER_8215"]);
      model.grant(model.elements.id["ID_FMP_POWER_8216"]);
      model.grant(model.elements.id["ID_FMP_POWER_8217"]);
      model.grant(model.elements.id["ID_FMP_POWER_8218"]);
      model.grant(model.elements.id["ID_FMP_POWER_8220"]);
      model.grant(model.elements.id["ID_FMP_POWER_8221"]);
      model.grant(model.elements.id["ID_FMP_POWER_8222"]);
      model.grant(model.elements.id["ID_FMP_POWER_9316"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
