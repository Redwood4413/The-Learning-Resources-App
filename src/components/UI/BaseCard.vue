<template>
  <div class="base-card">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
  .base-card {
    position: relative;
    overflow: hidden;
    box-shadow: 8px 8px 24px 0px rgba(0, 0, 0, 0.7);
    border-radius: 20px;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 1em;
    width:100%;
    gap:10px;
  }
</style>
