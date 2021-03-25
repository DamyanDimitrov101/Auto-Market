import { Link, useHistory } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getOne } from '../../../../../services/Cars-Services';
import './CarInfo.css';


function CarInfo({
    match
}) {
    let [car, setCar] = useState({});


    const history = useHistory();

    useEffect(() => {
        getOne(match.params.id)
            .then(data => {
                setCar(data);
            });

        document.getElementById("make").disabled = true;
        // TODO: userDisabled
    }, []);

    return (
        <main className="Main-CarInfo">
            <div className="CarInfo-wrapper">
            <button className="CarInfo-wrapper-backBtn back-Btn" onClick={() => history.goBack()}>Go back</button>
                <div className="CarInfo">
                    <section className="CarInfo-details">
                        <article className="CarInfo-details-imageWrapper">
                            <img src={car.picture} alt="No Photo!" />
                        </article>

                        <form className="CarInfo-details-content">
                            <label htmlFor="make" className="CarInfo-details-content-label">
                                Make:
                            <input id="make" className="CarInfo-details-content-text" defaultValue={car.make}></input>
                            </label>
                            <label htmlFor="model" className="CarInfo-details-content-label">
                                Model:
                            <input id="model" className="CarInfo-details-content-text" defaultValue={car.model} ></input>
                            </label>
                            <label htmlFor="year" className="CarInfo-details-content-label">
                                Year:
                            <input id="year" className="CarInfo-details-content-text" defaultValue={car.year} ></input>
                            </label>
                            <label htmlFor="fuel" className="CarInfo-details-content-label">
                                Fuel:
                            <input id="fuel" className="CarInfo-details-content-text" defaultValue={car.fuel}></input>
                            </label>
                            <label htmlFor="transmission" className="CarInfo-details-content-label">
                                Transmission:
                            <input id="transmission" className="CarInfo-details-content-text" defaultValue={car.transmission} ></input>
                            </label>
                            <label htmlFor="color" className="CarInfo-details-content-label">
                                Color:
                            <input id="color" className="CarInfo-details-content-text" defaultValue={car.color}></input>
                            </label>
                            <label htmlFor="comment" className="CarInfo-details-content-label">
                                Comment:
                            <textarea id="comment" className="CarInfo-details-content-text" defaultValue={car.comment}></textarea>
                            </label>
                        </form>
                    </section>
                </div>
            </div>
        </main>
    );
}

export default CarInfo;
