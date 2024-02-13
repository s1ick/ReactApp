import React, { useState } from "react";
import cl from './MyModal.module.css'
import DialogTitle from '@mui/material/DialogTitle';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import { Button, DialogActions, DialogContent } from "@mui/material";
import MyButton from "../button/MyButton";

const MyModal = ({children, visible, setVisible, closePopup}) => {

    return (
        <Dialog open={openPopup} onClose={closepopup}>
            <DialogTitle>Создать пост</DialogTitle>
            <DialogContent>
                {children}         
            </DialogContent>
    </Dialog>

    )
}

export default MyModal;