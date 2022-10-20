import React, { createContext, useEffect, useState } from 'react';
import {getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth'
import app from '../firebase.config'


export const hotelContext=createContext()

const auth=getAuth(app)

const Context = ({children}) => {

    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

        const googleAuth=new GoogleAuthProvider()


        const google=()=>{
            setLoading(true)
            return signInWithPopup(auth,googleAuth)
        }

        const signOutProvider=()=>{
            return signOut(auth)
        }

        useEffect(()=>{
            const unsubscribe=onAuthStateChanged(auth,currentUser=>{
                setUser(currentUser)
                setLoading(false)
            })
            return unsubscribe()
        },[])

    const contextValue={google,user,signOutProvider,loading}
    return (
        <div>
            <hotelContext.Provider value={contextValue}>
                {children}
            </hotelContext.Provider>
        </div>
    );
};

export default Context;