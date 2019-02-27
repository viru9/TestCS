import {FETCH_HOME_VALUES, FILTER_HOME_VALUES} from './../../actions/home';
import {USE_DUMMY_DATA, HOME_DATA} from './../dummy_data/home'; //import dummy data...

export default function(state = {}, action) {


  switch (action.type) {

    case FETCH_HOME_VALUES:
      if (!USE_DUMMY_DATA) {
        return action.payload.data;
      } else {
        console.log('payload', HOME_DATA.response);
        return HOME_DATA.response;
      }

      case FILTER_HOME_VALUES:
      console.log('payload FILTER_HOME_VALUES', action);
      return action.payload;

    default:
      return state;
  }

}
