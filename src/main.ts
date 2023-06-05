import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

/* Set up using Vue 3 */
import { createApp } from "vue";
import App from "./App.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faVuejs,
  faReact,
  faJs,
  faSass,
  faCss3,
  faHtml5,
  faGit,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";

import { faMoon, faSun, faBars } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(
  faVuejs,
  faReact,
  faJs,
  faSass,
  faCss3,
  faHtml5,
  faGit,
  faFigma,
  faMoon,
  faSun,
  faBars
);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
