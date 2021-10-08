import React from 'react'

import UDfoot from '../UDfoot/UDfoot'
import UDnav from '../UDnav/UDnav'
import GreenBtn from '../GreenBtn/GreenBtn';
import { Icon } from '@iconify/react';
import { TextField } from '@mui/material';
import './style.css'


const UDcreatenew = () => {


    return(
        <>
            <UDnav username="Nociphe"/>
                <div id="UDcreatenew">
                    <div id="active-list">
                        <header><h2>Active Listings</h2></header>
                        <div id="listing-box">
                            <div className="CN-listing">
                                <div className="CN-sn">1.</div>
                                <div className="CN-amount">4.26 upx</div>
                                <div className="CN-days">2-4 days</div>
                                <div className="CN-more"><button><Icon icon="bx:bx-dots-horizontal-rounded" color="black" height="34" /></button></div>
                            </div>
                            <div className="CN-listing">
                                <div className="CN-sn">2.</div>
                                <div className="CN-amount">5.2 upx</div>
                                <div className="CN-days">0-5 days</div>
                                <div className="CN-more"><button><Icon icon="bx:bx-dots-horizontal-rounded" color="black" height="34" /></button></div>
                            </div>
                        </div>
                    </div>
                    <div id="create-new">
                        <header><h2>CREATE NEW</h2></header>
                        <div id="creation-section">
                            <form>
                            <TextField className="CN-input" id="Currency" label="Currency" type="text" style = {{}} variant="outlined" />
                                <TextField className="CN-input" id="Amount" label="Amount" type="text" variant="outlined" />
                                <TextField className="CN-input" id="Rate" label="Rate ( Per day Per spark )" type="text" variant="outlined" />
                                <TextField className="CN-input" id="Burner" label="Burner" type="text" variant="outlined" />
                                <TextField className="CN-input" id="Min" label="Min Period" type="text" variant="outlined" />
                                <TextField className="CN-input" id="Max" label="Max Period" type="text" variant="outlined" />
                            </form>
                        </div>
                        <GreenBtn id="CN-submit" content={"create"}/>
                    </div>
                </div>
            <UDfoot/>
        </>
    )
}

export default UDcreatenew;