/**********************************************************************
  Standard cross-platform (ios/android) strategy (uses Main as 'root')
***********************************************************************/

var React = require('react-native');

//requires main and requires it as its main component
var Main = require('./src/main.js');

React.AppRegistry.registerComponent('adventureus', () => Main)
