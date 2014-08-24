(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Deity = types['Deity'] || (types['Deity'] = {});
  te = Deity["Abbathor"] = new RulesElement({
    name: "Abbathor",
    type: "Deity",
    id: "ID_FMP_DEITY_52",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=52",
    categories: ["Abbathor", "ID_FMP_DEITY_52"]
  });
  byID[te.id] = te;
  
  te = Deity["Akadi"] = new RulesElement({
    name: "Akadi",
    type: "Deity",
    id: "ID_FMP_DEITY_47",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=47",
    categories: ["Akadi", "ID_FMP_DEITY_47"]
  });
  byID[te.id] = te;
  
  te = Deity["Amaunator"] = new RulesElement({
    name: "Amaunator",
    type: "Deity",
    id: "ID_FMP_DEITY_14",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=14",
    categories: ["Amaunator", "ID_FMP_DEITY_14"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_DOMAIN_3"]);
      model.grant(elements.id["ID_FMP_DOMAIN_12"]);
      model.grant(elements.id["ID_FMP_DOMAIN_26"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["Angharradh"] = new RulesElement({
    name: "Angharradh",
    type: "Deity",
    id: "ID_FMP_DEITY_30",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=30",
    categories: ["Angharradh", "ID_FMP_DEITY_30"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_DOMAIN_11"]);
      model.grant(elements.id["ID_FMP_DOMAIN_20"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["Arvoreen"] = new RulesElement({
    name: "Arvoreen",
    type: "Deity",
    id: "ID_FMP_DEITY_53",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=53",
    categories: ["Arvoreen", "ID_FMP_DEITY_53"]
  });
  byID[te.id] = te;
  
  te = Deity["Asmodeus (Forgotten Realms)"] = new RulesElement({
    name: "Asmodeus (Forgotten Realms)",
    type: "Deity",
    id: "ID_FMP_DEITY_137",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=137",
    categories: ["Asmodeus (Forgotten Realms)", "ID_FMP_DEITY_137"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_DOMAIN_13"]);
      model.grant(elements.id["ID_FMP_DOMAIN_27"]);
      model.grant(elements.id["ID_FMP_DOMAIN_29"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["Auril"] = new RulesElement({
    name: "Auril",
    type: "Deity",
    id: "ID_FMP_DEITY_31",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=31",
    categories: ["Auril", "ID_FMP_DEITY_31"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_DOMAIN_23"]);
      model.grant(elements.id["ID_FMP_DOMAIN_34"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["Baalzebul"] = new RulesElement({
    name: "Baalzebul",
    type: "Deity",
    id: "ID_FMP_DEITY_95",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=95",
    categories: ["Baalzebul", "ID_FMP_DEITY_95"]
  });
  byID[te.id] = te;
  
  te = Deity["Baervan Wildwanderer"] = new RulesElement({
    name: "Baervan Wildwanderer",
    type: "Deity",
    id: "ID_FMP_DEITY_54",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=54",
    categories: ["Baervan Wildwanderer", "ID_FMP_DEITY_54"]
  });
  byID[te.id] = te;
  
  te = Deity["Bahamut (Forgotten Realms)"] = new RulesElement({
    name: "Bahamut (Forgotten Realms)",
    type: "Deity",
    id: "ID_FMP_DEITY_136",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=136",
    categories: ["Bahamut (Forgotten Realms)", "ID_FMP_DEITY_136"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_DOMAIN_12"]);
      model.grant(elements.id["ID_FMP_DOMAIN_24"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["Bahgtru"] = new RulesElement({
    name: "Bahgtru",
    type: "Deity",
    id: "ID_FMP_DEITY_55",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=55",
    categories: ["Bahgtru", "ID_FMP_DEITY_55"]
  });
  byID[te.id] = te;
  
  te = Deity["Bane (Forgotten Realms)"] = new RulesElement({
    name: "Bane (Forgotten Realms)",
    type: "Deity",
    id: "ID_FMP_DEITY_138",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=138",
    categories: ["Bane (Forgotten Realms)", "ID_FMP_DEITY_138"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_DOMAIN_3"]);
      model.grant(elements.id["ID_FMP_DOMAIN_29"]);
      model.grant(elements.id["ID_FMP_DOMAIN_32"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["Baravar Cloakshadow"] = new RulesElement({
    name: "Baravar Cloakshadow",
    type: "Deity",
    id: "ID_FMP_DEITY_56",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=56",
    categories: ["Baravar Cloakshadow", "ID_FMP_DEITY_56"]
  });
  byID[te.id] = te;
  
  te = Deity["Bazim-Gorag"] = new RulesElement({
    name: "Bazim-Gorag",
    type: "Deity",
    id: "ID_FMP_DEITY_48",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=48",
    categories: ["Bazim-Gorag", "ID_FMP_DEITY_48"]
  });
  byID[te.id] = te;
  
  te = Deity["Bel"] = new RulesElement({
    name: "Bel",
    type: "Deity",
    id: "ID_FMP_DEITY_89",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=89",
    categories: ["Bel", "ID_FMP_DEITY_89"]
  });
  byID[te.id] = te;
  
  te = Deity["Belial"] = new RulesElement({
    name: "Belial",
    type: "Deity",
    id: "ID_FMP_DEITY_92",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=92",
    categories: ["Belial", "ID_FMP_DEITY_92"]
  });
  byID[te.id] = te;
  
  te = Deity["Berronar Truesilver"] = new RulesElement({
    name: "Berronar Truesilver",
    type: "Deity",
    id: "ID_FMP_DEITY_32",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=32",
    categories: ["Berronar Truesilver", "ID_FMP_DEITY_32"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_DOMAIN_14"]);
      model.grant(elements.id["ID_FMP_DOMAIN_20"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["Beshaba"] = new RulesElement({
    name: "Beshaba",
    type: "Deity",
    id: "ID_FMP_DEITY_33",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=33",
    categories: ["Beshaba", "ID_FMP_DEITY_33"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_DOMAIN_9"]);
      model.grant(elements.id["ID_FMP_DOMAIN_28"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["Brandobaris"] = new RulesElement({
    name: "Brandobaris",
    type: "Deity",
    id: "ID_FMP_DEITY_57",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=57",
    categories: ["Brandobaris", "ID_FMP_DEITY_57"]
  });
  byID[te.id] = te;
  
  te = Deity["Callarduran Smoothhands"] = new RulesElement({
    name: "Callarduran Smoothhands",
    type: "Deity",
    id: "ID_FMP_DEITY_58",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=58",
    categories: ["Callarduran Smoothhands", "ID_FMP_DEITY_58"]
  });
  byID[te.id] = te;
  
  te = Deity["Chauntea"] = new RulesElement({
    name: "Chauntea",
    type: "Deity",
    id: "ID_FMP_DEITY_17",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=17",
    categories: ["Chauntea", "ID_FMP_DEITY_17"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_DOMAIN_8"]);
      model.grant(elements.id["ID_FMP_DOMAIN_11"]);
      model.grant(elements.id["ID_FMP_DOMAIN_14"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["Clangeddin Silverbeard"] = new RulesElement({
    name: "Clangeddin Silverbeard",
    type: "Deity",
    id: "ID_FMP_DEITY_59",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=59",
    categories: ["Clangeddin Silverbeard", "ID_FMP_DEITY_59"]
  });
  byID[te.id] = te;
  
  te = Deity["Corellon (Forgotten Realms)"] = new RulesElement({
    name: "Corellon (Forgotten Realms)",
    type: "Deity",
    id: "ID_FMP_DEITY_142",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=142",
    categories: ["Corellon (Forgotten Realms)", "ID_FMP_DEITY_142"]
  });
  byID[te.id] = te;
  
  te = Deity["Cyric"] = new RulesElement({
    name: "Cyric",
    type: "Deity",
    id: "ID_FMP_DEITY_18",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=18",
    categories: ["Cyric", "ID_FMP_DEITY_18"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_DOMAIN_17"]);
      model.grant(elements.id["ID_FMP_DOMAIN_25"]);
      model.grant(elements.id["ID_FMP_DOMAIN_28"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["Cyrrollalee"] = new RulesElement({
    name: "Cyrrollalee",
    type: "Deity",
    id: "ID_FMP_DEITY_60",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=60",
    categories: ["Cyrrollalee", "ID_FMP_DEITY_60"]
  });
  byID[te.id] = te;
  
  te = Deity["Deep Sashelas"] = new RulesElement({
    name: "Deep Sashelas",
    type: "Deity",
    id: "ID_FMP_DEITY_61",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=61",
    categories: ["Deep Sashelas", "ID_FMP_DEITY_61"]
  });
  byID[te.id] = te;
  
  te = Deity["Dispater"] = new RulesElement({
    name: "Dispater",
    type: "Deity",
    id: "ID_FMP_DEITY_90",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=90",
    categories: ["Dispater", "ID_FMP_DEITY_90"]
  });
  byID[te.id] = te;
  
  te = Deity["Dugmaren Brightmantle"] = new RulesElement({
    name: "Dugmaren Brightmantle",
    type: "Deity",
    id: "ID_FMP_DEITY_62",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=62",
    categories: ["Dugmaren Brightmantle", "ID_FMP_DEITY_62"]
  });
  byID[te.id] = te;
  
  te = Deity["Erevan Ilesere"] = new RulesElement({
    name: "Erevan Ilesere",
    type: "Deity",
    id: "ID_FMP_DEITY_63",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=63",
    categories: ["Erevan Ilesere", "ID_FMP_DEITY_63"]
  });
  byID[te.id] = te;
  
  te = Deity["Fenmarel Mestarine"] = new RulesElement({
    name: "Fenmarel Mestarine",
    type: "Deity",
    id: "ID_FMP_DEITY_64",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=64",
    categories: ["Fenmarel Mestarine", "ID_FMP_DEITY_64"]
  });
  byID[te.id] = te;
  
  te = Deity["Fzoul Chembryl"] = new RulesElement({
    name: "Fzoul Chembryl",
    type: "Deity",
    id: "ID_FMP_DEITY_65",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=65",
    categories: ["Fzoul Chembryl", "ID_FMP_DEITY_65"]
  });
  byID[te.id] = te;
  
  te = Deity["Garagos"] = new RulesElement({
    name: "Garagos",
    type: "Deity",
    id: "ID_FMP_DEITY_66",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=66",
    categories: ["Garagos", "ID_FMP_DEITY_66"]
  });
  byID[te.id] = te;
  
  te = Deity["Garl Glittergold"] = new RulesElement({
    name: "Garl Glittergold",
    type: "Deity",
    id: "ID_FMP_DEITY_34",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=34",
    categories: ["Garl Glittergold", "ID_FMP_DEITY_34"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_DOMAIN_4"]);
      model.grant(elements.id["ID_FMP_DOMAIN_28"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["Ghaunadaur"] = new RulesElement({
    name: "Ghaunadaur",
    type: "Deity",
    id: "ID_FMP_DEITY_19",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=19",
    categories: ["Ghaunadaur", "ID_FMP_DEITY_19"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_DOMAIN_7"]);
      model.grant(elements.id["ID_FMP_DOMAIN_8"]);
      model.grant(elements.id["ID_FMP_DOMAIN_17"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["Glasya"] = new RulesElement({
    name: "Glasya",
    type: "Deity",
    id: "ID_FMP_DEITY_94",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=94",
    categories: ["Glasya", "ID_FMP_DEITY_94"]
  });
  byID[te.id] = te;
  
  te = Deity["Gond"] = new RulesElement({
    name: "Gond",
    type: "Deity",
    id: "ID_FMP_DEITY_35",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=35",
    categories: ["Gond", "ID_FMP_DEITY_35"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_DOMAIN_4"]);
      model.grant(elements.id["ID_FMP_DOMAIN_13"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["Grumbar"] = new RulesElement({
    name: "Grumbar",
    type: "Deity",
    id: "ID_FMP_DEITY_49",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=49",
    categories: ["Grumbar", "ID_FMP_DEITY_49"]
  });
  byID[te.id] = te;
  
  te = Deity["Gruumsh (Forgotten Realms)"] = new RulesElement({
    name: "Gruumsh (Forgotten Realms)",
    type: "Deity",
    id: "ID_FMP_DEITY_139",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=139",
    categories: ["Gruumsh (Forgotten Realms)", "ID_FMP_DEITY_139"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_DOMAIN_7"]);
      model.grant(elements.id["ID_FMP_DOMAIN_23"]);
      model.grant(elements.id["ID_FMP_DOMAIN_24"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["Hoar"] = new RulesElement({
    name: "Hoar",
    type: "Deity",
    id: "ID_FMP_DEITY_67",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=67",
    categories: ["Hoar", "ID_FMP_DEITY_67"]
  });
  byID[te.id] = te;
  
  te = Deity["Hruggek"] = new RulesElement({
    name: "Hruggek",
    type: "Deity",
    id: "ID_FMP_DEITY_68",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=68",
    categories: ["Hruggek", "ID_FMP_DEITY_68"]
  });
  byID[te.id] = te;
  
  te = Deity["Ilmater"] = new RulesElement({
    name: "Ilmater",
    type: "Deity",
    id: "ID_FMP_DEITY_36",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=36",
    categories: ["Ilmater", "ID_FMP_DEITY_36"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_DOMAIN_10"]);
      model.grant(elements.id["ID_FMP_DOMAIN_11"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["Istishia"] = new RulesElement({
    name: "Istishia",
    type: "Deity",
    id: "ID_FMP_DEITY_50",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=50",
    categories: ["Istishia", "ID_FMP_DEITY_50"]
  });
  byID[te.id] = te;
  
  te = Deity["Jergal"] = new RulesElement({
    name: "Jergal",
    type: "Deity",
    id: "ID_FMP_DEITY_69",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=69",
    categories: ["Jergal", "ID_FMP_DEITY_69"]
  });
  byID[te.id] = te;
  
  te = Deity["Kelemvor"] = new RulesElement({
    name: "Kelemvor",
    type: "Deity",
    id: "ID_FMP_DEITY_21",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=21",
    categories: ["Kelemvor", "ID_FMP_DEITY_21"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_DOMAIN_6"]);
      model.grant(elements.id["ID_FMP_DOMAIN_9"]);
      model.grant(elements.id["ID_FMP_DOMAIN_12"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["Kossuth"] = new RulesElement({
    name: "Kossuth",
    type: "Deity",
    id: "ID_FMP_DEITY_51",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=51",
    categories: ["Kossuth", "ID_FMP_DEITY_51"]
  });
  byID[te.id] = te;
  
  te = Deity["Labelas Enoreth"] = new RulesElement({
    name: "Labelas Enoreth",
    type: "Deity",
    id: "ID_FMP_DEITY_70",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=70",
    categories: ["Labelas Enoreth", "ID_FMP_DEITY_70"]
  });
  byID[te.id] = te;
  
  te = Deity["Levistus"] = new RulesElement({
    name: "Levistus",
    type: "Deity",
    id: "ID_FMP_DEITY_93",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=93",
    categories: ["Levistus", "ID_FMP_DEITY_93"]
  });
  byID[te.id] = te;
  
  te = Deity["Lliira"] = new RulesElement({
    name: "Lliira",
    type: "Deity",
    id: "ID_FMP_DEITY_71",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=71",
    categories: ["Lliira", "ID_FMP_DEITY_71"]
  });
  byID[te.id] = te;
  
  te = Deity["Lolth (Forgotten Realms)"] = new RulesElement({
    name: "Lolth (Forgotten Realms)",
    type: "Deity",
    id: "ID_FMP_DEITY_140",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=140",
    categories: ["Lolth (Forgotten Realms)", "ID_FMP_DEITY_140"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_DOMAIN_5"]);
      model.grant(elements.id["ID_FMP_DOMAIN_19"]);
      model.grant(elements.id["ID_FMP_DOMAIN_25"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["Loviatar"] = new RulesElement({
    name: "Loviatar",
    type: "Deity",
    id: "ID_FMP_DEITY_37",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=37",
    categories: ["Loviatar", "ID_FMP_DEITY_37"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_DOMAIN_27"]);
      model.grant(elements.id["ID_FMP_DOMAIN_31"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["Luthic"] = new RulesElement({
    name: "Luthic",
    type: "Deity",
    id: "ID_FMP_DEITY_38",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=38",
    categories: ["Luthic", "ID_FMP_DEITY_38"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_DOMAIN_8"]);
      model.grant(elements.id["ID_FMP_DOMAIN_20"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["Maglubiyet"] = new RulesElement({
    name: "Maglubiyet",
    type: "Deity",
    id: "ID_FMP_DEITY_72",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=72",
    categories: ["Maglubiyet", "ID_FMP_DEITY_72"]
  });
  byID[te.id] = te;
  
  te = Deity["Malar"] = new RulesElement({
    name: "Malar",
    type: "Deity",
    id: "ID_FMP_DEITY_73",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=73",
    categories: ["Malar", "ID_FMP_DEITY_73"]
  });
  byID[te.id] = te;
  
  te = Deity["Mammon"] = new RulesElement({
    name: "Mammon",
    type: "Deity",
    id: "ID_FMP_DEITY_91",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=91",
    categories: ["Mammon", "ID_FMP_DEITY_91"]
  });
  byID[te.id] = te;
  
  te = Deity["Marthammor Duin"] = new RulesElement({
    name: "Marthammor Duin",
    type: "Deity",
    id: "ID_FMP_DEITY_74",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=74",
    categories: ["Marthammor Duin", "ID_FMP_DEITY_74"]
  });
  byID[te.id] = te;
  
  te = Deity["Mephistopheles"] = new RulesElement({
    name: "Mephistopheles",
    type: "Deity",
    id: "ID_FMP_DEITY_96",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=96",
    categories: ["Mephistopheles", "ID_FMP_DEITY_96"]
  });
  byID[te.id] = te;
  
  te = Deity["Mielikki"] = new RulesElement({
    name: "Mielikki",
    type: "Deity",
    id: "ID_FMP_DEITY_39",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=39",
    categories: ["Mielikki", "ID_FMP_DEITY_39"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_DOMAIN_10"]);
      model.grant(elements.id["ID_FMP_DOMAIN_33"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["Milil"] = new RulesElement({
    name: "Milil",
    type: "Deity",
    id: "ID_FMP_DEITY_75",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=75",
    categories: ["Milil", "ID_FMP_DEITY_75"]
  });
  byID[te.id] = te;
  
  te = Deity["Obould"] = new RulesElement({
    name: "Obould",
    type: "Deity",
    id: "ID_FMP_DEITY_76",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=76",
    categories: ["Obould", "ID_FMP_DEITY_76"]
  });
  byID[te.id] = te;
  
  te = Deity["Oghma"] = new RulesElement({
    name: "Oghma",
    type: "Deity",
    id: "ID_FMP_DEITY_23",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=23",
    categories: ["Oghma", "ID_FMP_DEITY_23"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_DOMAIN_13"]);
      model.grant(elements.id["ID_FMP_DOMAIN_22"]);
      model.grant(elements.id["ID_FMP_DOMAIN_28"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["Selûne"] = new RulesElement({
    name: "Selûne",
    type: "Deity",
    id: "ID_FMP_DEITY_24",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=24",
    categories: ["Selûne", "ID_FMP_DEITY_24"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_DOMAIN_1"]);
      model.grant(elements.id["ID_FMP_DOMAIN_2"]);
      model.grant(elements.id["ID_FMP_DOMAIN_18"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["Shar"] = new RulesElement({
    name: "Shar",
    type: "Deity",
    id: "ID_FMP_DEITY_25",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=25",
    categories: ["Shar", "ID_FMP_DEITY_25"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_DOMAIN_5"]);
      model.grant(elements.id["ID_FMP_DOMAIN_13"]);
      model.grant(elements.id["ID_FMP_DOMAIN_30"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["Sharess"] = new RulesElement({
    name: "Sharess",
    type: "Deity",
    id: "ID_FMP_DEITY_78",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=78",
    categories: ["Sharess", "ID_FMP_DEITY_78"]
  });
  byID[te.id] = te;
  
  te = Deity["Shargaas"] = new RulesElement({
    name: "Shargaas",
    type: "Deity",
    id: "ID_FMP_DEITY_79",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=79",
    categories: ["Shargaas", "ID_FMP_DEITY_79"]
  });
  byID[te.id] = te;
  
  te = Deity["Sheela Peryroyl"] = new RulesElement({
    name: "Sheela Peryroyl",
    type: "Deity",
    id: "ID_FMP_DEITY_40",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=40",
    categories: ["Sheela Peryroyl", "ID_FMP_DEITY_40"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_DOMAIN_15"]);
      model.grant(elements.id["ID_FMP_DOMAIN_33"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["Shevarash"] = new RulesElement({
    name: "Shevarash",
    type: "Deity",
    id: "ID_FMP_DEITY_80",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=80",
    categories: ["Shevarash", "ID_FMP_DEITY_80"]
  });
  byID[te.id] = te;
  
  te = Deity["Shiallia"] = new RulesElement({
    name: "Shiallia",
    type: "Deity",
    id: "ID_FMP_DEITY_81",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=81",
    categories: ["Shiallia", "ID_FMP_DEITY_81"]
  });
  byID[te.id] = te;
  
  te = Deity["Siamorphe"] = new RulesElement({
    name: "Siamorphe",
    type: "Deity",
    id: "ID_FMP_DEITY_82",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=82",
    categories: ["Siamorphe", "ID_FMP_DEITY_82"]
  });
  byID[te.id] = te;
  
  te = Deity["Silvanus"] = new RulesElement({
    name: "Silvanus",
    type: "Deity",
    id: "ID_FMP_DEITY_26",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=26",
    categories: ["Silvanus", "ID_FMP_DEITY_26"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_DOMAIN_14"]);
      model.grant(elements.id["ID_FMP_DOMAIN_23"]);
      model.grant(elements.id["ID_FMP_DOMAIN_33"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["Solonor Thelandira"] = new RulesElement({
    name: "Solonor Thelandira",
    type: "Deity",
    id: "ID_FMP_DEITY_83",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=83",
    categories: ["Solonor Thelandira", "ID_FMP_DEITY_83"]
  });
  byID[te.id] = te;
  
  te = Deity["Sseth"] = new RulesElement({
    name: "Sseth",
    type: "Deity",
    id: "ID_FMP_DEITY_41",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=41",
    categories: ["Sseth", "ID_FMP_DEITY_41"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_DOMAIN_1"]);
      model.grant(elements.id["ID_FMP_DOMAIN_5"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["Sune"] = new RulesElement({
    name: "Sune",
    type: "Deity",
    id: "ID_FMP_DEITY_27",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=27",
    categories: ["Sune", "ID_FMP_DEITY_27"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_DOMAIN_15"]);
      model.grant(elements.id["ID_FMP_DOMAIN_22"]);
      model.grant(elements.id["ID_FMP_DOMAIN_28"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["Talona"] = new RulesElement({
    name: "Talona",
    type: "Deity",
    id: "ID_FMP_DEITY_42",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=42",
    categories: ["Talona", "ID_FMP_DEITY_42"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_DOMAIN_7"]);
      model.grant(elements.id["ID_FMP_DOMAIN_19"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["Tempus"] = new RulesElement({
    name: "Tempus",
    type: "Deity",
    id: "ID_FMP_DEITY_28",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=28",
    categories: ["Tempus", "ID_FMP_DEITY_28"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_DOMAIN_20"]);
      model.grant(elements.id["ID_FMP_DOMAIN_24"]);
      model.grant(elements.id["ID_FMP_DOMAIN_32"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["Thard Harr"] = new RulesElement({
    name: "Thard Harr",
    type: "Deity",
    id: "ID_FMP_DEITY_84",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=84",
    categories: ["Thard Harr", "ID_FMP_DEITY_84"]
  });
  byID[te.id] = te;
  
  te = Deity["The Red Knight"] = new RulesElement({
    name: "The Red Knight",
    type: "Deity",
    id: "ID_FMP_DEITY_77",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=77",
    categories: ["The Red Knight", "ID_FMP_DEITY_77"]
  });
  byID[te.id] = te;
  
  te = Deity["Tiamat (Forgotten Realms)"] = new RulesElement({
    name: "Tiamat (Forgotten Realms)",
    type: "Deity",
    id: "ID_FMP_DEITY_141",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=141",
    categories: ["Tiamat (Forgotten Realms)", "ID_FMP_DEITY_141"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_DOMAIN_29"]);
      model.grant(elements.id["ID_FMP_DOMAIN_31"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["Torm"] = new RulesElement({
    name: "Torm",
    type: "Deity",
    id: "ID_FMP_DEITY_29",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=29",
    categories: ["Torm", "ID_FMP_DEITY_29"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_DOMAIN_3"]);
      model.grant(elements.id["ID_FMP_DOMAIN_12"]);
      model.grant(elements.id["ID_FMP_DOMAIN_20"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["Tymora"] = new RulesElement({
    name: "Tymora",
    type: "Deity",
    id: "ID_FMP_DEITY_13",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=13",
    categories: ["Tymora", "ID_FMP_DEITY_13"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_DOMAIN_2"]);
      model.grant(elements.id["ID_FMP_DOMAIN_16"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["Umberlee"] = new RulesElement({
    name: "Umberlee",
    type: "Deity",
    id: "ID_FMP_DEITY_44",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=44",
    categories: ["Umberlee", "ID_FMP_DEITY_44"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_DOMAIN_21"]);
      model.grant(elements.id["ID_FMP_DOMAIN_23"]);
    }
  });
  byID[te.id] = te;
  
  te = Deity["Uthgar"] = new RulesElement({
    name: "Uthgar",
    type: "Deity",
    id: "ID_FMP_DEITY_85",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=85",
    categories: ["Uthgar", "ID_FMP_DEITY_85"]
  });
  byID[te.id] = te;
  
  te = Deity["Valkur"] = new RulesElement({
    name: "Valkur",
    type: "Deity",
    id: "ID_FMP_DEITY_86",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=86",
    categories: ["Valkur", "ID_FMP_DEITY_86"]
  });
  byID[te.id] = te;
  
  te = Deity["Vaprak"] = new RulesElement({
    name: "Vaprak",
    type: "Deity",
    id: "ID_FMP_DEITY_87",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=87",
    categories: ["Vaprak", "ID_FMP_DEITY_87"]
  });
  byID[te.id] = te;
  
  te = Deity["Vergadain"] = new RulesElement({
    name: "Vergadain",
    type: "Deity",
    id: "ID_FMP_DEITY_88",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=88",
    categories: ["Vergadain", "ID_FMP_DEITY_88"]
  });
  byID[te.id] = te;
  
  te = Deity["Waukeen"] = new RulesElement({
    name: "Waukeen",
    type: "Deity",
    id: "ID_FMP_DEITY_45",
    source: "Forgotten Realms Campaign Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/deity.aspx?id=45",
    categories: ["Waukeen", "ID_FMP_DEITY_45"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_DOMAIN_3"]);
      model.grant(elements.id["ID_FMP_DOMAIN_13"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
