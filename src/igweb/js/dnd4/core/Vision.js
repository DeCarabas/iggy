define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Vision = types['Vision'] || (types['Vision'] = {});
  te = Vision["Darkvision"] = new engine.RulesElement({
    name: "Darkvision",
    type: "Vision",
    id: "ID_INTERNAL_VISION_DARKVISION",
    source: "Core",
    categories: ["Darkvision", "ID_INTERNAL_VISION_DARKVISION"]
  });
  byID[te.id] = te;
  
  te = Vision["Low-light"] = new engine.RulesElement({
    name: "Low-light",
    type: "Vision",
    id: "ID_INTERNAL_VISION_LOW-LIGHT",
    source: "Core",
    categories: ["Low-light", "ID_INTERNAL_VISION_LOW-LIGHT"]
  });
  byID[te.id] = te;
  
  te = Vision["Normal"] = new engine.RulesElement({
    name: "Normal",
    type: "Vision",
    id: "ID_INTERNAL_VISION_NORMAL",
    source: "Core",
    categories: ["Normal", "ID_INTERNAL_VISION_NORMAL"]
  });
  byID[te.id] = te;
  
  te = Vision["See Invisible"] = new engine.RulesElement({
    name: "See Invisible",
    type: "Vision",
    id: "ID_INTERNAL_VISION_SEE_INVISIBLE",
    source: "Core",
    categories: ["See Invisible", "ID_INTERNAL_VISION_SEE_INVISIBLE"]
  });
  byID[te.id] = te;
  
  te = Vision["Spellplague Sense"] = new engine.RulesElement({
    name: "Spellplague Sense",
    type: "Vision",
    id: "ID_INTERNAL_VISION_SPELLPLAGUE_SENSE",
    source: "Core",
    categories: ["Spellplague Sense", "ID_INTERNAL_VISION_SPELLPLAGUE_SENSE"]
  });
  byID[te.id] = te;
  
  te = Vision["Telepathy"] = new engine.RulesElement({
    name: "Telepathy",
    type: "Vision",
    id: "ID_INTERNAL_VISION_TELEPATHY",
    source: "Core",
    categories: ["Telepathy", "ID_INTERNAL_VISION_TELEPATHY"]
  });
  byID[te.id] = te;
  
  te = Vision["Tremorsense"] = new engine.RulesElement({
    name: "Tremorsense",
    type: "Vision",
    id: "ID_INTERNAL_VISION_TREMORSENSE",
    source: "Core",
    categories: ["Tremorsense", "ID_INTERNAL_VISION_TREMORSENSE"]
  });
  byID[te.id] = te;
  
  te = Vision["Truesight"] = new engine.RulesElement({
    name: "Truesight",
    type: "Vision",
    id: "ID_INTERNAL_VISION_TRUESIGHT",
    source: "Core",
    categories: ["Truesight", "ID_INTERNAL_VISION_TRUESIGHT"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
