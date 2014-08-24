(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Epic_Destiny = types['Epic Destiny'] || (types['Epic Destiny'] = {});
  te = Epic_Destiny["Elf High Mage"] = new RulesElement({
    name: "Elf High Mage",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_209",
    source: "Dragon Magazine 367",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=209",
    categories: ["Elf High Mage", "ID_FMP_EPIC_DESTINY_209"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1037"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1034"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1035"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1036"]);
      model.grant(elements.id["ID_FMP_POWER_4785"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Harper of Legend"] = new RulesElement({
    name: "Harper of Legend",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_210",
    source: "Dragon Magazine 367",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=210",
    categories: ["Harper of Legend", "ID_FMP_EPIC_DESTINY_210"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1038"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1039"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1040"]);
      model.grant(elements.id["ID_FMP_POWER_4786"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Redeemed Drow"] = new RulesElement({
    name: "Redeemed Drow",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_213",
    source: "Dragon Magazine 367",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=213",
    categories: ["Redeemed Drow", "ID_FMP_EPIC_DESTINY_213"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1048"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1049"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1050"]);
      model.grant(elements.id["ID_FMP_POWER_4794"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
