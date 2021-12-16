import React from 'react'
import CustomGreenBtn from './CustomGreenBtn';
import './WelcomeComponentsStyle.css';
const Item = ({name, amount, rate, days, currency}) => {
    return (   
                <tr className='item'>
                <td className='home-item-name'>{name}</td>
                <td className='home-item-amount'>{amount} Spark</td>
                <td className='home-item-rate'>{rate} {currency}</td>
                <td className='home-item-days'> {days} <br/>days</td>
                <td className='home-item-rent'><CustomGreenBtn content={"rent"} /> </td>
                </tr>
    )
}

export default Item
