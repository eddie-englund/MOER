<script lang="ts" setup>
defineProps({
	text: { type: String, required: true },
	withIcon: { type: Boolean, default: false },
  primary: { type: Boolean, required: false, default: true },
  disabled: { type: Boolean, default: false, }
});
</script>

<template>
	<button class="cta-button" :class="[primary ? 'primary' : 'secondary', disabled ? 'disabled' : '']" :disabled="disabled">
		<p>{{ text }}</p>
		<div class="icon-container" v-if="withIcon">
			<!-- Use slots to pass icon -->
			<slot class="icon"></slot>
		</div>
	</button>
</template>

<style lang="scss" scoped>
.cta-button {
	border: none;
	border-radius: $radius;
	background: $text;
	display: flex;
	padding: 2rem;
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
	align-items: center;
	gap: 1rem;
	justify-content: center;
	cursor: pointer;
	transition: all $transition-period;

	&:hover {
		opacity: 0.8;
	}

	p {
		font-size: 1.1em;
		color: $text-inverted;
		@include medium;
	}
}

.icon-container {
	max-width: 1.2rem;
	min-width: 1.2rem;
	color: $text-inverted;
}

.cta-button.secondary {
	background: $bg;
	border: 1px solid $white;

	p {
		color: $white;
		@include regular;
	}

	.icon-container {
		color: $white;
	}
}

.cta-button.disabled {
  opacity: 0.7;
  cursor:not-allowed;
}
</style>
