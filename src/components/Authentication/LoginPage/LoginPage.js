import firebase from "firebase";
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import userContext from "../../../contexts/userContext";
import notificationContext from "../../../contexts/notificationContext";

import { getPhone } from "../../../services/phone-Services";
import { getUrl } from "../../../services/User-Services";

import './LoginPage.css';

function LoginPage({ history }) {
    let [user, setUser] = useContext(userContext);
    let [notification, dispatch] = useContext(notificationContext);


    const signInFormHandler = (e) => {
        e.preventDefault();
        let email = e.target.email.value;
        let password = e.target.password.value;

        if (email.length < 5) {
            dispatch({type: 'ERROR', payload: 'Please fill your email!'});
            return;
        }

        if (!validatePassword(password)) {
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
                            dispatch({type:'SUCCESS', payload: `Welcome ${resUser.name}!`});
                    });

                history.push('/MyProfile');
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                dispatch({type:'ERROR', payload: errorMessage});
            });
    }

    function validatePassword(p) {
        if (p.length < 6) {
            dispatch({type:'ERROR', payload: "Your password must be at least 6 characters"});
            return false;
        }
        if (p.search(/[a-z]/i) < 0) {
            dispatch({type:'ERROR', payload: "Your password must contain at least one letter."});            
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
                            <Link to="/Cars">
                            <button type="button" className="buttonX">X</button>
                            </Link>
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