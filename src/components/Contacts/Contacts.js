import './Contacts.css';

function Contacts() {
    return (
        <main className="Main-Contacts">

                <iframe title="map" className="Contacts-map-frame" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=27.445467710495%2C42.52376756713205%2C27.46238708496094%2C42.53105750662827&layer=mapnik&marker=42.52741264322217%2C27.453922033309937"></iframe>
                <br />

            

            <div className="Contacts">
                <div className="Contacts-locationAndTime">

                <section className="Contacts-location">
                    <h2 className="Contacts-location-title">
                        Location:
                    </h2>
                    <p className="Contacts-location-text">
                        Burgas, Bulgaria, Transportna bul. &#35;9, 8008 
                    </p>
                </section>
                <section className="Contacts-workingTime">
                    
                    <h2 className="Contacts-workingTime-title">Working time:</h2>

                    <article className="Contacts-workingTime-MonToFrid">
                        <h4 className="Contacts-workingTime-MonToFrid-title">Monday to Friday:</h4>
                        <p className="Contacts-workingTime-MonToFrid-text">
                            09:00 to 18:00
                        </p>
                    </article>

                    <article className="Contacts-workingTime-Weekend">
                        <h4 className="Contacts-workingTime-Weekend-title">Weekend:</h4>

                        <p className="Contacts-workingTime-Weekend-text">
                            10:00 to 17:00
                        </p>
                    </article>


                </section>

                </div>

                <section className="Contacts-info">
                    <h2 className="Contacts-info-title">You can contact us here:</h2>
                    <div className="Contacts-info-items">

                        <article className="Contacts-info-email">
                            <h4 className="Contacts-info-email-title">Phone number:</h4>
                            <p className="Contacts-info-email-content">+359 887 446 812</p>
                        </article>

                        <article className="Contacts-info-email">
                            <h4 className="Contacts-info-email-title">Email:</h4>
                            <p className="Contacts-info-email-content">auto-market@abv.bg</p>
                        </article>

                        <article className="Contacts-info-socials">
                            <h4 className="Contacts-info-socials-title">Try find us here as well:</h4>
                            <ul className="Contacts-socials-list">
                                <li>
                                    <a href="#"><i className="fab fa-facebook"></i> AutoMarket</a>
                                </li>
                                <li>
                                    <a href="#"><i className="fab fa-instagram"></i> AutoMarket</a>
                                </li>
                                <li>
                                    <a href="#"><i className="fab fa-twitter-square"></i> AutoMarket</a>
                                </li>
                                <li>
                                    <a href="#"><i className="fab fa-youtube"></i> AutoMarket</a>
                                </li>
                            </ul>
                        </article>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default Contacts;
