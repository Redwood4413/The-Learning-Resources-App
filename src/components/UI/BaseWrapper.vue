<script lang="ts">
export default {
  name: 'BaseWrapper',
};
</script>

<template>
  <div class="wrapper">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  padding:2rem;
}
</style>
