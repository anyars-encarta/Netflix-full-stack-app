import React from 'react';
import './home.scss';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import Chart from '../../components/chart/Chart';
import { userData } from '../../constants/chartData';
import WidgetSmall from '../../components/widgetSmall/WidgetSmall';
import WidgetBig from '../../components/widgetBig/WidgetBig';

const Home = () => {
  const title = 'User Analytics';
  
  return (
    <div className='home-container'>
        <FeaturedInfo />
        <Chart title={title} data={userData} xDataKey='name' dataKey='Active User' grid />
        <div className='homeWidgets'>
          <WidgetSmall />
          <WidgetBig />
        </div>
    </div>
  )
}

export default Home