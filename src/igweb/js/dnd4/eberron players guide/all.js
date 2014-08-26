define(
  [
    './Background',
    './Build',
    './Build Suggestions',
    './Class',
    './class feature',
    './Companion',
    './CountsAsClass',
    './CountsAsRace',
    './Deity',
    './Epic Destiny',
    './Feat',
    './Gear',
    './Grants',
    './Information',
    './Internal',
    './Language',
    './Magic Item',
    './Paragon Path',
    './Power',
    './Race',
    './Racial Trait',
    './Ritual',
    './Ritual Scroll',
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
