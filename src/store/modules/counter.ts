import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useAlertsStore = defineStore(
	'alerts',
	() => {
		const count = ref(0)

		const double = computed(() => {
			return count.value * 2
		})

		function increment() {
			count.value++
		}

		return {
			count,
			increment,
			double,
		}
	},
	{
		persist: true, // 开启持久化
	}
)
