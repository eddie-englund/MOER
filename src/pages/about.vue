<script lang="ts" setup></script>

<template>
	<div class="about-container">
		<content-doc path="/about" class="nuxt-content" />
	</div>
</template>

<style lang="scss">
.about-container {
	@include body-wrapper;
	margin: 0 auto;
	min-height: 60vh;
	display: flex;
	align-items: center;
}
</style>
