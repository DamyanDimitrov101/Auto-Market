import firebase from "firebase";
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import userContext from "../../../contexts/userContext";

import { getPhone } from "../../../services/phone-Services";
import { getUrl } from "../../../services/User-Services";

import './LoginPage.css';

function LoginPage({ history }) {
    let [user, setUser] = useContext(userContext);
    const [errorsList, setErrorsList] = useState([]);

    const signInFormHandler = (e) => {
        e.preventDefault();
        let email = e.target.email.value;
        let password = e.target.password.value;

        if (email.length < 5) {
            console.log("email must not be empty");
            return;
        }

        if (!validatePassword(password, setErrorsList)) {
            console.log(errorsList);
            return;
        }


        firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in 
                var userCurrent = userCredential.user;

                getPhone(userCurrent.uid)
                    .then(resUser => {
                        getUrl(userCurrent.uid)
                            .then(url=>{
                                setUser({
                                    email: userCurrent.email,
                                    name: resUser.name,
                                    uid: userCurrent.uid,
                                    phone: resUser.phone,
                                    url: url
                                });
                            });
                    });

                history.push('/MyProfile');
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    function validatePassword(p, setErr) {
        var errors = [];
        if (p.length < 6) {
            errors.push("Your password must be at least 6 characters");
        }
        if (p.search(/[a-z]/i) < 0) {
            errors.push("Your password must contain at least one letter.");
        }
        if (errors.length > 0) {
            setErr(errors);
            return false;
        }
        return true;
    }

    return (

        <div className="auth-wrapper">
            <div className="registerSuggest">
                <p>New here? Try <Link to="/Register">register</Link> for free!</p>
            </div>
            <div className="auth container">
                <div className="auth-container">
                    <div className="auth-container-img">
                        <h1>Please
					<span>Log In!</span>
                        </h1>
                    </div>
                    <div className="auth-container-content">
                        <form className="auth-form" onSubmit={signInFormHandler}>
                            <button type="button" className="buttonX">X</button>
                            <h1>Login</h1>
                            <p className="field">
                                <label className="field-text">Email</label>
                                <input type="email" name="email" placeholder="email" />
                            </p>
                            <p className="field">
                                <label className="field-text">Password</label>
                                <input type="password" name="password" placeholder="password" />
                                <a href="">forget password?</a>
                            </p>
                            <button type="submit" className="submitAuthBtn">Sign in</button>
                            {/* <div className="parting-line"><span>or</span></div> */}
                            {/* <div className="google-background">

                                    <p>Sign in with Google</p>
                                </div> */}
                        </form>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default LoginPage;