import React, { Component } from 'react'
import Activities from '../components/activities'
import axios from 'axios';


export default class Travels extends Component {

  constructor(props) {
  //   this.changeContent = this.changeContent.bind(this);
  //   this.onChange = this.onChange.bind(this);
    super(props);
    this.state = { activities: [] };
  }

  
  // componentDidMount() {
  //   this.setState({
  //     activities: [
  //       {title: "wingsuit eventure"},
  //       {title: "underwater boxing"},
  //       {title: "jazz dance class"},
  //       {title: "petting zoo"},
  //       {title: "quilting"}
  //     ]
  //   });
  // }
    
  componentWillMount() {

    axios.get('/api/activities')
    .then( function(resp) {

      console.log("received activities:", resp.data );

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

