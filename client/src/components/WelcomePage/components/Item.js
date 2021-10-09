import React from 'react'
import CustomGreenBtn from './CustomGreenBtn';
import './styles.css';
const Item = () => {
    return (
        <table className="items">    
                <tr>
                <td>manu</td>
                <td>2.1 Spark</td>
                <td> $10 </td>
                <td> 6-12 <br/>days</td>
                <td> <CustomGreenBtn text={"rent"} /> </td>
                </tr>
        </table>
    )
}

export default Item
