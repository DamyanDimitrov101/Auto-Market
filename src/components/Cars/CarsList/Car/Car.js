import { Link } from "react-router-dom";
import './Car.css';

function Car({ car }) {
    console.log(car.id);
    return (
        <li className="CarItem">
            <Link to="/">
                <article className="CarItem-Box">
                    <div className="CarItem-Box-pic-wrapper">
                        <img src={car.picture} alt="No Photos available" className="CarItem-Box-pic" />
                    </div>
                    <div className="CarItem-Box-content">
                        <p className="CarItem-Box-content-make">{car.make}</p>
                        <p className="CarItem-Box-content-model">{car.model}</p>
                        <p className="CarItem-Box-content-fuel">{car.fuel}</p>
                        <p className="CarItem-Box-content-color">{car.color}</p>
                        <p className="CarItem-Box-content-transmission">{car.transmission}</p>
                        <p className="CarItem-Box-content-year">{car.year}</p>
                    </div>
                </article>
            </Link>
        </li>
    );
}

export default Car;
