import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import axios from 'axios';

import Sidebar from './components/sidebar';

let app_style = {
  backgroundColor: '#0000FF',
  width: '100vw',
  height: '100vh'
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: "placeholder for title",
      humidity: 0
    }
    this._myFunction = this._myFunction.bind(this);
  }

  _myFunction() {
    let self = this;
    axios.get('http://jsonplaceholder.typicode.com/posts/1')
    .then(function(res) {
      console.log(res);
      self.setState({
        temperature: res.data.title
      })
    })
    
  }

  render() {
    return (
      <div style={app_style}>
        <Sidebar {...this.state} testFunction={ this._myFunction } />
      </div>
    );
  }
}