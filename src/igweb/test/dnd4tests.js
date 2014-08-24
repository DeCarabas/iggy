
// These are for QUnit: http://docs.jquery.com/QUnit

module("Dnd40 model tests");
test('abilitymod', function() {
  equal(abilitymod(10), 0, 'Mod of 10');
  equal(abilitymod(11), 0, 'Mod of 11');
  equal(abilitymod(18), 4, 'Mod of 18');
  equal(abilitymod(20), 5, 'Mod of 20');
  equal(abilitymod(9), -1, 'Mod of 9');
});
