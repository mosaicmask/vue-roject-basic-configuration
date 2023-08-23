<script lang="ts" setup>
import { useAlertsStore } from '@/store'

const store = useAlertsStore()
</script>

<template>
	<div class="card">
		<button type="button" @click="store.increment">count is {{ store.count }}</button>
	</div>
</template>

<style scoped></style>
