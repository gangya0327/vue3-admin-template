import request from '@/utils/request.ts';
import type { loginForm, loginResponseData, userInfoResponseData } from './type.ts';

enum API {
  // LOGIN_URL = '/user/login',
  // USERINFO_URL = '/user/info',

  LOGIN_URL = '/admin/acl/index/login',
  // LOGIN_URL = 'http://139.198.104.58:8212/admin/acl/index/login',
  USERINFO_URL = '/admin/acl/index/info',
  LOGOUT_URL = '/admin/acl/index/logout',
}

export const login = (data: loginForm) => request.post<any, any>(API.LOGIN_URL, data);

export const getUserInfo = (data: any) => request.get<any, any>(API.USERINFO_URL, data);

export const logout = () => request.post<any, any>(API.LOGOUT_URL);
