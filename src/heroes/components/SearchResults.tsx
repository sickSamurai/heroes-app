import { Divider, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { useState } from 'react';

import { getHeroesByName } from '../helpers/heroesDAO';
import { useHeroQuery } from '../hooks/useHeroQuery';
import { HeroCard } from './HeroCard';
import { ResultAlert } from './ResultAlert';

export const SearchResults = () => {
  const { heroQuery } = useHeroQuery();

  let heroGrid: JSX.Element;
  let alert: JSX.Element;

  if (!heroQuery) alert = <ResultAlert variant="trySearch" />;
  else {
    const heroes = getHeroesByName(heroQuery);
    if (heroes.length === 0) alert = <ResultAlert variant="notFound" />;
    else {
      heroGrid = (
        <Grid container columns={4}>
          {heroes.map((hero, index) => (
            <Grid key={index} xs={1}>
              <HeroCard hero={hero} />
            </Grid>
          ))}
        </Grid>
      );
    }
  }

  return (
    <>
      <Typography variant="h4">Resultados</Typography>
      <Divider sx={{ my: 2 }} />
      {alert!}
      {heroGrid!}
    </>
  );
};
