<script lang="ts" setup>
import { Article } from '../../types/article';

const router = useRouter();

const { data } = await useAsyncData(`articles`, () =>
  queryContent<Article>('/articles/')
    .only(['date', 'img', 'title', 'tags', '_path'])
    .sort({ date: 1 })
    .find(),
);
</script>

<template>
  <section class="articles">
    <h1>Articles</h1>

    <div class="articles-container">
      <article-meta
        v-for="meta in data"
        :key="meta._path"
        :title="meta.title"
        :img-url="meta.img.url"
        :tags="meta.tags"
        @click.prevent="router.push(meta._path)"
      />
    </div>
  </section>
</template>

<style lang="scss">
.articles {
	@include body-wrapper;
	margin: 0 auto;
	min-height: 40vh;
	display: flex;
  flex-direction: column;
}

.articles-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 4rem 0px;
  margin-top: 5%;
}
</style>
