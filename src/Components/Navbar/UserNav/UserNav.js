import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { hotelContext } from '../../../context/Context';

const UserNav = () => {
    const {user}=useContext(hotelContext)
    return (
        <div>
            <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost normal-case text-xl">YourHotel</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal gap-3 p-0">
                    <Link className='btn btn-primary' to='/service'><button>Our services</button></Link>
                   { user?.uid|| <div>
                    <Link className='btn btn-primary mr-3' to='/signIn'><button>sign In</button></Link>
                    <Link className='btn btn-primary' to='/register'><button>Register</button></Link>
                   </div>} 
                    {user?.uid&&
                    <div>
                        <Link className='btn btn-primary mr-3' to='/favourite'><button>Favourite</button></Link>
                    <Link className='btn btn-primary' to='/signOut'><button>Sign Out</button></Link>
                    </div>}
                </ul>
            </div>
            </div>
        </div>
    );
};

export default UserNav;