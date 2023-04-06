import {
  Card,
  CardActionArea,
  CardMedia,
  Link,
  Paper,
  Stack,
} from "@mui/material";
import React from "react";
import stories1 from "../../assets/stories2.jpg";
import TrendingInIndia from "./TrendingInIndia";
import WhoTOFollow from "./WhoTOFollow";
import Users from "./Users";
import Scrollbars from "react-custom-scrollbars";
function RightSideMenu() {
  return (
    <Scrollbars style={{ width: 390, height: 500 }} autoHide={true}>
      <Stack direction="column" sx={{ mt: 6, ml: 15}}>
        <Paper
          sx={{ width: "270px", height: "250px", borderRadius: "10px", mt: 3 }}
        >
          <Link
            href="#"
            underline="none"
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              mt: 2,
              mr: 3,
              color: "red",
            }}
          >
            View All
          </Link>
          <Stack direction="row" sx={{mt:2}} spacing={2}>
            <Card sx={{ maxWidth: 110, ml: 2 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="180"
                  image={stories1}
                  alt="green iguana"
                />
              </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 110, ml: 1 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="180"
                  image={stories1}
                  alt="green iguana"
                />
              </CardActionArea>
            </Card>
          </Stack>
        </Paper>
        <TrendingInIndia />
        <WhoTOFollow />
        <Users />
      </Stack>
    </Scrollbars>
  );
}

export default RightSideMenu;
