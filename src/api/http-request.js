// api/http-request.js
import axios from 'axios';

const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API, // 確保在.env文件中配置
  timeout: 5000,
});

service.interceptors.request.use(
  config => {
    // 這裡可以添加請求攔截邏輯
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    const res = response.data;
    // 這裡可以添加響應攔截邏輯
    return res;
  },
  error => {
    return Promise.reject(error);
  }
);

export default service;
