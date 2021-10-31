import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import AboutUs from '../AboutUs/AboutUs';
import Desitination from '../Destination/Desitination';
import Header from '../Header/Header';
import NearCity from '../NearCity/NearCity';
import Success from '../Success/Success';
import Tour from '../Tour/Tour';

const Home = () => {
    const{user} = useAuth();
    console.log(user)
    return (
        <div>
            <Header></Header>
            <AboutUs></AboutUs>
            <Desitination></Desitination>
            <Tour></Tour>
            <Success></Success>
            <NearCity></NearCity>
        </div>
    );
};

export default Home;