import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Register from '../Components/AccountPages/Register/Register';
import SignIn from '../Components/AccountPages/SignIn/SignIn';
import Carts from '../Components/Carts/Carts';
import CostCalculate from '../Components/CostCalculate/CostCalculate';
import Layouts from '../Components/Layouts/Layouts';
import LocationsDetails from '../Components/LocationsDetails/LocationsDetails';
import Navbar from '../Components/Navbar/Navbar';
import UserNav from '../Components/Navbar/UserNav/UserNav';
import RoomDetails from '../Components/RoomDetails/RoomDetails';

export const hotelRouter=createBrowserRouter([
    {path:'/',element:<Navbar></Navbar>},
    {path:'/cart',element:<Layouts></Layouts>,children:[
        {path:'/cart',element:<Carts></Carts>},
    ]},
    {path:'/signIn',element:<SignIn></SignIn>},
    {path:'register',element:<Register></Register>},
    {path:'/locationdetails',element:<LocationsDetails></LocationsDetails>},
    {path:'/roomDetails',element:<RoomDetails></RoomDetails>},
    {path:'/costCalculate',element:<CostCalculate></CostCalculate>},
    {path:'/userNav',element:<UserNav></UserNav>},
    
])


const Route = () => {

    return (
        <div>
            
        </div>
    );
};

export default Route;