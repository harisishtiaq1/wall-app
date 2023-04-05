import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import SideMenu from '../SideMenu/SideMenu'
// import NewsFeed from '../NewsFeed/NewsFeed'

function Navbar() {
  return (
    <>
    <AppBar position='fixed' sx={{backgroundColor:"blueviolet"}}>
        <Toolbar>
            <Typography>
                Wall App
            </Typography>
        </Toolbar>
    </AppBar>
    {/* <NewsFeed/> */}
    <SideMenu/>
    </>
  )
}

export default Navbar