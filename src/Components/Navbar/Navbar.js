import { AppBar, Grid, Toolbar, Typography } from "@mui/material";
import React from "react";
import SideMenu from "../LeftSideMenu/SideMenu";
import NewsFeed from "../NewsFeed/NewsFeed";
import RightSideMenu from "../RightSideMenu/RightSideMenu";

function Navbar() {
  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: "blueviolet" }}>
        <Toolbar>
          <Typography>Wall App</Typography>
        </Toolbar>
      </AppBar>
      <Grid container>
        <Grid item xs={12} sm={4}>
          <SideMenu />
        </Grid>
        <Grid item xs={12} sm={4}>
          <NewsFeed />
        </Grid>
        <Grid item xs={12} sm={4}>
          <RightSideMenu />
        </Grid>
      </Grid>
    </>
  );
}

export default Navbar;
