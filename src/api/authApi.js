import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://9e0e4e03.ngrok.io'
});

instance.interceptors.request.use(
  (config) => {
    config.headers.post['content-type'] = 'application/x-www-form-urlencoded'
    return config;
  },
  (err) => {
    return err;
  }
);

export default instance;
