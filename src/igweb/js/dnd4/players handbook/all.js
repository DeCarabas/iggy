define(
  [
    './alignment',
    './Armor',
    './Build',
    './Build Suggestions',
    './Class',
    './class feature',
    './CountsAsClass',
    './CountsAsRace',
    './Deity',
    './Epic Destiny',
    './Feat',
    './Gear',
    './Grants',
    './Internal',
    './Language',
    './Magic Item',
    './Paragon Path',
    './Power',
    './Power Source',
    './Race',
    './Racial Trait',
    './Ritual',
    './Ritual Scroll',
    './Role',
    './Skill',
    './Weapon'
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
