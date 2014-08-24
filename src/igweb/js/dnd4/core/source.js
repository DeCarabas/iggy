(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var source = types['source'] || (types['source'] = {});
  te = source["Adventurer's Vault"] = new RulesElement({
    name: "Adventurer's Vault",
    type: "source",
    id: "ID_FMP_SOURCE_10",
    source: "Core",
    categories: ["Adventurer's Vault", "ID_FMP_SOURCE_10"]
  });
  byID[te.id] = te;
  
  te = source["Adventurer's Vault 2"] = new RulesElement({
    name: "Adventurer's Vault 2",
    type: "source",
    id: "ID_FMP_SOURCE_73",
    source: "Core",
    categories: ["Adventurer's Vault 2", "ID_FMP_SOURCE_73"]
  });
  byID[te.id] = te;
  
  te = source["Arcane Power"] = new RulesElement({
    name: "Arcane Power",
    type: "source",
    id: "ID_FMP_SOURCE_14",
    source: "Core",
    categories: ["Arcane Power", "ID_FMP_SOURCE_14"]
  });
  byID[te.id] = te;
  
  te = source["City of Stormreach"] = new RulesElement({
    name: "City of Stormreach",
    type: "source",
    id: "ID_FMP_SOURCE_191",
    source: "Core",
    categories: ["City of Stormreach", "ID_FMP_SOURCE_191"]
  });
  byID[te.id] = te;
  
  te = source["Core"] = new RulesElement({
    name: "Core",
    type: "source",
    id: "ID_INTERNAL_SOURCE_CORE",
    source: "Core",
    categories: ["Core", "ID_INTERNAL_SOURCE_CORE"]
  });
  byID[te.id] = te;
  
  te = source["D&D Player's Strategy Guide"] = new RulesElement({
    name: "D&D Player's Strategy Guide",
    type: "source",
    id: "ID_FMP_SOURCE_200",
    source: "Core",
    categories: ["D&D Player's Strategy Guide", "ID_FMP_SOURCE_200"]
  });
  byID[te.id] = te;
  
  te = source["Demonomicon"] = new RulesElement({
    name: "Demonomicon",
    type: "source",
    id: "ID_FMP_SOURCE_205",
    source: "Core",
    categories: ["Demonomicon", "ID_FMP_SOURCE_205"]
  });
  byID[te.id] = te;
  
  te = source["Divine Power"] = new RulesElement({
    name: "Divine Power",
    type: "source",
    id: "ID_FMP_SOURCE_15",
    source: "Core",
    categories: ["Divine Power", "ID_FMP_SOURCE_15"]
  });
  byID[te.id] = te;
  
  te = source["Draconomicon: Chromatic Dragons"] = new RulesElement({
    name: "Draconomicon: Chromatic Dragons",
    type: "source",
    id: "ID_FMP_SOURCE_11",
    source: "Core",
    categories: ["Draconomicon: Chromatic Dragons", "ID_FMP_SOURCE_11"]
  });
  byID[te.id] = te;
  
  te = source["Draconomicon: Metallic Dragons"] = new RulesElement({
    name: "Draconomicon: Metallic Dragons",
    type: "source",
    id: "ID_FMP_SOURCE_12",
    source: "Core",
    categories: ["Draconomicon: Metallic Dragons", "ID_FMP_SOURCE_12"]
  });
  byID[te.id] = te;
  
  te = source["Dragon Magazine 364"] = new RulesElement({
    name: "Dragon Magazine 364",
    type: "source",
    id: "ID_FMP_SOURCE_28",
    source: "Core",
    categories: ["Dragon Magazine 364", "ID_FMP_SOURCE_28"]
  });
  byID[te.id] = te;
  
  te = source["Dragon Magazine 365"] = new RulesElement({
    name: "Dragon Magazine 365",
    type: "source",
    id: "ID_FMP_SOURCE_32",
    source: "Core",
    categories: ["Dragon Magazine 365", "ID_FMP_SOURCE_32"]
  });
  byID[te.id] = te;
  
  te = source["Dragon Magazine 366"] = new RulesElement({
    name: "Dragon Magazine 366",
    type: "source",
    id: "ID_FMP_SOURCE_34",
    source: "Core",
    categories: ["Dragon Magazine 366", "ID_FMP_SOURCE_34"]
  });
  byID[te.id] = te;
  
  te = source["Dragon Magazine 367"] = new RulesElement({
    name: "Dragon Magazine 367",
    type: "source",
    id: "ID_FMP_SOURCE_36",
    source: "Core",
    categories: ["Dragon Magazine 367", "ID_FMP_SOURCE_36"]
  });
  byID[te.id] = te;
  
  te = source["Dragon Magazine 368"] = new RulesElement({
    name: "Dragon Magazine 368",
    type: "source",
    id: "ID_FMP_SOURCE_56",
    source: "Core",
    categories: ["Dragon Magazine 368", "ID_FMP_SOURCE_56"]
  });
  byID[te.id] = te;
  
  te = source["Dragon Magazine 369"] = new RulesElement({
    name: "Dragon Magazine 369",
    type: "source",
    id: "ID_FMP_SOURCE_62",
    source: "Core",
    categories: ["Dragon Magazine 369", "ID_FMP_SOURCE_62"]
  });
  byID[te.id] = te;
  
  te = source["Dragon Magazine 370"] = new RulesElement({
    name: "Dragon Magazine 370",
    type: "source",
    id: "ID_FMP_SOURCE_71",
    source: "Core",
    categories: ["Dragon Magazine 370", "ID_FMP_SOURCE_71"]
  });
  byID[te.id] = te;
  
  te = source["Dragon Magazine 371"] = new RulesElement({
    name: "Dragon Magazine 371",
    type: "source",
    id: "ID_FMP_SOURCE_89",
    source: "Core",
    categories: ["Dragon Magazine 371", "ID_FMP_SOURCE_89"]
  });
  byID[te.id] = te;
  
  te = source["Dragon Magazine 372"] = new RulesElement({
    name: "Dragon Magazine 372",
    type: "source",
    id: "ID_FMP_SOURCE_99",
    source: "Core",
    categories: ["Dragon Magazine 372", "ID_FMP_SOURCE_99"]
  });
  byID[te.id] = te;
  
  te = source["Dragon Magazine 373"] = new RulesElement({
    name: "Dragon Magazine 373",
    type: "source",
    id: "ID_FMP_SOURCE_104",
    source: "Core",
    categories: ["Dragon Magazine 373", "ID_FMP_SOURCE_104"]
  });
  byID[te.id] = te;
  
  te = source["Dragon Magazine 374"] = new RulesElement({
    name: "Dragon Magazine 374",
    type: "source",
    id: "ID_FMP_SOURCE_107",
    source: "Core",
    categories: ["Dragon Magazine 374", "ID_FMP_SOURCE_107"]
  });
  byID[te.id] = te;
  
  te = source["Dragon Magazine 375"] = new RulesElement({
    name: "Dragon Magazine 375",
    type: "source",
    id: "ID_FMP_SOURCE_115",
    source: "Core",
    categories: ["Dragon Magazine 375", "ID_FMP_SOURCE_115"]
  });
  byID[te.id] = te;
  
  te = source["Dragon Magazine 376"] = new RulesElement({
    name: "Dragon Magazine 376",
    type: "source",
    id: "ID_FMP_SOURCE_133",
    source: "Core",
    categories: ["Dragon Magazine 376", "ID_FMP_SOURCE_133"]
  });
  byID[te.id] = te;
  
  te = source["Dragon Magazine 377"] = new RulesElement({
    name: "Dragon Magazine 377",
    type: "source",
    id: "ID_FMP_SOURCE_144",
    source: "Core",
    categories: ["Dragon Magazine 377", "ID_FMP_SOURCE_144"]
  });
  byID[te.id] = te;
  
  te = source["Dragon Magazine 378"] = new RulesElement({
    name: "Dragon Magazine 378",
    type: "source",
    id: "ID_FMP_SOURCE_162",
    source: "Core",
    categories: ["Dragon Magazine 378", "ID_FMP_SOURCE_162"]
  });
  byID[te.id] = te;
  
  te = source["Dragon Magazine 379"] = new RulesElement({
    name: "Dragon Magazine 379",
    type: "source",
    id: "ID_FMP_SOURCE_164",
    source: "Core",
    categories: ["Dragon Magazine 379", "ID_FMP_SOURCE_164"]
  });
  byID[te.id] = te;
  
  te = source["Dragon Magazine 380"] = new RulesElement({
    name: "Dragon Magazine 380",
    type: "source",
    id: "ID_FMP_SOURCE_171",
    source: "Core",
    categories: ["Dragon Magazine 380", "ID_FMP_SOURCE_171"]
  });
  byID[te.id] = te;
  
  te = source["Dragon Magazine 381"] = new RulesElement({
    name: "Dragon Magazine 381",
    type: "source",
    id: "ID_FMP_SOURCE_172",
    source: "Core",
    categories: ["Dragon Magazine 381", "ID_FMP_SOURCE_172"]
  });
  byID[te.id] = te;
  
  te = source["Dragon Magazine 382"] = new RulesElement({
    name: "Dragon Magazine 382",
    type: "source",
    id: "ID_FMP_SOURCE_189",
    source: "Core",
    categories: ["Dragon Magazine 382", "ID_FMP_SOURCE_189"]
  });
  byID[te.id] = te;
  
  te = source["Dragon Magazine 383"] = new RulesElement({
    name: "Dragon Magazine 383",
    type: "source",
    id: "ID_FMP_SOURCE_194",
    source: "Core",
    categories: ["Dragon Magazine 383", "ID_FMP_SOURCE_194"]
  });
  byID[te.id] = te;
  
  te = source["Dragon Magazine 384"] = new RulesElement({
    name: "Dragon Magazine 384",
    type: "source",
    id: "ID_FMP_SOURCE_221",
    source: "Core",
    categories: ["Dragon Magazine 384", "ID_FMP_SOURCE_221"]
  });
  byID[te.id] = te;
  
  te = source["Dragon Magazine 385"] = new RulesElement({
    name: "Dragon Magazine 385",
    type: "source",
    id: "ID_FMP_SOURCE_223",
    source: "Core",
    categories: ["Dragon Magazine 385", "ID_FMP_SOURCE_223"]
  });
  byID[te.id] = te;
  
  te = source["Dragon Magazine 386"] = new RulesElement({
    name: "Dragon Magazine 386",
    type: "source",
    id: "ID_FMP_SOURCE_224",
    source: "Core",
    categories: ["Dragon Magazine 386", "ID_FMP_SOURCE_224"]
  });
  byID[te.id] = te;
  
  te = source["Dragon Magazine 387"] = new RulesElement({
    name: "Dragon Magazine 387",
    type: "source",
    id: "ID_FMP_SOURCE_225",
    source: "Core",
    categories: ["Dragon Magazine 387", "ID_FMP_SOURCE_225"]
  });
  byID[te.id] = te;
  
  te = source["Dragon Magazine 388"] = new RulesElement({
    name: "Dragon Magazine 388",
    type: "source",
    id: "ID_FMP_SOURCE_226",
    source: "Core",
    categories: ["Dragon Magazine 388", "ID_FMP_SOURCE_226"]
  });
  byID[te.id] = te;
  
  te = source["Dragon Magazine 389"] = new RulesElement({
    name: "Dragon Magazine 389",
    type: "source",
    id: "ID_FMP_SOURCE_227",
    source: "Core",
    categories: ["Dragon Magazine 389", "ID_FMP_SOURCE_227"]
  });
  byID[te.id] = te;
  
  te = source["Dragon Magazine 390"] = new RulesElement({
    name: "Dragon Magazine 390",
    type: "source",
    id: "ID_FMP_SOURCE_228",
    source: "Core",
    categories: ["Dragon Magazine 390", "ID_FMP_SOURCE_228"]
  });
  byID[te.id] = te;
  
  te = source["Dragon Magazine Annual 2009"] = new RulesElement({
    name: "Dragon Magazine Annual 2009",
    type: "source",
    id: "ID_FMP_SOURCE_149",
    source: "Core",
    categories: ["Dragon Magazine Annual 2009", "ID_FMP_SOURCE_149"]
  });
  byID[te.id] = te;
  
  te = source["Dragons of Eberron"] = new RulesElement({
    name: "Dragons of Eberron",
    type: "source",
    id: "ID_FMP_SOURCE_192",
    source: "Core",
    categories: ["Dragons of Eberron", "ID_FMP_SOURCE_192"]
  });
  byID[te.id] = te;
  
  te = source["Dungeon Delve"] = new RulesElement({
    name: "Dungeon Delve",
    type: "source",
    id: "ID_FMP_SOURCE_65",
    source: "Core",
    categories: ["Dungeon Delve", "ID_FMP_SOURCE_65"]
  });
  byID[te.id] = te;
  
  te = source["Dungeon Magazine 155"] = new RulesElement({
    name: "Dungeon Magazine 155",
    type: "source",
    id: "ID_FMP_SOURCE_29",
    source: "Core",
    categories: ["Dungeon Magazine 155", "ID_FMP_SOURCE_29"]
  });
  byID[te.id] = te;
  
  te = source["Dungeon Magazine 156"] = new RulesElement({
    name: "Dungeon Magazine 156",
    type: "source",
    id: "ID_FMP_SOURCE_33",
    source: "Core",
    categories: ["Dungeon Magazine 156", "ID_FMP_SOURCE_33"]
  });
  byID[te.id] = te;
  
  te = source["Dungeon Magazine 157"] = new RulesElement({
    name: "Dungeon Magazine 157",
    type: "source",
    id: "ID_FMP_SOURCE_35",
    source: "Core",
    categories: ["Dungeon Magazine 157", "ID_FMP_SOURCE_35"]
  });
  byID[te.id] = te;
  
  te = source["Dungeon Magazine 158"] = new RulesElement({
    name: "Dungeon Magazine 158",
    type: "source",
    id: "ID_FMP_SOURCE_37",
    source: "Core",
    categories: ["Dungeon Magazine 158", "ID_FMP_SOURCE_37"]
  });
  byID[te.id] = te;
  
  te = source["Dungeon Magazine 159"] = new RulesElement({
    name: "Dungeon Magazine 159",
    type: "source",
    id: "ID_FMP_SOURCE_57",
    source: "Core",
    categories: ["Dungeon Magazine 159", "ID_FMP_SOURCE_57"]
  });
  byID[te.id] = te;
  
  te = source["Dungeon Magazine 160"] = new RulesElement({
    name: "Dungeon Magazine 160",
    type: "source",
    id: "ID_FMP_SOURCE_63",
    source: "Core",
    categories: ["Dungeon Magazine 160", "ID_FMP_SOURCE_63"]
  });
  byID[te.id] = te;
  
  te = source["Dungeon Magazine 161"] = new RulesElement({
    name: "Dungeon Magazine 161",
    type: "source",
    id: "ID_FMP_SOURCE_72",
    source: "Core",
    categories: ["Dungeon Magazine 161", "ID_FMP_SOURCE_72"]
  });
  byID[te.id] = te;
  
  te = source["Dungeon Magazine 162"] = new RulesElement({
    name: "Dungeon Magazine 162",
    type: "source",
    id: "ID_FMP_SOURCE_90",
    source: "Core",
    categories: ["Dungeon Magazine 162", "ID_FMP_SOURCE_90"]
  });
  byID[te.id] = te;
  
  te = source["Dungeon Magazine 163"] = new RulesElement({
    name: "Dungeon Magazine 163",
    type: "source",
    id: "ID_FMP_SOURCE_100",
    source: "Core",
    categories: ["Dungeon Magazine 163", "ID_FMP_SOURCE_100"]
  });
  byID[te.id] = te;
  
  te = source["Dungeon Magazine 164"] = new RulesElement({
    name: "Dungeon Magazine 164",
    type: "source",
    id: "ID_FMP_SOURCE_106",
    source: "Core",
    categories: ["Dungeon Magazine 164", "ID_FMP_SOURCE_106"]
  });
  byID[te.id] = te;
  
  te = source["Dungeon Magazine 165"] = new RulesElement({
    name: "Dungeon Magazine 165",
    type: "source",
    id: "ID_FMP_SOURCE_108",
    source: "Core",
    categories: ["Dungeon Magazine 165", "ID_FMP_SOURCE_108"]
  });
  byID[te.id] = te;
  
  te = source["Dungeon Magazine 166"] = new RulesElement({
    name: "Dungeon Magazine 166",
    type: "source",
    id: "ID_FMP_SOURCE_116",
    source: "Core",
    categories: ["Dungeon Magazine 166", "ID_FMP_SOURCE_116"]
  });
  byID[te.id] = te;
  
  te = source["Dungeon Magazine 167"] = new RulesElement({
    name: "Dungeon Magazine 167",
    type: "source",
    id: "ID_FMP_SOURCE_134",
    source: "Core",
    categories: ["Dungeon Magazine 167", "ID_FMP_SOURCE_134"]
  });
  byID[te.id] = te;
  
  te = source["Dungeon Magazine 168"] = new RulesElement({
    name: "Dungeon Magazine 168",
    type: "source",
    id: "ID_FMP_SOURCE_145",
    source: "Core",
    categories: ["Dungeon Magazine 168", "ID_FMP_SOURCE_145"]
  });
  byID[te.id] = te;
  
  te = source["Dungeon Magazine 169"] = new RulesElement({
    name: "Dungeon Magazine 169",
    type: "source",
    id: "ID_FMP_SOURCE_150",
    source: "Core",
    categories: ["Dungeon Magazine 169", "ID_FMP_SOURCE_150"]
  });
  byID[te.id] = te;
  
  te = source["Dungeon Magazine 170"] = new RulesElement({
    name: "Dungeon Magazine 170",
    type: "source",
    id: "ID_FMP_SOURCE_166",
    source: "Core",
    categories: ["Dungeon Magazine 170", "ID_FMP_SOURCE_166"]
  });
  byID[te.id] = te;
  
  te = source["Dungeon Magazine 171"] = new RulesElement({
    name: "Dungeon Magazine 171",
    type: "source",
    id: "ID_FMP_SOURCE_174",
    source: "Core",
    categories: ["Dungeon Magazine 171", "ID_FMP_SOURCE_174"]
  });
  byID[te.id] = te;
  
  te = source["Dungeon Magazine 172"] = new RulesElement({
    name: "Dungeon Magazine 172",
    type: "source",
    id: "ID_FMP_SOURCE_175",
    source: "Core",
    categories: ["Dungeon Magazine 172", "ID_FMP_SOURCE_175"]
  });
  byID[te.id] = te;
  
  te = source["Dungeon Magazine 173"] = new RulesElement({
    name: "Dungeon Magazine 173",
    type: "source",
    id: "ID_FMP_SOURCE_181",
    source: "Core",
    categories: ["Dungeon Magazine 173", "ID_FMP_SOURCE_181"]
  });
  byID[te.id] = te;
  
  te = source["Dungeon Magazine 174"] = new RulesElement({
    name: "Dungeon Magazine 174",
    type: "source",
    id: "ID_FMP_SOURCE_193",
    source: "Core",
    categories: ["Dungeon Magazine 174", "ID_FMP_SOURCE_193"]
  });
  byID[te.id] = te;
  
  te = source["Dungeon Magazine 175"] = new RulesElement({
    name: "Dungeon Magazine 175",
    type: "source",
    id: "ID_FMP_SOURCE_210",
    source: "Core",
    categories: ["Dungeon Magazine 175", "ID_FMP_SOURCE_210"]
  });
  byID[te.id] = te;
  
  te = source["Dungeon Magazine 176"] = new RulesElement({
    name: "Dungeon Magazine 176",
    type: "source",
    id: "ID_FMP_SOURCE_211",
    source: "Core",
    categories: ["Dungeon Magazine 176", "ID_FMP_SOURCE_211"]
  });
  byID[te.id] = te;
  
  te = source["Dungeon Magazine 177"] = new RulesElement({
    name: "Dungeon Magazine 177",
    type: "source",
    id: "ID_FMP_SOURCE_212",
    source: "Core",
    categories: ["Dungeon Magazine 177", "ID_FMP_SOURCE_212"]
  });
  byID[te.id] = te;
  
  te = source["Dungeon Magazine 178"] = new RulesElement({
    name: "Dungeon Magazine 178",
    type: "source",
    id: "ID_FMP_SOURCE_213",
    source: "Core",
    categories: ["Dungeon Magazine 178", "ID_FMP_SOURCE_213"]
  });
  byID[te.id] = te;
  
  te = source["Dungeon Magazine 179"] = new RulesElement({
    name: "Dungeon Magazine 179",
    type: "source",
    id: "ID_FMP_SOURCE_214",
    source: "Core",
    categories: ["Dungeon Magazine 179", "ID_FMP_SOURCE_214"]
  });
  byID[te.id] = te;
  
  te = source["Dungeon Magazine 180"] = new RulesElement({
    name: "Dungeon Magazine 180",
    type: "source",
    id: "ID_FMP_SOURCE_215",
    source: "Core",
    categories: ["Dungeon Magazine 180", "ID_FMP_SOURCE_215"]
  });
  byID[te.id] = te;
  
  te = source["Dungeon Magazine 181"] = new RulesElement({
    name: "Dungeon Magazine 181",
    type: "source",
    id: "ID_FMP_SOURCE_216",
    source: "Core",
    categories: ["Dungeon Magazine 181", "ID_FMP_SOURCE_216"]
  });
  byID[te.id] = te;
  
  te = source["Dungeon Magazine Annual"] = new RulesElement({
    name: "Dungeon Magazine Annual",
    type: "source",
    id: "ID_FMP_SOURCE_199",
    source: "Core",
    categories: ["Dungeon Magazine Annual", "ID_FMP_SOURCE_199"]
  });
  byID[te.id] = te;
  
  te = source["Dungeon Master's Guide"] = new RulesElement({
    name: "Dungeon Master's Guide",
    type: "source",
    id: "ID_FMP_SOURCE_3",
    source: "Core",
    categories: ["Dungeon Master's Guide", "ID_FMP_SOURCE_3"]
  });
  byID[te.id] = te;
  
  te = source["Dungeon Master's Guide 2"] = new RulesElement({
    name: "Dungeon Master's Guide 2",
    type: "source",
    id: "ID_FMP_SOURCE_19",
    source: "Core",
    categories: ["Dungeon Master's Guide 2", "ID_FMP_SOURCE_19"]
  });
  byID[te.id] = te;
  
  te = source["E1 Death's Reach"] = new RulesElement({
    name: "E1 Death's Reach",
    type: "source",
    id: "ID_FMP_SOURCE_67",
    source: "Core",
    categories: ["E1 Death's Reach", "ID_FMP_SOURCE_67"]
  });
  byID[te.id] = te;
  
  te = source["E2 Kingdom of the Ghouls"] = new RulesElement({
    name: "E2 Kingdom of the Ghouls",
    type: "source",
    id: "ID_FMP_SOURCE_123",
    source: "Core",
    categories: ["E2 Kingdom of the Ghouls", "ID_FMP_SOURCE_123"]
  });
  byID[te.id] = te;
  
  te = source["E3 Prince of Undeath"] = new RulesElement({
    name: "E3 Prince of Undeath",
    type: "source",
    id: "ID_FMP_SOURCE_147",
    source: "Core",
    categories: ["E3 Prince of Undeath", "ID_FMP_SOURCE_147"]
  });
  byID[te.id] = te;
  
  te = source["Eberron Campaign Setting"] = new RulesElement({
    name: "Eberron Campaign Setting",
    type: "source",
    id: "ID_FMP_SOURCE_8",
    source: "Core",
    categories: ["Eberron Campaign Setting", "ID_FMP_SOURCE_8"]
  });
  byID[te.id] = te;
  
  te = source["Eberron Player's Guide"] = new RulesElement({
    name: "Eberron Player's Guide",
    type: "source",
    id: "ID_FMP_SOURCE_9",
    source: "Core",
    categories: ["Eberron Player's Guide", "ID_FMP_SOURCE_9"]
  });
  byID[te.id] = te;
  
  te = source["Elder Evils"] = new RulesElement({
    name: "Elder Evils",
    type: "source",
    id: "ID_FMP_SOURCE_141",
    source: "Core",
    categories: ["Elder Evils", "ID_FMP_SOURCE_141"]
  });
  byID[te.id] = te;
  
  te = source["Exemplars of Evil"] = new RulesElement({
    name: "Exemplars of Evil",
    type: "source",
    id: "ID_FMP_SOURCE_142",
    source: "Core",
    categories: ["Exemplars of Evil", "ID_FMP_SOURCE_142"]
  });
  byID[te.id] = te;
  
  te = source["Forgotten Realms Campaign Guide"] = new RulesElement({
    name: "Forgotten Realms Campaign Guide",
    type: "source",
    id: "ID_FMP_SOURCE_6",
    source: "Core",
    categories: ["Forgotten Realms Campaign Guide", "ID_FMP_SOURCE_6"]
  });
  byID[te.id] = te;
  
  te = source["Forgotten Realms Player's Guide"] = new RulesElement({
    name: "Forgotten Realms Player's Guide",
    type: "source",
    id: "ID_FMP_SOURCE_7",
    source: "Core",
    categories: ["Forgotten Realms Player's Guide", "ID_FMP_SOURCE_7"]
  });
  byID[te.id] = te;
  
  te = source["Fortress of the Yuan-ti"] = new RulesElement({
    name: "Fortress of the Yuan-ti",
    type: "source",
    id: "ID_FMP_SOURCE_165",
    source: "Core",
    categories: ["Fortress of the Yuan-ti", "ID_FMP_SOURCE_165"]
  });
  byID[te.id] = te;
  
  te = source["FR1 Scepter Tower of Spellgard"] = new RulesElement({
    name: "FR1 Scepter Tower of Spellgard",
    type: "source",
    id: "ID_FMP_SOURCE_24",
    source: "Core",
    categories: ["FR1 Scepter Tower of Spellgard", "ID_FMP_SOURCE_24"]
  });
  byID[te.id] = te;
  
  te = source["H1 Keep on the Shadowfell"] = new RulesElement({
    name: "H1 Keep on the Shadowfell",
    type: "source",
    id: "ID_FMP_SOURCE_4",
    source: "Core",
    categories: ["H1 Keep on the Shadowfell", "ID_FMP_SOURCE_4"]
  });
  byID[te.id] = te;
  
  te = source["H2 Thunderspire Labyrinth"] = new RulesElement({
    name: "H2 Thunderspire Labyrinth",
    type: "source",
    id: "ID_FMP_SOURCE_5",
    source: "Core",
    categories: ["H2 Thunderspire Labyrinth", "ID_FMP_SOURCE_5"]
  });
  byID[te.id] = te;
  
  te = source["H3 Pyramid of Shadows"] = new RulesElement({
    name: "H3 Pyramid of Shadows",
    type: "source",
    id: "ID_FMP_SOURCE_25",
    source: "Core",
    categories: ["H3 Pyramid of Shadows", "ID_FMP_SOURCE_25"]
  });
  byID[te.id] = te;
  
  te = source["Hammerfast"] = new RulesElement({
    name: "Hammerfast",
    type: "source",
    id: "ID_FMP_SOURCE_196",
    source: "Core",
    categories: ["Hammerfast", "ID_FMP_SOURCE_196"]
  });
  byID[te.id] = te;
  
  te = source["HS1 The Slaying Stone"] = new RulesElement({
    name: "HS1 The Slaying Stone",
    type: "source",
    id: "ID_FMP_SOURCE_198",
    source: "Core",
    categories: ["HS1 The Slaying Stone", "ID_FMP_SOURCE_198"]
  });
  byID[te.id] = te;
  
  te = source["HS2 Orcs of Stonefang Pass"] = new RulesElement({
    name: "HS2 Orcs of Stonefang Pass",
    type: "source",
    id: "ID_FMP_SOURCE_206",
    source: "Core",
    categories: ["HS2 Orcs of Stonefang Pass", "ID_FMP_SOURCE_206"]
  });
  byID[te.id] = te;
  
  te = source["Manual of the Planes"] = new RulesElement({
    name: "Manual of the Planes",
    type: "source",
    id: "ID_FMP_SOURCE_23",
    source: "Core",
    categories: ["Manual of the Planes", "ID_FMP_SOURCE_23"]
  });
  byID[te.id] = te;
  
  te = source["Martial Power"] = new RulesElement({
    name: "Martial Power",
    type: "source",
    id: "ID_FMP_SOURCE_13",
    source: "Core",
    categories: ["Martial Power", "ID_FMP_SOURCE_13"]
  });
  byID[te.id] = te;
  
  te = source["Martial Power 2"] = new RulesElement({
    name: "Martial Power 2",
    type: "source",
    id: "ID_FMP_SOURCE_180",
    source: "Core",
    categories: ["Martial Power 2", "ID_FMP_SOURCE_180"]
  });
  byID[te.id] = te;
  
  te = source["Monster Manual"] = new RulesElement({
    name: "Monster Manual",
    type: "source",
    id: "ID_FMP_SOURCE_2",
    source: "Core",
    categories: ["Monster Manual", "ID_FMP_SOURCE_2"]
  });
  byID[te.id] = te;
  
  te = source["Monster Manual 2"] = new RulesElement({
    name: "Monster Manual 2",
    type: "source",
    id: "ID_FMP_SOURCE_18",
    source: "Core",
    categories: ["Monster Manual 2", "ID_FMP_SOURCE_18"]
  });
  byID[te.id] = te;
  
  te = source["Monster Manual 3"] = new RulesElement({
    name: "Monster Manual 3",
    type: "source",
    id: "ID_FMP_SOURCE_201",
    source: "Core",
    categories: ["Monster Manual 3", "ID_FMP_SOURCE_201"]
  });
  byID[te.id] = te;
  
  te = source["Monster Manual: Dangerous Delves"] = new RulesElement({
    name: "Monster Manual: Dangerous Delves",
    type: "source",
    id: "ID_FMP_SOURCE_114",
    source: "Core",
    categories: ["Monster Manual: Dangerous Delves", "ID_FMP_SOURCE_114"]
  });
  byID[te.id] = te;
  
  te = source["Monster Manual: Legendary Evils"] = new RulesElement({
    name: "Monster Manual: Legendary Evils",
    type: "source",
    id: "ID_FMP_SOURCE_132",
    source: "Core",
    categories: ["Monster Manual: Legendary Evils", "ID_FMP_SOURCE_132"]
  });
  byID[te.id] = te;
  
  te = source["Monster Manual: Savage Encounters"] = new RulesElement({
    name: "Monster Manual: Savage Encounters",
    type: "source",
    id: "ID_FMP_SOURCE_176",
    source: "Core",
    categories: ["Monster Manual: Savage Encounters", "ID_FMP_SOURCE_176"]
  });
  byID[te.id] = te;
  
  te = source["Open Grave: Secrets of the Undead"] = new RulesElement({
    name: "Open Grave: Secrets of the Undead",
    type: "source",
    id: "ID_FMP_SOURCE_64",
    source: "Core",
    categories: ["Open Grave: Secrets of the Undead", "ID_FMP_SOURCE_64"]
  });
  byID[te.id] = te;
  
  te = source["P1 King of the Trollhaunt Warrens"] = new RulesElement({
    name: "P1 King of the Trollhaunt Warrens",
    type: "source",
    id: "ID_FMP_SOURCE_26",
    source: "Core",
    categories: ["P1 King of the Trollhaunt Warrens", "ID_FMP_SOURCE_26"]
  });
  byID[te.id] = te;
  
  te = source["P2 Demon Queen Enclave"] = new RulesElement({
    name: "P2 Demon Queen Enclave",
    type: "source",
    id: "ID_FMP_SOURCE_27",
    source: "Core",
    categories: ["P2 Demon Queen Enclave", "ID_FMP_SOURCE_27"]
  });
  byID[te.id] = te;
  
  te = source["P3 Assault on Nightwyrm Fortress"] = new RulesElement({
    name: "P3 Assault on Nightwyrm Fortress",
    type: "source",
    id: "ID_FMP_SOURCE_66",
    source: "Core",
    categories: ["P3 Assault on Nightwyrm Fortress", "ID_FMP_SOURCE_66"]
  });
  byID[te.id] = te;
  
  te = source["PH Heroes: Series 1"] = new RulesElement({
    name: "PH Heroes: Series 1",
    type: "source",
    id: "ID_FMP_SOURCE_74",
    source: "Core",
    categories: ["PH Heroes: Series 1", "ID_FMP_SOURCE_74"]
  });
  byID[te.id] = te;
  
  te = source["PH Heroes: Series 2"] = new RulesElement({
    name: "PH Heroes: Series 2",
    type: "source",
    id: "ID_FMP_SOURCE_91",
    source: "Core",
    categories: ["PH Heroes: Series 2", "ID_FMP_SOURCE_91"]
  });
  byID[te.id] = te;
  
  te = source["Player's Handbook"] = new RulesElement({
    name: "Player's Handbook",
    type: "source",
    id: "ID_FMP_SOURCE_1",
    source: "Core",
    categories: ["Player's Handbook", "ID_FMP_SOURCE_1"]
  });
  byID[te.id] = te;
  
  te = source["Player's Handbook 2"] = new RulesElement({
    name: "Player's Handbook 2",
    type: "source",
    id: "ID_FMP_SOURCE_17",
    source: "Core",
    categories: ["Player's Handbook 2", "ID_FMP_SOURCE_17"]
  });
  byID[te.id] = te;
  
  te = source["Player's Handbook 3"] = new RulesElement({
    name: "Player's Handbook 3",
    type: "source",
    id: "ID_FMP_SOURCE_21",
    source: "Core",
    categories: ["Player's Handbook 3", "ID_FMP_SOURCE_21"]
  });
  byID[te.id] = te;
  
  te = source["Player's Handbook Races: Dragonborn"] = new RulesElement({
    name: "Player's Handbook Races: Dragonborn",
    type: "source",
    id: "ID_FMP_SOURCE_179",
    source: "Core",
    categories: ["Player's Handbook Races: Dragonborn", "ID_FMP_SOURCE_179"]
  });
  byID[te.id] = te;
  
  te = source["Player's Handbook Races: Tiefling"] = new RulesElement({
    name: "Player's Handbook Races: Tiefling",
    type: "source",
    id: "ID_FMP_SOURCE_195",
    source: "Core",
    categories: ["Player's Handbook Races: Tiefling", "ID_FMP_SOURCE_195"]
  });
  byID[te.id] = te;
  
  te = source["Primal Power"] = new RulesElement({
    name: "Primal Power",
    type: "source",
    id: "ID_FMP_SOURCE_16",
    source: "Core",
    categories: ["Primal Power", "ID_FMP_SOURCE_16"]
  });
  byID[te.id] = te;
  
  te = source["Psionic Power"] = new RulesElement({
    name: "Psionic Power",
    type: "source",
    id: "ID_FMP_SOURCE_242",
    source: "Core",
    categories: ["Psionic Power", "ID_FMP_SOURCE_242"]
  });
  byID[te.id] = te;
  
  te = source["Revenge of the Giants"] = new RulesElement({
    name: "Revenge of the Giants",
    type: "source",
    id: "ID_FMP_SOURCE_146",
    source: "Core",
    categories: ["Revenge of the Giants", "ID_FMP_SOURCE_146"]
  });
  byID[te.id] = te;
  
  te = source["Seekers of the Ashen Crown"] = new RulesElement({
    name: "Seekers of the Ashen Crown",
    type: "source",
    id: "ID_FMP_SOURCE_143",
    source: "Core",
    categories: ["Seekers of the Ashen Crown", "ID_FMP_SOURCE_143"]
  });
  byID[te.id] = te;
  
  te = source["The Plane Above: Secrets of the Astral Plane"] = new RulesElement({
    name: "The Plane Above: Secrets of the Astral Plane",
    type: "source",
    id: "ID_FMP_SOURCE_197",
    source: "Core",
    categories: ["The Plane Above: Secrets of the Astral Plane", "ID_FMP_SOURCE_197"]
  });
  byID[te.id] = te;
  
  te = source["The Plane Below: Secrets of the Elemental Chaos"] = new RulesElement({
    name: "The Plane Below: Secrets of the Elemental Chaos",
    type: "source",
    id: "ID_FMP_SOURCE_177",
    source: "Core",
    categories: ["The Plane Below: Secrets of the Elemental Chaos", "ID_FMP_SOURCE_177"]
  });
  byID[te.id] = te;
  
  te = source["Tomb of Horrors"] = new RulesElement({
    name: "Tomb of Horrors",
    type: "source",
    id: "ID_FMP_SOURCE_207",
    source: "Core",
    categories: ["Tomb of Horrors", "ID_FMP_SOURCE_207"]
  });
  byID[te.id] = te;
  
  te = source["Underdark"] = new RulesElement({
    name: "Underdark",
    type: "source",
    id: "ID_FMP_SOURCE_178",
    source: "Core",
    categories: ["Underdark", "ID_FMP_SOURCE_178"]
  });
  byID[te.id] = te;
  
  te = source["Vor Rukoth: An Ancient Ruins Adventure Site"] = new RulesElement({
    name: "Vor Rukoth: An Ancient Ruins Adventure Site",
    type: "source",
    id: "ID_FMP_SOURCE_208",
    source: "Core",
    categories: ["Vor Rukoth: An Ancient Ruins Adventure Site", "ID_FMP_SOURCE_208"]
  });
  byID[te.id] = te;
  
  
})(this);
