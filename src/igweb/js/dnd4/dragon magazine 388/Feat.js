(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Feat = types['Feat'] || (types['Feat'] = {});
  te = Feat["Angelic Protection"] = new RulesElement({
    name: "Angelic Protection",
    type: "Feat",
    id: "ID_FMP_FEAT_3092",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3092",
    categories: ["Angelic Protection", "ID_FMP_FEAT_3092"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Beshaba's Boon"] = new RulesElement({
    name: "Beshaba's Boon",
    type: "Feat",
    id: "ID_FMP_FEAT_3106",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3106",
    categories: ["Beshaba's Boon", "ID_FMP_FEAT_3106"]
  });
  byID[te.id] = te;
  
  te = Feat["Blood of Dragons"] = new RulesElement({
    name: "Blood of Dragons",
    type: "Feat",
    id: "ID_FMP_FEAT_3101",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3101",
    categories: ["Blood of Dragons", "ID_FMP_FEAT_3101"],
    rules: function(model) {
      model.statadd("AC", function() { /* against fear attacks, or a +4 if the attacker is a dragon */ return 2; });
      model.statadd("Fortitude Defense", function() { /* against fear attacks, or a +4 if the attacker is a dragon */ return 2; });
      model.statadd("Reflex Defense", function() { /* against fear attacks, or a +4 if the attacker is a dragon */ return 2; });
      model.statadd("Will Defense", function() { /* against fear attacks, or a +4 if the attacker is a dragon */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Briar Thorns"] = new RulesElement({
    name: "Briar Thorns",
    type: "Feat",
    id: "ID_FMP_FEAT_3075",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3075",
    categories: ["Briar Thorns", "ID_FMP_FEAT_3075"]
  });
  byID[te.id] = te;
  
  te = Feat["Burn Everything"] = new RulesElement({
    name: "Burn Everything",
    type: "Feat",
    id: "ID_FMP_FEAT_3068",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3068",
    categories: ["Burn Everything", "ID_FMP_FEAT_3068"]
  });
  byID[te.id] = te;
  
  te = Feat["Champion's Countenance"] = new RulesElement({
    name: "Champion's Countenance",
    type: "Feat",
    id: "ID_FMP_FEAT_3099",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3099",
    categories: ["Champion's Countenance", "ID_FMP_FEAT_3099"]
  });
  byID[te.id] = te;
  
  te = Feat["Clinging Vines"] = new RulesElement({
    name: "Clinging Vines",
    type: "Feat",
    id: "ID_FMP_FEAT_3076",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3076",
    categories: ["Clinging Vines", "ID_FMP_FEAT_3076"]
  });
  byID[te.id] = te;
  
  te = Feat["Commanding Vow"] = new RulesElement({
    name: "Commanding Vow",
    type: "Feat",
    id: "ID_FMP_FEAT_3083",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3083",
    categories: ["Commanding Vow", "ID_FMP_FEAT_3083"]
  });
  byID[te.id] = te;
  
  te = Feat["Common Cause"] = new RulesElement({
    name: "Common Cause",
    type: "Feat",
    id: "ID_FMP_FEAT_3115",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3115",
    categories: ["Common Cause", "ID_FMP_FEAT_3115"]
  });
  byID[te.id] = te;
  
  te = Feat["Consuming the Weak"] = new RulesElement({
    name: "Consuming the Weak",
    type: "Feat",
    id: "ID_FMP_FEAT_3071",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3071",
    categories: ["Consuming the Weak", "ID_FMP_FEAT_3071"]
  });
  byID[te.id] = te;
  
  te = Feat["Courageous Mind"] = new RulesElement({
    name: "Courageous Mind",
    type: "Feat",
    id: "ID_FMP_FEAT_3117",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3117",
    categories: ["Courageous Mind", "ID_FMP_FEAT_3117"],
    rules: function(model) {
      model.statadd("Courageous Mind", 2);
      model.statadd("Initiative Misc", function() { return model.stat("Courageous Mind"); });
      model.statadd("Saving Throws", function() { /* while you are bloodied */ return 1; });
    }
  });
  byID[te.id] = te;
  
  te = Feat["Darting Shade"] = new RulesElement({
    name: "Darting Shade",
    type: "Feat",
    id: "ID_FMP_FEAT_3077",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3077",
    categories: ["Darting Shade", "ID_FMP_FEAT_3077"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Death's Pall"] = new RulesElement({
    name: "Death's Pall",
    type: "Feat",
    id: "ID_FMP_FEAT_3080",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3080",
    categories: ["Death's Pall", "ID_FMP_FEAT_3080"]
  });
  byID[te.id] = te;
  
  te = Feat["Divinity's Shield"] = new RulesElement({
    name: "Divinity's Shield",
    type: "Feat",
    id: "ID_FMP_FEAT_3084",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3084",
    categories: ["Divinity's Shield", "ID_FMP_FEAT_3084"]
  });
  byID[te.id] = te;
  
  te = Feat["Draconic Guardian"] = new RulesElement({
    name: "Draconic Guardian",
    type: "Feat",
    id: "ID_FMP_FEAT_3102",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3102",
    categories: ["Draconic Guardian", "ID_FMP_FEAT_3102"]
  });
  byID[te.id] = te;
  
  te = Feat["Dragon's Rejuvenation"] = new RulesElement({
    name: "Dragon's Rejuvenation",
    type: "Feat",
    id: "ID_FMP_FEAT_3104",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3104",
    categories: ["Dragon's Rejuvenation", "ID_FMP_FEAT_3104"]
  });
  byID[te.id] = te;
  
  te = Feat["Dragon's Terror"] = new RulesElement({
    name: "Dragon's Terror",
    type: "Feat",
    id: "ID_FMP_FEAT_3105",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3105",
    categories: ["Dragon's Terror", "ID_FMP_FEAT_3105"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Drawn Shadows"] = new RulesElement({
    name: "Drawn Shadows",
    type: "Feat",
    id: "ID_FMP_FEAT_3081",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3081",
    categories: ["Drawn Shadows", "ID_FMP_FEAT_3081"]
  });
  byID[te.id] = te;
  
  te = Feat["Flowing River Style"] = new RulesElement({
    name: "Flowing River Style",
    type: "Feat",
    id: "ID_FMP_FEAT_3116",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3116",
    categories: ["Flowing River Style", "ID_FMP_FEAT_3116"]
  });
  byID[te.id] = te;
  
  te = Feat["Fulfilled Vow"] = new RulesElement({
    name: "Fulfilled Vow",
    type: "Feat",
    id: "ID_FMP_FEAT_3093",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3093",
    categories: ["Fulfilled Vow", "ID_FMP_FEAT_3093"]
  });
  byID[te.id] = te;
  
  te = Feat["Gift of the Trees"] = new RulesElement({
    name: "Gift of the Trees",
    type: "Feat",
    id: "ID_FMP_FEAT_3073",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3073",
    categories: ["Gift of the Trees", "ID_FMP_FEAT_3073"]
  });
  byID[te.id] = te;
  
  te = Feat["Heroes Make Their Own Luck"] = new RulesElement({
    name: "Heroes Make Their Own Luck",
    type: "Feat",
    id: "ID_FMP_FEAT_3107",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3107",
    categories: ["Heroes Make Their Own Luck", "ID_FMP_FEAT_3107"],
    rules: function(model) {
      model.statadd("Action Point", "Heroes Make Their Own Luck:When you spend an action point to take an extra action, you gain a +1 bonus to all defenses until the start of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Hero's Poise"] = new RulesElement({
    name: "Hero's Poise",
    type: "Feat",
    id: "ID_FMP_FEAT_3094",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3094",
    categories: ["Hero's Poise", "ID_FMP_FEAT_3094"]
  });
  byID[te.id] = te;
  
  te = Feat["Holy Steed"] = new RulesElement({
    name: "Holy Steed",
    type: "Feat",
    id: "ID_FMP_FEAT_3095",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3095",
    categories: ["Holy Steed", "ID_FMP_FEAT_3095"]
  });
  byID[te.id] = te;
  
  te = Feat["Implacable Mettle"] = new RulesElement({
    name: "Implacable Mettle",
    type: "Feat",
    id: "ID_FMP_FEAT_3085",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3085",
    categories: ["Implacable Mettle", "ID_FMP_FEAT_3085"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["In Shining Armor"] = new RulesElement({
    name: "In Shining Armor",
    type: "Feat",
    id: "ID_FMP_FEAT_3086",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3086",
    categories: ["In Shining Armor", "ID_FMP_FEAT_3086"]
  });
  byID[te.id] = te;
  
  te = Feat["Infectious Wrath"] = new RulesElement({
    name: "Infectious Wrath",
    type: "Feat",
    id: "ID_FMP_FEAT_3113",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3113",
    categories: ["Infectious Wrath", "ID_FMP_FEAT_3113"]
  });
  byID[te.id] = te;
  
  te = Feat["Intimidation of the Dragon"] = new RulesElement({
    name: "Intimidation of the Dragon",
    type: "Feat",
    id: "ID_FMP_FEAT_3103",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3103",
    categories: ["Intimidation of the Dragon", "ID_FMP_FEAT_3103"],
    rules: function(model) {
      model.statadd("Intimidate Misc", 4, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Just Punishment"] = new RulesElement({
    name: "Just Punishment",
    type: "Feat",
    id: "ID_FMP_FEAT_3096",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3096",
    categories: ["Just Punishment", "ID_FMP_FEAT_3096"]
  });
  byID[te.id] = te;
  
  te = Feat["Knightly Bearing"] = new RulesElement({
    name: "Knightly Bearing",
    type: "Feat",
    id: "ID_FMP_FEAT_3087",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3087",
    categories: ["Knightly Bearing", "ID_FMP_FEAT_3087"],
    rules: function(model) {
      model.statadd("Knightly Bearing", 2);
      model.statadd("Diplomacy Misc", function() { return model.stat("Knightly Bearing"); }, "Feat");
      model.statadd("Intimidate Misc", function() { return model.stat("Knightly Bearing"); }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Leaping Shadows"] = new RulesElement({
    name: "Leaping Shadows",
    type: "Feat",
    id: "ID_FMP_FEAT_3079",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3079",
    categories: ["Leaping Shadows", "ID_FMP_FEAT_3079"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Lend Health"] = new RulesElement({
    name: "Lend Health",
    type: "Feat",
    id: "ID_FMP_FEAT_3088",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3088",
    categories: ["Lend Health", "ID_FMP_FEAT_3088"]
  });
  byID[te.id] = te;
  
  te = Feat["Luck of Champions"] = new RulesElement({
    name: "Luck of Champions",
    type: "Feat",
    id: "ID_FMP_FEAT_3108",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3108",
    categories: ["Luck of Champions", "ID_FMP_FEAT_3108"]
  });
  byID[te.id] = te;
  
  te = Feat["Luck of the Gods"] = new RulesElement({
    name: "Luck of the Gods",
    type: "Feat",
    id: "ID_FMP_FEAT_3110",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3110",
    categories: ["Luck of the Gods", "ID_FMP_FEAT_3110"]
  });
  byID[te.id] = te;
  
  te = Feat["Mercy's Reward"] = new RulesElement({
    name: "Mercy's Reward",
    type: "Feat",
    id: "ID_FMP_FEAT_3089",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3089",
    categories: ["Mercy's Reward", "ID_FMP_FEAT_3089"]
  });
  byID[te.id] = te;
  
  te = Feat["Mindfire Disciple"] = new RulesElement({
    name: "Mindfire Disciple",
    type: "Feat",
    id: "ID_FMP_FEAT_3118",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3118",
    categories: ["Mindfire Disciple", "ID_FMP_FEAT_3118"]
  });
  byID[te.id] = te;
  
  te = Feat["Promise of Judgment"] = new RulesElement({
    name: "Promise of Judgment",
    type: "Feat",
    id: "ID_FMP_FEAT_3100",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3100",
    categories: ["Promise of Judgment", "ID_FMP_FEAT_3100"]
  });
  byID[te.id] = te;
  
  te = Feat["Psionic Trick"] = new RulesElement({
    name: "Psionic Trick",
    type: "Feat",
    id: "ID_FMP_FEAT_3111",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3111",
    categories: ["Psionic Trick", "ID_FMP_FEAT_3111"]
  });
  byID[te.id] = te;
  
  te = Feat["Resurgent Memory"] = new RulesElement({
    name: "Resurgent Memory",
    type: "Feat",
    id: "ID_FMP_FEAT_3112",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3112",
    categories: ["Resurgent Memory", "ID_FMP_FEAT_3112"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Selfless Protector"] = new RulesElement({
    name: "Selfless Protector",
    type: "Feat",
    id: "ID_FMP_FEAT_3090",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3090",
    categories: ["Selfless Protector", "ID_FMP_FEAT_3090"]
  });
  byID[te.id] = te;
  
  te = Feat["Stoking the Fire"] = new RulesElement({
    name: "Stoking the Fire",
    type: "Feat",
    id: "ID_FMP_FEAT_3069",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3069",
    categories: ["Stoking the Fire", "ID_FMP_FEAT_3069"]
  });
  byID[te.id] = te;
  
  te = Feat["Sudden Smite"] = new RulesElement({
    name: "Sudden Smite",
    type: "Feat",
    id: "ID_FMP_FEAT_3091",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3091",
    categories: ["Sudden Smite", "ID_FMP_FEAT_3091"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Sympathy of Flame"] = new RulesElement({
    name: "Sympathy of Flame",
    type: "Feat",
    id: "ID_FMP_FEAT_3070",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3070",
    categories: ["Sympathy of Flame", "ID_FMP_FEAT_3070"],
    rules: function(model) {
      model.statadd("Sympathy of Flame", 2);
      model.statadd("arcane,fire:damage", function() { /* against creatures taking ongoing fire damage */ return model.stat("Sympathy of Flame"); }, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = Feat["Tymora's Smile"] = new RulesElement({
    name: "Tymora's Smile",
    type: "Feat",
    id: "ID_FMP_FEAT_3109",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3109",
    categories: ["Tymora's Smile", "ID_FMP_FEAT_3109"]
  });
  byID[te.id] = te;
  
  te = Feat["Unstoppable Drive"] = new RulesElement({
    name: "Unstoppable Drive",
    type: "Feat",
    id: "ID_FMP_FEAT_3114",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3114",
    categories: ["Unstoppable Drive", "ID_FMP_FEAT_3114"]
  });
  byID[te.id] = te;
  
  te = Feat["Untouchable Shade"] = new RulesElement({
    name: "Untouchable Shade",
    type: "Feat",
    id: "ID_FMP_FEAT_3082",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3082",
    categories: ["Untouchable Shade", "ID_FMP_FEAT_3082"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Virtue's Chosen"] = new RulesElement({
    name: "Virtue's Chosen",
    type: "Feat",
    id: "ID_FMP_FEAT_3097",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3097",
    categories: ["Virtue's Chosen", "ID_FMP_FEAT_3097"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = Feat["Wilden Adaptability"] = new RulesElement({
    name: "Wilden Adaptability",
    type: "Feat",
    id: "ID_FMP_FEAT_3074",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3074",
    categories: ["Wilden Adaptability", "ID_FMP_FEAT_3074"]
  });
  byID[te.id] = te;
  
  te = Feat["Wrathful Conviction"] = new RulesElement({
    name: "Wrathful Conviction",
    type: "Feat",
    id: "ID_FMP_FEAT_3098",
    source: "Dragon Magazine 388",
    compendiumUrl: "http://www.wizards.com/dndinsider/compendium/item.aspx?id=3098",
    categories: ["Wrathful Conviction", "ID_FMP_FEAT_3098"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  
})(this);
