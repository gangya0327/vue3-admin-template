import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import { ConfigEnv } from 'vite';
import { viteMockServe } from 'vite-plugin-mock';

export default defineConfig(({ command, mode }: ConfigEnv) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [
      vue(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        symbolId: 'icon-[dir]-[name]',
      }),
      viteMockServe({
        enable: command === 'serve', // 保证开发阶段可以使用mock
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '/src'),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "@/styles/variable.scss";',
        },
      },
    },
    server: {
      proxy: {
        [env.VITE_APP_BASE_API]: {
          target: env.VITE_SERVE,
          changeOrigin: true,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          rewrite: (path: any) => path.replace(/^\/api/, ''),
        },
      },
    },
  };
});
