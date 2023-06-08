<template>
  <div>这里是todo主页</div>
  <InputCard @saveTodo="events.saveTodo"></InputCard>
</template>

<script setup lang="ts">
import InputCard from 'src/components/InputCard.vue';
import { useTodoStore } from '../store/todo';

const todoStore = useTodoStore();

// 存放todo相关操作
const events = {
  saveTodo: (text: string) => {
    todoStore.addTodo({ text, level: 0 });
    console.log(todoStore.todoList);
  },
  deleteTodo: () => {
    console.log('delete');
  },
  doneTodo: () => {
    console.log('done');
  },
};

console.log(todoStore);
</script>

<style scoped></style>
