<script lang="ts" setup>
import { Article } from '../types/article';

const router = useRouter();

const { data } = await useAsyncData(`articles`, () =>
  queryContent<Article>('/articles/')
    .only(['date', 'img', 'title', 'tags', '_path'])
    .sort({ date: 1 })
    .limit(5)
    .find(),
);
</script>

<template>
	<div class="home-wrapper">
		<hero-banner
			header="The greatest game of the 21'st century so far."
			subheader="The legend of Zelda: Breath Of The Wild"
			image-url="/the_legend_of_zelda_full.jpg"
			:date="new Date('2023-01-01')"
			@click.prevent="router.push('/articles/breath-of-the-wild')"
		/>
    <p class="latest-articles">Latest articles</p>
    <div class="latest-articles-container">
    <article-meta
      v-for="meta in data"
      :key="meta._path"
      :title="meta.title"
      :img-url="meta.img.url"
      :tags="meta.tags"
      @click.prevent="router.push(meta._path)"
    />
    </div>
		<p class="featured-article">Featured article</p>
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

.latest-articles, .featured-article {
  @include medium;
}

.latest-articles-container {
  display: flex;
  gap: 2rem;
}

.featured-article {
	margin-top: 2rem;
}

.article-container {
	padding: 2rem;
	border: 1px solid $gray;
	border-radius: $radius;
}
</style>
