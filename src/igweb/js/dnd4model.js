//
// This contains the model for dnd40. These are useful global functions, and
// extensions that are specific to 4e. The actual data is provided by
// dnd4/all.js, and those modules require this one.
//
/*global define*/
define(['./engine'], function(engine) {
  "use strict";

  // Helper functions, specifically for 4e.
  //
  function abilitymod(value) {
    return Math.floor((value - 10) / 2);
  }

  // Here are our extensions for the model, specific for 4e.
  //
  engine.Model.prototype.wearing = function(/*thng, arr*/) {
    // TBD
  };
  Object.defineProperty(engine.Model.prototype, "class", {
    get: function() { 
      // TBD
    }
  });

  return {
    abilitymod: abilitymod
  };
});
