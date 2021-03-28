import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { storage } from "../../../../firebase/firebase";

//import { getUser } from "../../../services/User-Services";
import { createNewCar } from "../../../../services/Cars-Services";
import { useInput } from "../../../../customHooks/useInput-Hook";


import './CreateNewCar.css';

function CreateNewCar() {
    let [user, setUser] = useState({});
    let [image, setImage] = useState(null);
    let [progress, setProgress] = useState(0);

    let [makeError, setMakeError] = useState(false);
    let [modelError, setModelError] = useState(false);
    let [urlError, setUrlError] = useState(false);
    let [priceError, setPriceError] = useState(false);
    let [yearError, setYearError] = useState(false);
    let [colorError, setColorError] = useState(false);
    let [fuelError, setFuelError] = useState(false);
    let [transmissionError, setTransmissionError] = useState(false);

    let [url, setUrl] = useState("");
    const { value: make, bind: bindMake, reset: resetMake } = useInput('');
    const { value: model, bind: bindModel, reset: resetModel } = useInput('');
    const { value: year, bind: BindYear, reset: resetYear } = useInput('');
    const { value: color, bind: BindColor, reset: resetColor } = useInput('');
    const { value: transmission, bind: BindTransmission, reset: resetTransmission } = useInput('');
    const { value: fuel, bind: BindFuel, reset: resetFuel } = useInput('');
    const { value: comment, bind: BindComment, reset: resetComment } = useInput('');
    const { value: price, bind: BindPrice, reset: resetPrice } = useInput('');

    useEffect(() => {
        //getUser()
        // .then(data => console.log(data));

    }, []);

    const handleChangePhotoUpload = e => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);

        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setProgress(progress);
            },
            error => {
                console.log(error);
            },
            () => {
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        setUrl(url);
                    });
            }
        )
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
            !make,
            !model,
            !url,
            !price,
            !year,
            !color,
            !fuel,
            !transmission
            ||
            price < 0
            ||
            price > 10000000) {

            if (make === "") {
                //input.focus();
                setMakeError(true);

            } else {
                setMakeError(false);
            }

            triggerValidationDiv(make, setMakeError)
            triggerValidationDiv(model, setModelError)
            triggerValidationDiv(price, setPriceError);
            triggerValidationDiv(fuel, setFuelError);
            triggerValidationDiv(color, setColorError);
            triggerValidationDiv(year, setYearError);
            triggerValidationDiv(transmission, setTransmissionError);


            return console.log("Please fill in all the fields!");
        }

        let carNew = {
            picture: url || "no photo",
            make: make,
            id: url,
            price: price,
            model: model,
            year: year,
            color: color,
            fuel: fuel,
            transmission: transmission,
            comment: comment
        };

        let res = await createNewCar(carNew, 1);

        return res;
    }


    function triggerValidationDiv(input, nameInputSet) {

        if (input === "") {
            nameInputSet(true);

        } else {
            nameInputSet(false);
        }

    }

    return (
        <main className="CreateNewCar-wrapper">
            <div className="CreateNewCar">
                <section className="CreateNewCar-imageUpload-Image-wrapper">
                    <h1 className="CreateNewCar-imageUpload-title">Create new car</h1>

                    <img src={url || "http://via.placeholder.com/400"} alt="Please provide photo
                    !" className="CreateNewCar-imageUpload-Image" />

                    <article className="CreateNewCar-imageUpload">

                        <progress value={progress} max="100" className="CreateNewCar-imageUpload-progress" />

                        <div className="CreateNewCar-imageUpload-input-wrapper">

                            <input id="photoUrl" className="CreateNewCar-imageUpload-input" type="file" onChange={handleChangePhotoUpload} />
                            <button onClick={handleUpload}>Upload
                            !</button>
                        </div>

                    </article>
                </section>

                <form className="CreateNewCar-content" onSubmit={handleSubmit}>

                    <h2 className="CreateNewCar-content-title">
                        Please fill in all the fields
                        !
                    </h2>

                    <article className="CreateNewCar-text">
                        <label htmlFor="make" className="CreateNewCar-text-make">
                            <strong className="CreateNewCar-text-Name">Make:</strong>
                            <input
                                id="make"
                                {...bindMake}
                                className="CreateNewCar-text-input"
                                type="text"
                                placeholder=" e.g pagani..." />

                            <div className={`input-validation ${makeError && 'show'}`}>
                                Please provide a make!
                            </div>
                        </label>
                        <label htmlFor="model" className="CreateNewCar-text-model">
                            <strong className="CreateNewCar-text-Name">Model:</strong>
                            <input id="model" {...bindModel} className="CreateNewCar-text-input" type="text" placeholder=" e.g zonda..." />

                            <div className={`input-validation ${modelError && 'show'}`}>
                                Please provide a model!
                            </div>
                        </label>
                        <label htmlFor="price" className="CreateNewCar-text-price">
                            <strong className="CreateNewCar-text-Name">Price:</strong>
                            <input id="price" {...BindPrice} className="CreateNewCar-text-input" type="number" placeholder=" e.g 10000..." />

                            <div className={`input-validation ${priceError && 'show'}`}>
                                Price must be between 0 and 10 000 000!
                            </div>
                        </label>
                        <label htmlFor="year" className="CreateNewCar-text-year">
                            <strong className="CreateNewCar-text-Name">Year:</strong>
                            <input id="year" {...BindYear} className="CreateNewCar-text-input" type="text" placeholder=" e.g 2012..." />

                            <div className={`input-validation ${yearError && 'show'}`}>
                                Please provide a year!
                            </div>
                        </label>
                        <label htmlFor="fuel" className="CreateNewCar-text-fuel">
                            <strong className="CreateNewCar-text-Name">Fuel:</strong>
                            <input id="fuel" {...BindFuel} className="CreateNewCar-text-input" type="text" placeholder=" e.g gasoline..." />

                            <div className={`input-validation ${fuelError&& 'show'}`}>
                                Please provide a fuel type!
                            </div>
                        </label>
                        <label htmlFor="color" className="CreateNewCar-text-color">
                            <strong className="CreateNewCar-text-Name">Color:</strong>
                            <input id="color" {...BindColor} className="CreateNewCar-text-input" type="text" placeholder=" e.g white..." />

                            <div className={`input-validation ${colorError&& 'show'}`}>
                                Please provide a color!
                            </div>
                        </label>
                        <label htmlFor="transmission" {...BindTransmission} className="CreateNewCar-text-transmission">
                            <strong className="CreateNewCar-text-Name">Transmission:</strong>
                            <input id="transmission" className="CreateNewCar-text-input" type="text" placeholder=" e.g automatic..." />

                            <div className={`input-validation ${transmissionError&& 'show'}`}>
                                Please provide a transmission!
                            </div>
                        </label>
                        <label htmlFor="comment" className="CreateNewCar-text-comment">
                            <strong className="CreateNewCar-text-Name commentTitle">Comment:</strong>
                            <textarea id="comment" {...BindComment} className="CreateNewCar-text-input" cols="40" rows="100" placeholder=" e.g Some info..." />
                        </label>
                    </article>

                    <div className="CreateNewCar-button-wrapper">
                        <Link to="/MyProfile" className="CreateNewCar-Back-Btn back-Btn">Cancel</Link>
                        <input type="submit" className="CreateNewCar-Submit-Input" value="Create" />
                    </div>
                </form>
            </div>
        </main>
    );
}

export default CreateNewCar;
