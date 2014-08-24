(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var class_feature = types['class feature'] || (types['class feature'] = {});
  te = class_feature["Abhorrent Devotee"] = new RulesElement({
    name: "Abhorrent Devotee",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3120",
    source: "Psionic Power",
    categories: ["Abhorrent Devotee", "ID_FMP_CLASS_FEATURE_3120", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Adaptive Expertise"] = new RulesElement({
    name: "Adaptive Expertise",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2923",
    source: "Psionic Power",
    categories: ["Adaptive Expertise", "ID_FMP_CLASS_FEATURE_2923", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Alien Perspective"] = new RulesElement({
    name: "Alien Perspective",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3115",
    source: "Psionic Power",
    categories: ["Alien Perspective", "ID_FMP_CLASS_FEATURE_3115", "11"],
    rules: function(model) {
      model.statadd("Will Defense", 1);
      model.statadd("resist:psychic", function() { return model.stat("HALF-LEVEL"); }, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Alien Summoning"] = new RulesElement({
    name: "Alien Summoning",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3117",
    source: "Psionic Power",
    categories: ["Alien Summoning", "ID_FMP_CLASS_FEATURE_3117", "16"],
    rules: function(model) {
      model.statadd("SUMMON.AC", 2);
      model.statadd("SUMMON.Will Defense", 2);
      model.statadd("SUMMON.Reflex Defense", 2);
      model.statadd("SUMMON.Fortitude Defense", 2);
      model.statadd("SUMMON.damage", 5);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Anarchic Surge"] = new RulesElement({
    name: "Anarchic Surge",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2917",
    source: "Psionic Power",
    categories: ["Anarchic Surge", "ID_FMP_CLASS_FEATURE_2917", "11"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Appalling Transformation (Charisma)"] = new RulesElement({
    name: "Appalling Transformation (Charisma)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_APPALLING_TRANSFORMATION_(CHARISMA)",
    source: "Psionic Power",
    categories: ["Appalling Transformation (Charisma)", "ID_INTERNAL_CLASS_FEATURE_APPALLING_TRANSFORMATION_(CHARISMA)", "ID_FMP_POWER_13415", "Appalling Transformation"],
    rules: function(model) {
      model.statadd("Appalling Transformation:key ability", "Charisma");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Appalling Transformation (Constitution)"] = new RulesElement({
    name: "Appalling Transformation (Constitution)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_APPALLING_TRANSFORMATION_(CONSTITUTION)",
    source: "Psionic Power",
    categories: ["Appalling Transformation (Constitution)", "ID_INTERNAL_CLASS_FEATURE_APPALLING_TRANSFORMATION_(CONSTITUTION)", "ID_FMP_POWER_13415", "Appalling Transformation"],
    rules: function(model) {
      model.statadd("Appalling Transformation:key ability", "Constitution");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Appalling Transformation (Intelligence)"] = new RulesElement({
    name: "Appalling Transformation (Intelligence)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_APPALLING_TRANSFORMATION_(INTELLIGENCE)",
    source: "Psionic Power",
    categories: ["Appalling Transformation (Intelligence)", "ID_INTERNAL_CLASS_FEATURE_APPALLING_TRANSFORMATION_(INTELLIGENCE)", "ID_FMP_POWER_13415", "Appalling Transformation"],
    rules: function(model) {
      model.statadd("Appalling Transformation:key ability", "Intelligence");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Armor of Adaptable Resistance +1 (Acid)"] = new RulesElement({
    name: "Armor of Adaptable Resistance +1 (Acid)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+1_(ACID)",
    source: "Psionic Power",
    categories: ["Armor of Adaptable Resistance +1 (Acid)", "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+1_(ACID)", "ID_FMP_MAGIC_ITEM_9570", "Armor of Adaptable Resistance +1"],
    rules: function(model) {
      model.statadd("resist:acid", 5, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Armor of Adaptable Resistance +1 (Cold)"] = new RulesElement({
    name: "Armor of Adaptable Resistance +1 (Cold)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+1_(COLD)",
    source: "Psionic Power",
    categories: ["Armor of Adaptable Resistance +1 (Cold)", "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+1_(COLD)", "ID_FMP_MAGIC_ITEM_9570", "Armor of Adaptable Resistance +1"],
    rules: function(model) {
      model.statadd("resist:cold", 5, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Armor of Adaptable Resistance +1 (Fire)"] = new RulesElement({
    name: "Armor of Adaptable Resistance +1 (Fire)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+1_(FIRE)",
    source: "Psionic Power",
    categories: ["Armor of Adaptable Resistance +1 (Fire)", "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+1_(FIRE)", "ID_FMP_MAGIC_ITEM_9570", "Armor of Adaptable Resistance +1"],
    rules: function(model) {
      model.statadd("resist:fire", 5, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Armor of Adaptable Resistance +1 (Force)"] = new RulesElement({
    name: "Armor of Adaptable Resistance +1 (Force)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+1_(FORCE)",
    source: "Psionic Power",
    categories: ["Armor of Adaptable Resistance +1 (Force)", "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+1_(FORCE)", "ID_FMP_MAGIC_ITEM_9570", "Armor of Adaptable Resistance +1"],
    rules: function(model) {
      model.statadd("resist:force", 5, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Armor of Adaptable Resistance +1 (Lightning)"] = new RulesElement({
    name: "Armor of Adaptable Resistance +1 (Lightning)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+1_(LIGHTNING)",
    source: "Psionic Power",
    categories: ["Armor of Adaptable Resistance +1 (Lightning)", "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+1_(LIGHTNING)", "ID_FMP_MAGIC_ITEM_9570", "Armor of Adaptable Resistance +1"],
    rules: function(model) {
      model.statadd("resist:lightning", 5, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Armor of Adaptable Resistance +1 (Necrotic)"] = new RulesElement({
    name: "Armor of Adaptable Resistance +1 (Necrotic)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+1_(NECROTIC)",
    source: "Psionic Power",
    categories: ["Armor of Adaptable Resistance +1 (Necrotic)", "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+1_(NECROTIC)", "ID_FMP_MAGIC_ITEM_9570", "Armor of Adaptable Resistance +1"],
    rules: function(model) {
      model.statadd("resist:necrotic", 5, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Armor of Adaptable Resistance +1 (Poison)"] = new RulesElement({
    name: "Armor of Adaptable Resistance +1 (Poison)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+1_(POISON)",
    source: "Psionic Power",
    categories: ["Armor of Adaptable Resistance +1 (Poison)", "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+1_(POISON)", "ID_FMP_MAGIC_ITEM_9570", "Armor of Adaptable Resistance +1"],
    rules: function(model) {
      model.statadd("resist:poison", 5, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Armor of Adaptable Resistance +1 (Thunder)"] = new RulesElement({
    name: "Armor of Adaptable Resistance +1 (Thunder)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+1_(THUNDER)",
    source: "Psionic Power",
    categories: ["Armor of Adaptable Resistance +1 (Thunder)", "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+1_(THUNDER)", "ID_FMP_MAGIC_ITEM_9570", "Armor of Adaptable Resistance +1"],
    rules: function(model) {
      model.statadd("resist:thunder", 5, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Armor of Adaptable Resistance +2 (Acid)"] = new RulesElement({
    name: "Armor of Adaptable Resistance +2 (Acid)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+2_(ACID)",
    source: "Psionic Power",
    categories: ["Armor of Adaptable Resistance +2 (Acid)", "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+2_(ACID)", "ID_FMP_MAGIC_ITEM_9571", "Armor of Adaptable Resistance +2"],
    rules: function(model) {
      model.statadd("resist:acid", 5, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Armor of Adaptable Resistance +2 (Cold)"] = new RulesElement({
    name: "Armor of Adaptable Resistance +2 (Cold)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+2_(COLD)",
    source: "Psionic Power",
    categories: ["Armor of Adaptable Resistance +2 (Cold)", "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+2_(COLD)", "ID_FMP_MAGIC_ITEM_9571", "Armor of Adaptable Resistance +2"],
    rules: function(model) {
      model.statadd("resist:cold", 5, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Armor of Adaptable Resistance +2 (Fire)"] = new RulesElement({
    name: "Armor of Adaptable Resistance +2 (Fire)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+2_(FIRE)",
    source: "Psionic Power",
    categories: ["Armor of Adaptable Resistance +2 (Fire)", "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+2_(FIRE)", "ID_FMP_MAGIC_ITEM_9571", "Armor of Adaptable Resistance +2"],
    rules: function(model) {
      model.statadd("resist:fire", 5, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Armor of Adaptable Resistance +2 (Force)"] = new RulesElement({
    name: "Armor of Adaptable Resistance +2 (Force)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+2_(FORCE)",
    source: "Psionic Power",
    categories: ["Armor of Adaptable Resistance +2 (Force)", "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+2_(FORCE)", "ID_FMP_MAGIC_ITEM_9571", "Armor of Adaptable Resistance +2"],
    rules: function(model) {
      model.statadd("resist:force", 5, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Armor of Adaptable Resistance +2 (Lightning)"] = new RulesElement({
    name: "Armor of Adaptable Resistance +2 (Lightning)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+2_(LIGHTNING)",
    source: "Psionic Power",
    categories: ["Armor of Adaptable Resistance +2 (Lightning)", "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+2_(LIGHTNING)", "ID_FMP_MAGIC_ITEM_9571", "Armor of Adaptable Resistance +2"],
    rules: function(model) {
      model.statadd("resist:lightning", 5, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Armor of Adaptable Resistance +2 (Necrotic)"] = new RulesElement({
    name: "Armor of Adaptable Resistance +2 (Necrotic)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+2_(NECROTIC)",
    source: "Psionic Power",
    categories: ["Armor of Adaptable Resistance +2 (Necrotic)", "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+2_(NECROTIC)", "ID_FMP_MAGIC_ITEM_9571", "Armor of Adaptable Resistance +2"],
    rules: function(model) {
      model.statadd("resist:necrotic", 5, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Armor of Adaptable Resistance +2 (Poison)"] = new RulesElement({
    name: "Armor of Adaptable Resistance +2 (Poison)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+2_(POISON)",
    source: "Psionic Power",
    categories: ["Armor of Adaptable Resistance +2 (Poison)", "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+2_(POISON)", "ID_FMP_MAGIC_ITEM_9571", "Armor of Adaptable Resistance +2"],
    rules: function(model) {
      model.statadd("resist:poison", 5, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Armor of Adaptable Resistance +2 (Thunder)"] = new RulesElement({
    name: "Armor of Adaptable Resistance +2 (Thunder)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+2_(THUNDER)",
    source: "Psionic Power",
    categories: ["Armor of Adaptable Resistance +2 (Thunder)", "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+2_(THUNDER)", "ID_FMP_MAGIC_ITEM_9571", "Armor of Adaptable Resistance +2"],
    rules: function(model) {
      model.statadd("resist:thunder", 5, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Armor of Adaptable Resistance +3 (Acid)"] = new RulesElement({
    name: "Armor of Adaptable Resistance +3 (Acid)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+3_(ACID)",
    source: "Psionic Power",
    categories: ["Armor of Adaptable Resistance +3 (Acid)", "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+3_(ACID)", "ID_FMP_MAGIC_ITEM_9572", "Armor of Adaptable Resistance +3"],
    rules: function(model) {
      model.statadd("resist:acid", 10, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Armor of Adaptable Resistance +3 (Cold)"] = new RulesElement({
    name: "Armor of Adaptable Resistance +3 (Cold)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+3_(COLD)",
    source: "Psionic Power",
    categories: ["Armor of Adaptable Resistance +3 (Cold)", "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+3_(COLD)", "ID_FMP_MAGIC_ITEM_9572", "Armor of Adaptable Resistance +3"],
    rules: function(model) {
      model.statadd("resist:cold", 10, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Armor of Adaptable Resistance +3 (Fire)"] = new RulesElement({
    name: "Armor of Adaptable Resistance +3 (Fire)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+3_(FIRE)",
    source: "Psionic Power",
    categories: ["Armor of Adaptable Resistance +3 (Fire)", "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+3_(FIRE)", "ID_FMP_MAGIC_ITEM_9572", "Armor of Adaptable Resistance +3"],
    rules: function(model) {
      model.statadd("resist:fire", 10, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Armor of Adaptable Resistance +3 (Force)"] = new RulesElement({
    name: "Armor of Adaptable Resistance +3 (Force)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+3_(FORCE)",
    source: "Psionic Power",
    categories: ["Armor of Adaptable Resistance +3 (Force)", "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+3_(FORCE)", "ID_FMP_MAGIC_ITEM_9572", "Armor of Adaptable Resistance +3"],
    rules: function(model) {
      model.statadd("resist:force", 10, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Armor of Adaptable Resistance +3 (Lightning)"] = new RulesElement({
    name: "Armor of Adaptable Resistance +3 (Lightning)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+3_(LIGHTNING)",
    source: "Psionic Power",
    categories: ["Armor of Adaptable Resistance +3 (Lightning)", "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+3_(LIGHTNING)", "ID_FMP_MAGIC_ITEM_9572", "Armor of Adaptable Resistance +3"],
    rules: function(model) {
      model.statadd("resist:lightning", 10, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Armor of Adaptable Resistance +3 (Necrotic)"] = new RulesElement({
    name: "Armor of Adaptable Resistance +3 (Necrotic)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+3_(NECROTIC)",
    source: "Psionic Power",
    categories: ["Armor of Adaptable Resistance +3 (Necrotic)", "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+3_(NECROTIC)", "ID_FMP_MAGIC_ITEM_9572", "Armor of Adaptable Resistance +3"],
    rules: function(model) {
      model.statadd("resist:necrotic", 10, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Armor of Adaptable Resistance +3 (Poison)"] = new RulesElement({
    name: "Armor of Adaptable Resistance +3 (Poison)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+3_(POISON)",
    source: "Psionic Power",
    categories: ["Armor of Adaptable Resistance +3 (Poison)", "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+3_(POISON)", "ID_FMP_MAGIC_ITEM_9572", "Armor of Adaptable Resistance +3"],
    rules: function(model) {
      model.statadd("resist:poison", 10, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Armor of Adaptable Resistance +3 (Thunder)"] = new RulesElement({
    name: "Armor of Adaptable Resistance +3 (Thunder)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+3_(THUNDER)",
    source: "Psionic Power",
    categories: ["Armor of Adaptable Resistance +3 (Thunder)", "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+3_(THUNDER)", "ID_FMP_MAGIC_ITEM_9572", "Armor of Adaptable Resistance +3"],
    rules: function(model) {
      model.statadd("resist:thunder", 10, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Armor of Adaptable Resistance +4 (Acid)"] = new RulesElement({
    name: "Armor of Adaptable Resistance +4 (Acid)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+4_(ACID)",
    source: "Psionic Power",
    categories: ["Armor of Adaptable Resistance +4 (Acid)", "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+4_(ACID)", "ID_FMP_MAGIC_ITEM_9573", "Armor of Adaptable Resistance +4"],
    rules: function(model) {
      model.statadd("resist:acid", 10, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Armor of Adaptable Resistance +4 (Cold)"] = new RulesElement({
    name: "Armor of Adaptable Resistance +4 (Cold)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+4_(COLD)",
    source: "Psionic Power",
    categories: ["Armor of Adaptable Resistance +4 (Cold)", "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+4_(COLD)", "ID_FMP_MAGIC_ITEM_9573", "Armor of Adaptable Resistance +4"],
    rules: function(model) {
      model.statadd("resist:cold", 10, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Armor of Adaptable Resistance +4 (Fire)"] = new RulesElement({
    name: "Armor of Adaptable Resistance +4 (Fire)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+4_(FIRE)",
    source: "Psionic Power",
    categories: ["Armor of Adaptable Resistance +4 (Fire)", "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+4_(FIRE)", "ID_FMP_MAGIC_ITEM_9573", "Armor of Adaptable Resistance +4"],
    rules: function(model) {
      model.statadd("resist:fire", 10, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Armor of Adaptable Resistance +4 (Force)"] = new RulesElement({
    name: "Armor of Adaptable Resistance +4 (Force)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+4_(FORCE)",
    source: "Psionic Power",
    categories: ["Armor of Adaptable Resistance +4 (Force)", "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+4_(FORCE)", "ID_FMP_MAGIC_ITEM_9573", "Armor of Adaptable Resistance +4"],
    rules: function(model) {
      model.statadd("resist:force", 10, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Armor of Adaptable Resistance +4 (Lightning)"] = new RulesElement({
    name: "Armor of Adaptable Resistance +4 (Lightning)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+4_(LIGHTNING)",
    source: "Psionic Power",
    categories: ["Armor of Adaptable Resistance +4 (Lightning)", "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+4_(LIGHTNING)", "ID_FMP_MAGIC_ITEM_9573", "Armor of Adaptable Resistance +4"],
    rules: function(model) {
      model.statadd("resist:lightning", 10, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Armor of Adaptable Resistance +4 (Necrotic)"] = new RulesElement({
    name: "Armor of Adaptable Resistance +4 (Necrotic)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+4_(NECROTIC)",
    source: "Psionic Power",
    categories: ["Armor of Adaptable Resistance +4 (Necrotic)", "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+4_(NECROTIC)", "ID_FMP_MAGIC_ITEM_9573", "Armor of Adaptable Resistance +4"],
    rules: function(model) {
      model.statadd("resist:necrotic", 10, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Armor of Adaptable Resistance +4 (Poison)"] = new RulesElement({
    name: "Armor of Adaptable Resistance +4 (Poison)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+4_(POISON)",
    source: "Psionic Power",
    categories: ["Armor of Adaptable Resistance +4 (Poison)", "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+4_(POISON)", "ID_FMP_MAGIC_ITEM_9573", "Armor of Adaptable Resistance +4"],
    rules: function(model) {
      model.statadd("resist:poison", 10, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Armor of Adaptable Resistance +4 (Thunder)"] = new RulesElement({
    name: "Armor of Adaptable Resistance +4 (Thunder)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+4_(THUNDER)",
    source: "Psionic Power",
    categories: ["Armor of Adaptable Resistance +4 (Thunder)", "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+4_(THUNDER)", "ID_FMP_MAGIC_ITEM_9573", "Armor of Adaptable Resistance +4"],
    rules: function(model) {
      model.statadd("resist:thunder", 10, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Armor of Adaptable Resistance +5 (Acid)"] = new RulesElement({
    name: "Armor of Adaptable Resistance +5 (Acid)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+5_(ACID)",
    source: "Psionic Power",
    categories: ["Armor of Adaptable Resistance +5 (Acid)", "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+5_(ACID)", "ID_FMP_MAGIC_ITEM_9574", "Armor of Adaptable Resistance +5"],
    rules: function(model) {
      model.statadd("resist:acid", 15, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Armor of Adaptable Resistance +5 (Cold)"] = new RulesElement({
    name: "Armor of Adaptable Resistance +5 (Cold)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+5_(COLD)",
    source: "Psionic Power",
    categories: ["Armor of Adaptable Resistance +5 (Cold)", "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+5_(COLD)", "ID_FMP_MAGIC_ITEM_9574", "Armor of Adaptable Resistance +5"],
    rules: function(model) {
      model.statadd("resist:cold", 15, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Armor of Adaptable Resistance +5 (Fire)"] = new RulesElement({
    name: "Armor of Adaptable Resistance +5 (Fire)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+5_(FIRE)",
    source: "Psionic Power",
    categories: ["Armor of Adaptable Resistance +5 (Fire)", "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+5_(FIRE)", "ID_FMP_MAGIC_ITEM_9574", "Armor of Adaptable Resistance +5"],
    rules: function(model) {
      model.statadd("resist:fire", 15, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Armor of Adaptable Resistance +5 (Force)"] = new RulesElement({
    name: "Armor of Adaptable Resistance +5 (Force)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+5_(FORCE)",
    source: "Psionic Power",
    categories: ["Armor of Adaptable Resistance +5 (Force)", "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+5_(FORCE)", "ID_FMP_MAGIC_ITEM_9574", "Armor of Adaptable Resistance +5"],
    rules: function(model) {
      model.statadd("resist:force", 15, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Armor of Adaptable Resistance +5 (Lightning)"] = new RulesElement({
    name: "Armor of Adaptable Resistance +5 (Lightning)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+5_(LIGHTNING)",
    source: "Psionic Power",
    categories: ["Armor of Adaptable Resistance +5 (Lightning)", "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+5_(LIGHTNING)", "ID_FMP_MAGIC_ITEM_9574", "Armor of Adaptable Resistance +5"],
    rules: function(model) {
      model.statadd("resist:lightning", 15, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Armor of Adaptable Resistance +5 (Necrotic)"] = new RulesElement({
    name: "Armor of Adaptable Resistance +5 (Necrotic)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+5_(NECROTIC)",
    source: "Psionic Power",
    categories: ["Armor of Adaptable Resistance +5 (Necrotic)", "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+5_(NECROTIC)", "ID_FMP_MAGIC_ITEM_9574", "Armor of Adaptable Resistance +5"],
    rules: function(model) {
      model.statadd("resist:necrotic", 15, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Armor of Adaptable Resistance +5 (Poison)"] = new RulesElement({
    name: "Armor of Adaptable Resistance +5 (Poison)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+5_(POISON)",
    source: "Psionic Power",
    categories: ["Armor of Adaptable Resistance +5 (Poison)", "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+5_(POISON)", "ID_FMP_MAGIC_ITEM_9574", "Armor of Adaptable Resistance +5"],
    rules: function(model) {
      model.statadd("resist:poison", 15, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Armor of Adaptable Resistance +5 (Thunder)"] = new RulesElement({
    name: "Armor of Adaptable Resistance +5 (Thunder)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+5_(THUNDER)",
    source: "Psionic Power",
    categories: ["Armor of Adaptable Resistance +5 (Thunder)", "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+5_(THUNDER)", "ID_FMP_MAGIC_ITEM_9574", "Armor of Adaptable Resistance +5"],
    rules: function(model) {
      model.statadd("resist:thunder", 15, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Armor of Adaptable Resistance +6 (Acid)"] = new RulesElement({
    name: "Armor of Adaptable Resistance +6 (Acid)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+6_(ACID)",
    source: "Psionic Power",
    categories: ["Armor of Adaptable Resistance +6 (Acid)", "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+6_(ACID)", "ID_FMP_MAGIC_ITEM_9575", "Armor of Adaptable Resistance +6"],
    rules: function(model) {
      model.statadd("resist:acid", 15, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Armor of Adaptable Resistance +6 (Cold)"] = new RulesElement({
    name: "Armor of Adaptable Resistance +6 (Cold)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+6_(COLD)",
    source: "Psionic Power",
    categories: ["Armor of Adaptable Resistance +6 (Cold)", "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+6_(COLD)", "ID_FMP_MAGIC_ITEM_9575", "Armor of Adaptable Resistance +6"],
    rules: function(model) {
      model.statadd("resist:cold", 15, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Armor of Adaptable Resistance +6 (Fire)"] = new RulesElement({
    name: "Armor of Adaptable Resistance +6 (Fire)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+6_(FIRE)",
    source: "Psionic Power",
    categories: ["Armor of Adaptable Resistance +6 (Fire)", "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+6_(FIRE)", "ID_FMP_MAGIC_ITEM_9575", "Armor of Adaptable Resistance +6"],
    rules: function(model) {
      model.statadd("resist:fire", 15, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Armor of Adaptable Resistance +6 (Force)"] = new RulesElement({
    name: "Armor of Adaptable Resistance +6 (Force)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+6_(FORCE)",
    source: "Psionic Power",
    categories: ["Armor of Adaptable Resistance +6 (Force)", "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+6_(FORCE)", "ID_FMP_MAGIC_ITEM_9575", "Armor of Adaptable Resistance +6"],
    rules: function(model) {
      model.statadd("resist:force", 15, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Armor of Adaptable Resistance +6 (Lightning)"] = new RulesElement({
    name: "Armor of Adaptable Resistance +6 (Lightning)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+6_(LIGHTNING)",
    source: "Psionic Power",
    categories: ["Armor of Adaptable Resistance +6 (Lightning)", "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+6_(LIGHTNING)", "ID_FMP_MAGIC_ITEM_9575", "Armor of Adaptable Resistance +6"],
    rules: function(model) {
      model.statadd("resist:lightning", 15, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Armor of Adaptable Resistance +6 (Necrotic)"] = new RulesElement({
    name: "Armor of Adaptable Resistance +6 (Necrotic)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+6_(NECROTIC)",
    source: "Psionic Power",
    categories: ["Armor of Adaptable Resistance +6 (Necrotic)", "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+6_(NECROTIC)", "ID_FMP_MAGIC_ITEM_9575", "Armor of Adaptable Resistance +6"],
    rules: function(model) {
      model.statadd("resist:necrotic", 15, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Armor of Adaptable Resistance +6 (Poison)"] = new RulesElement({
    name: "Armor of Adaptable Resistance +6 (Poison)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+6_(POISON)",
    source: "Psionic Power",
    categories: ["Armor of Adaptable Resistance +6 (Poison)", "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+6_(POISON)", "ID_FMP_MAGIC_ITEM_9575", "Armor of Adaptable Resistance +6"],
    rules: function(model) {
      model.statadd("resist:poison", 15, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Armor of Adaptable Resistance +6 (Thunder)"] = new RulesElement({
    name: "Armor of Adaptable Resistance +6 (Thunder)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+6_(THUNDER)",
    source: "Psionic Power",
    categories: ["Armor of Adaptable Resistance +6 (Thunder)", "ID_INTERNAL_CLASS_FEATURE_ARMOR_OF_ADAPTABLE_RESISTANCE_+6_(THUNDER)", "ID_FMP_MAGIC_ITEM_9575", "Armor of Adaptable Resistance +6"],
    rules: function(model) {
      model.statadd("resist:thunder", 15, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Arms of the Unseen Way"] = new RulesElement({
    name: "Arms of the Unseen Way",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3089",
    source: "Psionic Power",
    categories: ["Arms of the Unseen Way", "ID_FMP_CLASS_FEATURE_3089", "11"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_WEAPON_PROFICIENCY_(HAND_CROSSBOW)"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Balanced Mind"] = new RulesElement({
    name: "Balanced Mind",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3148",
    source: "Psionic Power",
    categories: ["Balanced Mind", "ID_FMP_CLASS_FEATURE_3148", "21"]
  });
  byID[te.id] = te;
  
  te = class_feature["Baleful Action"] = new RulesElement({
    name: "Baleful Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3073",
    source: "Psionic Power",
    categories: ["Baleful Action", "ID_FMP_CLASS_FEATURE_3073", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Baleful Action:You can spend an action point to slow each enemy within 5 squares of you that can see you until the start of your next turn. Any enemy that takes damage while slowed in this way becomes slowed (save ends).");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Banishing Action"] = new RulesElement({
    name: "Banishing Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2949",
    source: "Psionic Power",
    categories: ["Banishing Action", "ID_FMP_CLASS_FEATURE_2949", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Banishing Action:When you spend an action point to make an attack, you teleport one target hit by the attack 5 squares.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Basilisk's Boon"] = new RulesElement({
    name: "Basilisk's Boon",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3074",
    source: "Psionic Power",
    categories: ["Basilisk's Boon", "ID_FMP_CLASS_FEATURE_3074", "11"],
    rules: function(model) {
      model.statadd("Saving Throws", function() { /* against effects that immobilize, restrain, or slow */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Basilisk's Fury"] = new RulesElement({
    name: "Basilisk's Fury",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3075",
    source: "Psionic Power",
    categories: ["Basilisk's Fury", "ID_FMP_CLASS_FEATURE_3075", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Becoming the One"] = new RulesElement({
    name: "Becoming the One",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3141",
    source: "Psionic Power",
    categories: ["Becoming the One", "ID_FMP_CLASS_FEATURE_3141", "21"],
    rules: function(model) {
      model.statadd("Charisma", 2);
      model.select('class feature', 1, {
        filter: function(model, element) { return element.hasCategory("Becoming the One"); }
      });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Becoming the One (Constitution)"] = new RulesElement({
    name: "Becoming the One (Constitution)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_BECOMING_THE_ONE_(CONSTITUTION)",
    source: "Psionic Power",
    categories: ["Becoming the One (Constitution)", "ID_INTERNAL_CLASS_FEATURE_BECOMING_THE_ONE_(CONSTITUTION)", "ID_FMP_CLASS_FEATURE_3141", "Becoming the One"],
    rules: function(model) {
      model.statadd("Constitution", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Becoming the One (Dexterity)"] = new RulesElement({
    name: "Becoming the One (Dexterity)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_BECOMING_THE_ONE_(DEXTERITY)",
    source: "Psionic Power",
    categories: ["Becoming the One (Dexterity)", "ID_INTERNAL_CLASS_FEATURE_BECOMING_THE_ONE_(DEXTERITY)", "ID_FMP_CLASS_FEATURE_3141", "Becoming the One"],
    rules: function(model) {
      model.statadd("Dexterity", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Becoming the One (Intelligence)"] = new RulesElement({
    name: "Becoming the One (Intelligence)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_BECOMING_THE_ONE_(INTELLIGENCE)",
    source: "Psionic Power",
    categories: ["Becoming the One (Intelligence)", "ID_INTERNAL_CLASS_FEATURE_BECOMING_THE_ONE_(INTELLIGENCE)", "ID_FMP_CLASS_FEATURE_3141", "Becoming the One"],
    rules: function(model) {
      model.statadd("Intelligence", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Becoming the One (Strength)"] = new RulesElement({
    name: "Becoming the One (Strength)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_BECOMING_THE_ONE_(STRENGTH)",
    source: "Psionic Power",
    categories: ["Becoming the One (Strength)", "ID_INTERNAL_CLASS_FEATURE_BECOMING_THE_ONE_(STRENGTH)", "ID_FMP_CLASS_FEATURE_3141", "Becoming the One"],
    rules: function(model) {
      model.statadd("Strength", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Becoming the One (Wisdom)"] = new RulesElement({
    name: "Becoming the One (Wisdom)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_BECOMING_THE_ONE_(WISDOM)",
    source: "Psionic Power",
    categories: ["Becoming the One (Wisdom)", "ID_INTERNAL_CLASS_FEATURE_BECOMING_THE_ONE_(WISDOM)", "ID_FMP_CLASS_FEATURE_3141", "Becoming the One"],
    rules: function(model) {
      model.statadd("Wisdom", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Blackstone Action"] = new RulesElement({
    name: "Blackstone Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2937",
    source: "Psionic Power",
    categories: ["Blackstone Action", "ID_FMP_CLASS_FEATURE_2937", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Blackstone Action:When you spend an action point to use an attack power, you gain resistance to all damage equal to 3 + your Wisdom modifier until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Blackstone Chains"] = new RulesElement({
    name: "Blackstone Chains",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2939",
    source: "Psionic Power",
    categories: ["Blackstone Chains", "ID_FMP_CLASS_FEATURE_2939", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Bound to Greatness"] = new RulesElement({
    name: "Bound to Greatness",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3155",
    source: "Psionic Power",
    categories: ["Bound to Greatness", "ID_FMP_CLASS_FEATURE_3155", "21"],
    rules: function(model) {
      model.statadd("Constitution or Charisma", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Boundless Presence"] = new RulesElement({
    name: "Boundless Presence",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3154",
    source: "Psionic Power",
    categories: ["Boundless Presence", "ID_FMP_CLASS_FEATURE_3154", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Bountiful Seconds"] = new RulesElement({
    name: "Bountiful Seconds",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3153",
    source: "Psionic Power",
    categories: ["Bountiful Seconds", "ID_FMP_CLASS_FEATURE_3153", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Brilliant Overload"] = new RulesElement({
    name: "Brilliant Overload",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2926",
    source: "Psionic Power",
    categories: ["Brilliant Overload", "ID_FMP_CLASS_FEATURE_2926", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Chaotic Action"] = new RulesElement({
    name: "Chaotic Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2918",
    source: "Psionic Power",
    categories: ["Chaotic Action", "ID_FMP_CLASS_FEATURE_2918", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Chaotic Action:When you spend an action point to make an attack, you can choose to bestow the power of chaos onto one ally adjacent to you or adjacent to any target of the attack. Roll a d6 to determine the effect.  <table>d6 Chaotic Action Effect 1 No effect. 2 The ally shifts as a free action. 3 The ally gains a +1 power bonus to attack rolls until the end of your next turn. 4 The ally gains temporary hit points equal to your Charisma modifier. 5 The ally gains a bonus to damage rolls on his or her next attack equal to your Charisma modifier. 6 The ally can make a basic attack as a free action.</table>");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Clarity in Confusion"] = new RulesElement({
    name: "Clarity in Confusion",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2919",
    source: "Psionic Power",
    categories: ["Clarity in Confusion", "ID_FMP_CLASS_FEATURE_2919", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Compelling Action"] = new RulesElement({
    name: "Compelling Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3129",
    source: "Psionic Power",
    categories: ["Compelling Action", "ID_FMP_CLASS_FEATURE_3129", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Compelling Action:Whenever you spend an action point to take an extra action, your thrall can make its standard action attack as a free action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Consummate Traveler"] = new RulesElement({
    name: "Consummate Traveler",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3151",
    source: "Psionic Power",
    categories: ["Consummate Traveler", "ID_FMP_CLASS_FEATURE_3151", "21"]
  });
  byID[te.id] = te;
  
  te = class_feature["Cosmic Awareness"] = new RulesElement({
    name: "Cosmic Awareness",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3138",
    source: "Psionic Power",
    categories: ["Cosmic Awareness", "ID_FMP_CLASS_FEATURE_3138", "21"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_VISION_TRUESIGHT"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Cosmic Connection"] = new RulesElement({
    name: "Cosmic Connection",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3140",
    source: "Psionic Power",
    categories: ["Cosmic Connection", "ID_FMP_CLASS_FEATURE_3140", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Cosmic Experience"] = new RulesElement({
    name: "Cosmic Experience",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3139",
    source: "Psionic Power",
    categories: ["Cosmic Experience", "ID_FMP_CLASS_FEATURE_3139", "24"],
    rules: function(model) {
      model.statadd("Initiative Misc", 5);
      model.grant(elements.id["ID_INTERNAL_LANGUAGE_ALL"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Defensive Aura"] = new RulesElement({
    name: "Defensive Aura",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2946",
    source: "Psionic Power",
    categories: ["Defensive Aura", "ID_FMP_CLASS_FEATURE_2946", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Deification of the Self"] = new RulesElement({
    name: "Deification of the Self",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3143",
    source: "Psionic Power",
    categories: ["Deification of the Self", "ID_FMP_CLASS_FEATURE_3143", "30"],
    rules: function(model) {
      model.statadd("Saving Throws", 5);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Devoted Servant"] = new RulesElement({
    name: "Devoted Servant",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3130",
    source: "Psionic Power",
    categories: ["Devoted Servant", "ID_FMP_CLASS_FEATURE_3130", "16"],
    rules: function(model) {
      model.statadd("AC", function() { /* while you are adjacent to your thrall */ return 2; });
      model.statadd("Fortitude Defense", function() { /* while you are adjacent to your thrall */ return 2; });
      model.statadd("Reflex Defense", function() { /* while you are adjacent to your thrall */ return 2; });
      model.statadd("Will Defense", function() { /* while you are adjacent to your thrall */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Dimensional Action"] = new RulesElement({
    name: "Dimensional Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2920",
    source: "Psionic Power",
    categories: ["Dimensional Action", "ID_FMP_CLASS_FEATURE_2920", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Dimensional Action:When you spend an action point to make an attack, you can teleport a number of squares equal to your Wisdom modifier before or after the attack.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Discorporate Retaliation (Augment 2) (Charisma)"] = new RulesElement({
    name: "Discorporate Retaliation (Augment 2) (Charisma)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_DISCORPORATE_RETALIATION_(AUGMENT_2)_(CHARISMA)",
    source: "Psionic Power",
    categories: ["Discorporate Retaliation (Augment 2) (Charisma)", "ID_INTERNAL_CLASS_FEATURE_DISCORPORATE_RETALIATION_(AUGMENT_2)_(CHARISMA)", "ID_INTERNAL_POWER_DISCORPORATE_RETALIATION_(AUGMENT_2)", "Discorporate Retaliation (Augment 2)"],
    rules: function(model) {
      model.statadd("Discorporate Retaliation (Augment 2):key ability", "Charisma");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Discorporate Retaliation (Augment 2) (Intelligence)"] = new RulesElement({
    name: "Discorporate Retaliation (Augment 2) (Intelligence)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_DISCORPORATE_RETALIATION_(AUGMENT_2)_(INTELLIGENCE)",
    source: "Psionic Power",
    categories: ["Discorporate Retaliation (Augment 2) (Intelligence)", "ID_INTERNAL_CLASS_FEATURE_DISCORPORATE_RETALIATION_(AUGMENT_2)_(INTELLIGENCE)", "ID_INTERNAL_POWER_DISCORPORATE_RETALIATION_(AUGMENT_2)", "Discorporate Retaliation (Augment 2)"],
    rules: function(model) {
      model.statadd("Discorporate Retaliation (Augment 2):key ability", "Intelligence");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Discorporate Retaliation (Augment 2) (Wisdom)"] = new RulesElement({
    name: "Discorporate Retaliation (Augment 2) (Wisdom)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_DISCORPORATE_RETALIATION_(AUGMENT_2)_(WISDOM)",
    source: "Psionic Power",
    categories: ["Discorporate Retaliation (Augment 2) (Wisdom)", "ID_INTERNAL_CLASS_FEATURE_DISCORPORATE_RETALIATION_(AUGMENT_2)_(WISDOM)", "ID_INTERNAL_POWER_DISCORPORATE_RETALIATION_(AUGMENT_2)", "Discorporate Retaliation (Augment 2)"],
    rules: function(model) {
      model.statadd("Discorporate Retaliation (Augment 2):key ability", "Wisdom");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Diverse Focus (Shaper)"] = new RulesElement({
    name: "Diverse Focus (Shaper)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_DIVERSE_FOCUS_(SHAPER)",
    source: "Psionic Power",
    categories: ["Diverse Focus (Shaper)", "ID_INTERNAL_CLASS_FEATURE_DIVERSE_FOCUS_(SHAPER)", "ID_FMP_FEAT_3398", "Diverse Focus"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_3097"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Diverse Focus (Telekinesis)"] = new RulesElement({
    name: "Diverse Focus (Telekinesis)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_DIVERSE_FOCUS_(TELEKINESIS)",
    source: "Psionic Power",
    categories: ["Diverse Focus (Telekinesis)", "ID_INTERNAL_CLASS_FEATURE_DIVERSE_FOCUS_(TELEKINESIS)", "ID_FMP_FEAT_3398", "Diverse Focus"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_2367"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Diverse Focus (Telepathy)"] = new RulesElement({
    name: "Diverse Focus (Telepathy)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_DIVERSE_FOCUS_(TELEPATHY)",
    source: "Psionic Power",
    categories: ["Diverse Focus (Telepathy)", "ID_INTERNAL_CLASS_FEATURE_DIVERSE_FOCUS_(TELEPATHY)", "ID_FMP_FEAT_3398", "Diverse Focus"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_CLASS_FEATURE_1811"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Draining Surge"] = new RulesElement({
    name: "Draining Surge",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2935",
    source: "Psionic Power",
    categories: ["Draining Surge", "ID_FMP_CLASS_FEATURE_2935", "16"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Driven Action"] = new RulesElement({
    name: "Driven Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3126",
    source: "Psionic Power",
    categories: ["Driven Action", "ID_FMP_CLASS_FEATURE_3126", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Driven Action:When you spend an action point to give a special command that allows a summoned creature to make an attack, that attack gains a power bonus to the attack roll equal to your Charisma modifier, and each enemy hit by the attack takes 5 extra damage.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Enlightened Action"] = new RulesElement({
    name: "Enlightened Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3086",
    source: "Psionic Power",
    categories: ["Enlightened Action", "ID_FMP_CLASS_FEATURE_3086", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Enlightened Action:When you spend an action point to take an extra action, you shift your speed and are insubstantial until the end of your next turn. You ignore difficult terrain, and you can move across water and other liquid surfaces. You sink if you end your turn on such a surface.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Enlightenment's Blessing"] = new RulesElement({
    name: "Enlightenment's Blessing",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3147",
    source: "Psionic Power",
    categories: ["Enlightenment's Blessing", "ID_FMP_CLASS_FEATURE_3147", "21"],
    rules: function(model) {
      model.statadd("Dexterity", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Entropic Recovery"] = new RulesElement({
    name: "Entropic Recovery",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3118",
    source: "Psionic Power",
    categories: ["Entropic Recovery", "ID_FMP_CLASS_FEATURE_3118", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Eroding Action"] = new RulesElement({
    name: "Eroding Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3119",
    source: "Psionic Power",
    categories: ["Eroding Action", "ID_FMP_CLASS_FEATURE_3119", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Eroding Action:When you spend an action point to make an attack, any target hit by that attack gains vulnerable necrotic and vulnerable psychic equal to 3 + your Charisma modifier (save ends both).");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Erupting Critical"] = new RulesElement({
    name: "Erupting Critical",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2925",
    source: "Psionic Power",
    categories: ["Erupting Critical", "ID_FMP_CLASS_FEATURE_2925", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Evolved Form"] = new RulesElement({
    name: "Evolved Form",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3127",
    source: "Psionic Power",
    categories: ["Evolved Form", "ID_FMP_CLASS_FEATURE_3127", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Fear No Fire"] = new RulesElement({
    name: "Fear No Fire",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3122",
    source: "Psionic Power",
    categories: ["Fear No Fire", "ID_FMP_CLASS_FEATURE_3122", "11"],
    rules: function(model) {
      model.statadd("resist:fire", function() { return model.stat("HALF-LEVEL"); }, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Fiery Nimbus"] = new RulesElement({
    name: "Fiery Nimbus",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3124",
    source: "Psionic Power",
    categories: ["Fiery Nimbus", "ID_FMP_CLASS_FEATURE_3124", "16"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13399"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Flit Through Shadows"] = new RulesElement({
    name: "Flit Through Shadows",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3092",
    source: "Psionic Power",
    categories: ["Flit Through Shadows", "ID_FMP_CLASS_FEATURE_3092", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Focused Parry Action"] = new RulesElement({
    name: "Focused Parry Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3079",
    source: "Psionic Power",
    categories: ["Focused Parry Action", "ID_FMP_CLASS_FEATURE_3079", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Focused Parry Action:When you spend an action point to make an attack and the attack hits, you gain a bonus to all defenses equal to your Constitution modifier until you make an attack or until the end of the encounter.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Focused Talent (Shaper)"] = new RulesElement({
    name: "Focused Talent (Shaper)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_FOCUSED_TALENT_(SHAPER)",
    source: "Psionic Power",
    categories: ["Focused Talent (Shaper)", "ID_INTERNAL_CLASS_FEATURE_FOCUSED_TALENT_(SHAPER)", "ID_FMP_FEAT_3391", "Focused Talent"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13300"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(elements.id["ID_FMP_POWER_13301"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Focused Talent (Telekinesis)"] = new RulesElement({
    name: "Focused Talent (Telekinesis)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_FOCUSED_TALENT_(TELEKINESIS)",
    source: "Psionic Power",
    categories: ["Focused Talent (Telekinesis)", "ID_INTERNAL_CLASS_FEATURE_FOCUSED_TALENT_(TELEKINESIS)", "ID_FMP_FEAT_3391", "Focused Talent"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_11267"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(elements.id["ID_FMP_POWER_11268"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Focused Talent (Telepathy)"] = new RulesElement({
    name: "Focused Talent (Telepathy)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_FOCUSED_TALENT_(TELEPATHY)",
    source: "Psionic Power",
    categories: ["Focused Talent (Telepathy)", "ID_INTERNAL_CLASS_FEATURE_FOCUSED_TALENT_(TELEPATHY)", "ID_FMP_FEAT_3391", "Focused Talent"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_8224"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.grant(elements.id["ID_FMP_POWER_8225"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Force and Flame"] = new RulesElement({
    name: "Force and Flame",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3123",
    source: "Psionic Power",
    categories: ["Force and Flame", "ID_FMP_CLASS_FEATURE_3123", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Goading Action"] = new RulesElement({
    name: "Goading Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2924",
    source: "Psionic Power",
    categories: ["Goading Action", "ID_FMP_CLASS_FEATURE_2924", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Goading Action:When you spend an action point to make an attack and hit with your first attack roll, one ally adjacent to you can shift as a free action and a different ally within 5 squares of you can make a basic attack as a free action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Gusting Action"] = new RulesElement({
    name: "Gusting Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3077",
    source: "Psionic Power",
    categories: ["Gusting Action", "ID_FMP_CLASS_FEATURE_3077", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Gusting Action:When you spend an action point to make an attack and the attack hits, you shift your speed after resolving the attack.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Incandescent Presence"] = new RulesElement({
    name: "Incandescent Presence",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2928",
    source: "Psionic Power",
    categories: ["Incandescent Presence", "ID_FMP_CLASS_FEATURE_2928", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Insane Action"] = new RulesElement({
    name: "Insane Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3116",
    source: "Psionic Power",
    categories: ["Insane Action", "ID_FMP_CLASS_FEATURE_3116", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Insane Action:At the end of any of your turns in which you spend an action point, roll a d4 to invoke one of the effects below.  <table>d4 Insane Action Effect 1 You are dazed until the end of your next turn. 2 The last creature you attacked can teleport 5 squares as a free action. 3 If you are conscious, you teleport 5 squares. When you do, you gain a +4 bonus to all defenses until the end of your next turn. 4 You gain 20 temporary hit points.</table>");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Instant Adjustment"] = new RulesElement({
    name: "Instant Adjustment",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2922",
    source: "Psionic Power",
    categories: ["Instant Adjustment", "ID_FMP_CLASS_FEATURE_2922", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Iron Soul"] = new RulesElement({
    name: "Iron Soul",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2952",
    source: "Psionic Power",
    categories: ["Iron Soul", "ID_FMP_CLASS_FEATURE_2952", "ID_FMP_CLASS_FEATURE_1543", "Monastic Tradition", "1"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13123"]);
      // unsupported rule: cbimporter.Rules.ModifyRule
      model.statadd("Iron Soul", function() { 
        if (model.wearing('Weapon')) {
          return 1;
        } else return 0;
       });
      model.statadd("AC", function() { 
        if (!(model.wearing('Weapon', ['unarmed']))) {
          return model.stat("Iron Soul");
        } else return 0;
       }, "Shield");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Ironjack's Command"] = new RulesElement({
    name: "Ironjack's Command",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2948",
    source: "Psionic Power",
    categories: ["Ironjack's Command", "ID_FMP_CLASS_FEATURE_2948", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Keeper of the Cerulean Seals"] = new RulesElement({
    name: "Keeper of the Cerulean Seals",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3144",
    source: "Psionic Power",
    categories: ["Keeper of the Cerulean Seals", "ID_FMP_CLASS_FEATURE_3144", "21"],
    rules: function(model) {
      model.statadd("AC", 1);
      model.statadd("Fortitude Defense", 1);
      model.statadd("Reflex Defense", 1);
      model.statadd("Will Defense", 1);
      model.statadd("Damage", "+2d12");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Ki Blade"] = new RulesElement({
    name: "Ki Blade",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3082",
    source: "Psionic Power",
    categories: ["Ki Blade", "ID_FMP_CLASS_FEATURE_3082", "16"],
    rules: function(model) {
      model.statadd("Heavy Blade group,melee:damage", function() { return model.stat("Constitution modifier"); });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Lightning's Path Action"] = new RulesElement({
    name: "Lightning's Path Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2943",
    source: "Psionic Power",
    categories: ["Lightning's Path Action", "ID_FMP_CLASS_FEATURE_2943", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Lightning's Path Action:When you spend an action point to take an extra action, you teleport 5 squares. After the teleport, each enemy adjacent to you or marked by you takes lightning damage equal to your Wisdom modifier.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Luminous Action"] = new RulesElement({
    name: "Luminous Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2927",
    source: "Psionic Power",
    categories: ["Luminous Action", "ID_FMP_CLASS_FEATURE_2927", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Luminous Action:When you spend an action point to take an extra action, you emit bright light out to 10 squares until the end of your next turn. Enemies adjacent to you while you emit this light gain vulnerability to radiant damage equal to your Constitution modifier.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Luminous Consciousness"] = new RulesElement({
    name: "Luminous Consciousness",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3150",
    source: "Psionic Power",
    categories: ["Luminous Consciousness", "ID_FMP_CLASS_FEATURE_3150", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Mantle of Impulsiveness"] = new RulesElement({
    name: "Mantle of Impulsiveness",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2916",
    source: "Psionic Power",
    categories: ["Mantle of Impulsiveness", "ID_FMP_CLASS_FEATURE_2916", "ID_FMP_CLASS_FEATURE_2136", "Ardent Mantle", "1"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_12931"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Maximized Time"] = new RulesElement({
    name: "Maximized Time",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3152",
    source: "Psionic Power",
    categories: ["Maximized Time", "ID_FMP_CLASS_FEATURE_3152", "21"],
    rules: function(model) {
      model.statadd("Action Point", "Maximized Time:You can spend an action point to gain a standard action, a move action, and a minor action instead of only one extra action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Monolithic Vision"] = new RulesElement({
    name: "Monolithic Vision",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2938",
    source: "Psionic Power",
    categories: ["Monolithic Vision", "ID_FMP_CLASS_FEATURE_2938", "11"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Mysteries Revealed"] = new RulesElement({
    name: "Mysteries Revealed",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3078",
    source: "Psionic Power",
    categories: ["Mysteries Revealed", "ID_FMP_CLASS_FEATURE_3078", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Mystery of the Four Winds"] = new RulesElement({
    name: "Mystery of the Four Winds",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3076",
    source: "Psionic Power",
    categories: ["Mystery of the Four Winds", "ID_FMP_CLASS_FEATURE_3076", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Nature Restored"] = new RulesElement({
    name: "Nature Restored",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3146",
    source: "Psionic Power",
    categories: ["Nature Restored", "ID_FMP_CLASS_FEATURE_3146", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Nomad's Journey"] = new RulesElement({
    name: "Nomad's Journey",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2951",
    source: "Psionic Power",
    categories: ["Nomad's Journey", "ID_FMP_CLASS_FEATURE_2951", "16"],
    rules: function(model) {
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Nomad's Prerogative"] = new RulesElement({
    name: "Nomad's Prerogative",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2950",
    source: "Psionic Power",
    categories: ["Nomad's Prerogative", "ID_FMP_CLASS_FEATURE_2950", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Obedient Thrall"] = new RulesElement({
    name: "Obedient Thrall",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3128",
    source: "Psionic Power",
    categories: ["Obedient Thrall", "ID_FMP_CLASS_FEATURE_3128", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Opened Mind"] = new RulesElement({
    name: "Opened Mind",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2929",
    source: "Psionic Power",
    categories: ["Opened Mind", "ID_FMP_CLASS_FEATURE_2929", "11"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_VISION_TELEPATHY"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Otherworldly Pulse (Augment 0) (Charisma)"] = new RulesElement({
    name: "Otherworldly Pulse (Augment 0) (Charisma)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_OTHERWORLDLY_PULSE_(AUGMENT_0)_(CHARISMA)",
    source: "Psionic Power",
    categories: ["Otherworldly Pulse (Augment 0) (Charisma)", "ID_INTERNAL_CLASS_FEATURE_OTHERWORLDLY_PULSE_(AUGMENT_0)_(CHARISMA)", "ID_INTERNAL_POWER_OTHERWORLDLY_PULSE_(AUGMENT_0)", "Otherworldly Pulse (Augment 0)"],
    rules: function(model) {
      model.statadd("Otherworldly Pulse (Augment 0):key ability", "Charisma");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Otherworldly Pulse (Augment 0) (Constitution)"] = new RulesElement({
    name: "Otherworldly Pulse (Augment 0) (Constitution)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_OTHERWORLDLY_PULSE_(AUGMENT_0)_(CONSTITUTION)",
    source: "Psionic Power",
    categories: ["Otherworldly Pulse (Augment 0) (Constitution)", "ID_INTERNAL_CLASS_FEATURE_OTHERWORLDLY_PULSE_(AUGMENT_0)_(CONSTITUTION)", "ID_INTERNAL_POWER_OTHERWORLDLY_PULSE_(AUGMENT_0)", "Otherworldly Pulse (Augment 0)"],
    rules: function(model) {
      model.statadd("Otherworldly Pulse (Augment 0):key ability", "Constitution");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Otherworldly Pulse (Augment 0) (Intelligence)"] = new RulesElement({
    name: "Otherworldly Pulse (Augment 0) (Intelligence)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_OTHERWORLDLY_PULSE_(AUGMENT_0)_(INTELLIGENCE)",
    source: "Psionic Power",
    categories: ["Otherworldly Pulse (Augment 0) (Intelligence)", "ID_INTERNAL_CLASS_FEATURE_OTHERWORLDLY_PULSE_(AUGMENT_0)_(INTELLIGENCE)", "ID_INTERNAL_POWER_OTHERWORLDLY_PULSE_(AUGMENT_0)", "Otherworldly Pulse (Augment 0)"],
    rules: function(model) {
      model.statadd("Otherworldly Pulse (Augment 0):key ability", "Intelligence");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Otherworldly Pulse (Augment 2) (Charisma)"] = new RulesElement({
    name: "Otherworldly Pulse (Augment 2) (Charisma)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_OTHERWORLDLY_PULSE_(AUGMENT_2)_(CHARISMA)",
    source: "Psionic Power",
    categories: ["Otherworldly Pulse (Augment 2) (Charisma)", "ID_INTERNAL_CLASS_FEATURE_OTHERWORLDLY_PULSE_(AUGMENT_2)_(CHARISMA)", "ID_INTERNAL_POWER_OTHERWORLDLY_PULSE_(AUGMENT_2)", "Otherworldly Pulse (Augment 2)"],
    rules: function(model) {
      model.statadd("Otherworldly Pulse (Augment 2):key ability", "Charisma");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Otherworldly Pulse (Augment 2) (Constitution)"] = new RulesElement({
    name: "Otherworldly Pulse (Augment 2) (Constitution)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_OTHERWORLDLY_PULSE_(AUGMENT_2)_(CONSTITUTION)",
    source: "Psionic Power",
    categories: ["Otherworldly Pulse (Augment 2) (Constitution)", "ID_INTERNAL_CLASS_FEATURE_OTHERWORLDLY_PULSE_(AUGMENT_2)_(CONSTITUTION)", "ID_INTERNAL_POWER_OTHERWORLDLY_PULSE_(AUGMENT_2)", "Otherworldly Pulse (Augment 2)"],
    rules: function(model) {
      model.statadd("Otherworldly Pulse (Augment 2):key ability", "Constitution");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Otherworldly Pulse (Augment 2) (Intelligence)"] = new RulesElement({
    name: "Otherworldly Pulse (Augment 2) (Intelligence)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_OTHERWORLDLY_PULSE_(AUGMENT_2)_(INTELLIGENCE)",
    source: "Psionic Power",
    categories: ["Otherworldly Pulse (Augment 2) (Intelligence)", "ID_INTERNAL_CLASS_FEATURE_OTHERWORLDLY_PULSE_(AUGMENT_2)_(INTELLIGENCE)", "ID_INTERNAL_POWER_OTHERWORLDLY_PULSE_(AUGMENT_2)", "Otherworldly Pulse (Augment 2)"],
    rules: function(model) {
      model.statadd("Otherworldly Pulse (Augment 2):key ability", "Intelligence");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Otherworldly Pulse (Charisma)"] = new RulesElement({
    name: "Otherworldly Pulse (Charisma)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_OTHERWORLDLY_PULSE_(CHARISMA)",
    source: "Psionic Power",
    categories: ["Otherworldly Pulse (Charisma)", "ID_INTERNAL_CLASS_FEATURE_OTHERWORLDLY_PULSE_(CHARISMA)", "ID_FMP_POWER_13414", "Otherworldly Pulse"],
    rules: function(model) {
      model.statadd("Otherworldly Pulse:key ability", "Charisma");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Otherworldly Pulse (Constitution)"] = new RulesElement({
    name: "Otherworldly Pulse (Constitution)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_OTHERWORLDLY_PULSE_(CONSTITUTION)",
    source: "Psionic Power",
    categories: ["Otherworldly Pulse (Constitution)", "ID_INTERNAL_CLASS_FEATURE_OTHERWORLDLY_PULSE_(CONSTITUTION)", "ID_FMP_POWER_13414", "Otherworldly Pulse"],
    rules: function(model) {
      model.statadd("Otherworldly Pulse:key ability", "Constitution");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Otherworldly Pulse (Intelligence)"] = new RulesElement({
    name: "Otherworldly Pulse (Intelligence)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_OTHERWORLDLY_PULSE_(INTELLIGENCE)",
    source: "Psionic Power",
    categories: ["Otherworldly Pulse (Intelligence)", "ID_INTERNAL_CLASS_FEATURE_OTHERWORLDLY_PULSE_(INTELLIGENCE)", "ID_FMP_POWER_13414", "Otherworldly Pulse"],
    rules: function(model) {
      model.statadd("Otherworldly Pulse:key ability", "Intelligence");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Perfect Resilience"] = new RulesElement({
    name: "Perfect Resilience",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3134",
    source: "Psionic Power",
    categories: ["Perfect Resilience", "ID_FMP_CLASS_FEATURE_3134", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Perfection in Action"] = new RulesElement({
    name: "Perfection in Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3142",
    source: "Psionic Power",
    categories: ["Perfection in Action", "ID_FMP_CLASS_FEATURE_3142", "24"],
    rules: function(model) {
      model.statadd("Action Point", "Perfection in Action:When you reach a milestone, you gain 2 action points instead of 1 action point. When you reach a second milestone, you can spend up to 2 action points in the same encounter.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Persistent Harrier"] = new RulesElement({
    name: "Persistent Harrier",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2936",
    source: "Psionic Power",
    categories: ["Persistent Harrier", "ID_FMP_CLASS_FEATURE_2936", "ID_FMP_CLASS_FEATURE_2175", "Psionic Study", "1"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13024"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Pouncing Action"] = new RulesElement({
    name: "Pouncing Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3084",
    source: "Psionic Power",
    categories: ["Pouncing Action", "ID_FMP_CLASS_FEATURE_3084", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Pouncing Action:When you spend an action point to make a charge attack, you move your speed + 2 as part of the charge, your movement for the charge doesn't provoke opportunity attacks, and you can reroll one attack roll made as part of the charge.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Psionic Skill (Acrobatics)"] = new RulesElement({
    name: "Psionic Skill (Acrobatics)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_PSIONIC_SKILL_(ACROBATICS)",
    source: "Psionic Power",
    categories: ["Psionic Skill (Acrobatics)", "ID_INTERNAL_CLASS_FEATURE_PSIONIC_SKILL_(ACROBATICS)", "ID_FMP_FEAT_3312", "Psionic Skill"],
    rules: function(model) {
      model.statadd("Acrobatics Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Psionic Skill (Arcana)"] = new RulesElement({
    name: "Psionic Skill (Arcana)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_PSIONIC_SKILL_(ARCANA)",
    source: "Psionic Power",
    categories: ["Psionic Skill (Arcana)", "ID_INTERNAL_CLASS_FEATURE_PSIONIC_SKILL_(ARCANA)", "ID_FMP_FEAT_3312", "Psionic Skill"],
    rules: function(model) {
      model.statadd("Arcana Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Psionic Skill (Athletics)"] = new RulesElement({
    name: "Psionic Skill (Athletics)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_PSIONIC_SKILL_(ATHLETICS)",
    source: "Psionic Power",
    categories: ["Psionic Skill (Athletics)", "ID_INTERNAL_CLASS_FEATURE_PSIONIC_SKILL_(ATHLETICS)", "ID_FMP_FEAT_3312", "Psionic Skill"],
    rules: function(model) {
      model.statadd("Athletics Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Psionic Skill (Bluff)"] = new RulesElement({
    name: "Psionic Skill (Bluff)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_PSIONIC_SKILL_(BLUFF)",
    source: "Psionic Power",
    categories: ["Psionic Skill (Bluff)", "ID_INTERNAL_CLASS_FEATURE_PSIONIC_SKILL_(BLUFF)", "ID_FMP_FEAT_3312", "Psionic Skill"],
    rules: function(model) {
      model.statadd("Bluff Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Psionic Skill (Diplomacy)"] = new RulesElement({
    name: "Psionic Skill (Diplomacy)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_PSIONIC_SKILL_(DIPLOMACY)",
    source: "Psionic Power",
    categories: ["Psionic Skill (Diplomacy)", "ID_INTERNAL_CLASS_FEATURE_PSIONIC_SKILL_(DIPLOMACY)", "ID_FMP_FEAT_3312", "Psionic Skill"],
    rules: function(model) {
      model.statadd("Diplomacy Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Psionic Skill (Dungeoneering)"] = new RulesElement({
    name: "Psionic Skill (Dungeoneering)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_PSIONIC_SKILL_(DUNGEONEERING)",
    source: "Psionic Power",
    categories: ["Psionic Skill (Dungeoneering)", "ID_INTERNAL_CLASS_FEATURE_PSIONIC_SKILL_(DUNGEONEERING)", "ID_FMP_FEAT_3312", "Psionic Skill"],
    rules: function(model) {
      model.statadd("Dungeoneering Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Psionic Skill (Endurance)"] = new RulesElement({
    name: "Psionic Skill (Endurance)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_PSIONIC_SKILL_(ENDURANCE)",
    source: "Psionic Power",
    categories: ["Psionic Skill (Endurance)", "ID_INTERNAL_CLASS_FEATURE_PSIONIC_SKILL_(ENDURANCE)", "ID_FMP_FEAT_3312", "Psionic Skill"],
    rules: function(model) {
      model.statadd("Endurance Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Psionic Skill (Heal)"] = new RulesElement({
    name: "Psionic Skill (Heal)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_PSIONIC_SKILL_(HEAL)",
    source: "Psionic Power",
    categories: ["Psionic Skill (Heal)", "ID_INTERNAL_CLASS_FEATURE_PSIONIC_SKILL_(HEAL)", "ID_FMP_FEAT_3312", "Psionic Skill"],
    rules: function(model) {
      model.statadd("Heal Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Psionic Skill (History)"] = new RulesElement({
    name: "Psionic Skill (History)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_PSIONIC_SKILL_(HISTORY)",
    source: "Psionic Power",
    categories: ["Psionic Skill (History)", "ID_INTERNAL_CLASS_FEATURE_PSIONIC_SKILL_(HISTORY)", "ID_FMP_FEAT_3312", "Psionic Skill"],
    rules: function(model) {
      model.statadd("History Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Psionic Skill (Insight)"] = new RulesElement({
    name: "Psionic Skill (Insight)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_PSIONIC_SKILL_(INSIGHT)",
    source: "Psionic Power",
    categories: ["Psionic Skill (Insight)", "ID_INTERNAL_CLASS_FEATURE_PSIONIC_SKILL_(INSIGHT)", "ID_FMP_FEAT_3312", "Psionic Skill"],
    rules: function(model) {
      model.statadd("Insight Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Psionic Skill (Intimidate)"] = new RulesElement({
    name: "Psionic Skill (Intimidate)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_PSIONIC_SKILL_(INTIMIDATE)",
    source: "Psionic Power",
    categories: ["Psionic Skill (Intimidate)", "ID_INTERNAL_CLASS_FEATURE_PSIONIC_SKILL_(INTIMIDATE)", "ID_FMP_FEAT_3312", "Psionic Skill"],
    rules: function(model) {
      model.statadd("Intimidate Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Psionic Skill (Nature)"] = new RulesElement({
    name: "Psionic Skill (Nature)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_PSIONIC_SKILL_(NATURE)",
    source: "Psionic Power",
    categories: ["Psionic Skill (Nature)", "ID_INTERNAL_CLASS_FEATURE_PSIONIC_SKILL_(NATURE)", "ID_FMP_FEAT_3312", "Psionic Skill"],
    rules: function(model) {
      model.statadd("Nature Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Psionic Skill (Perception)"] = new RulesElement({
    name: "Psionic Skill (Perception)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_PSIONIC_SKILL_(PERCEPTION)",
    source: "Psionic Power",
    categories: ["Psionic Skill (Perception)", "ID_INTERNAL_CLASS_FEATURE_PSIONIC_SKILL_(PERCEPTION)", "ID_FMP_FEAT_3312", "Psionic Skill"],
    rules: function(model) {
      model.statadd("Perception Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Psionic Skill (Religion)"] = new RulesElement({
    name: "Psionic Skill (Religion)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_PSIONIC_SKILL_(RELIGION)",
    source: "Psionic Power",
    categories: ["Psionic Skill (Religion)", "ID_INTERNAL_CLASS_FEATURE_PSIONIC_SKILL_(RELIGION)", "ID_FMP_FEAT_3312", "Psionic Skill"],
    rules: function(model) {
      model.statadd("Religion Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Psionic Skill (Stealth)"] = new RulesElement({
    name: "Psionic Skill (Stealth)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_PSIONIC_SKILL_(STEALTH)",
    source: "Psionic Power",
    categories: ["Psionic Skill (Stealth)", "ID_INTERNAL_CLASS_FEATURE_PSIONIC_SKILL_(STEALTH)", "ID_FMP_FEAT_3312", "Psionic Skill"],
    rules: function(model) {
      model.statadd("Stealth Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Psionic Skill (Streetwise)"] = new RulesElement({
    name: "Psionic Skill (Streetwise)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_PSIONIC_SKILL_(STREETWISE)",
    source: "Psionic Power",
    categories: ["Psionic Skill (Streetwise)", "ID_INTERNAL_CLASS_FEATURE_PSIONIC_SKILL_(STREETWISE)", "ID_FMP_FEAT_3312", "Psionic Skill"],
    rules: function(model) {
      model.statadd("Streetwise Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Psionic Skill (Thievery)"] = new RulesElement({
    name: "Psionic Skill (Thievery)",
    type: "class feature",
    id: "ID_INTERNAL_CLASS_FEATURE_PSIONIC_SKILL_(THIEVERY)",
    source: "Psionic Power",
    categories: ["Psionic Skill (Thievery)", "ID_INTERNAL_CLASS_FEATURE_PSIONIC_SKILL_(THIEVERY)", "ID_FMP_FEAT_3312", "Psionic Skill"],
    rules: function(model) {
      model.statadd("Thievery Misc", 2, "Feat");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Psychic Resilience"] = new RulesElement({
    name: "Psychic Resilience",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3131",
    source: "Psionic Power",
    categories: ["Psychic Resilience", "ID_FMP_CLASS_FEATURE_3131", "11"],
    rules: function(model) {
      model.statadd("Psychic Resilience", function() { return model.stat("HALF-LEVEL"); });
      model.statadd("Psychic Resilience", 5);
      model.statadd("resist:psychic", function() { return model.stat("Psychic Resilience"); }, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Psychic Vampire"] = new RulesElement({
    name: "Psychic Vampire",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2933",
    source: "Psionic Power",
    categories: ["Psychic Vampire", "ID_FMP_CLASS_FEATURE_2933", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Quicksilver Action"] = new RulesElement({
    name: "Quicksilver Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2940",
    source: "Psionic Power",
    categories: ["Quicksilver Action", "ID_FMP_CLASS_FEATURE_2940", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Quicksilver Action:When you spend an action point to take an extra action, you can shift a number of squares equal to your Charisma modifier before or after the extra action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Quicksilver Dance"] = new RulesElement({
    name: "Quicksilver Dance",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2941",
    source: "Psionic Power",
    categories: ["Quicksilver Dance", "ID_FMP_CLASS_FEATURE_2941", "11"],
    rules: function(model) {
      model.statadd("AC", function() { /* against opportunity attacks */ return 4; });
      model.statadd("Fortitude Defense", function() { /* against opportunity attacks */ return 4; });
      model.statadd("Reflex Defense", function() { /* against opportunity attacks */ return 4; });
      model.statadd("Will Defense", function() { /* against opportunity attacks */ return 4; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Reflexive Action"] = new RulesElement({
    name: "Reflexive Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2930",
    source: "Psionic Power",
    categories: ["Reflexive Action", "ID_FMP_CLASS_FEATURE_2930", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Reflexive Action:Whenever you are damaged by a melee attack, you can spend an action point to use an unaugmented ardent at-will power as an immediate reaction.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Repletion"] = new RulesElement({
    name: "Repletion",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3132",
    source: "Psionic Power",
    categories: ["Repletion", "ID_FMP_CLASS_FEATURE_3132", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Resilient Creation"] = new RulesElement({
    name: "Resilient Creation",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3125",
    source: "Psionic Power",
    categories: ["Resilient Creation", "ID_FMP_CLASS_FEATURE_3125", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Resurging Action"] = new RulesElement({
    name: "Resurging Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3133",
    source: "Psionic Power",
    categories: ["Resurging Action", "ID_FMP_CLASS_FEATURE_3133", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Resurging Action:You can spend an action point to regain 2 power points instead of taking an extra action.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Riddle of Awareness"] = new RulesElement({
    name: "Riddle of Awareness",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3088",
    source: "Psionic Power",
    categories: ["Riddle of Awareness", "ID_FMP_CLASS_FEATURE_3088", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Riddle of Conversation"] = new RulesElement({
    name: "Riddle of Conversation",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3087",
    source: "Psionic Power",
    categories: ["Riddle of Conversation", "ID_FMP_CLASS_FEATURE_3087", "11"],
    rules: function(model) {
      model.statadd("Bluff Misc", 2);
      model.statadd("Diplomacy Misc", 2);
      model.statadd("Insight Misc", 2);
      model.statadd("Intimidate Misc", 2);
      model.select('Skill Training', 1, {
        filter: function(model, element) { return (((element.hasCategory("ID_FMP_SKILL_3") || element.hasCategory("ID_FMP_SKILL_6")) || element.hasCategory("ID_FMP_SKILL_13")) || element.hasCategory("ID_FMP_SKILL_14")); }
      });
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
      // unsupported rule: cbimporter.Rules.ModifyRule
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Rouse the Storm"] = new RulesElement({
    name: "Rouse the Storm",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2945",
    source: "Psionic Power",
    categories: ["Rouse the Storm", "ID_FMP_CLASS_FEATURE_2945", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Shaper Focus"] = new RulesElement({
    name: "Shaper Focus",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3097",
    source: "Psionic Power",
    categories: ["Shaper Focus", "ID_FMP_CLASS_FEATURE_3097", "ID_FMP_CLASS_FEATURE_1810", "Discipline Focus", "1"],
    rules: function(model) {
      model.grant(elements.id["ID_FMP_POWER_13300"]);
      model.grant(elements.id["ID_FMP_POWER_13301"]);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Shared Senses"] = new RulesElement({
    name: "Shared Senses",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2931",
    source: "Psionic Power",
    categories: ["Shared Senses", "ID_FMP_CLASS_FEATURE_2931", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Soaring Blade Style"] = new RulesElement({
    name: "Soaring Blade Style",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3080",
    source: "Psionic Power",
    categories: ["Soaring Blade Style", "ID_FMP_CLASS_FEATURE_3080", "11"],
    rules: function(model) {
      model.statadd("Acrobatics Misc", 3);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Soaring Blade Training"] = new RulesElement({
    name: "Soaring Blade Training",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3081",
    source: "Psionic Power",
    categories: ["Soaring Blade Training", "ID_FMP_CLASS_FEATURE_3081", "11"],
    rules: function(model) {
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_MILITARY_HEAVY_BLADE"]);
      model.grant(elements.id["ID_INTERNAL_PROFICIENCY_SIMPLE_HEAVY_BLADE"]);
      model.statadd("ID_FMP_CLASS_362-Light Blade", "Heavy Blade group");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Storm Scion"] = new RulesElement({
    name: "Storm Scion",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2944",
    source: "Psionic Power",
    categories: ["Storm Scion", "ID_FMP_CLASS_FEATURE_2944", "11"],
    rules: function(model) {
      model.statadd("resist:lightning", function() { return model.stat("Constitution modifier"); }, "resist");
      model.statadd("resist:thunder", function() { return model.stat("Constitution modifier"); }, "resist");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Superior Action"] = new RulesElement({
    name: "Superior Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2947",
    source: "Psionic Power",
    categories: ["Superior Action", "ID_FMP_CLASS_FEATURE_2947", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Superior Action:When you spend an action point to make an attack, you gain a +4 power bonus to the attack roll and you regain hit points equal to twice your Constitution modifier.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Terrifying Action"] = new RulesElement({
    name: "Terrifying Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3135",
    source: "Psionic Power",
    categories: ["Terrifying Action", "ID_FMP_CLASS_FEATURE_3135", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Terrifying Action:When you spend an action point to take an extra action, you mark any enemy adjacent to you until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["The Mind's Shining Corridors"] = new RulesElement({
    name: "The Mind's Shining Corridors",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3145",
    source: "Psionic Power",
    categories: ["The Mind's Shining Corridors", "ID_FMP_CLASS_FEATURE_3145", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Tiger Claw Style"] = new RulesElement({
    name: "Tiger Claw Style",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3083",
    source: "Psionic Power",
    categories: ["Tiger Claw Style", "ID_FMP_CLASS_FEATURE_3083", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Tiger's Endurance"] = new RulesElement({
    name: "Tiger's Endurance",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3085",
    source: "Psionic Power",
    categories: ["Tiger's Endurance", "ID_FMP_CLASS_FEATURE_3085", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Topaz Flare"] = new RulesElement({
    name: "Topaz Flare",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3158",
    source: "Psionic Power",
    categories: ["Topaz Flare", "ID_FMP_CLASS_FEATURE_3158", "30"]
  });
  byID[te.id] = te;
  
  te = class_feature["Topaz Focus"] = new RulesElement({
    name: "Topaz Focus",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3156",
    source: "Psionic Power",
    categories: ["Topaz Focus", "ID_FMP_CLASS_FEATURE_3156", "21"],
    rules: function(model) {
      model.statadd("AC", 1);
      model.statadd("Will Defense", function() { /* against aberrant creatures */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Topaz Meditation"] = new RulesElement({
    name: "Topaz Meditation",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3157",
    source: "Psionic Power",
    categories: ["Topaz Meditation", "ID_FMP_CLASS_FEATURE_3157", "24"],
    rules: function(model) {
      model.statadd("Power Points", 2);
      model.statadd("AC", 2);
      model.statadd("Fortitude Defense", 2);
      model.statadd("Reflex Defense", 2);
      model.statadd("Will Defense", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Torpid Action"] = new RulesElement({
    name: "Torpid Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2934",
    source: "Psionic Power",
    categories: ["Torpid Action", "ID_FMP_CLASS_FEATURE_2934", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Torpid Action:When you spend an action point to make an attack and the attack hits, each enemy within 3 squares of you is slowed until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Ubiquity"] = new RulesElement({
    name: "Ubiquity",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3149",
    source: "Psionic Power",
    categories: ["Ubiquity", "ID_FMP_CLASS_FEATURE_3149", "24"]
  });
  byID[te.id] = te;
  
  te = class_feature["Unfettered Movement"] = new RulesElement({
    name: "Unfettered Movement",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2942",
    source: "Psionic Power",
    categories: ["Unfettered Movement", "ID_FMP_CLASS_FEATURE_2942", "16"]
  });
  byID[te.id] = te;
  
  te = class_feature["Unnatural Perception"] = new RulesElement({
    name: "Unnatural Perception",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3136",
    source: "Psionic Power",
    categories: ["Unnatural Perception", "ID_FMP_CLASS_FEATURE_3136", "11"],
    rules: function(model) {
      model.statadd("Insight Misc", 2);
      model.statadd("Perception Misc", 2);
      model.statadd("Initiative Misc", 2);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Unnerving Vision"] = new RulesElement({
    name: "Unnerving Vision",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2921",
    source: "Psionic Power",
    categories: ["Unnerving Vision", "ID_FMP_CLASS_FEATURE_2921", "11"]
  });
  byID[te.id] = te;
  
  te = class_feature["Unseen Action (Unseen Hand)"] = new RulesElement({
    name: "Unseen Action (Unseen Hand)",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3091",
    source: "Psionic Power",
    categories: ["Unseen Action (Unseen Hand)", "ID_FMP_CLASS_FEATURE_3091", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Unseen Action (Unseen Hand):When you spend an action point, you become invisible until the end of your next turn.");
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Warped Mind"] = new RulesElement({
    name: "Warped Mind",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3137",
    source: "Psionic Power",
    categories: ["Warped Mind", "ID_FMP_CLASS_FEATURE_3137", "16"],
    rules: function(model) {
      model.statadd("Will Defense", 1);
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Wary Mind"] = new RulesElement({
    name: "Wary Mind",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_2932",
    source: "Psionic Power",
    categories: ["Wary Mind", "ID_FMP_CLASS_FEATURE_2932", "16"],
    rules: function(model) {
      model.statadd("attack rolls", function() { /* to opportunity attacks and immediate action attacks */ return 2; });
    }
  });
  byID[te.id] = te;
  
  te = class_feature["Wildfire Action"] = new RulesElement({
    name: "Wildfire Action",
    type: "class feature",
    id: "ID_FMP_CLASS_FEATURE_3121",
    source: "Psionic Power",
    categories: ["Wildfire Action", "ID_FMP_CLASS_FEATURE_3121", "11"],
    rules: function(model) {
      model.statadd("Action Point", "Wildfire Action:Whenever you spend an action point to take an extra action, each enemy adjacent to you takes fire damage equal to your Wisdom modifier. If you spend this action point to use a psion attack power, choose one target you hit with that attack. Each creature adjacent to that target takes fire damage equal to your Intelligence modifier.");
    }
  });
  byID[te.id] = te;
  
  
})(this);
