<script setup>
import SearchBar from "./components/SearchBar.vue";
import UsersList from "./components/UsersList.vue";
</script>

<template>
  <div id="app">
    <SearchBar />
    <UsersList />
  </div>
</template>

<script>
export default {
  components: {
    SearchBar,
    UsersList,
  },
  created() {
    this.$store.commit("search", "");
  },
};
</script>

<style>
@import url("./assets/style.css");
</style>
