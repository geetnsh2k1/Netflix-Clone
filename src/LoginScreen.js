import React, {useEffect, useState, useRef} from 'react'
import "./LoginScreen.css"
import List from "./List"
import SignIn from "./SigninScreen"

import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import {userActionCreators} from "./state/actions/index"

export default function LoginScreen() {

    const [show, setShow] = useState(true)
    const transitionNavBar = () => {
        if(window.scrollY > 140) {
            setShow(false)
        }
        else {
            setShow(true)
        } 
    }

    const [signIn, setSignIn] = useState(false)

    const dispatch = useDispatch()
    const { GET_STARTED } = bindActionCreators(userActionCreators, dispatch)

    const emailRef = useRef()

    const getStarted = (e) => {
        e.preventDefault();
        setSignIn(true)
        GET_STARTED({email:emailRef.current.value})
    }

    const emailRef2 = useRef()

    const getStarted2 = (e) => {
        e.preventDefault();
        setSignIn(true)
        GET_STARTED({email:emailRef.current.value})
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar)
        return () => {
            window.removeEventListener("scroll", transitionNavBar)
        }       
    }, [])

    return (
        <>
        <div className="loginScreen">
            <div className="loginScreen__background">
                {
                    show ? 
                    <>
                    <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" className="loginScreen__logo" />
                    <button className="loginScreen__button" onClick={() => {setSignIn(true)}}>Sign in</button>
                    </>
                    : ""
                }

                <div className="loginScreen__gradient" />
            </div>

            <div className="loginScreen__body" align="center">

                {
                    signIn ? 
                    <SignIn></SignIn>
                    : <>
                    <h1>Unlimited movies, TV shows and more.</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

                    <form action="" class="form">
                        <input type="email" ref={emailRef} name="" id="" className="form__input" placeholder="Email address" />
                        <button onClick={getStarted} className="form__button">Get Started</button>
                    </form>
                </>
                }

            </div>
        </div>

        <hr />
        {
            signIn ? "" :
            <>
                <div className="secondBlock">

                <div className="secondBlock__content">

                    <div className="secondBlock__text">
                        <h1>Enjoy on your TV.</h1>
                        <h3>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h3>
                    </div>

                    <div>
                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" className="secondBlock__image" />
                    </div>

                </div>

                </div>

                <hr />

                <div className="thirdBlock">

                <div className="thirdBlock__content">

                    <div>
                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="" className="thirdBlock__image" />
                    </div>

                    <div className="thirdBlock__text" align="left">
                        <div className="thirdBlock__heading">Download your shows to watch offline.</div>
                        <h3>Save your favourites easily and always have something to watch.</h3>
                    </div>

                </div>

                </div>

                <hr />

                <div className="secondBlock">

                <div className="secondBlock__content">

                    <div className="secondBlock__text">
                        <div className="thirdBlock__heading">Watch everywhere.</div>
                        <h3>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h3>
                    </div>

                    <div>
                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" alt="" className="secondBlock__image" />
                    </div>

                </div>

                </div>

                <hr />

                <div className="thirdBlock">

                <div className="thirdBlock__content">

                    <div>
                        <img src="https://occ-0-2991-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVxdX2WnFSp49eXb1do0euaj-F8upNImjofE77XStKhf5kUHG94DPlTiGYqPeYNtiox-82NWEK0Ls3CnLe3WWClGdiJP.png?r=5cf" alt="" className="thirdBlock__image" />
                    </div>

                    <div className="thirdBlock__text" align="left">
                        <div className="thirdBlock__heading">Create profiles for children.</div>
                        <h3>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</h3>
                    </div>

                </div>

                </div>

                <hr />

                <div className="question">

                <div className="question__heading">Frequently Asked Questions</div>

                <div className="question__bank">
                    <List question={"What is Netflix?"} answer={`Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.

                You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!`}></List>
                    <List question={"How much does Netflix cost?"} answer={`Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 199 to ₹ 799 a month. No extra costs, no contracts.`}></List>
                    <List question={"Where can I watch?"} answer={`Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

                You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`}></List>
                    <List question={"How do I cancel?"} answer={`Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.`}></List>
                    <List question={"What can I watch on Netflix?"} answer={`Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.`}></List>
                    <List question={"Is Netflix good for kids"} answer={`The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.

                Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.`}></List>
                </div>

                </div>

                <div className="lowerSection">
                <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

                <form action="" class="form">
                    <input type="email" ref={emailRef2} name="" id="" className="form__input" placeholder="Email address" />
                    <button className="form__button" onClick={getStarted2}>Get Started</button>
                </form>
                </div>

                <hr />
            </>
        }

        </>
    )
}
