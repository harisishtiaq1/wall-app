import { Paper, Typography } from "@mui/material";
import React from "react";

function Suggestions() {
  return (
    <Paper
      sx={{ width: "350px", height: "350px", borderRadius: "10px", mt: 5 }}
    >
      <Typography component="h6" variant="h6" sx={{ mt: 2, ml: 2 }}>
        Suggestions
      </Typography>
      
    </Paper>
  );
}

export default Suggestions;
