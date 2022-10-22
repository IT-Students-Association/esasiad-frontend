import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/app",
    name: "Mainframe",
    component: () => import("@/views/mainframe/index.vue"),
    meta: {
      public: false,
      disableIfLoggedIn: false,
    },
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
        name: "Community",
        component: () => import("@/views/mainframe/CommunityView.vue"),
      },
      {
        path: "help",
        name: "Help",
        component: () => import("@/views/mainframe/HelpView.vue"),
      },
      {
        path: "ranking",
        name: "Ranking",
        component: () => import("@/views/mainframe/RankingView.vue"),
      },
      {
        path: "fault",
        name: "Fault",
        component: () => import("@/views/mainframe/ReportFaultView.vue"),
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
    meta: {
      public: true,
      disableIfLoggedIn: false,
    },
  },
  {
    path: "/activate",
    name: "Activate",
    component: () => import("@/views/ActivateView.vue"),
    meta: {
      public: true,
      disableIfLoggedIn: false,
    },
  },
];

const router = createRouter({
  history: createWebHistory(""),
  routes,
  scrollBehavior() {
    window.scrollTo(0, 0);
  },
});

router.beforeEach((to, from, next) => {
  if (!to.meta.public) {
    if (localStorage.getItem("auth") === "true") {
      next();
    } else {
      next("/");
    }
  }
  if (localStorage.getItem("auth") === "true" && to.meta.disableIfLoggedIn) {
    next("/app");
  }
  next();
});

export default router;
