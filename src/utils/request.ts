import axios from 'axios';
import { ElMessage } from 'element-plus';

const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000,
});

// 添加请求拦截器
request.interceptors.request.use((config) => {
  // 返回配置对象
  return config;
});

// 添加响应拦截器
request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    let message = '';
    const status = error.response.status;
    switch (status) {
      case 401:
        message = 'token 失效';
        break;
      case 404:
        message = '请求地址错误';
        break;
      case 500:
        message = '服务器故障';
        break;
      default:
        message = '网络错误';
    }
    ElMessage({
      type: 'error',
      message,
    });
    return Promise.reject(error);
  }
);

export default request;
