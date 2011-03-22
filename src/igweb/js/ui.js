//
// This is a little place to play with ui.
//
(function(global, undefined) {

   var model = new Model();
   model.grant(global.elements.types["Level"]["1"]);

   function defaultTemplate(element) {
     if (element.compendiumUrl) {
       return '<iframe src="'+element.compendiumUrl+'" width="100%" height="100%" />';
     } else {
       return '<h3>'+element.name+'<h3>' +
              '<p class=flavor>'+element.flavor+'</p>'+
              '<div class=traits />';       
     }
   }

   function initChoice(options) {
     var listSelector = options.listSelector;
     var type = options.type;
     var detailSelector = options.detailSelector;
     var templateFunc = options.templateFunc || defaultTemplate;

     var list = $(listSelector);
     list.empty();

     $(detailSelector).empty();

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

         if (options.onChanged) { options.onChanged(); }
       });

       list.append(ehe);
       ok = !ok;
     });

     $(detailSelector).css('height', $(listSelector).css('height'));
   }

   function initRaceList() {
     initChoice({
       listSelector: "#raceList", 
       type: "Race", 
       detailSelector: "#raceDetail"
     });
   }

   function initClassList() {
     initChoice({
       listSelector: "#classList", 
       type: "Class",
       detailSelector: "#classDetail",
       onChanged: function() {
         var classFeatureUI = $('#classFeatureDetailBlock');
         if (model.getChoices('class feature').length) {
           classFeatureUI.show();
           initChoice({
             listSelector: "#classFeatureList",
             type: "class feature",
             detailSelector: "#classFeatureDetail"
           });
         } else {
           classFeatureUI.hide();
         }
       }
     });
   }

   initClassList();
   initRaceList();
   $('.initialHidden').hide();
})(this);


