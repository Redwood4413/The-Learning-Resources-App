<script lang="ts">
import closeIcon from '../Icons/closeIcon.vue';

export default {
  components: {
    closeIcon,
  },
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
  <BaseCard>

    <h2>{{ title }}</h2>
    <span> {{ description }}</span>
    <a :href="link" target="_blank" rel="noopener refererrer">Open</a>
    <BaseButton>Delete</BaseButton>
  </BaseCard>
</template>

<style lang="scss" scoped>
    h2{
      margin: 0;
    }

    a {
      background: rgb(14, 14, 14);
      width:100px;
      color:white;
      padding: 5px;
      border-radius: 20px;
      justify-self: flex-end;
      transition: background 100ms ease-in-out;
      &:hover {
        background: rgb(49, 47, 47);
      }
    }

</style>
