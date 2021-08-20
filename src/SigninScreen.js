import React, { useRef, useState } from 'react'
import { useHistory } from "react-router-dom"
import "./SigninScreen.css"

import { useSelector } from 'react-redux'
import { auth } from "./firebase"

export default function SigninScreen() {

    const state = useSelector((state) => state)

    const history = useHistory()

    var emailCurrent = ""
    if (state.UserReducer.email) emailCurrent = state.UserReducer.email

    const [email, setEmail] = useState(emailCurrent)
    
    const passwordRef = useRef()

    const login = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, passwordRef.current.value)
        .then(resp => {
            history.push('/')   
        })
        .catch(err => {
            alert(err)
        })
    }

    const signup = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, passwordRef.current.value)
        .then(resp => {
            
        })
        .catch(err => {
            alert(err)
        })
    }

    return (
        <div className="signinScreen">
            <form onSubmit={login}>
                <div className="signinScreen__heading">Sign In</div>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input ref={passwordRef} type="password" placeholder="Password" />
                <button type="submit">Sign In</button>

                <h6 align="left"><span className="new">New to Netflix?</span> <span className="signup" onClick={signup}>Sign Up now.</span></h6>

            </form>
        </div>
    )
}
