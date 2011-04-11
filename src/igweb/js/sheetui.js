//
// Character builder UI
//
(function(global, undefined) {

   var showZero = true; // For debugging

   var model = new Model();

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
       return Math.floor(model.stat("Hit Points") / 2);
     },
     surgeValue: function() {
       return Math.floor(model.stat("Hit Points") / 4);
     },
     passiveInsight: function() {
       return model.stat("Insight") + 10;
     },
     passivePerception: function() {
       return model.stat("Perception") + 10;
     }
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

       if (value !== 0 || showZero) {
         elem.val(value);
       } else {
         elem.val("");
       }
     });

     $("[data-special]").each(function() {
       var elem = $(this);
       elem.val(special[elem.attr("data-special")]());
     });

     $("[data-boundText]").each(function() {
       var elem = $(this);
       elem.val(model.stat(elem.attr("data-boundText")) || "");
     });

     $("[data-boundGrant]").each(function() {
       var elem = $(this);
       var grants = model.getGrantsByType(elem.attr("data-boundGrant"));

       var result = "";
       grants.forEach(function (grant) {
         if (result.length === 0) {
           result = grant.name;
         } else {
           result = result + ", " + grant.name;
         }
       });

       elem.val(result);
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

     $("[data-boundStat],[data-special],[data-boundGrant]").each(function() {
       this.readOnly = true;
     });
   };

   /* Haxors for now: initial setup to test binding */
   model.grant(global.elements.types["Level"]["1"]);
   model.grant(global.elements.types["Race"]["Elf"]);
   model.grant(global.elements.types["Class"]["Ranger"]);

   model.rawStatObject("dex").baseValue = 18;
   model.rawStatObject("str").baseValue = 13;
   model.rawStatObject("wis").baseValue = 13;
   model.rawStatObject("con").baseValue = 10;
   model.rawStatObject("int").baseValue = 10;
   model.rawStatObject("cha").baseValue = 8;

   bindFields();
   updateFields();
})(this);


