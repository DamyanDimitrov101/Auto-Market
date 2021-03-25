import { useEffect, useState } from 'react';
import './SearchMenu.css';
import { getMakes, getModels } from '../../../services/SearchMenu-Services';

function SearchMenu() {
    let [makes, setMakes] = useState([]);
    let [models, setModels] = useState([]);

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
    }, []);

    function handleMakeChange(e) {
        getModels(e.target.value)
            .then(models => {
                setModels(models);
            });
    }

    function SearchMenuSubmit(e){
        e.preventDefault();
        console.log(e.target);
    }

    return (
        <aside className="SearchMenu">
            <h2 className="SearchMenu-title">Apply your search criteria:</h2>

            <form action="" className="SearchMenu-form" onSubmit={SearchMenuSubmit}>
                <label htmlFor="make">
                    Make:
                   <select name="make" id="make" defaultValue="DEFAULT" onChange={handleMakeChange}>
                        <option value="DEFAULT" disabled hidden>Choose here</option>
                        
                        {makes.map(m => {
                            return <option key={m} value={m}>{m}</option>
                        })};n
                   </select>
                </label>
                <label htmlFor="model">
                    Model:
                   <select name="model" id="model" default="Model">
                        {models.map(m => <option key={m} value={m}>{m}</option>)};
                   </select>
                </label>
                <label htmlFor="year">
                    First registration:
                    <input id="year" className="year" type="number" min="1900" max="2099" step="1" />
                </label>
                <label htmlFor="transmission">
                    Transmission:
                    <select name="transmission" id="transmission" defaultValue="DEFAULT">
                        <option value="DEFAULT" disabled hidden>Choose here</option>
                        <option value="automatic">automatic</option>
                        <option value="semi-automatic">semi-automatic</option>
                        <option value="manual">manual</option>
                    </select>
                </label>
                <label htmlFor="fuel">
                    Fuel:
                    <select name="fuel" id="fuel" defaultValue="DEFAULT">
                        <option value="DEFAULT" disabled hidden>Choose here</option>
                        <option value="gasoline">gasoline</option>
                        <option value="diesel">diesel</option>
                    </select>
                </label>
                <label htmlFor="color">
                    Color:
                    <input type="text" className="color" id="color" />
                </label>

                <input type="submit" className="SearchMenu-form-submitBtn" value="Find" />
            </form>
        </aside>
    );
}

export default SearchMenu;
