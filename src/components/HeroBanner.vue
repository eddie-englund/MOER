<script lang="ts" setup>
import { ArrowRightIcon } from '@heroicons/vue/24/outline/index.js';
import { DateTime } from 'luxon';

defineProps({
	imageUrl: { type: String, required: true },
	header: { type: String, required: true },
	subheader: { type: String, required: true },
	date: { type: Date, required: true },
});
</script>

<template>
	<section class="hero-banner">
		<img :src="imageUrl" :alt="imageUrl" />
		<div class="content">
			<div class="top-content">
				<h1>{{ header }}</h1>
				<p>{{ subheader }}</p>
			</div>
			<div class="bottom-content">
				<p class="date">
					{{ DateTime.fromJSDate(date).toLocaleString(DateTime.DATE_MED) }}
				</p>
				<cta-button :with-icon="true" text="Read article">
					<arrow-right-icon />
				</cta-button>
			</div>
		</div>
	</section>
</template>

<style lang="scss">
.hero-banner {
	min-width: 1000px;
	max-width: 1000px;
	min-height: 20rem;
	display: flex;
	cursor: pointer;
	border-radius: $radius;
	transition: all $transition-period;
	overflow: hidden;
	position: relative;

	img {
		opacity: 0.4;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: auto;
	}

	.content {
		position: relative;
		min-height: 100%;
    min-width: 100%;
    display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	&:hover {
		opacity: 0.8;
	}
}

.top-content {
	h1 {
		@include semi-bold;
		font-size: 2em;
	}

	p {
		color: $text;
		@include regular;
		font-size: 1.1em;
	}
}

.top-content,
.bottom-content {
	padding: 2rem;
}

.bottom-content {
	display: flex;
	justify-content: space-between;

	.date {
		@include extra-light;
	}
}
</style>
