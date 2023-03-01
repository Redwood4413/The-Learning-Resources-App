<script lang="ts">
export default {
  name: 'BaseButton',
  props: ['mode'],
};
</script>

<template>
  <button :class="mode" type="button">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
  button {
    background: rgb(14, 14, 14);
      width:100px;
      text-align: center;
      color:white;
      padding: 5px;
      border-radius: 20px;
      justify-self: flex-end;
      width:100px;
      transition: background 100ms ease-in-out;
      &:hover {
        background: rgb(49, 47, 47);
      }
    }
  .flat {
      background: none;
    }
</style>
