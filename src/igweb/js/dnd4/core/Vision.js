(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Vision = types['Vision'] || (types['Vision'] = {});
  te = Vision["Darkvision"] = new RulesElement({
    name: "Darkvision",
    type: "Vision",
    id: "ID_INTERNAL_VISION_DARKVISION",
    source: "Core",
    categories: ["Darkvision", "ID_INTERNAL_VISION_DARKVISION"]
  });
  byID[te.id] = te;
  
  te = Vision["Low-light"] = new RulesElement({
    name: "Low-light",
    type: "Vision",
    id: "ID_INTERNAL_VISION_LOW-LIGHT",
    source: "Core",
    categories: ["Low-light", "ID_INTERNAL_VISION_LOW-LIGHT"]
  });
  byID[te.id] = te;
  
  te = Vision["Normal"] = new RulesElement({
    name: "Normal",
    type: "Vision",
    id: "ID_INTERNAL_VISION_NORMAL",
    source: "Core",
    categories: ["Normal", "ID_INTERNAL_VISION_NORMAL"]
  });
  byID[te.id] = te;
  
  te = Vision["See Invisible"] = new RulesElement({
    name: "See Invisible",
    type: "Vision",
    id: "ID_INTERNAL_VISION_SEE_INVISIBLE",
    source: "Core",
    categories: ["See Invisible", "ID_INTERNAL_VISION_SEE_INVISIBLE"]
  });
  byID[te.id] = te;
  
  te = Vision["Spellplague Sense"] = new RulesElement({
    name: "Spellplague Sense",
    type: "Vision",
    id: "ID_INTERNAL_VISION_SPELLPLAGUE_SENSE",
    source: "Core",
    categories: ["Spellplague Sense", "ID_INTERNAL_VISION_SPELLPLAGUE_SENSE"]
  });
  byID[te.id] = te;
  
  te = Vision["Telepathy"] = new RulesElement({
    name: "Telepathy",
    type: "Vision",
    id: "ID_INTERNAL_VISION_TELEPATHY",
    source: "Core",
    categories: ["Telepathy", "ID_INTERNAL_VISION_TELEPATHY"]
  });
  byID[te.id] = te;
  
  te = Vision["Tremorsense"] = new RulesElement({
    name: "Tremorsense",
    type: "Vision",
    id: "ID_INTERNAL_VISION_TREMORSENSE",
    source: "Core",
    categories: ["Tremorsense", "ID_INTERNAL_VISION_TREMORSENSE"]
  });
  byID[te.id] = te;
  
  te = Vision["Truesight"] = new RulesElement({
    name: "Truesight",
    type: "Vision",
    id: "ID_INTERNAL_VISION_TRUESIGHT",
    source: "Core",
    categories: ["Truesight", "ID_INTERNAL_VISION_TRUESIGHT"]
  });
  byID[te.id] = te;
  
  
})(this);
