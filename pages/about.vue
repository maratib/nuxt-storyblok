<template>
  <div>
    <h1>About page</h1>
    <Teaser v-if="story" :blok="story.content" />
    <!-- <pre>{{ story }}</pre> -->
  </div>
</template>

<script setup lang="ts">
const story = await useAsyncStoryblok('home', { version: "draft" })
</script>
