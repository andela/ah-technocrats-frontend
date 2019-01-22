import Axios from 'axios';
import * as types from './actionTypes';

export const searchSubmit = searchKeyWords => ({
  type: types.SEARCH_SUBMIT,
  searchKeyWords,
});

export const searchSuccess = results => ({
  type: types.SEARCH_SUCCESS,
  results,
});

export const searchFail = response => ({
  type: types.SEARCH_FAIL,
  response,
});
/**
 * This is the main action to dispatch the call to the API
 * @function searchAction
 * @param {string} searchKeyWords
 * @return {Promise}
 */
export const searchAction = searchKeyWords => (dispatch) => {
  dispatch(searchSubmit(searchKeyWords));
  return Axios.get(`https://ah-technocrats.herokuapp.com/api/article/?search=${searchKeyWords}`)
    .then((res) => {
      dispatch(searchSuccess(res.data));
    })
    .catch((error) => {
      dispatch(searchFail(error.response.data));
    });
};
