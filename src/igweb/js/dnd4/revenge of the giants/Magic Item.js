(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Champion's Ring (paragon tier)"] = new RulesElement({
    name: "Champion's Ring (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8091",
    source: "Revenge of the Giants",
    categories: ["Champion's Ring (paragon tier)", "ID_FMP_MAGIC_ITEM_8091"],
    rules: function(model) {
      model.statadd("AC", function() { /* while you are bloodied */ return model.stat("ID_FMP_ITEM_SET_38 Set Count"); }, "item");
      model.statadd("Reflex Defense", function() { /* while you are bloodied */ return model.stat("ID_FMP_ITEM_SET_38 Set Count"); }, "item");
      model.statadd("ID_FMP_ITEM_SET_38 Equipped Count", 1, "Champion's Ring");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Controller's Implement +3"] = new RulesElement({
    name: "Controller's Implement +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8078",
    source: "Revenge of the Giants",
    categories: ["Controller's Implement +3", "ID_FMP_MAGIC_ITEM_8078"],
    rules: function(model) {
      model.statadd("ID_FMP_ITEM_SET_38 Equipped Count", 1, "Controller's Implement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Controller's Implement +4"] = new RulesElement({
    name: "Controller's Implement +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8079",
    source: "Revenge of the Giants",
    categories: ["Controller's Implement +4", "ID_FMP_MAGIC_ITEM_8079"],
    rules: function(model) {
      model.statadd("ID_FMP_ITEM_SET_38 Equipped Count", 1, "Controller's Implement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Controller's Implement +5"] = new RulesElement({
    name: "Controller's Implement +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8080",
    source: "Revenge of the Giants",
    categories: ["Controller's Implement +5", "ID_FMP_MAGIC_ITEM_8080"],
    rules: function(model) {
      model.statadd("ID_FMP_ITEM_SET_38 Equipped Count", 1, "Controller's Implement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Controller's Implement +6"] = new RulesElement({
    name: "Controller's Implement +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8081",
    source: "Revenge of the Giants",
    categories: ["Controller's Implement +6", "ID_FMP_MAGIC_ITEM_8081"],
    rules: function(model) {
      model.statadd("ID_FMP_ITEM_SET_38 Equipped Count", 1, "Controller's Implement");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Defender's Armor +3"] = new RulesElement({
    name: "Defender's Armor +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8086",
    source: "Revenge of the Giants",
    categories: ["Defender's Armor +3", "ID_FMP_MAGIC_ITEM_8086"],
    rules: function(model) {
      model.statadd("resist:cold", 10, "resist");
      model.statadd("resist:fire", 10, "resist");
      model.statadd("ID_FMP_ITEM_SET_38 Equipped Count", 1, "Defender's Armor");
      model.statadd("Armor Class", 3, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 3);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Defender's Armor +4"] = new RulesElement({
    name: "Defender's Armor +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8087",
    source: "Revenge of the Giants",
    categories: ["Defender's Armor +4", "ID_FMP_MAGIC_ITEM_8087"],
    rules: function(model) {
      model.statadd("resist:cold", 10, "resist");
      model.statadd("resist:fire", 10, "resist");
      model.statadd("ID_FMP_ITEM_SET_38 Equipped Count", 1, "Defender's Armor");
      model.statadd("Armor Class", 4, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 4);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Defender's Armor +5"] = new RulesElement({
    name: "Defender's Armor +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8088",
    source: "Revenge of the Giants",
    categories: ["Defender's Armor +5", "ID_FMP_MAGIC_ITEM_8088"],
    rules: function(model) {
      model.statadd("resist:cold", 15, "resist");
      model.statadd("resist:fire", 15, "resist");
      model.statadd("ID_FMP_ITEM_SET_38 Equipped Count", 1, "Defender's Armor");
      model.statadd("Armor Class", 5, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 5);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Defender's Armor +6"] = new RulesElement({
    name: "Defender's Armor +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8089",
    source: "Revenge of the Giants",
    categories: ["Defender's Armor +6", "ID_FMP_MAGIC_ITEM_8089"],
    rules: function(model) {
      model.statadd("resist:cold", 15, "resist");
      model.statadd("resist:fire", 15, "resist");
      model.statadd("ID_FMP_ITEM_SET_38 Equipped Count", 1, "Defender's Armor");
      model.statadd("Armor Class", 6, "Enhancement");
      model.statadd("Armor Enhancement Bonus", 6);
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Leader's Helm (paragon tier)"] = new RulesElement({
    name: "Leader's Helm (paragon tier)",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8090",
    source: "Revenge of the Giants",
    categories: ["Leader's Helm (paragon tier)", "ID_FMP_MAGIC_ITEM_8090"],
    rules: function(model) {
      model.statadd("ID_FMP_ITEM_SET_38 Equipped Count", 1, "Leader's Helm");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Striker's Weapon +3"] = new RulesElement({
    name: "Striker's Weapon +3",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8082",
    source: "Revenge of the Giants",
    categories: ["Striker's Weapon +3", "ID_FMP_MAGIC_ITEM_8082"],
    rules: function(model) {
      model.statadd("ID_FMP_ITEM_SET_38 Equipped Count", 1, "Striker's Weapon");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Striker's Weapon +4"] = new RulesElement({
    name: "Striker's Weapon +4",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8083",
    source: "Revenge of the Giants",
    categories: ["Striker's Weapon +4", "ID_FMP_MAGIC_ITEM_8083"],
    rules: function(model) {
      model.statadd("ID_FMP_ITEM_SET_38 Equipped Count", 1, "Striker's Weapon");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Striker's Weapon +5"] = new RulesElement({
    name: "Striker's Weapon +5",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8084",
    source: "Revenge of the Giants",
    categories: ["Striker's Weapon +5", "ID_FMP_MAGIC_ITEM_8084"],
    rules: function(model) {
      model.statadd("ID_FMP_ITEM_SET_38 Equipped Count", 1, "Striker's Weapon");
    }
  });
  byID[te.id] = te;
  
  te = Magic_Item["Striker's Weapon +6"] = new RulesElement({
    name: "Striker's Weapon +6",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_8085",
    source: "Revenge of the Giants",
    categories: ["Striker's Weapon +6", "ID_FMP_MAGIC_ITEM_8085"],
    rules: function(model) {
      model.statadd("ID_FMP_ITEM_SET_38 Equipped Count", 1, "Striker's Weapon");
    }
  });
  byID[te.id] = te;
  
  
})(this);
