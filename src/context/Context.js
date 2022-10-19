import React, { createContext } from 'react';
import {getAuth} from 'firebase/auth'
import app from '../firebase.config'


export const hotelContext=createContext()

const auth=getAuth(app)

const Context = ({children}) => {

        


    const contextValue={default:'tomader majhe ni'}
    return (
        <div>
            <hotelContext.Provider value={contextValue}>
                {children}
            </hotelContext.Provider>
        </div>
    );
};

export default Context;