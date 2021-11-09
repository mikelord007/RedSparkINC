import React from 'react';
import { Icon } from '@iconify/react'
import "../style.css";

const Trade = ({date,contact,count}) => {
    const D = new Date(date)
    return(
        <div className="tradehis-item">
                        <div className="tradehis-sub-item">{count}.</div>
                        <div className="tradehis-sub-item">{D.toLocaleDateString('pt-PT')}</div>
                        <div className="tradehis-sub-item">{contact}</div>
                        <div className="tradehis-sub-item"><button><Icon icon="bx:bx-dots-horizontal-rounded" color="black" height="34" /></button>
                        </div>
       </div>
    )
}

export default Trade;