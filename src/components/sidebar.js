import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';

var sidebar_style = {
  backgroundColor: '#FF0000',
  width: '40vw',
  height: '100vh'
}

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.test = this.test.bind(this);
  }

  test() {
    this.props.testFunction();
  }

  render() {
    return (
      <div style={sidebar_style}>
        <h1>{ this.props.temperature }</h1>
        <button onClick={ this.test } >Inc Temp</button>
      </div>
    )
  }
}