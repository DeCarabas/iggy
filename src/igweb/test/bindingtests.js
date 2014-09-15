
// These are for QUnit: http://docs.jquery.com/QUnit
/*global module test equal*/
define(['../js/binding', '../js/engine', 'jquery'], function(binding, engine, $) {

  module("Binding tests");
  test('data-boundStat', function () {
    $('#qunit-fixture').html('<input id="test-x" data-boundStat="x"></input><input id="test-y" data-boundStat="y"></input>');
    var element = new engine.RulesElement({
      rules: function(model) {
        model.statadd('x', 6);
        model.statadd('y', function() { return model.stat('x') + 2; });
      }
    });

    var model = new engine.Model();

    binding.updateFields(model);
    equal($("#test-x").val(), "0", "Before grant, x value");
    equal($("#test-y").val(), "0", "Before grant, y value");
    
    model.grant(element);
    binding.updateFields(model);
    
    equal($("#test-x").val(), "6", "After grant, x value");
    equal($("#test-y").val(), "8", "After grant, y value");
  });

  test('data-boundStatBase', function () {
    $('#qunit-fixture').html('<input id="test-x" data-boundStatBase="x"></input><input id="test-y" data-boundStat="x"></input>');
    var element = new engine.RulesElement({
      rules: function(model) {
        model.statadd('x', 6);
      }
    });

    var model = new engine.Model();

    binding.bindFields(model);
    binding.updateFields(model);
    equal($("#test-x").val(), "0", "Before grant, x value");
    equal($("#test-y").val(), "0", "Before grant, y value");

    $("#test-x").val(15);
    $("#test-x").change();
    binding.updateFields(model);

    equal($("#test-x").val(), "15", "After set base, x value");
    equal($("#test-y").val(), "15", "After set base, y value");

    model.grant(element);
    binding.updateFields(model);
    
    equal($("#test-x").val(), "15", "After grant, x value");
    equal($("#test-y").val(), "21", "After grant, y value");
  });

});

