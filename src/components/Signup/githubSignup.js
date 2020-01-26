
import React from 'react'
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

 firebase.initializeApp({
    apiKey: "AIzaSyAwEehQHjY1gAaUIvGr4aXKoVhoichKO1c",
    authDomain: "fir-auth-4fa91.firebaseapp.com"
})

class GithubLogin extends React.Component {
    state = { isSignedIn : false}
    uiConfig = {
        signInFlow: "popup",
        signInOptions:[
            firebase.auth.GithubAuthProvider.PROVIDER_ID,
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
                <span>
                    <div>Signed In!</div>
                    <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
                    <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
                    <img
                    alt="profile picture"
                    src={firebase.auth().currentUser.photoURL}
                    />
                </span>
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