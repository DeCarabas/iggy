define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Feat = types['Feat'] || (types['Feat'] = {});
  te = Feat["Acid Splash"] = new engine.RulesElement({
    name: "Acid Splash",
    type: "Feat",
    id: "ID_FMP_FEAT_1998",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1998",
    categories: ["Acid Splash", "ID_FMP_FEAT_1998"]
  });
  byID[te.id] = te;
  
  te = Feat["Advantageous Eye"] = new engine.RulesElement({
    name: "Advantageous Eye",
    type: "Feat",
    id: "ID_FMP_FEAT_2024",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2024",
    categories: ["Advantageous Eye", "ID_FMP_FEAT_2024", "ID_INTERNAL_INTERNAL_VISTANI_BLOODLINE", "Vistani Bloodline"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_VISTANI_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Angry Grandfather"] = new engine.RulesElement({
    name: "Angry Grandfather",
    type: "Feat",
    id: "ID_FMP_FEAT_1993",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1993",
    categories: ["Angry Grandfather", "ID_FMP_FEAT_1993"]
  });
  byID[te.id] = te;
  
  te = Feat["Armor of Winter"] = new engine.RulesElement({
    name: "Armor of Winter",
    type: "Feat",
    id: "ID_FMP_FEAT_2003",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2003",
    categories: ["Armor of Winter", "ID_FMP_FEAT_2003"],
    rules: function(model) {
      model.statadd("Armor of Wrath:damage", "+1d6");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Bitter Challenge"] = new engine.RulesElement({
    name: "Bitter Challenge",
    type: "Feat",
    id: "ID_FMP_FEAT_2004",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2004",
    categories: ["Bitter Challenge", "ID_FMP_FEAT_2004"]
  });
  byID[te.id] = te;
  
  te = Feat["Bitter Cold"] = new engine.RulesElement({
    name: "Bitter Cold",
    type: "Feat",
    id: "ID_FMP_FEAT_1994",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1994",
    categories: ["Bitter Cold", "ID_FMP_FEAT_1994"]
  });
  byID[te.id] = te;
  
  te = Feat["Black Mantle"] = new engine.RulesElement({
    name: "Black Mantle",
    type: "Feat",
    id: "ID_FMP_FEAT_2016",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2016",
    categories: ["Black Mantle", "ID_FMP_FEAT_2016"]
  });
  byID[te.id] = te;
  
  te = Feat["Black Vistani Cat"] = new engine.RulesElement({
    name: "Black Vistani Cat",
    type: "Feat",
    id: "ID_FMP_FEAT_2025",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2025",
    categories: ["Black Vistani Cat", "ID_FMP_FEAT_2025", "ID_INTERNAL_CATEGORY_FAMILIAR", "Familiar", "ID_INTERNAL_INTERNAL_VISTANI_BLOODLINE", "Vistani Bloodline"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_VISTANI_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Blood Cousin's Tribe"] = new engine.RulesElement({
    name: "Blood Cousin's Tribe",
    type: "Feat",
    id: "ID_FMP_FEAT_1991",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1991",
    categories: ["Blood Cousin's Tribe", "ID_FMP_FEAT_1991", "ID_INTERNAL_CATEGORY_TRIBAL", "Tribal"],
    rules: function(model) {
      model.statadd("damage rolls", function() { /* when raging */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Chilling Oath"] = new engine.RulesElement({
    name: "Chilling Oath",
    type: "Feat",
    id: "ID_FMP_FEAT_2017",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2017",
    categories: ["Chilling Oath", "ID_FMP_FEAT_2017"]
  });
  byID[te.id] = te;
  
  te = Feat["Cosmic Eye"] = new engine.RulesElement({
    name: "Cosmic Eye",
    type: "Feat",
    id: "ID_FMP_FEAT_2026",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2026",
    categories: ["Cosmic Eye", "ID_FMP_FEAT_2026", "ID_INTERNAL_INTERNAL_VISTANI_BLOODLINE", "Vistani Bloodline"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_VISTANI_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Covenant Eye"] = new engine.RulesElement({
    name: "Covenant Eye",
    type: "Feat",
    id: "ID_FMP_FEAT_2027",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2027",
    categories: ["Covenant Eye", "ID_FMP_FEAT_2027", "ID_INTERNAL_INTERNAL_VISTANI_BLOODLINE", "Vistani Bloodline"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_VISTANI_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Covenant of the Raven Queen"] = new engine.RulesElement({
    name: "Covenant of the Raven Queen",
    type: "Feat",
    id: "ID_FMP_FEAT_2018",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2018",
    categories: ["Covenant of the Raven Queen", "ID_FMP_FEAT_2018"]
  });
  byID[te.id] = te;
  
  te = Feat["Dark Mantle"] = new engine.RulesElement({
    name: "Dark Mantle",
    type: "Feat",
    id: "ID_FMP_FEAT_2005",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2005",
    categories: ["Dark Mantle", "ID_FMP_FEAT_2005"]
  });
  byID[te.id] = te;
  
  te = Feat["Dreadful Doom"] = new engine.RulesElement({
    name: "Dreadful Doom",
    type: "Feat",
    id: "ID_FMP_FEAT_2006",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2006",
    categories: ["Dreadful Doom", "ID_FMP_FEAT_2006"]
  });
  byID[te.id] = te;
  
  te = Feat["Echo of Letherna"] = new engine.RulesElement({
    name: "Echo of Letherna",
    type: "Feat",
    id: "ID_FMP_FEAT_2021",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2021",
    categories: ["Echo of Letherna", "ID_FMP_FEAT_2021"]
  });
  byID[te.id] = te;
  
  te = Feat["Empty Mind"] = new engine.RulesElement({
    name: "Empty Mind",
    type: "Feat",
    id: "ID_FMP_FEAT_1986",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1986",
    categories: ["Empty Mind", "ID_FMP_FEAT_1986"]
  });
  byID[te.id] = te;
  
  te = Feat["Energy Recovery"] = new engine.RulesElement({
    name: "Energy Recovery",
    type: "Feat",
    id: "ID_FMP_FEAT_1999",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1999",
    categories: ["Energy Recovery", "ID_FMP_FEAT_1999"]
  });
  byID[te.id] = te;
  
  te = Feat["Enmity's Eye"] = new engine.RulesElement({
    name: "Enmity's Eye",
    type: "Feat",
    id: "ID_FMP_FEAT_2028",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2028",
    categories: ["Enmity's Eye", "ID_FMP_FEAT_2028", "ID_INTERNAL_INTERNAL_VISTANI_BLOODLINE", "Vistani Bloodline"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_VISTANI_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Eye of Paranoia"] = new engine.RulesElement({
    name: "Eye of Paranoia",
    type: "Feat",
    id: "ID_FMP_FEAT_2029",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2029",
    categories: ["Eye of Paranoia", "ID_FMP_FEAT_2029", "ID_INTERNAL_INTERNAL_VISTANI_BLOODLINE", "Vistani Bloodline"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_VISTANI_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Eye Wand"] = new engine.RulesElement({
    name: "Eye Wand",
    type: "Feat",
    id: "ID_FMP_FEAT_2030",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2030",
    categories: ["Eye Wand", "ID_FMP_FEAT_2030", "ID_INTERNAL_INTERNAL_VISTANI_BLOODLINE", "Vistani Bloodline"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_VISTANI_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Eyes of Dying Light"] = new engine.RulesElement({
    name: "Eyes of Dying Light",
    type: "Feat",
    id: "ID_FMP_FEAT_1988",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1988",
    categories: ["Eyes of Dying Light", "ID_FMP_FEAT_1988"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_VISION_DARKVISION"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Far Spell"] = new engine.RulesElement({
    name: "Far Spell",
    type: "Feat",
    id: "ID_FMP_FEAT_1995",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1995",
    categories: ["Far Spell", "ID_FMP_FEAT_1995"]
  });
  byID[te.id] = te;
  
  te = Feat["Fate's Warning"] = new engine.RulesElement({
    name: "Fate's Warning",
    type: "Feat",
    id: "ID_FMP_FEAT_2007",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2007",
    categories: ["Fate's Warning", "ID_FMP_FEAT_2007"]
  });
  byID[te.id] = te;
  
  te = Feat["Fell Vistani Hound"] = new engine.RulesElement({
    name: "Fell Vistani Hound",
    type: "Feat",
    id: "ID_FMP_FEAT_2031",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2031",
    categories: ["Fell Vistani Hound", "ID_FMP_FEAT_2031", "ID_INTERNAL_INTERNAL_VISTANI_BLOODLINE", "Vistani Bloodline"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_VISTANI_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Foul Torrent"] = new engine.RulesElement({
    name: "Foul Torrent",
    type: "Feat",
    id: "ID_FMP_FEAT_1990",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1990",
    categories: ["Foul Torrent", "ID_FMP_FEAT_1990"]
  });
  byID[te.id] = te;
  
  te = Feat["Grave Fortune"] = new engine.RulesElement({
    name: "Grave Fortune",
    type: "Feat",
    id: "ID_FMP_FEAT_2008",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2008",
    categories: ["Grave Fortune", "ID_FMP_FEAT_2008"]
  });
  byID[te.id] = te;
  
  te = Feat["Harvester of Sorrows"] = new engine.RulesElement({
    name: "Harvester of Sorrows",
    type: "Feat",
    id: "ID_FMP_FEAT_2022",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2022",
    categories: ["Harvester of Sorrows", "ID_FMP_FEAT_2022"]
  });
  byID[te.id] = te;
  
  te = Feat["Illusionary Stealth"] = new engine.RulesElement({
    name: "Illusionary Stealth",
    type: "Feat",
    id: "ID_FMP_FEAT_1996",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1996",
    categories: ["Illusionary Stealth", "ID_FMP_FEAT_1996"]
  });
  byID[te.id] = te;
  
  te = Feat["Immolate the Masses"] = new engine.RulesElement({
    name: "Immolate the Masses",
    type: "Feat",
    id: "ID_FMP_FEAT_1997",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1997",
    categories: ["Immolate the Masses", "ID_FMP_FEAT_1997"]
  });
  byID[te.id] = te;
  
  te = Feat["Lightning Transport"] = new engine.RulesElement({
    name: "Lightning Transport",
    type: "Feat",
    id: "ID_FMP_FEAT_2000",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2000",
    categories: ["Lightning Transport", "ID_FMP_FEAT_2000"]
  });
  byID[te.id] = te;
  
  te = Feat["Maledictor's Eye"] = new engine.RulesElement({
    name: "Maledictor's Eye",
    type: "Feat",
    id: "ID_FMP_FEAT_2032",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2032",
    categories: ["Maledictor's Eye", "ID_FMP_FEAT_2032", "ID_INTERNAL_INTERNAL_VISTANI_BLOODLINE", "Vistani Bloodline"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_VISTANI_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Mark of the Evil Eye"] = new engine.RulesElement({
    name: "Mark of the Evil Eye",
    type: "Feat",
    id: "ID_FMP_FEAT_2046",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2046",
    categories: ["Mark of the Evil Eye", "ID_FMP_FEAT_2046", "ID_INTERNAL_INTERNAL_VISTANI_BLOODLINE", "Vistani Bloodline"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_VISTANI_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Memory of Death"] = new engine.RulesElement({
    name: "Memory of Death",
    type: "Feat",
    id: "ID_FMP_FEAT_2009",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2009",
    categories: ["Memory of Death", "ID_FMP_FEAT_2009"]
  });
  byID[te.id] = te;
  
  te = Feat["Nature's Vindictive Eye"] = new engine.RulesElement({
    name: "Nature's Vindictive Eye",
    type: "Feat",
    id: "ID_FMP_FEAT_2033",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2033",
    categories: ["Nature's Vindictive Eye", "ID_FMP_FEAT_2033", "ID_INTERNAL_INTERNAL_VISTANI_BLOODLINE", "Vistani Bloodline"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_VISTANI_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Orb of the Eye"] = new engine.RulesElement({
    name: "Orb of the Eye",
    type: "Feat",
    id: "ID_FMP_FEAT_2034",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2034",
    categories: ["Orb of the Eye", "ID_FMP_FEAT_2034", "ID_INTERNAL_INTERNAL_VISTANI_BLOODLINE", "Vistani Bloodline"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_VISTANI_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Persistent Eye"] = new engine.RulesElement({
    name: "Persistent Eye",
    type: "Feat",
    id: "ID_FMP_FEAT_2048",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2048",
    categories: ["Persistent Eye", "ID_FMP_FEAT_2048", "ID_INTERNAL_INTERNAL_VISTANI_BLOODLINE", "Vistani Bloodline"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_VISTANI_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Pervasive Gloom"] = new engine.RulesElement({
    name: "Pervasive Gloom",
    type: "Feat",
    id: "ID_FMP_FEAT_2010",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2010",
    categories: ["Pervasive Gloom", "ID_FMP_FEAT_2010"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10108"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Phantasmal Destruction"] = new engine.RulesElement({
    name: "Phantasmal Destruction",
    type: "Feat",
    id: "ID_FMP_FEAT_2001",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2001",
    categories: ["Phantasmal Destruction", "ID_FMP_FEAT_2001"]
  });
  byID[te.id] = te;
  
  te = Feat["Prophetic Preparation"] = new engine.RulesElement({
    name: "Prophetic Preparation",
    type: "Feat",
    id: "ID_FMP_FEAT_2047",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2047",
    categories: ["Prophetic Preparation", "ID_FMP_FEAT_2047", "ID_INTERNAL_INTERNAL_VISTANI_BLOODLINE", "Vistani Bloodline"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_VISTANI_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Raven Queen's Outrage"] = new engine.RulesElement({
    name: "Raven Queen's Outrage",
    type: "Feat",
    id: "ID_FMP_FEAT_2019",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2019",
    categories: ["Raven Queen's Outrage", "ID_FMP_FEAT_2019"]
  });
  byID[te.id] = te;
  
  te = Feat["Raven Queen's Scorn"] = new engine.RulesElement({
    name: "Raven Queen's Scorn",
    type: "Feat",
    id: "ID_FMP_FEAT_2020",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2020",
    categories: ["Raven Queen's Scorn", "ID_FMP_FEAT_2020"]
  });
  byID[te.id] = te;
  
  te = Feat["Reaping Vengeance"] = new engine.RulesElement({
    name: "Reaping Vengeance",
    type: "Feat",
    id: "ID_FMP_FEAT_2011",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2011",
    categories: ["Reaping Vengeance", "ID_FMP_FEAT_2011"]
  });
  byID[te.id] = te;
  
  te = Feat["Restless Dead"] = new engine.RulesElement({
    name: "Restless Dead",
    type: "Feat",
    id: "ID_FMP_FEAT_2012",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2012",
    categories: ["Restless Dead", "ID_FMP_FEAT_2012"]
  });
  byID[te.id] = te;
  
  te = Feat["Revenant's Challenge"] = new engine.RulesElement({
    name: "Revenant's Challenge",
    type: "Feat",
    id: "ID_FMP_FEAT_2013",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2013",
    categories: ["Revenant's Challenge", "ID_FMP_FEAT_2013"]
  });
  byID[te.id] = te;
  
  te = Feat["Sense of the Corrupted"] = new engine.RulesElement({
    name: "Sense of the Corrupted",
    type: "Feat",
    id: "ID_FMP_FEAT_1989",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1989",
    categories: ["Sense of the Corrupted", "ID_FMP_FEAT_1989"],
    rules: function(model) {
      model.statadd("Perception Misc", function() { /* to detect demons */ return 5; });
      model.statadd("Insight Misc", function() { /* to see through demons' disguises */ return 5; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Shadow Legacy"] = new engine.RulesElement({
    name: "Shadow Legacy",
    type: "Feat",
    id: "ID_FMP_FEAT_2014",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2014",
    categories: ["Shadow Legacy", "ID_FMP_FEAT_2014"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10109"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Shadowfell Guidance"] = new engine.RulesElement({
    name: "Shadowfell Guidance",
    type: "Feat",
    id: "ID_FMP_FEAT_2015",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2015",
    categories: ["Shadowfell Guidance", "ID_FMP_FEAT_2015"]
  });
  byID[te.id] = te;
  
  te = Feat["Sympathetic Transference"] = new engine.RulesElement({
    name: "Sympathetic Transference",
    type: "Feat",
    id: "ID_FMP_FEAT_2002",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2002",
    categories: ["Sympathetic Transference", "ID_FMP_FEAT_2002"]
  });
  byID[te.id] = te;
  
  te = Feat["Vestige of Vistan"] = new engine.RulesElement({
    name: "Vestige of Vistan",
    type: "Feat",
    id: "ID_FMP_FEAT_2035",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2035",
    categories: ["Vestige of Vistan", "ID_FMP_FEAT_2035", "ID_INTERNAL_INTERNAL_VISTANI_BLOODLINE", "Vistani Bloodline"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_VISTANI_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Vistani Fencer"] = new engine.RulesElement({
    name: "Vistani Fencer",
    type: "Feat",
    id: "ID_FMP_FEAT_2037",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2037",
    categories: ["Vistani Fencer", "ID_FMP_FEAT_2037", "ID_INTERNAL_INTERNAL_VISTANI_BLOODLINE", "Vistani Bloodline"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_VISTANI_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Vistani Foresight"] = new engine.RulesElement({
    name: "Vistani Foresight",
    type: "Feat",
    id: "ID_FMP_FEAT_2049",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2049",
    categories: ["Vistani Foresight", "ID_FMP_FEAT_2049", "ID_INTERNAL_INTERNAL_VISTANI_BLOODLINE", "Vistani Bloodline"],
    rules: function(model) {
      model.statadd("Initiative Misc", 2);
      model.statadd("_BaseActionPoints", function() { return model.stat("Vistani Foresight:+1"); });
      model.statadd("Action Point", "Vistani Foresight:You gain an additional action point after an extended rest");
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_VISTANI_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Vistani Guardian"] = new engine.RulesElement({
    name: "Vistani Guardian",
    type: "Feat",
    id: "ID_FMP_FEAT_2038",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2038",
    categories: ["Vistani Guardian", "ID_FMP_FEAT_2038", "ID_INTERNAL_INTERNAL_VISTANI_BLOODLINE", "Vistani Bloodline"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_VISTANI_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Vistani Healer"] = new engine.RulesElement({
    name: "Vistani Healer",
    type: "Feat",
    id: "ID_FMP_FEAT_2039",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2039",
    categories: ["Vistani Healer", "ID_FMP_FEAT_2039", "ID_INTERNAL_INTERNAL_VISTANI_BLOODLINE", "Vistani Bloodline"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_VISTANI_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Vistani Heritage"] = new engine.RulesElement({
    name: "Vistani Heritage",
    type: "Feat",
    id: "ID_FMP_FEAT_2023",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2023",
    categories: ["Vistani Heritage", "ID_FMP_FEAT_2023", "ID_INTERNAL_INTERNAL_VISTANI_BLOODLINE", "Vistani Bloodline"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_10111"]);
      model.statadd("Diplomacy Misc", function() { /* against other Vistani */ return 2; });
      model.statadd("FREEBEE:", 1);
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_VISTANI_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Vistani Jongleur"] = new engine.RulesElement({
    name: "Vistani Jongleur",
    type: "Feat",
    id: "ID_FMP_FEAT_2040",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2040",
    categories: ["Vistani Jongleur", "ID_FMP_FEAT_2040", "ID_INTERNAL_INTERNAL_VISTANI_BLOODLINE", "Vistani Bloodline"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_VISTANI_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Vistani Knife Fighting"] = new engine.RulesElement({
    name: "Vistani Knife Fighting",
    type: "Feat",
    id: "ID_FMP_FEAT_2041",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2041",
    categories: ["Vistani Knife Fighting", "ID_FMP_FEAT_2041", "ID_INTERNAL_INTERNAL_VISTANI_BLOODLINE", "Vistani Bloodline"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_VISTANI_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Vistani Pathfinding"] = new engine.RulesElement({
    name: "Vistani Pathfinding",
    type: "Feat",
    id: "ID_FMP_FEAT_2042",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2042",
    categories: ["Vistani Pathfinding", "ID_FMP_FEAT_2042", "ID_INTERNAL_INTERNAL_VISTANI_BLOODLINE", "Vistani Bloodline"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_VISTANI_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Vistani Seer"] = new engine.RulesElement({
    name: "Vistani Seer",
    type: "Feat",
    id: "ID_FMP_FEAT_2043",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2043",
    categories: ["Vistani Seer", "ID_FMP_FEAT_2043", "ID_INTERNAL_INTERNAL_VISTANI_BLOODLINE", "Vistani Bloodline"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_VISTANI_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Vistani Thief"] = new engine.RulesElement({
    name: "Vistani Thief",
    type: "Feat",
    id: "ID_FMP_FEAT_2044",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2044",
    categories: ["Vistani Thief", "ID_FMP_FEAT_2044", "ID_INTERNAL_INTERNAL_VISTANI_BLOODLINE", "Vistani Bloodline"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_VISTANI_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Warlock's Eye"] = new engine.RulesElement({
    name: "Warlock's Eye",
    type: "Feat",
    id: "ID_FMP_FEAT_2036",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2036",
    categories: ["Warlock's Eye", "ID_FMP_FEAT_2036", "ID_INTERNAL_INTERNAL_VISTANI_BLOODLINE", "Vistani Bloodline"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_VISTANI_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Whisper's Advice"] = new engine.RulesElement({
    name: "Whisper's Advice",
    type: "Feat",
    id: "ID_FMP_FEAT_1992",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=1992",
    categories: ["Whisper's Advice", "ID_FMP_FEAT_1992"],
    rules: function(model) {
      model.statadd("Whisper's Advice", 1);
      model.statadd("Whisper's Advice", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Wild Magic Eye"] = new engine.RulesElement({
    name: "Wild Magic Eye",
    type: "Feat",
    id: "ID_FMP_FEAT_2045",
    source: "Dragon Magazine 380",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/feat.aspx?id=2045",
    categories: ["Wild Magic Eye", "ID_FMP_FEAT_2045", "ID_INTERNAL_INTERNAL_VISTANI_BLOODLINE", "Vistani Bloodline"],
    rules: function(model) {
      model.statadd("ID_FMP_POWER_10111:damage", function() { return model.stat("Chaos Power"); });
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_BLOODLINE"]);
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_VISTANI_BLOODLINE"]);
    }
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
