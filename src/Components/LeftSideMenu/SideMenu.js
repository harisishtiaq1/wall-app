import {
  Avatar,
  AvatarGroup,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import React from "react";
import cairo from "../../assets/cairo.jpg";
import person2 from "../../assets/A5.jpg";
import person from "../../assets/A1.jpg";
import person1 from "../../assets/A2.jpg";
import person3 from "../../assets/A10.jpg";
import Details from "./Details";
import FaceBookDesign from "./FaceBookDesign";
import Suggestions from "./Suggestions";
import Scrollbars from "react-custom-scrollbars";
const styles = {
  avatar: {
    width: 24,
    height: 24,
    fontSize: "0.8rem",
  },
};
function SideMenu() {
  const thumbStyle = {
    backgroundColor: "#888",
    borderRadius: "6px",
    cursor: "pointer",
    width: "4px",
    height: "20px",
    mt: 8, // Set the height of the scrollbar thumb
  };
  return (
    <Scrollbars
      style={{ width: 290, height: 490 }}
      autoHide={true}
      renderThumbVertical={({ style, ...props }) => (
        <div {...props} style={{ ...style, ...thumbStyle }} />
      )}
    >
      <Stack direction="column">
        <Paper sx={{ width: "280px", height: "500px", borderRadius: "15px" }}>
          <Card sx={{ maxWidth: 350 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="100"
                image={cairo}
                alt="green iguana"
              />
            </CardActionArea>
          </Card>
          <Avatar
            sx={{
              border: "5px solid rgb(255, 255, 255)",
              marginBottom: "10px",
              width: "84px",
              height: "84px",
              marginTop: "-42px",
              marginLeft: "90px",
              position: "relative",
              display: "flex",
              webkitBoxAlign: "center",
              alignItems: "center",
              webkitBoxPack: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <img
              src={person2}
              alt="Person"
              style={{
                maxWidth: "100%",
                width: "100%",
                height: "100%",
                textAlign: "center",
                objectFit: "cover",
                color: "transparent",
                textIndent: "10000px",
              }}
            />
          </Avatar>
          <Stack
            direction="column"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Typography component="h3" variant="h6" sx={{ fontSize: "16px" }}>
              Eric Brickey
            </Typography>
            <Typography
              component="p"
              variant="p"
              sx={{ color: "grey", fontSize: "14px" }}
            >
              Oslo,Norway
            </Typography>
            <Typography
              component="h3"
              variant="p"
              sx={{ mt: 2, fontSize: "13px" }}
            >
              8 Mutual Friends
            </Typography>
            <AvatarGroup sx={{ mt: 3 }}>
              <Avatar alt="Remy Sharp" src={person2} style={styles.avatar} />
              <Avatar alt="Travis Howard" src={person} style={styles.avatar} />
              <Avatar alt="Cindy Baker" src={person1} style={styles.avatar} />
              <Avatar alt="Agnes Walker" src={person3} style={styles.avatar} />
              <Avatar
                alt="Trevor Henderson"
                src={person}
                style={styles.avatar}
              />
            </AvatarGroup>
            <Button
              variant="contained"
              sx={{
                mt: 2,
                borderRadius: "10px",
                padding: "7px",
                fontSize: "10px",
              }}
              startIcon={<LocalPhoneIcon />}
            >
              Group Call
            </Button>
            <Button
              variant="outlined"
              sx={{
                mt: 2,
                borderRadius: "10px",
                padding: "7px",
                fontSize: "10px",
              }}
              startIcon={<VideocamIcon />}
            >
              Video Call
            </Button>
          </Stack>
        </Paper>
        <Details />
        <FaceBookDesign />
        <Suggestions />
      </Stack>
    </Scrollbars>
  );
}

export default SideMenu;
