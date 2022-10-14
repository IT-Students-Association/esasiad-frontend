import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import index from "../views/Homeframe/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Homeframe-parent",
    component: index,
    children: [
      {
        path: "",
        name: "Homepage",
        component: () =>
          import(
            /* webpackChunkName: "Homepage" */ "../views/Homeframe/HomeView.vue"
          ),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
