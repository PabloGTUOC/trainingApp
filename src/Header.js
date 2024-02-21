import React from "react";
import { signOut } from "firebase/auth";
import { auth, googleProvider } from './firebaseConfig';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

export const Header = ({ user }) => {
    const signIn = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // You can store the user details in your app's context or state
        } catch (error) {
            // Handle Errors here.
            console.error(error);
            alert(error.message); // Optionally, alert the error message for a better user experience
        }
    };
    const handleSignOut = async () => {
        try {
            await signOut(auth);
            console.log("User signed out");
        } catch (error) {
            console.error(error);
        }
    };
    // Determine button text and action based on user's sign-in status
    const buttonText = user ? 'Sign Out' : 'Register to Start!!';
    const buttonAction = user ? handleSignOut : signIn;

    return (
        <div className="App-header">
            <h1 className="App-h1">The<br />GoToTheF***gGym<br />APP!</h1>
            <button className="button" onClick={buttonAction}>{buttonText}</button>
            {user && <p>Welcome, {user.displayName || "Gym Enthusiast"}!</p>}
        </div>
    );
};
