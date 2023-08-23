import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAlertsStore = defineStore('alerts', () => {
	const count = ref(0)

	function increment() {
		this.count++
	}

	return {
		count,
		increment,
	}
})
