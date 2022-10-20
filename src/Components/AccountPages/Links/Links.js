import React, { useContext } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { hotelContext } from '../../../context/Context';

const Links = () => {
    const {google}=useContext(hotelContext)

    const location=useLocation()

    const from=location.state?.from?.pathname||'/'

    const handleGoogle=()=>{
        google()
        .then(res=>{
            Navigate(from,{replace:true})
        })
        .catch(error=>console.error(error))
    }
    return (
        <div>
            <Link className='btn btn-primary' onClick={handleGoogle}><button className=''>Google</button></Link>
        </div>
    );
};

export default Links;