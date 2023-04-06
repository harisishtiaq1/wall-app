import { Box, IconButton, Link, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import suggestion from "../../assets/suggestion.png";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
function TrendingInIndia() {
  return (
    <Paper
      sx={{ width: "270px", height: "350px", borderRadius: "10px", mt: 5 }}
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
      <Stack
        direction="row"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Stack direction="row">
          <Box
            component="img"
            src={suggestion}
            sx={{
              mr: 1,
              width: "40px",
              height: "40px",
              borderRadius: "12px",
              ml: 3,
              mt: 1,
            }}
          />
          <Stack direction="column" sx={{mt:1}}>
            <Typography sx={{ fontSize: "10px", color: "grey" }}>
              Trending In India
            </Typography>
            <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>
              Covid-19 Live
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "blue" }}>
              #Sanam #Nisha
            </Typography>
          </Stack>
        </Stack>
        <Stack>
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Stack direction="row">
          <Box
            component="img"
            src={suggestion}
            sx={{
              mr: 1,
              width: "40px",
              height: "40px",
              borderRadius: "12px",
              ml: 3,
              mt: 1,
            }}
          />
          <Stack direction="column" sx={{mt:1}}>
            <Typography sx={{ fontSize: "10px", color: "grey" }}>
              Trending In India
            </Typography>
            <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>
              Covid-19 Live
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "blue" }}>
              #Sanam #Nisha
            </Typography>
          </Stack>
        </Stack>
        <Stack>
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Stack direction="row">
          <Box
            component="img"
            src={suggestion}
            sx={{
              mr: 1,
              width: "40px",
              height: "40px",
              borderRadius: "12px",
              ml: 3,
              mt: 1,
            }}
          />
          <Stack direction="column" sx={{mt:1}}>
            <Typography sx={{ fontSize: "10px", color: "grey" }}>
              Trending In India
            </Typography>
            <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>
              Covid-19 Live
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "blue" }}>
              #Sanam #Nisha
            </Typography>
          </Stack>
        </Stack>
        <Stack>
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Stack direction="row">
          <Box
            component="img"
            src={suggestion}
            sx={{
              mr: 1,
              width: "40px",
              height: "40px",
              borderRadius: "12px",
              ml: 3,
              mt: 1,
            }}
          />
          <Stack direction="column" sx={{mt:1}}>
            <Typography sx={{ fontSize: "10px", color: "grey" }}>
              Trending In India
            </Typography>
            <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>
              Covid-19 Live
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "blue" }}>
              #Sanam #Nisha
            </Typography>
          </Stack>
        </Stack>
        <Stack>
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Stack direction="row">
          <Box
            component="img"
            src={suggestion}
            sx={{
              mr: 1,
              width: "40px",
              height: "40px",
              borderRadius: "12px",
              ml: 3,
              mt: 1,
            }}
          />
          <Stack direction="column" sx={{mt:1}}>
            <Typography sx={{ fontSize: "10px", color: "grey" }}>
              Trending In India
            </Typography>
            <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>
              Covid-19 Live
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "blue" }}>
              #Sanam #Nisha
            </Typography>
          </Stack>
        </Stack>
        <Stack>
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        </Stack>
      </Stack>
    </Paper>
  );
}

export default TrendingInIndia;
