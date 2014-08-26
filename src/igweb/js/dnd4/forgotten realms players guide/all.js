define(
  [
    './Background',
    './Background Choice',
    './Build',
    './Build Suggestions',
    './Class',
    './class feature',
    './CountsAsClass',
    './CountsAsRace',
    './Epic Destiny',
    './Feat',
    './Grants',
    './Information',
    './Internal',
    './Language',
    './Paragon Path',
    './Power',
    './Pseudo Class',
    './Race',
    './Racial Trait',
    './Ritual',
    './Ritual Scroll'
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
