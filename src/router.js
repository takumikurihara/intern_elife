import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Detail from './views/Detail.vue';

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    // 詳細ページのroot追加
    {
      // path: "/detail/:building_name",
      path: "/detail/:building_guid",
      name: "detail",
      component: Detail,
    },
  ],
});
