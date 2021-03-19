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
                                <a href="#">
                                    Cars
                            </a>
                            </li>
                            <li>
                                <a href="#">
                                    My offers
                            </a>
                            </li>
                        </ul>


                        <ul className="footer-nav-list">
                            <li>
                                <a href="#">
                                    Ask
                            </a>
                            </li>
                            <li>
                                <a href="#">
                                    Contact us
                            </a>
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
                            <a href="#"><i className="fab fa-facebook"></i></a>
                        </li>
                        <li>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                        </li>
                        <li>
                            <a href="#"><i className="fab fa-twitter-square"></i></a>
                        </li>                    
                    </ul>
                </article>
            </footer>
        </div>
    );
}

export default Footer;
