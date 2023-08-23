import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// 静态路由
const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: 'home',
		meta: { title: '首页', icon: 'ri-dashboard-2-line' },
		component: () => import('@/views/Home.vue'),
	},
	{
		path: '/login',
		name: 'login',
		meta: {
			title: '登录',
			hidden: true,
		},
		component: () => import('@/views/users/login.vue'),
	},
	{
		path: '/404',
		name: 'NotFound',
		meta: {
			title: '页面不存在',
			hidden: true,
		},
		component: () => import('@/views/error/404/index.vue'),
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})
export default router
