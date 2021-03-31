import { useEffect, useState } from 'react';
import './SearchMenu.css';
import { getMakes, getModels, getColors } from '../../../services/SearchMenu-Services';

function SearchMenu({ onMenuSearchSubmit, setModel }) {
    let [makes, setMakes] = useState([]);
    let [models, setModels] = useState([]);
    let [colors, setColors] = useState([]);


    useEffect(() => {
        getMakes()
            .then(makes => {
                setMakes(makes);
            });

        let makeSelected = document.getElementById("make").value;
        getModels(makeSelected)
            .then(models => {
                setModels(models);
            });

        getColors()
            .then(colors => {
                setColors(colors);
            });
    }, []);

    function handleMakeChange(e) {
        if (e.target.value==="All") {
            setModel("All");
        }
        getModels(e.target.value)
            .then(models => {
                setModels(models);
            });
    }

    function handleModelChange(e) {
        setModel(e.target.value);
    }



    return (
        <aside className="SearchMenu">
            <h2 className="SearchMenu-title">Apply your search criteria:</h2>

            <form className="SearchMenu-form" onSubmit={onMenuSearchSubmit}>
                <label htmlFor="make">
                    Make:
                   <select name="make" id="make" defaultValue="All" onChange={handleMakeChange}>
                        <option value="All" disabled hidden>Choose here</option>
                        <option value="All">All</option>
                        {makes.map(m => {
                            return <option key={m} value={m}>{m}</option>
                        })};n
                   </select>
                </label>
                <label htmlFor="model">
                    Model:
                   <select name="model" id="model" defaultValue="All" onChange={handleModelChange}>
                        <option value="All">All</option>

                        {models.map(m => <option key={m} value={m}>{m}</option>)};
                   </select>
                </label>
                <label htmlFor="priceAbove">
                    Price above:
                    <input id="priceAbove" name="priceAbove" className="price" placeholder=" e.g 100" type="number" min="10" max="10000000" step="1" />
                </label>
                <label htmlFor="priceBellow">
                    Price bellow:
                    <input id="priceBellow" name="priceBellow" className="price" placeholder=" e.g 1000" type="number" min="10" max="10000000" step="1" />
                </label>
                <label htmlFor="year">
                    First registration:
                    <input id="year" name="firstRegistration" className="year" placeholder=" e.g 2010" type="number" min="1900" max="2099" step="1" />
                </label>
                <label htmlFor="transmission">
                    Transmission:
                    <select name="transmission" id="transmission" defaultValue="DEFAULT">
                        <option value="All" disabled >Choose here</option>
                        <option value="All">All</option>

                        <option value="automatic">automatic</option>
                        <option value="semi-automatic">semi-automatic</option>
                        <option value="manual">manual</option>
                    </select>
                </label>
                <label htmlFor="fuel">
                    Fuel:
                    <select name="fuel" id="fuel" defaultValue="All">
                        <option value="DEFAULT" disabled hidden>Choose here</option>
                        <option value="All">All</option>

                        <option value="gasoline">gasoline</option>
                        <option value="diesel">diesel</option>
                    </select>
                </label>
                <label htmlFor="color">
                    Color:
                    <select name="model" id="color" defaultValue="All">
                        <option value="DEFAULT" disabled hidden>Choose here</option>
                        <option value="All">All</option>

                        {colors.map(c => <option key={c} value={c}>{c}</option>)};
                   </select>
                </label>

                <input type="submit" className="SearchMenu-form-submitBtn submitBtn" value="Find" />
            </form>
        </aside>
    );
}

export default SearchMenu;
