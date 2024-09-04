// layout相关配置
import { defineStore } from 'pinia';

const useLayoutSettingStore = defineStore('layoutSettingStore', {
  state: () => {
    return {
      fold: false, // 侧边栏折叠
      refresh: false, // 刷新页面
    };
  },
});

export default useLayoutSettingStore;
