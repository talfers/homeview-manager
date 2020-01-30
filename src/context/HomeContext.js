import React from 'react';
import createDataContext from './createDataContext';
import authApi from '../api/authApi';
import qs from 'qs';
import { navigate } from '../navigationRef';

const homeReducer = (state, action) => {
  switch(action.type) {
    case 'get_homes':
      return { ...state, homes: action.payload }
    case 'add_home':
      let tempHomes = [...state.homes, action.payload];
      return { ...state, tenants: tempTenants };
    case 'edit_home':
      return state;
    default:
      return state;
  }
}

const getHomes = (dispatch) => {
  return async () => {
    try {
      const res = await authApi.get('/homes');
      console.log(res.data.homes);
      dispatch({type: 'get_homes', payload: res.data.homes})
    } catch (err) {
      console.log(err);
    }
  }
}

const addHome = (dispatch) => {
  return async (home) => {
    try {
      const res = await authApi.post('/homes', qs.stringify(home));
      dispatch({type: 'add_home', payload: res.data.home});
      navigate('Account');
    } catch (err) {
      console.log(err);
    }

  }
}


export const { Context, Provider } = createDataContext(
  homeReducer,
  { getHomes, addHome },
  { homes: [] }
)
