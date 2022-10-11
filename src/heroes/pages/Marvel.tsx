import { Box } from "@mui/material";
import React from "react";

import { HeroGrid } from "../components/HeroGrid";

export const Marvel = () => {
  return (
    <>
      <Box sx={{ p: 4 }}>
        <HeroGrid publisher="Marvel Comics" />
      </Box>
    </>
  );
};
