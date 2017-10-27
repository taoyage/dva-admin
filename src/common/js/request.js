import axios from 'axios';
import qs from 'qs';
import { message } from 'antd';

/**
 * axios基础配置
 */
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

/**
 * axios请求拦截器配置
 */
axios.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token !== null) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  if (config.method === 'post') {
    config.data = qs.stringify(config.data);
  }
  return config;
}, error => {
  return Promise.reject(error);
});

/**
 * axios接收拦截器配置
 */
axios.interceptors.response.use(res => {
  if (res.status !== 200) {
    return Promise.reject(res);
  }
  return res;
}, error => {
  return Promise.reject(error);
});

/**
 * 请求配置
 * @param options
 * @returns {AxiosPromise}
 */
const fetch = options => {
  const { method = 'get', data, url } = options;
  switch (method.toLowerCase()) {
    case 'get':
      return axios.get(url, { params: data });
    case 'delete':
      return axios.delete(url, { params: data });
    case 'head':
      return axios.head(url, data);
    case 'post':
      return axios.post(url, data);
    case 'patch':
      return axios.patch(url, data);
    case 'put':
      return axios.put(url, data);
    default:
      return axios(options);
  }
};

/**
 * 成功获取数据处理
 * @param res
 * @returns {{success: (*|string|boolean)}}
 */
const handleData = (res) => {
  const data = res.data;
  if (data && data.error && !data.success) {
    message.error(data.msg);
  }
  return { ...data, success: data.message || data.message === 'Success' };
};

/**
 * 错误信息处理
 * @param error
 * @returns {{success: boolean}}
 */
const handleError = (error) => {
  const { data } = error.response;
  if (data.errors) {
    message.error(`${data.errors}`, 5);
  } else if (data.error) {
    message.error(`${data.error}`, 5);
  } else {
    message.error('未知错误！', 5);
  }
  return { success: false };
};

/**
 * 调用API发送请求
 * @param options
 * @returns {Promise.<TResult>}
 */
export const request = (options) => {
  return fetch(options)
    .then(handleData)
    .catch(handleError);
};

