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
    // 删除todo
    deleteTodo(index: number) {
      this.todoList.splice(index, 1);
      console.log('删除todo');
    },
    // 标记todo为完成
    doneTodo() {
      console.log('完成todo');
    },
  },
  getters: {
    getAllTodoList: (state): Todo[] => {
      return state.todoList;
    },
  },
});
