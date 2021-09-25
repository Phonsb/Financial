import React, { useEffect, useState, Text } from 'react';
import "./style.css";
import firebase from '../firebase/firebase'
import 'firebase/compat/auth'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import Home from '../Home/Home'


const Login = () => {
    const [isSignedIn, setisSignedIn] = useState(false)
    const uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccess: () => false
        }
    }

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            console.log("user", !!user)
            setisSignedIn(isSignedIn => !!user)
        })
    }, [])

    return <div >

        {isSignedIn ? (
            <span>
                <Home />
            </span>
        ) : (
                <div>
                    <h1 className="row d-flex justify-content-center">Please sign-in</h1>
                    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                </div>
        )}


    </div>

}
export default Login;

