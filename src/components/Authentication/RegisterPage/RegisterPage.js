import firebase from "firebase";
import { useState, useContext } from "react";
import { storage } from "../../../utils/firebase";


import { Link } from 'react-router-dom';
import './RegisterPage.css';

import notificationContext from "../../../contexts/notificationContext";

import picHolder from "../../../assets/300.png";
import { createNewPhone } from "../../../services/phone-Services";


function RegisterPage() {
    let [image, setImage] = useState(null);
    let [progress, setProgress] = useState(0);
    let [url, setUrl] = useState("");
    const [errorsList, setErrorsList] = useState([]);
    let [notification, dispatch] = useContext(notificationContext);




    const handleUpload = (uid) => {
        const uploadTask = storage.ref(`users/${uid}/profilePic.jpg`).put(image);

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

    const handleChangePhotoUpload = e => {
        if (e.target.files[0]) {

            setImage(e.target.files[0]);

            const uploadTask = storage.ref(`temp/${e.target.files[0].name}`).put(e.target.files[0]);


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
                        .ref("temp")
                        .child(e.target.files[0].name)
                        .getDownloadURL()
                        .then(url => {
                            setUrl(url);
                        });
                }
            );

        }
    };


    const onRegisterSubmitHandler = (e) => {
        e.preventDefault();

        if (url!=='') {            
            const photoRef = storage.refFromURL(url);
            photoRef.delete();
        }else{
            dispatch({type:'ERROR', payload: "Please upload photo!"});
            return;
        }


        let email = e.target.email.value;
        let name = e.target.name.value;
        let password = e.target.password.value;
        let rePassword = e.target.repeatPassword.value;
        let phone = e.target.phone.value;

        if (email=='') {
            dispatch({type:'ERROR', payload: "Please provide email!"});
            return;
        }

        if (name=='') {
            dispatch({type:'ERROR', payload: "Please provide name!"});
            return;
        }

        if (phone=='') {
            dispatch({type:'ERROR', payload: "Please provide phone!"});
            return;
        }

        if (!validatePassword(password)) {
            return;
        }

        if (password !== rePassword) {
            dispatch({ type: 'ERROR', payload: `Passwords do not match!` });
            return;
        }

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                var user = userCredential.user;

                handleUpload(user.uid);

                createNewPhone(user.uid, phone, name);

                console.log(user);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage);
            });
    }


    function validatePassword(p) {
        if (p.length < 6) {
            dispatch({ type: 'ERROR', payload: "Your password must be at least 6 characters!" });
            return false;
        }
        if (p.search(/[a-z]/i) < 0) {
            dispatch({ type: 'ERROR', payload: "Your password must contain at least one letter." });
            return false;
        }
        return true;
    }


    return (

        <>
            <div className="auth-wrapper">
                <div className="loginSuggest">
                    <p>Already signed up? Then <Link to="/Login">Log In</Link> and get full access to our services!</p>
                </div>
                <div className="auth container">
                    <div className="auth-container register">
                        <div className="auth-container-img registerImg">


                            <h1 className="auth-container-img-imageUpload-title">Upload your photo here.</h1>

                            <img src={url || picHolder} alt="Please provide photo!" className="auth-container-img-imageUpload-Image" />

                            <article className="auth-container-img-imageUpload">

                                <progress value={progress} max="100" className="auth-container-img-imageUpload-progress" />

                                <div className="auth-container-img-imageUpload-input-wrapper">
                                    <input id="photoUrl" className="auth-container-img-imageUpload-input" type="file" onChange={handleChangePhotoUpload} />
                                </div>

                            </article>



                        </div>
                        <div className="auth-container-content">
                            <form className="auth-form" onSubmit={onRegisterSubmitHandler}>
                                <Link to="/Login">
                                    <button type="button" className="buttonX">X</button>
                                </Link>
                                <h1>Register</h1>
                                <p className="field">
                                    <label>Email</label>
                                    <input type="text" name="email" placeholder="email" />
                                </p>
                                <p className="field">
                                    <label>Name</label>
                                    <input type="text" name="name" placeholder="name" />
                                </p>
                                <p className="field">
                                    <label>Phone</label>
                                    <input type="text" name="phone" placeholder="phone" />
                                </p>
                                <p className="field">
                                    <label>Password</label>
                                    <input type="password" name="password" placeholder="password" />
                                </p>
                                <p className="field">
                                    <label>RepeatPassword</label>
                                    <input type="password" name="repeatPassword" placeholder="repeat password" />
                                </p>
                                <button type="submit" className="submitAuthBtn">Sign up</button>
                                {/* <div className="parting-line"><span>or</span></div>
                                <div className="google-background">

                                    <p>Sign in with Google</p>
                                </div> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RegisterPage;