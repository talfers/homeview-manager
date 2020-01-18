import createDataContext from './createDataContext';
import authApi from '../api/authApi';
import qs from 'qs';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
  switch(action.type) {
    case 'add_errors':
      return { ...state, errors: action.payload };
    case 'clear_errors':
      return { ...state, errors: '' }
    case 'signin':
      return { ...state, user: action.payload, loggedIn: true };
    case 'signup':
      return { ...state, user: action.payload, loggedIn: true };
    case 'signout':
      return { ...state, user: '', loggedIn: action.payload };
    default:
      return state;
  }
}

const signin = (dispatch) => {
  return async ({email, password}) => {
    try {
      const res = await authApi.post('/signin', qs.stringify({email, password}));
      if(res.data.loggedIn) {
        dispatch({type: 'signin', payload: {email, loggedIn: res.data.loggedIn}})
        navigate('Items');
      }
      if(res.data.errors) {
        dispatch({type: 'add_errors', payload: res.data.errors})
      }
    } catch(err) {
      console.log(err);
      dispatch({type: 'add_errors', payload: ['Internal server error']})
    }
  }
}

const signup = (dispatch) => {
  return async ({email, password, password2}) => {
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
  }
}

const signout = (dispatch) => {
  return async () => {
    try {
      const res = await authApi.get('/signout');
      if(res.loggedIn) {
        dispatch({type: 'signout', payload: res.data.loggedIn})
      }
    } catch (err) {
      console.log(err);
      dispatch({type: 'add_errors', payload: ['Internal server error']})
    }
  }
}

const clearErrors = (dispatch) => {
  return () => {
    dispatch({type: 'clear_errors'});
  }
}

export const { Context, Provider } = createDataContext(
  authReducer,
  { signin, signup, signout, clearErrors },
  { loggedIn: false, errors: [], user: '' }
)
