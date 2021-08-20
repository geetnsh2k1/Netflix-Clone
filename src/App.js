import './App.css';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen'
import ProfileScreen from './ProfileScreen'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from "redux"
import {userActionCreators} from "./state/actions/index"

import { useEffect } from "react"
import {auth} from "./firebase"

function App() {

  const state = useSelector((state) => state)

  const dispatch = useDispatch()
  const { LOGIN, LOGOUT } = bindActionCreators(userActionCreators, dispatch)

  useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(userAuth => {
        if(userAuth) {
          LOGIN({user:userAuth.uid, email: userAuth.email})
        } else {
          LOGOUT({})
        }
      })
      return unsubscribe;
  }, [])

  return (
    <div className="App">
        <Router>

          {
            state.UserReducer.user ? 
            <>
              <Switch>
                <Route exact path='/' component={HomeScreen} />
                <Route exact path='/profile' component={ProfileScreen} />
              </Switch>
            </> :
            <LoginScreen></LoginScreen>
          }

        </Router>
    </div>
  );
}

export default App;
