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
];

const router = createRouter({
  routes,
  history: createWebHashHistory(process.env.BASE_URL),
});

export default router;
