import React, { createContext, useEffect, useState } from 'react';
import {getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup} from 'firebase/auth'
import app from '../firebase.config'


export const hotelContext=createContext()

const auth=getAuth(app)

const Context = ({children}) => {

    const [user,setUser]=useState([])

        const googleAuth=new GoogleAuthProvider()


        const google=()=>{
            return signInWithPopup(auth,googleAuth)
        }

        useEffect(()=>{
            const unsubscribe=onAuthStateChanged(auth,currentUser=>{setUser(currentUser)})
            return unsubscribe()
        },[])

    const contextValue={google,user}
    return (
        <div>
            <hotelContext.Provider value={contextValue}>
                {children}
            </hotelContext.Provider>
        </div>
    );
};

export default Context;