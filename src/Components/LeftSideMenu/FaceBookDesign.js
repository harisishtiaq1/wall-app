import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  IconButton,
  Link,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import facebook from "../../assets/facebook.png";
import cairo from "../../assets/cairo.jpg";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
function FaceBookDesign() {
  return (
    <Paper
      sx={{ width: "280px", height: "350px", borderRadius: "10px", mt: 5 }}
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
        <Box
          component="img"
          src={facebook}
          sx={{
            mr: 1,
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            ml: 3,
            mt: 1,
          }}
        />
        <Stack direction="column">
          <Typography component="h6" variant="h6" sx={{ fontSize: "15px" }}>
            FaceBook Design
          </Typography>
          <Typography sx={{ fontSize: "12px" }}>Product Design</Typography>
        </Stack>
      </Stack>
      <Card sx={{ maxWidth: 350, mt: 4 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="150"
            image={cairo}
            alt="green iguana"
          />
        </CardActionArea>
      </Card>
      <Stack
        direction="row"
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <IconButton sx={{ color: "#91BCE7" }}>
          <ThumbUpOffAltIcon fontSize="small" />
        </IconButton>
        <Typography sx={{ color: "#91BCE7", fontSize: "14px" }}>
          Like Team
        </Typography>
      </Stack>
    </Paper>
  );
}

export default FaceBookDesign;
