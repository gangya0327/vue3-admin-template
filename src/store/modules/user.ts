import { defineStore } from 'pinia';
import { login, getUserInfo } from '@/api/user/index.ts';
import type { loginForm, loginResponseData } from '@/api/user/type.ts';
import type { userState } from './types/types.ts';
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
    async userLogin(data: loginForm) {
      const result: loginResponseData = await login(data);
      if (result.code === 200) {
        this.token = result.data.token as string;
        SET_TOKEN(result.data.token as string);
        return 'ok';
      } else {
        return Promise.reject(new Error(result.data.message));
      }
    },
    // 获取用户信息
    async getUserInfo() {
      const result = await getUserInfo();
      if (result.code === 200) {
        this.username = result.data.checkUser.username;
        this.avatar = result.data.checkUser.avatar;
      }
    },
    // 退出登录
    async logout() {
      this.token = '';
      this.username = '';
      this.avatar = '';
      REMOVE_TOKEN();
    },
  },
  getters: {},
});

export default useUserStore;
