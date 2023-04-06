import { Box, Link, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import person from "../../assets/A1.jpg";
import person1 from "../../assets/A2.jpg";
import person2 from "../../assets/A5.jpg";
import person3 from "../../assets/A10.jpg";
function Users() {
  return (
    <Paper
      sx={{ width: "270px", height: "300px", borderRadius: "10px", mt: 5 }}
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
          src={person}
          sx={{
            mr: 1,
            width: "40px",
            height: "40px",
            borderRadius: "12px",
            ml: 3,
            mt: 1,
          }}
        />
        <Stack direction="column" sx={{ mt: 1 }}>
          <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
            Sarah Taylor
          </Typography>
          <Typography sx={{ fontSize: "13px", color: "grey" }}>
            12 Minutes Ago
          </Typography>
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
              ml: 3,
              mt: 1,
            }}
          />
          <Stack direction="column" sx={{ mt: 1 }}>
            <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
              Johna Say
            </Typography>
          </Stack>
        </Stack>
        <Stack>
          <Typography sx={{ fontSize: "13px", color: "grey", mt: 1, mr: 1 }}>
            12 Minutes Ago
          </Typography>
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
              ml: 3,
              mt: 1,
            }}
          />
          <Stack direction="column" sx={{ mt: 1 }}>
            <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
              Nikunj Lee
            </Typography>
            <Typography sx={{ fontSize: "13px", color: "grey" }}>
              12 Minutes Ago
            </Typography>
          </Stack>
        </Stack>
        <Stack>
          <Typography></Typography>
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

              ml: 3,
              mt: 1,
            }}
          />
          <Stack direction="column" sx={{ mt: 1 }}>
            <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
              Kennie Sebestian
            </Typography>
            <Typography sx={{ fontSize: "13px", color: "grey" }}>
              12 Minutes Ago
            </Typography>
          </Stack>
        </Stack>
        <Stack>
          <Typography></Typography>
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
              ml: 3,
              mt: 1,
            }}
          />
          <Stack direction="column" sx={{ mt: 1 }}>
            <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
              Bose Warne
            </Typography>
            <Typography sx={{ fontSize: "13px", color: "grey" }}>
              12 Minutes Ago
            </Typography>
          </Stack>
        </Stack>
        <Stack>
          <Typography></Typography>
        </Stack>
      </Stack>
    </Paper>
  );
}

export default Users;
