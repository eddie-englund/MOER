<script lang="ts" setup></script>

<template>
	<div class="privacy-container">
		<content-doc path="/privacy-policy" class="nuxt-content" />
	</div>
</template>

<style lang="scss">
.privacy-container {
	@include body-wrapper;
	margin: 0 auto;
	min-height: 60vh;
	display: flex;
	align-items: center;
}
</style>
