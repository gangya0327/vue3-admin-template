import { defineStore } from 'pinia';
import { login } from '@/api/user/index.ts';
import type { loginForm } from '@/api/user/type.ts';

const useUserStore = defineStore('User', {
  state: () => {
    return {
      token: localStorage.getItem('TOKEN'),
    };
  },
  actions: {
    async userLogin(data: loginForm) {
      const result = await login(data);
      if (result.code === 200) {
        this.token = result.data.token;
        localStorage.setItem('TOKEN', result.data.token);
        return 'ok';
      } else {
        return Promise.reject(new Error(result.data.message));
      }
    },
  },
  getters: {},
});

export default useUserStore;
