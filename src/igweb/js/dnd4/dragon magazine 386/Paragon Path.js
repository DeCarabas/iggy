define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Paragon_Path = types['Paragon Path'] || (types['Paragon Path'] = {});
  te = Paragon_Path["Arrow of the Moonbow"] = new engine.RulesElement({
    name: "Arrow of the Moonbow",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_667",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=667",
    categories: ["Arrow of the Moonbow", "ID_FMP_PARAGON_PATH_667"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2635"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2636"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2637"]);
      model.grant(model.elements.id["ID_FMP_POWER_12291"]);
      model.grant(model.elements.id["ID_FMP_POWER_12292"]);
      model.grant(model.elements.id["ID_FMP_POWER_12293"]);
      model.grant(model.elements.id["ID_FMP_POWER_12294"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Covenant Agent"] = new engine.RulesElement({
    name: "Covenant Agent",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_684",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=684",
    categories: ["Covenant Agent", "ID_FMP_PARAGON_PATH_684"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2677"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2678"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2679"]);
      model.grant(model.elements.id["ID_FMP_POWER_12458"]);
      model.grant(model.elements.id["ID_FMP_POWER_12459"]);
      model.grant(model.elements.id["ID_FMP_POWER_12460"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Goliath Juggernaut"] = new engine.RulesElement({
    name: "Goliath Juggernaut",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_683",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=683",
    categories: ["Goliath Juggernaut", "ID_FMP_PARAGON_PATH_683"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2674"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2675"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2676"]);
      model.grant(model.elements.id["ID_FMP_POWER_12449"]);
      model.grant(model.elements.id["ID_FMP_POWER_12450"]);
      model.grant(model.elements.id["ID_FMP_POWER_12451"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Lightning Blitzer"] = new engine.RulesElement({
    name: "Lightning Blitzer",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_681",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=681",
    categories: ["Lightning Blitzer", "ID_FMP_PARAGON_PATH_681"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2668"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2669"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2670"]);
      model.grant(model.elements.id["ID_FMP_POWER_12443"]);
      model.grant(model.elements.id["ID_FMP_POWER_12444"]);
      model.grant(model.elements.id["ID_FMP_POWER_12445"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Mighty Judge"] = new engine.RulesElement({
    name: "Mighty Judge",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_680",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=680",
    categories: ["Mighty Judge", "ID_FMP_PARAGON_PATH_680"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2664"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2665"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2666"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2667"]);
      model.grant(model.elements.id["ID_FMP_POWER_12440"]);
      model.grant(model.elements.id["ID_FMP_POWER_12441"]);
      model.grant(model.elements.id["ID_FMP_POWER_12442"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Phantasmagoric Scoundrel"] = new engine.RulesElement({
    name: "Phantasmagoric Scoundrel",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_665",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=665",
    categories: ["Phantasmagoric Scoundrel", "ID_FMP_PARAGON_PATH_665"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2627"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2628"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2629"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2630"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2631"]);
      model.grant(model.elements.id["ID_FMP_POWER_12285"]);
      model.grant(model.elements.id["ID_FMP_POWER_12286"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Scion of the All-Spirit"] = new engine.RulesElement({
    name: "Scion of the All-Spirit",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_685",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=685",
    categories: ["Scion of the All-Spirit", "ID_FMP_PARAGON_PATH_685"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2680"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2681"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2682"]);
      model.grant(model.elements.id["ID_FMP_POWER_12461"]);
      model.grant(model.elements.id["ID_FMP_POWER_12462"]);
      model.grant(model.elements.id["ID_FMP_POWER_12464"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Sharakim Blademaster"] = new engine.RulesElement({
    name: "Sharakim Blademaster",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_682",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=682",
    categories: ["Sharakim Blademaster", "ID_FMP_PARAGON_PATH_682"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2671"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2672"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2673"]);
      model.grant(model.elements.id["ID_FMP_POWER_12446"]);
      model.grant(model.elements.id["ID_FMP_POWER_12447"]);
      model.grant(model.elements.id["ID_FMP_POWER_12448"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Silver-Tongued Scoundrel"] = new engine.RulesElement({
    name: "Silver-Tongued Scoundrel",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_666",
    source: "Dragon Magazine 386",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=666",
    categories: ["Silver-Tongued Scoundrel", "ID_FMP_PARAGON_PATH_666"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2632"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2633"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2634"]);
      model.grant(model.elements.id["ID_FMP_POWER_12287"]);
      model.grant(model.elements.id["ID_FMP_POWER_12288"]);
      model.grant(model.elements.id["ID_FMP_POWER_12289"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
