import HomePage from "@/pages/HomePage";
import TheServices from "@/pages/TheServices";
import CaseInfo from "@/pages/CaseInfo";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/services",
    component: TheServices,
  },
  {
    path: "/case",
    component: CaseInfo,
  },
  {
    path: "/about",
    component: HomePage,
    meta: {
      scrollTo: "#about",
    },
  },
  {
    path: "/portfolio",
    component: HomePage,
    meta: {
      scrollTo: "#portfolio",
    },
  },
  {
    path: "/home-services",
    component: HomePage,
    meta: {
      scrollTo: "#services",
    },
  },
  {
    path: "/form",
    component: HomePage,
    meta: {
      scrollTo: "#form",
    },
  },
  {
    path: "/footer",
    component: HomePage,
    meta: {
      scrollTo: "#footer",
    },
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(process.env.BASE_URL),
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
  },
});

export default router;
