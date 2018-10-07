//We ask Mocha to first wait for babel transpiling, only then run.
require('babel-register')();

//We take features that Mocha doesn't understand, like the .css import we did in index.js, and tell him to treat these
//commands as an empty function.
require.extensions['.css'] = function () {};
