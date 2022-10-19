import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { hotelContext } from '../../../context/Context';

const Links = () => {
    const {google}=useContext(hotelContext)

    const handleGoogle=()=>{
        google()
        .then(res=>{})
        .catch(error=>console.error(error))
    }
    return (
        <div>
            <Link className='btn btn-primary' onClick={handleGoogle}><button className=''>Google</button></Link>
        </div>
    );
};

export default Links;