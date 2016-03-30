/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

//app registry is how we tell react native what its most core component is

var React = require('react-native');
var { AppRegistry } = React;

//requires main and requires it as its main component
var Main = require('./src/main.js');


AppRegistry.registerComponent('adventureus', () => Main)