import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { logout } from './Authenticate';

const Header = () => {
  const name=JSON.parse(localStorage.getItem("user")).username;
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            ToDo
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Welcome Back, {name}
          </Typography>
          <Button color="inherit" onClick={()=>logout()}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header