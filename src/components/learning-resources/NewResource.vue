<script lang=ts>
import BaseButton from '../UI/BaseButton.vue';
import BaseCard from '../UI/BaseCard.vue';

export default {
  data() {
    return {
      input: {
        title: '',
        desc: '',
        link: '',
      },
    };
  },
  components: { BaseCard, BaseButton },
};
</script>

<template>
  <div class="form-wrapper">
    <BaseCard>
      <h2>Add your resource:</h2>
      <form @submit.prevent="submitData">
        <label>
          <input v-model="input.title" type="text" placeholder="Enter title.">
        </label>
        <label>
          <textarea v-model="input.desc" type="text" placeholder="Enter description of resource." />
        </label>
        <label>
          <input v-model="input.link" type="text" placeholder="Pass link." />
        </label>
        <BaseButton type="submit">Submit</BaseButton>
      </form>
    </BaseCard>
  </div>
</template>

<style lang="scss" scoped>
.form-wrapper {
  display:flex;
  justify-content: center;
  .base-card {
    width:400px;
    margin-top: 20px;
    padding-bottom: 60px;
  }
  form {
    display:flex;
    flex-direction: column;
    align-items: center;
    gap:20px;
    label {
      display:flex;
      gap:20px;
      input, textarea {
        border:0;
        width:300px;
        height:40px;
        padding:20px;
        transition: transform 300ms ease-in-out;
        &:focus {
          transform: scale(105%);
        }
      }
      textarea {
        resize: none;
        height:100px;
      }
    }
  }
}
</style>
