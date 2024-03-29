import { defineStore } from 'pinia';
import { nanoid } from 'nanoid';

import { Todo } from '../types/todo';

import { saveData, fetchData } from '../utils/api';
interface State {
  todoList: Todo[];
}

export const useTodoStore = defineStore('todo', {
  state: (): State => ({
    todoList: fetchData(),
  }),
  actions: {
    // 新添todo
    addTodo(params: Todo, userId?: string) {
      const id = nanoid();
      const createdAt = new Date();
      const done = false;
      this.todoList.push({ ...params, createdAt, done, id });
      saveData(this.todoList, userId);
    },
    // 删除todo
    deleteTodo(todo: Todo, userId?: string) {
      // 找到对应todo索引
      const todoIndex = this.todoList.findIndex((item) => item.id === todo.id);
      if (todoIndex < 0) {
        throw new Error(`Can't find todo item [${todo.id}]`);
      }
      this.todoList.splice(todoIndex, 1);
      saveData(this.todoList, userId);
      console.log('删除todo');
    },
    // 标记todo为完成或者未完成
    modifyTodo(todo: Todo, userId?: string) {
      const todoIndex = this.todoList.findIndex((item) => item.id === todo.id);
      if (todoIndex < 0) {
        throw new Error(`Can't find todo item [${todo.id}]`);
      }
      this.todoList[todoIndex].done = !this.todoList[todoIndex].done;
      // 操作todo使得页面重新渲染，不走diff
      this.todoList.splice(todoIndex, 1, todo);
      saveData(this.todoList, userId);
      console.log('完成todo');
    },
  },
  getters: {
    getNotDoneTodoList: (state): Todo[] => {
      return state.todoList.filter((item) => item.done !== true);
    },
    getDoneTodoList: (state): Todo[] => {
      return state.todoList.filter((item) => item.done === true);
    },
    // 获取全部todo列表
    getAllTodoList: (state): Todo[] => {
      const store = useTodoStore();
      return [...store.getNotDoneTodoList, ...store.getDoneTodoList];
      // return [
      //   ...state.todoList.filter((x) => x.done),
      //   ...state.todoList.filter((x) => !x.done),
      // ];
    },
  },
});
