<script setup lang="ts">
const { slug } = useRoute().params

const story = await useAsyncStoryblok('home',
  { version: 'draft' }
)
</script>

<template>
  <h1>Home Page</h1>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
