import {GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'

import { createContext, useEffect, useState } from 'react'
import app from '../../firebase/firebase.config';





const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


export const authContext = createContext()

const userRegister = (email,password) =>{
    return createUserWithEmailAndPassword(auth,email,password);
}

const userLogin = (email,password) =>{
    return  signInWithEmailAndPassword(auth,email,password);
}

const googleLogin = () =>{
    return  signInWithPopup(auth,googleProvider);
}

const githubLogin = () =>{
    return signInWithPopup(auth,githubProvider)
}

const userLogout = () =>{
    return signOut(auth);
}


export default function AuthProviders({children}){

    const [ loading,setLoading ] = useState(true);
    const [ user, setUser ] = useState(null)

    const data = {
        userRegister,
        userLogin,
        googleLogin,
        githubLogin,
        userLogout,
        loading,
        user
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth , (user) => {
            setUser(user)
            setLoading(false)
        })

        return() => {unsubscribe()}

    },[])


    return(
        <authContext.Provider value={data}>
            {children}
        </authContext.Provider>
    )
}