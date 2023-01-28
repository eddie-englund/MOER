<script lang="ts" setup>
defineProps({
  title: String,
  imgUrl: String,
  tags: { type: Array<String> }
})
</script>

<template>
  <div class="article-meta-container">
    <img :src="imgUrl" :alt="`${title}`">
    <div class="text-container">
      <p class="title">{{ title }}</p>
      <p class="tags">{{ tags?.toString().replace(/,/g, ', ') }}</p>
    </div>
  </div>
</template>
