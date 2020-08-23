<template>
    <div class="address">
      <h3>よく利用される場所の住所を入力してください</h3>
      <v-text-field v-model="address"
       v-on:input="$emit('address-input',address)"
       placeholder="ここに住所を入力してください"/>
      <h4>その場所の、他の場所と比較した重要度を5段階で評価して下さい</h4>
      <input type="range" min=1 max=5 v-model="weight"
       v-on:change="$emit('weight-changed', Number(weight))">  {{weight}}
    </div>
</template>

<script lang="js">

export default {
  name: "AddressSearchBox",

  components: {},

  data: () => ({
      address: "",
      weight: 3,
  }),

  props: {},

  methods: {}
}
</script>

<style scoped>
.address {
  margin-top: 20px;
  margin-bottom: 20px;
  border:  10px #ffffff00 solid;
  outline: 1px #000000 solid;
}
</style>>
