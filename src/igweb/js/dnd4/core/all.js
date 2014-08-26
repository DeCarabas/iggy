define(
  [
    './Ability Increase (Level 14)',
    './Ability Increase (Level 18)',
    './Ability Increase (Level 24)',
    './Ability Increase (Level 28)',
    './Ability Increase (Level 4)',
    './Ability Increase (Level 8)',
    './Ability Score',
    './Background Association',
    './Background Choice',
    './Category',
    './Class',
    './class feature',
    './Companion Ability Increase (Level 14)',
    './Companion Ability Increase (Level 18)',
    './Companion Ability Increase (Level 24)',
    './Companion Ability Increase (Level 28)',
    './Companion Ability Increase (Level 4)',
    './Companion Ability Increase (Level 8)',
    './CountsAsClass',
    './CountsAsFeature',
    './CountsAsPact',
    './Domain',
    './Feat',
    './Gender',
    './Information',
    './Internal',
    './Language',
    './Level',
    './Level1Rules',
    './Money',
    './Multiclass',
    './Paragon Path',
    './Power',
    './Proficiency',
    './Race Ability Bonus',
    './Racial Trait',
    './Size',
    './Skill Training',
    './Skill Usage',
    './source',
    './Tier',
    './Vision',
    './Weapon Group',
    './Weapon Property'
  ],function() {
    var mergedTypes = {};
    var mergedIds = {};
    
    var modules = Array.prototype.slice.call(arguments);
    modules.forEach(function(mod) {
      var type, name, id, mt, ot;
      for(type in mod.types) {
        mt = mergedTypes[type] || (mergedTypes[type] = {});
        ot = mod.types[type];
        for(name in ot) {
          mt[name] = ot[name];
        }
      }
      for(id in mod.id) {
        mergedIds[id] = mod.id[id];
      }
    });
    
    return {
      types: mergedTypes,
      id: mergedIds
    };
  });
