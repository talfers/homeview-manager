import createDataContext from './createDataContext';
import authApi from '../api/authApi';
import qs from 'qs';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
  switch(action.type) {
    case 'add_errors':
      return { ...state, errors: action.payload };
    case 'clear_errors':
      return { ...state, errors: [] }
    case 'check_profile':
      return { ...state, tenantProfile: action.payload }
    case 'signin':
      return { ...state, user: action.payload, loggedIn: true };
    case 'signup':
      return { ...state, user: action.payload, loggedIn: true };
    case 'signout':
      return { ...state, user: null, loggedIn: action.payload };
    case 'loading':
      return { ...state, loading: action.payload }
    default:
      return state;
  }
}

const signin = (dispatch) => {
  return async ({email, password}) => {
    dispatch({type: 'loading', payload: true})
    try {

      const res = await authApi.post('/signin', qs.stringify({email, password}));
      if(res.data.loggedIn) {
        dispatch({type: 'signin', payload: {email, loggedIn: res.data.loggedIn}})
        let tenantCheck = await authApi.post('/tenants', qs.stringify({type: 'findOne', email: email}))
        dispatch({type: 'check_profile', payload: tenantCheck.data.tenant })
        navigate('Account');
      }
      if(res.data.errors) {
        dispatch({type: 'add_errors', payload: res.data.errors})
      }
      dispatch({type: 'loading', payload: false})
    } catch(err) {
      console.log(err);
      dispatch({type: 'add_errors', payload: ['Internal server error']})

    }
    dispatch({type: 'loading', payload: false})
  }
}

const signup = (dispatch) => {
  return async ({email, password, password2}) => {
    dispatch({type: 'loading', payload: true})
    try {
      const res = await authApi.post('/signup', qs.stringify({email, password, password2}));
      console.log(res.data);
      if(res.data.user) {
        dispatch({type: 'signup', payload: res.data.user});
        navigate('Signin');
      }
      if(res.data.errors) {
        dispatch({type: 'add_errors', payload: res.data.errors})
      }
    } catch(err) {
      console.log(err);
      dispatch({type: 'add_errors', payload: ['Internal server error']})
    }
    dispatch({type: 'loading', payload: false})
  }
}

const checkProfile = (dispatch) => {
  return async (email) => {
    dispatch({type: 'loading', payload: true})
    try {
      const res = await authApi.post('/tenants', qs.stringify({type: 'findOne', email}))
      dispatch({type: 'check_profile', payload: res.data.tenant})
    } catch (err) {
      console.log(err);
    }
    dispatch({type: 'loading', payload: false})
  }
}

const signout = (dispatch) => {
  return async () => {
    dispatch({type: 'loading', payload: true})
    try {
      const res = await authApi.get('/signout');
      if(res.loggedIn) {
        dispatch({type: 'signout', payload: res.data.loggedIn})
      }
    } catch (err) {
      console.log(err);
      dispatch({type: 'add_errors', payload: ['Internal server error']})
    }
    dispatch({type: 'loading', payload: false})
  }
}

const clearErrors = (dispatch) => {
  return () => {
    dispatch({type: 'clear_errors'});
  }
}

export const { Context, Provider } = createDataContext(
  authReducer,
  { signin, signup, signout, checkProfile, clearErrors },
  { loggedIn: false, tenantProfile: null, errors: [], user: null, loading: false }
)
