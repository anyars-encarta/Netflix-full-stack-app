import React from 'react';
import './widgetBig.scss';

const WidgetBig = () => {
  const Button = ({type}) => {
    return <button className={'widgetBigButton ' + type}>{type}</button>
  };

  return (
    <div className='widgetBig'>
      <h3 className="widgetBigTitle">Latest Transactions</h3>
      <table className="widgetBigTable">
        <tr className="widgetBigTr">
          <th className="widgetBigTh">Customer</th>
          <th className="widgetBigTh">Date</th>
          <th className="widgetBigTh">Amount</th>
          <th className="widgetBigTh">Status</th>
        </tr>

        <tr className="widgetBigTr">
          <td className="widgetBigUser">
            <img src="/images/profile.jpg" alt="" className="widgetBigImage" />
            <span className="widgetBigName">John Doe</span>
          </td>

          <td className="widgetBigDate">2 Jun 2022</td>
          <td className="widgetBigAmount">$250.00</td>
          <td className="widgetBigStatus"><Button type='Approved' /></td>
        </tr>

        <tr className="widgetBigTr">
          <td className="widgetBigUser">
            <img src="/images/profile.jpg" alt="" className="widgetBigImage" />
            <span className="widgetBigName">Maxwell Fisher</span>
          </td>

          <td className="widgetBigDate">1 Aug 2021</td>
          <td className="widgetBigAmount">$380.00</td>
          <td className="widgetBigStatus"><Button type='Pending' /></td>
        </tr>

        <tr className="widgetBigTr">
          <td className="widgetBigUser">
            <img src="/images/profile.jpg" alt="" className="widgetBigImage" />
            <span className="widgetBigName">Alice Coleman</span>
          </td>

          <td className="widgetBigDate">23 Feb 2022</td>
          <td className="widgetBigAmount">$640.00</td>
          <td className="widgetBigStatus"><Button type='Approved' /></td>
        </tr>

        <tr className="widgetBigTr">
          <td className="widgetBigUser">
            <img src="/images/profile.jpg" alt="" className="widgetBigImage" />
            <span className="widgetBigName">Morgan Freeman</span>
          </td>

          <td className="widgetBigDate">17 Nov 2021</td>
          <td className="widgetBigAmount">$650.00</td>
          <td className="widgetBigStatus"><Button type='Declined' /></td>
        </tr>

        <tr className="widgetBigTr">
          <td className="widgetBigUser">
            <img src="/images/profile.jpg" alt="" className="widgetBigImage" />
            <span className="widgetBigName">Sam Jacks</span>
          </td>

          <td className="widgetBigDate">21 Apr 2022</td>
          <td className="widgetBigAmount">$730.00</td>
          <td className="widgetBigStatus"><Button type='Approved' /></td>
        </tr>
      </table>
    </div>
  )
}

export default WidgetBig