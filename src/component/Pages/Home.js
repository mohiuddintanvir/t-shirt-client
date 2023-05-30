import React from 'react';
import Banner from '../Elements/Banner/Banner';
import Brands from '../Elements/Brands/Brands';
import NewSection from '../Elements/New/NewSection';
import Feature from '../Elements/Feature/Feature';
import MiddleBanner from '../Elements/MiddleBanner/MiddleBanner';
import ManagementTeam from '../Elements/ManagementTeam.js/ManagementTeam';

const Home = () => {
    return (
        <div>
         <Banner></Banner>
         <Brands></Brands>
         <NewSection></NewSection>
         <Feature></Feature>
         <MiddleBanner></MiddleBanner>
         <ManagementTeam></ManagementTeam>
        </div>
    );
};

export default Home;