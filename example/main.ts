import { createApp } from "vue";
import App from "./app.vue";
import ZanzButton from "@zanz-ui/components/button";

const app = createApp(App);
app.use(ZanzButton);
app.mount("#app");
