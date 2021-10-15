import React from 'react'
import CustomGreenBtn from './CustomGreenBtn';
import './WelcomeComponentsStyle.css';
const Item = () => {
    return (   
                <tr className='item'>
                <td>manu</td>
                <td>2.1 Spark</td>
                <td> $10 </td>
                <td> 6-12 <br/>days</td>
                <td> <CustomGreenBtn text={"rent"} /> </td>
                </tr>
    )
}

export default Item
