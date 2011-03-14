//
// This contains the model for dnd40. These are useful global
// functions, and extensions that are specific to 4e. The actual data
// is in dnd4data.js.
//
"use strict";
(function(global, undefined) {

   // Global functions, for more interesting rules?
   //
   function abilitymod(value) {
     return Math.floor((value - 10) / 2);
   };

   global.abilitymod = abilitymod;

   // Here are our extensions for the model, specific for 4e.
   //
   global.Model.prototype.wearing = function(thng, arr) {
     // TBD
   };
   Object.defineProperty(global.Model.prototype, "class", {
     get: function() { 
       // TBD
     }
   });
    

})(this);

