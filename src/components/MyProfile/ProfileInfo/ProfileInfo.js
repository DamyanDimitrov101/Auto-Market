import { Link } from 'react-router-dom'
import './ProfileInfo.css';

function ProfileInfo({profilData}) {
    const newTo = { 
        pathname: "./CreateNewCar", 
    };
    
    return (
        <aside className="ProfileInfo-wrapper">
            <div className="ProfileInfo">
                <label htmlFor="photo">
                    <img className="ProfileInfo-photo-img" src={profilData.url}></img>
                </label>
                <label htmlFor="name">
                    Name:
                    <p>{profilData.name}</p>
                </label>
                <label htmlFor="phone">
                    Phone:
                    <p>{profilData.phone}</p>
                </label>
                <label htmlFor="email">
                    Email:
                    <p>{profilData.email}</p>
                </label>
            </div>

            <div className="createNewCar">

            <Link to={newTo} className="CreateNewCar-Link">
                <button>Create New Offer</button>
            </Link>
            </div>
        </aside>
    );
}

export default ProfileInfo;
