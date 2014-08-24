// This is the engine that powers binding from the model to the UI.

(function (global, undefined) {
  "use strict";
   
  global.updateStats = function updateStats(model) {
    $("[x-score]").each(function (index) {
      var statName = $(this).attr("x-score");
      $(this).text(model.stat(statName));
    });
  };

})(this);
