import React from 'react';
import AdventureBikes from '../AdventureBikes/AdventureBikes';
import BikeCatagories from '../BikeCatagories/BikeCatagories';
import SpecialBicycle from '../SpecialBicycle/SpecialBicycle';
import Upgrade from '../Upgrade/Upgrade';

const Home = () => {
    return (
        <div>
            <SpecialBicycle></SpecialBicycle>
            <AdventureBikes></AdventureBikes>
            <BikeCatagories></BikeCatagories>
            <Upgrade></Upgrade>
        </div>
    );
};

export default Home;