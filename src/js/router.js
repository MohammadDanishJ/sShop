import { toggleActive } from "../views/nav/nav.js";
import routes from "./routes.js";

const match = () => {
    const exactMatch = routes.find(route => route.path === location.pathname);
    return exactMatch;
};

const router = {
    match: match(),
    push: (url, state = null) => {
        history.pushState(state, null, url);
        dom();
    }
}
export const dom = () => {
    const thematch = match();
    let nav = document.querySelectorAll('.nav-controller'),
    activeNav = document.querySelector('.nav-controller.active') ? document.querySelector('.nav-controller.active') : document.querySelectorAll('.nav-controller')[1];
    if (thematch) {
        toggleActive(
            document.querySelector(`.nav-controller[data-link=${thematch.view.toLocaleLowerCase()}]`),
            activeNav
        );
    } else {
        console.log(`404 | Page Not Found`)
    }
};


export default router;