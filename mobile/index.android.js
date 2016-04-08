/**********************************************************************
  Standard cross-platform (ios/android) strategy (uses Main as 'root')
***********************************************************************/

var React = require('react-native');
var Main = require('./src/main.js');

React.AppRegistry.registerComponent('adventureus', () => Main);
