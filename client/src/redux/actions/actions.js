import axios from 'axios';

export const GET_COUNTRIES = 'GET_COUNTRIES';

export const SEARCH = 'SEARCH';


export const getCountries = () => {
  const endpoint = 'http://localhost:3001/countries';

  return async (dispatch) => {
    try {
      const {data} = await axios(endpoint);
      return dispatch({
        type: GET_COUNTRIES,
        payload: data,
      })

    } catch(error){
      console.log(error.message)
    }
  }
};

export const search = (data) => {
  return {
    type: SEARCH,
    payload: data
  }
}