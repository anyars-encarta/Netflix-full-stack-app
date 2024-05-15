import React from 'react';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import './chart.scss';

const Chart = ({title, data, xDataKey, dataKey, grid}) => {
    return (
        <div className='chart-container'>
            <h3 className='chartTitle'>{title}</h3>

            <ResponsiveContainer width='100%' aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey={xDataKey} stroke='#5550bd' />
                    {/* <YAxis dataKey='name' /> */}
                    <Line type='monotone' dataKey={dataKey} stroke='#5550bd' />
                    <Tooltip />
                    {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray='5 5' />}
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart