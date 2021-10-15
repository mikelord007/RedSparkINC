import React from 'react';
import Item from './Item';
import './WelcomeComponentsStyle.css';
const Listing = () => {
    return (
        <table className='listing'>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        
        </table>
    );
}

export default Listing;