import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import CloseIcon from "@mui/icons-material/Close";
import UDfoot from '../../components/UDfoot/UDfoot'
import UDnav from '../../components/UDnav/UDnav';
import './style.css';
import TradeHistory from "./components/TradeHistory";
import { getTradeHist } from "../../actions/trade";
import { Alert, Snackbar } from "@mui/material";
import { Button } from "@material-ui/core";

const UDtradehist = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTradeHist());
    }, [dispatch]);

    //alerts
    const alerts = useSelector((state) => { return state.alerts; });
    const [open, setOpen] = useState(false)
    useEffect(() => {
        if (alerts.displayed !== true) {
            setOpen(true)
        }
    }, [alerts.displayed])
    const handleClose = (event) => {
        dispatch({ type: "noAlert" });
        setOpen(false);
    }

    const action = (
        <Button color="inherit" size="small" onClick={handleClose}>
            <CloseIcon fontSize='small' />
        </Button>
    )

    const loggedIn = useSelector((state) => state.auth.loggedIn);
    if (loggedIn === false) { return <Redirect to="/" /> }

    const username = JSON.parse(localStorage.getItem('profile')).uplandUsername
    const name = JSON.parse(localStorage.getItem('profile')).name

    return (
        <>
            <UDnav username={username} name={name} />
            <TradeHistory />
            <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                action={action}
            >
                <Alert sx={{
                    width: "100%",
                    backgroundColor: "white",
                    "& MuiPaper-root & MuiAlert-root": {
                        padding: "0"
                    }
                }
                }
                    onClose={handleClose}
                    variant="outlined"
                    severity={alerts.type}
                    action={action}
                >
                    {alerts.message}
                </Alert>
            </Snackbar>
            <UDfoot />
        </>
    )
}

export default UDtradehist;