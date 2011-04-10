//
// Character builder UI
//
(function(global, undefined) {

   var model = new Model();
   model.grant(global.elements.types["Level"]["1"]);

   var special = {
     strHalfLevel: function() { 
       return model.stat("Strength modifier") + model.stat("HALF-LEVEL"); 
     },
     conHalfLevel: function() { 
       return model.stat("Constitution modifier") + model.stat("HALF-LEVEL"); 
     },
     dexHalfLevel: function() { 
       return model.stat("Dexterity modifier") + model.stat("HALF-LEVEL"); 
     },
     intHalfLevel: function() { 
       return model.stat("Intelligence modifier") + model.stat("HALF-LEVEL"); 
     },
     wisHalfLevel: function() { 
       return model.stat("Wisdom modifier") + model.stat("HALF-LEVEL"); 
     },
     chaHalfLevel: function() { 
       return model.stat("Charisma modifier") + model.stat("HALF-LEVEL"); 
     },
     tenHalfLevel: function() {
       return 10 + model.stat("HALF-LEVEL");
     },
     bloodiedHP: function() {
       return model.stat("Hit Points") / 2;
     },
     surgeValue: function() {
       return model.stat("Hit Points") / 4;
     },
   };

   function updateFields() {
     $("[data-boundStat]").each(function() {
       var value;
       var elem = $(this);
       var mod = elem.attr("data-statMod");
       if (mod) {
         var stat = model.rawStatObject(elem.attr("data-boundStat"));
         value = stat.getModifier(mod);
       } else {
         value = model.stat(elem.attr("data-boundStat"));         
       }

       elem.val(value);
     });

     $("[data-special]").each(function() {
       var elem = $(this);
       elem.val(special[elem.attr("data-special")]());
     });

     $("[data-boundText]").each(function() {
       var elem = $(this);
       elem.val(model.stat(elem.attr("data-boundStat")) || "");
     });

     $("[data-boundGrant]").each(function() {
       var elem = $(this);
       var grant = model.getGrantByType(elem.attr("data-boundGrant"));
       if (grant) {
         elem.val(grant.name);
       } else {
         elem.val("");
       }
     });
   }

   function bindFields() {
     // TODO: Stats aren't bound; need to validate integers and report
     // errors and the like. If only HTML5 <input type="number"
     // weren't so crap.
     //
     $("[data-boundText]").each(function() {
       var elem = $(this);
       elem.change(function() {
         model.override(elem.attr("data-boundStat"), elem.val());
         updateFields();
       });
     });
   };

   /* Haxors for now: initial setup to test binding */
   model.characterName = "Sarrat";
   model.playerName = "John Doty";

   bindFields();
   updateFields();
})(this);


