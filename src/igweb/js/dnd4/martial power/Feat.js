define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var Feat = types['Feat'] || (types['Feat'] = {});
  te = Feat["Action Grant"] = new engine.RulesElement({
    name: "Action Grant",
    type: "Feat",
    id: "ID_FMP_FEAT_872",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=872",
    categories: ["Action Grant", "ID_FMP_FEAT_872"]
  });
  byID[te.id] = te;
  
  te = Feat["Aggressive Assault"] = new engine.RulesElement({
    name: "Aggressive Assault",
    type: "Feat",
    id: "ID_FMP_FEAT_750",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=750",
    categories: ["Aggressive Assault", "ID_FMP_FEAT_750"]
  });
  byID[te.id] = te;
  
  te = Feat["Aggressive Leadership"] = new engine.RulesElement({
    name: "Aggressive Leadership",
    type: "Feat",
    id: "ID_FMP_FEAT_873",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=873",
    categories: ["Aggressive Leadership", "ID_FMP_FEAT_873"],
    rules: function(model) {
      model.statadd("ALLY.damage rolls", function() { /* to bloodied allies who can see and hear you */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Agile Tempest"] = new engine.RulesElement({
    name: "Agile Tempest",
    type: "Feat",
    id: "ID_FMP_FEAT_830",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=830",
    categories: ["Agile Tempest", "ID_FMP_FEAT_830"],
    rules: function(model) {
      model.statadd("Agile Tempest", 1);
      model.statadd("Tempest Technique", function() { 
        if (model.wearing('Armor', ['chain'])) {
          return model.stat("Agile Tempest");
        } else return 0;
       }, "Armor Bonus");
      model.statadd("Tempest Technique", function() { 
        if (model.wearing('Armor', ['light'])) {
          return model.stat("Agile Tempest");
        } else return 0;
       }, "Armor Bonus");
      model.statadd("Agile Tempest", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Ankle Cutter"] = new engine.RulesElement({
    name: "Ankle Cutter",
    type: "Feat",
    id: "ID_FMP_FEAT_751",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=751",
    categories: ["Ankle Cutter", "ID_FMP_FEAT_751"]
  });
  byID[te.id] = te;
  
  te = Feat["Artful Provocation"] = new engine.RulesElement({
    name: "Artful Provocation",
    type: "Feat",
    id: "ID_FMP_FEAT_874",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=874",
    categories: ["Artful Provocation", "ID_FMP_FEAT_874"]
  });
  byID[te.id] = te;
  
  te = Feat["Avandra's Gift"] = new engine.RulesElement({
    name: "Avandra's Gift",
    type: "Feat",
    id: "ID_FMP_FEAT_393",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=393",
    categories: ["Avandra's Gift", "ID_FMP_FEAT_393"]
  });
  byID[te.id] = te;
  
  te = Feat["Avenging Spirit"] = new engine.RulesElement({
    name: "Avenging Spirit",
    type: "Feat",
    id: "ID_FMP_FEAT_831",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=831",
    categories: ["Avenging Spirit", "ID_FMP_FEAT_831"]
  });
  byID[te.id] = te;
  
  te = Feat["Battle Acumen"] = new engine.RulesElement({
    name: "Battle Acumen",
    type: "Feat",
    id: "ID_FMP_FEAT_910",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=910",
    categories: ["Battle Acumen", "ID_FMP_FEAT_910", "ID_INTERNAL_CATEGORY_MULTICLASS_FIGHTER", "Multiclass Fighter", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_401"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Battle Awareness"] = new engine.RulesElement({
    name: "Battle Awareness",
    type: "Feat",
    id: "ID_FMP_FEAT_911",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=911",
    categories: ["Battle Awareness", "ID_FMP_FEAT_911", "ID_INTERNAL_CATEGORY_MULTICLASS_FIGHTER", "Multiclass Fighter", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.select('Skill Training', 1, {
        filter: function(model, element) { return element.hasCategory("Fighter Class"); }
      });
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_FIGHTER"]);
      model.grant(model.elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Battle Instructor"] = new engine.RulesElement({
    name: "Battle Instructor",
    type: "Feat",
    id: "ID_FMP_FEAT_433",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=433",
    categories: ["Battle Instructor", "ID_FMP_FEAT_433", "ID_INTERNAL_CATEGORY_MULTICLASS_WARLORD", "Multiclass Warlord", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_443"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Beast Guidance"] = new engine.RulesElement({
    name: "Beast Guidance",
    type: "Feat",
    id: "ID_FMP_FEAT_752",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=752",
    categories: ["Beast Guidance", "ID_FMP_FEAT_752"],
    rules: function(model) {
      model.statadd("BEAST.Acrobatics misc", 2, "Feat");
      model.statadd("BEAST.Arcana misc", 2, "Feat");
      model.statadd("BEAST.Athletics misc", 2, "Feat");
      model.statadd("BEAST.Bluff misc", 2, "Feat");
      model.statadd("BEAST.Diplomacy misc", 2, "Feat");
      model.statadd("BEAST.Dungeoneering misc", 2, "Feat");
      model.statadd("BEAST.Endurance misc", 2, "Feat");
      model.statadd("BEAST.Heal misc", 2, "Feat");
      model.statadd("BEAST.History misc", 2, "Feat");
      model.statadd("BEAST.Insight misc", 2, "Feat");
      model.statadd("BEAST.Intimidate misc", 2, "Feat");
      model.statadd("BEAST.Nature misc", 2, "Feat");
      model.statadd("BEAST.Perception misc", 2, "Feat");
      model.statadd("BEAST.Religion misc", 2, "Feat");
      model.statadd("BEAST.Stealth misc", 2, "Feat");
      model.statadd("BEAST.Streetwise misc", 2, "Feat");
      model.statadd("BEAST.Thievery misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Beast Protector"] = new engine.RulesElement({
    name: "Beast Protector",
    type: "Feat",
    id: "ID_FMP_FEAT_753",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=753",
    categories: ["Beast Protector", "ID_FMP_FEAT_753"]
  });
  byID[te.id] = te;
  
  te = Feat["Beast Training"] = new engine.RulesElement({
    name: "Beast Training",
    type: "Feat",
    id: "ID_FMP_FEAT_754",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=754",
    categories: ["Beast Training", "ID_FMP_FEAT_754"]
  });
  byID[te.id] = te;
  
  te = Feat["Bleeding Backstab"] = new engine.RulesElement({
    name: "Bleeding Backstab",
    type: "Feat",
    id: "ID_FMP_FEAT_832",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=832",
    categories: ["Bleeding Backstab", "ID_FMP_FEAT_832"]
  });
  byID[te.id] = te;
  
  te = Feat["Bleeding Precision"] = new engine.RulesElement({
    name: "Bleeding Precision",
    type: "Feat",
    id: "ID_FMP_FEAT_833",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=833",
    categories: ["Bleeding Precision", "ID_FMP_FEAT_833"]
  });
  byID[te.id] = te;
  
  te = Feat["Bloodied Invigoration"] = new engine.RulesElement({
    name: "Bloodied Invigoration",
    type: "Feat",
    id: "ID_FMP_FEAT_755",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=755",
    categories: ["Bloodied Invigoration", "ID_FMP_FEAT_755"]
  });
  byID[te.id] = te;
  
  te = Feat["Bloody Inspiration"] = new engine.RulesElement({
    name: "Bloody Inspiration",
    type: "Feat",
    id: "ID_FMP_FEAT_834",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=834",
    categories: ["Bloody Inspiration", "ID_FMP_FEAT_834"]
  });
  byID[te.id] = te;
  
  te = Feat["Bloody Tenacity"] = new engine.RulesElement({
    name: "Bloody Tenacity",
    type: "Feat",
    id: "ID_FMP_FEAT_835",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=835",
    categories: ["Bloody Tenacity", "ID_FMP_FEAT_835"]
  });
  byID[te.id] = te;
  
  te = Feat["Bold Command"] = new engine.RulesElement({
    name: "Bold Command",
    type: "Feat",
    id: "ID_FMP_FEAT_756",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=756",
    categories: ["Bold Command", "ID_FMP_FEAT_756"]
  });
  byID[te.id] = te;
  
  te = Feat["Bold Spirit"] = new engine.RulesElement({
    name: "Bold Spirit",
    type: "Feat",
    id: "ID_FMP_FEAT_875",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=875",
    categories: ["Bold Spirit", "ID_FMP_FEAT_875"]
  });
  byID[te.id] = te;
  
  te = Feat["Bolstering Inspiration"] = new engine.RulesElement({
    name: "Bolstering Inspiration",
    type: "Feat",
    id: "ID_FMP_FEAT_757",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=757",
    categories: ["Bolstering Inspiration", "ID_FMP_FEAT_757"]
  });
  byID[te.id] = te;
  
  te = Feat["Bracing Breath"] = new engine.RulesElement({
    name: "Bracing Breath",
    type: "Feat",
    id: "ID_FMP_FEAT_758",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=758",
    categories: ["Bracing Breath", "ID_FMP_FEAT_758"]
  });
  byID[te.id] = te;
  
  te = Feat["Bravura Spirit"] = new engine.RulesElement({
    name: "Bravura Spirit",
    type: "Feat",
    id: "ID_FMP_FEAT_759",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=759",
    categories: ["Bravura Spirit", "ID_FMP_FEAT_759"]
  });
  byID[te.id] = te;
  
  te = Feat["Breath-Resistant Beast"] = new engine.RulesElement({
    name: "Breath-Resistant Beast",
    type: "Feat",
    id: "ID_FMP_FEAT_760",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=760",
    categories: ["Breath-Resistant Beast", "ID_FMP_FEAT_760"],
    rules: function(model) {
      model.statadd("BRB Resist", 5);
      model.statadd("BRB Resist", function() { return model.stat("HALF-LEVEL"); });
      model.statadd("BEAST.resist:acid", function() { return model.stat("BRB Resist"); }, "resist");
      model.statadd("BEAST.resist:cold", function() { return model.stat("BRB Resist"); }, "resist");
      model.statadd("BEAST.resist:fire", function() { return model.stat("BRB Resist"); }, "resist");
      model.statadd("BEAST.resist:lightning", function() { return model.stat("BRB Resist"); }, "resist");
      model.statadd("BEAST.resist:poison", function() { return model.stat("BRB Resist"); }, "resist");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Brutal Accuracy"] = new engine.RulesElement({
    name: "Brutal Accuracy",
    type: "Feat",
    id: "ID_FMP_FEAT_761",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=761",
    categories: ["Brutal Accuracy", "ID_FMP_FEAT_761"]
  });
  byID[te.id] = te;
  
  te = Feat["Brutal Advantage"] = new engine.RulesElement({
    name: "Brutal Advantage",
    type: "Feat",
    id: "ID_FMP_FEAT_876",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=876",
    categories: ["Brutal Advantage", "ID_FMP_FEAT_876"],
    rules: function(model) {
      model.statadd("damage rolls", function() { /* When you have combat advantage against a target but don't use Sneak Attack against it */ return model.stat("Strength modifier"); });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Brutal Teamwork"] = new engine.RulesElement({
    name: "Brutal Teamwork",
    type: "Feat",
    id: "ID_FMP_FEAT_762",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=762",
    categories: ["Brutal Teamwork", "ID_FMP_FEAT_762"]
  });
  byID[te.id] = te;
  
  te = Feat["Brutal Wound"] = new engine.RulesElement({
    name: "Brutal Wound",
    type: "Feat",
    id: "ID_FMP_FEAT_763",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=763",
    categories: ["Brutal Wound", "ID_FMP_FEAT_763"]
  });
  byID[te.id] = te;
  
  te = Feat["Call to Glory"] = new engine.RulesElement({
    name: "Call to Glory",
    type: "Feat",
    id: "ID_FMP_FEAT_877",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=877",
    categories: ["Call to Glory", "ID_FMP_FEAT_877"]
  });
  byID[te.id] = te;
  
  te = Feat["Camouflage"] = new engine.RulesElement({
    name: "Camouflage",
    type: "Feat",
    id: "ID_FMP_FEAT_764",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=764",
    categories: ["Camouflage", "ID_FMP_FEAT_764"],
    rules: function(model) {
      model.statadd("Stealth Misc", function() { /* when you have any cover or concealment outdoors */ return 5; }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Chainmail Agility"] = new engine.RulesElement({
    name: "Chainmail Agility",
    type: "Feat",
    id: "ID_FMP_FEAT_836",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=836",
    categories: ["Chainmail Agility", "ID_FMP_FEAT_836"],
    rules: function(model) {
      model.statadd("Speed", function() { 
        if (model.wearing('Armor', ['chain'])) {
          return 0;
        } else return 0;
       }, "Armor");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Channeled Battlerage"] = new engine.RulesElement({
    name: "Channeled Battlerage",
    type: "Feat",
    id: "ID_FMP_FEAT_878",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=878",
    categories: ["Channeled Battlerage", "ID_FMP_FEAT_878"]
  });
  byID[te.id] = te;
  
  te = Feat["Combat Opening"] = new engine.RulesElement({
    name: "Combat Opening",
    type: "Feat",
    id: "ID_FMP_FEAT_837",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=837",
    categories: ["Combat Opening", "ID_FMP_FEAT_837"]
  });
  byID[te.id] = te;
  
  te = Feat["Command the Darkness"] = new engine.RulesElement({
    name: "Command the Darkness",
    type: "Feat",
    id: "ID_FMP_FEAT_765",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=765",
    categories: ["Command the Darkness", "ID_FMP_FEAT_765"]
  });
  byID[te.id] = te;
  
  te = Feat["Coordinated Opportunity"] = new engine.RulesElement({
    name: "Coordinated Opportunity",
    type: "Feat",
    id: "ID_FMP_FEAT_766",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=766",
    categories: ["Coordinated Opportunity", "ID_FMP_FEAT_766"],
    rules: function(model) {
      model.statadd("damage rolls", function() { /* If your beast companion is adjacent to the target of your opportunity attack */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Correcting Aim"] = new engine.RulesElement({
    name: "Correcting Aim",
    type: "Feat",
    id: "ID_FMP_FEAT_347",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=347",
    categories: ["Correcting Aim", "ID_FMP_FEAT_347"]
  });
  byID[te.id] = te;
  
  te = Feat["Courageous Shooter"] = new engine.RulesElement({
    name: "Courageous Shooter",
    type: "Feat",
    id: "ID_FMP_FEAT_913",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=913",
    categories: ["Courageous Shooter", "ID_FMP_FEAT_913", "ID_INTERNAL_CATEGORY_MULTICLASS_RANGER", "Multiclass Ranger", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_603"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Cull the Weak"] = new engine.RulesElement({
    name: "Cull the Weak",
    type: "Feat",
    id: "ID_FMP_FEAT_378",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=378",
    categories: ["Cull the Weak", "ID_FMP_FEAT_378"],
    rules: function(model) {
      model.statadd("damage rolls", function() { /* vs bloodied or weakened target you have combat advantage against */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Cunning Ambusher"] = new engine.RulesElement({
    name: "Cunning Ambusher",
    type: "Feat",
    id: "ID_FMP_FEAT_767",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=767",
    categories: ["Cunning Ambusher", "ID_FMP_FEAT_767"],
    rules: function(model) {
      model.statadd("ID_FMP_POWER_1628:damage", function() { /* when you have combat advantage against the target */ return model.stat("Dexterity modifier"); });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Darkfire Targeting"] = new engine.RulesElement({
    name: "Darkfire Targeting",
    type: "Feat",
    id: "ID_FMP_FEAT_768",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=768",
    categories: ["Darkfire Targeting", "ID_FMP_FEAT_768"],
    rules: function(model) {
      model.statadd("Darkfire:Sneak Attack", function() { return abilitymod(model.stat("Wisdom")); });
      model.statadd("Darkfire:Hunter's Quarry", function() { return abilitymod(model.stat("Wisdom")); });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Darkfire Warrior"] = new engine.RulesElement({
    name: "Darkfire Warrior",
    type: "Feat",
    id: "ID_FMP_FEAT_879",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=879",
    categories: ["Darkfire Warrior", "ID_FMP_FEAT_879"]
  });
  byID[te.id] = te;
  
  te = Feat["Darkhunter"] = new engine.RulesElement({
    name: "Darkhunter",
    type: "Feat",
    id: "ID_FMP_FEAT_838",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=838",
    categories: ["Darkhunter", "ID_FMP_FEAT_838"]
  });
  byID[te.id] = te;
  
  te = Feat["Darkjumper"] = new engine.RulesElement({
    name: "Darkjumper",
    type: "Feat",
    id: "ID_FMP_FEAT_839",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=839",
    categories: ["Darkjumper", "ID_FMP_FEAT_839"]
  });
  byID[te.id] = te;
  
  te = Feat["Daunting Challenge"] = new engine.RulesElement({
    name: "Daunting Challenge",
    type: "Feat",
    id: "ID_FMP_FEAT_840",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=840",
    categories: ["Daunting Challenge", "ID_FMP_FEAT_840"]
  });
  byID[te.id] = te;
  
  te = Feat["Deep Gash"] = new engine.RulesElement({
    name: "Deep Gash",
    type: "Feat",
    id: "ID_FMP_FEAT_769",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=769",
    categories: ["Deep Gash", "ID_FMP_FEAT_769"]
  });
  byID[te.id] = te;
  
  te = Feat["Defensive Resilience"] = new engine.RulesElement({
    name: "Defensive Resilience",
    type: "Feat",
    id: "ID_FMP_FEAT_371",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=371",
    categories: ["Defensive Resilience", "ID_FMP_FEAT_371"]
  });
  byID[te.id] = te;
  
  te = Feat["Defensive Surge"] = new engine.RulesElement({
    name: "Defensive Surge",
    type: "Feat",
    id: "ID_FMP_FEAT_841",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=841",
    categories: ["Defensive Surge", "ID_FMP_FEAT_841"]
  });
  byID[te.id] = te;
  
  te = Feat["Devoted Challenge"] = new engine.RulesElement({
    name: "Devoted Challenge",
    type: "Feat",
    id: "ID_FMP_FEAT_771",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=771",
    categories: ["Devoted Challenge", "ID_FMP_FEAT_771"],
    rules: function(model) {
      model.statadd("melee basic:attack", function() { /* if attack was granted by Combat Challenge */ return abilitymod(model.stat("Wisdom")); });
      model.statadd("melee basic:damage", function() { /* if attack was granted by Combat Challenge */ return abilitymod(model.stat("Wisdom")); });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Dirty Fighting"] = new engine.RulesElement({
    name: "Dirty Fighting",
    type: "Feat",
    id: "ID_FMP_FEAT_407",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=407",
    categories: ["Dirty Fighting", "ID_FMP_FEAT_407"],
    rules: function(model) {
      model.statadd("melee weapon:damage", function() { /* against surprised enemies */ return 4; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Distracting Companion"] = new engine.RulesElement({
    name: "Distracting Companion",
    type: "Feat",
    id: "ID_FMP_FEAT_343",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=343",
    categories: ["Distracting Companion", "ID_FMP_FEAT_343"]
  });
  byID[te.id] = te;
  
  te = Feat["Draconic Arrogance"] = new engine.RulesElement({
    name: "Draconic Arrogance",
    type: "Feat",
    id: "ID_FMP_FEAT_842",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=842",
    categories: ["Draconic Arrogance", "ID_FMP_FEAT_842"]
  });
  byID[te.id] = te;
  
  te = Feat["Dragging Flail"] = new engine.RulesElement({
    name: "Dragging Flail",
    type: "Feat",
    id: "ID_FMP_FEAT_772",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=772",
    categories: ["Dragging Flail", "ID_FMP_FEAT_772"]
  });
  byID[te.id] = te;
  
  te = Feat["Dragon Warrior"] = new engine.RulesElement({
    name: "Dragon Warrior",
    type: "Feat",
    id: "ID_FMP_FEAT_880",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=880",
    categories: ["Dragon Warrior", "ID_FMP_FEAT_880"]
  });
  byID[te.id] = te;
  
  te = Feat["Dragonbreath Warrior"] = new engine.RulesElement({
    name: "Dragonbreath Warrior",
    type: "Feat",
    id: "ID_FMP_FEAT_843",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=843",
    categories: ["Dragonbreath Warrior", "ID_FMP_FEAT_843"]
  });
  byID[te.id] = te;
  
  te = Feat["Drow Beast Mastery"] = new engine.RulesElement({
    name: "Drow Beast Mastery",
    type: "Feat",
    id: "ID_FMP_FEAT_773",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=773",
    categories: ["Drow Beast Mastery", "ID_FMP_FEAT_773"]
  });
  byID[te.id] = te;
  
  te = Feat["Dwarf Stoneblood"] = new engine.RulesElement({
    name: "Dwarf Stoneblood",
    type: "Feat",
    id: "ID_FMP_FEAT_774",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=774",
    categories: ["Dwarf Stoneblood", "ID_FMP_FEAT_774"]
  });
  byID[te.id] = te;
  
  te = Feat["Dwarf Trapsmith"] = new engine.RulesElement({
    name: "Dwarf Trapsmith",
    type: "Feat",
    id: "ID_FMP_FEAT_775",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=775",
    categories: ["Dwarf Trapsmith", "ID_FMP_FEAT_775"],
    rules: function(model) {
      model.statadd("Perception Misc", function() { /* to find traps */ return 4; }, "Feat");
      model.statadd("Thievery Misc", function() { /* to open locks or disable traps */ return 4; }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Elemental Companions"] = new engine.RulesElement({
    name: "Elemental Companions",
    type: "Feat",
    id: "ID_FMP_FEAT_844",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=844",
    categories: ["Elemental Companions", "ID_FMP_FEAT_844"]
  });
  byID[te.id] = te;
  
  te = Feat["Elemental Guardian"] = new engine.RulesElement({
    name: "Elemental Guardian",
    type: "Feat",
    id: "ID_FMP_FEAT_845",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=845",
    categories: ["Elemental Guardian", "ID_FMP_FEAT_845"]
  });
  byID[te.id] = te;
  
  te = Feat["Elemental Warrior"] = new engine.RulesElement({
    name: "Elemental Warrior",
    type: "Feat",
    id: "ID_FMP_FEAT_881",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=881",
    categories: ["Elemental Warrior", "ID_FMP_FEAT_881"]
  });
  byID[te.id] = te;
  
  te = Feat["Elven Beast Mastery"] = new engine.RulesElement({
    name: "Elven Beast Mastery",
    type: "Feat",
    id: "ID_FMP_FEAT_776",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=776",
    categories: ["Elven Beast Mastery", "ID_FMP_FEAT_776"]
  });
  byID[te.id] = te;
  
  te = Feat["Enduring Wallop"] = new engine.RulesElement({
    name: "Enduring Wallop",
    type: "Feat",
    id: "ID_FMP_FEAT_846",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=846",
    categories: ["Enduring Wallop", "ID_FMP_FEAT_846"]
  });
  byID[te.id] = te;
  
  te = Feat["Epic Recovery"] = new engine.RulesElement({
    name: "Epic Recovery",
    type: "Feat",
    id: "ID_FMP_FEAT_379",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=379",
    categories: ["Epic Recovery", "ID_FMP_FEAT_379"]
  });
  byID[te.id] = te;
  
  te = Feat["Evasive Footwork"] = new engine.RulesElement({
    name: "Evasive Footwork",
    type: "Feat",
    id: "ID_FMP_FEAT_365",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=365",
    categories: ["Evasive Footwork", "ID_FMP_FEAT_365"]
  });
  byID[te.id] = te;
  
  te = Feat["Expert Tracker"] = new engine.RulesElement({
    name: "Expert Tracker",
    type: "Feat",
    id: "ID_FMP_FEAT_777",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=777",
    categories: ["Expert Tracker", "ID_FMP_FEAT_777"],
    rules: function(model) {
      model.statadd("Perception Misc", function() { /* to find tracks */ return 5; }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Fey Blades"] = new engine.RulesElement({
    name: "Fey Blades",
    type: "Feat",
    id: "ID_FMP_FEAT_778",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=778",
    categories: ["Fey Blades", "ID_FMP_FEAT_778"],
    rules: function(model) {
      model.statadd("two-blade:damage", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Fey Charge"] = new engine.RulesElement({
    name: "Fey Charge",
    type: "Feat",
    id: "ID_FMP_FEAT_388",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=388",
    categories: ["Fey Charge", "ID_FMP_FEAT_388"]
  });
  byID[te.id] = te;
  
  te = Feat["Fey Command"] = new engine.RulesElement({
    name: "Fey Command",
    type: "Feat",
    id: "ID_FMP_FEAT_779",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=779",
    categories: ["Fey Command", "ID_FMP_FEAT_779"],
    rules: function(model) {
      model.statadd("ALLY.Action Point", "Fey Command:When an ally you can see spends an action point to make an attack, the ally can teleport 1 square before or after the attack.");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Fey Gambit"] = new engine.RulesElement({
    name: "Fey Gambit",
    type: "Feat",
    id: "ID_FMP_FEAT_418",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=418",
    categories: ["Fey Gambit", "ID_FMP_FEAT_418"]
  });
  byID[te.id] = te;
  
  te = Feat["Fey Tactics"] = new engine.RulesElement({
    name: "Fey Tactics",
    type: "Feat",
    id: "ID_FMP_FEAT_848",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=848",
    categories: ["Fey Tactics", "ID_FMP_FEAT_848"]
  });
  byID[te.id] = te;
  
  te = Feat["Feyborn Companion"] = new engine.RulesElement({
    name: "Feyborn Companion",
    type: "Feat",
    id: "ID_FMP_FEAT_780",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=780",
    categories: ["Feyborn Companion", "ID_FMP_FEAT_780"],
    rules: function(model) {
      model.statadd("BEAST.Saving Throws", function() { /* against charm effects */ return 5; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Feywild Warrior"] = new engine.RulesElement({
    name: "Feywild Warrior",
    type: "Feat",
    id: "ID_FMP_FEAT_882",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=882",
    categories: ["Feywild Warrior", "ID_FMP_FEAT_882"]
  });
  byID[te.id] = te;
  
  te = Feat["Fiendish Companion"] = new engine.RulesElement({
    name: "Fiendish Companion",
    type: "Feat",
    id: "ID_FMP_FEAT_781",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=781",
    categories: ["Fiendish Companion", "ID_FMP_FEAT_781"],
    rules: function(model) {
      model.statadd("Fiendish Companion Resist", 5);
      model.statadd("Fiendish Companion Resist", function() { return model.stat("HALF-LEVEL"); });
      model.statadd("BEAST.resist:fire", function() { return model.stat("Fiendish Companion Resist"); }, "resist");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Fiendish Defender"] = new engine.RulesElement({
    name: "Fiendish Defender",
    type: "Feat",
    id: "ID_FMP_FEAT_849",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=849",
    categories: ["Fiendish Defender", "ID_FMP_FEAT_849"]
  });
  byID[te.id] = te;
  
  te = Feat["First In"] = new engine.RulesElement({
    name: "First In",
    type: "Feat",
    id: "ID_FMP_FEAT_914",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=914",
    categories: ["First In", "ID_FMP_FEAT_914", "ID_INTERNAL_CATEGORY_MULTICLASS_ROGUE", "Multiclass Rogue", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_368"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Fortune's Warrior"] = new engine.RulesElement({
    name: "Fortune's Warrior",
    type: "Feat",
    id: "ID_FMP_FEAT_883",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=883",
    categories: ["Fortune's Warrior", "ID_FMP_FEAT_883"]
  });
  byID[te.id] = te;
  
  te = Feat["Grit"] = new engine.RulesElement({
    name: "Grit",
    type: "Feat",
    id: "ID_FMP_FEAT_380",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=380",
    categories: ["Grit", "ID_FMP_FEAT_380"]
  });
  byID[te.id] = te;
  
  te = Feat["Group Assault"] = new engine.RulesElement({
    name: "Group Assault",
    type: "Feat",
    id: "ID_FMP_FEAT_782",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=782",
    categories: ["Group Assault", "ID_FMP_FEAT_782"],
    rules: function(model) {
      model.statadd("ALLY.damage rolls", function() { /* against targets marked by you */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Group Flanking"] = new engine.RulesElement({
    name: "Group Flanking",
    type: "Feat",
    id: "ID_FMP_FEAT_850",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=850",
    categories: ["Group Flanking", "ID_FMP_FEAT_850"]
  });
  byID[te.id] = te;
  
  te = Feat["Group Quarry"] = new engine.RulesElement({
    name: "Group Quarry",
    type: "Feat",
    id: "ID_FMP_FEAT_783",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=783",
    categories: ["Group Quarry", "ID_FMP_FEAT_783"],
    rules: function(model) {
      model.statadd("ALLY.damage rolls", function() { /* against your quarry */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Group Rattling"] = new engine.RulesElement({
    name: "Group Rattling",
    type: "Feat",
    id: "ID_FMP_FEAT_784",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=784",
    categories: ["Group Rattling", "ID_FMP_FEAT_784"]
  });
  byID[te.id] = te;
  
  te = Feat["Halfling Beast Mastery"] = new engine.RulesElement({
    name: "Halfling Beast Mastery",
    type: "Feat",
    id: "ID_FMP_FEAT_851",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=851",
    categories: ["Halfling Beast Mastery", "ID_FMP_FEAT_851"]
  });
  byID[te.id] = te;
  
  te = Feat["Halfling Stalwart"] = new engine.RulesElement({
    name: "Halfling Stalwart",
    type: "Feat",
    id: "ID_FMP_FEAT_402",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=402",
    categories: ["Halfling Stalwart", "ID_FMP_FEAT_402"],
    rules: function(model) {
      model.statadd("attack rolls", function() { /* against Large or larger creatures marked by you */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Hawkeye Warrior"] = new engine.RulesElement({
    name: "Hawkeye Warrior",
    type: "Feat",
    id: "ID_FMP_FEAT_884",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=884",
    categories: ["Hawkeye Warrior", "ID_FMP_FEAT_884"]
  });
  byID[te.id] = te;
  
  te = Feat["Human Beast Mastery"] = new engine.RulesElement({
    name: "Human Beast Mastery",
    type: "Feat",
    id: "ID_FMP_FEAT_785",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=785",
    categories: ["Human Beast Mastery", "ID_FMP_FEAT_785"],
    rules: function(model) {
      model.statadd("BEAST.AC", 1);
      model.statadd("BEAST.Fortitude Defense", 1);
      model.statadd("BEAST.Reflex Defense", 1);
      model.statadd("BEAST.Will Defense", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Hunter of Wind and Wave"] = new engine.RulesElement({
    name: "Hunter of Wind and Wave",
    type: "Feat",
    id: "ID_FMP_FEAT_786",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=786",
    categories: ["Hunter of Wind and Wave", "ID_FMP_FEAT_786"]
  });
  byID[te.id] = te;
  
  te = Feat["Hunter's Advantage"] = new engine.RulesElement({
    name: "Hunter's Advantage",
    type: "Feat",
    id: "ID_FMP_FEAT_852",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=852",
    categories: ["Hunter's Advantage", "ID_FMP_FEAT_852"],
    rules: function(model) {
      model.statadd("Hunter's Quarry", function() { /* when you have combat advantage against your quarry */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Hunter's Aim"] = new engine.RulesElement({
    name: "Hunter's Aim",
    type: "Feat",
    id: "ID_FMP_FEAT_787",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=787",
    categories: ["Hunter's Aim", "ID_FMP_FEAT_787"]
  });
  byID[te.id] = te;
  
  te = Feat["Hunter's Resurgence"] = new engine.RulesElement({
    name: "Hunter's Resurgence",
    type: "Feat",
    id: "ID_FMP_FEAT_353",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=353",
    categories: ["Hunter's Resurgence", "ID_FMP_FEAT_353"]
  });
  byID[te.id] = te;
  
  te = Feat["Impetuous Charger"] = new engine.RulesElement({
    name: "Impetuous Charger",
    type: "Feat",
    id: "ID_FMP_FEAT_853",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=853",
    categories: ["Impetuous Charger", "ID_FMP_FEAT_853"]
  });
  byID[te.id] = te;
  
  te = Feat["Improved Bravura"] = new engine.RulesElement({
    name: "Improved Bravura",
    type: "Feat",
    id: "ID_FMP_FEAT_788",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=788",
    categories: ["Improved Bravura", "ID_FMP_FEAT_788"]
  });
  byID[te.id] = te;
  
  te = Feat["Improved Inspiration"] = new engine.RulesElement({
    name: "Improved Inspiration",
    type: "Feat",
    id: "ID_FMP_FEAT_789",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=789",
    categories: ["Improved Inspiration", "ID_FMP_FEAT_789"]
  });
  byID[te.id] = te;
  
  te = Feat["Improved Inspiring Word"] = new engine.RulesElement({
    name: "Improved Inspiring Word",
    type: "Feat",
    id: "ID_FMP_FEAT_218",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=218",
    categories: ["Improved Inspiring Word", "ID_FMP_FEAT_218"]
  });
  byID[te.id] = te;
  
  te = Feat["Improved Prime Shot"] = new engine.RulesElement({
    name: "Improved Prime Shot",
    type: "Feat",
    id: "ID_FMP_FEAT_348",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=348",
    categories: ["Improved Prime Shot", "ID_FMP_FEAT_348"],
    rules: function(model) {
      model.statadd("Prime Shot Bonus", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Improved Resources"] = new engine.RulesElement({
    name: "Improved Resources",
    type: "Feat",
    id: "ID_FMP_FEAT_790",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=790",
    categories: ["Improved Resources", "ID_FMP_FEAT_790"]
  });
  byID[te.id] = te;
  
  te = Feat["Improved Tactics"] = new engine.RulesElement({
    name: "Improved Tactics",
    type: "Feat",
    id: "ID_FMP_FEAT_791",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=791",
    categories: ["Improved Tactics", "ID_FMP_FEAT_791"]
  });
  byID[te.id] = te;
  
  te = Feat["Improved Vigor"] = new engine.RulesElement({
    name: "Improved Vigor",
    type: "Feat",
    id: "ID_FMP_FEAT_792",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=792",
    categories: ["Improved Vigor", "ID_FMP_FEAT_792"]
  });
  byID[te.id] = te;
  
  te = Feat["Infernal Sneak Attack"] = new engine.RulesElement({
    name: "Infernal Sneak Attack",
    type: "Feat",
    id: "ID_FMP_FEAT_854",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=854",
    categories: ["Infernal Sneak Attack", "ID_FMP_FEAT_854"]
  });
  byID[te.id] = te;
  
  te = Feat["Infernal Warrior"] = new engine.RulesElement({
    name: "Infernal Warrior",
    type: "Feat",
    id: "ID_FMP_FEAT_885",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=885",
    categories: ["Infernal Warrior", "ID_FMP_FEAT_885"]
  });
  byID[te.id] = te;
  
  te = Feat["Inspired Defense"] = new engine.RulesElement({
    name: "Inspired Defense",
    type: "Feat",
    id: "ID_FMP_FEAT_793",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=793",
    categories: ["Inspired Defense", "ID_FMP_FEAT_793"]
  });
  byID[te.id] = te;
  
  te = Feat["Inspired Tactics"] = new engine.RulesElement({
    name: "Inspired Tactics",
    type: "Feat",
    id: "ID_FMP_FEAT_794",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=794",
    categories: ["Inspired Tactics", "ID_FMP_FEAT_794"]
  });
  byID[te.id] = te;
  
  te = Feat["Inspiring Leader"] = new engine.RulesElement({
    name: "Inspiring Leader",
    type: "Feat",
    id: "ID_FMP_FEAT_915",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=915",
    categories: ["Inspiring Leader", "ID_FMP_FEAT_915", "ID_INTERNAL_CATEGORY_MULTICLASS_WARLORD", "Multiclass Warlord", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.select('Skill Training', 1, {
        filter: function(model, element) { return element.hasCategory("Warlord Class"); }
      });
      model.statadd("ALLY.Action Point", "Inspiring Leader:Once per encounter, when an ally who can see you spends an action point to take an extra action, that ally also gains temporary hit points equal to 1 + onehalf your level");
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_WARLORD"]);
      model.grant(model.elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Into the Fray"] = new engine.RulesElement({
    name: "Into the Fray",
    type: "Feat",
    id: "ID_FMP_FEAT_356",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=356",
    categories: ["Into the Fray", "ID_FMP_FEAT_356"],
    rules: function(model) {
      model.statadd("Speed", function() { /* During the surprise round and the first round of an encounter */ return 1; });
      model.statadd("melee:attack", function() { /* During the surprise round and the first round of an encounter */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Invigorating Exploit"] = new engine.RulesElement({
    name: "Invigorating Exploit",
    type: "Feat",
    id: "ID_FMP_FEAT_886",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=886",
    categories: ["Invigorating Exploit", "ID_FMP_FEAT_886"],
    rules: function(model) {
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory("martial") && element.hasCategory("encounter")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Keeper of Storm"] = new engine.RulesElement({
    name: "Keeper of Storm",
    type: "Feat",
    id: "ID_FMP_FEAT_795",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=795",
    categories: ["Keeper of Storm", "ID_FMP_FEAT_795"]
  });
  byID[te.id] = te;
  
  te = Feat["Knock-Back Swing"] = new engine.RulesElement({
    name: "Knock-Back Swing",
    type: "Feat",
    id: "ID_FMP_FEAT_887",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=887",
    categories: ["Knock-Back Swing", "ID_FMP_FEAT_887"]
  });
  byID[te.id] = te;
  
  te = Feat["Lasting Advantage"] = new engine.RulesElement({
    name: "Lasting Advantage",
    type: "Feat",
    id: "ID_FMP_FEAT_888",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=888",
    categories: ["Lasting Advantage", "ID_FMP_FEAT_888"]
  });
  byID[te.id] = te;
  
  te = Feat["Leading Fire"] = new engine.RulesElement({
    name: "Leading Fire",
    type: "Feat",
    id: "ID_FMP_FEAT_796",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=796",
    categories: ["Leading Fire", "ID_FMP_FEAT_796"]
  });
  byID[te.id] = te;
  
  te = Feat["Lend Might"] = new engine.RulesElement({
    name: "Lend Might",
    type: "Feat",
    id: "ID_FMP_FEAT_797",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=797",
    categories: ["Lend Might", "ID_FMP_FEAT_797"]
  });
  byID[te.id] = te;
  
  te = Feat["Lingering Wrath"] = new engine.RulesElement({
    name: "Lingering Wrath",
    type: "Feat",
    id: "ID_FMP_FEAT_798",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=798",
    categories: ["Lingering Wrath", "ID_FMP_FEAT_798"]
  });
  byID[te.id] = te;
  
  te = Feat["Longsword Finesse"] = new engine.RulesElement({
    name: "Longsword Finesse",
    type: "Feat",
    id: "ID_FMP_FEAT_799",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=799",
    categories: ["Longsword Finesse", "ID_FMP_FEAT_799"],
    rules: function(model) {
      model.statadd("ID_FMP_CLASS_6-Light Blade", "Longsword");
      model.statadd("Sneak Attack Weapons", "Longsword");
      model.statadd("Sneak Attack Dice(longsword)", -1, "Reduction");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Lucky Skirmisher"] = new engine.RulesElement({
    name: "Lucky Skirmisher",
    type: "Feat",
    id: "ID_FMP_FEAT_800",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=800",
    categories: ["Lucky Skirmisher", "ID_FMP_FEAT_800"]
  });
  byID[te.id] = te;
  
  te = Feat["Marked Scourge"] = new engine.RulesElement({
    name: "Marked Scourge",
    type: "Feat",
    id: "ID_FMP_FEAT_404",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=404",
    categories: ["Marked Scourge", "ID_FMP_FEAT_404"],
    rules: function(model) {
      model.statadd("damage rolls", function() { /* once per round against an enemy marked by you */ return model.stat("Wisdom modifier"); });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Martial Alacrity"] = new engine.RulesElement({
    name: "Martial Alacrity",
    type: "Feat",
    id: "ID_FMP_FEAT_801",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=801",
    categories: ["Martial Alacrity", "ID_FMP_FEAT_801"],
    rules: function(model) {
      model.statadd("Initiative Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Martial Freedom"] = new engine.RulesElement({
    name: "Martial Freedom",
    type: "Feat",
    id: "ID_FMP_FEAT_802",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=802",
    categories: ["Martial Freedom", "ID_FMP_FEAT_802"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against the slowed and immobilized conditions */ return 5; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Martial Mastery"] = new engine.RulesElement({
    name: "Martial Mastery",
    type: "Feat",
    id: "ID_FMP_FEAT_151",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=151",
    categories: ["Martial Mastery", "ID_FMP_FEAT_151"],
    rules: function(model) {
      model.statadd("Action Point", "Martial Mastery:When you spend an action point to take an extra action, you also regain the use of a martial encounter power you have used during this encounter.");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Martial Resolve"] = new engine.RulesElement({
    name: "Martial Resolve",
    type: "Feat",
    id: "ID_FMP_FEAT_889",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=889",
    categories: ["Martial Resolve", "ID_FMP_FEAT_889"]
  });
  byID[te.id] = te;
  
  te = Feat["Master of Rumbling Earth"] = new engine.RulesElement({
    name: "Master of Rumbling Earth",
    type: "Feat",
    id: "ID_FMP_FEAT_803",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=803",
    categories: ["Master of Rumbling Earth", "ID_FMP_FEAT_803"],
    rules: function(model) {
      model.statadd("earthshock:attack", 1);
      model.statadd("earthshock:damage", function() { /* if the enemy is knocked prone by the power */ return model.stat("Strength modifier"); });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Mighty Battlerage"] = new engine.RulesElement({
    name: "Mighty Battlerage",
    type: "Feat",
    id: "ID_FMP_FEAT_856",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=856",
    categories: ["Mighty Battlerage", "ID_FMP_FEAT_856"],
    rules: function(model) {
      model.statadd("Mighty Battlerage", 1);
      model.statadd("Battlerager Vigor", function() { return model.stat("Mighty Battlerage"); });
      model.statadd("Mighty Battlerage", 1);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Mobile Warrior"] = new engine.RulesElement({
    name: "Mobile Warrior",
    type: "Feat",
    id: "ID_FMP_FEAT_890",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=890",
    categories: ["Mobile Warrior", "ID_FMP_FEAT_890"]
  });
  byID[te.id] = te;
  
  te = Feat["Nimble Companion"] = new engine.RulesElement({
    name: "Nimble Companion",
    type: "Feat",
    id: "ID_FMP_FEAT_804",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=804",
    categories: ["Nimble Companion", "ID_FMP_FEAT_804"],
    rules: function(model) {
      model.statadd("BEAST.AC", function() { /* against opportunity attacks */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Offensive Resilience"] = new engine.RulesElement({
    name: "Offensive Resilience",
    type: "Feat",
    id: "ID_FMP_FEAT_372",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=372",
    categories: ["Offensive Resilience", "ID_FMP_FEAT_372"]
  });
  byID[te.id] = te;
  
  te = Feat["One with Shadow"] = new engine.RulesElement({
    name: "One with Shadow",
    type: "Feat",
    id: "ID_FMP_FEAT_891",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=891",
    categories: ["One with Shadow", "ID_FMP_FEAT_891"]
  });
  byID[te.id] = te;
  
  te = Feat["Opportunistic Accuracy"] = new engine.RulesElement({
    name: "Opportunistic Accuracy",
    type: "Feat",
    id: "ID_FMP_FEAT_805",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=805",
    categories: ["Opportunistic Accuracy", "ID_FMP_FEAT_805"]
  });
  byID[te.id] = te;
  
  te = Feat["Opportunistic Archer"] = new engine.RulesElement({
    name: "Opportunistic Archer",
    type: "Feat",
    id: "ID_FMP_FEAT_857",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=857",
    categories: ["Opportunistic Archer", "ID_FMP_FEAT_857"]
  });
  byID[te.id] = te;
  
  te = Feat["Opportunistic Sneak Attack"] = new engine.RulesElement({
    name: "Opportunistic Sneak Attack",
    type: "Feat",
    id: "ID_FMP_FEAT_355",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=355",
    categories: ["Opportunistic Sneak Attack", "ID_FMP_FEAT_355"]
  });
  byID[te.id] = te;
  
  te = Feat["Peerless Hunter"] = new engine.RulesElement({
    name: "Peerless Hunter",
    type: "Feat",
    id: "ID_FMP_FEAT_892",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=892",
    categories: ["Peerless Hunter", "ID_FMP_FEAT_892"]
  });
  byID[te.id] = te;
  
  te = Feat["Phalanx Warrior"] = new engine.RulesElement({
    name: "Phalanx Warrior",
    type: "Feat",
    id: "ID_FMP_FEAT_858",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=858",
    categories: ["Phalanx Warrior", "ID_FMP_FEAT_858"],
    rules: function(model) {
      model.statadd("ALLY.AC", function() { 
        if (model.wearing('Armor', ['Shield'])) {
          /* if the ally is adjacent to you */ return 1;
        } else return 0;
       }, "Shield");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Polearm Momentum"] = new engine.RulesElement({
    name: "Polearm Momentum",
    type: "Feat",
    id: "ID_FMP_FEAT_806",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=806",
    categories: ["Polearm Momentum", "ID_FMP_FEAT_806"]
  });
  byID[te.id] = te;
  
  te = Feat["Practiced Reliability"] = new engine.RulesElement({
    name: "Practiced Reliability",
    type: "Feat",
    id: "ID_FMP_FEAT_893",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=893",
    categories: ["Practiced Reliability", "ID_FMP_FEAT_893"],
    rules: function(model) {
      model.select('Power', 1, {
        filter: function(model, element) { return element.hasCategory("Practiced Reliability"); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Predatory Action"] = new engine.RulesElement({
    name: "Predatory Action",
    type: "Feat",
    id: "ID_FMP_FEAT_807",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=807",
    categories: ["Predatory Action", "ID_FMP_FEAT_807"],
    rules: function(model) {
      model.statadd("Action Point", "Predatory Action:If you spend an action point to take an extra action and have already dealt Hunter's Quarry damage during this round, you can deal the extra damage a second time during this turn");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Preternatural Senses"] = new engine.RulesElement({
    name: "Preternatural Senses",
    type: "Feat",
    id: "ID_FMP_FEAT_859",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=859",
    categories: ["Preternatural Senses", "ID_FMP_FEAT_859"]
  });
  byID[te.id] = te;
  
  te = Feat["Prime Hunter"] = new engine.RulesElement({
    name: "Prime Hunter",
    type: "Feat",
    id: "ID_FMP_FEAT_894",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=894",
    categories: ["Prime Hunter", "ID_FMP_FEAT_894"],
    rules: function(model) {
      model.statadd("melee attack rolls", function() { /* against any target that is adjacent to no creature other than you */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Prime Quarry"] = new engine.RulesElement({
    name: "Prime Quarry",
    type: "Feat",
    id: "ID_FMP_FEAT_860",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=860",
    categories: ["Prime Quarry", "ID_FMP_FEAT_860"],
    rules: function(model) {
      model.statadd("ranged:attack", function() { /* if none of your allies are closer to the target and the target is your quarry */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Prime Slayer"] = new engine.RulesElement({
    name: "Prime Slayer",
    type: "Feat",
    id: "ID_FMP_FEAT_861",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=861",
    categories: ["Prime Slayer", "ID_FMP_FEAT_861"],
    rules: function(model) {
      model.statadd("ranged:attack", function() { /* if none of your allies are closer to the target */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Prime Strike"] = new engine.RulesElement({
    name: "Prime Strike",
    type: "Feat",
    id: "ID_FMP_FEAT_808",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=808",
    categories: ["Prime Strike", "ID_FMP_FEAT_808"],
    rules: function(model) {
      model.statadd("melee attack rolls", function() { /* against a target if no other creatures are within 3 squares of it */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Protective Beast"] = new engine.RulesElement({
    name: "Protective Beast",
    type: "Feat",
    id: "ID_FMP_FEAT_862",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=862",
    categories: ["Protective Beast", "ID_FMP_FEAT_862"],
    rules: function(model) {
      model.statadd("AC", function() { /* whenever your beast companion is adjacent to you */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Protective Leadership"] = new engine.RulesElement({
    name: "Protective Leadership",
    type: "Feat",
    id: "ID_FMP_FEAT_895",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=895",
    categories: ["Protective Leadership", "ID_FMP_FEAT_895"],
    rules: function(model) {
      model.statadd("ALLY.AC", function() { /* to bloodied allies who can see and hear you */ return 1; });
      model.statadd("ALLY.Fortitude Defense", function() { /* to bloodied allies who can see and hear you */ return 1; });
      model.statadd("ALLY.Reflex Defense", function() { /* to bloodied allies who can see and hear you */ return 1; });
      model.statadd("ALLY.Will Defense", function() { /* to bloodied allies who can see and hear you */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Quick Beast Command"] = new engine.RulesElement({
    name: "Quick Beast Command",
    type: "Feat",
    id: "ID_FMP_FEAT_896",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=896",
    categories: ["Quick Beast Command", "ID_FMP_FEAT_896"]
  });
  byID[te.id] = te;
  
  te = Feat["Rash Sneak Attack"] = new engine.RulesElement({
    name: "Rash Sneak Attack",
    type: "Feat",
    id: "ID_FMP_FEAT_809",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=809",
    categories: ["Rash Sneak Attack", "ID_FMP_FEAT_809"]
  });
  byID[te.id] = te;
  
  te = Feat["Rattling Exploit"] = new engine.RulesElement({
    name: "Rattling Exploit",
    type: "Feat",
    id: "ID_FMP_FEAT_897",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=897",
    categories: ["Rattling Exploit", "ID_FMP_FEAT_897"],
    rules: function(model) {
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory("martial") && element.hasCategory("encounter")); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Rattling Wrath"] = new engine.RulesElement({
    name: "Rattling Wrath",
    type: "Feat",
    id: "ID_FMP_FEAT_810",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=810",
    categories: ["Rattling Wrath", "ID_FMP_FEAT_810"]
  });
  byID[te.id] = te;
  
  te = Feat["Reaching Whirlwind"] = new engine.RulesElement({
    name: "Reaching Whirlwind",
    type: "Feat",
    id: "ID_FMP_FEAT_898",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=898",
    categories: ["Reaching Whirlwind", "ID_FMP_FEAT_898"]
  });
  byID[te.id] = te;
  
  te = Feat["Reaping Blade"] = new engine.RulesElement({
    name: "Reaping Blade",
    type: "Feat",
    id: "ID_FMP_FEAT_811",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=811",
    categories: ["Reaping Blade", "ID_FMP_FEAT_811"]
  });
  byID[te.id] = te;
  
  te = Feat["Reckless Attacker"] = new engine.RulesElement({
    name: "Reckless Attacker",
    type: "Feat",
    id: "ID_FMP_FEAT_401",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=401",
    categories: ["Reckless Attacker", "ID_FMP_FEAT_401"]
  });
  byID[te.id] = te;
  
  te = Feat["Reckless Scramble"] = new engine.RulesElement({
    name: "Reckless Scramble",
    type: "Feat",
    id: "ID_FMP_FEAT_370",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=370",
    categories: ["Reckless Scramble", "ID_FMP_FEAT_370"]
  });
  byID[te.id] = te;
  
  te = Feat["Reliable Resources"] = new engine.RulesElement({
    name: "Reliable Resources",
    type: "Feat",
    id: "ID_FMP_FEAT_863",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=863",
    categories: ["Reliable Resources", "ID_FMP_FEAT_863"]
  });
  byID[te.id] = te;
  
  te = Feat["Rending Tempest"] = new engine.RulesElement({
    name: "Rending Tempest",
    type: "Feat",
    id: "ID_FMP_FEAT_899",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=899",
    categories: ["Rending Tempest", "ID_FMP_FEAT_899"]
  });
  byID[te.id] = te;
  
  te = Feat["Rogue Weapon Mastery"] = new engine.RulesElement({
    name: "Rogue Weapon Mastery",
    type: "Feat",
    id: "ID_FMP_FEAT_864",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=864",
    categories: ["Rogue Weapon Mastery", "ID_FMP_FEAT_864"]
  });
  byID[te.id] = te;
  
  te = Feat["Roundabout Charge"] = new engine.RulesElement({
    name: "Roundabout Charge",
    type: "Feat",
    id: "ID_FMP_FEAT_865",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=865",
    categories: ["Roundabout Charge", "ID_FMP_FEAT_865"]
  });
  byID[te.id] = te;
  
  te = Feat["Ruthless Efficiency"] = new engine.RulesElement({
    name: "Ruthless Efficiency",
    type: "Feat",
    id: "ID_FMP_FEAT_916",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=916",
    categories: ["Ruthless Efficiency", "ID_FMP_FEAT_916", "ID_INTERNAL_CATEGORY_MULTICLASS_ROGUE", "Multiclass Rogue", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_SKILL_TRAINING_STEALTH"]);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_1031"]);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_ROGUE"]);
      model.grant(model.elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Ruthless Injury"] = new engine.RulesElement({
    name: "Ruthless Injury",
    type: "Feat",
    id: "ID_FMP_FEAT_813",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=813",
    categories: ["Ruthless Injury", "ID_FMP_FEAT_813"]
  });
  byID[te.id] = te;
  
  te = Feat["Ruthless Terror"] = new engine.RulesElement({
    name: "Ruthless Terror",
    type: "Feat",
    id: "ID_FMP_FEAT_900",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=900",
    categories: ["Ruthless Terror", "ID_FMP_FEAT_900"]
  });
  byID[te.id] = te;
  
  te = Feat["Saving Inspiration"] = new engine.RulesElement({
    name: "Saving Inspiration",
    type: "Feat",
    id: "ID_FMP_FEAT_814",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=814",
    categories: ["Saving Inspiration", "ID_FMP_FEAT_814"]
  });
  byID[te.id] = te;
  
  te = Feat["Secure Encampment"] = new engine.RulesElement({
    name: "Secure Encampment",
    type: "Feat",
    id: "ID_FMP_FEAT_815",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=815",
    categories: ["Secure Encampment", "ID_FMP_FEAT_815"]
  });
  byID[te.id] = te;
  
  te = Feat["Shield Defense"] = new engine.RulesElement({
    name: "Shield Defense",
    type: "Feat",
    id: "ID_FMP_FEAT_816",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=816",
    categories: ["Shield Defense", "ID_FMP_FEAT_816"]
  });
  byID[te.id] = te;
  
  te = Feat["Sideways Defense"] = new engine.RulesElement({
    name: "Sideways Defense",
    type: "Feat",
    id: "ID_FMP_FEAT_817",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=817",
    categories: ["Sideways Defense", "ID_FMP_FEAT_817"],
    rules: function(model) {
      model.statadd("ALLY.AC", function() { /* against any creature marked by you */ return 1; });
      model.statadd("ALLY.Fortitude Defense", function() { /* against any creature marked by you */ return 1; });
      model.statadd("ALLY.Reflex Defense", function() { /* against any creature marked by you */ return 1; });
      model.statadd("ALLY.Will Defense", function() { /* against any creature marked by you */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Slaying Action"] = new engine.RulesElement({
    name: "Slaying Action",
    type: "Feat",
    id: "ID_FMP_FEAT_818",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=818",
    categories: ["Slaying Action", "ID_FMP_FEAT_818"],
    rules: function(model) {
      model.statadd("Action Point", "Slaying Action:If you spend an action point to take an extra action and have already dealt Sneak Attack damage during this round, you can deal the extra damage a second time during this turn");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Sly Dodge"] = new engine.RulesElement({
    name: "Sly Dodge",
    type: "Feat",
    id: "ID_FMP_FEAT_917",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=917",
    categories: ["Sly Dodge", "ID_FMP_FEAT_917", "ID_INTERNAL_CATEGORY_MULTICLASS_ROGUE", "Multiclass Rogue", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.select('Skill Training', 1, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_SKILL_3") || element.hasCategory("ID_FMP_SKILL_14")); }
      });
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_ROGUE"]);
      model.grant(model.elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Sneaky Accuracy"] = new engine.RulesElement({
    name: "Sneaky Accuracy",
    type: "Feat",
    id: "ID_FMP_FEAT_819",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=819",
    categories: ["Sneaky Accuracy", "ID_FMP_FEAT_819"]
  });
  byID[te.id] = te;
  
  te = Feat["Speedy Response"] = new engine.RulesElement({
    name: "Speedy Response",
    type: "Feat",
    id: "ID_FMP_FEAT_820",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=820",
    categories: ["Speedy Response", "ID_FMP_FEAT_820"]
  });
  byID[te.id] = te;
  
  te = Feat["Staggering Shot"] = new engine.RulesElement({
    name: "Staggering Shot",
    type: "Feat",
    id: "ID_FMP_FEAT_901",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=901",
    categories: ["Staggering Shot", "ID_FMP_FEAT_901"]
  });
  byID[te.id] = te;
  
  te = Feat["Steadfast Tactics"] = new engine.RulesElement({
    name: "Steadfast Tactics",
    type: "Feat",
    id: "ID_FMP_FEAT_866",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=866",
    categories: ["Steadfast Tactics", "ID_FMP_FEAT_866"]
  });
  byID[te.id] = te;
  
  te = Feat["Stonefoot Reprisal"] = new engine.RulesElement({
    name: "Stonefoot Reprisal",
    type: "Feat",
    id: "ID_FMP_FEAT_867",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=867",
    categories: ["Stonefoot Reprisal", "ID_FMP_FEAT_867"]
  });
  byID[te.id] = te;
  
  te = Feat["Stoneheart Warrior"] = new engine.RulesElement({
    name: "Stoneheart Warrior",
    type: "Feat",
    id: "ID_FMP_FEAT_902",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=902",
    categories: ["Stoneheart Warrior", "ID_FMP_FEAT_902"]
  });
  byID[te.id] = te;
  
  te = Feat["Street Thug"] = new engine.RulesElement({
    name: "Street Thug",
    type: "Feat",
    id: "ID_FMP_FEAT_821",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=821",
    categories: ["Street Thug", "ID_FMP_FEAT_821"],
    rules: function(model) {
      model.statadd("ID_FMP_CLASS_6-Light Blade", "Mace group");
      model.statadd("Sneak Attack Weapons", "Mace group");
      model.statadd("Sneak Attack Dice(mace group)", -1, "Reduction");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Sturdy Beast"] = new engine.RulesElement({
    name: "Sturdy Beast",
    type: "Feat",
    id: "ID_FMP_FEAT_868",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=868",
    categories: ["Sturdy Beast", "ID_FMP_FEAT_868"],
    rules: function(model) {
      model.statadd("BEAST.Healing Surges", 1);
      model.statadd("BEAST.Hit Points", 5);
      model.statadd("BEAST.Hit Points", function() { return model.stat("Wisdom modifier"); });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Supreme Inspiration"] = new engine.RulesElement({
    name: "Supreme Inspiration",
    type: "Feat",
    id: "ID_FMP_FEAT_903",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=903",
    categories: ["Supreme Inspiration", "ID_FMP_FEAT_903"]
  });
  byID[te.id] = te;
  
  te = Feat["Surprise Action"] = new engine.RulesElement({
    name: "Surprise Action",
    type: "Feat",
    id: "ID_FMP_FEAT_904",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=904",
    categories: ["Surprise Action", "ID_FMP_FEAT_904"]
  });
  byID[te.id] = te;
  
  te = Feat["Surprising Charge"] = new engine.RulesElement({
    name: "Surprising Charge",
    type: "Feat",
    id: "ID_FMP_FEAT_416",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=416",
    categories: ["Surprising Charge", "ID_FMP_FEAT_416"]
  });
  byID[te.id] = te;
  
  te = Feat["Tactical Cunning"] = new engine.RulesElement({
    name: "Tactical Cunning",
    type: "Feat",
    id: "ID_FMP_FEAT_905",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=905",
    categories: ["Tactical Cunning", "ID_FMP_FEAT_905"]
  });
  byID[te.id] = te;
  
  te = Feat["Tactical Insight"] = new engine.RulesElement({
    name: "Tactical Insight",
    type: "Feat",
    id: "ID_FMP_FEAT_906",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=906",
    categories: ["Tactical Insight", "ID_FMP_FEAT_906"],
    rules: function(model) {
      model.statadd("ALLY.damage rolls", function() { /* against enemies marked by you */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Tactical Inspiration"] = new engine.RulesElement({
    name: "Tactical Inspiration",
    type: "Feat",
    id: "ID_FMP_FEAT_822",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=822",
    categories: ["Tactical Inspiration", "ID_FMP_FEAT_822"]
  });
  byID[te.id] = te;
  
  te = Feat["Tactical Leader"] = new engine.RulesElement({
    name: "Tactical Leader",
    type: "Feat",
    id: "ID_FMP_FEAT_918",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=918",
    categories: ["Tactical Leader", "ID_FMP_FEAT_918", "ID_INTERNAL_CATEGORY_MULTICLASS_WARLORD", "Multiclass Warlord", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.select('Skill Training', 1, {
        filter: function(model, element) { return element.hasCategory("Warlord Class"); }
      });
      model.statadd("ALLY.Action Point", "Tactical Leader:Once per encounter, when an ally you can see spends an action point to make an attack, that ally gains a +1 bonus to the attack roll");
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_WARLORD"]);
      model.grant(model.elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Take Measure"] = new engine.RulesElement({
    name: "Take Measure",
    type: "Feat",
    id: "ID_FMP_FEAT_368",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=368",
    categories: ["Take Measure", "ID_FMP_FEAT_368"]
  });
  byID[te.id] = te;
  
  te = Feat["Thunder Hammer"] = new engine.RulesElement({
    name: "Thunder Hammer",
    type: "Feat",
    id: "ID_FMP_FEAT_364",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=364",
    categories: ["Thunder Hammer", "ID_FMP_FEAT_364"]
  });
  byID[te.id] = te;
  
  te = Feat["Thundertusk Companion"] = new engine.RulesElement({
    name: "Thundertusk Companion",
    type: "Feat",
    id: "ID_FMP_FEAT_824",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=824",
    categories: ["Thundertusk Companion", "ID_FMP_FEAT_824"],
    rules: function(model) {
      model.statadd("BEAST.Hit Points", function() { return model.stat("level"); });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Timely Revival"] = new engine.RulesElement({
    name: "Timely Revival",
    type: "Feat",
    id: "ID_FMP_FEAT_907",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=907",
    categories: ["Timely Revival", "ID_FMP_FEAT_907"]
  });
  byID[te.id] = te;
  
  te = Feat["Trap Sense"] = new engine.RulesElement({
    name: "Trap Sense",
    type: "Feat",
    id: "ID_FMP_FEAT_377",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=377",
    categories: ["Trap Sense", "ID_FMP_FEAT_377"],
    rules: function(model) {
      model.statadd("AC", function() { /* against attacks by traps and to Perception checks to find traps */ return 2; }, "Feat");
      model.statadd("Fortitude Defense", function() { /* against attacks by traps and to Perception checks to find traps */ return 2; }, "Feat");
      model.statadd("Will Defense", function() { /* against attacks by traps and to Perception checks to find traps */ return 2; }, "Feat");
      model.statadd("Reflex Defense", function() { /* against attacks by traps and to Perception checks to find traps */ return 2; }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Tunnel Stalker"] = new engine.RulesElement({
    name: "Tunnel Stalker",
    type: "Feat",
    id: "ID_FMP_FEAT_825",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=825",
    categories: ["Tunnel Stalker", "ID_FMP_FEAT_825"],
    rules: function(model) {
      model.statadd("ID_FMP_CLASS_6-Light Blade", "axe group one-handed");
      model.statadd("ID_FMP_CLASS_6-Light Blade", "hammer group one-handed");
      model.statadd("ID_FMP_CLASS_6-Light Blade", "pick group one-handed");
      model.statadd("Sneak Attack Weapons", "Axe group");
      model.statadd("Sneak Attack Weapons", "Hammer group");
      model.statadd("Sneak Attack Weapons", "Pick group");
      model.statadd("Sneak Attack Dice(axe group)", -1, "Reduction");
      model.statadd("Sneak Attack Dice(hammer group)", -1, "Reduction");
      model.statadd("Sneak Attack Dice(pick group)", -1, "Reduction");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Two-Blade Warrior"] = new engine.RulesElement({
    name: "Two-Blade Warrior",
    type: "Feat",
    id: "ID_FMP_FEAT_919",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=919",
    categories: ["Two-Blade Warrior", "ID_FMP_FEAT_919", "ID_INTERNAL_CATEGORY_MULTICLASS_RANGER", "Multiclass Ranger", "ID_INTERNAL_CATEGORY_MULTICLASS", "Multiclass", "ID_INTERNAL_CATEGORY_CLASS-SPECIFIC_MULTICLASS", "Class-Specific Multiclass"],
    rules: function(model) {
      model.select('Skill Training', 1, {
        filter: function(model, element) { return element.hasCategory("Ranger Class"); }
      });
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_AMBIDEXTROUS"]);
      model.grant(model.elements.id["ID_INTERNAL_COUNTSASCLASS_RANGER"]);
      model.grant(model.elements.id["ID_INTERNAL_MULTICLASS_MULTICLASS"]);
    }
  });
  byID[te.id] = te;
  
  te = Feat["Two-Fisted Shooter"] = new engine.RulesElement({
    name: "Two-Fisted Shooter",
    type: "Feat",
    id: "ID_FMP_FEAT_826",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=826",
    categories: ["Two-Fisted Shooter", "ID_FMP_FEAT_826"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Unbalancing Wrath"] = new engine.RulesElement({
    name: "Unbalancing Wrath",
    type: "Feat",
    id: "ID_FMP_FEAT_827",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=827",
    categories: ["Unbalancing Wrath", "ID_FMP_FEAT_827"]
  });
  byID[te.id] = te;
  
  te = Feat["Unstoppable Charge"] = new engine.RulesElement({
    name: "Unstoppable Charge",
    type: "Feat",
    id: "ID_FMP_FEAT_908",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=908",
    categories: ["Unstoppable Charge", "ID_FMP_FEAT_908"]
  });
  byID[te.id] = te;
  
  te = Feat["Vengeful Beast"] = new engine.RulesElement({
    name: "Vengeful Beast",
    type: "Feat",
    id: "ID_FMP_FEAT_828",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=828",
    categories: ["Vengeful Beast", "ID_FMP_FEAT_828"]
  });
  byID[te.id] = te;
  
  te = Feat["Victor's Confidence"] = new engine.RulesElement({
    name: "Victor's Confidence",
    type: "Feat",
    id: "ID_FMP_FEAT_405",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=405",
    categories: ["Victor's Confidence", "ID_FMP_FEAT_405"]
  });
  byID[te.id] = te;
  
  te = Feat["Vital Inspiration"] = new engine.RulesElement({
    name: "Vital Inspiration",
    type: "Feat",
    id: "ID_FMP_FEAT_869",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=869",
    categories: ["Vital Inspiration", "ID_FMP_FEAT_869"]
  });
  byID[te.id] = te;
  
  te = Feat["Warlord's Formation"] = new engine.RulesElement({
    name: "Warlord's Formation",
    type: "Feat",
    id: "ID_FMP_FEAT_870",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=870",
    categories: ["Warlord's Formation", "ID_FMP_FEAT_870"]
  });
  byID[te.id] = te;
  
  te = Feat["Whirlwind Sneak Attack"] = new engine.RulesElement({
    name: "Whirlwind Sneak Attack",
    type: "Feat",
    id: "ID_FMP_FEAT_909",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=909",
    categories: ["Whirlwind Sneak Attack", "ID_FMP_FEAT_909"],
    rules: function(model) {
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_6") && element.hasCategory("encounter")); }
      });
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_6") && element.hasCategory("encounter")); }
      });
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_6") && element.hasCategory("encounter")); }
      });
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_6") && element.hasCategory("encounter")); }
      });
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_6") && element.hasCategory("encounter")); }
      });
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_6") && element.hasCategory("encounter")); }
      });
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_6") && element.hasCategory("encounter")); }
      });
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_6") && element.hasCategory("encounter")); }
      });
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_6") && element.hasCategory("encounter")); }
      });
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_6") && element.hasCategory("encounter")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Wielder of Piercing Flame"] = new engine.RulesElement({
    name: "Wielder of Piercing Flame",
    type: "Feat",
    id: "ID_FMP_FEAT_829",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=829",
    categories: ["Wielder of Piercing Flame", "ID_FMP_FEAT_829"]
  });
  byID[te.id] = te;
  
  te = Feat["Wrathful Hunter"] = new engine.RulesElement({
    name: "Wrathful Hunter",
    type: "Feat",
    id: "ID_FMP_FEAT_871",
    source: "Martial Power",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=871",
    categories: ["Wrathful Hunter", "ID_FMP_FEAT_871"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
