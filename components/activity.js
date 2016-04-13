import React, { Component } from 'react'


export default class Activity extends Component {

  render() {

    var activity = this.props.activity;
    
    return (
      <div className="activity">
        <h2>{ activity.title }</h2>
        {/* <div className="activity-image"></div> */}
        <img src={ activity.image } />
        <p>{ activity.description }</p>
      </div>
    );
  }

};