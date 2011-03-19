//
// This is a little place to play with ui.
//
(function(global, undefined) {

   var model = new Model();
   model.grant(global.elements.types["Level"]["1"]);

   function defaultTemplate(element) {
     return '<h3>'+element.name+'<h3>' +
            '<p class=flavor>'+element.flavor+'</p>'+
            '<div class=traits />';
   }

   function initChoice(listSelector, type, detailSelector, templateFunc) {
     templateFunc = templateFunc || defaultTemplate;
     var list = $(listSelector);
     var choice = model.getChoices(type)[0];
     var ok = false;
     choice.getValidElements().forEach(function(element) {
       var eh = '<li' + (ok ? ' class=list-alternate' : '') + '>' + element.name + '</li>';
       var ehe = $(eh);

       ehe.mouseenter(function() { ehe.addClass('list-hover'); });
       ehe.mouseleave(function() { ehe.removeClass('list-hover'); });
       ehe.click(function() {
         $(detailSelector).html(templateFunc(element));
         choice.choice = element; // TODO: Make this less live?
       });

       list.append(ehe);
       ok = !ok;
     });       
   }

   function initRaceList() { initChoice("#raceList", "Race", "#raceDetail"); }
   function initClassList() { initChoice("#classList", "Class", "#classDetail"); }

   initClassList();
   initRaceList();

})(this);


