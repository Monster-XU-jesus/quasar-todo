// 该文件用于数据的存储
import useStorage from '../hooks/useStorage';

const localStorage = useStorage().localStorage;

export function test() {
  localStorage.setItem('test', '212');
  console.log(localStorage.getItem('test'));
}
