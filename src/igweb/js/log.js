/*global define*/
define([], function() {
  return {
    log: function log(message) { console.log(message); },
    group: function group(tag) { console.groupCollapsed(tag); },
    groupEnd: function groupEnd(tag) { console.groupEnd(tag); }
  };
});
