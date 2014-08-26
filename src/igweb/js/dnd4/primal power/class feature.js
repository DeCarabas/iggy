define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var class_feature = types['class feature'] || (types['class feature'] = {});
  te = class_feature["Allied Champions"] = new engine.RulesElement({
    name: "Allied Champions",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2046",
    source: "Primal Power",
    categories: ["Allied Champions", "ID_FMP_CLASS_FEATURE_2046", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Allied Winds"] = new engine.RulesElement({
    name: "Allied Winds",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1996",
    source: "Primal Power",
    categories: ["Allied Winds", "ID_FMP_CLASS_FEATURE_1996", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Bark of the World Tree"] = new engine.RulesElement({
    name: "Bark of the World Tree",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2071",
    source: "Primal Power",
    categories: ["Bark of the World Tree", "ID_FMP_CLASS_FEATURE_2071", "21"]
  });
  byID[te.id] = te;
  
  te = class_feature["Battle Spirit's Touch"] = new engine.RulesElement({
    name: "Battle Spirit's Touch",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1959",
    source: "Primal Power",
    categories: ["Battle Spirit's Touch", "ID_FMP_CLASS_FEATURE_1959", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Battle Spirit's Touch:When you spend an action point to make an attack and hit at least one target with that attack, you can spend a healing surge.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Beast Strike"] = new engine.RulesElement({
    name: "Beast Strike",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2061",
    source: "Primal Power",
    categories: ["Beast Strike", "ID_FMP_CLASS_FEATURE_2061", "21"]
  });
  byID[te.id] = te;
  
  te = class_feature["Blaze of Light"] = new engine.RulesElement({
    name: "Blaze of Light",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1986",
    source: "Primal Power",
    categories: ["Blaze of Light", "ID_FMP_CLASS_FEATURE_1986", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Bloody Price"] = new engine.RulesElement({
    name: "Bloody Price",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1976",
    source: "Primal Power",
    categories: ["Bloody Price", "ID_FMP_CLASS_FEATURE_1976", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Boon of the World Tree"] = new engine.RulesElement({
    name: "Boon of the World Tree",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2072",
    source: "Primal Power",
    categories: ["Boon of the World Tree", "ID_FMP_CLASS_FEATURE_2072", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Calm Before the Flame"] = new engine.RulesElement({
    name: "Calm Before the Flame",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1971",
    source: "Primal Power",
    categories: ["Calm Before the Flame", "ID_FMP_CLASS_FEATURE_1971", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Calm Before the Flame:When you spend an action point to make an attack, each target you hit takes extra fire damage equal to your Constitution modifier and is knocked prone.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Certain Gravity"] = new engine.RulesElement({
    name: "Certain Gravity",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2033",
    source: "Primal Power",
    categories: ["Certain Gravity", "ID_FMP_CLASS_FEATURE_2033", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Certain Savagery"] = new engine.RulesElement({
    name: "Certain Savagery",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1965",
    source: "Primal Power",
    categories: ["Certain Savagery", "ID_FMP_CLASS_FEATURE_1965", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Close Destruction"] = new engine.RulesElement({
    name: "Close Destruction",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1974",
    source: "Primal Power",
    categories: ["Close Destruction", "ID_FMP_CLASS_FEATURE_1974", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Close Destruction:When you spend an action point to make an attack, you gain a bonus to its attack rolls equal to the number of enemies adjacent to you.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Cold Snap Action"] = new engine.RulesElement({
    name: "Cold Snap Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2040",
    source: "Primal Power",
    categories: ["Cold Snap Action", "ID_FMP_CLASS_FEATURE_2040", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Cold Snap Action:When you spend an action point to make an attack, each enemy that is adjacent to you or marked by you takes cold damage equal to one-half your level. In addition, you gain a +1 bonus to attack rolls with cold powers until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Dancing Tempest"] = new engine.RulesElement({
    name: "Dancing Tempest",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1999",
    source: "Primal Power",
    categories: ["Dancing Tempest", "ID_FMP_CLASS_FEATURE_1999", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Death Shout"] = new engine.RulesElement({
    name: "Death Shout",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1968",
    source: "Primal Power",
    categories: ["Death Shout", "ID_FMP_CLASS_FEATURE_1968", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Death's Right Hand"] = new engine.RulesElement({
    name: "Death's Right Hand",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1967",
    source: "Primal Power",
    categories: ["Death's Right Hand", "ID_FMP_CLASS_FEATURE_1967", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Death's Right Hand:When you spend an action point to take an extra action during the same turn when you reduced an enemy to 0 hit points, you gain a +2 bonus to attack rolls and a bonus to damage rolls equal to your Constitution modifier until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Disciple of the Winds Action"] = new engine.RulesElement({
    name: "Disciple of the Winds Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2006",
    source: "Primal Power",
    categories: ["Disciple of the Winds Action", "ID_FMP_CLASS_FEATURE_2006", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Disciple of the Winds Action:When you spend an action point to take an extra action, each ally within 5 squares of you can shift 3 squares as a free action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Distracting Action (Emerald Guardian)"] = new engine.RulesElement({
    name: "Distracting Action (Emerald Guardian)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2034",
    source: "Primal Power",
    categories: ["Distracting Action (Emerald Guardian)", "ID_FMP_CLASS_FEATURE_2034", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Distracting Action (Emerald Guardian):When you spend an action point to take an extra action, one ally adjacent to you before or after you take the action can shift his or her speed as a free action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Eagle Summons the Fire"] = new engine.RulesElement({
    name: "Eagle Summons the Fire",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2014",
    source: "Primal Power",
    categories: ["Eagle Summons the Fire", "ID_FMP_CLASS_FEATURE_2014", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Eagle's Reach"] = new engine.RulesElement({
    name: "Eagle's Reach",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2016",
    source: "Primal Power",
    categories: ["Eagle's Reach", "ID_FMP_CLASS_FEATURE_2016", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Elder Counsel"] = new engine.RulesElement({
    name: "Elder Counsel",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2013",
    source: "Primal Power",
    categories: ["Elder Counsel", "ID_FMP_CLASS_FEATURE_2013", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Elder Presence"] = new engine.RulesElement({
    name: "Elder Presence",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2011",
    source: "Primal Power",
    categories: ["Elder Presence", "ID_FMP_CLASS_FEATURE_2011", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Emerald Fury"] = new engine.RulesElement({
    name: "Emerald Fury",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2036",
    source: "Primal Power",
    categories: ["Emerald Fury", "ID_FMP_CLASS_FEATURE_2036", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Epic Vitality"] = new engine.RulesElement({
    name: "Epic Vitality",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2066",
    source: "Primal Power",
    categories: ["Epic Vitality", "ID_FMP_CLASS_FEATURE_2066", "24"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("Epic Vitality"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Epic Vitality Charisma"] = new engine.RulesElement({
    name: "Epic Vitality Charisma",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_EPIC_VITALITY_CHARISMA",
    source: "Primal Power",
    categories: ["Epic Vitality Charisma", "ID_INTERNAL_CLASS_FEATURE_EPIC_VITALITY_CHARISMA", "Epic Vitality"],
    rules: function(model) {
      model.statadd("Charisma", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Epic Vitality Constitution"] = new engine.RulesElement({
    name: "Epic Vitality Constitution",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_EPIC_VITALITY_CONSTITUTION",
    source: "Primal Power",
    categories: ["Epic Vitality Constitution", "ID_INTERNAL_CLASS_FEATURE_EPIC_VITALITY_CONSTITUTION", "Epic Vitality"],
    rules: function(model) {
      model.statadd("Constitution", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Epic Vitality Dexterity"] = new engine.RulesElement({
    name: "Epic Vitality Dexterity",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_EPIC_VITALITY_DEXTERITY",
    source: "Primal Power",
    categories: ["Epic Vitality Dexterity", "ID_INTERNAL_CLASS_FEATURE_EPIC_VITALITY_DEXTERITY", "Epic Vitality"],
    rules: function(model) {
      model.statadd("Dexterity", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Epic Vitality Intelligence"] = new engine.RulesElement({
    name: "Epic Vitality Intelligence",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_EPIC_VITALITY_INTELLIGENCE",
    source: "Primal Power",
    categories: ["Epic Vitality Intelligence", "ID_INTERNAL_CLASS_FEATURE_EPIC_VITALITY_INTELLIGENCE", "Epic Vitality"],
    rules: function(model) {
      model.statadd("Intelligence", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Epic Vitality Strength"] = new engine.RulesElement({
    name: "Epic Vitality Strength",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_EPIC_VITALITY_STRENGTH",
    source: "Primal Power",
    categories: ["Epic Vitality Strength", "ID_INTERNAL_CLASS_FEATURE_EPIC_VITALITY_STRENGTH", "Epic Vitality"],
    rules: function(model) {
      model.statadd("Strength", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Epic Vitality Wisdom"] = new engine.RulesElement({
    name: "Epic Vitality Wisdom",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_EPIC_VITALITY_WISDOM",
    source: "Primal Power",
    categories: ["Epic Vitality Wisdom", "ID_INTERNAL_CLASS_FEATURE_EPIC_VITALITY_WISDOM", "Epic Vitality"],
    rules: function(model) {
      model.statadd("Wisdom", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Everflame Action"] = new engine.RulesElement({
    name: "Everflame Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2009",
    source: "Primal Power",
    categories: ["Everflame Action", "ID_FMP_CLASS_FEATURE_2009", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Everflame Action:When you spend an action point to take an extra action, each ally within 5 squares of you regains 5 hit points, and each enemy within 5 squares of you gains vulnerable 5 fire until the end of your next turn. In addition, each enemy within 5 squares of you that has fire resistance or immunity to fire loses it until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Eyes of the Sentinel"] = new engine.RulesElement({
    name: "Eyes of the Sentinel",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2062",
    source: "Primal Power",
    categories: ["Eyes of the Sentinel", "ID_FMP_CLASS_FEATURE_2062", "24"],
    rules: function(model) {
      model.statadd("Perception Misc", function() { /* to notice hidden creatures */ return 5; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Feral Ways"] = new engine.RulesElement({
    name: "Feral Ways",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1991",
    source: "Primal Power",
    categories: ["Feral Ways", "ID_FMP_CLASS_FEATURE_1991", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Ferocious Defender"] = new engine.RulesElement({
    name: "Ferocious Defender",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2048",
    source: "Primal Power",
    categories: ["Ferocious Defender", "ID_FMP_CLASS_FEATURE_2048", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Fire's Wrath"] = new engine.RulesElement({
    name: "Fire's Wrath",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1973",
    source: "Primal Power",
    categories: ["Fire's Wrath", "ID_FMP_CLASS_FEATURE_1973", "16"],
    rules: function(model) {
      model.statadd("resist:fire", function() { /* while you are bloodied */ return 10; }, "resist");
      model.statadd("damage rolls", function() { /* while you are bloodied */ return 10; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["First Hunter Action"] = new engine.RulesElement({
    name: "First Hunter Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2037",
    source: "Primal Power",
    categories: ["First Hunter Action", "ID_FMP_CLASS_FEATURE_2037", "11"],
    rules: function(model) {
      model.statadd("Action Point", "First Hunter Action:When you spend an action point to make an attack, one of your allies gains combat advantage against the target of the attack until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Foretold Destiny"] = new engine.RulesElement({
    name: "Foretold Destiny",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2058",
    source: "Primal Power",
    categories: ["Foretold Destiny", "ID_FMP_CLASS_FEATURE_2058", "21"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("Foretold Destiny"); }
      });
      model.statadd("Saving Throws", function() { /* while you are not bloodied */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Foretold Destiny Charisma"] = new engine.RulesElement({
    name: "Foretold Destiny Charisma",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_FORETOLD_DESTINY_CHARISMA",
    source: "Primal Power",
    categories: ["Foretold Destiny Charisma", "ID_INTERNAL_CLASS_FEATURE_FORETOLD_DESTINY_CHARISMA", "Foretold Destiny"],
    rules: function(model) {
      model.statadd("Charisma", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Foretold Destiny Constitution"] = new engine.RulesElement({
    name: "Foretold Destiny Constitution",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_FORETOLD_DESTINY_CONSTITUTION",
    source: "Primal Power",
    categories: ["Foretold Destiny Constitution", "ID_INTERNAL_CLASS_FEATURE_FORETOLD_DESTINY_CONSTITUTION", "Foretold Destiny"],
    rules: function(model) {
      model.statadd("Constitution", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Foretold Destiny Dexterity"] = new engine.RulesElement({
    name: "Foretold Destiny Dexterity",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_FORETOLD_DESTINY_DEXTERITY",
    source: "Primal Power",
    categories: ["Foretold Destiny Dexterity", "ID_INTERNAL_CLASS_FEATURE_FORETOLD_DESTINY_DEXTERITY", "Foretold Destiny"],
    rules: function(model) {
      model.statadd("Dexterity", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Foretold Destiny Intelligence"] = new engine.RulesElement({
    name: "Foretold Destiny Intelligence",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_FORETOLD_DESTINY_INTELLIGENCE",
    source: "Primal Power",
    categories: ["Foretold Destiny Intelligence", "ID_INTERNAL_CLASS_FEATURE_FORETOLD_DESTINY_INTELLIGENCE", "Foretold Destiny"],
    rules: function(model) {
      model.statadd("Intelligence", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Foretold Destiny Strength"] = new engine.RulesElement({
    name: "Foretold Destiny Strength",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_FORETOLD_DESTINY_STRENGTH",
    source: "Primal Power",
    categories: ["Foretold Destiny Strength", "ID_INTERNAL_CLASS_FEATURE_FORETOLD_DESTINY_STRENGTH", "Foretold Destiny"],
    rules: function(model) {
      model.statadd("Strength", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Foretold Destiny Wisdom"] = new engine.RulesElement({
    name: "Foretold Destiny Wisdom",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_FORETOLD_DESTINY_WISDOM",
    source: "Primal Power",
    categories: ["Foretold Destiny Wisdom", "ID_INTERNAL_CLASS_FEATURE_FORETOLD_DESTINY_WISDOM", "Foretold Destiny"],
    rules: function(model) {
      model.statadd("Wisdom", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Frigid Embrace"] = new engine.RulesElement({
    name: "Frigid Embrace",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2041",
    source: "Primal Power",
    categories: ["Frigid Embrace", "ID_FMP_CLASS_FEATURE_2041", "11"],
    rules: function(model) {
      model.statadd("Frigid Embrace", function() { return model.stat("HALF-LEVEL"); });
      model.statadd("Frigid Embrace", 5);
      model.statadd("resist:cold", function() { return model.stat("Frigid Embrace"); }, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Frost Reaver"] = new engine.RulesElement({
    name: "Frost Reaver",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1979",
    source: "Primal Power",
    categories: ["Frost Reaver", "ID_FMP_CLASS_FEATURE_1979", "16"],
    rules: function(model) {
      model.statadd("resist:cold", 10, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Full Impact"] = new engine.RulesElement({
    name: "Full Impact",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2031",
    source: "Primal Power",
    categories: ["Full Impact", "ID_FMP_CLASS_FEATURE_2031", "11"],
    rules: function(model) {
      model.statadd("attack rolls", function() { /* against Fortitude */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Fury's Strength"] = new engine.RulesElement({
    name: "Fury's Strength",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2052",
    source: "Primal Power",
    categories: ["Fury's Strength", "ID_FMP_CLASS_FEATURE_2052", "21"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("Fury's Strength"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Fury's Strength (Strength)"] = new engine.RulesElement({
    name: "Fury's Strength (Strength)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_FURY'S_STRENGTH_(STRENGTH)",
    source: "Primal Power",
    categories: ["Fury's Strength (Strength)", "ID_INTERNAL_CLASS_FEATURE_FURY'S_STRENGTH_(STRENGTH)", "Fury's Strength"],
    rules: function(model) {
      model.statadd("Strength", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Fury's Strength (Wisdom)"] = new engine.RulesElement({
    name: "Fury's Strength (Wisdom)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_FURY'S_STRENGTH_(WISDOM)",
    source: "Primal Power",
    categories: ["Fury's Strength (Wisdom)", "ID_INTERNAL_CLASS_FEATURE_FURY'S_STRENGTH_(WISDOM)", "Fury's Strength"],
    rules: function(model) {
      model.statadd("Wisdom", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Great Elder Action"] = new engine.RulesElement({
    name: "Great Elder Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2012",
    source: "Primal Power",
    categories: ["Great Elder Action", "ID_FMP_CLASS_FEATURE_2012", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Great Elder Action:When you spend an action point to take an extra action, allies adjacent to your spirit companion gain a +2 bonus to all defenses until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Great Summoning"] = new engine.RulesElement({
    name: "Great Summoning",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1990",
    source: "Primal Power",
    categories: ["Great Summoning", "ID_FMP_CLASS_FEATURE_1990", "20"],
    rules: function(model) {
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory("ID_FMP_CLASS_126") && element.hasCategory("summoning") && element.hasCategory("19")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Guardian of the Flame"] = new engine.RulesElement({
    name: "Guardian of the Flame",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2008",
    source: "Primal Power",
    categories: ["Guardian of the Flame", "ID_FMP_CLASS_FEATURE_2008", "11"],
    rules: function(model) {
      model.statadd("resist:fire", 5);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Healing Paths"] = new engine.RulesElement({
    name: "Healing Paths",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2019",
    source: "Primal Power",
    categories: ["Healing Paths", "ID_FMP_CLASS_FEATURE_2019", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Healing Spiral"] = new engine.RulesElement({
    name: "Healing Spiral",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1994",
    source: "Primal Power",
    categories: ["Healing Spiral", "ID_FMP_CLASS_FEATURE_1994", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Hunters Together"] = new engine.RulesElement({
    name: "Hunters Together",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2039",
    source: "Primal Power",
    categories: ["Hunters Together", "ID_FMP_CLASS_FEATURE_2039", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Ice Heart Reaper"] = new engine.RulesElement({
    name: "Ice Heart Reaper",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1978",
    source: "Primal Power",
    categories: ["Ice Heart Reaper", "ID_FMP_CLASS_FEATURE_1978", "11"],
    rules: function(model) {
      model.statadd("attack rolls", function() { /* against immobilized targets */ return 1; });
      model.statadd("damage rolls", function() { /* against immobilized targets */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Inevitability of Death"] = new engine.RulesElement({
    name: "Inevitability of Death",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1969",
    source: "Primal Power",
    categories: ["Inevitability of Death", "ID_FMP_CLASS_FEATURE_1969", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["It Is Written"] = new engine.RulesElement({
    name: "It Is Written",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2059",
    source: "Primal Power",
    categories: ["It Is Written", "ID_FMP_CLASS_FEATURE_2059", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Keen Eagle Action"] = new engine.RulesElement({
    name: "Keen Eagle Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2015",
    source: "Primal Power",
    categories: ["Keen Eagle Action", "ID_FMP_CLASS_FEATURE_2015", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Keen Eagle Action:When you spend an action point to take an extra action, you can use your call spirit companion power as a free action to conjure a second spirit companion. When you attack with a spirit power, you choose which spirit companion to use for the attack; you don't make the attack through both of them. When an effect applies to creatures adjacent to your spirit companion, that effect applies to creatures adjacent to both spirit companions. The second spirit companion disappears at the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Land's Fury"] = new engine.RulesElement({
    name: "Land's Fury",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2053",
    source: "Primal Power",
    categories: ["Land's Fury", "ID_FMP_CLASS_FEATURE_2053", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Lethal Rampage"] = new engine.RulesElement({
    name: "Lethal Rampage",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1960",
    source: "Primal Power",
    categories: ["Lethal Rampage", "ID_FMP_CLASS_FEATURE_1960", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Lifespirit"] = new engine.RulesElement({
    name: "Lifespirit",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2026",
    source: "Primal Power",
    categories: ["Lifespirit", "ID_FMP_CLASS_FEATURE_2026", "ID_FMP_CLASS_FEATURE_1281", "Guardian Might", "1"],
    rules: function(model) {
      model.statadd("AC", function() { 
        if (!(model.wearing('Armor', ['heavy']))) {
          return model.stat("Wisdom modifier");
        } else return 0;
       }, "Ability");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Lightning Flash"] = new engine.RulesElement({
    name: "Lightning Flash",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1963",
    source: "Primal Power",
    categories: ["Lightning Flash", "ID_FMP_CLASS_FEATURE_1963", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Luminescent Lantern"] = new engine.RulesElement({
    name: "Luminescent Lantern",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1984",
    source: "Primal Power",
    categories: ["Luminescent Lantern", "ID_FMP_CLASS_FEATURE_1984", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Magnificent Beast"] = new engine.RulesElement({
    name: "Magnificent Beast",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2068",
    source: "Primal Power",
    categories: ["Magnificent Beast", "ID_FMP_CLASS_FEATURE_2068", "21"],
    rules: function(model) {
      model.statadd("damage rolls", function() { /* while you are in a Large beast form */ return 2; });
      model.statadd("Speed", function() { /* while you are in a Large beast form */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Mantle of Sacrifice"] = new engine.RulesElement({
    name: "Mantle of Sacrifice",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2045",
    source: "Primal Power",
    categories: ["Mantle of Sacrifice", "ID_FMP_CLASS_FEATURE_2045", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Many Perspectives"] = new engine.RulesElement({
    name: "Many Perspectives",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2065",
    source: "Primal Power",
    categories: ["Many Perspectives", "ID_FMP_CLASS_FEATURE_2065", "21"],
    rules: function(model) {
      model.statadd("Arcana Misc", 2);
      model.statadd("Bluff Misc", 2);
      model.statadd("Diplomacy Misc", 2);
      model.statadd("Dungeoneering Misc", 2);
      model.statadd("Heal Misc", 2);
      model.statadd("History Misc", 2);
      model.statadd("Insight Misc", 2);
      model.statadd("Intimidate Misc", 2);
      model.statadd("Nature Misc", 2);
      model.statadd("Perception Misc", 2);
      model.statadd("Religion Misc", 2);
      model.statadd("Streetwise Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Move as One"] = new engine.RulesElement({
    name: "Move as One",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1993",
    source: "Primal Power",
    categories: ["Move as One", "ID_FMP_CLASS_FEATURE_1993", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Mythic Rebirth"] = new engine.RulesElement({
    name: "Mythic Rebirth",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2060",
    source: "Primal Power",
    categories: ["Mythic Rebirth", "ID_FMP_CLASS_FEATURE_2060", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Natural Pack Member"] = new engine.RulesElement({
    name: "Natural Pack Member",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1987",
    source: "Primal Power",
    categories: ["Natural Pack Member", "ID_FMP_CLASS_FEATURE_1987", "11"],
    rules: function(model) {
      model.statadd("attack rolls", function() { /* while you have at least one summoned creature present */ return 1; });
      model.statadd("AC", function() { /* while you have at least one summoned creature present */ return 1; });
      model.statadd("Fortitude Defense", function() { /* while you have at least one summoned creature present */ return 1; });
      model.statadd("Reflex Defense", function() { /* while you have at least one summoned creature present */ return 1; });
      model.statadd("Will Defense", function() { /* while you have at least one summoned creature present */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Natural Vitality"] = new engine.RulesElement({
    name: "Natural Vitality",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1989",
    source: "Primal Power",
    categories: ["Natural Vitality", "ID_FMP_CLASS_FEATURE_1989", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["North Wind Action"] = new engine.RulesElement({
    name: "North Wind Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2028",
    source: "Primal Power",
    categories: ["North Wind Action", "ID_FMP_CLASS_FEATURE_2028", "11"],
    rules: function(model) {
      model.statadd("Action Point", "North Wind Action:When you spend an action point to take an extra action, you also gain a benefit until the end of your next turn: When you hit any enemy, you either deal 5 extra damage to that enemy or knock it prone.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["North Wind Vortex"] = new engine.RulesElement({
    name: "North Wind Vortex",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2029",
    source: "Primal Power",
    categories: ["North Wind Vortex", "ID_FMP_CLASS_FEATURE_2029", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Pack Intensity"] = new engine.RulesElement({
    name: "Pack Intensity",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1988",
    source: "Primal Power",
    categories: ["Pack Intensity", "ID_FMP_CLASS_FEATURE_1988", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Pack Intensity:When you spend an action point to take an extra action, you can give a single minor action command to one of your summoned creatures as a free action. If you don't give any other commands to that creature during this turn, the creature uses its instinctive effect at the end of your turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Parting Swarm"] = new engine.RulesElement({
    name: "Parting Swarm",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2001",
    source: "Primal Power",
    categories: ["Parting Swarm", "ID_FMP_CLASS_FEATURE_2001", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Past Spirit"] = new engine.RulesElement({
    name: "Past Spirit",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2064",
    source: "Primal Power,Dragon Magazine 385",
    categories: ["Past Spirit", "ID_FMP_CLASS_FEATURE_2064", "21"],
    rules: function(model) {
      model.select('Racial Trait', 1, {
        filter: function(model, element) { return element.hasCategory("Past Spirit"); }
      });
      model.select('Racial Trait', 1, {
        filter: function(model, element) { return element.hasCategory("Past Spirit"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Perfect Mark"] = new engine.RulesElement({
    name: "Perfect Mark",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2063",
    source: "Primal Power",
    categories: ["Perfect Mark", "ID_FMP_CLASS_FEATURE_2063", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Primal Blessing"] = new engine.RulesElement({
    name: "Primal Blessing",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2035",
    source: "Primal Power",
    categories: ["Primal Blessing", "ID_FMP_CLASS_FEATURE_2035", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Primal Summoner Action"] = new engine.RulesElement({
    name: "Primal Summoner Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1992",
    source: "Primal Power",
    categories: ["Primal Summoner Action", "ID_FMP_CLASS_FEATURE_1992", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Primal Summoner Action:When you spend an action point to take an extra action, you can give a single standard action command to one of your summoned creatures as a free action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Primal Swarm"] = new engine.RulesElement({
    name: "Primal Swarm",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1980",
    source: "Primal Power",
    categories: ["Primal Swarm", "ID_FMP_CLASS_FEATURE_1980", "ID_FMP_CLASS_FEATURE_784", "Primal Aspect", "1"]
  });
  byID[te.id] = te;
  
  te = class_feature["Radiant Glow"] = new engine.RulesElement({
    name: "Radiant Glow",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2043",
    source: "Primal Power",
    categories: ["Radiant Glow", "ID_FMP_CLASS_FEATURE_2043", "11"],
    rules: function(model) {
      model.statadd("resist:radiant", function() { return model.stat("HALF-LEVEL"); }, "resist");
      model.statadd("Saving Throws", function() { /* against effects that immobilize or restrain you */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Radiant Serpent Action"] = new engine.RulesElement({
    name: "Radiant Serpent Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2044",
    source: "Primal Power",
    categories: ["Radiant Serpent Action", "ID_FMP_CLASS_FEATURE_2044", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Radiant Serpent Action:When you spend an action point to take an extra action while you are in any guardian form, you become insubstantial and gain phasing and a fly speed equal to your speed until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Radiant Swarm Action"] = new engine.RulesElement({
    name: "Radiant Swarm Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1985",
    source: "Primal Power",
    categories: ["Radiant Swarm Action", "ID_FMP_CLASS_FEATURE_1985", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Radiant Swarm Action:When you spend an action point to take an extra action, your beast form attacks during this turn deal extra radiant damage equal to one-half your level.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Rampant Slaughter"] = new engine.RulesElement({
    name: "Rampant Slaughter",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2050",
    source: "Primal Power",
    categories: ["Rampant Slaughter", "ID_FMP_CLASS_FEATURE_2050", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Relentless Pace"] = new engine.RulesElement({
    name: "Relentless Pace",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1966",
    source: "Primal Power",
    categories: ["Relentless Pace", "ID_FMP_CLASS_FEATURE_1966", "16"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("ID_FMP_POWER_4807:damage", "1[W]");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Renewing Flames"] = new engine.RulesElement({
    name: "Renewing Flames",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2010",
    source: "Primal Power",
    categories: ["Renewing Flames", "ID_FMP_CLASS_FEATURE_2010", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Resilience of Stone"] = new engine.RulesElement({
    name: "Resilience of Stone",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1972",
    source: "Primal Power",
    categories: ["Resilience of Stone", "ID_FMP_CLASS_FEATURE_1972", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Revitalizing Presence"] = new engine.RulesElement({
    name: "Revitalizing Presence",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2023",
    source: "Primal Power",
    categories: ["Revitalizing Presence", "ID_FMP_CLASS_FEATURE_2023", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Scarred Healer Action"] = new engine.RulesElement({
    name: "Scarred Healer Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2018",
    source: "Primal Power",
    categories: ["Scarred Healer Action", "ID_FMP_CLASS_FEATURE_2018", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Scarred Healer Action:When you spend an action point to take an extra action, one ally adjacent to your spirit companion gains temporary hit points equal to one-half your level + your Wisdom modifier.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Scar's Gift"] = new engine.RulesElement({
    name: "Scar's Gift",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2017",
    source: "Primal Power",
    categories: ["Scar's Gift", "ID_FMP_CLASS_FEATURE_2017", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Seasons' Herald Action"] = new engine.RulesElement({
    name: "Seasons' Herald Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2021",
    source: "Primal Power",
    categories: ["Seasons' Herald Action", "ID_FMP_CLASS_FEATURE_2021", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Seasons' Herald Action:You can spend an action point to allow an ally within 5 squares of you to take a standard action instead of taking an extra action yourself.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Serpent Form"] = new engine.RulesElement({
    name: "Serpent Form",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1981",
    source: "Primal Power",
    categories: ["Serpent Form", "ID_FMP_CLASS_FEATURE_1981", "11"],
    rules: function(model) {
      model.statadd("resist:poison", function() { /* while you are in beast form */ return 15; }, "resist");
      model.statadd("Stealth Misc", function() { /* while you are in beast form */ return 5; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Serpent's Fury"] = new engine.RulesElement({
    name: "Serpent's Fury",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2049",
    source: "Primal Power",
    categories: ["Serpent's Fury", "ID_FMP_CLASS_FEATURE_2049", "21"]
  });
  byID[te.id] = te;
  
  te = class_feature["Serpent's Poison"] = new engine.RulesElement({
    name: "Serpent's Poison",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1983",
    source: "Primal Power",
    categories: ["Serpent's Poison", "ID_FMP_CLASS_FEATURE_1983", "16"],
    rules: function(model) {
      model.statadd("melee:damage", "+2d6");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Serpent's Resilience"] = new engine.RulesElement({
    name: "Serpent's Resilience",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2051",
    source: "Primal Power",
    categories: ["Serpent's Resilience", "ID_FMP_CLASS_FEATURE_2051", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Shed Bulk for Speed"] = new engine.RulesElement({
    name: "Shed Bulk for Speed",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2000",
    source: "Primal Power",
    categories: ["Shed Bulk for Speed", "ID_FMP_CLASS_FEATURE_2000", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Shed Bulk for Speed:When you spend an action point to take an extra action, you can reroll two different attack rolls before the end of your next turn. When you make one of these rerolls, you take 1d10 + one-half your level damage and use either result.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Snake Fang Action"] = new engine.RulesElement({
    name: "Snake Fang Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1982",
    source: "Primal Power",
    categories: ["Snake Fang Action", "ID_FMP_CLASS_FEATURE_1982", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Snake Fang Action:When you spend an action point to make an attack, each target hit by that attack takes ongoing 10 poison damage (save ends).");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Sovereign's Charge"] = new engine.RulesElement({
    name: "Sovereign's Charge",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2069",
    source: "Primal Power",
    categories: ["Sovereign's Charge", "ID_FMP_CLASS_FEATURE_2069", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Sovereign's Inheritance"] = new engine.RulesElement({
    name: "Sovereign's Inheritance",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2070",
    source: "Primal Power",
    categories: ["Sovereign's Inheritance", "ID_FMP_CLASS_FEATURE_2070", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Spear's Master"] = new engine.RulesElement({
    name: "Spear's Master",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2038",
    source: "Primal Power",
    categories: ["Spear's Master", "ID_FMP_CLASS_FEATURE_2038", "11"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_SIMPLEMILITARYASTHROWN"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Spinning Wings"] = new engine.RulesElement({
    name: "Spinning Wings",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2002",
    source: "Primal Power",
    categories: ["Spinning Wings", "ID_FMP_CLASS_FEATURE_2002", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Spiral Wind Action"] = new engine.RulesElement({
    name: "Spiral Wind Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1995",
    source: "Primal Power",
    categories: ["Spiral Wind Action", "ID_FMP_CLASS_FEATURE_1995", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Spiral Wind Action:When you spend an action point to take an extra action and you are not in beast form, a bloodied ally within 5 squares of you can spend a healing surge.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Spirit Guide"] = new engine.RulesElement({
    name: "Spirit Guide",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2055",
    source: "Primal Power",
    categories: ["Spirit Guide", "ID_FMP_CLASS_FEATURE_2055", "21"]
  });
  byID[te.id] = te;
  
  te = class_feature["Spirit Migration"] = new engine.RulesElement({
    name: "Spirit Migration",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2056",
    source: "Primal Power",
    categories: ["Spirit Migration", "ID_FMP_CLASS_FEATURE_2056", "24"],
    rules: function(model) {
      model.statadd("Action Point", "Spirit Migration:When you spend an action point to take an extra action, you can teleport 5 squares as a free action, either before or after the extra action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Spirit's Protection"] = new engine.RulesElement({
    name: "Spirit's Protection",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2057",
    source: "Primal Power",
    categories: ["Spirit's Protection", "ID_FMP_CLASS_FEATURE_2057", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Spring's Vigor"] = new engine.RulesElement({
    name: "Spring's Vigor",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2025",
    source: "Primal Power",
    categories: ["Spring's Vigor", "ID_FMP_CLASS_FEATURE_2025", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Staggering Critical"] = new engine.RulesElement({
    name: "Staggering Critical",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2030",
    source: "Primal Power",
    categories: ["Staggering Critical", "ID_FMP_CLASS_FEATURE_2030", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Storm Speaker Action"] = new engine.RulesElement({
    name: "Storm Speaker Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1998",
    source: "Primal Power",
    categories: ["Storm Speaker Action", "ID_FMP_CLASS_FEATURE_1998", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Storm Speaker Action:When you spend an action point to take an extra action, you can also fly 8 squares as a free action. This movement doesn't provoke opportunity attacks.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Storm Touched"] = new engine.RulesElement({
    name: "Storm Touched",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1997",
    source: "Primal Power",
    categories: ["Storm Touched", "ID_FMP_CLASS_FEATURE_1997", "11"],
    rules: function(model) {
      model.statadd("resist:lightning", 5, "resist");
      model.statadd("resist:thunder", 5, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Stormheart"] = new engine.RulesElement({
    name: "Stormheart",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2027",
    source: "Primal Power",
    categories: ["Stormheart", "ID_FMP_CLASS_FEATURE_2027", "ID_FMP_CLASS_FEATURE_1281", "Guardian Might", "1"],
    rules: function(model) {
      model.statadd("AC", function() { 
        if (!(model.wearing('Armor', ['heavy']))) {
          return model.stat("Constitution modifier");
        } else return 0;
       }, "Ability");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Strength in Action"] = new engine.RulesElement({
    name: "Strength in Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1964",
    source: "Primal Power",
    categories: ["Strength in Action", "ID_FMP_CLASS_FEATURE_1964", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Strength in Action:When you spend an action point to take an extra action, you regain hit points equal to one-half your level + your Strength modifier.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Strong Spirit"] = new engine.RulesElement({
    name: "Strong Spirit",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1958",
    source: "Primal Power",
    categories: ["Strong Spirit", "ID_FMP_CLASS_FEATURE_1958", "11"],
    rules: function(model) {
      model.statadd("Healing Surge Value", function() { return model.stat("Charisma modifier"); });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Surging Earth"] = new engine.RulesElement({
    name: "Surging Earth",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2032",
    source: "Primal Power",
    categories: ["Surging Earth", "ID_FMP_CLASS_FEATURE_2032", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Surging Earth:When you spend an action point to take an extra action while you are in guardian form, each enemy you hit with a primal attack power before the end of your next turn is knocked prone.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Surging Ice"] = new engine.RulesElement({
    name: "Surging Ice",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1977",
    source: "Primal Power",
    categories: ["Surging Ice", "ID_FMP_CLASS_FEATURE_1977", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Surging Ice:When you spend an action point to make an attack, the first target hit by the attack and each enemy adjacent to it are immobilized until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["The Champion Returned"] = new engine.RulesElement({
    name: "The Champion Returned",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2067",
    source: "Primal Power",
    categories: ["The Champion Returned", "ID_FMP_CLASS_FEATURE_2067", "30"],
    rules: function(model) {
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_RACIAL_ENCOUNTER_POWERS"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Threshing Mist"] = new engine.RulesElement({
    name: "Threshing Mist",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1975",
    source: "Primal Power",
    categories: ["Threshing Mist", "ID_FMP_CLASS_FEATURE_1975", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Thunder Rolls In"] = new engine.RulesElement({
    name: "Thunder Rolls In",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1961",
    source: "Primal Power",
    categories: ["Thunder Rolls In", "ID_FMP_CLASS_FEATURE_1961", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Thunder Rolls In:When you spend an action point to use a thunder power, you can turn any blast 3 created by that power into a blast 5.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Thunderborn Wrath"] = new engine.RulesElement({
    name: "Thunderborn Wrath",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1955",
    source: "Primal Power",
    categories: ["Thunderborn Wrath", "ID_FMP_CLASS_FEATURE_1955", "ID_FMP_CLASS_FEATURE_1051", "Feral Might", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9556"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Thunderous Echo"] = new engine.RulesElement({
    name: "Thunderous Echo",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1962",
    source: "Primal Power",
    categories: ["Thunderous Echo", "ID_FMP_CLASS_FEATURE_1962", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Tribal Champion Action"] = new engine.RulesElement({
    name: "Tribal Champion Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2047",
    source: "Primal Power",
    categories: ["Tribal Champion Action", "ID_FMP_CLASS_FEATURE_2047", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Tribal Champion Action:When you spend an action point to take an extra action, you can choose a guardian form granted by any of your daily powers. Until the end of your next turn, you assume that form and gain all its effects, but you cannot use the form's attack. This use of the form does not expend the use of the power that grants it, and you can assume a form granted by a power you have already used today.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Turn of Seasons"] = new engine.RulesElement({
    name: "Turn of Seasons",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2022",
    source: "Primal Power",
    categories: ["Turn of Seasons", "ID_FMP_CLASS_FEATURE_2022", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Unstoppable Fury"] = new engine.RulesElement({
    name: "Unstoppable Fury",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2054",
    source: "Primal Power",
    categories: ["Unstoppable Fury", "ID_FMP_CLASS_FEATURE_2054", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Warrior of Spring Action"] = new engine.RulesElement({
    name: "Warrior of Spring Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2024",
    source: "Primal Power",
    categories: ["Warrior of Spring Action", "ID_FMP_CLASS_FEATURE_2024", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Warrior of Spring Action:When you spend an action point to take an extra action, one bloodied ally within 5 squares of you can spend a healing surge.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Watch the Omens"] = new engine.RulesElement({
    name: "Watch the Omens",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2020",
    source: "Primal Power",
    categories: ["Watch the Omens", "ID_FMP_CLASS_FEATURE_2020", "11"],
    rules: function(model) {
      model.statadd("Initiative Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Watcher Spirit"] = new engine.RulesElement({
    name: "Watcher Spirit",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2003",
    source: "Primal Power",
    categories: ["Watcher Spirit", "ID_FMP_CLASS_FEATURE_2003", "ID_FMP_CLASS_FEATURE_855", "Companion Spirit", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9732"]);
      model.grant(model.elements.id["ID_FMP_POWER_9734"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Whirling Slayer"] = new engine.RulesElement({
    name: "Whirling Slayer",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1956",
    source: "Primal Power",
    categories: ["Whirling Slayer", "ID_FMP_CLASS_FEATURE_1956", "ID_FMP_CLASS_FEATURE_1051", "Feral Might", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_5249"]);
      model.grant(model.elements.id["ID_INTERNAL_INTERNAL_AMBIDEXTROUS"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Wind Shroud"] = new engine.RulesElement({
    name: "Wind Shroud",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2005",
    source: "Primal Power",
    categories: ["Wind Shroud", "ID_FMP_CLASS_FEATURE_2005", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Wind's Resilience"] = new engine.RulesElement({
    name: "Wind's Resilience",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2007",
    source: "Primal Power",
    categories: ["Wind's Resilience", "ID_FMP_CLASS_FEATURE_2007", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Winter's Winds"] = new engine.RulesElement({
    name: "Winter's Winds",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2042",
    source: "Primal Power",
    categories: ["Winter's Winds", "ID_FMP_CLASS_FEATURE_2042", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["World Speaker Spirit"] = new engine.RulesElement({
    name: "World Speaker Spirit",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2004",
    source: "Primal Power",
    categories: ["World Speaker Spirit", "ID_FMP_CLASS_FEATURE_2004", "ID_FMP_CLASS_FEATURE_855", "Companion Spirit", "1"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_POWER_9733"]);
      model.grant(model.elements.id["ID_FMP_POWER_9736"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["World Tree's Growth"] = new engine.RulesElement({
    name: "World Tree's Growth",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2073",
    source: "Primal Power",
    categories: ["World Tree's Growth", "ID_FMP_CLASS_FEATURE_2073", "30"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
