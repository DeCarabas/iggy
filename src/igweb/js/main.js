// This file is not a module; it exists to start the app, that actually lives
// in a module.  (Why does the app live in a module? So I can import it and
// hang debugging stuff off the side, of course...)
//
require.config({
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

require(['./cb'], function(cb) {
  cb.start();
});
