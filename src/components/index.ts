import SvgIcon from './SvgIcon/index.vue';
import Pagination from './Pagination/index.vue';

const allGlobalComponents = { SvgIcon, Pagination };

// 引入所有图标
import * as ElementPlusIcons from '@element-plus/icons-vue';

export default {
  install(app) {
    Object.keys(allGlobalComponents).forEach((key) => {
      app.component(key, allGlobalComponents[key]);
    });
    for (const [key, component] of Object.entries(ElementPlusIcons)) {
      app.component(key, component);
    }
  },
};
