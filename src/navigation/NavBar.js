import React from 'react';
import firebase from 'firebase/app';

export const NavBar = () => {
    const onClickSignOut = async () => {
        firebase.auth().signOut();
    }

    return (
        <nav>
            <h1 className="app-heading">Members-Only App</h1>
            <button
                className="sign-out-button"
                onClick={onClickSignOut}>Sign Out</button>
        </nav>
    );
}