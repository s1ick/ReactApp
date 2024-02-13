import React from "react";
import Button from '@mui/material/Button';

const MyButton = ({children, ...props}) => {
    return (
        <div>
            <Button variant="contained" {...props}>
                {children}
            </Button>
        </div>
    )
}
export default MyButton;