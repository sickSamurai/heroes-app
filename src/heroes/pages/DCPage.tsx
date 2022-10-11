import { Box } from "@mui/material";

import { HeroGrid } from "../components/HeroGrid";

export const DCPage = () => {
  return (
    <>
      <Box sx={{ p: 4 }}>
        <HeroGrid publisher="DC Comics" />
      </Box>
    </>
  );
};
