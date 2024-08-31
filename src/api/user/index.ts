import request from '@/utils/request.ts';
import type { loginForm, loginResponseData, userInfoResponseData } from './type.ts';

enum API {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/user/info',
}

export const login = (data: loginForm) => request.post<any, loginResponseData>(API.LOGIN_URL, data);

export const getUserInfo = (data: any) => request.get<any, userInfoResponseData>(API.USERINFO_URL, data);
