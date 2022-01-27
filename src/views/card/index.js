const card = () => {
    return `
        <div class="card fl fl-j-fs w100">
            <div class="fl img"></div>
            <div class="fl fl-d-cl fl-j-sb title lhinit w100">
                <div class="title">My Shop</div>
                <div class="sub-title fl fl-c fl-j-fs">
                    <img src="./assets/icons/location.svg" alt="">
                    <span>Location</span>
                </div>
                <div class="sub-title rate-title">INR 110</div>
            </div>
            <div class="controller fl fl-c cp">
                <svg viewBox="0 0 19 20" width="19" height="20">
                    <path fill="currentColor"
                        d="M3.8 6.7l5.7 5.7 5.7-5.7 1.6 1.6-7.3 7.2-7.3-7.2 1.6-1.6z"></path>
                </svg>
            </div>
        </div>
    `;
};


export default card;