(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Paragon_Path = types['Paragon Path'] || (types['Paragon Path'] = {});
  te = Paragon_Path["Ancestral Weapon"] = new RulesElement({
    name: "Ancestral Weapon",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_475",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=475",
    categories: ["Ancestral Weapon", "ID_FMP_PARAGON_PATH_475"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1958"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1959"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1960"]);
      model.grant(elements.id["ID_FMP_POWER_9611"]);
      model.grant(elements.id["ID_FMP_POWER_9612"]);
      model.grant(elements.id["ID_FMP_POWER_9613"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Building Thunder"] = new RulesElement({
    name: "Building Thunder",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_476",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=476",
    categories: ["Building Thunder", "ID_FMP_PARAGON_PATH_476"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1961"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1962"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1963"]);
      model.grant(elements.id["ID_FMP_POWER_9614"]);
      model.grant(elements.id["ID_FMP_POWER_9615"]);
      model.grant(elements.id["ID_FMP_POWER_9616"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Calm Fury"] = new RulesElement({
    name: "Calm Fury",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_477",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=477",
    categories: ["Calm Fury", "ID_FMP_PARAGON_PATH_477"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1964"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1965"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1966"]);
      model.grant(elements.id["ID_FMP_POWER_9618"]);
      model.grant(elements.id["ID_FMP_POWER_9619"]);
      model.grant(elements.id["ID_FMP_POWER_9620"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Child of the North Wind"] = new RulesElement({
    name: "Child of the North Wind",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_496",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=496",
    categories: ["Child of the North Wind", "ID_FMP_PARAGON_PATH_496"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2028"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2029"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2030"]);
      model.grant(elements.id["ID_FMP_POWER_9930"]);
      model.grant(elements.id["ID_FMP_POWER_9931"]);
      model.grant(elements.id["ID_FMP_POWER_9933"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Coiled Serpent"] = new RulesElement({
    name: "Coiled Serpent",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_482",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=482",
    categories: ["Coiled Serpent", "ID_FMP_PARAGON_PATH_482"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1981"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1982"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1983"]);
      model.grant(elements.id["ID_FMP_POWER_9709"]);
      model.grant(elements.id["ID_FMP_POWER_9710"]);
      model.grant(elements.id["ID_FMP_POWER_9711"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Death's Thane"] = new RulesElement({
    name: "Death's Thane",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_478",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=478",
    categories: ["Death's Thane", "ID_FMP_PARAGON_PATH_478"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1967"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1968"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1969"]);
      model.grant(elements.id["ID_FMP_POWER_9621"]);
      model.grant(elements.id["ID_FMP_POWER_9622"]);
      model.grant(elements.id["ID_FMP_POWER_9623"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Disciple of Winds"] = new RulesElement({
    name: "Disciple of Winds",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_489",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=489",
    categories: ["Disciple of Winds", "ID_FMP_PARAGON_PATH_489"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2005"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2006"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2007"]);
      model.grant(elements.id["ID_FMP_POWER_9792"]);
      model.grant(elements.id["ID_FMP_POWER_9793"]);
      model.grant(elements.id["ID_FMP_POWER_9794"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Earth Shaker"] = new RulesElement({
    name: "Earth Shaker",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_497",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=497",
    categories: ["Earth Shaker", "ID_FMP_PARAGON_PATH_497"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2031"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2032"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2033"]);
      model.grant(elements.id["ID_FMP_POWER_9934"]);
      model.grant(elements.id["ID_FMP_POWER_9935"]);
      model.grant(elements.id["ID_FMP_POWER_9937"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Emerald Guardian"] = new RulesElement({
    name: "Emerald Guardian",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_498",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=498",
    categories: ["Emerald Guardian", "ID_FMP_PARAGON_PATH_498"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2034"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2035"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2036"]);
      model.grant(elements.id["ID_FMP_POWER_9938"]);
      model.grant(elements.id["ID_FMP_POWER_9939"]);
      model.grant(elements.id["ID_FMP_POWER_9941"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Everflame Guardian"] = new RulesElement({
    name: "Everflame Guardian",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_490",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=490",
    categories: ["Everflame Guardian", "ID_FMP_PARAGON_PATH_490"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2008"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2009"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2010"]);
      model.grant(elements.id["ID_FMP_POWER_9795"]);
      model.grant(elements.id["ID_FMP_POWER_9796"]);
      model.grant(elements.id["ID_FMP_POWER_9798"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["First Hunter"] = new RulesElement({
    name: "First Hunter",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_499",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=499",
    categories: ["First Hunter", "ID_FMP_PARAGON_PATH_499"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2037"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2038"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2039"]);
      model.grant(elements.id["ID_FMP_POWER_9942"]);
      model.grant(elements.id["ID_FMP_POWER_9943"]);
      model.grant(elements.id["ID_FMP_POWER_9945"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Great Elder"] = new RulesElement({
    name: "Great Elder",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_491",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=491",
    categories: ["Great Elder", "ID_FMP_PARAGON_PATH_491"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2011"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2012"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2013"]);
      model.grant(elements.id["ID_FMP_POWER_9799"]);
      model.grant(elements.id["ID_FMP_POWER_9800"]);
      model.grant(elements.id["ID_FMP_POWER_9801"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Icewrought Sentinel"] = new RulesElement({
    name: "Icewrought Sentinel",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_500",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=500",
    categories: ["Icewrought Sentinel", "ID_FMP_PARAGON_PATH_500"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2040"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2041"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2042"]);
      model.grant(elements.id["ID_FMP_POWER_9946"]);
      model.grant(elements.id["ID_FMP_POWER_9947"]);
      model.grant(elements.id["ID_FMP_POWER_10042"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Keen Eagle"] = new RulesElement({
    name: "Keen Eagle",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_492",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=492",
    categories: ["Keen Eagle", "ID_FMP_PARAGON_PATH_492"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2014"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2015"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2016"]);
      model.grant(elements.id["ID_FMP_POWER_9802"]);
      model.grant(elements.id["ID_FMP_POWER_9803"]);
      model.grant(elements.id["ID_FMP_POWER_9804"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Luminescent Swarm"] = new RulesElement({
    name: "Luminescent Swarm",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_483",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=483",
    categories: ["Luminescent Swarm", "ID_FMP_PARAGON_PATH_483"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1984"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1985"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1986"]);
      model.grant(elements.id["ID_FMP_POWER_9712"]);
      model.grant(elements.id["ID_FMP_POWER_9713"]);
      model.grant(elements.id["ID_FMP_POWER_9714"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Pack Lord"] = new RulesElement({
    name: "Pack Lord",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_484",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=484",
    categories: ["Pack Lord", "ID_FMP_PARAGON_PATH_484"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1987"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1988"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1989"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1990"]);
      model.grant(elements.id["ID_FMP_POWER_9715"]);
      model.grant(elements.id["ID_FMP_POWER_9717"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Primal Summoner"] = new RulesElement({
    name: "Primal Summoner",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_485",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=485",
    categories: ["Primal Summoner", "ID_FMP_PARAGON_PATH_485"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1991"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1992"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1993"]);
      model.grant(elements.id["ID_FMP_POWER_9718"]);
      model.grant(elements.id["ID_FMP_POWER_9719"]);
      model.grant(elements.id["ID_FMP_POWER_9720"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Radiant Serpent"] = new RulesElement({
    name: "Radiant Serpent",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_501",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=501",
    categories: ["Radiant Serpent", "ID_FMP_PARAGON_PATH_501"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2043"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2044"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2045"]);
      model.grant(elements.id["ID_FMP_POWER_9949"]);
      model.grant(elements.id["ID_FMP_POWER_9950"]);
      model.grant(elements.id["ID_FMP_POWER_9952"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Scarred Healer"] = new RulesElement({
    name: "Scarred Healer",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_493",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=493",
    categories: ["Scarred Healer", "ID_FMP_PARAGON_PATH_493"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2017"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2018"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2019"]);
      model.grant(elements.id["ID_FMP_POWER_9805"]);
      model.grant(elements.id["ID_FMP_POWER_9806"]);
      model.grant(elements.id["ID_FMP_POWER_9807"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Seasons' Herald"] = new RulesElement({
    name: "Seasons' Herald",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_494",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=494",
    categories: ["Seasons' Herald", "ID_FMP_PARAGON_PATH_494"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2020"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2021"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2022"]);
      model.grant(elements.id["ID_FMP_POWER_9808"]);
      model.grant(elements.id["ID_FMP_POWER_9809"]);
      model.grant(elements.id["ID_FMP_POWER_9810"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Spiral Wind's Ally"] = new RulesElement({
    name: "Spiral Wind's Ally",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_486",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=486",
    categories: ["Spiral Wind's Ally", "ID_FMP_PARAGON_PATH_486"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1994"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1995"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1996"]);
      model.grant(elements.id["ID_FMP_POWER_9721"]);
      model.grant(elements.id["ID_FMP_POWER_9722"]);
      model.grant(elements.id["ID_FMP_POWER_9723"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Stonefire Rager"] = new RulesElement({
    name: "Stonefire Rager",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_479",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=479",
    categories: ["Stonefire Rager", "ID_FMP_PARAGON_PATH_479"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1971"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1972"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1973"]);
      model.grant(elements.id["ID_FMP_POWER_9624"]);
      model.grant(elements.id["ID_FMP_POWER_9625"]);
      model.grant(elements.id["ID_FMP_POWER_9626"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Storm Speaker"] = new RulesElement({
    name: "Storm Speaker",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_487",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=487",
    categories: ["Storm Speaker", "ID_FMP_PARAGON_PATH_487"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1997"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1998"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1999"]);
      model.grant(elements.id["ID_FMP_POWER_9724"]);
      model.grant(elements.id["ID_FMP_POWER_9725"]);
      model.grant(elements.id["ID_FMP_POWER_9727"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Tribal Champion"] = new RulesElement({
    name: "Tribal Champion",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_502",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=502",
    categories: ["Tribal Champion", "ID_FMP_PARAGON_PATH_502"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2046"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2047"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2048"]);
      model.grant(elements.id["ID_FMP_POWER_9953"]);
      model.grant(elements.id["ID_FMP_POWER_9954"]);
      model.grant(elements.id["ID_FMP_POWER_9956"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Twinclaw Slayer"] = new RulesElement({
    name: "Twinclaw Slayer",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_480",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=480",
    categories: ["Twinclaw Slayer", "ID_FMP_PARAGON_PATH_480"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1974"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1975"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1976"]);
      model.grant(elements.id["ID_FMP_POWER_9627"]);
      model.grant(elements.id["ID_FMP_POWER_9628"]);
      model.grant(elements.id["ID_FMP_POWER_9629"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Warrior of Spring"] = new RulesElement({
    name: "Warrior of Spring",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_495",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=495",
    categories: ["Warrior of Spring", "ID_FMP_PARAGON_PATH_495"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2023"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2024"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2025"]);
      model.grant(elements.id["ID_FMP_POWER_9811"]);
      model.grant(elements.id["ID_FMP_POWER_9812"]);
      model.grant(elements.id["ID_FMP_POWER_9813"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Whirling Samara"] = new RulesElement({
    name: "Whirling Samara",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_488",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=488",
    categories: ["Whirling Samara", "ID_FMP_PARAGON_PATH_488"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2000"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2001"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2002"]);
      model.grant(elements.id["ID_FMP_POWER_9728"]);
      model.grant(elements.id["ID_FMP_POWER_9729"]);
      model.grant(elements.id["ID_FMP_POWER_9731"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Winter Fury"] = new RulesElement({
    name: "Winter Fury",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_481",
    source: "Primal Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=481",
    categories: ["Winter Fury", "ID_FMP_PARAGON_PATH_481"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1977"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1978"]);
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1979"]);
      model.grant(elements.id["ID_FMP_POWER_9630"]);
      model.grant(elements.id["ID_FMP_POWER_9631"]);
      model.grant(elements.id["ID_FMP_POWER_9632"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
