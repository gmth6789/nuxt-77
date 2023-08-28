// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { defineConfig } from 'nuxt'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import NutUIResolver from '@nutui/nutui/dist/resolver'



export default defineConfig({
  plugins: [
    vue(),
    // 开启 unplugin 插件，自动引入 NutUI 组件
    Components({
      resolvers: [NutUIResolver()],
    }),
  ],
  // 配置全局样式变量
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@nutui/nutui/dist/styles/variables.scss";'
      }
    }
  }
});
