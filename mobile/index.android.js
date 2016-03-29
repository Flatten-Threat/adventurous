var React = require('react-native');
var { AppRegistry } = React;

//requires main and requires it as its main component
var Main = require('./src/main.js');

AppRegistry.registerComponent('adventureus', () => Main)
