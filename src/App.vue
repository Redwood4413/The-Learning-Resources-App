<script lang="ts">
import TheHeader from './components/layouts/TheHeader.vue';
import ResourcesList from './components/learning-resources/ResourcesList.vue';

export default {
  components: {
    ResourcesList,
    TheHeader,
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
        {
          id: 'stackoverflow',
          title: 'Stackoverflow',
          description: 'Stackoverflow helps you find an answers for your questions.',
          link: 'https://stackoverflow.com/',
        },
      ],
    };
  },
};
</script>

<template>
  <TheHeader title="RememberMe" />
  <ResourcesList :resources="storedResources" />
</template>
