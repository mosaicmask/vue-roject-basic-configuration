import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate' //导入持久化插件

// 创建 pinia 实例
const pinia = createPinia()

// 使用 pinia 持久化组件
pinia.use(persist)

// 导出 pinia 组件 给main使用
export default pinia
// 导出其余模块
export * from './modules/counter'
