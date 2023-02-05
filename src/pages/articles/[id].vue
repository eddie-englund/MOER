<script lang="ts" setup>
const route = useRoute();
// TODO: handle 404
</script>

<template>
  <div class="outer-article-container">
    <article-container class="article-view" :article-dir="`/articles/${route.params.id}`" />
  </div>
</template>

<style lang="scss" scoped>
.outer-article-container {
  @include body-wrapper;
  margin: 0 auto;
}
</style>
