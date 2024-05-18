import React from 'react';
import './home.scss';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import Chart from '../../components/chart/Chart';
// import { userData } from '../../constants/chartData';
import WidgetSmall from '../../components/widgetSmall/WidgetSmall';
import WidgetBig from '../../components/widgetBig/WidgetBig';
import { useEffect, useMemo, useState } from "react";
import axios from 'axios';

const Home = () => {
  const title = 'User Analytics';
  
  const MONTHS = useMemo(() =>
    [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ], []
  );

  const [userStats, setUserStats] = useState([]);

  const getStats = async () => {
    try {
      const res = await axios.get("/users/stats", {
        headers: {
          token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2M2Y1MTNhMTAxMmFhY2IwODY4MDM0NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxNjAyNDYwMCwiZXhwIjoxNzE2NDU2NjAwfQ.rBeS1HDXljBTqgO6lSxIOxi_kRDMMY-zmpSXzGOGu6Y"
        },
      });

      const statsList = res.data.sort(function (a, b) {
        return a._id - b._id;
      });

      statsList.map((item) => 
        setUserStats((prev) => [...prev, { name: MONTHS[item._id - 1], "New User": item.total },])
      );
    } catch (e) {
      console.log(e)
    }
  };

  useEffect(() => {
    getStats();
  }, [MONTHS]);

  return (
    <div className='home-container'>
        <FeaturedInfo />
        <Chart title={title} data={userStats} xDataKey='name' dataKey='New User' grid />
        <div className='homeWidgets'>
          <WidgetSmall />
          <WidgetBig />
        </div>
    </div>
  )
}

export default Home