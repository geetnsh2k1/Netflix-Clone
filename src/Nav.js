import React, { useState, useEffect } from 'react'
import "./Nav.css"
import { Link } from "react-router-dom"
 
export default function Nav() {

    const [dark, setDark] = useState(false)

    const transitionNavBar = () => {
        if(window.scrollY > 100) {
            setDark(true)
        }
        else {
            setDark(false)
        } 
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar)
        return () => {
            window.removeEventListener("scroll", transitionNavBar)
        }        
    }, [])

    return (
        <div className={`nav ${dark && "dark-bg"}`}>
            
            <div className="nav__content">
            {/* https://th.bing.com/th/id/R.3483cbba02fe083b87330a99857f59ed?rik=ejgwaTp6m0Dv6g&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2017%2f05%2fNetflix-Logo.png&ehk=gJbypm3nuRFxW%2fGn3WbaXOcTVq6kNgynGml%2fdXD79fM%3d&risl=&pid=ImgRaw&r=0 */}
                <Link to="/">
                    <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="N" className="netflix-logo" />
                </Link>

                <Link to="/profile">
                    <img src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="A" className="avatar-logo" />
                </Link>
    
            </div>

        </div>
    )
}
