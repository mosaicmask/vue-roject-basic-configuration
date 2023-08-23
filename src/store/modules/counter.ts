import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAlertsStore = defineStore(
	'alerts',
	() => {
		const count = ref(0)

		function increment() {
			count.value++
		}

		return {
			count,
			increment,
		}
	},
	{
		persist: true, // 开启持久化
	}
)
