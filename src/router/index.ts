import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/app",
    name: "Mainframe",
    component: () => import("@/views/Mainframe/index.vue"),
    children: [
      {
        path: "admin",
        name: "Admin",
        component: () => import("@/views/Mainframe/admin/index.vue"),
        children: [
          {
            path: "",
            name: "Admin",
            component: () => import("@/views/Mainframe/admin/AdminView.vue"),
          },
        ],
      },
      {
        path: "",
        name: "Mainframe-home",
        component: () => import("@/views/Mainframe/HomeView.vue"),
      },
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => import("@/views/Mainframe/DashboardView.vue"),
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
