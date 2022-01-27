import Nav from "./nav.js";
const createNav = async app => {
    let nav = document.createElement('nav');
    nav.classList.add("pfx", "b0", "w100vw")
    nav.innerHTML =
        `<div class="pfx b0 w100vw">
            <div class="nav pabs w100 b0">
                <div class="fl fl-c fl-j-sb w100 h100">
                    <a class="text-center w100 nav-controller cp" data-link="orders" href="orders">Orders</a>
                    <a class="fl fl-c w100 nav-controller cp"  data-link="home" href="home">Home</a>
                    <a class="text-center w100 nav-controller cp"  data-link="profile" href="profile">Profile</a>
                </div>
            </div>
        </div>`
    await app.appendChild(nav);
    Nav();
};

export default createNav;