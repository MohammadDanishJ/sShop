import router from '../../js/router.js';
import routeUrl from '../../js/routeUrl.js';

const Nav = async () => {
    let nav = document.querySelectorAll('.nav-controller');

    nav.forEach(div => {
        div.addEventListener('click', (e) => {
            e.preventDefault();
            toggleActive(div, document.querySelector('.nav-controller.active'))
            router.push(`${routeUrl}${div.dataset.link}`);
        })
    });
};

export const toggleActive = (div, activeNav = null) => {
    activeNav.classList.remove('active')
    document.getElementById(`p_${activeNav.dataset.link}`).classList.remove('fl')
    div.classList.add('active');
    document.getElementById(`p_${div.dataset.link}`).classList.add('fl');
}

export default Nav;