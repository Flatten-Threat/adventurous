import React, { Component } from 'react'
import Activities from '../components/activities'
import axios from 'axios';


export default class Travels extends Component {

  constructor(props) {
    super(props);
    this.state = { activities: [] };
  }

      
  componentWillMount() {

    axios.get('/api/activities')
    .then( function(resp) {

      this.setState({
        activities: resp.data
      });
      
    }.bind(this))
    .catch(function(resp) {
      console.log( 'axios get error', resp );
    });
  }
  

  render() {
    return (
      <div className="bordered-page">
        <div className="description-container">
          <Activities activities={ this.state.activities }/>
        </div>
      </div>
    );
  }
};

