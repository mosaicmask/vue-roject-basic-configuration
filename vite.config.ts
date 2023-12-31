import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		eslintPlugin({
			include: ['src/**/*.ts', 'src/**/*.vue', 'src/*.ts', 'src/*.vue'],
		}),
	],
	envDir: 'env',
	esbuild: {
		drop: ['console', 'debugger'],
	},
	resolve: {
		// 配置路径别名
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
})
