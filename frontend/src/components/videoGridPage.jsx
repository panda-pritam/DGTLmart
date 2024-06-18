import { useState, useEffect } from "react";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import GenerateGridItem from "./genrateGridItem";

export default function VideosGrid({ list, loading }) {
  return (
    <div>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>Data is loading....</h1>
          <CircularProgress />
        </Box>
      ) : (
        <Grid
          container
          spacing={{ xs: 1, md: 1 }}
          // gap={{ xs: 1, md: 1 }}
          columns={{ xs: 1, sm: 8, md: 12 }}
        >
          <GenerateGridItem list={list} />
        </Grid>
      )}
    </div>
  );
}
