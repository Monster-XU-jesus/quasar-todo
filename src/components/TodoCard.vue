<template>
  <q-item
    v-for="item in todoList"
    :key="item.id"
    class="q-pa-none"
    clickable
    v-ripple
  >
    <q-item-section class="text-ellipsis q-px-none">
      <q-item-label>{{ item.text }}</q-item-label>
      <q-item-label style="display: flex; justify-content: space-between">
        <span class="text-caption text-grey q-my-sm">
          {{ formatDate(item.createdAt) }}
        </span>
        <div>
          <q-btn
            flat
            dense
            color="red"
            icon="delete"
            @click="deleteTodo(item)"
          />
          <q-btn
            flat
            dense
            v-if="item.done"
            color="primary"
            icon="undo"
            @click="$emit('toggle', item)"
          />
          <q-btn
            flat
            dense
            v-else
            color="green"
            icon="check"
            @click="$emit('toggle', item)"
          />
        </div>
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
import { Todo } from '@/types/todo';
import { PropType } from 'vue';

const emits = defineEmits(['delete', 'toggle']);
const props = defineProps({
  todoList: {
    type: Array as PropType<Todo[]>,
  },
});

const deleteTodo = (todo: Todo, userId?: string) => {
  emits('delete', todo);
};

const formatDate = (date: Date | undefined) => {
  if (!date) return '';
  const options: object = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };
  return new Date(date).toLocaleDateString('zh-CN', options);
};
</script>

<style scoped></style>
