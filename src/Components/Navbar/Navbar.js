import React from 'react';
import { Link } from 'react-router-dom';
import Carts from '../Carts/Carts';

const Navbar = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1517840901100-8179e982acb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                <Link to='/'><h1 className="mb-5 text-5xl font-bold">You are Now In Your Hotel !!</h1></Link>
                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <Link to='/cart'><button className="btn btn-primary">Go Deeper</button></Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Navbar;