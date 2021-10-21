console.log('Start Jamendo React Next Server v0.0.1');

// Transpile all code following this line with babel and use @babel/preset-env (aka ES6) preset.
require('@babel/register')({
  presets: ['@babel/preset-env'],
  ignore: ['node-modules', '.next']
});

// Import the rest of application
module.exports = require('.index.js');
