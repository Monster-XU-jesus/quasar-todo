import { defineStore } from 'pinia';
import { Todo } from '../types/todo';

interface State {
  todoList: Todo[];
}

export const useTodoStore = defineStore('todo', {
  state: (): State => ({
    todoList: [],
  }),
  actions: {
    // 新添todo
    addTodo(params: Todo, userId?: string) {
      console.log('store save');
      const createdAt = new Date();
      const done = false;
      this.todoList.push({ ...params, createdAt, done });
    },
  },
});
