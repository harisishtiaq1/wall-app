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
function RightSideMenu() {
  return (
    <Stack direction="column" sx={{ mt: 8, ml: 15 }}>
      <Paper
        sx={{ width: "270px", height: "250px", borderRadius: "10px", mt: 5 }}
      >
        <Link
          href="#"
          underline="none"
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            mt: 3,
            mr: 3,
            color: "red",
          }}
        >
          View All
        </Link>
        <Stack direction="row">
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
  );
}

export default RightSideMenu;
