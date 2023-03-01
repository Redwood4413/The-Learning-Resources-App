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
    text-align:center;
    width:100%;
    overflow: hidden;
    background: rgb(112, 24, 24);
    }
  </style>
