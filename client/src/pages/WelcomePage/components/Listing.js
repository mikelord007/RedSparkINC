import React from 'react';
import Item from './Item';
import './WelcomeComponentsStyle.css';
const Listing = () => {
    return (
        <table className='listing'>
        <tbody className="table-body" style={{}}>
        <Item name={'Peter'} amount={3} rate={100} days={'3 - 10'}/>
        <Item name={'baconguy'} amount={4.2} rate={10} days={'1 - 4'}/>
        <Item name={'Nociphe'} amount={5} rate={220} days={'2 - 19'}/>
        <Item name={'Jung'} amount={2} rate={110} days={'8 - 10'}/>
        <Item name={'Mark'} amount={5} rate={300} days={'9 - 11'}/>
        <Item name={'mike007'} amount={4} rate={240} days={'0 - 3'}/>
        </tbody>
        </table>
    );
}

export default Listing;