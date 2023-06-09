import { defineStore } from 'pinia';
import { nanoid } from 'nanoid';
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
      const id = nanoid();
      const createdAt = new Date();
      const done = false;
      this.todoList.push({ ...params, createdAt, done, id });
    },
    // 删除todo
    deleteTodo(todo: Todo, userId?: string) {
      // 找到对应todo索引
      const todoIndex = this.todoList.findIndex((item) => item.id === todo.id);
      if (todoIndex < 0) {
        throw new Error(`Can't find todo item [${todo.id}]`);
      }
      this.todoList.splice(todoIndex, 1);
      console.log('删除todo');
    },
    // 标记todo为完成或者未完成
    modifyTodo(todo: Todo, userId?: string) {
      const todoIndex = this.todoList.findIndex((item) => item.id === todo.id);
      if (todoIndex < 0) {
        throw new Error(`Can't find todo item [${todo.id}]`);
      }
      this.todoList[todoIndex].done = !this.todoList[todoIndex].done;
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
    getAllTodoList: (): Todo[] => {
      const store = useTodoStore();
      return [...store.getNotDoneTodoList, ...store.getDoneTodoList];
    },
  },
});
