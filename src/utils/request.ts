import axios, { AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse } from 'axios';
import { ElMessage } from 'element-plus';
import useUserStore from '../store/modules/user';

// 自定义请求接口headers头参数类型
type ResponseHeader = AxiosRequestHeaders & { token?: string };

// 自定义请求接口request参数类型
interface RequestConfig extends AxiosRequestConfig {
  headers?: ResponseHeader;
  noNeedToken?: boolean;
}

// 请求拦截器
interface RequestInterceptorsConfig extends RequestConfig {
  headers: ResponseHeader;
}

const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000,
});

// 添加请求拦截器
service.interceptors.request.use((config: RequestInterceptorsConfig) => {
  const userStore = useUserStore();
  if (userStore.token) {
    config.headers.token = userStore.token;
  }
  // 返回配置对象
  return config;
});

// 添加响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
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

export default service;
