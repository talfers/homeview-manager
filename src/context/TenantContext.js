import React from 'react';
import createDataContext from './createDataContext';
import authApi from '../api/authApi';

const tenantReducer = (state, action) => {
  switch(action.type) {
    case 'get_tenants':
      return { tenants: action.payload }
    case 'add_tenant':
      return state;
    case 'edit_tenant':
      return state;
    default:
      return state;
  }
}

const getTenants = (dispatch) => {
  return async () => {
    try {
      const res = await authApi.get('/tenants');
      dispatch({type: 'get_tenants', payload: res.data.tenants})
    } catch (err) {
      console.log(err);
    }

  }
}

const addTenant = (dispatch) => {
  return ({tenant}) => {
    dispatch({type: 'add_tenant', payload: tenant})
  }
}


export const { Context, Provider } = createDataContext(
  tenantReducer,
  { getTenants, addTenant },
  { tenants: [] }
)
