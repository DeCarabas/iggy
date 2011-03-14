"use strict";
(function(global, undefined) {
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Level = types['Level'] || (types['Level'] = {});
  te = Level["1"] = new RulesElement({
    name: "1",
    type: "Level",
    id: "ID_INTERNAL_LEVEL_1",
    categories: ['1', 'ID_INTERNAL_LEVEL_1'],
    specifics: {
      "XP Needed": " 1000 "
    },
    rules: function(model) {
      model.alias('Strength', 'str');
      model.alias('Constitution', 'con');
      model.alias('Dexterity', 'dex');
      model.alias('Intelligence', 'int');
      model.alias('Wisdom', 'wis');
      model.alias('Charisma', 'cha');
      model.statadd('Strength modifier', function() { return abilitymod(model.stat('str')); });
      model.statadd('Dexterity modifier', function() { return abilitymod(model.stat('dex')); });
      model.statadd('Constitution modifier', function() { return abilitymod(model.stat('con')); });
      model.statadd('Intelligence modifier', function() { return abilitymod(model.stat('int')); });
      model.statadd('Wisdom modifier', function() { return abilitymod(model.stat('wis')); });
      model.statadd('Charisma modifier', function() { return abilitymod(model.stat('cha')); });
      model.alias('AC', 'Armor Class');
      model.alias('Fortitude Defense', 'Fortitude');
      model.alias('Reflex Defense', 'Reflex');
      model.alias('Will Defense', 'Will');
      model.statadd('Death Saves Count', 3);
      model.statadd('Level', 1);
      model.statadd('Hit Points', function() { return model.stat('Constitution'); });
      model.statadd('Hit Points', function() { return model.stat('_LEVEL-ONE-HPS'); });
      model.statadd('Healing Surges', function() { return abilitymod(model.stat('Constitution')); });
      model.statadd('Fortitude Defense', 10);
      model.statadd('Fortitude Defense', function() { return model.stat('HALF-LEVEL'); });
      model.statadd('Fortitude Defense', function() { return abilitymod(model.stat('str')); });
      model.statadd('Fortitude Defense', function() { return abilitymod(model.stat('con')); });
      model.statadd('Fortitude Defense', function() { return model.stat('Fortitude Defense Class Bonus'); });
      model.statadd('Reflex Defense', 10);
      model.statadd('Reflex Defense', function() { return model.stat('HALF-LEVEL'); });
      model.statadd('Reflex Defense', function() { return abilitymod(model.stat('dex')); });
      model.statadd('Reflex Defense', function() { return abilitymod(model.stat('int')); });
      model.statadd('Reflex Defense', function() { return model.stat('Reflex Defense Class Bonus'); });
      model.statadd('Will Defense', 10);
      model.statadd('Will Defense', function() { return model.stat('HALF-LEVEL'); });
      model.statadd('Will Defense', function() { return abilitymod(model.stat('wis')); });
      model.statadd('Will Defense', function() { return abilitymod(model.stat('cha')); });
      model.statadd('Will Defense', function() { return model.stat('Will Defense Class Bonus'); });
      model.statadd('AC', 10);
      model.statadd('AC', function() { return model.stat('HALF-LEVEL'); });
      model.statadd('AC', function() { 
        if (!(model.wearing('Armor', ['heavy']))) {
          return abilitymod(model.stat('dex'));
        } else return 0;
       });
      model.statadd('AC', function() { 
        if (!(model.wearing('Armor', ['heavy']))) {
          return abilitymod(model.stat('int'));
        } else return 0;
       });
      model.statadd('AC', function() { 
        if (model.wearing('Defensive')) {
          return 1;
        } else return 0;
       });
      model.statadd('Initiative', function() { return model.stat('HALF-LEVEL'); });
      model.statadd('Initiative', function() { return abilitymod(model.stat('dex')); });
      model.statadd('Initiative', function() { return model.stat('Initiative Misc'); });
      model.statadd('Ring Slots', 2);
      model.statadd('_BaseActionPoints', 1);
      model.grant(elements.id['ID_INTERNAL_LEVEL1RULES_LEVEL1RULES']);
      model.grant(elements.id['ID_INTERNAL_LEVEL1RULES_DETAILSRULES']);
      model.grant(elements.id['ID_INTERNAL_LEVEL1RULES_EXPANSION1']);
      model.grant(elements.id['ID_INTERNAL_LEVEL1RULES_EXPANSION2']);
      model.grant(elements.id['ID_INTERNAL_LEVEL1RULES_EXPANSION3']);
      model.grant(elements.id['ID_INTERNAL_LEVEL1RULES_EXPANSION4']);
      model.grant(elements.id['ID_INTERNAL_LEVEL1RULES_EXPANSION5']);
      model.select('Race', 1);
      model.select('Class', 1);
      model.select('Feat', 1);
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory(model.class.id) && element.hasCategory('encounter') && element.hasCategory('1')); }
      });
      model.select('Power', 1, {
        filter: function(model, element) { return (element.hasCategory(model.class.id) && element.hasCategory('daily') && element.hasCategory('1')); }
      });
      model.select('Deity', 1, {
        optional: true
      });
      model.statadd('XP Needed', 1000);
    }
  });
  byID[te.id] = te;
  
  
})(this);

