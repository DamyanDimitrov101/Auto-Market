import './SearchMenu.css';

function SearchMenu() {
    return (
        <aside className="SearchMenu">
            <h2 className="SearchMenu-title">Apply your search criteria</h2>

            <form action="" className="SearchMenu-form">
                <label htmlFor="make">
                    Make:
                    <input type="text" className="make" id="make"/>
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
                    Year:
                    <input type="text" className="year" id="year"/>
                </label>
            </form>
        </aside>
    );
}

export default SearchMenu;
