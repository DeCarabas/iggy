(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Companion = types['Companion'] || (types['Companion'] = {});
  te = Companion["Vadalis-bred Griffon"] = new RulesElement({
    name: "Vadalis-bred Griffon",
    type: "Companion",
    id: "ID_FMP_COMPANION_54",
    source: "Eberron Player's Guide",
    categories: ["Vadalis-bred Griffon", "ID_FMP_COMPANION_54"],
    rules: function(model) {
      model.statadd("Companion.Strength", 20);
      model.statadd("Companion.Constitution", 18);
      model.statadd("Companion.Dexterity", 16);
      model.statadd("Companion.Intelligence", 2);
      model.statadd("Companion.Wisdom", 12);
      model.statadd("Companion.Charisma", 6);
      model.grant(elements.id["ID_INTERNAL_POWER_BEAST_MELEE_BASIC_ATTACK"]);
    }
  });
  byID[te.id] = te;
  
  
})(this);
