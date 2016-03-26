import React, { Component } from 'react'
import Activity from './activity'


export default class Activities extends Component {

  render() {
    var activities = this.props.activities;
    return (
      <div>
        <ul className="unstyled-list activity-list">{
         activities.map( function( activity, i ) {
           return ( <li><Activity activity={ activity } /></li> )
         }, this )
        }</ul>
      </div>
    );
  }
  
};
