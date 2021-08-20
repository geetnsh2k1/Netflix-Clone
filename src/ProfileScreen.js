import React from 'react'
import "./ProfileScreen.css"
import Nav from "./Nav"
import {auth} from "./firebase"

import { useSelector } from "react-redux"

export default function ProfileScreen() {

    const state = useSelector((state) => state)

    const logout = (e) => {
        e.preventDefault();
        auth.signOut()
    }

    return (
        <div className="profileScreen">
            <Nav></Nav>


            <div className="profileScreen__body" align="center">
                <div className="profileScreen__heading" align="left">Edit Profile</div>
                
                <div className="profileScreen__info">

                    <img src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="" className="profileScreen__avatar" />

                    <div className="profileScreen__details">
                        <h2>{state.UserReducer.email}</h2>

                        <div className="profileScreen__plans">

                            <div className="profileScreen__subheading" align="left">
                                Plans (Current Plan: premium)
                            </div>

                            <button className="profileScreen__signout" onClick={logout}>Sign Out</button>
                        </div>

                    </div>

                </div>
            
            </div>

        </div>
    )
}
