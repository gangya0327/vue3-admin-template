// layout相关配置
import { defineStore } from 'pinia';

const useLayoutSettingStore = defineStore('layoutSettingStore', {
  state: () => {
    return {
      fold: false,
    };
  },
});

export default useLayoutSettingStore;
