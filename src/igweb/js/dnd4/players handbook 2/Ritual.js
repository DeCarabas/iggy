define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Ritual = types['Ritual'] || (types['Ritual'] = {});
  te = Ritual["Affect Normal Fire"] = new engine.RulesElement({
    name: "Affect Normal Fire",
    type: "Ritual",
    id: "ID_FMP_RITUAL_188",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=188",
    categories: ["Affect Normal Fire", "ID_FMP_RITUAL_188"]
  });
  byID[te.id] = te;
  
  te = Ritual["Animal Friendship"] = new engine.RulesElement({
    name: "Animal Friendship",
    type: "Ritual",
    id: "ID_FMP_RITUAL_62",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=62",
    categories: ["Animal Friendship", "ID_FMP_RITUAL_62"]
  });
  byID[te.id] = te;
  
  te = Ritual["Aria of Revelation"] = new engine.RulesElement({
    name: "Aria of Revelation",
    type: "Ritual",
    id: "ID_FMP_RITUAL_190",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=190",
    categories: ["Aria of Revelation", "ID_FMP_RITUAL_190"]
  });
  byID[te.id] = te;
  
  te = Ritual["Bloom"] = new engine.RulesElement({
    name: "Bloom",
    type: "Ritual",
    id: "ID_FMP_RITUAL_191",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=191",
    categories: ["Bloom", "ID_FMP_RITUAL_191"]
  });
  byID[te.id] = te;
  
  te = Ritual["Call Wilderness Guide"] = new engine.RulesElement({
    name: "Call Wilderness Guide",
    type: "Ritual",
    id: "ID_FMP_RITUAL_192",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=192",
    categories: ["Call Wilderness Guide", "ID_FMP_RITUAL_192"]
  });
  byID[te.id] = te;
  
  te = Ritual["Chorus of Truth"] = new engine.RulesElement({
    name: "Chorus of Truth",
    type: "Ritual",
    id: "ID_FMP_RITUAL_193",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=193",
    categories: ["Chorus of Truth", "ID_FMP_RITUAL_193"]
  });
  byID[te.id] = te;
  
  te = Ritual["Control Weather"] = new engine.RulesElement({
    name: "Control Weather",
    type: "Ritual",
    id: "ID_FMP_RITUAL_194",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=194",
    categories: ["Control Weather", "ID_FMP_RITUAL_194"]
  });
  byID[te.id] = te;
  
  te = Ritual["Create Campsite"] = new engine.RulesElement({
    name: "Create Campsite",
    type: "Ritual",
    id: "ID_FMP_RITUAL_195",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=195",
    categories: ["Create Campsite", "ID_FMP_RITUAL_195"]
  });
  byID[te.id] = te;
  
  te = Ritual["Fool's Speech"] = new engine.RulesElement({
    name: "Fool's Speech",
    type: "Ritual",
    id: "ID_FMP_RITUAL_196",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=196",
    categories: ["Fool's Speech", "ID_FMP_RITUAL_196"]
  });
  byID[te.id] = te;
  
  te = Ritual["Glib Limerick"] = new engine.RulesElement({
    name: "Glib Limerick",
    type: "Ritual",
    id: "ID_FMP_RITUAL_197",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=197",
    categories: ["Glib Limerick", "ID_FMP_RITUAL_197"]
  });
  byID[te.id] = te;
  
  te = Ritual["Ironwood"] = new engine.RulesElement({
    name: "Ironwood",
    type: "Ritual",
    id: "ID_FMP_RITUAL_198",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=198",
    categories: ["Ironwood", "ID_FMP_RITUAL_198"]
  });
  byID[te.id] = te;
  
  te = Ritual["Lullaby"] = new engine.RulesElement({
    name: "Lullaby",
    type: "Ritual",
    id: "ID_FMP_RITUAL_199",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=199",
    categories: ["Lullaby", "ID_FMP_RITUAL_199"]
  });
  byID[te.id] = te;
  
  te = Ritual["Pyrotechnics"] = new engine.RulesElement({
    name: "Pyrotechnics",
    type: "Ritual",
    id: "ID_FMP_RITUAL_200",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=200",
    categories: ["Pyrotechnics", "ID_FMP_RITUAL_200"]
  });
  byID[te.id] = te;
  
  te = Ritual["Reverse Portal"] = new engine.RulesElement({
    name: "Reverse Portal",
    type: "Ritual",
    id: "ID_FMP_RITUAL_201",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=201",
    categories: ["Reverse Portal", "ID_FMP_RITUAL_201"]
  });
  byID[te.id] = te;
  
  te = Ritual["Snare"] = new engine.RulesElement({
    name: "Snare",
    type: "Ritual",
    id: "ID_FMP_RITUAL_202",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=202",
    categories: ["Snare", "ID_FMP_RITUAL_202"]
  });
  byID[te.id] = te;
  
  te = Ritual["Song of Restfulness"] = new engine.RulesElement({
    name: "Song of Restfulness",
    type: "Ritual",
    id: "ID_FMP_RITUAL_203",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=203",
    categories: ["Song of Restfulness", "ID_FMP_RITUAL_203"]
  });
  byID[te.id] = te;
  
  te = Ritual["Song of Sustenance"] = new engine.RulesElement({
    name: "Song of Sustenance",
    type: "Ritual",
    id: "ID_FMP_RITUAL_204",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=204",
    categories: ["Song of Sustenance", "ID_FMP_RITUAL_204"]
  });
  byID[te.id] = te;
  
  te = Ritual["Speak with Nature"] = new engine.RulesElement({
    name: "Speak with Nature",
    type: "Ritual",
    id: "ID_FMP_RITUAL_205",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=205",
    categories: ["Speak with Nature", "ID_FMP_RITUAL_205"]
  });
  byID[te.id] = te;
  
  te = Ritual["Traveler's Chant"] = new engine.RulesElement({
    name: "Traveler's Chant",
    type: "Ritual",
    id: "ID_FMP_RITUAL_206",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=206",
    categories: ["Traveler's Chant", "ID_FMP_RITUAL_206"]
  });
  byID[te.id] = te;
  
  te = Ritual["Tree Shape"] = new engine.RulesElement({
    name: "Tree Shape",
    type: "Ritual",
    id: "ID_FMP_RITUAL_207",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=207",
    categories: ["Tree Shape", "ID_FMP_RITUAL_207"]
  });
  byID[te.id] = te;
  
  te = Ritual["Tree Stride"] = new engine.RulesElement({
    name: "Tree Stride",
    type: "Ritual",
    id: "ID_FMP_RITUAL_208",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=208",
    categories: ["Tree Stride", "ID_FMP_RITUAL_208"]
  });
  byID[te.id] = te;
  
  te = Ritual["Tune of Merriment"] = new engine.RulesElement({
    name: "Tune of Merriment",
    type: "Ritual",
    id: "ID_FMP_RITUAL_209",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=209",
    categories: ["Tune of Merriment", "ID_FMP_RITUAL_209"]
  });
  byID[te.id] = te;
  
  te = Ritual["Wyvern Watch"] = new engine.RulesElement({
    name: "Wyvern Watch",
    type: "Ritual",
    id: "ID_FMP_RITUAL_210",
    source: "Player's Handbook 2",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=210",
    categories: ["Wyvern Watch", "ID_FMP_RITUAL_210"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
