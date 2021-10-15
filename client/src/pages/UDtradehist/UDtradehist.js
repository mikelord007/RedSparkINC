import React from "react";
import { Icon } from '@iconify/react'

import UDfoot from '../../components/UDfoot/UDfoot'
import UDnav from '../../components/UDnav/UDnav'
import './style.css'

const UDtradehist = () => {

    return(
        <>
            <UDnav username={`nochiphe`}/>
                <div id="UDtradehist">
                    <div id="tradehead">Trade History</div>
                    <div id="trade-main">
                    <div className="tradehis-item">
                        <div className="tradehis-sub-item">1.</div>
                        <div className="tradehis-sub-item">12/2/21</div>
                        <div className="tradehis-sub-item">Baconguy</div>
                        <div className="tradehis-sub-item"><button><Icon icon="bx:bx-dots-horizontal-rounded" color="black" height="34" /></button>
                        </div>
                    </div>
                    <div className="tradehis-item">
                        <div className="tradehis-sub-item">2.</div>
                        <div className="tradehis-sub-item">12/2/21</div>
                        <div className="tradehis-sub-item">Baconguy</div>
                        <div className="tradehis-sub-item"><button><Icon icon="bx:bx-dots-horizontal-rounded" color="black" height="34" /></button>
                        </div>
                    </div>
                    <div className="tradehis-item">
                        <div className="tradehis-sub-item">3.</div>
                        <div className="tradehis-sub-item">12/2/21</div>
                        <div className="tradehis-sub-item">Baconguy</div>
                        <div className="tradehis-sub-item"><button><Icon icon="bx:bx-dots-horizontal-rounded" color="black" height="34" /></button>
                        </div>
                    </div>
                    <div className="tradehis-item">
                        <div className="tradehis-sub-item">4.</div>
                        <div className="tradehis-sub-item">12/2/21</div>
                        <div className="tradehis-sub-item">Baconguy</div>
                        <div className="tradehis-sub-item"><button><Icon icon="bx:bx-dots-horizontal-rounded" color="black" height="34" /></button>
                        </div>
                    </div>
                    <div className="tradehis-item">
                        <div className="tradehis-sub-item">5.</div>
                        <div className="tradehis-sub-item">12/2/21</div>
                        <div className="tradehis-sub-item">Baconguy</div>
                        <div className="tradehis-sub-item"><button><Icon icon="bx:bx-dots-horizontal-rounded" color="black" height="34" /></button>
                        </div>
                    </div>
                    <div className="tradehis-item">
                        <div className="tradehis-sub-item">6.</div>
                        <div className="tradehis-sub-item">12/2/21</div>
                        <div className="tradehis-sub-item">Baconguy</div>
                        <div className="tradehis-sub-item"><button><Icon icon="bx:bx-dots-horizontal-rounded" color="black" height="34" /></button>
                        </div>
                    </div>
                    <div className="tradehis-item">
                        <div className="tradehis-sub-item">7.</div>
                        <div className="tradehis-sub-item">12/2/21</div>
                        <div className="tradehis-sub-item">Baconguy</div>
                        <div className="tradehis-sub-item"><button><Icon icon="bx:bx-dots-horizontal-rounded" color="black" height="34" /></button>
                        </div>
                    </div>
                    <div className="tradehis-item">
                        <div className="tradehis-sub-item">8.</div>
                        <div className="tradehis-sub-item">12/2/21</div>
                        <div className="tradehis-sub-item">Baconguy</div>
                        <div className="tradehis-sub-item"><button><Icon icon="bx:bx-dots-horizontal-rounded" color="black" height="34" /></button>
                        </div>
                    </div>
                    <div className="tradehis-item">
                        <div className="tradehis-sub-item">9.</div>
                        <div className="tradehis-sub-item">12/2/21</div>
                        <div className="tradehis-sub-item">Baconguy</div>
                        <div className="tradehis-sub-item"><button><Icon icon="bx:bx-dots-horizontal-rounded" color="black" height="34" /></button>
                        </div>
                    </div>
                    <div className="tradehis-item">
                        <div className="tradehis-sub-item">10.</div>
                        <div className="tradehis-sub-item">12/2/21</div>
                        <div className="tradehis-sub-item">Baconguy</div>
                        <div className="tradehis-sub-item"><button><Icon icon="bx:bx-dots-horizontal-rounded" color="black" height="34" /></button>
                        </div>
                    </div>
                    </div>
                </div>
            <UDfoot/>
        </>
    )
}

export default UDtradehist;