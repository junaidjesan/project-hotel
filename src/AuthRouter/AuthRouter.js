import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { hotelContext } from '../context/Context';

const AuthRouter = ({children}) => {

        const location=useLocation()
    const {user,loading}=useContext(hotelContext)


    if(loading){
        return <div>Loading...</div>
    }

    if(user&&user.uid){
        return children
    }
    return <Navigate to='/signin' state={{from:location}}></Navigate>
};

export default AuthRouter;