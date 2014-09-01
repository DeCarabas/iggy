// Core builder application
define(
  ['./sheetui', './engine', './dnd4/all'],
  function(sheetui, engine, elements) {
    var model = new engine.Model(elements);
    return {
        model: model,
        start: function start() {
            /* Haxors for now: initial setup to test binding */
            model.grant(elements.types["Level"]["1"]);
            //model.grant(elements.types["Race"]["Elf"]);
            //model.grant(elements.types["Class"]["Ranger"]);
            //model.getChoices("Class")[0].choice = elements.types["Class"]["Ranger"];
    
            model.rawStatObject("dex").baseValue = 18;
            model.rawStatObject("str").baseValue = 13;
            model.rawStatObject("wis").baseValue = 13;
            model.rawStatObject("con").baseValue = 10;
            model.rawStatObject("int").baseValue = 10;
            model.rawStatObject("cha").baseValue = 8;
    
            sheetui.setupUI(model);

            // sheetui.wizardNext();
        },

        dumpChoices: function dumpChoices() {
          model.dumpChoices();
        }
    };
});
