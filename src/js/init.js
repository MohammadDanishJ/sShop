import createNav from "../views/nav/index.js";
import createPages from "../views/pages/index.js";
import router from "./router.js"
import { dom } from "./router.js";

const app = document.getElementById('app');
const init = document.getElementById('init');

createNav(app);
createPages(app);

document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'complete') {
        init.style.display = 'none'
        router.push(location.pathname)
        window.addEventListener('popstate', dom);
    }
};