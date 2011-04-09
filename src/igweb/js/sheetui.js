//
// Character builder UI
//
(function(global, undefined) {

   var model = new Model();
   model.grant(global.elements.types["Level"]["1"]);

   function updateFields() {
     $("[data-boundStat]").each(function() {
       var elem = $(this);
       elem.val(model.stat(elem.attr("data-boundStat")));
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
     $("[data-boundStat],[data-boundText]").each(function() {
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


