import axios from 'axios';

const baseUrl = 'http://localhost:8080/';

class AxiosRequest {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }
  getInsideConfig() {
    let headers = {};
    let jwtToken = null; // not implemented yet

    if (jwtToken) {
      headers['Authorization'] = `Bearer ${jwtToken}`;
    }

    const config = {
      baseURL: this.baseUrl,
      headers
    };
    return config;
  }
  request(options) {
    const instance = axios.create();
    const inside = this.getInsideConfig();
    options.baseURL = options.baseURL || inside.baseURL;
    options.withCredentials = true;
    options.headers = Object.assign(inside.headers, options.headers || {});
    this.interceptors(instance, options.url);
    return instance(options);
  }
}

const Request = new AxiosRequest(baseUrl);
export default Request;
