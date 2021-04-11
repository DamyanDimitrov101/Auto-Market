import { useHistory } from "react-router-dom";
import { useEffect, useState, useContext } from 'react';
import { getOne } from '../../../../../services/Cars-Services';
import { getOwnerPhone } from '../../../../../services/User-Services';

import { deleteCar, editCar } from "../../../../../services/Cars-Services";
import { InputError, onInputBlur } from "../../../../shared/inputError";
import { ConfirmBox, handleConfirmationBox } from "../../../../shared/confirmBox";

import userContext from "../../../../../contexts/userContext";
import notificationContext from "../../../../../contexts/notificationContext";


import './CarInfo.css';


function CarInfo({
    match
}) {
    let [user, setUser] = useContext(userContext);
    let [notification, dispatch] = useContext(notificationContext);

    let [car, setCar] = useState({});
    let [phone, setPhone] = useState('');
    let [overlayDisplay, setOverlayDisplay] = useState('none');
    let [carInfo, setCarInfo] = useState('Main-CarInfo');
    const [editTask, setEditTask] = useState(false);
    const [deleteTask, setDeleteTask] = useState(false);
    let [errorMessage, setErrorMessage] = useState({
        Make: '',
        Model: '',
        Year: '',
        Fuel: '',
        Transmission: '',
        Color: '',
    });

    const history = useHistory();

    useEffect(() => {
        getOne(match.params.id)
            .then(data => {
                setCar(data);

                getOwnerPhone(data.ownerId)
                    .then(ph => {
                        setPhone(ph);
                    });
            });


        //document.getElementById("make").disabled = true;
        // TODO: userDisabled

    }, []);


    const handleEditTask = (e) => {
        e.preventDefault();
        const { make, model, fuel, year, transmission, color, comment } = e.target.parentNode.parentNode.parentNode.parentNode;
        
        if (make.value=='' || 
            model.value==''||
            fuel.value==''||
            year.value==''||
            transmission.value==''||
            color.value==''||
            comment.value=='') {
                dispatch({type:'ERROR', payload: `Please fill all the inputs!`});
                return;
        }

        let updatedCar = {
            make: make.value,
            model: model.value,
            fuel: fuel.value,
            year: year.value,
            transmission: transmission.value,
            color: color.value,
            comment: comment.value
        };
        editCar(car.id, car, updatedCar)
            .then(res => {
                history.push(`/MyProfile`);
                dispatch({type:'SUCCESS', payload: `The car was successfully edited!`});
            })
            
        };
        
        const handleDeleteTask = (e) => {
            e.preventDefault();
            
            deleteCar(car.id)
            .then(res => {
                history.push('/MyProfile');
                dispatch({type:'SUCCESS', payload: `The car was successfully deleted!`});
            });

    };


    const onContactOwnerClick = () => {
        setOverlayDisplay(oldState => oldState = oldState === 'none' ? 'block' : 'none');
        setCarInfo(oldState => oldState === 'Main-CarInfo blur' ? 'Main-CarInfo' : 'Main-CarInfo blur');
    }

    const onMainCarInfoClick = (e) => {
        if (e.target.className!=='contactOwner') {            
            setOverlayDisplay('none');
            setCarInfo('Main-CarInfo');    
        } 
    }


    var myBlurFunction = function (state) {
        /* state can be 1 or 0 */
        var containerElement = document.getElementById('main_container');
        var overlayEle = document.getElementById('overlay');

        // if (state) {
        //     overlayEle.style.display = 'block';
        //     containerElement.setAttribute('className', 'blur');
        // } else {
        //     overlayEle.style.display = 'none';
        //     containerElement.setAttribute('className', null);
        // }
    };

    return (
        <>
            <h3 className='numberClick' style={{ display: `${overlayDisplay}` }}>{phone}</h3>
            <main className={carInfo} onClick={onMainCarInfoClick}>
                <div className="CarInfo-wrapper">
                    <button className="CarInfo-wrapper-backBtn back-Btn" onClick={() => history.goBack()}>Go back</button>
                    <div className="CarInfo">
                        <form className="CarInfo-details-content">
                            <section className="CarInfo-details">
                                <article className="CarInfo-details-imageWrapper">
                                    <img src={car.picture} alt="No Photo!" />
                                </article>

                                <article className="CarInfo-details-content-wrapper">

                                    <label htmlFor="make" className="CarInfo-details-content-label">
                                        Make:
                            <input
                                            id="make"
                                            className="CarInfo-details-content-text"
                                            onBlur={(e) => onInputBlur(e, setErrorMessage, 'Make')}
                                            defaultValue={car.make}
                                        />
                                        <InputError>{errorMessage.Make}</InputError>
                                    </label>
                                    <label htmlFor="model" className="CarInfo-details-content-label">
                                        Model:
                            <input
                                            id="model"
                                            className="CarInfo-details-content-text"
                                            onBlur={(e) => onInputBlur(e, setErrorMessage, 'Model')}
                                            defaultValue={car.model}
                                        />

                                        <InputError>{errorMessage.Model}</InputError>
                                    </label>
                                    <label htmlFor="year" className="CarInfo-details-content-label">
                                        Year:
                            <input
                                            id="year"
                                            className="CarInfo-details-content-text"
                                            onBlur={(e) => onInputBlur(e, setErrorMessage, 'Year')}
                                            defaultValue={car.year}
                                        />
                                        <InputError>{errorMessage.Year}</InputError>
                                    </label>
                                    <label htmlFor="fuel" className="CarInfo-details-content-label">
                                        Fuel:
                            <input
                                            id="fuel"
                                            className="CarInfo-details-content-text"
                                            defaultValue={car.fuel}
                                            onBlur={(e) => onInputBlur(e, setErrorMessage, 'Fuel')}
                                        />
                                        <InputError>{errorMessage.Fuel}</InputError>
                                    </label>
                                    <label htmlFor="transmission" className="CarInfo-details-content-label">
                                        Transmission:
                            <input
                                            id="transmission"
                                            className="CarInfo-details-content-text transmissionInput"
                                            onBlur={(e) => onInputBlur(e, setErrorMessage, 'Transmission')}
                                            defaultValue={car.transmission}
                                        />
                                        <InputError>{errorMessage.Transmission}</InputError>
                                    </label>
                                    <label htmlFor="color" className="CarInfo-details-content-label">
                                        Color:
                            <input
                                            id="color"
                                            className="CarInfo-details-content-text"
                                            onBlur={(e) => onInputBlur(e, setErrorMessage, 'Color')}
                                            defaultValue={car.color}
                                        />
                                        <InputError>{errorMessage.Color}</InputError>
                                    </label>
                                    <label htmlFor="comment" className="CarInfo-details-content-label">
                                        Comment:
                            <textarea id="comment" className="CarInfo-details-content-text CarInfo-textArea" defaultValue={car.comment}></textarea>
                                    </label>
                                </article>
                            </section>

                            {car.ownerId === user.uid ?

                                <section className="CarInfo-modify remodal-bg">
                                    <input type="submit"
                                        onClick={(e) => handleConfirmationBox(e, editTask, setEditTask)}
                                        className="CarInfo-modify-Btn button yellow"
                                        value="Edit"
                                    />
                                    {editTask === true ?
                                        <ConfirmBox taskName="Edit" handleTask={handleEditTask} task={editTask} setTask={setEditTask} />
                                        :
                                        <></>
                                    }
                                    <input type="submit"
                                        onClick={(e) => handleConfirmationBox(e, deleteTask, setDeleteTask)}
                                        className="CarInfo-modify-Btn button red"
                                        value="Delete" />
                                    {deleteTask === true ?
                                        <ConfirmBox taskName="Delete" handleTask={handleDeleteTask} task={deleteTask} setTask={setDeleteTask} />
                                        :
                                        <></>
                                    }
                                </section>

                                :

                                <div className="contactOwner" onClick={onContactOwnerClick}>

                                    <h3 className="contactOwner-title">Phone</h3>
                                    <p className="contactOwner-text">{phone}</p>
                                </div>
                            }
                        </form>
                    </div>
                </div>
            </main>
        </>
    );
}

export default CarInfo;



