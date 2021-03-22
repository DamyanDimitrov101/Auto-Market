import { Link } from "react-router-dom";
import './Car.css';

function Car({ car }) {
    return (
        <li className="CarItem">
            <Link to="/">
                <article className="CarItem-Box">
                    <div className="CarItem-Box-pic-wrapper">
                        <img src={car.picture} alt="No Photos available" className="CarItem-Box-pic" />
                    </div>
                    <div className="CarItem-Box-content">
                        <label htmlFor="make">                            
                            <strong>Make:</strong> 
                            <p id="make" className="CarItem-Box-content-make">{car.make}</p>
                        </label>

                        <label htmlFor="model">
                           <strong>Model:</strong> 
                        <p id="model" className="CarItem-Box-content-model">{car.model}</p>
                        </label>

                        <label htmlFor="fuel">                            
                            <strong>Fuel:</strong> 
                        <p id="fuel" className="CarItem-Box-content-fuel">{car.fuel}</p>
                        </label>

                        <label htmlFor="color">
                        <strong>Color:</strong> 
                        <p id="color" className="CarItem-Box-content-color">{car.color}</p>
                        </label>

                        <label htmlFor="transmission">
                        <strong>Transmission:</strong>                             
                        <p id="transmission" className="CarItem-Box-content-transmission">{car.transmission}</p>
                        </label>

                        <label htmlFor="year">
                        <strong>Year:</strong>                             
                        <p id="year" className="CarItem-Box-content-year">{car.year}</p>
                        </label>
                    </div>
                </article>
            </Link>
        </li>
    );
}

export default Car;
