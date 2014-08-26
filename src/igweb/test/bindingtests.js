
// These are for QUnit: http://docs.jquery.com/QUnit

define(['../js/binding', '../js/engine', 'jquery'], function(binding, engine, $) {

  module("Binding tests");
  test('Basic tests', function () {
    $('#qunit-fixture').html('<p id="test-x" x-score="x"></p><p id="test-y" x-score="y"></p>');
    var element = new engine.RulesElement({
      rules: function(model) {
        model.statadd('x', 6);
        model.statadd('y', function() { return model.stat('x') + 2; });
      }
    });

    var model = new engine.Model();

    binding.updateStats(model);
    equal($("#test-x").text(), "0", "Before grant, x value");
    equal($("#test-y").text(), "0", "Before grant, y value");
    
    model.grant(element);
    binding.updateStats(model);
    
    equal($("#test-x").text(), "6", "After grant, x value");
    equal($("#test-y").text(), "8", "After grant, y value");
  });

});

