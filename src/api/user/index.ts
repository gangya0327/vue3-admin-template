import request from '@/utils/request.ts';
import type { loginFormData, loginResponseData, userInfoResponseData } from './type';

enum API {
  // LOGIN_URL = '/user/login',
  // USERINFO_URL = '/user/info',

  LOGIN_URL = '/admin/acl/index/login',
  USERINFO_URL = '/admin/acl/index/info',
  LOGOUT_URL = '/admin/acl/index/logout',
}

export const login = (data: loginFormData) => request.post<any, loginResponseData>(API.LOGIN_URL, data);

export const getUserInfo = () => request.get<any, userInfoResponseData>(API.USERINFO_URL);

export const logout = () => request.post<any, any>(API.LOGOUT_URL);
