<script lang="ts" setup>
defineProps({
	title: String,
	imgUrl: String,
	tags: { type: Array<String> },
});
</script>

<template>
	<div class="article-meta-container">
		<img :src="imgUrl" :alt="`${title}`" />
		<div class="text-container">
			<p class="title">{{ title }}</p>
			<p class="tags">{{ tags?.toString().replace(/,/g, ', ') }}</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.article-meta-container {
	max-width: 15rem;
	min-width: 10rem;
	min-height: 10rem;
	border-radius: $radius;
	border: 1px solid $gray;
	transition: all $transition-period;

	&:hover {
		cursor: pointer;
		opacity: 0.7;
	}

	img {
		min-width: 100%;
		max-width: 100%;
		max-height: 5rem;
		min-height: 5rem;
		object-fit: cover;
	}

	.text-container {
		padding: 1rem;
	}

	.title {
		color: $text;
	}

	.tags {
		color: $text-secondary;
		@include light;
		padding-top: 0.2rem;
	}
}
</style>
