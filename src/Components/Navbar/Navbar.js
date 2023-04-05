import { AppBar, Grid, Toolbar, Typography } from '@mui/material'
import React from 'react'
import SideMenu from '../LeftSideMenu/SideMenu'
import NewsFeed from '../NewsFeed/NewsFeed'
import RightSideMenu from '../RightSideMenu/RightSideMenu'

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
    {/* <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
    <SideMenu/>
    </Grid>
    <Grid item xs={12} sm={4}>
    <NewsFeed/>
    </Grid>
    </Grid> */}
    <RightSideMenu/>
    </>
  )
}

export default Navbar