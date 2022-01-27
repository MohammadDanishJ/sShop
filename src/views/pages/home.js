import card from '../card/index.js';

const Dashboard = () => {
    return `
    <section id="p_home" class="w100vw p1">
        <div class="w100 h100">
            <div class="fl banner prel w100">
                <img src="./assets/images/banner.webp" alt="" class="img">
                <div class="fallback"></div>
                <div class="pabs t0 w100 h100">
                    <div class="w100 h100 fl fl-c p12">
                        <h1 class="banner-text text-center lhinit">1 Unit&nbsp;<span id="lRate">INR
                                110.00</span>
                    </div>
                </div>
            </div>
            <div class="fl fl-d-cl prel w100">
                <div class="fl fl-d-cl w100 pt1b05">
                    <h1 class="title">Best Selling</h1>
                    ${card()}
                    ${card()}
                    ${card()}
                </div>

                <div class="fl fl-d-cl w100 pt1b05">
                    <h1 class="title">All Shops</h1>
                    ${card()}
                    ${card()}
                    ${card()}
                    ${card()}
                </div>
            </div>
        </div>
    </section>
    `;
};

export default Dashboard;