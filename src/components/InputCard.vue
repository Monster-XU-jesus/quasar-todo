<template>
  <div>
    <q-btn label="save todo" @click="save" />
    <q-toggle v-model="checked" left-label></q-toggle>
    <q-input
      filled
      v-model="text"
      placeholder="Enter somethings..."
      @keydown.enter.prevent="save"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useVModel } from '@vueuse/core';

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
