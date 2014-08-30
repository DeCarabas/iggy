define([], function() {
  return {
    log: function log(message) { console.log(message); },
    group: function group(tag) { console.group(tag); },
    groupEnd: function groupEnd(tag) { console.groupEnd(tag); }
  };
});
