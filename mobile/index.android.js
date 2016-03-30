var React = require('react-native');
var { AppRegistry } = React;

//requires main and requires it as its main component
var Main = require('./src/main.js');
var MapView = require('react-native-maps');


AppRegistry.registerComponent('adventureus', () => Main)
