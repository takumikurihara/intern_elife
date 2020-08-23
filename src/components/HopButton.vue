<template>
  <v-container fluid>
    <v-btn v-on:click.stop="dialog = true">褒める</v-btn>

    <v-dialog v-model="dialog" max-width="300">
      <v-card>
        <v-card-text
          >さすがだぞ！{{ understand }}をばっちり理解してるんだな！</v-card-text
        >
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script lang="js">

export default {
  name: "HopButton",

  components: {},

  data: () => ({
    dialog: false,
  }),

  props: {
    understand: String
  },

  methods: {}
}
</script>
