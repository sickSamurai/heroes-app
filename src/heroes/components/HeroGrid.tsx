import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";

import { getHeroesByPublisher } from "../helpers/heroesDAO";
import { HeroCard } from "./HeroCard";

type Props = {
  publisher: string;
};

export const HeroGrid = ({ publisher }: Props) => {
  const [heroList] = useState(getHeroesByPublisher(publisher));

  return (
    <>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        columns={6}
        className="animate__animated animate__fadeIn">
        {heroList.map((hero, index) => (
          <Grid xs={1} key={index}>
            <HeroCard hero={hero} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
