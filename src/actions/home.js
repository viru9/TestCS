import axios from 'axios';
import {ROOT_BASE_URL} from './../common/common';

export const FETCH_HOME_VALUES = 'fetch_home_values';
export const FILTER_HOME_VALUES = 'filter_home_values';

const FETCH_HOME_VALUE = 'todos';

export function fetchHomeValues(){
  const request = axios.get(`${ROOT_BASE_URL}${FETCH_HOME_VALUE}`);
      return (dispatch) => {
        request.then(({data}) => {
          if (data) {
            dispatch({type: FETCH_HOME_VALUES, payload: request});
          }
        });
      };
}

export function filterSearchedHomeValues(value){

  console.log('filterSearchedHomeValues<<: ',value);

      return (dispatch) => {
            dispatch({type: FILTER_HOME_VALUES, payload: value});

      };
}
