<script lang="ts">

export default {
  name: 'TheHeader',
  props: ['title'],
};
</script>

<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<style lang="scss" scoped>
header {
  width:100%;
  overflow: hidden;
  background: #000;
}
</style>
