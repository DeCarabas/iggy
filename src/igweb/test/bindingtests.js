
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

  test('data-boundChoiceCheck', function () {
    $('#qunit-fixture').html(
      '<div id="test-x" data-boundChoiceCheck="TB:RY">'+
	    '<input type="checkbox" value="None" id="cb1" name="cb1" disabled="true" />'+
	    '<label for="cb1"></label>'+
      '</div>');

    var TA = {
      RX: new engine.RulesElement({
        id: 'ID-RX',
        type: 'TA',
        rules: function(model) {
          model.select('TB', 1, 'From TA');
        }
      })
    };

    var TB = {
      RY: new engine.RulesElement({ id: 'ID-RY', type: 'TB' }),
      RZ: new engine.RulesElement({ id: 'ID-RZ', type: 'TB' }),
    };

    var elements = {
      types: { 'TA' : TA, 'TB' : TB },
      id: {
        'ID-RX': TA.RX,
        'ID-RY': TB.RY,
        'ID-RZ': TB.RZ
      }
    };
    var model = new engine.Model(elements);

    binding.bindFields(model);
    binding.updateFields(model);
    equal($("#test-x").css("visibility"), "hidden", "Element should be hidden with no choices");

    model.grant(TA.RX);
    binding.updateFields(model);
    equal($("#test-x").css("visibility"), "visible", "Element should now be visible, we have a choice");
    equal($("#test-x").find("input").is(":checked"), false, "Element should not be checked");
    equal(model.getChoices('TB')[0].choice, null, "Should have selected nothing");

    $("#test-x").find("input").prop('checked', true).change();
    binding.updateFields(model);

    equal($("#test-x").css("visibility"), "visible", "Element should still be visible, we have a choice");
    equal($("#test-x").find("input").is(":checked"), true, "Element should now be checked");
    equal(model.getChoices('TB')[0].choice, TB.RY, "Should have selected TB.RY as a side-effect");

    $("#test-x").find("input").prop('checked', false).change();
    binding.updateFields(model);

    equal($("#test-x").css("visibility"), "visible", "Element should still be visible, we have a choice");
    equal($("#test-x").find("input").is(":checked"), false, "Element should not be checked anymore");
    equal(model.getChoices('TB')[0].choice, null, "Should have un-selected TB.RY as a side-effect");

    model.getChoices('TB')[0].choice = TB.RY;
    binding.updateFields(model);

    equal($("#test-x").css("visibility"), "visible", "Element should still be visible, we have a choice");
    equal($("#test-x").find("input").is(":checked"), true, "Element should be checked again, after choice");
    equal(model.getChoices('TB')[0].choice, TB.RY, "Should have re-selected TB.RY, of course");
  });

  test('data-boundChoiceCheck filter', function () {
    $('#qunit-fixture').html(
      '<div id="test-x" data-boundChoiceCheck="TB:RY">'+
	    '<input type="checkbox" value="None" id="cb1" name="cb1" disabled="true" />'+
	    '<label for="cb1"></label>'+
      '</div>');

    // Note that when we grant this, the choice doesn't matter because no
    // element can match it, including our test element.
    //
    var TA = {
      RX: new engine.RulesElement({
        id: 'ID-RX',
        type: 'TA',
        rules: function(model) {
          model.select('TB', 1, 'From TA', {
            filter: function(model, element) { return false; }
          });
        }
      })
    };

    var TB = {
      RY: new engine.RulesElement({ id: 'ID-RY', type: 'TB' }),
    };

    var elements = {
      types: { 'TA' : TA, 'TB' : TB },
      id: { 'ID-RX': TA.RX, 'ID-RY': TB.RY }
    };
    var model = new engine.Model(elements);

    binding.bindFields(model);
    binding.updateFields(model);
    equal($("#test-x").css("visibility"), "hidden", "Element should be hidden with no choices");

    model.grant(TA.RX);
    binding.updateFields(model);
    equal($("#test-x").css("visibility"), "hidden", "Element should not be visible, choice filters this element");
  });


  test('data-boundChoiceCheck with direct grant', function () {
    $('#qunit-fixture').html(
      '<div id="test-x" data-boundChoiceCheck="TB:RY">'+
	    '<input type="checkbox" value="None" id="cb1" name="cb1" disabled="true" />'+
	    '<label for="cb1"></label>'+
      '</div>');

    var TB = {
      RY: new engine.RulesElement({ id: 'ID-RY', type: 'TB' }),
    };

    var elements = {
      types: { 'TB' : TB },
      id: { 'ID-RY': TB.RY }
    };
    var model = new engine.Model(elements);

    binding.bindFields(model);
    binding.updateFields(model);
    equal($("#test-x").css("visibility"), "hidden", "Element should be hidden with no choices");

    model.grant(TB.RY);
    binding.updateFields(model);
    equal($("#test-x").css("visibility"), "visible", "Element should now be visible, we have a choice");
    equal($("#test-x").find("input").is(":checked"), true, "Element should be checked");
    equal($("#test-x").find("input").prop("disabled"), true, "Element should be read-only");

    model.remove(TB.RY);
    binding.updateFields(model);
    equal($("#test-x").css("visibility"), "hidden", "Element should not be visible anymore, rule is gone");
  });

  test('data-showValueIf', function () {
    $('#qunit-fixture').html('<div id="test-x" data-showValueIf="TB:RY"></div>');

    var TB = {
      RY: new engine.RulesElement({ id: 'ID-RY', type: 'TB' }),
    };

    var elements = {
      types: { 'TB' : TB },
      id: { 'ID-RY': TB.RY }
    };
    var model = new engine.Model(elements);

    binding.bindFields(model);
    binding.updateFields(model);
    equal($("#test-x").css("visibility"), "hidden", "Element should be hidden without the grant");

    model.grant(TB.RY);
    binding.updateFields(model);
    equal($("#test-x").css("visibility"), "visible", "Element should now be visible with the grant");

    model.remove(TB.RY);
    binding.updateFields(model);
    equal($("#test-x").css("visibility"), "hidden", "Element should not be visible anymore, grant is gone");
  });

});

