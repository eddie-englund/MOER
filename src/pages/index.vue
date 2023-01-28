<script lang="ts" setup>
const router = useRouter();
</script>

<template>
	<div class="home-wrapper">
		<hero-banner
			header="The greatest game of the 21'st century so far."
			subheader="The legend of Zelda: Breath of the wild"
			image-url="/legend_of_zelda.png"
			:date="new Date('2023-01-01')"
			@click.prevent="router.push('/articles/breath-of-the-wild')"
		/>
    <p class="latest-articles">Latest articles</p>
    <div class="latest-articles-container">
    <article-meta title="Breath of the wild" img-url="/legend_of_zelda.png" :tags="['rpg', 'open world']"/>
    </div>
		<p class="featured-article">Featured Article</p>
		<article-container article-dir="/articles/elden-ring" />
	</div>
</template>

<style lang="scss" scoped>
.home-wrapper {
	@include body-wrapper;
	margin: 0 auto;
	display: grid;
	gap: 2rem;
}

.featured-article {
	margin-top: 2rem;
  @include medium;
}

.article-container {
	padding: 2rem;
	border: 1px solid $gray;
	border-radius: $radius;
}
</style>
