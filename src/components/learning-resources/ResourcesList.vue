<script lang="ts">
import ResourceCard from './ResourceCard.vue';

export default {
  components: {
    ResourceCard,
  },
  props: ['resources'],
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
  display:grid;
  //width: 70vw;
  padding: 0 10%;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap:20px;
}
</style>
