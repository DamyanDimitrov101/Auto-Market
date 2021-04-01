import { useHistory } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getOne } from '../../../../../services/Cars-Services';

import { deleteCar, editCar } from "../../../../../services/Cars-Services";
import { InputError, onInputBlur } from "../../../../shared/inputError";
import { ConfirmBox, handleConfirmationBox } from "../../../../shared/confirmBox";

import './CarInfo.css';


function CarInfo({
    match
}) {
    let [car, setCar] = useState({});
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
            });

        //document.getElementById("make").disabled = true;
        // TODO: userDisabled

    }, []);


    const handleEditTask = (e) => {
        e.preventDefault();
        const {make, model, fuel, year, transmission, color, comment} = e.target.parentNode.parentNode.parentNode.parentNode;
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
                console.log('Success - Edit');
                history.push('/Cars');
            })

    };

    const handleDeleteTask = (e) => {
        e.preventDefault();

        deleteCar(car.id)
            .then(res => {
                console.log('SUCCESS');
                history.push('/Cars');
            });

    };


    return (
        <main className="Main-CarInfo">
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

                        <section className="CarInfo-modify remodal-bg">
                            <input type="submit"
                                onClick={(e) => handleConfirmationBox(e,editTask, setEditTask)}
                                className="CarInfo-modify-Btn button yellow"
                                value="Edit"
                                />
                            {editTask === true ?
                                <ConfirmBox taskName="Edit" handleTask={handleEditTask} task={editTask} setTask={setEditTask} />
                                :
                                <></>
                            }
                            <input type="submit"
                                onClick={(e) => handleConfirmationBox(e,deleteTask, setDeleteTask)}
                                className="CarInfo-modify-Btn button red"
                                value="Delete" />
                            {deleteTask === true ?
                                <ConfirmBox taskName="Delete" handleTask={handleDeleteTask} task={deleteTask} setTask={setDeleteTask} />
                                :
                                <></>
                            }
                        </section>
                    </form>
                </div>
            </div>
        </main>
    );
}

export default CarInfo;



