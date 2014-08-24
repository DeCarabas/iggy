(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Paragon_Path = types['Paragon Path'] || (types['Paragon Path'] = {});
  te = Paragon_Path["Bralani Wintersoul"] = new RulesElement({
    name: "Bralani Wintersoul",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_619",
    source: "Dragon Magazine 384",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=619",
    categories: ["Bralani Wintersoul", "ID_FMP_PARAGON_PATH_619"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2444"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2445"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2446"]);
      model.grant(elements.id["ID_FMP_POWER_11556"]);
      model.grant(elements.id["ID_FMP_POWER_11557"]);
      model.grant(elements.id["ID_FMP_POWER_11558"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Favored of Mielikki"] = new RulesElement({
    name: "Favored of Mielikki",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_620",
    source: "Dragon Magazine 384",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=620",
    categories: ["Favored of Mielikki", "ID_FMP_PARAGON_PATH_620"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2449"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2450"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2451"]);
      model.grant(elements.id["ID_FMP_POWER_11569"]);
      model.grant(elements.id["ID_FMP_POWER_11570"]);
      model.grant(elements.id["ID_FMP_POWER_11571"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Fortune Blessed"] = new RulesElement({
    name: "Fortune Blessed",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_623",
    source: "Dragon Magazine 384",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=623",
    categories: ["Fortune Blessed", "ID_FMP_PARAGON_PATH_623"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2481"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2483"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2484"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2485"]);
      model.grant(elements.id["ID_FMP_POWER_11716"]);
      model.grant(elements.id["ID_FMP_POWER_11717"]);
      model.grant(elements.id["ID_FMP_POWER_11718"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Gnome Nightcloak"] = new RulesElement({
    name: "Gnome Nightcloak",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_621",
    source: "Dragon Magazine 384",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=621",
    categories: ["Gnome Nightcloak", "ID_FMP_PARAGON_PATH_621"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2475"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2476"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2477"]);
      model.grant(elements.id["ID_FMP_POWER_11627"]);
      model.grant(elements.id["ID_FMP_POWER_11628"]);
      model.grant(elements.id["ID_FMP_POWER_11630"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Phantasm Guard"] = new RulesElement({
    name: "Phantasm Guard",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_622",
    source: "Dragon Magazine 384",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=622",
    categories: ["Phantasm Guard", "ID_FMP_PARAGON_PATH_622"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2478"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2479"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2480"]);
      model.grant(elements.id["ID_FMP_POWER_11631"]);
      model.grant(elements.id["ID_FMP_POWER_11632"]);
      model.grant(elements.id["ID_FMP_POWER_11634"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
