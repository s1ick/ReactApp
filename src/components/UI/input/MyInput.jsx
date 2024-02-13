import React from "react";
import classes from './MyInput.module.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const MyInput = React.forwardRef((props, ref) => {
    return (
                <TextField ref={ref} className={classes.myInput} {...props}  id="outlined-basic" variant="outlined" />
        
    )
});
export default MyInput;