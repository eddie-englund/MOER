<script lang="ts" setup></script>

<template>
	<div class="contact-container">
		<content-doc path="/contact" class="nuxt-content" />
	</div>
</template>

<style lang="scss">
.contact-container {
	@include body-wrapper;
	margin: 0 auto;
	min-height: 60vh;
	display: flex;
	align-items: center;
}
</style>
