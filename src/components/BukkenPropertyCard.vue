<template>
  <v-container>
    <v-card v-on:click="onClickedDetail()">
      <v-card-title>{{ value.building_name }}</v-card-title>
      <v-card-subtitle class="text-left">{{ value.property[0].room_number_text }}号室</v-card-subtitle>
      <v-card-text>
        <p class="text-left">住所 : {{ value.address_text }} {{value.branch_number_text}}</p>
        <p class="text-left">ポイント！ : {{ value.property[0].sales_point }}</p>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { BuildingPropertyPreview } from "../dejima/dejima-client/src";

export default {
  name: "BukkenPropertyCardComponent",

  components: {},

  data: () => ({}),

  props: {
    value: BuildingPropertyPreview,
  },

  methods: {
    onClickedDetail: function () {
    // this.$emit('childs-event', this.value);
    // this.$emit('childs-event',this.value.building_name);
    let routeData = this.$router.resolve({ path: `/detail/${this.value.building_guid}` });
    window.open(routeData.href, '_blank');
    // this.$router.push({ path: `/detail/${this.value.building_name}` });
    },

  },
};

</script>

<style scoped>
.card {
  margin: 1rem;
}
</style>
