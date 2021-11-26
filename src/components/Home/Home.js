import React from 'react';
// import HomeCards from '../HomeCards/HomeCards';
import LatestNews from '../LatestNews/LatestNews';
import Packages from '../Packages/Packages';
import MoreService from '../MoreService/MoreService';

const Home = () => {
    return (
        <div>

            {/* <HomeCards></HomeCards> */}
            <Packages></Packages>
            
            <LatestNews></LatestNews>
            <MoreService></MoreService>
        </div>
    );
};

export default Home;