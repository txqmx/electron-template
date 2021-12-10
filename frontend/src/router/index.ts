import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Demo from "../views/Demo.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Demo",
    component: Demo,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
