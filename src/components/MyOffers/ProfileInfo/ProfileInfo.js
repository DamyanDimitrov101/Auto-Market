import { Link } from 'react-router-dom'
import './ProfileInfo.css';

function ProfileInfo(profilData) {
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

            <Link to="./CreateNewCar" className="CreateNewCar-Link">
                <button>Create New Offer</button>
            </Link>
        </aside>
    );
}

export default ProfileInfo;
