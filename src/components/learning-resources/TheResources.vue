<script lang="ts">
import ResourcesList from './ResourcesList.vue';
import NewResource from './NewResource.vue';

export default {
  components: {
    ResourcesList,
    NewResource,
  },

  data() {
    return {
      selectedComponent: 'ResourcesList',

      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://google.com',
        },
        {
          id: 'stackoverflow',
          title: 'Stackoverflow',
          description: 'Stackoverflow helps you find an answers for your questions.',
          link: 'https://stackoverflow.com/',
        },
      ],
    };
  },
  provide() {
    return {
      resources: this.storedResources,
    };
  },
  methods: {
    changeComponent(comp: string) {
      if (this.selectedComponent === comp) return;
      this.selectedComponent = comp;
    },
  },
  computed: {
    activeClass() {
      return this.selectedComponent === 'ResourcesList' ? 'active' : '';
    },
    newResource() {
      return this.selectedComponent === 'NewResource' ? 'active' : '';
    },
  },
};
</script>

<template>

  <BaseWrapper>
    <div class="top-header">
      <BaseButton @click="changeComponent('ResourcesList')" mode="flat" :class="activeClass">Resources List</BaseButton>
      <BaseButton @click="changeComponent('NewResource')" :class="newResource" mode="flat">Add Resource</BaseButton>
    </div>
    <component :is="selectedComponent" />
  </BaseWrapper>
</template>

<style lang="scss" scoped>
  .top-header {
    button{
      border-radius: 0;
      width: 140px;
    }
  }

  .active{
        border-bottom: 4px rgb(112, 24, 24) solid;
        width:calc(100% - 4px);
        height:calc(100% - 4px);
      }
</style>
