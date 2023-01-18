<script setup lang="ts">
import MovieItem from "./MovieItem.vue";
import { ref } from "vue";

const movies = ref([
  { id: 1, name: "Lion King" },
  { id: 2, name: "Beauty and The Beast" },
  { id: 3, name: "Alice in Wonderland" },
]);

const removeItem = (id: number) => {
  movies.value = movies.value.filter((movie) => movie.id !== id);
};
</script>

<template>
  <ul>
    <MovieItem
      v-for="movie in movies"
      v-bind:key="movie.id"
      v-bind:name="movie.name"
      v-on:remove="removeItem(movie.id)"
    />
  </ul>
</template>
