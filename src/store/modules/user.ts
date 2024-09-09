import { defineStore } from 'pinia';
import { login, getUserInfo, logout } from '@/api/user/index.ts';
import type { userState } from './types/types.ts';
import type { loginFormData, loginResponseData, userInfoResponseData } from '../../api/user/type.ts';
import { SET_TOKEN, GET_TOKEN, REMOVE_TOKEN } from '@/utils/token.ts';

// 引入路由
import { constantRoutes } from '@/router/routes.ts';

const useUserStore = defineStore('User', {
  state: (): userState => {
    return {
      token: GET_TOKEN(),
      menuRoutes: constantRoutes, // 存储菜单路由
      username: '',
      avatar: '',
    };
  },
  actions: {
    // 用户登录
    async userLogin(data: loginFormData) {
      const result: loginResponseData = await login(data);
      if (result.code === 200) {
        this.token = result.data;
        SET_TOKEN(result.data);
        return 'ok';
      } else {
        return Promise.reject(new Error(result.data));
      }
    },
    // 获取用户信息
    async getUserInfo() {
      const result: userInfoResponseData = await getUserInfo();
      if (result.code === 200) {
        this.username = result.data.name;
        this.avatar = result.data.avatar;
        return 'ok';
      }
      return Promise.reject(new Error(result.message));
    },
    // 退出登录
    async logout() {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await logout();
      if (result.code === 200) {
        this.token = '';
        this.username = '';
        this.avatar = '';
        REMOVE_TOKEN();
        return 'ok';
      } else {
        return Promise.reject(new Error(result.message));
      }
    },
  },
});

export default useUserStore;
