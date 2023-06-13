// 该文件用于数据的存储
import { Todo } from '../types/todo';
import useStorage from '../hooks/useStorage';
import delay from './delay';

const localStorage = useStorage().localStorage;

// 保存到LocalStorage中
async function saveDataOnLocalStorage(todoList: Todo[]) {
  // await delay(200);
  localStorage.setItem<Todo[]>('todo', todoList);
}

function fetchDataOnLocalStorage() {
  // await delay(200);
  return localStorage.getItem<Todo[]>('todo') ?? [];
}

export function saveData(val: Todo[], userId?: string) {
  if (userId) {
    // 存云数据库
  } else {
    saveDataOnLocalStorage(val);
  }
}

export function fetchData(userId?: string) {
  // let fetchFunction: Promise<Todo[]>;
  let fetchFunction;
  if (userId) {
    // 存云数据库
    fetchFunction = fetchDataOnLocalStorage(); // 暂时代替
  } else {
    fetchFunction = fetchDataOnLocalStorage();
  }
  return fetchFunction;
}
