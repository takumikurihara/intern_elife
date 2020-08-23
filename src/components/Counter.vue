<template>
  <v-container>
    <div>
      <v-btn v-on:click="increment()">increment {{ step }}</v-btn>
      <p>total {{ count }}</p>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Counter",
  computed: {
    step() {
      return this.$store.getters["counter/step"];
    },
    count() {
      return this.$store.getters["counter/count"];
    },
  },
  methods: {
    increment() {
      this.$store.dispatch("counter/increment");
    },
  },
};
</script>

<style scoped></style>
