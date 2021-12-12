import React from 'react'
import CustomGreenBtn from './CustomGreenBtn';
import './WelcomeComponentsStyle.css';
const Item = ({name, amount, rate, days}) => {
    return (   
                <tr className='item'>
                <td>{name}</td>
                <td>{amount} Spark</td>
                <td>${rate}</td>
                <td> {days} <br/>days</td>
                <td> <CustomGreenBtn content={"rent"} /> </td>
                </tr>
    )
}

export default Item
