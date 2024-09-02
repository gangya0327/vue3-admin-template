import { createApp } from 'vue';
import App from './App.vue';

// 引入element-plus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

// @ts-expect-error
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';

const app = createApp(App);
app.use(ElementPlus, {
  locale: zhCn,
});

// svg配置代码
import 'virtual:svg-icons-register';

// 引入自定义插件，注册为全局组件
import globalComponent from '@/components/index.ts';
app.use(globalComponent);

// 引入全局样式
import '@/styles/index.scss';

import router from '@/router/index.ts';
app.use(router);

import pinia from '@/store/index.ts';
app.use(pinia);

app.mount('#app');
