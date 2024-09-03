import { defineStore } from 'pinia';
import { login } from '@/api/user/index.ts';
import type { loginForm, loginResponseData } from '@/api/user/type.ts';
import type { userState } from './types/types.ts';
import { SET_TOKEN, GET_TOKEN } from '@/utils/token.ts';

// 引入路由
import { constantRoutes } from '@/router/routes.ts';

const useUserStore = defineStore('User', {
  state: (): userState => {
    return {
      token: GET_TOKEN(),
      menuRoutes: constantRoutes, // 存储菜单路由
    };
  },
  actions: {
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
  },
  getters: {},
});

export default useUserStore;
