import { IconButton, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import Person2Icon from "@mui/icons-material/Person2";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import InfoIcon from "@mui/icons-material/Info";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import PublicIcon from "@mui/icons-material/Public";
function Details() {
  return (
    <Paper
      sx={{ width: "280px", height: "400px", borderRadius: "10px", mt: 5 }}
    >
      <Stack direction="row" sx={{ ml: 2, mt: 2 }} spacing={2}>
        <IconButton>
          <Person2Icon />
        </IconButton>
        <Typography width={200} sx={{ color: "grey", mt: "12px" }}>
          191 Main St, Bar Harbor, ME 04609, United States
        </Typography>
      </Stack>
      <Stack direction="row" sx={{ ml: 2, mt: 2 }} spacing={2}>
        <IconButton>
          <LocalPhoneIcon />
        </IconButton>
        <Typography width={200} sx={{ color: "grey", mt: "12px" }}>
          092654 60634
        </Typography>
      </Stack>
      <Stack direction="row" sx={{ ml: 2, mt: 2 }} spacing={2}>
        <IconButton>
          <EmailIcon />
        </IconButton>
        <Typography width={200} sx={{ color: "grey", mt: "12px" }}>
          ericbrickey@gmail.com
        </Typography>
      </Stack>
      <Stack direction="row" sx={{ ml: 2, mt: 2 }} spacing={2}>
        <IconButton>
          <InfoIcon />
        </IconButton>
        <Typography width={200} sx={{ color: "grey", mt: "12px" }}>
          Edit description
        </Typography>
      </Stack>
      <Stack direction="row" sx={{ ml: 2, mt: 2 }} spacing={2}>
        <IconButton>
          <ThumbUpOffAltIcon />
        </IconButton>
        <Typography width={200} sx={{ color: "grey", mt: "12px" }}>
          331 people like this
        </Typography>
      </Stack>
      <Stack direction="row" sx={{ ml: 2, mt: 2 }} spacing={2}>
        <IconButton>
          <PublicIcon />
        </IconButton>
        <Typography width={200} sx={{ color: "grey", mt: "12px" }}>
          https://www.crema.com
        </Typography>
      </Stack>
    </Paper>
  );
}

export default Details;
