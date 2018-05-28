import React, { Component } from 'react';
import { connect } from 'react-redux';

class About extends Component {
  render() {
    return (
      <div style={{ marginTop: 50 }} >
        <h1>About Page</h1>
        <p>This a about page</p>
        <p> Reading from the state ->> { this.props.routing.key }</p>
        <button className="btn btn-primary">Button Primary</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    routing: state.routing.location
  };
}

export default connect(mapStateToProps)(About);