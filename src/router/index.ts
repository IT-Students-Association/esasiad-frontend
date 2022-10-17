import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/app",
    name: "Mainframe",
    component: () => import("@/views/mainframe/index.vue"),
    children: [
      {
        path: "admin",
        name: "Admin",
        component: () => import("@/views/mainframe/admin/index.vue"),
        children: [
          {
            path: "",
            name: "Admin",
            component: () => import("@/views/mainframe/admin/AdminView.vue"),
          },
        ],
      },
      {
        path: "",
        name: "mainframe-home",
        component: () => import("@/views/mainframe/HomeView.vue"),
      },
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => import("@/views/mainframe/DashboardView.vue"),
      },
    ],
  },
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHistory(""),
  routes,
  scrollBehavior() {
    window.scrollTo(0, 0);
  },
});

// TODO: add meta tags and make /app disabled if not logged in

export default router;
