let nav = document.querySelectorAll('.nav-controller'),
    main = document.querySelector('main'), activeNav = null;

nav.forEach(div => {
    div.addEventListener('click', (e) => {
        e.preventDefault();
        history.pushState({ page: div.dataset.link }, `${div.dataset.link}`, `${div.dataset.link}`);
        activeNav.classList.remove('active')
        document.getElementById(`p_${activeNav.dataset.link}`).classList.remove('fl')
        activeNav = div;
        activeNav.classList.add('active')
        document.getElementById(`p_${div.dataset.link}`).classList.add('fl')
    })
});

// let l = location.hash.substring(2)

// if (l.length > 0)
//     if (document.getElementById(l))
// document.getElementById(l).click();


document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'complete') {
        // create initial UI acc to url params
        let l = location.pathname
        switch (l) {
            case '/projects/sShop/orders':
                activeNav = nav[0]
                nav[0].click()
                break;

            case '/projects/sShop/home':
                activeNav = nav[1]
                nav[1].click()
                break;

            case '/projects/sShop/profile':
                activeNav = nav[2]
                nav[2].click()
                break;

            default:
                activeNav = nav[1]
                nav[1].click()
                break;
        }
        document.getElementById('init').style.display = 'none';
        document.getElementById('app').style.display = 'flex';
    }
}

function gup(name, url) {
    if (!url) url = location.href;
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(url);
    return results == null ? null : results[1];
}
gup('id')