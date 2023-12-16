import { createApp, createStore } from "../mist/index";
import router from "./router/index.js";

createStore({
    bamboozeled: 0,
});

createApp("#app", router);