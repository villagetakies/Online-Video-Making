import React from 'react'
import { Dialog, DialogTitle } from '@material-ui/core';
import "./Popup.css";
import { Grow } from '@material-ui/core';
function PopUp(props) {

    const {title,size,children,openPopup} = props;

    return (
            <Dialog  open={openPopup} fullWidth={true} maxWidth={size} disableBackdropClick={true} disableEscapeKeyDown={true} TransitionComponent={Grow}>
                <DialogTitle >
                    {title}
                </DialogTitle>
                {children}
            </Dialog>
    )
}

export default PopUp;