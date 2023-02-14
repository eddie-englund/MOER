<script lang="ts" setup>
const router = useRouter();
</script>

<template>
	<div class="no-page-container">
		<div class="inner-container">
			<h1>404: Can't find that page!</h1>
			<p class="description">
        It seems like the link you pressed or entered was incorrect
      </p>
			<cta-button text="Go home" @click="router.push('/')" />
		</div>
	</div>
</template>

<style lang="scss">
.no-page-container {
	height: 90vh;
	min-width: 100%;
	display: grid;
	place-content: center;

	h1,
	.description {
		margin: 0;
		padding: 0;
    line-height: 1em;
	}

	.inner-container {
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 1rem;
	}

	.cta-button {
		max-width: 10rem;
	}
}
</style>
