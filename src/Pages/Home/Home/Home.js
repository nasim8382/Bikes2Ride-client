import React from 'react';
import Advantages from '../Advantages/Advantages';
import AdventureBikes from '../AdventureBikes/AdventureBikes';
import BikeCatagories from '../BikeCatagories/BikeCatagories';
import SpecialBicycle from '../SpecialBicycle/SpecialBicycle';
import Upgrade from '../Upgrade/Upgrade';

const Home = () => {
    return (
        <div>
            <Advantages></Advantages>
            <SpecialBicycle></SpecialBicycle>
            <AdventureBikes></AdventureBikes>
            <BikeCatagories></BikeCatagories>
            <Upgrade></Upgrade>
        </div>
    );
};

export default Home;