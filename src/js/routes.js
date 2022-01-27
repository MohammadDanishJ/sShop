import { HOME_TITLE, ORDERS_TITLE, PROFILE_TITLE } from "../str/var.js";
import routeUrl from "./routeUrl.js";

const routes = [
    {
        path: `${routeUrl}`,
        view: HOME_TITLE
    },
    {
        path: `${routeUrl}${HOME_TITLE.toLowerCase()}`,
        view: HOME_TITLE
    },
    {
        path: `${routeUrl}${ORDERS_TITLE.toLowerCase()}`,
        view: ORDERS_TITLE
    },
    {
        path: `${routeUrl}${PROFILE_TITLE.toLowerCase()}`,
        view: PROFILE_TITLE
    }
];

export default routes;