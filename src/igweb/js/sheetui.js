//
// Character builder UI
//
(function(global, undefined) {

   var model = new Model();
   model.grant(global.elements.types["Level"]["1"]);
   

   function updateFields() {
     $("[data-stat]").each(function() {
       var elem = $(this);
       elem.val(model.stat(elem.attr("data-stat")));
     });
   }

   function bindFields() {
     $("[data-stat]").each(function () {
       var elem = $(this);
       elem.change(function() {
         model.override(elem.attr("data-stat"), elem.val());
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


