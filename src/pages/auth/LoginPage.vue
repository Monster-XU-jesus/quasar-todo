<template>
  <div>
    <h1>登陆页面</h1>
  </div>
</template>

<script setup lang="ts">
import { GithubAuthProvider, getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
// import { auth } from '@/plugins/firebase';
// import { app } from '../../plugins/firebase';

// const firebaseConfig = {
//   apiKey: 'AIzaSyBDWIO7dm1jsj4bzmtxsBIc5_O9aXQSTsA',
//   authDomain: 'quasar-todo-51c12.firebaseapp.com',
//   projectId: 'quasar-todo-51c12',
//   storageBucket: 'quasar-todo-51c12.appspot.com',
//   messagingSenderId: '991910200659',
//   appId: '1:991910200659:web:38f7b4f919ec92c4ba8da6',
//   measurementId: 'G-WQNPTP309X',
// };
// initializeApp(firebaseConfig);

// const provider = new GithubAuthProvider();
// const auth = getAuth();
// console.log(auth);

console.log('这里是登陆页面');
</script>

<style scoped></style>
