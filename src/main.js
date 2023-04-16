import { createApp } from "vue";
import App from "./App";
import components from "@/components/UI";
import router from "@/router/router";
import VueScrollTo from "vue-scrollto";

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

app.use(router).use(VueScrollTo, { duration: 100 }).mount("#app");
