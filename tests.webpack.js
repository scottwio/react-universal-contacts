// ES5 shims for Function.prototype.bind, Object.prototype.keys, etc. 
require('core-js/es5');

Function.prototype.bind = Function.prototype.bind || function(thisp) {
    var fn = this;
    return function() {
        return fn.apply(thisp, arguments);
    };
  }

var contextShared = require.context('./shared', true, /.spec$/);
var contextClient = require.context('./client', true, /.spec$/);

contextShared.keys().forEach(contextShared);
contextClient.keys().forEach(contextClient);