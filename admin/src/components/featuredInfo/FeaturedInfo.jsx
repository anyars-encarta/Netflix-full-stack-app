import React, { useState } from 'react';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import './featuredInfo.scss';

const FeaturedInfo = () => {
    const [rate, setRate] = useState(-5);

    return (
        <div className='featured'>
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,145</span>
                    <span className="featuredMoneyRate">
                        -11.4 {rate > 0 ? <ArrowUpward className='featuredIcon' /> : <ArrowDownward className='featuredIcon negative'/>}
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$4,415</span>
                    <span className="featuredMoneyRate">
                        -1.4 {rate > 0 ? <ArrowUpward className='featuredIcon' /> : <ArrowDownward className='featuredIcon negative' />}
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,225</span>
                    <span className="featuredMoneyRate">
                        +2.3 {rate > 0 ? <ArrowUpward className='featuredIcon' /> : <ArrowDownward className='featuredIcon negative' />}
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        </div>
    )
}

export default FeaturedInfo