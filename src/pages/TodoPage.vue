<template>
  <q-layout view="lHr Lpr lFr">
    <q-header reveal :reveal-offset="20">
      <div class="text-h4 text-center q-my-md">这里是todo主页</div>
    </q-header>

    <q-page-container>
      <q-page class="flex flex-center">
        <div class="todo-container">
          <div style="max-width: 500px">
            <InputCard
              @saveTodo="events.saveTodo"
              v-model:showAll="checked"
            ></InputCard>
            <div class="text-h6 text-center q-my-md">下方是todo列表展示</div>
            <q-list bordered dense :separator="false">
              <TodoCard
                :todoList="computedRefs.todoList"
                @delete="events.deleteTodo"
                @toggle="events.toggleTodo"
              ></TodoCard>
            </q-list>
          </div>
        </div>
      </q-page>
    </q-page-container>
    <q-footer bordered>
      <q-toolbar>
        <q-toolbar-title>Footer</q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { reactive, ref, computed } from 'vue';
import { useQuasar } from 'quasar';
import InputCard from 'src/components/InputCard.vue';
import TodoCard from 'src/components/TodoCard.vue';
import { Todo } from '../types/todo';

import { useTodoStore } from '../store/todo';
import { useFirebaseStore } from '../store/firebase';

// use store
const todoStore = useTodoStore();
const fireBaseStore = useFirebaseStore();
const $q = useQuasar();

let checked = ref(false); // 是否显示所有

console.log(fireBaseStore.isRegister);
fireBaseStore.isRegister = true;
console.log(fireBaseStore.isRegister);

const todoList = computed<Todo[]>(() => {
  return checked.value
    ? todoStore.getAllTodoList
    : todoStore.getNotDoneTodoList;
});
const notDoneList = ref();
const haveNoItem = ref();
const todayMessage = ref();
const computedRefs = reactive({
  todoList,
  notDoneList,
  haveNoItem,
  todayMessage,
});

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
    console.log($q);

    if (text.length === 0) {
      $q.dialog({
        title: '提示',
        message:
          'The value you entered is null. Please fill in the value and try again',
      });
    }
    todoStore.addTodo({ text, level: 0 });
  },
  deleteTodo: (todo: Todo, userId?: string) => {
    todoStore.deleteTodo(todo);
  },
  toggleTodo: (todo: Todo, userId?: string) => {
    todoStore.modifyTodo(todo);
  },
};
</script>

<style scoped>
.todo-container {
  width: 50vw;
  /* height: auto; */
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: auto;
  padding: 1rem;
}

@media screen and (max-width: 600px) {
  .todo-container {
    width: 100vw;
    height: 100%;
  }
}
</style>
