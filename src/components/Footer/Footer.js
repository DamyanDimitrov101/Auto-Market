import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <div className="footer-wrapper">
            <footer className="footer">
                <nav className="footer-nav-wrappper">
                    <h4 className="footer-nav-title">Visit also:</h4>

                    <article className="footer-nav">

                        <ul className="footer-nav-list">
                            <li>
                                <Link to="/Cars">
                                    Cars
                                </Link>
                            </li>
                            <li>
                                <Link to="/MyOffers">
                                    My offers
                                </Link>
                            </li>
                        </ul>


                        <ul className="footer-nav-list">
                            <li>
                                <Link to="/Ask">
                                    Ask
                                </Link>
                            </li>
                            <li>
                                <Link to="/Contacts">
                                    Contact us
                                </Link>
                            </li>
                        </ul>
                    </article>
                </nav>

                <article className="footer-copyRight">
                    <p className="footer-copyRight-text">
                        &copy; 2021 damqn_96@abv.bg. All Rights Reserved.
                    </p>
                </article>

                <article className="footer-socials">
                    <h4 className="footer-socials-title">Find us here:</h4>
                    <ul className="footer-socials-list">
                        <li>
                            <a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
                        </li>
                        <li>
                            <a href="https://twitter.com/?lang=bg"><i className="fab fa-twitter-square"></i></a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/"><i className="fab fa-youtube"></i></a>
                        </li>
                    </ul>
                </article>
            </footer>
        </div>
    );
}

export default Footer;
