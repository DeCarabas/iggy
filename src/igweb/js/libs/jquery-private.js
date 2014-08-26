// This is a special thing that causes jquery to run without conflict, to fit
// in to the AMD module pattern cleanly. See http://www.requirejs.org/docs/jquery.html.
//
define(['jquery'], function(jq) {
  return jq.noConflict(true);
});
