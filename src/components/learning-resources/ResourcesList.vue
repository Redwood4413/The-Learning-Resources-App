<script lang="ts">
import ResourceCard from './ResourceCard.vue';

export default {
  components: {
    ResourceCard,
  },
  name: 'ResourcesList',
  inject: ['resources'],
  methods: {

  },
};
</script>

<template>
  <div class="card-wrapper">
    <ResourceCard
      v-for="resource in resources"
      :key="resource.id"
      :id="resource.id"
      :title="resource.title"
      :description="resource.description"
      :link="resource.link"
    />
  </div>
</template>

<style lang="scss" scoped>
 .card-wrapper {
  margin-top: 20px;
  display:grid;
  text-align: center;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap:20px;
}</style>
