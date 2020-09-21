import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase/app';

export const SignInPage = () => {
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [signInError, setSignInError] = useState('');
    const history = useHistory();

    const onClickSignIn = async () => {
        try {
            setSignInError('');
            await firebase.auth().signInWithEmailAndPassword(emailValue, passwordValue)
            history.push('/');
        } catch (e) {
            setSignInError(e);
        }
    }

    return (
        <>
        <div>I'm the sign-in page</div>
        {signInError
            ? <div><p>{signInError}</p></div>
            : null}
        <input
            type="text"
            value={emailValue}
            onChange={e => setEmailValue(e.target.value)} />
        <input
            type="password"
            value={passwordValue}
            onChange={e => setPasswordValue(e.target.value)} />
        <button onClick={onClickSignIn}>Sign In</button>
        </>
    );
}