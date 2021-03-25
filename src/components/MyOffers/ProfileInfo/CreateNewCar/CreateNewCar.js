import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { storage } from "../../../../firebase/firebase";

//import { getUser } from "../../../services/User-Services";
import { createNewCar } from "../../../../services/Cars-Services";
import { useInput } from "../../../../customHoCs/useInput-Hook";


import './CreateNewCar.css';

function CreateNewCar() {
    let [user, setUser] = useState({});
    let [image, setImage] = useState(null);
    let [progress, setProgress] = useState(0);

    let [url, setUrl] = useState("");
    const { value: make, bind: bindMake, reset: resetMake } = useInput('');
    const { value: model, bind: bindModel, reset: resetModel } = useInput('');
    const { value: year, bind: BindYear, reset: resetYear } = useInput('');
    const { value: color, bind: BindColor, reset: resetColor } = useInput('');
    const { value: transmission, bind: BindTransmission, reset: resetTransmission } = useInput('');
    const { value: fuel, bind: BindFuel, reset: resetFuel } = useInput('');
    const { value: comment, bind: BindComment, reset: resetComment } = useInput('');

    useEffect(() => {
        //getUser()
        // .then(data => console.log(data));

    }, []);

    const handleChange = e => {
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
                        console.log('YEs');
                        setUrl(url);
                    });
            }
        )
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!make,!model,!url,!year,!color,!fuel,!transmission){
            return console.log("Please fill in all the fields!");
        }

        let carNew = {
            picture: url || "no photo",
            make: make,
            id: url,
            model: model,
            year: year,
            color: color,
            fuel: fuel,
            transmission: transmission,
        };

        let res = await createNewCar(carNew, 1);

        return res;
    }



    return (
        <main className="CreateNewCar-wrapper">
            <div className="CreateNewCar">
                <section className="CreateNewCar-imageUpload-Image-wrapper">
                    <h1 className="CreateNewCar-imageUpload-title">Create new car</h1>

                    <img src={url || "http://via.placeholder.com/300"} alt="Please provide photo!" className="CreateNewCar-imageUpload-Image" />

                    <article className="CreateNewCar-imageUpload">

                        <progress value={progress} max="100" className="CreateNewCar-imageUpload-progress" />

                        <div className="CreateNewCar-imageUpload-input-wrapper">

                            <input id="photoUrl" className="CreateNewCar-imageUpload-input" type="file" onChange={handleChange} />
                            <button onClick={handleUpload}>Upload!</button>
                        </div>

                    </article>
                </section>

                <form className="CreateNewCar-content" onSubmit={handleSubmit}>

                    <h2 className="CreateNewCar-content-title">
                        Please fill in all the fields!
                    </h2>

                    <article className="CreateNewCar-text">
                        <label htmlFor="make" className="CreateNewCar-text-make">
                            <strong>Make:</strong>
                            <input id="make" {...bindMake} className="CreateNewCar-text-input" type="text" placeholder=" e.g bmw..." />
                        </label>
                        <label htmlFor="model" className="CreateNewCar-text-model">
                            <strong>Model:</strong>
                            <input id="model" {...bindModel} className="CreateNewCar-text-input" type="text" placeholder=" e.g x6..." />
                        </label>
                        <label htmlFor="year" className="CreateNewCar-text-year">
                            <strong>Year:</strong>
                            <input id="year" {...BindYear} className="CreateNewCar-text-input" type="text" placeholder=" e.g 2020..." />
                        </label>
                        <label htmlFor="fuel" className="CreateNewCar-text-fuel">
                            <strong>Fuel:</strong>
                            <input id="fuel" {...BindFuel} className="CreateNewCar-text-input" type="text" placeholder=" e.g diesel..." />
                        </label>
                        <label htmlFor="color" className="CreateNewCar-text-color">
                            <strong>Color:</strong>
                            <input id="color" {...BindColor} className="CreateNewCar-text-input" type="text" placeholder=" e.g white..." />
                        </label>
                        <label htmlFor="transmission" {...BindTransmission} className="CreateNewCar-text-transmission">
                            <strong>Transmission:</strong>
                            <input id="transmission" className="CreateNewCar-text-input" type="text" placeholder=" e.g automatic..." />
                        </label>
                        <label htmlFor="comment" className="CreateNewCar-text-comment">
                            <strong>Comment:</strong>
                            <textarea id="comment" {...BindComment} className="CreateNewCar-text-input" cols="40" rows="100" placeholder=" e.g Some info..." />
                        </label>
                    </article>

                    <div className="CreateNewCar-button-wrapper">
                        <Link to="/MyOffers" className="CreateNewCar-Back-Btn back-Btn">Cancel</Link>
                        <input type="submit" className="CreateNewCar-Submit-Input" value="Create" />
                    </div>
                </form>
            </div>
        </main>
    );
}

export default CreateNewCar;
