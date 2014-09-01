define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Paragon_Path = types['Paragon Path'] || (types['Paragon Path'] = {});
  te = Paragon_Path["Avalanche Hurler"] = new engine.RulesElement({
    name: "Avalanche Hurler",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_169",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=169",
    categories: ["Avalanche Hurler", "ID_FMP_PARAGON_PATH_169"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_911"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_912"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_913"]);
      model.grant(model.elements.id["ID_FMP_POWER_4679"]);
      model.grant(model.elements.id["ID_FMP_POWER_4680"]);
      model.grant(model.elements.id["ID_FMP_POWER_4681"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Avenging Slayer"] = new engine.RulesElement({
    name: "Avenging Slayer",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_159",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=159",
    categories: ["Avenging Slayer", "ID_FMP_PARAGON_PATH_159"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_887"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_888"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_889"]);
      model.grant(model.elements.id["ID_FMP_POWER_4611"]);
      model.grant(model.elements.id["ID_FMP_POWER_4612"]);
      model.grant(model.elements.id["ID_FMP_POWER_4613"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Battlelord of Kord"] = new engine.RulesElement({
    name: "Battlelord of Kord",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_189",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=189",
    categories: ["Battlelord of Kord", "ID_FMP_PARAGON_PATH_189"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_968"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_969"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_970"]);
      model.grant(model.elements.id["ID_FMP_POWER_4740"]);
      model.grant(model.elements.id["ID_FMP_POWER_4742"]);
      model.grant(model.elements.id["ID_FMP_POWER_4743"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Blade Banshee"] = new engine.RulesElement({
    name: "Blade Banshee",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_170",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=170",
    categories: ["Blade Banshee", "ID_FMP_PARAGON_PATH_170"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_914"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_915"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_916"]);
      model.grant(model.elements.id["ID_FMP_POWER_4682"]);
      model.grant(model.elements.id["ID_FMP_POWER_4683"]);
      model.grant(model.elements.id["ID_FMP_POWER_4684"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Blade Dancer"] = new engine.RulesElement({
    name: "Blade Dancer",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_171",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=171",
    categories: ["Blade Dancer", "ID_FMP_PARAGON_PATH_171"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_917"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_918"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_919"]);
      model.grant(model.elements.id["ID_FMP_POWER_4685"]);
      model.grant(model.elements.id["ID_FMP_POWER_4686"]);
      model.grant(model.elements.id["ID_FMP_POWER_4687"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Borderlands Marshal"] = new engine.RulesElement({
    name: "Borderlands Marshal",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_107",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=107",
    categories: ["Borderlands Marshal", "ID_FMP_PARAGON_PATH_107"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_705"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_706"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_707"]);
      model.grant(model.elements.id["ID_FMP_POWER_2455"]);
      model.grant(model.elements.id["ID_FMP_POWER_2458"]);
      model.grant(model.elements.id["ID_FMP_POWER_2460"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Cloaked Sniper"] = new engine.RulesElement({
    name: "Cloaked Sniper",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_181",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=181",
    categories: ["Cloaked Sniper", "ID_FMP_PARAGON_PATH_181"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_947"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_948"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_949"]);
      model.grant(model.elements.id["ID_FMP_POWER_4716"]);
      model.grant(model.elements.id["ID_FMP_POWER_4717"]);
      model.grant(model.elements.id["ID_FMP_POWER_4718"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Commando Captain"] = new engine.RulesElement({
    name: "Commando Captain",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_190",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=190",
    categories: ["Commando Captain", "ID_FMP_PARAGON_PATH_190"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_971"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_972"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_973"]);
      model.grant(model.elements.id["ID_FMP_POWER_4744"]);
      model.grant(model.elements.id["ID_FMP_POWER_4745"]);
      model.grant(model.elements.id["ID_FMP_POWER_4746"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Concordant Leader"] = new engine.RulesElement({
    name: "Concordant Leader",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_191",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=191",
    categories: ["Concordant Leader", "ID_FMP_PARAGON_PATH_191"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_974"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_975"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_976"]);
      model.grant(model.elements.id["ID_FMP_POWER_4747"]);
      model.grant(model.elements.id["ID_FMP_POWER_4748"]);
      model.grant(model.elements.id["ID_FMP_POWER_4749"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Daring Acrobat"] = new engine.RulesElement({
    name: "Daring Acrobat",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_182",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=182",
    categories: ["Daring Acrobat", "ID_FMP_PARAGON_PATH_182"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_951"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_952"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_654"]);
      model.grant(model.elements.id["ID_FMP_POWER_4719"]);
      model.grant(model.elements.id["ID_FMP_POWER_4720"]);
      model.grant(model.elements.id["ID_FMP_POWER_4721"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Death Dealer"] = new engine.RulesElement({
    name: "Death Dealer",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_183",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=183",
    categories: ["Death Dealer", "ID_FMP_PARAGON_PATH_183"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_953"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_954"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_955"]);
      model.grant(model.elements.id["ID_FMP_POWER_4722"]);
      model.grant(model.elements.id["ID_FMP_POWER_4723"]);
      model.grant(model.elements.id["ID_FMP_POWER_4724"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Dread Fang"] = new engine.RulesElement({
    name: "Dread Fang",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_184",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=184",
    categories: ["Dread Fang", "ID_FMP_PARAGON_PATH_184"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_956"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_957"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_958"]);
      model.grant(model.elements.id["ID_FMP_POWER_4725"]);
      model.grant(model.elements.id["ID_FMP_POWER_4726"]);
      model.grant(model.elements.id["ID_FMP_POWER_4727"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Dread Reaper"] = new engine.RulesElement({
    name: "Dread Reaper",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_161",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=161",
    categories: ["Dread Reaper", "ID_FMP_PARAGON_PATH_161"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_893"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_894"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_895"]);
      model.grant(model.elements.id["ID_FMP_POWER_4657"]);
      model.grant(model.elements.id["ID_FMP_POWER_4658"]);
      model.grant(model.elements.id["ID_FMP_POWER_4659"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Dreadnought"] = new engine.RulesElement({
    name: "Dreadnought",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_160",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=160",
    categories: ["Dreadnought", "ID_FMP_PARAGON_PATH_160"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_890"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_891"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_892"]);
      model.grant(model.elements.id["ID_FMP_POWER_4654"]);
      model.grant(model.elements.id["ID_FMP_POWER_4655"]);
      model.grant(model.elements.id["ID_FMP_POWER_4656"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Dujun of Erathis"] = new engine.RulesElement({
    name: "Dujun of Erathis",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_192",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=192",
    categories: ["Dujun of Erathis", "ID_FMP_PARAGON_PATH_192"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_977"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_979"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_978"]);
      model.grant(model.elements.id["ID_FMP_POWER_4750"]);
      model.grant(model.elements.id["ID_FMP_POWER_4751"]);
      model.grant(model.elements.id["ID_FMP_POWER_4752"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Dwarven Defender"] = new engine.RulesElement({
    name: "Dwarven Defender",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_116",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=116",
    categories: ["Dwarven Defender", "ID_FMP_PARAGON_PATH_116"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_745"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_743"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_744"]);
      model.grant(model.elements.id["ID_FMP_POWER_2546"]);
      model.grant(model.elements.id["ID_FMP_POWER_2547"]);
      model.grant(model.elements.id["ID_FMP_POWER_2548"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Earthfast Brigadier"] = new engine.RulesElement({
    name: "Earthfast Brigadier",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_193",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=193",
    categories: ["Earthfast Brigadier", "ID_FMP_PARAGON_PATH_193"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_980"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_981"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_982"]);
      model.grant(model.elements.id["ID_FMP_POWER_4753"]);
      model.grant(model.elements.id["ID_FMP_POWER_4755"]);
      model.grant(model.elements.id["ID_FMP_POWER_4756"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Feral Spirit"] = new engine.RulesElement({
    name: "Feral Spirit",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_172",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=172",
    categories: ["Feral Spirit", "ID_FMP_PARAGON_PATH_172"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_920"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_921"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_922"]);
      model.grant(model.elements.id["ID_FMP_POWER_4688"]);
      model.grant(model.elements.id["ID_FMP_POWER_4689"]);
      model.grant(model.elements.id["ID_FMP_POWER_4690"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Flamebrow Commander"] = new engine.RulesElement({
    name: "Flamebrow Commander",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_194",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=194",
    categories: ["Flamebrow Commander", "ID_FMP_PARAGON_PATH_194"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_983"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_984"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_985"]);
      model.grant(model.elements.id["ID_FMP_POWER_4757"]);
      model.grant(model.elements.id["ID_FMP_POWER_4758"]);
      model.grant(model.elements.id["ID_FMP_POWER_4759"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Flying-Blade Adept"] = new engine.RulesElement({
    name: "Flying-Blade Adept",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_185",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=185",
    categories: ["Flying-Blade Adept", "ID_FMP_PARAGON_PATH_185"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_959"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_960"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_961"]);
      model.grant(model.elements.id["ID_FMP_POWER_4728"]);
      model.grant(model.elements.id["ID_FMP_POWER_4729"]);
      model.grant(model.elements.id["ID_FMP_POWER_4731"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Giantslayer"] = new engine.RulesElement({
    name: "Giantslayer",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_173",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=173",
    categories: ["Giantslayer", "ID_FMP_PARAGON_PATH_173"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_923"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_924"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_925"]);
      model.grant(model.elements.id["ID_FMP_POWER_4691"]);
      model.grant(model.elements.id["ID_FMP_POWER_4692"]);
      model.grant(model.elements.id["ID_FMP_POWER_4693"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Guildmaster Thief"] = new engine.RulesElement({
    name: "Guildmaster Thief",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_110",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=110",
    categories: ["Guildmaster Thief", "ID_FMP_PARAGON_PATH_110"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_728"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_729"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_730"]);
      model.grant(model.elements.id["ID_FMP_POWER_2492"]);
      model.grant(model.elements.id["ID_FMP_POWER_2493"]);
      model.grant(model.elements.id["ID_FMP_POWER_2494"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Halfling Bounder"] = new engine.RulesElement({
    name: "Halfling Bounder",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_163",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=163",
    categories: ["Halfling Bounder", "ID_FMP_PARAGON_PATH_163"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_896"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_897"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_898"]);
      model.grant(model.elements.id["ID_FMP_POWER_2575"]);
      model.grant(model.elements.id["ID_FMP_POWER_4661"]);
      model.grant(model.elements.id["ID_FMP_POWER_4665"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Halfling Quickblade"] = new engine.RulesElement({
    name: "Halfling Quickblade",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_111",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=111",
    categories: ["Halfling Quickblade", "ID_FMP_PARAGON_PATH_111"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_731"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_732"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_733"]);
      model.grant(model.elements.id["ID_FMP_POWER_2500"]);
      model.grant(model.elements.id["ID_FMP_POWER_2501"]);
      model.grant(model.elements.id["ID_FMP_POWER_2502"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Hellborn Shadow"] = new engine.RulesElement({
    name: "Hellborn Shadow",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_174",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=174",
    categories: ["Hellborn Shadow", "ID_FMP_PARAGON_PATH_174"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_926"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_927"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_928"]);
      model.grant(model.elements.id["ID_FMP_POWER_4694"]);
      model.grant(model.elements.id["ID_FMP_POWER_4695"]);
      model.grant(model.elements.id["ID_FMP_POWER_4696"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Horizon Walker"] = new engine.RulesElement({
    name: "Horizon Walker",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_175",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=175",
    categories: ["Horizon Walker", "ID_FMP_PARAGON_PATH_175"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_929"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_930"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_931"]);
      model.grant(model.elements.id["ID_FMP_POWER_4697"]);
      model.grant(model.elements.id["ID_FMP_POWER_4698"]);
      model.grant(model.elements.id["ID_FMP_POWER_4699"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Infernal Strategist"] = new engine.RulesElement({
    name: "Infernal Strategist",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_195",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=195",
    categories: ["Infernal Strategist", "ID_FMP_PARAGON_PATH_195"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_986"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_988"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_987"]);
      model.grant(model.elements.id["ID_FMP_POWER_4760"]);
      model.grant(model.elements.id["ID_FMP_POWER_4761"]);
      model.grant(model.elements.id["ID_FMP_POWER_4762"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Inner Dragon"] = new engine.RulesElement({
    name: "Inner Dragon",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_164",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=164",
    categories: ["Inner Dragon", "ID_FMP_PARAGON_PATH_164"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_899"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_900"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1500"]);
      model.grant(model.elements.id["ID_FMP_POWER_4666"]);
      model.grant(model.elements.id["ID_FMP_POWER_4667"]);
      model.grant(model.elements.id["ID_FMP_POWER_4668"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Knight Protector"] = new engine.RulesElement({
    name: "Knight Protector",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_165",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=165",
    categories: ["Knight Protector", "ID_FMP_PARAGON_PATH_165"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_901"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_902"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_903"]);
      model.grant(model.elements.id["ID_FMP_POWER_4669"]);
      model.grant(model.elements.id["ID_FMP_POWER_4670"]);
      model.grant(model.elements.id["ID_FMP_POWER_4671"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Longarm Marshal"] = new engine.RulesElement({
    name: "Longarm Marshal",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_120",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=120",
    categories: ["Longarm Marshal", "ID_FMP_PARAGON_PATH_120"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_755"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_756"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_757"]);
      model.grant(model.elements.id["ID_FMP_POWER_2579"]);
      model.grant(model.elements.id["ID_FMP_POWER_2580"]);
      model.grant(model.elements.id["ID_FMP_POWER_2581"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Master Spy"] = new engine.RulesElement({
    name: "Master Spy",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_112",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=112",
    categories: ["Master Spy", "ID_FMP_PARAGON_PATH_112"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_734"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_735"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_736"]);
      model.grant(model.elements.id["ID_FMP_POWER_2506"]);
      model.grant(model.elements.id["ID_FMP_POWER_2507"]);
      model.grant(model.elements.id["ID_FMP_POWER_4732"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Pack Runner"] = new engine.RulesElement({
    name: "Pack Runner",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_176",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=176",
    categories: ["Pack Runner", "ID_FMP_PARAGON_PATH_176"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_932"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_933"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_934"]);
      model.grant(model.elements.id["ID_FMP_POWER_4700"]);
      model.grant(model.elements.id["ID_FMP_POWER_4701"]);
      model.grant(model.elements.id["ID_FMP_POWER_4702"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Platinum Warlord"] = new engine.RulesElement({
    name: "Platinum Warlord",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_196",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=196",
    categories: ["Platinum Warlord", "ID_FMP_PARAGON_PATH_196"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_989"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_990"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2093"]);
      model.grant(model.elements.id["ID_FMP_POWER_4763"]);
      model.grant(model.elements.id["ID_FMP_POWER_4764"]);
      model.grant(model.elements.id["ID_FMP_POWER_4765"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Polearm Master"] = new engine.RulesElement({
    name: "Polearm Master",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_166",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=166",
    categories: ["Polearm Master", "ID_FMP_PARAGON_PATH_166"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_904"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_905"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_906"]);
      model.grant(model.elements.id["ID_FMP_POWER_4672"]);
      model.grant(model.elements.id["ID_FMP_POWER_4673"]);
      model.grant(model.elements.id["ID_FMP_POWER_4674"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Rakish Swashbuckler"] = new engine.RulesElement({
    name: "Rakish Swashbuckler",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_187",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=187",
    categories: ["Rakish Swashbuckler", "ID_FMP_PARAGON_PATH_187"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_963"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_964"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_962"]);
      model.grant(model.elements.id["ID_FMP_POWER_4733"]);
      model.grant(model.elements.id["ID_FMP_POWER_4734"]);
      model.grant(model.elements.id["ID_FMP_POWER_4735"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Ravager"] = new engine.RulesElement({
    name: "Ravager",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_22",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=22",
    categories: ["Ravager", "ID_FMP_PARAGON_PATH_22"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_454"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_513"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_907"]);
      model.grant(model.elements.id["ID_FMP_POWER_1606"]);
      model.grant(model.elements.id["ID_FMP_POWER_1608"]);
      model.grant(model.elements.id["ID_FMP_POWER_1612"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Raven Herald"] = new engine.RulesElement({
    name: "Raven Herald",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_108",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=108",
    categories: ["Raven Herald", "ID_FMP_PARAGON_PATH_108"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_722"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_723"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1880"]);
      model.grant(model.elements.id["ID_FMP_POWER_2486"]);
      model.grant(model.elements.id["ID_FMP_POWER_2487"]);
      model.grant(model.elements.id["ID_FMP_POWER_2488"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Ruthless Punisher"] = new engine.RulesElement({
    name: "Ruthless Punisher",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_177",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=177",
    categories: ["Ruthless Punisher", "ID_FMP_PARAGON_PATH_177"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_935"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_936"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_937"]);
      model.grant(model.elements.id["ID_FMP_POWER_4703"]);
      model.grant(model.elements.id["ID_FMP_POWER_4704"]);
      model.grant(model.elements.id["ID_FMP_POWER_4705"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Sharpshooter"] = new engine.RulesElement({
    name: "Sharpshooter",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_178",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=178",
    categories: ["Sharpshooter", "ID_FMP_PARAGON_PATH_178"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_938"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_939"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_940"]);
      model.grant(model.elements.id["ID_FMP_POWER_4706"]);
      model.grant(model.elements.id["ID_FMP_POWER_4707"]);
      model.grant(model.elements.id["ID_FMP_POWER_4708"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Shield Adept"] = new engine.RulesElement({
    name: "Shield Adept",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_121",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=121",
    categories: ["Shield Adept", "ID_FMP_PARAGON_PATH_121"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_758"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_759"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_760"]);
      model.grant(model.elements.id["ID_FMP_POWER_2583"]);
      model.grant(model.elements.id["ID_FMP_POWER_2584"]);
      model.grant(model.elements.id["ID_FMP_POWER_2585"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Shock Trooper"] = new engine.RulesElement({
    name: "Shock Trooper",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_168",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=168",
    categories: ["Shock Trooper", "ID_FMP_PARAGON_PATH_168"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_908"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_909"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_910"]);
      model.grant(model.elements.id["ID_FMP_POWER_4676"]);
      model.grant(model.elements.id["ID_FMP_POWER_4677"]);
      model.grant(model.elements.id["ID_FMP_POWER_4678"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Spiral Tactician"] = new engine.RulesElement({
    name: "Spiral Tactician",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_197",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=197",
    categories: ["Spiral Tactician", "ID_FMP_PARAGON_PATH_197"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_992"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_991"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_993"]);
      model.grant(model.elements.id["ID_FMP_POWER_4766"]);
      model.grant(model.elements.id["ID_FMP_POWER_4767"]);
      model.grant(model.elements.id["ID_FMP_POWER_4768"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Strong-Arm Enforcer"] = new engine.RulesElement({
    name: "Strong-Arm Enforcer",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_188",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=188",
    categories: ["Strong-Arm Enforcer", "ID_FMP_PARAGON_PATH_188"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_965"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_966"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_967"]);
      model.grant(model.elements.id["ID_FMP_POWER_4736"]);
      model.grant(model.elements.id["ID_FMP_POWER_4737"]);
      model.grant(model.elements.id["ID_FMP_POWER_4738"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Sylvan Archer"] = new engine.RulesElement({
    name: "Sylvan Archer",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_179",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=179",
    categories: ["Sylvan Archer", "ID_FMP_PARAGON_PATH_179"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_942"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_943"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1854"]);
      model.grant(model.elements.id["ID_FMP_POWER_4709"]);
      model.grant(model.elements.id["ID_FMP_POWER_4710"]);
      model.grant(model.elements.id["ID_FMP_POWER_4711"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Tiefling Hellstalker"] = new engine.RulesElement({
    name: "Tiefling Hellstalker",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_113",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=113",
    categories: ["Tiefling Hellstalker", "ID_FMP_PARAGON_PATH_113"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_737"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_738"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_739"]);
      model.grant(model.elements.id["ID_FMP_POWER_2522"]);
      model.grant(model.elements.id["ID_FMP_POWER_2523"]);
      model.grant(model.elements.id["ID_FMP_POWER_4739"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Tiefling Warfiend"] = new engine.RulesElement({
    name: "Tiefling Warfiend",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_118",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=118",
    categories: ["Tiefling Warfiend", "ID_FMP_PARAGON_PATH_118"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_749"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_750"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_2695"]);
      model.grant(model.elements.id["ID_FMP_POWER_2560"]);
      model.grant(model.elements.id["ID_FMP_POWER_2569"]);
      model.grant(model.elements.id["ID_FMP_POWER_2570"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Twiceborn Leader"] = new engine.RulesElement({
    name: "Twiceborn Leader",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_198",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=198",
    categories: ["Twiceborn Leader", "ID_FMP_PARAGON_PATH_198"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_994"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_995"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_996"]);
      model.grant(model.elements.id["ID_FMP_POWER_4769"]);
      model.grant(model.elements.id["ID_FMP_POWER_4770"]);
      model.grant(model.elements.id["ID_FMP_POWER_4771"]);
    }
  });
  byID[te.id] = te;
  
  te = Paragon_Path["Wildcat Stalker"] = new engine.RulesElement({
    name: "Wildcat Stalker",
    type: "Paragon Path",
    id: "ID_FMP_PARAGON_PATH_180",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/paragonpath.aspx?id=180",
    categories: ["Wildcat Stalker", "ID_FMP_PARAGON_PATH_180"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_944"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_945"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_946"]);
      model.grant(model.elements.id["ID_FMP_POWER_4712"]);
      model.grant(model.elements.id["ID_FMP_POWER_4713"]);
      model.grant(model.elements.id["ID_FMP_POWER_4715"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
