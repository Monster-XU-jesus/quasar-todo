<template>
  <div class="q-gutter-sm q-my-md">
    <q-input
      filled
      v-model="text"
      placeholder="Enter somethings..."
      @keydown.enter.prevent="save"
    />
    <div class="q-gutter-xs q-mt-sm flex justify-between">
      <q-btn color="primary" label="save todo" @click="save" />
      <q-toggle v-model="checked" left-label label="Show all todos" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useVModel } from '@vueuse/core';
// import { getAuth, signInWithPopup, GithubAuthProvider } from 'firebase/auth';
// const provider = new GithubAuthProvider();
// const auth = getAuth();
// signInWithPopup(auth, provider)
//   .then((result) => {
//     // This gives you a GitHub Access Token. You can use it to access the GitHub API.
//     const credential = GithubAuthProvider.credentialFromResult(result);
//     const token = credential?.accessToken;

//     // The signed-in user info.
//     const user = result.user;
//     // IdP data available using getAdditionalUserInfo(result)
//     // ...
//   })
//   .catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GithubAuthProvider.credentialFromError(error);
//     // ...
//   });

// console.log(provider);

const emits = defineEmits(['saveTodo', 'update:showAll']);
const props = defineProps<{ showAll: boolean }>();

// 通过计算属性操作使得数据双向绑定
// const checked = computed({
//   get: () => props.showAll,
//   set: (val: boolean) => emits('update:showAll', val),
// });

const checked = useVModel(props, 'showAll', emits);

let text = ref(''); // 输入的todo内容

const save = () => {
  emits('saveTodo', text.value);
  text.value = '';
};
</script>

<style scoped></style>
