<script lang="ts" setup>
import { ArrowRightIcon } from '@heroicons/vue/24/outline';
import { DateTime } from 'luxon';

defineProps({
	imageUrl: { type: String, required: true },
	header: { type: String, required: true },
	subheader: { type: String, required: true },
	date: { type: Date, required: true },
});
</script>

<template>
	<section class="hero-banner" :style="`background-image: url('${imageUrl}');`">
		<div class="top-content">
			<h1>{{ header }}</h1>
			<p>{{ subheader }}</p>
		</div>
		<div class="bottom-content">
			<p class="date">{{ DateTime.fromJSDate(date).toLocaleString(DateTime.DATE_MED) }}</p>
			<cta-button :with-icon="true" text="Read article">
				<arrow-right-icon />
			</cta-button>
		</div>
	</section>
</template>

<style lang="scss">
.hero-banner {
	min-width: 100%;
	min-height: 20rem;
	background-size: cover;
	background-repeat: no-repeat;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
  cursor: pointer;

  transition: all .3s ease;

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
