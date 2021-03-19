import './LandingPage.css';

import askBenefitPic from '../../assets/askBenefit-Pic.jpg';
import myCarBenefitPic from '../../assets/myCarBenefit-Pic.png';
import findBenefitsPic from '../../assets/findBenefits-Pic.png';

function LandingPage() {
    return (
        <main className="Main-LandingPage">
            <section className="welcomeSection-wrapper">

                <section className="welcomeSection main-wrapper">
                    <article className="welcomeSection-CheckForOffers">
                        <h1 className="welcomeSection-CheckForOffers-title">The best place to find your future car</h1>

                        <p className="welcomeSection-CheckForOffers-more">
                            Check for our offers!
                        </p>

                        <button className="welcomeSection-CheckForOffers-showBtn">
                            Show more
                        </button>
                    </article>


                    <article className="welcomeSection-findLocalStore">
                        <h2 className="welcomeSection-findLocalStore-title">Easy access to our local second hand dealer in Burgas, Bulgaria</h2>

                        <button className="welcomeSection-findLocalStore-contactsBtn">Find our location</button>
                    </article>
                </section>
            </section>


            <section className="info-wrapper">

                <section className="info main-wrapper">
                    <h3 className="info-title">About us</h3>

                    <p className="info-content">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus sed ea labore corrupti delectus ducimus totam cupiditate nisi voluptatum fugiat dolorem cumque mollitia voluptate nostrum laborum, magnam consequatur molestias maxime.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus sed ea labore corrupti delectus ducimus totam cupiditate nisi voluptatum fugiat dolorem cumque mollitia voluptate nostrum laborum, magnam consequatur molestias maxime.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus sed ea labore corrupti delectus ducimus totam cupiditate nisi voluptatum fugiat dolorem cumque mollitia voluptate nostrum laborum, magnam consequatur molestias maxime.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus sed ea labore corrupti delectus ducimus totam cupiditate nisi voluptatum fugiat dolorem maxime.
                    </p>
                </section>
            </section>


            <section className="benefits-wrapper">
                <section className="benefits main-wrapper">
                    <article className="benefits-item">
                        <a href="#" className="benefits-item-Link">
                            <img src={askBenefitPic} alt="askPic" className="benefits-item-pic" />
                            <h4 className="benefits-item-title">Ask</h4>
                            <p className="benefits-item-content">You can reach us for anything you need to know about the available cars on site.</p>
                        </a>
                    </article>
                    <article className="benefits-item">
                        <a href="#" className="benefits-item-Link">
                            <img src={findBenefitsPic} alt="findBenefitsPic" className="benefits-item-pic" />
                            <h4 className="benefits-item-title">Find</h4>
                            <p className="benefits-item-content">Your dream car awaits you, find it now with our help.</p>
                        </a>
                    </article>
                    <article className="benefits-item">
                        <a href="#" className="benefits-item-Link">
                            <img src={myCarBenefitPic} alt="myCarBenefitPic" className="benefits-item-pic lastBenefit-Pic" />
                            <h4 className="benefits-item-title">Manage</h4>
                            <p className="benefits-item-content">Selling your car has never been easier.</p>
                        </a>
                    </article>
                </section>
            </section>
        </main>
    );
}

export default LandingPage;
