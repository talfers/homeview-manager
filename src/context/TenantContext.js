import React from 'react';
import createDataContext from './createDataContext';
import authApi from '../api/authApi';
import qs from 'qs';
import { navigate } from '../navigationRef';

const tenantReducer = (state, action) => {
  switch(action.type) {
    case 'get_tenants':
      return { ...state, tenants: action.payload }
    case 'add_tenant':
      let tempTenants = [...state.tenants, action.payload];
      return { ...state, tenants: tempTenants };
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
  return async (tenant) => {
    try {
      const res = await authApi.post('/tenants', qs.stringify(tenant));
      dispatch({type: 'add_tenant', payload: res.data.tenant});
      navigate('Account');
    } catch (err) {
      console.log(err);
    }

  }
}


export const { Context, Provider } = createDataContext(
  tenantReducer,
  { getTenants, addTenant },
  { tenants: [] }
)
