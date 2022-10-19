import React from 'react';
import { Outlet } from 'react-router-dom';
import UserNav from '../Navbar/UserNav/UserNav';

const Layouts = () => {
    return (
        <div>
            <UserNav></UserNav>
            <Outlet></Outlet>
        </div>
    );
};

export default Layouts;