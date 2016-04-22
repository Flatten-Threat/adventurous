import React, { Component } from 'react';


export default class Activity extends Component {

  constructor(props) {

    super(props);

    this.imageStyle = {
      backgroundImage: 'url(' + this.props.activity.image + ')'
    };
  }


  render() {
    
    return <div className='activity'>

      {/* show or hide image, based on whether row is odd or even... */}
      { this.props.oddRow ? <div className='activity-image' style={ this.imageStyle } ></div> : null }

      <div className='info-frame'>
        <h2>{ this.props.activity.title }</h2>
        <p>{ this.props.activity.description }</p>
      </div> 

     { this.props.oddRow ? null : <div className='activity-image' style={ this.imageStyle } ></div> }

    </div>;
  }

}