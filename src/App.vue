<script lang="ts">
import ResourceCard from './components/ResourceCard.vue';

export default {
  components: {
    ResourceCard,
  },
  data() {
    return {
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://google.com',
        },
      ],
    };
  },
};
</script>

<template>
  <ul v-for="resource in storedResources" :key="resource.id">
    <ResourceCard :id="resource.id" :title="resource.title" :description="resource.description" :link="resource.link" />
  </ul>
</template>
