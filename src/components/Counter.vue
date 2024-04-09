<template>
  <h1>Counter - Viex</h1>
  <h2>Direct Access: {{ $store.state.counter.count }}</h2>
  <h2>Computed: {{ countComputed }}</h2>

  <button @click="increment">Increment +1</button>
  <button @click="incrementBy">Increment +5</button>
  <button @click="randomInt" :disabled="isLoading">Random</button>
  <button @click="reset">Reset</button>

  <h1>mapState</h1>
  <h2>mapState: {{ count }}</h2>
  <h2>lastMutation: {{ lastMutation }}</h2>

  <h2>Direct Getter: {{ $store.getters["counter/squareCount"] }}</h2>
  <h2>Getters: {{ squareCount }}</h2>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "CounterComponent",

  computed: {
    countComputed() {
      return this.$store.state.counter.count;
    },
    ...mapState("counter", ["count", "lastMutation", "isLoading"]),
    // ...mapState({
    //   count: (state) => state.count,
    //   lastMutation: (state) => state.lastMutation,
    // }),
    ...mapGetters("counter", ["squareCount"]),
  },

  methods: {
    increment() {
      this.$store.commit("counter/increment");
    },

    incrementBy() {
      this.$store.commit("counter/incrementBy", 5);
    },

    reset() {
      this.$store.commit("counter/reset");
    },
    // ...mapActions("counter", ["incrementRandomInt"]),
    ...mapActions("counter", {
      randomInt: "incrementRandomInt",
    }),
  },
};
</script>
