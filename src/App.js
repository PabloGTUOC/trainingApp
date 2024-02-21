import React, { useEffect, useState} from "react";
import './App.css';
import {Header} from "./Header";
import {Loadlastdate} from "./Loadlastdate";
import {Dailyinputs} from "./Dailyinputs";
import {Generalstats} from "./Generalstats";
import { auth}  from "./firebaseConfig";
import { onAuthStateChanged } from  "firebase/auth"


function App() {
    const [user, setUser ] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser); // Set the user if signed in, null otherwise
        });
        return () => unsubscribe();
    }, []);

    return (
        <div className="App">
            <Header user={user}/>
            {user ? (
                // Show these components only when user is signed in
                <>
                    <Loadlastdate/>
                    <Dailyinputs/>
                    <Generalstats/>
                </>
            ) : (
                // Optionally, display a welcome message or information about your app here
                <p className="App-p">Welcome to GoToTheF***gGym APP! <br />Please sign in to track your progress.</p>
            )}
        </div>
  );
}

export default App;
