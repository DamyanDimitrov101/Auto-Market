import { Link } from 'react-router-dom'
import './ProfileInfo.css';

function ProfileInfo({profilData, showNotification}) {
    const newTo = { 
        pathname: "./CreateNewCar", 
        showNotification: showNotification 
    };
    

    return (
        <aside className="ProfileInfo-wrapper">
            <div className="ProfileInfo">
                <label htmlFor="photo">
                    Photo:
                    <p>{profilData.photo}</p>
                </label>
                <label htmlFor="name">
                    Name:
                    <p>{profilData.name}</p>
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
