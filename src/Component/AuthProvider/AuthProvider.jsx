/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import PropTypes from 'prop-types';
import app from '../../firebase/firebase.config'

const auth = getAuth(app);
const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {

    const [newUser, setUser] = useState(null);
    const [loading, setLoading] = useState(true);



    // for create a new user 
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }


    // for login registered user 
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // for login registered user with google 
    const googleProvider = new GoogleAuthProvider()
    const googleLogin = () => {
        setLoading(true);
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = (result.user);
                setUser(user);
                console.log(user);

            })
            .catch(error => {
                console.log('error', error.message)
            })
    }

    // logOut function 
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // for user-status change observer 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth,
            currentUser => {
                console.log("Showing User status from useEffect", currentUser);
                setUser(currentUser);
                setLoading(false);
            })
        return () => {
            unSubscribe();
        }
    }, []);
    
    const userInfo = {
        loginUser, createUser, loading, googleLogin, newUser, logOut
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};


AuthProvider.propTypes = {
    children: PropTypes.object
}

export { AuthProvider, AuthContext };