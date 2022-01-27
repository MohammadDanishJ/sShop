import Dashboard from "./home.js";
import Orders from "./orders.js";
import Profile from "./profile.js";

const createPages = async app => {
    let main = document.createElement('main');
    main.classList.add("fl", "fl-c", "fl-a-fs")
    main.innerHTML = Dashboard() + Orders() + Profile()
    await app.appendChild(main);
};

export default createPages;