import React from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Advantages from '../Advantages/Advantages';
import AdventureBikes from '../AdventureBikes/AdventureBikes';
import BikeCatagories from '../BikeCatagories/BikeCatagories';
import Inventories from '../Inventories/Inventories';
import News from '../News/News';
import SpecialBicycle from '../SpecialBicycle/SpecialBicycle';
import Upgrade from '../Upgrade/Upgrade';

const Home = () => {
    return (
        <div>
            <PageTitle title="Home"></PageTitle>
            <Inventories></Inventories>
            <Advantages></Advantages>
            <SpecialBicycle></SpecialBicycle>
            <AdventureBikes></AdventureBikes>
            <BikeCatagories></BikeCatagories>
            <Upgrade></Upgrade>
            <News></News>
        </div>
    );
};

export default Home;