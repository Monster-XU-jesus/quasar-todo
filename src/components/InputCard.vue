<template>
  <div>
    <q-btn label="save todo" @click="save" />
    <q-input
      filled
      v-model="text"
      placeholder="Enter somethings..."
      @keydown.enter.prevent="save"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const emits = defineEmits(['saveTodo']);

let text = ref('');

const save = () => {
  emits('saveTodo', text.value);
  text.value = '';
};
</script>

<style scoped></style>
