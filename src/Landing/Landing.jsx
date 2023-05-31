import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import LeftSideBard from './LeftSideBard';

const Landing = () => {
    return (
        <div className=''>
            <Header></Header>
            <Outlet></Outlet>

            <Footer></Footer>

        </div>
    );
};

export default Landing;