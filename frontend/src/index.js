import Vue from "vue";

import '@fortawesome/fontawesome-free/css/all.css';
import "bootstrap/dist/css/bootstrap.css";

import App from "./app.vue";

const render = createElement => createElement(App);

new Vue({ render }).$mount("main");