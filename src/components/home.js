import React, {Component} from 'react';
import {connect} from 'react-redux';

class Home extends Component {

  render() {
    return (
      <div>
aaaaa
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {home: state};
}

export default connect(mapStateToProps, {})(Home);
