define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Ritual = types['Ritual'] || (types['Ritual'] = {});
  te = Ritual["Acidic Fire"] = new engine.RulesElement({
    name: "Acidic Fire",
    type: "Ritual",
    id: "ID_FMP_RITUAL_237",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=237",
    categories: ["Acidic Fire", "ID_FMP_RITUAL_237"]
  });
  byID[te.id] = te;
  
  te = Ritual["Alchemist's Spark"] = new engine.RulesElement({
    name: "Alchemist's Spark",
    type: "Ritual",
    id: "ID_FMP_RITUAL_238",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=238",
    categories: ["Alchemist's Spark", "ID_FMP_RITUAL_238"]
  });
  byID[te.id] = te;
  
  te = Ritual["Ancestral Whispers"] = new engine.RulesElement({
    name: "Ancestral Whispers",
    type: "Ritual",
    id: "ID_FMP_RITUAL_254",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=254",
    categories: ["Ancestral Whispers", "ID_FMP_RITUAL_254"]
  });
  byID[te.id] = te;
  
  te = Ritual["Banish Illusions"] = new engine.RulesElement({
    name: "Banish Illusions",
    type: "Ritual",
    id: "ID_FMP_RITUAL_255",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=255",
    categories: ["Banish Illusions", "ID_FMP_RITUAL_255"]
  });
  byID[te.id] = te;
  
  te = Ritual["Clear-Path Mist"] = new engine.RulesElement({
    name: "Clear-Path Mist",
    type: "Ritual",
    id: "ID_FMP_RITUAL_239",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=239",
    categories: ["Clear-Path Mist", "ID_FMP_RITUAL_239"]
  });
  byID[te.id] = te;
  
  te = Ritual["Clockwork Bomb"] = new engine.RulesElement({
    name: "Clockwork Bomb",
    type: "Ritual",
    id: "ID_FMP_RITUAL_240",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=240",
    categories: ["Clockwork Bomb", "ID_FMP_RITUAL_240"]
  });
  byID[te.id] = te;
  
  te = Ritual["Conceal Dragon mark"] = new engine.RulesElement({
    name: "Conceal Dragon mark",
    type: "Ritual",
    id: "ID_FMP_RITUAL_256",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=256",
    categories: ["Conceal Dragon mark", "ID_FMP_RITUAL_256"]
  });
  byID[te.id] = te;
  
  te = Ritual["Eavesdropper's Foil"] = new engine.RulesElement({
    name: "Eavesdropper's Foil",
    type: "Ritual",
    id: "ID_FMP_RITUAL_257",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=257",
    categories: ["Eavesdropper's Foil", "ID_FMP_RITUAL_257"]
  });
  byID[te.id] = te;
  
  te = Ritual["Enhance Vessel"] = new engine.RulesElement({
    name: "Enhance Vessel",
    type: "Ritual",
    id: "ID_FMP_RITUAL_258",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=258",
    categories: ["Enhance Vessel", "ID_FMP_RITUAL_258"]
  });
  byID[te.id] = te;
  
  te = Ritual["Fantastic Recuperation"] = new engine.RulesElement({
    name: "Fantastic Recuperation",
    type: "Ritual",
    id: "ID_FMP_RITUAL_259",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=259",
    categories: ["Fantastic Recuperation", "ID_FMP_RITUAL_259"]
  });
  byID[te.id] = te;
  
  te = Ritual["Find the Path"] = new engine.RulesElement({
    name: "Find the Path",
    type: "Ritual",
    id: "ID_FMP_RITUAL_260",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=260",
    categories: ["Find the Path", "ID_FMP_RITUAL_260"]
  });
  byID[te.id] = te;
  
  te = Ritual["Fluid Funds"] = new engine.RulesElement({
    name: "Fluid Funds",
    type: "Ritual",
    id: "ID_FMP_RITUAL_261",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=261",
    categories: ["Fluid Funds", "ID_FMP_RITUAL_261"]
  });
  byID[te.id] = te;
  
  te = Ritual["Grayflower Perfume"] = new engine.RulesElement({
    name: "Grayflower Perfume",
    type: "Ritual",
    id: "ID_FMP_RITUAL_241",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=241",
    categories: ["Grayflower Perfume", "ID_FMP_RITUAL_241"]
  });
  byID[te.id] = te;
  
  te = Ritual["Heartflow"] = new engine.RulesElement({
    name: "Heartflow",
    type: "Ritual",
    id: "ID_FMP_RITUAL_242",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=242",
    categories: ["Heartflow", "ID_FMP_RITUAL_242"]
  });
  byID[te.id] = te;
  
  te = Ritual["Inferno Oil"] = new engine.RulesElement({
    name: "Inferno Oil",
    type: "Ritual",
    id: "ID_FMP_RITUAL_243",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=243",
    categories: ["Inferno Oil", "ID_FMP_RITUAL_243"]
  });
  byID[te.id] = te;
  
  te = Ritual["Inquisitive's Eyes"] = new engine.RulesElement({
    name: "Inquisitive's Eyes",
    type: "Ritual",
    id: "ID_FMP_RITUAL_262",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=262",
    categories: ["Inquisitive's Eyes", "ID_FMP_RITUAL_262"]
  });
  byID[te.id] = te;
  
  te = Ritual["Keen Oil"] = new engine.RulesElement({
    name: "Keen Oil",
    type: "Ritual",
    id: "ID_FMP_RITUAL_244",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=244",
    categories: ["Keen Oil", "ID_FMP_RITUAL_244"]
  });
  byID[te.id] = te;
  
  te = Ritual["Lodret Leaf"] = new engine.RulesElement({
    name: "Lodret Leaf",
    type: "Ritual",
    id: "ID_FMP_RITUAL_245",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=245",
    categories: ["Lodret Leaf", "ID_FMP_RITUAL_245"]
  });
  byID[te.id] = te;
  
  te = Ritual["Masking Shroud"] = new engine.RulesElement({
    name: "Masking Shroud",
    type: "Ritual",
    id: "ID_FMP_RITUAL_263",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=263",
    categories: ["Masking Shroud", "ID_FMP_RITUAL_263"]
  });
  byID[te.id] = te;
  
  te = Ritual["Noxious Grenade"] = new engine.RulesElement({
    name: "Noxious Grenade",
    type: "Ritual",
    id: "ID_FMP_RITUAL_246",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=246",
    categories: ["Noxious Grenade", "ID_FMP_RITUAL_246"]
  });
  byID[te.id] = te;
  
  te = Ritual["Panther Tears"] = new engine.RulesElement({
    name: "Panther Tears",
    type: "Ritual",
    id: "ID_FMP_RITUAL_247",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=247",
    categories: ["Panther Tears", "ID_FMP_RITUAL_247"]
  });
  byID[te.id] = te;
  
  te = Ritual["Resonance Crystal"] = new engine.RulesElement({
    name: "Resonance Crystal",
    type: "Ritual",
    id: "ID_FMP_RITUAL_248",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=248",
    categories: ["Resonance Crystal", "ID_FMP_RITUAL_248"]
  });
  byID[te.id] = te;
  
  te = Ritual["Scry Trap"] = new engine.RulesElement({
    name: "Scry Trap",
    type: "Ritual",
    id: "ID_FMP_RITUAL_264",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=264",
    categories: ["Scry Trap", "ID_FMP_RITUAL_264"]
  });
  byID[te.id] = te;
  
  te = Ritual["Secure Shelter"] = new engine.RulesElement({
    name: "Secure Shelter",
    type: "Ritual",
    id: "ID_FMP_RITUAL_265",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=265",
    categories: ["Secure Shelter", "ID_FMP_RITUAL_265"]
  });
  byID[te.id] = te;
  
  te = Ritual["Seeming"] = new engine.RulesElement({
    name: "Seeming",
    type: "Ritual",
    id: "ID_FMP_RITUAL_266",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=266",
    categories: ["Seeming", "ID_FMP_RITUAL_266"]
  });
  byID[te.id] = te;
  
  te = Ritual["Spirit Idol"] = new engine.RulesElement({
    name: "Spirit Idol",
    type: "Ritual",
    id: "ID_FMP_RITUAL_267",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=267",
    categories: ["Spirit Idol", "ID_FMP_RITUAL_267"]
  });
  byID[te.id] = te;
  
  te = Ritual["Spotted Toadstool Venom"] = new engine.RulesElement({
    name: "Spotted Toadstool Venom",
    type: "Ritual",
    id: "ID_FMP_RITUAL_249",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=249",
    categories: ["Spotted Toadstool Venom", "ID_FMP_RITUAL_249"]
  });
  byID[te.id] = te;
  
  te = Ritual["Steed Summons"] = new engine.RulesElement({
    name: "Steed Summons",
    type: "Ritual",
    id: "ID_FMP_RITUAL_268",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=268",
    categories: ["Steed Summons", "ID_FMP_RITUAL_268"]
  });
  byID[te.id] = te;
  
  te = Ritual["Summon Winds"] = new engine.RulesElement({
    name: "Summon Winds",
    type: "Ritual",
    id: "ID_FMP_RITUAL_269",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=269",
    categories: ["Summon Winds", "ID_FMP_RITUAL_269"]
  });
  byID[te.id] = te;
  
  te = Ritual["Suppression Crystal"] = new engine.RulesElement({
    name: "Suppression Crystal",
    type: "Ritual",
    id: "ID_FMP_RITUAL_250",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=250",
    categories: ["Suppression Crystal", "ID_FMP_RITUAL_250"]
  });
  byID[te.id] = te;
  
  te = Ritual["Tension Wheel"] = new engine.RulesElement({
    name: "Tension Wheel",
    type: "Ritual",
    id: "ID_FMP_RITUAL_251",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=251",
    categories: ["Tension Wheel", "ID_FMP_RITUAL_251"]
  });
  byID[te.id] = te;
  
  te = Ritual["Tethercord"] = new engine.RulesElement({
    name: "Tethercord",
    type: "Ritual",
    id: "ID_FMP_RITUAL_252",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=252",
    categories: ["Tethercord", "ID_FMP_RITUAL_252"]
  });
  byID[te.id] = te;
  
  te = Ritual["Woundpatch"] = new engine.RulesElement({
    name: "Woundpatch",
    type: "Ritual",
    id: "ID_FMP_RITUAL_253",
    source: "Eberron Player's Guide",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/ritual.aspx?id=253",
    categories: ["Woundpatch", "ID_FMP_RITUAL_253"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
