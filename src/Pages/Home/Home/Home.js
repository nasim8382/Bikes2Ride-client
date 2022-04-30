import React from 'react';
import BikeCatagories from '../BikeCatagories/BikeCatagories';
import SpecialBicycle from '../SpecialBicycle/SpecialBicycle';

const Home = () => {
    return (
        <div>
            <SpecialBicycle></SpecialBicycle>
            <BikeCatagories></BikeCatagories>
        </div>
    );
};

export default Home;