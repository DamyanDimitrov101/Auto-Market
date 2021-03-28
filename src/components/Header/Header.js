import { Link, NavLink } from "react-router-dom";

import Logo from '../../assets/header-LOGO-PIC.png';

import './Header.css';

function Header() {
    return (
        <header className="Header">
            <div className="header-wrapper">
                <article className="logoArt">

                    <Link to="/" className="logoArt-href">
                        <img src={Logo} alt="AppLOGO" />
                        <p className="logoArt-title">Auto Market</p>
                    </Link>

                </article>

                <nav className="header-nav">
                    <ul className="header-nav-links">
                        <NavLink to="/Cars" activeClassName="active-header-nav-Link" exact={true}>
                            <li>
                                Cars
                            </li>
                        </NavLink>

                        <NavLink to="/MyProfile" activeClassName="active-header-nav-Link" exact={true}>
                            <li>
                            <i className="fas fa-wrench" id="active-header-nav-Link-icon"></i>
                                My Profile
                            </li>
                        </NavLink>

                        <NavLink to="/Ask" activeClassName="active-header-nav-Link" exact={true}>
                            <li>
                                Ask
                            </li>
                        </NavLink>

                        <NavLink to="/Contacts" activeClassName="active-header-nav-Link" exact={true}>
                            <li>
                                Contact us
                            </li>
                        </NavLink>
                    </ul>
                </nav>

                <article className="header-User">
                    <span className="header-User-LogIn"><Link to="/LogIn">Log In</Link></span>
                    <span className="header-User-Register"><Link to="/Register">Register</Link></span>
                </article>
            </div>
        </header>
    );
}

export default Header;
