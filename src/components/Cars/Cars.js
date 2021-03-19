import './Cars.css';

import SearchMenu from './SearchMenu';
import CarsList from './CarsList';

function Cars() {
    return (
        <main className="Main-Cars">
            <div className="Cars">
                <SearchMenu className="Cars-SearchMenu" />

                <CarsList className="Cars-CarsList"/>
            </div>
        </main>
    );
}

export default Cars;
