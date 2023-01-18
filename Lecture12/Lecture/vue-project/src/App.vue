<script setup lang="ts">
import { computed, ref } from "vue";
import MovieList from "./components/MovieList.vue";

const count = ref(0);

const condition = computed(() => count.value !== 0); // Do tworzenia refa z innych refów

const add = () => {
  count.value += 1;
};
</script>

<template>
  <div class="hello" v-if="condition">Hello World!</div>
  <button v-on:click="add">Count: {{ count }}</button>
  <MovieList />
</template>

<style scoped>
.hello {
  color: white;
}
</style>
