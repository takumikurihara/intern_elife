import Vue from "vue";
import Vuex from "vuex";
import counter from "./counter";
import apiServices from "./apiServices";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    counter,
    apiServices,
  },
});
