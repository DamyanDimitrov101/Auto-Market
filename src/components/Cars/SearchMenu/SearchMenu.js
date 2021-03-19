import { useEffect } from 'react';
import './SearchMenu.css';
import {getAll} from '../../../services/Cars-Services';

function SearchMenu() {
    useEffect( () => {
        getAll()
        .then(res=>console.log(res));

    }, []);

    return (
        <aside className="SearchMenu">
            <h2 className="SearchMenu-title">Apply your search criteria:</h2>

            <form action="" className="SearchMenu-form">
                <label htmlFor="make">
                    Make:
                   <select name="make" id="make" default="Make">
                       <option value="bmw">BMW</option>
                       <option value="bmw">BMW</option>
                       <option value="bmw">BMW</option>
                   </select>
                </label>
                <label htmlFor="model">
                    Model:
                    <input type="text" className="model" id="model"/>
                </label>
                <label htmlFor="year">
                    Year:
                    <input type="text" className="year" id="year"/>
                </label>
                <label htmlFor="transmission">
                    Transmission:
                    <input type="text" className="transmission" id="transmission"/>
                </label>
                <label htmlFor="fuel">
                    Fuel:
                    <input type="text" className="fuel" id="fuel"/>
                </label>                
                <label htmlFor="color">
                    Color:
                    <input type="text" className="color" id="color"/>
                </label>

                <input type="submit" className="SearchMenu-form-submitBtn" value="Find"/>
            </form>
        </aside>
    );
}

export default SearchMenu;
