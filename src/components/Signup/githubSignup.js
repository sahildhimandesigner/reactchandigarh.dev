
import React from 'react'
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import UserProfile from '../UserProfile/index'

 firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
})
class GithubLogin extends React.Component {
    state = { isSignedIn : false}
    uiConfig = {
        signInFlow: "popup",
        signInOptions:[
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.GithubAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccess: () => false
        }
    }
    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
          this.setState({ isSignedIn: !!user })
          console.log("user", user)
        })
      }
    render(){
        return(
            <div>
                {this.state.isSignedIn ? (
                    <UserProfile />
                ) : (
                    <StyledFirebaseAuth
                        uiConfig={this.uiConfig}
                        firebaseAuth={firebase.auth()}
                    />
                )}
            </div>
        )
    }
}

export default GithubLogin;