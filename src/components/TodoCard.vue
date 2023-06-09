<template>
  <q-item v-for="(item, index) in todoList" :key="index">
    <q-item-section>{{ item }}</q-item-section>
    <q-item-section side>
      <q-btn label="Delete" @click="deleteTodo(index)" />
      <q-btn label="Done" @click="$emit('done', index)" />
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
import { Todo } from '@/types/todo';
import { PropType } from 'vue';

const emits = defineEmits(['delete', 'done']);
const props = defineProps({
  todoList: {
    type: Array as PropType<Todo[]>,
  },
});

const deleteTodo = (index: number) => {
  emits('delete', index);
};
</script>

<style scoped></style>
