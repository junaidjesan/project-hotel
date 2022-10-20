import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { hotelContext } from '../context/Context';

const AuthRouter = ({children}) => {

    const {user}=useContext(hotelContext)

    if(user&&user.uid){
        return children
    }
    return <Navigate to='/signin'></Navigate>
};

export default AuthRouter;