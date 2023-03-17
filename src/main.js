import { createApp } from "vue";
import App from "./App";
import "../public/css/normilize.min.css";
import components from "@/components/UI";

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

app.mount("#app");
