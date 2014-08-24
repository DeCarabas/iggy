(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Epic_Destiny = types['Epic Destiny'] || (types['Epic Destiny'] = {});
  te = Epic_Destiny["Chosen"] = new RulesElement({
    name: "Chosen",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_146",
    source: "Forgotten Realms Player's Guide,Divine Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=146",
    categories: ["Chosen", "ID_FMP_EPIC_DESTINY_146"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_527"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_529"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_690"]);
      model.grant(elements.id["ID_FMP_POWER_3570"]);
      model.grant(elements.id["ID_FMP_POWER_3571"]);
      model.grant(elements.id["ID_FMP_POWER_3572"]);
      model.grant(elements.id["ID_FMP_POWER_3573"]);
      model.grant(elements.id["ID_FMP_POWER_3574"]);
      model.grant(elements.id["ID_FMP_POWER_3575"]);
      model.grant(elements.id["ID_FMP_POWER_3576"]);
      model.grant(elements.id["ID_FMP_POWER_3577"]);
      model.grant(elements.id["ID_FMP_POWER_3578"]);
      model.grant(elements.id["ID_FMP_POWER_3579"]);
      model.grant(elements.id["ID_FMP_POWER_8212"]);
      model.grant(elements.id["ID_FMP_POWER_8213"]);
      model.grant(elements.id["ID_FMP_POWER_8215"]);
      model.grant(elements.id["ID_FMP_POWER_8216"]);
      model.grant(elements.id["ID_FMP_POWER_8217"]);
      model.grant(elements.id["ID_FMP_POWER_8218"]);
      model.grant(elements.id["ID_FMP_POWER_8220"]);
      model.grant(elements.id["ID_FMP_POWER_8221"]);
      model.grant(elements.id["ID_FMP_POWER_8222"]);
      model.grant(elements.id["ID_FMP_POWER_9316"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
