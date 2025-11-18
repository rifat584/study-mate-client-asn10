import React from 'react';
import Login from '../Pages/Login';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
  return (
    <div>
      <nav>
        <Navbar/>
      </nav>
      <Outlet/>
    </div>
  );
};

export default AuthLayout;