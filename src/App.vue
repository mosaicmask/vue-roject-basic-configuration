<script lang="ts" setup>
import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '@/components/Navbar/Navbar.vue'
import { useAlertsStore } from '@/store'

const store = useAlertsStore()
</script>

<template>
	<div class="w-full h-44 flex justify-center items-center">
		<span class="font-bold">this is App count: {{ store.count }} </span>
		<span> this is count double :{{ store.double }}</span>
		<HelloWorld />
	</div>
	<Navbar />
	<router-view />
</template>

<style scoped></style>
