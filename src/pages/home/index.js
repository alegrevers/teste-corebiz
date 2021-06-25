import React from 'react'
import Banner from '../../components/banner/index'
import BestSellers from './bestSellers';
import SurveySubscription from '../../components/surveySubscription/index'
import './home.css'

const Home = () => (
    <div>
        <Banner/>
        <BestSellers/>
        <SurveySubscription/>
    </div>
);

export default Home;