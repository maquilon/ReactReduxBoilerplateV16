import React from 'react';
//import { push } from 'react-router-redux';
//import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Home = props => (
  <div>
    <h1>Home Page</h1>
    <p>This a home page</p>
    <p> Reading from the state ->> { props.routing.key }</p>

    <button className="btn btn-secondary">Button secondary</button>
  </div>
);

const mapStateToProps = state => ({
  routing: state.routing.location
});

export default connect(mapStateToProps)(Home);