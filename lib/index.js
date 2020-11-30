'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _authentication = require('./authentication');

var _authentication2 = _interopRequireDefault(_authentication);

var _recipe = require('./resources/recipe');

var _recipe2 = _interopRequireDefault(_recipe);

var _package = require('../package.json');

var _zapierPlatformCore = require('zapier-platform-core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const App = {
  version: _package.version,
  platformVersion: _zapierPlatformCore.version,

  authentication: _authentication2.default,

  beforeRequest: [],

  afterResponse: [],

  resources: {
    [_recipe2.default.key]: _recipe2.default
  },

  triggers: {},

  searches: {},

  creates: {}
};

exports.default = App;
module.exports = exports['default'];