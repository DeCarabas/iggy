(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Epic_Destiny = types['Epic Destiny'] || (types['Epic Destiny'] = {});
  te = Epic_Destiny["Cosmic Soul"] = new RulesElement({
    name: "Cosmic Soul",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_762",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=762",
    categories: ["Cosmic Soul", "ID_FMP_EPIC_DESTINY_762"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_3138"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_3139"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_3140"]);
      model.grant(elements.id["ID_FMP_POWER_13419"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Demiurge"] = new RulesElement({
    name: "Demiurge",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_763",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=763",
    categories: ["Demiurge", "ID_FMP_EPIC_DESTINY_763"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_3141"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_3142"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_3143"]);
      model.grant(elements.id["ID_FMP_POWER_13420"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Eighth Seal"] = new RulesElement({
    name: "Eighth Seal",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_764",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=764",
    categories: ["Eighth Seal", "ID_FMP_EPIC_DESTINY_764"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_3144"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_3145"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_3146"]);
      model.grant(elements.id["ID_FMP_POWER_13421"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Grandmaster of Flowers"] = new RulesElement({
    name: "Grandmaster of Flowers",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_765",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=765",
    categories: ["Grandmaster of Flowers", "ID_FMP_EPIC_DESTINY_765"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_3147"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_3148"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_3149"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_3150"]);
      model.grant(elements.id["ID_FMP_POWER_13422"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Master of Moments"] = new RulesElement({
    name: "Master of Moments",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_766",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=766",
    categories: ["Master of Moments", "ID_FMP_EPIC_DESTINY_766"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_3151"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_3152"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_3153"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_3154"]);
      model.grant(elements.id["ID_FMP_POWER_13423"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Topaz Crusader"] = new RulesElement({
    name: "Topaz Crusader",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_767",
    source: "Psionic Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=767",
    categories: ["Topaz Crusader", "ID_FMP_EPIC_DESTINY_767"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_3155"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_3156"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_3157"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_3158"]);
      model.grant(elements.id["ID_FMP_POWER_13424"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
