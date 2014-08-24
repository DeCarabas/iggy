(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Epic_Destiny = types['Epic Destiny'] || (types['Epic Destiny'] = {});
  te = Epic_Destiny["Diamond Soul"] = new RulesElement({
    name: "Diamond Soul",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_613",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=613",
    categories: ["Diamond Soul", "ID_FMP_EPIC_DESTINY_613"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2422"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2423"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2424"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2425"]);
      model.grant(elements.id["ID_FMP_POWER_11521"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Godmind"] = new RulesElement({
    name: "Godmind",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_614",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=614",
    categories: ["Godmind", "ID_FMP_EPIC_DESTINY_614"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2428"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2429"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2430"]);
      model.grant(elements.id["ID_FMP_POWER_11522"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Invincible Mind"] = new RulesElement({
    name: "Invincible Mind",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_615",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=615",
    categories: ["Invincible Mind", "ID_FMP_EPIC_DESTINY_615"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2431"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2432"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2433"]);
      model.grant(elements.id["ID_FMP_POWER_11523"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Master of the Eternal Hunt"] = new RulesElement({
    name: "Master of the Eternal Hunt",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_616",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=616",
    categories: ["Master of the Eternal Hunt", "ID_FMP_EPIC_DESTINY_616"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2434"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2435"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2436"]);
      model.grant(elements.id["ID_FMP_POWER_11524"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["Rune Maker"] = new RulesElement({
    name: "Rune Maker",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_617",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=617",
    categories: ["Rune Maker", "ID_FMP_EPIC_DESTINY_617"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2437"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2438"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2439"]);
      model.grant(elements.id["ID_FMP_POWER_11525"]);
    }
  });
  byID[te.id] = te;
  
  te = Epic_Destiny["War Master"] = new RulesElement({
    name: "War Master",
    type: "Epic Destiny",
    id: "ID_FMP_EPIC_DESTINY_618",
    source: "Player's Handbook 3",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=618",
    categories: ["War Master", "ID_FMP_EPIC_DESTINY_618"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2440"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2441"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2442"]);
      model.grant(elements.id["ID_FMP_POWER_11526"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
