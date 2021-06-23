const {useRouteMatch, useParams, useLocation} = ReactRouterDOM;
const {BrowserRouter, Link, Route, Switch} = ReactRouterDOM;
const Router = BrowserRouter;
const data = [
    {
        filename: "252__09064.1606895977.jpg", 
        name:"PROX 煥顏淡紋抗皺眼部精華霜", 
        description: "全新升級Retinol Pro抗皺眼霜，以3重抗皺科技，激發3.5X膠原蛋白及3X透明質酸增生，臨床實證，28天淡化眼周纹33%！",
        price: "429.00",
        star: 0
    },
    {
        filename: "06.OLAY-MOISTURIZER__60701.1606960918.jpg", 
        name:"OLAY 抗氧酵母絲絨霜", 
        description: "法國獨家專利酵母護膚技術，抗氧修護脆弱熬夜肌，肌膚回復彈潤細膩；絲絨質感，高度滋潤保濕不油膩",
        price: "549.00",
        star: 3
    },
    {
        filename: "BBB3.0_ESSENCE_LOTION_Bottle__22255.1606974298.jpg", 
        name:"OLAY 抗氧酵母精華水", 
        description: "法國獨家專利酵母護膚技術，即時急救熬夜肌膚",
        price: "369.00",
        star: 5
    },
    {
        filename: "02.OLAY-MOISTURIZER_AIR_FINISH01__62869.1606961662.jpg", 
        name:"OLAY 抗氧酵母空氣感絲絨霜", 
        description: "法國獨家專利酵母護膚技術，抗氧修護脆弱熬夜肌，肌膚回復彈潤細膩；空氣質感，輕盈鎖水",
        price: "549.00",
        star: 4
    },
    {
        filename: "OLAY-YOUTH_ESSENCE-__08741.1606974253.jpg", 
        name:"OLAY 抗氧酵母空氣感絲絨霜", 
        description: "法國獨家專利酵母護膚技術,抗氧修護熬夜肌",
        price: "599.00",
        star: 5
    },
    {
        filename: "17_Harrison_-_Product_Shot__18113.1606896351.jpg", 
        name:"輕盈水感防曬乳 (面部專用) SPF50+ PA++++", 
        description: "日本製細胞級修護防曬乳，完美阻隔UV，同時鎖住細胞水分，肌膚持續水潤，清爽不油膩",
        price: "290.00",
        star: 0
    },
    {
        filename: "REG05__68972.1606896148.jpg", 
        name:"OLAY新生高效緊緻護膚霜", 
        description: "第5代Super Cream以「三重膠原技術」，+400%膠原蛋白增生，+40%激活膠原能量，提升全方位提升膠原質素",
        price: "269.00",
        star: 0
    },
    {
        filename: "12_OLAY_Regenerist_Micro-sculpting_Super_Essence_Water_150ml__64932.1606960447.jpg", 
        name:"OLAY 新生高效緊緻活膚露", 
        description: "蘊含近90%精華成分，極致保濕，減淡細紋，重現無痕緊緻",
        price: "290.00",
        star: 0
    },
    {
        filename: "30ml-__22835.1619093835.jpg", 
        name:"OLAY 高效透白光曜精華", 
        description: "新升級「抗糖水光精華」，3重肌底抗糖，締造 8X水潤亮白水光肌！",
        star: 4
    },
    {
        filename: "15_OLAY_WR_Light_Perfecting_Mask_Lotion_150ml__49963.1606896412.jpg", 
        name:"OLAY 高效透白光塑面膜精華液", 
        description: "輕拍15秒，效果等同敷15 分鐘面膜；肌膚水潤、透白、柔軟",
        price: "189.90",
        star: 0
    },
    {
        filename: "1200x1200_pixel-01__34646.1622125055.jpg", 
        name:"PROX 亮潔晳顏淡斑精華", 
        description: "5% B3 + 糖海帶珍稀成分，臨床實證，28天明顯減淡色斑紅印",
        price: "390.00",
        star: 0
    },
    {
        filename: "30ml-__22835.1619093835.jpg", 
        name:"PROX 煥顏淡紋抗皺精華", 
        description: "首創科研級Retinol Pro，功效比傳統Retinol高1.4倍，從基因開始抗初老，臨床實證，28天減紋20%",
        price: "390.00",
        star: 0
    },
    {
        filename: "PROX___21304.1606958969.jpg", 
        name:"PROX 煥顏淡紋抗皺面霜", 
        description: "PROX系列首推科研面霜，世界醫學級認證，集合最強五大科研成份，達至淡紋、保濕、抗痘、全效修護，一日逆轉乾弱肌！",
        price: "390.00",
        star: 0
    },
    {
        filename: "KH_product_description_pack_shot_2B__69798.1606960003.jpg", 
        name:"OLAY 新生高效緊緻護膚霜聯乘套裝", 
        description: "超超越專櫃面霜！No.1皇牌Super Cream Keith Haring聯乘系列節日限定套裝，激發400%膠原增生！",
        price: "279.90",
        star: 0
    },
    {
        filename: "KH_product_description_pack_shot_1__03113.1606960191.jpg", 
        name:"OLAY 高效透白光塑淡斑精華聯乘增…", 
        description: "1000萬銷量見證！細胞級B3精華Kieth Haring聯乘系列節日限定套裝，全面去黃提亮，肌膚光澤度大大提升！",
        price: "429.00",
        star: 0
    },
    {
        filename: "KH_product_description_pack_shot_3__78421.1606960091.jpg", 
        name:"PROX 亮潔晳顏淡斑精華聯乘增量套裝", 
        description: "皮膚科醫生推薦No.1淡斑精華Kieth Haring聯乘系列節日限定套裝，14天淡斑淡印！",
        price: "609.00",
        star: 3
    },
    {
        filename: "4.5-PROX___36181.1607091999.jpg", 
        name:"PROX 煥顏淡紋抗皺精華+微磁震動…", 
        description: "抗皺 ESSENCE BOOOSTER，內含獨特波紋磁場，將Retinol Pro精華的Retinol成分導入肌膚，精華3X滲透，深層淡紋保濕，全效修護！",
        price: "499.00",
        star: 0
    },
    {
        filename: "4.6-PROX_3D___19111.1607092189.jpg", 
        name:"PROX 3D緊緻塑顏精華+微磁震動導…", 
        description: "洋薊萃取、B3、五胜肽及二胜肽等多種珍稀成分，臨床實證，28天重點促進膠原增生，提升肌膚回彈力",
        price: "499.00",
        star: 0
    }
    ];


class App extends React.Component
{
    componentDidMount () {
        document.title = '皇牌產品系列｜OLAY香港';
    }

    render() {
        return (
            <>
            <svg xmlns="http://www.w3.org/2000/svg" className="injected-svg icons-svg-sprite" data-src="https://cdn11.bigcommerce.com/s-f8et57gva1/stencil/1a81d1d0-b00e-0139-b736-1a0fc5a766bd/e/6d19d740-3078-0139-7b17-0242ac110007/img/icon-sprite.svg">
                <symbol id="icon-heart" viewBox="0 0 1024 1024"><path d="M489.993 887.107L177.906 586.021C173.904 582.52 63.873 481.99 63.873 361.958c0-146.54 89.526-234.065 239.069-234.065 87.523 0 169.546 69.019 209.058 108.03 39.512-39.011 121.535-108.03 209.059-108.03 149.542 0 239.068 87.525 239.068 234.065 0 120.033-110.031 220.563-114.533 225.065L534.007 887.107c-6 6-14.003 9-22.007 9-8.003 0-16.007-3-22.007-9z"></path></symbol>
                <symbol id="icon-cart" viewBox="0 0 492.61 512"><defs><clipPath id="a-0"><path fill="none" d="M0 0h492.61v512H0z"></path></clipPath></defs><path d="M184.89 512a64.65 64.65 0 1 1 64.65-64.65A64.72 64.72 0 0 1 184.89 512m0-90.5a25.86 25.86 0 1 0 25.86 25.86 25.88 25.88 0 0 0-25.86-25.86M376.24 512a64.65 64.65 0 1 1 64.65-64.65A64.72 64.72 0 0 1 376.24 512m0-90.5a25.86 25.86 0 1 0 25.86 25.86 25.88 25.88 0 0 0-25.86-25.86M428 353.62H156.45a19.4 19.4 0 0 1-19-15.63L80.51 50.32 15.9 38.48a19.39 19.39 0 1 1 7-38.15l77.57 14.22A19.39 19.39 0 0 1 116 29.86L133.63 119h339.58a19.4 19.4 0 0 1 18.9 23.76l-45.25 195.82a19.39 19.39 0 0 1-18.9 15m-255.58-38.75h240.16l36.29-157.09H141.3z"></path></symbol>
                <symbol id="icon-search" viewBox="0 0 485.99 486"><path d="M479.43 447.78l-116.1-116 6.46-9A203.94 203.94 0 0 0 204.05 0 204.14 204.14 0 0 0 0 204.08 203.87 203.87 0 0 0 322.72 369.9l9-6.46 116 116a22.52 22.52 0 0 0 15.84 6.56 22.38 22.38 0 0 0 15.87-38.22M316.69 316.71A159.28 159.28 0 1 1 91.45 91.45a159.28 159.28 0 1 1 225.24 225.26"></path></symbol>
                <symbol id="icon-user" viewBox="0 0 433.23 512"><path d="M293.8 237.41a131.18 131.18 0 0 0 54.1-106.12C347.9 58.89 289 0 216.62 0S85.33 58.89 85.33 131.28a131.18 131.18 0 0 0 54.09 106.12C58 268.57 0 347.53 0 439.8A72.29 72.29 0 0 0 72.21 512H361a72.29 72.29 0 0 0 72.2-72.2c0-92.26-58-171.22-139.43-202.39M124.72 131.28a91.9 91.9 0 1 1 91.9 91.9 92 92 0 0 1-91.9-91.9M361 472.62H72.21a32.86 32.86 0 0 1-32.83-32.82c0-97.73 79.5-177.23 177.23-177.23s177.23 79.5 177.23 177.23A32.86 32.86 0 0 1 361 472.62"></path></symbol>
                <symbol viewBox="0 0 24 24" id="icon-add"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></symbol>
                <symbol viewBox="0 0 26 28" id="icon-star"> <path d="M0 10.109q0-0.578 0.875-0.719l7.844-1.141 3.516-7.109q0.297-0.641 0.766-0.641t0.766 0.641l3.516 7.109 7.844 1.141q0.875 0.141 0.875 0.719 0 0.344-0.406 0.75l-5.672 5.531 1.344 7.812q0.016 0.109 0.016 0.313 0 0.328-0.164 0.555t-0.477 0.227q-0.297 0-0.625-0.187l-7.016-3.687-7.016 3.687q-0.344 0.187-0.625 0.187-0.328 0-0.492-0.227t-0.164-0.555q0-0.094 0.031-0.313l1.344-7.812-5.688-5.531q-0.391-0.422-0.391-0.75z"></path> </symbol>
            </svg>
            <Promotion/>
            <Header/>
            <Main />
            </> 
        );
    }
}

class Promotion extends React.Component {
    render() {
        return (
            <div id="top-promotion-information">
                <p style={{textAlign: 'center'}}>官網限時優惠：購買即送2件自選皇牌試用裝！</p>
                <p>&nbsp;&nbsp;</p>
            </div>

        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <header className="header" >
                <div className="container flex-header">
                    <a href="#" className="mobileMenu-toggle" data-mobile-menu-toggle="menu" aria-controls="menu" aria-expanded="false">
                        <span className="mobileMenu-toggleIcon">Toggle menu</span>
                    </a>

                    <div className="navPages-container" id="menu" data-menu="">
                    <nav className="navPages">
                            <ul className="navPages-list navPages-list--user">
                                    <li className="navPages-item navPages-item--login">
                                        <div className="navPages-action" aria-label="登入">
                                            <span className="icon" aria-hidden="true">
                                                <svg><use xlinkHref="#icon-user"></use></svg>
                                            </span>
                                            <form className="form custom-login-form">
                            <legend className="form-label">登入您的OLAY帳戶<a href="/login.php?action=create_account" className="registration-link" data-action-detail="23989KDKHWE">註冊</a></legend>
                            
                            
                            <div className="form-field">
                                <label className="form-label" for="login_email">
                                    電郵地址
                                    <small><sup>必須填寫</sup></small>
                                </label>
                                <input className="form-input" name="login_email" id="navPages_login_email" type="email" />
                            </div>
                            <div className="form-field">
                                <label className="form-label" for="navPages_navPages_login_pass">
                                    密碼
                                    <small><sup>必須填寫</sup></small>
                                </label>
                                <input className="form-input" id="navPages_login_pass" type="password" name="login_pass" autocomplete="off" />
                            </div>
                            <div className="g-recaptcha" data-sitekey="6LccmasUAAAAAIRhScC9asOrH_rQblw06weNOzDI"><div style={{width: 304, height: 78}}><div><iframe title="reCAPTCHA" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LccmasUAAAAAIRhScC9asOrH_rQblw06weNOzDI&amp;co=aHR0cHM6Ly9vbGF5LmNvbS5oazo0NDM.&amp;hl=zh-TW&amp;v=FDTCuNjXhn1sV0lk31aK53uB&amp;size=normal&amp;cb=58srfx34qv71" width="304" height="78" role="presentation" name="a-f5ffpzz9lkmq" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe></div><textarea id="g-recaptcha-response" name="g-recaptcha-response" className="g-recaptcha-response" style={{width: 250, height: 40, border: '1px solid rgb(193, 193, 193)', margin: '10px 25px', padding: 0, resize: 'none', display: 'none'}}></textarea></div></div>    <div className="form-actions">
                                <input type="submit" className="button button--primary custom-login-submit event_profile_login" data-action-detail="Log_In" value="登入" />
                                <a className="forgot-password" href="/login.php?action=reset_password">忘記密碼?</a>
                            </div>
                        </form>                </div>
                                    </li>
                            </ul>
                            <ul className="navPages-list navPages-list--menu">
                                        <li className="navPages-item navPages-item-categories" data-toggle-item="">
                                        <a className="navPages-action" href="https://olay.com.hk/onlineexclusive" aria-label="網店獨家">
                                            <span className="navPages-label">網店獨家</span>
                                        </a>
                                </li>
                                <li className="navPages-item navPages-item-categories" data-toggle-item="">
                                        <a className="navPages-action has-subMenu" href="https://olay.com.hk/productmenu" data-collapsible="navPages-categories" aria-label="產品系列" aria-controls="navPages-categories" aria-expanded="false">
                                            <span className="navPages-label">產品系列</span>
                                            <span className="icon navPages-action-moreIcon" aria-hidden="true">
                                                <svg><use xlinkHref="#icon-chevron-down"></use></svg>
                                            </span>
                                        </a>
                                </li>
                                <li className="navPages-item navPages-item-categories" data-toggle-item="">
                                        <a className="navPages-action" href="https://olay.com.hk/bestseller" aria-label="暢銷產品">
                                            <span className="navPages-label">暢銷產品</span>
                                        </a>
                                </li>

                                                <li className="navPages-item navPages-item-page">
                                                    <a className="navPages-action" href="https://olay.com.hk/latestnews" aria-label="最新消息">
                                                        <span className="navPages-label">最新消息</span>
                                                    </a>
                                                </li>
                                                <li className="navPages-item navPages-item-page only-mobile-show">
                                                    <a className="navPages-action" href="https://olay.com.hk/customer-service/" aria-label="客戶服務">
                                                        <span className="navPages-label">客戶服務</span>
                                                    </a>
                                                </li>
                                                <li className="navPages-item navPages-item-page only-mobile-show">
                                                    <a className="navPages-action" href="https://www.pg.com/privacy/chineseT/privacy_statement.shtml " aria-label="隱私權">
                                                        <span className="navPages-label">隱私權</span>
                                                    </a>
                                                </li>
                                                <li className="navPages-item navPages-item-page only-mobile-show">
                                                    <a className="navPages-action" href="https://olay.com.hk/contactus" aria-label="聯繫我們">
                                                        <span className="navPages-label">聯繫我們</span>
                                                    </a>
                                                </li>
                                        <li className="navPages-item navPages-item-page navPages-item-wishlist only-mobile-show">
                                            <a className="navPages-action activePage" href="/wishlist.php?action=viewwishlistitems&amp;wishlistid=2" aria-label="">
                                                <span className="icon icon-heart-empty" aria-hidden="true">
                                                    <svg><use xlinkHref="#icon-heart"></use></svg>
                                                </span>
                                                <span className="navPages-label">收藏夾</span>
                                            </a>
                                        </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="header-logo header-logo--center">
                        <a href="https://olay.com.hk/" className="header-logo__link">
                            <div className="header-logo-image-container" >
                                <img className="header-logo-image" src="https://cdn11.bigcommerce.com/s-f8et57gva1/images/stencil/150x45/logo-olay-black_1603075859__88044.original.png" alt="OLAY HK" title="OLAY HK" />
                            </div>
                        </a>
                    </div>

                    <nav className="navUser">
    
                        <ul className="navUser-section navUser-section--alt">


                            <li className="navUser-item">
                                <a className="navUser-action navUser-item--compare" href="/compare" data-compare-nav="" aria-label="比較">
                                    比較 <span className="countPill countPill--positive countPill--alt"></span>
                                </a>
                            </li>

                            <li className="navUser-item navUser-item--quickSearch">
                                <button className="navUser-action navUser-action--quickSearch" type="button" id="quick-search-expand" data-search="quickSearch" aria-controls="quickSearch" aria-label="搜索" aria-expanded="false">
                                    <span className="icon" aria-hidden="true" >
                                        <svg><use xlinkHref="#icon-search"></use></svg>
                                    </span>
                                    搜索
                                </button>
                            </li>

                                <li className="navUser-item">
                                    <a className="navUser-action" href="">
                                        <span className="icon icon-heart-empty" aria-hidden="true">
                                            <svg><use xlinkHref="#icon-heart"></use></svg>
                                        </span>
                                        收藏夾
                                    </a>
                                </li>
                            <li className="navUser-item navUser-item--cart">
                                <a className="navUser-action event_preview_cart navUser-item--cart__hidden-s" data-cart-preview="" data-dropdown="cart-preview-dropdown" data-options="align:right" href="/cart.php" aria-label="購物車沒有貨品" aria-expanded="false">
                                    <span className="icon" aria-hidden="true">
                                        <svg><use xlinkHref="#icon-cart"></use></svg>
                                    </span>
                                    <span className="navUser-item-cartLabel">購物車</span>
                                    <span className="countPill cart-quantity">0</span>
                                </a>

                                <div className="dropdown-menu" id="cart-preview-dropdown" data-dropdown-content="" aria-hidden="true" aria-autoclose="false"></div>
                            </li>
                            <li className="navUser-item navUser-item--account">
                                    <a className="navUser-action" data-dropdown="account-dropdown" data-options="align:right" href="/login.php" aria-label="購物車沒有貨品" aria-expanded="false">
                                        <span className="icon" aria-hidden="true">
                                            <svg><use xlinkHref="#icon-user"></use></svg>
                                        </span>
                                        登入
                                    </a>

                                <div className="dropdown-menu dropdown-menu--login" id="account-dropdown" data-dropdown-content="" aria-hidden="true" aria-autoclose="false">
                                        <form className="form custom-login-form" action="/login.php?action=check_login" method="post">
                                            <legend className="form-label">登入您的OLAY帳戶<a href="/login.php?action=create_account" className="registration-link" data-action-detail="23989KDKHWE">註冊</a></legend>
                                            
                                            
                                            <div className="form-field">
                                                <label className="form-label" htmlFor="login_email">
                                                    電郵地址
                                                    <small><sup>必須填寫</sup></small>
                                                </label>
                                                <input className="form-input" name="login_email" id="navUser_login_email" type="email" />
                                            </div>
                                            <div className="form-field">
                                                <label className="form-label" htmlFor="navUser_navUser_login_pass">
                                                    密碼
                                                    <small><sup>必須填寫</sup></small>
                                                </label>
                                                <input className="form-input" id="navUser_login_pass" type="password" name="login_pass" autoComplete="off" />
                                            </div>
                                            <div className="g-recaptcha" data-sitekey="6LccmasUAAAAAIRhScC9asOrH_rQblw06weNOzDI"><div style={{ width: 304, height: 78 }}><div><iframe title="reCAPTCHA" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LccmasUAAAAAIRhScC9asOrH_rQblw06weNOzDI&amp;co=aHR0cHM6Ly9vbGF5LmNvbS5oazo0NDM.&amp;hl=zh-TW&amp;v=FDTCuNjXhn1sV0lk31aK53uB&amp;size=normal&amp;cb=3eqk7sopatt" width="304" height="78" role="presentation" name="a-1jsyjlk06t9o" frameBorder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe></div><textarea id="g-recaptcha-response-1" name="g-recaptcha-response" className="g-recaptcha-response" style={{width: 250, height: 40, border: 1 , margin: '10px 25px', padding: 0, resize: 'none', display: 'none'}}></textarea></div><iframe style={{display: 'none'}}></iframe></div>    
                                            <div className="form-actions">
                                                <input type="submit" className="button button--primary custom-login-submit event_profile_login" data-action-detail="Log_In" value="登入" />
                                                <a className="forgot-password" href="/login.php?action=reset_password">忘記密碼?</a>
                                            </div>
                                        </form>            
                                </div>
                            </li>
                        </ul>
                        <div className="dropdown dropdown--quickSearch" id="quickSearch" aria-hidden="true" tabIndex="-1" data-prevent-quick-search-close="">
                            <div className="container">
                                <div className="form-wrapper">
                                    <form className="form">
                                        <fieldset className="form-fieldset">
                                            <div className="form-field">
                                                <label className="is-srOnly" htmlFor="nav-quick-search">搜索</label>
                                                <input className="form-input" data-search-quick="" name="nav-quick-search" id="nav-quick-search" data-error-message="搜索字段不能為空。" placeholder="搜索產品" autoComplete="off" />
                                                <button type="submit" className="form-submit">
                                                    <span className="icon" aria-hidden="true">
                                                        <svg><use xlinkHref="#icon-search"></use></svg>
                                                    </span>
                                                </button>
                                            </div>
                                        </fieldset>
                                    </form>
                                    <section className="quickSearchResults" data-bind="html: results"></section>
                                </div>
                            </div>    
                        </div>
                    </nav>
                </div>
            </header>
        );
    }
}

class Main extends React.Component {

    render() {
        return (
        <div className="body" id="main-content">
            <div className="container">
                <Breadcrumb />
                <Content />
            </div>
        </div>
        );
    }
}

class Breadcrumb extends React.Component {
    render() {
        return (
            <nav aria-label="Breadcrumb">
                <ol className="breadcrumbs" itemScope="" itemType="http://schema.org/BreadcrumbList">
                    <li className="breadcrumb " itemProp="itemListElement" itemScope="" itemType="http://schema.org/ListItem">
                        <a className="breadcrumb-label" itemProp="item" href="https://olay.com.hk/">
                            <span itemProp="name">
                                    OLAY
                            </span>
                        </a>
                        <meta itemProp="position" content="1" />
                    </li>

                    <li className="breadcrumb is-active" itemProp="itemListElement" itemScope="" itemType="http://schema.org/ListItem">
                        <a className="breadcrumb-label" itemProp="item" href="https://olay.com.hk/productline" aria-current="page">
                            <span itemProp="name">
                                &nbsp;產品系列
                            </span>
                        </a>
                        <meta itemProp="position" content="3" />
                    </li>
                </ol>
            </nav>
        );
    }
}

class Content extends React.Component {
    render() {
        return (
            <div className="page">
                <Sidebar />
                <ItemList />
            </div>
        );
    }
}

class Sidebar extends React.Component {
    render() {
        return (
            <aside className="page-sidebar" id="faceted-search-container">
                <nav>
                    <div id="facetedSearch" className="facetedSearch sidebarBlock">
                
                        <a href="#facetedSearch-navList" role="button" className="facetedSearch-toggle toggleLink" data-collapsible="" aria-label="分類" aria-controls="facetedSearch-navList" aria-expanded="false">
                            <span className="facetedSearch-toggle-text">分類</span>

                            <span className="facetedSearch-toggle-indicator">
                                <span className="toggleLink-text toggleLink-text--on">
                                    

                                    <span className="icon" aria-hidden="true">
                                        <svg><use xlinkHref="#icon-remove"></use></svg>
                                    </span>
                                </span>

                                <span className="toggleLink-text toggleLink-text--off">
                                    

                                    <span className="icon" aria-hidden="true">
                                        <svg><use xlinkHref="#icon-add"></use></svg>
                                    </span>
                                </span>
                            </span>
                        </a>


                        <div id="facetedSearch-navList" className="facetedSearch-navList blocker-container" aria-hidden="true">
                            <div className="accordion accordion--navList">
                                <div className="accordion-block">
                                    <div className="accordion-navigation toggleLink" role="button" data-collapsible="#facetedSearch-content--categories" aria-label="產品系列" aria-controls="facetedSearch-content--categories" aria-expanded="false">
                                        <h5 className="accordion-title">產品系列</h5>

                                        <div className="accordion-navigation-actions">
                                            <svg className="icon accordion-indicator toggleLink-text toggleLink-text--off">
                                                <use xlinkHref="#icon-add"></use>
                                            </svg>
                                            <svg className="icon accordion-indicator toggleLink-text toggleLink-text--on">
                                                <use xlinkHref="#icon-remove"></use>
                                            </svg>
                                        </div>
                                    </div>
                                    <div id="facetedSearch-content--categories" className="accordion-content" aria-hidden="true">
                                        <ul id="facetedSearch-navList--categories" data-facet="categories" className="navList" data-has-more-results="false">
                                            <li className="navList-item">
                                                <a href="https://olay.com.hk/productline/goldenaura" className="navList-action" title="GOLDEN AURA抗氧酵母青春系列">GOLDEN AURA抗氧酵母青春系列(4)</a>
                                            </li>
                                            <li className="navList-item">
                                                <a href="https://olay.com.hk/productline/regenerist" className="navList-action" title="REGENERIST新生高效系列">REGENERIST新生高效系列(3)</a>
                                            </li>
                                            <li className="navList-item">
                                                <a href="https://olay.com.hk/productline/whiteradiance" className="navList-action" title="WHITE RADIANCE高效透白光塑系列">WHITE RADIANCE高效透白光塑系列(4)</a>
                                            </li>
                                            <li className="navList-item">
                                                <a href="https://olay.com.hk/productline/proxbyolay" className="navList-action" title="PROX BY OLAY科研級精華系列">PROX BY OLAY科研級精華系列(9)</a>
                                            </li>
                                            <li className="navList-item">
                                                <a href="https://olay.com.hk/productline/keithharingcrossover" className="navList-action" title="OLAY X KEITH HARING聯乘系列">OLAY X KEITH HARING聯乘系列(3)</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="accordion-block">
                                    <div className="accordion-nav-clear-holder">
                                        <div className="accordion-navigation toggleLink" role="button" data-collapsible="#facetedSearch-content--product-type" aria-label="肌膚護理" aria-controls="facetedSearch-content--product-type" aria-expanded="false">
                                            <h5 className="accordion-title">
                                                肌膚護理
                                            </h5>

                                            <div className="accordion-navigation-actions">
                                                <svg className="icon accordion-indicator toggleLink-text toggleLink-text--off">
                                                    <use xlinkHref="#icon-add"></use>
                                                </svg>
                                                <svg className="icon accordion-indicator toggleLink-text toggleLink-text--on">
                                                    <use xlinkHref="#icon-remove"></use>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="facetedSearch-content--product-type" className="accordion-content" aria-hidden="true">
                                        <ul id="facetedSearch-navList--product-type" data-facet="Product Type" className="navList" data-has-more-results="false">
                                            <li className="navList-item">
                                                <a href="/productline?_bc_fsnf=1&amp;Product+Type=%E7%88%BD%E8%86%9A" className="navList-action navList-action--checkbox" rel="nofollow" data-faceted-search-facet="">
                                                    爽膚
                                                        <span>(3)</span>

                                                    <span className="navList-action-close" aria-hidden="true">
                                                        <svg className="icon">
                                                            <use xlinkHref="#icon-close"></use>
                                                        </svg>
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="navList-item">
                                                <a href="/productline?_bc_fsnf=1&amp;Product+Type=%E7%9C%BC%E5%91%A8%E8%AD%B7%E7%90%86" className="navList-action navList-action--checkbox" rel="nofollow" data-faceted-search-facet="">
                                                    眼周護理
                                                        <span>(1)</span>

                                                    <span className="navList-action-close" aria-hidden="true">
                                                        <svg className="icon">
                                                            <use xlinkHref="#icon-close"></use>
                                                        </svg>
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="navList-item">
                                                <a href="/productline?_bc_fsnf=1&amp;Product+Type=%E7%B2%BE%E8%8F%AF" className="navList-action navList-action--checkbox" rel="nofollow" data-faceted-search-facet="">
                                                    精華
                                                        <span>(11)</span>

                                                    <span className="navList-action-close" aria-hidden="true">
                                                        <svg className="icon">
                                                            <use xlinkHref="#icon-close"></use>
                                                        </svg>
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="navList-item">
                                                <a href="/productline?_bc_fsnf=1&amp;Product+Type=%E9%98%B2%E6%9B%AC" className="navList-action navList-action--checkbox" rel="nofollow" data-faceted-search-facet="">
                                                    防曬
                                                        <span>(1)</span>

                                                    <span className="navList-action-close" aria-hidden="true">
                                                        <svg className="icon">
                                                            <use xlinkHref="#icon-close"></use>
                                                        </svg>
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="navList-item">
                                                <a href="/productline?_bc_fsnf=1&amp;Product+Type=%E9%9D%A2%E8%86%9C" className="navList-action navList-action--checkbox" rel="nofollow" data-faceted-search-facet="">
                                                    面膜
                                                        <span>(1)</span>

                                                    <span className="navList-action-close" aria-hidden="true">
                                                        <svg className="icon">
                                                            <use xlinkHref="#icon-close"></use>
                                                        </svg>
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="navList-item">
                                                <a href="/productline?_bc_fsnf=1&amp;Product+Type=%E9%9D%A2%E9%9C%9C" className="navList-action navList-action--checkbox" rel="nofollow" data-faceted-search-facet="">
                                                    面霜
                                                        <span>(5)</span>

                                                    <span className="navList-action-close" aria-hidden="true">
                                                        <svg className="icon">
                                                            <use xlinkHref="#icon-close"></use>
                                                        </svg>
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                             </div>
                        <div className="blocker" style={{display: 'none'}}></div>
                        </div>
                    </div>
                </nav>
            </aside>
        );
    }
}

class ItemList extends React.Component {

    rating(star){
        let content = [];
        for(let i = 0; i < star; i++){
            content.push(
            <span className="icon icon--ratingFull">
                <svg>
                    <use xlinkHref="#icon-star">
                    <svg viewBox="0 0 26 28" id="icon-star"> <path d="M0 10.109q0-0.578 0.875-0.719l7.844-1.141 3.516-7.109q0.297-0.641 0.766-0.641t0.766 0.641l3.516 7.109 7.844 1.141q0.875 0.141 0.875 0.719 0 0.344-0.406 0.75l-5.672 5.531 1.344 7.812q0.016 0.109 0.016 0.313 0 0.328-0.164 0.555t-0.477 0.227q-0.297 0-0.625-0.187l-7.016-3.687-7.016 3.687q-0.344 0.187-0.625 0.187-0.328 0-0.492-0.227t-0.164-0.555q0-0.094 0.031-0.313l1.344-7.812-5.688-5.531q-0.391-0.422-0.391-0.75z"></path> </svg>
                    </use>
                </svg>
            </span> 
            );
        }

        for(let i = 0; i < 5-star; i++){
            content.push(
            <span className="icon icon--ratingEmpty">
                <svg>
                    <use xlinkHref="#icon-star">
                    <svg viewBox="0 0 26 28" id="icon-star"> <path d="M0 10.109q0-0.578 0.875-0.719l7.844-1.141 3.516-7.109q0.297-0.641 0.766-0.641t0.766 0.641l3.516 7.109 7.844 1.141q0.875 0.141 0.875 0.719 0 0.344-0.406 0.75l-5.672 5.531 1.344 7.812q0.016 0.109 0.016 0.313 0 0.328-0.164 0.555t-0.477 0.227q-0.297 0-0.625-0.187l-7.016-3.687-7.016 3.687q-0.344 0.187-0.625 0.187-0.328 0-0.492-0.227t-0.164-0.555q0-0.094 0.031-0.313l1.344-7.812-5.688-5.531q-0.391-0.422-0.391-0.75z"></path> </svg>
                    </use>
                </svg>
            </span>
            );
        }
        return content;
    }

    render() {
        return (
        <main className="page-content" id="product-listing-container">
            <div className="list-count">共 <span className="count">{data.length}</span> 款產品</div>
            <ul className="productGrid">
                {
                    data.map((item, index) =>(

                        <li className="product">
                                <article className="card">
                                    <figure className="card-figure">
                                        <a href="#">
                                            <div className="card-img-container">
                                                <img src={"images/"+item.filename} alt={item.name} title={item.name} data-sizes="auto" className="card-image lazyautosizes lazyloaded" />
                                            </div>
                                        </a>

                                        <figcaption className="card-figcaption">
                                            <div className="card-figcaption-body">
                                                <div className="product-wishlist">
                                                    <a className="button button--primary wishlist-button event_buy_now_add_to_wishlist">
                                                        <span className="icon icon-heart-empty" aria-hidden="true">
                                                            <svg><use xlinkHref="#icon-heart"></use></svg>
                                                        </span>
                                                     </a>
                                                </div>
                                            </div>
                                        </figcaption>
                                    </figure>

                                    <div className="card-body">
                                        <h3 className="card-title" style={{overflowWrap: 'break-word'}}><a href="#">{item.name}</a></h3>


                                        <p
                                            className="card-description"
                                        >
                                        {item.description}
                                        </p>

                                        {(() => {

                                            if (typeof(item.price) !== 'undefined') {
                                                return (
                                                    <div className="card-price">
                                                        <div className="price-section price-section--withoutTax">
                                                            <span data-product-price-without-tax="" className="price price--withoutTax">${item.price}</span>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        })()}


                                        <div className="card-ratings">
                                            <p className="card-text">
                                                <span className="rating--small">
                                                {
                                                    this.rating(item.star)
                                                }
                                                </span>
                                            </p>
                                        </div>
                                        {(() => {
                                            if (typeof(item.price) !== 'undefined') {
                                                return (
                                                    <div className="card-actions">
                                                        <div className="js-product-has-options">
                                                            <button type="button" className="button button--primary event_buy_now_add_to_cart js-card-addToCart">加入購物車</button>
                                                        </div>
                                                        <a href="#" className="button-link">
                                                            <span>產品詳情</span>
                                                        </a>
                                                    </div>
                                                )
                                            }
                                        })()}

                                    </div>
                                </article>
                        </li>
                    ))
                }
            </ul>
        </main>
        );
    }
}


// class Home extends React.Component {
//     render() {
//         return (
//         <>
//             <h2>Home</h2>
//             <main className="container">
//                 <img src="/diagram.png" />
//             </main>
//         </>
//         );
//     }
// }

// class Images extends React.Component {
//     render() {
//         return (
//             <>
//             <h2>Images</h2>
//             <Main/>
//             </>
//         );
//     }
// }



// class Main extends React.Component {
//     render() {
//         return (
//             <main className="container">
//                 <FileCard/>
//             </main>
//         );
//     }
// }

// class FileCard extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = { selected: -1 };
//     }

//     handleMouseOver(index) {
//         if(this.state.selected != index)
//             this.setState({selected: index});
//     }

//     handleMouseOut() {
//         this.setState({selected: -1});
//     }

//     render() {
//         return (
//         <Router>
//             {
//             data.map((file, index) =>(
                
//                 <div key={index} onMouseOver={() => this.handleMouseOver(index)}  onMouseOut={() => this.handleMouseOut()} className="card d-inline-block m-2" style={{width: this.state.selected==index ? 220 : 200}}>
//                     <img src={"/images/"+file.filename} alt={file.remarks} className="w-100"/>
//                     <div className="card-body">
//                     <Link to={"/file/"+index}><h6 className="card-title">{file.filename}</h6></Link>
//                         <p className="card-text">Year: {file.year}</p>
//                         { this.state.selected==index &&
//                         <p className="card-text">{file.remarks}</p> }
                        
//                     </div>
//                 </div>
//             ))
//             }

//             <Switch> 
//             <Route path="/file/:id" component={File} />  
//             </Switch>
//         </Router>
//         );
//     }
// }


// function File() {
//     let { id } = useParams();
//     return (
//         <>
//         <img src={"/images/"+data[id].filename} alt={data[id].remarks} className="w-100"/> 
//         <h6>{data[id].filename}</h6>
//         <p>Year: {data[id].year}</p>
//         <p>{data[id].remarks}</p> 
//         </>
//     );
// }


// class Slideshow extends React.Component{

//     constructor(props) {
//         super(props);
//         this.state = { currentImageID: 0, currentInterval: 1000, interval: null };
//     }

    

//     handleClick(action, e){
//         switch(action){
//             case 1:
//                 clearInterval(this.state.interval);
//                 this.state.interval = setInterval(()=>{
//                     if(this.state.currentImageID != 4)
//                         this.setState({currentImageID: this.state.currentImageID+1 });
//                     else
//                         this.setState({currentImageID: 0});
//                 }, this.state.currentInterval);
//                 break;
//             case 2:
//                 clearInterval(this.state.interval);
//                 break;
//             case 3:
//                 this.setState({currentInterval: this.state.currentInterval*2 });
//                 clearInterval(this.state.interval);
//                 this.state.interval = setInterval(()=>{
//                     if(this.state.currentImageID != 4)
//                         this.setState({currentImageID: this.state.currentImageID+1 });
//                     else
//                         this.setState({currentImageID: 0});
//                 }, this.state.currentInterval);
//                 break;
//             case 4:
//                 this.setState({currentInterval: this.state.currentInterval/2 });
//                 clearInterval(this.state.interval);
//                 this.state.interval = setInterval(()=>{
//                     if(this.state.currentImageID != 4)
//                         this.setState({currentImageID: this.state.currentImageID+1 });
//                     else
//                         this.setState({currentImageID: 0});
//                 }, this.state.currentInterval);
//                 break;
//         }
//     }



//     render(){
//         return (
//             <>
//             <h2>SlideShow</h2>
//             <main className="container">
//             <button onClick={(e)=> this.handleClick(1, e)}>Start</button>
//             <button onClick={(e)=> this.handleClick(2, e)}>Stop</button>
//             <button onClick={(e)=> this.handleClick(3, e)}>Slower</button>
//             <button onClick={(e)=> this.handleClick(4, e)}>Faster</button>
                
//             <div className="carousel slide">
//                 <img src={"images/"+data[this.state.currentImageID].filename} className="w-100"/>
//             </div>
//             </main>
//             </>
//         );
//     }

// }



// function LongLink({label, to, activeOnlyWhenExact}) {
//     let match = useRouteMatch({
//     path: to,
//     exact: activeOnlyWhenExact
//     });
//     return (
//     <li className={match ? "active" : ""}>
//     {match && "> "}
//     <Link to={to}>{label}</Link>
//     </li>
//     );
// }


// function NoMatch() {
//     let location = useLocation();
//     return (
//     <div>
//     <h3>
//     No match for <code>{location.pathname}</code>
//     </h3>
//     </div>
//     );
// }

ReactDOM.render(<App name="CUHK Pictures"/>, document.querySelector("#app"));