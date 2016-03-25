import React, { Component } from 'react'
import Activities from '../components/activities'


export default class Travels extends Component {
  render() {
    return (
      <div className="bordered-page">
        <div className="description-container">
          <Activities activities={[
            {title: "hang-gliding"},
            {title: "underwater boxing"},
            {title: "jazz dance class"},
            {title: "petting zoo"},
            {title: "quilting"}
          ]}/>
        </div>
      </div>
    );
  }
};

