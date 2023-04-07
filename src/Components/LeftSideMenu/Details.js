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
          <Person2Icon fontSize="small" />
        </IconButton>
        <Typography sx={{ color: "grey", fontSize: "12px",mt:4 }}>
          191 Main St, Bar Harbor, ME 04609, United States
        </Typography>
      </Stack>
      <Stack direction="row" sx={{ ml: 2, mt: 2 }} spacing={2}>
        <IconButton>
          <LocalPhoneIcon fontSize="small" />
        </IconButton>
        <Typography  sx={{ color: "grey", fontSize: "12px",mt:2 }}>
          092654 60634
        </Typography>
      </Stack>
      <Stack direction="row" sx={{ ml: 2, mt: 2 }} spacing={2}>
        <IconButton>
          <EmailIcon fontSize="small" />
        </IconButton>
        <Typography  sx={{ color: "grey", fontSize: "12px",mt:2 }}>
          ericbrickey@gmail.com
        </Typography>
      </Stack>
      <Stack direction="row" sx={{ ml: 2, mt: 2 }} spacing={2}>
        <IconButton>
          <InfoIcon fontSize="small" />
        </IconButton>
        <Typography  sx={{ color: "grey", fontSize: "12px",mt:2 }}>
          Edit description
        </Typography>
      </Stack>
      <Stack direction="row" sx={{ ml: 2, mt: 2 }} spacing={2}>
        <IconButton fontSize="small">
          <ThumbUpOffAltIcon />
        </IconButton>
        <Typography  sx={{ color: "grey", fontSize: "12px",mt:2 }}>
          331 people like this
        </Typography>
      </Stack>
      <Stack direction="row" sx={{ ml: 2, mt: 2 }} spacing={2}>
        <IconButton fontSize="small">
          <PublicIcon />
        </IconButton>
        <Typography  sx={{ color: "grey", fontSize: "12px",mt:2 }}>
          https://www.crema.com
        </Typography>
      </Stack>
    </Paper>
  );
}

export default Details;
