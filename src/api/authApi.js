import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://29d19495.ngrok.io'
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
