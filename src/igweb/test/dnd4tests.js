
// These are for QUnit: http://docs.jquery.com/QUnit

module("Dnd40 model tests");
test('abilitymod', function() {
  equals(abilitymod(10), 0, 'Mod of 10');
  equals(abilitymod(11), 0, 'Mod of 11');
  equals(abilitymod(18), 4, 'Mod of 18');
  equals(abilitymod(20), 5, 'Mod of 20');
  equals(abilitymod(9), -1, 'Mod of 9');
});
