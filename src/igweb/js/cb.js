// Core builder.

requirejs.config({
  baseUrl: 'js',
  paths: {
    // the left side is the module ID, the right side is the path to the
    // jQuery file, relative to baseUrl.  Also, the path should NOT include
    // the '.js' file extension. 
    jquery: 'libs/jquery-1.11.1.min',
  },
  map: {
    // Everybody who asks for jquery gets 'libs/jquery-private'...
    '*': { 'jquery': 'libs/jquery-private' },
    // ...except libs/jquery-private, who gets the real one.
    'libs/jquery-private': { 'jquery': 'jquery' }
  }
});

requirejs(
  ['./sheetui', './engine', './dnd4/all'],
  function(sheetui, engine, elements) {

    // Kick it all off.
    var model = new engine.Model(elements);

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
    
    sheetui.bindFields(model);
    sheetui.setupUI(model);

    sheetui.wizardNext();
});
