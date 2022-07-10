<template>
  <div>
    <label for="username">Enter username:</label>
    <v-text-field
      id="username"
      v-model="searchValue"
      @input="search()"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  data() {
    return { searchValue: "" };
  },
  methods: {
    search() {
      this.$store.commit("search", this.searchValue);
    },
  },
};
</script>