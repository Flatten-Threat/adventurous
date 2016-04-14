import React, { Component } from 'react';


export default class Activity extends Component {

  render() {

    var activity = this.props.activity;
    
    var imageStyle = {
      backgroundImage: 'url(' + activity.image + ')'
    };
    
    return <div className='activity'>

      {/* image on LEFT in ODD index rows */}
      { this.props.odd ? <div className='activity-image' style={imageStyle} ></div> : null }

      <div className='info-frame'>
        <h2>{ activity.title }</h2>
        <p>{ activity.description }</p>
      </div> 

      {/* image on RIGHT in EVEN index rows */}
      { this.props.odd ? null : <div className='activity-image' style={imageStyle} ></div> }

    </div>
  }

}