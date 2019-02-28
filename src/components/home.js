import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchHomeValues} from '../actions/home';
import ModalCards from './common/modal_card';
import _ from 'lodash';

class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      card_data:[]
    }
  }

  componentDidMount(){
    this.props.fetchHomeValues();
  }

  componentWillReceiveProps(nextProps){
    this.setState({card_data:nextProps.home_page.home});
  }

  renderUserCards(){

    return _.map(this.state.card_data, data => {
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

  updateSearch(e){

    let val = e.target.value;
    let new_arr = [];

    _.map(this.props.home_page.home, data => {
      if(data.NAME.toLowerCase().includes(val) || data.LOCATION.toLowerCase().includes(val)){
        new_arr.push(data);
      }

  });

  this.setState({card_data:new_arr});

  }

  render() {
    return (
      <div className="container">

      <div className="row">
      <div className="col-6 col-md-6">
      <label className="title-name">Rails and React II: A real use case</label>
      </div>
      </div>

      <div className="row">
      <div className="col-6 col-md-12">
      <input
      type="text"
      onChange={this.updateSearch.bind(this)}
      placeholder="Search people..."
      className="search-input"
              />
      </div>
      </div>

      <div className="row">
        {this.renderUserCards()}
      </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {home_page: state};
}

export default connect(mapStateToProps, {fetchHomeValues})(Home);
