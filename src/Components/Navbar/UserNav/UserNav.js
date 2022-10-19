import React from 'react';
import { Link } from 'react-router-dom';

const UserNav = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost normal-case text-xl">YourHotel</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal gap-3 p-0">
                    <Link className='btn btn-primary' to='/service'><button>Our services</button></Link>
                    <Link className='btn btn-primary' to='/signIn'><button>sign In</button></Link>
                    <Link className='btn btn-primary' to='/register'><button>Register</button></Link>
                    <Link className='btn btn-primary' to='/favourite'><button>Favourite</button></Link>
                    <Link className='btn btn-primary' to='/signOut'><button>Sign Out</button></Link>
                </ul>
            </div>
            </div>
        </div>
    );
};

export default UserNav;