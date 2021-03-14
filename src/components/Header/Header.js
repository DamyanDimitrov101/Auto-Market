import './Header.css';

function Header() {
    return (
        <header className="Header">
            <div className="header-wrapper">
                    <article className="logoArt">
                        <a href="#" className="logoArt-href">
                        <img src='header-LOGO-PIC.png' alt="AppLOGO"/>
                        <p className="logoArt-title">Auto Market</p>
                        </a>
                    </article>

                    <nav className="header-nav">
                        <ul className="header-nav-links">
                            <a href="">
                            <li>
                                Cars
                            </li>
                            </a>

                            <a href="">
                            <li>
                                My Offers
                            </li>
                            </a>

                            <a href="">
                            <li>
                                Ask
                            </li>
                            </a>

                            <a href="">
                            <li>
                                Contact us
                            </li>
                            </a>
                        </ul>
                    </nav>

                    <article className="header-User">
                        <span className="header-User-LogIn"><a href="">Log In</a></span>
                        <span className="header-User-Register"><a href="">Register</a></span>
                    </article>
            </div>
        </header>
    );
}

export default Header;
