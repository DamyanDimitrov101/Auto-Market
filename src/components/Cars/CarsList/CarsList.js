import Car from './Car';

import './CarsList.css';

function CarsList({ cars }) {    
  return (
    <div className="CarsList">
      <ul className="CarsList-list">
        {cars.map(car => {
            return <Car  key={car.id.toString()}  car={car}/>
        })}
      </ul>
    </div>
  );
}

export default CarsList;
