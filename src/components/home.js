import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchHomeValues} from '../actions/home';
import ModalCards from './common/modal_card';
import _ from 'lodash';


class Home extends Component {

  componentDidMount(){
    this.props.fetchHomeValues();
  }

  renderUserCards(){
    return _.map(this.props.home.home.response, data => {
      return (
        <ModalCards
        key={data.NAME}
        name={data.NAME}
        location={data.LOCATION}
        dob={data.DOB}
        photo={data.PHOTO}
        description={data.DESCRIPTION}
        phone={data.PHONE}
        email={data.EMAIL}
        />
      )
    });
  }

  render() {
    return (
      <div className="container">
      <div className="row">
        {this.renderUserCards()}
      </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {home: state};
}

export default connect(mapStateToProps, {fetchHomeValues})(Home);
