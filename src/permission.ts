import router from '@/router/index.ts';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
nprogress.configure({ showSpinner: false });
import useUserStore from '@/store/modules/user.ts';
import pinia from '@/store/index.ts';
import setting from '@/setting.ts';

const userStore = useUserStore(pinia);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
router.beforeEach(async (to: any, from: any, next: any) => {
  document.title = to.meta.title + '- ' + setting.title;
  nprogress.start();
  const token = userStore.token;
  // 判断是否登录
  if (token) {
    if (to.path === '/login') {
      next('/');
    } else {
      if (userStore.username) {
        next();
      } else {
        try {
          await userStore.getUserInfo();
        } catch {
          // 登录过期处理
          await userStore.logout();
          next({ path: '/login', query: { redirect: to.path } });
        }
        next();
      }
    }
  } else {
    if (to.path === '/login') {
      next();
    } else {
      next({ path: '/login', query: { redirect: to.path } });
    }
  }
  next();
});

router.afterEach(() => {
  nprogress.done();
});
