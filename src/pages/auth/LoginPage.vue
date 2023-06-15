<template>
  <div>
    <h1>登陆页面</h1>
    <q-btn
      @click="
        onClickLogin(loginProviderList[0].provider, loginProviderList[0].name)
      "
      >{{ loginProviderList[0].name }}</q-btn
    >
  </div>
</template>

<script setup lang="ts">
import {
  GithubAuthProvider,
  AuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
} from 'firebase/auth';
import { useFirebaseStore } from '../../store/firebase';

const { loginWithFirebase } = useFirebaseStore();

const loginProviderList = [
  {
    name: 'Github',
    provider: new GithubAuthProvider(),
    color: 'primary',
  },
];

console.log('这里是登陆页面');

// 点击登录
const onClickLogin = (provider: AuthProvider, name: string) => {
  console.log(123);
  // 传入凭证和名字用作存储
  loginWithFirebase(provider, name);
};
</script>

<style scoped></style>
