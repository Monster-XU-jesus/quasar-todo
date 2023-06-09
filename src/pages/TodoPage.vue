<template>
  <div>这里是todo主页</div>
  <InputCard @saveTodo="events.saveTodo"></InputCard>
  <div>下方是todo列表展示</div>
  <q-list bordered separator>
    <TodoCard
      :todoList="todoList"
      @delete="events.deleteTodo"
      @done="events.doneTodo"
    ></TodoCard>
  </q-list>
</template>

<script setup lang="ts">
import InputCard from 'src/components/InputCard.vue';
import TodoCard from 'src/components/TodoCard.vue';
import { Todo } from '@/types/todo';
import { useTodoStore } from '../store/todo';
import { reactive, ref, computed } from 'vue';

// use store
const todoStore = useTodoStore();
let checked = ref(false); // 是否显示所有

const todoList = computed<Todo[]>(() =>
  checked.value ? todoStore.getAllTodoList : todoStore.getNotDoneTodoList
);
const notDoneList = ref();
const haveNoItem = ref();
const todayMessage = ref();

// 选择要显示的todo类型
const todoShowType = reactive({
  todoList,
  notDoneList,
  haveNoItem,
  todayMessage,
});

// 存放todo相关操作
const events = {
  saveTodo: (text: string) => {
    todoStore.addTodo({ text, level: 0 });
    console.log(todoStore.todoList);
  },
  deleteTodo: (index: number) => {
    todoStore.deleteTodo(index);
  },
  doneTodo: (index: number) => {
    todoStore.modifyTodo(index);
  },
};
</script>

<style scoped></style>
