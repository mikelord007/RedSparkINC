import React from 'react';
import Item from './Item';
import './WelcomeComponentsStyle.css';
const Listing = () => {
    return (
        <table className='listing'>
        <tbody className="table-body" style={{}}>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        </tbody>
        </table>
    );
}

export default Listing;