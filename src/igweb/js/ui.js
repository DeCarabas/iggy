//
// This is a little place to play with ui.
//
(function(global, undefined) {

   var model = new Model();

   model.grant(global.elements.types["Level"]["1"]);

   var classList = $("#classList");
   var classChoice = model.getChoices("Class")[0];
   var ok = false;
   classChoice.getValidElements().forEach(function(element) {
       var eh = '<li' + (ok ? ' class=list-alternate' : '') + '>' + element.name + '</li>';
       var ehe = $(eh);

       ehe.mouseenter(function() { ehe.addClass('list-hover'); });
       ehe.mouseleave(function() { ehe.removeClass('list-hover'); });
       ehe.click(function() {
         var html = '<h3>'+element.name+'<h3>' +
                    '<p class=flavor>'+element.flavor+'</p>'+
                    '<div class=traits />';
         $('#classDetail').html(html);
       });

       classList.append(ehe);
       ok = !ok;
   });

})(this);


