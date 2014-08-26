define(
  [
    './adventurers vault 2/all',
    './adventurers vault/all',
    './arcane power/all',
    './core/all',
    './demonomicon/all',
    './divine power/all',
    './draconomicon_ chromatic dragons/all',
    './draconomicon_ metallic dragons/all',
    './dragon magazine 364/all',
    './dragon magazine 365/all',
    './dragon magazine 366/all',
    './dragon magazine 367/all',
    './dragon magazine 368/all',
    './dragon magazine 369/all',
    './dragon magazine 370/all',
    './dragon magazine 371/all',
    './dragon magazine 372/all',
    './dragon magazine 373/all',
    './dragon magazine 374/all',
    './dragon magazine 375/all',
    './dragon magazine 376/all',
    './dragon magazine 377/all',
    './dragon magazine 378/all',
    './dragon magazine 379/all',
    './dragon magazine 380/all',
    './dragon magazine 381/all',
    './dragon magazine 382/all',
    './dragon magazine 383/all',
    './dragon magazine 384/all',
    './dragon magazine 385/all',
    './dragon magazine 386/all',
    './dragon magazine 387/all',
    './dragon magazine 388/all',
    './dragon magazine 389/all',
    './dragon magazine 390/all',
    './dragon magazine annual 2009/all',
    './dungeon delve/all',
    './dungeon magazine 155/all',
    './dungeon magazine 156/all',
    './dungeon magazine 159/all',
    './dungeon magazine 160/all',
    './dungeon magazine 162/all',
    './dungeon magazine 165/all',
    './dungeon magazine 170/all',
    './dungeon magazine 171/all',
    './dungeon magazine 172/all',
    './dungeon magazine 173/all',
    './dungeon magazine 175/all',
    './dungeon magazine 176/all',
    './dungeon magazine 177/all',
    './dungeon magazine 178/all',
    './dungeon magazine 179/all',
    './dungeon magazine 180/all',
    './dungeon magazine 181/all',
    './dungeon masters guide 2/all',
    './dungeon masters guide/all',
    './e1 deaths reach/all',
    './e2 kingdom of the ghouls/all',
    './e3 prince of undeath/all',
    './eberron players guide/all',
    './forgotten realms campaign guide/all',
    './forgotten realms players guide/all',
    './fr1 scepter tower of spellgard/all',
    './h1 keep on the shadowfell/all',
    './h2 thunderspire labyrinth/all',
    './h3 pyramid of shadows/all',
    './hammerfast/all',
    './hs1 the slaying stone/all',
    './manual of the planes/all',
    './martial power 2/all',
    './martial power/all',
    './monster manual 2/all',
    './monster manual/all',
    './open grave_ secrets of the undead/all',
    './p1 king of the trollhaunt warrens/all',
    './p2 demon queen enclave/all',
    './p3 assault on nightwyrm fortress/all',
    './ph heroes_ series 1/all',
    './ph heroes_ series 2/all',
    './players handbook 2/all',
    './players handbook 3/all',
    './players handbook races_ dragonborn/all',
    './players handbook races_ tiefling/all',
    './players handbook/all',
    './primal power/all',
    './psionic power/all',
    './revenge of the giants/all',
    './seekers of the ashen crown/all',
    './the plane below_ secrets of the elemental chaos/all',
    './tomb of horrors/all',
    './underdark/all',
    './vor rukoth_ an ancient ruins adventure site/all'
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
