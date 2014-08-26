require.config({
  baseUrl: '.',
  paths: {
    // the left side is the module ID, the right side is the path to the
    // jQuery file, relative to baseUrl.  Also, the path should NOT include
    // the '.js' file extension. 
    jquery:      '../js/libs/jquery-1.11.1.min',
    '../js/log': './testlog',
  },
  map: {
    // Everybody who asks for jquery gets 'libs/jquery-private'...
    '*': { 'jquery': '../js/libs/jquery-private' },
    // ...except libs/jquery-private, who gets the real one.
    '../js/libs/jquery-private': { 'jquery': 'jquery' }
  }
});

var testModules = [
  'bindingtests',
  'dnd4tests',
  'modeltests'
];

require(testModules, function() {
    QUnit.start();
});
