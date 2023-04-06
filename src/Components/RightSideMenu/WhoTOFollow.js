import { Box, Button, Link, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import person from "../../assets/A1.jpg";
import person1 from "../../assets/A2.jpg";
import person2 from "../../assets/A5.jpg";
import person3 from "../../assets/A10.jpg";
function WhoTOFollow() {
  return (
    <Paper
      sx={{ width: "270px", height: "450px", borderRadius: "10px", mt: 5 }}
    >
      <Stack
        direction="row"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Typography sx={{ fontWeight: "bold", mt: 2, ml: 2 }}>
          Who To Follow
        </Typography>
        <Link
          href="#"
          underline="none"
          sx={{
            mt: 2,
            mr: 2,
            color: "red",
          }}
        >
          View All
        </Link>
      </Stack>
      <Stack
        direction="row"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Stack direction="row">
          <Box
            component="img"
            src={person}
            sx={{
              mr: 1,
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              ml: 2,
              mt: 1,
            }}
          />
          <Stack direction="column" sx={{ mt: 1 }}>
            <Typography sx={{ fontSize: "13px", width: "20px" }}>
              Annette Black
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "grey" }}>
              @Annette_Black
            </Typography>
          </Stack>
        </Stack>
        <Stack>
          <Button
            variant="outlined"
            sx={{ borderRadius: "20px", width: "70px", mt: 1, mr: 1 }}
          >
            Follow
          </Button>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Stack direction="row">
          <Box
            component="img"
            src={person1}
            sx={{
              mr: 1,
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              ml: 2,
              mt: 1,
            }}
          />
          <Stack direction="column" sx={{ mt: 1 }}>
            <Typography sx={{ fontSize: "13px", width: "20px" }}>
              Ralph Edwards
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "grey" }}>
              @Ralph_Edwards
            </Typography>
          </Stack>
        </Stack>
        <Stack>
          <Button
            variant="outlined"
            sx={{ borderRadius: "20px", width: "70px", mt: 1, mr: 1 }}
          >
            Follow
          </Button>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Stack direction="row">
          <Box
            component="img"
            src={person2}
            sx={{
              mr: 1,
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              ml: 2,
              mt: 1,
            }}
          />
          <Stack direction="column" sx={{ mt: 1 }}>
            <Typography sx={{ fontSize: "13px", width: "20px" }}>
              Bessie Cooper
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "grey" }}>
              @Bessie_Cooper
            </Typography>
          </Stack>
        </Stack>
        <Stack>
          <Button
            variant="outlined"
            sx={{ borderRadius: "20px", width: "70px", mt: 1, mr: 1 }}
          >
            Follow
          </Button>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Stack direction="row">
          <Box
            component="img"
            src={person3}
            sx={{
              mr: 1,
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              ml: 2,
              mt: 1,
            }}
          />
          <Stack direction="column" sx={{ mt: 1 }}>
            <Typography sx={{ fontSize: "13px", width: "20px" }}>
              Wade Warren
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "grey" }}>
              @Wade_Warren
            </Typography>
          </Stack>
        </Stack>
        <Stack>
          <Button
            variant="outlined"
            sx={{ borderRadius: "20px", width: "70px", mt: 1, mr: 1 }}
          >
            Follow
          </Button>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Stack direction="row">
          <Box
            component="img"
            src={person}
            sx={{
              mr: 1,
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              ml: 2,
              mt: 1,
            }}
          />
          <Stack direction="column" sx={{ mt: 1 }}>
            <Typography sx={{ fontSize: "13px", width: "20px" }}>
              Robert Fox
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "grey" }}>
              @Robert_Fox
            </Typography>
          </Stack>
        </Stack>
        <Stack>
          <Button
            variant="outlined"
            sx={{ borderRadius: "20px", width: "70px", mt: 1, mr: 1 }}
          >
            Follow
          </Button>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Stack direction="row">
          <Box
            component="img"
            src={person2}
            sx={{
              mr: 1,
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              ml: 2,
              mt: 1,
            }}
          />
          <Stack direction="column" sx={{ mt: 1 }}>
            <Typography sx={{ fontSize: "13px", width: "20px" }}>
              Huawei Europe
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "grey" }}>
              @Huawei_Europe
            </Typography>
          </Stack>
        </Stack>
        <Stack>
          <Button
            variant="outlined"
            sx={{ borderRadius: "20px", width: "70px", mt: 1, mr: 1 }}
          >
            Follow
          </Button>
        </Stack>
      </Stack>
    </Paper>
  );
}

export default WhoTOFollow;
