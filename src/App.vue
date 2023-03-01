<script lang="ts">
import TheHeader from './components/layouts/TheHeader.vue';
import TheResources from './components/learning-resources/TheResources.vue';

export default {
  components: {
    TheHeader,
    TheResources,
  },
};
</script>

<template>
  <TheHeader title="The Learning Resources App" />
  <TheResources />
</template>
