import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchHomeValues} from '../actions/home'

class Home extends Component {


  componentDidMount(){
    this.props.fetchHomeValues();

  }

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

export default connect(mapStateToProps, {fetchHomeValues})(Home);
