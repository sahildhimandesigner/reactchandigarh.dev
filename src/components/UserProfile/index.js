import React from 'react'
import firebase from 'firebase'

const UserProfile = () => (
    <div>
        <span>
            <div>Signed In!</div>
            <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
            <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
            <img
            alt="profile picture"
            src={firebase.auth().currentUser.photoURL}
            />
        </span>
    </div>
)

export default UserProfile;