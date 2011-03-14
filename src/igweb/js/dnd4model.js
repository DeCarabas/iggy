//
// This contains the model for dnd40
//
(function(global, undefined) {

    function abilitymod(value) {
        return Math.floor((value - 10) / 2);
    };
    
    global.abilitymod = abilitymod;

   
    var elements = global.elements || (global.elements = {});
    var types = elements.types || (elements.types = {});
    var byID = elements.id || (elements.id = {});

    var Level = types["Level"] || (types["Level"] = {});
    var e = Level["1"] = new RulesElement({
        id: "ID_INTERNAL_LEVEL_1",
        rules: function(model) {
          // TODO:
        }
    });
    byID[e.id] = e;


})(this);

