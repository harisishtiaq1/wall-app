import { Box, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import suggestion from "../../assets/suggestion.png";
function Suggestions() {
  return (
    <Paper
      sx={{ width: "350px", height: "450px", borderRadius: "10px", mt: 5 }}
    >
      <Typography component="h6" variant="h6" sx={{ mt: 2, ml: 2 }}>
        Suggestions
      </Typography>
      <Stack direction="row">
        <Box
          component="img"
          src={suggestion}
          sx={{
            mr: 1,
            width: "50px",
            height: "50px",
            borderRadius: "12px",
            ml: 3,
            mt: 1,
          }}
        />
        <Stack direction="column">
          <Typography>FaceBook Design</Typography>
          <Typography>
            It is a long established fact that a user will be diverted
          </Typography>
        </Stack>
      </Stack>
      <Stack direction="row">
        <Box
          component="img"
          src={suggestion}
          sx={{
            mr: 1,
            width: "50px",
            height: "50px",
            borderRadius: "12px",
            ml: 3,
            mt: 1,
          }}
        />
        <Stack direction="column">
          <Typography>React Developers</Typography>
          <Typography>
            It is a long established fact that a user will be diverted
          </Typography>
        </Stack>
      </Stack>
      <Stack direction="row">
        <Box
          component="img"
          src={suggestion}
          sx={{
            mr: 1,
            width: "50px",
            height: "50px",
            borderRadius: "12px",
            ml: 3,
            mt: 1,
          }}
        />
        <Stack direction="column">
          <Typography>Buy & Sell</Typography>
          <Typography>
            It is a long established fact that a user will be diverted
          </Typography>
        </Stack>
      </Stack>
      <Stack direction="row">
        <Box
          component="img"
          src={suggestion}
          sx={{
            mr: 1,
            width: "50px",
            height: "50px",
            borderRadius: "12px",
            ml: 3,
            mt: 1,
          }}
        />
        <Stack direction="column">
          <Typography>All about travel</Typography>
          <Typography>
            It is a long established fact that a user will be diverted
          </Typography>
        </Stack>
      </Stack>
      <Stack direction="row">
        <Box
          component="img"
          src={suggestion}
          sx={{
            mr: 1,
            width: "50px",
            height: "50px",
            borderRadius: "12px",
            ml: 3,
            mt: 1,
          }}
        />
        <Stack direction="column">
          <Typography>JavaScript Lovers</Typography>
          <Typography>
            It is a long established fact that a user will be diverted
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
}

export default Suggestions;
