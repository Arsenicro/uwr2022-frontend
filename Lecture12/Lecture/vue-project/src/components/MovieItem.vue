<script setup lang="ts">
const props = defineProps<{
  name: string;
}>();
const emit = defineEmits<{
  (e: "remove"): void;
  (e: "edit"): void;
}>();

const onRemove = () => {
  emit("remove");
};

const condition = false;
</script>

<template>
  <li v-bind:class="{ done: condition }">
    {{ props.name }} <button v-on:click="onRemove">Remove</button>
  </li>
</template>
