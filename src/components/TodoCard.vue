<template>
  <q-item v-for="item in todoList" :key="item.id">
    <q-item-section>{{ item }}</q-item-section>
    <q-item-section side>
      <q-btn label="Delete" @click="deleteTodo(item)" />
      <q-btn label="Done" @click="$emit('toggle', item)" />
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
import { Todo } from '@/types/todo';
import { PropType } from 'vue';

const emits = defineEmits(['delete', 'toggle']);
const props = defineProps({
  todoList: {
    type: Array as PropType<Todo[]>,
  },
});

const deleteTodo = (todo: Todo, userId?: string) => {
  emits('delete', todo);
};
</script>

<style scoped></style>
