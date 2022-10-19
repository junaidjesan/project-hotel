import React from 'react';
import { Link } from 'react-router-dom';

const Carts = () => {
    return (
        <div>
            <div className='mx-20 my-20 '>
            <div className="card h-60 card-side bg-base-100 shadow-2xl">
        <figure><img className='p-10' src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Movie"/></figure>
        <div className="card-body">
            <h2 className="card-title">locations !</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-end">
            <Link to='/locationdetails'><button className="btn btn-primary">Watch</button></Link>
            </div>
        </div>
        </div>
    </div>
    <div className='mx-20 my-30'>
            <div className="card h-60 card-side bg-base-100 shadow-2xl">
        <div className="card-body">
            <h2 className="card-title">Rooms !</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-end">
            <Link to='/locationDetails'><button className="btn btn-primary">Locations</button></Link>
            </div>
        </div>
        <figure><img className='p-10' src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Movie"/></figure>
        </div>
    </div>
    <div className='mx-20 my-20 '>
            <div className="card card-side h-60 bg-base-100 shadow-2xl">
        <figure><img className='p-10' src="https://plus.unsplash.com/premium_photo-1664475769859-b6dd3a48dabc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Movie"/></figure>
        <div className="card-body">
            <h2 className="card-title">Rooms !</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-end">
            <Link to='/costCalculate'><button className="btn btn-primary">Cost Calculate</button></Link>
            </div>
        </div>
        </div>
    </div>
        </div>
    );
};

export default Carts;