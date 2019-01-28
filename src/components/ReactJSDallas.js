import React, { Component } from 'react';
import Copyright from './Copyright';
import Event from './Event';

class ReactJSDallas extends Component {
  render() {
    return (
      <div className="reactjs-dallas">
        <h1 className="reactjs-dallas__title">React JS Dallas Meetup</h1>
        <Event />
        <Copyright />
      </div>
    );
  }
}

export default ReactJSDallas;