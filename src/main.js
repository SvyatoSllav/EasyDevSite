import { createApp } from "vue";
import App from "./App";
import components from "@/components/HomePageComps/UI";
import router from "@/router/router";

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

app.use(router).mount("#app");
