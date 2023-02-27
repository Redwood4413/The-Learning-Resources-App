<script lang="ts">
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <div class="card">
    <h2>{{ title }}</h2>
    <span> {{ description }}</span>
    <a :href="link">Open</a>
  </div>
</template>

<style lang="scss" scoped>
    h2{
      margin: 0;
    }
  .card {
    box-shadow: 8px 8px 24px 0px rgba(0, 0, 0, 1);
    border-radius: 20px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1em;
    gap:10px;
    a {
      background: rgb(14, 14, 14);
      width:100px;
      color:white;
      padding: 5px;
      border-radius: 20px;
      transition: background 100ms ease-in-out;
      &:hover {
        background: rgb(49, 47, 47);
      }
    }
  }
</style>
