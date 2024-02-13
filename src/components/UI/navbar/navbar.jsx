import React from "react";
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MyButton from "../button/MyButton";

const Navbar = () => {
    return (
      <AppBar position="static" style ={{padding:'0px,0px,0px,0px'}}>
        <Toolbar>
          <Link to="/about">
            <MyButton>
            О сайте
            </MyButton>
            </Link>
          <Link to="/posts">
          <MyButton>
            Посты
            </MyButton>
            </Link>
        </Toolbar>
      </AppBar>

    )
}
export default Navbar;