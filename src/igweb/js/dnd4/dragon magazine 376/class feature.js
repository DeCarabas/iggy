define(['engine', 'dnd4model'], function(engine, dnd4model) {
  "use strict";
  
  var abilitymod = dnd4model.abilitymod;
  
  var types = {};
  var byID = {};
  var te;
  
  var class_feature = types['class feature'] || (types['class feature'] = {});
  te = class_feature["Acrobatics Remembered Knack"] = new engine.RulesElement({
    name: "Acrobatics Remembered Knack",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ACROBATICS_REMEMBERED_KNACK",
    source: "Dragon Magazine 376",
    categories: ["Acrobatics Remembered Knack", "ID_INTERNAL_CLASS_FEATURE_ACROBATICS_REMEMBERED_KNACK", "ID_FMP_FEAT_1667", "Remembered Knack"],
    rules: function(model) {
      model.statadd("Acrobatics Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Arcana Remembered Knack"] = new engine.RulesElement({
    name: "Arcana Remembered Knack",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARCANA_REMEMBERED_KNACK",
    source: "Dragon Magazine 376",
    categories: ["Arcana Remembered Knack", "ID_INTERNAL_CLASS_FEATURE_ARCANA_REMEMBERED_KNACK", "ID_FMP_FEAT_1667", "Remembered Knack"],
    rules: function(model) {
      model.statadd("Arcana Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Athletics Remembered Knack"] = new engine.RulesElement({
    name: "Athletics Remembered Knack",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ATHLETICS_REMEMBERED_KNACK",
    source: "Dragon Magazine 376",
    categories: ["Athletics Remembered Knack", "ID_INTERNAL_CLASS_FEATURE_ATHLETICS_REMEMBERED_KNACK", "ID_FMP_FEAT_1667", "Remembered Knack"],
    rules: function(model) {
      model.statadd("Athletics Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Blade Feint"] = new engine.RulesElement({
    name: "Blade Feint",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1885",
    source: "Dragon Magazine 376",
    categories: ["Blade Feint", "ID_FMP_CLASS_FEATURE_1885", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Bluff Remembered Knack"] = new engine.RulesElement({
    name: "Bluff Remembered Knack",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_BLUFF_REMEMBERED_KNACK",
    source: "Dragon Magazine 376",
    categories: ["Bluff Remembered Knack", "ID_INTERNAL_CLASS_FEATURE_BLUFF_REMEMBERED_KNACK", "ID_FMP_FEAT_1667", "Remembered Knack"],
    rules: function(model) {
      model.statadd("Bluff Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Daring Action"] = new engine.RulesElement({
    name: "Daring Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_740",
    source: "Dragon Magazine 376",
    categories: ["Daring Action", "ID_FMP_CLASS_FEATURE_740", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Daring Action:You can spend an action point to mark each enemy that can see you until the end of your next turn instead of taking an extra action. You also gain 10 temporary hit points.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Daring Improvisation"] = new engine.RulesElement({
    name: "Daring Improvisation",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1884",
    source: "Dragon Magazine 376",
    categories: ["Daring Improvisation", "ID_FMP_CLASS_FEATURE_1884", "11"],
    rules: function(model) {
      model.statadd("martial,melee:key ability", "Charisma");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Death Reprisal"] = new engine.RulesElement({
    name: "Death Reprisal",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1871",
    source: "Dragon Magazine 376",
    categories: ["Death Reprisal", "ID_FMP_CLASS_FEATURE_1871", "12"]
  });
  byID[te.id] = te;
  
  te = class_feature["Destiny Claimed"] = new engine.RulesElement({
    name: "Destiny Claimed",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1873",
    source: "Dragon Magazine 376",
    categories: ["Destiny Claimed", "ID_FMP_CLASS_FEATURE_1873", "21"]
  });
  byID[te.id] = te;
  
  te = class_feature["Diplomacy Remembered Knack"] = new engine.RulesElement({
    name: "Diplomacy Remembered Knack",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_DIPLOMACY_REMEMBERED_KNACK",
    source: "Dragon Magazine 376",
    categories: ["Diplomacy Remembered Knack", "ID_INTERNAL_CLASS_FEATURE_DIPLOMACY_REMEMBERED_KNACK", "ID_FMP_FEAT_1667", "Remembered Knack"],
    rules: function(model) {
      model.statadd("Diplomacy Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Diverse Study"] = new engine.RulesElement({
    name: "Diverse Study",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1891",
    source: "Dragon Magazine 376",
    categories: ["Diverse Study", "ID_FMP_CLASS_FEATURE_1891", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Dungeoneering Remembered Knack"] = new engine.RulesElement({
    name: "Dungeoneering Remembered Knack",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_DUNGEONEERING_REMEMBERED_KNACK",
    source: "Dragon Magazine 376",
    categories: ["Dungeoneering Remembered Knack", "ID_INTERNAL_CLASS_FEATURE_DUNGEONEERING_REMEMBERED_KNACK", "ID_FMP_FEAT_1667", "Remembered Knack"],
    rules: function(model) {
      model.statadd("Dungeoneering Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Endurance Remembered Knack"] = new engine.RulesElement({
    name: "Endurance Remembered Knack",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ENDURANCE_REMEMBERED_KNACK",
    source: "Dragon Magazine 376",
    categories: ["Endurance Remembered Knack", "ID_INTERNAL_CLASS_FEATURE_ENDURANCE_REMEMBERED_KNACK", "ID_FMP_FEAT_1667", "Remembered Knack"],
    rules: function(model) {
      model.statadd("Endurance Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Fate Denied"] = new engine.RulesElement({
    name: "Fate Denied",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1874",
    source: "Dragon Magazine 376",
    categories: ["Fate Denied", "ID_FMP_CLASS_FEATURE_1874", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Ghostly Action"] = new engine.RulesElement({
    name: "Ghostly Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1869",
    source: "Dragon Magazine 376",
    categories: ["Ghostly Action", "ID_FMP_CLASS_FEATURE_1869", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Ghostly Action:When you spend an action point, you gain phasing and insubstantial until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Greater Study"] = new engine.RulesElement({
    name: "Greater Study",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1889",
    source: "Dragon Magazine 376",
    categories: ["Greater Study", "ID_FMP_CLASS_FEATURE_1889", "11"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_130"]);
      model.statadd("Implement wand:Sorcerer", 1);
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_630"]);
      model.statadd("Implement wand:Swordmage", 1);
      model.grant(model.elements.id["ID_FMP_POWER_1333"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Heal Remembered Knack"] = new engine.RulesElement({
    name: "Heal Remembered Knack",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_HEAL_REMEMBERED_KNACK",
    source: "Dragon Magazine 376",
    categories: ["Heal Remembered Knack", "ID_INTERNAL_CLASS_FEATURE_HEAL_REMEMBERED_KNACK", "ID_FMP_FEAT_1667", "Remembered Knack"],
    rules: function(model) {
      model.statadd("Heal Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Heaven's Favor"] = new engine.RulesElement({
    name: "Heaven's Favor",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1881",
    source: "Dragon Magazine 376",
    categories: ["Heaven's Favor", "ID_FMP_CLASS_FEATURE_1881", "11"],
    rules: function(model) {
      model.select('class feature', 1, {
        filter: function(model, element) { return (true /* NYI: Filter: $$MULTICLASS */ && element.hasCategory("ID_FMP_CLASS_FEATURE_1881")); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Heaven's Favor (Avenger)"] = new engine.RulesElement({
    name: "Heaven's Favor (Avenger)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_HEAVEN'S_FAVOR_(AVENGER)",
    source: "Dragon Magazine 376",
    categories: ["Heaven's Favor (Avenger)", "ID_INTERNAL_CLASS_FEATURE_HEAVEN'S_FAVOR_(AVENGER)", "Heaven's Favor", " ID_FMP_CLASS_129"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_324"]);
      model.grant(model.elements.id["ID_FMP_POWER_5330"]);
      model.grant(model.elements.id["ID_FMP_POWER_5331"]);
      model.statadd("_ID_FMP_CLASS_129PowerImplements", "Bard");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Heaven's Favor (Cleric)"] = new engine.RulesElement({
    name: "Heaven's Favor (Cleric)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_HEAVEN'S_FAVOR_(CLERIC)",
    source: "Dragon Magazine 376",
    categories: ["Heaven's Favor (Cleric)", "ID_INTERNAL_CLASS_FEATURE_HEAVEN'S_FAVOR_(CLERIC)", "Heaven's Favor", " ID_FMP_CLASS_2"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_324"]);
      model.grant(model.elements.id["ID_FMP_POWER_1589"]);
      model.grant(model.elements.id["ID_FMP_POWER_146"]);
      model.grant(model.elements.id["ID_FMP_POWER_7885"]);
      model.statadd("_ID_FMP_CLASS_2PowerImplements", "Bard");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Heaven's Favor (Invoker)"] = new engine.RulesElement({
    name: "Heaven's Favor (Invoker)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_HEAVEN'S_FAVOR_(INVOKER)",
    source: "Dragon Magazine 376",
    categories: ["Heaven's Favor (Invoker)", "ID_INTERNAL_CLASS_FEATURE_HEAVEN'S_FAVOR_(INVOKER)", "Heaven's Favor", " ID_FMP_CLASS_127"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_324"]);
      model.grant(model.elements.id["ID_FMP_POWER_5186"]);
      model.statadd("_ID_FMP_CLASS_127PowerImplements", "Bard");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Heaven's Favor (Paladin)"] = new engine.RulesElement({
    name: "Heaven's Favor (Paladin)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_HEAVEN'S_FAVOR_(PALADIN)",
    source: "Dragon Magazine 376",
    categories: ["Heaven's Favor (Paladin)", "ID_INTERNAL_CLASS_FEATURE_HEAVEN'S_FAVOR_(PALADIN)", "Heaven's Favor", " ID_FMP_CLASS_4"],
    rules: function(model) {
      model.grant(model.elements.id["ID_FMP_CLASS_FEATURE_324"]);
      model.grant(model.elements.id["ID_FMP_POWER_1746"]);
      model.grant(model.elements.id["ID_FMP_POWER_1747"]);
      model.statadd("_ID_FMP_CLASS_4PowerImplements", "Bard");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Hero's Blood"] = new engine.RulesElement({
    name: "Hero's Blood",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1886",
    source: "Dragon Magazine 376",
    categories: ["Hero's Blood", "ID_FMP_CLASS_FEATURE_1886", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["History Remembered Knack"] = new engine.RulesElement({
    name: "History Remembered Knack",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_HISTORY_REMEMBERED_KNACK",
    source: "Dragon Magazine 376",
    categories: ["History Remembered Knack", "ID_INTERNAL_CLASS_FEATURE_HISTORY_REMEMBERED_KNACK", "ID_FMP_FEAT_1667", "Remembered Knack"],
    rules: function(model) {
      model.statadd("History Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Insight Remembered Knack"] = new engine.RulesElement({
    name: "Insight Remembered Knack",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_INSIGHT_REMEMBERED_KNACK",
    source: "Dragon Magazine 376",
    categories: ["Insight Remembered Knack", "ID_INTERNAL_CLASS_FEATURE_INSIGHT_REMEMBERED_KNACK", "ID_FMP_FEAT_1667", "Remembered Knack"],
    rules: function(model) {
      model.statadd("Insight Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Intimidate Remembered Knack"] = new engine.RulesElement({
    name: "Intimidate Remembered Knack",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_INTIMIDATE_REMEMBERED_KNACK",
    source: "Dragon Magazine 376",
    categories: ["Intimidate Remembered Knack", "ID_INTERNAL_CLASS_FEATURE_INTIMIDATE_REMEMBERED_KNACK", "ID_FMP_FEAT_1667", "Remembered Knack"],
    rules: function(model) {
      model.statadd("Intimidate Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Mythic Action"] = new engine.RulesElement({
    name: "Mythic Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1887",
    source: "Dragon Magazine 376",
    categories: ["Mythic Action", "ID_FMP_CLASS_FEATURE_1887", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Mythic Action:When you spend an action point to make an extra attack and hit with that attack, each ally within 5 squares that can see you gains temporary hit points equal to 5 + your Charisma modifier.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Nature Remembered Knack"] = new engine.RulesElement({
    name: "Nature Remembered Knack",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_NATURE_REMEMBERED_KNACK",
    source: "Dragon Magazine 376",
    categories: ["Nature Remembered Knack", "ID_INTERNAL_CLASS_FEATURE_NATURE_REMEMBERED_KNACK", "ID_FMP_FEAT_1667", "Remembered Knack"],
    rules: function(model) {
      model.statadd("Nature Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Perception Remembered Knack"] = new engine.RulesElement({
    name: "Perception Remembered Knack",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_PERCEPTION_REMEMBERED_KNACK",
    source: "Dragon Magazine 376",
    categories: ["Perception Remembered Knack", "ID_INTERNAL_CLASS_FEATURE_PERCEPTION_REMEMBERED_KNACK", "ID_FMP_FEAT_1667", "Remembered Knack"],
    rules: function(model) {
      model.statadd("Perception Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Primal Virtue"] = new engine.RulesElement({
    name: "Primal Virtue",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1888",
    source: "Dragon Magazine 376",
    categories: ["Primal Virtue", "ID_FMP_CLASS_FEATURE_1888", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Radiant Song"] = new engine.RulesElement({
    name: "Radiant Song",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1883",
    source: "Dragon Magazine 376",
    categories: ["Radiant Song", "ID_FMP_CLASS_FEATURE_1883", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Religion Remembered Knack"] = new engine.RulesElement({
    name: "Religion Remembered Knack",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_RELIGION_REMEMBERED_KNACK",
    source: "Dragon Magazine 376",
    categories: ["Religion Remembered Knack", "ID_INTERNAL_CLASS_FEATURE_RELIGION_REMEMBERED_KNACK", "ID_FMP_FEAT_1667", "Remembered Knack"],
    rules: function(model) {
      model.statadd("Religion Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Righteous Action"] = new engine.RulesElement({
    name: "Righteous Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1882",
    source: "Dragon Magazine 376",
    categories: ["Righteous Action", "ID_FMP_CLASS_FEATURE_1882", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Righteous Action:Whenever you spend an action point to make an extra attack and you hit with this attack, you gain an extra use of majestic word for the encounter. If your attack misses, one ally within 5 squares of you who can see you regains hit points equal to your level + your Charisma modifier and can shift 1 square as a free action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Stealth Remembered Knack"] = new engine.RulesElement({
    name: "Stealth Remembered Knack",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_STEALTH_REMEMBERED_KNACK",
    source: "Dragon Magazine 376",
    categories: ["Stealth Remembered Knack", "ID_INTERNAL_CLASS_FEATURE_STEALTH_REMEMBERED_KNACK", "ID_FMP_FEAT_1667", "Remembered Knack"],
    rules: function(model) {
      model.statadd("Stealth Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Streetwise Remembered Knack"] = new engine.RulesElement({
    name: "Streetwise Remembered Knack",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_STREETWISE_REMEMBERED_KNACK",
    source: "Dragon Magazine 376",
    categories: ["Streetwise Remembered Knack", "ID_INTERNAL_CLASS_FEATURE_STREETWISE_REMEMBERED_KNACK", "ID_FMP_FEAT_1667", "Remembered Knack"],
    rules: function(model) {
      model.statadd("Streetwise Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Thievery Remembered Knack"] = new engine.RulesElement({
    name: "Thievery Remembered Knack",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_THIEVERY_REMEMBERED_KNACK",
    source: "Dragon Magazine 376",
    categories: ["Thievery Remembered Knack", "ID_INTERNAL_CLASS_FEATURE_THIEVERY_REMEMBERED_KNACK", "ID_FMP_FEAT_1667", "Remembered Knack"],
    rules: function(model) {
      model.statadd("Thievery Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Twist Fate"] = new engine.RulesElement({
    name: "Twist Fate",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1875",
    source: "Dragon Magazine 376",
    categories: ["Twist Fate", "ID_FMP_CLASS_FEATURE_1875", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Undaunted Action (Resourceful Magician)"] = new engine.RulesElement({
    name: "Undaunted Action (Resourceful Magician)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1890",
    source: "Dragon Magazine 376",
    categories: ["Undaunted Action (Resourceful Magician)", "ID_FMP_CLASS_FEATURE_1890", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Undaunted Action (Resourceful Magician):Whenever you spend an action point to make an arcane melee or ranged attack and hit no targets, you can target one additional creature with the attack. The additional target must be within reach for a melee attack or within range for a ranged attack.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Unkillable"] = new engine.RulesElement({
    name: "Unkillable",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_1872",
    source: "Dragon Magazine 376",
    categories: ["Unkillable", "ID_FMP_CLASS_FEATURE_1872", "16"]
  });
  byID[te.id] = te;
  
  
  return {
    types: types,
    id: byID
  };
});
