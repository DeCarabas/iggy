(function(global, undefined) {
  "use strict";
  
  var elements = global.elements || (global.elements = {});
  var types = elements.types || (elements.types = {});
  var byID = elements.id || (elements.id = {});
  var te;
  
  var Magic_Item = types['Magic Item'] || (types['Magic Item'] = {});
  te = Magic_Item["Broken Blade of Banatruul"] = new RulesElement({
    name: "Broken Blade of Banatruul",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4335",
    source: "Dragon Magazine 368",
    categories: ["Broken Blade of Banatruul", "ID_FMP_MAGIC_ITEM_4335"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Figurine of Tantron"] = new RulesElement({
    name: "Figurine of Tantron",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4337",
    source: "Dragon Magazine 368",
    categories: ["Figurine of Tantron", "ID_FMP_MAGIC_ITEM_4337"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["Helm of the Madman's Blood"] = new RulesElement({
    name: "Helm of the Madman's Blood",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4338",
    source: "Dragon Magazine 368",
    categories: ["Helm of the Madman's Blood", "ID_FMP_MAGIC_ITEM_4338"]
  });
  byID[te.id] = te;
  
  te = Magic_Item["The Immortal Game"] = new RulesElement({
    name: "The Immortal Game",
    type: "Magic Item",
    id: "ID_FMP_MAGIC_ITEM_4336",
    source: "Dragon Magazine 368",
    categories: ["The Immortal Game", "ID_FMP_MAGIC_ITEM_4336"],
    rules: function(model) {
      model.statadd("bonus on skill checks made as part of a scrying or divination ritual", 2);
    }
  });
  byID[te.id] = te;
  
  
})(this);
