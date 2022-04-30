import React from 'react';
import AdventureBikes from '../AdventureBikes/AdventureBikes';
import BikeCatagories from '../BikeCatagories/BikeCatagories';
import SpecialBicycle from '../SpecialBicycle/SpecialBicycle';

const Home = () => {
    return (
        <div>
            <SpecialBicycle></SpecialBicycle>
            <AdventureBikes></AdventureBikes>
            <BikeCatagories></BikeCatagories>
        </div>
    );
};

export default Home;